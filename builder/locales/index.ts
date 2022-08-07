import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

interface Options  {
    source: string;
    destination: string;
    languages: {name: string, isRtl: boolean}[];
}

// expressions to replace, we can modify and as many as we want
const reLTR = /<!-- #LTR -->([\s\S]*?)<!-- #ENDLTR -->/gim;
const reRTL = /<!-- #RTL -->([\s\S]*?)<!-- #ENDRTL -->/gim;
const reLang = /\$lang/gim;
const reBase = /\$basehref/gim;


export default createBuilder(LocalizeIndex);


function LocalizeIndex(
    options: Options,
    context: BuilderContext,
): BuilderOutput {

    try {
        // create destination  folder if not found
        if (!existsSync(options.destination)){
            mkdirSync(options.destination);
        }

        const html = readFileSync(options.source, 'utf8');

        // for every language replace content as we wish
        for (const lang of options.languages) {
            let contents = html.toString();
            if (lang.isRtl) {
                // remove reLTR
                contents = contents.replace(reLTR, '');
            } else {

                contents = contents.replace(reRTL, '');
            }

            // also replace lang
            contents = contents.replace(reLang, lang.name);

            // save file with index.lang.html, base href = /
            writeFileSync(`${options.destination}/index.${lang.name}.html`, contents.replace(reBase, '/'));
            // save file with index.lang.url.html with base href = /lang/
            writeFileSync(`${options.destination}/index.${lang.name}.url.html`, contents.replace(reBase, `/${lang.name}/`));

        }
    } catch (err) {
        context.logger.error('Failed to generate locales.');
        return {
            success: false,
            error: err.message,
        };
    }
    context.reportStatus('Done.');

    return { success: true };
}
