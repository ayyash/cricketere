import { createBuilder } from '@angular-devkit/architect';
import { promises as fs } from 'fs';
export default createBuilder(GenerateIndexBuilder);
async function GenerateIndexBuilder(options, context) {
    try {
        await fs.copyFile(options.source, options.destination);
    }
    catch (err) {
        context.logger.error('Failed to copy file.');
        return {
            success: false,
            error: err.message,
        };
    }
    context.reportStatus('Done.');
    return { success: true };
}
//# sourceMappingURL=locales.js.map