import './polyfills.server.mjs';
import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  EmailValidator,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  NG_VALIDATORS,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  PatternValidator,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Toast,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-AJDHBBCY.mjs";
import {
  DataList,
  EnumGtmEvent,
  EnumGtmSource,
  GtmTracking,
  ListOptions,
  ListStateService,
  StateService
} from "./chunk-YRNYRE7U.mjs";
import {
  ActivatedRoute,
  AsyncPipe,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Config,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  GetParamsAsString,
  HttpClient,
  Injectable,
  Input,
  JsonPipe,
  Location,
  NgForOf,
  NgIf,
  Output,
  Router,
  RouterLink,
  RouterModule,
  ViewChild,
  ViewEncapsulation,
  catchError,
  distinctUntilChanged,
  hasMore,
  makeDate,
  map,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ICBO6PTM.mjs";
import {
  __spreadValues
} from "./chunk-F3YYFOAS.mjs";

// src/app/services/param.state.ts
var ParamState = class _ParamState extends StateService {
  constructor() {
    super();
  }
  static \u0275fac = function ParamState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParamState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParamState, factory: _ParamState.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParamState, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/models/product.model.ts
var Product = class _Product {
  static NewInstance(product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      isPublic: product.is_public
    };
  }
  static NewInstances(products) {
    return products.map(_Product.NewInstance);
  }
  static NewList(dataset) {
    const dl = new DataList();
    dl.mapper = _Product.NewInstance;
    return dl.NewDataList(dataset);
  }
};

// src/app/services/product.service.ts
var ProductService = class _ProductService {
  _http;
  _listUrl = Config.API.product.list;
  constructor(_http) {
    this._http = _http;
  }
  GetProducts(options = {}) {
    const params = GetParamsAsString(ListOptions.MapSearchListOptions(options));
    const _url = this._listUrl.replace(":options", params);
    return this._http.get(_url).pipe(map((response) => {
      return Product.NewList(response);
    }));
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/services/product.state.ts
var ProductState = class _ProductState extends ListStateService {
  constructor() {
    super();
  }
  static \u0275fac = function ProductState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductState, factory: _ProductState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductState, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/components/food/list.component.ts
var _c0 = () => ({ page: 2 });
function FoodListComponent_div_1_ng_container_1_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3.name, " - ", item_r3.price, " ");
  }
}
function FoodListComponent_div_1_ng_container_1_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function FoodListComponent_div_1_ng_container_1_a_13_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextPage($event));
    });
    \u0275\u0275text(1, "Next");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.getNextLink(), \u0275\u0275sanitizeUrl);
  }
}
function FoodListComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4, " Show: ");
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275listener("click", function FoodListComponent_div_1_ng_container_1_Template_a_click_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showProducts(true, $event));
    });
    \u0275\u0275text(6, "Public");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " | ");
    \u0275\u0275elementStart(8, "a", 6);
    \u0275\u0275listener("click", function FoodListComponent_div_1_ng_container_1_Template_a_click_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showProducts(false, $event));
    });
    \u0275\u0275text(9, "Private");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ul", 7);
    \u0275\u0275template(11, FoodListComponent_div_1_ng_container_1_li_11_Template, 2, 2, "li", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275template(13, FoodListComponent_div_1_ng_container_1_a_13_Template, 2, 1, "a", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const params_r5 = ctx.ngIf;
    const products_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total: ", params_r5.total);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.getShowLink(true), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.getShowLink(false), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", products_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Page ", params_r5.page, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", params_r5.hasMore);
  }
}
function FoodListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, FoodListComponent_div_1_ng_container_1_Template, 14, 6, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "a", 4);
    \u0275\u0275text(4, "Test forward with page");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.params$));
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(4, _c0));
  }
}
var FoodListComponent = class _FoodListComponent {
  productService;
  productState;
  router;
  paramState;
  toast;
  route;
  products$;
  params$;
  everything$;
  constructor(productService, productState, router, paramState, toast, route) {
    this.productService = productService;
    this.productState = productState;
    this.router = router;
    this.paramState = paramState;
    this.toast = toast;
    this.route = route;
  }
  ngOnInit() {
    this.params$ = this.paramState.stateItem$;
    this.products$ = this.route.paramMap.pipe(
      map((p) => {
        return {
          page: +p.get("page") || 1,
          isPublic: p.get("public") === "true",
          size: Config.Basic.defaultSize
        };
      }),
      // here add a filter to filter out changes we do not want to trigger
      // distinctUntilKeyChanged('page'),
      distinctUntilChanged((prev, next) => {
        if (prev.isPublic !== next.isPublic) {
          this.productState.emptyList();
          next.page = 1;
        }
        return prev.page >= next.page && prev.isPublic === next.isPublic;
      }),
      switchMap((params) => this.productService.GetProducts(params).pipe(switchMap((products) => {
        const _hasMore = hasMore(products.total, params.size, params.page);
        this.paramState.UpdateState(__spreadValues({
          total: products.total,
          hasMore: _hasMore
        }, params));
        return this.productState.appendList(products.matches);
      }), catchError((e) => this.toast.HandleUiError(e))))
    );
    this.productState.emptyList();
    this.paramState.UpdateState({ total: 2034, page: 1, size: Config.Basic.defaultSize });
  }
  nextPage(event) {
    event.preventDefault();
    const page = this.paramState.currentItem.page + 1;
    const isPublic = this.paramState.currentItem.isPublic;
    this.router.navigate([".", { page, public: isPublic }], {
      skipLocationChange: true
    });
    GtmTracking.RegisterEvent({ event: EnumGtmEvent.PageView }, GtmTracking.MapPath(`;page=${page};public=${isPublic}`));
  }
  showProducts(isPublic, event) {
    event.preventDefault();
    this.router.navigate([".", { page: 1, public: isPublic }], { replaceUrl: true });
  }
  getNextLink() {
    const page = this.paramState.currentItem.page + 1;
    const isPublic = this.paramState.currentItem.isPublic;
    return `/products;page=${page};public=${isPublic}`;
  }
  getShowLink(isPublic) {
    return `/products;page=1;public=${isPublic}`;
  }
  static \u0275fac = function FoodListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ProductState), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ParamState), \u0275\u0275directiveInject(Toast), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoodListComponent, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([ParamState])], decls: 4, vars: 3, consts: [[1, "page"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], ["routerLink", "/projects", 3, "queryParams"], [1, "spaced"], [3, "click", "href"], [1, "rowlist"], [4, "ngFor", "ngForOf"], ["class", "btn", 3, "href", "click", 4, "ngIf"], [1, "btn", 3, "click", "href"]], template: function FoodListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, FoodListComponent_div_1_Template, 5, 5, "div", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275element(3, "div");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx.products$));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoodListComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, providers: [ParamState], imports: [CommonModule, RouterModule], template: '<div class="page">\r\n  <div class="container" *ngIf="products$ | async as products">\r\n    <ng-container *ngIf="params$ | async as params">\r\n      <p>Total: {{ params.total }}</p>\r\n      <div class="spaced">\r\n        Show: <a [href]="getShowLink(true)" (click)="showProducts(true, $event)">Public</a> |\r\n        <a [href]="getShowLink(false)" (click)="showProducts(false, $event)">Private</a>\r\n      </div>\r\n      <ul class="rowlist">\r\n        <li *ngFor="let item of products">\r\n          {{ item.name }} - {{item.price }}\r\n        </li>\r\n      </ul>\r\n      Page {{params.page}}\r\n      <a class="btn" [href]="getNextLink()" (click)="nextPage($event)" *ngIf="params.hasMore">Next</a>\r\n    </ng-container>\r\n    <a routerLink="/projects" [queryParams]="{page: 2}">Test forward with page</a>\r\n  </div>\r\n  <div>\r\n\r\n  </div>\r\n</div>\r\n' }]
  }], () => [{ type: ProductService }, { type: ProductState }, { type: Router }, { type: ParamState }, { type: Toast }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoodListComponent, { className: "FoodListComponent", filePath: "src/app/components/food/list.component.ts", lineNumber: 21 });
})();

// src/app/lib/input/patterns.ts
var InputPatterns = /* @__PURE__ */ new Map([
  ["phone", "[+\\d\\s]*"],
  ["password", "[\\S]{8,}"],
  ["positiveNumber", /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/],
  ["url", "^(http|https)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(/S*)?$"],
  ["image", ".+\\.{1}(jpg|png|gif|bmp)$"]
]);

// src/app/lib/input/validators.ts
var futureValidator = (control) => {
  const today = Date.now();
  if (!control.value)
    return null;
  const value = new Date(control.value);
  if (!value || +value > +today) {
    return null;
  }
  return {
    future: true
  };
};
var pastValidator = (control) => {
  const today = Date.now();
  if (!control.value)
    return null;
  const value = new Date(control.value);
  if (!value || +value < +today) {
    return null;
  }
  return {
    past: true
  };
};
var matchPasswordFn = (pwd) => {
  return (control) => {
    if (control?.value === pwd?.value) {
      return null;
    }
    return {
      matchPassword: true
    };
  };
};
var pastValidatorFn = (params) => {
  return (control) => {
    if (!control.value)
      return null;
    const _date = makeDate(params.date);
    if (!_date)
      return null;
    const value = new Date(control.value);
    if (!value || +value < +_date) {
      return null;
    }
    return {
      past: true
    };
  };
};
var dateRangeValidatorFn = (params) => {
  return (control) => {
    if (!control.value)
      return null;
    const _min = makeDate(params.minDate);
    const _max = makeDate(params.maxDate);
    if (!_min && !_max)
      return null;
    const _minDate = _min ? +_min : null;
    const _maxDate = _max ? +_max : null;
    const value = +new Date(control.value);
    const future = _maxDate ? value < _maxDate : true;
    const past = value > _minDate;
    if (future && past) {
      return null;
    }
    return {
      dateRange: true
    };
  };
};
var sizeValidatorFn = (params) => {
  return (control) => {
    if (!control.value)
      return null;
    const _max = params.max * 1024;
    if (params.size > _max) {
      return {
        size: true
      };
    }
    return null;
  };
};
var atleastOne = (control) => {
  const values = Object.values(control.value);
  if (values.some((v) => v === true)) {
    return null;
  }
  return { atleastOne: true };
};
var InputValidators = /* @__PURE__ */ new Map([
  ["matchPassword", matchPasswordFn],
  ["future", futureValidator],
  ["past", pastValidator],
  ["pastFn", pastValidatorFn],
  ["dateRangeFn", dateRangeValidatorFn],
  ["sizeFn", sizeValidatorFn],
  ["atleastOne", atleastOne]
]);

// src/app/lib/input/input.directive.ts
var InputDirective = class _InputDirective {
  el;
  min;
  max;
  minlength;
  maxlength;
  block;
  pattern;
  crpattern;
  email;
  validator;
  params;
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
  }
  get element() {
    return this.el.nativeElement;
  }
  errorText = signal(
    "Required",
    ...ngDevMode ? [{ debugName: "errorText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  validate(control) {
    if (this.validator) {
      const _validator = InputValidators.get(this.validator);
      if (_validator && !control.hasValidator(_validator)) {
        if (this.params) {
          control.addValidators(_validator(this.params));
        } else {
          control.addValidators(_validator);
        }
      }
    }
    this.errorText.set("Required");
    if (this.min && control.value) {
      if (Validators.min(this.min)(control)) {
        this.errorText.set("Too small");
      }
    }
    if (this.max && control.value) {
      if (Validators.max(this.max)(control)) {
        this.errorText.set("Too large");
      }
    }
    if (this.minlength && control.value) {
      if (Validators.minLength(this.minlength)(control)) {
        this.errorText.set("Too short");
      }
    }
    if (this.maxlength && control.value) {
      if (Validators.maxLength(this.maxlength)(control)) {
        this.errorText.set("Too long");
      }
    }
    if (this.block) {
      if (control.value >= this.block[0] && control.value <= this.block[1]) {
        this.errorText.set("Invalid number");
        return {
          block: true
        };
      }
    }
    if (this.pattern) {
      this.errorText.set("Invalid format");
    }
    if (this.email) {
      this.errorText.set("Invalid email format");
    }
    if (this.crpattern) {
      this.errorText.set("Invalid format");
      let _pattern = InputPatterns.get(this.crpattern);
      if (_pattern) {
        this.errorText.set(`Invalid ${this.crpattern} format`);
        return Validators.pattern(_pattern)(control);
      }
    }
    return null;
  }
  static \u0275fac = function InputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _InputDirective, selectors: [["", "crinput", ""]], inputs: { min: "min", max: "max", minlength: "minlength", maxlength: "maxlength", block: "block", pattern: "pattern", crpattern: "crpattern", email: "email", validator: "validator", params: "params" }, exportAs: ["crinput"], features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALIDATORS, multi: true, useExisting: _InputDirective }])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputDirective, [{
    type: Directive,
    args: [{
      selector: "[crinput]",
      providers: [{ provide: NG_VALIDATORS, multi: true, useExisting: InputDirective }],
      exportAs: "crinput"
    }]
  }], () => [{ type: ElementRef }], { min: [{
    type: Input
  }], max: [{
    type: Input
  }], minlength: [{
    type: Input
  }], maxlength: [{
    type: Input
  }], block: [{
    type: Input
  }], pattern: [{
    type: Input
  }], crpattern: [{
    type: Input
  }], email: [{
    type: Input
  }], validator: [{
    type: Input
  }], params: [{
    type: Input
  }] });
})();

// src/app/lib/input/input.partial.ts
var _c02 = ["*", [["", "helptext", ""]]];
var _c1 = ["*", "[helptext]"];
var CrInputPartial = class _CrInputPartial {
  inputDirective;
  placeholder;
  cssPrefix = "cr";
  error;
  invalidForm;
  for;
  type;
  get typeCss() {
    return this.type ? `${this.cssPrefix}-${this.type}` : "";
  }
  get errorText() {
    return this.error || this.inputDirective?.errorText();
  }
  ngAfterContentInit() {
    if (this.inputDirective) {
      const element = this.inputDirective.element;
      this.for = element.id;
      element.classList.add(`cr-input`);
      element.setAttribute("placeholder", this.placeholder);
    }
  }
  static \u0275fac = function CrInputPartial_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrInputPartial)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrInputPartial, selectors: [["cr-input"]], contentQueries: function CrInputPartial_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, InputDirective, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputDirective = _t.first);
    }
  }, inputs: { placeholder: "placeholder", cssPrefix: "cssPrefix", error: "error", invalidForm: "invalidForm", for: "for", type: "type" }, ngContentSelectors: _c1, decls: 9, vars: 12, consts: [[1, "cr-label", 3, "for"], [1, "cr-required"], [1, "cr-feedback"], [1, "cr-help"]], template: function CrInputPartial_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275domElementStart(0, "div")(1, "label", 0);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(3);
      \u0275\u0275domElement(4, "span", 1);
      \u0275\u0275domElementStart(5, "span", 2);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "span", 3);
      \u0275\u0275projection(8, 1);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate2("", ctx.cssPrefix, "-field ", ctx.typeCss));
      \u0275\u0275classProp("cr-invalid-form", ctx.invalidForm);
      \u0275\u0275advance();
      \u0275\u0275domProperty("htmlFor", \u0275\u0275interpolate(ctx.for));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.placeholder);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("cr-form-feedback", ctx.invalidForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.errorText);
    }
  }, styles: ['.cr-field{position:relative;display:block;margin-block-end:var(--%NS%sh-doublespace, 3.2rem);margin-block-start:var(--%NS%sh-halfspace, .8rem)}.cr-field .cr-input{border:1px solid var(--%NS%sh-grey, #999999);border-radius:var(--%NS%sh-radius, 3px);outline:none;padding:var(--%NS%sh-halfspace, .8rem);box-shadow:0 2px 5px 0 var(--%NS%sh-grey-light, #f3f3f3cc);background-color:var(--%NS%sh-white, #ffffff);caret-color:var(--%NS%sh-linkcolor, #0c00b4)}.cr-field .cr-input:focus-visible{outline:none;border-color:var(--%NS%sh-linkcolor, #0c00b4);box-shadow:0 0 0 1px var(--%NS%sh-linkcolor, #0c00b4)}.cr-field .cr-input:focus-visible~.cr-required{display:none!important}.cr-field .cr-input::placeholder{color:transparent!important}.cr-field .cr-input~.cr-required{display:none;position:absolute;inset-inline-end:var(--%NS%sh-halfspace, .8rem);inset-block-start:0;z-index:2}.cr-field .cr-input~.cr-required:after{display:block;content:"*";font-size:1.6rem;font-weight:var(--%NS%sh-font-weight-bold, 700);line-height:1.5;color:var(--%NS%sh-red, #f31109)}.cr-field .cr-input[required]~.cr-required{display:inline-block}.cr-field .cr-feedback{background-color:var(--%NS%sh-red, #f31109);color:var(--%NS%sh-white, #ffffff);margin-inline-start:1rem;margin-block-start:calc(-1 * var(--%NS%sh-halfspace, 1.6rem));float:inline-start;z-index:100;position:relative;border-radius:var(--%NS%sh-radius, 3px);padding-inline:var(--%NS%sh-halfspace, .8rem);padding-block:calc(var(--%NS%sh-halfspace, .8rem) / 2);white-space:nowrap;display:none;width:fit-content;font-size:85%}.cr-field .cr-label{position:absolute;inset-block-start:var(--%NS%sh-halfspace, .8rem);inset-inline-start:9px;padding:0 3px;color:var(--%NS%sh-text-light, #959595);cursor:auto;transform-origin:left;transition:transform .3s;transform:translateY(-100%) scale(.8);background-image:linear-gradient(0deg,var(--%NS%sh-white, #ffffff) 62%,transparent 62%)}.cr-field .cr-label:has(~.cr-input:placeholder-shown){transform:none}.cr-field .cr-label:has(~.cr-input:focus-visible){transform:translateY(-100%) scale(.8)}.cr-field .cr-help{color:var(--%NS%sh-text-light, #959595);font-size:90%;display:block;margin-block-start:var(--%NS%sh-halfspace, .8rem);text-align:end}.cr-field .cr-help:empty{display:none}.ng-submitted .cr-field .cr-input.ng-invalid,.ng-submitted .cr-field.cr-invalid-form .cr-input{box-shadow:inset 0 0 0 1px var(--%NS%sh-red, #f31109);border-color:var(--%NS%sh-red, #f31109)}.ng-submitted .cr-field .cr-input.ng-invalid~.cr-feedback{display:block}.ng-submitted .cr-field .cr-label:has(~.cr-input.ng-invalid),.ng-submitted .cr-field.cr-invalid-form .cr-label{color:var(--%NS%sh-red, #f31109)}.cr-form .cr-form-feedback{display:none}.cr-form.ng-submitted .cr-form-feedback{display:block}.cr-field.cr-checkbox .cr-label{transform:none!important;inset-block-start:0;inset-inline-start:0;padding-inline-start:1.8rem;position:relative;display:inline-block;background:none;cursor:pointer}.cr-field.cr-checkbox .cr-input{position:absolute;inset-inline-start:0}.cr-field.cr-checkbox .cr-feedback{float:none;margin-block-start:0}.cr-field.cr-checkbox .cr-required{position:static}.cr-field.cr-checkbox .cr-required:after{line-height:0}.cr-field.cr-hidden .cr-label{display:none}.cr-field.cr-hidden .cr-input[required]~.cr-required{display:none}.cr-field.cr-hidden .cr-feedback{float:none;margin-block-start:0;margin-inline-start:0}.cr-field.cr-static .cr-label:has(~.cr-input:placeholder-shown){transform:translateY(-100%) scale(.8)}\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrInputPartial, [{
    type: Component,
    args: [{ selector: "cr-input", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <div class="{{ cssPrefix }}-field {{ typeCss }}" [class.cr-invalid-form]="invalidForm">
      <label class="cr-label" for="{{for}}">{{ placeholder }}</label>
      <ng-content></ng-content>
      <span class="cr-required"></span>
      <span class="cr-feedback" [class.cr-form-feedback]="invalidForm">{{ errorText }}</span>
      <span class="cr-help">
        <ng-content select="[helptext]"></ng-content>
      </span>
    </div>
    `, styles: ['.cr-field{position:relative;display:block;margin-block-end:var(--sh-doublespace, 3.2rem);margin-block-start:var(--sh-halfspace, .8rem)}.cr-field .cr-input{border:1px solid var(--sh-grey, #999999);border-radius:var(--sh-radius, 3px);outline:none;padding:var(--sh-halfspace, .8rem);box-shadow:0 2px 5px 0 var(--sh-grey-light, #f3f3f3cc);background-color:var(--sh-white, #ffffff);caret-color:var(--sh-linkcolor, #0c00b4)}.cr-field .cr-input:focus-visible{outline:none;border-color:var(--sh-linkcolor, #0c00b4);box-shadow:0 0 0 1px var(--sh-linkcolor, #0c00b4)}.cr-field .cr-input:focus-visible~.cr-required{display:none!important}.cr-field .cr-input::placeholder{color:transparent!important}.cr-field .cr-input~.cr-required{display:none;position:absolute;inset-inline-end:var(--sh-halfspace, .8rem);inset-block-start:0;z-index:2}.cr-field .cr-input~.cr-required:after{display:block;content:"*";font-size:1.6rem;font-weight:var(--sh-font-weight-bold, 700);line-height:1.5;color:var(--sh-red, #f31109)}.cr-field .cr-input[required]~.cr-required{display:inline-block}.cr-field .cr-feedback{background-color:var(--sh-red, #f31109);color:var(--sh-white, #ffffff);margin-inline-start:1rem;margin-block-start:calc(-1 * var(--sh-halfspace, 1.6rem));float:inline-start;z-index:100;position:relative;border-radius:var(--sh-radius, 3px);padding-inline:var(--sh-halfspace, .8rem);padding-block:calc(var(--sh-halfspace, .8rem) / 2);white-space:nowrap;display:none;width:fit-content;font-size:85%}.cr-field .cr-label{position:absolute;inset-block-start:var(--sh-halfspace, .8rem);inset-inline-start:9px;padding:0 3px;color:var(--sh-text-light, #959595);cursor:auto;transform-origin:left;transition:transform .3s;transform:translateY(-100%) scale(.8);background-image:linear-gradient(0deg,var(--sh-white, #ffffff) 62%,transparent 62%)}.cr-field .cr-label:has(~.cr-input:placeholder-shown){transform:none}.cr-field .cr-label:has(~.cr-input:focus-visible){transform:translateY(-100%) scale(.8)}.cr-field .cr-help{color:var(--sh-text-light, #959595);font-size:90%;display:block;margin-block-start:var(--sh-halfspace, .8rem);text-align:end}.cr-field .cr-help:empty{display:none}.ng-submitted .cr-field .cr-input.ng-invalid,.ng-submitted .cr-field.cr-invalid-form .cr-input{box-shadow:inset 0 0 0 1px var(--sh-red, #f31109);border-color:var(--sh-red, #f31109)}.ng-submitted .cr-field .cr-input.ng-invalid~.cr-feedback{display:block}.ng-submitted .cr-field .cr-label:has(~.cr-input.ng-invalid),.ng-submitted .cr-field.cr-invalid-form .cr-label{color:var(--sh-red, #f31109)}.cr-form .cr-form-feedback{display:none}.cr-form.ng-submitted .cr-form-feedback{display:block}.cr-field.cr-checkbox .cr-label{transform:none!important;inset-block-start:0;inset-inline-start:0;padding-inline-start:1.8rem;position:relative;display:inline-block;background:none;cursor:pointer}.cr-field.cr-checkbox .cr-input{position:absolute;inset-inline-start:0}.cr-field.cr-checkbox .cr-feedback{float:none;margin-block-start:0}.cr-field.cr-checkbox .cr-required{position:static}.cr-field.cr-checkbox .cr-required:after{line-height:0}.cr-field.cr-hidden .cr-label{display:none}.cr-field.cr-hidden .cr-input[required]~.cr-required{display:none}.cr-field.cr-hidden .cr-feedback{float:none;margin-block-start:0;margin-inline-start:0}.cr-field.cr-static .cr-label:has(~.cr-input:placeholder-shown){transform:translateY(-100%) scale(.8)}\n'] }]
  }], null, { inputDirective: [{
    type: ContentChild,
    args: [InputDirective, { static: true }]
  }], placeholder: [{
    type: Input
  }], cssPrefix: [{
    type: Input
  }], error: [{
    type: Input
  }], invalidForm: [{
    type: Input
  }], for: [{
    type: Input
  }], type: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrInputPartial, { className: "CrInputPartial", filePath: "src/app/lib/input/input.partial.ts", lineNumber: 22 });
})();

// src/app/components/product/expiry.partial.ts
var _c03 = ["month"];
var _c12 = ["year"];
var ProductExpiryPartial = class _ProductExpiryPartial {
  month;
  year;
  onValue = new EventEmitter();
  constructor() {
  }
  ngAfterViewInit() {
    const month = this.month.nativeElement;
    const year = this.year.nativeElement;
    month.addEventListener("input", (event) => {
      const value = month.value.toString();
      if (value.length === 1 && +value > 1) {
        month.value = "0" + value;
      }
      if (value === "00") {
        month.value = "01";
      } else if (+value > 12) {
        month.value = "12";
      }
      if (month.value.length >= 2) {
        year.focus();
      }
      event.stopImmediatePropagation();
    });
    month.addEventListener("keypress", (e) => this.maskInput(e, month));
    year.addEventListener("keypress", (e) => this.maskInput(e, year));
    month.addEventListener("change", (e) => this.emitValue());
    year.addEventListener("change", (e) => this.emitValue());
  }
  emitValue() {
    this.onValue.emit({ month: this.month.nativeElement.value, year: this.year.nativeElement.value });
  }
  maskInput(event, target) {
    if (/[^0-9]/.test(event.key) || target.value.length >= 2) {
      event.preventDefault();
    }
  }
  static \u0275fac = function ProductExpiryPartial_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductExpiryPartial)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductExpiryPartial, selectors: [["cr-product-expiry"]], viewQuery: function ProductExpiryPartial_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5, ElementRef)(_c12, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.month = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.year = _t.first);
    }
  }, outputs: { onValue: "onValue" }, decls: 4, vars: 0, consts: [["month", ""], ["year", ""], ["autocomplete", "off", "required", "", "maxlength", "2", "pattern", "[0-9]{1,2}", "inputmode", "numerical", "placeholder", "MM", "type", "text", 1, "c-6", "cr-input"], ["autocomplete", "off", "required", "", "maxlength", "2", "pattern", "[0-9]{1,2}", "inputmode", "numerical", "placeholder", "YY", "type", "text", 1, "c-6", "cr-input"]], template: function ProductExpiryPartial_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "input", 2, 0)(2, "input", 3, 1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductExpiryPartial, [{
    type: Component,
    args: [{ selector: "cr-product-expiry", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ReactiveFormsModule], template: '<input autocomplete="off" class="c-6 cr-input" required maxlength="2" pattern="[0-9]{1,2}" inputmode="numerical"\r\n  placeholder="MM" type="text" #month />\r\n<input autocomplete="off" class="c-6 cr-input" required maxlength="2" pattern="[0-9]{1,2}" inputmode="numerical"\r\n  placeholder="YY" type="text" #year />\r\n' }]
  }], () => [], { month: [{
    type: ViewChild,
    args: ["month", { read: ElementRef }]
  }], year: [{
    type: ViewChild,
    args: ["year", { read: ElementRef }]
  }], onValue: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductExpiryPartial, { className: "ProductExpiryPartial", filePath: "src/app/components/product/expiry.partial.ts", lineNumber: 11 });
})();

// src/app/components/product/form.component.ts
var _c04 = () => [2, 4];
var ProductFormPartial = class _ProductFormPartial {
  fb;
  toast;
  valvet;
  fg;
  // yyyymm
  thisMonth = (/* @__PURE__ */ new Date()).toISOString().substring(2, 7).replace("-", "");
  forbiddenNameValidator = (nameRe) => {
    return (control) => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  };
  unambiguousRoleValidator = (control) => {
    const name = control?.get("name")?.value;
    const role = control?.get("role")?.value;
    if (!role)
      return null;
    return name && role && name === role ? { unambiguousRole: true } : null;
  };
  futureValidator = (control) => {
    const value = control.value;
    if (!value || +value > +this.thisMonth) {
      return null;
    }
    return {
      future: true
    };
  };
  constructor(fb, toast) {
    this.fb = fb;
    this.toast = toast;
  }
  ngOnInit() {
    InputPatterns.set("shortname", "[A-Za-z]{5}");
    this.fg = this.fb.group({
      valvet: [""],
      mars: [1],
      buler: [],
      skippy: [],
      email: [],
      shortname: [],
      phone: [],
      koolaid: [],
      name: ["", this.forbiddenNameValidator(/bob/i)],
      role: [""],
      orange: [],
      mmyy: [null, this.futureValidator]
    }, { validators: this.unambiguousRoleValidator });
  }
  expirationValue(value) {
    this.fg.get("mmyy").setValue(value.year + value.month);
  }
  checkRole() {
    this.fg.get("role").updateValueAndValidity();
  }
  reset() {
    this.fg.reset();
  }
  create() {
    _attn(this.fg.value);
    _attn(this.fg.valid);
    if (this.fg.invalid) {
      this.toast.ShowError("INVALID_FORM");
    }
  }
  static \u0275fac = function ProductFormPartial_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductFormPartial)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Toast));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormPartial, selectors: [["app-product-form"]], decls: 49, vars: 11, consts: [[1, "cr-form", 3, "ngSubmit", "formGroup"], ["placeholder", "Valvet"], ["crinput", "", "type", "text", "id", "valvet", "formControlName", "valvet", "required", "", 1, "w100"], ["placeholder", "Mars"], ["crinput", "", "type", "number", "id", "mars", "formControlName", "mars", "required", "", 1, "w100", 3, "min", "max"], ["helptext", ""], ["placeholder", "Reverse range"], ["crinput", "", "type", "number", "id", "buler", "formControlName", "buler", 1, "w100", 3, "block"], ["placeholder", "Skippy"], ["crinput", "", "type", "text", "id", "skippy", "formControlName", "skippy", 1, "w100", 3, "minlength", "maxlength"], ["placeholder", "Email"], ["crinput", "", "type", "email", "id", "email", "formControlName", "email", 1, "w100", 3, "email"], ["placeholder", "Phone"], ["crinput", "", "type", "text", "id", "phone", "formControlName", "phone", "crpattern", "phone", 1, "w100"], ["placeholder", "Shortname"], ["crinput", "", "type", "text", "id", "shortname", "formControlName", "shortname", "crpattern", "shortname", 1, "w100"], ["placeholder", "Some pattern", "error", "Invalid koolaid format"], ["crinput", "", "type", "text", "id", "koolaid", "formControlName", "koolaid", "pattern", "[1-9]{2,4}", 1, "w100"], ["placeholder", "Custom name", "error", "Bob is not allowed"], ["crinput", "", "type", "text", "id", "name", "formControlName", "name", 1, "w100"], ["placeholder", "Role", "error", "Required. And cannot match name to avoid confusion.", 3, "invalidForm"], ["crinput", "", "type", "text", "id", "role", "formControlName", "role", 1, "w100", 3, "required"], ["placeholder", "Oranges", "for", "oo", "error", "One number only"], ["type", "text", "id", "oo", "placeholder", "Oranges", "pattern", "[0-9]{1}", "formControlName", "orange", 1, "w100", "cr-input"], ["placeholder", "Expiration", "error", "Add a date in the future", 1, "c-5", "dblock"], ["type", "hidden", "crinput", "", "id", "mmyy", "pattern", "[0-9]{4}", "formControlName", "mmyy", 3, "required"], [3, "onValue"], [1, "breath"], ["type", "button", 1, "btn-fake", 3, "click"], ["type", "submit", 1, "btn-rev"]], template: function ProductFormPartial_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function ProductFormPartial_Template_form_ngSubmit_0_listener() {
        return ctx.create();
      });
      \u0275\u0275elementStart(1, "cr-input", 1);
      \u0275\u0275element(2, "input", 2);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "cr-input", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(5, 5);
      \u0275\u0275text(6, "Range of 2 - 4");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "cr-input", 6);
      \u0275\u0275element(8, "input", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(9, 5);
      \u0275\u0275text(10, "Less than 2, or more than 4");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "cr-input", 8);
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(13, 5);
      \u0275\u0275text(14, "Three to 6 characters");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "cr-input", 10);
      \u0275\u0275element(16, "input", 11);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(17, 5);
      \u0275\u0275text(18, "Native email");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "cr-input", 12);
      \u0275\u0275element(20, "input", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(21, 5);
      \u0275\u0275text(22, "Alphabets and spaces");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "cr-input", 14);
      \u0275\u0275element(24, "input", 15);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(25, 5);
      \u0275\u0275text(26, "Alphanumeric, 5 characters");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "cr-input", 16);
      \u0275\u0275element(28, "input", 17);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(29, 5);
      \u0275\u0275text(30, "Two to 4 numbers");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "cr-input", 18);
      \u0275\u0275element(32, "input", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(33, 5);
      \u0275\u0275text(34, "Not bob");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "cr-input", 20);
      \u0275\u0275element(36, "input", 21);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "cr-input", 22);
      \u0275\u0275element(38, "input", 23);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(39, 5);
      \u0275\u0275text(40, "One number");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "cr-input", 24);
      \u0275\u0275element(42, "input", 25);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(43, "cr-product-expiry", 26);
      \u0275\u0275listener("onValue", function ProductFormPartial_Template_cr_product_expiry_onValue_43_listener($event) {
        return ctx.expirationValue($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 27)(45, "button", 28);
      \u0275\u0275listener("click", function ProductFormPartial_Template_button_click_45_listener() {
        return ctx.reset();
      });
      \u0275\u0275text(46, "Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 29);
      \u0275\u0275text(48, "Submit");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.fg);
      \u0275\u0275advance(2);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("min", 2)("max", 4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("block", \u0275\u0275pureFunction0(10, _c04));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("minlength", 3)("maxlength", 6);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("email", true);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("invalidForm", ctx.fg.hasError("unambiguousRole"));
      \u0275\u0275advance();
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
    }
  }, dependencies: [CommonModule, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, EmailValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, CrInputPartial, InputDirective, ProductExpiryPartial], styles: ['.gr-something .cr-field.cr-checkbox .cr-input{appearance:none;width:44px;height:24px;border-radius:12px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:before{width:16px;height:16px;border-radius:9px;background-color:var(--%NS%sh-black, #000);content:"";position:absolute;inset-block-start:3px;inset-inline-start:4px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked{background-color:var(--%NS%sh-yellow, #ffaa00);transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked:before{inset-inline-start:22px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-label{padding-inline-start:4.2rem}\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductFormPartial, [{
    type: Component,
    args: [{ selector: "app-product-form", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [CommonModule, RouterModule, ReactiveFormsModule, CrInputPartial, InputDirective, ProductExpiryPartial], template: `
  <form [formGroup]="fg" (ngSubmit)="create()" class="cr-form">
    <cr-input placeholder="Valvet">
      <input crinput type="text" id="valvet" class="w100" formControlName="valvet" required  />
    </cr-input>
    <cr-input placeholder="Mars">
      <input crinput type="number" id="mars" class="w100" formControlName="mars" required [min]="2" [max]="4" />
      <ng-container helptext>Range of 2 - 4</ng-container>
    </cr-input>
    <cr-input placeholder="Reverse range">
      <input crinput type="number" id="buler" class="w100" formControlName="buler"  [block]="[2,4]" />
      <ng-container helptext>Less than 2, or more than 4</ng-container>
    </cr-input>
    <cr-input placeholder="Skippy">
      <input crinput type="text" id="skippy" class="w100" formControlName="skippy" [minlength]="3" [maxlength]="6"   />
      <ng-container helptext>Three to 6 characters</ng-container>
    </cr-input>
    <cr-input placeholder="Email">
      <input crinput type="email" id="email" class="w100" formControlName="email" [email]="true" />
      <ng-container helptext>Native email</ng-container>
    </cr-input>
    <cr-input placeholder="Phone">
      <input crinput type="text" id="phone" class="w100" formControlName="phone"  crpattern="phone" />
      <ng-container helptext>Alphabets and spaces</ng-container>
    </cr-input>
    <cr-input placeholder="Shortname">
      <input crinput type="text" id="shortname" class="w100" formControlName="shortname"  crpattern="shortname" />
      <ng-container helptext>Alphanumeric, 5 characters</ng-container>
    </cr-input>
    <cr-input placeholder="Some pattern" error="Invalid koolaid format">
      <input crinput type="text" id="koolaid" class="w100" formControlName="koolaid"  pattern="[1-9]{2,4}" />
      <ng-container helptext>Two to 4 numbers</ng-container>
    </cr-input>

    <cr-input placeholder="Custom name" error="Bob is not allowed" >
      <input crinput type="text" id="name" class="w100" formControlName="name" />
      <ng-container helptext>Not bob</ng-container>
    </cr-input>
    <cr-input placeholder="Role" error="Required. And cannot match name to avoid confusion." [invalidForm]="fg.hasError('unambiguousRole')">
      <input crinput type="text" id="role" class="w100" formControlName="role" [required]="true"  />
      <!-- <span *ngIf="fg.hasError('unambiguousRole')" class="cr-form-feedback cr-feedback"></span> -->
    </cr-input>

    <cr-input placeholder="Oranges" for="oo" error="One number only">
      <input type="text" id="oo" class="w100 cr-input" placeholder="Oranges" pattern="[0-9]{1}" formControlName="orange"  />
      <ng-container helptext>One number</ng-container>
    </cr-input>



    <cr-input placeholder="Expiration" error="Add a date in the future" class="c-5 dblock">
      <input type="hidden" crinput id="mmyy" [required]="true" pattern="[0-9]{4}" formControlName="mmyy" />
      <cr-product-expiry (onValue)="expirationValue($event)"></cr-product-expiry>
    </cr-input>


    <div class="breath">

      <button class="btn-fake" type="button" (click)="reset()">Reset</button>
      <button class="btn-rev" type="submit">Submit</button>
    </div>
  </form>
  `, styles: ['.gr-something .cr-field.cr-checkbox .cr-input{appearance:none;width:44px;height:24px;border-radius:12px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:before{width:16px;height:16px;border-radius:9px;background-color:var(--sh-black, #000);content:"";position:absolute;inset-block-start:3px;inset-inline-start:4px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked{background-color:var(--sh-yellow, #ffaa00);transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked:before{inset-inline-start:22px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-label{padding-inline-start:4.2rem}\n'] }]
  }], () => [{ type: FormBuilder }, { type: Toast }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormPartial, { className: "ProductFormPartial", filePath: "src/app/components/product/form.component.ts", lineNumber: 80 });
})();

// src/app/components/product/create.component.ts
var ProductCreateFormPartial = class _ProductCreateFormPartial {
  fb;
  toast;
  forceValidation = false;
  productForm;
  constructor(fb, toast) {
    this.fb = fb;
    this.toast = toast;
  }
  ngOnInit() {
    this.productForm = this.fb.group({
      fieldname: [],
      fieldgroup: this.fb.group({
        fieldname: []
      }),
      list: []
    });
  }
  // use to compare for initial select... keep '=='
  compareFn(c1, c2) {
    return c1 && c2 ? c1.id == c2.id : false;
  }
  saveProduct() {
    this.forceValidation = false;
    this.toast.Hide();
    if (this.productForm.valid) {
      const _value = this.productForm.value;
      const _product = __spreadValues({}, _value);
    } else {
      this.forceValidation = true;
      this.toast.ShowError("INVALID_FORM");
    }
  }
  static \u0275fac = function ProductCreateFormPartial_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCreateFormPartial)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Toast));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCreateFormPartial, selectors: [["ng-component"]], decls: 3, vars: 0, consts: [[1, "page"], [1, "container"]], template: function ProductCreateFormPartial_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-product-form");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, RouterModule, ReactiveFormsModule, ProductFormPartial], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCreateFormPartial, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, ReactiveFormsModule, ProductFormPartial], template: '<div class="page">\r\n  <div class="container">\r\n    <app-product-form></app-product-form>\r\n\r\n    <!-- <form [formGroup]="productForm" novalidate (ngSubmit)="saveProduct()" [class.was-validated]="forceValidation"> -->\r\n\r\n<!--\r\n      <div class="spaced">\r\n        <md-input placeholder="List">\r\n          <select formControlName="list" mdinput class="md-input w100" [required]="true" [compareWith]="compareFn">\r\n            <option *ngFor="let item of [1,2,3,4,5]" [ngValue]="item">{{ item }}</option>\r\n          </select>\r\n        </md-input>\r\n      </div> -->\r\n\r\n      <!-- <fieldset formGroupName="fieldgroup">\r\n        <legend>Group</legend>\r\n\r\n        <div class="breath">\r\n          <md-input placeholder="group name">\r\n            <input type="text" class="md-input w100" mdinput mdpattern="email" id="groupfieldname"\r\n              formControlName="fieldname" [required]="true" />\r\n          </md-input>\r\n        </div>\r\n      </fieldset> -->\r\n      <!-- <button class="btn-rev" type="submit">Save</button> -->\r\n\r\n    <!-- </form> -->\r\n  </div>\r\n</div>\r\n' }]
  }], () => [{ type: FormBuilder }, { type: Toast }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCreateFormPartial, { className: "ProductCreateFormPartial", filePath: "src/app/components/product/create.component.ts", lineNumber: 13 });
})();

// src/app/components/product/list.component.ts
var _c05 = () => ({ page: 2 });
function ProductListComponent_div_1_ng_container_1_li_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3.name, " - ", item_r3.price, " ");
  }
}
function ProductListComponent_div_1_ng_container_1_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function ProductListComponent_div_1_ng_container_1_a_18_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextPage($event));
    });
    \u0275\u0275text(1, "Next");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.getNextLink(), \u0275\u0275sanitizeUrl);
  }
}
function ProductListComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 5);
    \u0275\u0275text(2, "Route to blank page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "a", 6);
    \u0275\u0275listener("click", function ProductListComponent_div_1_ng_container_1_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.locationChange());
    });
    \u0275\u0275text(7, "Test location go");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9, " Show: ");
    \u0275\u0275elementStart(10, "a", 8);
    \u0275\u0275listener("click", function ProductListComponent_div_1_ng_container_1_Template_a_click_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showProducts(true, $event));
    });
    \u0275\u0275text(11, "Public");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " | ");
    \u0275\u0275elementStart(13, "a", 8);
    \u0275\u0275listener("click", function ProductListComponent_div_1_ng_container_1_Template_a_click_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showProducts(false, $event));
    });
    \u0275\u0275text(14, "Private");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul", 9);
    \u0275\u0275template(16, ProductListComponent_div_1_ng_container_1_li_16_Template, 2, 2, "li", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275template(18, ProductListComponent_div_1_ng_container_1_a_18_Template, 2, 1, "a", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const params_r5 = ctx.ngIf;
    const products_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Total: ", params_r5.total);
    \u0275\u0275advance(6);
    \u0275\u0275property("href", ctx_r1.getShowLink(true), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.getShowLink(false), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", products_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Page ", params_r5.page, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", params_r5.hasMore);
  }
}
function ProductListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, ProductListComponent_div_1_ng_container_1_Template, 19, 6, "ng-container", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "a", 4);
    \u0275\u0275text(4, "Test forward with page");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.params$));
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(4, _c05));
  }
}
function ProductListComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const params_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, params_r7), " ");
  }
}
var ProductListComponent = class _ProductListComponent {
  productService;
  productState;
  router;
  paramState;
  location;
  toast;
  route;
  products$;
  params$;
  everything$;
  constructor(productService, productState, router, paramState, location, toast, route) {
    this.productService = productService;
    this.productState = productState;
    this.router = router;
    this.paramState = paramState;
    this.location = location;
    this.toast = toast;
    this.route = route;
  }
  ngOnInit() {
    this.params$ = this.paramState.stateItem$;
    this.products$ = this.route.paramMap.pipe(
      map((p) => {
        return {
          page: +p.get("page") || 1,
          isPublic: p.get("public") === "true",
          size: Config.Basic.defaultSize
        };
      }),
      // here add a filter to filter out changes we do not want to trigger
      // distinctUntilKeyChanged('page'),
      distinctUntilChanged((prev, next) => {
        if (prev.isPublic !== next.isPublic) {
          this.productState.emptyList();
          next.page = 1;
        }
        return prev.page >= next.page && prev.isPublic === next.isPublic;
      }),
      switchMap((params) => this.productService.GetProducts(params).pipe(switchMap((products) => {
        const _hasMore = hasMore(products.total, params.size, params.page);
        this.paramState.UpdateState(__spreadValues({
          total: products.total,
          hasMore: _hasMore
        }, params));
        return this.productState.appendList(products.matches);
      }), catchError((e) => this.toast.HandleUiError(e))))
    );
    this.productState.emptyList();
    this.paramState.UpdateState({ total: 2034, page: 1, size: Config.Basic.defaultSize });
  }
  nextPage(event) {
    event.preventDefault();
    const page = this.paramState.currentItem.page + 1;
    const isPublic = this.paramState.currentItem.isPublic;
    this.router.navigate([".", { page, public: isPublic }], {
      skipLocationChange: true
    });
    GtmTracking.RegisterEvent({ event: EnumGtmEvent.PageView }, GtmTracking.MapPath(`;page=${page};public=${isPublic}`));
  }
  showProducts(isPublic, event) {
    event.preventDefault();
    this.router.navigate([".", { page: 1, public: isPublic }], { replaceUrl: true });
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
    this.router.navigate([".", { page: 2 }], { skipLocationChange: true });
  }
  trackThis(item) {
    GtmTracking.RegisterEvent({
      event: EnumGtmEvent.Click,
      source: EnumGtmSource.ProductsList
    }, GtmTracking.MapProducts([item]));
  }
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ProductState), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ParamState), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Toast), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["ng-component"]], features: [\u0275\u0275ProvidersFeature([ParamState])], decls: 7, vars: 6, consts: [[1, "page"], ["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], ["routerLink", "/projects", 3, "queryParams"], ["routerLink", "/", "target", "_blank"], [3, "click"], [1, "spaced"], [3, "click", "href"], [1, "rowlist"], [4, "ngFor", "ngForOf"], ["class", "btn", 3, "href", "click", 4, "ngIf"], [1, "btn", 3, "click", "href"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ProductListComponent_div_1_Template, 5, 5, "div", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275elementStart(3, "div");
      \u0275\u0275text(4, " Somethign else on the page, this works even if above failed ");
      \u0275\u0275template(5, ProductListComponent_ng_container_5_Template, 3, 3, "ng-container", 2);
      \u0275\u0275pipe(6, "async");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx.products$));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 4, ctx.params$));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, AsyncPipe, JsonPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, providers: [ParamState], imports: [CommonModule, RouterModule], template: '\r\n\r\n<div class="page">\r\n    <div class="container" *ngIf="products$ | async as products">\r\n        <ng-container *ngIf="params$ | async as params">\r\n            <a routerLink="/" target="_blank">Route to blank page</a>\r\n            <p>Total: {{ params.total }}</p>\r\n            <p><a (click)="locationChange()">Test location go</a></p>\r\n            <div class="spaced">\r\n                Show: <a [href]="getShowLink(true)" (click)="showProducts(true, $event)">Public</a> |\r\n                <a [href]="getShowLink(false)" (click)="showProducts(false, $event)">Private</a>\r\n            </div>\r\n            <ul class="rowlist" >\r\n                <li *ngFor="let item of products">\r\n                    {{ item.name }} - {{item.price }}\r\n                </li>\r\n            </ul>\r\n            Page {{params.page}}\r\n            <a class="btn" [href]="getNextLink()" (click)="nextPage($event)" *ngIf="params.hasMore">Next</a>\r\n        </ng-container>\r\n        <a routerLink="/projects" [queryParams]="{page: 2}">Test forward with page</a>\r\n    </div>\r\n    <div>\r\n\r\n        Somethign else on the page, this works even if above failed\r\n        <ng-container *ngIf="params$ | async as params">\r\n            {{ params | json }}\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n' }]
  }], () => [{ type: ProductService }, { type: ProductState }, { type: Router }, { type: ParamState }, { type: Location }, { type: Toast }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/components/product/list.component.ts", lineNumber: 21 });
})();

// src/app/lib/input/input.const.ts
var InputComponent = [
  InputDirective,
  CrInputPartial
];

// src/app/components/product/types.component.ts
var ProductTypesComponent = class _ProductTypesComponent {
  fb;
  fg;
  minDate = new Date(2024, 0, 1);
  maxDate = new Date(2025, 0, 1);
  params;
  fparams;
  allowedFormats = ["image/jpeg", "image/png", "image/gif", "image/bmp"];
  atleastOne = (control) => {
    const values = Object.values(control.value);
    if (values.some((v) => v === true)) {
      return null;
    }
    return { atleastOne: true };
  };
  // minVersion = (control: AbstractControl): ValidationErrors | null => {
  //   // if all controls are false, return error
  //   if ( this.fg?.get('os').value === '2' && control.value < 5) {
  //     return {minVersion: true};
  //   }
  //   return null;
  // };
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.fg = this.fb.group({
      valvet: [""],
      email: [""],
      number: [""],
      url: [""],
      pwd: [""],
      pwd2: [""],
      appointment: [null],
      daterange: [null],
      os: [null],
      version: [null],
      doc: [],
      history: [],
      plugs: [],
      colors: this.fb.group({
        red: [],
        black: [],
        green: []
      }),
      accept: [],
      gender: [],
      username: [],
      pwd3: []
    });
    this.params = { minDate: this.minDate, maxDate: this.maxDate };
    this.fparams = { size: 0, max: 100 };
  }
  updatePlug() {
    const os = this.fg.get("os").value;
    const version = this.fg.get("version").value;
    if (os === "2" && version < 5) {
      this.fg.get("plugs").setValue(null);
    } else {
      this.fg.get("plugs").setValue("plug" + os + version);
    }
  }
  updateSize(f) {
    this.fparams.size = f.files[0]?.size;
    this.fg.get("doc").updateValueAndValidity();
    _attn(this.fg.get("doc").errors, "errors");
  }
  submit() {
    _attn(this.fg.get("doc").valid, "doc validity");
    _attn(this.fg.value);
    _attn(this.fg.invalid);
  }
  static \u0275fac = function ProductTypesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductTypesComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductTypesComponent, selectors: [["ng-component"]], decls: 109, vars: 22, consts: [["f", ""], [1, "page"], [1, "container"], [1, "cr-form", 3, "ngSubmit", "formGroup"], ["placeholder", "Valvet"], ["crinput", "", "type", "text", "id", "valvet", "formControlName", "valvet", "required", "", 1, "w100"], ["placeholder", "Email"], ["crinput", "", "type", "email", "autocomplete", "email", "id", "email", "formControlName", "email", 1, "w100", 3, "email"], ["helptext", ""], ["placeholder", "Number"], ["crinput", "", "type", "number", "id", "number", "formControlName", "number", 1, "w100"], ["placeholder", "Url"], ["crinput", "", "type", "url", "id", "url", "formControlName", "url", "crpattern", "url", 1, "w100", 3, "required"], [1, "f4", "spaced"], [1, "spaced", "row-spaced"], [1, "col", "c-6"], ["placeholder", "Password"], ["crinput", "", "type", "password", "autocomplete", "new-password", "id", "pwd", "formControlName", "pwd", "crpattern", "password", 1, "w100", 3, "change", "required"], ["placeholder", "Confirm password", "error", "Does not match"], ["crinput", "", "type", "password", "autocomplete", "new-password", "id", "pwd2", "formControlName", "pwd2", "validator", "matchPassword", 1, "w100", 3, "params", "required"], ["placeholder", "Username", "type", "static"], ["crinput", "", "type", "text", "autocomplete", "username", "id", "username", "formControlName", "username", 1, "w100", 3, "required"], ["placeholder", "Password", "type", "static"], ["crinput", "", "type", "password", "autocomplete", "current-password", "id", "pwd3", "formControlName", "pwd3", 1, "w100", 3, "required"], [1, "spaced"], ["placeholder", "When?", "error", "Required in the future"], ["crinput", "", "type", "date", "id", "appointment", "formControlName", "appointment", "validator", "future", 1, "w100", 3, "required"], ["placeholder", "Date range", "error", "Out of range"], ["crinput", "", "type", "date", "id", "daterange", "formControlName", "daterange", "validator", "dateRangeFn", 1, "w100", 3, "params"], ["placeholder", "Operating system"], ["crinput", "", "id", "os", "formControlName", "os", 1, "w100", 3, "change", "required"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["placeholder", "Version"], ["crinput", "", "type", "number", "id", "version", "formControlName", "version", 1, "w100", 3, "change"], ["type", "hidden", "error", "Not allowed to have Mac version less than 5"], ["type", "hidden", "crinput", "", "id", "plugs", "formControlName", "plugs", 3, "required"], ["placeholder", "History"], ["crinput", "", "id", "history", "formControlName", "history", 1, "w100", 3, "minlength", "maxlength", "required"], ["placeholder", "Colors", "error", "At least one color"], ["formGroupName", "colors", "crinput", "", "validator", "atleastOne"], ["type", "checkbox", "name", "colors", "id", "color1", "formControlName", "red"], ["type", "checkbox", "name", "colors", "id", "color2", "formControlName", "black"], ["type", "checkbox", "name", "colors", "id", "color3", "formControlName", "green"], ["placeholder", "Terms and conditions", "error", "Please accept", "type", "checkbox", 1, "gr-something"], ["type", "checkbox", "name", "accept", "crinput", "", "id", "accept", "formControlName", "accept", 3, "required"], ["placeholder", "Gender", 3, "invalidForm"], ["crinput", ""], ["type", "radio", "name", "gender", "value", "male", "id", "male", "formControlName", "gender", 3, "required"], ["type", "radio", "name", "gender", "value", "female", "id", "female", "formControlName", "gender", 3, "required"], ["placeholder", "Upload document", "error", "Required. Invalid size or format"], ["crinput", "", "type", "file", "id", "file", "formControlName", "doc", "crpattern", "image", "validator", "sizeFn", 1, "w100", 3, "change", "required", "params"], [1, "breath"], ["type", "submit", 1, "btn-rev"]], template: function ProductTypesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "form", 3);
      \u0275\u0275listener("ngSubmit", function ProductTypesComponent_Template_form_ngSubmit_2_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(3, "cr-input", 4);
      \u0275\u0275element(4, "input", 5);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "cr-input", 6);
      \u0275\u0275element(6, "input", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(7, 8);
      \u0275\u0275text(8, "Valid email");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "cr-input", 9);
      \u0275\u0275element(10, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(11, 8);
      \u0275\u0275text(12, "Any number");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "cr-input", 11);
      \u0275\u0275element(14, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(15, 8);
      \u0275\u0275text(16, "https://...");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h4", 13);
      \u0275\u0275text(18, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "cr-input", 16)(22, "input", 17);
      \u0275\u0275listener("change", function ProductTypesComponent_Template_input_change_22_listener() {
        return ctx.fg?.get("pwd2")?.updateValueAndValidity();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(23, 8);
      \u0275\u0275text(24, "Alphanumeric and special characters, 8 characters minimum");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15)(26, "cr-input", 18);
      \u0275\u0275element(27, "input", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(28, 8);
      \u0275\u0275text(29, "Should match password");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "h4", 13);
      \u0275\u0275text(31, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 14)(33, "div", 15)(34, "cr-input", 20);
      \u0275\u0275element(35, "input", 21);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 15)(37, "cr-input", 22);
      \u0275\u0275element(38, "input", 23);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 24)(40, "h4", 13);
      \u0275\u0275text(41, "Date fields");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "cr-input", 25);
      \u0275\u0275element(43, "input", 26);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(44, 8);
      \u0275\u0275text(45, "Future date");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "cr-input", 27);
      \u0275\u0275element(47, "input", 28);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(48, 8);
      \u0275\u0275text(49, "Between 1 Jan 2024 - 1 Jan 2025");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 24)(51, "cr-input", 29)(52, "select", 30);
      \u0275\u0275listener("change", function ProductTypesComponent_Template_select_change_52_listener() {
        return ctx.updatePlug();
      });
      \u0275\u0275elementStart(53, "option", 31);
      \u0275\u0275text(54, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "option", 32);
      \u0275\u0275text(56, "Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "option", 33);
      \u0275\u0275text(58, "Mac");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 34);
      \u0275\u0275text(60, "Linux");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "option", 35);
      \u0275\u0275text(62, "Android");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "cr-input", 36)(64, "input", 37);
      \u0275\u0275listener("change", function ProductTypesComponent_Template_input_change_64_listener() {
        return ctx.updatePlug();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(65, 8);
      \u0275\u0275text(66, "OS version");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "cr-input", 38);
      \u0275\u0275element(68, "input", 39);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "cr-input", 40);
      \u0275\u0275element(70, "textarea", 41);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(71, 8);
      \u0275\u0275text(72, "Write away");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 24)(74, "h4", 13);
      \u0275\u0275text(75, "Checkboxes and radio boxes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "cr-input", 42)(77, "div", 43)(78, "label");
      \u0275\u0275element(79, "input", 44);
      \u0275\u0275controlCreate();
      \u0275\u0275text(80, " Red ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "br");
      \u0275\u0275elementStart(82, "label");
      \u0275\u0275element(83, "input", 45);
      \u0275\u0275controlCreate();
      \u0275\u0275text(84, " Black ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "br");
      \u0275\u0275elementStart(86, "label");
      \u0275\u0275element(87, "input", 46);
      \u0275\u0275controlCreate();
      \u0275\u0275text(88, " Green ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "br");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "cr-input", 47);
      \u0275\u0275element(91, "input", 48);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "cr-input", 49)(93, "div", 50);
      \u0275\u0275element(94, "input", 51);
      \u0275\u0275controlCreate();
      \u0275\u0275text(95, " Male ");
      \u0275\u0275element(96, "input", 52);
      \u0275\u0275controlCreate();
      \u0275\u0275text(97, " Female ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "div", 24)(99, "h4", 13);
      \u0275\u0275text(100, "File upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "cr-input", 53)(102, "input", 54, 0);
      \u0275\u0275listener("change", function ProductTypesComponent_Template_input_change_102_listener() {
        \u0275\u0275restoreView(_r1);
        const f_r2 = \u0275\u0275reference(103);
        return \u0275\u0275resetView(ctx.updateSize(f_r2));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(104, 8);
      \u0275\u0275text(105, "JPG, PNG only. 1 MB max.");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 55)(107, "button", 56);
      \u0275\u0275text(108, "Submit");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.fg);
      \u0275\u0275advance(2);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("email", true);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(8);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("params", ctx.fg?.get("pwd"))("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(8);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("params", ctx.params);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(12);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("minlength", 10)("maxlength", 20)("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(9);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("invalidForm", ctx.fg.get("gender").invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(6);
      \u0275\u0275property("required", true)("params", ctx.fparams);
      \u0275\u0275attribute("accept", ctx.allowedFormats.join(","));
      \u0275\u0275control();
    }
  }, dependencies: [CommonModule, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, CheckboxRequiredValidator, EmailValidator, FormGroupDirective, FormControlName, FormGroupName, InputDirective, CrInputPartial], styles: ['.gr-something .cr-field.cr-checkbox .cr-input{appearance:none;width:44px;height:24px;border-radius:12px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:before{width:16px;height:16px;border-radius:9px;background-color:var(--%NS%sh-black, #000);content:"";position:absolute;inset-block-start:3px;inset-inline-start:4px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked{background-color:var(--%NS%sh-yellow, #ffaa00);transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked:before{inset-inline-start:22px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-label{padding-inline-start:4.2rem}\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductTypesComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, template: `
  <div class="page">
    <div class="container">
      <form [formGroup]="fg" (ngSubmit)="submit()" class="cr-form" >
        <cr-input placeholder="Valvet">
          <input crinput type="text" id="valvet" class="w100" formControlName="valvet" required  />
        </cr-input>
        <cr-input placeholder="Email">
          <input crinput type="email" autocomplete="email" [email]="true" id="email"  class="w100" formControlName="email"  />
          <ng-container helptext>Valid email</ng-container>
        </cr-input>
        <cr-input placeholder="Number">
          <input crinput type="number"  id="number"  class="w100" formControlName="number"  />
          <ng-container helptext>Any number</ng-container>
        </cr-input>
        <cr-input placeholder="Url">
          <input crinput type="url" id="url" class="w100" formControlName="url" crpattern="url"  [required]="true" />
          <ng-container helptext>https://...</ng-container>
        </cr-input>
        <!-- <h4 class="f4 spaced">Password</h4>
        <div class="spaced row-spaced">
          <div class="col c-6">
            <cr-input placeholder="Password">
              <input crinput type="password" autocomplete="new-password" id="pwd" (change)="fg?.get('pwd2')?.updateValueAndValidity()"
              class="w100" formControlName="pwd" crpattern="password" [required]="true" />
              <ng-container helptext>Alphanumeric and special characters, 8 characters minimum</ng-container>
            </cr-input>
          </div>
          <div class="col c-6">
            <cr-input placeholder="Confirm password" error="Does not match" >
              <input crinput type="password" autocomplete="new-password" id="pwd2" class="w100" formControlName="pwd2"  [required]="true" />
              <ng-container helptext>Should match password</ng-container>
            </cr-input>

          </div>
        </div> -->
        <!-- -->
        <h4 class="f4 spaced">Password</h4>
        <div class="spaced row-spaced">
          <div class="col c-6">
            <cr-input placeholder="Password">
              <input crinput type="password" autocomplete="new-password" id="pwd"
               (change)="fg?.get('pwd2')?.updateValueAndValidity()"
              class="w100" formControlName="pwd" crpattern="password" [required]="true" />
              <ng-container helptext>Alphanumeric and special characters, 8 characters minimum</ng-container>
            </cr-input>
          </div>
          <div class="col c-6">
            <cr-input placeholder="Confirm password" error="Does not match" >
              <input crinput type="password" autocomplete="new-password" id="pwd2" class="w100" formControlName="pwd2"
                validator="matchPassword"
              [params]="fg?.get('pwd')"
              [required]="true" />
              <ng-container helptext>Should match password</ng-container>
            </cr-input>

          </div>
        </div>

        <h4 class="f4 spaced">Login</h4>
        <div class="spaced row-spaced">
          <div class="col c-6">
            <cr-input placeholder="Username" type="static">
              <input crinput type="text" autocomplete="username" id="username"
               class="w100" formControlName="username" [required]="true" />
            </cr-input>
          </div>
          <div class="col c-6">
            <cr-input placeholder="Password" type="static">
              <input crinput type="password" autocomplete="current-password" id="pwd3" class="w100" formControlName="pwd3"
              [required]="true" />
            </cr-input>

          </div>
        </div>
        <div class="spaced">
          <h4 class="f4 spaced">Date fields</h4>
          <cr-input placeholder="When?" error="Required in the future">
            <input crinput type="date" id="appointment" class="w100" formControlName="appointment" [required]="true" validator="future"  />
            <ng-container helptext>Future date</ng-container>
          </cr-input>
          <cr-input placeholder="Date range" error="Out of range">
            <input crinput type="date" id="daterange" class="w100" formControlName="daterange" [params]="params"
            validator="dateRangeFn"  />
            <ng-container helptext>Between 1 Jan 2024 - 1 Jan 2025</ng-container>
          </cr-input>

        </div>

        <div class="spaced">
          <cr-input placeholder="Operating system">
            <select crinput id="os" class="w100" formControlName="os" [required]="true" (change)="updatePlug()">
              <option value="">Select</option>
              <option value="1">Windows</option>
              <option value="2">Mac</option>
              <option value="3">Linux</option>
              <option value="4">Android</option>
            </select>
          </cr-input>
        </div>

        <cr-input placeholder="Version" >
          <input crinput type="number" id="version" class="w100" formControlName="version" (change)="updatePlug()" />
          <ng-container helptext>OS version</ng-container>
        </cr-input>

        <cr-input type="hidden" error="Not allowed to have Mac version less than 5">
          <input type="hidden" crinput id="plugs" formControlName="plugs" [required]="true" >

        </cr-input>



        <cr-input placeholder="History">
          <textarea crinput id="history" [minlength]="10" [maxlength]="20"
           class="w100" formControlName="history" [required]="true"></textarea>
          <ng-container helptext>Write away</ng-container>
        </cr-input>



        <div class="spaced">
          <h4 class="f4 spaced">Checkboxes and radio boxes</h4>

          <cr-input placeholder="Colors" error="At least one color" >
            <div formGroupName="colors" crinput validator="atleastOne">
              <label>
                <input type="checkbox" name="colors" id="color1" formControlName="red">
                Red
              </label> <br>
              <label>
                <input type="checkbox" name="colors" id="color2" formControlName="black">
                Black
              </label> <br>
              <label>
                <input type="checkbox" name="colors" id="color3" formControlName="green">
                Green
              </label> <br>
            </div>
          </cr-input>


          <cr-input placeholder="Terms and conditions" error="Please accept" type="checkbox" class="gr-something">
            <input type="checkbox" name="accept" [required]="true" crinput id="accept" formControlName="accept">
          </cr-input>
          <cr-input placeholder="Gender"  [invalidForm]="fg.get('gender').invalid">
            <div crinput >
              <input type="radio" name="gender" value="male" [required]="true"  id="male" formControlName="gender"> Male
              <input type="radio" name="gender" value="female"  [required]="true" id="female" formControlName="gender"> Female
            </div>
          </cr-input>
        </div>

        <div class="spaced">
          <h4 class="f4 spaced">File upload</h4>
          <cr-input placeholder="Upload document" error="Required. Invalid size or format">
            <input crinput type="file" id="file" class="w100" formControlName="doc"
            [attr.accept]="allowedFormats.join(',')"
            crpattern="image"  #f [required]="true"
            validator="sizeFn" [params]="fparams" (change)="updateSize(f)" />
            <ng-container helptext>JPG, PNG only. 1 MB max.</ng-container>
          </cr-input>
        </div>
        <div class="breath">
          <button class="btn-rev" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
    `, imports: [CommonModule, RouterModule, ReactiveFormsModule, ...InputComponent], encapsulation: ViewEncapsulation.None, styles: ['.gr-something .cr-field.cr-checkbox .cr-input{appearance:none;width:44px;height:24px;border-radius:12px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:before{width:16px;height:16px;border-radius:9px;background-color:var(--sh-black, #000);content:"";position:absolute;inset-block-start:3px;inset-inline-start:4px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked{background-color:var(--sh-yellow, #ffaa00);transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-input:checked:before{inset-inline-start:22px;transition:all .4s}.gr-something .cr-field.cr-checkbox .cr-label{padding-inline-start:4.2rem}\n'] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductTypesComponent, { className: "ProductTypesComponent", filePath: "src/app/components/product/types.component.ts", lineNumber: 184 });
})();

// src/app/lib/upload/upload.partial.ts
var UploadPartial = class _UploadPartial {
  // input maximun size and allowed format, and required
  maxFileSize = 10485760;
  // 10MB
  allowedFormats = ["image/jpeg", "image/png", "application/pdf"];
  required = true;
  css = "";
  constructor() {
  }
  ngOnInit() {
  }
  onFileSelected($event) {
  }
  static \u0275fac = function UploadPartial_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadPartial)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadPartial, selectors: [["cr-upload"]], inputs: { maxFileSize: [0, "size", "maxFileSize"], allowedFormats: [0, "format", "allowedFormats"], required: "required", css: "css" }, decls: 2, vars: 5, consts: [["type", "file", 1, "cr-input", 3, "change", "required"]], template: function UploadPartial_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "input", 0);
      \u0275\u0275domListener("change", function UploadPartial_Template_input_change_1_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate1("upload-container ", ctx.css));
      \u0275\u0275advance();
      \u0275\u0275domProperty("required", ctx.required ? true : null);
      \u0275\u0275attribute("accept", ctx.allowedFormats.join(","));
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadPartial, [{
    type: Component,
    args: [{
      selector: "cr-upload",
      template: `
    <div class="upload-container {{css}}">
      <input
        class="cr-input"
        type="file"
        [attr.accept]="allowedFormats.join(',')"
        [required]="required ? true : null"
        (change)="onFileSelected($event)"
      />
    </div>
  `
      // imports: [CommonModule]
    }]
  }], () => [], { maxFileSize: [{
    type: Input,
    args: [{ alias: "size" }]
  }], allowedFormats: [{
    type: Input,
    args: [{ alias: "format" }]
  }], required: [{
    type: Input
  }], css: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadPartial, { className: "UploadPartial", filePath: "src/app/lib/upload/upload.partial.ts", lineNumber: 19 });
})();

// src/app/components/product/upload.component.ts
var ProductUploadComponent = class _ProductUploadComponent {
  fb;
  fg;
  fparams;
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.fg = this.fb.group({
      email: [],
      number: []
    });
    this.fparams = { size: 0, max: 100 };
  }
  updateSize(f) {
    this.fparams.size = f.files[0]?.size;
    this.fg.get("doc").updateValueAndValidity();
  }
  submit() {
    _attn(this.fg.get("doc").valid);
    _attn(this.fg.value);
    _attn(this.fg.invalid);
  }
  static \u0275fac = function ProductUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductUploadComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductUploadComponent, selectors: [["ng-component"]], decls: 15, vars: 2, consts: [[1, "page"], [1, "container"], [1, "cr-form", 3, "ngSubmit", "formGroup"], ["placeholder", "Email"], ["crinput", "", "type", "email", "autocomplete", "email", "id", "email", "formControlName", "email", 1, "w100", 3, "email"], ["helptext", ""], ["placeholder", "Number"], ["crinput", "", "type", "number", "id", "number", "formControlName", "number", 1, "w100"], ["css", "cr-field"], [1, "breath"], ["type", "submit", 1, "btn-rev"]], template: function ProductUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "form", 2);
      \u0275\u0275listener("ngSubmit", function ProductUploadComponent_Template_form_ngSubmit_2_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(3, "cr-input", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(5, 5);
      \u0275\u0275text(6, "Valid email");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "cr-input", 6);
      \u0275\u0275element(8, "input", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275elementContainerStart(9, 5);
      \u0275\u0275text(10, "Any number");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "cr-upload", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
      \u0275\u0275text(14, "Submit");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.fg);
      \u0275\u0275advance(2);
      \u0275\u0275property("email", true);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
    }
  }, dependencies: [CommonModule, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, EmailValidator, FormGroupDirective, FormControlName, CrInputPartial, InputDirective, UploadPartial], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductUploadComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
  <div class="page">
    <div class="container">
      <form [formGroup]="fg" (ngSubmit)="submit()" class="cr-form" >

      <cr-input placeholder="Email">
          <input crinput type="email" autocomplete="email" [email]="true" id="email"  class="w100" formControlName="email"  />
          <ng-container helptext>Valid email</ng-container>
        </cr-input>
        <cr-input placeholder="Number">
          <input crinput type="number"  id="number"  class="w100" formControlName="number"  />
          <ng-container helptext>Any number</ng-container>
        </cr-input>

        <cr-upload css="cr-field"></cr-upload>

        <div class="breath">
          <button class="btn-rev" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
    `,
      imports: [CommonModule, RouterModule, ReactiveFormsModule, CrInputPartial, InputDirective, UploadPartial]
    }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductUploadComponent, { className: "ProductUploadComponent", filePath: "src/app/components/product/upload.component.ts", lineNumber: 37 });
})();

// src/app/routes/product.route.ts
var ProductRoutes = [
  {
    path: "",
    component: ProductListComponent,
    title: "PRODUCTS"
  },
  {
    path: "create",
    component: ProductCreateFormPartial,
    title: "PRODUCTS_CREATE"
  },
  {
    path: "types",
    component: ProductTypesComponent,
    title: "PRODUCTS_TYPES"
  },
  {
    path: "upload",
    component: ProductUploadComponent,
    title: "PRODUCTS_UPLOAD"
  },
  {
    path: "foods",
    component: FoodListComponent,
    title: "PRODUCTS_FOODS"
  }
];
export {
  ProductRoutes
};
