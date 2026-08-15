import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorHandler, provideAppInitializer, provideEnvironmentInitializer } from '@angular/core';
import { configFactory } from '../services/config.service';
import { CricketereErrorHandler } from './error.service';
import { CricketereInterceptorFn } from './http.fn';
import { LocalInterceptorFn } from './local.fn';


export const CoreProviders = [

  provideHttpClient(
    withInterceptors([
      LocalInterceptorFn,
      CricketereInterceptorFn
    ])
  ),
  provideAppInitializer(configFactory),

  { provide: ErrorHandler, useClass: CricketereErrorHandler },
  provideEnvironmentInitializer(() => {
    _seqlog('CoreProviders');
  })
];

