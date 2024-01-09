"use strict";(self.webpackChunkcricketereweb=self.webpackChunkcricketereweb||[]).push([[506],{8506:(R,h,s)=>{s.r(h),s.d(h,{PublicRoutes:()=>V});var t=s(9212),a=s(95),l=s(6814),m=s(8883),g=s(2645),A=s(3926),c=s(4418),w=s(5619),f=s(7915),v=s(2096),u=s(5304);let L=(()=>{class i{toast=new w.X(null);toast$=this.toast.asObservable();isCancled;options={text:u.LV.Get("Error"),sticky:!1,css:"toast",closetext:u.LV.Get("Dismiss"),delay:5e3,threshold:3e4,extracss:"",buttons:[],isHiding:!1};Show(o,e,n){this.Hide();const r={...this.options,...e};r.text=u.LV.Get(o,n),this.toast.next(r);const U=r.sticky?r.threshold:r.delay;U&&(this.isCancled=(0,f.H)(U).subscribe(()=>{this.toast.next({...r,isHiding:!0}),(0,f.H)(200).subscribe(()=>{this.Hide()})}))}Hide(){this.isCancled&&this.isCancled.unsubscribe(),this.toast.next(null)}HandleUiError(o){if(o){if(!o.code)throw Error(o);this.Show(o.code,{sticky:!0,extracss:"error"},o.uiMessage)}}HandleCatchError(o,e){return 404===o.status&&e&&(o.code=e+"_NOT_FOUND"),400===o.status&&e&&(o.code=e+"_ERROR"),this.HandleUiError(o),(0,v.of)(null)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var b=s(9896),Z=s(347);let C=(()=>{class i{fb;router;toast;mode={forNew:!0};onSave=new t.vpe;onCancel=new t.vpe;forceValidation=!1;forgotForm;constructor(o,e,n){this.fb=o,this.router=e,this.toast=n}ngOnInit(){this.forgotForm=this.fb.group({email:[]})}submit(){this.forceValidation=!1,this.toast.Hide(),this.forgotForm.valid||(this.forceValidation=!0,this.toast.Show("INVALID_FORM",{sticky:!1,extracss:"error"}))}static \u0275fac=function(e){return new(e||i)(t.Y36(a.QS),t.Y36(c.F0),t.Y36(L))};static \u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],inputs:{mode:"mode"},outputs:{onSave:"onSave",onCancel:"onCancel"},standalone:!0,features:[t.jDz],decls:13,vars:16,consts:[["novalidate","",3,"formGroup","submit"],[1,"f4","spaced"],[1,"breath"],[3,"placeholder"],["type","email","mdinput","","mdpattern","email","id","email","formControlName","email",1,"md-input","w100",3,"required"],[1,"spaced"],["type","submit",1,"btn-rev"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("submit",function(){return n.submit()}),t.TgZ(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",2)(5,"md-input",3),t.ALo(6,"translate"),t._UZ(7,"input",4),t.qZA()(),t.TgZ(8,"div",5)(9,"button",6),t._uU(10),t.ALo(11,"translate"),t.qZA()()(),t._UZ(12,"cr-project-card")),2&e&&(t.ekj("was-validated",n.forceValidation),t.Q6J("formGroup",n.forgotForm),t.xp6(2),t.Oqu(t.xi3(3,7,"Request a new password","ForgotTitle")),t.xp6(3),t.s9C("placeholder",t.xi3(6,10,"Your email","YourEmail")),t.xp6(2),t.Q6J("required",!0),t.xp6(3),t.Oqu(t.xi3(11,13,"Remind me","RemindMe")))},dependencies:[l.ez,m.X,a.UX,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.sg,a.u,g.Y,b.H,Z.I,A.o],encapsulation:2,changeDetection:0})}return i})();var d=s(6741),F=s(878),H=s(1533),T=s(7766),y=s(6731),x=s(931);function E(i,p){1&i&&(t.TgZ(0,"div"),t._uU(1,"for server"),t.qZA())}function O(i,p){1&i&&(t.TgZ(0,"div"),t._uU(1,"for client"),t.qZA())}const J=(i,p)=>({source:i,group:p}),P=()=>({p:"1"}),N=i=>["/content/details",i];let q=(()=>{class i extends y.R{seoService;toast;welcomeText=u.LV.Get("WELCOME_TEXT");x$;constructor(o,e){super(),this.seoService=o,this.toast=e}ngOnInit(){_attn(d.E4.Config.isServed,"served"),this.seoService.setHome(),this.x$=(0,v.of)(NaN)}showToast1(){this.toast.ShowSuccess("INVALID_VALUE",{timeout:1e3})}showToast2(){this.toast.ShowError("SomeCode",{timeout:5e3})}showToast3(){this.toast.ShowWarning("SomeCode",{text:"Some <strong>fallback</strong> message here",clickable:o=>{_attn(o,"clicked")}})}showToast4(){this.toast.Show("SomeCode",{text:u.LV.Get("INVALID_VALUE"),timeout:T.m.Never})}static \u0275fac=function(e){return new(e||i)(t.Y36(d.E5),t.Y36(x.F))};static \u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[t.qOj,t.jDz],decls:27,vars:17,consts:[[1,"f2","txt-c"],[1,"spaced"],[1,"btn",3,"click"],[1,"txt-c"],["routerLink","/login",1,"btn-rev",3,"shGtm"],[3,"routerLink"],[4,"shServerRender"]],template:function(e,n){1&e&&(t.TgZ(0,"h2",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"p"),t._uU(4," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reprehenderit impedit vero quaerat? Optio aspernatur sed corporis officia cupiditate dolores provident minus quidem atque, magnam id fugit tempore cum labore! "),t.qZA(),t._UZ(5,"hr",1),t.TgZ(6,"button",2),t.NdJ("click",function(){return n.showToast1()}),t._uU(7,"Show toast of exact code"),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"button",2),t.NdJ("click",function(){return n.showToast2()}),t._uU(10,"Show toast of no code"),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"button",2),t.NdJ("click",function(){return n.showToast3()}),t._uU(13," Show toast with fallback message "),t.qZA(),t._UZ(14,"br"),t.TgZ(15,"button",2),t.NdJ("click",function(){return n.showToast4()}),t._uU(16," Show toast with key provided message "),t.qZA(),t.TgZ(17,"div"),t._uU(18),t.ALo(19,"async"),t.qZA(),t.TgZ(20,"div",3)(21,"button",4),t._uU(22,"Login"),t.qZA()(),t.TgZ(23,"a",5),t._uU(24,"Details content"),t.qZA(),t.YNc(25,E,2,0,"div",6)(26,O,2,0,"div",6)),2&e&&(t.xp6(1),t.hij(" ",t.xi3(2,6,"Hello cricketers","WELCOME_TEXT"),""),t.xp6(17),t.Oqu(t.lcZ(19,9,n.x$)),t.xp6(3),t.Q6J("shGtm",t.WLB(11,J,n.enumGtmSource.Homepage,n.enumGtmGroup.Login)),t.xp6(2),t.Q6J("routerLink",t.VKq(15,N,t.DdM(14,P))),t.xp6(2),t.Q6J("shServerRender",!0),t.xp6(1),t.Q6J("shServerRender",!1))},dependencies:[l.ez,l.Ov,m.X,c.Bz,c.rH,F.C,H.m],encapsulation:2})}return i})();var G=s(6306),S=s(1843);const V=[{path:"",component:q,title:"SITE_NAME"},{path:"login",component:(()=>{class i{toast;router;fb;authService;loginForm;forceValidation;constructor(o,e,n,r){this.toast=o,this.router=e,this.fb=n,this.authService=r}ngOnInit(){this.loginForm=this.fb.group({username:[],password:[]})}login(){if(this.forceValidation=!1,this.toast.Hide(),this.loginForm.valid){const o=this.loginForm.value;this.authService.Login(o.username,o.password).pipe((0,G.K)(e=>this.toast.HandleUiError(e,{timeout:T.m.Never,buttons:[{text:"Login",css:"btn-fake",click:n=>{this.router.navigateByUrl(this.authService.redirectUrl||S.D.Basic.defaultRoute),this.toast.Hide()}},this.toast.dismissButton]}))).subscribe({next:e=>{e&&this.router.navigateByUrl(this.authService.redirectUrl||S.D.Basic.defaultRoute)}})}else this.forceValidation=!0}static \u0275fac=function(e){return new(e||i)(t.Y36(x.F),t.Y36(c.F0),t.Y36(a.QS),t.Y36(d.e8))};static \u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:41,vars:43,consts:[[1,"spaced"],[1,"btn-social","btn-cam","w100","halfspaced"],["src","assets/images/iGoogle.svg","alt","Google"],["src","assets/images/iMS.svg","alt","Microsoft"],["src","assets/images/iFacebook.svg","alt","Facebook"],["src","assets/images/iTwitter.svg","alt","Twitter"],[1,"txt-c","small","light","spaced"],["novalidate","",3,"formGroup","submit"],[3,"placeholder","static"],["type","email","mdpattern","email","id","username","autocomplete","","mdinput","","formControlName","username",1,"md-input","w100",3,"required"],["type","password","id","password","name","current-password","autofocus","","autocomplete","current-password","mdinput","","formControlName","password",1,"md-input","w100",3,"required"],["type","submit",1,"btn-rev","w100"],[1,"spaced","bthin"],[1,"spaced","row-spaced"],["routerLink","/forgot"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t._UZ(2,"img",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",1),t._UZ(6,"img",3),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"button",1),t._UZ(10,"img",4),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"button",1),t._UZ(14,"img",5),t._uU(15),t.ALo(16,"translate"),t.qZA()(),t.TgZ(17,"div",6),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"form",7),t.NdJ("submit",function(){return n.login()}),t.TgZ(21,"div",0)(22,"md-input",8),t.ALo(23,"translate"),t._UZ(24,"input",9),t.qZA()(),t.TgZ(25,"div",0)(26,"md-input",8),t.ALo(27,"translate"),t._UZ(28,"input",10),t.qZA()(),t._UZ(29,"div",0),t.TgZ(30,"div",0)(31,"button",11),t._uU(32),t.ALo(33,"translate"),t.qZA()()(),t._UZ(34,"div",12),t.TgZ(35,"div",13)(36,"a",14),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"a"),t._uU(40,"Sign up for an account"),t.qZA()()),2&e&&(t.xp6(3),t.hij(" ",t.xi3(4,16,"Sign in with Google","SinginGoogle"),""),t.xp6(4),t.hij(" ",t.xi3(8,19,"Sign in with Microsoft","SinginMicrosoft"),""),t.xp6(4),t.hij(" ",t.xi3(12,22,"Sign in with Facebook","SinginFacebook"),""),t.xp6(4),t.hij(" ",t.xi3(16,25,"Sign in with Twitter","SinginTwitter"),""),t.xp6(3),t.Oqu(t.xi3(19,28,"OR","OR")),t.xp6(2),t.ekj("was-validated",n.forceValidation),t.Q6J("formGroup",n.loginForm),t.xp6(2),t.s9C("placeholder",t.xi3(23,31,"Email","Email")),t.Q6J("static",!0),t.xp6(2),t.Q6J("required",!0),t.xp6(2),t.s9C("placeholder",t.xi3(27,34,"Password","Password")),t.Q6J("static",!0),t.xp6(2),t.Q6J("required",!0),t.xp6(4),t.Oqu(t.xi3(33,37,"Sign in","SignIn")),t.xp6(5),t.Oqu(t.xi3(38,40,"Forgot password?","ForgotPassword")))},dependencies:[l.ez,a.UX,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.sg,a.u,m.X,g.Y,b.H,Z.I,c.Bz,c.rH],styles:[".btn-social[_ngcontent-%COMP%]{position:relative}.btn-social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset-inline-start:1.6rem;top:1.2rem;width:18px}"],changeDetection:0})}return i})(),title:"LOGIN"},{path:"forgot",component:C}]}}]);