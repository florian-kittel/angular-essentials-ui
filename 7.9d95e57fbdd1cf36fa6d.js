(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{qPxU:function(l,n,u){"use strict";u.r(n),u.d(n,"LoginFormsModuleNgFactory",(function(){return J}));var e=u("LoAr"),s=u("IfiR"),a=function(){function l(l){this.fb=l,this.errorMessages={email:{required:"First name is required.",minlength:"Name must be at least 4 characters long."},password:{required:"Last name is required",minlength:"Name must be at least 4 characters long."}},this.form=this.fb.group({email:[{value:null,disabled:!1},{validators:s.o.compose([s.o.required,s.o.email]),updateOn:"blur"}],password:[null,{validators:s.o.compose([s.o.required]),updateOn:"blur"}],info:["This is a read-only message"]})}return l.prototype.ngOnInit=function(){},l.prototype.onSubmit=function(){this.form.valid||this.markAsirtyAndTouched(this.form)},l.prototype.markAsirtyAndTouched=function(l){var n=this;Object.values(l.controls).forEach((function(l){l.markAsTouched(),l.markAsDirty(),l.controls&&n.markAsirtyAndTouched(l)}))},l}(),r=function(){return function(){}}(),t=u("C9Ky"),o=u("k7DL"),i=u("f3jc"),b=u("53Iv"),d=u("ChvG"),c=e.vb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Login-form examples"])),(l()(),e.xb(2,0,null,null,24,"div",[["style","max-width: 320px"]],null,null,null,null,null)),(l()(),e.xb(3,0,null,null,23,"form",[["autocomplete","off"],["class","label-top"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var s=!0;return"submit"===n&&(s=!1!==e.Lb(l,5).onSubmit(u)&&s),"reset"===n&&(s=!1!==e.Lb(l,5).onReset()&&s),s}),null,null)),e.wb(4,16384,null,0,s.s,[],null,null),e.wb(5,540672,null,0,s.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ob(2048,null,s.b,null,[s.g]),e.wb(7,16384,null,0,s.l,[[4,s.b]],null,null),(l()(),e.xb(8,0,null,null,4,"nge-input",[["formControlName","email"],["label","E-Mail"],["placeholder","Enter some text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[2,"nge-input",null]],null,null,o.b,o.a)),e.wb(9,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[8,null],[2,s.r]],{name:[0,"name"]},null),e.Ob(2048,null,s.j,null,[s.f]),e.wb(11,16384,null,0,s.k,[[4,s.j]],null,null),e.wb(12,376832,null,0,i.a,[[6,s.j]],{errorMessages:[0,"errorMessages"],placeholder:[1,"placeholder"],label:[2,"label"]},null),(l()(),e.xb(13,0,null,null,4,"nge-input",[["formControlName","password"],["label","Password"],["placeholder","Enter some text"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[2,"nge-input",null]],null,null,o.b,o.a)),e.wb(14,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[8,null],[2,s.r]],{name:[0,"name"]},null),e.Ob(2048,null,s.j,null,[s.f]),e.wb(16,16384,null,0,s.k,[[4,s.j]],null,null),e.wb(17,376832,null,0,i.a,[[6,s.j]],{errorMessages:[0,"errorMessages"],placeholder:[1,"placeholder"],label:[2,"label"],type:[3,"type"]},null),(l()(),e.xb(18,0,null,null,8,"div",[["class","d-flex justify-content-between"]],null,null,null,null,null)),(l()(),e.xb(19,0,null,null,3,"div",[["class","order-sm-1"]],null,null,null,null,null)),(l()(),e.xb(20,0,null,null,2,"nge-button",[["class","mr-2"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),b.b,b.a)),e.wb(21,114688,null,0,d.a,[],null,null),(l()(),e.Tb(-1,0,["Login"])),(l()(),e.xb(23,0,null,null,3,"div",[["class","order-sm-0"]],null,null,null,null,null)),(l()(),e.xb(24,0,null,null,2,"nge-button",[["class","mr-2"],["design","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),b.b,b.a)),e.wb(25,114688,null,0,d.a,[],{design:[0,"design"]},null),(l()(),e.Tb(-1,0,["Password lost"]))],(function(l,n){var u=n.component;l(n,5,0,u.form),l(n,9,0,"email"),l(n,12,0,u.errorMessages.email,"Enter some text","E-Mail"),l(n,14,0,"password"),l(n,17,0,u.errorMessages.password,"Enter some text","Password","password"),l(n,21,0),l(n,25,0,"clear")}),(function(l,n){l(n,3,0,e.Lb(n,7).ngClassUntouched,e.Lb(n,7).ngClassTouched,e.Lb(n,7).ngClassPristine,e.Lb(n,7).ngClassDirty,e.Lb(n,7).ngClassValid,e.Lb(n,7).ngClassInvalid,e.Lb(n,7).ngClassPending),l(n,8,0,e.Lb(n,11).ngClassUntouched,e.Lb(n,11).ngClassTouched,e.Lb(n,11).ngClassPristine,e.Lb(n,11).ngClassDirty,e.Lb(n,11).ngClassValid,e.Lb(n,11).ngClassInvalid,e.Lb(n,11).ngClassPending,e.Lb(n,12).externalId,e.Lb(n,12).classList),l(n,13,0,e.Lb(n,16).ngClassUntouched,e.Lb(n,16).ngClassTouched,e.Lb(n,16).ngClassPristine,e.Lb(n,16).ngClassDirty,e.Lb(n,16).ngClassValid,e.Lb(n,16).ngClassInvalid,e.Lb(n,16).ngClassPending,e.Lb(n,17).externalId,e.Lb(n,17).classList)}))}function m(l){return e.Wb(0,[(l()(),e.xb(0,0,null,null,1,"app-login-forms",[],null,null,null,g,c)),e.wb(1,114688,null,0,a,[s.d],null,null)],(function(l,n){l(n,1,0)}),null)}var p=e.tb("app-login-forms",a,m,{},{},[]),f=u("WT9V"),h=u("nSAT"),L=u("Dojj"),w=u("HUIY"),v=u("2XCp"),C=u("osiK"),x=u("PCNd"),y=u("981U"),J=e.ub(r,[],(function(l){return e.Ib([e.Jb(512,e.j,e.X,[[8,[t.a,p]],[3,e.j],e.x]),e.Jb(4608,f.l,f.k,[e.u]),e.Jb(4608,s.d,s.d,[]),e.Jb(4608,s.q,s.q,[]),e.Jb(1073742336,f.b,f.b,[]),e.Jb(1073742336,s.p,s.p,[]),e.Jb(1073742336,s.n,s.n,[]),e.Jb(1073742336,h.a,h.a,[]),e.Jb(1073742336,s.h,s.h,[]),e.Jb(1073742336,L.a,L.a,[]),e.Jb(1073742336,w.a,w.a,[]),e.Jb(1073742336,v.a,v.a,[]),e.Jb(1073742336,C.a,C.a,[]),e.Jb(1073742336,x.a,x.a,[]),e.Jb(1073742336,y.o,y.o,[[2,y.t],[2,y.k]]),e.Jb(1073742336,r,r,[]),e.Jb(1024,y.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);