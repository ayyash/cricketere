
export interface IConfig {
   isServed: boolean;
    API: {
        apiRoot: string;
    };
    Auth: {
        userAccessKey: string;
    };
    Cache: {
        Timeout: number;
        Key: string;
        ResetKey: string;
    };
    MyKey: string;

}
