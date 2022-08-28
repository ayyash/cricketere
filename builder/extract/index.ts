import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import glob from 'glob';

interface ILanguage { name: string, localeId: string, isDefault?: boolean; }

interface IOptions {
  scan: string;
  destination: string;
  languages: ILanguage[];
  prefix: string;

}

const _translateReg = /\s*["']([\w\d?.,!\s\(\)]+)["']\s*\|\s*translate:['"]([\w]+)['"]\s*/gim;


export default createBuilder(ExtractKeys);


const getScriptContent = (options: IOptions, prefix: string, lang: ILanguage): string => {

  // find // task:replace and replace the two keys with language and localId
  // save and return

  // read file /destination/prefix-lang.js
  const fileName = `${options.destination}/${prefix}-${lang.name}.js`;

  let content = '';
  // if does not eixst, create it, copy the default language content
  if (!existsSync(fileName)) {
    const defaultLanguage = options.languages.find(x => x.isDefault);
    const defaultFileName = `${options.destination}/${prefix}-${defaultLanguage.name}.js`;
    const defaultContent = readFileSync(defaultFileName, 'utf8');

    // example replace 'ar-JO' with 'fr-CA;
    content = defaultContent
      .replace(`'${defaultLanguage.localeId}'`, `'${lang.localeId}'`)
      .replace(`'${defaultLanguage.name}'`, `'${lang.name}'`);

    writeFileSync(fileName, content);
  } else {
    content = readFileSync(fileName, 'utf8');
  }

  return content;

};
const extractFunction = (options: IOptions, prefix: string, lang: ILanguage) => {
  // per language
  const fileName = `${options.destination}/${prefix}-${lang.name}.js`;
  const script = getScriptContent(options, prefix, lang);

  // (readFileSync(fileName, 'utf8')).toString();
  // find // inject:translations

  const files = glob.sync(options.scan + '/**/*.@(ts|html)');
  // read files, for each, extract translation regex, add key if it does not exist

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


  const { prefix } = await context.getProjectMetadata(context.target.project);

  // extract keys from all .ts and .html into cr-lang.js files
  // find the comment string, and prepend

  try {

    options.languages.forEach(lang => {
      extractFunction(options, options.prefix || prefix.toString(), lang);
    });


  } catch (err) {
    context.logger.error('Failed to extract.');
    return {
      success: false,
      error: err.message,
    };
  }
  context.reportStatus('Done.');

  return { success: true };
}
