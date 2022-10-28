import { Routes } from '@angular/router';
import { ProductListComponent } from '../components/product/list.component';
// **gulpimport**

export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'PRODUCTS'
  }

];
