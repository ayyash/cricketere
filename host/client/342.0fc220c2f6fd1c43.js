"use strict";(self.webpackChunkcricketereweb=self.webpackChunkcricketereweb||[]).push([[342],{1342:(z,d,i)=>{i.r(d),i.d(d,{ProductRoutingModule:()=>w});var v=i(7197),p=i(6444),x=i(4004),S=i(4671),L=i(4482),_=i(5403);function T(n,a){return n===a}var f=i(3900),Z=i(262),m=i(9698),y=i(8491),r=i(3322),h=i(1950),t=i(7587);let P=(()=>{class n extends h.b{}return n.\u0275fac=function(){let a;return function(o){return(a||(a=t.n5z(n)))(o||n)}}(),n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var U=i(6082);let k=(()=>{class n extends h.C{}return n.\u0275fac=function(){let a;return function(o){return(a||(a=t.n5z(n)))(o||n)}}(),n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=i(9808),I=i(1770);function M(n,a){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.AsE(" ",e.name," - ",e.price," ")}}function A(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(c){return t.CHM(e),t.oxw(3).nextPage(c)}),t._uU(1,"Next"),t.qZA()}if(2&n){const e=t.oxw(3);t.Q6J("href",e.getNextLink(),t.LSH)}}function Y(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"a",5),t._uU(2,"Route to blank page"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"a",6),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).locationChange()}),t._uU(7,"Test location go"),t.qZA()(),t.TgZ(8,"div",7),t._uU(9," Show: "),t.TgZ(10,"a",8),t.NdJ("click",function(c){return t.CHM(e),t.oxw(2).showProducts(!0,c)}),t._uU(11,"Public"),t.qZA(),t._uU(12," | "),t.TgZ(13,"a",8),t.NdJ("click",function(c){return t.CHM(e),t.oxw(2).showProducts(!1,c)}),t._uU(14,"Private"),t.qZA()(),t.TgZ(15,"ul",9),t.YNc(16,M,2,2,"li",10),t.qZA(),t._uU(17),t.YNc(18,A,2,1,"a",11),t.BQk()}if(2&n){const e=a.ngIf,o=t.oxw().ngIf,c=t.oxw();t.xp6(4),t.hij("Total: ",e.total,""),t.xp6(6),t.Q6J("href",c.getShowLink(!0),t.LSH),t.xp6(3),t.Q6J("href",c.getShowLink(!1),t.LSH),t.xp6(3),t.Q6J("ngForOf",o),t.xp6(1),t.hij(" Page ",e.page," "),t.xp6(1),t.Q6J("ngIf",e.hasMore)}}const J=function(){return{page:2}};function b(n,a){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,Y,19,6,"ng-container",2),t.ALo(2,"async"),t.TgZ(3,"a",4),t._uU(4,"Test forward with page"),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,e.params$)),t.xp6(2),t.Q6J("queryParams",t.DdM(4,J))}}function F(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"json"),t.BQk()),2&n){const e=a.ngIf;t.xp6(1),t.hij(" ",t.lcZ(2,1,e)," ")}}const $=[{path:"",component:(()=>{class n{constructor(e,o,c,s,l,g,N){this.productService=e,this.productState=o,this.router=c,this.paramState=s,this.location=l,this.toast=g,this.route=N}ngOnInit(){this.params$=this.paramState.stateItem$,this.products$=this.route.paramMap.pipe((0,x.U)(e=>({page:+e.get("page")||1,isPublic:"true"===e.get("public"),size:m.D.Basic.defaultSize})),function C(n,a=S.y){return n=null!=n?n:T,(0,L.e)((e,o)=>{let c,s=!0;e.subscribe((0,_.x)(o,l=>{const g=a(l);(s||!n(c,g))&&(s=!1,c=g,o.next(l))}))})}((e,o)=>(e.isPublic!==o.isPublic&&(this.productState.emptyList(),o.page=1),e.page>=o.page&&e.isPublic===o.isPublic)),(0,f.w)(e=>this.productService.GetProducts(e).pipe((0,f.w)(o=>{const c=(0,y.p$)(o.total,e.size,e.page);return this.paramState.UpdateState(Object.assign({total:o.total,hasMore:c},e)),this.productState.appendList(o.matches)}),(0,Z.K)(o=>this.toast.HandleUiError(o))))),this.productState.emptyList(),this.paramState.UpdateState({total:2034,page:1,size:m.D.Basic.defaultSize})}nextPage(e){e.preventDefault();const o=this.paramState.currentItem.page+1,c=this.paramState.currentItem.isPublic;this.router.navigate([".",{page:o,public:c}],{skipLocationChange:!0}),r.Ex.RegisterEvent({event:r.fB.PageView},r.Ex.MapPath(`;page=${o};public=${c}`))}showProducts(e,o){o.preventDefault(),this.router.navigate([".",{page:1,public:e}],{replaceUrl:!0})}getNextLink(){return`/products;page=${this.paramState.currentItem.page+1};public=${this.paramState.currentItem.isPublic}`}getShowLink(e){return`/products;page=1;public=${e}`}locationChange(){this.router.navigate([".",{page:2}],{skipLocationChange:!0})}trackThis(e){r.Ex.RegisterEvent({event:r.fB.Click,source:r.LL.ProductsList},r.Ex.MapProducts([e]))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(U.M),t.Y36(k),t.Y36(p.F0),t.Y36(P),t.Y36(u.Ye),t.Y36(I.F),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],features:[t._Bn([P])],decls:7,vars:6,consts:[[1,"page"],["class","container",4,"ngIf"],[4,"ngIf"],[1,"container"],["routerLink","/projects",3,"queryParams"],["routerLink","/","target","_blank"],[3,"click"],[1,"spaced"],[3,"href","click"],[1,"rowlist"],[4,"ngFor","ngForOf"],["class","btn",3,"href","click",4,"ngIf"],[1,"btn",3,"href","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,b,5,5,"div",1),t.ALo(2,"async"),t.TgZ(3,"div"),t._uU(4," Somethign else on the page, this works even if above failed "),t.YNc(5,F,3,3,"ng-container",2),t.ALo(6,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,o.products$)),t.xp6(4),t.Q6J("ngIf",t.lcZ(6,4,o.params$)))},directives:[u.O5,p.yS,u.sg],pipes:[u.Ov,u.Ts],encapsulation:2,changeDetection:0}),n})(),data:{title:"PRODUCTS"}}];let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.m,p.Bz.forChild($)]]}),n})()}}]);