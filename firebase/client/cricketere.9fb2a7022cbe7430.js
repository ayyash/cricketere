function _debug(o,c,n){if(window&&window._indebug)switch(n){case"e":console.log("%c "+c,"background: red; color: #fff",o);break;case"t":console.trace("%c "+c,"background: red; color: #fff",o);break;case"p":console.info("%c "+c,"background: #222; color: #bada55",o);break;case"w":console.warn("%c "+c,"background: #4f560f; color: #e6ff07",o);break;case"gtm":console.info("%cGTM: "+c,"background: #03dbfc; color: #000",o);break;default:console.info("%c "+c,"background: #d9d9d9; color: #a82868; font-weight: bold;",o)}}function _attn(o,c){window&&window._indebug&&console.debug("%c "+c,"background: orange; font-weight: bold; color: black;",o)}var seq=0;function _seqlog(o){window&&window._indebug&&(seq++,console.debug("%c"+seq+". Seq: "+o,"background: #8BFF00; color: #000"))}window.WebConfig={isServed:!1};const _insearch=window.location.search.indexOf("debug=true")>-1;_insearch&&(_indebug=!0);