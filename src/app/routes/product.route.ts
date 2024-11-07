import { Routes } from '@angular/router';
import { ProductCreateFormPartial } from '../components/product/create.component';
import { ProductListComponent } from '../components/product/list.component';
// **gulpimport**

export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'PRODUCTS'
  },
  {
    path: 'create',
    component: ProductCreateFormPartial,
    title: 'PRODUCTS_CREATE'
  }

];
