import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

// TODO: remove this
interface Options  {
    source: string;
    destination: string;
    languages: {name: string, isRtl: boolean}[];
    fileName?: string;
}

// expressions to replace, we can modify and as many as we want
const reLTR = /<!-- #LTR -->([\s\S]*?)<!-- #ENDLTR -->/gim;
const reRTL = /<!-- #RTL -->([\s\S]*?)<!-- #ENDRTL -->/gim;
const reLang = /\$lang/gim;


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

            // after build, create sub folders ":lang", add files 200.html with the same content
            // create sub folders
            if (!existsSync(options.destination + '/' + lang.name)){
              mkdirSync(options.destination + '/' + lang.name);
            }

            // save file with index.html, base href = /
            writeFileSync(`${options.destination}/${lang.name}/${ options.fileName || 'index.html'}`, contents);

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
