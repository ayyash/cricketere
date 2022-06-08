"use strict";(self.webpackChunkcricketereweb=self.webpackChunkcricketereweb||[]).push([[616],{1616:(W,d,r)=>{r.r(d),r.d(d,{ProjectRoutingModule:()=>K});var g=r(7197),l=r(6444),e=r(7587);let h=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.m,l.Bz]]}),i})();var Z=r(8505),T=r(262),q=r(1770),A=r(354),s=r(9808),a=r(2382),j=r(6739),U=r(1401),x=r(2919);function _(i,n){if(1&i&&(e.TgZ(0,"option",28),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.Oqu(t)}}const C=function(){return[1,2,3,4]};let P=(()=>{class i{constructor(t,o){this.fb=t,this.toast=o,this.mode={forNew:!0},this.onSave=new e.vpe,this.onCancel=new e.vpe,this.forceValidation=!1}ngOnInit(){this.projectForm=this.fb.group({fieldname:[],name:[],list:[],email:[],number:[],checkme:[],minlength:[],maxlength:[],minvalue:[],maxvalue:[],phone:[],range:[]})}compareFn(t,o){return!(!t||!o)&&t.id==o.id}saveProject(){this.forceValidation=!1,this.toast.Hide(),this.onSave.emit({title:"new project",description:"new project description"}),this.projectForm.valid?Object.assign({},this.projectForm.value):this.forceValidation=!0}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.qu),e.Y36(j.F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["cr-project-form"]],inputs:{mode:"mode"},outputs:{onSave:"onSave",onCancel:"onCancel"},decls:43,vars:17,consts:[["novalidate","",3,"formGroup"],[1,"spaced"],["placeholder","Name"],["type","text","id","name","mdinput","","formControlName","name",1,"md-input","w100",3,"required"],["helptext","",1,"md-help-text"],["placeholder","List"],["formControlName","list","mdinput","",1,"md-input","w100",3,"required","compareWith"],[3,"ngValue",4,"ngFor","ngForOf"],["placeholder","Fieldname"],["type","text","id","fieldname","mdinput","","formControlName","fieldname",1,"md-input","w100",3,"required"],["placeholder","Email"],["type","email","id","email","mdinput","","mdpattern","email","formControlName","email",1,"md-input","w100",3,"required"],["placeholder","Number"],["type","number","id","number","mdinput","","formControlName","number",1,"md-input","w100",3,"required"],["placeholder","Minimum Length"],["type","text","id","minlength","mdinput","","minlength","5","formControlName","minlength",1,"md-input","w100",3,"required"],["placeholder","Maximum Length"],["type","text","id","maxlength","mdinput","","maxlength","3","formControlName","maxlength",1,"md-input","w100",3,"required"],["placeholder","Minimim Value"],["type","number","id","minvalue","mdinput","","min","4","formControlName","minvalue",1,"md-input","w100",3,"required"],["placeholder","Maximum Value"],["type","number","id","maxvalue","mdinput","","max","3","formControlName","maxvalue",1,"md-input","w100",3,"required"],["placeholder","Phone"],["type","text","id","phone","mdinput","","mdpattern","phone","formControlName","phone",1,"md-input","w100",3,"required"],["placeholder","Range"],["type","number","id","range","mdinput","","mdtype","range","min","3","max","10","formControlName","range",1,"md-input","w100",3,"required"],[1,"breath"],["type","submit",1,"btn-rev",3,"click"],[3,"ngValue"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0)(1,"fieldset")(2,"legend"),e._uU(3,"Legend of fields"),e.qZA(),e.TgZ(4,"div",1)(5,"md-input",2),e._UZ(6,"input",3),e.TgZ(7,"div",4),e._uU(8,"help text"),e.qZA()()(),e.TgZ(9,"div",1)(10,"md-input",5)(11,"select",6),e.YNc(12,_,2,2,"option",7),e.qZA()()(),e.TgZ(13,"div",1)(14,"md-input",8),e._UZ(15,"input",9),e.qZA()(),e.TgZ(16,"div",1)(17,"md-input",10),e._UZ(18,"input",11),e.qZA()(),e.TgZ(19,"div",1)(20,"md-input",12),e._UZ(21,"input",13),e.qZA()(),e.TgZ(22,"div",1)(23,"md-input",14),e._UZ(24,"input",15),e.qZA()(),e.TgZ(25,"div",1)(26,"md-input",16),e._UZ(27,"input",17),e.qZA()(),e.TgZ(28,"div",1)(29,"md-input",18),e._UZ(30,"input",19),e.qZA()(),e.TgZ(31,"div",1)(32,"md-input",20),e._UZ(33,"input",21),e.qZA()(),e.TgZ(34,"div",1)(35,"md-input",22),e._UZ(36,"input",23),e.qZA()(),e.TgZ(37,"div",1)(38,"md-input",24),e._UZ(39,"input",25),e.qZA()()(),e.TgZ(40,"div",26)(41,"button",27),e.NdJ("click",function(){return o.saveProject()}),e._uU(42,"Save"),e.qZA()()()),2&t&&(e.ekj("was-validated",o.forceValidation),e.Q6J("formGroup",o.projectForm),e.xp6(6),e.Q6J("required",!0),e.xp6(5),e.Q6J("required",!0)("compareWith",o.compareFn),e.xp6(1),e.Q6J("ngForOf",e.DdM(16,C)),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1))},directives:[a._Y,a.JL,a.sg,U.H,a.Fj,x.I,a.JJ,a.u,a.Q7,a.EJ,s.sg,a.YN,a.Kr,a.wV,a.wO,a.nD,a.qQ,a.Fd],encapsulation:2,changeDetection:0}),i})();function L(i,n){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"json"),e.qZA()),2&i){const t=n.ngIf;e.xp6(1),e.Oqu(e.lcZ(2,1,t))}}const y=function(){return{forNew:!0}};let b=(()=>{class i{constructor(t,o,u,p){this.route=t,this.router=o,this.toast=u,this.projectService=p}ngOnInit(){this.x$=this.route.data.pipe((0,Z.b)(t=>_attn(t,"route data")))}create(t){this.projectService.CreateProject(t).pipe((0,T.K)(o=>this.toast.HandleUiError(o,{buttons:[{text:"LOGIN",click:u=>{this.router.navigate(["/login"]),this.toast.Hide()}}]}))).subscribe({next:o=>{_attn(null==o?void 0:o.id,"succeded")},error:o=>{_attn(o,"error"),this.toast.Show(o.code)}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.gz),e.Y36(l.F0),e.Y36(q.F),e.Y36(A.Y))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:7,vars:5,consts:[[1,"page"],[1,"container"],[1,"f4","spaced"],[4,"ngIf"],[3,"mode","onSave"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Create new project"),e.qZA(),e.YNc(4,L,3,3,"div",3),e.ALo(5,"async"),e.TgZ(6,"cr-project-form",4),e.NdJ("onSave",function(p){return o.create(p)}),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngIf",e.lcZ(5,2,o.x$)),e.xp6(2),e.Q6J("mode",e.DdM(4,y)))},directives:[s.O5,P],pipes:[s.Ov,s.Ts],encapsulation:2,changeDetection:0}),i})(),w=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"page"],[1,"container"],[1,"f4","spaced"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Edit project"),e.qZA(),e._uU(4," form here "),e.qZA()())},encapsulation:2,changeDetection:0}),i})();var v=r(9646),F=r(4004),c=r(3322),J=r(3375),f=r(6705);function N(i,n){1&i&&(e.ynx(0),e.TgZ(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h4",5)(6,"a",6),e._uU(7,"Lorem Ipsum"),e.qZA()(),e.TgZ(8,"div",7),e._uU(9,"Sub line "),e.qZA()(),e.TgZ(10,"div",8)(11,"div",4)(12,"button",9)(13,"i",10),e._uU(14,"plus"),e.qZA()()()()(),e.TgZ(15,"div",11)(16,"a",12),e._UZ(17,"img",13),e.qZA(),e.TgZ(18,"div")(19,"span",14),e._uU(20,"Extra information"),e.qZA()()(),e.BQk())}function S(i,n){1&i&&(e.ynx(0),e.TgZ(1,"div",15)(2,"div",16)(3,"a"),e._UZ(4,"img",17),e.qZA()(),e.TgZ(5,"div",18)(6,"h4",5)(7,"a",6),e._uU(8,"Lorem Ipsum"),e.qZA()(),e.TgZ(9,"div",7),e._uU(10,"Sub line "),e.qZA(),e.TgZ(11,"div",19)(12,"a",20),e._UZ(13,"img",21),e.qZA(),e.TgZ(14,"a",22),e._UZ(15,"img",21),e.qZA()()(),e.TgZ(16,"div",23)(17,"div",14),e._uU(18,"Extra information"),e.qZA(),e.TgZ(19,"div",24),e._uU(20," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque dolorum vitae aliquid accusamus ipsa quo alias voluptatem quam, "),e.qZA()(),e.TgZ(21,"div",25)(22,"button",9)(23,"i",10),e._uU(24,"plus"),e.qZA()()()(),e.BQk())}let O=(()=>{class i{constructor(){this.mode={compact:!1}}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["cr-project-card"]],inputs:{mode:"mode"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"card","card-v"],[1,"dblock"],["src","https://eu.ui-avatars.com/api/?name=John+Doe&size=250",1,"h-1","hm-3","image-fill"],[1,"box"],[1,"f6","weight-bold"],["routerLink","/projects/34"],[1,"small","light"],[1,"corner"],["title","Link",1,"btn"],[1,"liga"],[1,"card","box","valign-center"],[1,"dblock","c-2","rspace"],["src","https://via.placeholder.com/50?text=RM",1,"image-cover","image-circle"],[1,"f6","weight-normal"],[1,"card"],[1,"image"],["src","https://via.placeholder.com/300",1,"h-2","hm-2","image-fill"],[1,"content","hspace","card","card-v","c-7"],[1,"tail-v"],[1,"dinline",2,"width","20px"],["src","https://via.placeholder.com/50?text=RM",1,"box-shadow-shallow","image-cover","image-circle"],[1,"dinline",2,"width","20px","margin-left","-5px"],[1,"extra","c-2"],[1,"lighter","smaller"],[1,"tail"]],template:function(t,o){1&t&&(e.YNc(0,N,21,0,"ng-container",0),e.YNc(1,S,25,0,"ng-container",0)),2&t&&(e.Q6J("ngIf",o.mode.compact),e.xp6(1),e.Q6J("ngIf",!o.mode.compact))},directives:[s.O5,l.yS],encapsulation:2,changeDetection:0}),i})();function Q(i,n){if(1&i&&(e.TgZ(0,"li",10)(1,"a",11),e._uU(2),e.qZA(),e._UZ(3,"img",12),e.TgZ(4,"p"),e._uU(5),e.qZA()()),2&i){const t=n.$implicit;e.xp6(1),e.MGl("routerLink","/projects/",t.id,""),e.xp6(1),e.Oqu(t.title),e.xp6(1),e.s9C("src",t.image,e.LSH),e.xp6(2),e.Oqu(t.description)}}function k(i,n){1&i&&(e.TgZ(0,"li"),e._UZ(1,"cr-project-card"),e.qZA())}const M=function(){return[1,2,3,4,5,6]},E=function(){return{public:!0,page:1}},m=function(i){return["/products",i]},D=function(){return{public:!1}},I=function(){return{public:!1,page:2}},R=[{id:"1",title:"Turtle Rock",description:"A place to build a turtle",image:"https://picsum.photos/50/50",category:{key:"turtles",value:"Turtles"}},{id:"2",title:"Turtle Rock 2",description:"A place to build a turtle",image:"https://picsum.photos/50/50",category:{key:"turtles",value:"Turtles"}},{id:"3",title:"Turtle Rock 3",description:"A place to build a turtle 4",image:"https://picsum.photos/50/50",category:{key:"turtles",value:"Turtles"}}];let Y=(()=>{class i extends J.R{constructor(t){super(),this.seoService=t}ngOnInit(){this.projects$=(0,v.of)(R).pipe((0,F.U)(t=>{const o={total:234,page:1,category:{key:"turtles",value:"Turtles"}};return this.seoLink=this.seoService.getNextLink(o),this.seoService.setSearchResults(o,t),c.Ex.RegisterEvent({event:c.fB.List,source:c.LL.ProjectsList},c.Ex.MapProjects(t)),t}))}next(t){t.preventDefault()}search(t){c.Ex.RegisterEvent({event:c.fB.Search,source:c.LL.ProjectsList},c.Ex.MapSearch(t))}setOne(){c.Ex.RegisterEvent({event:c.fB.Filter,source:c.LL.ProjectsList},{filter:"one"})}setTwo(){c.Ex.Reset(),c.Ex.RegisterEvent({event:c.fB.Filter,source:c.LL.EmployeesList},{filter:null})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.bx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],features:[e.qOj],decls:28,vars:18,consts:[[1,"page"],[1,"container"],[1,"f5","spaced"],[1,"a",3,"click"],[1,"row","row-gap","boxed","umd-3"],["class","box-shadow-normal spaced",4,"ngFor","ngForOf"],[3,"href","click"],[1,"rowlist"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"box-shadow-normal","spaced"],[1,"f3","a",3,"routerLink"],[3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Project list"),e.qZA(),e.TgZ(4,"div",3),e.NdJ("click",function(){return o.setOne()}),e._uU(5,"Set filter 1"),e.qZA(),e.TgZ(6,"div",3),e.NdJ("click",function(){return o.setTwo()}),e._uU(7,"Set filter 2"),e.qZA(),e.TgZ(8,"ul",4),e.YNc(9,Q,6,4,"li",5),e.ALo(10,"async"),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"a",6),e.NdJ("click",function(p){return o.next(p)}),e._uU(13,"Next"),e.qZA(),e.TgZ(14,"h5",2),e._uU(15,"Listed"),e.qZA(),e.TgZ(16,"ul",7),e.YNc(17,k,2,0,"li",8),e.qZA(),e.TgZ(18,"p"),e._uU(19," Test links for products "),e.TgZ(20,"a",9),e._uU(21,"Public"),e.qZA(),e._uU(22," | "),e.TgZ(23,"a",9),e._uU(24,"Private"),e.qZA(),e._uU(25," | "),e.TgZ(26,"a",9),e._uU(27,"Private page 2"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("ngForOf",e.lcZ(10,6,o.projects$)),e.xp6(3),e.Q6J("href",o.seoLink,e.LSH),e.xp6(5),e.Q6J("ngForOf",e.DdM(8,M)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,m,e.DdM(9,E))),e.xp6(3),e.Q6J("routerLink",e.VKq(13,m,e.DdM(12,D))),e.xp6(3),e.Q6J("routerLink",e.VKq(16,m,e.DdM(15,I))))},directives:[s.sg,l.yS,O],pipes:[s.Ov],encapsulation:2,changeDetection:0}),i})();var V=r(3900);function B(i,n){if(1&i&&(e.TgZ(0,"div",1)(1,"div",2)(2,"span",3),e._uU(3,"Breadcrumbs"),e.qZA(),e.TgZ(4,"h3",4),e._uU(5),e.qZA(),e.TgZ(6,"h4",5),e._uU(7,"Subline"),e.qZA(),e._UZ(8,"img",6),e.TgZ(9,"p"),e._uU(10),e.qZA(),e.TgZ(11,"section")(12,"dl",7)(13,"dt",8),e._uU(14,"Title"),e.qZA(),e.TgZ(15,"dd"),e._uU(16,"Data"),e.qZA(),e.TgZ(17,"dt",8),e._uU(18,"Title"),e.qZA(),e.TgZ(19,"dd"),e._uU(20,"Data "),e.TgZ(21,"span",9),e._uU(22,"Done"),e.qZA()(),e.TgZ(23,"dt",8),e._uU(24,"Title"),e.qZA(),e.TgZ(25,"dd"),e._uU(26,"Data"),e.qZA(),e.TgZ(27,"dt",8),e._uU(28,"Title"),e.qZA(),e.TgZ(29,"dd"),e._uU(30,"Data"),e.qZA(),e.TgZ(31,"dt",8),e._uU(32,"Title"),e.qZA(),e.TgZ(33,"dd"),e._uU(34,"Data"),e.qZA()()(),e.TgZ(35,"section")(36,"table",10)(37,"thead")(38,"tr")(39,"th"),e._uU(40,"Name"),e.qZA(),e.TgZ(41,"th"),e._uU(42,"Date"),e.qZA()()(),e.TgZ(43,"tbody")(44,"tr")(45,"td"),e._uU(46,"dsfsdfdsfs"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"2.2.4559"),e.qZA()()()()(),e.TgZ(49,"section")(50,"ul",11)(51,"li",12)(52,"div",13),e._UZ(53,"img",14),e.qZA(),e.TgZ(54,"div",15)(55,"h6",16)(56,"a",17),e._uU(57,"Lorem Ipsum"),e.qZA()(),e._uU(58," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit recusandae voluptatibus labore animi voluptas doloremque assumenda, dolor eum. Rerum molestiae eos magnam ea laborum distinctio impedit commodi fugiat cumque vero! "),e.qZA(),e.TgZ(59,"div",18),e._uU(60," August 2, 2001 "),e.qZA(),e.TgZ(61,"div",19)(62,"span",20),e._uU(63,"Warning"),e.qZA(),e.TgZ(64,"i",21),e._uU(65,"right"),e.qZA()()(),e.TgZ(66,"li",12)(67,"div",13),e._UZ(68,"img",22),e.qZA(),e.TgZ(69,"div",15),e._uU(70," Lorem ipsum, do "),e.qZA(),e.TgZ(71,"div",23),e._uU(72," September 2, 2001 "),e.qZA(),e.TgZ(73,"div",19)(74,"span",20),e._uU(75,"Warning"),e.qZA(),e.TgZ(76,"i",21),e._uU(77,"right"),e.qZA()()(),e.TgZ(78,"li",12)(79,"div",13),e._UZ(80,"img",24),e.qZA(),e.TgZ(81,"div",15),e._uU(82," corrupti temporibus soluta veritatis vitae perferendis totam eveniet, nemo atque, fugit esse consequatur accusantium delectus nam! "),e.qZA(),e.TgZ(83,"div",23),e._uU(84," May 2, 2001 "),e.qZA(),e.TgZ(85,"div",19)(86,"span",20),e._uU(87,"Warning"),e.qZA(),e.TgZ(88,"i",21),e._uU(89,"right"),e.qZA()()()()()()()),2&i){const t=n.ngIf;e.xp6(5),e.Oqu(t.title),e.xp6(3),e.s9C("src",t.image,e.LSH),e.xp6(2),e.Oqu(t.description)}}const $={title:"Turtle Rock",description:"A place to build a turtle",image:"https://picsum.photos/200/300",id:"56",category:{value:"Turtles",key:"turtles"}};let H=(()=>{class i{constructor(t,o){this.route=t,this.seoService=o}ngOnInit(){this.project$=this.route.paramMap.pipe((0,V.w)(t=>(0,v.of)($)),(0,Z.b)(t=>{_seqlog("title"),this.seoService.setProject(t)}))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.gz),e.Y36(f.bx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:2,vars:3,consts:[["class","page",4,"ngIf"],[1,"page"],[1,"container"],[1,"small"],[1,"f3"],[1,"f6","light","spaced"],[3,"src"],[1,"grid","g-1","spacedout"],[1,"light","weight-light"],[1,"label","label-green"],[1,"rich","w100"],[1,"rowlist"],[1,"card"],[1,"c-1","rspace"],["src","https://randomuser.me/api/portraits/men/57.jpg","alt","image",1,"image-cover","image-circle"],[1,"content","c-6"],[1,"f6"],[1,"cam"],[1,"lauto","c-2","txt"],[1,"tail"],[1,"label","label-yellow"],[1,"liga","a"],["src","https://randomuser.me/api/portraits/men/2.jpg","alt","image",1,"image-cover","image-circle"],[1,"lauto","c-2"],["src","https://via.placeholder.com/50","alt","image",1,"image-cover","image-circle"]],template:function(t,o){1&t&&(e.YNc(0,B,90,3,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,o.project$))},directives:[s.O5],pipes:[s.Ov],encapsulation:2,changeDetection:0}),i})();const z=[{path:"",component:Y},{path:"create",component:b,resolve:{ready:r(7704).I}},{path:"edit/:id",component:w},{path:":id",component:H}];let K=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.m,h,l.Bz.forChild(z)]]}),i})()}}]);