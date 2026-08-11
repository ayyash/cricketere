import { LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { CoreProviders } from './app/core/core.module';
import { LocaleId } from './app/core/resources';
import { AppRouteProviders } from './app/routing.module';

export const appProviders = [
  provideBrowserGlobalErrorListeners(),
  provideZonelessChangeDetection(),
  // pass the routes from existin RouteModule
  { provide: LOCALE_ID, useClass: LocaleId },
  // { provide: APP_BASE_HREF, useClass: RootHref },
  // { provide: APP_ID, useValue: 'cricketere' },
  ...CoreProviders,
  ...AppRouteProviders,
  provideClientHydration(),

];

