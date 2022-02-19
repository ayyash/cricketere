function _debug(o, message, type) {
    if (window && window._indebug) {
        switch (type) {
            case 'e':
                console.log('%c ' + message, 'background: red; color: #fff', o);
                break;
            case 't':
                console.trace('%c ' + message, 'background: red; color: #fff', o);
                // window.console.trace('%c '+ o, 'background: red; color: #fff');
                break;
            case 'a': // temporary attention
                console.info('%c ' + message, 'background: orange; font-weight: bold', o);
                break;
            case 'p':
                console.info('%c ' + message, 'background: #222; color: #bada55', o);
                break;
            case 'r':
                console.info('%c ' + message, 'background: #4f560f; color: #e6ff07', o);
                break;
            case 'ga':
                console.info('%c ' + message, 'background: #03dbfc; color: #000', o);
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
