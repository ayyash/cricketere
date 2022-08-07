
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs');

const options = {
    source: '../host/client/placeholder.html',
    destination: '../host/newindex',
    languages: [
        { name: 'ar', isRtl: true },
        { name: 'en', isRtl: false },
        { name: 'fr', isRtl: false }]
}

const reLTR = /<!-- #LTR -->([\s\S]*?)<!-- #ENDLTR -->/gim;
const reRTL = /<!-- #RTL -->([\s\S]*?)<!-- #ENDRTL -->/gim;
const reLang = /\$lang/gim;
const reBase = /\$basehref/gim;

exports.LocalizeIndex = function (cb) {

    try {
        // create detination folder if not found
        if (!existsSync(options.destination)) {
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
        console.error('Failed to generate locales.');
        cb();
    }

    console.log('Done');
    cb();
}
