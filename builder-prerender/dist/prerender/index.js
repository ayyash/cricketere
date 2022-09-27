"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.readFile = void 0;
const tslib_1 = require("tslib");
const architect_1 = require("@angular-devkit/architect");
// import { BrowserBuilderOptions } from '@angular-devkit/build-angular';
// import { normalizeOptimization } from '@angular-devkit/build-angular/src/utils/normalize-optimization';
// import { augmentAppWithServiceWorker } from '@angular-devkit/build-angular/src/utils/service-worker';
const fs = (0, tslib_1.__importStar)(require("fs"));
const ora_1 = (0, tslib_1.__importDefault)(require("ora"));
const path = (0, tslib_1.__importStar)(require("path"));
const piscina_1 = (0, tslib_1.__importDefault)(require("piscina"));
const util_1 = require("util");
exports.readFile = (0, util_1.promisify)(fs.readFile);
async function getRoutes(options) {
    let routes = options.routes || [];
    routes = routes.map((r) => (r === '' ? '/' : r));
    return [...new Set(routes)];
}
function getIndexOutputFile(options) {
    if (typeof options.index === 'string') {
        return path.basename(options.index);
    }
    else {
        return options.index.output || 'index.html';
    }
}
/**
 * Schedules the server and browser builds and returns their results if both builds are successful.
 */
async function _scheduleBuilds(options, context) {
    const browserTarget = (0, architect_1.targetFromTargetString)(options.browserTarget);
    const serverTarget = (0, architect_1.targetFromTargetString)(options.serverTarget);
    const browserTargetRun = await context.scheduleTarget(browserTarget, {
        watch: false,
        serviceWorker: false
    });
    const serverTargetRun = await context.scheduleTarget(serverTarget, {
        watch: false,
    });
    try {
        const [browserResult, serverResult] = await Promise.all([
            browserTargetRun.result,
            serverTargetRun.result,
        ]);
        const success = browserResult.success && serverResult.success && browserResult.baseOutputPath !== undefined;
        const error = browserResult.error || serverResult.error;
        return { success, error, browserResult, serverResult };
    }
    catch (e) {
        return { success: false, error: e.message };
    }
    finally {
        await Promise.all([browserTargetRun.stop(), serverTargetRun.stop()]);
    }
}
/**
 * Renders each route and writes them to
 * <route>/index.html for each output path in the browser result.
 */
async function _renderUniversal(routes, context, browserResult, serverResult, browserOptions, numProcesses) {
    const projectName = context.target && context.target.project;
    if (!projectName) {
        throw new Error('The builder requires a target.');
    }
    const projectMetadata = await context.getProjectMetadata(projectName);
    const projectRoot = path.join(context.workspaceRoot, projectMetadata.root ?? '');
    // Users can specify a different base html file e.g. "src/home.html"
    const indexFile = getIndexOutputFile(browserOptions);
    // const { styles: normalizedStylesOptimization } = normalizeOptimization(
    //   browserOptions.optimization,
    // );
    const { baseOutputPath = '' } = serverResult;
    const worker = new piscina_1.default({
        filename: path.join(__dirname, 'worker.js'),
        name: 'render',
        maxThreads: numProcesses,
    });
    try {
        // We need to render the routes for each locale from the browser output.
        for (const outputPath of browserResult.outputPaths) {
            const localeDirectory = path.relative(browserResult.baseOutputPath, outputPath);
            const serverBundlePath = path.join(baseOutputPath, localeDirectory, 'main.js');
            if (!fs.existsSync(serverBundlePath)) {
                throw new Error(`Could not find the main bundle: ${serverBundlePath}`);
            }
            const spinner = (0, ora_1.default)(`Prerendering ${routes.length} route(s) to ${outputPath}...`).start();
            try {
                const results = (await Promise.all(routes.map((route) => {
                    const options = {
                        indexFile,
                        deployUrl: browserOptions.deployUrl || '',
                        inlineCriticalCss: true,
                        minifyCss: true,
                        outputPath,
                        route,
                        serverBundlePath,
                    };
                    return worker.run(options, { name: 'render' });
                })));
                let numErrors = 0;
                for (const { errors, warnings } of results) {
                    spinner.stop();
                    errors?.forEach((e) => context.logger.error(e));
                    warnings?.forEach((e) => context.logger.warn(e));
                    spinner.start();
                    numErrors += errors?.length ?? 0;
                }
                if (numErrors > 0) {
                    throw Error(`Rendering failed with ${numErrors} worker errors.`);
                }
            }
            catch (error) {
                spinner.fail(`Prerendering routes to ${outputPath} failed.`);
                return { success: false, error: error.message };
            }
            spinner.succeed(`Prerendering routes to ${outputPath} complete.`);
            // if (browserOptions.serviceWorker) {
            //   spinner.start('Generating service worker...');
            //   try {
            //     await augmentAppWithServiceWorker(
            //       projectRoot,
            //       context.workspaceRoot,
            //       outputPath,
            //       browserOptions.baseHref || '/',
            //       browserOptions.ngswConfigPath,
            //     );
            //   } catch (error) {
            //     spinner.fail('Service worker generation failed.');
            //     return { success: false, error: error.message };
            //   }
            //   spinner.succeed('Service worker generation complete.');
            // }
        }
    }
    finally {
        void worker.destroy();
    }
    return browserResult;
}
/**
 * Builds the browser and server, then renders each route in options.routes
 * and writes them to prerender/<route>/index.html for each output path in
 * the browser result.
 */
async function execute(options, context) {
    const browserTarget = (0, architect_1.targetFromTargetString)(options.browserTarget);
    const browserOptions = (await context.getTargetOptions(browserTarget));
    const tsConfigPath = typeof browserOptions.tsConfig === 'string' ? browserOptions.tsConfig : undefined;
    const routes = await getRoutes(options);
    if (!routes.length) {
        throw new Error(`Could not find any routes to prerender.`);
    }
    const result = await _scheduleBuilds(options, context);
    const { success, error, browserResult, serverResult } = result;
    if (!success || !browserResult || !serverResult) {
        return { success, error };
    }
    return _renderUniversal(routes, context, browserResult, serverResult, browserOptions, options.numProcesses);
}
exports.execute = execute;
exports.default = (0, architect_1.createBuilder)(execute);
