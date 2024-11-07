import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ListStateService } from './state.abstract';

@Injectable({ providedIn: 'root' })
export class ProductState extends ListStateService<IProduct> {
   constructor() {
      super();
   }
}
