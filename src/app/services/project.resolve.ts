import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Injectable } from '@angular/core';
import { first, map, Observable, of } from 'rxjs';
import { ConfigService } from './config.service';
import { LocalStorageService } from '../core/services';

@Injectable({ providedIn: 'root' })
export class ProjectResolve implements Resolve<boolean> {
    constructor(private router: Router,
        private localStorage: LocalStorageService,
        private configService: ConfigService) {
        //

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {


        _seqlog('resolve');
        _attn(ConfigService.Config, 'in resolve');
        this.localStorage.setObject('MyAyyash', ConfigService.Config.Auth.userAccessKey);

        return this.configService.config$.pipe(
            first((n) => n.isServed),
            map((n) => {
                // check if served with error to reroute
                return true;
            }));

        // return of(ConfigService.Config.isServed);


    }
}
