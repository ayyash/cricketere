const express = require('express');

// for ssr multilingual, non url driven, contains AppEngine
const ssr = require('./main');

// TODO: add to config.js
const localConfig = require('../localdata/config.prod.json');

module.exports = function (app, config) {

    app.get('/robots.txt', function (req, res) {
        res.sendFile(config.rootPath + 'robots.txt');
    });

    app.get('/favicon.ico', function (req, res) {
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

    // angular express html engine
    app.engine('html', ssr.AppEngine);
    app.set('view engine', 'html');
    app.set('views', config.rootPath + 'client');

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

        res.render(config.rootPath + `index/index.${res.locals.lang}.html`, {
            req,
            res,
            providers: [
                {
                    provide: 'serverUrl',
                    useValue: res.locals.serverUrl
                },
                {
                    provide: 'localConfig',
                    useValue: localConfig
                }
            ]
        });
    });




};
