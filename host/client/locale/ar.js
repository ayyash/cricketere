

function getCountry() {
    if (window) {
        const _country = document.cookie.split(';').find(n => n.indexOf('country') > -1);
        if (_country) {
           return _country.split('=')[1];
        }
    }
    return 'JO';
}

function plural(n) {
    if (n === 0) return 0;

    let i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;

    if (i === 1 && v === 0) return 1;
    return 5;
}

const resources = {
    language: "ar",
    country: getCountry(),
    keys: {},
    _LOCALE_ID: "ar-JO",
    plural
};
resources.keys = {
    SITE_NAME: 'Cricketere',
    Required: 'Required',
    Error: 'An error occurred',
    Dismiss: 'Dismiss',
    Unknown: 'Oops! We could not perform the required action for some reason. We are looking into it right now.',
    NoRes: '', // if resource is not found
    DONE: 'Done',
    UNAUTHORIZED: 'Login or register first.',
    SAVED: 'Saved successfully',
    INVALID_VALUE: 'Value entered is not within the range allowed',
    INVALID_LENGTH: 'The length of the value entered is not within range allowed',
    INVALID_FORMAT: 'Invalid format',
    INAVLID_NUMBER: 'Not a number',
    INVALID_email_FORMAT: 'Invalid email format',
    INVALID_url_FORMAT: 'Invalid URL format',
    INVALID_phone_FORMAT: 'Invalid phone format',
    INVALID_date_FORMAT: 'Invalid date format',
    FILE_LARGE: 'The size of the file is larger than the specified limit ($0 KB)',
    INVALID_FILE_FORMAT: 'The format of the file is not allowed. Allowed formats are: $0',
    INVALID_FORM: 'Some fields are not valid, fix and submit again.',
    Days: ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    AM: 'AM',
    PM: 'PM',
    RELATIVE_TIME: {
        AGO: '$0 ago',
        SECONDS: { 1: 'one second', 2: 'two seconds', 3: 'few seconds', 11: '$0 seconds' },
        MINUTES: { 1: 'one minute', 2: 'two minutes', 3: 'few minutes', 11: '$0 minutes' },
        HOURS: { 1: 'one hour', 2: 'two hours', 3: 'few hours', 11: '$0 hours' },
        DAYS: { 1: 'one day', 2: 'two days', 3: '$0 days', 11: '$0 days' },
        MONTHS: { 1: 'one month', 2: 'two months', 3: '$0 months', 11: '$0 months' },
        YEARS: { 1: 'one year', 2: 'two years', 3: '$0 years', 11: '$0 years' }
    },
    DEFAULT_PAGE_TITLE: 'Welcome',
    WELCOME_TEXT: 'Hello Cricketere',
    Students: {0: 'no students', 1: 'one student', 5: '$0 students' },
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


if (window == null){
    exports.resources = resources;
}
