const express = require('express');
const { existsSync } = require('fs');

// for ssr multilingual, non url driven, contains AppEngine
const ssr = require('./ng/main');
const localConfig = require('../localdata/config.prod.json');

module.exports = function (app, config) {

  // angular express html engine
  app.engine('html', ssr.AppEngine);
  app.set('view engine', 'html');
  app.set('views', config.rootPath + 'client');

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


  app.get('/switchlang', (req, res) => {
    // save session of language then redirect
    config.saveLangCookie(res, req.query.lang);
    res.redirect(req.query.red);

  });


  // setup path for localdata in sub projects

  app.use('/localdata', express.static(config.rootPath + '/localdata', {
    fallthrough: false
  }));


  app.get('*.*', express.static(config.rootPath + 'client'));

  // can't use this with prerender and no slash
  // app.use(express.static(config.rootPath + 'client', {
  //   index: false
  // }));

  app.use(express.static(config.rootPath + 'client/en', {extensions: ['html'], redirect: false, index: false}));
  app.use(express.static(config.rootPath + 'client/ar', {extensions: ['html'], redirect: false, index: false}));


  app.get('/*', (req, res) => {
    // first find the static page
    // console.log(req.path.split(';')[0] + '/index.html');

    // const static = config.rootPath + 'client/' + res.locals.lang + req.path.split(';')[0] + '.html';
    // console.log('ssssss', static);
    // if (existsSync(static)) {
    //   res.sendFile(static);
    //   return;
    // }
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
