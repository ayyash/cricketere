const express = require('express');

/*********************Configuration***********/
const config = require('./server/config');


// for ssr to run, define global
if (config.ssr) {


    global.window = undefined;

    // override localStorage on server side
    global.localStorage = {
        getItem: function (key) {
            return null;

        },
        setItem: function (key, value) {

            // console.log('setting item', key, value);
        },
        clear: function () {
        },
        removeItem: function (key) {
        },
        length: 0
    };
    global._debug = function (o, message, type) {
        if (config.env === 'local') {
            // console.log(message, o);
        }

    };
    global._attn = function (o, message) {

        if (config.env === 'local') {
            // console.log(message, o);
        }
    }
    global._seqlog = function (message) {
      if (config.env === 'local') {
        // console.log(message);
    }
    }


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


// TODO: test language change in ssr


// serve the right router
const _routes = (config.ssr ? '-ssr' : '') + (config.urlBased ? '-url' : '') + (config.prepared ? '-pre' : '');
if (config.withAppBaseHref) {
    // special case with appbase href used in client

    require('./server/routes-base' + (config.ssr ? '-ssr' : ''))(app, config);
} else {

    require('./server/routes' + _routes)(app, config);
}

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

// two solutions either if else ports, or seperate this into a different file, create another listenered for prerender
const server =  app.listen(port, async function (err) {
    console.log('started to listen to port: ' + port);

    if (err) {
        console.log(err);
        return;
    }
    // if proces.env.PRERENDER, then run this and close

    if (process.env.PRERENDER) {
      const prerender = require('./prerender/fetch');
      await prerender(port, config);
      console.log('Done prerendering');
      server.close();

    }

});
