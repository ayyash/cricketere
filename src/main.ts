
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, LOCALE_ID } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CoreProviders } from './app/core/core.module';
import { LocaleId, RootHref } from './app/core/resources';
import { AppRouteProviders } from './app/routing.module';

import { environment } from './environments/environment';
// import { platformFactory } from './app/services/config.service';

if (environment.production) {
  enableProdMode();
}

// document.addEventListener('DOMContentLoaded', () => {
//     platformBrowserDynamic(
//     // PLATFORMINIT: use this for static injected config
    //    [
    //     {
    //         provide: PLATFORM_INITIALIZER,
    //         useFactory: platformFactory,
    //         multi: true,
    //     }
    // ]
//     )
//         .bootstrapModule(AppBrowserModule)
//         .catch(err => console.log(err));
// });



bootstrapApplication(AppComponent, {
  providers: [
    // pass the routes from existin RouteModule
    { provide: LOCALE_ID, useClass: LocaleId },
    { provide: APP_BASE_HREF, useClass: RootHref },
    ...CoreProviders,
    ...AppRouteProviders,
    // {
    //     provide: PLATFORM_INITIALIZER,
    //     useFactory: platformFactory,
    //     multi: true,
    // }

  ],
});

