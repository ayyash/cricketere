import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product/list.component';
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
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
         ProductListComponent
// **gulpcomponent**
    ]
})

export class ProductRoutingModule { }
