const express = require('express');
// for ssr multilingual, URL driven, contains AppEngine
const ssr = require('./ng/main');
const localConfig = require('../localdata/config.prod.json');


module.exports = function (app, config) {

  // angular express html engine
  app.engine('html', ssr.AppEngine);
  app.set('view engine', 'html');
  app.set('views', config.rootPath + 'client');


  app.get('/robots.txt', (req, res) => {
    // robots, write something here to identify crawler
    // 'HTTP_USER_AGENT'
    // something like this
    /*
        User-agent: *
        Disallow: /
        User-agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
        Allow: /
    */
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


  app.post('/:lang/localdata/setsession', (req, res) => {
    // read req and save cookie
    const body = req.body;

    res.cookie(body.cookieName, JSON.stringify(body.auth), {expires: new Date(body.auth.expiresAt), sameSite: 'lax', secure: false, httpOnly: true });
    res.send(true);

  });

  app.post('/:lang/localdata/logout', (req, res) => {
    // read req and save cookie
    const body = req.body;

    res.clearCookie(body.cookieName, {sameSite: 'lax', secure: false, httpOnly: true});
    res.send(true);

  });
  // setup path for localdata in sub projects
  app.use('/:lang/localdata', express.static(config.rootPath + '/localdata', {
    fallthrough: false
  }));



  // ignore index file from client folder
  app.use('/:lang', express.static(config.rootPath + 'client', { index: false }));

  // lets add static, cannot afford this
  app.use('/', express.static(config.rootPath + 'client/static'));

  app.get(config.languages.map(n => `/${n}/*`), (req, res) => {

    res.render(config.rootPath + `index/index.${res.locals.lang}.url.html`, {
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

  app.get('/*', (req, res) => {
    // if none of the above redirect to ar/ or en/
    res.redirect(301, `/` + res.locals.lang + req.path);
  });



};
