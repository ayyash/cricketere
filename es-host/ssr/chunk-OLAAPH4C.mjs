import './polyfills.server.mjs';
import {
  EnumGtmGroup,
  EnumGtmSource,
  ListOptions
} from "./chunk-YRNYRE7U.mjs";
import {
  Platform
} from "./chunk-UKBUTYHP.mjs";
import {
  Config,
  GetMatrixParamsAsString,
  Injectable,
  Meta,
  Res,
  Title,
  environment,
  setClassMetadata,
  toFormat,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ICBO6PTM.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F3YYFOAS.mjs";

// src/app/components/abstract/gtm.abstract.ts
var GtmComponent = class {
  enumGtmGroup = EnumGtmGroup;
  enumGtmSource = EnumGtmSource;
};

// src/app/services/seo.service.ts
var SeoService = class _SeoService {
  title;
  meta;
  platform;
  _canonicalLink;
  _alternateLinks = [];
  _jsonSnippet;
  _graphObjects = [];
  constructor(title, meta, platform) {
    this.title = title;
    this.meta = meta;
    this.platform = platform;
    this.AddTags();
  }
  AddTags() {
    this.meta.addTags(Config.Seo.tags);
    const _canonical = this.platform.doc.querySelector('link[rel="canonical"]');
    this._canonicalLink = _canonical || this.createCanonicalLink();
    const _links = this.platform.doc.querySelectorAll('link[rel="alternate"]');
    if (_links.length > 0) {
      this._alternateLinks = Array.from(_links);
    } else {
      this._alternateLinks = Config.Seo.hrefLangs.map((n) => this.createAlternateLink());
    }
    this._jsonSnippet = this.platform.doc.querySelector('script[type="application/ld+json"]') || this.createJsonSnippet();
  }
  get url() {
    let url = this.platform.doc.location.pathname;
    if (url.indexOf(";") > -1) {
      url = url.substring(0, url.indexOf(";"));
    }
    return url;
  }
  get defaultUrl() {
    return toFormat(Config.Seo.baseUrl, Config.Seo.defaultRegion, Config.Seo.defaultLanguage, "");
  }
  get siteUrl() {
    return toFormat(Config.Seo.baseUrl, Config.Basic.country, Res.language, "");
  }
  createAlternateLink() {
    const _link = this.platform.doc.createElement("link");
    _link.setAttribute("rel", "alternate");
    this.platform.doc.head.appendChild(_link);
    return _link;
  }
  createCanonicalLink() {
    const _canonicalLink = this.platform.doc.createElement("link");
    _canonicalLink.setAttribute("rel", "canonical");
    this.platform.doc.head.appendChild(_canonicalLink);
    return _canonicalLink;
  }
  createJsonSnippet() {
    const _script = this.platform.doc.createElement("script");
    _script.setAttribute("type", "application/ld+json");
    this.platform.doc.body.appendChild(_script);
    return _script;
  }
  setTitle(title) {
    const _title = `${title} - ${Res.Get("SITE_NAME")}`;
    this.title.setTitle(_title);
    this.meta.updateTag({ name: "title", property: "og:title", content: _title });
    this.meta.updateTag({ property: "twitter:title", content: _title });
  }
  setDescription(description) {
    this.meta.updateTag({ name: "description", property: "og:description", content: description });
  }
  setImage(imageUrl) {
    const _imageUrl = imageUrl || Config.Seo.defaultImage;
    this.meta.updateTag({ name: "image", property: "og:image", content: _imageUrl });
    this.meta.updateTag({ property: "twitter:image", content: _imageUrl });
  }
  setUrl(params) {
    const path = this.platform.doc.location.pathname.substring(environment.production ? 4 : 1);
    let url = this.siteUrl + path;
    if (url.indexOf(";") > -1) {
      url = url.substring(0, url.indexOf(";"));
    }
    if (params) {
      const s = new URLSearchParams();
      params.category && s.append("category", params.category.key);
      params.page && s.append("page", params.page.toString());
      url += "?" + s.toString();
    }
    this._canonicalLink.setAttribute("href", url);
    this.meta.updateTag({ property: "og:url", content: url });
    this.setAlternateLinks(path);
  }
  setAlternateLinks(path) {
    Config.Seo.hrefLangs.forEach((n, i) => {
      let lang = n.language;
      if (lang === "x-default")
        lang = Config.Seo.defaultLanguage;
      const url = toFormat(Config.Seo.baseUrl, n.region || Config.Seo.defaultRegion, lang, path);
      const hreflang = n.language + (n.region ? "-" + n.region : "");
      this._alternateLinks[i].setAttribute("href", url);
      this._alternateLinks[i].setAttribute("hreflang", hreflang);
    });
  }
  updateJsonSnippet(schema) {
    const found = this._graphObjects.findIndex((n) => n["@type"] === schema["@type"]);
    if (found > -1) {
      this._graphObjects[found] = schema;
    } else {
      this._graphObjects.push(schema);
    }
    const _graph = {
      "@context": "https://schema.org",
      "@graph": this._graphObjects
    };
    this._jsonSnippet.textContent = JSON.stringify(_graph);
  }
  setPage(key) {
    const pageKey = Res.Get("PAGE_TITLES") || {};
    const _title = pageKey[key] || Res.Get("DEFAULT_PAGE_TITLE");
    this.setTitle(_title);
    this.setUrl();
  }
  getNextLink(params) {
    const _params = __spreadProps(__spreadValues({}, params), { page: params.page + 1 });
    return this.url + GetMatrixParamsAsString(ListOptions.MapSeoOptions(_params));
  }
  getPagePath() {
    return this.platform.doc.location.pathname;
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)(\u0275\u0275inject(Title), \u0275\u0275inject(Meta), \u0275\u0275inject(Platform));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Title }, { type: Meta }, { type: Platform }], null);
})();

export {
  GtmComponent,
  SeoService
};
