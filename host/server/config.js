var path = require("path");
var rootPath = path.normalize(__dirname + '/../');

// use this for different keys on server if any
// ssr and urlbased used to switch between different flavors of cricketere server

const languages = ['en', 'ar', 'tr']; // populate languages supported, for ssr and urlbased
module.exports = {
    local: {
        name: 'local',
        rootPath: rootPath,
        ssr: true,
        urlBased: true,
        languages
    }
    , production: {
        name: 'production',
        rootPath: rootPath,
        ssr: true,
        urlBased: true,
        languages
    },
    getConfig: function () {
        var env = process.env.NODE_ENV || 'local';


        return this[env];
    }
};
