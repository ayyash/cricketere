import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IConfig } from '../core/services';

// ba3dein
export const resFactory = (res: ResService) => () =>
    res.loadAppConfig();

@Injectable({
    providedIn: 'root'
})
export class ResService {

    constructor(
        private http: HttpClient
    ) {
    }

    private _getUrl = Config.API.res.local;

    // keep track of config
    private res = new BehaviorSubject<any>(resources);
    res$: Observable<any> = this.res.asObservable();

    private static _res: any;

    static get Res(): any {
        return this._res;
    }



    // load [lang].json

    loadAppConfig(): Observable<boolean> {


        return this.http.get(this._getUrl).pipe(
            map((response) => {


                // here next
                return true;
            }),
            catchError((error) => {
                // if in error, return set fall back from environment
                _debug(error, 'Error in resolve', 'e');
                return of(true);
            })
        );
    }
}
