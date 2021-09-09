import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './core/shared.module';
import { MainLayoutComponent, SingleLayoutComponent, NotFoundComponent, ErrorComponent } from './core/components';

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
