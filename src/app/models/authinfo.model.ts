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
    roles?: EnumRole[];

}

export class AuthInfo implements IAuthInfo {

    constructor(
        public profile?: IUser,
        public accessToken?: string,
        public expiresAt?: number,
        public roles?: EnumRole[]
    ) {}

    public static NewInstance(auth: any): IAuthInfo {
        // prepare expiration
        const _expiresat = Date.now() + (auth.expiresIn * 1000);

        return new AuthInfo(
            User.NewInstance(auth),
            auth.accessToken,
            _expiresat
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

}
