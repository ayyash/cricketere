import { BrowserModule } from '@angular/platform-browser';
// import { TransferHttpCacheModule } from '@nguniversal/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { AppRoutingModule } from './routing.module';
// import { CoreModule } from './core/core.module';
// import { SharedModule } from './core/shared.module';
import { APP_BASE_HREF } from '@angular/common';
import { NotFoundComponent } from './components/layouts/404.component';
import { ErrorComponent } from './components/layouts/error.component';
import { MainLayoutComponent } from './components/layouts/main.component';
import { SingleLayoutComponent } from './components/layouts/single.component';
import { LocaleId, RootHref } from './core/resources';
import { ToastPartialComponent } from './lib/toaster/toast.component';


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
        , { provide: APP_BASE_HREF, useClass: RootHref }
    ]
})
export class AppModule { }
