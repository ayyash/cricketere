function _debug(o, message, type) {
    if (window && window._indebug) {
        switch (type) {
            case 'e': // error
                console.log('%c ' + message, 'background: red; color: #fff', o);
                break;
            case 't': // trace error
                console.trace('%c ' + message, 'background: red; color: #fff', o);
                break;
            case 'p': // http response
                console.info('%c ' + message, 'background: #222; color: #bada55', o);
                break;
            case 'w': // warning
                console.warn('%c ' + message, 'background: #4f560f; color: #e6ff07', o);
                break;
            case 'gtm': // gtm events, special
                console.info('%cGTM: ' + message, 'background: #03dbfc; color: #000', o);
                break;
            default:
                console.info('%c ' + message, 'background: #d9d9d9; color: #a82868; font-weight: bold;', o);
        }
    }
}

function _attn(o, message) {
    if (window && window._indebug) {
        console.debug('%c ' + message, 'background: orange; font-weight: bold; color: black;', o);
    }
}


var seq = 0;
function _seqlog(message) {
    if (window && window._indebug) {
        seq++;
        console.debug('%c' + seq + '. Seq: '+ message, 'background: #8BFF00; color: #000');
    }
}

window.WebConfig = {
    isServed: false
};

const _insearch = window.location.search.indexOf('debug=true') > -1;
if (_insearch) {
    _indebug = true;
}
