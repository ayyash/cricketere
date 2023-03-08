"use strict";
exports.id = "src_app_routes_product_route_ts";
exports.ids = ["src_app_routes_product_route_ts"];
exports.modules = {

/***/ 27692:
/*!****************************************************!*\
  !*** ./src/app/components/common/pager.partial.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerPartialComponent": () => (/* binding */ PagerPartialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 40305);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 51138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 89318);
/* harmony import */ var _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/pipes/translate.pipe */ 57392);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader.service */ 28709);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/seo.service */ 27358);








function PagerPartialComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PagerPartialComponent_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.page($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, "show more", "ShowMore"));
  }
}
class PagerPartialComponent {
  constructor(loaderService, seoService) {
    this.loaderService = loaderService;
    this.seoService = seoService;
    this.isLoadMore = false;
    this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.mimicHref = '';
  }
  ngOnInit() {
    this.loading$ = this.loaderService.stateItem$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(state => state.context === this.source), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(state => state ? state.show : false));
    this.mimicHref = this.getMimicHref();
  }
  page(event) {
    // pass back the source
    this.onPage.emit({
      event,
      source: this.source
    });
    // emit a show event, no just show a loading effect
  }

  getMimicHref() {
    // do your best, find "page" and add one
    // this is for SEO purposes to allow indexing of next page
    const regex = /page=(\d+)/i;
    let nextUrl = this.seoService.getPagePath();
    const pagefound = nextUrl.match(regex);
    if (pagefound && pagefound.length) {
      const p = parseInt(pagefound[1], 10) + 1;
      const x = 'page=' + p;
      nextUrl = nextUrl.replace(regex, x);
    } else {
      nextUrl += ';page=2';
    }
    return nextUrl;
  }
}
PagerPartialComponent.ɵfac = function PagerPartialComponent_Factory(t) {
  return new (t || PagerPartialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
};
PagerPartialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PagerPartialComponent,
  selectors: [["cr-pager"]],
  inputs: {
    isLoadMore: "isLoadMore",
    source: "source"
  },
  outputs: {
    onPage: "onPage"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 5,
  consts: [[1, "pager"], ["class", "btn-fake", 3, "title", "click", 4, "ngIf"], [1, "btn-fake", 3, "title", "click"]],
  template: function PagerPartialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PagerPartialComponent_button_2_Template, 3, 4, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx.loading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoadMore);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
  styles: [".pager.loading button {\n  background-color: red;\n}\n"],
  encapsulation: 2
});

/***/ }),

/***/ 58941:
/*!******************************************************!*\
  !*** ./src/app/components/product/list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 25095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 79627);
/* harmony import */ var _core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/common */ 20393);
/* harmony import */ var _core_gtm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/gtm */ 21829);
/* harmony import */ var _services_param_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/param.state */ 66857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 40305);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ 61095);
/* harmony import */ var _services_product_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/product.state */ 66163);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89318);
/* harmony import */ var _lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/toaster/toast.state */ 88198);
/* harmony import */ var _services_auth_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.state */ 31113);
/* harmony import */ var _common_pager_partial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/pager.partial */ 27692);
















function ProductListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Hello ", user_r3.firstName, " ");
  }
}
function ProductListComponent_div_3_ng_container_1_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", item_r9.name, " - ", item_r9.price, " ");
  }
}
function ProductListComponent_div_3_ng_container_1_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_3_ng_container_1_a_18_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.nextPage({
        event: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r8.getNextLink(), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ProductListComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Route to blank page");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p")(6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_3_ng_container_1_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.locationChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Test location go");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Show: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_3_ng_container_1_Template_a_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.showProducts(true, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_3_ng_container_1_Template_a_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.showProducts(false, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ProductListComponent_div_3_ng_container_1_li_16_Template, 2, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ProductListComponent_div_3_ng_container_1_a_18_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const params_r6 = ctx.ngIf;
    const products_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Total: ", params_r6.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r5.getShowLink(true), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r5.getShowLink(false), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", products_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Page ", params_r6.page, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", params_r6.hasMore);
  }
}
const _c0 = function () {
  return {
    page: 2
  };
};
function ProductListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductListComponent_div_3_ng_container_1_Template, 19, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Test forward with page");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r1.params$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c0));
  }
}
function ProductListComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const params_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, params_r17), " ");
  }
}
class ProductListComponent {
  constructor(productService, productState, router, paramState, location, toast, authState, route) {
    this.productService = productService;
    this.productState = productState;
    this.router = router;
    this.paramState = paramState;
    this.location = location;
    this.toast = toast;
    this.authState = authState;
    this.route = route;
    //
  }

  ngOnInit() {
    //
    _attn(this.authState.currentItem?.profile?.firstName, 'xxxxxxxxxxxxxxx');
    this.user$ = this.authState.stateItem$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(n => n?.profile), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(n => _attn(n, 'ffffffffffffff')));
    this.params$ = this.paramState.stateItem$;
    this.products$ = this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(p => {
      return {
        page: +p.get('page') || 1,
        isPublic: p.get('public') === 'true',
        size: _config__WEBPACK_IMPORTED_MODULE_0__.Config.Basic.defaultSize,
        source: p.get('source') // lousy solution but it works
      };
    }),
    // here add a filter to filter out changes we do not want to trigger
    // distinctUntilKeyChanged('page'),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)((prev, next) => {
      if (prev.isPublic !== next.isPublic) {
        this.productState.emptyList();
        next.page = 1;
      }
      // if neither changes return true
      return prev.page >= next.page && prev.isPublic === next.isPublic;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(params => this.productService.GetProducts(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(products => {
      const _hasMore = (0,_core_common__WEBPACK_IMPORTED_MODULE_1__.hasMore)(products.total, params.size, params.page);
      // update state
      this.paramState.UpdateState({
        total: products.total,
        hasMore: _hasMore,
        ...params
      });
      return this.productState.appendList(products.matches);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(e => this.toast.HandleUiError(e)))));
    this.productState.emptyList();
    this.paramState.UpdateState({
      total: 2034,
      page: 1,
      size: _config__WEBPACK_IMPORTED_MODULE_0__.Config.Basic.defaultSize
    });
  }
  nextPage(e) {
    e.event.preventDefault();
    // increase page, and get all other params
    const page = this.paramState.currentItem.page + 1;
    const isPublic = this.paramState.currentItem.isPublic;
    // this.paramState.UpdateState({source});
    // dependency of Angular router
    // having multple paginators that control the url is a lousy idea
    this.router.navigate(['.', {
      page,
      public: isPublic
    }], {
      skipLocationChange: true
    });
    _core_gtm__WEBPACK_IMPORTED_MODULE_2__.GtmTracking.RegisterEvent({
      event: _core_gtm__WEBPACK_IMPORTED_MODULE_2__.EnumGtmEvent.PageView
    }, _core_gtm__WEBPACK_IMPORTED_MODULE_2__.GtmTracking.MapPath(`;page=${page};public=${isPublic}`));
    // this.location.go(`/products;page=${page};public=${isPublic}`);
  }

  showProducts(isPublic, event) {
    // simple routing event, what will happen to page?
    event.preventDefault();
    this.router.navigate(['.', {
      page: 1,
      public: isPublic
    }], {
      replaceUrl: true
    });
  }
  getNextLink() {
    const page = this.paramState.currentItem.page + 1;
    const isPublic = this.paramState.currentItem.isPublic;
    return `/products;page=${page};public=${isPublic}`;
  }
  getShowLink(isPublic) {
    return `/products;page=1;public=${isPublic}`;
  }
  locationChange() {
    this.router.navigate(['.', {
      page: 2
    }], {
      skipLocationChange: true
    });
  }
  trackThis(item) {
    // register event view_item in GA4 for this click
    _core_gtm__WEBPACK_IMPORTED_MODULE_2__.GtmTracking.RegisterEvent({
      event: _core_gtm__WEBPACK_IMPORTED_MODULE_2__.EnumGtmEvent.Click,
      source: _core_gtm__WEBPACK_IMPORTED_MODULE_2__.EnumGtmSource.ProductsList
    }, _core_gtm__WEBPACK_IMPORTED_MODULE_2__.GtmTracking.MapProducts([item]));
  }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
  return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_product_state__WEBPACK_IMPORTED_MODULE_5__.ProductState), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_param_state__WEBPACK_IMPORTED_MODULE_3__.ParamState), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_6__.Toast), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_state__WEBPACK_IMPORTED_MODULE_7__.AuthState), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
};
ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ProductListComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_services_param_state__WEBPACK_IMPORTED_MODULE_3__.ParamState])],
  decls: 11,
  vars: 11,
  consts: [[1, "page"], [4, "ngIf"], ["class", "container", 4, "ngIf"], ["source", "pager1", 3, "isLoadMore", "onPage"], ["source", "pager2", 3, "isLoadMore", "onPage"], [1, "container"], ["routerLink", "/projects", 3, "queryParams"], ["routerLink", "/", "target", "_blank"], [3, "click"], [1, "spaced"], [3, "href", "click"], [1, "rowlist"], [4, "ngFor", "ngForOf"], ["class", "btn", 3, "href", "click", 4, "ngIf"], [1, "btn", 3, "href", "click"]],
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductListComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProductListComponent_div_3_Template, 5, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div")(6, "cr-pager", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onPage", function ProductListComponent_Template_cr_pager_onPage_6_listener($event) {
        return ctx.nextPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "cr-pager", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onPage", function ProductListComponent_Template_cr_pager_onPage_7_listener($event) {
        return ctx.nextPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Somethign else on the page, this works even if above failed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ProductListComponent_ng_container_9_Template, 3, 3, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx.user$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 7, ctx.products$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoadMore", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoadMore", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 9, ctx.params$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _common_pager_partial__WEBPACK_IMPORTED_MODULE_8__.PagerPartialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.JsonPipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 7727:
/*!*****************************************!*\
  !*** ./src/app/routes/product.route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14195);
/* harmony import */ var _components_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product/list.component */ 58941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89318);
/* harmony import */ var _components_common_pager_partial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/pager.partial */ 27692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 40305);






// **gulpimport**
const routes = [{
  path: '',
  component: _components_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent,
  title: 'PRODUCTS'
}
// **gulproute**
];

class ProductRoutingModule {}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) {
  return new (t || ProductRoutingModule)();
};
ProductRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProductRoutingModule
});
ProductRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _components_common_pager_partial__WEBPACK_IMPORTED_MODULE_1__.PagerPartialComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
    declarations: [_components_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _components_common_pager_partial__WEBPACK_IMPORTED_MODULE_1__.PagerPartialComponent]
  });
})();

/***/ }),

/***/ 66857:
/*!*****************************************!*\
  !*** ./src/app/services/param.state.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParamState": () => (/* binding */ ParamState)
/* harmony export */ });
/* harmony import */ var _state_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.abstract */ 77127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 40305);


class ParamState extends _state_abstract__WEBPACK_IMPORTED_MODULE_0__.StateService {
  constructor() {
    super();
  }
}
ParamState.ɵfac = function ParamState_Factory(t) {
  return new (t || ParamState)();
};
ParamState.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ParamState,
  factory: ParamState.ɵfac
});

/***/ }),

/***/ 66163:
/*!*******************************************!*\
  !*** ./src/app/services/product.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductState": () => (/* binding */ ProductState)
/* harmony export */ });
/* harmony import */ var _state_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.abstract */ 77127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 40305);


class ProductState extends _state_abstract__WEBPACK_IMPORTED_MODULE_0__.ListStateService {
  constructor() {
    super();
  }
}
ProductState.ɵfac = function ProductState_Factory(t) {
  return new (t || ProductState)();
};
ProductState.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProductState,
  factory: ProductState.ɵfac,
  providedIn: 'root'
});

/***/ })

};
;