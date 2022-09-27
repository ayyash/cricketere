"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NothingDo = void 0;
const architect_1 = require("@angular-devkit/architect");
exports.default = (0, architect_1.createBuilder)(NothingDo);
async function NothingDo(options, context) {
    // const  { prefix } = await context.getProjectMetadata(context.target.project);
    const name = options.name;
    try {
        // create destination  folder if not found
        context.logger.info('Nothing is' + __dirname);
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
exports.NothingDo = NothingDo;
