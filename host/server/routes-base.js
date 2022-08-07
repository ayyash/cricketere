const express = require('express');

// multilingual url driven, clientside only

module.exports = function (app, config) {




    app.use('/localdata/', express.static(config.rootPath + 'localdata'));
    // use static files in client, but skip index file
    app.use('/', express.static(config.rootPath + 'client', { index: false }));


    app.get(config.languages.map(n => `/${n}/*`), (req, res) => {
        res.sendFile(config.rootPath + `index/index.${res.locals.lang}.url.html`);
    });

    // nothing matches? redirect to /root
    app.get('/*', (req, res) => {
        // if none, redirect
        res.redirect(301, '/' + res.locals.lang + req.path);
    });

};
