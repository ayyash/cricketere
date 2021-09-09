
export interface IConfig {
   
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
   
}
