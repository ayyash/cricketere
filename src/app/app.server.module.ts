import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from './app.module';

@NgModule({
    imports: [
        NoopAnimationsModule,
        ServerModule,
        AppModule

    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }

