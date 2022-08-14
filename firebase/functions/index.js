const functions = require('firebase-functions');
const config = require('../config.prod.json');

exports.serveLocalized = functions.https.onRequest((req, res) => {

  // find cr-lang cookie
  const cookie = req.headers.cookie;
  let lang = 'en';
  const cookieName = config.Res.cookieName;

  if (cookie.indexOf(cookieName) > -1) {
    lang = cookie.split(cookieName + '=')[1].split(';')[0];
  }
  // serve the right index file
  res.status(200).sendFile(`index.${lang}.html`, {root: '../client/'});
});
