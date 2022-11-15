const express = require('express');

// multilingual url driven, clientside only

module.exports = function (app, config) {




    app.use('/localdata/', express.static(config.rootPath + 'localdata'));


    app.get('*.*', express.static(config.rootPath + 'client'));

    // use static files in client, but skip index file
    app.use(express.static(config.rootPath + 'client', {  extensions: ['html'], redirect: false, index: false}));


    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {
      // check existence of file first
      console.log(req.url);
      // check existence of file first
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.html`);
    });

    // nothing matches? redirect to /root
    app.get('/*', (req, res) => {
        // if none, redirect
        res.redirect(301, '/' + res.locals.lang + req.path);
    });

};
