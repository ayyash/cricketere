import * as fs from 'fs';
import * as path from 'path';

export interface RenderOptions {
  indexFile: string;
  deployUrl: string;
  inlineCriticalCss: boolean;
  minifyCss: boolean;
  outputPath: string;
  serverBundlePath: string;
  route: string;
}
export interface RenderResult {
  errors?: string[];
  warnings?: string[];
}

async function loadEsmModule<T>(modulePath: string | URL): Promise<T> {
  return new Function('modulePath', `return import(modulePath);`)(modulePath);
}

/**
 * Renders each route in routes and writes them to <outputPath>/<route>/index.html.
 */
export async function render({
  indexFile,
  deployUrl,
  minifyCss,
  outputPath,
  serverBundlePath,
  route,
  inlineCriticalCss,
}: RenderOptions): Promise<RenderResult> {
  const result = {} as RenderResult;
  const browserIndexOutputPath = path.join(outputPath, indexFile);
  const outputFolderPath = path.join(outputPath, route);
  const outputIndexPath = path.join(outputFolderPath, 'index.html');
  console.log('yyyyyyyyyyyyyyyyyserverbundlepath', serverBundlePath);
  console.log('oxxxxxxxxxxutputIndexPath', outputIndexPath);
  const { renderModule, AppServerModule } = await import( serverBundlePath);

  const indexBaseName = fs.existsSync(path.join(outputPath, 'index.original.html'))
    ? 'index.original.html'
    : indexFile;
  const browserIndexInputPath = path.join(outputPath, indexBaseName);
  let indexHtml = await fs.promises.readFile(browserIndexInputPath, 'utf8');
  indexHtml = indexHtml.replace(
    '</html>',
    '<!-- This page was prerendered with Angular Universal -->\n</html>',
  );
  if (inlineCriticalCss) {
    // Workaround for https://github.com/GoogleChromeLabs/critters/issues/64
    indexHtml = indexHtml.replace(
      / media="print" onload="this\.media='all'"><noscript><link .+?><\/noscript>/g,
      '>',
    );
  }

  let html = await renderModule(AppServerModule, {
    document: indexHtml,
    url: route,
  });

  if (inlineCriticalCss) {
    const { ɵInlineCriticalCssProcessor: InlineCriticalCssProcessor } = await loadEsmModule<
      typeof import('@nguniversal/common/tools')
    >('@nguniversal/common/tools');

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
