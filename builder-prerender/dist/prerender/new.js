"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const fs_1 = require("fs");
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
        // const ssr = require('../../host/server/main.js');
        const { AppServerModule, renderModule } = await Promise.resolve().then(() => __importStar(require('../../host/server/ng/main.js')));
        let html = await renderModule(AppServerModule, {
            url: '/content/details',
            document: '<app-root></app-root>'
        });
        (0, fs_1.writeFileSync)('./content.html', html);
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
