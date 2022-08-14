const locales = require('./locales');
const folders = require('./locales/folders');

exports.writeindex = locales.LocalizeIndex;
exports.writeIndexFolders = folders.LocalizeIndex;
