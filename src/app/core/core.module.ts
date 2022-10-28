import { ErrorHandler, APP_INITIALIZER, importProvidersFrom, ENVIRONMENT_INITIALIZER } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CricketereInterceptor } from './http';
import { LocalInterceptor } from './local.interceptor';
import { CricketereErrorHandler } from './error.service';
import { configFactory, ConfigService } from '../services/config.service';


export const CoreProviders = [
  importProvidersFrom(HttpClientModule),
  Title,
  {
    provide: APP_INITIALIZER,
    useFactory: configFactory,
    multi: true,
    deps: [ConfigService]
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LocalInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CricketereInterceptor,
    multi: true,
  },
  { provide: ErrorHandler, useClass: CricketereErrorHandler },
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue() {
      _seqlog('CoreProviders');

    },
  }
];

