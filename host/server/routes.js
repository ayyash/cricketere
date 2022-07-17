const express = require('express');

// multilingual, non url driven, client side only

module.exports = function (app, config) {

    app.get('/robots.txt', function (req, res) {

        res.sendFile(config.rootPath + 'robots.txt');
    });

    app.get('/favicon.ico', function (req, res) {
        res.sendFile(config.rootPath + 'client/favicon.ico');
    });

    app.get('/locale/language.js', function (req, res) {
        // reroute according to lang
        res.sendFile(config.getLangPath(res.locals.lang));

    });

    app.use('/localdata', express.static(config.rootPath + '/localdata'));



    // make sure to handle index seperately, or set index: false in statics
    // app.get('/', (req, res) => {

    //     // serve index file of default language
    //     res.sendFile(config.rootPath + `client/index.html`);
    // });

    // TODO: test with index:false and move above? may be
    app.use(express.static(config.rootPath + '/client'));


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


    app.get('/*', (req, res) => {
        // serve index file of default language
        res.sendFile(config.rootPath + `client/index.html`);
    });




};
