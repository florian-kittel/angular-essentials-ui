(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{thiY:function(l,n,u){"use strict";u.r(n),u.d(n,"InputPageModuleNgFactory",(function(){return E}));var e=u("LoAr"),t=u("IfiR"),b=function(){function l(l){this.fb=l,this.errorMessages={myInput:{required:"This field is required.",minlength:"The value must be at least 4 characters long."}},this.options=[{label:"Angular.io",value:"1"},{label:"angular-essentials.com",value:"2"}],this.form=this.fb.group({myInput:[{value:null,disabled:!1},{validators:t.o.compose([t.o.required,t.o.minLength(4)]),updateOn:"blur"}]})}return l.prototype.ngOnInit=function(){},l}(),a=function(){return function(){}}(),i=u("C9Ky"),o=u("k7DL"),r=u("f3jc"),s=u("WT9V"),d=function(){function l(){this.value="",this.placeholder="",this.label="",this.id="i",this.id=this.id+Math.random().toString().replace("0.","")}return l.prototype.ngOnInit=function(){},l}(),c=e.vb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,1,"label",[],[[8,"htmlFor",0]],null,null,null,null)),(l()(),e.Tb(1,null,["",""]))],null,(function(l,n){var u=n.component;l(n,0,0,u.id),l(n,1,0,u.label)}))}function g(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,1,"option",[["disabled",""],["selected",""],["value",""]],null,null,null,null,null)),(l()(),e.Tb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.placeholder)}))}function x(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,1,"option",[],[[8,"value",0]],null,null,null,null)),(l()(),e.Tb(1,null,["",""]))],null,(function(l,n){l(n,0,0,n.context.$implicit.value),l(n,1,0,n.context.$implicit.label)}))}function h(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,7,"div",[["class","d-flex align-items-center mb-2"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,p)),e.wb(2,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.xb(3,0,null,null,4,"select",[["required",""]],[[8,"id",0]],null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,g)),e.wb(5,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,x)),e.wb(7,278528,null,0,s.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.label),l(n,5,0,u.placeholder),l(n,7,0,u.options)}),(function(l,n){l(n,3,0,n.component.id)}))}var f=u("53Iv"),m=u("ChvG"),L=e.vb({encapsulation:0,styles:[[""]],data:{}});function v(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Input"])),(l()(),e.xb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,[" Default input field as separte block-element.\n"])),(l()(),e.xb(4,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Preview"])),(l()(),e.xb(6,0,null,null,9,"form",[["class","docs__preview"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Lb(l,8).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Lb(l,8).onReset()&&t),t}),null,null)),e.wb(7,16384,null,0,t.s,[],null,null),e.wb(8,540672,null,0,t.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ob(2048,null,t.b,null,[t.g]),e.wb(10,16384,null,0,t.l,[[4,t.b]],null,null),(l()(),e.xb(11,0,null,null,4,"nge-input",[["form",""],["formControlName","myInput"],["label","Label"],["placeholder","This is a placeholder"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[2,"nge-input",null]],null,null,o.b,o.a)),e.wb(12,671744,null,0,t.f,[[3,t.b],[8,null],[8,null],[8,null],[2,t.r]],{name:[0,"name"]},null),e.Ob(2048,null,t.j,null,[t.f]),e.wb(14,16384,null,0,t.k,[[4,t.j]],null,null),e.wb(15,376832,null,0,r.a,[[6,t.j]],{errorMessages:[0,"errorMessages"],placeholder:[1,"placeholder"],label:[2,"label"]},null),(l()(),e.xb(16,0,null,null,37,"table",[["class","docs__table"]],null,null,null,null,null)),(l()(),e.xb(17,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.xb(18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Property"])),(l()(),e.xb(20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Type"])),(l()(),e.xb(22,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Description"])),(l()(),e.xb(24,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.xb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["errorMessages"])),(l()(),e.xb(27,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Object"])),(l()(),e.xb(29,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e.xb(30,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.xb(31,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["placeholder"])),(l()(),e.xb(33,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["String"])),(l()(),e.xb(35,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e.xb(36,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.xb(37,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["label"])),(l()(),e.xb(39,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["String"])),(l()(),e.xb(41,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e.xb(42,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.xb(43,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["type"])),(l()(),e.xb(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["String"])),(l()(),e.xb(47,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e.xb(48,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.xb(49,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["readonly"])),(l()(),e.xb(51,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Boolean"])),(l()(),e.xb(53,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e.xb(54,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Examples"])),(l()(),e.xb(56,0,null,null,1,"nge-input",[["label","Input text"],["placeholder","Enter some text"]],[[1,"id",0],[2,"nge-input",null]],null,null,o.b,o.a)),e.wb(57,376832,null,0,r.a,[[8,null]],{placeholder:[0,"placeholder"],label:[1,"label"]},null),(l()(),e.xb(58,0,null,null,1,"nge-input",[["design",""],["label","First name"],["placeholder","Enter some text"]],[[1,"id",0],[2,"nge-input",null]],null,null,o.b,o.a)),e.wb(59,376832,null,0,r.a,[[8,null]],{placeholder:[0,"placeholder"],label:[1,"label"]},null),(l()(),e.xb(60,0,null,null,1,"nge-input",[["design",""],["label","Input with longer label"],["placeholder","Enter some text"]],[[1,"id",0],[2,"nge-input",null]],null,null,o.b,o.a)),e.wb(61,376832,null,0,r.a,[[8,null]],{placeholder:[0,"placeholder"],label:[1,"label"]},null),(l()(),e.xb(62,0,null,null,1,"nge-select",[["label","Select"],["placeholder","Please select"]],null,null,null,h,c)),e.wb(63,114688,null,0,d,[],{placeholder:[0,"placeholder"],label:[1,"label"],options:[2,"options"]},null),(l()(),e.xb(64,0,null,null,5,"div",[["class","d-flex"]],null,null,null,null,null)),(l()(),e.xb(65,0,null,null,1,"nge-input",[["class","mr-2"],["label","Input text"],["placeholder","Enter some text"]],[[1,"id",0],[2,"nge-input",null]],null,null,o.b,o.a)),e.wb(66,376832,null,0,r.a,[[8,null]],{placeholder:[0,"placeholder"],label:[1,"label"],classList:[2,"classList"]},null),(l()(),e.xb(67,0,null,null,2,"nge-button",[["color","primary"],["design","default"]],null,null,null,f.b,f.a)),e.wb(68,114688,null,0,m.a,[],{design:[0,"design"],color:[1,"color"]},null),(l()(),e.Tb(-1,0,["Normal Button"]))],(function(l,n){var u=n.component;l(n,8,0,u.form),l(n,12,0,"myInput"),l(n,15,0,u.errorMessages.myInput,"This is a placeholder","Label"),l(n,57,0,"Enter some text","Input text"),l(n,59,0,"Enter some text","First name"),l(n,61,0,"Enter some text","Input with longer label"),l(n,63,0,"Please select","Select",u.options),l(n,66,0,"Enter some text","Input text","mr-2"),l(n,68,0,"default","primary")}),(function(l,n){l(n,6,0,e.Lb(n,10).ngClassUntouched,e.Lb(n,10).ngClassTouched,e.Lb(n,10).ngClassPristine,e.Lb(n,10).ngClassDirty,e.Lb(n,10).ngClassValid,e.Lb(n,10).ngClassInvalid,e.Lb(n,10).ngClassPending),l(n,11,0,e.Lb(n,14).ngClassUntouched,e.Lb(n,14).ngClassTouched,e.Lb(n,14).ngClassPristine,e.Lb(n,14).ngClassDirty,e.Lb(n,14).ngClassValid,e.Lb(n,14).ngClassInvalid,e.Lb(n,14).ngClassPending,e.Lb(n,15).externalId,e.Lb(n,15).classList),l(n,56,0,e.Lb(n,57).externalId,e.Lb(n,57).classList),l(n,58,0,e.Lb(n,59).externalId,e.Lb(n,59).classList),l(n,60,0,e.Lb(n,61).externalId,e.Lb(n,61).classList),l(n,65,0,e.Lb(n,66).externalId,e.Lb(n,66).classList)}))}function I(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,1,"app-input-page",[],null,null,null,v,L)),e.wb(1,114688,null,0,b,[t.d],null,null)],(function(l,n){l(n,1,0)}),null)}var T=e.tb("app-input-page",b,I,{},{},[]),w=u("nSAT"),y=u("Dojj"),C=u("HUIY"),J=u("2XCp"),j=u("osiK"),O=u("PCNd"),P=u("981U"),E=e.ub(a,[],(function(l){return e.Ib([e.Jb(512,e.j,e.X,[[8,[i.a,T]],[3,e.j],e.x]),e.Jb(4608,s.l,s.k,[e.u]),e.Jb(4608,t.d,t.d,[]),e.Jb(4608,t.q,t.q,[]),e.Jb(1073742336,s.b,s.b,[]),e.Jb(1073742336,t.p,t.p,[]),e.Jb(1073742336,t.n,t.n,[]),e.Jb(1073742336,w.a,w.a,[]),e.Jb(1073742336,t.h,t.h,[]),e.Jb(1073742336,y.a,y.a,[]),e.Jb(1073742336,C.a,C.a,[]),e.Jb(1073742336,J.a,J.a,[]),e.Jb(1073742336,j.a,j.a,[]),e.Jb(1073742336,O.a,O.a,[]),e.Jb(1073742336,P.o,P.o,[[2,P.t],[2,P.k]]),e.Jb(1073742336,a,a,[]),e.Jb(1024,P.i,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);