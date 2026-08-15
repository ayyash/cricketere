import {
  GtmDirective
} from "./chunk-GEH3AZZM.js";
import {
  GtmComponent,
  SeoService
} from "./chunk-7FZGD3QU.js";
import {
  EnumGtmEvent,
  GtmTracking,
  StateService,
  catchAppError,
  debug
} from "./chunk-TXKUFVJ3.js";
import {
  TranslatePipe
} from "./chunk-OJLBER6U.js";
import {
  ConfigService,
  Platform,
  configFactory
} from "./chunk-DM5NKHPI.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ErrorHandler,
  HttpResponse,
  Injectable,
  InjectionToken,
  LOCALE_ID,
  LocaleId,
  NgIf,
  RouteReuseStrategy,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Scroll,
  TitleStrategy,
  __spreadValues,
  bootstrapApplication,
  enableProdMode,
  environment,
  filter,
  finalize,
  inject,
  map,
  mergeMap,
  of,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideClientHydration,
  provideEnvironmentInitializer,
  provideHttpClient,
  provideRouter,
  provideZonelessChangeDetection,
  setClassMetadata,
  share,
  shareReplay,
  timer,
  withInMemoryScrolling,
  withInterceptors,
  withPreloading,
  withRouterConfig,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-VTWRFS6N.js";

// src/app/models/loaderstate.model.ts
var EnumLoaderSource;
(function(EnumLoaderSource2) {
  EnumLoaderSource2[EnumLoaderSource2["HTTP"] = 0] = "HTTP";
  EnumLoaderSource2[EnumLoaderSource2["PAGER"] = 1] = "PAGER";
})(EnumLoaderSource || (EnumLoaderSource = {}));

// src/app/services/loader.service.ts
var LoaderService = class _LoaderService extends StateService {
  constructor() {
    super("NONE");
    _seqlog("loader srvice construct");
    this.SetState({
      show: false,
      source: null,
      url: null
    });
  }
  show(source = EnumLoaderSource.HTTP) {
    this.UpdateState({ show: true, source });
  }
  hide(source = EnumLoaderSource.HTTP) {
    this.UpdateState({ show: false, source });
  }
  emitUrl(url) {
    this.UpdateState({ url });
  }
  static \u0275fac = function LoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoaderService, factory: _LoaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/components/common/loader.partial.ts
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275elementEnd();
  }
}
var LoaderComponent = class _LoaderComponent {
  loaderService;
  show = false;
  subscription;
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.subscription = this.loaderService.stateItem$.pipe(share()).subscribe((state) => {
      this.show = state.show;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)(\u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["http-loader"]], decls: 1, vars: 1, consts: [["class", "httploader", 4, "ngIf"], [1, "httploader"], [1, "line"], [1, "subline", "inc"], [1, "subline", "dec"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoaderComponent_div_0_Template, 4, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.show);
    }
  }, dependencies: [CommonModule, NgIf], styles: [".httploader[_ngcontent-%COMP%]{height:4px;position:fixed;top:0;left:0;z-index:5101;overflow:hidden;right:0}.line[_ngcontent-%COMP%]{position:absolute;opacity:.4;background:#0c00b480;width:100%;height:5px}.subline[_ngcontent-%COMP%]{position:absolute;background:#0c00b4;height:5px}.inc[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_increase 5s infinite}.dec[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_decrease 5s 1s infinite}@keyframes _ngcontent-%COMP%_increase{0%{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes _ngcontent-%COMP%_decrease{0%{left:-80%;width:80%}to{left:110%;width:10%}}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "http-loader", template: `<div *ngIf="show" class="httploader" >
    <div class="line"></div>
    <div class="subline inc"></div>
    <div class="subline dec"></div></div>`, imports: [CommonModule], styles: [".httploader{height:4px;position:fixed;top:0;left:0;z-index:5101;overflow:hidden;right:0}.line{position:absolute;opacity:.4;background:#0c00b480;width:100%;height:5px}.subline{position:absolute;background:#0c00b4;height:5px}.inc{animation:increase 5s infinite}.dec{animation:decrease 5s 1s infinite}@keyframes increase{0%{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes decrease{0%{left:-80%;width:80%}to{left:110%;width:10%}}\n"] }]
  }], () => [{ type: LoaderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/components/common/loader.partial.ts", lineNumber: 17 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "http-loader")(1, "router-outlet");
    }
  }, dependencies: [RouterModule, RouterOutlet, LoaderComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [RouterModule, LoaderComponent],
      template: `<http-loader></http-loader>
    <router-outlet></router-outlet>`
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/app/core/error.service.ts
var CricketereErrorHandler = class _CricketereErrorHandler {
  handleError(error) {
    _debug(error, "Unhandled Error", "e");
    GtmTracking.RegisterEvent({ event: EnumGtmEvent.Error }, { error });
  }
  static \u0275fac = function CricketereErrorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CricketereErrorHandler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CricketereErrorHandler, factory: _CricketereErrorHandler.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CricketereErrorHandler, [{
    type: Injectable
  }], null, null);
})();

// src/app/core/http.fn.ts
var getHeaders = (reqheaders) => {
  let headers = {};
  return headers;
};
var mapData = (response) => {
  if (response instanceof HttpResponse) {
    if (response.body && response.body.data) {
      response = response.clone({ body: response.body.data });
    }
  }
  return response;
};
var CricketereInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  if (req.url.indexOf("localdata") > -1 || req.url.indexOf("http") > -1) {
    return next(req);
  }
  const url = ConfigService.Config.API.apiRoot + req.url;
  const adjustedReq = req.clone({ url, setHeaders: getHeaders(req.headers) });
  loaderService.show();
  if (req.body) {
    _debug(req.body, `Request ${req.method} ${req.urlWithParams}`, "p");
  }
  return next(adjustedReq).pipe(shareReplay(), map((response) => mapData(response)), finalize(() => {
    loaderService.hide();
  }), debug(`${req.method} ${req.urlWithParams}`, "p"), catchAppError(`${req.method} ${req.urlWithParams}`));
};

// src/app/core/server.token.ts
var SERVER_URL = new InjectionToken("description of token");

// src/app/core/local.fn.ts
var LocalInterceptorFn = (req, next) => {
  const serverUrl = inject(SERVER_URL, { optional: true });
  console.log("serverurl", serverUrl);
  if (req.url.indexOf("localdata") < 0) {
    return next(req);
  }
  let url = req.url;
  if (serverUrl) {
    url = `${serverUrl}/${req.url}`;
  }
  const adjustedReq = req.clone({ url });
  return next(adjustedReq).pipe(debug(`${req.method} ${req.urlWithParams}`, "p"), catchAppError(`${req.method} ${req.urlWithParams}`));
};

// src/app/core/core.module.ts
var CoreProviders = [
  provideHttpClient(withInterceptors([
    LocalInterceptorFn,
    CricketereInterceptorFn
  ])),
  provideAppInitializer(configFactory),
  { provide: ErrorHandler, useClass: CricketereErrorHandler },
  provideEnvironmentInitializer(() => {
    _seqlog("CoreProviders");
  })
];

// src/app/components/layouts/404.component.ts
var NotFoundComponent = class _NotFoundComponent {
  loaderService;
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  ngOnInit() {
    _debug(this.loaderService.currentItem?.url, "404ed url");
  }
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)(\u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["ng-component"]], decls: 3, vars: 4, consts: [[1, "singlepage", "container"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "Page not found", "NOT_FOUND"), "\n");
    }
  }, dependencies: [TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [TranslatePipe], template: `<div class="singlepage container">\r
 {{ 'Page not found' | translate:'NOT_FOUND' }}\r
</div>\r
` }]
  }], () => [{ type: LoaderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/components/layouts/404.component.ts", lineNumber: 10 });
})();

// src/app/components/layouts/error.component.ts
var ErrorComponent = class _ErrorComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function ErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorComponent, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[1, "container", "tightpage", "box", "box--content"]], template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1, " Oops! We could not perform the required action for some reason. We are looking into it right now. -- add few other things here\n");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, template: '\r\n<div class="container tightpage box box--content">\r\n    Oops! We could not perform the required action for some reason. We are looking into it right now.\r\n    -- add few other things here\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorComponent, { className: "ErrorComponent", filePath: "src/app/components/layouts/error.component.ts", lineNumber: 8 });
})();

// src/app/components/layouts/main.component.ts
var _c0 = (a0, a1) => ({ source: a0, group: a1 });
var MainLayoutComponent = class _MainLayoutComponent extends GtmComponent {
  constructor() {
    super();
  }
  ngOnInit() {
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["ng-component"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 20, consts: [[1, "gaza-recovers"], ["href", "https://updates.techforpalestine.org/announcing-the-tech-for-palestine-incubator/", "target", "_blank"], ["src", "https://ucarecdn.com/24184bac-c135-49c7-bfda-03723cfe88dd/gaza.svg"], [1, "header"], [1, "boxed", "row"], ["routerLink", "/"], ["routerLink", "/projects", 3, "shGtm"], ["routerLink", "/products", 3, "shGtm"], ["routerLink", "/projects/create", 3, "shGtm"], ["routerLink", "/login", 3, "shGtm"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "header", 3)(4, "nav")(5, "ul", 4)(6, "li");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "li")(10, "a", 5);
      \u0275\u0275text(11, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 6);
      \u0275\u0275text(14, "Projects");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 7);
      \u0275\u0275text(17, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 8);
      \u0275\u0275text(20, "Create new");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 9);
      \u0275\u0275text(23, "Login");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(24, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, "Welcome to Cricketere site", "WelcomeCricketere"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("shGtm", \u0275\u0275pureFunction2(8, _c0, ctx.enumGtmSource.NavigationDesktop, ctx.enumGtmGroup.Navigation));
      \u0275\u0275advance(3);
      \u0275\u0275property("shGtm", \u0275\u0275pureFunction2(11, _c0, ctx.enumGtmSource.NavigationDesktop, ctx.enumGtmGroup.Navigation));
      \u0275\u0275advance(3);
      \u0275\u0275property("shGtm", \u0275\u0275pureFunction2(14, _c0, ctx.enumGtmSource.NavigationDesktop, ctx.enumGtmGroup.Navigation));
      \u0275\u0275advance(3);
      \u0275\u0275property("shGtm", \u0275\u0275pureFunction2(17, _c0, ctx.enumGtmSource.NavigationDesktop, ctx.enumGtmGroup.Navigation));
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, GtmDirective, TranslatePipe], styles: [".gaza-recovers[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px}.gaza-recovers[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ imports: [CommonModule, RouterModule, TranslatePipe, GtmDirective], template: `<style>\r
	.gaza-recovers {\r
		position: absolute;\r
		top: 5px;\r
		right: 5px;\r
		a {\r
			display: block;\r
		}\r
	}\r
</style>\r
<div class="gaza-recovers">\r
	<a href="https://updates.techforpalestine.org/announcing-the-tech-for-palestine-incubator/" target="_blank">\r
		<img src="https://ucarecdn.com/24184bac-c135-49c7-bfda-03723cfe88dd/gaza.svg">\r
	</a>\r
</div>\r
\r
<header class="header">\r
    <nav>\r
        <ul class="boxed row">\r
            <li> {{ 'Welcome to Cricketere site' | translate:'WelcomeCricketere'}} </li>\r
            <li><a routerLink="/">Home</a></li>\r
            <li><a routerLink="/projects" [shGtm]="{source: enumGtmSource.NavigationDesktop, group: enumGtmGroup.Navigation}">Projects</a></li>\r
            <li><a routerLink="/products" [shGtm]="{source: enumGtmSource.NavigationDesktop, group: enumGtmGroup.Navigation}">Products</a></li>\r
            <li><a routerLink="/projects/create" [shGtm]="{source: enumGtmSource.NavigationDesktop, group: enumGtmGroup.Navigation}">Create new</a></li>\r
            <li><a routerLink="/login" [shGtm]="{source: enumGtmSource.NavigationDesktop, group: enumGtmGroup.Navigation}">Login</a></li>\r
        </ul>\r
\r
    </nav>\r
\r
</header>\r
\r
<router-outlet></router-outlet>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/components/layouts/main.component.ts", lineNumber: 13 });
})();

// src/app/components/layouts/single.component.ts
var SingleLayoutComponent = class _SingleLayoutComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function SingleLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SingleLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleLayoutComponent, selectors: [["ng-component"]], decls: 8, vars: 0, consts: [[1, "singlelayout"], [1, "container"], ["routerLink", "/", 1, "logotext", "txt-c", "doublespaced"], [1, "box", "smaller", "txt-c"]], template: function SingleLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Cricketere");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "footer", 3)(6, "a");
      \u0275\u0275text(7, "Terms and conditions");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SingleLayoutComponent, [{
    type: Component,
    args: [{ imports: [RouterModule], template: '<div class="singlelayout">\r\n    <div class="container">\r\n\r\n        <div class="logotext txt-c doublespaced" routerLink="/">Cricketere</div>\r\n\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <footer class="box smaller txt-c">\r\n        <a>Terms and conditions</a>\r\n    </footer>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleLayoutComponent, { className: "SingleLayoutComponent", filePath: "src/app/components/layouts/single.component.ts", lineNumber: 9 });
})();

// src/app/core/preload.service.ts
var PreloadService = class _PreloadService {
  _platform;
  constructor(_platform) {
    this._platform = _platform;
  }
  preload(route, load) {
    if (!this._platform.isBrowser) {
      return of(null);
    }
    if (route.data && route.data["preload"]) {
      if (route.data["delay"]) {
        return timer(5e3).pipe(mergeMap(() => load()));
      } else {
        return load();
      }
    } else {
      return of(null);
    }
  }
  static \u0275fac = function PreloadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreloadService)(\u0275\u0275inject(Platform));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PreloadService, factory: _PreloadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Platform }], null);
})();

// src/app/core/routereuse.service.ts
var RouteReuseService = class _RouteReuseService extends RouteReuseStrategy {
  shouldDetach(route) {
    return false;
  }
  store(route, detachedTree) {
  }
  shouldAttach(route) {
    return false;
  }
  retrieve(route) {
    return null;
  }
  shouldReuseRoute(curr, future) {
    if (future.routeConfig === curr.routeConfig) {
      if (future.data && future.data.reuse === "never") {
        return curr.paramMap.get("id") === future.paramMap.get("id");
      }
    }
    return future.routeConfig === curr.routeConfig;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RouteReuseService_BaseFactory;
    return function RouteReuseService_Factory(__ngFactoryType__) {
      return (\u0275RouteReuseService_BaseFactory || (\u0275RouteReuseService_BaseFactory = \u0275\u0275getInheritedFactory(_RouteReuseService)))(__ngFactoryType__ || _RouteReuseService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RouteReuseService, factory: _RouteReuseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/title.service.ts
var CricketTitleStrategy = class _CricketTitleStrategy extends TitleStrategy {
  seoService;
  constructor(seoService) {
    super();
    this.seoService = seoService;
  }
  updateTitle(routerState) {
    const title = this.buildTitle(routerState);
    this.seoService.setPage(title);
  }
  static \u0275fac = function CricketTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CricketTitleStrategy)(\u0275\u0275inject(SeoService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CricketTitleStrategy, factory: _CricketTitleStrategy.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CricketTitleStrategy, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SeoService }], null);
})();

// src/app/routing.module.ts
var AppRoutes = [
  {
    path: "error",
    component: SingleLayoutComponent,
    children: [
      {
        path: "",
        component: ErrorComponent,
        title: "ERROR"
      }
    ]
  },
  {
    path: "404",
    component: SingleLayoutComponent,
    children: [
      {
        path: "",
        component: NotFoundComponent,
        title: "NOT_FOUND"
      }
    ]
  },
  // lazy loading? remove declration from app.module
  __spreadValues({
    path: "projects",
    component: MainLayoutComponent,
    loadChildren: () => import("./project.route-A5ZAEWKE.js").then((m) => m.ProjectRoutes),
    data: { preload: true, delay: 4e3 }
  }, false ? { \u0275entryName: "src/app/routes/project.route.ts" } : {}),
  __spreadValues({
    path: "products",
    component: MainLayoutComponent,
    loadChildren: () => import("./product.route-IFJXMYXI.js").then((m) => m.ProductRoutes),
    data: { preload: true }
  }, false ? { \u0275entryName: "src/app/routes/product.route.ts" } : {}),
  // turn this into standalone
  __spreadValues({
    path: "content",
    component: SingleLayoutComponent,
    loadChildren: () => import("./content.route-QHB5VMUS.js").then((m) => m.ContentRoutes),
    data: { preload: true, delay: 1e3 }
  }, false ? { \u0275entryName: "src/app/routes/content.route.ts" } : {}),
  __spreadValues({
    path: "",
    component: SingleLayoutComponent,
    loadChildren: () => import("./public.route-6FP7B7WN.js").then((m) => m.PublicRoutes),
    data: { preload: true }
  }, false ? { \u0275entryName: "src/app/routes/public.route.ts" } : {}),
  {
    path: "**",
    redirectTo: "/404",
    // make 404
    pathMatch: "full"
  }
];
var appFactory = () => {
  const router = inject(Router);
  _seqlog("appFactory");
  _attn(ConfigService.Config.isServed, "config served");
  router.events.pipe(filter((event) => event instanceof Scroll)).subscribe({
    next: (e) => {
      _attn(e.position, "position");
    }
  });
};
var AppRouteProviders = [
  provideRouter(
    AppRoutes,
    withPreloading(PreloadService),
    withInMemoryScrolling({
      scrollPositionRestoration: "disabled"
    }),
    // withEnabledBlockingInitialNavigation(),
    withRouterConfig({
      paramsInheritanceStrategy: "always",
      onSameUrlNavigation: "reload"
    })
  ),
  // importProvidersFrom(RouterModule.forRoot(AppRoutes, {
  //   preloadingStrategy: PreloadService,
  //   paramsInheritanceStrategy: 'always',
  //   onSameUrlNavigation: 'reload',
  //   scrollPositionRestoration: 'disabled',
  //   initialNavigation: 'enabledBlocking'
  // })),
  { provide: RouteReuseStrategy, useClass: RouteReuseService },
  { provide: TitleStrategy, useClass: CricketTitleStrategy },
  provideEnvironmentInitializer(appFactory)
];

// src/app.config.ts
var appProviders = [
  provideBrowserGlobalErrorListeners(),
  provideZonelessChangeDetection(),
  // pass the routes from existin RouteModule
  { provide: LOCALE_ID, useClass: LocaleId },
  // { provide: APP_BASE_HREF, useClass: RootHref },
  // { provide: APP_ID, useValue: 'cricketere' },
  ...CoreProviders,
  ...AppRouteProviders,
  provideClientHydration()
];

// src/main.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, { providers: appProviders }).catch((err) => _debug(err, "Error bootstrapping", "e"));
