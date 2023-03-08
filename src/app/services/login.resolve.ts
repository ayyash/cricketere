import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Config } from '../config';
import { AuthState } from './auth.state';

@Injectable({ providedIn: 'root' })
export class LoginResolve implements Resolve<boolean> {
   constructor(private authState: AuthState, private router: Router) {
   }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {


      _seqlog('login resolve');
      return this.authState.stateItem$.pipe(
         map(user => {
            _seqlog('logged in');
            // if logged in succesfully, go to last url
            if (user) {
              _seqlog('user logged in');
               this.router.navigateByUrl(this.authState.redirectUrl || Config.Basic.defaultRoute);

            }
            // does not really matter, I either go in or navigate away
            return true;
         })
      );
   }
}
