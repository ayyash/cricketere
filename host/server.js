const express = require('express');
const fs = require('fs');

/*********************Configuration***********/
var config = require('./server/config').getConfig();


// for ssr to run, define global
if (config.ssr) {
    // global.WebSocket = require('ws');
    // global.XMLHttpRequest = require('xhr2');

    global.window = undefined;

    // override localStorage on server side
    global.localStorage = {
        getItem: function (key) {
            return null;

        },
        setItem: function (key, value) {

            console.log('setting item', key, value);
        },
        clear: function () {
        },
        removeItem: function (key) {
        },
        length: 0
    };
    global._debug = function (o, message, type) {
        if (config.name === 'local') {
            // console.log(message, o);
        }

    };
    global._attn = function (o, message) {
        if (config.name === 'local') {
            console.log(message, o);
        }
    }
    global._seqlog = function (message) {
        // console.log(message);
    }

    // to make language change on ssr, use globals
    // relying on cookie is coupling it with client side resources, unable to use reference of keys, always resources.keys, explicity
    global.resources = {
        language: 'en',
        country: 'JO',
        keys: {},
        _LOCALE_ID: 'en-US'
    };

    // get all languages here (keys)
    global.resources.allLanguages = {}

    for (let lang of config.languages) {
        const resFile = './client/locale/' + lang + '.js';
        if (fs.existsSync(resFile)) {
            global.resources.allLanguages[lang] = require(resFile).resources.keys;
        }

    }

    // global.WebConfig = require('./localdata/config.js');

}

/******* EXPRESS *******/
var app = express();

require('./server/express')(app);

var country = require('./server/country');
app.use(country(config));

// for language, even if single, always set to default
var language = require('./server/language');
app.use(language(config));

// for ssr use
app.use(function (req, res, next) {

    // also save serverUrl to use with local interceptor
    let proto = req.protocol;
    if (req.headers) {
        if (req.headers['x-forwarded-proto']) {
            proto = req.headers['x-forwarded-proto'].toString();
        }

    }
    res.locals.serverUrl = `${proto}://${req.get('host')}`;
    next();
});



// serve the right router
const _routes = (config.ssr ? '-ssr' : '') + (config.urlBased ? '-url' : '');
require('./server/routes' + _routes)(app, config);

app.get('/', function (req, res) {
    res.redirect(301, `/en/`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('404');
    err['statusCode'] = 404;

    next();
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.stack);
    err.internalMessage = err.message; // the server error to display in debug mode
    res.send(err);
});

/*************** listening  ***************/

var port = process.env.PORT || 1212;

app.listen(port, function (err) {
    console.log('started to listen to port: ' + port);
    if (err) {
        console.log(err);
        return;
    }
});
