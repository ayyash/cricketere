const express = require('express');

// multilingual url driven, clientside only

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

    // setup path for localdata in sub projects
    /************ URL DRIVEN langage *****/
    app.get('/', function (req, res) {
        res.redirect(301, `/en/`);
    });

    // set all supported languages
    app.get(['/en', '/ar', '/tr'], (req, res) => {

        // render the right html file
        // for this work, index files must have baseHref correctly set to the language it serves
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.html`);
    });

    app.use(/^\/(en|ar|tr)\/localdata/, express.static(config.rootPath + '/localdata'));

    // use static files in client
    app.use(['/en', '/ar', '/tr'], express.static(config.rootPath + '/client'));

    app.get(/^\/(en|ar|tr)\/*/, function (req, res) {
        // if none of the above go back to index file of the language request
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.html`);
    });


    app.get('/*', function (req, res) {
        // if none, redirect
        res.redirect(301, `/en` + req.path);
    });

};
