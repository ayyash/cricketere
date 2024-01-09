"use strict";
exports.id = "src_app_routes_content_route_ts";
exports.ids = ["src_app_routes_content_route_ts"];
exports.modules = {

/***/ 8898:
/*!****************************************************!*\
  !*** ./src/app/components/common/stars.partial.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarsPartialComponent: () => (/* binding */ StarsPartialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8371);

let StarsPartialComponent = /*#__PURE__*/(() => {
  class StarsPartialComponent {
    constructor() {
      //
    }
    ngOnInit() {
      // const starPercentage = (this.rating / 5) * 100;
      this.raterounded = Math.round(this.rating * 2) * 10 + 1 + '%';
      this.starCss = 'stars-' + Math.floor(this.rating);
    }
    static #_ = this.ɵfac = function StarsPartialComponent_Factory(t) {
      return new (t || StarsPartialComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StarsPartialComponent,
      selectors: [["cr-stars"]],
      inputs: {
        rating: "rating"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [[1, "stars-outer"]],
      template: function StarsPartialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("stars-inner ", ctx.starCss, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.raterounded);
        }
      },
      styles: [".stars-outer:before,\n.stars-inner:before {\n  font-family: \"cr\";text-transform: none;font-style: normal;font-weight: normal;font-variant: normal;display: inline-block;-webkit-font-smoothing: antialiased;text-rendering: optimizeLegibility;-moz-osx-font-smoothing: grayscale;speak: none;font-smooth: always;/* Enable Ligatures ================ */\n  letter-spacing: 0;-ms-font-feature-settings: \"liga\" 1;-o-font-feature-settings: \"liga\";font-feature-settings: \"liga\";font-variant-ligatures: discretionary-ligatures;/* ligatures? */\n  content: attr(data-icon);font-size: 150%;line-height: 1;\n}\n.stars-outer {\n  display: inline-block;\n  position: relative;\n}\n.stars-outer:before {\n  content: \"\\e90f\";\n}\n.stars-outer:before {\n  content: \"\\e90f\\e90f\\e90f\\e90f\\e90f\";\n  font-size: 100%;\n  letter-spacing: -2px;\n  color: #f3f3f3;\n  vertical-align: inherit;\n}\n.stars-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 0;\n}\n.stars-inner:before {\n  content: \"\\e90f\";\n}\n.stars-inner:before {\n  content: \"\\e90f\\e90f\\e90f\\e90f\\e90f\";\n  color: #57b347;\n  font-size: 100%;\n  letter-spacing: -2px;\n  vertical-align: inherit;\n}\n.stars-5:before {\n  color: #f31109;\n}\n.stars-4:before {\n  color: #f31109;\n}\n.stars-3:before {\n  color: #f3cf6f;\n}\n.stars-2:before {\n  color: #f3bd8c;\n}\n.stars-1:before {\n  color: #f6baa2;\n}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return StarsPartialComponent;
})();

/***/ }),

/***/ 7498:
/*!*********************************************************!*\
  !*** ./src/app/components/content/details.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentDetailsComponent: () => (/* binding */ ContentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6055);
/* harmony import */ var _core_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/resources */ 4042);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services */ 278);
/* harmony import */ var _lib_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/pipes/currency.pipe */ 9988);
/* harmony import */ var _lib_pipes_relativetime_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/pipes/relativetime.pipe */ 8931);
/* harmony import */ var _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/pipes/translate.pipe */ 4870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 8371);
/* harmony import */ var _lib_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/platform.service */ 5334);










function ContentDetailsComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContentDetailsComponent_li_4_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const language_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.switchLanguage(language_r5.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("red", language_r5.name === ctx_r0.currentLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](language_r5.display);
  }
}
function ContentDetailsComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " |\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("red", language_r8.name === ctx_r1.currentLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx_r1.getServerLink(language_r8.name), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](language_r8.display);
  }
}
function ContentDetailsComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContentDetailsComponent_li_14_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const language_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.saveLanguage(language_r9.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " |\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("red", language_r9.name === ctx_r2.currentLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx_r2.getLanguageLink(language_r9.name), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](language_r9.display);
  }
}
function ContentDetailsComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](2, 1, item_r12.key, "THINGS", null, item_r12.key), " ");
  }
}
function ContentDetailsComponent_li_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rate_r13 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", rate_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](5, 4, ctx_r4.enumRate[rate_r13], "RATING", null, ctx_r4.enumRate[rate_r13])), "");
  }
}
const _c0 = () => [23.44, "EUR", "symbol-narrow", undefined, "en-US"];
var EnumRate = /*#__PURE__*/function (EnumRate) {
  EnumRate[EnumRate["AWEFUL"] = 1] = "AWEFUL";
  EnumRate[EnumRate["POOR"] = 2] = "POOR";
  EnumRate[EnumRate["OK"] = 4] = "OK";
  EnumRate[EnumRate["FAIR"] = 8] = "FAIR";
  EnumRate[EnumRate["GREAT"] = 16] = "GREAT";
  return EnumRate;
}(EnumRate || {});
let ContentDetailsComponent = /*#__PURE__*/(() => {
  class ContentDetailsComponent {
    constructor(platform) {
      this.platform = platform;
      this.supportedlanguages = _core_services__WEBPACK_IMPORTED_MODULE_1__.ConfigService.Config.Res.languages;
      this.currentLanguage = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.language;
      this.total = 0;
      this.enumRate = EnumRate;
      this.arrayOfThings = [{
        id: 1,
        key: 'elephant'
      }, {
        id: 2,
        key: 'lion'
      }, {
        id: 3,
        key: 'tiger'
      }, {
        id: 4,
        key: 'bear'
      }];
      this.rates = [EnumRate.AWEFUL, EnumRate.POOR, EnumRate.OK, EnumRate.FAIR, EnumRate.GREAT];
      this.productRating = EnumRate.GREAT;
      this.date1 = new Date(Date.now() - 1000);
      this.date2 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 2);
      this.date3 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 3);
      this.date4 = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 7);
      this.date5 = new Date(Date.now() + 1000 * 60 * 60 * 3);
      this.configCode = 'USD';
      //
    }

    ngOnInit() {
      //
      // one way to get currency symbol
      const x = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.getCurrencySymbol)('TRY', 'narrow');
      _attn(x, 'currency');
      // _attn(getLocaleCurrencyCode('ar-JO'), 'getLocaleCurrencyCode');
      // _attn(getLocaleCurrencySymbol('ar-JO'), 'getLocaleCurrencySymbol');
      // registerLocaleData(, 'ar-JO');
    }

    switchLanguage(lang) {
      // for netlify set nf_lang
      this.setCookie(lang, _core_services__WEBPACK_IMPORTED_MODULE_1__.ConfigService.Config.Res.cookieName, 365);
      this.platform.doc.location.reload();
    }
    saveLanguage(lang) {
      this.setCookie(lang, _core_services__WEBPACK_IMPORTED_MODULE_1__.ConfigService.Config.Res.cookieName, 365);
    }
    getServerLink(lang) {
      // send a query param to server, try to keep the path as is
      // remove this its useless
      return `/switchlang?lang=${lang}&red=${this.platform.doc.URL}`;
    }
    getLanguageLink(lang) {
      // go to: ...
      // replace current language with new language
      return this.platform.doc.URL.replace(`/${_core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.language}/`, `/${lang}/`);
    }
    setCookie(value, key, expires) {
      if (this.platform.isBrowser) {
        let cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';';
        const dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
        cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
        cookieStr += 'path=/;';
        document.cookie = cookieStr;
      }
    }
    setCurrency(from) {
      this.configCode = from.target.value;
    }
    static #_ = this.ɵfac = function ContentDetailsComponent_Factory(t) {
      return new (t || ContentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_lib_platform_service__WEBPACK_IMPORTED_MODULE_5__.Platform));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ContentDetailsComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 152,
      vars: 128,
      consts: [[1, "row"], [4, "ngFor", "ngForOf"], [1, "rowlist"], [1, "spaced"], [1, "rtl"], [3, "change"], ["value", "USD"], ["value", "AUD"], ["value", "CAD"], ["value", "TRY"], ["value", "EUR"], ["value", "RUB"], ["value", "JPY"], ["value", "JOD"], ["value", "QAR"], ["value", "BHD"], ["value", "BBD"], ["value", "EGP"], ["value", "WLG"], ["value", "\u20A9"], [1, "btn", 3, "click"], [3, "href"], [3, "href", "click"], ["type", "checkbox", 3, "value"]],
      template: function ContentDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Change cookie on client");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ContentDetailsComponent_li_4_Template, 4, 3, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "section")(6, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Change cookie on server");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ContentDetailsComponent_li_9_Template, 4, 4, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "section")(11, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Redirect to URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ContentDetailsComponent_li_14_Template, 4, 4, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "section")(19, "ul", 2)(20, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Translate plurals in multiple languages:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ContentDetailsComponent_li_40_Template, 3, 6, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "section")(42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Translate gender");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ul")(45, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "section")(54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Translate rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ContentDetailsComponent_li_57_Template, 6, 9, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "section");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](60, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Translate relative time");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "ul")(64, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "relativetime");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](69, "relativetime");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](72, "relativetime");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](75, "relativetime");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](78, "relativetime");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Localize date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](83, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](86, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](89, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](92, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](93, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](96, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](99, "crCurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](102, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](105, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](108, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Testing currencies to the limits");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ContentDetailsComponent_Template_select_change_111_listener($event) {
            return ctx.setCurrency($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "USD");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "AUD - same look");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "CAD - same look");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "TRY");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "EUR");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "RUB");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, "JPY");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "JOD - no symbol");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "QAR");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "BHD");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "BBD");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "EGP");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "WLG - Woolong");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "WLG - Woolong");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](142, "crCurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](145, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, " \u20BD 29,304.34\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, " RUB 29,304.34\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, " \u062C.\u0645. 29,304.34\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.supportedlanguages);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.supportedlanguages);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.supportedlanguages);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](17, 32, "Hello World", "HelloWorld"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](22, 35, "Students", "Students", 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](25, 39, "Students", "Students", 1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](28, 43, "Students", "Students", 2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](31, 47, "Students", "Students", 3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](34, 51, "Students", "Students", 11));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](36, 55, "something", "Something"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.arrayOfThings);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 58, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](48, 60, "default male", "GENDER", null, "MALE")), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 65, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](52, 67, "default female", "GENDER", null, "FEMALE")), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.rates);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" A product is ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](60, 72, ctx.productRating.toString(), "RATING", null, ctx.enumRate[ctx.productRating]), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](66, 77, ctx.date1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](69, 79, ctx.date2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](72, 81, ctx.date3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](75, 83, ctx.date4));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](78, 85, ctx.date5, true));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" using keyword full: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](83, 88, ctx.date1, "full"), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](86, 91, ctx.date1), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" using format: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](89, 93, ctx.date1, "EEE, MMM d, yy hh:mm:ss a Z"), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" Currency ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBindV"](92, 96, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](127, _c0)), " Currency ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](93, 102, 23.44), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](96, 104, 345.25, "TRY", "symbol-narrow"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](99, 108, 345.25, "TRY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](102, 111, 0.25, "\u20A9"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](105, 114, 35.333, "WLG", "\u20A9"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](108, 118, "3.14159265359", "4.2-4"), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](142, 121, 29304.34, ctx.configCode), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](145, 124, 29304.34, ctx.configCode), "\n");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _lib_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe, _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _lib_pipes_relativetime_pipe__WEBPACK_IMPORTED_MODULE_3__.RelativeTimePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return ContentDetailsComponent;
})();

/***/ }),

/***/ 1301:
/*!************************************************************!*\
  !*** ./src/app/components/content/standalone.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentStandaloneComponent: () => (/* binding */ ContentStandaloneComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6055);
/* harmony import */ var _lib_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/pipes/currency.pipe */ 9988);
/* harmony import */ var _common_stars_partial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/stars.partial */ 8898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8371);





let ContentStandaloneComponent = /*#__PURE__*/(() => {
  class ContentStandaloneComponent {
    constructor() {
      //
    }
    ngOnInit() {
      //
    }
    static #_ = this.ɵfac = function ContentStandaloneComponent_Factory(t) {
      return new (t || ContentStandaloneComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ContentStandaloneComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 5,
      consts: [[1, "page"], [1, "container"], [1, "box"], [3, "rating"], ["routerLink", "/projects"]],
      template: function ContentStandaloneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Stand alone stuff in here");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "crCurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Stand alone partial common component");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "cr-stars", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Go to projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 2, 345.25, "TRY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 4);
        }
      },
      dependencies: [_common_stars_partial__WEBPACK_IMPORTED_MODULE_1__.StarsPartialComponent, _lib_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.CustomCurrencyPipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return ContentStandaloneComponent;
})();

/***/ }),

/***/ 9988:
/*!********************************************!*\
  !*** ./src/app/lib/pipes/currency.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomCurrencyPipe: () => (/* binding */ CustomCurrencyPipe)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8371);


let CustomCurrencyPipe = /*#__PURE__*/(() => {
  class CustomCurrencyPipe extends _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe {
    transform(value, currencyCode) {
      // get symbol
      return super.transform(value, currencyCode, 'symbol-narrow');
    }
    static #_ = this.ɵfac = /*@__PURE__*/(() => {
      let ɵCustomCurrencyPipe_BaseFactory;
      return function CustomCurrencyPipe_Factory(t) {
        return (ɵCustomCurrencyPipe_BaseFactory || (ɵCustomCurrencyPipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomCurrencyPipe)))(t || CustomCurrencyPipe);
      };
    })();
    static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "crCurrency",
      type: CustomCurrencyPipe,
      pure: true,
      standalone: true
    });
  }
  return CustomCurrencyPipe;
})();

/***/ }),

/***/ 8931:
/*!************************************************!*\
  !*** ./src/app/lib/pipes/relativetime.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativeTimePipe: () => (/* binding */ RelativeTimePipe)
/* harmony export */ });
/* harmony import */ var _core_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/resources */ 4042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8371);


let RelativeTimePipe = /*#__PURE__*/(() => {
  class RelativeTimePipe {
    transform(date, future = false) {
      // find elapsed
      const current = new Date().valueOf();
      const input = date.valueOf();
      const msPerMinute = 60 * 1000;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerMonth = msPerDay * 30;
      const msPerYear = msPerDay * 365;
      const elapsed = Math.abs(input - current);
      const fallBack = date.toString();
      let relTime = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Plural('YEARS', Math.round(elapsed / msPerYear), fallBack);
      if (elapsed < msPerMinute) {
        relTime = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Plural('SECONDS', Math.round(elapsed / 1000), fallBack);
      } else if (elapsed < msPerHour) {
        relTime = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Plural('MINUTES', Math.round(elapsed / msPerMinute), fallBack);
      } else if (elapsed < msPerDay) {
        relTime = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Plural('HOURS', Math.round(elapsed / msPerHour), fallBack);
      } else if (elapsed < msPerMonth) {
        relTime = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Plural('DAYS', Math.round(elapsed / msPerDay), fallBack);
      } else if (elapsed < msPerYear) {
        relTime = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Plural('MONTHS', Math.round(elapsed / msPerMonth), fallBack);
      }
      // replace the $0 with the relative time
      return (future ? _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Get('INTIME') : _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Get('TIMEAGO')).replace('$0', relTime);
    }
    static #_ = this.ɵfac = function RelativeTimePipe_Factory(t) {
      return new (t || RelativeTimePipe)();
    };
    static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "relativetime",
      type: RelativeTimePipe,
      pure: true,
      standalone: true
    });
  }
  return RelativeTimePipe;
})();

/***/ }),

/***/ 8644:
/*!*****************************************!*\
  !*** ./src/app/routes/content.route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentRoutes: () => (/* binding */ ContentRoutes)
/* harmony export */ });
/* harmony import */ var _components_content_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/content/details.component */ 7498);
/* harmony import */ var _components_content_standalone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/content/standalone.component */ 1301);


// **gulpimport**
const ContentRoutes = [{
  path: 'details',
  component: _components_content_details_component__WEBPACK_IMPORTED_MODULE_0__.ContentDetailsComponent,
  title: 'Details'
}, {
  path: 'standalone',
  component: _components_content_standalone_component__WEBPACK_IMPORTED_MODULE_1__.ContentStandaloneComponent
}
// **gulproute**
];

/***/ })

};
;