import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product/list.component';
import { CommonModule } from '@angular/common';
// **gulpimport**

const routes: Routes = [
   {
    path: '',
    component: ProductListComponent,
    title: 'PRODUCTS'
}

// **gulproute**
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
      ProductListComponent
    ]

})

export class ProductRoutingModule { }
