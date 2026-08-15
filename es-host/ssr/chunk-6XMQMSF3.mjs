import './polyfills.server.mjs';
import {
  BehaviorSubject,
  Config,
  DOCUMENT,
  HttpClient,
  Inject,
  Injectable,
  Optional,
  PLATFORM_ID,
  catchError,
  inject,
  isPlatformBrowser,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6JMJDJUH.mjs";
import {
  __spreadValues
} from "./chunk-F3YYFOAS.mjs";

// src/app/services/config.service.ts
var configFactory = () => {
  _seqlog("configFactory");
  const config = inject(ConfigService);
  return config.loadAppConfig();
};
var ConfigService = class _ConfigService {
  http;
  localConfig;
  constructor(http, localConfig) {
    this.http = http;
    this.localConfig = localConfig;
    _seqlog("ConfigService");
  }
  _getUrl = Config.API.config.local;
  // keep track of config
  config = new BehaviorSubject(Config);
  config$ = this.config.asObservable();
  static _config;
  static get Config() {
    return this._config || Config;
  }
  NewInstance(config, withError) {
    const _config = __spreadValues(__spreadValues({}, Config), config);
    _config.Storage = __spreadValues({}, _config.Storage);
    _config.isServed = true;
    _config.withErrors = withError;
    _ConfigService._config = _config;
    this.config.next(_config);
    return _config;
  }
  loadAppConfig() {
    _seqlog("LoadAppConfig");
    if (this.localConfig) {
      this.NewInstance(this.localConfig, true);
      return of(true);
    }
    return this.http.get(this._getUrl).pipe(map((response) => {
      this.NewInstance(response, false);
      _seqlog("config next");
      return true;
    }), catchError((error) => {
      this.NewInstance(Config, true);
      _debug(error, "Error in resolve", "e");
      return of(true);
    }));
  }
  static \u0275fac = function ConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject("localConfig", 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfigService, factory: _ConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: ["localConfig"]
  }] }], null);
})();

// src/app/lib/platform.service.ts
var Platform = class _Platform {
  _platformId;
  _doc;
  isBrowser;
  doc;
  constructor(_platformId, _doc) {
    this._platformId = _platformId;
    this._doc = _doc;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.doc = this._doc;
  }
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)(\u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Platform, factory: _Platform.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

export {
  configFactory,
  ConfigService,
  Platform
};
