import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
  targetFromTargetString,
} from '@angular-devkit/architect';
import * as fs from 'fs';
import * as path from 'path';
import { PreRender, RenderOptions, RenderResult } from './worker';


interface IOptions {
  routes?: string[];
  browserTarget: string;
  serverTarget: string;
  indexTarget: string;
  localePath: string;
}

interface IIndexOptions {
  source: string;
  destination: string;
  languages: { name: string, isRtl: boolean; }[];
  isUrlBased?: boolean;
  withFolders?: boolean;
  fileName?: string;
  prefix: string;
}

function getIndexOutputFile(options: IIndexOptions, lang: string): string {

  if (options.withFolders) {
    return `${options.destination}/${lang}/${options.fileName || 'index.html'}`;
  } else {
    if (options.isUrlBased) {
      return `${options.destination}/index.${lang}.url.html`;
    } else {
      return `${options.destination}/index.${lang}.html`;
    }
  }
}


async function _renderUniversal(
  routes: string[],
  context: BuilderContext,
  clientPath: string,
  serverPath: string,
  indexOptions: IIndexOptions,
  localePath: string
): Promise<BuilderOutput> {


  const serverBundlePath = path.join(serverPath, 'main.js');
  if (!fs.existsSync(serverBundlePath)) {
    throw new Error(`Could not find the main bundle: ${serverBundlePath}`);
  }

  context.logger.info(`Prerendering ${routes.length} route(s) to ${clientPath}...`);
  try {
    // the main
    // loop through languages
    for (const lang of indexOptions.languages) {
      // create path to pass to worker './index/index.lang.url.html'
      const indexFile = path.resolve(context.workspaceRoot, getIndexOutputFile(indexOptions, lang.name));
      // TODO: check existance of locale else skip silently
      const langLocalePath = path.join(clientPath, `${localePath}/${indexOptions.prefix}-${lang.name}.js`);

      if (!fs.existsSync(langLocalePath)) {
        context.logger.error(`Skipping locale ${ lang.name }`);
        continue;
      }

      const results = (await Promise.all(
        routes.map((route) => {
          const options: RenderOptions = {
            indexFile,
            clientPath,
            route,
            serverBundlePath,
            localePath: langLocalePath,
            language: lang.name
          };

          return PreRender(options);
        })
      )) as RenderResult[];
      let numErrors = 0;
      for (const { errors, warnings } of results) {
        errors?.forEach((e) => context.logger.error(e));
        warnings?.forEach((e) => context.logger.warn(e));
        numErrors += errors?.length ?? 0;
      }
      if (numErrors > 0) {
        throw Error(`Rendering failed with ${numErrors} worker errors.`);
      }

    }

    context.logger.info(`Prerendering routes to ${clientPath} complete.`);


  } catch (err) {
    context.logger.error(`Prerendering routes to ${clientPath} failed.`);
    return { success: false, error: err.message };

  }

  return { success: true };
}

export async function execute(
  options: IOptions,
  context: BuilderContext,
): Promise<BuilderOutput> {

  const routes = options.routes || [];

  if (!routes.length) {
    throw new Error(`Could not find any routes to prerender.`);
  }


  // get browser target options
  const browserTarget = targetFromTargetString(options.browserTarget);
  const browserOptions = (await context.getTargetOptions(browserTarget)) as any;
  // this is c:/.../workspace/host/client
  const clientPath = path.resolve(context.workspaceRoot, browserOptions.outputPath);

  // server target options
  const serverTarget = targetFromTargetString(options.serverTarget);
  const serverOptions = (await context.getTargetOptions(serverTarget)) as any;
  // this is c:/.../workspace/host/server/ng
  const serverPath = path.resolve(context.workspaceRoot, serverOptions.outputPath);

  const indexTarget = targetFromTargetString(options.indexTarget);
  const indexOptions = (await context.getTargetOptions(indexTarget)) as unknown as IIndexOptions;

  // for every language do this

  return _renderUniversal(
    routes,
    context,
    clientPath,
    serverPath,
    indexOptions,
    options.localePath
  );
}

export default createBuilder(execute);
