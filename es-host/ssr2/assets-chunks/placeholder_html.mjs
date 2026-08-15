export default `<!doctype html>
<html lang="\$lang" data-beasties-container="">

<head>
    <meta charset="utf-8">
    <title>Cricketere</title>
    <base href="\$basehref">
    <script src="locale/\$prefix-\$lang.js" defer=""></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">

     <!-- #LTR -->
     <style>@font-face{font-family:'Signika';font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/signika/v29/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bOjM7sfA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Signika';font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/signika/v29/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bPjM7sfA.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Signika';font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/signika/v29/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bBjM4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
     <style>:root{--sh-space:1.6rem;--sh-halfspace:.8rem;--sh-extraspace:2.4rem;--sh-doublespace:3.2rem;--sh-fontface:-apple-system, BlinkMacSystemFont, "Signika", "Segoe UI", "Fira Sans", "Helvetica Neue", Arial, sans-serif;--sh-fontface-ar:"Tajawal", "Traditional Arabic", tahoma, sans-serif;--sh-font-size:1.45;--sh-font-weight-light:300;--sh-font-weight:400;--sh-font-weight-bold:700;--sh-font-weight-medium:500;--sh-text-color:#202020;--sh-text-light:#959595;--sh-text-lighter:#cccccc;--sh-text-dark:#202020;--sh-white:#fff;--sh-grey-light:#f3f3f3;--sh-grey:#999999;--sh-grey-dark:#263238;--sh-black:#000;--sh-linkcolor:#0c00b4;--sh-visitedcolor:#800080;--sh-altcolor:#048bca;--sh-red:#f31109;--sh-yellow:#ffc400;--sh-green:#57b347;--sh-blue:#0097a7;--sh-red-light:#f96e69;--sh-yellow-light:#ffdc66;--sh-green-light:#98d28e;--sh-blue-light:#0ee8ff;--sh-rowlist-border:#f3f3f3;--sh-b-color:#999999;--sh-b-dark-color:#263238;--sh-modal-index:1040;--sh-modal-margin:1.6rem;--sh-modal-padding:.8rem;--sh-modal-scrollbar-width:5px;--sh-modal-bg:rgba(0, 0, 0, .6);--sh-modal-index-10:1030 ;--sh-btn-hover:rgba(243, 243, 243, .5);--sh-btn-rev-hover:#0f00e7;--sh-btn-bg:#f3f3f3;--sh-btn-padding-h:1.6rem;--sh-btn-padding-v:1.2rem;--sh-btn-sm-padding:.8rem;--sh-radius:3px;--sh-label-radius:3px;--sh-btn-diff-bg:#f31109;--sh-label-padding:.25rem .8rem;--sh-mainpad:1.6rem;--sh-box-padding:1rem;--sh-box-border:1px;--sh-list-spacing:.7rem;--sh-table-th-border-color:#263238;--sh-table-td-border-color:#f3f3f3;--sh-table-ft-border-color:#263238;--sh-table-spaced:1.6rem;--sh-table-half-spaced:.8rem;--sh-table-striped-bg-color:#f3f3f3;--sh-table-th-bg-color:#f3f3f3;--sh-htmlFontBase:62.5%;--sh-font-size-print:80%}*{margin:0;padding:0}*,*:before,*:after{box-sizing:border-box}@media screen and (-webkit-min-device-pixel-ratio:0){}:root{--sh-start:-100%;--sh-end:100%}html{font-size:var(--sh-htmlFontBase)}body{font-family:var(--sh-fontface);font-size:1.45rem;color:var(--sh-text-color)}@media only screen and (min-width:720px){html{font-size:75%}}body{background-color:#f6f6f6}</style><link rel="stylesheet" href="styles.ltr.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles.ltr.css"></noscript>
     <!-- #ENDLTR -->
     <!-- #RTL -->
     <style>@font-face{font-family:'Tajawal';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/tajawal/v12/Iurf6YBj_oCad4k1l5qjHrRpiYlJ.woff2) format('woff2');unicode-range:U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;}@font-face{font-family:'Tajawal';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/tajawal/v12/Iurf6YBj_oCad4k1l5qjHrFpiQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Tajawal';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/tajawal/v12/Iurf6YBj_oCad4k1l8KiHrRpiYlJ.woff2) format('woff2');unicode-range:U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;}@font-face{font-family:'Tajawal';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/tajawal/v12/Iurf6YBj_oCad4k1l8KiHrFpiQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
     <style>:root{--sh-start:100%;--sh-end:-100%}body{font-family:var(--sh-fontface-ar);direction:rtl}</style><link rel="stylesheet" href="styles.rtl.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles.rtl.css"></noscript>
     <!-- #ENDRTL -->

</head>

<body ngcm="">
    <app-root>
        <style>
            .loader-container {
                display: flex;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #fff;
                z-index: 10000;
                align-items: center;
                justify-content: center;
            }

        </style>
         <div class="loader-container">
            <!-- #LTR -->
            loading
            <!-- #ENDLTR -->
            <!-- #RTL -->
            انتظر
            <!-- #ENDRTL -->
        </div>

    </app-root>
<link rel="modulepreload" href="chunk-GEH3AZZM.js"><link rel="modulepreload" href="chunk-7FZGD3QU.js"><link rel="modulepreload" href="chunk-TXKUFVJ3.js"><link rel="modulepreload" href="chunk-OJLBER6U.js"><link rel="modulepreload" href="chunk-DM5NKHPI.js"><link rel="modulepreload" href="chunk-VTWRFS6N.js"><script src="cricketere-CC3FXCEP.js" defer=""></script><script src="main-MEVFV7DF.js" type="module"></script></body>

</html>

`;