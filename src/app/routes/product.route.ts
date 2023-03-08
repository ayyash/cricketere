import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product/list.component';
import { CommonModule } from '@angular/common';
import { PagerPartialComponent } from '../components/common/pager.partial';
// **gulpimport**

const routes: Routes = [
   {
    path: '',
    component: ProductListComponent,
    title: 'PRODUCTS',

}

// **gulproute**
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PagerPartialComponent
    ],
    declarations: [
      ProductListComponent
    ]

})

export class ProductRoutingModule { }
