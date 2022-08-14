const express = require('express');

// multilingual url driven, clientside only

module.exports = function (app, config) {



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


    app.use('/:lang/localdata/', express.static(config.rootPath + 'localdata'));
    // use static files in client, but skip index file
    app.use('/:lang', express.static(config.rootPath + 'client', { index: false }));


    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {
      // index/en/index.html better than index/index.en.url.index
      // or index/index.en.html for non url
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.url.html`);
    });

    // nothing matches? redirect to /root
    app.get('/*', (req, res) => {
        // if none, redirect
        res.redirect(301, '/' + res.locals.lang + req.path);
    });

};
