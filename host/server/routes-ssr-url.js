const express = require('express');
// for ssr multilingual, URL driven, contains AppEngine
const ssr = require('./ng/main');
const renderer = require('./renderer');

module.exports = function (app, config) {

     // angular express html engine
     app.engine('html', ssr.AppEngine);
     app.set('view engine', 'html');
     app.set('views', config.rootPath + 'client');


    app.get('/robots.txt', (req, res) => {
        // robots, write something here to identify crawler
        // 'HTTP_USER_AGENT'
        // something like this
        /*
            User-agent: *
            Disallow: /
            User-agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
            Allow: /
        */
        res.sendFile(config.rootPath + 'robots.txt');
    });

    app.get('/favicon.ico',  (req, res) => {
        res.sendFile(config.rootPath + 'client/favicon.ico');
    });


    // for debugging
    app.get('/webinfo', (req, res) => {
        res.json({
            'request': {
                connection: req.connection.address,
                connection2: req.connection.remoteAddress,
                headers: req.headers,
                // host: req.host,
                hostname: req.hostname,
                ip: req.ip,
                ips: req.ips,
                path: req.path,
                protocol: req.protocol,
                secure: req.secure,
                subdomains: req.subdomains,
                baseUrl: req.baseUrl,
                originalUrl: req.originalUrl,
                cookies: req.cookies
            }
        });
    });


    app.get('/:lang/locale/language.js',  (req, res) => {
        // reroute according to lang, does not matter what language is because its already set

        res.sendFile(config.getLangPath(res.locals.lang));

    });
    // app.get('/:lang/styles.css', (req, res) => {
    //     if (res.locals.lang === 'ar') {
    //         res.sendFile(config.rootPath + 'client/styles.rtl.css');
    //     } else {
    //         res.sendFile(config.rootPath + 'client/styles.ltr.css');
    //     }
    // });
    // app.get('/:lang/fonts.css', (req, res) => {
    //     if (res.locals.lang === 'ar') {
    //         res.sendFile(config.rootPath + 'client/fonts.rtl.css');
    //     } else {
    //         res.sendFile(config.rootPath + 'client/fonts.ltr.css');
    //     }
    // });
    // setup path for localdata in sub projects
    app.use('/:lang/localdata', express.static(config.rootPath + '/localdata', {
        fallthrough: false
    }));

    // ignore index file from client folder
    app.use('/:lang', express.static(config.rootPath + 'client', {index: false}));


    // note to self, do not include trailing slash for this to catch both /en and /en/
    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {

        // serve index file relevant to language
        // require config and inject on ssr
        // for this work, index files must have baseHref correctly set to the language it serves
        // get the index file, and replace baseHref

        renderer.ngEngine(req, res);
    });

    app.get('/*',  (req, res) => {
        // if none of the above redirect to ar/ or en/
        res.redirect(301, `/` + res.locals.lang + req.path);
    });



};
