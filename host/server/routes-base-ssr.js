const express = require('express');
// for ssr multilingual, URL driven, contains AppEngine
const ssr = require('./main');
const localConfig = require('../localdata/config.prod.json');

module.exports = function (app, config) {

     // angular express html engine
     app.engine('html', ssr.AppEngine);
     app.set('view engine', 'html');
     app.set('views', config.rootPath + 'client');



    // setup path for localdata in sub projects
    app.use('/localdata', express.static(config.rootPath + '/localdata', {
        fallthrough: false
    }));

    // ignore index file from client folder
    app.use('/', express.static(config.rootPath + 'client', {index: false}));


    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {

        //
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

    app.get('/*',  (req, res) => {
        // if none of the above redirect to ar/ or en/

        res.redirect(301, `/` + res.locals.lang + req.path);
    });



};