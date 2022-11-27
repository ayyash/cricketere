import { Location, ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { ILoaderState, EnumLoaderSource } from '../core/services';
import { StateService } from './state.abstract';


@Injectable({
    providedIn: 'root'
})
export class LoaderService extends StateService<ILoaderState> {

    constructor(
      private viewportScroller: ViewportScroller,
      private router: Router,
      private routerSnapshot: ActivatedRoute) {
        super('NONE');
        _seqlog('loader srvice construct');
        this.SetState({
            show: false, source: null, url: null
        });
    }
    show(source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.UpdateState({show: true, source});

    }
    hide(source: EnumLoaderSource = EnumLoaderSource.HTTP) {
        this.UpdateState({show: false, source});

        // this.routerSnapshot.snapshot.fragment
         // the best way is to trigger a navigation and let the base route take control
         if (this.router.url.indexOf('#') > -1) {
           this.router.navigateByUrl(this.router.url, {skipLocationChange: true});

         }
    }
    emitUrl(url: string) {
        this.UpdateState({url});
    }



}
