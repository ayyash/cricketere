
import { APP_ID, LOCALE_ID, enableProdMode, importProvidersFrom } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import 'zone.js/dist/zone-node';
// import { platformFactory } from './src/app/services/config.service';
import { APP_BASE_HREF } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './src/app/app.component';
import { CoreProviders } from './src/app/core/core.module';
import { LocaleId, RootHref } from './src/app/core/resources';
import { AppRouteProviders } from './src/app/routing.module';
import { environment } from './src/environments/environment';

// following lines is for prerender to work
// export { renderModule } from '@angular/platform-server';
// export { AppServerModule } from './src/app/app.server.module';



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

// export the bare minimum, let nodejs take care of everything else
export const AppEngine = ngExpressEngine({
  bootstrap: _app
});


if (environment.production) {
  enableProdMode();
}

