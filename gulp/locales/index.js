// here is proper gulping

const gulp = require('gulp');
// those plugins are not kept up to date, may be one day we shall replace them?
const rename = require('gulp-rename');
const transform = require('gulp-transform');

const options = {
  // relative to gulpfile.js location
  source: '../host/client/placeholder.html',
  destination: '../host/newindex',
  // allow both types of apps
  isUrlBased: false,
  languages: [
    { name: 'ar', isRtl: true },
    { name: 'en', isRtl: false },
    { name: 'fr', isRtl: false },
  ],
};

const reLTR = /<!-- #LTR -->([\s\S]*?)<!-- #ENDLTR -->/gim;
const reRTL = /<!-- #RTL -->([\s\S]*?)<!-- #ENDRTL -->/gim;
const reLang = /\$lang/gim;
const reBase = /\$basehref/gim;

// base function, returns a function to be used as a task
const baseFunction = function (urlBased, lang) {
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
        contents = contents.replace(reLang, lang.name);
        // replace base href
        return contents.replace(reBase, urlBased ? `/${lang.name}/` : '/');

      }, { encoding: 'utf8' }))
      // rename file to index.lang.url.html
      .pipe(rename({ basename: `index.${lang.name}${urlBased ? '.url' : ''}` }))
      // save to destination
      .pipe(gulp.dest(options.destination));
  };
};

// for tutorual purposes, create both url and cookie based files
const allIndexFiles = [];

options.languages.forEach((n) => {
  allIndexFiles.push(baseFunction(true, n));
  allIndexFiles.push(baseFunction(false, n));
});

// real life, one option
// const allIndexFiles = options.languages.map(language => baseFunction(options.isUrlBased, language));

// run in parallel
exports.LocalizeIndex = gulp.parallel(...allIndexFiles);
