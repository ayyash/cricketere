import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../config';
import { GetParamsAsString } from '../core/common';
import { IList, IListOptions, ListOptions } from '../models/list.model';
import { IProduct, Product } from '../models/product.model';



@Injectable({providedIn: 'root'})
export class ProductService {

    private _listUrl = Config.API.product.list;

    constructor(private _http: HttpClient) {

    }

    GetProducts(options: IListOptions = {}): Observable<IList<IProduct>> {
        const params = GetParamsAsString(ListOptions.MapSearchListOptions(options));
        const _url = this._listUrl.replace(':options', params);

        return this._http.get(_url).pipe(
            map(response => {
                return Product.NewList(<any>response);
            })
        );
    }



}
