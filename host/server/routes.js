const express = require('express');

// multilingual, non url driven, client side only
const renderer = require('./renderer');


module.exports = function (app, config) {

    renderer.htmlEngine(app);


    app.get('/robots.txt', (req, res) => {

        res.sendFile(config.rootPath + 'robots.txt');
    });

    app.get('/favicon.ico', (req, res) => {
        res.sendFile(config.rootPath + 'client/favicon.ico');
    });

    app.get('/locale/language.js', (req, res) => {
        // reroute according to lang
        res.sendFile(config.getLangPath(res.locals.lang));

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

    app.use('/localdata', express.static(config.rootPath + 'localdata'));



    // make sure to handle index seperately, or set index: false in statics
    // app.get('/', (req, res) => {

    //     // serve index file of default language
    //     res.sendFile(config.rootPath + `client/index.html`);
    // });

    // TODO: test with index:false and move above? may be
    app.use(express.static(config.rootPath + 'client'));


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

    app.get('/switchlang', (req, res) => {
        // save session of language then redirect
        config.saveLangCookie(res, req.query.lang);
        res.redirect(req.query.red);

    });


    app.get('/*', (req, res) => {
        // serve index file of default language
        renderer.htmlRender(res);
    });




};
