import { Injectable } from '@angular/core';
import { Config } from '../config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetParamsAsString } from '../core/common';
import { IProduct, Product, IListOptions, IList, ListOptions } from '../core/services';



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
