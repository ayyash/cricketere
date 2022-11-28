"use strict";
exports.id = "src_app_routes_product_route_ts";
exports.ids = ["src_app_routes_product_route_ts"];
exports.modules = {

/***/ 58941:
/*!******************************************************!*\
  !*** ./src/app/components/product/list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 79627);
/* harmony import */ var _core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/common */ 20393);
/* harmony import */ var _core_gtm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/gtm */ 21829);
/* harmony import */ var _services_param_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/param.state */ 66857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 40305);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ 61095);
/* harmony import */ var _services_product_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/product.state */ 66163);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 89318);
/* harmony import */ var _lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/toaster/toast.state */ 88198);














function ProductListComponent_div_1_ng_container_1_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", item_r7.name, " - ", item_r7.price, " ");
  }
}
function ProductListComponent_div_1_ng_container_1_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductListComponent_div_1_ng_container_1_a_18_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.nextPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r6.getNextLink(), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ProductListComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Route to blank page");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p")(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductListComponent_div_1_ng_container_1_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.locationChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Test location go");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Show: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductListComponent_div_1_ng_container_1_Template_a_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.showProducts(true, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductListComponent_div_1_ng_container_1_Template_a_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.showProducts(false, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ProductListComponent_div_1_ng_container_1_li_16_Template, 2, 2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ProductListComponent_div_1_ng_container_1_a_18_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const params_r4 = ctx.ngIf;
    const products_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total: ", params_r4.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r3.getShowLink(true), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r3.getShowLink(false), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", products_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Page ", params_r4.page, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", params_r4.hasMore);
  }
}
const _c0 = function () {
  return {
    page: 2
  };
};
function ProductListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductListComponent_div_1_ng_container_1_Template, 19, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Test forward with page");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r0.params$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0));
  }
}
function ProductListComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const params_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, params_r15), " ");
  }
}
class ProductListComponent {
  constructor(productService, productState, router, paramState, location, toast, route) {
    this.productService = productService;
    this.productState = productState;
    this.router = router;
    this.paramState = paramState;
    this.location = location;
    this.toast = toast;
    this.route = route;
    //
  }

  ngOnInit() {
    //
    this.params$ = this.paramState.stateItem$;
    this.products$ = this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(p => {
      return {
        page: +p.get('page') || 1,
        isPublic: p.get('public') === 'true',
        size: _config__WEBPACK_IMPORTED_MODULE_0__.Config.Basic.defaultSize
      };
    }),
    // here add a filter to filter out changes we do not want to trigger
    // distinctUntilKeyChanged('page'),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)((prev, next) => {
      if (prev.isPublic !== next.isPublic) {
        this.productState.emptyList();
        next.page = 1;
      }
      // if neither changes return true
      return prev.page >= next.page && prev.isPublic === next.isPublic;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => this.productService.GetProducts(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(products => {
      const _hasMore = (0,_core_common__WEBPACK_IMPORTED_MODULE_1__.hasMore)(products.total, params.size, params.page);
      // update state
      this.paramState.UpdateState({
        total: products.total,
        hasMore: _hasMore,
        ...params
      });
      return this.productState.appendList(products.matches);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(e => this.toast.HandleUiError(e)))));
    this.productState.emptyList();
    this.paramState.UpdateState({
      total: 2034,
      page: 1,
      size: _config__WEBPACK_IMPORTED_MODULE_0__.Config.Basic.defaultSize
    });
  }
  nextPage(event) {
    event.preventDefault();
    // increase page, and get all other params
    const page = this.paramState.currentItem.page + 1;
    const isPublic = this.paramState.currentItem.isPublic;
    // dependency of Angular router
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
  return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_product_state__WEBPACK_IMPORTED_MODULE_5__.ProductState), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_param_state__WEBPACK_IMPORTED_MODULE_3__.ParamState), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_6__.Toast), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ProductListComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_services_param_state__WEBPACK_IMPORTED_MODULE_3__.ParamState])],
  decls: 7,
  vars: 6,
  consts: [[1, "page"], ["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], ["routerLink", "/projects", 3, "queryParams"], ["routerLink", "/", "target", "_blank"], [3, "click"], [1, "spaced"], [3, "href", "click"], [1, "rowlist"], [4, "ngFor", "ngForOf"], ["class", "btn", 3, "href", "click", 4, "ngIf"], [1, "btn", 3, "href", "click"]],
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 5, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Somethign else on the page, this works even if above failed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProductListComponent_ng_container_5_Template, 3, 3, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx.products$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 4, ctx.params$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.JsonPipe],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14195);
/* harmony import */ var _components_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product/list.component */ 58941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 40305);





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
ProductRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProductRoutingModule
});
ProductRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
    declarations: [_components_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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