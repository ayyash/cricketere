"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const architect_1 = require("@angular-devkit/architect");
const fs = require("fs");
const path = require("path");
const worker_1 = require("./worker");
// this will go away and be replaced with different index
function getIndexOutputFile(options) {
    if (typeof options.index === 'string') {
        return path.basename(options.index);
    }
    else {
        return options.index.output || 'index.html';
    }
}
async function _renderUniversal(routes, context, clientPath, serverPath, indexFile) {
    const serverBundlePath = path.join(serverPath, 'main.js');
    if (!fs.existsSync(serverBundlePath)) {
        throw new Error(`Could not find the main bundle: ${serverBundlePath}`);
    }
    context.logger.info(`Prerendering ${routes.length} route(s) to ${clientPath}...`);
    try {
        // the main
        const results = (await Promise.all(routes.map((route) => {
            const options = {
                indexFile,
                clientPath,
                route,
                serverBundlePath,
                localePath: 'locale/cr-en.js',
                language: 'en'
            };
            return (0, worker_1.PreRender)(options);
        })));
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
    }
    catch (err) {
        context.logger.error(`Prerendering routes to ${clientPath} failed.`);
        return { success: false, error: err.message };
    }
    return { success: true };
}
async function execute(options, context) {
    const routes = options.routes || [];
    if (!routes.length) {
        throw new Error(`Could not find any routes to prerender.`);
    }
    // get browser target options
    const browserTarget = (0, architect_1.targetFromTargetString)(options.browserTarget);
    const browserOptions = (await context.getTargetOptions(browserTarget));
    // this is c:/.../workspace/host/client
    const clientPath = path.resolve(context.workspaceRoot, browserOptions.outputPath);
    // server target options
    const serverTarget = (0, architect_1.targetFromTargetString)(options.serverTarget);
    const serverOptions = (await context.getTargetOptions(serverTarget));
    // this is c:/.../workspace/host/server/ng
    const serverPath = path.resolve(context.workspaceRoot, serverOptions.outputPath);
    // for every language do this
    return _renderUniversal(routes, context, clientPath, serverPath, getIndexOutputFile(browserOptions));
}
exports.execute = execute;
exports.default = (0, architect_1.createBuilder)(execute);
