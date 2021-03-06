
import { enableProdMode, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from './app/app.browser.module';
import { environment } from './environments/environment';
// import { platformFactory } from './app/services/config.service';

if (environment.production) {
    enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic(
    // PLATFORMINIT: use this for static injected config
    //    [
    //     {
    //         provide: PLATFORM_INITIALIZER,
    //         useFactory: platformFactory,
    //         multi: true,
    //     }
    // ]
    )
        .bootstrapModule(AppBrowserModule)
        .catch(err => console.log(err));
});
