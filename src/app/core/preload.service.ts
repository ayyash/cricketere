import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';

// TODO: add server platform
@Injectable({
    providedIn: 'root'
})
export class PreloadService implements PreloadingStrategy {
    constructor(private _platform: Platform) {

    }
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (!this._platform.isBrowser) {
            return of(null);
        }
        if (route.data && route.data['preload']) {
            if (route.data['delay']) {
                return timer(5000).pipe(mergeMap(() => load()));
            } else {
                return load();
            }

        } else {
            return of(null);
        }
    }
}
