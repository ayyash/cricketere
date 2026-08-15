import {
  GtmDirective
} from "./chunk-GEH3AZZM.js";
import {
  MdInputComponent,
  MdInputDirective,
  MdInputModule,
  ProjectCardPartialComponent,
  StorageService
} from "./chunk-KNTT4UGG.js";
import {
  GtmComponent,
  SeoService
} from "./chunk-7FZGD3QU.js";
import {
  DefaultValueAccessor,
  EnumTimeout,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Toast,
  UntypedFormBuilder,
  ɵNgNoValidate
} from "./chunk-PLN5PMDE.js";
import "./chunk-TXKUFVJ3.js";
import {
  TranslatePipe
} from "./chunk-OJLBER6U.js";
import "./chunk-BGPWDD7S.js";
import {
  ConfigService
} from "./chunk-DM5NKHPI.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Config,
  Directive,
  EventEmitter,
  HttpClient,
  Inject,
  Injectable,
  Input,
  Output,
  PLATFORM_ID,
  Res,
  Router,
  RouterLink,
  RouterModule,
  TemplateRef,
  ViewContainerRef,
  __spreadProps,
  __spreadValues,
  catchError,
  isPlatformServer,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTWRFS6N.js";

// src/app/components/public/forgot.component.ts
var PublicForgotComponent = class _PublicForgotComponent {
  fb;
  router;
  toast;
  // Add types
  mode = { forNew: true };
  onSave = new EventEmitter();
  onCancel = new EventEmitter();
  forceValidation = false;
  forgotForm;
  constructor(fb, router, toast) {
    this.fb = fb;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: []
    });
  }
  submit() {
    this.forceValidation = false;
    this.toast.Hide();
    if (this.forgotForm.valid) {
    } else {
      this.forceValidation = true;
      this.toast.Show("INVALID_FORM", { timeout: EnumTimeout.Never, extracss: "error" });
    }
  }
  static \u0275fac = function PublicForgotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicForgotComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Toast));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicForgotComponent, selectors: [["ng-component"]], inputs: { mode: "mode" }, outputs: { onSave: "onSave", onCancel: "onCancel" }, decls: 13, vars: 17, consts: [["novalidate", "", 3, "submit", "formGroup"], [1, "f4", "spaced"], [1, "breath"], [3, "placeholder"], ["type", "email", "mdinput", "", "mdpattern", "email", "id", "email", "formControlName", "email", 1, "md-input", "w100", 3, "required"], [1, "spaced"], ["type", "submit", 1, "btn-rev"]], template: function PublicForgotComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("submit", function PublicForgotComponent_Template_form_submit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "h5", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "md-input", 3);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(12, "cr-project-card");
    }
    if (rf & 2) {
      \u0275\u0275classProp("was-validated", ctx.forceValidation);
      \u0275\u0275property("formGroup", ctx.forgotForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, "Request a new password", "ForgotTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind2(6, 11, "Your email", "YourEmail")));
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 14, "Remind me", "RemindMe"));
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, MdInputModule, MdInputComponent, MdInputDirective, ProjectCardPartialComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicForgotComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, TranslatePipe, ReactiveFormsModule, MdInputModule, ProjectCardPartialComponent], template: `<form [formGroup]="forgotForm" (submit)="submit()" novalidate [class.was-validated]="forceValidation">\r
\r
        <h5 class="f4 spaced">{{'Request a new password' | translate:'ForgotTitle'}}</h5>\r
        <div class="breath">\r
            <md-input placeholder="{{'Your email' | translate:'YourEmail'}}">\r
                <input type="email" class="md-input w100" mdinput mdpattern="email" id="email" formControlName="email"\r
                    [required]="true" />\r
            </md-input>\r
        </div>\r
\r
\r
        <div class="spaced">\r
            <button type="submit" class="btn-rev">{{ "Remind me" | translate:'RemindMe'}}</button>\r
        </div>\r
\r
</form>\r
\r
<cr-project-card></cr-project-card>\r
` }]
  }], () => [{ type: UntypedFormBuilder }, { type: Router }, { type: Toast }], { mode: [{
    type: Input
  }], onSave: [{
    type: Output
  }], onCancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicForgotComponent, { className: "PublicForgotComponent", filePath: "src/app/components/public/forgot.component.ts", lineNumber: 18 });
})();

// src/app/lib/directives/render.directive.ts
var AppShellRenderDirective = class _AppShellRenderDirective {
  viewContainer;
  templateRef;
  platformId;
  shServerRender;
  constructor(viewContainer, templateRef, platformId) {
    this.viewContainer = viewContainer;
    this.templateRef = templateRef;
    this.platformId = platformId;
  }
  ngOnInit() {
    if (isPlatformServer(this.platformId) === this.shServerRender) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  static \u0275fac = function AppShellRenderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppShellRenderDirective)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AppShellRenderDirective, selectors: [["", "shServerRender", ""]], inputs: { shServerRender: "shServerRender" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppShellRenderDirective, [{
    type: Directive,
    args: [{
      selector: "[shServerRender]"
    }]
  }], () => [{ type: ViewContainerRef }, { type: TemplateRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { shServerRender: [{
    type: Input
  }] });
})();

// src/app/services/seo.home.service.ts
var HomeSeoService = class _HomeSeoService extends SeoService {
  setHome() {
    this.updateJsonSnippet({
      "@type": "Organization",
      url: this.defaultUrl,
      logo: Config.Seo.logoUrl,
      name: Res.Get("SITE_NAME")
    });
    this.updateJsonSnippet({
      "@type": "Website",
      url: this.defaultUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: this.defaultUrl + "?q={search_term}"
        },
        "query-input": "required name=search_term"
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275HomeSeoService_BaseFactory;
    return function HomeSeoService_Factory(__ngFactoryType__) {
      return (\u0275HomeSeoService_BaseFactory || (\u0275HomeSeoService_BaseFactory = \u0275\u0275getInheritedFactory(_HomeSeoService)))(__ngFactoryType__ || _HomeSeoService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeSeoService, factory: _HomeSeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeSeoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/public/home.component.ts
var _c0 = (a0, a1) => ({ source: a0, group: a1 });
var _c1 = () => ({ p: "1" });
var _c2 = (a0) => ["/content/details", a0];
function PublicHomeComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "for server");
    \u0275\u0275elementEnd();
  }
}
function PublicHomeComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "for client");
    \u0275\u0275elementEnd();
  }
}
var PublicHomeComponent = class _PublicHomeComponent extends GtmComponent {
  seoService;
  toast;
  welcomeText = Res.Get("WELCOME_TEXT");
  x$;
  constructor(seoService, toast) {
    super();
    this.seoService = seoService;
    this.toast = toast;
  }
  ngOnInit() {
    _attn(ConfigService.Config.isServed, "served");
    this.seoService.setHome();
    this.x$ = of(NaN);
  }
  showToast1() {
    this.toast.ShowSuccess("INVALID_VALUE", { timeout: 1e3 });
  }
  showToast2() {
    this.toast.ShowError("SomeCode", { timeout: 5e3 });
  }
  showToast3() {
    this.toast.ShowWarning("SomeCode", {
      text: "Some <strong>fallback</strong> message here",
      clickable: (e) => {
        _attn(e, "clicked");
      }
    });
  }
  showToast4() {
    this.toast.Show("SomeCode", { text: Res.Get("INVALID_VALUE"), timeout: EnumTimeout.Never });
  }
  static \u0275fac = function PublicHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicHomeComponent)(\u0275\u0275directiveInject(HomeSeoService), \u0275\u0275directiveInject(Toast));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicHomeComponent, selectors: [["ng-component"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 17, consts: [[1, "f2", "txt-c"], [1, "spaced"], [1, "btn", 3, "click"], [1, "txt-c"], ["routerLink", "/login", 1, "btn-rev", 3, "shGtm"], [3, "routerLink"], [4, "shServerRender"]], template: function PublicHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reprehenderit impedit vero quaerat? Optio aspernatur sed corporis officia cupiditate dolores provident minus quidem atque, magnam id fugit tempore cum labore!\n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "hr", 1);
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function PublicHomeComponent_Template_button_click_6_listener() {
        return ctx.showToast1();
      });
      \u0275\u0275text(7, "Show toast of exact code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "br");
      \u0275\u0275elementStart(9, "button", 2);
      \u0275\u0275listener("click", function PublicHomeComponent_Template_button_click_9_listener() {
        return ctx.showToast2();
      });
      \u0275\u0275text(10, "Show toast of no code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "br");
      \u0275\u0275elementStart(12, "button", 2);
      \u0275\u0275listener("click", function PublicHomeComponent_Template_button_click_12_listener() {
        return ctx.showToast3();
      });
      \u0275\u0275text(13, " Show toast with fallback message\n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "br");
      \u0275\u0275elementStart(15, "button", 2);
      \u0275\u0275listener("click", function PublicHomeComponent_Template_button_click_15_listener() {
        return ctx.showToast4();
      });
      \u0275\u0275text(16, " Show toast with key provided message\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 3)(21, "button", 4);
      \u0275\u0275text(22, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 5);
      \u0275\u0275text(24, "Details content");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, PublicHomeComponent_div_25_Template, 2, 0, "div", 6)(26, PublicHomeComponent_div_26_Template, 2, 0, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 6, "Hello cricketers", "WELCOME_TEXT"));
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 9, ctx.x$));
      \u0275\u0275advance(3);
      \u0275\u0275property("shGtm", \u0275\u0275pureFunction2(11, _c0, ctx.enumGtmSource.Homepage, ctx.enumGtmGroup.Login));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c2, \u0275\u0275pureFunction0(14, _c1)));
      \u0275\u0275advance(2);
      \u0275\u0275property("shServerRender", true);
      \u0275\u0275advance();
      \u0275\u0275property("shServerRender", false);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, GtmDirective, AppShellRenderDirective, AsyncPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicHomeComponent, [{
    type: Component,
    args: [{ imports: [CommonModule, TranslatePipe, RouterModule, GtmDirective, AppShellRenderDirective], template: `<h2 class="f2 txt-c"> {{ 'Hello cricketers' | translate:'WELCOME_TEXT' }}</h2>\r
\r
<p>\r
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reprehenderit impedit vero quaerat? Optio aspernatur sed\r
  corporis officia cupiditate dolores provident minus quidem atque, magnam id fugit tempore cum labore!\r
</p>\r
<hr class="spaced" />\r
<button class="btn" (click)="showToast1()">Show toast of exact code</button>\r
<br />\r
<button class="btn" (click)="showToast2()">Show toast of no code</button>\r
<br />\r
<button class="btn" (click)="showToast3()">\r
  Show toast with fallback message\r
</button>\r
<br />\r
<button class="btn" (click)="showToast4()">\r
  Show toast with key provided message\r
</button>\r
<div>{{ x$ | async}}</div>\r
<div class="txt-c">\r
\r
  <button class="btn-rev" routerLink="/login"\r
    [shGtm]="{source: enumGtmSource.Homepage,group: enumGtmGroup.Login}">Login</button>\r
</div>\r
\r
<a [routerLink]="['/content/details', {p: '1'}]">Details content</a>\r
\r
<div *shServerRender="true">for server</div>\r
<div *shServerRender="false">for client</div>\r
` }]
  }], () => [{ type: HomeSeoService }, { type: Toast }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicHomeComponent, { className: "PublicHomeComponent", filePath: "src/app/components/public/home.component.ts", lineNumber: 18 });
})();

// src/app/models/user.model.ts
var User = class _User {
  id;
  email;
  firstName;
  lastName;
  imageUrl;
  constructor(id, email, firstName, lastName, imageUrl) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
  }
  static NewInstance(user) {
    return new _User(user.id, user.email, user.firstName, user.lastName, user.imageUrl);
  }
  static PrepCreate(user, password) {
    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password,
      imageUrl: user.imageUrl
    };
  }
  static PrepSave(user) {
    return {
      // name: user.name,
      firstName: user.firstName,
      lastName: user.lastName
    };
  }
  static PrepSavePhoto(imageUrl) {
    return {
      imageUrl
    };
  }
  static PrepSavePassword(current, password) {
    return {
      // name: user.name,
      currentPassword: current,
      password
    };
  }
  static PrepRegister(user) {
    return {
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email
    };
  }
};

// src/app/models/authinfo.model.ts
var EnumRole;
(function(EnumRole2) {
  EnumRole2["Admin"] = "admin";
  EnumRole2["Manager"] = "manager";
  EnumRole2["User"] = "user";
  EnumRole2["Default"] = "none";
})(EnumRole || (EnumRole = {}));
var AuthInfo = class _AuthInfo {
  profile;
  accessToken;
  expiresAt;
  roles;
  constructor(profile, accessToken, expiresAt, roles) {
    this.profile = profile;
    this.accessToken = accessToken;
    this.expiresAt = expiresAt;
    this.roles = roles;
  }
  static NewInstance(auth) {
    const _expiresat = Date.now() + auth.expiresIn * 1e3;
    return new _AuthInfo(User.NewInstance(auth), auth.accessToken, _expiresat);
  }
  // get access token on login
  static PrepAccessToken(username, password) {
    return {
      email: username,
      // this is an email
      password
    };
  }
  static PrepReset(user, password, token) {
    return {
      id: user.id,
      reset_token: token,
      password,
      email: user.email
    };
  }
  static PrepSave(password, oldpassword) {
    return {
      newpassword: password,
      oldpassword
    };
  }
  static PrepForgot(email) {
    return {
      email
    };
  }
};

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  localStorage;
  _loginUrl = Config.API.auth.login;
  _resetUrl = Config.API.auth.reset;
  _passwordUrl = Config.API.auth.password;
  _forgotUrl = Config.API.auth.forgot;
  _registerUrl = Config.API.auth.register;
  profileSubject = new BehaviorSubject(null);
  profile$ = this.profileSubject.asObservable();
  get redirectUrl() {
    return this.localStorage.getCache("redirectUrl");
  }
  set redirectUrl(value) {
    this.localStorage.setCache("redirectUrl", value);
  }
  constructor(http, localStorage) {
    this.http = http;
    this.localStorage = localStorage;
    _seqlog("auth service");
    const _localuser = this.localStorage.getItem(ConfigService.Config.Auth.userAccessKey);
    if (this.checkProfile(_localuser)) {
      this.profileSubject.next(_localuser);
    } else {
      this.profileSubject.next(null);
    }
  }
  checkProfile(profile) {
    if (!profile || !profile.accessToken || !profile.expiresAt) {
      return false;
    }
    if (Date.now() > profile.expiresAt) {
      return false;
    }
    return true;
  }
  saveSession(resUser) {
    if (resUser.accessToken) {
      this.localStorage.setItem(ConfigService.Config.Auth.userAccessKey, resUser);
    } else {
      this.localStorage.removeItem(ConfigService.Config.Auth.userAccessKey);
    }
  }
  GetToken() {
    const _profile = this.profileSubject.getValue();
    const _checkProfile = this.checkProfile(_profile);
    return _checkProfile ? _profile.accessToken : null;
  }
  logout() {
    this.profileSubject.next(null);
    this.localStorage.removeItem(Config.Auth.userAccessKey);
  }
  Login(username, password) {
    const data = AuthInfo.PrepAccessToken(username, password);
    _debug(data, "Login data");
    return this.http.post(this._loginUrl, data).pipe(map((response) => {
      const resUser = AuthInfo.NewInstance(response);
      if (!resUser.accessToken) {
        return null;
      }
      this.saveSession(resUser);
      this.profileSubject.next(resUser);
      return resUser;
    }));
  }
  RegisterAccount(user) {
    const data = User.PrepRegister(user);
    _debug(data, "Register data");
    return this.http.post(this._registerUrl, data).pipe(map((response) => {
      return true;
    }));
  }
  Reset(user, password, token) {
    const data = AuthInfo.PrepReset(user, password, token);
    _debug(data, "Reset data");
    return this.http.post(this._resetUrl, data).pipe(map((response) => {
      const resUser = AuthInfo.NewInstance(response);
      if (!resUser.accessToken) {
        return null;
      }
      this.saveSession(resUser);
      this.profileSubject.next(resUser);
      return resUser;
    }));
  }
  ForgotPassword(email) {
    const data = AuthInfo.PrepForgot(email);
    _debug(data, "ForgotPassword data");
    return this.http.post(this._forgotUrl, data).pipe(map((response) => {
      return true;
    }));
  }
  SavePassword(profile, password, oldpassword) {
    const data = AuthInfo.PrepSave(password, oldpassword);
    _debug(data, "SeavePassword data");
    return this.http.post(this._passwordUrl, data).pipe(map((response) => {
      const resUser = AuthInfo.NewInstance(response);
      if (!resUser.accessToken) {
        return null;
      }
      const newUser = __spreadProps(__spreadValues({}, profile), { accessToken: resUser.accessToken, expiresAt: resUser.expiresAt });
      this.saveSession(newUser);
      this.profileSubject.next(newUser);
      return true;
    }));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(StorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: StorageService }], null);
})();

// src/app/components/public/login.component.ts
var PublicLoginComponent = class _PublicLoginComponent {
  toast;
  router;
  fb;
  authService;
  loginForm;
  forceValidation;
  constructor(toast, router, fb, authService) {
    this.toast = toast;
    this.router = router;
    this.fb = fb;
    this.authService = authService;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [],
      password: []
    });
  }
  login() {
    this.forceValidation = false;
    this.toast.Hide();
    if (this.loginForm.valid) {
      const _user = this.loginForm.value;
      this.authService.Login(_user.username, _user.password).pipe(catchError((e) => {
        return this.toast.HandleUiError(e, {
          timeout: EnumTimeout.Never,
          buttons: [
            {
              text: "Login",
              css: "btn-fake",
              click: (event) => {
                this.router.navigateByUrl(this.authService.redirectUrl || Config.Basic.defaultRoute);
                this.toast.Hide();
              }
            },
            this.toast.dismissButton
          ]
        });
      })).subscribe({
        next: (result) => {
          if (result) {
            this.router.navigateByUrl(this.authService.redirectUrl || Config.Basic.defaultRoute);
          }
        }
        // error: error => this.toast.HandleUiError(error)
      });
    } else {
      this.forceValidation = true;
    }
  }
  static \u0275fac = function PublicLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicLoginComponent)(\u0275\u0275directiveInject(Toast), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLoginComponent, selectors: [["ng-component"]], decls: 41, vars: 45, consts: [[1, "spaced"], [1, "btn-social", "btn-cam", "w100", "halfspaced"], ["src", "assets/images/iGoogle.svg", "alt", "Google"], ["src", "assets/images/iMS.svg", "alt", "Microsoft"], ["src", "assets/images/iFacebook.svg", "alt", "Facebook"], ["src", "assets/images/iTwitter.svg", "alt", "Twitter"], [1, "txt-c", "small", "light", "spaced"], ["novalidate", "", 3, "submit", "formGroup"], [3, "placeholder", "static"], ["type", "email", "mdpattern", "email", "id", "username", "autocomplete", "", "mdinput", "", "formControlName", "username", 1, "md-input", "w100", 3, "required"], ["type", "password", "id", "password", "name", "current-password", "autofocus", "", "autocomplete", "current-password", "mdinput", "", "formControlName", "password", 1, "md-input", "w100", 3, "required"], ["type", "submit", 1, "btn-rev", "w100"], [1, "spaced", "bthin"], [1, "spaced", "row-spaced"], ["routerLink", "/forgot"]], template: function PublicLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 1);
      \u0275\u0275element(6, "img", 3);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 1);
      \u0275\u0275element(10, "img", 4);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 1);
      \u0275\u0275element(14, "img", 5);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 6);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "form", 7);
      \u0275\u0275listener("submit", function PublicLoginComponent_Template_form_submit_20_listener() {
        return ctx.login();
      });
      \u0275\u0275elementStart(21, "div", 0)(22, "md-input", 8);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275element(24, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 0)(26, "md-input", 8);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275element(28, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "div", 0);
      \u0275\u0275elementStart(30, "div", 0)(31, "button", 11);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(34, "div", 12);
      \u0275\u0275elementStart(35, "div", 13)(36, "a", 14);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a");
      \u0275\u0275text(40, "Sign up for an account");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 18, "Sign in with Google", "SinginGoogle"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 21, "Sign in with Microsoft", "SinginMicrosoft"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 24, "Sign in with Facebook", "SinginFacebook"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 27, "Sign in with Twitter", "SinginTwitter"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 30, "OR", "OR"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("was-validated", ctx.forceValidation);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind2(23, 33, "Email", "Email")))("static", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind2(27, 36, "Password", "Password")))("static", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 39, "Sign in", "SignIn"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 42, "Forgot password?", "ForgotPassword"));
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, MdInputModule, MdInputComponent, MdInputDirective, RouterModule, RouterLink, TranslatePipe], styles: [".btn-social[_ngcontent-%COMP%]{position:relative}.btn-social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset-inline-start:1.6rem;top:1.2rem;width:18px}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicLoginComponent, [{
    type: Component,
    args: [{ changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, MdInputModule, RouterModule], template: `\r
<div class="spaced">\r
\r
    <!-- TODO: create icons for reach  -->\r
\r
    <button class="btn-social btn-cam w100 halfspaced">\r
        <img src="assets/images/iGoogle.svg" alt="Google">\r
        {{'Sign in with Google' | translate:'SinginGoogle'}}</button>\r
    <button class="btn-social btn-cam w100 halfspaced">\r
        <img src="assets/images/iMS.svg" alt="Microsoft">\r
        {{'Sign in with Microsoft' | translate:'SinginMicrosoft'}}</button>\r
    <button class="btn-social btn-cam w100 halfspaced">\r
        <img src="assets/images/iFacebook.svg" alt="Facebook">\r
        {{'Sign in with Facebook' | translate:'SinginFacebook'}}</button>\r
    <button class="btn-social btn-cam w100 halfspaced">\r
        <img src="assets/images/iTwitter.svg" alt="Twitter">\r
        {{'Sign in with Twitter' | translate:'SinginTwitter'}}</button>\r
</div>\r
\r
<div class="txt-c small light spaced">{{'OR' | translate:'OR'}}</div>\r
\r
<form [formGroup]="loginForm" (submit)="login()" novalidate [class.was-validated]="forceValidation">\r
\r
    <div class="spaced">\r
        <md-input placeholder="{{'Email' | translate:'Email'}}" [static]="true">\r
\r
            <input type="email" mdpattern="email" id="username" autocomplete class="md-input w100" mdinput formControlName="username"\r
                [required]="true" />\r
        </md-input>\r
\r
    </div>\r
    <div class="spaced">\r
        <md-input placeholder="{{'Password' | translate:'Password'}}" [static]="true">\r
\r
            <input type="password" id="password" name="current-password" autofocus autocomplete="current-password"\r
                class="md-input w100" mdinput [required]="true" formControlName="password" />\r
        </md-input>\r
    </div>\r
    <div class="spaced">\r
        <!-- keep for errors  -->\r
\r
    </div>\r
\r
    <div class="spaced">\r
\r
        <button type="submit" class="btn-rev w100">{{'Sign in' | translate:'SignIn'}}</button>\r
    </div>\r
\r
\r
</form>\r
\r
\r
\r
<div class="spaced bthin"></div>\r
<div class="spaced row-spaced">\r
    <a routerLink="/forgot">{{'Forgot password?' | translate:'ForgotPassword'}}</a>\r
    <a>Sign up for an account</a>\r
</div>\r
`, styles: [".btn-social{position:relative}.btn-social img{position:absolute;inset-inline-start:1.6rem;top:1.2rem;width:18px}\n"] }]
  }], () => [{ type: Toast }, { type: Router }, { type: UntypedFormBuilder }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLoginComponent, { className: "PublicLoginComponent", filePath: "src/app/components/public/login.component.ts", lineNumber: 19 });
})();

// src/app/routes/public.route.ts
var PublicRoutes = [
  {
    path: "",
    component: PublicHomeComponent,
    title: "SITE_NAME"
  },
  {
    path: "login",
    component: PublicLoginComponent,
    title: "LOGIN"
  },
  {
    path: "forgot",
    component: PublicForgotComponent
  }
  // **gulproute**
];
export {
  PublicRoutes
};
