import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Config } from '../config';
import {
  IAuthInfo,
  AuthInfo,
  User,
  IUser
} from '../core/services';

import { HttpClient } from '@angular/common/http';
import { AuthState } from './auth.state';
import { response } from 'express';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _loginUrl = Config.API.auth.login;
  private _refreshUrl = Config.API.auth.refresh;
  private _resetUrl = Config.API.auth.reset;
  private _passwordUrl = Config.API.auth.password;
  private _forgotUrl = Config.API.auth.forgot;
  private _registerUrl = Config.API.auth.register;
  private _setLocalSession = Config.API.auth.setSession;
  private _logoutUrl = Config.API.auth.logout;


  constructor(private http: HttpClient, private authState: AuthState) {
    _seqlog('authservices construct');
  }
  Login(username: string, password: string): Observable<IAuthInfo> {

    return this.http.post(this._loginUrl, { username, password }).pipe(

      map(response => {

        // prepare the response to be handled, then return
        const resUser: IAuthInfo = AuthInfo.NewInstance(<any>response);
        return this.authState.SaveSession(resUser);
      }),
      switchMap(user => this.SetLocalSession(user))
    );
  }

  RefreshToken(): Observable<IAuthInfo> {
    return this.http.post(this._refreshUrl, { token: this.authState.GetRefreshToken() }).pipe(

      map(response => {
        // this response has the new refresh token and access token
        if (!response) {
          throw ({ code: 'UNAUTHORIZED', message: 'Oh oh' });
        }

        // update session
        const retUser: IAuthInfo = AuthInfo.NewInstance(<any>response);

        this.authState.UpdateSession(retUser);

        return retUser;
      }),
      switchMap(response => this.SetLocalSession(response))
    );
  }

  RegisterAccount(user: IUser): Observable<boolean> {
    const data = User.PrepRegister(user);
    _debug(data, 'Register data');

    return this.http.post(this._registerUrl, data).pipe(
      map(response => {
        return true;
      })
    );
  }



  Reset(user: any, password: string, token: string): Observable<IAuthInfo> {
    // rest and login user

    const data = AuthInfo.PrepReset(user, password, token);
    _debug(data, 'Reset data');

    return this.http.post(this._resetUrl, data).pipe(
      map(response => {
        const resUser: IAuthInfo = AuthInfo.NewInstance(<any>response);
        if (!resUser.accessToken) {
          return null;
        }
        this.authState.SaveSession(resUser);

        return resUser;
      })
    );

  }

  ForgotPassword(email: string): Observable<boolean> {
    const data = AuthInfo.PrepForgot(email);
    _debug(data, 'ForgotPassword data');

    return this.http.post(this._forgotUrl, data).pipe(
      map(response => {
        return true;
      })
    );
  }

  SavePassword(profile: IAuthInfo, password: string, oldpassword: string): Observable<boolean> {
    const data = AuthInfo.PrepSave(password, oldpassword);
    _debug(data, 'SeavePassword data');

    return this.http.post(this._passwordUrl, data).pipe(
      map(response => {
        // save new access token then return true
        const resUser: IAuthInfo = AuthInfo.NewInstance(<any>response);
        if (!resUser.accessToken) {
          return null;
        }
        const newUser = { ...profile, accessToken: resUser.accessToken, expiresAt: resUser.expiresAt };
        this.authState.SaveSession(newUser);
        return true;
      })
    );
  }

  SetLocalSession(user: IAuthInfo): Observable<IAuthInfo> {
    const data = AuthInfo.PrepSetSession(user);
    _debug(data, 'SetLocalSession data');

    return this.http.post(this._setLocalSession, data).pipe(
      map(response => {
        return user;
      })
    );
  }

  Logout(): Observable<boolean> {
    // logout locally
    const data = AuthInfo.PrepLogout();
    _debug(data, 'Logout data');

    return this.http.post(this._logoutUrl, data).pipe(
      map(response => {
        return true;
      })
    );
  }
}
