import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigService } from './config.service';
import { LocalStorageService } from '../core/services';

@Injectable({ providedIn: 'root' })
export class ProjectResolve implements Resolve<boolean> {
    constructor(private router: Router, private localStorage: LocalStorageService) {
        //

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        _seqlog('resolve');
        // _attn(WebConfig.isServed, 'resolve');
        return of(ConfigService.Config.isServed);

    }
}
