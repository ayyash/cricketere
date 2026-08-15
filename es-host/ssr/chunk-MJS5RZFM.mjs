import './polyfills.server.mjs';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵinterpolate1,
  ɵɵstyleProp
} from "./chunk-6JMJDJUH.mjs";

// src/app/components/common/stars.partial.ts
var StarsPartialComponent = class _StarsPartialComponent {
  // input number, create stars accordingly
  rating;
  raterounded;
  starCss;
  constructor() {
  }
  ngOnInit() {
    this.raterounded = Math.round(this.rating * 2) * 10 + 1 + "%";
    this.starCss = "stars-" + Math.floor(this.rating);
  }
  static \u0275fac = function StarsPartialComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StarsPartialComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarsPartialComponent, selectors: [["cr-stars"]], inputs: { rating: "rating" }, decls: 2, vars: 5, consts: [[1, "stars-outer"]], template: function StarsPartialComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span", 0);
      \u0275\u0275domElement(1, "span");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("stars-inner ", ctx.starCss));
      \u0275\u0275styleProp("width", ctx.raterounded);
    }
  }, styles: ['.stars-outer:before,.stars-inner:before{font-family:cr;text-transform:none;font-style:normal;font-weight:400;font-variant:normal;display:inline-block;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;speak:none;font-smooth:always;letter-spacing:0;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga=1";-moz-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-webkit-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures;content:attr(data-icon);font-size:150%;line-height:1}.stars-outer{display:inline-block;position:relative}.stars-outer:before{content:"\\e90f"}.stars-outer:before{content:"\\e90f\\e90f\\e90f\\e90f\\e90f";font-size:100%;letter-spacing:-2px;color:#f3f3f3;vertical-align:inherit}.stars-inner{position:absolute;top:0;left:0;white-space:nowrap;overflow:hidden;width:0}.stars-inner:before{content:"\\e90f"}.stars-inner:before{content:"\\e90f\\e90f\\e90f\\e90f\\e90f";color:#57b347;font-size:100%;letter-spacing:-2px;vertical-align:inherit}.stars-5:before{color:#f31109}.stars-4:before{color:#f31109}.stars-3:before{color:#f3cf6f}.stars-2:before{color:#f3bd8c}.stars-1:before{color:#f6baa2}\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarsPartialComponent, [{
    type: Component,
    args: [{ selector: "cr-stars", template: `<span class="stars-outer"><span class="stars-inner {{starCss}}" [style.width]="raterounded"></span></span>`, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['.stars-outer:before,.stars-inner:before{font-family:cr;text-transform:none;font-style:normal;font-weight:400;font-variant:normal;display:inline-block;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;speak:none;font-smooth:always;letter-spacing:0;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga=1";-moz-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-webkit-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures;content:attr(data-icon);font-size:150%;line-height:1}.stars-outer{display:inline-block;position:relative}.stars-outer:before{content:"\\e90f"}.stars-outer:before{content:"\\e90f\\e90f\\e90f\\e90f\\e90f";font-size:100%;letter-spacing:-2px;color:#f3f3f3;vertical-align:inherit}.stars-inner{position:absolute;top:0;left:0;white-space:nowrap;overflow:hidden;width:0}.stars-inner:before{content:"\\e90f"}.stars-inner:before{content:"\\e90f\\e90f\\e90f\\e90f\\e90f";color:#57b347;font-size:100%;letter-spacing:-2px;vertical-align:inherit}.stars-5:before{color:#f31109}.stars-4:before{color:#f31109}.stars-3:before{color:#f3cf6f}.stars-2:before{color:#f3bd8c}.stars-1:before{color:#f6baa2}\n'] }]
  }], () => [], { rating: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarsPartialComponent, { className: "StarsPartialComponent", filePath: "src/app/components/common/stars.partial.ts", lineNumber: 17 });
})();

export {
  StarsPartialComponent
};
