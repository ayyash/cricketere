
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { appProviders } from './app.config';
import { environment } from './environments/environment';
// import { platformFactory } from './app/services/config.service';

if (environment.production) {
  enableProdMode();
}




bootstrapApplication(AppComponent, {providers: appProviders});

