
function getCountry() {
    if (window) {
        const _country = document.cookie.split(';').find(n => n.indexOf('country') > -1);
        if (_country) {
           return _country.split('=')[1];
        }
    }
    return 'JO';
}
const resources = {
    language: "ar",
    country: getCountry(),
    keys: {}
};

resources.keys = {
    "Unknown": "حسنًأ. في النظام أمرٌ لم يعمل. نحن ننظر في الأمر الآن.",
    "SITE_NAME": "كريكت",
    "NoRes": "",
    "DONE": "انتهى",
    "UNAUTHORIZED": "سجّل دخول أولًا.",
    "SAVED": "حفظ بنجاح",
    "INVALID_VALUE": "القيمة المدخلة في غير الحيّز المتاح",
    "INVALID_LENGTH": "طول القيمة المدخلة في خير الحيّز المتاح",
    "INVALID_FORMAT": "صيغة القيمة غير صحيحة",
    "INAVLID_NUMBER": "ليس رقمًا",
    "INVALID_email_FORMAT": "صيقة البريد الالكتروني غير صحيحة",
    "INVALID_url_FORMAT": "صيغة عنوان الموقع الالكتروني غير صحيحة",
    "INVALID_phone_FORMAT": "صيغة رقم الهاتف قير مقبولة",
    "INVALID_date_FORMAT": "صيغة التاريخ غير مقبولة",
    "FILE_LARGE": "حجم الملف أكبر من الحد المسموح ($0 KB)",
    "INVALID_FILE_FORMAT": "نوع الملف غير مقبولة. الأنواع المسموحة هي: $0",
    "INVALID_FORM": "بعض الحقول غير صحيحة، أصلح القيم وحاول من جديد.",
    "Days": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    "AM": "ص",
    "PM": "م",
    "FOR": "لمدة",
    "SINCE": "منذ",
    "RELATIVE_TIME": {
        "AGO": "قبل $0",
        "SECONDS": { "1": "ثانية واحدة", "2": "ثانيتين", "3": "ثوانٍ", "11": "$0 ثانية" },
        "MINUTES": { "1": "دقيقة واحدة", "2": "دقيقتين", "3": "دقائق", "11": "$0 دقيقة" },
        "HOURS": { "1": "ساعة واحدة", "2": "ساعتين", "3": "$0 ساعات", "11": "$0 ساعة" },
        "DAYS": { "1": "يوم واحد", "2": "يومين", "3": "$0 أيام", "11": "$0 يوما" },
        "MONTHS": { "1": "شهر واحد", "2": "شهرين", "3": "$0 أشهر", "11": "$0 شهرا" },
        "YEARS": { "1": "سنة واحدة", "2": "سنتين", "3": "$0 سنوات", "11": "$0 سنة" }
    },
    "DEFAULT_PAGE_TITLE": "أهلا",
    "WELCOME_TEXT": "أهلا كريكت",
    // inject:translations
    "ShowMore": "show more",
    "WelcomeCricketere": "أهلا وسهلا",
    // endinject
};
