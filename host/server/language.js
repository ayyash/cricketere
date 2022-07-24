// to make language change on ssr, use globals

module.exports = function (config) {

    return function (req, res, next) {

        // check cookies for language, for html request only
        res.locals.lang = req.cookies[config.langCookieName] || 'en';


        // exclude non html sources, for now exclude all resources with extension
        if (req.path.indexOf('.') > 1) {
            next();
            return;
        }


        // if urlbased (also multilingual) derive language from url
        if (config.urlBased) {
            // check the first segment of the url, find in supported languages
            res.locals.lang = config.languages.find(n => n === req.path.split('/')[1]) || res.locals.lang;

        }

        // in ssr populate resources with the language keys
        if (config.ssr) {

            require(config.getLangPath(res.locals.lang));

            // reassign global.cr.resources
            global.cr.resources = global.cr[res.locals.lang];

        }

        // set cookie for a year
        config.saveLangCookie(res, res.locals.lang);

        // res.cookie(config.langCookieName, res.locals.lang, { expires: new Date(Date.now() + 31622444360) });

        next();

    };
}

