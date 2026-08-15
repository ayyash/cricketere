import './polyfills.server.mjs';
import {
  EnumGtmEvent,
  EnumGtmGroup,
  EnumGtmSource,
  GtmTracking
} from "./chunk-UZ5YMPP6.mjs";
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-6JMJDJUH.mjs";

// src/app/lib/directives/gtm.directive.ts
var GtmDirective = class _GtmDirective {
  el;
  shGtm;
  // onload let the element have id, or data-something, then populate source and group
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
    this.el.nativeElement.setAttribute("data-event", EnumGtmEvent.GroupClick);
    this.el.nativeElement.setAttribute("data-source", this.shGtm.source || EnumGtmSource.Anywhere);
    this.el.nativeElement.setAttribute("data-group", this.shGtm.group || EnumGtmGroup.General);
  }
  onClick(target) {
    GtmTracking.RegisterEvent({
      event: EnumGtmEvent.GroupClick,
      source: this.shGtm.source || EnumGtmSource.Anywhere
    }, GtmTracking.MapGroup(this.shGtm.group || EnumGtmGroup.General, this.el.nativeElement.innerText));
  }
  static \u0275fac = function GtmDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GtmDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _GtmDirective, selectors: [["", "shGtm", ""]], hostBindings: function GtmDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function GtmDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      });
    }
  }, inputs: { shGtm: "shGtm" }, exportAs: ["shGtm"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GtmDirective, [{
    type: Directive,
    args: [{
      selector: "[shGtm]",
      exportAs: "shGtm"
    }]
  }], () => [{ type: ElementRef }], { shGtm: [{
    type: Input
  }], onClick: [{
    type: HostListener,
    args: ["click", ["$event.target"]]
  }] });
})();

export {
  GtmDirective
};
