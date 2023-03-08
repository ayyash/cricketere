import { Injectable } from '@angular/core';

import {
  Route,
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanMatch,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../config';
import { AuthState } from './auth.state';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanMatch {

  constructor(private authState: AuthState, private _router: Router) {
    _seqlog('guard construct');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.authState.redirectUrl = state.url;
    return this.secure(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.authState.redirectUrl = state.url;
    return this.secure(route);
  }

  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const fullPath = segments.reduce((path, currentSegment) => {
      return `${path}/${currentSegment.path}`;
    }, '');
    this.authState.redirectUrl = fullPath;

    return this.secure(route);
  }

  private secure(route: ActivatedRouteSnapshot | Route): Observable<boolean> {

    _seqlog('guard secure');

    return this.authState.stateItem$.pipe(
      map(user => {
        _seqlog('logged in');
        // if user exists let them in, else redirect to login
        if (!user) {
          this._router.navigateByUrl(Config.Basic.loginRoute);
          return false;
        }
        // user exists
        return true;
      })
    );
  }
}
