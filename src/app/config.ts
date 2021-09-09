import { environment } from '../environments/environment';


export const Config = {
    Basic: {
        language: resources.language,
        country: resources.country,
        defaultRoute: '/',
        loginRoute: '/login',
        defaultSize: 25,
        defaultDateFormt: 'DD-MM-YYYY',
        defaultUploadSize: 1048576,
        defaultUploadFormat: ['gif', 'jpg', 'jpeg', 'png']
    },
    Auth: {
        userAccessKey: 'cricketere.user'
    },
    Cache: {
        Timeout: 1,
        Key: 'cricketere.cache',
        ResetKey: 'cricketere.20190208'
    },
    API: {
        apiRoot: environment.apiRoot,
        auth: {
            login: '/auth/login',
            register: '/auth/register',
            reset: '/auth/reset',
            password: '/auth/changepassword',
            forgot: '/auth/forgotpassword'
        },
        data: {
            notdefined: '/data/notdefined'
        },
        config: {
            local: environment.localConfig
        }
         // **gulpmodel**
    }
};

