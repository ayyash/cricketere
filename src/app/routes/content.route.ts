import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ContentDetailsComponent } from '../components/content/details.component';
import { CustomCurrencyPipe } from '../lib/pipes/currency.pipe';
import { ContentStandaloneComponent } from '../components/content/standalone.component';
import { StarsPartialComponent } from '../components/common/stars.partial';
// **gulpimport**

const routes: Routes = [
  {
    path: 'details',
    component: ContentDetailsComponent,
    title: 'Details'
  }

  , {
    path: 'standalone',
    component: ContentStandaloneComponent
  }

  // **gulproute**
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CustomCurrencyPipe
  ],
  declarations: [
    ContentDetailsComponent
    // **gulpcomponent**
  ]
})

export class ContentRoutingModule { }
