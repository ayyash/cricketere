const locales = require('./locales');
const extract = require('./locales/extract');

const options = {
  // relative to gulpfile.js location
  source: '../host/client/placeholder.html',
  destination: '../host/index/',
  fileName: 'index.html',
  isUrlBased: false,
  withFolders: false,
  languages: [
    { name: 'ar', isRtl: true , localeId: 'ar-JO', isDefault: true},
    { name: 'en', isRtl: false , localeId: 'en'},
    { name: 'fr', isRtl: false , localeId: 'fr-CA'}

  ],
  prefix: 'cr'
};

exports.writeindex = locales({ ...options, isUrlBased: true });
exports.writenetlify = locales({
  ...options,
  source: '../netlify/client/placeholder.html',
  destination: '../netlify/client/'
});

exports.writesurge = locales({
  ...options,
  source: '../surge/client/placeholder.html',
  destination: '../surge/client/',
  fileName: '200.html',
  withFolders: true
});


exports.writefirebase = locales({
  ...options,
  source: '../firebase/client/placeholder.html',
  destination: '../firebase/client/',
  withFolders: true
});


const translateOptions = {
  scan: '../src/app/components',
	destination: '../src/locale/',

}
// extract translation
exports.extract = extract({...options, translate: {...translateOptions}});
