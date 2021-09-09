

export const toSentenceCase = (s: string) => {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
};


export const toPrettyPrice = (s: string) => {
    const ret = Number(s.replace(/,/gi, ''));
    if (isNaN(ret)) { return s; }
    // read number, tofixed of 2 digits, insert "," in every three digits, if its already fixed, unfix first

    const _ret = ret.toFixed(2),
        x = _ret.toString().split('.'),
        x2 = x.length > 1 ? '.' + x[1] : '',
        rgx = /(\d+)(\d{3})/;

    let x1 = x[0];

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};
export const GetParamsAsString = (urlParams: any, joinArray = false): string => {
    const s = new URLSearchParams();

    // for every key, if value is undefined, or null, or false, exclude
    Object.keys(urlParams).forEach(n => {
        const v = urlParams[n];
        if (v) {
            if (v instanceof Array) {
                if (v.length) {
                    // filter out empty strings
                    if (joinArray) {
                        const _v = v.filter(x => x && x !== '').join(',');
                        if (_v) { s.append(n, _v); }
                    } else {
                        // lookout for this, it might need an [] in the key
                        // append multiple if joinArray is false
                        v.filter(x => x !== '').forEach(f => s.append(n, f));
                    }
                }
            } else {
                // append key and value
                s.append(n, v);
            }
        }
    });
    return s.toString();

};
export const CleanParams = (params: any): any => {
    // remove empty arrays, unidentified, nulls
    const s = {};
    Object.keys(params).forEach(n => {
        const v = params[n];
        if (v) {
            if (v instanceof Array) {
                if (v.length) {
                    // filter out empty strings and join
                    const _v = v.filter(x => x && x !== '').join(',');
                    if (_v) { s[n] = _v; }
                }
            } else {
                // append key and value
                s[n] = v;
            }
        }
    });

    return s;
};



export const makeDate = (dateString: string): Date | null => {
    if (dateString) {
        // do check to make sure it is valid date

        if (isNaN(Date.parse(dateString))) { return null; }

        return new Date(dateString);
    }
    return null;
};


export const fixAngularBug = (params: string[]): string[] => {
    // WATCH: https://github.com/angular/angular/issues/19179
    // get an array like this ["a,b"] and create an array ["a", "b"]
    if (params.length < 1) {
        return params;
    }
    return params[0].split(',');
};

/*
function copied from https://github.com/angus-c/just/blob/master/packages/collection-clone/index.js
  Deep clones all properties except functions
  var arr = [1, 2, 3];
  var subObj = {aa: 1};
  var obj = {a: 3, b: 5, c: arr, d: subObj};
  var objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}
  objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
*/
const getRegExpFlags = (regExp: any) => {
    if (typeof regExp.source.flags == 'string') {
      return regExp.source.flags;
    } else {
      var flags = [];
      regExp.global && flags.push('g');
      regExp.ignoreCase && flags.push('i');
      regExp.multiline && flags.push('m');
      regExp.sticky && flags.push('y');
      regExp.unicode && flags.push('u');
      return flags.join('');
    }
  };
export const clone = (obj: any) => {
    if (typeof obj == 'function') {
      return obj;
    }
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
      // include prototype properties
      var value = obj[key];
      var type = {}.toString.call(value).slice(8, -1);
      if (type == 'Array' || type == 'Object') {
        result[key] = clone(value);
      } else if (type == 'Date') {
        result[key] = new Date(value.getTime());
      } else if (type == 'RegExp') {
        result[key] = RegExp(value.source, getRegExpFlags(value));
      } else {
        result[key] = value;
      }
    }
    return result;
  };

