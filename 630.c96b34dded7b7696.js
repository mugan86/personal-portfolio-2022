"use strict";(self.webpackChunkportfolio_2022=self.webpackChunkportfolio_2022||[]).push([[630],{7630:(Jn,ie,l)=>{l.r(ie),l.d(ie,{PortfolioModule:()=>$n,createTranslateLoader:()=>gt});var d=l(6895),B=l(5479),o=l(8274),_=l(4032),se=l(3525),ae=l(6713),mt=l(5619),vt=l(1775);function Ct(t,n){if(1&t&&o._UZ(0,"app-badge",9),2&t){const e=n.$implicit;o.Q6J("label",e.label)("backgroundColor",e.color)}}function Vt(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"button",10),o.NdJ("click",function(){o.CHM(e);const i=o.oxw();return o.KtG(i.openExternal(i.info.git))}),o._uU(1),o.ALo(2,"translate"),o.qZA()}if(2&t){const e=o.oxw();o.xp6(1),o.hij(" ",o.lcZ(2,1,e.btnExternalLabel)," ")}}let bt=(()=>{class t{constructor(e){this.router=e,this.info={title:"Please you must be specify title",description:"Please you must be specify description",price:0},this.externalRouter="-",this.btnDetailsLabel="Detalles",this.btnExternalLabel="C\xf3digo",this.showDetails=r=>this.router.navigate(["/portfolio/item",r]),this.openExternal=r=>window.open(r,"_blank")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(B.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-one-colum-portfolio"]],inputs:{info:"info",externalRouter:"externalRouter",btnDetailsLabel:"btnDetailsLabel",btnExternalLabel:"btnExternalLabel"},decls:18,vars:10,consts:[[1,"row"],[1,"col-md-2"],["loading","lazy","onerror","this.src='/assets/img/default.webp'",1,"img-fluid","rounded-3","mb-3","mb-md-0",3,"src","alt"],[1,"col-md"],[1,"fa-solid","fa-hammer"],[3,"label","backgroundColor",4,"ngFor","ngForOf"],[3,"innerHTML"],["type","button",1,"btn","btn-anartz",3,"click"],["type","button","class","btn btn-outline-anartz ms-3",3,"click",4,"ngIf"],[3,"label","backgroundColor"],["type","button",1,"btn","btn-outline-anartz","ms-3",3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h3"),o._uU(5),o.qZA(),o.TgZ(6,"p"),o._UZ(7,"i",4),o._uU(8,"\xa0 "),o.TgZ(9,"b"),o._uU(10),o.qZA()(),o.YNc(11,Ct,1,2,"app-badge",5),o._UZ(12,"p",6),o.TgZ(13,"button",7),o.NdJ("click",function(){return r.openExternal(r.info.externalRouter)}),o._uU(14),o.ALo(15,"translate"),o.qZA(),o.YNc(16,Vt,3,3,"button",8),o.qZA()(),o._UZ(17,"hr")),2&e&&(o.xp6(2),o.s9C("src",r.info.image,o.LSH),o.s9C("alt",r.info.title),o.xp6(3),o.Oqu(r.info.title),o.xp6(5),o.Oqu(r.info.year),o.xp6(1),o.Q6J("ngForOf",r.info.tags),o.xp6(1),o.Q6J("innerHTML",r.info.description,o.oJD),o.xp6(2),o.hij(" ",o.lcZ(15,8,r.btnDetailsLabel)," "),o.xp6(2),o.Q6J("ngIf",r.info.git&&""!==r.info.git))},dependencies:[d.sg,d.O5,vt.F,_.X$]}),t})(),At=(()=>{class t{transform(e){return[...Array(e)].map((r,i)=>i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Yjl({name:"enumerate",type:t,pure:!0}),t})();const k=function(t){return{disabled:t}};function Mt(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"li",2)(1,"a",8),o.NdJ("click",function(){const s=o.CHM(e).$implicit,a=o.oxw(2);return o.KtG(a.selectPage(s+1))}),o._uU(2),o.qZA()()}if(2&t){const e=n.$implicit,r=o.oxw(2);o.xp6(1),o.Q6J("ngClass",o.VKq(2,k,r.currentPage===e+1)),o.xp6(1),o.Oqu(e+1)}}function Dt(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"ul",1)(1,"li",2)(2,"a",3),o.NdJ("click",function(){o.CHM(e);const i=o.oxw();return o.KtG(i.selectPage(i.currentPage-1))}),o.TgZ(3,"span",4),o._uU(4,"\xab"),o.qZA(),o.TgZ(5,"span",5),o._uU(6,"Anterior"),o.qZA()()(),o.YNc(7,Mt,3,4,"li",6),o.ALo(8,"enumerate"),o.TgZ(9,"li",2)(10,"a",7),o.NdJ("click",function(){o.CHM(e);const i=o.oxw();return o.KtG(i.selectPage(i.currentPage+1))}),o.TgZ(11,"span",4),o._uU(12,"\xbb"),o.qZA(),o.TgZ(13,"span",5),o._uU(14,"Siguiente"),o.qZA()()()()}if(2&t){const e=o.oxw();o.xp6(2),o.Q6J("ngClass",o.VKq(5,k,1===e.currentPage)),o.xp6(5),o.Q6J("ngForOf",o.lcZ(8,3,e.optionsConfig.pages)),o.xp6(3),o.Q6J("ngClass",o.VKq(7,k,e.currentPage===e.optionsConfig.pages))}}let Ft=(()=>{class t{constructor(){this.itemsPerPage=5,this.infoElements=[],this.currentPage=1,this.showData=[],this.total=1,this.optionsConfig={page:this.currentPage,total:1,skip:0,itemsPage:this.itemsPerPage,pages:1},this.showInfoElements=new o.vpe,this.changePage=new o.vpe,this.renderNeedData=()=>{this.optionsConfig=this.pagination(this.currentPage,this.itemsPerPage);const e=this.showData.slice(this.optionsConfig.skip,this.optionsConfig.skip+this.optionsConfig.itemsPage);this.showInfoElements.emit(e),this.changePage.emit(this.currentPage)}}ngOnChanges(e){e.infoElements&&(this.showData=e.infoElements.currentValue),e.currentPage&&(this.currentPage=e.currentPage.currentValue),this.renderNeedData()}selectPage(e){this.currentPage=e,this.renderNeedData()}pagination(e=1,r=20,i={}){(r<1||r>10)&&(r=10),e<1&&(e=1);const s=this.infoElements.length;return{page:e,skip:(e-1)*r,itemsPage:r,total:s,pages:Math.ceil(s/r)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-pagination"]],inputs:{itemsPerPage:"itemsPerPage",infoElements:"infoElements",currentPage:"currentPage"},outputs:{showInfoElements:"showInfoElements",changePage:"changePage"},features:[o.TTD],decls:1,vars:1,consts:[["class","pagination justify-content-center mb-5",4,"ngIf"],[1,"pagination","justify-content-center","mb-5"],[1,"page-item"],["aria-label","Previous",1,"page-link",3,"ngClass","click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"ngClass","click"],[1,"page-link",3,"ngClass","click"]],template:function(e,r){1&e&&o.YNc(0,Dt,15,9,"ul",0),2&e&&o.Q6J("ngIf",r.optionsConfig.pages<=10)},dependencies:[d.mk,d.sg,d.O5,At],styles:["a.disabled[_ngcontent-%COMP%]{color:gray;pointer-events:none}a[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var wt=l(2076),Et=l(4128),Ot=l(4004);let le=(()=>{class t{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Qsj),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t}),t})(),y=(()=>{class t extends le{}return t.\u0275fac=function(){let n;return function(r){return(n||(n=o.n5z(t)))(r||t)}}(),t.\u0275dir=o.lG2({type:t,features:[o.qOj]}),t})();const h=new o.OlP("NgValueAccessor"),xt={provide:h,useExisting:(0,o.Gpc)(()=>D),multi:!0},Gt=new o.OlP("CompositionEventMode");let D=(()=>{class t extends le{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Pt(){const t=(0,d.q)()?(0,d.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Gt,8))},t.\u0275dir=o.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([xt]),o.qOj]}),t})();const u=new o.OlP("NgValidators"),g=new o.OlP("NgAsyncValidators");function ve(t){return null!=t}function Ce(t){return(0,o.QGY)(t)?(0,wt.D)(t):t}function Ve(t){let n={};return t.forEach(e=>{n=null!=e?{...n,...e}:n}),0===Object.keys(n).length?null:n}function be(t,n){return n.map(e=>e(t))}function Ae(t){return t.map(n=>function Bt(t){return!t.validate}(n)?n:e=>n.validate(e))}function I(t){return null!=t?function Me(t){if(!t)return null;const n=t.filter(ve);return 0==n.length?null:function(e){return Ve(be(e,n))}}(Ae(t)):null}function U(t){return null!=t?function De(t){if(!t)return null;const n=t.filter(ve);return 0==n.length?null:function(e){const r=be(e,n).map(Ce);return(0,Et.D)(r).pipe((0,Ot.U)(Ve))}}(Ae(t)):null}function Fe(t,n){return null===t?[n]:Array.isArray(t)?[...t,n]:[t,n]}function H(t){return t?Array.isArray(t)?t:[t]:[]}function w(t,n){return Array.isArray(t)?t.includes(n):t===n}function Oe(t,n){const e=H(n);return H(t).forEach(i=>{w(e,i)||e.push(i)}),e}function Ne(t,n){return H(n).filter(e=>!w(t,e))}class xe{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=I(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=U(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n){this.control&&this.control.reset(n)}hasError(n,e){return!!this.control&&this.control.hasError(n,e)}getError(n,e){return this.control?this.control.getError(n,e):null}}class c extends xe{get formDirective(){return null}get path(){return null}}class m extends xe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let Ge=(()=>{class t extends class Pe{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}{constructor(e){super(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m,2))},t.\u0275dir=o.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),t})();const V="VALID",O="INVALID",C="PENDING",b="DISABLED";function Te(t){return Array.isArray(t)?I(t):t||null}function Be(t){return Array.isArray(t)?U(t):t||null}function N(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}function A(t,n){(function $(t,n){const e=function we(t){return t._rawValidators}(t);null!==n.validator?t.setValidators(Fe(e,n.validator)):"function"==typeof e&&t.setValidators([e]);const r=function Ee(t){return t._rawAsyncValidators}(t);null!==n.asyncValidator?t.setAsyncValidators(Fe(r,n.asyncValidator)):"function"==typeof r&&t.setAsyncValidators([r]);const i=()=>t.updateValueAndValidity();G(n._rawValidators,i),G(n._rawAsyncValidators,i)})(t,n),n.valueAccessor.writeValue(t.value),t.disabled&&n.valueAccessor.setDisabledState?.(!0),function Yt(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&He(t,n)})}(t,n),function Jt(t,n){const e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}(t,n),function $t(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&He(t,n),"submit"!==t.updateOn&&t.markAsTouched()})}(t,n),function jt(t,n){if(n.valueAccessor.setDisabledState){const e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}(t,n)}function G(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function He(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ze(t,n){const e=t.indexOf(n);e>-1&&t.splice(e,1)}function je(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}const nn={provide:m,useExisting:(0,o.Gpc)(()=>Q)},ze=(()=>Promise.resolve(null))();let Q=(()=>{class t extends m{constructor(e,r,i,s,a){super(),this._changeDetectorRef=a,this.control=new class extends class Ue{constructor(n,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=n,this._rawAsyncValidators=e,this._composedValidatorFn=Te(this._rawValidators),this._composedAsyncValidatorFn=Be(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===O}get pending(){return this.status==C}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._rawValidators=n,this._composedValidatorFn=Te(n)}setAsyncValidators(n){this._rawAsyncValidators=n,this._composedAsyncValidatorFn=Be(n)}addValidators(n){this.setValidators(Oe(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Oe(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ne(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ne(n,this._rawAsyncValidators))}hasValidator(n){return w(this._rawValidators,n)}hasAsyncValidator(n){return w(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=C,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=V,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===C)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Ce(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(!1!==e.emitEvent)}get(n){let e=n;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(O)?O:V}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){N(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}}{constructor(n=null,e,r){super(function Z(t){return(N(t)?t.validators:t)||null}(e),function j(t,n){return(N(n)?n.asyncValidators:t)||null}(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),N(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=je(n)?n.value:n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ze(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ze(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){je(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function z(t,n){if(!n)return null;let e,r,i;return Array.isArray(n),n.forEach(s=>{s.constructor===D?e=s:function Qt(t){return Object.getPrototypeOf(t.constructor)===y}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function J(t,n){if(!t.hasOwnProperty("model"))return!1;const e=t.model;return!!e.isFirstChange()||!Object.is(n,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){A(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ze.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);ze.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function x(t,n){return[...n.path,t]}(e,this._parent):[e]}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c,9),o.Y36(u,10),o.Y36(g,10),o.Y36(h,10),o.Y36(o.sBO,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([nn]),o.qOj,o.TTD]}),t})(),Qe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),t})(),En=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[Qe]}),t})(),On=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[En]}),t})();function xn(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"label")(1,"input",29),o.NdJ("change",function(i){const a=o.CHM(e).$implicit,p=o.oxw(3);return o.KtG(p.selectUnselectOptions(i,"tech",a))}),o.qZA(),o.TgZ(2,"span"),o._uU(3),o.qZA()()}if(2&t){const e=n.$implicit;o.xp6(3),o.Oqu(e)}}function Pn(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"div",7)(1,"h4"),o._uU(2,"Filtrar por:"),o.qZA(),o.TgZ(3,"div",16)(4,"div",17)(5,"h2",18)(6,"button",19),o._uU(7," Tecnolog\xedas / Funcionalidades "),o.qZA()(),o.TgZ(8,"div",20)(9,"div",21)(10,"div",22),o.YNc(11,xn,4,1,"label",23),o.qZA()()()(),o.TgZ(12,"div",17)(13,"h2",24)(14,"button",25),o._uU(15," Proyecto finalizado "),o.qZA()(),o.TgZ(16,"div",26)(17,"div",21)(18,"div",22)(19,"label")(20,"input",27),o.NdJ("change",function(i){o.CHM(e);const s=o.oxw(2);return o.KtG(s.selectUnselectOptions(i,"finish","?"))}),o.qZA(),o.TgZ(21,"span"),o._uU(22,"Si"),o.qZA()()(),o.TgZ(23,"div",22)(24,"label")(25,"input",28),o.NdJ("change",function(i){o.CHM(e);const s=o.oxw(2);return o.KtG(s.selectUnselectOptions(i,"finish",""))}),o.qZA(),o.TgZ(26,"span"),o._uU(27,"No"),o.qZA()()()()()()()()}if(2&t){const e=o.oxw(2);o.xp6(11),o.Q6J("ngForOf",e.filtersByTechnologies)}}function Gn(t,n){1&t&&o._UZ(0,"app-one-colum-portfolio",32),2&t&&o.Q6J("info",n.$implicit)("btnDetailsLabel","buttons.details")("btnExternalLabel","buttons.showCode")}function Sn(t,n){1&t&&(o.TgZ(0,"div",33),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"alerts.noResults")," "))}function Tn(t,n){if(1&t&&(o.TgZ(0,"div",8),o.YNc(1,Gn,1,3,"app-one-colum-portfolio",30),o.YNc(2,Sn,3,3,"div",31),o.qZA()),2&t){const e=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",e.showItems),o.xp6(1),o.Q6J("ngIf",0===e.pagination.length)}}function Bn(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"app-pagination",34),o.NdJ("showInfoElements",function(i){o.CHM(e);const s=o.oxw(2);return o.KtG(s.loadData(i))})("changePage",function(i){o.CHM(e);const s=o.oxw(2);return o.KtG(s.changePage(i))}),o.qZA()}if(2&t){const e=o.oxw(2);o.Q6J("itemsPerPage",e.itemsPerPage)("infoElements",e.pagination)("currentPage",e.currentPage)}}function kn(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"h1",4),o._uU(4),o.ALo(5,"translate"),o.qZA(),o.TgZ(6,"p",5),o._uU(7),o.ALo(8,"translate"),o.qZA()(),o.TgZ(9,"div",6),o._UZ(10,"div",7),o.TgZ(11,"div",8)(12,"div",9)(13,"button",10),o.NdJ("click",function(){o.CHM(e);const i=o.oxw();return o.KtG(i.resetQuery())}),o._uU(14," X "),o.qZA(),o.TgZ(15,"input",11),o.NdJ("ngModelChange",function(i){o.CHM(e);const s=o.oxw();return o.KtG(s.query=i)})("ngModelChange",function(i){o.CHM(e);const s=o.oxw();return o.KtG(s.searchData(i))}),o.ALo(16,"translate"),o.qZA()()(),o._UZ(17,"div",7),o.qZA(),o.TgZ(18,"div",12),o.YNc(19,Pn,28,1,"div",13),o._UZ(20,"div",7),o.YNc(21,Tn,3,2,"div",14),o._UZ(22,"div",7),o.qZA(),o.TgZ(23,"div",12)(24,"div",8),o.YNc(25,Bn,1,3,"app-pagination",15),o.qZA()()()()}if(2&t){const e=o.oxw();o.xp6(4),o.Oqu(o.lcZ(5,7,"title")),o.xp6(3),o.hij(" ",o.lcZ(8,9,"subtitle")," "),o.xp6(8),o.s9C("placeholder",o.lcZ(16,11,"inputPlaceholder")),o.Q6J("ngModel",e.query),o.xp6(4),o.Q6J("ngIf",!1),o.xp6(2),o.Q6J("ngIf",e.showItems),o.xp6(4),o.Q6J("ngIf",e.pagination.length>0)}}let In=(()=>{class t{constructor(e){var n;this.translate=e,this.currentPage=1,this.itemsPerPage=4,this.infoElements=(0,ae.y)(se.y),this.pagination=this.infoElements.map(r=>({...r})),this.query="",this.filtersByYear=(n=(new Date).getFullYear(),Array.from({length:n-2012+1},(e,r)=>r+2012)),this.filtersByTechnologies=Object.values(mt.L).slice(1).map(t=>t.label),this.loadData=r=>{setTimeout(()=>{this.showItems=r})},this.changePage=r=>this.currentPage=r,this.resetQuery=()=>{this.query="",this.searchData("")},this.searchData=(r,i={tag:""})=>{if(console.log(this.query,i),this.currentPage=this.currentPage>1?1:this.currentPage,""===r)this.pagination=this.infoElements.map(s=>({...s}));else{let s=[];""===i.tag?s=this.infoElements.filter(a=>JSON.stringify(a).toLowerCase().includes(r.toLowerCase())):"year"===i.tag?console.log("Filt by filter options - year"):"tech"===i.tag&&console.log("Filt by filter options - technology"),this.pagination=s.map(a=>({...a}))}this.loadData(this.pagination)},this.selectUnselectOptions=(r,i,s)=>{console.log(r.target.checked,i,s),this.searchData(this.query,{tag:i,value:String(s)})},this.translate.use("es"),this.translate.setDefaultLang("es")}ngAfterViewInit(){setTimeout(()=>{this.infoElements=(0,ae.y)(se.y)})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(_.sK))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-portfolio-overview"]],decls:1,vars:1,consts:[["class","py-5",4,"ngIf"],[1,"py-5"],[1,"container-fluid","px-5","my-2"],[1,"text-center","mb-5"],[1,"fw-bolder"],[1,"lead","fw-normal","text-muted","mb-0"],[1,"row","mb-5"],[1,"col-lg-2"],[1,"col-lg"],[1,"input-group"],["id","btnGroupAddon",1,"btn","btn-anartz","input-group-text",3,"click"],["type","text","autofocus","","id","listSearch","aria-describedby","btnGroupAddon",1,"form-control",3,"placeholder","ngModel","ngModelChange"],[1,"row"],["class","col-lg-2",4,"ngIf"],["class","col-lg",4,"ngIf"],[3,"itemsPerPage","infoElements","currentPage","showInfoElements","changePage",4,"ngIf"],["id","accordionExample",1,"accordion"],[1,"accordion-item"],["id","headingTwo",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"accordion-button","collapsed"],["id","collapseTwo","aria-labelledby","headingTwo","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],[1,"accordion-body"],[1,"list-group"],[4,"ngFor","ngForOf"],["id","headingFour",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseFour","aria-expanded","true","aria-controls","collapseFour",1,"accordion-button"],["id","collapseFour","aria-labelledby","headingFour","data-bs-parent","#accordionExample",1,"accordion-collapse"],["type","radio","value","","name","flexRadioDefault","checked","",1,"form-check-input","me-1",3,"change"],["type","radio","value","","name","flexRadioDefault",1,"form-check-input","me-2",3,"change"],["type","checkbox","value","","checked","",1,"form-check-input","me-1",3,"change"],[3,"info","btnDetailsLabel","btnExternalLabel",4,"ngFor","ngForOf"],["class","alert alert-info",4,"ngIf"],[3,"info","btnDetailsLabel","btnExternalLabel"],[1,"alert","alert-info"],[3,"itemsPerPage","infoElements","currentPage","showInfoElements","changePage"]],template:function(e,r){1&e&&o.YNc(0,kn,26,13,"section",0),2&e&&o.Q6J("ngIf",r.infoElements.length>0)},dependencies:[d.sg,d.O5,bt,Ft,D,Ge,Q,_.X$],styles:[".form-check-input[_ngcontent-%COMP%]{margin-left:0}span[_ngcontent-%COMP%]{padding-left:1.5rem}"]}),t})();const Un=[{path:"",component:(()=>{class t{constructor(e){this.translate=e,this.translate.use("es")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(_.sK))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-portfolio"]],decls:1,vars:0,template:function(e,r){1&e&&o._UZ(0,"app-portfolio-overview")},dependencies:[In]}),t})()}];let Hn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[B.Bz.forChild(Un),B.Bz]}),t})();var Rn=l(8398);let qn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez]}),t})(),Ln=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,Rn.Q,qn,On,_.aw]}),t})();var Zn=l(529),jn=l(9745),Yn=l(9148);const gt=t=>new Yn.H(t,jn.R.portfolio);let $n=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,Hn,_.aw.forChild({loader:{provide:_.Zw,useFactory:gt,deps:[Zn.eN]},isolate:!0}),Ln]}),t})()}}]);