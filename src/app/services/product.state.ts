import { Injectable } from '@angular/core';
import { IProduct } from '../core/services';
import { ListStateService } from './state.abstract';

@Injectable({ providedIn: 'root' })
export class ProductState extends ListStateService<IProduct> {

}
