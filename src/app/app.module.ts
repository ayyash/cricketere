import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './core/shared.module';
import { NotFoundComponent } from './components/layouts/404.component';
import { ErrorComponent } from './components/layouts/error.component';
import { MainLayoutComponent } from './components/layouts/main.component';
import { SingleLayoutComponent } from './components/layouts/single.component';

@NgModule({
    declarations: [AppComponent,
        MainLayoutComponent,
        NotFoundComponent,
        SingleLayoutComponent,
        ErrorComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'cricketereServer' }),
        TransferHttpCacheModule,
        SharedModule,
        AppRoutingModule,
        CoreModule
    ]
})
export class AppModule { }
