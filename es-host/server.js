import express from 'express';
import prerender from './prerender/fetch.js';
import config from './server/config.js';
import country from './server/country.js';
import expressConfig from './server/express.js';
import language from './server/language.js';
import routesBase from './server/routes-base.js';
import routes from './server/routes.js';

/*********************Configuration***********/

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
    clear: function () {},
    removeItem: function (key) {},
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
  };
  global._seqlog = function (message) {
    // console.log(message);
  };
}

/******* EXPRESS *******/
const app = express();

expressConfig(app);

app.use(country(config));

// for language, even if single, always set to default
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
  routesBase(app, config);
} else {
  routes(app, config);
}

app.get('/', function (req, res) {
  res.redirect(301, `/en/`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('404');
  err.statusCode = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.stack);
  err.internalMessage = err.message; // the server error to display in debug mode
  res.send(err);
});

/*************** listening  ***************/

const port = process.env.PORT || 1201;

// two solutions either if else ports, or separate this into a different file, create another listener for prerender
const server = app.listen(port, async function (err) {
  console.log('started to listen to port: ' + port);

  if (err) {
    console.log(err);
    return;
  }
  // if process.env.PRERENDER, then run this and close
  if (process.env.PRERENDER) {
    await prerender(port, config);
    console.log('Done prerendering');
    server.close();
  }
});
