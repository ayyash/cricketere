import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

interface Options {
  source: string;
  destination: string;
  languages: { name: string, isRtl: boolean; }[];
  isUrlBased?: boolean;
  withFolders?: boolean;
  fileName?: string;
  prefix: string;
}

// expressions to replace, we can modify and as many as we want
const reLTR = /<!-- #LTR -->([\s\S]*?)<!-- #ENDLTR -->/gim;
const reRTL = /<!-- #RTL -->([\s\S]*?)<!-- #ENDRTL -->/gim;
const reLang = /\$lang/gim;
const rePrefix = /\$prefix/gim;
const reBase = /\$basehref/gim;


export default createBuilder(LocalizeIndex);


async function LocalizeIndex(
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> {


  const  { prefix } = await context.getProjectMetadata(context.target.project);

  try {
    // create destination  folder if not found
    if (!existsSync(options.destination)) {
      mkdirSync(options.destination);
    }

    const html = readFileSync(options.source, 'utf8');

    // for every language replace content as we wish
    for (const lang of options.languages) {
      let contents = html.toString();
      if (lang.isRtl) {
        // remove reLTR
        contents = contents.replace(reLTR, '');
      } else {

        contents = contents.replace(reRTL, '');
      }

      // also replace lang
      contents = contents.replace(reLang, lang.name).replace(rePrefix, options.prefix || prefix.toString());

      // for urlbased create index.en.url.html
      // for withFolders create /en/fileName.html
      // else create index.en.html
      if (options.withFolders) {
        if (!existsSync(options.destination + '/' + lang.name)) {
          mkdirSync(options.destination + '/' + lang.name);
        }

        // save file with index.html, base href = /
        writeFileSync(`${options.destination}/${lang.name}/${options.fileName || 'index.html'}`, contents);

      } else {
        if (options.isUrlBased) {
          // save file with index.lang.url.html with base href = /lang/
          writeFileSync(`${options.destination}/index.${lang.name}.url.html`, contents.replace(reBase, `/${lang.name}/`));
        } else {
          // save file with index.lang.html, base href = /
          writeFileSync(`${options.destination}/index.${lang.name}.html`, contents.replace(reBase, '/'));

        }
      }

    }
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
