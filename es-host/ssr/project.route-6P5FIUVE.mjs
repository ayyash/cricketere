import './polyfills.server.mjs';
import {
  MdInputComponent,
  MdInputDirective,
  MdInputModule,
  ProjectCardPartialComponent,
  StorageService
} from "./chunk-YMCVSGOF.mjs";
import {
  GtmComponent,
  SeoService
} from "./chunk-DQGKHY5L.mjs";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Toast,
  UntypedFormBuilder,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MW2OBZSZ.mjs";
import {
  DataList,
  EnumGtmEvent,
  EnumGtmSource,
  GtmTracking,
  ListOptions,
  debug
} from "./chunk-UZ5YMPP6.mjs";
import {
  StarsPartialComponent
} from "./chunk-MJS5RZFM.mjs";
import {
  ConfigService
} from "./chunk-6XMQMSF3.mjs";
import {
  ActivatedRoute,
  AsyncPipe,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Config,
  EventEmitter,
  GetParamsAsString,
  HttpClient,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  Output,
  Res,
  Router,
  RouterLink,
  RouterModule,
  catchError,
  first,
  map,
  of,
  provideEnvironmentInitializer,
  setClassMetadata,
  switchMap,
  tap,
  toFormat,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6JMJDJUH.mjs";
import {
  __spreadValues
} from "./chunk-F3YYFOAS.mjs";

// src/app/components/project/form.partial.ts
var _c0 = () => [1, 2, 3, 4];
function ProjectFormPartialComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
var ProjectFormPartialComponent = class _ProjectFormPartialComponent {
  fb;
  toast;
  // Add types
  mode = { forNew: true };
  onSave = new EventEmitter();
  onCancel = new EventEmitter();
  forceValidation = false;
  projectForm;
  constructor(fb, toast) {
    this.fb = fb;
    this.toast = toast;
  }
  ngOnInit() {
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
    return c1 && c2 ? c1.id == c2.id : false;
  }
  saveProject() {
    this.forceValidation = false;
    this.toast.Hide();
    if (this.projectForm.valid) {
      const _value = this.projectForm.value;
      const _project = __spreadValues({}, _value);
      this.onSave.emit(_project);
    } else {
      this.forceValidation = true;
      this.toast.ShowError("INVALID_FORM");
    }
  }
  static \u0275fac = function ProjectFormPartialComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectFormPartialComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Toast));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectFormPartialComponent, selectors: [["cr-project-form"]], inputs: { mode: "mode" }, outputs: { onSave: "onSave", onCancel: "onCancel" }, decls: 43, vars: 17, consts: [["novalidate", "", 3, "formGroup"], [1, "spaced"], ["placeholder", "Name"], ["type", "text", "id", "name", "mdinput", "", "formControlName", "name", 1, "md-input", "w100", 3, "required"], ["helptext", "", 1, "md-help-text"], ["placeholder", "List"], ["formControlName", "list", "mdinput", "", 1, "md-input", "w100", 3, "required", "compareWith"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["placeholder", "Fieldname"], ["type", "text", "id", "fieldname", "mdinput", "", "formControlName", "fieldname", 1, "md-input", "w100", 3, "required"], ["placeholder", "Email"], ["type", "email", "id", "email", "mdinput", "", "mdpattern", "email", "formControlName", "email", 1, "md-input", "w100", 3, "required"], ["placeholder", "Number"], ["type", "number", "id", "number", "mdinput", "", "formControlName", "number", 1, "md-input", "w100", 3, "required"], ["placeholder", "Minimum Length"], ["type", "text", "id", "minlength", "mdinput", "", "minlength", "5", "formControlName", "minlength", 1, "md-input", "w100", 3, "required"], ["placeholder", "Maximum Length"], ["type", "text", "id", "maxlength", "mdinput", "", "maxlength", "3", "formControlName", "maxlength", 1, "md-input", "w100", 3, "required"], ["placeholder", "Minimim Value"], ["type", "number", "id", "minvalue", "mdinput", "", "min", "4", "formControlName", "minvalue", 1, "md-input", "w100", 3, "required"], ["placeholder", "Maximum Value"], ["type", "number", "id", "maxvalue", "mdinput", "", "max", "3", "formControlName", "maxvalue", 1, "md-input", "w100", 3, "required"], ["placeholder", "Phone"], ["type", "text", "id", "phone", "mdinput", "", "mdpattern", "phone", "formControlName", "phone", 1, "md-input", "w100", 3, "required"], ["placeholder", "Range"], ["type", "number", "id", "range", "mdinput", "", "mdtype", "range", "min", "3", "max", "10", "formControlName", "range", 1, "md-input", "w100", 3, "required"], [1, "breath"], ["type", "submit", 1, "btn-rev", 3, "click"], [3, "ngValue"]], template: function ProjectFormPartialComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "fieldset")(2, "legend");
      \u0275\u0275text(3, "Legend of fields");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 1)(5, "md-input", 2);
      \u0275\u0275element(6, "input", 3);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275text(8, "help text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 1)(10, "md-input", 5)(11, "select", 6);
      \u0275\u0275template(12, ProjectFormPartialComponent_option_12_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 1)(14, "md-input", 8);
      \u0275\u0275element(15, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 1)(17, "md-input", 10);
      \u0275\u0275element(18, "input", 11);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 1)(20, "md-input", 12);
      \u0275\u0275element(21, "input", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 1)(23, "md-input", 14);
      \u0275\u0275element(24, "input", 15);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 1)(26, "md-input", 16);
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 1)(29, "md-input", 18);
      \u0275\u0275element(30, "input", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 1)(32, "md-input", 20);
      \u0275\u0275element(33, "input", 21);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 1)(35, "md-input", 22);
      \u0275\u0275element(36, "input", 23);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 1)(38, "md-input", 24);
      \u0275\u0275element(39, "input", 25);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 26)(41, "button", 27);
      \u0275\u0275listener("click", function ProjectFormPartialComponent_Template_button_click_41_listener() {
        return ctx.saveProject();
      });
      \u0275\u0275text(42, "Save");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("was-validated", ctx.forceValidation);
      \u0275\u0275property("formGroup", ctx.projectForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("required", true)("compareWith", ctx.compareFn);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("required", false);
      \u0275\u0275control();
    }
  }, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, MdInputModule, MdInputComponent, MdInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectFormPartialComponent, [{
    type: Component,
    args: [{ selector: "cr-project-form", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ReactiveFormsModule, MdInputModule], template: '<form [formGroup]="projectForm" novalidate [class.was-validated]="forceValidation">\r\n  <fieldset>\r\n    <legend>Legend of fields</legend>\r\n    <div class="spaced">\r\n      <md-input placeholder="Name">\r\n        <input type="text" id="name" class="md-input w100" mdinput formControlName="name" [required]="true" />\r\n        <div class="md-help-text" helptext>help text</div>\r\n\r\n      </md-input>\r\n    </div>\r\n    <div class="spaced">\r\n      <md-input placeholder="List">\r\n        <select formControlName="list" mdinput class="md-input w100" [required]="true" [compareWith]="compareFn">\r\n          <option *ngFor="let item of [1,2,3,4]" [ngValue]="item">{{ item }}</option>\r\n        </select>\r\n      </md-input>\r\n    </div>\r\n    <div class="spaced">\r\n      <md-input placeholder="Fieldname">\r\n        <input type="text" id="fieldname" class="md-input w100" mdinput formControlName="fieldname"\r\n          [required]="false" />\r\n      </md-input>\r\n    </div>\r\n\r\n    <div class="spaced">\r\n      <md-input placeholder="Email">\r\n        <input type="email" id="email" class="md-input w100" mdinput mdpattern="email" formControlName="email"\r\n          [required]="false" />\r\n      </md-input>\r\n    </div>\r\n\r\n    <div class="spaced">\r\n      <md-input placeholder="Number">\r\n        <input type="number" id="number" class="md-input w100" mdinput formControlName="number" [required]="false" />\r\n      </md-input>\r\n    </div>\r\n\r\n    <div class="spaced">\r\n      <md-input placeholder="Minimum Length">\r\n        <input type="text" id="minlength" class="md-input w100" mdinput minlength="5" formControlName="minlength"\r\n          [required]="false" />\r\n      </md-input>\r\n    </div>\r\n    <div class="spaced">\r\n      <md-input placeholder="Maximum Length">\r\n        <input type="text" id="maxlength" class="md-input w100" mdinput maxlength="3" formControlName="maxlength"\r\n          [required]="false" />\r\n      </md-input>\r\n    </div>\r\n    <div class="spaced">\r\n      <md-input placeholder="Minimim Value">\r\n        <input type="number" id="minvalue" class="md-input w100" mdinput min="4" formControlName="minvalue"\r\n          [required]="false" />\r\n      </md-input>\r\n    </div>\r\n    <div class="spaced">\r\n      <md-input placeholder="Maximum Value">\r\n        <input type="number" id="maxvalue" class="md-input w100" mdinput max="3" formControlName="maxvalue"\r\n          [required]="false" />\r\n      </md-input>\r\n    </div>\r\n    <div class="spaced">\r\n      <md-input placeholder="Phone">\r\n        <input type="text" id="phone" class="md-input w100" mdinput mdpattern="phone" formControlName="phone"\r\n          [required]="false" />\r\n      </md-input>\r\n    </div>\r\n    <div class="spaced">\r\n      <md-input placeholder="Range">\r\n        <input type="number" id="range" class="md-input w100" mdinput mdtype="range" min="3" max="10"\r\n          formControlName="range" [required]="false" />\r\n      </md-input>\r\n    </div>\r\n\r\n  </fieldset>\r\n\r\n  <div class="breath"><button class="btn-rev" type="submit" (click)="saveProject()">Save</button></div>\r\n</form>\r\n' }]
  }], () => [{ type: UntypedFormBuilder }, { type: Toast }], { mode: [{
    type: Input
  }], onSave: [{
    type: Output
  }], onCancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectFormPartialComponent, { className: "ProjectFormPartialComponent", filePath: "src/app/components/project/form.partial.ts", lineNumber: 16 });
})();

// src/app/models/project.model.ts
var Project = class _Project {
  static NewInstance(project) {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category
    };
  }
  static NewInstances(projects2) {
    return projects2.map(_Project.NewInstance);
  }
  static NewList(dataset) {
    const dl = new DataList();
    dl.mapper = _Project.NewInstance;
    return dl.NewDataList(dataset);
  }
  // prepare to POST
  static PrepCreate(project) {
    return {
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category
    };
  }
  // prepare to PUT
  static PrepSave(project) {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category
    };
  }
};

// src/app/services/project.service.ts
var ProjectService = class _ProjectService {
  _http;
  _listUrl = Config.API.project.list;
  _detailsUrl = Config.API.project.details;
  _createUrl = Config.API.project.create;
  _saveUrl = Config.API.project.save;
  _deleteUrl = Config.API.project.delete;
  constructor(_http) {
    this._http = _http;
  }
  GetProjects(options = {}) {
    const params = GetParamsAsString(ListOptions.MapSearchListOptions(options));
    const _url = this._listUrl.replace(":options", params);
    return this._http.get(_url).pipe(map((response) => {
      return Project.NewList(response);
    }));
  }
  GetProject(id) {
    const _url = this._detailsUrl.replace(":id", id);
    return this._http.get(_url).pipe(map((response) => {
      return Project.NewInstance(response);
    }));
  }
  CreateProject(project) {
    const _url = this._createUrl;
    const data = Project.PrepCreate(project);
    return this._http.post(_url, data).pipe(map((response) => {
      return Project.NewInstance(response);
    }));
  }
  SaveProject(project) {
    const _url = this._saveUrl.replace(":id", project.id);
    const data = Project.PrepSave(project);
    return this._http.put(_url, data).pipe(map((response) => {
      return project;
    }));
  }
  DeleteProject(project) {
    const _url = this._deleteUrl.replace(":id", project.id);
    return this._http.delete(_url).pipe(map((response) => {
      return true;
    }));
  }
  static \u0275fac = function ProjectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/project/create.component.ts
var _c02 = () => ({ forNew: true });
var ProjectCreateComponent = class _ProjectCreateComponent {
  route;
  router;
  toast;
  projectService;
  x$;
  constructor(route, router, toast, projectService) {
    this.route = route;
    this.router = router;
    this.toast = toast;
    this.projectService = projectService;
  }
  ngOnInit() {
    this.x$ = this.route.data.pipe(tap((n) => _attn(n, "route data")));
  }
  create(project) {
    this.projectService.CreateProject(project).pipe(catchError((e) => this.toast.HandleUiError(e, {
      buttons: [{
        text: "LOGIN",
        click: (event) => {
          this.router.navigate(["/login"]);
          this.toast.Hide();
        }
      }]
    }))).subscribe({
      next: (data) => {
        _attn(data?.id, "succeded");
      },
      error: (error) => {
        _attn(error, "error");
        this.toast.Show(error.code);
      }
    });
  }
  static \u0275fac = function ProjectCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectCreateComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Toast), \u0275\u0275directiveInject(ProjectService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectCreateComponent, selectors: [["ng-component"]], decls: 5, vars: 2, consts: [[1, "page"], [1, "container"], [1, "f4", "spaced"], [3, "onSave", "mode"]], template: function ProjectCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Create new project");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "cr-project-form", 3);
      \u0275\u0275listener("onSave", function ProjectCreateComponent_Template_cr_project_form_onSave_4_listener($event) {
        return ctx.create($event);
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("mode", \u0275\u0275pureFunction0(1, _c02));
    }
  }, dependencies: [ProjectFormPartialComponent, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectCreateComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [ProjectFormPartialComponent, CommonModule], template: '<div class="page">\r\n    <div class="container">\r\n        <h4 class="f4 spaced">Create new project</h4>\r\n        <!-- <div *ngIf="x$ | async as x">{{ x | json}}</div> -->\r\n        <cr-project-form [mode]="{forNew: true}" (onSave)="create($event)"></cr-project-form>\r\n    </div>\r\n</div>\r\n' }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: Toast }, { type: ProjectService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectCreateComponent, { className: "ProjectCreateComponent", filePath: "src/app/components/project/create.component.ts", lineNumber: 16 });
})();

// src/app/components/project/edit.component.ts
var ProjectEditComponent = class _ProjectEditComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function ProjectEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectEditComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectEditComponent, selectors: [["ng-component"]], decls: 5, vars: 0, consts: [[1, "page"], [1, "container"], [1, "f4", "spaced"]], template: function ProjectEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Edit project");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(4, " form here ");
      \u0275\u0275domElementEnd()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectEditComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule], template: '<div class="page">\r\n    <div class="container">\r\n        <h4 class="f4 spaced">Edit project</h4>\r\n\r\n        form here\r\n    </div>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectEditComponent, { className: "ProjectEditComponent", filePath: "src/app/components/project/edit.component.ts", lineNumber: 9 });
})();

// src/app/services/seo.project.service.ts
var ProjectSeoService = class _ProjectSeoService extends SeoService {
  setProject(project) {
    this.setTitle(toFormat(Res.Get("SEO_CONTENT")["PRODUCT_TITLE"], project.title, project.category.value));
    this.setUrl();
    this.setDescription(project.description);
    this.setImage(project.image);
    this.updateJsonSnippet({
      "@type": "Article",
      headline: project.title,
      image: project.image,
      datePublished: (/* @__PURE__ */ new Date()).toISOString(),
      author: [{
        "@type": "Organization",
        name: Res.Get("SITE_NAME"),
        url: this.defaultUrl
      }]
    });
    this.updateJsonSnippet({
      "@type": "BreadcrumbList",
      itemListElement: [{
        "@type": "ListItem",
        position: 1,
        name: project.category.value,
        item: this.siteUrl + "projects?categories=" + project.category.key
      }, {
        "@type": "ListItem",
        position: 2,
        name: project.title
      }]
    });
  }
  setSearchResults(params, projects2) {
    this.setTitle(toFormat(Res.Get("SEO_CONTENT")["PROJECT_RESULTS_TITLE"], params.total, params.category.value));
    this.setDescription(toFormat(Res.Get("SEO_CONTENT")["PROJECT_RESULTS_DESC"], params.total, params.category.value));
    this.setUrl(params);
    this.setImage();
    let i = 1;
    const url = this.siteUrl + "projects/";
    this.updateJsonSnippet({
      "@type": "ItemList",
      itemListElement: projects2.map((n) => {
        return {
          "@type": "ListItem",
          url: url + n.id,
          position: i++
        };
      })
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProjectSeoService_BaseFactory;
    return function ProjectSeoService_Factory(__ngFactoryType__) {
      return (\u0275ProjectSeoService_BaseFactory || (\u0275ProjectSeoService_BaseFactory = \u0275\u0275getInheritedFactory(_ProjectSeoService)))(__ngFactoryType__ || _ProjectSeoService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectSeoService, factory: _ProjectSeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectSeoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/project/list.component.ts
var _c03 = () => [1, 2, 3, 4, 5, 6];
var _c1 = () => ({ public: true, page: 1 });
var _c2 = (a0) => ["/products", a0];
var _c3 = () => ({ public: false });
var _c4 = () => ({ public: false, page: 2 });
function ProjectListComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10)(1, "a", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "cr-stars", 12)(4, "img", 13);
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275interpolate1("/projects/", project_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("rating", 4);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(project_r1.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.description);
  }
}
function ProjectListComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "cr-project-card");
    \u0275\u0275elementEnd();
  }
}
var projects = [
  {
    id: "1",
    title: "Turtle Rock",
    description: "A place to build a turtle",
    image: "https://picsum.photos/50/50",
    category: { key: "turtles", value: "Turtles" }
  },
  {
    id: "2",
    title: "Turtle Rock 2",
    description: "A place to build a turtle",
    image: "https://picsum.photos/50/50",
    category: { key: "turtles", value: "Turtles" }
  },
  {
    id: "3",
    title: "Turtle Rock 3",
    description: "A place to build a turtle 4",
    image: "https://picsum.photos/50/50",
    category: { key: "turtles", value: "Turtles" }
  }
];
var ProjectListComponent = class _ProjectListComponent extends GtmComponent {
  seoService;
  storageService;
  projects$;
  seoLink;
  constructor(seoService, storageService) {
    super();
    this.seoService = seoService;
    this.storageService = storageService;
  }
  ngOnInit() {
    this.projects$ = of(projects).pipe(map((projects2) => {
      const results = {
        total: 234,
        page: 1,
        category: { key: "turtles", value: "Turtles" }
      };
      this.seoLink = this.seoService.getNextLink(results);
      this.seoService.setSearchResults(results, projects2);
      GtmTracking.RegisterEvent({
        event: EnumGtmEvent.List,
        source: EnumGtmSource.ProjectsList
      }, GtmTracking.MapProjects(projects2));
      return projects2;
    }));
  }
  next(clickEvent) {
    clickEvent.preventDefault();
  }
  search(value) {
    GtmTracking.RegisterEvent({
      event: EnumGtmEvent.Search,
      source: EnumGtmSource.ProjectsList
    }, GtmTracking.MapSearch(value));
  }
  setOne() {
    GtmTracking.RegisterEvent({
      event: EnumGtmEvent.Filter,
      source: EnumGtmSource.ProjectsList
    }, {
      filter: "one"
    });
    this.storageService.setItem("filter", "one");
  }
  setTwo() {
    GtmTracking.Reset();
    GtmTracking.RegisterEvent({
      event: EnumGtmEvent.Filter,
      source: EnumGtmSource.EmployeesList
    }, {
      filter: null
    });
    this.storageService.setItem("filter2", "another");
  }
  static \u0275fac = function ProjectListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectListComponent)(\u0275\u0275directiveInject(ProjectSeoService), \u0275\u0275directiveInject(StorageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectListComponent, selectors: [["ng-component"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 18, consts: [[1, "page"], [1, "container"], [1, "f5", "spaced"], [1, "a", 3, "click"], [1, "row", "row-gap", "boxed", "umd-3"], ["class", "box-shadow-normal spaced", 4, "ngFor", "ngForOf"], [3, "click", "href"], [1, "rowlist"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "box-shadow-normal", "spaced"], [1, "f3", "a", 3, "routerLink"], [3, "rating"], [3, "src"]], template: function ProjectListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Project list");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275listener("click", function ProjectListComponent_Template_div_click_4_listener() {
        return ctx.setOne();
      });
      \u0275\u0275text(5, "Set filter 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275listener("click", function ProjectListComponent_Template_div_click_6_listener() {
        return ctx.setTwo();
      });
      \u0275\u0275text(7, "Set filter 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul", 4);
      \u0275\u0275template(9, ProjectListComponent_li_9_Template, 7, 7, "li", 5);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "hr");
      \u0275\u0275elementStart(12, "a", 6);
      \u0275\u0275listener("click", function ProjectListComponent_Template_a_click_12_listener($event) {
        return ctx.next($event);
      });
      \u0275\u0275text(13, "Next");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h5", 2);
      \u0275\u0275text(15, "Listed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul", 7);
      \u0275\u0275template(17, ProjectListComponent_li_17_Template, 2, 0, "li", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, " Test links for products ");
      \u0275\u0275elementStart(20, "a", 9);
      \u0275\u0275text(21, "Public");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " | ");
      \u0275\u0275elementStart(23, "a", 9);
      \u0275\u0275text(24, "Private");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " | ");
      \u0275\u0275elementStart(26, "a", 9);
      \u0275\u0275text(27, "Private page 2");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(10, 6, ctx.projects$));
      \u0275\u0275advance(3);
      \u0275\u0275property("href", ctx.seoLink, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c03));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c2, \u0275\u0275pureFunction0(9, _c1)));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c2, \u0275\u0275pureFunction0(12, _c3)));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c2, \u0275\u0275pureFunction0(15, _c4)));
    }
  }, dependencies: [CommonModule, NgForOf, ProjectCardPartialComponent, RouterModule, RouterLink, StarsPartialComponent, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectListComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ProjectCardPartialComponent, RouterModule, StarsPartialComponent], template: `<div class="page">\r
    <div class="container">\r
        <h4 class="f5 spaced">Project list</h4>\r
        <div class="a"  (click)="setOne()" >Set filter 1</div>\r
        <div class="a"  (click)="setTwo()" >Set filter 2</div>\r
\r
        <ul class="row row-gap boxed umd-3">\r
            <li class="box-shadow-normal spaced" *ngFor="let project of projects$ | async">\r
                <a class="f3 a" routerLink="/projects/{{project.id}}">{{ project.title }}</a>\r
            <cr-stars [rating]="4"></cr-stars>\r
\r
                <img src="{{project.image}}" >\r
                <p>{{ project.description }}</p>\r
                <!-- <cr-project-card [mode]="{compact: true}"></cr-project-card> -->\r
            </li>\r
        </ul>\r
        <hr>\r
        <a [href]="seoLink" (click)="next($event)">Next</a>\r
        <h5 class="f5 spaced">Listed</h5>\r
        <ul class="rowlist">\r
            <li *ngFor="let item of [1,2,3,4,5,6]">\r
                <cr-project-card ></cr-project-card>\r
            </li>\r
        </ul>\r
        <p>\r
            Test links for products\r
            <a [routerLink]="['/products', {public: true, page: 1}]">Public</a> |\r
            <a [routerLink]="['/products', {public: false}]">Private</a> |\r
            <a [routerLink]="['/products', {public: false, page: 2}]">Private page 2</a>\r
\r
        </p>\r
\r
    </div>\r
</div>\r
` }]
  }], () => [{ type: ProjectSeoService }, { type: StorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectListComponent, { className: "ProjectListComponent", filePath: "src/app/components/project/list.component.ts", lineNumber: 43 });
})();

// src/app/models/data.model.ts
var EnumDataType;
(function(EnumDataType2) {
  EnumDataType2[EnumDataType2["NotDefined"] = 0] = "NotDefined";
  EnumDataType2[EnumDataType2["Category"] = 1] = "Category";
})(EnumDataType || (EnumDataType = {}));
var DataClass = class _DataClass {
  id;
  value;
  key;
  constructor(id, value, key) {
    this.id = id;
    this.value = value;
    this.key = key;
  }
  static NewInstance(data) {
    if (data === null) {
      return null;
    }
    return {
      id: data.id,
      value: data.value,
      key: data.key
    };
  }
  static NewInstances(data) {
    return data.map((n) => _DataClass.NewInstance(n));
  }
};

// src/app/services/data.service.ts
var DataService = class _DataService {
  _http;
  storageService;
  inAppData = {};
  // local data in app
  cacheUrls = /* @__PURE__ */ new Map();
  constructor(_http, storageService) {
    this._http = _http;
    this.storageService = storageService;
    this.cacheUrls.set(EnumDataType.NotDefined, { url: Config.API.data.notdefined, expiresin: 3 });
    this.cacheUrls.set(EnumDataType.Category, { url: Config.API.data.category });
  }
  GetData(type, id = "0") {
    return this.GetCache(type, id);
  }
  GetCache(type, id = "0") {
    const name = EnumDataType[type];
    const _cachedUrl = this.cacheUrls.get(type);
    const _url = _cachedUrl.url.replace(":id", id);
    const _data = this.storageService.getCache(`${name}.${id}`);
    if (_data) {
      return of(_data).pipe(debug("Cached GetData " + name));
    } else {
      return this._http.get(_url).pipe(map((response) => {
        const _retdata = DataClass.NewInstances(response);
        this.storageService.setCache(`${name}.${id}`, _retdata, _cachedUrl.expiresin);
        return _retdata;
      }));
    }
  }
  // UpdateData(type: EnumDataType, newItem: IData, id: string = '0'): void {
  //     // update localstorage by adding a new value to the existing collection
  //     const name: string = EnumDataType[type];
  //     const _cachedUrl = this.cacheUrls.get(type);
  //     const _url = _cachedUrl.url.replace(':id', id);
  //     const _data: any = this.storageService.getCache(name + '.' + id);
  //     if (_data && _data instanceof Array) {
  //         // add item
  //         _data.push(newItem);
  //         this.storageService.setCache(name + '.' + id, _data, _cachedUrl.expiresin);
  //     }
  //     // else nothing, there is no storag to update
  // }
  GetCategories() {
    return this.GetData(EnumDataType.Category);
  }
  GetSingleDataById(type, id) {
    if (id === null) {
      return null;
    }
    return this.GetData(type).pipe(map((data) => data.find((n) => n.id?.toString() === id.toString())));
  }
  GetSingleDataByKey(type, key) {
    if (key === null) {
      return of(void 0);
    }
    return this.GetData(type).pipe(map((data) => data.find((n) => n.key === key)));
  }
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(StorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: StorageService }], null);
})();

// src/app/components/project/view.component.ts
function ProjectViewComponent_div_0_div_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r1.value, " ");
  }
}
function ProjectViewComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "ul", 12);
    \u0275\u0275template(2, ProjectViewComponent_div_0_div_11_li_2_Template, 2, 1, "li", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cats_r2 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", cats_r2);
  }
}
function ProjectViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span", 3);
    \u0275\u0275text(3, "Breadcrumbs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4", 5);
    \u0275\u0275text(7, "Subline");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "img", 6);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProjectViewComponent_div_0_div_11_Template, 3, 1, "div", 7);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementStart(13, "section")(14, "dl", 8)(15, "dt", 9);
    \u0275\u0275text(16, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dt", 9);
    \u0275\u0275text(20, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd");
    \u0275\u0275text(22, "Data ");
    \u0275\u0275elementStart(23, "span", 10);
    \u0275\u0275text(24, "Done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "dt", 9);
    \u0275\u0275text(26, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dt", 9);
    \u0275\u0275text(30, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd");
    \u0275\u0275text(32, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dt", 9);
    \u0275\u0275text(34, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "dd");
    \u0275\u0275text(36, "Data");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "section")(38, "table", 11)(39, "thead")(40, "tr")(41, "th");
    \u0275\u0275text(42, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "tbody")(46, "tr")(47, "td");
    \u0275\u0275text(48, "dsfsdfdsfs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50, "2.2.4559");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "section")(52, "ul", 12)(53, "li", 13)(54, "div", 14);
    \u0275\u0275element(55, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 16)(57, "h6", 17)(58, "a", 18);
    \u0275\u0275text(59, "Lorem Ipsum");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(60, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit recusandae voluptatibus labore animi voluptas doloremque assumenda, dolor eum. Rerum molestiae eos magnam ea laborum distinctio impedit commodi fugiat cumque vero! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 19);
    \u0275\u0275text(62, " August 2, 2001 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 20)(64, "span", 21);
    \u0275\u0275text(65, "Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "i", 22);
    \u0275\u0275text(67, "right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "li", 13)(69, "div", 14);
    \u0275\u0275element(70, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 16);
    \u0275\u0275text(72, " Lorem ipsum, do ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 24);
    \u0275\u0275text(74, " September 2, 2001 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 20)(76, "span", 21);
    \u0275\u0275text(77, "Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "i", 22);
    \u0275\u0275text(79, "right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "li", 13)(81, "div", 14);
    \u0275\u0275element(82, "img", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 16);
    \u0275\u0275text(84, " corrupti temporibus soluta veritatis vitae perferendis totam eveniet, nemo atque, fugit esse consequatur accusantium delectus nam! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 24);
    \u0275\u0275text(86, " May 2, 2001 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 20)(88, "span", 21);
    \u0275\u0275text(89, "Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "i", 22);
    \u0275\u0275text(91, "right");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(project_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275interpolate(project_r3.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 5, ctx_r3.categories$));
  }
}
var mockProject = {
  title: "Turtle Rock",
  description: "A place to build a turtle",
  image: "https://picsum.photos/200/300",
  id: "56",
  category: {
    value: "Turtles",
    key: "turtles"
  }
};
var ProjectViewComponent = class _ProjectViewComponent {
  route;
  dataService;
  seoService;
  project$;
  categories$;
  constructor(route, dataService, seoService) {
    this.route = route;
    this.dataService = dataService;
    this.seoService = seoService;
  }
  ngOnInit() {
    this.categories$ = this.dataService.GetCategories();
    this.project$ = this.route.paramMap.pipe(switchMap((params) => {
      return of(mockProject);
    }), tap((project) => {
      _seqlog("title");
      this.seoService.setProject(project);
    }));
  }
  static \u0275fac = function ProjectViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ProjectSeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectViewComponent, selectors: [["ng-component"]], decls: 2, vars: 3, consts: [["class", "page", 4, "ngIf"], [1, "page"], [1, "container"], [1, "small"], [1, "f3"], [1, "f6", "light", "spaced"], [3, "src"], [4, "ngIf"], [1, "grid", "g-1", "spacedout"], [1, "light", "weight-light"], [1, "label", "label-green"], [1, "rich", "w100"], [1, "rowlist"], [1, "card"], [1, "c-1", "rspace"], ["src", "https://randomuser.me/api/portraits/men/57.jpg", "alt", "image", 1, "image-cover", "image-circle"], [1, "content", "c-6"], [1, "f6"], [1, "cam"], [1, "lauto", "c-2", "txt"], [1, "tail"], [1, "label", "label-yellow"], [1, "liga", "a"], ["src", "https://randomuser.me/api/portraits/men/2.jpg", "alt", "image", 1, "image-cover", "image-circle"], [1, "lauto", "c-2"], ["src", "https://via.placeholder.com/50", "alt", "image", 1, "image-cover", "image-circle"], [4, "ngFor", "ngForOf"]], template: function ProjectViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProjectViewComponent_div_0_Template, 92, 7, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.project$));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectViewComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule
    ], template: '<div class="page" *ngIf="project$ | async as project">\r\n    <div class="container">\r\n\r\n        <span class="small">Breadcrumbs</span>\r\n        <h3 class="f3 ">{{ project.title }}</h3>\r\n        <h4 class="f6 light spaced">Subline</h4>\r\n        <img src="{{project.image}}" >\r\n        <p>{{ project.description }}</p>\r\n\r\n        <div *ngIf="categories$ | async as cats">\r\n            <ul class="rowlist" >\r\n                <li *ngFor="let cat of cats">\r\n                    {{ cat.value }}\r\n                </li>\r\n            </ul>\r\n         </div>\r\n        <section>\r\n        <dl class="grid g-1 spacedout">\r\n            <dt class="light weight-light">Title</dt>\r\n            <dd>Data</dd>\r\n            <dt class="light weight-light">Title</dt>\r\n            <dd>Data\r\n                <span class="label label-green">Done</span>\r\n            </dd>\r\n            <dt class="light weight-light">Title</dt>\r\n            <dd>Data</dd>\r\n            <dt class="light weight-light">Title</dt>\r\n            <dd>Data</dd>\r\n            <dt class="light weight-light">Title</dt>\r\n            <dd>Data</dd>\r\n\r\n        </dl>\r\n    </section>\r\n\r\n    <section>\r\n        <table class="rich w100">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Date</th>\r\n                </tr>\r\n\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>dsfsdfdsfs</td>\r\n                    <td>2.2.4559</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </section>\r\n\r\n    <section>\r\n        <ul class="rowlist">\r\n            <li class="card">\r\n                <div class="c-1 rspace">\r\n                    <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="image" class="image-cover image-circle">\r\n                </div>\r\n                <div class="content c-6">\r\n                    <h6 class="f6"><a class="cam">Lorem Ipsum</a></h6>\r\n                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit recusandae voluptatibus labore animi voluptas doloremque assumenda, dolor eum. Rerum molestiae eos magnam ea laborum distinctio impedit commodi fugiat cumque vero!\r\n                </div>\r\n                <div class="lauto c-2 txt">\r\n                    August 2, 2001\r\n                </div>\r\n                <div class="tail">\r\n                    <span class="label label-yellow">Warning</span>\r\n                    <i class="liga a">right</i>\r\n                </div>\r\n            </li>\r\n            <li class="card">\r\n                <div class="c-1 rspace">\r\n                    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="image" class="image-cover image-circle ">\r\n                </div>\r\n                <div class="content c-6">\r\n                    Lorem ipsum, do\r\n                </div>\r\n                <div class="lauto c-2">\r\n                   September 2, 2001\r\n                </div>\r\n                <div class="tail">\r\n                    <span class="label label-yellow">Warning</span>\r\n                    <i class="liga a">right</i>\r\n                </div>\r\n            </li>\r\n            <li class="card">\r\n                <div class="c-1 rspace">\r\n                    <img src="https://via.placeholder.com/50" alt="image" class="image-cover image-circle ">\r\n                </div>\r\n                <div class="content c-6">\r\n                    corrupti temporibus soluta veritatis vitae perferendis totam eveniet, nemo atque, fugit esse consequatur accusantium delectus nam!\r\n                </div>\r\n                <div class="lauto c-2">\r\n                   May 2, 2001\r\n                </div>\r\n                <div class="tail">\r\n                    <span class="label label-yellow">Warning</span>\r\n                    <i class="liga a">right</i>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n\r\n    </div>\r\n</div>\r\n' }]
  }], () => [{ type: ActivatedRoute }, { type: DataService }, { type: ProjectSeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectViewComponent, { className: "ProjectViewComponent", filePath: "src/app/components/project/view.component.ts", lineNumber: 27 });
})();

// src/app/services/project.resolve.ts
var ProjectResolve = class _ProjectResolve {
  router;
  localStorage;
  configService;
  constructor(router, localStorage, configService) {
    this.router = router;
    this.localStorage = localStorage;
    this.configService = configService;
  }
  resolve(route, state) {
    _seqlog("resolve");
    _attn(ConfigService.Config.Storage.Key, "in resolve");
    _attn(this.localStorage.getCache("MyAyyash"));
    return this.configService.config$.pipe(
      // in Angular 14, first, or filter is good enouogh, supposidly, check
      first((n) => n.isServed),
      map((n) => {
        this.localStorage.setCache("MyAyyash", "here is a cache value");
        _attn(ConfigService.Config.Storage.Key, "after resolve");
        _attn(n.isServed, "served");
        return true;
      })
    );
  }
  static \u0275fac = function ProjectResolve_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectResolve)(\u0275\u0275inject(Router), \u0275\u0275inject(StorageService), \u0275\u0275inject(ConfigService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectResolve, factory: _ProjectResolve.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectResolve, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }, { type: StorageService }, { type: ConfigService }], null);
})();

// src/app/routes/project.route.ts
var ProjectRoutes = [
  {
    path: "",
    component: ProjectListComponent,
    title: "LIST_PROJECTS",
    providers: [
      provideEnvironmentInitializer(() => {
        _seqlog("PublicRoutes");
        _attn("this is nothing", "list of projects");
      })
      // {
      //   provide: ENVIRONMENT_INITIALIZER,
      //   multi: true,
      //   useValue() {
      //     // same effect everywhere
      //     _seqlog('PublicRoutes');
      //     _attn('this is nothing', 'list of projects');
      //   },
      // }
    ]
  },
  {
    path: "create",
    component: ProjectCreateComponent,
    title: "CREATE_PROJECT",
    resolve: {
      ready: ProjectResolve
    },
    providers: [
      provideEnvironmentInitializer(() => {
        _seqlog("PublicRoutes");
        _attn("this is nothing", "list of projects");
      })
      // {
      //   provide: ENVIRONMENT_INITIALIZER,
      //   multi: true,
      //   useValue() {
      //     _seqlog('PublicRoutes');
      //   },
      // },
    ]
  },
  {
    path: "edit/:id",
    component: ProjectEditComponent
  },
  {
    path: ":id",
    component: ProjectViewComponent
  }
  // **gulproute**
];
export {
  ProjectRoutes
};
