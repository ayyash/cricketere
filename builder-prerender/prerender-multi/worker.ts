import * as fs from 'fs';
import * as path from 'path';
import { URL } from 'url';


export interface RenderOptions {
  indexFile: string; // prepare path with destination folder plus language
  clientPath: string;
  serverBundlePath: string;
  route: string;
  language: string;
  localePath: string;
}
export interface RenderResult {
  errors?: string[];
  warnings?: string[];
}

async function loadEsmModule<T>(modulePath: string | URL): Promise<T> {
  return new Function('modulePath', `return import(modulePath);`)(modulePath);
}

global.window = undefined;
global.localStorage = {
  key: function (index) {
    return null;
  },
  getItem: function (key) {
    return null;
  },
  setItem: function (key, value) {
  },
  clear: function () {
  },
  removeItem: function (key) {
  },
  length: 0
};

global['cr'] = {};

(<any>global)._debug = function (o: any, message: string, type: string) {
};
(<any>global)._attn = function (o: any, message: string) {
};
(<any>global)._seqlog = function (message: string) {
};

// TODO: render per language and index
export async function PreRender({
  indexFile,
  clientPath,
  serverBundlePath,
  route,
  language,
  localePath
}: RenderOptions): Promise<RenderResult> {

  const result = {} as RenderResult;

  // clientPath has simple/client, add locale/cr-en.js and import it
  await import(localePath);
  global['cr'].resources = global['cr'][language];

  // read file from indexpath
  let indexHtml = await fs.promises.readFile(indexFile, 'utf8');

  // change critical css
  // Workaround for https://github.com/GoogleChromeLabs/critters/issues/64
  indexHtml = indexHtml.replace(
    / media="print" onload="this\.media='all'"><noscript><link .+?><\/noscript>/g,
    '>',
  );

  // now get those out of the bundle, notice the dynamic import
  const { renderModule, AppServerModule } = await import(serverBundlePath);

  // now pass thru renderModule
  let html = await renderModule(AppServerModule, {
    document: indexHtml,
    url: route,
  });

  // this is scary business
  const { ɵInlineCriticalCssProcessor: InlineCriticalCssProcessor } = await loadEsmModule<
    typeof import('@nguniversal/common/tools')
  >('@nguniversal/common/tools');

  const inlineCriticalCssProcessor = new InlineCriticalCssProcessor({
    deployUrl: '',
    minify: true
  });

  const { content, warnings, errors } = await inlineCriticalCssProcessor.process(html, {
    outputPath: clientPath,
  });

  result.errors = errors;
  result.warnings = warnings;
  html = content;

  // This case happens when we are prerendering "/".
  // if (browserIndexOutputPath === outputIndexPath) {
  //   // wild guess, there is no index.original, so they are renaming
  //   const browserIndexOutputPathOriginal = path.join(clientPath, 'index.original.html');
  //   fs.renameSync(browserIndexOutputPath, browserIndexOutputPathOriginal);
  // }

  // create dir if needed, then write file

  // correct route and language ./client/en/route/index.html
  const outputFolderPath = path.join(clientPath, language, route);

  // added index.html inside of it
  const outputIndexPath = path.join(outputFolderPath, 'index.html');

  // TODO: add language sub folder
  fs.mkdirSync(outputFolderPath, { recursive: true });
  fs.writeFileSync(outputIndexPath, html);

  return result;
}
