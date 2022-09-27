import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

interface Options {
  source: string;
}


global.window = undefined;

// override localStorage on server side
global.localStorage = null;
global._debug = function () {

};
global._attn = function () {
};
global._seqlog = function () {
};

global.cr = {
  resources: {
    keys: [],
    language: 'en',
    localeId: 'en'
  }
};


// im wasting my time, renderModule of AppServerModule will almost always fail

export default createBuilder(Generate);

async function Generate(
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> {


  try {
    // console.log(yourModuleName);
    // const ssr = require('../../host/server/main.js');
    const { AppServerModule, renderModule } = await import('../../host/server/ng/main.js');


    let html = await renderModule(AppServerModule, {
      url: '/content/details',
      document: '<app-root></app-root>'
    });
   writeFileSync('./content.html', html);


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
