import {
  Pipe,
  Res,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-VTWRFS6N.js";

// src/app/lib/pipes/translate.pipe.ts
var TranslatePipe = class _TranslatePipe {
  transform(original, res, count = null, select = null) {
    if (count !== null) {
      return Res.Plural(res, count, original);
    }
    if (select !== null) {
      return Res.Select(res, select, original);
    }
    return Res.Get(res, original);
  }
  static \u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{ name: "translate" }]
  }], null, null);
})();

export {
  TranslatePipe
};
