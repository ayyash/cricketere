const path = require("path");
const rootPath = path.normalize(__dirname + '/../');

// use this for different keys on server if any
// ssr and urlbased used to switch between different flavors of cricketere server

module.exports = {
    languages: ['en', 'ar'],
    env: process.env.Node_ENV || 'local',
    rootPath,
    ssr: true,
    urlBased: true,
    prepared: true,
    withAppBaseHref: false, // for hosts like netlify, express wont run for that
    langCookieName: 'cr-lang',
    projectPrefix: 'cr-',
    getLangPath: function (lang) {
        return `${rootPath}client/locale/${this.projectPrefix}${lang}.js`;
    },
    saveLangCookie: function(res, lang) {
        res.cookie(this.langCookieName, lang, { expires: new Date(Date.now() + 31622444360) });
    }
};
