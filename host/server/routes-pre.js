const express = require('express');
const existsSync = require('fs').existsSync;

// multilingual, non url driven, client side only
// / *.* does not do much

module.exports = function (app, config) {


  app.get('/robots.txt', (req, res) => {

    res.sendFile(config.rootPath + 'robots.txt');
  });

  app.get('/favicon.ico', (req, res) => {
    res.sendFile(config.rootPath + 'client/favicon.ico');
  });


  app.use('/localdata', express.static(config.rootPath + 'localdata'));


  app.get('*.*', express.static(config.rootPath + 'client'));


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

  // open up static folders for this non url driven app
  app.use(express.static(config.rootPath + 'client/en', {extensions: ['html'], redirect: false, index: false}));
  app.use(express.static(config.rootPath + 'client/ar', {extensions: ['html'], redirect: false, index: false}));

  app.get('/*', (req, res) => {

    // for prerendering find the physical file first
    // const static = config.rootPath + 'client/' + res.locals.lang + req.path.split(';')[0] + '/index.html';
    // if (existsSync(static)) {
    //   res.sendFile(static);
    //   return;
    // }

    // serve index file for all urls
    res.sendFile(config.rootPath + `index/index.${res.locals.lang}.html`);
  });


};
