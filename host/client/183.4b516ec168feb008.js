"use strict";(self.webpackChunkcricketereweb=self.webpackChunkcricketereweb||[]).push([[183],{5183:(E,m,i)=>{i.r(m),i.d(m,{ContentRoutingModule:()=>P});var L=i(1271),C=i(1350),c=i(6895),l=i(9112),U=i(6650),e=i(8274),_=i(8137),f=i(433);let D=(()=>{class t extends c.H9{transform(n,o){return super.transform(n,o,"symbol-narrow")}}return t.\u0275fac=function(){let a;return function(o){return(a||(a=e.n5z(t)))(o||t)}}(),t.\u0275pipe=e.Yjl({name:"crCurrency",type:t,pure:!0}),t})(),v=(()=>{class t{transform(n,o=!1){const A=(new Date).valueOf(),s=n.valueOf(),g=6e4,d=60*g,T=24*d,q=30*T,h=365*T,u=Math.abs(s-A),p=n.toString();let Z=l.L.Plural("YEARS",Math.round(u/h),p);return u<g?Z=l.L.Plural("SECONDS",Math.round(u/1e3),p):u<d?Z=l.L.Plural("MINUTES",Math.round(u/g),p):u<T?Z=l.L.Plural("HOURS",Math.round(u/d),p):u<q?Z=l.L.Plural("DAYS",Math.round(u/T),p):u<h&&(Z=l.L.Plural("MONTHS",Math.round(u/q),p)),l.L.Get(o?"INTIME":"TIMEAGO").replace("$0",Z)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"relativetime",type:t,pure:!0}),t})();var x=i(4029);function y(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"li")(1,"button",20),e.NdJ("click",function(){const s=e.CHM(n).$implicit,g=e.oxw();return e.KtG(g.switchLanguage(s.name))}),e._uU(2),e.qZA(),e._uU(3,"\xa0 "),e.qZA()}if(2&t){const n=a.$implicit,o=e.oxw();e.xp6(1),e.ekj("red",n.name===o.currentLanguage),e.xp6(1),e.Oqu(n.display)}}function O(t,a){if(1&t&&(e.TgZ(0,"li")(1,"a",21),e._uU(2),e.qZA(),e._uU(3," |\xa0 "),e.qZA()),2&t){const n=a.$implicit,o=e.oxw();e.xp6(1),e.ekj("red",n.name===o.currentLanguage),e.Q6J("href",o.getServerLink(n.name),e.LSH),e.xp6(1),e.Oqu(n.display)}}function R(t,a){if(1&t&&(e.TgZ(0,"li")(1,"a",21),e._uU(2),e.qZA(),e._uU(3," |\xa0 "),e.qZA()),2&t){const n=a.$implicit,o=e.oxw();e.xp6(1),e.ekj("red",n.name===o.currentLanguage),e.Q6J("href",o.getLanguageLink(n.name),e.LSH),e.xp6(1),e.Oqu(n.display)}}function S(t,a){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",e.gM2(2,1,n.key,"THINGS",null,n.key)," ")}}function M(t,a){if(1&t&&(e.TgZ(0,"li")(1,"label"),e._UZ(2,"input",22),e._uU(3),e.ALo(4,"titlecase"),e.ALo(5,"translate"),e.qZA()()),2&t){const n=a.$implicit,o=e.oxw();e.xp6(2),e.Q6J("value",n),e.xp6(1),e.hij(" ",e.lcZ(4,2,e.gM2(5,4,o.enumRate[n],"RATING",null,o.enumRate[n])),"")}}const w=function(){return[23.44,"EUR","symbol-narrow",void 0,"en-US"]};var r=(()=>{return(t=r||(r={}))[t.AWEFUL=1]="AWEFUL",t[t.POOR=2]="POOR",t[t.OK=4]="OK",t[t.FAIR=8]="FAIR",t[t.GREAT=16]="GREAT",r;var t})();const k=[{path:"details",component:(()=>{class t{constructor(n){this.platform=n,this.supportedlanguages=U.E4.Config.Res.languages,this.currentLanguage=l.L.language,this.total=0,this.enumRate=r,this.arrayOfThings=[{id:1,key:"elephant"},{id:2,key:"lion"},{id:3,key:"tiger"},{id:4,key:"bear"}],this.rates=[r.AWEFUL,r.POOR,r.OK,r.FAIR,r.GREAT],this.productRating=r.GREAT,this.date1=new Date(Date.now()-1e3),this.date2=new Date(Date.now()-1728e5),this.date3=new Date(Date.now()-94608e6),this.date4=new Date(Date.now()-220752e6),this.date5=new Date(Date.now()+108e5),this.configCode="USD"}ngOnInit(){const n=(0,c.jK)("TRY","narrow");_attn(n,"currency")}switchLanguage(n){this.setCookie(n,U.E4.Config.Res.cookieName,365),this.platform.doc.location.reload()}getServerLink(n){return`/switchlang?lang=${n}&red=${this.platform.doc.URL}`}getLanguageLink(n){return this.platform.doc.URL.replace(`/${l.L.language}/`,`/${n}/`)}setCookie(n,o,A){if(this.platform.isBrowser){let s=encodeURIComponent(o)+"="+encodeURIComponent(n)+";";s+="expires="+new Date((new Date).getTime()+1e3*A*60*60*24).toUTCString()+";",s+="path=/;",document.cookie=s}}setCurrency(n){this.configCode=n.target.value}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.t))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:152,vars:128,consts:[[1,"row"],[4,"ngFor","ngForOf"],[1,"rowlist"],[1,"spaced"],[1,"rtl"],[3,"change"],["value","USD"],["value","AUD"],["value","CAD"],["value","TRY"],["value","EUR"],["value","RUB"],["value","JPY"],["value","JOD"],["value","QAR"],["value","BHD"],["value","BBD"],["value","EGP"],["value","WLG"],["value","\u20a9"],[1,"btn",3,"click"],[3,"href"],["type","checkbox",3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"h5"),e._uU(2,"Change cookie on client"),e.qZA(),e.TgZ(3,"ul",0),e.YNc(4,y,4,3,"li",1),e.qZA()(),e.TgZ(5,"section")(6,"h5"),e._uU(7,"Change cookie on server"),e.qZA(),e.TgZ(8,"ul",0),e.YNc(9,O,4,4,"li",1),e.qZA()(),e.TgZ(10,"section")(11,"h5"),e._uU(12,"Redirect to URL"),e.qZA(),e.TgZ(13,"ul",0),e.YNc(14,R,4,4,"li",1),e.qZA()(),e.TgZ(15,"h4"),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"section")(19,"ul",2)(20,"li"),e._uU(21),e.ALo(22,"translate"),e.qZA(),e.TgZ(23,"li"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"li"),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"li"),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"li"),e._uU(33),e.ALo(34,"translate"),e.qZA()()(),e.TgZ(35,"div",3),e.ALo(36,"translate"),e.TgZ(37,"p"),e._uU(38,"Translate plurals in multiple languages:"),e.qZA(),e.TgZ(39,"ul"),e.YNc(40,S,3,6,"li",1),e.qZA()(),e.TgZ(41,"section")(42,"p"),e._uU(43,"Translate gender"),e.qZA(),e.TgZ(44,"ul")(45,"li"),e._uU(46),e.ALo(47,"titlecase"),e.ALo(48,"translate"),e.qZA(),e.TgZ(49,"li"),e._uU(50),e.ALo(51,"titlecase"),e.ALo(52,"translate"),e.qZA()()(),e.TgZ(53,"section")(54,"p"),e._uU(55,"Translate rate"),e.qZA(),e.TgZ(56,"ul"),e.YNc(57,M,6,9,"li",1),e.qZA()(),e.TgZ(58,"section"),e._uU(59),e.ALo(60,"translate"),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Translate relative time"),e.qZA(),e.TgZ(63,"ul")(64,"li"),e._uU(65),e.ALo(66,"relativetime"),e.qZA(),e.TgZ(67,"li"),e._uU(68),e.ALo(69,"relativetime"),e.qZA(),e.TgZ(70,"li"),e._uU(71),e.ALo(72,"relativetime"),e.qZA(),e.TgZ(73,"li"),e._uU(74),e.ALo(75,"relativetime"),e.qZA(),e.TgZ(76,"li"),e._uU(77),e.ALo(78,"relativetime"),e.qZA()(),e.TgZ(79,"p"),e._uU(80,"Localize date"),e.qZA(),e.TgZ(81,"p"),e._uU(82),e.ALo(83,"date"),e.qZA(),e.TgZ(84,"div",4),e._uU(85),e.ALo(86,"date"),e.qZA(),e.TgZ(87,"p"),e._uU(88),e.ALo(89,"date"),e.qZA(),e.TgZ(90,"p"),e._uU(91),e.ALo(92,"currency"),e.ALo(93,"currency"),e.qZA(),e.TgZ(94,"p"),e._uU(95),e.ALo(96,"currency"),e.qZA(),e.TgZ(97,"p"),e._uU(98),e.ALo(99,"crCurrency"),e.qZA(),e.TgZ(100,"p"),e._uU(101),e.ALo(102,"currency"),e.qZA(),e.TgZ(103,"p"),e._uU(104),e.ALo(105,"currency"),e.qZA(),e.TgZ(106,"p"),e._uU(107),e.ALo(108,"number"),e.qZA(),e.TgZ(109,"h3",3),e._uU(110,"Testing currencies to the limits"),e.qZA(),e.TgZ(111,"select",5),e.NdJ("change",function(s){return o.setCurrency(s)}),e.TgZ(112,"option",6),e._uU(113,"USD"),e.qZA(),e.TgZ(114,"option",7),e._uU(115,"AUD - same look"),e.qZA(),e.TgZ(116,"option",8),e._uU(117,"CAD - same look"),e.qZA(),e.TgZ(118,"option",9),e._uU(119,"TRY"),e.qZA(),e.TgZ(120,"option",10),e._uU(121,"EUR"),e.qZA(),e.TgZ(122,"option",11),e._uU(123,"RUB"),e.qZA(),e.TgZ(124,"option",12),e._uU(125,"JPY"),e.qZA(),e.TgZ(126,"option",13),e._uU(127,"JOD - no symbol"),e.qZA(),e.TgZ(128,"option",14),e._uU(129,"QAR"),e.qZA(),e.TgZ(130,"option",15),e._uU(131,"BHD"),e.qZA(),e.TgZ(132,"option",16),e._uU(133,"BBD"),e.qZA(),e.TgZ(134,"option",17),e._uU(135,"EGP"),e.qZA(),e.TgZ(136,"option",18),e._uU(137,"WLG - Woolong"),e.qZA(),e.TgZ(138,"option",19),e._uU(139,"WLG - Woolong"),e.qZA()(),e.TgZ(140,"p"),e._uU(141),e.ALo(142,"crCurrency"),e.qZA(),e.TgZ(143,"p"),e._uU(144),e.ALo(145,"currency"),e.qZA(),e.TgZ(146,"p"),e._uU(147," \u20bd 29,304.34\n"),e.qZA(),e.TgZ(148,"p"),e._uU(149," RUB 29,304.34\n"),e.qZA(),e.TgZ(150,"p"),e._uU(151," \u062c.\u0645. 29,304.34\n"),e.qZA()),2&n&&(e.xp6(4),e.Q6J("ngForOf",o.supportedlanguages),e.xp6(5),e.Q6J("ngForOf",o.supportedlanguages),e.xp6(5),e.Q6J("ngForOf",o.supportedlanguages),e.xp6(2),e.Oqu(e.xi3(17,32,"Hello World","HelloWorld")),e.xp6(5),e.Oqu(e.Dn7(22,35,"Students","Students",0)),e.xp6(3),e.Oqu(e.Dn7(25,39,"Students","Students",1)),e.xp6(3),e.Oqu(e.Dn7(28,43,"Students","Students",2)),e.xp6(3),e.Oqu(e.Dn7(31,47,"Students","Students",3)),e.xp6(3),e.Oqu(e.Dn7(34,51,"Students","Students",11)),e.xp6(2),e.uIk("data-value",e.xi3(36,55,"something","Something")),e.xp6(5),e.Q6J("ngForOf",o.arrayOfThings),e.xp6(6),e.hij(" ",e.lcZ(47,58,e.gM2(48,60,"default male","GENDER",null,"MALE"))," "),e.xp6(4),e.hij(" ",e.lcZ(51,65,e.gM2(52,67,"default female","GENDER",null,"FEMALE"))," "),e.xp6(7),e.Q6J("ngForOf",o.rates),e.xp6(2),e.hij(" A product is ",e.gM2(60,72,o.productRating.toString(),"RATING",null,o.enumRate[o.productRating]),"\n"),e.xp6(6),e.Oqu(e.lcZ(66,77,o.date1)),e.xp6(3),e.Oqu(e.lcZ(69,79,o.date2)),e.xp6(3),e.Oqu(e.lcZ(72,81,o.date3)),e.xp6(3),e.Oqu(e.lcZ(75,83,o.date4)),e.xp6(3),e.Oqu(e.xi3(78,85,o.date5,!0)),e.xp6(5),e.hij(" using keyword full: ",e.xi3(83,88,o.date1,"full"),"\n"),e.xp6(3),e.hij(" ",e.lcZ(86,91,o.date1),"\n"),e.xp6(3),e.hij(" using format: ",e.xi3(89,93,o.date1,"EEE, MMM d, yy hh:mm:ss a Z"),"\n"),e.xp6(3),e.AsE(" Currency ",e.G7q(92,96,e.DdM(127,w))," Currency ",e.lcZ(93,102,23.44)," "),e.xp6(4),e.Oqu(e.Dn7(96,104,345.25,"TRY","symbol-narrow")),e.xp6(3),e.Oqu(e.xi3(99,108,345.25,"TRY")),e.xp6(3),e.Oqu(e.xi3(102,111,.25,"\u20a9")),e.xp6(3),e.Oqu(e.Dn7(105,114,35.333,"WLG","\u20a9")),e.xp6(3),e.hij(" ",e.xi3(108,118,"3.14159265359","4.2-4"),"\n"),e.xp6(34),e.hij(" ",e.xi3(142,121,29304.34,o.configCode),"\n"),e.xp6(3),e.hij(" ",e.xi3(145,124,29304.34,o.configCode),"\n"))},dependencies:[c.sg,f.YN,f.Kr,c.JJ,c.rS,c.H9,c.uU,D,v,x.X],encapsulation:2,changeDetection:0}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[L.m,C.Bz.forChild(k)]}),t})()}}]);