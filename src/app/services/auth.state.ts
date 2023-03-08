import { Inject, Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';
import { Config } from '../config';
import { IAuthInfo } from '../models/auth.model';
import { ConfigService } from './config.service';
import { StateService } from './state.abstract';
import { StorageService } from './storage.service';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

@Injectable({ providedIn: 'root' })
export class AuthState extends StateService<IAuthInfo> {




  get redirectUrl(): string {
    return this.localStorage.getItem(Config.Auth.redirectKey);
  }
  set redirectUrl(value: string) {
    this.localStorage.setItem(Config.Auth.redirectKey, value);
  }


  constructor(
    private configService: ConfigService,
    private localStorage: StorageService,
    private router: Router,
    @Optional() @Inject(REQUEST) private request: Request
  ) {
    super();

    this.configService.config$.pipe(
      filter(config => config.isServed)
    ).subscribe({
      next: config => {
        // check item validity
        const _localuser: IAuthInfo = this._GetUser();

        if (this.CheckAuth(_localuser)) {
          this.SetState(_localuser);
        } else {
          this.Logout(false);
        }

      }
    }
    );
  }

  private _SetCookie(user: IAuthInfo) {
    let cookieStr = encodeURIComponent(Config.Auth.serverCookieKey) + '=' + encodeURIComponent(JSON.stringify(user));

    const dtExpires = new Date(user.expiresAt); //  * 1000 * 60 * 60 * 24

    cookieStr += ';expires=' + dtExpires.toUTCString();
    cookieStr += ';path=/';
    cookieStr += ';samesite=lax';
    // when in production
    // cookieStr += ';secure';

    document.cookie = cookieStr;
  }
  private _DeleteCookie(): void {
    this._SetCookie({ accessToken: '', expiresAt: 0 });
  }

  private _SaveUser(user: IAuthInfo) {
    this.localStorage.setItem(
      ConfigService.Config.Auth.userAccessKey,
      user
    );

    this._SetCookie(user);
  }
  private _RemoveUser() {
    this.localStorage.removeItem(ConfigService.Config.Auth.userAccessKey);
    this._DeleteCookie();
  }

  private _GetUser(): IAuthInfo | null {
    // check request here
    if (this.request) {
      const _serverCookie = this.request.cookies[Config.Auth.serverCookieKey];
      if (_serverCookie) {
        try {
          return JSON.parse(decodeURIComponent(_serverCookie));
        } catch (e) {
          // silence
        }
      }
    }

    const _localuser: IAuthInfo = this.localStorage.getItem(ConfigService.Config.Auth.userAccessKey);

    if (_localuser && _localuser.accessToken) {
      return <IAuthInfo>_localuser;
    }
    return null;
  }



  SaveSession(user: IAuthInfo): IAuthInfo | null {

    if (user.accessToken) {

      this._SaveUser(user);
      this.SetState(user);
      return user;
    } else {
      // remove token from user
      this._RemoveUser();
      this.RemoveState();
      return null;
    }

  }

  UpdateSession(user: IAuthInfo) {
    const _localuser: IAuthInfo = this._GetUser();

    if (_localuser) {
      // only set accesstoken and refreshtoken


      _localuser.accessToken = user.accessToken;
      _localuser.refreshToken = user.refreshToken;

      this._SaveUser(_localuser);

      this.UpdateState(user);
    } else {
      // remove token from user
      this._RemoveUser();
      this.RemoveState();
    }
  }

  CheckAuth(user: IAuthInfo) {
    if (!user || !user.accessToken) {
      return false;
    }
    if (Date.now() > user.expiresAt) {
      // expired
      return false;
    }
    // return if profile is valid
    return true;
  }
  Logout(reroute: boolean = false) {
    // remove leftover
    this.RemoveState();
    // and clean localstroage
    this._RemoveUser();

    if (reroute) {
      this.router.navigateByUrl(Config.Basic.loginRoute);
    }
  }

  GetToken() {

    const _auth = this.stateItem.getValue();
    // check if auth is still valid first before you return
    return this.CheckAuth(_auth) ? _auth.accessToken : null;;
  }

  GetRefreshToken(): string | null {

    const _auth = this.stateItem.getValue();
    return this.CheckAuth(_auth) ? _auth.refreshToken : null;;
  }




}
