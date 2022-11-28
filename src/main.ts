
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});



// bootstrapApplication(AppComponent, {
//   providers: [
//     // pass the routes from existin RouteModule
//     { provide: LOCALE_ID, useClass: LocaleId },
//     { provide: APP_BASE_HREF, useClass: RootHref },
//     ...CoreProviders,
//     ...AppRouteProviders,
//     // {
//     //     provide: PLATFORM_INITIALIZER,
//     //     useFactory: platformFactory,
//     //     multi: true,
//     // }

//   ],
// });

