const fs = require('fs');
const ssr = require('./main');

const config = require('./config');
const localConfig = require('../localdata/config.prod.json');

let content = fs.readFileSync(config.rootPath + `index/index.en.url.html`);

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
        if (config.env === 'local') {
            // console.log(message, o);
        }

    };
    global._attn = function (o, message) {
        if (config.env === 'local') {
            console.log(message, o);
        }
    }
    global._seqlog = function (message) {
        // console.log(message);
    }
    require(config.getLangPath('en'));

    // reassign global.cr.resources
    global.cr.resources = global.cr['en'];

function renderToHtml(url, folderPath) {
  // Render the module with the correct url just
  // as the server would do
  ssr.renderModule(ssr.AppServerModule, {
    url,
    document: content
  }).then(html => {
    // create the route directory

    console.log(html);
  });
}

const paths = [
  '/content/details'
]

paths.forEach(p => renderToHtml(p, './client/' + p));
