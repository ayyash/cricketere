import { ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CricketereErrorHandler } from './error.service';
import { configFactory, ConfigService } from '../services/config.service';
import { LocalInterceptorFn } from './local.fn';
import { CricketereInterceptorFn } from './http.fn';


export const CoreProviders = [
   provideHttpClient(
      // do this, to keep using your class-based interceptors.
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
   { provide: ErrorHandler, useClass: CricketereErrorHandler }
];

// services singletons here
// @NgModule({
//     imports: [CommonModule, HttpClientModule],
//     providers: [Title,

//         {
//             provide: APP_INITIALIZER,
//             useFactory: configFactory,
//             multi: true,
//             deps: [ConfigService]
//         },
//         {
//             provide: HTTP_INTERCEPTORS,
//             useClass: LocalInterceptor,
//             multi: true
//         },
//         {
//             provide: HTTP_INTERCEPTORS,
//             useClass: CricketereInterceptor,
//             multi: true,
//         },
//         { provide: ErrorHandler, useClass: CricketereErrorHandler }
//     ]
// })
// export class CoreModule {
//     constructor() {
//         _seqlog('core');
//     }

// }
