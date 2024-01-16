
import { enableProdMode } from '@angular/core';
import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { CommonEngine, CommonEngineRenderOptions } from '@angular/ssr';
import { appProviders } from './src/app.config';
import { AppComponent } from './src/app/app.component';
import { REQUEST, RESPONSE } from './src/app/core/server.token';
import { environment } from './src/environments/environment';

// following lines is for prerender to work
// export { renderApplication } from '@angular/platform-server';
// export { AppServerModule } from './src/app/app.server.module';

// const serverConfig: ApplicationConfig = {
//   providers: [
//     provideServerRendering()
//   ]
// };


const _app = () => bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    ...appProviders
  ]
}
);

// create engine
const engine = new CommonEngine({ bootstrap: _app });

export interface RenderOptions extends CommonEngineRenderOptions {
  req: Request;
  res?: Response;
  serverUrlPath: string;
}

// express engine
export function crExpressEgine(
  filePath: string,
  options: object,
  callback: (err?: Error | null, html?: string) => void,
) {
  try {
    // we'll grab the options from external call in express
    const renderOptions = { ...options } as RenderOptions;

    // the url is the only option we should no longer set in Angular, so we'll set in Express route

    // this may be overrwitten, but I don't wish to, it will be the first argument of the express "render"
    renderOptions.documentFilePath = filePath;

    // the options contain settings.view value which is set by app.set('views', 'client'); in Express server
    renderOptions.publicPath = (options as any).settings?.views;

    // an old feature that was never documented, now it is, inlineCriticalCss

    // append the new providers

    renderOptions.providers = [...(renderOptions.providers ?? []),
    {
      provide: 'SERVER_URL',
      useValue: renderOptions.serverUrlPath
    },
    {
      provide: REQUEST,
      useValue: renderOptions.req
    },
    {
      provide: RESPONSE,
      useValue: renderOptions.res
    }];

    engine
      .render(renderOptions)
      .then((html) => callback(null, html))
      .catch(callback);
  } catch (err) {
    callback(err);
  }
};

// export AppEngine
if (environment.production) {
  enableProdMode();
}

