import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { StorageService } from '../core/services';

@Injectable({ providedIn: 'root' })
export class ProjectResolve implements Resolve<boolean> {
    constructor(private router: Router,
        private localStorage: StorageService,
        private configService: ConfigService) {
        //

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {


        _seqlog('resolve');
        _attn(ConfigService.Config.Storage.Key, 'in resolve');
        _attn(this.localStorage.getCache('MyAyyash'));


        return this.configService.config$.pipe(
            // in Angular 14, first, or filter is good enouogh, supposidly, check
            first((n) => n.isServed),
            map((n) => {
                // check if served with error to reroute
                this.localStorage.setCache('MyAyyash', 'here is a cache value');
                _attn(ConfigService.Config.Storage.Key, 'after resolve');

                _attn(n.isServed, 'served');
                return true;
            }));

        // return of(ConfigService.Config.isServed);


    }
}
