import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.normalize(__dirname + '/../');

export const config = {
  languages: ['en', 'ar'],
  env: process.env.Node_ENV || 'local',
  rootPath,
  ssr: true,
  urlBased: true,
  prepared: true,
  withAppBaseHref: false, // for hosts like netlify, express wont run for that
  langCookieName: 'cr-lang',
  projectPrefix: 'cr-',
  prerenderOut: './client/static/',
  getLangPath: function (lang) {
    return `${rootPath}client/locale/${this.projectPrefix}${lang}.js`;
  },
  saveLangCookie: function(res, lang) {
    res.cookie(this.langCookieName, lang, { expires: new Date(Date.now() + 31622444360) });
  }
};
