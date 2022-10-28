import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentDetailsComponent } from '../components/content/details.component';
import { CustomCurrencyPipe } from '../lib/pipes/currency.pipe';
import { ContentStandaloneComponent } from '../components/content/standalone.component';
import { StarsPartialComponent } from '../components/common/stars.partial';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    ContentDetailsComponent,
    RouterModule.forChild(routes),
    StarsPartialComponent,
    CustomCurrencyPipe
  ]
})

export class ContentRoutingModule { }
