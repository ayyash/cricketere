"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const ssr = require('../../host/server/main.js');
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
exports.default = (0, architect_1.createBuilder)(Generate);
async function Generate(options, context) {
    try {
        // console.log(yourModuleName);
        let html = await ssr.renderModule(ssr.AppServerModule, {
            url: '/content/details',
            document: '<app-root></app-root>'
        });
        console.log(html);
    }
    catch (err) {
        context.logger.error('Failed to generate locales.');
        return {
            success: false,
            error: err.message,
        };
    }
    context.reportStatus('Done.');
    return { success: true };
}
