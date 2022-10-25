"use strict";
exports.id = "src_app_routes_project_route_ts";
exports.ids = ["src_app_routes_project_route_ts"];
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

/***/ 11761:
/*!********************************************************!*\
  !*** ./src/app/components/project/create.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCreateComponent": () => (/* binding */ ProjectCreateComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/toaster/toast.state */ 21770);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/project.service */ 354);
/* harmony import */ var _form_partial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.partial */ 6559);






const _c0 = function () { return { forNew: true }; };
class ProjectCreateComponent {
    constructor(route, router, toast, projectService) {
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.projectService = projectService;
        //
    }
    ngOnInit() {
        //
        this.x$ = this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(n => _attn(n, 'route data')));
    }
    create(project) {
        this.projectService.CreateProject(project).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(e => this.toast.HandleUiError(e, {
            buttons: [{
                    text: 'LOGIN', click: (event) => {
                        // reroute
                        this.router.navigate(['/login']);
                        this.toast.Hide();
                    }
                }]
        })))
            .subscribe({
            next: (data) => {
                _attn(data?.id, 'succeded');
            },
            error: (error) => {
                _attn(error, 'error');
                this.toast.Show(error.code);
            }
        });
    }
}
ProjectCreateComponent.ɵfac = function ProjectCreateComponent_Factory(t) { return new (t || ProjectCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_0__.Toast), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_1__.ProjectService)); };
ProjectCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProjectCreateComponent, selectors: [["ng-component"]], decls: 5, vars: 2, consts: [[1, "page"], [1, "container"], [1, "f4", "spaced"], [3, "mode", "onSave"]], template: function ProjectCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Create new project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "cr-project-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSave", function ProjectCreateComponent_Template_cr_project_form_onSave_4_listener($event) { return ctx.create($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
    } }, dependencies: [_form_partial__WEBPACK_IMPORTED_MODULE_2__.ProjectFormPartialComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 78588:
/*!******************************************************!*\
  !*** ./src/app/components/project/edit.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectEditComponent": () => (/* binding */ ProjectEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class ProjectEditComponent {
    constructor() {
        //
    }
    ngOnInit() {
        //
    }
}
ProjectEditComponent.ɵfac = function ProjectEditComponent_Factory(t) { return new (t || ProjectEditComponent)(); };
ProjectEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectEditComponent, selectors: [["ng-component"]], decls: 5, vars: 0, consts: [[1, "page"], [1, "container"], [1, "f4", "spaced"]], template: function ProjectEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " form here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 6559:
/*!****************************************************!*\
  !*** ./src/app/components/project/form.partial.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFormPartialComponent": () => (/* binding */ ProjectFormPartialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/toaster/toast.state */ 21770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _lib_mdinput_mdinput_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mdinput/mdinput.component */ 41401);
/* harmony import */ var _lib_mdinput_mdinput_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/mdinput/mdinput.directive */ 8700);








function ProjectFormPartialComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1);
} }
const _c0 = function () { return [1, 2, 3, 4]; };
class ProjectFormPartialComponent {
    constructor(fb, toast) {
        this.fb = fb;
        this.toast = toast;
        // Add types
        this.mode = { forNew: true };
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.forceValidation = false;
        //
    }
    ngOnInit() {
        //
        this.projectForm = this.fb.group({
            fieldname: [],
            name: [],
            list: [],
            email: [],
            number: [],
            checkme: [],
            minlength: [],
            maxlength: [],
            minvalue: [],
            maxvalue: [],
            phone: [],
            range: []
        });
    }
    // use to compare for initial select... keep '=='
    compareFn(c1, c2) {
        // tslint:disable-next-line:triple-equals
        return c1 && c2 ? c1.id == c2.id : false;
    }
    saveProject() {
        this.forceValidation = false;
        this.toast.Hide();
        if (this.projectForm.valid) {
            // clone into a new object
            const _value = this.projectForm.value;
            const _project = { ..._value };
            // then emit
            this.onSave.emit(_project);
            // test project
        }
        else {
            this.forceValidation = true;
            this.toast.ShowError('INVALID_FORM');
        }
    }
}
ProjectFormPartialComponent.ɵfac = function ProjectFormPartialComponent_Factory(t) { return new (t || ProjectFormPartialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_lib_toaster_toast_state__WEBPACK_IMPORTED_MODULE_0__.Toast)); };
ProjectFormPartialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectFormPartialComponent, selectors: [["cr-project-form"]], inputs: { mode: "mode" }, outputs: { onSave: "onSave", onCancel: "onCancel" }, decls: 43, vars: 17, consts: [["novalidate", "", 3, "formGroup"], [1, "spaced"], ["placeholder", "Name"], ["type", "text", "id", "name", "mdinput", "", "formControlName", "name", 1, "md-input", "w100", 3, "required"], ["helptext", "", 1, "md-help-text"], ["placeholder", "List"], ["formControlName", "list", "mdinput", "", 1, "md-input", "w100", 3, "required", "compareWith"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["placeholder", "Fieldname"], ["type", "text", "id", "fieldname", "mdinput", "", "formControlName", "fieldname", 1, "md-input", "w100", 3, "required"], ["placeholder", "Email"], ["type", "email", "id", "email", "mdinput", "", "mdpattern", "email", "formControlName", "email", 1, "md-input", "w100", 3, "required"], ["placeholder", "Number"], ["type", "number", "id", "number", "mdinput", "", "formControlName", "number", 1, "md-input", "w100", 3, "required"], ["placeholder", "Minimum Length"], ["type", "text", "id", "minlength", "mdinput", "", "minlength", "5", "formControlName", "minlength", 1, "md-input", "w100", 3, "required"], ["placeholder", "Maximum Length"], ["type", "text", "id", "maxlength", "mdinput", "", "maxlength", "3", "formControlName", "maxlength", 1, "md-input", "w100", 3, "required"], ["placeholder", "Minimim Value"], ["type", "number", "id", "minvalue", "mdinput", "", "min", "4", "formControlName", "minvalue", 1, "md-input", "w100", 3, "required"], ["placeholder", "Maximum Value"], ["type", "number", "id", "maxvalue", "mdinput", "", "max", "3", "formControlName", "maxvalue", 1, "md-input", "w100", 3, "required"], ["placeholder", "Phone"], ["type", "text", "id", "phone", "mdinput", "", "mdpattern", "phone", "formControlName", "phone", 1, "md-input", "w100", 3, "required"], ["placeholder", "Range"], ["type", "number", "id", "range", "mdinput", "", "mdtype", "range", "min", "3", "max", "10", "formControlName", "range", 1, "md-input", "w100", 3, "required"], [1, "breath"], ["type", "submit", 1, "btn-rev", 3, "click"], [3, "ngValue"]], template: function ProjectFormPartialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "fieldset")(2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Legend of fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1)(5, "md-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "help text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1)(10, "md-input", 5)(11, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProjectFormPartialComponent_option_12_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1)(14, "md-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 1)(17, "md-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 1)(20, "md-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 1)(23, "md-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 1)(26, "md-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 1)(29, "md-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 1)(32, "md-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 1)(35, "md-input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 1)(38, "md-input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 26)(41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectFormPartialComponent_Template_button_click_41_listener() { return ctx.saveProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("was-validated", ctx.forceValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.projectForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", true)("compareWith", ctx.compareFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _lib_mdinput_mdinput_component__WEBPACK_IMPORTED_MODULE_1__.MdInputComponent, _lib_mdinput_mdinput_directive__WEBPACK_IMPORTED_MODULE_2__.MdInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 90303:
/*!******************************************************!*\
  !*** ./src/app/components/project/list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectListComponent": () => (/* binding */ ProjectListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_gtm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/gtm */ 73322);
/* harmony import */ var _abstract_gtm_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/gtm.abstract */ 43375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services */ 63824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _common_stars_partial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/stars.partial */ 25015);
/* harmony import */ var _card_partial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.partial */ 47236);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34793);










function ProjectListComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "cr-stars", 12)(4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/projects/", project_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rating", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", project_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r2.description);
  }
}

function ProjectListComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "cr-project-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return [1, 2, 3, 4, 5, 6];
};

const _c1 = function () {
  return {
    public: true,
    page: 1
  };
};

const _c2 = function (a1) {
  return ["/products", a1];
};

const _c3 = function () {
  return {
    public: false
  };
};

const _c4 = function () {
  return {
    public: false,
    page: 2
  };
};

const projects = [{
  id: '1',
  title: 'Turtle Rock',
  description: 'A place to build a turtle',
  image: 'https://picsum.photos/50/50',
  category: {
    key: 'turtles',
    value: 'Turtles'
  }
}, {
  id: '2',
  title: 'Turtle Rock 2',
  description: 'A place to build a turtle',
  image: 'https://picsum.photos/50/50',
  category: {
    key: 'turtles',
    value: 'Turtles'
  }
}, {
  id: '3',
  title: 'Turtle Rock 3',
  description: 'A place to build a turtle 4',
  image: 'https://picsum.photos/50/50',
  category: {
    key: 'turtles',
    value: 'Turtles'
  }
}];
class ProjectListComponent extends _abstract_gtm_abstract__WEBPACK_IMPORTED_MODULE_1__.GtmComponent {
  constructor(seoService, storageService) {
    super();
    this.seoService = seoService;
    this.storageService = storageService;
  }

  ngOnInit() {
    // resources.keys.ayyash.f = '';
    // get list then update
    this.projects$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(projects).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(projects => {
      const results = {
        total: 234,
        page: 1,
        category: {
          key: 'turtles',
          value: 'Turtles'
        }
      };
      this.seoLink = this.seoService.getNextLink(results);
      this.seoService.setSearchResults(results, projects);
      _core_gtm__WEBPACK_IMPORTED_MODULE_0__.GtmTracking.RegisterEvent({
        event: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmEvent.List,
        source: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmSource.ProjectsList
      }, _core_gtm__WEBPACK_IMPORTED_MODULE_0__.GtmTracking.MapProjects(projects));
      return projects;
    }));
  }

  next(clickEvent) {
    // go to next page then stop
    clickEvent.preventDefault();
  }

  search(value) {
    // on search register event
    _core_gtm__WEBPACK_IMPORTED_MODULE_0__.GtmTracking.RegisterEvent({
      event: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmEvent.Search,
      source: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmSource.ProjectsList
    }, _core_gtm__WEBPACK_IMPORTED_MODULE_0__.GtmTracking.MapSearch(value));
  }

  setOne() {
    // reigster event and push datalayer
    _core_gtm__WEBPACK_IMPORTED_MODULE_0__.GtmTracking.RegisterEvent({
      event: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmEvent.Filter,
      source: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmSource.ProjectsList
    }, {
      filter: 'one'
    });
    this.storageService.setItem('filter', 'one');
  }

  setTwo() {
    _core_gtm__WEBPACK_IMPORTED_MODULE_0__.GtmTracking.Reset();
    _core_gtm__WEBPACK_IMPORTED_MODULE_0__.GtmTracking.RegisterEvent({
      event: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmEvent.Filter,
      source: _core_gtm__WEBPACK_IMPORTED_MODULE_0__.EnumGtmSource.EmployeesList
    }, {
      filter: null
    });
    this.storageService.setItem('filter2', 'another');
  }

}

ProjectListComponent.ɵfac = function ProjectListComponent_Factory(t) {
  return new (t || ProjectListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.ProjectSeoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.StorageService));
};

ProjectListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProjectListComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 28,
  vars: 18,
  consts: [[1, "page"], [1, "container"], [1, "f5", "spaced"], [1, "a", 3, "click"], [1, "row", "row-gap", "boxed", "umd-3"], ["class", "box-shadow-normal spaced", 4, "ngFor", "ngForOf"], [3, "href", "click"], [1, "rowlist"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "box-shadow-normal", "spaced"], [1, "f3", "a", 3, "routerLink"], [3, "rating"], [3, "src"]],
  template: function ProjectListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Project list");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectListComponent_Template_div_click_4_listener() {
        return ctx.setOne();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Set filter 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectListComponent_Template_div_click_6_listener() {
        return ctx.setTwo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Set filter 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProjectListComponent_li_9_Template, 7, 5, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectListComponent_Template_a_click_12_listener($event) {
        return ctx.next($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Listed");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ProjectListComponent_li_17_Template, 2, 0, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Test links for products ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Public");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Private");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Private page 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, ctx.projects$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.seoLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c1)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c3)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c4)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _common_stars_partial__WEBPACK_IMPORTED_MODULE_3__.StarsPartialComponent, _card_partial__WEBPACK_IMPORTED_MODULE_4__.ProjectCardPartialComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 46458:
/*!******************************************************!*\
  !*** ./src/app/components/project/view.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectViewComponent": () => (/* binding */ ProjectViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services */ 63824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);






function ProjectViewComponent_div_0_div_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r5.value, " ");
  }
}

function ProjectViewComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProjectViewComponent_div_0_div_11_li_2_Template, 2, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const cats_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", cats_r3);
  }
}

function ProjectViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Breadcrumbs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Subline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectViewComponent_div_0_div_11_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section")(14, "dl", 8)(15, "dt", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "dt", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "dt", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "dt", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "dt", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "section")(38, "table", 11)(39, "thead")(40, "tr")(41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tbody")(46, "tr")(47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "dsfsdfdsfs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "2.2.4559");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "section")(52, "ul", 12)(53, "li", 13)(54, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16)(57, "h6", 17)(58, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Lorem Ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit recusandae voluptatibus labore animi voluptas doloremque assumenda, dolor eum. Rerum molestiae eos magnam ea laborum distinctio impedit commodi fugiat cumque vero! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " August 2, 2001 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 20)(64, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 13)(69, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Lorem ipsum, do ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " September 2, 2001 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 20)(76, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li", 13)(81, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " corrupti temporibus soluta veritatis vitae perferendis totam eveniet, nemo atque, fugit esse consequatur accusantium delectus nam! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " May 2, 2001 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 20)(88, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const project_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, ctx_r0.categories$));
  }
}

const mockProject = {
  title: 'Turtle Rock',
  description: 'A place to build a turtle',
  image: 'https://picsum.photos/200/300',
  id: '56',
  category: {
    value: 'Turtles',
    key: 'turtles'
  }
};
class ProjectViewComponent {
  constructor(route, dataService, seoService) {
    this.route = route;
    this.dataService = dataService;
    this.seoService = seoService; //
  }

  ngOnInit() {
    this.categories$ = this.dataService.GetCategories();
    this.project$ = this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(params => {
      // get project from service by params
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(mockProject);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(project => {
      _seqlog('title');

      this.seoService.setProject(project); // this.seoSerivce.UpdateTags({
      //     title: project.title,
      //     description: project.description,
      //     keywords: 'do I have any',
      //     url: this.route.snapshot.url,
      //     image: project.image
      // });
    }));
  }

}

ProjectViewComponent.ɵfac = function ProjectViewComponent_Factory(t) {
  return new (t || ProjectViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ProjectSeoService));
};

ProjectViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProjectViewComponent,
  selectors: [["ng-component"]],
  decls: 2,
  vars: 3,
  consts: [["class", "page", 4, "ngIf"], [1, "page"], [1, "container"], [1, "small"], [1, "f3"], [1, "f6", "light", "spaced"], [3, "src"], [4, "ngIf"], [1, "grid", "g-1", "spacedout"], [1, "light", "weight-light"], [1, "label", "label-green"], [1, "rich", "w100"], [1, "rowlist"], [1, "card"], [1, "c-1", "rspace"], ["src", "https://randomuser.me/api/portraits/men/57.jpg", "alt", "image", 1, "image-cover", "image-circle"], [1, "content", "c-6"], [1, "f6"], [1, "cam"], [1, "lauto", "c-2", "txt"], [1, "tail"], [1, "label", "label-yellow"], [1, "liga", "a"], ["src", "https://randomuser.me/api/portraits/men/2.jpg", "alt", "image", 1, "image-cover", "image-circle"], [1, "lauto", "c-2"], ["src", "https://via.placeholder.com/50", "alt", "image", 1, "image-cover", "image-circle"], [4, "ngFor", "ngForOf"]],
  template: function ProjectViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProjectViewComponent_div_0_Template, 92, 6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.project$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 80799:
/*!******************************************!*\
  !*** ./src/app/routes/project.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectModule": () => (/* binding */ ProjectModule)
/* harmony export */ });
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shared.module */ 36182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _components_project_form_partial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project/form.partial */ 6559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




// **gulpimport**
class ProjectModule {
}
ProjectModule.ɵfac = function ProjectModule_Factory(t) { return new (t || ProjectModule)(); };
ProjectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProjectModule });
ProjectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectModule, { declarations: [_components_project_form_partial__WEBPACK_IMPORTED_MODULE_1__.ProjectFormPartialComponent
        // **gulpcomponent**
    ], imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_components_project_form_partial__WEBPACK_IMPORTED_MODULE_1__.ProjectFormPartialComponent
        // **gulpcomponent**
    ] }); })();


/***/ }),

/***/ 15908:
/*!*****************************************!*\
  !*** ./src/app/routes/project.route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectRoutingModule": () => (/* binding */ ProjectRoutingModule)
/* harmony export */ });
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shared.module */ 36182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.module */ 80799);
/* harmony import */ var _components_project_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/project/create.component */ 11761);
/* harmony import */ var _components_project_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project/edit.component */ 78588);
/* harmony import */ var _components_project_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project/list.component */ 90303);
/* harmony import */ var _components_project_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project/view.component */ 46458);
/* harmony import */ var _services_project_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/project.resolve */ 17704);
/* harmony import */ var _components_common_stars_partial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/stars.partial */ 25015);
/* harmony import */ var _components_project_card_partial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/project/card.partial */ 47236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);












// **gulpimport**
const routes = [
    {
        path: '',
        component: _components_project_list_component__WEBPACK_IMPORTED_MODULE_4__.ProjectListComponent,
        title: 'LIST_PROJECTS'
    },
    {
        path: 'create',
        component: _components_project_create_component__WEBPACK_IMPORTED_MODULE_2__.ProjectCreateComponent,
        title: 'CREATE_PROJECT',
        resolve: {
            ready: _services_project_resolve__WEBPACK_IMPORTED_MODULE_6__.ProjectResolve
        }
    },
    {
        path: 'edit/:id',
        component: _components_project_edit_component__WEBPACK_IMPORTED_MODULE_3__.ProjectEditComponent
    },
    {
        path: ':id',
        component: _components_project_view_component__WEBPACK_IMPORTED_MODULE_5__.ProjectViewComponent
    }
    // **gulproute**
];
class ProjectRoutingModule {
}
ProjectRoutingModule.ɵfac = function ProjectRoutingModule_Factory(t) { return new (t || ProjectRoutingModule)(); };
ProjectRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ProjectRoutingModule });
ProjectRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _project_module__WEBPACK_IMPORTED_MODULE_1__.ProjectModule,
        _components_common_stars_partial__WEBPACK_IMPORTED_MODULE_7__.StarsPartialComponent,
        _components_project_card_partial__WEBPACK_IMPORTED_MODULE_8__.ProjectCardPartialComponent,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProjectRoutingModule, { declarations: [_components_project_list_component__WEBPACK_IMPORTED_MODULE_4__.ProjectListComponent,
        _components_project_view_component__WEBPACK_IMPORTED_MODULE_5__.ProjectViewComponent,
        _components_project_create_component__WEBPACK_IMPORTED_MODULE_2__.ProjectCreateComponent,
        _components_project_edit_component__WEBPACK_IMPORTED_MODULE_3__.ProjectEditComponent
        // **gulpcomponent**
    ], imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _project_module__WEBPACK_IMPORTED_MODULE_1__.ProjectModule,
        _components_common_stars_partial__WEBPACK_IMPORTED_MODULE_7__.StarsPartialComponent,
        _components_project_card_partial__WEBPACK_IMPORTED_MODULE_8__.ProjectCardPartialComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ })

};
;