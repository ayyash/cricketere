"use strict";(self.webpackChunkcricketereweb=self.webpackChunkcricketereweb||[]).push([[557],{1666:(W,g,r)=>{r.r(g),r.d(g,{ProjectRoutingModule:()=>K});var Z=r(1271),u=r(2113),e=r(8274);let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Z.m,u.Bz]}),o})();var f=r(8505),j=r(262),v=r(1770),U=r(354),a=r(433),l=r(6895),x=r(1401),_=r(2919);function C(o,n){if(1&o&&(e.TgZ(0,"option",28),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.Oqu(t)}}const P=function(){return[1,2,3,4]};let L=(()=>{class o{constructor(t,i){this.fb=t,this.toast=i,this.mode={forNew:!0},this.onSave=new e.vpe,this.onCancel=new e.vpe,this.forceValidation=!1}ngOnInit(){this.projectForm=this.fb.group({fieldname:[],name:[],list:[],email:[],number:[],checkme:[],minlength:[],maxlength:[],minvalue:[],maxvalue:[],phone:[],range:[]})}compareFn(t,i){return!(!t||!i)&&t.id==i.id}saveProject(){if(this.forceValidation=!1,this.toast.Hide(),this.projectForm.valid){const i={...this.projectForm.value};this.onSave.emit(i)}else this.forceValidation=!0,this.toast.ShowError("INVALID_FORM")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.QS),e.Y36(v.F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cr-project-form"]],inputs:{mode:"mode"},outputs:{onSave:"onSave",onCancel:"onCancel"},decls:43,vars:17,consts:[["novalidate","",3,"formGroup"],[1,"spaced"],["placeholder","Name"],["type","text","id","name","mdinput","","formControlName","name",1,"md-input","w100",3,"required"],["helptext","",1,"md-help-text"],["placeholder","List"],["formControlName","list","mdinput","",1,"md-input","w100",3,"required","compareWith"],[3,"ngValue",4,"ngFor","ngForOf"],["placeholder","Fieldname"],["type","text","id","fieldname","mdinput","","formControlName","fieldname",1,"md-input","w100",3,"required"],["placeholder","Email"],["type","email","id","email","mdinput","","mdpattern","email","formControlName","email",1,"md-input","w100",3,"required"],["placeholder","Number"],["type","number","id","number","mdinput","","formControlName","number",1,"md-input","w100",3,"required"],["placeholder","Minimum Length"],["type","text","id","minlength","mdinput","","minlength","5","formControlName","minlength",1,"md-input","w100",3,"required"],["placeholder","Maximum Length"],["type","text","id","maxlength","mdinput","","maxlength","3","formControlName","maxlength",1,"md-input","w100",3,"required"],["placeholder","Minimim Value"],["type","number","id","minvalue","mdinput","","min","4","formControlName","minvalue",1,"md-input","w100",3,"required"],["placeholder","Maximum Value"],["type","number","id","maxvalue","mdinput","","max","3","formControlName","maxvalue",1,"md-input","w100",3,"required"],["placeholder","Phone"],["type","text","id","phone","mdinput","","mdpattern","phone","formControlName","phone",1,"md-input","w100",3,"required"],["placeholder","Range"],["type","number","id","range","mdinput","","mdtype","range","min","3","max","10","formControlName","range",1,"md-input","w100",3,"required"],[1,"breath"],["type","submit",1,"btn-rev",3,"click"],[3,"ngValue"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0)(1,"fieldset")(2,"legend"),e._uU(3,"Legend of fields"),e.qZA(),e.TgZ(4,"div",1)(5,"md-input",2),e._UZ(6,"input",3),e.TgZ(7,"div",4),e._uU(8,"help text"),e.qZA()()(),e.TgZ(9,"div",1)(10,"md-input",5)(11,"select",6),e.YNc(12,C,2,2,"option",7),e.qZA()()(),e.TgZ(13,"div",1)(14,"md-input",8),e._UZ(15,"input",9),e.qZA()(),e.TgZ(16,"div",1)(17,"md-input",10),e._UZ(18,"input",11),e.qZA()(),e.TgZ(19,"div",1)(20,"md-input",12),e._UZ(21,"input",13),e.qZA()(),e.TgZ(22,"div",1)(23,"md-input",14),e._UZ(24,"input",15),e.qZA()(),e.TgZ(25,"div",1)(26,"md-input",16),e._UZ(27,"input",17),e.qZA()(),e.TgZ(28,"div",1)(29,"md-input",18),e._UZ(30,"input",19),e.qZA()(),e.TgZ(31,"div",1)(32,"md-input",20),e._UZ(33,"input",21),e.qZA()(),e.TgZ(34,"div",1)(35,"md-input",22),e._UZ(36,"input",23),e.qZA()(),e.TgZ(37,"div",1)(38,"md-input",24),e._UZ(39,"input",25),e.qZA()()(),e.TgZ(40,"div",26)(41,"button",27),e.NdJ("click",function(){return i.saveProject()}),e._uU(42,"Save"),e.qZA()()()),2&t&&(e.ekj("was-validated",i.forceValidation),e.Q6J("formGroup",i.projectForm),e.xp6(6),e.Q6J("required",!0),e.xp6(5),e.Q6J("required",!0)("compareWith",i.compareFn),e.xp6(1),e.Q6J("ngForOf",e.DdM(16,P)),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1),e.xp6(3),e.Q6J("required",!1))},dependencies:[l.sg,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.qQ,a.Fd,x.H,_.I,a.sg,a.u],encapsulation:2,changeDetection:0}),o})();const y=function(){return{forNew:!0}};let F=(()=>{class o{constructor(t,i,s,p){this.route=t,this.router=i,this.toast=s,this.projectService=p}ngOnInit(){this.x$=this.route.data.pipe((0,f.b)(t=>_attn(t,"route data")))}create(t){this.projectService.CreateProject(t).pipe((0,j.K)(i=>this.toast.HandleUiError(i,{buttons:[{text:"LOGIN",click:s=>{this.router.navigate(["/login"]),this.toast.Hide()}}]}))).subscribe({next:i=>{_attn(i?.id,"succeded")},error:i=>{_attn(i,"error"),this.toast.Show(i.code)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(v.F),e.Y36(U.Y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:5,vars:2,consts:[[1,"page"],[1,"container"],[1,"f4","spaced"],[3,"mode","onSave"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Create new project"),e.qZA(),e.TgZ(4,"cr-project-form",3),e.NdJ("onSave",function(p){return i.create(p)}),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("mode",e.DdM(1,y)))},dependencies:[L],encapsulation:2,changeDetection:0}),o})(),J=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"page"],[1,"container"],[1,"f4","spaced"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Edit project"),e.qZA(),e._uU(4," form here "),e.qZA()())},encapsulation:2,changeDetection:0}),o})();var h=r(9646),S=r(4004),c=r(3322),w=r(3375),m=r(1886),T=r(5015),q=r(7236);function N(o,n){if(1&o&&(e.TgZ(0,"li",10)(1,"a",11),e._uU(2),e.qZA(),e._UZ(3,"cr-stars",12)(4,"img",13),e.TgZ(5,"p"),e._uU(6),e.qZA()()),2&o){const t=n.$implicit;e.xp6(1),e.MGl("routerLink","/projects/",t.id,""),e.xp6(1),e.Oqu(t.title),e.xp6(1),e.Q6J("rating",4),e.xp6(1),e.s9C("src",t.image,e.LSH),e.xp6(2),e.Oqu(t.description)}}function b(o,n){1&o&&(e.TgZ(0,"li"),e._UZ(1,"cr-project-card"),e.qZA())}const O=function(){return[1,2,3,4,5,6]},Q=function(){return{public:!0,page:1}},d=function(o){return["/products",o]},E=function(){return{public:!1}},M=function(){return{public:!1,page:2}},D=[{id:"1",title:"Turtle Rock",description:"A place to build a turtle",image:"https://picsum.photos/50/50",category:{key:"turtles",value:"Turtles"}},{id:"2",title:"Turtle Rock 2",description:"A place to build a turtle",image:"https://picsum.photos/50/50",category:{key:"turtles",value:"Turtles"}},{id:"3",title:"Turtle Rock 3",description:"A place to build a turtle 4",image:"https://picsum.photos/50/50",category:{key:"turtles",value:"Turtles"}}];let V=(()=>{class o extends w.R{constructor(t,i){super(),this.seoService=t,this.storageService=i}ngOnInit(){this.projects$=(0,h.of)(D).pipe((0,S.U)(t=>{const i={total:234,page:1,category:{key:"turtles",value:"Turtles"}};return this.seoLink=this.seoService.getNextLink(i),this.seoService.setSearchResults(i,t),c.Ex.RegisterEvent({event:c.fB.List,source:c.LL.ProjectsList},c.Ex.MapProjects(t)),t}))}next(t){t.preventDefault()}search(t){c.Ex.RegisterEvent({event:c.fB.Search,source:c.LL.ProjectsList},c.Ex.MapSearch(t))}setOne(){c.Ex.RegisterEvent({event:c.fB.Filter,source:c.LL.ProjectsList},{filter:"one"}),this.storageService.setItem("filter","one")}setTwo(){c.Ex.Reset(),c.Ex.RegisterEvent({event:c.fB.Filter,source:c.LL.EmployeesList},{filter:null}),this.storageService.setItem("filter2","another")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.bx),e.Y36(m.V1))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e.qOj],decls:28,vars:18,consts:[[1,"page"],[1,"container"],[1,"f5","spaced"],[1,"a",3,"click"],[1,"row","row-gap","boxed","umd-3"],["class","box-shadow-normal spaced",4,"ngFor","ngForOf"],[3,"href","click"],[1,"rowlist"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"box-shadow-normal","spaced"],[1,"f3","a",3,"routerLink"],[3,"rating"],[3,"src"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Project list"),e.qZA(),e.TgZ(4,"div",3),e.NdJ("click",function(){return i.setOne()}),e._uU(5,"Set filter 1"),e.qZA(),e.TgZ(6,"div",3),e.NdJ("click",function(){return i.setTwo()}),e._uU(7,"Set filter 2"),e.qZA(),e.TgZ(8,"ul",4),e.YNc(9,N,7,5,"li",5),e.ALo(10,"async"),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"a",6),e.NdJ("click",function(p){return i.next(p)}),e._uU(13,"Next"),e.qZA(),e.TgZ(14,"h5",2),e._uU(15,"Listed"),e.qZA(),e.TgZ(16,"ul",7),e.YNc(17,b,2,0,"li",8),e.qZA(),e.TgZ(18,"p"),e._uU(19," Test links for products "),e.TgZ(20,"a",9),e._uU(21,"Public"),e.qZA(),e._uU(22," | "),e.TgZ(23,"a",9),e._uU(24,"Private"),e.qZA(),e._uU(25," | "),e.TgZ(26,"a",9),e._uU(27,"Private page 2"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("ngForOf",e.lcZ(10,6,i.projects$)),e.xp6(3),e.Q6J("href",i.seoLink,e.LSH),e.xp6(5),e.Q6J("ngForOf",e.DdM(8,O)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,d,e.DdM(9,Q))),e.xp6(3),e.Q6J("routerLink",e.VKq(13,d,e.DdM(12,E))),e.xp6(3),e.Q6J("routerLink",e.VKq(16,d,e.DdM(15,M))))},dependencies:[l.sg,T.a,q.o,u.yS,l.Ov],encapsulation:2,changeDetection:0}),o})();var I=r(3900);function R(o,n){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t.value," ")}}function Y(o,n){if(1&o&&(e.TgZ(0,"div")(1,"ul",12),e.YNc(2,R,2,1,"li",26),e.qZA()()),2&o){const t=n.ngIf;e.xp6(2),e.Q6J("ngForOf",t)}}function k(o,n){if(1&o&&(e.TgZ(0,"div",1)(1,"div",2)(2,"span",3),e._uU(3,"Breadcrumbs"),e.qZA(),e.TgZ(4,"h3",4),e._uU(5),e.qZA(),e.TgZ(6,"h4",5),e._uU(7,"Subline"),e.qZA(),e._UZ(8,"img",6),e.TgZ(9,"p"),e._uU(10),e.qZA(),e.YNc(11,Y,3,1,"div",7),e.ALo(12,"async"),e.TgZ(13,"section")(14,"dl",8)(15,"dt",9),e._uU(16,"Title"),e.qZA(),e.TgZ(17,"dd"),e._uU(18,"Data"),e.qZA(),e.TgZ(19,"dt",9),e._uU(20,"Title"),e.qZA(),e.TgZ(21,"dd"),e._uU(22,"Data "),e.TgZ(23,"span",10),e._uU(24,"Done"),e.qZA()(),e.TgZ(25,"dt",9),e._uU(26,"Title"),e.qZA(),e.TgZ(27,"dd"),e._uU(28,"Data"),e.qZA(),e.TgZ(29,"dt",9),e._uU(30,"Title"),e.qZA(),e.TgZ(31,"dd"),e._uU(32,"Data"),e.qZA(),e.TgZ(33,"dt",9),e._uU(34,"Title"),e.qZA(),e.TgZ(35,"dd"),e._uU(36,"Data"),e.qZA()()(),e.TgZ(37,"section")(38,"table",11)(39,"thead")(40,"tr")(41,"th"),e._uU(42,"Name"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"Date"),e.qZA()()(),e.TgZ(45,"tbody")(46,"tr")(47,"td"),e._uU(48,"dsfsdfdsfs"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"2.2.4559"),e.qZA()()()()(),e.TgZ(51,"section")(52,"ul",12)(53,"li",13)(54,"div",14),e._UZ(55,"img",15),e.qZA(),e.TgZ(56,"div",16)(57,"h6",17)(58,"a",18),e._uU(59,"Lorem Ipsum"),e.qZA()(),e._uU(60," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit recusandae voluptatibus labore animi voluptas doloremque assumenda, dolor eum. Rerum molestiae eos magnam ea laborum distinctio impedit commodi fugiat cumque vero! "),e.qZA(),e.TgZ(61,"div",19),e._uU(62," August 2, 2001 "),e.qZA(),e.TgZ(63,"div",20)(64,"span",21),e._uU(65,"Warning"),e.qZA(),e.TgZ(66,"i",22),e._uU(67,"right"),e.qZA()()(),e.TgZ(68,"li",13)(69,"div",14),e._UZ(70,"img",23),e.qZA(),e.TgZ(71,"div",16),e._uU(72," Lorem ipsum, do "),e.qZA(),e.TgZ(73,"div",24),e._uU(74," September 2, 2001 "),e.qZA(),e.TgZ(75,"div",20)(76,"span",21),e._uU(77,"Warning"),e.qZA(),e.TgZ(78,"i",22),e._uU(79,"right"),e.qZA()()(),e.TgZ(80,"li",13)(81,"div",14),e._UZ(82,"img",25),e.qZA(),e.TgZ(83,"div",16),e._uU(84," corrupti temporibus soluta veritatis vitae perferendis totam eveniet, nemo atque, fugit esse consequatur accusantium delectus nam! "),e.qZA(),e.TgZ(85,"div",24),e._uU(86," May 2, 2001 "),e.qZA(),e.TgZ(87,"div",20)(88,"span",21),e._uU(89,"Warning"),e.qZA(),e.TgZ(90,"i",22),e._uU(91,"right"),e.qZA()()()()()()()),2&o){const t=n.ngIf,i=e.oxw();e.xp6(5),e.Oqu(t.title),e.xp6(3),e.s9C("src",t.image,e.LSH),e.xp6(2),e.Oqu(t.description),e.xp6(1),e.Q6J("ngIf",e.lcZ(12,4,i.categories$))}}const $={title:"Turtle Rock",description:"A place to build a turtle",image:"https://picsum.photos/200/300",id:"56",category:{value:"Turtles",key:"turtles"}};let B=(()=>{class o{constructor(t,i,s){this.route=t,this.dataService=i,this.seoService=s}ngOnInit(){this.categories$=this.dataService.GetCategories(),this.project$=this.route.paramMap.pipe((0,I.w)(t=>(0,h.of)($)),(0,f.b)(t=>{_seqlog("title"),this.seoService.setProject(t)}))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gz),e.Y36(m.Do),e.Y36(m.bx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:2,vars:3,consts:[["class","page",4,"ngIf"],[1,"page"],[1,"container"],[1,"small"],[1,"f3"],[1,"f6","light","spaced"],[3,"src"],[4,"ngIf"],[1,"grid","g-1","spacedout"],[1,"light","weight-light"],[1,"label","label-green"],[1,"rich","w100"],[1,"rowlist"],[1,"card"],[1,"c-1","rspace"],["src","https://randomuser.me/api/portraits/men/57.jpg","alt","image",1,"image-cover","image-circle"],[1,"content","c-6"],[1,"f6"],[1,"cam"],[1,"lauto","c-2","txt"],[1,"tail"],[1,"label","label-yellow"],[1,"liga","a"],["src","https://randomuser.me/api/portraits/men/2.jpg","alt","image",1,"image-cover","image-circle"],[1,"lauto","c-2"],["src","https://via.placeholder.com/50","alt","image",1,"image-cover","image-circle"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(e.YNc(0,k,92,6,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,i.project$))},dependencies:[l.sg,l.O5,l.Ov],encapsulation:2,changeDetection:0}),o})();const G=[{path:"",component:V,title:"LIST_PROJECTS"},{path:"create",component:F,title:"CREATE_PROJECT",resolve:{ready:r(7704).I}},{path:"edit/:id",component:J},{path:":id",component:B}];let K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Z.m,A,T.a,q.o,u.Bz.forChild(G)]}),o})()}}]);