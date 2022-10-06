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
}


// this will go away and be replaced with different index
function getIndexOutputFile(options: any): string {
  if (typeof options.index === 'string') {
    return path.basename(options.index);
  } else {
    return options.index.output || 'index.html';
  }
}


async function _renderUniversal(
  routes: string[],
  context: BuilderContext,
  clientPath: string,
  serverPath: string,
  indexFile: string
): Promise<BuilderOutput> {


  const serverBundlePath = path.join(serverPath, 'main.js');
  if (!fs.existsSync(serverBundlePath)) {
    throw new Error(`Could not find the main bundle: ${serverBundlePath}`);
  }

  context.logger.info(`Prerendering ${routes.length} route(s) to ${clientPath}...`);
  try {
    // the main

    const results = (await Promise.all(
      routes.map((route) => {
        const options: RenderOptions = {
          indexFile,
          clientPath,
          route,
          serverBundlePath,
          localePath: 'locale/cr-en.js',
          language: 'en'
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

  // for every language do this

  return _renderUniversal(
    routes,
    context,
    clientPath,
    serverPath,
    getIndexOutputFile(browserOptions)
  );
}

export default createBuilder(execute);
