import { environment } from '../environments/environment';


export const Config = {
    isServed: false,
    MyKey: 'default',
    Basic: {
        language: resources.language,
        country: resources.country,
        defaultRoute: '/',
        loginRoute: '/login',
        defaultSize: 10,
        defaultDateFormt: 'DD-MM-YYYY',
        defaultUploadSize: 1048576,
        defaultUploadFormat: ['gif', 'jpg', 'jpeg', 'png'],
        defaultToastTimeout: 3000
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
            notdefined: '/data/notdefined'
        },
        config: {
            local: environment.localConfig
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

