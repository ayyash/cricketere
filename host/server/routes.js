const express = require('express');

// multilingual, non url driven, client side only

module.exports = function (app, config) {

    app.get('/robots.txt', function (req, res) {

        res.sendFile(config.rootPath + 'robots.txt');
    });

    app.get('/favicon.ico', function (req, res) {
        res.sendFile(config.rootPath + 'client/favicon.ico');
    });

    // make sure to handle index seperately, or set index: false in statics
    app.get('/', (req, res) => {

        // serve index file of default language
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.html`);
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

    app.use('/localdata', express.static(config.rootPath + '/localdata'));

    // TODO: test with index:false and move above? may be
    app.use(express.static(config.rootPath + '/client'));

    app.get('/*', (req, res) => {

        // serve index file of default language
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.html`);
    });




};
