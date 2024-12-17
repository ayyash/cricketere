const express = require('express');

// multilingual url driven, clientside only
const renderer = require('./renderer');

module.exports = function (app, config) {

    renderer.htmlEngine(app);

    // app.set('view engine', 'html');
    // app.set('views', config.rootPath + 'client');

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


    app.get('/:lang/locale/language.js', (req, res) => {
        // reroute according to lang, does not matter what language is because its already set
        res.sendFile(config.getLangPath(res.locals.lang));

    });

    // app.get('/:lang/locale/styles.css', (req, res) => {
    //     if (res.locals.lang === 'ar') {
    //         res.sendFile(config.rootPath + 'client/assets/styles.rtl.css');
    //     } else {
    //         res.sendFile(config.rootPath + 'client/assets/styles.ltr.css');
    //     }
    // });
    // app.get('/:lang/locale/fonts.css', (req, res) => {
    //     if (res.locals.lang === 'ar') {
    //         res.sendFile(config.rootPath + 'client/assets/fonts.rtl.css');
    //     } else {
    //         res.sendFile(config.rootPath + 'client/assets/fonts.ltr.css');
    //     }
    // });

    app.use('/:lang/localdata/', express.static(config.rootPath + 'localdata'));
    // use static files in client, but skip index file
    app.use('/:lang', express.static(config.rootPath + 'client', { index: false }));

    // app.get('/', function (req, res) {
    //     // redirect to last saved language
    //     res.redirect(301, `/${ res.locals.lang }/`);
    // });


    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {
        renderer.htmlRender(res);
    });

    // nothing matches? redirect to /root
    app.get('/*', (req, res) => {
        // if none, redirect
        res.redirect(301, '/' + res.locals.lang + req.path);
    });

};
