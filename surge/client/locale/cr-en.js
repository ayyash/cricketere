// make it run on both platforms
(function (global) {

    const _LocaleId = 'en';
    const _extend = function() {
        if (global.ng?.common?.locales) {
            global.ng.common.locales[_LocaleId].forEach(n => {
                if (n){
                    // find it by checking that is an object and not an array
                    if (typeof n === 'object' && !Array.isArray(n)){
                        n['WLG'] = ['₩'];
                    }

                }
            });

        }
    };
    if (window != null) {
        // in browser platform
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.src = `locale/${_LocaleId}.js`;
        script.onload = function () {
            // on load, add a missing curreny symbol
            _extend();

        }
        document.head.appendChild(script);

    } else {
        // in server platform
        require(`./${_LocaleId}.js`);
        _extend();

    }

    const keys = {
        NoRes: '', // if resource is not found
        Students: { 0: 'no students', 1: 'one student', 2: '$0 students' },
        HelloWorld: 'Aloha',
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
        language: 'en',
        keys,
        localeId: _LocaleId
    }

    // for nodejs
    global.cr.en = global.cr.resources;

    // global.ng.common.locales['ar-jo'][18]['TRY'] = ['₺'];


})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global ||
    typeof window !== 'undefined' && window);
