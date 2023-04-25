import{R as D,S as K,i as Q,s as $,x as z,y as B,e as O,z as N,A as I,b as T,K as Y,Q as k,v as ee,d as R,B as j,f as te,g as F,h as ae,N as P,O as ie,D as H,P as ne,w as re,C as se,H as oe,I as ue,J as le}from"./index.db8cfa52.js";import{c as x,f as ce,S as X}from"./classAdderBuilder.63d75fab.js";var M=function(i,t){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},M(i,t)};function de(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");M(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var _=function(){return _=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},_.apply(this,arguments)};function A(i){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&i[t],a=0;if(e)return e.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&a>=i.length&&(i=void 0),{value:i&&i[a++],done:!i}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Le(i,t){var e=typeof Symbol=="function"&&i[Symbol.iterator];if(!e)return i;var a=e.call(i),n,r=[],o;try{for(;(t===void 0||t-- >0)&&!(n=a.next()).done;)r.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return r}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fe=function(){function i(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function pe(i){return i===void 0&&(i=window),me(i)?{passive:!0}:!1}function me(i){i===void 0&&(i=window);var t=!1;try{var e={get passive(){return t=!0,!1}},a=function(){};i.document.addEventListener("test",a,e),i.document.removeEventListener("test",a,e)}catch{t=!1}return t}const he=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:pe},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ve(i,t){if(i.closest)return i.closest(t);for(var e=i;e;){if(V(e,t))return e;e=e.parentElement}return null}function V(i,t){var e=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return e.call(i,t)}function ge(i){var t=i;if(t.offsetParent!==null)return t.scrollWidth;var e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var a=e.scrollWidth;return document.documentElement.removeChild(e),a}const ye=Object.freeze(Object.defineProperty({__proto__:null,closest:ve,estimateScrollWidth:ge,matches:V},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var be={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},_e={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},q={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},w;function Ae(i,t){t===void 0&&(t=!1);var e=i.CSS,a=w;if(typeof w=="boolean"&&!t)return w;var n=e&&typeof e.supports=="function";if(!n)return!1;var r=e.supports("--css-vars","yes"),o=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return a=r||o,t||(w=a),a}function we(i,t,e){if(!i)return{x:0,y:0};var a=t.x,n=t.y,r=a+e.left,o=n+e.top,s,u;if(i.type==="touchstart"){var c=i;s=c.changedTouches[0].pageX-r,u=c.changedTouches[0].pageY-o}else{var d=i;s=d.pageX-r,u=d.pageY-o}return{x:s,y:u}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var W=["touchstart","pointerdown","mousedown","keydown"],E=["touchend","pointerup","mouseup","contextmenu"],S=[],Se=function(i){de(t,i);function t(e){var a=i.call(this,_(_({},t.defaultAdapter),e))||this;return a.activationAnimationHasEnded=!1,a.activationTimer=0,a.fgDeactivationRemovalTimer=0,a.fgScale="0",a.frame={width:0,height:0},a.initialSize=0,a.layoutFrame=0,a.maxRadius=0,a.unboundedCoords={left:0,top:0},a.activationState=a.defaultActivationState(),a.activationTimerCallback=function(){a.activationAnimationHasEnded=!0,a.runDeactivationUXLogicIfReady()},a.activateHandler=function(n){a.activateImpl(n)},a.deactivateHandler=function(){a.deactivateImpl()},a.focusHandler=function(){a.handleFocus()},a.blurHandler=function(){a.handleBlur()},a.resizeHandler=function(){a.layout()},a}return Object.defineProperty(t,"cssClasses",{get:function(){return be},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return q},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,a=this.supportsPressRipple();if(this.registerRootHandlers(a),a){var n=t.cssClasses,r=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(r),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())})}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var a=t.cssClasses,n=a.ROOT,r=a.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(n),e.adapter.removeClass(r),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},t.prototype.setUnbounded=function(e){var a=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(a):this.adapter.removeClass(a)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)})},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)})},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var a,n;if(e){try{for(var r=A(W),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(u){a={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var a,n;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=A(E),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(u){a={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}},t.prototype.deregisterRootHandlers=function(){var e,a;try{for(var n=A(W),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){e={error:s}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,a;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=A(E),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){e={error:s}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,a=t.strings,n=Object.keys(a);n.forEach(function(r){r.indexOf("VAR_")===0&&e.adapter.updateCssVariable(a[r],null)})},t.prototype.activateImpl=function(e){var a=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var r=this.previousActivationEvent,o=r&&e!==void 0&&r.type!==e.type;if(!o){n.isActivated=!0,n.isProgrammatic=e===void 0,n.activationEvent=e,n.wasActivatedByPointer=n.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var s=e!==void 0&&S.length>0&&S.some(function(u){return a.adapter.containsEventTarget(u)});if(s){this.resetActivationState();return}e!==void 0&&(S.push(e.target),this.registerDeactivationHandlers(e)),n.wasElementMadeActive=this.checkElementMadeActive(e),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){S=[],!n.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(n.wasElementMadeActive=a.checkElementMadeActive(e),n.wasElementMadeActive&&a.animateActivation()),n.wasElementMadeActive||(a.activationState=a.defaultActivationState())})}}}},t.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},t.prototype.animateActivation=function(){var e=this,a=t.strings,n=a.VAR_FG_TRANSLATE_START,r=a.VAR_FG_TRANSLATE_END,o=t.cssClasses,s=o.FG_DEACTIVATION,u=o.FG_ACTIVATION,c=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var d="",f="";if(!this.adapter.isUnbounded()){var v=this.getFgTranslationCoordinates(),g=v.startPoint,l=v.endPoint;d=g.x+"px, "+g.y+"px",f=l.x+"px, "+l.y+"px"}this.adapter.updateCssVariable(n,d),this.adapter.updateCssVariable(r,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},c)},t.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,a=e.activationEvent,n=e.wasActivatedByPointer,r;n?r=we(a,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,a=t.cssClasses.FG_DEACTIVATION,n=this.activationState,r=n.hasDeactivationUXRun,o=n.isActivated,s=r||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(a),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(a)},q.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,a=this.activationState;if(a.isActivated){var n=_({},a);a.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(n)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(n),e.resetActivationState()}))}},t.prototype.animateDeactivation=function(e){var a=e.wasActivatedByPointer,n=e.wasElementMadeActive;(a||n)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var a=Math.max(this.frame.height,this.frame.width),n=function(){var o=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return o+t.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?a:n();var r=Math.floor(a*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,a=e.VAR_FG_SIZE,n=e.VAR_LEFT,r=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(a,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(n,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},t}(fe);function Ue(i,t,e,a={bubbles:!0},n=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!i)throw new Error("Tried to dipatch event without element.");const r=new CustomEvent(t,Object.assign(Object.assign({},a),{detail:e}));if(i==null||i.dispatchEvent(r),n&&t.startsWith("SMUI")){const o=new CustomEvent(t.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},a),{detail:e}));i==null||i.dispatchEvent(o),o.defaultPrevented&&r.preventDefault()}return r}const{applyPassive:C}=he,{matches:Ce}=ye;function Ge(i,{ripple:t=!0,surface:e=!1,unbounded:a=!1,disabled:n=!1,color:r,active:o,rippleElement:s,eventTarget:u,activeTarget:c,addClass:d=l=>i.classList.add(l),removeClass:f=l=>i.classList.remove(l),addStyle:v=(l,y)=>i.style.setProperty(l,y),initPromise:g=Promise.resolve()}={}){let l,y=D("SMUI:addLayoutListener"),b,p=o,L=u,U=c;function G(){e?(d("mdc-ripple-surface"),r==="primary"?(d("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):r==="secondary"?(f("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),l&&p!==o&&(p=o,o?l.activate():o===!1&&l.deactivate()),t&&!l?(l=new Se({addClass:d,browserSupportsCssVars:()=>Ae(window),computeBoundingRect:()=>(s||i).getBoundingClientRect(),containsEventTarget:m=>i.contains(m),deregisterDocumentInteractionHandler:(m,h)=>document.documentElement.removeEventListener(m,h,C()),deregisterInteractionHandler:(m,h)=>(u||i).removeEventListener(m,h,C()),deregisterResizeHandler:m=>window.removeEventListener("resize",m),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??Ce(c||i,":active"),isSurfaceDisabled:()=>!!n,isUnbounded:()=>!!a,registerDocumentInteractionHandler:(m,h)=>document.documentElement.addEventListener(m,h,C()),registerInteractionHandler:(m,h)=>(u||i).addEventListener(m,h,C()),registerResizeHandler:m=>window.addEventListener("resize",m),removeClass:f,updateCssVariable:v}),g.then(()=>{l&&(l.init(),l.setUnbounded(a))})):l&&!t&&g.then(()=>{l&&(l.destroy(),l=void 0)}),l&&(L!==u||U!==c)&&(L=u,U=c,l.destroy(),requestAnimationFrame(()=>{l&&(l.init(),l.setUnbounded(a))})),!t&&a&&d("mdc-ripple-upgraded--unbounded")}G(),y&&(b=y(Z));function Z(){l&&l.layout()}return{update(m){({ripple:t,surface:e,unbounded:a,disabled:n,color:r,active:o,rippleElement:s,eventTarget:u,activeTarget:c,addClass:d,removeClass:f,addStyle:v,initPromise:g}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:h=>i.classList.add(h),removeClass:h=>i.classList.remove(h),addStyle:(h,J)=>i.style.setProperty(h,J),initPromise:Promise.resolve()},m)),G()},destroy(){l&&(l.destroy(),l=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),b&&b()}}}function De(i){let t;const e=i[10].default,a=se(e,i,i[12],null);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,r){a&&a.m(n,r),t=!0},p(n,r){a&&a.p&&(!t||r&4096)&&oe(a,e,n,n[12],t?le(e,n[12],r,null):ue(n[12]),null)},i(n){t||(F(a,n),t=!0)},o(n){R(a,n),t=!1},d(n){a&&a.d(n)}}}function Re(i){let t,e,a;const n=[{tag:i[3]},{use:[i[5],...i[0]]},{class:x({[i[1]]:!0,"mdc-button__label":i[6]==="button","mdc-fab__label":i[6]==="fab","mdc-tab__text-label":i[6]==="tab","mdc-image-list__label":i[6]==="image-list","mdc-snackbar__label":i[6]==="snackbar","mdc-banner__text":i[6]==="banner","mdc-segmented-button__label":i[6]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":i[6]==="data-table:pagination","mdc-data-table__header-cell-label":i[6]==="data-table:sortable-header-cell"})},i[6]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:i[7]},i[8]];var r=i[2];function o(s){let u={$$slots:{default:[De]},$$scope:{ctx:s}};for(let c=0;c<n.length;c+=1)u=H(u,n[c]);return{props:u}}return r&&(t=z(r,o(i)),i[11](t)),{c(){t&&B(t.$$.fragment),e=O()},l(s){t&&N(t.$$.fragment,s),e=O()},m(s,u){t&&I(t,s,u),T(s,e,u),a=!0},p(s,[u]){const c=u&491?Y(n,[u&8&&{tag:s[3]},u&33&&{use:[s[5],...s[0]]},u&66&&{class:x({[s[1]]:!0,"mdc-button__label":s[6]==="button","mdc-fab__label":s[6]==="fab","mdc-tab__text-label":s[6]==="tab","mdc-image-list__label":s[6]==="image-list","mdc-snackbar__label":s[6]==="snackbar","mdc-banner__text":s[6]==="banner","mdc-segmented-button__label":s[6]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":s[6]==="data-table:pagination","mdc-data-table__header-cell-label":s[6]==="data-table:sortable-header-cell"})},u&64&&k(s[6]==="snackbar"?{"aria-atomic":"false"}:{}),u&128&&{tabindex:s[7]},u&256&&k(s[8])]):{};if(u&4096&&(c.$$scope={dirty:u,ctx:s}),u&4&&r!==(r=s[2])){if(t){ee();const d=t;R(d.$$.fragment,1,0,()=>{j(d,1)}),te()}r?(t=z(r,o(s)),s[11](t),B(t.$$.fragment),F(t.$$.fragment,1),I(t,e.parentNode,e)):t=null}else r&&t.$set(c)},i(s){a||(t&&F(t.$$.fragment,s),a=!0)},o(s){t&&R(t.$$.fragment,s),a=!1},d(s){i[11](null),s&&ae(e),t&&j(t,s)}}}function Fe(i,t,e){const a=["use","class","component","tag","getElement"];let n=P(t,a),{$$slots:r={},$$scope:o}=t;const s=ce(ie());let{use:u=[]}=t,{class:c=""}=t,d,{component:f=X}=t,{tag:v=f===X?"span":void 0}=t;const g=D("SMUI:label:context"),l=D("SMUI:label:tabindex");function y(){return d.getElement()}function b(p){re[p?"unshift":"push"](()=>{d=p,e(4,d)})}return i.$$set=p=>{t=H(H({},t),ne(p)),e(8,n=P(t,a)),"use"in p&&e(0,u=p.use),"class"in p&&e(1,c=p.class),"component"in p&&e(2,f=p.component),"tag"in p&&e(3,v=p.tag),"$$scope"in p&&e(12,o=p.$$scope)},[u,c,f,v,d,s,g,l,n,y,r,b,o]}class ze extends K{constructor(t){super(),Q(this,t,Fe,Re,$,{use:0,class:1,component:2,tag:3,getElement:9})}get getElement(){return this.$$.ctx[9]}}export{ze as C,fe as M,Ge as R,de as _,_ as a,Le as b,A as c,Ue as d,ye as p};