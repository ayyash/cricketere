"use strict";(self.webpackChunkcricketereweb=self.webpackChunkcricketereweb||[]).push([[985],{9985:(R,d,i)=>{i.r(d),i.d(d,{ProductRoutingModule:()=>O});var l=i(2113),f=i(4004),L=i(8505),S=i(4671),C=i(4482),T=i(5403);function Z(n,r){return n===r}var m=i(3900),M=i(262),h=i(9698),y=i(8491),u=i(3322),P=i(1950),t=i(8274);let v=(()=>{class n extends P.b{constructor(){super()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var I=i(6082);let U=(()=>{class n extends P.C{constructor(){super()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var s=i(6895),k=i(1770),A=i(781),J=i(9300),Y=i(4029),N=i(8555),$=i(3794);function b(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",2),t.NdJ("click",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.page(a))}),t.ALo(1,"translate"),t._uU(2,"More"),t.qZA()}2&n&&t.s9C("title",t.xi3(1,1,"show more","ShowMore"))}let x=(()=>{class n{constructor(e,o){this.loaderService=e,this.seoService=o,this.isLoadMore=!1,this.onPage=new t.vpe,this.mimicHref=""}ngOnInit(){this.loading$=this.loaderService.stateItem$.pipe((0,J.h)(e=>e.context===this.source),(0,f.U)(e=>!!e&&e.show)),this.mimicHref=this.getMimicHref()}page(e){this.onPage.emit({event:e,source:this.source})}getMimicHref(){const e=/page=(\d+)/i;let o=this.seoService.getPagePath();const a=o.match(e);if(a&&a.length){const p="page="+(parseInt(a[1],10)+1);o=o.replace(e,p)}else o+=";page=2";return o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(N.D),t.Y36($.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cr-pager"]],inputs:{isLoadMore:"isLoadMore",source:"source"},outputs:{onPage:"onPage"},standalone:!0,features:[t.jDz],decls:3,vars:5,consts:[[1,"pager"],["class","btn-fake",3,"title","click",4,"ngIf"],[1,"btn-fake",3,"title","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t.YNc(2,b,3,4,"button",1),t.qZA()),2&e&&(t.ekj("loading",t.lcZ(1,3,o.loading$)),t.xp6(2),t.Q6J("ngIf",o.isLoadMore))},dependencies:[s.ez,s.O5,s.Ov,Y.X],styles:[".pager.loading button{background-color:red}\n"],encapsulation:2}),n})();function Q(n,r){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=r.ngIf;t.xp6(1),t.hij(" Hello ",e.firstName," ")}}function w(n,r){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.AsE(" ",e.name," - ",e.price," ")}}function H(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(a){t.CHM(e);const c=t.oxw(3);return t.KtG(c.nextPage({event:a}))}),t._uU(1,"Next"),t.qZA()}if(2&n){const e=t.oxw(3);t.Q6J("href",e.getNextLink(),t.LSH)}}function F(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"a",7),t._uU(2,"Route to blank page"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"a",8),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.locationChange())}),t._uU(7,"Test location go"),t.qZA()(),t.TgZ(8,"div",9),t._uU(9," Show: "),t.TgZ(10,"a",10),t.NdJ("click",function(a){t.CHM(e);const c=t.oxw(2);return t.KtG(c.showProducts(!0,a))}),t._uU(11,"Public"),t.qZA(),t._uU(12," | "),t.TgZ(13,"a",10),t.NdJ("click",function(a){t.CHM(e);const c=t.oxw(2);return t.KtG(c.showProducts(!1,a))}),t._uU(14,"Private"),t.qZA()(),t.TgZ(15,"ul",11),t.YNc(16,w,2,2,"li",12),t.qZA(),t._uU(17),t.YNc(18,H,2,1,"a",13),t.BQk()}if(2&n){const e=r.ngIf,o=t.oxw().ngIf,a=t.oxw();t.xp6(4),t.hij("Total: ",e.total,""),t.xp6(6),t.Q6J("href",a.getShowLink(!0),t.LSH),t.xp6(3),t.Q6J("href",a.getShowLink(!1),t.LSH),t.xp6(3),t.Q6J("ngForOf",o),t.xp6(1),t.hij(" Page ",e.page," "),t.xp6(1),t.Q6J("ngIf",e.hasMore)}}const z=function(){return{page:2}};function E(n,r){if(1&n&&(t.TgZ(0,"div",5),t.YNc(1,F,19,6,"ng-container",1),t.ALo(2,"async"),t.TgZ(3,"a",6),t._uU(4,"Test forward with page"),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,e.params$)),t.xp6(2),t.Q6J("queryParams",t.DdM(4,z))}}function j(n,r){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"json"),t.BQk()),2&n){const e=r.ngIf;t.xp6(1),t.hij(" ",t.lcZ(2,1,e)," ")}}const B=[{path:"",component:(()=>{class n{constructor(e,o,a,c,p,g,D,K){this.productService=e,this.productState=o,this.router=a,this.paramState=c,this.location=p,this.toast=g,this.authState=D,this.route=K}ngOnInit(){_attn(this.authState.currentItem?.profile?.firstName,"xxxxxxxxxxxxxxx"),this.user$=this.authState.stateItem$.pipe((0,f.U)(e=>e?.profile),(0,L.b)(e=>_attn(e,"ffffffffffffff"))),this.params$=this.paramState.stateItem$,this.products$=this.route.paramMap.pipe((0,f.U)(e=>({page:+e.get("page")||1,isPublic:"true"===e.get("public"),size:h.D.Basic.defaultSize,source:e.get("source")})),function _(n,r=S.y){return n=n??Z,(0,C.e)((e,o)=>{let a,c=!0;e.subscribe((0,T.x)(o,p=>{const g=r(p);(c||!n(a,g))&&(c=!1,a=g,o.next(p))}))})}((e,o)=>(e.isPublic!==o.isPublic&&(this.productState.emptyList(),o.page=1),e.page>=o.page&&e.isPublic===o.isPublic)),(0,m.w)(e=>this.productService.GetProducts(e).pipe((0,m.w)(o=>{const a=(0,y.p$)(o.total,e.size,e.page);return this.paramState.UpdateState({total:o.total,hasMore:a,...e}),this.productState.appendList(o.matches)}),(0,M.K)(o=>this.toast.HandleUiError(o))))),this.productState.emptyList(),this.paramState.UpdateState({total:2034,page:1,size:h.D.Basic.defaultSize})}nextPage(e){e.event.preventDefault();const o=this.paramState.currentItem.page+1,a=this.paramState.currentItem.isPublic;this.router.navigate([".",{page:o,public:a}],{skipLocationChange:!0}),u.Ex.RegisterEvent({event:u.fB.PageView},u.Ex.MapPath(`;page=${o};public=${a}`))}showProducts(e,o){o.preventDefault(),this.router.navigate([".",{page:1,public:e}],{replaceUrl:!0})}getNextLink(){return`/products;page=${this.paramState.currentItem.page+1};public=${this.paramState.currentItem.isPublic}`}getShowLink(e){return`/products;page=1;public=${e}`}locationChange(){this.router.navigate([".",{page:2}],{skipLocationChange:!0})}trackThis(e){u.Ex.RegisterEvent({event:u.fB.Click,source:u.LL.ProductsList},u.Ex.MapProducts([e]))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(I.M),t.Y36(U),t.Y36(l.F0),t.Y36(v),t.Y36(s.Ye),t.Y36(k.F),t.Y36(A.j),t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],features:[t._Bn([v])],decls:11,vars:11,consts:[[1,"page"],[4,"ngIf"],["class","container",4,"ngIf"],["source","pager1",3,"isLoadMore","onPage"],["source","pager2",3,"isLoadMore","onPage"],[1,"container"],["routerLink","/projects",3,"queryParams"],["routerLink","/","target","_blank"],[3,"click"],[1,"spaced"],[3,"href","click"],[1,"rowlist"],[4,"ngFor","ngForOf"],["class","btn",3,"href","click",4,"ngIf"],[1,"btn",3,"href","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Q,2,1,"ng-container",1),t.ALo(2,"async"),t.YNc(3,E,5,5,"div",2),t.ALo(4,"async"),t.TgZ(5,"div")(6,"cr-pager",3),t.NdJ("onPage",function(c){return o.nextPage(c)}),t.qZA(),t.TgZ(7,"cr-pager",4),t.NdJ("onPage",function(c){return o.nextPage(c)}),t.qZA(),t._uU(8," Somethign else on the page, this works even if above failed "),t.YNc(9,j,3,3,"ng-container",1),t.ALo(10,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,5,o.user$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,7,o.products$)),t.xp6(3),t.Q6J("isLoadMore",!0),t.xp6(1),t.Q6J("isLoadMore",!0),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,9,o.params$)))},dependencies:[s.sg,s.O5,l.rH,x,s.Ov,s.Ts],encapsulation:2,changeDetection:0}),n})(),title:"PRODUCTS"}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,l.Bz.forChild(B),x]}),n})()}}]);