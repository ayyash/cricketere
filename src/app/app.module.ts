import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import {  CoreProviders } from './core/core.module';
import { LocaleId, RootHref } from './core/resources';
import { AppComponent } from './app.component';
import { SHARED_COMPONENTS } from './core/shared.const';
import { MainLayoutComponent } from './components/layouts/main.component';
import { SingleLayoutComponent } from './components/layouts/single.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,
    MainLayoutComponent,
    SingleLayoutComponent],
  imports: [
    HttpClientModule,
    // ...SHARED_COMPONENTS,
    BrowserModule.withServerTransition({ appId: 'crsr' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    // CoreModule,
    ...SHARED_COMPONENTS
  ],
  providers: [
    { provide: LOCALE_ID, useClass: LocaleId },
    ...CoreProviders
    // for hosts like netlify
    // , { provide: APP_BASE_HREF, useClass: RootHref }
    // do this when you have one currency, not multiple locales
    // , {provide: DEFAULT_CURRENCY_CODE, useClass: LocaleCurrency}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
