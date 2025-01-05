import { Routes } from '@angular/router';
import { ProductCreateFormPartial } from '../components/product/create.component';
import { ProductListComponent } from '../components/product/list.component';
import { ProductTypesComponent } from '../components/product/types.component';
import { ProductUploadComponent } from '../components/product/upload.component';
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
  },
  {
    path: 'types',
    component: ProductTypesComponent,
    title: 'PRODUCTS_TYPES'
  },
  {
    path: 'upload',
    component: ProductUploadComponent,
    title: 'PRODUCTS_UPLOAD'
  }

];
