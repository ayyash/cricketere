

export interface IUser {
    id: string;
    email: string;
    imageUrl?: string;
    lastName?: string;
    firstName?: string;

}


export class User implements IUser {
    constructor(
        public id: string,
        public email: string,
        public firstName?: string,
        public lastName?: string,
        public imageUrl?: string    ) {}

    public static NewInstance(user: any): IUser {
        return new User(
            user.id,
            user.email,
            user.firstName,
            user.lastName,
            user.imageUrl
            );
    }


    public static PrepCreate(user: IUser, password: string): any {

        return {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: password,
                imageUrl: user.imageUrl
            };
    }
    public static PrepSave(user: IUser): any {
        // saving from smoott edit page
        return {
            // name: user.name,
            firstName: user.firstName,
            lastName: user.lastName
        };
    }

    public static PrepSavePhoto(imageUrl: string): any {
        return {
            imageUrl: imageUrl
        };
    }

    public static PrepSavePassword(current: string, password: string): any {
        // saving from smoott edit page
        return {
            // name: user.name,
            currentPassword: current,
            password: password
        };
    }

    public static PrepRegister(user: IUser): any {
        return {
            firstname: user.firstName,
            lastname: user.lastName,
            email: user.email
        };
    }

}
