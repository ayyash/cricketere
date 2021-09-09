// to make language change on ssr, use globals

module.exports = function (config) {
    return function (req, res, next) {

        // check cookies for language, for html request only
        res.locals.lang = req.cookies.lang || 'en';

        // TODO: exclude non html sources, for now exclude all resources with extension
        if (req.path.indexOf('.') > 1) {
            next();
            return;
        }

        // if urlbased (also multilingual) derive language from url
        if (config.urlBased) {
            for (let lang of config.languages) {
                if (req.path.indexOf('/' + lang) === 0) {
                    res.locals.lang = lang; // force en from url
                }
            }
        }

        // in ssr populate resources with the language keys
        if (config.ssr) {
            global.resources.language = res.locals.lang;
            global.resources.keys = global.resources.allLanguages[res.locals.lang];
        }

        // set cookie for a year
        res.cookie('lang', res.locals.lang, { expires: new Date(Date.now() + 31622444360) });

        next();

    };
}
