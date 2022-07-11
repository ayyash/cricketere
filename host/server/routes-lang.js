const express = require('express');



const localConfig = require('../localdata/config.prod.json');


module.exports = function (app, config, lang) {
    // for ssr multilingual, URL driven, contains AppEngine

    global.resources._LOCALE_ID = lang;
    const ssr = require('./main');

    console.log(global.resources._LOCALE_ID, 'after route');
    const route = express.Router();

    // angular express html engine

    app.engine('html', ssr.AppEngine);
    app.set('view engine', 'html');
    app.set('views', config.rootPath + '/client');

    // setup path for localdata in sub projects
    route.use('localdata', express.static(config.rootPath + '/localdata', {
        fallthrough: false
    }));

    // ignore index file from client folder
    route.use(express.static(config.rootPath + '/client', {
        index: false
    }));

    // app.get('/', function (req, res) {
    //     res.redirect(301, `/en/`);
    // });

    // note to self, do not include trailing slash for this to catch both /en and /en/
    // TODO: test in real url
    route.get('/', (req, res) => {

        // serve index file relevant to language
        // require config and inject on ssr
        // for this work, index files must have baseHref correctly set to the language it serves
        res.render(`../index/index.${lang}.html`, {
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

    route.get('/*', function (req, res) {
        // if none of the above redirect to ar/ or en/
        res.redirect(301, `/` + req.path);
    });

    return route;

};
