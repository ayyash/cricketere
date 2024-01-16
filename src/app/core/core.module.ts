import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ENVIRONMENT_INITIALIZER, ErrorHandler } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigService, configFactory } from '../services/config.service';
import { CricketereErrorHandler } from './error.service';
import { CricketereInterceptorFn } from './http.fn';
import { LocalInterceptorFn } from './local.fn';


export const CoreProviders = [

  provideHttpClient(
    // withInterceptorsFromDi(),
    withInterceptors([
      LocalInterceptorFn,
      CricketereInterceptorFn
    ])
  ),
  Title,
  {
    provide: APP_INITIALIZER,
    useFactory: configFactory,
    multi: true,
    deps: [ConfigService]
  },
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: LocalInterceptor,
  //   multi: true
  // },
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: CricketereInterceptor,
  //   multi: true,
  // },
  { provide: ErrorHandler, useClass: CricketereErrorHandler },
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue() {
      _seqlog('CoreProviders');

    },
  }
];

