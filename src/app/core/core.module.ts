import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorHandler, provideAppInitializer, provideEnvironmentInitializer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { configFactory } from '../services/config.service';
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
  provideAppInitializer(configFactory),
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
  provideEnvironmentInitializer(() => {
    _seqlog('CoreProviders');
  })
];

