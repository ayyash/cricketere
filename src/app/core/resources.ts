/*
* keys can come from two places, resources global async file (from script in html header /locale/en.js)
* from internal resources import from locale/resources.ts
* when importing, generate multiple builds for each language with the proper file replacement
* This file can be replaced during build by using the `fileReplacements` array. */
// import { keys, plural } from '../../locale/resources';

import { Config } from '../config';
import { _global } from './common';

declare const cr: {
  resources: {
    keys: any;
    language: string;
    localeId: string;
  };

};

export class LocaleId extends String {
  toString() {
    return _global.cr?.resources.localeId || Config.Res.defaultLanguage;
  }
}
export class RootHref extends String {
  // for browser platform needs to be in constructor
  // this for netlify like, not recomended for expressjs
  constructor() {
    super('/' + (_global.cr?.resources.language || Config.Res.defaultLanguage));
  }

}


export class Res {


  private static get keys(): any {
    return _global.cr?.resources.keys || {NoRes: ''};
  }

  public static get language(): string {
    return _global.cr?.resources.language || Config.Res.defaultLanguage;
  }

  public static Get(key: string, fallback?: string): string {
    // if found return else generic
    const keys = Res.keys;

    if (keys[key]) {
      return keys[key];
    }

    return fallback || keys.NoRes;
  }

  public static Plural(key: string, count: number, fallback?: string): string {

    const keys = Res.keys;

    const _key = keys[key];
    if (!_key) {
      return fallback || keys.NoRes;
    }
    // sort keys desc
    const _pluralCats = Object.keys(_key).sort((a, b) => parseFloat(b) - parseFloat(a));
    // for every key, check if count is larger or equal, if so, break

    // default is first element (the largest)
    let factor = _key[_pluralCats[0]];

    for (let i = 0; i < _pluralCats.length; i++) {
      if (count >= parseFloat(_pluralCats[i])) {
        factor = _key[_pluralCats[i]];
        break;
      }
    }
    // replace and return;
    return factor.replace('$0', count);;

  }

  public static Select(key: string, select: any, fallback?: string): string {
    // find the match in resources
    const keys = Res.keys;

    return (keys[key] && keys[key][select]) || fallback || keys.NoRes;
  }
}
