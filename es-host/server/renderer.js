const fs = require('fs');
const config = require('./config');
const localConfig = require('../localdata/config.prod.json');


// process the html, remove base href, and styles and fonts
// create the regular expressions to look for in index

// FIXME: pass the config
const reLTR = /<!-- #LTR -->([\s\S]*?)<!-- #ENDLTR -->/gim;
const reRTL = /<!-- #RTL -->([\s\S]*?)<!-- #ENDRTL -->/gim;
const reLang = /\$lang/gim;

const process = function (html, lang) {
  let contents = html.toString();
  // if config is with URL, change the base href
  if (config.urlBased) {
    contents = contents.replace('<base href="/">', `<base href="/${lang}/">`);
  }
  // if lang is ar, remove ltr and keep rtl

  if (lang === 'ar') {
    // remove reLTR
    contents = contents.replace(reLTR, '');
  } else {

    contents = contents.replace(reRTL, '');
  }

  // also replace lang
  contents = contents.replace(reLang, lang);

  return contents;

}
exports.htmlRender = function (res) {
  res.render(config.rootPath + `client/index.html`, { lang: res.locals.lang });

}

exports.htmlEngine = function (app) {
  app.engine('html', (filePath, options, callback) => { // define the template engine

    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);

      // const rendered = content.toString().replace('<base href="/">', `<base href="/${options.lang}/">`);
      const rendered = process(content, options.lang);
      return callback(null, rendered)
    });
  });

};


exports.ngEngine = function (req, res) {
  let content = fs.readFileSync(config.rootPath + `client/index.html`);
  const rendered = process(content, res.locals.lang);

  res.render('', {
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
    document: rendered,
    // inlineCriticalCss: false
  });
};



// exports.crEngine = function (filePath, options, callback) {
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err);

//     const rendered = process(content, options.lang);
//     return callback(null, rendered)
//   });
// }
