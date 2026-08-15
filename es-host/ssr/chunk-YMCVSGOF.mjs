import './polyfills.server.mjs';
import {
  NG_VALIDATORS,
  ReactiveFormsModule,
  Validators
} from "./chunk-MW2OBZSZ.mjs";
import {
  debug
} from "./chunk-UZ5YMPP6.mjs";
import {
  StarsPartialComponent
} from "./chunk-MJS5RZFM.mjs";
import {
  ConfigService,
  Platform
} from "./chunk-6XMQMSF3.mjs";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Injectable,
  Input,
  NgIf,
  NgModule,
  Res,
  RouterLink,
  RouterModule,
  Subject,
  first,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6JMJDJUH.mjs";

// src/app/lib/mdinput/validators.ts
var MdPatterns = class {
  static _Patterns = {
    "shortname": "[A-Za-z]{5}",
    "phone": "[\\d\\s]*",
    "password": "[\\S]{8,}"
  };
  static Get(key, fallback) {
    if (this._Patterns[key]) {
      return this._Patterns[key];
    }
    return fallback || "";
  }
};

// src/app/lib/mdinput/mdinput.directive.ts
var MdInputDirective = class _MdInputDirective {
  el;
  constructor(el) {
    this.el = el;
  }
  type;
  // note to self, required validation is handled by angular
  required = false;
  // note to self, do no name "pattern" because that is handled by angular
  pattern = "";
  errorMessage;
  formControl;
  errorText;
  $element;
  focus = false;
  _focus = new Subject();
  focus$ = this._focus.asObservable();
  _blur = new Subject();
  blur$ = this._blur.asObservable();
  updateError() {
    if (this.formControl.errors) {
      const key = Object.keys(this.formControl.errors)[0];
      this.errorText = Res.Get(`INVALID_${key}_FORMAT`, this.errorMessage);
    }
  }
  // i can pollute this with hostlisters
  onFocus() {
    this.focus = true;
    this._focus.next(this.$element.value);
  }
  onBlur(relatedTarget) {
    this.focus = false;
    this._blur.next(relatedTarget);
  }
  ngOnInit() {
    this.$element = this.el.nativeElement;
  }
  // may be thsi is better than ngcontrol?
  // get isvalid(): boolean {
  //     return this.formControl.valid;
  // }
  customValidate(fn) {
    const isvalid = fn.call(this);
    if (!isvalid) {
      this.errorText = Res.Get(this.errorMessage, this.errorMessage);
      this.$element.classList.add("ng-invalid");
    } else {
      this.errorText = "";
      this.$element.classList.remove("ng-invalid");
    }
    return isvalid;
  }
  validate(c) {
    this.formControl = c;
    let validator;
    if (this.required) {
      this.errorText = Res.Get("Required");
    }
    if (this.type === "custom") {
      if (this.errorMessage) {
        this.errorText = Res.Get(this.errorMessage, this.errorMessage);
      }
      return null;
    }
    if (!c.value || c.value === "") {
      return null;
    }
    if (this.pattern !== "") {
      let _message = Res.Get("INVALID_FORMAT");
      if (this.pattern === "email") {
        _message = Res.Get("INVALID_email_FORMAT");
        validator = Validators.email(c);
      } else {
        let _p = MdPatterns.Get(this.pattern);
        if (_p) {
          _message = Res.Get(`INVALID_${this.pattern}_FORMAT`, _message);
        } else {
          _p = this.pattern;
        }
        validator = Validators.pattern(_p)(c);
      }
      if (this.errorMessage) {
        _message = Res.Get(this.errorMessage, this.errorMessage);
      }
      this.errorText = _message;
      if (validator) {
        return validator;
      }
      return null;
    }
    if (this.type === "range") {
      let _message = Res.Get("INVALID_VALUE");
      if (this.errorMessage) {
        _message = Res.Get(this.errorMessage, this.errorMessage);
      }
      const _v = {
        range: {
          valid: false
        }
      };
      const val = Number(c.value);
      if (isNaN(val)) {
        _message = Res.Get("INAVLID_NUMBER");
        return _v;
      }
      this.errorText = _message;
      const min = this.el.nativeElement.min || null;
      const max = this.el.nativeElement.max || null;
      if (min !== null && min > val || max !== null && max < val) {
        return _v;
      }
      return null;
    }
    this.updateError();
    return null;
  }
  static \u0275fac = function MdInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MdInputDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _MdInputDirective, selectors: [["", "mdinput", ""]], hostBindings: function MdInputDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", function MdInputDirective_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function MdInputDirective_blur_HostBindingHandler($event) {
        return ctx.onBlur($event.relatedTarget);
      });
    }
  }, inputs: { type: [0, "mdtype", "type"], required: "required", pattern: [0, "mdpattern", "pattern"], errorMessage: "errorMessage" }, exportAs: ["mdcontrol"], standalone: false, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => _MdInputDirective)
    }
  ])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MdInputDirective, [{
    type: Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: "[mdinput]",
      exportAs: "mdcontrol",
      providers: [
        {
          provide: NG_VALIDATORS,
          multi: true,
          useExisting: forwardRef(() => MdInputDirective)
        }
      ],
      standalone: false
    }]
  }], () => [{ type: ElementRef }], { type: [{
    type: Input,
    args: ["mdtype"]
  }], required: [{
    type: Input
  }], pattern: [{
    type: Input,
    args: ["mdpattern"]
  }], errorMessage: [{
    type: Input
  }], onFocus: [{
    type: HostListener,
    args: ["focus"]
  }], onBlur: [{
    type: HostListener,
    args: ["blur", ["$event.relatedTarget"]]
  }] });
})();

// src/app/lib/mdinput/mdinput.component.ts
var _c0 = ["*", [["", "helptext", ""]]];
var _c1 = ["*", "[helptext]"];
function MdInputComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("for", \u0275\u0275interpolate(ctx_r0.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.placeholder);
  }
}
var MdInputComponent = class _MdInputComponent {
  required;
  id;
  // required: boolean;
  get labelText() {
    return this.input.errorText;
  }
  placeholder;
  holdFocus;
  // if static, do not interace always show as focused
  normal = true;
  input;
  // mmm, why am i using this?
  // @ContentChild(NgControl)
  // control: NgControl;
  get isFocused() {
    if (this.holdFocus) {
      return true;
    }
    if (this.input) {
      return this.input.focus;
    }
    return false;
  }
  get isEmpty() {
    if (this.holdFocus) {
      return false;
    }
    if (this.input) {
      return !this.input.$element.value;
    }
    return false;
  }
  gainFocus() {
    if (this.input) {
      this.input.$element.focus();
    }
  }
  ngAfterContentInit() {
    this.required = this.input.required;
    this.input.$element.classList.add("materialinput");
    this.id = this.input.$element.id;
  }
  static \u0275fac = function MdInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MdInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MdInputComponent, selectors: [["md-input"]], contentQueries: function MdInputComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MdInputDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
    }
  }, inputs: { placeholder: "placeholder", holdFocus: [0, "static", "holdFocus"], normal: "normal" }, standalone: false, ngContentSelectors: _c1, decls: 7, vars: 16, consts: [[3, "click"], ["class", "md-label", 3, "for", 4, "ngIf"], [1, "md-invalid-feedback"], [1, "md-label", 3, "for"]], template: function MdInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function MdInputComponent_Template_div_click_0_listener() {
        return ctx.gainFocus();
      });
      \u0275\u0275template(1, MdInputComponent_label_1_Template, 2, 3, "label", 1);
      \u0275\u0275projection(2);
      \u0275\u0275element(3, "span");
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(6, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("md-field", ctx.normal)("focused", ctx.isFocused)("notempty", !ctx.isEmpty)("touched", ctx.input?.formControl?.touched)("invalid", ctx.input?.formControl?.invalid)("dirty", ctx.input?.formControl?.dirty);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.placeholder);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("md-asterisk", ctx.required);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.labelText);
    }
  }, dependencies: [NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MdInputComponent, [{
    type: Component,
    args: [{
      selector: "md-input",
      template: `
        <div [class.md-field]="normal" (click)="gainFocus()"
         [class.focused]="isFocused"
         [class.notempty]="!isEmpty"
         [class.touched]="input?.formControl?.touched"
         [class.invalid]="input?.formControl?.invalid"
         [class.dirty]="input?.formControl?.dirty" >
            <label class="md-label" *ngIf="placeholder" for="{{ id }}">{{placeholder}}</label>
            <ng-content></ng-content>
            <span [class.md-asterisk]="required"></span>
            <span class="md-invalid-feedback">{{ labelText }}</span>
            <ng-content select="[helptext]"></ng-content>
        </div>
    `,
      standalone: false
    }]
  }], null, { placeholder: [{
    type: Input
  }], holdFocus: [{
    type: Input,
    args: ["static"]
  }], normal: [{
    type: Input
  }], input: [{
    type: ContentChild,
    args: [MdInputDirective]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MdInputComponent, { className: "MdInputComponent", filePath: "src/app/lib/mdinput/mdinput.component.ts", lineNumber: 24 });
})();

// src/app/lib/mdinput/mdinput.module.ts
var MdInputModule = class _MdInputModule {
  static \u0275fac = function MdInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MdInputModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MdInputModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ReactiveFormsModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MdInputModule, [{
    type: NgModule,
    args: [{
      declarations: [MdInputDirective, MdInputComponent],
      imports: [
        CommonModule
      ],
      exports: [MdInputComponent, MdInputDirective, ReactiveFormsModule]
    }]
  }], null, null);
})();

// src/app/components/project/card.partial.ts
function ProjectCardPartialComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "a", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "h4", 5)(6, "a", 6);
    \u0275\u0275text(7, "Lorem Ipsum");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9, "Sub line ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 4)(12, "button", 9)(13, "i", 10);
    \u0275\u0275text(14, "plus");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 11)(16, "a", 12);
    \u0275\u0275element(17, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "span", 14);
    \u0275\u0275text(20, "Extra information");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
}
function ProjectCardPartialComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16)(3, "a");
    \u0275\u0275element(4, "img", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "h4", 5)(7, "a", 6);
    \u0275\u0275text(8, "Lorem Ipsum");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "cr-stars", 19);
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275text(11, "Sub line ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20)(13, "a", 21);
    \u0275\u0275element(14, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 23);
    \u0275\u0275element(16, "img", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 24)(18, "div", 14);
    \u0275\u0275text(19, "Extra information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25);
    \u0275\u0275text(21, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque dolorum vitae aliquid accusamus ipsa quo alias voluptatem quam, ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 26)(23, "button", 9)(24, "i", 10);
    \u0275\u0275text(25, "plus");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("rating", 4);
  }
}
var ProjectCardPartialComponent = class _ProjectCardPartialComponent {
  mode = { compact: false };
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function ProjectCardPartialComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectCardPartialComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectCardPartialComponent, selectors: [["cr-project-card"]], inputs: { mode: "mode" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "card", "card-v"], [1, "dblock"], ["src", "https://eu.ui-avatars.com/api/?name=John+Doe&size=250", 1, "h-1", "hm-3", "image-fill"], [1, "box"], [1, "f6", "weight-bold"], ["routerLink", "/projects/34"], [1, "small", "light"], [1, "corner"], ["title", "Link", 1, "btn"], [1, "liga"], [1, "card", "box", "valign-center"], [1, "dblock", "c-2", "rspace"], ["src", "https://via.placeholder.com/50?text=RM", 1, "image-cover", "image-circle"], [1, "f6", "weight-normal"], [1, "card"], [1, "image"], ["src", "https://via.placeholder.com/300", 1, "h-2", "hm-2", "image-fill"], [1, "content", "hspace", "card", "card-v", "c-7"], [3, "rating"], [1, "tail-v"], [1, "dinline", 2, "width", "20px"], ["src", "https://via.placeholder.com/50?text=RM", 1, "box-shadow-shallow", "image-cover", "image-circle"], [1, "dinline", 2, "width", "20px", "margin-left", "-5px"], [1, "extra", "c-2"], [1, "lighter", "smaller"], [1, "tail"]], template: function ProjectCardPartialComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProjectCardPartialComponent_ng_container_0_Template, 21, 0, "ng-container", 0)(1, ProjectCardPartialComponent_ng_container_1_Template, 26, 1, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.mode.compact);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.mode.compact);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, StarsPartialComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectCardPartialComponent, [{
    type: Component,
    args: [{ selector: "cr-project-card", imports: [CommonModule, RouterModule, StarsPartialComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-container *ngIf="mode.compact">\r\n    <div class="card card-v">\r\n        <a class="dblock"><img class="h-1 hm-3 image-fill" src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"></a>\r\n        <div class="box">\r\n            <h4 class="f6 weight-bold"><a routerLink="/projects/34">Lorem Ipsum</a></h4>\r\n            <div class="small light">Sub line\r\n            </div>\r\n        </div>\r\n        <div class="corner">\r\n            <div class="box">\r\n                <button title="Link" class="btn"><i class="liga">plus</i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="card box valign-center">\r\n        <a class="dblock c-2 rspace">\r\n            <img class="image-cover image-circle" src="https://via.placeholder.com/50?text=RM"></a>\r\n        <div>\r\n            <span class="f6 weight-normal">Extra information</span>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf="!mode.compact">\r\n\r\n    <div class="card">\r\n        <div class="image">\r\n            <a><img class="h-2 hm-2 image-fill" src="https://via.placeholder.com/300"></a>\r\n        </div>\r\n        <div class="content hspace card card-v c-7">\r\n            <h4 class="f6 weight-bold"><a routerLink="/projects/34">Lorem Ipsum</a></h4>\r\n            <cr-stars [rating]="4"></cr-stars>\r\n\r\n            <div class="small light">Sub line\r\n            </div>\r\n\r\n            <div class="tail-v">\r\n\r\n                <a class="dinline" style="width: 20px">\r\n                    <img class="box-shadow-shallow image-cover image-circle" src="https://via.placeholder.com/50?text=RM"></a>\r\n                <a class="dinline" style="width: 20px; margin-left: -5px">\r\n                    <img class="box-shadow-shallow image-cover image-circle" src="https://via.placeholder.com/50?text=RM"></a>\r\n            </div>\r\n\r\n        </div>\r\n        <div class="extra c-2">\r\n            <div class="f6 weight-normal">Extra information</div>\r\n            <div class="lighter smaller">\r\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque dolorum vitae aliquid accusamus ipsa quo alias voluptatem quam,\r\n            </div>\r\n        </div>\r\n        <div class="tail">\r\n            <button title="Link" class="btn"><i class="liga">plus</i></button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n' }]
  }], () => [], { mode: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectCardPartialComponent, { className: "ProjectCardPartialComponent", filePath: "src/app/components/project/card.partial.ts", lineNumber: 13 });
})();

// src/app/services/storage.service.ts
var StorageService = class _StorageService {
  platform;
  configService;
  constructor(platform, configService) {
    this.platform = platform;
    this.configService = configService;
    this._setResetKey();
  }
  get ourStorage() {
    return localStorage;
  }
  getKey(key, withLanguage = false) {
    return `${ConfigService.Config.Storage.Key}${withLanguage ? "." + Res.language : ""}.${key}`;
  }
  _setResetKey() {
    this.configService.config$.pipe(debug("config"), first((config) => config.isServed)).subscribe((config) => {
      const _key = this.getKey(config.Storage.ResetKey);
      const _reset = this.ourStorage.getItem(_key);
      if (!_reset || _reset !== "true") {
        this.clear();
        this.ourStorage.setItem(_key, "true");
      }
    });
  }
  setItem(key, value, expiresin = ConfigService.Config.Storage.Timeout, withLanguage = false) {
    const _storage = {
      value,
      timestamp: Date.now(),
      // in milliseconds
      expiresin
      // in hours
    };
    this.ourStorage.setItem(this.getKey(key, withLanguage), JSON.stringify(_storage));
  }
  getItem(key, withLanguage = false) {
    const _key = this.getKey(key, withLanguage);
    const value = this.ourStorage.getItem(_key);
    if (value) {
      const _value = JSON.parse(value);
      if (Date.now() - _value.timestamp > _value.expiresin * 36e5) {
        this.removeItem(_key);
        return null;
      }
      return _value.value;
    }
    return null;
  }
  removeItem(key, withLanguage = true) {
    this.ourStorage.removeItem(this.getKey(key, withLanguage));
  }
  setCache(key, value, expiresIn = ConfigService.Config.Storage.Timeout) {
    this.setItem(key, value, expiresIn, true);
  }
  getCache(key) {
    return this.getItem(key, true);
  }
  removeCache(key) {
    this.removeItem(key, true);
  }
  clear() {
    const toClear = [];
    for (let i = 0; i < this.ourStorage.length; i++) {
      const name = this.ourStorage.key(i);
      if (name.indexOf(ConfigService.Config.Storage.Key) === 0) {
        toClear.push(name);
      }
    }
    toClear.forEach((n) => this.ourStorage.removeItem(n));
  }
  static \u0275fac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageService)(\u0275\u0275inject(Platform), \u0275\u0275inject(ConfigService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Platform }, { type: ConfigService }], null);
})();

export {
  MdInputDirective,
  MdInputComponent,
  MdInputModule,
  ProjectCardPartialComponent,
  StorageService
};
