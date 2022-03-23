import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class ProjectResolve implements Resolve<boolean> {
    constructor(private configService: ConfigService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        _seqlog('resolve');

        return this.configService.config$.pipe(
            first(n => n.isServed),
            map(n => {
                if (n.MyKey === 'default') {
                    return false;
                }
                return true;
            }));
    }
}
