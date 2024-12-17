
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'placeholder.html': {size: 7834, hash: '9c96e037462810dbe4a7a36061199321798ddc899002146f9ab9e40f7ce691e1', text: () => import('./assets-chunks/placeholder_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5953, hash: 'a3f1f5a47c965be519cd55ffe5dae245e47da030dbea82dc80d347e13b8017dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles.ltr.css': {size: 34327, hash: '+GCV3RWc+1c', text: () => import('./assets-chunks/styles_ltr_css.mjs').then(m => m.default)},
    'styles.rtl.css': {size: 253, hash: 'Vmio9cHkZgA', text: () => import('./assets-chunks/styles_rtl_css.mjs').then(m => m.default)}
  },
};
