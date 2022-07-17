const express = require('express');

// multilingual url driven, clientside only

module.exports = function (app, config) {
    const fs = require('fs') // this engine requires the fs module
    app.engine('html', (filePath, options, callback) => { // define the template engine
      fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);

        const rendered = content.toString()
          .replace('<base href="/">', `<base href="/${options.lang}/">`);
        return callback(null, rendered)
      })
    });

    app.set('view engine', 'html');
    app.set('views', config.rootPath + 'client');

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


    app.get('/:lang/locale/language.js', function (req, res) {
        // reroute according to lang, does not matter what language is because its already set
        res.sendFile(config.getLangPath(res.locals.lang));

    });


    app.use('/:lang/localdata/', express.static(config.rootPath + '/localdata'));
    // use static files in client, but skip index file
    app.use('/:lang', express.static(config.rootPath + '/client', {index: false}));

    app.get('/', function (req, res) {
        // redirect to last saved language
        res.redirect(301, `/${ res.locals.lang }/`);
    });


    app.get(config.languages.map(n => `/${n}/*`), function(req, res){

        res.render(config.rootPath + `client/index.html`, {lang: res.locals.lang});
    });
    // app.get('/:lang/*', function (req, res) {
    //     // if none of the above go back to index file of the language request
    //     // lets check language, if not part of existing supproted languages lets redirect
    //     if (!config.languages.includes(req.params.lang)) {
    //         // extract the path
    //         res.redirect(301, `/${ res.locals.lang }/${req.params[0]}`);
    //     } else {

    //         res.render(config.rootPath + `client/index.html`, {lang: res.locals.lang});
    //     }
    // });



    // nothing matches? redirect to /root
    app.get('/*', function (req, res) {
        // if none, redirect
        res.redirect(301, '/' + res.locals.lang + req.path);
    });

};
