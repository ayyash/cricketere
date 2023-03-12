import { Config } from '../config';
import { IUser, User } from '../core/services';

export enum EnumRole {
    Admin = 'admin',
    Manager = 'manager',
    User = 'user',
    Default = 'none'
}
export interface IAuthInfo {
    profile?: IUser;
    accessToken?: string;
    expiresAt?: number;
    refreshToken?: string;
    roles?: EnumRole[];

}

export class AuthInfo implements IAuthInfo {

    constructor(
        public profile?: IUser,
        public accessToken?: string,
        public expiresAt?: number,
        public refreshToken?: string,
        public roles?: EnumRole[]
    ) {}

    public static NewInstance(auth: any): IAuthInfo {
        // prepare expiration
        return new AuthInfo(
            User.NewInstance(auth.payload),
            auth.accessToken,
            Date.now() + (auth.expiresIn * 1000),
            auth.refreshToken
        );
    }

    // get access token on login
    public static PrepAccessToken(username: string, password: string): any {
        // prepare the body of request login data
        return {
            email: username, // this is an email
            password: password
        };
    }

    public static PrepReset(user: IUser, password: string, token: string): any {
        return {
            id: user.id,
            reset_token: token,
            password: password,
            email: user.email,
        };
    }

    public static PrepSave(password: string, oldpassword: string): any {
        return {
            newpassword: password,
            oldpassword: oldpassword
        };
    }

    public static PrepForgot(email: string): any {
        return {
            email: email
        };
    }

    public static PrepSetSession(auth: IAuthInfo): any {
      return {
        auth: auth,
        cookieName: Config.Auth.serverCookieKey
      };
    }
    public static PrepLogout(): any {
      return {
        cookieName: Config.Auth.serverCookieKey
      };
    }
}
