// here is proper gulping

const gulp = require('gulp');
// those plugins are not kept up to date, may be one day we shall replace them?
const rename = require('gulp-rename');
const transform = require('gulp-transform');

const options = {
  // relative to gulpfile.js location
  source: '../host/surge/placeholder.html',
  destination: '../host/surge/',
  fileName: 'index.html',
  languages: [
    { name: 'ar', isRtl: true },
    { name: 'en', isRtl: false },
    { name: 'fr', isRtl: false },
  ],
};

const reLTR = /<!-- #LTR -->([\s\S]*?)<!-- #ENDLTR -->/gim;
const reRTL = /<!-- #RTL -->([\s\S]*?)<!-- #ENDRTL -->/gim;
const reLang = /\$lang/gim;

// base function, returns a function to be used as a task
const baseFunction = function (lang) {
  // read placeholder.html
  return function () {
    // source the placeholder.html
    return gulp.src(options.source).pipe(
      // transform it with speific language
      transform(function (contents, file) {
        // rewrite content with regexp
        if (lang.isRtl) {
          // remove reLTR
          contents = contents.replace(reLTR, '');
        } else {
          contents = contents.replace(reRTL, '');
        }

        //  replace lang
        return contents.replace(reLang, lang.name);

      }, { encoding: 'utf8' }))
      // rename file to lang/index.html
      .pipe(rename(options.fileName))
      // save to destination
      .pipe(gulp.dest(options.destination + lang.name));
  };
};

const allIndexFiles = options.languages.map(language => baseFunction(language));

// run in parallel
exports.LocalizeIndex = gulp.parallel(...allIndexFiles);
