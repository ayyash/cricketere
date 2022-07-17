const express = require('express');
const fs = require('fs');
// for ssr multilingual, URL driven, contains AppEngine
const ssr = require('./main');

const localConfig = require('../localdata/config.prod.json');


module.exports = function (app, config) {

    app.get('/robots.txt', function (req, res) {
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
    app.set('views', config.rootPath + '/client');

    app.get('/:lang/locale/language.js', function (req, res) {
        // reroute according to lang, does not matter what language is because its already set
        res.sendFile(config.getLangPath(res.locals.lang));

    });

    // setup path for localdata in sub projects
    app.use('/:lang/localdata', express.static(config.rootPath + '/localdata', {
        fallthrough: false
    }));

    // ignore index file from client folder
    app.use('/:lang', express.static(config.rootPath + '/client', {index: false}));

    app.get('/', function (req, res) {
        res.redirect(301, `/${res.locals.lang}/`);
    });

    // note to self, do not include trailing slash for this to catch both /en and /en/
    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {

        // serve index file relevant to language
        // require config and inject on ssr
        // for this work, index files must have baseHref correctly set to the language it serves
        // get the index file, and replace baseHref

        let content = fs.readFileSync(config.rootPath + `client/index.html`);
        const rendered = content.toString().replace('<base href="/">', `<base href="/${res.locals.lang}/">`);

        res.render(config.rootPath + `client/index.html`, {
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
            ],
            document: rendered
        });
    });

    app.get('/*', function (req, res) {
        // if none of the above redirect to ar/ or en/
        res.redirect(301, `/` + res.locals.lang + req.path);
    });



};
