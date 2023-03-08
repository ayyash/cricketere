import { ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CricketereErrorHandler } from './error.service';
import { configFactory, ConfigService } from '../services/config.service';
import { AuthState } from '../services/auth.state';
import { CricketereInterceptor } from './http';
import { LocalInterceptor } from './local.interceptor';


export const CoreProviders = [
  // provideHttpClient(
  //   // do this, to keep using your class-based interceptors.
  //   // withInterceptors([
  //   //   LocalInterceptorFn
  //   // ]),
  //   withInterceptorsFromDi()
  // ),
  Title,
  {
    provide: APP_INITIALIZER,
    // dummy factory
    useFactory: (): any => (): any => { },
    multi: true,
    deps: [AuthState]
  },
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
