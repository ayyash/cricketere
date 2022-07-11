import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './core/shared.module';
import { NotFoundComponent } from './components/layouts/404.component';
import { ErrorComponent } from './components/layouts/error.component';
import { MainLayoutComponent } from './components/layouts/main.component';
import { SingleLayoutComponent } from './components/layouts/single.component';
import { ToastPartialComponent } from './lib/toaster/toast.component';

class DynamicLocaleId extends String {

    toString() {
      return resources._LOCALE_ID;
    }
  }


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
    providers: [{provide: LOCALE_ID, useClass: DynamicLocaleId }]
})
export class AppModule { }
