"use strict";(self.webpackChunkcricketereweb=self.webpackChunkcricketereweb||[]).push([[342],{1342:(U,p,i)=>{i.r(p),i.d(p,{ProductRoutingModule:()=>F});var h=i(7197),u=i(4354),P=i(4004),v=i(4671),x=i(4482),S=i(5403);function L(n,c){return n===c}var f=i(3900),C=i(8491),d=i(1950),t=i(7587);let g=(()=>{class n extends d.b{}return n.\u0275fac=function(){let c;return function(o){return(c||(c=t.n5z(n)))(o||n)}}(),n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var y=i(6082);let Z=(()=>{class n extends d.C{}return n.\u0275fac=function(){let c;return function(o){return(c||(c=t.n5z(n)))(o||n)}}(),n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=i(9808);function T(n,c){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.AsE(" ",e.name," - ",e.price," ")}}function I(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"a",9),t.NdJ("click",function(r){return t.CHM(e),t.oxw(3).nextPage(r)}),t._uU(1,"Next"),t.qZA()}if(2&n){const e=t.oxw(3);t.Q6J("href",e.getNextLink(),t.LSH)}}function b(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"div",4),t._uU(4," Show: "),t.TgZ(5,"a",5),t.NdJ("click",function(r){return t.CHM(e),t.oxw(2).showProducts(!0,r)}),t._uU(6,"Public"),t.qZA(),t._uU(7," | "),t.TgZ(8,"a",5),t.NdJ("click",function(r){return t.CHM(e),t.oxw(2).showProducts(!1,r)}),t._uU(9,"Private"),t.qZA()(),t.TgZ(10,"ul",6),t.YNc(11,T,2,2,"li",7),t.qZA(),t._uU(12),t.YNc(13,I,2,1,"a",8),t.BQk()}if(2&n){const e=c.ngIf,o=t.oxw().ngIf,r=t.oxw();t.xp6(2),t.hij("Total: ",e.total,""),t.xp6(3),t.Q6J("href",r.getShowLink(!0),t.LSH),t.xp6(3),t.Q6J("href",r.getShowLink(!1),t.LSH),t.xp6(3),t.Q6J("ngForOf",o),t.xp6(1),t.hij(" Page ",e.page," "),t.xp6(1),t.Q6J("ngIf",e.hasMore)}}function M(n,c){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,b,14,6,"ng-container",3),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.params$))}}const A=[{path:"",component:(()=>{class n{constructor(e,o,r,a,s){this.productService=e,this.productState=o,this.router=r,this.paramState=a,this.route=s}ngOnInit(){this.params$=this.paramState.stateItem$,this.products$=this.route.paramMap.pipe((0,P.U)(e=>({page:+e.get("page")||1,isPublic:"true"===e.get("public"),size:2})),function _(n,c=v.y){return n=null!=n?n:L,(0,x.e)((e,o)=>{let r,a=!0;e.subscribe((0,S.x)(o,s=>{const m=c(s);(a||!n(r,m))&&(a=!1,r=m,o.next(s))}))})}((e,o)=>(e.isPublic!==o.isPublic&&(this.productState.emptyList(),o.page=1),_attn({prev:e,next:o},"ffffffffffffff"),e.page>=o.page&&e.isPublic===o.isPublic)),(0,f.w)(e=>this.productService.GetProducts(e).pipe((0,f.w)(o=>{console.log(o);const r=(0,C.p$)(o.total,e.size,e.page);return this.paramState.UpdateState(Object.assign({total:o.total,hasMore:r},e)),this.productState.appendList(o.matches)})))),this.productState.emptyList()}nextPage(e){e.preventDefault(),this.router.navigate([".",{page:this.paramState.currentItem.page+1,public:this.paramState.currentItem.isPublic}],{replaceUrl:!0})}showProducts(e,o){o.preventDefault(),this.router.navigate([".",{page:1,public:e}])}getNextLink(){return`/products/;page=${this.paramState.currentItem.page+1};public=${this.paramState.currentItem.isPublic}`}getShowLink(e){return`/products/;page=1;public=${e}`}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.M),t.Y36(Z),t.Y36(u.F0),t.Y36(g),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],features:[t._Bn([g])],decls:3,vars:3,consts:[[1,"page"],["class","container",4,"ngIf"],[1,"container"],[4,"ngIf"],[1,"spaced"],[3,"href","click"],[1,"rowlist"],[4,"ngFor","ngForOf"],["class","btn",3,"href","click",4,"ngIf"],[1,"btn",3,"href","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,M,3,3,"div",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.products$)))},directives:[l.O5,l.sg],pipes:[l.Ov],encapsulation:2,changeDetection:0}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.m,u.Bz.forChild(A)]]}),n})()}}]);