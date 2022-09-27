import * as fs from 'fs';
import * as path from 'path';
async function loadEsmModule(modulePath) {
    return new Function('modulePath', `return import(modulePath);`)(modulePath);
}
/**
 * Renders each route in routes and writes them to <outputPath>/<route>/index.html.
 */
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
export async function render({ indexFile, deployUrl, minifyCss, outputPath, serverBundlePath, route, inlineCriticalCss, }) {
    const result = {};
    const browserIndexOutputPath = path.join(outputPath, indexFile);
    const outputFolderPath = path.join(outputPath, route);
    const outputIndexPath = path.join(outputFolderPath, 'index.html');
    console.log('yyyyyyyyyyyyyyyyyserverbundlepath', serverBundlePath);
    console.log('oxxxxxxxxxxutputIndexPath', outputIndexPath);
    const _default = await import('file://'+ serverBundlePath);

    const indexBaseName = fs.existsSync(path.join(outputPath, 'index.original.html'))
        ? 'index.original.html'
        : indexFile;
    const browserIndexInputPath = path.join(outputPath, indexBaseName);
    let indexHtml = await fs.promises.readFile(browserIndexInputPath, 'utf8');
    indexHtml = indexHtml.replace('</html>', '<!-- This page was prerendered with Angular Universal -->\n</html>');
    if (inlineCriticalCss) {
        // Workaround for https://github.com/GoogleChromeLabs/critters/issues/64
        indexHtml = indexHtml.replace(/ media="print" onload="this\.media='all'"><noscript><link .+?><\/noscript>/g, '>');
    }
    let html = await _default.default.renderModule(_default.default.AppServerModule, {
        document: indexHtml,
        url: route,
    });
    if (inlineCriticalCss) {
        const { ɵInlineCriticalCssProcessor: InlineCriticalCssProcessor } = await loadEsmModule('@nguniversal/common/tools');
        const inlineCriticalCssProcessor = new InlineCriticalCssProcessor({
            deployUrl: deployUrl,
            minify: minifyCss,
        });
        const { content, warnings, errors } = await inlineCriticalCssProcessor.process(html, {
            outputPath,
        });
        result.errors = errors;
        result.warnings = warnings;
        html = content;
    }
    // This case happens when we are prerendering "/".
    if (browserIndexOutputPath === outputIndexPath) {
        const browserIndexOutputPathOriginal = path.join(outputPath, 'index.original.html');
        fs.renameSync(browserIndexOutputPath, browserIndexOutputPathOriginal);
    }
    fs.mkdirSync(outputFolderPath, { recursive: true });
    fs.writeFileSync(outputIndexPath, html);
    return result;
}
