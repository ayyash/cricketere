const config = require('./config.json');
// setup config

// one specific way to run only assets
// const assets = require('@sekrab/gulpbin/gulpfiles.js/shut/assets')(config);
// const ng = require('@sekrab/gulpbin/gulpfiles.js/angular/ng');
// ng.config(config);
// export all ng[keys], or select ones: exports.inject = ng.injectAll; masalan

// Object.keys(assets).forEach(i => {
// 	exports[i] = assets[i];
// });


// or bring them all in
const gulpBin = require('@sekrab/gulpbin')(config);


Object.keys(gulpBin).forEach(i => {
    Object.keys(gulpBin[i]).forEach( x =>  {
        exports[x] = gulpBin[i][x];

    });
});

