
import './app/core/logger.service';

import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
// WATCH: do i need this?
// export { renderModule, renderModuleFactory } from '@angular/platform-server';
