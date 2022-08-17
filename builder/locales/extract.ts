import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import glob from 'glob';

interface IOptions {
  scan: string;
  destination: string;
  languages: string[];
  prefix: string;

}

const _translateReg = /\s*["']([\w\d?.,!\s\(\)]+)["']\s*\|\s*translate:['"]([\w]+)['"]\s*/gim;


export default createBuilder(ExtractKeys);


const extractFunction = (options: IOptions, prefix: string, lang: string) => {
  // per language
  const fileName = `${options.destination}/${prefix}-${lang}.js`;
  const script = (readFileSync(fileName, 'utf8')).toString();
  // find // inject:translations

  const files = glob.sync(options.scan + '/**/*.@(ts|html)');
  // read files, for each, extract translation regex, and place in array, for now

  let _keys: string = '';
  files.forEach(file => {
    const content = readFileSync(file, 'utf8');
    let _match;
    while ((_match = _translateReg.exec(content))) {
      // extract first and second match
      const key = _match[2];
      // if already found skip, also check destinations
      if (_keys.indexOf(key + ':') < 0 && script.indexOf(key + ':') < 0) {
        _keys += `${key}: '${_match[1]}',\n`;
      }
    }
  });
  _keys += '// inject:translations';
  // write and save
  writeFileSync(fileName, script.replace('// inject:translations', _keys));
};
async function ExtractKeys(
  options: IOptions,
  context: BuilderContext,
): Promise<BuilderOutput> {


  const  { prefix } = await context.getProjectMetadata(context.target.project);

  // extract keys from all .ts and .html into cr-lang.js files
  // find the comment string, and prepend

  try {

    options.languages.forEach(lang => {
      extractFunction(options, options.prefix || prefix.toString(), lang);
    });


  } catch (err) {
    context.logger.error('Failed to generate locales.');
    return {
      success: false,
      error: err.message,
    };
  }
  context.reportStatus('Done.');

  return { success: true };
}
