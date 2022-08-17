const gulp = require('gulp');
const inject = require('gulp-inject');
const transform = require('gulp-transform');

const _translateReg = /\s*["']([\w\d?.,!\s\(\)]+)["']\s*\|\s*translate:['"]([\w]+)['"]\s*/gim;

/*
nice to have
catch count
['"]?([\w\d?.,!\s\(\)]+)['"]?\s*\|\s*translate:['"]([\w]+)['"]:(\d+)


catch select
["']?([\w\d?.,!\s\(\)]+)["']?\s*\|\s*translate:['"]([\w]+)['"]:null:["']([\w\d?.,!\s\(\)]+)["']


catch normal
['"]?([\w\d?.,!\s\(\)]+)['"]?\s*\|\s*translate:['"]([\w]+)['"][^:]
*/
const getSources = function (scan) {
  return gulp.src([scan + '/**/*.ts', scan + '/**/*.html']);
}

const extractFunction = function (options, lang) {
  return function () {
    // let returnStr = '';
    let allKeys = [];
    return gulp.src(`${options.translate.destination}${options.prefix}-${lang.name}.js`)
      .pipe(inject(getSources(options.translate.scan), {
        starttag: '// inject:translations',
        endtag: '// endinject',
        empty: true,
        transform: function (
          filePath,
          file,
          index,
          length,
          targetFile
        ) {
          // for every translate pipe found, insert a new line name: 'value'
          // before you do, check if the match already exists

          // returnStr = '';
          const content = file.contents.toString('utf8');
          const destination = targetFile.contents.toString('utf8');

          let _match;
          let keys = [];
          while ((_match = _translateReg.exec(content))) {
            // extract first and second match
            if (destination.indexOf(_match[2] + ':') < 0 && allKeys.indexOf(_match[2]) < 0) {
              // returnStr += `${_match[2]}: '${_match[1]}',`;
              allKeys.push(_match[2]);
              keys.push(`${_match[2]}: '${_match[1]}',`);
            }
          }
          return keys.length ? keys.join('\n') : null;
        },
      })
      )
      .pipe(transform(function (contents, file) {
        // move the injection tokens to th end
        return contents
          .replace('// inject:translations', '')
          .replace('// endinject', '// inject:translations \n   // endinject');
      }, { encoding: 'utf8' }))
      .pipe(gulp.dest(options.translate.destination));
  }
}
module.exports = (options) => {

  const _extract = options.languages.map(language => extractFunction(options, language));
  return gulp.parallel(..._extract);

}
