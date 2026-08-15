import './polyfills.server.mjs';
import {
  TranslatePipe
} from "./chunk-UOCDY54Z.mjs";
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
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgForOf,
  Pipe,
  Res,
  RouterLink,
  RouterModule,
  TitleCasePipe,
  getCurrencySymbol,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-6JMJDJUH.mjs";
import "./chunk-F3YYFOAS.mjs";

// src/app/lib/pipes/currency.pipe.ts
var CustomCurrencyPipe = class _CustomCurrencyPipe extends CurrencyPipe {
  transform(value, currencyCode) {
    return super.transform(value, currencyCode, "symbol-narrow");
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CustomCurrencyPipe_BaseFactory;
    return function CustomCurrencyPipe_Factory(__ngFactoryType__) {
      return (\u0275CustomCurrencyPipe_BaseFactory || (\u0275CustomCurrencyPipe_BaseFactory = \u0275\u0275getInheritedFactory(_CustomCurrencyPipe)))(__ngFactoryType__ || _CustomCurrencyPipe);
    };
  })();
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "crCurrency", type: _CustomCurrencyPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomCurrencyPipe, [{
    type: Pipe,
    args: [{ name: "crCurrency" }]
  }], null, null);
})();

// src/app/lib/pipes/relativetime.pipe.ts
var RelativeTimePipe = class _RelativeTimePipe {
  transform(date, future = false) {
    const current = (/* @__PURE__ */ new Date()).valueOf();
    const input = date.valueOf();
    const msPerMinute = 60 * 1e3;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = Math.abs(input - current);
    const fallBack = date.toString();
    let relTime = Res.Plural("YEARS", Math.round(elapsed / msPerYear), fallBack);
    if (elapsed < msPerMinute) {
      relTime = Res.Plural("SECONDS", Math.round(elapsed / 1e3), fallBack);
    } else if (elapsed < msPerHour) {
      relTime = Res.Plural("MINUTES", Math.round(elapsed / msPerMinute), fallBack);
    } else if (elapsed < msPerDay) {
      relTime = Res.Plural("HOURS", Math.round(elapsed / msPerHour), fallBack);
    } else if (elapsed < msPerMonth) {
      relTime = Res.Plural("DAYS", Math.round(elapsed / msPerDay), fallBack);
    } else if (elapsed < msPerYear) {
      relTime = Res.Plural("MONTHS", Math.round(elapsed / msPerMonth), fallBack);
    }
    return (future ? Res.Get("INTIME") : Res.Get("TIMEAGO")).replace("$0", relTime);
  }
  static \u0275fac = function RelativeTimePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RelativeTimePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "relativetime", type: _RelativeTimePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RelativeTimePipe, [{
    type: Pipe,
    args: [{ name: "relativetime" }]
  }], null, null);
})();

// src/app/components/content/details.component.ts
var _c0 = () => [23.44, "EUR", "symbol-narrow", void 0, "en-US"];
function ContentDetailsComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 20);
    \u0275\u0275listener("click", function ContentDetailsComponent_li_4_Template_button_click_1_listener() {
      const language_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchLanguage(language_r2.name));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("red", language_r2.name === ctx_r2.currentLanguage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(language_r2.display);
  }
}
function ContentDetailsComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " |\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("red", language_r4.name === ctx_r2.currentLanguage);
    \u0275\u0275property("href", ctx_r2.getServerLink(language_r4.name), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(language_r4.display);
  }
}
function ContentDetailsComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 22);
    \u0275\u0275listener("click", function ContentDetailsComponent_li_14_Template_a_click_1_listener() {
      const language_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveLanguage(language_r6.name));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " |\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("red", language_r6.name === ctx_r2.currentLanguage);
    \u0275\u0275property("href", ctx_r2.getLanguageLink(language_r6.name), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(language_r6.display);
  }
}
function ContentDetailsComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 1, item_r7.key, "THINGS", null, item_r7.key), " ");
  }
}
function ContentDetailsComponent_li_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "label");
    \u0275\u0275element(2, "input", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rate_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rate_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, \u0275\u0275pipeBind4(4, 2, ctx_r2.enumRate[rate_r8], "RATING", null, ctx_r2.enumRate[rate_r8])));
  }
}
var EnumRate;
(function(EnumRate2) {
  EnumRate2[EnumRate2["AWEFUL"] = 1] = "AWEFUL";
  EnumRate2[EnumRate2["POOR"] = 2] = "POOR";
  EnumRate2[EnumRate2["OK"] = 4] = "OK";
  EnumRate2[EnumRate2["FAIR"] = 8] = "FAIR";
  EnumRate2[EnumRate2["GREAT"] = 16] = "GREAT";
})(EnumRate || (EnumRate = {}));
var ContentDetailsComponent = class _ContentDetailsComponent {
  platform;
  supportedlanguages = ConfigService.Config.Res.languages;
  currentLanguage = Res.language;
  total = 0;
  enumRate = EnumRate;
  arrayOfThings = [
    {
      id: 1,
      key: "elephant"
    },
    {
      id: 2,
      key: "lion"
    },
    {
      id: 3,
      key: "tiger"
    },
    {
      id: 4,
      key: "bear"
    }
  ];
  rates = [
    EnumRate.AWEFUL,
    EnumRate.POOR,
    EnumRate.OK,
    EnumRate.FAIR,
    EnumRate.GREAT
  ];
  productRating = EnumRate.GREAT;
  date1 = new Date(Date.now() - 1e3);
  date2 = new Date(Date.now() - 1e3 * 60 * 60 * 24 * 2);
  date3 = new Date(Date.now() - 1e3 * 60 * 60 * 24 * 365 * 3);
  date4 = new Date(Date.now() - 1e3 * 60 * 60 * 24 * 365 * 7);
  date5 = new Date(Date.now() + 1e3 * 60 * 60 * 3);
  constructor(platform) {
    this.platform = platform;
  }
  ngOnInit() {
    const x = getCurrencySymbol("TRY", "narrow");
    _attn(x, "currency");
  }
  switchLanguage(lang) {
    this.setCookie(lang, ConfigService.Config.Res.cookieName, 365);
    this.platform.doc.location.reload();
  }
  saveLanguage(lang) {
    this.setCookie(lang, ConfigService.Config.Res.cookieName, 365);
  }
  getServerLink(lang) {
    return `/switchlang?lang=${lang}&red=${this.platform.doc.URL}`;
  }
  getLanguageLink(lang) {
    return this.platform.doc.URL.replace(`/${Res.language}/`, `/${lang}/`);
  }
  setCookie(value, key, expires) {
    if (this.platform.isBrowser) {
      let cookieStr = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";";
      const dtExpires = new Date((/* @__PURE__ */ new Date()).getTime() + expires * 1e3 * 60 * 60 * 24);
      cookieStr += "expires=" + dtExpires.toUTCString() + ";";
      cookieStr += "path=/;";
      document.cookie = cookieStr;
    }
  }
  configCode = "USD";
  setCurrency(from) {
    this.configCode = from.target.value;
  }
  static \u0275fac = function ContentDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentDetailsComponent)(\u0275\u0275directiveInject(Platform));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentDetailsComponent, selectors: [["ng-component"]], decls: 152, vars: 128, consts: [[1, "row"], [4, "ngFor", "ngForOf"], [1, "rowlist"], [1, "spaced"], [1, "rtl"], [3, "change"], ["value", "USD"], ["value", "AUD"], ["value", "CAD"], ["value", "TRY"], ["value", "EUR"], ["value", "RUB"], ["value", "JPY"], ["value", "JOD"], ["value", "QAR"], ["value", "BHD"], ["value", "BBD"], ["value", "EGP"], ["value", "WLG"], ["value", "\u20A9"], [1, "btn", 3, "click"], [3, "href"], [3, "click", "href"], ["type", "checkbox", 3, "value"]], template: function ContentDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section")(1, "h5");
      \u0275\u0275text(2, "Change cookie on client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ul", 0);
      \u0275\u0275template(4, ContentDetailsComponent_li_4_Template, 4, 3, "li", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "section")(6, "h5");
      \u0275\u0275text(7, "Change cookie on server");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul", 0);
      \u0275\u0275template(9, ContentDetailsComponent_li_9_Template, 4, 4, "li", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section")(11, "h5");
      \u0275\u0275text(12, "Redirect to URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul", 0);
      \u0275\u0275template(14, ContentDetailsComponent_li_14_Template, 4, 4, "li", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "section")(19, "ul", 2)(20, "li");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "li");
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "li");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 3);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Translate plurals in multiple languages:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul");
      \u0275\u0275template(40, ContentDetailsComponent_li_40_Template, 3, 6, "li", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "section")(42, "p");
      \u0275\u0275text(43, "Translate gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "ul")(45, "li");
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275pipe(48, "titlecase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "li");
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275pipe(52, "titlecase");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "section")(54, "p");
      \u0275\u0275text(55, "Translate rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "ul");
      \u0275\u0275template(57, ContentDetailsComponent_li_57_Template, 6, 9, "li", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "section");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62, "Translate relative time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "ul")(64, "li");
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "relativetime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "li");
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "relativetime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "li");
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "relativetime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "li");
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "relativetime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "li");
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "relativetime");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "p");
      \u0275\u0275text(80, "Localize date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 4);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p");
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p");
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "currency");
      \u0275\u0275pipe(93, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p");
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "crCurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p");
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p");
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "h3", 3);
      \u0275\u0275text(110, "Testing currencies to the limits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "select", 5);
      \u0275\u0275listener("change", function ContentDetailsComponent_Template_select_change_111_listener($event) {
        return ctx.setCurrency($event);
      });
      \u0275\u0275elementStart(112, "option", 6);
      \u0275\u0275text(113, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "option", 7);
      \u0275\u0275text(115, "AUD - same look");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "option", 8);
      \u0275\u0275text(117, "CAD - same look");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "option", 9);
      \u0275\u0275text(119, "TRY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "option", 10);
      \u0275\u0275text(121, "EUR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "option", 11);
      \u0275\u0275text(123, "RUB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "option", 12);
      \u0275\u0275text(125, "JPY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "option", 13);
      \u0275\u0275text(127, "JOD - no symbol");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "option", 14);
      \u0275\u0275text(129, "QAR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "option", 15);
      \u0275\u0275text(131, "BHD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "option", 16);
      \u0275\u0275text(133, "BBD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "option", 17);
      \u0275\u0275text(135, "EGP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option", 18);
      \u0275\u0275text(137, "WLG - Woolong");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option", 19);
      \u0275\u0275text(139, "WLG - Woolong");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "p");
      \u0275\u0275text(141);
      \u0275\u0275pipe(142, "crCurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p");
      \u0275\u0275text(144);
      \u0275\u0275pipe(145, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p");
      \u0275\u0275text(147, " \u20BD 29,304.34\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "p");
      \u0275\u0275text(149, " RUB 29,304.34\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p");
      \u0275\u0275text(151, " \u062C.\u0645. 29,304.34\n");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.supportedlanguages);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.supportedlanguages);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.supportedlanguages);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 32, "Hello World", "HelloWorld"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(22, 35, "Students", "Students", 0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(25, 39, "Students", "Students", 1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(28, 43, "Students", "Students", 2));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(31, 47, "Students", "Students", 3));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(34, 51, "Students", "Students", 11));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-value", \u0275\u0275pipeBind2(36, 55, "something", "Something"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.arrayOfThings);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 63, \u0275\u0275pipeBind4(47, 58, "default male", "GENDER", null, "MALE")), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 70, \u0275\u0275pipeBind4(51, 65, "default female", "GENDER", null, "FEMALE")), " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.rates);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" A product is ", \u0275\u0275pipeBind4(60, 72, ctx.productRating.toString(), "RATING", null, ctx.enumRate[ctx.productRating]), "\n");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 77, ctx.date1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 79, ctx.date2));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 81, ctx.date3));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 83, ctx.date4));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 85, ctx.date5, true));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" using keyword full: ", \u0275\u0275pipeBind2(83, 88, ctx.date1, "full"), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 91, ctx.date1), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" using format: ", \u0275\u0275pipeBind2(89, 93, ctx.date1, "EEE, MMM d, yy hh:mm:ss a Z"), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Currency ", \u0275\u0275pipeBindV(92, 96, \u0275\u0275pureFunction0(127, _c0)), " Currency ", \u0275\u0275pipeBind1(93, 102, 23.44), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(96, 104, 345.25, "TRY", "symbol-narrow"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 108, 345.25, "TRY"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 111, 0.25, "\u20A9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(105, 114, 35.333, "WLG", "\u20A9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(108, 118, "3.14159265359", "4.2-4"), "\n");
      \u0275\u0275advance(34);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(142, 121, 29304.34, ctx.configCode), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(145, 124, 29304.34, ctx.configCode), "\n");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    RouterModule,
    DecimalPipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    CustomCurrencyPipe,
    TranslatePipe,
    RelativeTimePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentDetailsComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule,
      RouterModule,
      CustomCurrencyPipe,
      TranslatePipe,
      RelativeTimePipe
    ], template: `<section>\r
<h5>Change cookie on client</h5>\r
\r
<ul class="row">\r
    <li *ngFor="let language of supportedlanguages">\r
        <button [class.red]="language.name === currentLanguage" class="btn" (click)="switchLanguage(language.name)">{{ language.display }}</button>&nbsp;\r
    </li>\r
</ul>\r
</section>\r
<section>\r
    <h5>Change cookie on server</h5>\r
    <ul class="row">\r
        <li *ngFor="let language of supportedlanguages">\r
            <a [class.red]="language.name === currentLanguage" [href]="getServerLink(language.name)">{{language.display}}</a> |&nbsp;\r
        </li>\r
    </ul>\r
</section>\r
<section>\r
<h5>Redirect to URL</h5>\r
<ul class="row">\r
    <li *ngFor="let language of supportedlanguages" >\r
        <a [class.red]="language.name === currentLanguage"\r
        [href]="getLanguageLink(language.name)"\r
        (click)="saveLanguage(language.name)"\r
        >{{language.display}}</a> |&nbsp;\r
    </li>\r
</ul>\r
</section>\r
\r
\r
<h4>{{'Hello World' | translate:'HelloWorld'}}</h4>\r
\r
\r
<section>\r
\r
    <ul class="rowlist">\r
        <li>{{ 'Students' | translate:'Students':0 }}</li>\r
        <li>{{ 'Students' | translate:'Students':1 }}</li>\r
        <li>{{ 'Students' | translate:'Students':2 }}</li>\r
        <li>{{ 'Students' | translate:'Students':3 }}</li>\r
        <li>{{ 'Students' | translate:'Students':11 }}</li>\r
    </ul>\r
</section>\r
\r
\r
<div class="spaced" [attr.data-value]="'something' | translate:'Something'">\r
    <p>Translate plurals in multiple languages:</p>\r
    <ul>\r
        <li *ngFor="let item of arrayOfThings">\r
            {{ item.key | translate:'THINGS':null:item.key }}\r
        </li>\r
    </ul>\r
</div>\r
\r
<section>\r
    <p>Translate gender</p>\r
    <ul>\r
        <li>\r
            {{ 'default male' | translate:'GENDER':null:'MALE' | titlecase}}\r
        </li>\r
        <li>\r
            {{ 'default female' | translate:'GENDER':null:'FEMALE' | titlecase}}\r
\r
        </li>\r
    </ul>\r
</section>\r
<section>\r
\r
    <p>Translate rate</p>\r
    <ul>\r
        <li *ngFor="let rate of rates">\r
            <label><input type="checkbox" [value]="rate" />\r
                {{ enumRate[rate] | translate:'RATING':null:enumRate[rate] | titlecase}}</label>\r
        </li>\r
    </ul>\r
</section>\r
\r
<section>\r
    A product is {{ productRating.toString() | translate:'RATING':null:enumRate[productRating]  }}\r
</section>\r
\r
<p>Translate relative time</p>\r
<ul>\r
    <li>{{date1  | relativetime }}</li>\r
    <li>{{date2  | relativetime }}</li>\r
    <li>{{date3  | relativetime }}</li>\r
    <li>{{date4  | relativetime }}</li>\r
    <li>{{date5  | relativetime:true }}</li>\r
</ul>\r
<p>Localize date</p>\r
<p>\r
    using keyword full:\r
    {{ date1 | date:'full' }}\r
</p>\r
<div class="rtl">\r
    {{ date1 | date }}\r
</div>\r
<p>\r
    using format: {{ date1 | date:'EEE, MMM d, yy hh:mm:ss a Z' }}\r
</p>\r
\r
<p>\r
    Currency {{ 23.44 | currency:'EUR':'symbol-narrow':undefined:'en-US' }}\r
    Currency {{ 23.44 | currency }}\r
    <!-- Currency {{ 23.44 | currency:'EUR':true:undefined:'ar-JO' }} -->\r
\r
</p>\r
<p>{{345.25 | currency:'TRY':'symbol-narrow'}}</p>\r
<p>{{345.25 | crCurrency:'TRY'}}</p>\r
<p>{{0.25 | currency:'\u20A9'}}</p>\r
<p>{{35.333 | currency:'WLG':'\u20A9'}}</p>\r
<p>\r
    {{'3.14159265359' | number:'4.2-4'}}\r
</p>\r
\r
<h3 class="spaced">Testing currencies to the limits</h3>\r
<select (change)="setCurrency($event)">\r
    <option value="USD">USD</option>\r
    <option value="AUD">AUD - same look</option>\r
    <option value="CAD">CAD - same look</option>\r
    <option value="TRY">TRY</option>\r
    <option value="EUR">EUR</option>\r
    <option value="RUB">RUB</option>\r
    <option value="JPY">JPY</option>\r
    <option value="JOD">JOD - no symbol</option>\r
    <option value="QAR">QAR</option>\r
    <option value="BHD">BHD</option>\r
    <option value="BBD">BBD</option>\r
    <option value="EGP">EGP</option>\r
    <option value="WLG">WLG - Woolong</option>\r
    <option value="\u20A9">WLG - Woolong</option>\r
  </select>\r
<p>\r
\r
    {{ 29304.34 | crCurrency:configCode}}\r
</p>\r
\r
<p>\r
\r
    {{ 29304.34 | currency:configCode}}\r
</p>\r
\r
<p>\r
    \u20BD 29,304.34\r
</p>\r
<p>\r
    RUB 29,304.34\r
</p>\r
<p>\r
    \u062C.\u0645. 29,304.34\r
</p>\r
` }]
  }], () => [{ type: Platform }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentDetailsComponent, { className: "ContentDetailsComponent", filePath: "src/app/components/content/details.component.ts", lineNumber: 31 });
})();

// src/app/components/content/standalone.component.ts
var ContentStandaloneComponent = class _ContentStandaloneComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function ContentStandaloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentStandaloneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentStandaloneComponent, selectors: [["ng-component"]], decls: 13, vars: 5, consts: [[1, "page"], [1, "container"], [1, "box"], [3, "rating"], ["routerLink", "/projects"]], template: function ContentStandaloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Stand alone stuff in here");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "crCurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 2)(8, "h4");
      \u0275\u0275text(9, "Stand alone partial common component");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "cr-stars", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 4);
      \u0275\u0275text(12, "Go to projects");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 2, 345.25, "TRY"));
      \u0275\u0275advance(5);
      \u0275\u0275property("rating", 4);
    }
  }, dependencies: [StarsPartialComponent, RouterModule, RouterLink, CustomCurrencyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentStandaloneComponent, [{
    type: Component,
    args: [{ imports: [StarsPartialComponent, CustomCurrencyPipe, RouterModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page">\r
  <div class="container">\r
    <h4>Stand alone stuff in here</h4>\r
    <p>{{345.25 | crCurrency:'TRY'}}</p>\r
\r
    <div class="box">\r
      <h4>Stand alone partial common component</h4>\r
      <cr-stars [rating]="4"></cr-stars>\r
    </div>\r
    <a routerLink="/projects">Go to projects</a>\r
  </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentStandaloneComponent, { className: "ContentStandaloneComponent", filePath: "src/app/components/content/standalone.component.ts", lineNumber: 11 });
})();

// src/app/routes/content.route.ts
var ContentRoutes = [
  {
    path: "details",
    component: ContentDetailsComponent,
    title: "Details"
  },
  {
    path: "standalone",
    component: ContentStandaloneComponent
  }
  // **gulproute**
];
export {
  ContentRoutes
};
