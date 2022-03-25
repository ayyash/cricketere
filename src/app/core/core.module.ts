import { NgModule, ErrorHandler } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CricketereInterceptor } from './http';
import { LocalInterceptor } from './local.interceptor';
import { CricketereErrorHandler } from './error.service';



// services singletons here
@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [Title,

        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: configFactory,
        //     multi: true,
        //     deps: [ConfigService]
        // },
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
        { provide: ErrorHandler, useClass: CricketereErrorHandler }]
})
export class CoreModule {
    constructor() {
        _seqlog('core');
    }

}
