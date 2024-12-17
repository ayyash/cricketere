const express = require('express');

// for ssr multilingual, non url driven, contains AppEngine
const ssr = require('./ng/main');
const renderer = require('./renderer');

module.exports = function (app, config) {

    // angular express html engine
    app.engine('html', ssr.AppEngine);
    app.set('view engine', 'html');
    app.set('views', config.rootPath + 'client');

    app.get('/robots.txt', (req, res) => {
        res.sendFile(config.rootPath + 'robots.txt');
    });

    app.get('/favicon.ico', (req, res) => {
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


    // add longuage reroute here
    app.get('/locale/language.js', (req, res) => {
        // reroute according to lang
        res.sendFile(config.getLangPath(res.locals.lang));

    });

    app.get('/switchlang', (req, res) => {
        // save session of language then redirect
        config.saveLangCookie(res, req.query.lang);
        res.redirect(req.query.red);

    });


    // app.get('/styles.css', (req, res) => {
    //     if (res.locals.lang === 'ar') {
    //         res.sendFile(config.rootPath + 'client/styles.rtl.css');
    //     } else {
    //         res.sendFile(config.rootPath + 'client/styles.ltr.css');
    //     }
    // });
    // app.get('/fonts.css', (req, res) => {
    //     if (res.locals.lang === 'ar') {
    //         res.sendFile(config.rootPath + 'client/fonts.rtl.css');
    //     } else {
    //         res.sendFile(config.rootPath + 'client/fonts.ltr.css');
    //     }
    // });


    // setup path for localdata in sub projects

    app.use('/localdata', express.static(config.rootPath + '/localdata', {
        fallthrough: false
    }));

    // ignore index file from client folder
    /*
        * ngExpressEngine engine favors /client/index.html over rendered index, so the client/index.html must be renamed (by angular.json)
        * lines:  pageExists = yield exists(pagePath); returns true if files exists
     */
    app.use(express.static(config.rootPath + 'client', {
        index: false
    }));



    app.get('/*', (req, res) => {

        // serve index file relevant to language
        // require config and inject on ssr
        // for this work, index files must have baseHref correctly set to the language it serves
        renderer.ngEngine(req, res);
    });




};
