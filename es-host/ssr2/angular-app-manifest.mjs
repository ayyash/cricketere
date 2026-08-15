
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/routes/project.route.ts": [
    "project.route-A5ZAEWKE.js",
    "chunk-KNTT4UGG.js",
    "chunk-PLN5PMDE.js",
    "chunk-BGPWDD7S.js"
  ],
  "src/app/routes/product.route.ts": [
    "product.route-IFJXMYXI.js",
    "chunk-PLN5PMDE.js"
  ],
  "src/app/routes/content.route.ts": [
    "content.route-QHB5VMUS.js",
    "chunk-BGPWDD7S.js"
  ],
  "src/app/routes/public.route.ts": [
    "public.route-6FP7B7WN.js",
    "chunk-KNTT4UGG.js",
    "chunk-PLN5PMDE.js",
    "chunk-BGPWDD7S.js"
  ]
},
  assets: {
    'placeholder.html': {size: 7717, hash: 'beb4ed41f7dae1445bdb320da07d46482278cbcef6857517b0602620adfbde84', text: () => import('./assets-chunks/placeholder_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5838, hash: '4b0737d5f5e959461db550ec2931184d09396e266298e5c7ecfa6dc333c59ad5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles.ltr.css': {size: 34314, hash: 'N3c5zF1lBxk', text: () => import('./assets-chunks/styles_ltr_css.mjs').then(m => m.default)},
    'styles.rtl.css': {size: 253, hash: 'Vmio9cHkZgA', text: () => import('./assets-chunks/styles_rtl_css.mjs').then(m => m.default)}
  },
};
