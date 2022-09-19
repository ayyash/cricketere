// make it run on both platforms
(function (global) {

  const _LocaleId = 'ar-JO';
  const _Language = 'ar';

  if (window != null) {
    // in browser platform
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.src = `locale/${_LocaleId}.js`;
    document.head.appendChild(script);

  } else {
    // in server platform
    require(`./${_LocaleId}.js`);
  }

  const keys = {
    NoRes: '', // if resource is not found
    Students: { 0: 'لا طلبة', 1: 'طالب واحد', 2: 'طالبان', 3: '$0 طلاب', 11: '$0 طالبا' },
    HelloWorld: 'أهلا',
    RATING: {
      AWEFUL: 'مقيت',
      POOR: 'سيئ',
      OK: 'حسن',
      FAIR: 'جيد',
      GREAT: 'ممتاز'
    },
    GENDER: {
      MALE: 'ذكر',
      FEMALE: 'أنثى'
    },
    THINGS: {
      elephant: 'فيل',
      bear: 'دب',
      lion: 'أسد',
      tiger: 'نمر'
    },
    SECONDS: { 1: 'ثاينة واحدة', 2: 'ثوانٍ', 11: '$0 ثانية' },
    MINUTES: { 1: 'دقيقة واحدة', 2: 'دقائق', 11: '$0 دقيقة' },
    HOURS: { 1: 'ساعة واحدة', 2: 'ساعتين', 3: '$0 ساعات', 11: '$0 ساعة' },
    DAYS: { 1: 'يوم واحد', 2: 'يومين', 3: '$0 ايام', 3: '$0 يوما' },
    MONTHS: { 1: 'شهر واحد', 2: 'عدة أشهر', 11: '$0 شهرًا' },
    YEARS: { 1: 'سنة واحدة', 2: 'سنتين', 3: '$0 سنوات', 5: 'سنين' },
    TIMEAGO: 'قيل $0',
    INTIME: 'في $0',
    SEO_CONTENT: {
      HOME_TITLE: 'Home',
      HOME: 'Home',
      PRODUCT_TITLE: '$0, in $1',
      PROJECT_RESULTS_TITLE: '$0 projects in $1',
      PROJECT_RESULTS_DESC: 'Found $0 projects categorized under $1'
    },
    PAGE_TITLES: {
      ERROR: 'Oh oh, an error occurred',
      NOT_FOUND: '404! Hmm! Once in a while, we change address and forget to update the mailman.',
      LOGIN: 'Login to your sekrab account',
      LIST_PROJECTS: 'All projects list',
      PRODUCTS: 'Products List'
    },
    DEFAULT_PAGE_TITLE: 'Welcome',
    LANGUAGE: 'English',
    SITE_NAME: 'Cricketere',
    UiLanguage: 'عربي',
    Required: 'Required',
    Error: 'An error occurred',
    ToastError: 'Oh oh! We are speechless',
    Dismiss: 'Dismiss',
    Unknown: 'Oops! We could not perform the required action for some reason. We are looking into it right now.',
    NoRes: 'Oops! We could not perform the required action for some reason. We are looking into it right now.',
    DONE: 'Done',
    UNAUTHORIZED: 'You are not authorised to view this page.',
    SAVED: 'Saved successfully',
    INVALID_VALUE: 'Value entered is not within the range allowed',
    INVALID_LENGTH: 'The length of the value entered is not within range allowed',
    INVALID_FORMAT: 'Invalid format',
    INAVLID_NUMBER: 'Not a number',
    INVALID_email_FORMAT: 'Invalid email format',
    INVALID_max_FORMAT: 'Too large',
    INVALID_min_FORMAT: 'Too small',
    INVALID_maxlength_FORMAT: 'Too long',
    INVALID_minlength_FORMAT: 'Too short',
    INVALID_password_FORMAT: 'Invalid password format',
    INVALID_shortname_FORMAT: 'Name is too long!',
    INVALID_url_FORMAT: 'Invalid URL format',
    INVALID_phone_FORMAT: 'Invalid phone format',
    ALREADY_EXISTS: 'The email you used has already been signed up. Use another one, or try to sign in.',
    INVALID_date_FORMAT: 'Invalid date format',
    FILE_LARGE: 'The size of the file is larger than the specified limit ($0 KB)',
    INVALID_FILE_FORMAT: 'The format of the file is not allowed. Allowed formats are: $0',
    PAGE_NOT_FOUND: 'Hmm! Once in a while, we change address and forget to update the mailman.',
    INVALID_FORM: 'Some fields are not valid, fix and submit again.',
    INVALID_LOGIN: 'Wrong username or password.',
    ShowMore: 'show more',
    Something: 'something',
    WelcomeCricketere: 'Welcome to Cricketere site',
    ForgotTitle: 'Request a new password',
    YourEmail: 'Your email',
    RemindMe: 'Remind me',
    WELCOME_TEXT: 'Hello cricketers',
    SinginGoogle: 'Sign in with Google',
    SinginMicrosoft: 'Sign in with Microsoft',
    SinginFacebook: 'Sign in with Facebook',
    SinginTwitter: 'Sign in with Twitter',
    Email: 'Email',
    Password: 'Password',
    SignIn: 'Sign in',
    ForgotPassword: 'Forgot password?',
    // inject:translations
    // endinject
  };

  global.cr = global.cr || {};
  global.cr.resources = {
    language: _Language,
    keys,
    localeId: _LocaleId
  }

  // for nodejs
  global.cr[_Language] = global.cr.resources;



})(typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global ||
  typeof window !== 'undefined' && window);

