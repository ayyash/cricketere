import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, first, share } from 'rxjs/operators';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';

import { IData, DataClass, EnumDataType, LocalStorageService } from '../core/services';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _urls: { [id: number]: { url: string; expiresin?: number } } = {};
    private inAppData: { [id: number]: IData[] } = {}; // local data in app

    constructor(private _http: HttpClient, private localStorage: LocalStorageService) {
        // instantiate
        this._urls[EnumDataType.NotDefined] = { url: Config.API.data.notdefined };

    }

    GetData(type: EnumDataType, id: string = '0'): Observable<IData[]> {
        // for typing purposes only
        return <Observable<IData[]>>this.GetCache(type, id);

    }

    GetCache(type: EnumDataType, id: string = '0'): Observable<any> {
        const name: string = EnumDataType[type];
        // replace id
        const _cachedUrl = this._urls[type];
        const _url = _cachedUrl.url.replace(':id', id);

        const _data: any = this.localStorage.getObject(name + '.' + id);
        // localdata is guarranteed to be within expiration date this way

        if (_data) {
            // if localStroage exist, return
            return of(_data).debug('GetData ' + name, 'cached');
        } else {
            // get from server, url is replaced for the correct id
            return this._http
                .get(_url)
                .pipe(
                    map(response => {
                        let _retdata: any;

                        switch (type) {
                            default:
                            _retdata = DataClass.NewInstances(type, <any>response);
                        }

                        // assgin to localstorage with key and expires in hours if set
                        this.localStorage.setObject(name + '.' + id, _retdata, _cachedUrl.expiresin);

                        return _retdata;
                    })
                )
                .debug('GetData ' + name, 'code');
        }
    }


    UpdateData(type: EnumDataType, newItem: IData, id: string = '0'): void {
        // update localstorage by adding a new value to the existing collection
        const name: string = EnumDataType[type];
        const _cachedUrl = this._urls[type];
        const _url = _cachedUrl.url.replace(':id', id);
        const _data: any = this.localStorage.getObject(name + '.' + id);
        if (_data && _data instanceof Array) {
            // add item
            _data.push(newItem);
            this.localStorage.setObject(name + '.' + id, _data, _cachedUrl.expiresin);
        }
        // else nothing, there is no storag to update
    }


    // Example GetCategories(): Observable<IData[]> {
    //     return this.GetData(EnumDataType.Category);
    // }

    GetSingleDataById(type: EnumDataType, id: string): Observable<IData | undefined> | null {
        if (id === null) {
            return null;
        }

        return this.GetData(type).pipe(
            map(data => data.find(n => n.id?.toString() === id.toString())));
    }

    GetSingleDataByKey(type: EnumDataType, key: string): Observable<IData | undefined> {
        // WATCH: observable of null
        if (key === null) {
            return of(undefined);
        }

        return this.GetData(type).pipe(
            map(data => data.find(n => n.key === key)));
    }

    GetLocalDataByKey(type: EnumDataType, key: string): IData | null {
        if (key === null) {
            return null;
        }
        return (
            this.inAppData[type].find(n => n.key === key) ||
            DataClass.NewInstance(type, { id: '0', key: key, text: key })
        );
    }
}
