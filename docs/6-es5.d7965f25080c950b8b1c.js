!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{U2MP:function(o,n,t){"use strict";t.r(n),t.d(n,"LoginFormsModule",(function(){return p}));var s,a,i=t("nIj0"),l=t("EM62"),c=t("f3jc"),u=t("ChvG"),b=((s=function(){function o(r){e(this,o),this.fb=r,this.errorMessages={email:{required:"First name is required.",minlength:"Name must be at least 4 characters long."},password:{required:"Last name is required",minlength:"Name must be at least 4 characters long."}},this.form=this.fb.group({email:[{value:null,disabled:!1},{validators:i.l.compose([i.l.required,i.l.email]),updateOn:"blur"}],password:[null,{validators:i.l.compose([i.l.required]),updateOn:"blur"}],info:["This is a read-only message"]})}var n,t,s;return n=o,(t=[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(){this.form.valid||this.markAsirtyAndTouched(this.form)}},{key:"markAsirtyAndTouched",value:function(e){var r=this;Object.values(e.controls).forEach((function(e){e.markAsTouched(),e.markAsDirty(),e.controls&&r.markAsirtyAndTouched(e)}))}}])&&r(n.prototype,t),s&&r(n,s),o}()).\u0275fac=function(e){return new(e||s)(l.Hb(i.b))},s.\u0275cmp=l.Bb({type:s,selectors:[["app-login-forms"]],decls:13,vars:3,consts:[[2,"max-width","320px"],["autocomplete","off",1,"label-top",3,"formGroup"],["placeholder","Enter some text","label","E-Mail","formControlName","email",3,"errorMessages"],["placeholder","Enter some text","label","Password","type","password","formControlName","password",3,"errorMessages"],[1,"d-flex","justify-content-between"],[1,"order-sm-1"],[1,"mr-2",3,"click"],[1,"order-sm-0"],["design","clear",1,"mr-2",3,"click"]],template:function(e,r){1&e&&(l.Kb(0,"h1"),l.dc(1,"Login-form examples"),l.Jb(),l.Kb(2,"div",0),l.Kb(3,"form",1),l.Ib(4,"nge-input",2),l.Ib(5,"nge-input",3),l.Kb(6,"div",4),l.Kb(7,"div",5),l.Kb(8,"nge-button",6),l.Qb("click",(function(){return r.onSubmit()})),l.dc(9,"Login"),l.Jb(),l.Jb(),l.Kb(10,"div",7),l.Kb(11,"nge-button",8),l.Qb("click",(function(){return r.onSubmit()})),l.dc(12,"Password lost"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(3),l.Xb("formGroup",r.form),l.xb(1),l.Xb("errorMessages",r.errorMessages.email),l.xb(1),l.Xb("errorMessages",r.errorMessages.password))},directives:[i.m,i.i,i.e,c.a,i.h,i.d,u.a],styles:[""]}),s),m=t("sEIs"),d=t("PCNd"),f=[{path:"",component:b}],p=((a=function r(){e(this,r)}).\u0275mod=l.Fb({type:a}),a.\u0275inj=l.Eb({factory:function(e){return new(e||a)},imports:[[d.a,m.c.forChild(f),i.k]]}),a)}}])}();