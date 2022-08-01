import { environment } from '../environments/environment';


export const Config = {
    isServed: false,
    MyKey: 'default',
    Basic: {
        country: 'jo',
        defaultRoute: '/projects',
        loginRoute: '/login',
        defaultSize: 10,
        defaultDateFormt: 'DD-MM-YYYY',
        defaultUploadSize: 1048576,
        defaultUploadFormat: ['gif', 'jpg', 'jpeg', 'png'],
        defaultToastTimeout: 4000,
    },
    Res: {
        cookieName: 'cr-lang',
        languages: [{name: 'en', display: 'English'}, {name: 'ar', display: 'عربي'}],
        defaultLanguage: 'en' // not maintained
    },
    Auth: {
        userAccessKey: 'user'
    },
    Storage: {
        Timeout: 1,
        Key: 'localkey',
        ResetKey: '20180220'
    },
    Seo: {
        tags: [
            { property: 'og:site_name', content: 'Sekrab Garage' },
            { property: 'og.type', content: 'website' },
            { property: 'twitter:site', content: '@sekrabbin' },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:creator', content: '@sekrabbin' },
            { name: 'author', content: 'Ayyash' }
        ],
        baseUrl: 'https://$0.sekrab.com/$1/$2',
        defaultImage: 'http://garage.sekrab.com/assets/images/sekrab0813.jpg',
        logoUrl: 'https://garage.sekrab.com/assets/ilogo.2643991258d0540e.svg',
        defaultAlt: 'Image on Sekrab Garage',
        defaultLanguage: 'en',
        defaultRegion: 'www',
        hrefLangs: [
            { region: 'ES', language: 'es' },
            { region: 'ES', language: 'en' },
            { region: 'MX', language: 'es' },
            { region: 'MX', language: 'en' },
            { language: 'de' },
            { language: 'fr' },
            { language: 'es' },
            { language: 'en' },
            { language: 'x-default' }
        ]
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
            notdefined: '/data/notdefined',
            category: '/cats'
        },
        config: {
            local: environment.localConfig
        },
        res: {
            local: environment.localRes
        }
        , project: {
            list: '/projects/?:options',
            details: '/projects/:id',
            create: '/txerror', // POST
            save: '/projects/:id', // PUT
            delete: '/projects/:id', // DELETE
        }
        , product: {
            list: '/products/?:options'
        }

        // **gulpmodel**
    }
};

