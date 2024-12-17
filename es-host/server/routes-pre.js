const express = require('express');

// multilingual, non url driven, client side only

module.exports = function (app, config) {


    app.get('/robots.txt', (req, res) => {

        res.sendFile(config.rootPath + 'robots.txt');
    });

    app.get('/favicon.ico', (req, res) => {
        res.sendFile(config.rootPath + 'client/favicon.ico');
    });


    app.use('/localdata', express.static(config.rootPath + 'localdata'));


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
        // serve index file for all urls
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.html`);
    });


};
