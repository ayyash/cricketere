import { environment } from '../environments/environment';


export const Config = {
    isServed: false,
    MyKey: 'default',
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
        ResetKey: 'cricketere.20180208'
    },
    Seo: {
        tags: [
            { property: 'og:site_name', content: 'Sekrab Garage' },
            { property: 'og.type', content: 'website' },
            { property: 'twitter:site', content: '@sekrabbin' },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:creator', content: '@sekrabbin' },
            { property: 'og:locale', content: 'en_GB' },
            { name: 'author', content: 'Ayyash' }
        ],
        baseUrl: 'http://garage.sekrab.com',
        defaultImage: 'http://garage.sekrab.com/assets/images/sekrab0813.jpg',
        defaultAlt: 'Image on Sekrab Garage'
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
        , project: {
            list: '/projects/?:options',
            details: '/projects/:id',
            create: '/projects', // POST
            save: '/projects/:id', // PUT
            delete: '/projects/:id', // DELETE
        }

        // **gulpmodel**
    }
};

