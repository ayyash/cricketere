
import { APP_ID, LOCALE_ID, enableProdMode, importProvidersFrom } from '@angular/core';
// import { ngExpressEngine } from '@nguniversal/express-engine';
import 'zone.js';

import { APP_BASE_HREF } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { CommonEngine, CommonEngineRenderOptions } from '@angular/ssr';
import { AppComponent } from './src/app/app.component';
import { CoreProviders } from './src/app/core/core.module';
import { LocaleId, RootHref } from './src/app/core/resources';
import { AppRouteProviders } from './src/app/routing.module';
import { environment } from './src/environments/environment';

// following lines is for prerender to work
// export { renderModule } from '@angular/platform-server';
// export { AppServerModule } from './src/app/app.server.module';

// export { CommonEngine } from '@angular/ssr';


const _app = () => bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ServerModule),
    // pass the routes from existin RouteModule
    { provide: LOCALE_ID, useClass: LocaleId },
    { provide: APP_BASE_HREF, useClass: RootHref },
    { provide: APP_ID, useValue: 'cricketere' },
    ...CoreProviders,
    ...AppRouteProviders
  ],
});

// create engine
const engine = new CommonEngine({ bootstrap: _app });

// express engine
export function crExpressEgine(
  filePath: string,
  options: object,
  callback: (err?: Error | null, html?: string) => void,
) {
  try {
    // we'll grab the options from external call in express
    const renderOptions = { ...options } as CommonEngineRenderOptions;

    // the url is the only option we should no longer set in Angular, so we'll set in Express route

    // this may be overrwitten, but I don't wish to, it will be the first argument of the express "render"
    renderOptions.documentFilePath = filePath;

    // the options contain settings.view value which is set by app.set('views', 'client'); in Express server
    renderOptions.publicPath = (options as any).settings?.views;

    // an old feature that was never documented, now it is, inlineCriticalCss

    engine
      .render(renderOptions)
      .then((html) => callback(null, html))
      .catch(callback);
  } catch (err) {
    callback(err);
  }
};
// }

// export AppEngine
if (environment.production) {
  enableProdMode();
}

