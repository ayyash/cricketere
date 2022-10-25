"use strict";
exports.id = "src_app_routes_public_route_ts";
exports.ids = ["src_app_routes_public_route_ts"];
exports.modules = {

/***/ 25015:
/*!****************************************************!*\
  !*** ./src/app/components/common/stars.partial.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarsPartialComponent": () => (/* binding */ StarsPartialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class StarsPartialComponent {
    constructor() {
        //
    }
    ngOnInit() {
        // const starPercentage = (this.rating / 5) * 100;
        this.raterounded = (Math.round(this.rating * 2) * 10 + 1) + '%';
        this.starCss = 'stars-' + Math.floor(this.rating);
    }
}
StarsPartialComponent.ɵfac = function StarsPartialComponent_Factory(t) { return new (t || StarsPartialComponent)(); };
StarsPartialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarsPartialComponent, selectors: [["cr-stars"]], inputs: { rating: "rating" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 2, vars: 5, consts: [[1, "stars-outer"]], template: function StarsPartialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("stars-inner ", ctx.starCss, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.raterounded);
    } }, styles: [".stars-outer:before,\n.stars-inner:before {\n  --sh-only-display: inline-block;font-family: \"cr\";text-transform: none;font-style: normal;font-weight: normal;font-variant: normal;display: inline-block;-webkit-font-smoothing: antialiased;text-rendering: optimizeLegibility;-moz-osx-font-smoothing: grayscale;speak: none;font-smooth: always;/* Enable Ligatures ================ */\n  letter-spacing: 0;-ms-font-feature-settings: \"liga\" 1;-o-font-feature-settings: \"liga\";font-feature-settings: \"liga\", normal, \"dlig\";font-variant-ligatures: discretionary-ligatures;/* ligatures? */\n  content: attr(data-icon);font-size: 150%;line-height: 1;\n}\n.stars-outer {\n  display: inline-block;\n  position: relative;\n}\n.stars-outer:before {\n  content: \"\\e90f\";\n}\n.stars-outer:before {\n  content: \"\\e90f\\e90f\\e90f\\e90f\\e90f\";\n  font-size: 100%;\n  letter-spacing: -2px;\n  color: #f3f3f3;\n  vertical-align: inherit;\n}\n.stars-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 0;\n}\n.stars-inner:before {\n  content: \"\\e90f\";\n}\n.stars-inner:before {\n  content: \"\\e90f\\e90f\\e90f\\e90f\\e90f\";\n  color: #57b347;\n  font-size: 100%;\n  letter-spacing: -2px;\n  vertical-align: inherit;\n}\n.stars-5:before {\n  color: #f31109;\n}\n.stars-4:before {\n  color: #f31109;\n}\n.stars-3:before {\n  color: #f3cf6f;\n}\n.stars-2:before {\n  color: #f3bd8c;\n}\n.stars-1:before {\n  color: #f6baa2;\n}\n"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 47236:
/*!****************************************************!*\
  !*** ./src/app/components/project/card.partial.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCardPartialComponent": () => (/* binding */ ProjectCardPartialComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _common_stars_partial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/stars.partial */ 25015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);






function ProjectCardPartialComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h4", 5)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Lorem Ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sub line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 4)(12, "button", 9)(13, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Extra information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ProjectCardPartialComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15)(2, "div", 16)(3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18)(6, "h4", 5)(7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lorem Ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "cr-stars", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sub line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20)(13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 24)(18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Extra information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque dolorum vitae aliquid accusamus ipsa quo alias voluptatem quam, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 26)(23, "button", 9)(24, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rating", 4);
} }
class ProjectCardPartialComponent {
    constructor() {
        this.mode = { compact: false };
        //
    }
    ngOnInit() {
        //
    }
}
ProjectCardPartialComponent.ɵfac = function ProjectCardPartialComponent_Factory(t) { return new (t || ProjectCardPartialComponent)(); };
ProjectCardPartialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectCardPartialComponent, selectors: [["cr-project-card"]], inputs: { mode: "mode" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "card", "card-v"], [1, "dblock"], ["src", "https://eu.ui-avatars.com/api/?name=John+Doe&size=250", 1, "h-1", "hm-3", "image-fill"], [1, "box"], [1, "f6", "weight-bold"], ["routerLink", "/projects/34"], [1, "small", "light"], [1, "corner"], ["title", "Link", 1, "btn"], [1, "liga"], [1, "card", "box", "valign-center"], [1, "dblock", "c-2", "rspace"], ["src", "https://via.placeholder.com/50?text=RM", 1, "image-cover", "image-circle"], [1, "f6", "weight-normal"], [1, "card"], [1, "image"], ["src", "https://via.placeholder.com/300", 1, "h-2", "hm-2", "image-fill"], [1, "content", "hspace", "card", "card-v", "c-7"], [3, "rating"], [1, "tail-v"], [1, "dinline", 2, "width", "20px"], ["src", "https://via.placeholder.com/50?text=RM", 1, "box-shadow-shallow", "image-cover", "image-circle"], [1, "dinline", 2, "width", "20px", "margin-left", "-5px"], [1, "extra", "c-2"], [1, "lighter", "smaller"], [1, "tail"]], template: function ProjectCardPartialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProjectCardPartialComponent_ng_container_0_Template, 21, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectCardPartialComponent_ng_container_1_Template, 26, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode.compact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mode.compact);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_stars_partial__WEBPACK_IMPORTED_MODULE_0__.StarsPartialComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 29553:
/*!*******************************************************!*\
  !*** ./src/app/components/public/forgot.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicForgotComponent": () => (/* binding */ PublicForgotComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _lib_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/toast */ 27437);
/* harmony import */ var _lib_mdinput_mdinput_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mdinput/mdinput.component */ 41401);
/* harmony import */ var _lib_mdinput_mdinput_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/mdinput/mdinput.directive */ 8700);
/* harmony import */ var _project_card_partial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project/card.partial */ 47236);
/* harmony import */ var _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/pipes/translate.pipe */ 44029);









class PublicForgotComponent {
    constructor(fb, 
    // private authService: AuthService,
    router, toast) {
        this.fb = fb;
        this.router = router;
        this.toast = toast;
        // Add types
        this.mode = { forNew: true };
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.forceValidation = false;
        //
    }
    ngOnInit() {
        //
        this.forgotForm = this.fb.group({
            email: []
        });
    }
    submit() {
        this.forceValidation = false;
        this.toast.Hide();
        if (this.forgotForm.valid) {
            // this.authService.ForgotPassword(this.forgotForm.value.email).subscribe(
            //     () => {
            //         // ok, display message and go back to login
            //         this.toast.Show('RESET_SENT', {sticky: false, extracss: 'success'});
            //         this.router.navigateByUrl(Config.Basic.loginRoute);
            //     },
            //     error => this.toast.HandleUiError(error)
            // );
        }
        else {
            this.forceValidation = true;
            this.toast.Show('INVALID_FORM', { sticky: false, extracss: 'error' });
        }
    }
}
PublicForgotComponent.ɵfac = function PublicForgotComponent_Factory(t) { return new (t || PublicForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_lib_toast__WEBPACK_IMPORTED_MODULE_0__.Toast)); };
PublicForgotComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PublicForgotComponent, selectors: [["ng-component"]], inputs: { mode: "mode" }, outputs: { onSave: "onSave", onCancel: "onCancel" }, decls: 13, vars: 16, consts: [["novalidate", "", 3, "formGroup", "submit"], [1, "f4", "spaced"], [1, "breath"], [3, "placeholder"], ["type", "email", "mdinput", "", "mdpattern", "email", "id", "email", "formControlName", "email", 1, "md-input", "w100", 3, "required"], [1, "spaced"], ["type", "submit", 1, "btn-rev"]], template: function PublicForgotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function PublicForgotComponent_Template_form_submit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "md-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "cr-project-card");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("was-validated", ctx.forceValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.forgotForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 7, "Request a new password", "ForgotTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 10, "Your email", "YourEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 13, "Remind me", "RemindMe"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _lib_mdinput_mdinput_component__WEBPACK_IMPORTED_MODULE_1__.MdInputComponent, _lib_mdinput_mdinput_directive__WEBPACK_IMPORTED_MODULE_2__.MdInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _project_card_partial__WEBPACK_IMPORTED_MODULE_3__.ProjectCardPartialComponent, _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 51982:
/*!*****************************************************!*\
  !*** ./src/app/components/public/home.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicHomeComponent": () => (/* binding */ PublicHomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/resources */ 59112);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services */ 63824);
/* harmony import */ var _lib_toaster_toast_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/toaster/toast.model */ 3144);
/* harmony import */ var _abstract_gtm_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract/gtm.abstract */ 43375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/toaster/toast.state */ 21770);
/* harmony import */ var _lib_directives_gtm_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/directives/gtm.directive */ 41270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/pipes/translate.pipe */ 44029);













const _c0 = function (a0, a1) {
  return {
    source: a0,
    group: a1
  };
};

const _c1 = function () {
  return {
    p: "1"
  };
};

const _c2 = function (a1) {
  return ["/content/details", a1];
};

class PublicHomeComponent extends _abstract_gtm_abstract__WEBPACK_IMPORTED_MODULE_3__.GtmComponent {
  constructor(seoService, toast) {
    //
    super();
    this.seoService = seoService;
    this.toast = toast;
    this.welcomeText = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Get('WELCOME_TEXT');
  }

  ngOnInit() {
    // _attn(this.configService.xConfig?.API?.apiRoot, 'on init');
    _attn(_core_services__WEBPACK_IMPORTED_MODULE_1__.ConfigService.Config.isServed, 'served');

    this.seoService.setHome();
    this.x$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(NaN);
  }

  showToast1() {
    // show toast to test its working, by exaact code
    this.toast.ShowSuccess('INVALID_VALUE', {
      timeout: 1000
    });
  }

  showToast2() {
    // by unknown code, without fallback, this will produce 'Unknown'
    this.toast.ShowError('SomeCode', {
      timeout: 5000
    });
  }

  showToast3() {
    // by unknown code, with fallback, fallback will be produced
    this.toast.ShowWarning('SomeCode', {
      text: 'Some <strong>fallback</strong> message here',
      clickable: e => {
        _attn(e, 'clicked');
      }
    });
  }

  showToast4() {
    // and finally, an all corners mercedes
    this.toast.Show('SomeCode', {
      text: _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Get('INVALID_VALUE'),
      timeout: _lib_toaster_toast_model__WEBPACK_IMPORTED_MODULE_2__.EnumTimeout.Never
    });
  }

}

PublicHomeComponent.ɵfac = function PublicHomeComponent_Factory(t) {
  return new (t || PublicHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.HomeSeoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_4__.Toast));
};

PublicHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: PublicHomeComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 25,
  vars: 15,
  consts: [[1, "f2", "txt-c"], [1, "spaced"], [1, "btn", 3, "click"], [1, "txt-c"], ["routerLink", "/login", 1, "btn-rev", 3, "shGtm"], [3, "routerLink"]],
  template: function PublicHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reprehenderit impedit vero quaerat? Optio aspernatur sed corporis officia cupiditate dolores provident minus quidem atque, magnam id fugit tempore cum labore! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicHomeComponent_Template_button_click_6_listener() {
        return ctx.showToast1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Show toast of exact code");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicHomeComponent_Template_button_click_9_listener() {
        return ctx.showToast2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Show toast of no code");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicHomeComponent_Template_button_click_12_listener() {
        return ctx.showToast3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Show toast with fallback message ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicHomeComponent_Template_button_click_15_listener() {
        return ctx.showToast4();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Show toast with key provided message ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 3)(21, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Details content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 4, "Hello cricketers", "WELCOME_TEXT"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 7, ctx.x$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("shGtm", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](9, _c0, ctx.enumGtmSource.Homepage, ctx.enumGtmGroup.Login));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c1)));
    }
  },
  dependencies: [_lib_directives_gtm_directive__WEBPACK_IMPORTED_MODULE_5__.GtmDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 67443:
/*!******************************************************!*\
  !*** ./src/app/components/public/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicLoginComponent": () => (/* binding */ PublicLoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83292);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 39698);
/* harmony import */ var _lib_toaster_toast_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/toaster/toast.model */ 3144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/toaster/toast.state */ 21770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ 63824);
/* harmony import */ var _lib_mdinput_mdinput_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mdinput/mdinput.component */ 41401);
/* harmony import */ var _lib_mdinput_mdinput_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/mdinput/mdinput.directive */ 8700);
/* harmony import */ var _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/pipes/translate.pipe */ 44029);











class PublicLoginComponent {
    constructor(toast, router, fb, authService) {
        this.toast = toast;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        //
    }
    ngOnInit() {
        //
        this.loginForm = this.fb.group({
            username: [],
            password: []
        });
    }
    login() {
        // stage 2: normal login
        this.forceValidation = false;
        this.toast.Hide();
        if (this.loginForm.valid) {
            const _user = this.loginForm.value;
            // this.router.navigateByUrl(this.authService.redirectUrl || Config.Basic.defaultRoute);
            this.authService.Login(_user.username, _user.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(e => {
                return this.toast.HandleUiError(e, {
                    timeout: _lib_toaster_toast_model__WEBPACK_IMPORTED_MODULE_1__.EnumTimeout.Never,
                    buttons: [
                        {
                            text: 'Login',
                            css: 'btn-fake',
                            click: (event) => {
                                // reroute
                                this.router.navigateByUrl(this.authService.redirectUrl || _config__WEBPACK_IMPORTED_MODULE_0__.Config.Basic.defaultRoute);
                                this.toast.Hide();
                            }
                        },
                        this.toast.dismissButton
                    ],
                });
            })).subscribe({
                next: result => {
                    if (result) {
                        this.router.navigateByUrl(this.authService.redirectUrl || _config__WEBPACK_IMPORTED_MODULE_0__.Config.Basic.defaultRoute);
                    }
                },
                // error: error => this.toast.HandleUiError(error)
            });
        }
        else {
            this.forceValidation = true;
            // this.toast.Show('INVALID_FORM', { sticky: false, extracss: 'error' });
        }
    }
}
PublicLoginComponent.ɵfac = function PublicLoginComponent_Factory(t) { return new (t || PublicLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_2__.Toast), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
PublicLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PublicLoginComponent, selectors: [["ng-component"]], decls: 41, vars: 43, consts: [[1, "spaced"], [1, "btn-social", "btn-cam", "w100", "halfspaced"], ["src", "assets/images/iGoogle.svg", "alt", "Google"], ["src", "assets/images/iMS.svg", "alt", "Microsoft"], ["src", "assets/images/iFacebook.svg", "alt", "Facebook"], ["src", "assets/images/iTwitter.svg", "alt", "Twitter"], [1, "txt-c", "small", "light", "spaced"], ["novalidate", "", 3, "formGroup", "submit"], [3, "placeholder", "static"], ["type", "email", "mdpattern", "email", "id", "username", "autocomplete", "", "mdinput", "", "formControlName", "username", 1, "md-input", "w100", 3, "required"], ["type", "password", "id", "password", "name", "current-password", "autofocus", "", "autocomplete", "current-password", "mdinput", "", "formControlName", "password", 1, "md-input", "w100", 3, "required"], ["type", "submit", 1, "btn-rev", "w100"], [1, "spaced", "bthin"], [1, "spaced", "row-spaced"], ["routerLink", "/forgot"]], template: function PublicLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function PublicLoginComponent_Template_form_submit_20_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 0)(22, "md-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 0)(26, "md-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 0)(31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 13)(36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Sign up for an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 16, "Sign in with Google", "SinginGoogle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 19, "Sign in with Microsoft", "SinginMicrosoft"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 22, "Sign in with Facebook", "SinginFacebook"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](16, 25, "Sign in with Twitter", "SinginTwitter"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](19, 28, "OR", "OR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("was-validated", ctx.forceValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](23, 31, "Email", "Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("static", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](27, 34, "Password", "Password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("static", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](33, 37, "Sign in", "SignIn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](38, 40, "Forgot password?", "ForgotPassword"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _lib_mdinput_mdinput_component__WEBPACK_IMPORTED_MODULE_4__.MdInputComponent, _lib_mdinput_mdinput_directive__WEBPACK_IMPORTED_MODULE_5__.MdInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _lib_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".btn-social[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn-social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 1.6rem;\n  top: 1.2rem;\n  width: 18px;\n}"], changeDetection: 0 });


/***/ }),

/***/ 27437:
/*!************************************!*\
  !*** ./src/app/lib/toast/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* reexport safe */ _toast_service__WEBPACK_IMPORTED_MODULE_0__.Toast),
/* harmony export */   "ToastModule": () => (/* reexport safe */ _toast_module__WEBPACK_IMPORTED_MODULE_2__.ToastModule)
/* harmony export */ });
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.service */ 76739);
/* harmony import */ var _toast_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.model */ 15642);
/* harmony import */ var _toast_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.module */ 56480);





/***/ }),

/***/ 15642:
/*!******************************************!*\
  !*** ./src/app/lib/toast/toast.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 56480:
/*!*******************************************!*\
  !*** ./src/app/lib/toast/toast.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastModule": () => (/* binding */ ToastModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _toast_partial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.partial */ 24017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);



class ToastModule {
}
ToastModule.ɵfac = function ToastModule_Factory(t) { return new (t || ToastModule)(); };
ToastModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ToastModule });
ToastModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToastModule, { declarations: [_toast_partial__WEBPACK_IMPORTED_MODULE_0__.ToastPartialComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_toast_partial__WEBPACK_IMPORTED_MODULE_0__.ToastPartialComponent] }); })();


/***/ }),

/***/ 24017:
/*!********************************************!*\
  !*** ./src/app/lib/toast/toast.partial.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastPartialComponent": () => (/* binding */ ToastPartialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.service */ 76739);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);




function ToastPartialComponent_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastPartialComponent_ng_container_0_span_4_Template_span_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const button_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.click(button_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const button_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](button_r3.css);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](button_r3.text);
  }
}

function ToastPartialComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ToastPartialComponent_ng_container_0_span_4_Template, 2, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastPartialComponent_ng_container_0_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const toast_r1 = restoredCtx.ngIf;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.hide(toast_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const toast_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("", toast_r1.css, " ", toast_r1.extracss, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out", toast_r1.isHiding);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", toast_r1.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", toast_r1.buttons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", toast_r1.closetext);
  }
}

class ToastPartialComponent {
  constructor(toastService) {
    this.toastService = toastService; //
  }

  ngOnInit() {
    this.toast$ = this.toastService.toast$; //.debug('TOAST', 'Subject');
  }

  hide(toast) {
    this.toastService.Hide(); // how to eit something here

    if (toast.onHide) {
      toast.onHide.call(toast);
    }
  }

  ngOnDestroy() {
    this.toastService.Hide();
  }

  click(button, event) {
    button.click.call(button, event);
  }

}

ToastPartialComponent.ɵfac = function ToastPartialComponent_Factory(t) {
  return new (t || ToastPartialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_0__.Toast));
};

ToastPartialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ToastPartialComponent,
  selectors: [["sh-toast"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "symbol", "icon-close", "closelabel", 3, "title", "click"], [3, "click"]],
  template: function ToastPartialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastPartialComponent_ng_container_0_Template, 6, 9, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.toast$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".closelabel[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 1.6rem;\n  margin-left: 0.8rem;\n  display: block;\n  cursor: pointer;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  background-color: #263238;\n  color: #fff;\n  position: fixed;\n  bottom: 1.6rem;\n  left: 1.6rem;\n  right: 1.6rem;\n  font-size: 90%;\n  z-index: 5100;\n  animation: gbox-in 0.2s ease-in-out;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n}\n.toast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 1.6rem;\n  margin-right: 0.8rem;\n  flex-basis: 100%;\n}\n.toast.error[_ngcontent-%COMP%] {\n  background-color: #f31109;\n}\n.toast.success[_ngcontent-%COMP%] {\n  background-color: #57b347;\n}\n.toast.fordone[_ngcontent-%COMP%] {\n  background-color: #57b347;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.toast.app[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #ffc400;\n}\n.toast.out[_ngcontent-%COMP%] {\n  animation-name: gbox-out;\n  animation-duration: 1s;\n  animation-timing-function: ease-in-out;\n}\n@keyframes gbox-in {\n  0% {\n    bottom: -100%;\n    opacity: 0;\n  }\n  100% {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n@keyframes gbox-out {\n  0% {\n    bottom: 0;\n    opacity: 1;\n  }\n  90% {\n    bottom: -100%;\n    opacity: 0;\n  }\n}\n@media only screen and (min-width: 720px) {\n  .toast[_ngcontent-%COMP%] {\n    max-width: 50vw;\n  }\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 76739:
/*!********************************************!*\
  !*** ./src/app/lib/toast/toast.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/resources */ 59112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);



class Toast {
    constructor() {
        this.toast = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.toast$ = this.toast.asObservable();
        this.options = {
            text: _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Get('Error'),
            sticky: false,
            css: 'toast',
            closetext: _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Get('Dismiss'),
            delay: 5000,
            threshold: 30000,
            extracss: '',
            buttons: [],
            // onHide: null,
            isHiding: false // is in the state of hiding, to animate properly
        };
    }
    // VER_NEXT: allow this
    // constructor(){
    //     this.router.events.subscribe(event => {
    //         if (event instanceof NavigationStart) {
    //             if (this.keepAfterRouteChange) {
    //                 // only keep for a single route change
    //                 this.keepAfterRouteChange = false;
    //             } else {
    //                 // clear alert message
    //                 this.clear();
    //             }
    //         }
    //     });
    // }
    // VER_NEXT: note to self, all ways to control animation through css has gone awry
    // the best way is to add and remove classes within delay,  never rely on css animation delay
    Show(key, options, fallback) {
        // clone optons and never override
        this.Hide();
        const _options = { ...this.options, ...options };
        // fallback if message does not exist in keys
        _options.text = _core_resources__WEBPACK_IMPORTED_MODULE_0__.Res.Get(key, fallback);
        this.toast.next(_options);
        const _delay = !_options.sticky ? _options.delay : _options.threshold;
        if (_delay) {
            this.isCancled = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(_delay)
                // if hidden cancel timer, also unsubscribe just in case the toast refills before timer, duh!
                .subscribe(() => {
                // first apply class then remove (animation)
                this.toast.next({ ..._options, isHiding: true });
                (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(200).subscribe(() => {
                    this.Hide();
                });
            });
        }
    }
    Hide() {
        if (this.isCancled) {
            this.isCancled.unsubscribe();
        }
        this.toast.next(null);
    }
    HandleUiError(error) {
        if (error) {
            if (error.code) {
                // this function handles whether to show the message or the fallback, if error.code = -1
                this.Show(error.code, { sticky: true, extracss: 'error' }, error.uiMessage);
            }
            else {
                // something unpredictable happened
                throw (Error(error));
                // _debug(error, 'Something nasty', 't');
            }
        }
    }
    HandleCatchError(error, code) {
        // probably send a GTM event
        if (error.status === 404) {
            if (code) {
                error.code = code + '_NOT_FOUND';
            }
        }
        if (error.status === 400) {
            if (code) {
                error.code = code + '_ERROR';
            }
        }
        this.HandleUiError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }
}
Toast.ɵfac = function Toast_Factory(t) { return new (t || Toast)(); };
Toast.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Toast, factory: Toast.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62128:
/*!****************************************!*\
  !*** ./src/app/routes/public.route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicRoutingModule": () => (/* binding */ PublicRoutingModule)
/* harmony export */ });
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shared.module */ 36182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_public_forgot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/public/forgot.component */ 29553);
/* harmony import */ var _components_public_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/public/home.component */ 51982);
/* harmony import */ var _components_public_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/public/login.component */ 67443);
/* harmony import */ var _components_project_card_partial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project/card.partial */ 47236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);








// **gulpimport**
const routes = [
    {
        path: '',
        component: _components_public_home_component__WEBPACK_IMPORTED_MODULE_2__.PublicHomeComponent,
        title: 'SITE_NAME'
    },
    {
        path: 'login',
        component: _components_public_login_component__WEBPACK_IMPORTED_MODULE_3__.PublicLoginComponent,
        title: 'LOGIN'
    },
    {
        path: 'forgot',
        component: _components_public_forgot_component__WEBPACK_IMPORTED_MODULE_1__.PublicForgotComponent
    }
    // **gulproute**
];
class PublicRoutingModule {
}
PublicRoutingModule.ɵfac = function PublicRoutingModule_Factory(t) { return new (t || PublicRoutingModule)(); };
PublicRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PublicRoutingModule });
PublicRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _components_project_card_partial__WEBPACK_IMPORTED_MODULE_4__.ProjectCardPartialComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PublicRoutingModule, { declarations: [_components_public_home_component__WEBPACK_IMPORTED_MODULE_2__.PublicHomeComponent,
        _components_public_login_component__WEBPACK_IMPORTED_MODULE_3__.PublicLoginComponent,
        _components_public_forgot_component__WEBPACK_IMPORTED_MODULE_1__.PublicForgotComponent
        // **gulpcomponent**
    ], imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _components_project_card_partial__WEBPACK_IMPORTED_MODULE_4__.ProjectCardPartialComponent] }); })();


/***/ })

};
;