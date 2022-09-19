import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './core/shared.module';
import { NotFoundComponent } from './components/layouts/404.component';
import { ErrorComponent } from './components/layouts/error.component';
import { MainLayoutComponent } from './components/layouts/main.component';
import { SingleLayoutComponent } from './components/layouts/single.component';
import { ToastPartialComponent } from './lib/toaster/toast.component';
import { LocaleId, RootHref } from './core/resources';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
    declarations: [AppComponent,
        MainLayoutComponent,
        NotFoundComponent,
        ToastPartialComponent,
        SingleLayoutComponent,
        ErrorComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'crsr' }),
        TransferHttpCacheModule,
        SharedModule,
        AppRoutingModule,
        CoreModule,
    ],
    providers: [
        { provide: LOCALE_ID, useClass: LocaleId }
        // for hosts like netlify
        // , { provide: APP_BASE_HREF, useClass: RootHref }
        // do this when you have one currency, not multiple locales
        // , {provide: DEFAULT_CURRENCY_CODE, useClass: LocaleCurrency}]
    ]
})
export class AppModule { }
