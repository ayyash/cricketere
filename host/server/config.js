const path = require("path");
const rootPath = path.normalize(__dirname + '/../');

// use this for different keys on server if any
// ssr and urlbased used to switch between different flavors of cricketere server

module.exports = {
    languages: ['en', 'ar'],
    env: process.env.Node_ENV || 'local',
    rootPath,
    ssr: false,
    urlBased: false,
    langCookieName: 'cr-lang',
    projectPrefix: 'cr-',
    getLangPath: function (lang) {
        return `${rootPath}client/locale/${this.projectPrefix}${lang}.js`;
    }
};
