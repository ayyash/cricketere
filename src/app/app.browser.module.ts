import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModule } from './app.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        AppModule,
    ],
    bootstrap: [AppComponent]
})
export class AppBrowserModule {}
