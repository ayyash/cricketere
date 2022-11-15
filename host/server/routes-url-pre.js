const express = require('express');
const existsSync = require('fs').existsSync;
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
    app.use('/:lang/localdata', express.static(config.rootPath + 'localdata'));


  // to prerender en and ar, open up client on root, wont work with slash
    // app.use(express.static(config.rootPath + 'client'));
    app.use(express.static(config.rootPath + 'client', {extensions: ['html'], redirect: false}));


    // use static files in client, but skip index file, we cannot use "*.*" here
    app.use('/:lang', express.static(config.rootPath + 'client', {index: false, redirect: false}));

    // to get trailing slash, doesnt matter, angular will place the slash
    // app.get(config.languages.map(n => `/${n}`), (req, res) => {
    //   res.sendFile(config.rootPath + `index/index.${res.locals.lang}.url.html`);
    // });


    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {

      // index/en/index.html better than index/index.en.url.index
      // or index/index.en.html for non url
      // for prerendering and no slash, you might use this without langage, its part of url
      // const static = config.rootPath + 'client/' + req.path.split(';')[0] + '/index.html';
      // if (existsSync(static)) {
      //   res.sendFile(static);
      //   return;
      // }

        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.url.html`);
    });

    // nothing matches? redirect to /root
    app.get('/*', (req, res) => {
        // if none, redirect
        res.redirect(301, '/' + res.locals.lang + req.path);
    });

};
