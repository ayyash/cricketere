
// make it run on both platforms
(function (global) {
    // for other than en
    if (window != null) {
        // in browser platform
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.src = 'locale/ar-JO.js';
        document.head.appendChild(script);

    } else {
        // in server platform
        require('locale/ar-JO.js');
    }

    const keys = {
        NoRes: '', // if resource is not found
        Students: { 0: 'no students', 1: 'one student', 2: '$0 students' },
        HelloWorld: 'Aloha',
        Male: 'Male',
        Female: 'Female',
        RATING: {
            AWEFUL: 'aweful',
            POOR: 'poor',
            OK: 'okay',
            FAIR: 'fair',
            GREAT: 'great'
        },
        GENDER: {
            MALE: 'male',
            FEMALE: 'female'
        },
        THINGS: {
            elephant: 'Elephant',
            bear: 'Bear',
            lion: 'Lion',
            tiger: 'Tiger'
        },
        SECONDS: { 1: 'one second', 2: 'few seconds', 10: '$0 seconds' },
        MINUTES: { 1: 'one minute', 2: 'few minutes', 9: '$0 minutes' },
        HOURS: { 1: 'one hour', 2: 'few hours', 9: '$0 hours' },
        DAYS: { 1: 'one day', 2: 'few days', 9: '$0 days' },
        MONTHS: { 1: 'one month', 2: 'few months', 4: '$0 months' },
        YEARS: { 1: 'one year', 2: '$0 years', 5: 'many years' },
        TIMEAGO: '$0 ago',
        INTIME: 'in $0'
    };

    global.cr = global.cr || {};
    global.cr.resources = {
        language: 'ar',
        keys,
        localeId: 'ar-JO'
    }

    // for nodejs
    global.cr['ar'] = global.cr.resources;

})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global ||
    typeof window !== 'undefined' && window);
