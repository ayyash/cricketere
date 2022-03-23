import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Config } from '../config';
import {
    IAuthInfo,
    AuthInfo,
    LocalStorageService,
    ConfigService,
    User,
    IUser
} from '../core/services';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _loginUrl = Config.API.auth.login;
    private _resetUrl = Config.API.auth.reset;
    private _passwordUrl = Config.API.auth.password;
    private _forgotUrl = Config.API.auth.forgot;
    private _registerUrl = Config.API.auth.register;


    private profileSubject: BehaviorSubject<IAuthInfo | null> = new BehaviorSubject(null);
    public profile$: Observable<IAuthInfo | null> = this.profileSubject.asObservable();

    get redirectUrl(): string {
        return this.localStorage.getObject('redirectUrl');
    }
    set redirectUrl(value: string) {
        this.localStorage.setObject('redirectUrl', value);
    }

    constructor(
        private http: HttpClient, // WATCH:
        private configService: ConfigService,
        private localStorage: LocalStorageService
    ) {
        // get profile from localstorage first time only
        _seqlog('auth service');
        _attn(Config.isServed);

        this.configService.config$.debug('AUTH', 'CONFIG').pipe(
            first(config => config.isServed),
        ).subscribe(config => {

            const _localuser = JSON.parse(
                this.localStorage.getItem(config.Auth.userAccessKey)
            );

            if (this.checkProfile(_localuser)) {
                this.profileSubject.next(_localuser);
            } else {
                this.profileSubject.next(null);
            }
        });

    }


    private checkProfile(profile: any): boolean {
        if (!profile || !profile.accessToken || !profile.expiresAt) {
            return false;
        }


        if (Date.now() > profile.expiresAt) {
            return false;
        }

        return true;
    }

    private saveSession(resUser: IAuthInfo): void {

        if (resUser.accessToken) {
            this.localStorage.setItem(
                ConfigService.Config.Auth.userAccessKey,
                JSON.stringify(resUser)
            );
        } else {
            // remove token from user
            this.localStorage.removeItem(ConfigService.Config.Auth.userAccessKey);
        }

    }

    GetToken(): string | undefined | null {
        const _profile = this.profileSubject.getValue();
        const _checkProfile = this.checkProfile(_profile);
        return  _checkProfile ? _profile.accessToken : null;
    }



    logout(): void {
        // Remove tokens and expiry time from localStorage
        this.profileSubject.next(null);
        this.localStorage.removeItem(Config.Auth.userAccessKey);
    }

    Login(username: string, password: string): Observable<IAuthInfo> {
        const data = AuthInfo.PrepAccessToken(username, password);
        _debug(data, 'Login data');

        return this.http.post(this._loginUrl, data).pipe(

            map(response => {
                const resUser: IAuthInfo = AuthInfo.NewInstance(<any>response);
                if (!resUser.accessToken) {
                    return null;
                }
                this.saveSession(resUser);
                this.profileSubject.next(resUser);

                return resUser;
            })
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
                this.saveSession(resUser);
                this.profileSubject.next(resUser);

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
                this.saveSession(newUser);
                this.profileSubject.next(newUser);
                return true;
            })
        );
    }

}
