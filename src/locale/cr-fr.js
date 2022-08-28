// make it run on both platforms
(function (global) {

   // task:replace
   const _LocaleId = 'fr-CA';
   const _Language = 'fr';
   // task:endreplace

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

