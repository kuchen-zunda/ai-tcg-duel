(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var hg={exports:{}},tl={},dg={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=Symbol.for("react.element"),KE=Symbol.for("react.portal"),GE=Symbol.for("react.fragment"),QE=Symbol.for("react.strict_mode"),YE=Symbol.for("react.profiler"),XE=Symbol.for("react.provider"),JE=Symbol.for("react.context"),ZE=Symbol.for("react.forward_ref"),ew=Symbol.for("react.suspense"),tw=Symbol.for("react.memo"),nw=Symbol.for("react.lazy"),Vf=Symbol.iterator;function rw(t){return t===null||typeof t!="object"?null:(t=Vf&&t[Vf]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function Ai(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gg(){}gg.prototype=Ai.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}var sh=ih.prototype=new gg;sh.constructor=ih;pg(sh,Ai.prototype);sh.isPureReactComponent=!0;var Lf=Array.isArray,yg=Object.prototype.hasOwnProperty,oh={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,r)&&!vg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gs,type:t,key:s,ref:a,props:i,_owner:oh.current}}function iw(t,e){return{$$typeof:Gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gs}function sw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mf=/\/+/g;function nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sw(""+t.key):e.toString(36)}function Qo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Gs:case KE:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+nu(a,0):r,Lf(i)?(n="",t!=null&&(n=t.replace(Mf,"$&/")+"/"),Qo(i,e,n,"",function(h){return h})):i!=null&&(ah(i)&&(i=iw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Mf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Lf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+nu(s,l);a+=Qo(s,e,n,u,i)}else if(u=rw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+nu(s,l++),a+=Qo(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ko(t,e,n){if(t==null)return t;var r=[],i=0;return Qo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ow(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},Yo={transition:null},aw={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:oh};function Eg(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:ko,forEach:function(t,e,n){ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ko(t,function(){e++}),e},toArray:function(t){return ko(t,function(e){return e})||[]},only:function(t){if(!ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Ai;Y.Fragment=GE;Y.Profiler=YE;Y.PureComponent=ih;Y.StrictMode=QE;Y.Suspense=ew;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aw;Y.act=Eg;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pg({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=oh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)yg.call(e,u)&&!vg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Gs,type:t.type,key:i,ref:s,props:r,_owner:a}};Y.createContext=function(t){return t={$$typeof:JE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XE,_context:t},t.Consumer=t};Y.createElement=_g;Y.createFactory=function(t){var e=_g.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:ZE,render:t}};Y.isValidElement=ah;Y.lazy=function(t){return{$$typeof:nw,_payload:{_status:-1,_result:t},_init:ow}};Y.memo=function(t,e){return{$$typeof:tw,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};Y.unstable_act=Eg;Y.useCallback=function(t,e){return nt.current.useCallback(t,e)};Y.useContext=function(t){return nt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return nt.current.useEffect(t,e)};Y.useId=function(){return nt.current.useId()};Y.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return nt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};Y.useRef=function(t){return nt.current.useRef(t)};Y.useState=function(t){return nt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return nt.current.useTransition()};Y.version="18.3.1";dg.exports=Y;var hr=dg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lw=hr,uw=Symbol.for("react.element"),cw=Symbol.for("react.fragment"),hw=Object.prototype.hasOwnProperty,dw=lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fw={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)hw.call(e,r)&&!fw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uw,type:t,key:s,ref:a,props:i,_owner:dw.current}}tl.Fragment=cw;tl.jsx=wg;tl.jsxs=wg;hg.exports=tl;var se=hg.exports,Tg={exports:{}},mt={},Ig={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var G=z.length;z.push(W);e:for(;0<G;){var fe=G-1>>>1,oe=z[fe];if(0<i(oe,W))z[fe]=W,z[G]=oe,G=fe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],G=z.pop();if(G!==W){z[0]=G;e:for(var fe=0,oe=z.length,we=oe>>>1;fe<we;){var Kt=2*(fe+1)-1,Gt=z[Kt],Qt=Kt+1,Yt=z[Qt];if(0>i(Gt,G))Qt<oe&&0>i(Yt,Gt)?(z[fe]=Yt,z[Qt]=G,fe=Qt):(z[fe]=Gt,z[Kt]=G,fe=Kt);else if(Qt<oe&&0>i(Yt,G))z[fe]=Yt,z[Qt]=G,fe=Qt;else break e}}return W}function i(z,W){var G=z.sortIndex-W.sortIndex;return G!==0?G:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,g=null,v=3,k=!1,N=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=z)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function O(z){if(D=!1,S(z),!N)if(n(u)!==null)N=!0,xi(U);else{var W=n(h);W!==null&&Wt(O,W.startTime-z)}}function U(z,W){N=!1,D&&(D=!1,I(m),m=-1),k=!0;var G=v;try{for(S(W),g=n(u);g!==null&&(!(g.expirationTime>W)||z&&!A());){var fe=g.callback;if(typeof fe=="function"){g.callback=null,v=g.priorityLevel;var oe=fe(g.expirationTime<=W);W=t.unstable_now(),typeof oe=="function"?g.callback=oe:g===n(u)&&r(u),S(W)}else r(u);g=n(u)}if(g!==null)var we=!0;else{var Kt=n(h);Kt!==null&&Wt(O,Kt.startTime-W),we=!1}return we}finally{g=null,v=G,k=!1}}var F=!1,_=null,m=-1,y=5,w=-1;function A(){return!(t.unstable_now()-w<y)}function R(){if(_!==null){var z=t.unstable_now();w=z;var W=!0;try{W=_(!0,z)}finally{W?T():(F=!1,_=null)}}else F=!1}var T;if(typeof E=="function")T=function(){E(R)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,rr=yt.port2;yt.port1.onmessage=R,T=function(){rr.postMessage(null)}}else T=function(){L(R,0)};function xi(z){_=z,F||(F=!0,T())}function Wt(z,W){m=L(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){N||k||(N=!0,xi(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var G=v;v=W;try{return z()}finally{v=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=v;v=z;try{return W()}finally{v=G}},t.unstable_scheduleCallback=function(z,W,G){var fe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?fe+G:fe):G=fe,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=G+oe,z={id:f++,callback:W,priorityLevel:z,startTime:G,expirationTime:oe,sortIndex:-1},G>fe?(z.sortIndex=G,e(h,z),n(u)===null&&z===n(h)&&(D?(I(m),m=-1):D=!0,Wt(O,G-fe))):(z.sortIndex=oe,e(u,z),N||k||(N=!0,xi(U))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var W=v;return function(){var G=v;v=W;try{return z.apply(this,arguments)}finally{v=G}}}})(Sg);Ig.exports=Sg;var pw=Ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mw=hr,pt=pw;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ag=new Set,Ss={};function Nr(t,e){di(t,e),di(t+"Capture",e)}function di(t,e){for(Ss[t]=e,t=0;t<e.length;t++)Ag.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,gw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Uf={};function yw(t){return zu.call(Uf,t)?!0:zu.call(Ff,t)?!1:gw.test(t)?Uf[t]=!0:(Ff[t]=!0,!1)}function vw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _w(t,e,n,r){if(e===null||typeof e>"u"||vw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lh,uh);Ue[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lh,uh);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lh,uh);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ch(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_w(e,n,i,r)&&(n=null),r||i===null?yw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vn=mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),zr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),dh=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),fh=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Ki(t){return t===null||typeof t!="object"?null:(t=bf&&t[bf]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,ru;function ns(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var iu=!1;function su(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ns(t):""}function Ew(t){switch(t.tag){case 5:return ns(t.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return t=su(t.type,!1),t;case 11:return t=su(t.type.render,!1),t;case 1:return t=su(t.type,!0),t;default:return""}}function Hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case zr:return"Portal";case ju:return"Profiler";case hh:return"StrictMode";case Bu:return"Suspense";case $u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kg:return(t.displayName||"Context")+".Consumer";case Cg:return(t._context.displayName||"Context")+".Provider";case dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fh:return e=t.displayName||null,e!==null?e:Hu(t.type)||"Memo";case Sn:e=t._payload,t=t._init;try{return Hu(t(e))}catch{}}return null}function ww(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tw(t){var e=Pg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=Tw(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qu(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dg(t,e){e=e.checked,e!=null&&ch(t,"checked",e,!1)}function Wu(t,e){Dg(t,e);var n=Kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,Kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var rs=Array.isArray;function Zr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(rs(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kn(n)}}function Og(t,e){var n=Kn(e.value),r=Kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $f(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,Vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function As(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iw=["Webkit","ms","Moz","O"];Object.keys(cs).forEach(function(t){Iw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),cs[e]=cs[t]})});function Lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||cs.hasOwnProperty(t)&&cs[t]?(""+e).trim():e+"px"}function Mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Sw=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(Sw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,ei=null,ti=null;function Hf(t){if(t=Xs(t)){if(typeof Zu!="function")throw Error(V(280));var e=t.stateNode;e&&(e=ol(e),Zu(t.stateNode,t.type,e))}}function Fg(t){ei?ti?ti.push(t):ti=[t]:ei=t}function Ug(){if(ei){var t=ei,e=ti;if(ti=ei=null,Hf(t),e)for(t=0;t<e.length;t++)Hf(e[t])}}function bg(t,e){return t(e)}function zg(){}var ou=!1;function jg(t,e,n){if(ou)return t(e,n);ou=!0;try{return bg(t,e,n)}finally{ou=!1,(ei!==null||ti!==null)&&(zg(),Ug())}}function Cs(t,e){var n=t.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var ec=!1;if(cn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){ec=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{ec=!1}function Aw(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var hs=!1,ya=null,va=!1,tc=null,Cw={onError:function(t){hs=!0,ya=t}};function kw(t,e,n,r,i,s,a,l,u){hs=!1,ya=null,Aw.apply(Cw,arguments)}function Rw(t,e,n,r,i,s,a,l,u){if(kw.apply(this,arguments),hs){if(hs){var h=ya;hs=!1,ya=null}else throw Error(V(198));va||(va=!0,tc=h)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qf(t){if(Dr(t)!==t)throw Error(V(188))}function Pw(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qf(i),t;if(s===r)return qf(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function $g(t){return t=Pw(t),t!==null?Hg(t):null}function Hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hg(t);if(e!==null)return e;t=t.sibling}return null}var qg=pt.unstable_scheduleCallback,Wf=pt.unstable_cancelCallback,Nw=pt.unstable_shouldYield,Dw=pt.unstable_requestPaint,Ie=pt.unstable_now,Ow=pt.unstable_getCurrentPriorityLevel,mh=pt.unstable_ImmediatePriority,Wg=pt.unstable_UserBlockingPriority,_a=pt.unstable_NormalPriority,xw=pt.unstable_LowPriority,Kg=pt.unstable_IdlePriority,nl=null,Ft=null;function Vw(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Fw,Lw=Math.log,Mw=Math.LN2;function Fw(t){return t>>>=0,t===0?32:31-(Lw(t)/Mw|0)|0}var Do=64,Oo=4194304;function is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ea(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=is(l):(s&=a,s!==0&&(r=is(s)))}else a=n&~i,a!==0?r=is(a):s!==0&&(r=is(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function Uw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Nt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=Uw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function zw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function Qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,yh,Xg,Jg,Zg,rc=!1,xo=[],Mn=null,Fn=null,Un=null,ks=new Map,Rs=new Map,Cn=[],jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(t,e){switch(t){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function Qi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Bw(t,e,n,r,i){switch(e){case"focusin":return Mn=Qi(Mn,t,e,n,r,i),!0;case"dragenter":return Fn=Qi(Fn,t,e,n,r,i),!0;case"mouseover":return Un=Qi(Un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ks.set(s,Qi(ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rs.set(s,Qi(Rs.get(s)||null,t,e,n,r,i)),!0}return!1}function ey(t){var e=dr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Bg(n),e!==null){t.blockedOn=e,Zg(t.priority,function(){Xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ju=r,n.target.dispatchEvent(r),Ju=null}else return e=Xs(n),e!==null&&yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gf(t,e,n){Xo(t)&&n.delete(e)}function $w(){rc=!1,Mn!==null&&Xo(Mn)&&(Mn=null),Fn!==null&&Xo(Fn)&&(Fn=null),Un!==null&&Xo(Un)&&(Un=null),ks.forEach(Gf),Rs.forEach(Gf)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,rc||(rc=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,$w)))}function Ps(t){function e(i){return Yi(i,t)}if(0<xo.length){Yi(xo[0],t);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mn!==null&&Yi(Mn,t),Fn!==null&&Yi(Fn,t),Un!==null&&Yi(Un,t),ks.forEach(e),Rs.forEach(e),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)ey(n),n.blockedOn===null&&Cn.shift()}var ni=vn.ReactCurrentBatchConfig,wa=!0;function Hw(t,e,n,r){var i=ie,s=ni.transition;ni.transition=null;try{ie=1,vh(t,e,n,r)}finally{ie=i,ni.transition=s}}function qw(t,e,n,r){var i=ie,s=ni.transition;ni.transition=null;try{ie=4,vh(t,e,n,r)}finally{ie=i,ni.transition=s}}function vh(t,e,n,r){if(wa){var i=ic(t,e,n,r);if(i===null)yu(t,e,r,Ta,n),Kf(t,r);else if(Bw(i,t,e,n,r))r.stopPropagation();else if(Kf(t,r),e&4&&-1<jw.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&Yg(s),s=ic(t,e,n,r),s===null&&yu(t,e,r,Ta,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yu(t,e,r,null,n)}}var Ta=null;function ic(t,e,n,r){if(Ta=null,t=ph(r),t=dr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ta=t,null}function ty(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ow()){case mh:return 1;case Wg:return 4;case _a:case xw:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var On=null,_h=null,Jo=null;function ny(){if(Jo)return Jo;var t,e=_h,n=e.length,r,i="value"in On?On.value:On.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Jo=i.slice(t,1<r?1-r:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function Qf(){return!1}function gt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:Qf,this.isPropagationStopped=Qf,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=gt(Ci),Ys=ge({},Ci,{view:0,detail:0}),Ww=gt(Ys),lu,uu,Xi,rl=ge({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xi&&(Xi&&t.type==="mousemove"?(lu=t.screenX-Xi.screenX,uu=t.screenY-Xi.screenY):uu=lu=0,Xi=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),Yf=gt(rl),Kw=ge({},rl,{dataTransfer:0}),Gw=gt(Kw),Qw=ge({},Ys,{relatedTarget:0}),cu=gt(Qw),Yw=ge({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),Xw=gt(Yw),Jw=ge({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zw=gt(Jw),e0=ge({},Ci,{data:0}),Xf=gt(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=r0[t])?!!e[t]:!1}function wh(){return i0}var s0=ge({},Ys,{key:function(t){if(t.key){var e=t0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wh,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o0=gt(s0),a0=ge({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=gt(a0),l0=ge({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wh}),u0=gt(l0),c0=ge({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=gt(c0),d0=ge({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=gt(d0),p0=[9,13,27,32],Th=cn&&"CompositionEvent"in window,ds=null;cn&&"documentMode"in document&&(ds=document.documentMode);var m0=cn&&"TextEvent"in window&&!ds,ry=cn&&(!Th||ds&&8<ds&&11>=ds),Zf=" ",ep=!1;function iy(t,e){switch(t){case"keyup":return p0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function g0(t,e){switch(t){case"compositionend":return sy(e);case"keypress":return e.which!==32?null:(ep=!0,Zf);case"textInput":return t=e.data,t===Zf&&ep?null:t;default:return null}}function y0(t,e){if(Br)return t==="compositionend"||!Th&&iy(t,e)?(t=ny(),Jo=_h=On=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ry&&e.locale!=="ko"?null:e.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v0[t.type]:e==="textarea"}function oy(t,e,n,r){Fg(r),e=Ia(e,"onChange"),0<e.length&&(n=new Eh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fs=null,Ns=null;function _0(t){yy(t,0)}function il(t){var e=qr(t);if(Ng(e))return t}function E0(t,e){if(t==="change")return e}var ay=!1;if(cn){var hu;if(cn){var du="oninput"in document;if(!du){var np=document.createElement("div");np.setAttribute("oninput","return;"),du=typeof np.oninput=="function"}hu=du}else hu=!1;ay=hu&&(!document.documentMode||9<document.documentMode)}function rp(){fs&&(fs.detachEvent("onpropertychange",ly),Ns=fs=null)}function ly(t){if(t.propertyName==="value"&&il(Ns)){var e=[];oy(e,Ns,t,ph(t)),jg(_0,e)}}function w0(t,e,n){t==="focusin"?(rp(),fs=e,Ns=n,fs.attachEvent("onpropertychange",ly)):t==="focusout"&&rp()}function T0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(Ns)}function I0(t,e){if(t==="click")return il(e)}function S0(t,e){if(t==="input"||t==="change")return il(e)}function A0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:A0;function Ds(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zu.call(e,i)||!Ot(t[i],e[i]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=ip(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cy(){for(var t=window,e=ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ga(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function C0(t){var e=cy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uy(n.ownerDocument.documentElement,n)){if(r!==null&&Ih(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sp(n,s);var a=sp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k0=cn&&"documentMode"in document&&11>=document.documentMode,$r=null,sc=null,ps=null,oc=!1;function op(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||$r==null||$r!==ga(r)||(r=$r,"selectionStart"in r&&Ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ps&&Ds(ps,r)||(ps=r,r=Ia(sc,"onSelect"),0<r.length&&(e=new Eh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$r)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},fu={},hy={};cn&&(hy=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function sl(t){if(fu[t])return fu[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hy)return fu[t]=e[n];return t}var dy=sl("animationend"),fy=sl("animationiteration"),py=sl("animationstart"),my=sl("transitionend"),gy=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){gy.set(t,e),Nr(e,[t])}for(var pu=0;pu<ap.length;pu++){var mu=ap[pu],R0=mu.toLowerCase(),P0=mu[0].toUpperCase()+mu.slice(1);er(R0,"on"+P0)}er(dy,"onAnimationEnd");er(fy,"onAnimationIteration");er(py,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(my,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));function lp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Rw(r,e,void 0,t),t.currentTarget=null}function yy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;lp(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;lp(i,l,h),s=u}}}if(va)throw t=tc,va=!1,tc=null,t}function ce(t,e){var n=e[hc];n===void 0&&(n=e[hc]=new Set);var r=t+"__bubble";n.has(r)||(vy(e,t,2,!1),n.add(r))}function gu(t,e,n){var r=0;e&&(r|=4),vy(n,t,r,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Os(t){if(!t[Mo]){t[Mo]=!0,Ag.forEach(function(n){n!=="selectionchange"&&(N0.has(n)||gu(n,!1,t),gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,gu("selectionchange",!1,e))}}function vy(t,e,n,r){switch(ty(e)){case 1:var i=Hw;break;case 4:i=qw;break;default:i=vh}n=i.bind(null,e,n,t),i=void 0,!ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=dr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}jg(function(){var h=s,f=ph(n),g=[];e:{var v=gy.get(t);if(v!==void 0){var k=Eh,N=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":k=o0;break;case"focusin":N="focus",k=cu;break;case"focusout":N="blur",k=cu;break;case"beforeblur":case"afterblur":k=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Gw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=u0;break;case dy:case fy:case py:k=Xw;break;case my:k=h0;break;case"scroll":k=Ww;break;case"wheel":k=f0;break;case"copy":case"cut":case"paste":k=Zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Jf}var D=(e&4)!==0,L=!D&&t==="scroll",I=D?v!==null?v+"Capture":null:v;D=[];for(var E=h,S;E!==null;){S=E;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,I!==null&&(O=Cs(E,I),O!=null&&D.push(xs(E,O,S)))),L)break;E=E.return}0<D.length&&(v=new k(v,N,null,n,f),g.push({event:v,listeners:D}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Ju&&(N=n.relatedTarget||n.fromElement)&&(dr(N)||N[hn]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=h,N=N?dr(N):null,N!==null&&(L=Dr(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=h),k!==N)){if(D=Yf,O="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=Jf,O="onPointerLeave",I="onPointerEnter",E="pointer"),L=k==null?v:qr(k),S=N==null?v:qr(N),v=new D(O,E+"leave",k,n,f),v.target=L,v.relatedTarget=S,O=null,dr(f)===h&&(D=new D(I,E+"enter",N,n,f),D.target=S,D.relatedTarget=L,O=D),L=O,k&&N)t:{for(D=k,I=N,E=0,S=D;S;S=Mr(S))E++;for(S=0,O=I;O;O=Mr(O))S++;for(;0<E-S;)D=Mr(D),E--;for(;0<S-E;)I=Mr(I),S--;for(;E--;){if(D===I||I!==null&&D===I.alternate)break t;D=Mr(D),I=Mr(I)}D=null}else D=null;k!==null&&up(g,v,k,D,!1),N!==null&&L!==null&&up(g,L,N,D,!0)}}e:{if(v=h?qr(h):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var U=E0;else if(tp(v))if(ay)U=S0;else{U=T0;var F=w0}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(U=I0);if(U&&(U=U(t,h))){oy(g,U,n,f);break e}F&&F(t,v,h),t==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&Ku(v,"number",v.value)}switch(F=h?qr(h):window,t){case"focusin":(tp(F)||F.contentEditable==="true")&&($r=F,sc=h,ps=null);break;case"focusout":ps=sc=$r=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,op(g,n,f);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":op(g,n,f)}var _;if(Th)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Br?iy(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(ry&&n.locale!=="ko"&&(Br||m!=="onCompositionStart"?m==="onCompositionEnd"&&Br&&(_=ny()):(On=f,_h="value"in On?On.value:On.textContent,Br=!0)),F=Ia(h,m),0<F.length&&(m=new Xf(m,t,null,n,f),g.push({event:m,listeners:F}),_?m.data=_:(_=sy(n),_!==null&&(m.data=_)))),(_=m0?g0(t,n):y0(t,n))&&(h=Ia(h,"onBeforeInput"),0<h.length&&(f=new Xf("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=_))}yy(g,e)})}function xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Cs(t,n),s!=null&&r.unshift(xs(t,s,i)),s=Cs(t,e),s!=null&&r.push(xs(t,s,i))),t=t.return}return r}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function up(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Cs(n,s),u!=null&&a.unshift(xs(n,u,l))):i||(u=Cs(n,s),u!=null&&a.push(xs(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var D0=/\r\n?/g,O0=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(D0,`
`).replace(O0,"")}function Fo(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(V(425))}function Sa(){}var ac=null,lc=null;function uc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(L0)}:cc;function L0(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ps(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Lt="__reactFiber$"+ki,Vs="__reactProps$"+ki,hn="__reactContainer$"+ki,hc="__reactEvents$"+ki,M0="__reactListeners$"+ki,F0="__reactHandles$"+ki;function dr(t){var e=t[Lt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hn]||n[Lt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[Lt])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[Lt]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function ol(t){return t[Vs]||null}var dc=[],Wr=-1;function tr(t){return{current:t}}function he(t){0>Wr||(t.current=dc[Wr],dc[Wr]=null,Wr--)}function le(t,e){Wr++,dc[Wr]=t.current,t.current=e}var Gn={},Qe=tr(Gn),ot=tr(!1),Er=Gn;function fi(t,e){var n=t.type.contextTypes;if(!n)return Gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function Aa(){he(ot),he(Qe)}function fp(t,e,n){if(Qe.current!==Gn)throw Error(V(168));le(Qe,e),le(ot,n)}function _y(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,ww(t)||"Unknown",i));return ge({},n,r)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gn,Er=Qe.current,le(Qe,t),le(ot,ot.current),!0}function pp(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=_y(t,e,Er),r.__reactInternalMemoizedMergedChildContext=t,he(ot),he(Qe),le(Qe,t)):he(ot),le(ot,n)}var en=null,al=!1,_u=!1;function Ey(t){en===null?en=[t]:en.push(t)}function U0(t){al=!0,Ey(t)}function nr(){if(!_u&&en!==null){_u=!0;var t=0,e=ie;try{var n=en;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}en=null,al=!1}catch(i){throw en!==null&&(en=en.slice(t+1)),qg(mh,nr),i}finally{ie=e,_u=!1}}return null}var Kr=[],Gr=0,ka=null,Ra=0,vt=[],_t=0,wr=null,tn=1,nn="";function lr(t,e){Kr[Gr++]=Ra,Kr[Gr++]=ka,ka=t,Ra=e}function wy(t,e,n){vt[_t++]=tn,vt[_t++]=nn,vt[_t++]=wr,wr=t;var r=tn;t=nn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,tn=1<<32-Nt(e)+i|n<<i|r,nn=s+t}else tn=1<<s|n<<i|r,nn=t}function Sh(t){t.return!==null&&(lr(t,1),wy(t,1,0))}function Ah(t){for(;t===ka;)ka=Kr[--Gr],Kr[Gr]=null,Ra=Kr[--Gr],Kr[Gr]=null;for(;t===wr;)wr=vt[--_t],vt[_t]=null,nn=vt[--_t],vt[_t]=null,tn=vt[--_t],vt[_t]=null}var ft=null,dt=null,de=!1,Pt=null;function Ty(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,dt=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:tn,overflow:nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,dt=null,!0):!1;default:return!1}}function fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(de){var e=dt;if(e){var n=e;if(!mp(t,e)){if(fc(t))throw Error(V(418));e=bn(n.nextSibling);var r=ft;e&&mp(t,e)?Ty(r,n):(t.flags=t.flags&-4097|2,de=!1,ft=t)}}else{if(fc(t))throw Error(V(418));t.flags=t.flags&-4097|2,de=!1,ft=t}}}function gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function Uo(t){if(t!==ft)return!1;if(!de)return gp(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uc(t.type,t.memoizedProps)),e&&(e=dt)){if(fc(t))throw Iy(),Error(V(418));for(;e;)Ty(t,e),e=bn(e.nextSibling)}if(gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=ft?bn(t.stateNode.nextSibling):null;return!0}function Iy(){for(var t=dt;t;)t=bn(t.nextSibling)}function pi(){dt=ft=null,de=!1}function Ch(t){Pt===null?Pt=[t]:Pt.push(t)}var b0=vn.ReactCurrentBatchConfig;function Ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yp(t){var e=t._init;return e(t._payload)}function Sy(t){function e(I,E){if(t){var S=I.deletions;S===null?(I.deletions=[E],I.flags|=16):S.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=$n(I,E),I.index=0,I.sibling=null,I}function s(I,E,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<E?(I.flags|=2,E):S):(I.flags|=2,E)):(I.flags|=1048576,E)}function a(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,S,O){return E===null||E.tag!==6?(E=Cu(S,I.mode,O),E.return=I,E):(E=i(E,S),E.return=I,E)}function u(I,E,S,O){var U=S.type;return U===jr?f(I,E,S.props.children,O,S.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Sn&&yp(U)===E.type)?(O=i(E,S.props),O.ref=Ji(I,E,S),O.return=I,O):(O=oa(S.type,S.key,S.props,null,I.mode,O),O.ref=Ji(I,E,S),O.return=I,O)}function h(I,E,S,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=ku(S,I.mode,O),E.return=I,E):(E=i(E,S.children||[]),E.return=I,E)}function f(I,E,S,O,U){return E===null||E.tag!==7?(E=yr(S,I.mode,O,U),E.return=I,E):(E=i(E,S),E.return=I,E)}function g(I,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Cu(""+E,I.mode,S),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ro:return S=oa(E.type,E.key,E.props,null,I.mode,S),S.ref=Ji(I,null,E),S.return=I,S;case zr:return E=ku(E,I.mode,S),E.return=I,E;case Sn:var O=E._init;return g(I,O(E._payload),S)}if(rs(E)||Ki(E))return E=yr(E,I.mode,S,null),E.return=I,E;bo(I,E)}return null}function v(I,E,S,O){var U=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(I,E,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return S.key===U?u(I,E,S,O):null;case zr:return S.key===U?h(I,E,S,O):null;case Sn:return U=S._init,v(I,E,U(S._payload),O)}if(rs(S)||Ki(S))return U!==null?null:f(I,E,S,O,null);bo(I,S)}return null}function k(I,E,S,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(S)||null,l(E,I,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ro:return I=I.get(O.key===null?S:O.key)||null,u(E,I,O,U);case zr:return I=I.get(O.key===null?S:O.key)||null,h(E,I,O,U);case Sn:var F=O._init;return k(I,E,S,F(O._payload),U)}if(rs(O)||Ki(O))return I=I.get(S)||null,f(E,I,O,U,null);bo(E,O)}return null}function N(I,E,S,O){for(var U=null,F=null,_=E,m=E=0,y=null;_!==null&&m<S.length;m++){_.index>m?(y=_,_=null):y=_.sibling;var w=v(I,_,S[m],O);if(w===null){_===null&&(_=y);break}t&&_&&w.alternate===null&&e(I,_),E=s(w,E,m),F===null?U=w:F.sibling=w,F=w,_=y}if(m===S.length)return n(I,_),de&&lr(I,m),U;if(_===null){for(;m<S.length;m++)_=g(I,S[m],O),_!==null&&(E=s(_,E,m),F===null?U=_:F.sibling=_,F=_);return de&&lr(I,m),U}for(_=r(I,_);m<S.length;m++)y=k(_,I,m,S[m],O),y!==null&&(t&&y.alternate!==null&&_.delete(y.key===null?m:y.key),E=s(y,E,m),F===null?U=y:F.sibling=y,F=y);return t&&_.forEach(function(A){return e(I,A)}),de&&lr(I,m),U}function D(I,E,S,O){var U=Ki(S);if(typeof U!="function")throw Error(V(150));if(S=U.call(S),S==null)throw Error(V(151));for(var F=U=null,_=E,m=E=0,y=null,w=S.next();_!==null&&!w.done;m++,w=S.next()){_.index>m?(y=_,_=null):y=_.sibling;var A=v(I,_,w.value,O);if(A===null){_===null&&(_=y);break}t&&_&&A.alternate===null&&e(I,_),E=s(A,E,m),F===null?U=A:F.sibling=A,F=A,_=y}if(w.done)return n(I,_),de&&lr(I,m),U;if(_===null){for(;!w.done;m++,w=S.next())w=g(I,w.value,O),w!==null&&(E=s(w,E,m),F===null?U=w:F.sibling=w,F=w);return de&&lr(I,m),U}for(_=r(I,_);!w.done;m++,w=S.next())w=k(_,I,m,w.value,O),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?m:w.key),E=s(w,E,m),F===null?U=w:F.sibling=w,F=w);return t&&_.forEach(function(R){return e(I,R)}),de&&lr(I,m),U}function L(I,E,S,O){if(typeof S=="object"&&S!==null&&S.type===jr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:e:{for(var U=S.key,F=E;F!==null;){if(F.key===U){if(U=S.type,U===jr){if(F.tag===7){n(I,F.sibling),E=i(F,S.props.children),E.return=I,I=E;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Sn&&yp(U)===F.type){n(I,F.sibling),E=i(F,S.props),E.ref=Ji(I,F,S),E.return=I,I=E;break e}n(I,F);break}else e(I,F);F=F.sibling}S.type===jr?(E=yr(S.props.children,I.mode,O,S.key),E.return=I,I=E):(O=oa(S.type,S.key,S.props,null,I.mode,O),O.ref=Ji(I,E,S),O.return=I,I=O)}return a(I);case zr:e:{for(F=S.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(I,E.sibling),E=i(E,S.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=ku(S,I.mode,O),E.return=I,I=E}return a(I);case Sn:return F=S._init,L(I,E,F(S._payload),O)}if(rs(S))return N(I,E,S,O);if(Ki(S))return D(I,E,S,O);bo(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,S),E.return=I,I=E):(n(I,E),E=Cu(S,I.mode,O),E.return=I,I=E),a(I)):n(I,E)}return L}var mi=Sy(!0),Ay=Sy(!1),Pa=tr(null),Na=null,Qr=null,kh=null;function Rh(){kh=Qr=Na=null}function Ph(t){var e=Pa.current;he(Pa),t._currentValue=e}function mc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ri(t,e){Na=t,kh=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function Tt(t){var e=t._currentValue;if(kh!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(Na===null)throw Error(V(308));Qr=t,Na.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var fr=null;function Nh(t){fr===null?fr=[t]:fr.push(t)}function Cy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nh(e)):(n.next=i.next,i.next=n),e.interleaved=n,dn(t,r)}function dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var An=!1;function Dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ky(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,dn(t,n)}return i=r.interleaved,i===null?(e.next=e,Nh(r)):(e.next=i.next,i.next=e),r.interleaved=e,dn(t,n)}function ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}function vp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Da(t,e,n,r){var i=t.updateQueue;An=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;a=0,f=h=u=null,l=s;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,D=l;switch(v=e,k=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){g=N.call(k,g,v);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,v=typeof N=="function"?N.call(k,g,v):N,v==null)break e;g=ge({},g,v);break e;case 2:An=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=g):f=f.next=k,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=g}}function _p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Js={},Ut=tr(Js),Ls=tr(Js),Ms=tr(Js);function pr(t){if(t===Js)throw Error(V(174));return t}function Oh(t,e){switch(le(Ms,e),le(Ls,t),le(Ut,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qu(e,t)}he(Ut),le(Ut,e)}function gi(){he(Ut),he(Ls),he(Ms)}function Ry(t){pr(Ms.current);var e=pr(Ut.current),n=Qu(e,t.type);e!==n&&(le(Ls,t),le(Ut,n))}function xh(t){Ls.current===t&&(he(Ut),he(Ls))}var pe=tr(0);function Oa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eu=[];function Vh(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var ta=vn.ReactCurrentDispatcher,wu=vn.ReactCurrentBatchConfig,Tr=0,me=null,ke=null,De=null,xa=!1,ms=!1,Fs=0,z0=0;function $e(){throw Error(V(321))}function Lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function Mh(t,e,n,r,i,s){if(Tr=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ta.current=t===null||t.memoizedState===null?H0:q0,t=n(r,i),ms){s=0;do{if(ms=!1,Fs=0,25<=s)throw Error(V(301));s+=1,De=ke=null,e.updateQueue=null,ta.current=W0,t=n(r,i)}while(ms)}if(ta.current=Va,e=ke!==null&&ke.next!==null,Tr=0,De=ke=me=null,xa=!1,e)throw Error(V(300));return t}function Fh(){var t=Fs!==0;return Fs=0,t}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?me.memoizedState=De=t:De=De.next=t,De}function It(){if(ke===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=De===null?me.memoizedState:De.next;if(e!==null)De=e,ke=t;else{if(t===null)throw Error(V(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},De===null?me.memoizedState=De=t:De=De.next=t}return De}function Us(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=It(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((Tr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,me.lanes|=f,Ir|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,Ot(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,Ir|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=It(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ot(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Py(){}function Ny(t,e){var n=me,r=It(),i=e(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Uh(xy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,bs(9,Oy.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(V(349));Tr&30||Dy(n,e,i)}return i}function Dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Oy(t,e,n,r){e.value=n,e.getSnapshot=r,Vy(e)&&Ly(t)}function xy(t,e,n){return n(function(){Vy(e)&&Ly(t)})}function Vy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function Ly(t){var e=dn(t,1);e!==null&&Dt(e,t,1,-1)}function Ep(t){var e=Vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},e.queue=t,t=t.dispatch=$0.bind(null,me,t),[e.memoizedState,t]}function bs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function My(){return It().memoizedState}function na(t,e,n,r){var i=Vt();me.flags|=t,i.memoizedState=bs(1|e,n,void 0,r===void 0?null:r)}function ll(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(ke!==null){var a=ke.memoizedState;if(s=a.destroy,r!==null&&Lh(r,a.deps)){i.memoizedState=bs(e,n,s,r);return}}me.flags|=t,i.memoizedState=bs(1|e,n,s,r)}function wp(t,e){return na(8390656,8,t,e)}function Uh(t,e){return ll(2048,8,t,e)}function Fy(t,e){return ll(4,2,t,e)}function Uy(t,e){return ll(4,4,t,e)}function by(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zy(t,e,n){return n=n!=null?n.concat([t]):null,ll(4,4,by.bind(null,e,t),n)}function bh(){}function jy(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function By(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $y(t,e,n){return Tr&21?(Ot(n,e)||(n=Gg(),me.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function j0(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=wu.transition;wu.transition={};try{t(!1),e()}finally{ie=n,wu.transition=r}}function Hy(){return It().memoizedState}function B0(t,e,n){var r=Bn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qy(t))Wy(e,n);else if(n=Cy(t,e,n,r),n!==null){var i=tt();Dt(n,t,r,i),Ky(n,e,r)}}function $0(t,e,n){var r=Bn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qy(t))Wy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ot(l,a)){var u=e.interleaved;u===null?(i.next=i,Nh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Cy(t,e,i,r),n!==null&&(i=tt(),Dt(n,t,r,i),Ky(n,e,r))}}function qy(t){var e=t.alternate;return t===me||e!==null&&e===me}function Wy(t,e){ms=xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ky(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}var Va={readContext:Tt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},H0={readContext:Tt,useCallback:function(t,e){return Vt().memoizedState=[t,e===void 0?null:e],t},useContext:Tt,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,na(4194308,4,by.bind(null,e,t),n)},useLayoutEffect:function(t,e){return na(4194308,4,t,e)},useInsertionEffect:function(t,e){return na(4,2,t,e)},useMemo:function(t,e){var n=Vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=B0.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=Vt();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:bh,useDeferredValue:function(t){return Vt().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=j0.bind(null,t[1]),Vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=Vt();if(de){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Oe===null)throw Error(V(349));Tr&30||Dy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wp(xy.bind(null,r,s,t),[t]),r.flags|=2048,bs(9,Oy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vt(),e=Oe.identifierPrefix;if(de){var n=nn,r=tn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},q0={readContext:Tt,useCallback:jy,useContext:Tt,useEffect:Uh,useImperativeHandle:zy,useInsertionEffect:Fy,useLayoutEffect:Uy,useMemo:By,useReducer:Tu,useRef:My,useState:function(){return Tu(Us)},useDebugValue:bh,useDeferredValue:function(t){var e=It();return $y(e,ke.memoizedState,t)},useTransition:function(){var t=Tu(Us)[0],e=It().memoizedState;return[t,e]},useMutableSource:Py,useSyncExternalStore:Ny,useId:Hy,unstable_isNewReconciler:!1},W0={readContext:Tt,useCallback:jy,useContext:Tt,useEffect:Uh,useImperativeHandle:zy,useInsertionEffect:Fy,useLayoutEffect:Uy,useMemo:By,useReducer:Iu,useRef:My,useState:function(){return Iu(Us)},useDebugValue:bh,useDeferredValue:function(t){var e=It();return ke===null?e.memoizedState=t:$y(e,ke.memoizedState,t)},useTransition:function(){var t=Iu(Us)[0],e=It().memoizedState;return[t,e]},useMutableSource:Py,useSyncExternalStore:Ny,useId:Hy,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ul={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Bn(t),s=ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Dt(e,t,i,r),ea(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Bn(t),s=ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Dt(e,t,i,r),ea(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=Bn(t),i=ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Dt(e,t,r,n),ea(e,t,r))}};function Tp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ds(n,r)||!Ds(i,s):!0}function Gy(t,e,n){var r=!1,i=Gn,s=e.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(i=at(e)?Er:Qe.current,r=e.contextTypes,s=(r=r!=null)?fi(t,i):Gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ul.enqueueReplaceState(e,e.state,null)}function yc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Dh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tt(s):(s=at(e)?Er:Qe.current,i.context=fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ul.enqueueReplaceState(i,i.state,null),Da(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yi(t,e){try{var n="",r=e;do n+=Ew(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K0=typeof WeakMap=="function"?WeakMap:Map;function Qy(t,e,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ma||(Ma=!0,Rc=r),vc(t,e)},n}function Yy(t,e,n){n=ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vc(t,e),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Sp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new K0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aT.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ln(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var G0=vn.ReactCurrentOwner,st=!1;function Ze(t,e,n,r){e.child=t===null?Ay(e,null,n,r):mi(e,t.child,n,r)}function kp(t,e,n,r,i){n=n.render;var s=e.ref;return ri(e,i),r=Mh(t,e,n,r,s,i),n=Fh(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(de&&n&&Sh(e),e.flags|=1,Ze(t,e,r,i),e.child)}function Rp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xy(t,e,s,r,i)):(t=oa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(a,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ds(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,fn(t,e,i)}return _c(t,e,n,r,i)}function Jy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Xr,ht),ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Xr,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Xr,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Xr,ht),ht|=r;return Ze(t,e,i,n),e.child}function Zy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _c(t,e,n,r,i){var s=at(n)?Er:Qe.current;return s=fi(e,s),ri(e,i),n=Mh(t,e,n,r,s,i),r=Fh(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(de&&r&&Sh(e),e.flags|=1,Ze(t,e,n,i),e.child)}function Pp(t,e,n,r,i){if(at(n)){var s=!0;Ca(e)}else s=!1;if(ri(e,i),e.stateNode===null)ra(t,e),Gy(e,n,r),yc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Tt(h):(h=at(n)?Er:Qe.current,h=fi(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Ip(e,a,r,h),An=!1;var v=e.memoizedState;a.state=v,Da(e,r,a,i),u=e.memoizedState,l!==r||v!==u||ot.current||An?(typeof f=="function"&&(gc(e,n,f,r),u=e.memoizedState),(l=An||Tp(e,n,l,r,v,u,h))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,ky(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:kt(e.type,l),a.props=h,g=e.pendingProps,v=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=at(n)?Er:Qe.current,u=fi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||v!==u)&&Ip(e,a,r,u),An=!1,v=e.memoizedState,a.state=v,Da(e,r,a,i);var N=e.memoizedState;l!==g||v!==N||ot.current||An?(typeof k=="function"&&(gc(e,n,k,r),N=e.memoizedState),(h=An||Tp(e,n,h,r,v,N,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),a.props=r,a.state=N,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Ec(t,e,n,r,s,i)}function Ec(t,e,n,r,i,s){Zy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&pp(e,n,!1),fn(t,e,s);r=e.stateNode,G0.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=mi(e,t.child,null,s),e.child=mi(e,null,l,s)):Ze(t,e,l,s),e.memoizedState=r.state,i&&pp(e,n,!0),e.child}function ev(t){var e=t.stateNode;e.pendingContext?fp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fp(t,e.context,!1),Oh(t,e.containerInfo)}function Np(t,e,n,r,i){return pi(),Ch(i),e.flags|=256,Ze(t,e,n,r),e.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function Tc(t){return{baseLanes:t,cachePool:null,transitions:null}}function tv(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(pe,i&1),t===null)return pc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=dl(a,r,0,null),t=yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tc(n),e.memoizedState=wc,t):zh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Q0(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$n(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=$n(l,s):(s=yr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Tc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=wc,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zh(t,e){return e=dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,r){return r!==null&&Ch(r),mi(e,t.child,null,n),t=zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q0(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Su(Error(V(422))),zo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dl({mode:"visible",children:r.children},i,0,null),s=yr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mi(e,t.child,null,a),e.child.memoizedState=Tc(a),e.memoizedState=wc,s);if(!(e.mode&1))return zo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(V(419)),r=Su(s,r,void 0),zo(t,e,a,r)}if(l=(a&t.childLanes)!==0,st||l){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dn(t,i),Dt(r,t,i,-1))}return Wh(),r=Su(Error(V(421))),zo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=bn(i.nextSibling),ft=e,de=!0,Pt=null,t!==null&&(vt[_t++]=tn,vt[_t++]=nn,vt[_t++]=wr,tn=t.id,nn=t.overflow,wr=e),e=zh(e,r.children),e.flags|=4096,e)}function Dp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mc(t.return,e,n)}function Au(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,n,e);else if(t.tag===19)Dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Au(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y0(t,e,n){switch(e.tag){case 3:ev(e),pi();break;case 5:Ry(e);break;case 1:at(e.type)&&Ca(e);break;case 4:Oh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Pa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?tv(t,e,n):(le(pe,pe.current&1),t=fn(t,e,n),t!==null?t.sibling:null);le(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Jy(t,e,n)}return fn(t,e,n)}var rv,Ic,iv,sv;rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ic=function(){};iv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pr(Ut.current);var s=null;switch(n){case"input":i=qu(t,i),r=qu(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=Gu(t,i),r=Gu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sa)}Yu(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ss.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ce("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};sv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zi(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function X0(t,e,n){var r=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return at(e.type)&&Aa(),He(e),null;case 3:return r=e.stateNode,gi(),he(ot),he(Qe),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pt!==null&&(Dc(Pt),Pt=null))),Ic(t,e),He(e),null;case 5:xh(e);var i=pr(Ms.current);if(n=e.type,t!==null&&e.stateNode!=null)iv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return He(e),null}if(t=pr(Ut.current),Uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Lt]=e,r[Vs]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<ss.length;i++)ce(ss[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":zf(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Bf(r,s),ce("invalid",r)}Yu(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,l,t),i=["children",""+l]):Ss.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ce("scroll",r)}switch(n){case"input":Po(r),jf(r,s,!0);break;case"textarea":Po(r),$f(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Lt]=e,t[Vs]=r,rv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xu(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<ss.length;i++)ce(ss[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":zf(t,r),i=qu(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Bf(t,r),i=Gu(t,r),ce("invalid",t);break;default:i=r}Yu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Mg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&As(t,u):typeof u=="number"&&As(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ss.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ce("scroll",t):u!=null&&ch(t,s,u,a))}switch(n){case"input":Po(t),jf(t,r,!1);break;case"textarea":Po(t),$f(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)sv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=pr(Ms.current),pr(Ut.current),Uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Lt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=e,e.stateNode=r}return He(e),null;case 13:if(he(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&dt!==null&&e.mode&1&&!(e.flags&128))Iy(),pi(),e.flags|=98560,s=!1;else if(s=Uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[Lt]=e}else pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Pt!==null&&(Dc(Pt),Pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Pe===0&&(Pe=3):Wh())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return gi(),Ic(t,e),t===null&&Os(e.stateNode.containerInfo),He(e),null;case 10:return Ph(e.type._context),He(e),null;case 17:return at(e.type)&&Aa(),He(e),null;case 19:if(he(pe),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Zi(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Oa(t),a!==null){for(e.flags|=128,Zi(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>vi&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Oa(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!de)return He(e),null}else 2*Ie()-s.renderingStartTime>vi&&n!==1073741824&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=pe.current,le(pe,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return qh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function J0(t,e){switch(Ah(e),e.tag){case 1:return at(e.type)&&Aa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gi(),he(ot),he(Qe),Vh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xh(e),null;case 13:if(he(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(pe),null;case 4:return gi(),null;case 10:return Ph(e.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var jo=!1,Ke=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,j=null;function Yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Sc(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Op=!1;function eT(t,e){if(ac=wa,t=cy(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,g=t,v=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(k=g.firstChild)!==null;)v=g,g=k;for(;;){if(g===t)break t;if(v===n&&++h===i&&(l=a),v===s&&++f===r&&(u=a),(k=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:t,selectionRange:n},wa=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,L=N.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:kt(e.type,D),L);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(O){ve(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return N=Op,Op=!1,N}function gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sc(e,n,s)}i=i.next}while(i!==r)}}function cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ac(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ov(t){var e=t.alternate;e!==null&&(t.alternate=null,ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Lt],delete e[Vs],delete e[hc],delete e[M0],delete e[F0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function av(t){return t.tag===5||t.tag===3||t.tag===4}function xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sa));else if(r!==4&&(t=t.child,t!==null))for(Cc(t,e,n),t=t.sibling;t!==null;)Cc(t,e,n),t=t.sibling}function kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kc(t,e,n),t=t.sibling;t!==null;)kc(t,e,n),t=t.sibling}var Ve=null,Rt=!1;function Tn(t,e,n){for(n=n.child;n!==null;)lv(t,e,n),n=n.sibling}function lv(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:Ke||Yr(n,e);case 6:var r=Ve,i=Rt;Ve=null,Tn(t,e,n),Ve=r,Rt=i,Ve!==null&&(Rt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Rt?(t=Ve,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),Ps(t)):vu(Ve,n.stateNode));break;case 4:r=Ve,i=Rt,Ve=n.stateNode.containerInfo,Rt=!0,Tn(t,e,n),Ve=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Sc(n,e,a),i=i.next}while(i!==r)}Tn(t,e,n);break;case 1:if(!Ke&&(Yr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,e,l)}Tn(t,e,n);break;case 21:Tn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Tn(t,e,n),Ke=r):Tn(t,e,n);break;default:Tn(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Z0),e.forEach(function(r){var i=uT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ve=l.stateNode,Rt=!1;break e;case 3:Ve=l.stateNode.containerInfo,Rt=!0;break e;case 4:Ve=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Ve===null)throw Error(V(160));lv(s,a,i),Ve=null,Rt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){ve(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uv(e,t),e=e.sibling}function uv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ct(e,t),xt(t),r&4){try{gs(3,t,t.return),cl(3,t)}catch(D){ve(t,t.return,D)}try{gs(5,t,t.return)}catch(D){ve(t,t.return,D)}}break;case 1:Ct(e,t),xt(t),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(Ct(e,t),xt(t),r&512&&n!==null&&Yr(n,n.return),t.flags&32){var i=t.stateNode;try{As(i,"")}catch(D){ve(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dg(i,s),Xu(l,a);var h=Xu(l,s);for(a=0;a<u.length;a+=2){var f=u[a],g=u[a+1];f==="style"?Mg(i,g):f==="dangerouslySetInnerHTML"?Vg(i,g):f==="children"?As(i,g):ch(i,f,g,h)}switch(l){case"input":Wu(i,s);break;case"textarea":Og(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Zr(i,!!s.multiple,k,!1):v!==!!s.multiple&&(s.defaultValue!=null?Zr(i,!!s.multiple,s.defaultValue,!0):Zr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vs]=s}catch(D){ve(t,t.return,D)}}break;case 6:if(Ct(e,t),xt(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){ve(t,t.return,D)}}break;case 3:if(Ct(e,t),xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(D){ve(t,t.return,D)}break;case 4:Ct(e,t),xt(t);break;case 13:Ct(e,t),xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($h=Ie())),r&4&&Vp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(h=Ke)||f,Ct(e,t),Ke=h):Ct(e,t),xt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(j=t,f=t.child;f!==null;){for(g=j=f;j!==null;){switch(v=j,k=v.child,v.tag){case 0:case 11:case 14:case 15:gs(4,v,v.return);break;case 1:Yr(v,v.return);var N=v.stateNode;if(typeof N.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){ve(r,n,D)}}break;case 5:Yr(v,v.return);break;case 22:if(v.memoizedState!==null){Mp(g);continue}}k!==null?(k.return=v,j=k):Mp(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Lg("display",a))}catch(D){ve(t,t.return,D)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(D){ve(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ct(e,t),xt(t),r&4&&Vp(t);break;case 21:break;default:Ct(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(av(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(As(i,""),r.flags&=-33);var s=xp(t);kc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=xp(t);Cc(t,l,a);break;default:throw Error(V(161))}}catch(u){ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tT(t,e,n){j=t,cv(t)}function cv(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||jo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ke;l=jo;var h=Ke;if(jo=a,(Ke=u)&&!h)for(j=i;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Fp(i):u!==null?(u.return=a,j=u):Fp(i);for(;s!==null;)j=s,cv(s),s=s.sibling;j=i,jo=l,Ke=h}Lp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Lp(t)}}function Lp(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_p(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_p(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Ps(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Ke||e.flags&512&&Ac(e)}catch(v){ve(e,e.return,v)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function Mp(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function Fp(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cl(4,e)}catch(u){ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ve(e,i,u)}}var s=e.return;try{Ac(e)}catch(u){ve(e,s,u)}break;case 5:var a=e.return;try{Ac(e)}catch(u){ve(e,a,u)}}}catch(u){ve(e,e.return,u)}if(e===t){j=null;break}var l=e.sibling;if(l!==null){l.return=e.return,j=l;break}j=e.return}}var nT=Math.ceil,La=vn.ReactCurrentDispatcher,jh=vn.ReactCurrentOwner,wt=vn.ReactCurrentBatchConfig,te=0,Oe=null,Ce=null,Me=0,ht=0,Xr=tr(0),Pe=0,zs=null,Ir=0,hl=0,Bh=0,ys=null,it=null,$h=0,vi=1/0,Zt=null,Ma=!1,Rc=null,jn=null,Bo=!1,xn=null,Fa=0,vs=0,Pc=null,ia=-1,sa=0;function tt(){return te&6?Ie():ia!==-1?ia:ia=Ie()}function Bn(t){return t.mode&1?te&2&&Me!==0?Me&-Me:b0.transition!==null?(sa===0&&(sa=Gg()),sa):(t=ie,t!==0||(t=window.event,t=t===void 0?16:ty(t.type)),t):1}function Dt(t,e,n,r){if(50<vs)throw vs=0,Pc=null,Error(V(185));Qs(t,n,r),(!(te&2)||t!==Oe)&&(t===Oe&&(!(te&2)&&(hl|=n),Pe===4&&kn(t,Me)),lt(t,r),n===1&&te===0&&!(e.mode&1)&&(vi=Ie()+500,al&&nr()))}function lt(t,e){var n=t.callbackNode;bw(t,e);var r=Ea(t,t===Oe?Me:0);if(r===0)n!==null&&Wf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wf(n),e===1)t.tag===0?U0(Up.bind(null,t)):Ey(Up.bind(null,t)),V0(function(){!(te&6)&&nr()}),n=null;else{switch(Qg(r)){case 1:n=mh;break;case 4:n=Wg;break;case 16:n=_a;break;case 536870912:n=Kg;break;default:n=_a}n=vv(n,hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hv(t,e){if(ia=-1,sa=0,te&6)throw Error(V(327));var n=t.callbackNode;if(ii()&&t.callbackNode!==n)return null;var r=Ea(t,t===Oe?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ua(t,r);else{e=r;var i=te;te|=2;var s=fv();(Oe!==t||Me!==e)&&(Zt=null,vi=Ie()+500,gr(t,e));do try{sT();break}catch(l){dv(t,l)}while(!0);Rh(),La.current=s,te=i,Ce!==null?e=0:(Oe=null,Me=0,e=Pe)}if(e!==0){if(e===2&&(i=nc(t),i!==0&&(r=i,e=Nc(t,i))),e===1)throw n=zs,gr(t,0),kn(t,r),lt(t,Ie()),n;if(e===6)kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!rT(i)&&(e=Ua(t,r),e===2&&(s=nc(t),s!==0&&(r=s,e=Nc(t,s))),e===1))throw n=zs,gr(t,0),kn(t,r),lt(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:ur(t,it,Zt);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=$h+500-Ie(),10<e)){if(Ea(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cc(ur.bind(null,t,it,Zt),e);break}ur(t,it,Zt);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Nt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nT(r/1960))-r,10<r){t.timeoutHandle=cc(ur.bind(null,t,it,Zt),r);break}ur(t,it,Zt);break;case 5:ur(t,it,Zt);break;default:throw Error(V(329))}}}return lt(t,Ie()),t.callbackNode===n?hv.bind(null,t):null}function Nc(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=Ua(t,e),t!==2&&(e=it,it=n,e!==null&&Dc(e)),t}function Dc(t){it===null?it=t:it.push.apply(it,t)}function rT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~Bh,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function Up(t){if(te&6)throw Error(V(327));ii();var e=Ea(t,0);if(!(e&1))return lt(t,Ie()),null;var n=Ua(t,e);if(t.tag!==0&&n===2){var r=nc(t);r!==0&&(e=r,n=Nc(t,r))}if(n===1)throw n=zs,gr(t,0),kn(t,e),lt(t,Ie()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,it,Zt),lt(t,Ie()),null}function Hh(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(vi=Ie()+500,al&&nr())}}function Sr(t){xn!==null&&xn.tag===0&&!(te&6)&&ii();var e=te;te|=1;var n=wt.transition,r=ie;try{if(wt.transition=null,ie=1,t)return t()}finally{ie=r,wt.transition=n,te=e,!(te&6)&&nr()}}function qh(){ht=Xr.current,he(Xr)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,x0(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Ah(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Aa();break;case 3:gi(),he(ot),he(Qe),Vh();break;case 5:xh(r);break;case 4:gi();break;case 13:he(pe);break;case 19:he(pe);break;case 10:Ph(r.type._context);break;case 22:case 23:qh()}n=n.return}if(Oe=t,Ce=t=$n(t.current,null),Me=ht=e,Pe=0,zs=null,Bh=hl=Ir=0,it=ys=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}fr=null}return t}function dv(t,e){do{var n=Ce;try{if(Rh(),ta.current=Va,xa){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xa=!1}if(Tr=0,De=ke=me=null,ms=!1,Fs=0,jh.current=null,n===null||n.return===null){Pe=1,zs=e,Ce=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=Me,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Ap(a);if(k!==null){k.flags&=-257,Cp(k,a,l,s,e),k.mode&1&&Sp(s,h,e),e=k,u=h;var N=e.updateQueue;if(N===null){var D=new Set;D.add(u),e.updateQueue=D}else N.add(u);break e}else{if(!(e&1)){Sp(s,h,e),Wh();break e}u=Error(V(426))}}else if(de&&l.mode&1){var L=Ap(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Cp(L,a,l,s,e),Ch(yi(u,l));break e}}s=u=yi(u,l),Pe!==4&&(Pe=2),ys===null?ys=[s]:ys.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Qy(s,u,e);vp(s,I);break e;case 1:l=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jn===null||!jn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Yy(s,l,e);vp(s,O);break e}}s=s.return}while(s!==null)}mv(n)}catch(U){e=U,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function fv(){var t=La.current;return La.current=Va,t===null?Va:t}function Wh(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||!(Ir&268435455)&&!(hl&268435455)||kn(Oe,Me)}function Ua(t,e){var n=te;te|=2;var r=fv();(Oe!==t||Me!==e)&&(Zt=null,gr(t,e));do try{iT();break}catch(i){dv(t,i)}while(!0);if(Rh(),te=n,La.current=r,Ce!==null)throw Error(V(261));return Oe=null,Me=0,Pe}function iT(){for(;Ce!==null;)pv(Ce)}function sT(){for(;Ce!==null&&!Nw();)pv(Ce)}function pv(t){var e=yv(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?mv(t):Ce=e,jh.current=null}function mv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=J0(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Ce=null;return}}else if(n=X0(n,e,ht),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Pe===0&&(Pe=5)}function ur(t,e,n){var r=ie,i=wt.transition;try{wt.transition=null,ie=1,oT(t,e,n,r)}finally{wt.transition=i,ie=r}return null}function oT(t,e,n,r){do ii();while(xn!==null);if(te&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zw(t,s),t===Oe&&(Ce=Oe=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,vv(_a,function(){return ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var a=ie;ie=1;var l=te;te|=4,jh.current=null,eT(t,n),uv(n,t),C0(lc),wa=!!ac,lc=ac=null,t.current=n,tT(n),Dw(),te=l,ie=a,wt.transition=s}else t.current=n;if(Bo&&(Bo=!1,xn=t,Fa=i),s=t.pendingLanes,s===0&&(jn=null),Vw(n.stateNode),lt(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ma)throw Ma=!1,t=Rc,Rc=null,t;return Fa&1&&t.tag!==0&&ii(),s=t.pendingLanes,s&1?t===Pc?vs++:(vs=0,Pc=t):vs=0,nr(),null}function ii(){if(xn!==null){var t=Qg(Fa),e=wt.transition,n=ie;try{if(wt.transition=null,ie=16>t?16:t,xn===null)var r=!1;else{if(t=xn,xn=null,Fa=0,te&6)throw Error(V(331));var i=te;for(te|=4,j=t.current;j!==null;){var s=j,a=s.child;if(j.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(j=h;j!==null;){var f=j;switch(f.tag){case 0:case 11:case 15:gs(8,f,s)}var g=f.child;if(g!==null)g.return=f,j=g;else for(;j!==null;){f=j;var v=f.sibling,k=f.return;if(ov(f),f===h){j=null;break}if(v!==null){v.return=k,j=v;break}j=k}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}j=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,j=a;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,j=I;break e}j=s.return}}var E=t.current;for(j=E;j!==null;){a=j;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,j=S;else e:for(a=E;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cl(9,l)}}catch(U){ve(l,l.return,U)}if(l===a){j=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,j=O;break e}j=l.return}}if(te=i,nr(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(nl,t)}catch{}r=!0}return r}finally{ie=n,wt.transition=e}}return!1}function bp(t,e,n){e=yi(n,e),e=Qy(t,e,1),t=zn(t,e,1),e=tt(),t!==null&&(Qs(t,1,e),lt(t,e))}function ve(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){t=yi(n,t),t=Yy(e,t,1),e=zn(e,t,1),t=tt(),e!==null&&(Qs(e,1,t),lt(e,t));break}}e=e.return}}function aT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Me&n)===n&&(Pe===4||Pe===3&&(Me&130023424)===Me&&500>Ie()-$h?gr(t,0):Bh|=n),lt(t,e)}function gv(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=tt();t=dn(t,e),t!==null&&(Qs(t,e,n),lt(t,n))}function lT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gv(t,n)}function uT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),gv(t,n)}var yv;yv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,Y0(t,e,n);st=!!(t.flags&131072)}else st=!1,de&&e.flags&1048576&&wy(e,Ra,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ra(t,e),t=e.pendingProps;var i=fi(e,Qe.current);ri(e,n),i=Mh(null,e,r,t,i,n);var s=Fh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,Ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dh(e),i.updater=ul,e.stateNode=i,i._reactInternals=e,yc(e,r,t,n),e=Ec(null,e,r,!0,s,n)):(e.tag=0,de&&s&&Sh(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ra(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hT(r),t=kt(r,t),i){case 0:e=_c(null,e,r,t,n);break e;case 1:e=Pp(null,e,r,t,n);break e;case 11:e=kp(null,e,r,t,n);break e;case 14:e=Rp(null,e,r,kt(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),_c(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Pp(t,e,r,i,n);case 3:e:{if(ev(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ky(t,e),Da(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yi(Error(V(423)),e),e=Np(t,e,r,n,i);break e}else if(r!==i){i=yi(Error(V(424)),e),e=Np(t,e,r,n,i);break e}else for(dt=bn(e.stateNode.containerInfo.firstChild),ft=e,de=!0,Pt=null,n=Ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){e=fn(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return Ry(e),t===null&&pc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,uc(r,i)?a=null:s!==null&&uc(r,s)&&(e.flags|=32),Zy(t,e),Ze(t,e,a,n),e.child;case 6:return t===null&&pc(e),null;case 13:return tv(t,e,n);case 4:return Oh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mi(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),kp(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,le(Pa,r._currentValue),r._currentValue=a,s!==null)if(Ot(s.value,a)){if(s.children===i.children&&!ot.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ln(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),mc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),mc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ri(e,n),i=Tt(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Rp(t,e,r,i,n);case 15:return Xy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),ra(t,e),e.tag=1,at(r)?(t=!0,Ca(e)):t=!1,ri(e,n),Gy(e,r,i),yc(e,r,i,n),Ec(null,e,r,!0,t,n);case 19:return nv(t,e,n);case 22:return Jy(t,e,n)}throw Error(V(156,e.tag))};function vv(t,e){return qg(t,e)}function cT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new cT(t,e,n,r)}function Kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hT(t){if(typeof t=="function")return Kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dh)return 11;if(t===fh)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oa(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Kh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case jr:return yr(n.children,i,s,e);case hh:a=8,i|=8;break;case ju:return t=Et(12,n,e,i|2),t.elementType=ju,t.lanes=s,t;case Bu:return t=Et(13,n,e,i),t.elementType=Bu,t.lanes=s,t;case $u:return t=Et(19,n,e,i),t.elementType=$u,t.lanes=s,t;case Rg:return dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cg:a=10;break e;case kg:a=9;break e;case dh:a=11;break e;case fh:a=14;break e;case Sn:a=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Et(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function dl(t,e,n,r){return t=Et(22,t,r,e),t.elementType=Rg,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,r,i,s,a,l,u){return t=new dT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(s),t}function fT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _v(t){if(!t)return Gn;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(at(n))return _y(t,n,e)}return e}function Ev(t,e,n,r,i,s,a,l,u){return t=Gh(n,r,!0,t,i,s,a,l,u),t.context=_v(null),n=t.current,r=tt(),i=Bn(n),s=ln(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,Qs(t,i,r),lt(t,r),t}function fl(t,e,n,r){var i=e.current,s=tt(),a=Bn(i);return n=_v(n),e.context===null?e.context=n:e.pendingContext=n,e=ln(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,a),t!==null&&(Dt(t,i,a,s),ea(t,i,a)),a}function ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qh(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function pT(){return null}var wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}pl.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));fl(t,e,null,null)};pl.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){fl(null,t,null,null)}),e[hn]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&ey(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function mT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ba(a);s.call(h)}}var a=Ev(e,r,t,0,null,!1,!1,"",jp);return t._reactRootContainer=a,t[hn]=a.current,Os(t.nodeType===8?t.parentNode:t),Sr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ba(u);l.call(h)}}var u=Gh(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=u,t[hn]=u.current,Os(t.nodeType===8?t.parentNode:t),Sr(function(){fl(e,u,n,r)}),u}function gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=ba(a);l.call(u)}}fl(e,a,t,i)}else a=mT(n,e,t,i,r);return ba(a)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=is(e.pendingLanes);n!==0&&(gh(e,n|1),lt(e,Ie()),!(te&6)&&(vi=Ie()+500,nr()))}break;case 13:Sr(function(){var r=dn(t,1);if(r!==null){var i=tt();Dt(r,t,1,i)}}),Qh(t,1)}};yh=function(t){if(t.tag===13){var e=dn(t,134217728);if(e!==null){var n=tt();Dt(e,t,134217728,n)}Qh(t,134217728)}};Xg=function(t){if(t.tag===13){var e=Bn(t),n=dn(t,e);if(n!==null){var r=tt();Dt(n,t,e,r)}Qh(t,e)}};Jg=function(){return ie};Zg=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};Zu=function(t,e,n){switch(e){case"input":if(Wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ol(r);if(!i)throw Error(V(90));Ng(r),Wu(r,i)}}}break;case"textarea":Og(t,n);break;case"select":e=n.value,e!=null&&Zr(t,!!n.multiple,e,!1)}};bg=Hh;zg=Sr;var gT={usingClientEntryPoint:!1,Events:[Xs,qr,ol,Fg,Ug,Hh]},es={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yT={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||pT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{nl=$o.inject(yT),Ft=$o}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gT;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(V(200));return fT(t,e,null,n)};mt.createRoot=function(t,e){if(!Xh(t))throw Error(V(299));var n=!1,r="",i=wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,r,i),t[hn]=e.current,Os(t.nodeType===8?t.parentNode:t),new Yh(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Sr(t)};mt.hydrate=function(t,e,n){if(!ml(e))throw Error(V(200));return gl(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ev(e,null,t,1,n??null,i,!1,s,a),t[hn]=e.current,Os(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pl(e)};mt.render=function(t,e,n){if(!ml(e))throw Error(V(200));return gl(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!ml(t))throw Error(V(40));return t._reactRootContainer?(Sr(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1};mt.unstable_batchedUpdates=Hh;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ml(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return gl(t,e,n,!1,r)};mt.version="18.3.1-next-f1338f8080-20240426";function Tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv)}catch(t){console.error(t)}}Tv(),Tg.exports=mt;var vT=Tg.exports,Iv,Bp=vT;Iv=Bp.createRoot,Bp.hydrateRoot;var $p={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_T=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Av={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,k=h&63;u||(k=64,a||(v=64)),r.push(n[f],n[g],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_T(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new ET;const v=s<<2|l>>4;if(r.push(v),h!==64){const k=l<<4&240|h>>2;if(r.push(k),g!==64){const N=h<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ET extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wT=function(t){const e=Sv(t);return Av.encodeByteArray(e,!0)},za=function(t){return wT(t).replace(/\./g,"")},Cv=function(t){try{return Av.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=()=>TT().__FIREBASE_DEFAULTS__,ST=()=>{if(typeof process>"u"||typeof $p>"u")return;const t=$p.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cv(t[1]);return e&&JSON.parse(e)},yl=()=>{try{return IT()||ST()||AT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kv=t=>{var e,n;return(n=(e=yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rv=t=>{const e=kv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pv=()=>{var t;return(t=yl())===null||t===void 0?void 0:t.config},Nv=t=>{var e;return(e=yl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[za(JSON.stringify(n)),za(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function PT(){var t;const e=(t=yl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xT(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VT(){return!PT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LT(){try{return typeof indexedDB=="object"}catch{return!1}}function MT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FT,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?UT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new qt(i,l,r)}}function UT(t,e){return t.replace(bT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bT=/\{\$([^}]+)}/g;function zT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ja(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Hp(s)&&Hp(a)){if(!ja(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jT(t,e){const n=new BT(t,e);return n.subscribe.bind(n)}class BT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$T(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ru),i.error===void 0&&(i.error=Ru),i.complete===void 0&&(i.complete=Ru);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $T(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ru(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WT(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qT(t){return t===cr?void 0:t}function WT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const GT={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},QT=X.INFO,YT={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},XT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jh{constructor(e){this.name=e,this._logLevel=QT,this._logHandler=XT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const JT=(t,e)=>e.some(n=>t instanceof n);let qp,Wp;function ZT(){return qp||(qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eI(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dv=new WeakMap,Oc=new WeakMap,Ov=new WeakMap,Pu=new WeakMap,Zh=new WeakMap;function tI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Hn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Dv.set(n,t)}).catch(()=>{}),Zh.set(e,t),e}function nI(t){if(Oc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Oc.set(t,e)}let xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ov.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rI(t){xc=t(xc)}function iI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nu(this),e,...n);return Ov.set(r,e.sort?e.sort():[e]),Hn(r)}:eI().includes(t)?function(...e){return t.apply(Nu(this),e),Hn(Dv.get(this))}:function(...e){return Hn(t.apply(Nu(this),e))}}function sI(t){return typeof t=="function"?iI(t):(t instanceof IDBTransaction&&nI(t),JT(t,ZT())?new Proxy(t,xc):t)}function Hn(t){if(t instanceof IDBRequest)return tI(t);if(Pu.has(t))return Pu.get(t);const e=sI(t);return e!==t&&(Pu.set(t,e),Zh.set(e,t)),e}const Nu=t=>Zh.get(t);function oI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Hn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Hn(a.result),u.oldVersion,u.newVersion,Hn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const aI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],Du=new Map;function Kp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Du.get(e))return Du.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aI.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Du.set(e,s),s}rI(t=>({...t,get:(e,n,r)=>Kp(e,n)||t.get(e,n,r),has:(e,n)=>!!Kp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",Gp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Jh("@firebase/app"),hI="@firebase/app-compat",dI="@firebase/analytics-compat",fI="@firebase/analytics",pI="@firebase/app-check-compat",mI="@firebase/app-check",gI="@firebase/auth",yI="@firebase/auth-compat",vI="@firebase/database",_I="@firebase/data-connect",EI="@firebase/database-compat",wI="@firebase/functions",TI="@firebase/functions-compat",II="@firebase/installations",SI="@firebase/installations-compat",AI="@firebase/messaging",CI="@firebase/messaging-compat",kI="@firebase/performance",RI="@firebase/performance-compat",PI="@firebase/remote-config",NI="@firebase/remote-config-compat",DI="@firebase/storage",OI="@firebase/storage-compat",xI="@firebase/firestore",VI="@firebase/vertexai-preview",LI="@firebase/firestore-compat",MI="firebase",FI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="[DEFAULT]",UI={[Vc]:"fire-core",[hI]:"fire-core-compat",[fI]:"fire-analytics",[dI]:"fire-analytics-compat",[mI]:"fire-app-check",[pI]:"fire-app-check-compat",[gI]:"fire-auth",[yI]:"fire-auth-compat",[vI]:"fire-rtdb",[_I]:"fire-data-connect",[EI]:"fire-rtdb-compat",[wI]:"fire-fn",[TI]:"fire-fn-compat",[II]:"fire-iid",[SI]:"fire-iid-compat",[AI]:"fire-fcm",[CI]:"fire-fcm-compat",[kI]:"fire-perf",[RI]:"fire-perf-compat",[PI]:"fire-rc",[NI]:"fire-rc-compat",[DI]:"fire-gcs",[OI]:"fire-gcs-compat",[xI]:"fire-fst",[LI]:"fire-fst-compat",[VI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Map,bI=new Map,Mc=new Map;function Qp(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ar(t){const e=t.name;if(Mc.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of Ba.values())Qp(n,t);for(const n of bI.values())Qp(n,t);return!0}function vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Zs("app","Firebase",zI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=FI;function xv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qn.create("bad-app-name",{appName:String(i)});if(n||(n=Pv()),!n)throw qn.create("no-options");const s=Ba.get(i);if(s){if(ja(n,s.options)&&ja(r,s.config))return s;throw qn.create("duplicate-app",{appName:i})}const a=new KT(i);for(const u of Mc.values())a.addComponent(u);const l=new jI(n,r,a);return Ba.set(i,l),l}function ed(t=Lc){const e=Ba.get(t);if(!e&&t===Lc&&Pv())return xv();if(!e)throw qn.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=(r=UI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(l.join(" "));return}Ar(new Qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="firebase-heartbeat-database",$I=1,js="firebase-heartbeat-store";let Ou=null;function Vv(){return Ou||(Ou=oI(BI,$I,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(js)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Ou}async function HI(t){try{const n=(await Vv()).transaction(js),r=await n.objectStore(js).get(Lv(t));return await n.done,r}catch(e){if(e instanceof qt)pn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function Yp(t,e){try{const r=(await Vv()).transaction(js,"readwrite");await r.objectStore(js).put(e,Lv(t)),await r.done}catch(n){if(n instanceof qt)pn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function Lv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1024,WI=30*24*60*60*1e3;class KI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=WI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xp(),{heartbeatsToSend:r,unsentEntries:i}=GI(this._heartbeatsCache.heartbeats),s=za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pn.warn(n),""}}}function Xp(){return new Date().toISOString().substring(0,10)}function GI(t,e=qI){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Jp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LT()?MT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jp(t){return za(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){Ar(new Qn("platform-logger",e=>new uI(e),"PRIVATE")),Ar(new Qn("heartbeat",e=>new KI(e),"PRIVATE")),bt(Vc,Gp,t),bt(Vc,Gp,"esm2017"),bt("fire-js","")}YI("");var XI="firebase",JI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(XI,JI,"app");function td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZI=Mv,Fv=new Zs("auth","Firebase",Mv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Jh("@firebase/auth");function eS(t,...e){$a.logLevel<=X.WARN&&$a.warn(`Auth (${Ri}): ${t}`,...e)}function aa(t,...e){$a.logLevel<=X.ERROR&&$a.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw nd(t,...e)}function zt(t,...e){return nd(t,...e)}function Uv(t,e,n){const r=Object.assign(Object.assign({},ZI()),{[e]:n});return new Zs("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return Uv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fv.create(t,...e)}function q(t,e,...n){if(!t)throw nd(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw aa(e),new Error(e)}function gn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tS(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tS()||DT()||"connection"in navigator)?navigator.onLine:!0}function rS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=RT()||OT()}get(){return nS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=new to(3e4,6e4);function _l(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pi(t,e,n,r,i={}){return zv(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=eo(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return NT()||(h.referrerPolicy="no-referrer"),bv.fetch()(Bv(t,t.config.apiHost,n,l),h)})}async function zv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iS),e);try{const i=new oS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ho(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ho(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Uv(t,f,h);mn(t,f)}}catch(i){if(i instanceof qt)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function jv(t,e,n,r,i={}){const s=await Pi(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Bv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rd(t.config,i):`${t.config.apiScheme}://${i}`}class oS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),sS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e){return Pi(t,"POST","/v1/accounts:delete",e)}async function $v(t,e){return Pi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lS(t,e=!1){const n=St(t),r=await n.getIdToken(e),i=id(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_s(xu(i.auth_time)),issuedAtTime:_s(xu(i.iat)),expirationTime:_s(xu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xu(t){return Number(t)*1e3}function id(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cv(n);return i?JSON.parse(i):(aa("Failed to decode base64 JWT payload"),null)}catch(i){return aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function em(t){const e=id(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&uS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bs(t,$v(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hv(s.providerUserInfo):[],l=dS(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function hS(t){const e=St(t);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hv(t){return t.map(e=>{var{providerId:n}=e,r=td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(t,e){const n=await zv(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Bv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",bv.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pS(t,e){return Pi(t,"POST","/v2/accounts:revokeToken",_l(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=em(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new si;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lS(this,e)}reload(){return hS(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await Bs(this,aS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:O,isAnonymous:U,providerData:F,stsTokenManager:_}=n;q(S&&_,e,"internal-error");const m=si.fromJSON(this.name,_);q(typeof S=="string",e,"internal-error"),In(g,e.name),In(v,e.name),q(typeof O=="boolean",e,"internal-error"),q(typeof U=="boolean",e,"internal-error"),In(k,e.name),In(N,e.name),In(D,e.name),In(L,e.name),In(I,e.name),In(E,e.name);const y=new on({uid:S,auth:e,email:v,emailVerified:O,displayName:g,isAnonymous:U,photoURL:N,phoneNumber:k,tenantId:D,stsTokenManager:m,createdAt:I,lastLoginAt:E});return F&&Array.isArray(F)&&(y.providerData=F.map(w=>Object.assign({},w))),L&&(y._redirectEventId=L),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new si;i.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ha(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Hv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new si;l.updateFromIdToken(r);const u=new on({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=new Map;function an(t){gn(t instanceof Function,"Expected a class definition");let e=tm.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qv.type="NONE";const nm=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t,e,n){return`firebase:${t}:${e}:${n}`}class oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=la(this.userKey,i.apiKey,s),this.fullPersistenceKey=la("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oi(an(nm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||an(nm);const a=la(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const g=on._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new oi(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new oi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xv(e))return"Blackberry";if(Jv(e))return"Webos";if(Kv(e))return"Safari";if((e.includes("chrome/")||Gv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wv(t=Ye()){return/firefox\//i.test(t)}function Kv(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gv(t=Ye()){return/crios\//i.test(t)}function Qv(t=Ye()){return/iemobile/i.test(t)}function Yv(t=Ye()){return/android/i.test(t)}function Xv(t=Ye()){return/blackberry/i.test(t)}function Jv(t=Ye()){return/webos/i.test(t)}function sd(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mS(t=Ye()){var e;return sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gS(){return xT()&&document.documentMode===10}function Zv(t=Ye()){return sd(t)||Yv(t)||Jv(t)||Xv(t)||/windows phone/i.test(t)||Qv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e=[]){let n;switch(t){case"Browser":n=rm(Ye());break;case"Worker":n=`${rm(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e={}){return Pi(t,"GET","/v2/passwordPolicy",_l(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=6;class ES{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:_S,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new yS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await oi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $v(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Wn(this));const n=e?St(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vS(this),n=new ES(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await oi.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function El(t){return St(t)}class im{constructor(e){this.auth=e,this.observer=null,this.addObserver=jT(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TS(t){od=t}function IS(t){return od.loadJS(t)}function SS(){return od.gapiScript}function AS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t,e){const n=vl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ja(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function kS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RS(t,e,n){const r=El(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=t_(e),{host:a,port:l}=PS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),NS()}function t_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PS(t){const e=t_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:sm(a)}}}function sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){return jv(t,"POST","/v1/accounts:signInWithIdp",_l(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="http://localhost";class Cr extends n_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=td(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Cr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:DS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends r_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends no{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends no{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends no{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){return jv(t,"POST","/v1/accounts:signUp",_l(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),a=om(r);return new Yn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=om(r);return new Yn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t){var e;if(rn(t.app))return Promise.reject(Wn(t));const n=El(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Yn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await OS(n,{returnSecureToken:!0}),i=await Yn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function i_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function VS(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(Wn(r));const i="reauthenticate";try{const s=await Bs(t,i_(r,i,e,t),n);q(s.idToken,r,"internal-error");const a=id(s.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(t.uid===l,r,"user-mismatch"),Yn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e,n=!1){if(rn(t.app))return Promise.reject(Wn(t));const r="signIn",i=await i_(t,r,e),s=await Yn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function FS(t,e,n,r){return St(t).onIdTokenChanged(e,n,r)}function US(t,e,n){return St(t).beforeAuthStateChanged(e,n)}function bS(t,e,n,r){return St(t).onAuthStateChanged(e,n,r)}const Wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1e3,jS=10;class o_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);gS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o_.type="LOCAL";const BS=o_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}a_.type="SESSION";const l_=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await $S(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=ad("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function qS(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function WS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GS(){return u_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firebaseLocalStorageDb",QS=1,Ka="firebaseLocalStorage",h_="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Ka],e?"readwrite":"readonly").objectStore(Ka)}function YS(){const t=indexedDB.deleteDatabase(c_);return new ro(t).toPromise()}function bc(){const t=indexedDB.open(c_,QS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ka,{keyPath:h_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ka)?e(r):(r.close(),await YS(),e(await bc()))})})}async function am(t,e,n){const r=Tl(t,!0).put({[h_]:e,value:n});return new ro(r).toPromise()}async function XS(t,e){const n=Tl(t,!1).get(e),r=await new ro(n).toPromise();return r===void 0?null:r.value}function lm(t,e){const n=Tl(t,!0).delete(e);return new ro(n).toPromise()}const JS=800,ZS=3;class d_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(GS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WS(),!this.activeServiceWorker)return;this.sender=new HS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await am(e,Wa,"1"),await lm(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d_.type="LOCAL";const eA=d_;new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e){return e?an(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends n_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nA(t){return MS(t.auth,new ld(t),t.bypassAuthState)}function rA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),LS(n,new ld(t),t.bypassAuthState)}async function iA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),VS(n,new ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nA;case"linkViaPopup":case"linkViaRedirect":return iA;case"reauthViaPopup":case"reauthViaRedirect":return rA;default:mn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new to(2e3,1e4);class Jr extends f_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sA.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="pendingRedirect",ua=new Map;class aA extends f_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const r=await lA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ua.set(this.auth._key(),e)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lA(t,e){const n=hA(e),r=cA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uA(t,e){ua.set(t._key(),e)}function cA(t){return an(t._redirectPersistence)}function hA(t){return la(oA,t.config.apiKey,t.name)}async function dA(t,e,n=!1){if(rn(t.app))return Promise.reject(Wn(t));const r=El(t),i=tA(r,e),a=await new aA(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=10*60*1e3;class pA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!p_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fA&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(e))}saveEventToCache(e){this.cachedEventUids.add(um(e)),this.lastProcessedEventTime=Date.now()}}function um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e={}){return Pi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vA=/^https?/;async function _A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gA(t);for(const n of e)try{if(EA(n))return}catch{}mn(t,"unauthorized-domain")}function EA(t){const e=Fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!vA.test(n))return!1;if(yA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new to(3e4,6e4);function cm(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TA(t){return new Promise((e,n)=>{var r,i,s;function a(){cm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cm(),n(zt(t,"network-request-failed"))},timeout:wA.get()})}if(!((i=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jt().gapi)===null||s===void 0)&&s.load)a();else{const l=AS("iframefcb");return jt()[l]=()=>{gapi.load?a():n(zt(t,"network-request-failed"))},IS(`${SS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ca=null,e})}let ca=null;function IA(t){return ca=ca||TA(t),ca}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new to(5e3,15e3),AA="__/auth/iframe",CA="emulator/auth/iframe",kA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PA(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rd(e,CA):`https://${t.config.authDomain}/${AA}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},i=RA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eo(r).slice(1)}`}async function NA(t){const e=await IA(t),n=jt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:PA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=zt(t,"network-request-failed"),l=jt().setTimeout(()=>{s(a)},SA.get());function u(){jt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OA=500,xA=600,VA="_blank",LA="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MA(t,e,n,r=OA,i=xA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},DA),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Ye().toLowerCase();n&&(l=Gv(h)?VA:n),Wv(h)&&(e=e||LA,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[k,N])=>`${v}${k}=${N},`,"");if(mS(h)&&l!=="_self")return FA(e||"",l),new hm(null);const g=window.open(e||"",l,f);q(g,t,"popup-blocked");try{g.focus()}catch{}return new hm(g)}function FA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="__/auth/handler",bA="emulator/auth/handler",zA=encodeURIComponent("fac");async function dm(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:i};if(e instanceof r_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",zT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof no){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${zA}=${encodeURIComponent(u)}`:"";return`${jA(t)}?${eo(l).slice(1)}${h}`}function jA({config:t}){return t.emulator?rd(t,bA):`https://${t.authDomain}/${UA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="webStorageSupport";class BA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l_,this._completeRedirectFn=dA,this._overrideRedirectResult=uA}async _openPopup(e,n,r,i){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await dm(e,n,r,Fc(),i);return MA(e,a,ad())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dm(e,n,r,Fc(),i);return qS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NA(e),r=new pA(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vu,{type:Vu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vu];a!==void 0&&n(!!a),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zv()||Kv()||sd()}}const $A=BA;var fm="@firebase/auth",pm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WA(t){Ar(new Qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e_(t)},h=new wS(r,i,s,u);return kS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Qn("auth-internal",e=>{const n=El(e.getProvider("auth").getImmediate());return(r=>new HA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(fm,pm,qA(t)),bt(fm,pm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=5*60,GA=Nv("authIdTokenMaxAge")||KA;let mm=null;const QA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GA)return;const i=n==null?void 0:n.token;mm!==i&&(mm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YA(t=ed()){const e=vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CS(t,{popupRedirectResolver:$A,persistence:[eA,BS,l_]}),r=Nv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=QA(s.toString());US(n,a,()=>a(n.currentUser)),FS(n,l=>a(l))}}const i=kv("auth");return i&&RS(n,`http://${i}`),n}function XA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WA("Browser");var gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,m_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function y(){}y.prototype=m.prototype,_.D=m.prototype,_.prototype=new y,_.prototype.constructor=_,_.C=function(w,A,R){for(var T=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)T[yt-2]=arguments[yt];return m.prototype[A].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)w[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)w[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=_.g[0],y=_.g[1],A=_.g[2];var R=_.g[3],T=m+(R^y&(A^R))+w[0]+3614090360&4294967295;m=y+(T<<7&4294967295|T>>>25),T=R+(A^m&(y^A))+w[1]+3905402710&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(y^R&(m^y))+w[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=y+(m^A&(R^m))+w[3]+3250441966&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(R^y&(A^R))+w[4]+4118548399&4294967295,m=y+(T<<7&4294967295|T>>>25),T=R+(A^m&(y^A))+w[5]+1200080426&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(y^R&(m^y))+w[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=y+(m^A&(R^m))+w[7]+4249261313&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(R^y&(A^R))+w[8]+1770035416&4294967295,m=y+(T<<7&4294967295|T>>>25),T=R+(A^m&(y^A))+w[9]+2336552879&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(y^R&(m^y))+w[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=y+(m^A&(R^m))+w[11]+2304563134&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(R^y&(A^R))+w[12]+1804603682&4294967295,m=y+(T<<7&4294967295|T>>>25),T=R+(A^m&(y^A))+w[13]+4254626195&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(y^R&(m^y))+w[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=y+(m^A&(R^m))+w[15]+1236535329&4294967295,y=A+(T<<22&4294967295|T>>>10),T=m+(A^R&(y^A))+w[1]+4129170786&4294967295,m=y+(T<<5&4294967295|T>>>27),T=R+(y^A&(m^y))+w[6]+3225465664&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(R^m))+w[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=y+(R^m&(A^R))+w[0]+3921069994&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(A^R&(y^A))+w[5]+3593408605&4294967295,m=y+(T<<5&4294967295|T>>>27),T=R+(y^A&(m^y))+w[10]+38016083&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(R^m))+w[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=y+(R^m&(A^R))+w[4]+3889429448&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(A^R&(y^A))+w[9]+568446438&4294967295,m=y+(T<<5&4294967295|T>>>27),T=R+(y^A&(m^y))+w[14]+3275163606&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(R^m))+w[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=y+(R^m&(A^R))+w[8]+1163531501&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(A^R&(y^A))+w[13]+2850285829&4294967295,m=y+(T<<5&4294967295|T>>>27),T=R+(y^A&(m^y))+w[2]+4243563512&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^y&(R^m))+w[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=y+(R^m&(A^R))+w[12]+2368359562&4294967295,y=A+(T<<20&4294967295|T>>>12),T=m+(y^A^R)+w[5]+4294588738&4294967295,m=y+(T<<4&4294967295|T>>>28),T=R+(m^y^A)+w[8]+2272392833&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^y)+w[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=y+(A^R^m)+w[14]+4259657740&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(y^A^R)+w[1]+2763975236&4294967295,m=y+(T<<4&4294967295|T>>>28),T=R+(m^y^A)+w[4]+1272893353&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^y)+w[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=y+(A^R^m)+w[10]+3200236656&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(y^A^R)+w[13]+681279174&4294967295,m=y+(T<<4&4294967295|T>>>28),T=R+(m^y^A)+w[0]+3936430074&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^y)+w[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=y+(A^R^m)+w[6]+76029189&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(y^A^R)+w[9]+3654602809&4294967295,m=y+(T<<4&4294967295|T>>>28),T=R+(m^y^A)+w[12]+3873151461&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^y)+w[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=y+(A^R^m)+w[2]+3299628645&4294967295,y=A+(T<<23&4294967295|T>>>9),T=m+(A^(y|~R))+w[0]+4096336452&4294967295,m=y+(T<<6&4294967295|T>>>26),T=R+(y^(m|~A))+w[7]+1126891415&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~y))+w[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=y+(R^(A|~m))+w[5]+4237533241&4294967295,y=A+(T<<21&4294967295|T>>>11),T=m+(A^(y|~R))+w[12]+1700485571&4294967295,m=y+(T<<6&4294967295|T>>>26),T=R+(y^(m|~A))+w[3]+2399980690&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~y))+w[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=y+(R^(A|~m))+w[1]+2240044497&4294967295,y=A+(T<<21&4294967295|T>>>11),T=m+(A^(y|~R))+w[8]+1873313359&4294967295,m=y+(T<<6&4294967295|T>>>26),T=R+(y^(m|~A))+w[15]+4264355552&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~y))+w[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=y+(R^(A|~m))+w[13]+1309151649&4294967295,y=A+(T<<21&4294967295|T>>>11),T=m+(A^(y|~R))+w[4]+4149444226&4294967295,m=y+(T<<6&4294967295|T>>>26),T=R+(y^(m|~A))+w[11]+3174756917&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~y))+w[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=y+(R^(A|~m))+w[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+R&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var y=m-this.blockSize,w=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=y;)i(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<m;)if(w[A++]=_.charCodeAt(R++),A==this.blockSize){i(this,w),A=0;break}}else for(;R<m;)if(w[A++]=_[R++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var y=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=y&255,y/=256;for(this.u(_),_=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)_[y++]=this.g[m]>>>w&255;return _};function s(_,m){var y=l;return Object.prototype.hasOwnProperty.call(y,_)?y[_]:y[_]=m(_)}function a(_,m){this.h=m;for(var y=[],w=!0,A=_.length-1;0<=A;A--){var R=_[A]|0;w&&R==m||(y[A]=R,w=!1)}this.g=y}var l={};function u(_){return-128<=_&&128>_?s(_,function(m){return new a([m|0],0>m?-1:0)}):new a([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return L(h(-_));for(var m=[],y=1,w=0;_>=y;w++)m[w]=_/y|0,y*=4294967296;return new a(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return L(f(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),w=g,A=0;A<_.length;A+=8){var R=Math.min(8,_.length-A),T=parseInt(_.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),w=w.j(R).add(h(T))):(w=w.j(y),w=w.add(h(T)))}return w}var g=u(0),v=u(1),k=u(16777216);t=a.prototype,t.m=function(){if(D(this))return-L(this).m();for(var _=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);_+=(0<=w?w:4294967296+w)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(N(this))return"0";if(D(this))return"-"+L(this).toString(_);for(var m=h(Math.pow(_,6)),y=this,w="";;){var A=O(y,m).g;y=I(y,A.j(m));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(_);if(y=A,N(y))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function N(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=I(this,_),D(_)?-1:N(_)?0:1};function L(_){for(var m=_.g.length,y=[],w=0;w<m;w++)y[w]=~_.g[w];return new a(y,~_.h).add(v)}t.abs=function(){return D(this)?L(this):this},t.add=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0,A=0;A<=m;A++){var R=w+(this.i(A)&65535)+(_.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);w=T>>>16,R&=65535,T&=65535,y[A]=T<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function I(_,m){return _.add(L(m))}t.j=function(_){if(N(this)||N(_))return g;if(D(this))return D(_)?L(this).j(L(_)):L(L(this).j(_));if(D(_))return L(this.j(L(_)));if(0>this.l(k)&&0>_.l(k))return h(this.m()*_.m());for(var m=this.g.length+_.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<_.g.length;A++){var R=this.i(w)>>>16,T=this.i(w)&65535,yt=_.i(A)>>>16,rr=_.i(A)&65535;y[2*w+2*A]+=T*rr,E(y,2*w+2*A),y[2*w+2*A+1]+=R*rr,E(y,2*w+2*A+1),y[2*w+2*A+1]+=T*yt,E(y,2*w+2*A+1),y[2*w+2*A+2]+=R*yt,E(y,2*w+2*A+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function E(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function S(_,m){this.g=_,this.h=m}function O(_,m){if(N(m))throw Error("division by zero");if(N(_))return new S(g,g);if(D(_))return m=O(L(_),m),new S(L(m.g),L(m.h));if(D(m))return m=O(_,L(m)),new S(L(m.g),m.h);if(30<_.g.length){if(D(_)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=m;0>=w.l(_);)y=U(y),w=U(w);var A=F(y,1),R=F(w,1);for(w=F(w,2),y=F(y,2);!N(w);){var T=R.add(w);0>=T.l(_)&&(A=A.add(y),R=T),w=F(w,1),y=F(y,1)}return m=I(_,A.j(m)),new S(A,m)}for(A=g;0<=_.l(m);){for(y=Math.max(1,Math.floor(_.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(y),T=R.j(m);D(T)||0<T.l(_);)y-=w,R=h(y),T=R.j(m);N(R)&&(R=v),A=A.add(R),_=I(_,T)}return new S(A,_)}t.A=function(_){return O(this,_).h},t.and=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&_.i(w);return new a(y,this.h&_.h)},t.or=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|_.i(w);return new a(y,this.h|_.h)},t.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^_.i(w);return new a(y,this.h^_.h)};function U(_){for(var m=_.g.length+1,y=[],w=0;w<m;w++)y[w]=_.i(w)<<1|_.i(w-1)>>>31;return new a(y,_.h)}function F(_,m){var y=m>>5;m%=32;for(var w=_.g.length-y,A=[],R=0;R<w;R++)A[R]=0<m?_.i(R+y)>>>m|_.i(R+y+1)<<32-m:_.i(R+y);return new a(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,m_=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,vr=a}).apply(typeof gm<"u"?gm:typeof self<"u"?self:typeof window<"u"?window:{});var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g_,os,y_,ha,zc,v_,__,E_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qo=="object"&&qo];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var C=o[p];if(!(C in d))break e;d=d[C]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,C={next:function(){if(!p&&d<o.length){var P=d++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function g(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),o.apply(c,C)}}return function(){return o.apply(c,arguments)}}function v(o,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function k(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,C,P){for(var M=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)M[ae-2]=arguments[ae];return c.prototype[C].apply(p,M)}}function D(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function L(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const C=o.length||0,P=p.length||0;o.length=C+P;for(let M=0;M<P;M++)o[C+M]=p[M]}else o.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function _(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function m(o){const c={};for(const d in o)c[d]=o[d];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)o[d]=p[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function T(){var o=W;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class yt{constructor(){this.h=this.g=null}add(c,d){const p=rr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var rr=new I(()=>new xi,o=>o.reset());class xi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,z=!1,W=new yt,G=()=>{const o=l.Promise.resolve(void 0);Wt=()=>{o.then(fe)}};var fe=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){R(d)}var c=rr;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}z=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Kt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Gt(o,c){if(we.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{O(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Gt.aa.h.call(this)}}N(Gt,we);var Qt={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),gE=0;function yE(o,c,d,p,C){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=C,this.key=++gE,this.da=this.fa=!1}function lo(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function uo(o){this.src=o,this.g={},this.h=0}uo.prototype.add=function(o,c,d,p,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var M=Vl(o,c,p,C);return-1<M?(c=o[M],d||(c.fa=!1)):(c=new yE(c,this.src,P,!!p,C),c.fa=d,o.push(c)),c};function xl(o,c){var d=c.type;if(d in o.g){var p=o.g[d],C=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=C)&&Array.prototype.splice.call(p,C,1),P&&(lo(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Vl(o,c,d,p){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==p)return C}return-1}var Ll="closure_lm_"+(1e6*Math.random()|0),Ml={};function Vd(o,c,d,p,C){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Vd(o,c[P],d,p,C);return null}return d=Fd(d),o&&o[Yt]?o.K(c,d,h(p)?!!p.capture:!1,C):vE(o,c,d,!1,p,C)}function vE(o,c,d,p,C,P){if(!c)throw Error("Invalid event type");var M=h(C)?!!C.capture:!!C,ae=Ul(o);if(ae||(o[Ll]=ae=new uo(o)),d=ae.add(c,d,p,M,P),d.proxy)return d;if(p=_E(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Kt||(C=M),C===void 0&&(C=!1),o.addEventListener(c.toString(),p,C);else if(o.attachEvent)o.attachEvent(Md(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _E(){function o(d){return c.call(o.src,o.listener,d)}const c=EE;return o}function Ld(o,c,d,p,C){if(Array.isArray(c))for(var P=0;P<c.length;P++)Ld(o,c[P],d,p,C);else p=h(p)?!!p.capture:!!p,d=Fd(d),o&&o[Yt]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],d=Vl(P,d,p,C),-1<d&&(lo(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ul(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Vl(c,d,p,C)),(d=-1<o?c[o]:null)&&Fl(d))}function Fl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Yt])xl(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Md(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Ul(c))?(xl(d,o),d.h==0&&(d.src=null,c[Ll]=null)):lo(o)}}}function Md(o){return o in Ml?Ml[o]:Ml[o]="on"+o}function EE(o,c){if(o.da)o=!0;else{c=new Gt(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Fl(o),o=d.call(p,c)}return o}function Ul(o){return o=o[Ll],o instanceof uo?o:null}var bl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fd(o){return typeof o=="function"?o:(o[bl]||(o[bl]=function(c){return o.handleEvent(c)}),o[bl])}function ze(){oe.call(this),this.i=new uo(this),this.M=this,this.F=null}N(ze,oe),ze.prototype[Yt]=!0,ze.prototype.removeEventListener=function(o,c,d,p){Ld(this,o,c,d,p)};function Xe(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new we(c,o);else if(c instanceof we)c.target=c.target||o;else{var C=c;c=new we(p,o),w(c,C)}if(C=!0,d)for(var P=d.length-1;0<=P;P--){var M=c.g=d[P];C=co(M,p,!0,c)&&C}if(M=c.g=o,C=co(M,p,!0,c)&&C,C=co(M,p,!1,c)&&C,d)for(P=0;P<d.length;P++)M=c.g=d[P],C=co(M,p,!1,c)&&C}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)lo(d[p]);delete o.g[c],o.h--}}this.F=null},ze.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},ze.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function co(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,P=0;P<c.length;++P){var M=c[P];if(M&&!M.da&&M.capture==d){var ae=M.listener,xe=M.ha||M.src;M.fa&&xl(o.i,M),C=ae.call(xe,p)!==!1&&C}}return C&&!p.defaultPrevented}function Ud(o,c,d){if(typeof o=="function")d&&(o=v(o,d));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function bd(o){o.g=Ud(()=>{o.g=null,o.i&&(o.i=!1,bd(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class wE extends oe{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:bd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(o){oe.call(this),this.h=o,this.g={}}N(Vi,oe);var zd=[];function jd(o){F(o.g,function(c,d){this.g.hasOwnProperty(d)&&Fl(c)},o),o.g={}}Vi.prototype.N=function(){Vi.aa.N.call(this),jd(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zl=l.JSON.stringify,TE=l.JSON.parse,IE=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function jl(){}jl.prototype.h=null;function Bd(o){return o.h||(o.h=o.i())}function $d(){}var Li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bl(){we.call(this,"d")}N(Bl,we);function $l(){we.call(this,"c")}N($l,we);var ir={},Hd=null;function ho(){return Hd=Hd||new ze}ir.La="serverreachability";function qd(o){we.call(this,ir.La,o)}N(qd,we);function Mi(o){const c=ho();Xe(c,new qd(c))}ir.STAT_EVENT="statevent";function Wd(o,c){we.call(this,ir.STAT_EVENT,o),this.stat=c}N(Wd,we);function Je(o){const c=ho();Xe(c,new Wd(c,o))}ir.Ma="timingevent";function Kd(o,c){we.call(this,ir.Ma,o),this.size=c}N(Kd,we);function Fi(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function SE(o,c,d,p,C,P){o.info(function(){if(o.g)if(P)for(var M="",ae=P.split("&"),xe=0;xe<ae.length;xe++){var ne=ae[xe].split("=");if(1<ne.length){var je=ne[0];ne=ne[1];var Be=je.split("_");M=2<=Be.length&&Be[1]=="type"?M+(je+"="+ne+"&"):M+(je+"=redacted&")}}else M=null;else M=P;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+d+`
`+M})}function AE(o,c,d,p,C,P,M){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+d+`
`+P+" "+M})}function Or(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+kE(o,d)+(p?" "+p:"")})}function CE(o,c){o.info(function(){return"TIMEOUT: "+c})}Ui.prototype.info=function(){};function kE(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var M=1;M<C.length;M++)C[M]=""}}}}return zl(d)}catch{return c}}var fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hl;function po(){}N(po,jl),po.prototype.g=function(){return new XMLHttpRequest},po.prototype.i=function(){return{}},Hl=new po;function _n(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qd}function Qd(){this.i=null,this.g="",this.h=!1}var Yd={},ql={};function Wl(o,c,d){o.L=1,o.v=vo(Xt(c)),o.m=d,o.P=!0,Xd(o,null)}function Xd(o,c){o.F=Date.now(),mo(o),o.A=Xt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),df(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Qd,o.g=Nf(o.j,d?c:null,!o.m),0<o.O&&(o.M=new wE(v(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(zd[0]=C.toString()),C=zd);for(var P=0;P<C.length;P++){var M=Vd(d,C[P],p||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Mi(),SE(o.i,o.u,o.A,o.l,o.R,o.m)}_n.prototype.ca=function(o){o=o.target;const c=this.M;c&&Jt(o)==3?c.j():this.Y(o)},_n.prototype.Y=function(o){try{if(o==this.g)e:{const Be=Jt(this.g);var c=this.g.Ba();const Lr=this.g.Z();if(!(3>Be)&&(Be!=3||this.g&&(this.h.h||this.g.oa()||_f(this.g)))){this.J||Be!=4||c==7||(c==8||0>=Lr?Mi(3):Mi(2)),Kl(this);var d=this.g.Z();this.X=d;t:if(Jd(this)){var p=_f(this.g);o="";var C=p.length,P=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),bi(this);var M="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==C-1)});p.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,AE(this.i,this.u,this.A,this.l,this.R,Be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,xe=this.g;if((ae=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ae)){var ne=ae;break t}}ne=null}if(d=ne)Or(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gl(this,d);else{this.o=!1,this.s=3,Je(12),sr(this),bi(this);break e}}if(this.P){d=!0;let At;for(;!this.J&&this.C<M.length;)if(At=RE(this,M),At==ql){Be==4&&(this.s=4,Je(14),d=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Yd){this.s=4,Je(15),Or(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else Or(this.i,this.l,At,null),Gl(this,At);if(Jd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||M.length!=0||this.h.h||(this.s=1,Je(16),d=!1),this.o=this.o&&d,!d)Or(this.i,this.l,M,"[Invalid Chunked Response]"),sr(this),bi(this);else if(0<M.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),eu(je),je.M=!0,Je(11))}}else Or(this.i,this.l,M,null),Gl(this,M);Be==4&&sr(this),this.o&&!this.J&&(Be==4?Cf(this.j,this):(this.o=!1,mo(this)))}else qE(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),sr(this),bi(this)}}}catch{}finally{}};function Jd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function RE(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?ql:(d=Number(c.substring(d,p)),isNaN(d)?Yd:(p+=1,p+d>c.length?ql:(c=c.slice(p,p+d),o.C=p+d,c)))}_n.prototype.cancel=function(){this.J=!0,sr(this)};function mo(o){o.S=Date.now()+o.I,Zd(o,o.I)}function Zd(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Fi(v(o.ba,o),c)}function Kl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}_n.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(CE(this.i,this.A),this.L!=2&&(Mi(),Je(17)),sr(this),this.s=2,bi(this)):Zd(this,this.S-o)};function bi(o){o.j.G==0||o.J||Cf(o.j,o)}function sr(o){Kl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,jd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Gl(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Ql(d.h,o))){if(!o.K&&Ql(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)So(d),To(d);else break e;Zl(d),Je(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fi(v(d.Za,d),6e3));if(1>=nf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ar(d,11)}else if((o.K||d.g==o)&&So(d),!E(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ne=C[c];if(d.T=ne[0],ne=ne[1],d.G==2)if(ne[0]=="c"){d.K=ne[1],d.ia=ne[2];const je=ne[3];je!=null&&(d.la=je,d.j.info("VER="+d.la));const Be=ne[4];Be!=null&&(d.Aa=Be,d.j.info("SVER="+d.Aa));const Lr=ne[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(p=1.5*Lr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const At=o.g;if(At){const Co=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var P=p.h;P.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Yl(P,P.h),P.h=null))}if(p.D){const tu=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;tu&&(p.ya=tu,ue(p.I,p.D,tu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var M=o;if(p.qa=Pf(p,p.J?p.ia:null,p.W),M.K){rf(p.h,M);var ae=M,xe=p.L;xe&&(ae.I=xe),ae.B&&(Kl(ae),mo(ae)),p.g=M}else Sf(p);0<d.i.length&&Io(d)}else ne[0]!="stop"&&ne[0]!="close"||ar(d,7);else d.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?ar(d,7):Jl(d):ne[0]!="noop"&&d.l&&d.l.ta(ne),d.v=0)}}Mi(4)}catch{}}var PE=class{constructor(o,c){this.g=o,this.map=c}};function ef(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nf(o){return o.h?1:o.g?o.g.size:0}function Ql(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Yl(o,c){o.g?o.g.add(c):o.h=c}function rf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ef.prototype.cancel=function(){if(this.i=sf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return D(o.i)}function NE(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function DE(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function of(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=DE(o),p=NE(o),C=p.length,P=0;P<C;P++)c.call(void 0,p[P],d&&d[P],o)}var af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OE(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),C=null;if(0<=p){var P=o[d].substring(0,p);C=o[d].substring(p+1)}else P=o[d];c(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function or(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof or){this.h=o.h,go(this,o.j),this.o=o.o,this.g=o.g,yo(this,o.s),this.l=o.l;var c=o.i,d=new Bi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),lf(this,d),this.m=o.m}else o&&(c=String(o).match(af))?(this.h=!1,go(this,c[1]||"",!0),this.o=zi(c[2]||""),this.g=zi(c[3]||"",!0),yo(this,c[4]),this.l=zi(c[5]||"",!0),lf(this,c[6]||"",!0),this.m=zi(c[7]||"")):(this.h=!1,this.i=new Bi(null,this.h))}or.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ji(c,uf,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ji(c,uf,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ji(d,d.charAt(0)=="/"?LE:VE,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ji(d,FE)),o.join("")};function Xt(o){return new or(o)}function go(o,c,d){o.j=d?zi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function yo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function lf(o,c,d){c instanceof Bi?(o.i=c,UE(o.i,o.h)):(d||(c=ji(c,ME)),o.i=new Bi(c,o.h))}function ue(o,c,d){o.i.set(c,d)}function vo(o){return ue(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function zi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ji(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,xE),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xE(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var uf=/[#\/\?@]/g,VE=/[#\?:]/g,LE=/[#\?]/g,ME=/[#\?@]/g,FE=/#/g;function Bi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function En(o){o.g||(o.g=new Map,o.h=0,o.i&&OE(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Bi.prototype,t.add=function(o,c){En(this),this.i=null,o=xr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function cf(o,c){En(o),c=xr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function hf(o,c){return En(o),c=xr(o,c),o.g.has(c)}t.forEach=function(o,c){En(this),this.g.forEach(function(d,p){d.forEach(function(C){o.call(c,C,p,this)},this)},this)},t.na=function(){En(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const C=o[p];for(let P=0;P<C.length;P++)d.push(c[p])}return d},t.V=function(o){En(this);let c=[];if(typeof o=="string")hf(this,o)&&(c=c.concat(this.g.get(xr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return En(this),this.i=null,o=xr(this,o),hf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function df(o,c,d){cf(o,c),0<d.length&&(o.i=null,o.g.set(xr(o,c),D(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const P=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var C=P;M[p]!==""&&(C+="="+encodeURIComponent(String(M[p]))),o.push(C)}}return this.i=o.join("&")};function xr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function UE(o,c){c&&!o.j&&(En(o),o.i=null,o.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(cf(this,p),df(this,C,d))},o)),o.j=c}function bE(o,c){const d=new Ui;if(l.Image){const p=new Image;p.onload=k(wn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=k(wn,d,"TestLoadImage: error",!1,c,p),p.onabort=k(wn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=k(wn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function zE(o,c){const d=new Ui,p=new AbortController,C=setTimeout(()=>{p.abort(),wn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(C),P.ok?wn(d,"TestPingServer: ok",!0,c):wn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),wn(d,"TestPingServer: error",!1,c)})}function wn(o,c,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function jE(){this.g=new IE}function BE(o,c,d){const p=d||"";try{of(o,function(C,P){let M=C;h(C)&&(M=zl(C)),c.push(p+P+"="+encodeURIComponent(M))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function _o(o){this.l=o.Ub||null,this.j=o.eb||!1}N(_o,jl),_o.prototype.g=function(){return new Eo(this.l,this.j)},_o.prototype.i=function(o){return function(){return o}}({});function Eo(o,c){ze.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Eo,ze),t=Eo.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ff(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ff(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?$i(this):Hi(this),this.readyState==3&&ff(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,$i(this))},t.Qa=function(o){this.g&&(this.response=o,$i(this))},t.ga=function(){this.g&&$i(this)};function $i(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hi(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Hi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function pf(o){let c="";return F(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Xl(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=pf(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ue(o,c,d))}function ye(o){ze.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ye,ze);var $E=/^https?$/i,HE=["POST","PUT"];t=ye.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hl.g(),this.v=this.o?Bd(this.o):Bd(Hl),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){mf(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(HE,c,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of d)this.g.setRequestHeader(P,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vf(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){mf(this,P)}};function mf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,gf(o),wo(o)}function gf(o){o.A||(o.A=!0,Xe(o,"complete"),Xe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xe(this,"complete"),Xe(this,"abort"),wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yf(this):this.bb())},t.bb=function(){yf(this)};function yf(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Jt(o)!=4||o.Z()!=2)){if(o.u&&Jt(o)==4)Ud(o.Ea,0,o);else if(Xe(o,"readystatechange"),Jt(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=M===0){var C=String(o.D).match(af)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!$E.test(C?C.toLowerCase():"")}d=p}if(d)Xe(o,"complete"),Xe(o,"success");else{o.m=6;try{var P=2<Jt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",gf(o)}}finally{wo(o)}}}}function wo(o,c){if(o.g){vf(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Xe(o,"ready");try{d.onreadystatechange=p}catch{}}}function vf(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Jt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),TE(c)}};function _f(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function qE(o){const c={};o=(o.g&&2<=Jt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(E(o[p]))continue;var d=A(o[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[C]||[];c[C]=P,P.push(d)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Ef(o){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,o),this.cb=qi("retryDelaySeedMs",1e4,o),this.Wa=qi("forwardChannelMaxRetries",2,o),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ef(o&&o.concurrentRequestLimit),this.Da=new jE,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ef.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,p){Je(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Pf(this,null,this.W),Io(this)};function Jl(o){if(wf(o),o.G==3){var c=o.U++,d=Xt(o.I);if(ue(d,"SID",o.K),ue(d,"RID",c),ue(d,"TYPE","terminate"),Wi(o,d),c=new _n(o,o.j,c),c.L=2,c.v=vo(Xt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Nf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),mo(c)}Rf(o)}function To(o){o.g&&(eu(o),o.g.cancel(),o.g=null)}function wf(o){To(o),o.u&&(l.clearTimeout(o.u),o.u=null),So(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Io(o){if(!tf(o.h)&&!o.s){o.s=!0;var c=o.Ga;Wt||G(),z||(Wt(),z=!0),W.add(c,o),o.B=0}}function WE(o,c){return nf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Fi(v(o.Ga,o,c),kf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new _n(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=If(this,C,c),d=Xt(this.I),ue(d,"RID",o),ue(d,"CVER",22),this.D&&ue(d,"X-HTTP-Session-Id",this.D),Wi(this,d),P&&(this.O?c="headers="+encodeURIComponent(String(pf(P)))+"&"+c:this.m&&Xl(d,this.m,P)),Yl(this.h,C),this.Ua&&ue(d,"TYPE","init"),this.P?(ue(d,"$req",c),ue(d,"SID","null"),C.T=!0,Wl(C,d,null)):Wl(C,d,c),this.G=2}}else this.G==3&&(o?Tf(this,o):this.i.length==0||tf(this.h)||Tf(this))};function Tf(o,c){var d;c?d=c.l:d=o.U++;const p=Xt(o.I);ue(p,"SID",o.K),ue(p,"RID",d),ue(p,"AID",o.T),Wi(o,p),o.m&&o.o&&Xl(p,o.m,o.o),d=new _n(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=If(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Yl(o.h,d),Wl(d,p,c)}function Wi(o,c){o.H&&F(o.H,function(d,p){ue(c,p,d)}),o.l&&of({},function(d,p){ue(c,p,d)})}function If(o,c,d){d=Math.min(o.i.length,d);var p=o.l?v(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const M=["count="+d];P==-1?0<d?(P=C[0].g,M.push("ofs="+P)):P=0:M.push("ofs="+P);let ae=!0;for(let xe=0;xe<d;xe++){let ne=C[xe].g;const je=C[xe].map;if(ne-=P,0>ne)P=Math.max(0,C[xe].g-100),ae=!1;else try{BE(je,M,"req"+ne+"_")}catch{p&&p(je)}}if(ae){p=M.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function Sf(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Wt||G(),z||(Wt(),z=!0),W.add(c,o),o.v=0}}function Zl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Fi(v(o.Fa,o),kf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Af(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Fi(v(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),To(this),Af(this))};function eu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Af(o){o.g=new _n(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Xt(o.qa);ue(c,"RID","rpc"),ue(c,"SID",o.K),ue(c,"AID",o.T),ue(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ue(c,"TO",o.ja),ue(c,"TYPE","xmlhttp"),Wi(o,c),o.m&&o.o&&Xl(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=vo(Xt(c)),d.m=null,d.P=!0,Xd(d,o)}t.Za=function(){this.C!=null&&(this.C=null,To(this),Zl(this),Je(19))};function So(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Cf(o,c){var d=null;if(o.g==c){So(o),eu(o),o.g=null;var p=2}else if(Ql(o.h,c))d=c.D,rf(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=o.B;p=ho(),Xe(p,new Kd(p,d)),Io(o)}else Sf(o);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&WE(o,c)||p==2&&Zl(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),C){case 1:ar(o,5);break;case 4:ar(o,10);break;case 3:ar(o,6);break;default:ar(o,2)}}}function kf(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function ar(o,c){if(o.j.info("Error code "+c),c==2){var d=v(o.fb,o),p=o.Xa;const C=!p;p=new or(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||go(p,"https"),vo(p),C?bE(p.toString(),d):zE(p.toString(),d)}else Je(2);o.G=0,o.l&&o.l.sa(c),Rf(o),wf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Rf(o){if(o.G=0,o.ka=[],o.l){const c=sf(o.h);(c.length!=0||o.i.length!=0)&&(L(o.ka,c),L(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Pf(o,c,d){var p=d instanceof or?Xt(d):new or(d);if(p.g!="")c&&(p.g=c+"."+p.g),yo(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var P=new or(null);p&&go(P,p),c&&(P.g=c),C&&yo(P,C),d&&(P.l=d),p=P}return d=o.D,c=o.ya,d&&c&&ue(p,d,c),ue(p,"VER",o.la),Wi(o,p),p}function Nf(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ye(new _o({eb:d})):new ye(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Df(){}t=Df.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ao(){}Ao.prototype.g=function(o,c){return new ct(o,c)};function ct(o,c){ze.call(this),this.g=new Ef(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!E(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Vr(this)}N(ct,ze),ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){Jl(this.g)},ct.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=zl(o),o=d);c.i.push(new PE(c.Ya++,o)),c.G==3&&Io(c)},ct.prototype.N=function(){this.g.l=null,delete this.j,Jl(this.g),delete this.g,ct.aa.N.call(this)};function Of(o){Bl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}N(Of,Bl);function xf(){$l.call(this),this.status=1}N(xf,$l);function Vr(o){this.g=o}N(Vr,Df),Vr.prototype.ua=function(){Xe(this.g,"a")},Vr.prototype.ta=function(o){Xe(this.g,new Of(o))},Vr.prototype.sa=function(o){Xe(this.g,new xf)},Vr.prototype.ra=function(){Xe(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,E_=function(){return new Ao},__=function(){return ho()},v_=ir,zc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fo.NO_ERROR=0,fo.TIMEOUT=8,fo.HTTP_ERROR=6,ha=fo,Gd.COMPLETE="complete",y_=Gd,$d.EventType=Li,Li.OPEN="a",Li.CLOSE="b",Li.ERROR="c",Li.MESSAGE="d",ze.prototype.listen=ze.prototype.K,os=$d,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,g_=ye}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});const ym="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Jh("@firebase/firestore");function ts(){return kr.logLevel}function B(t,...e){if(kr.logLevel<=X.DEBUG){const n=e.map(ud);kr.debug(`Firestore (${Ni}): ${t}`,...n)}}function yn(t,...e){if(kr.logLevel<=X.ERROR){const n=e.map(ud);kr.error(`Firestore (${Ni}): ${t}`,...n)}}function _i(t,...e){if(kr.logLevel<=X.WARN){const n=e.map(ud);kr.warn(`Firestore (${Ni}): ${t}`,...n)}}function ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function Ee(t,e){t||Q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class ZA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eC{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new li;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new li,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new li)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new w_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new We(e)}}class tC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new rC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new ut(0,0))}static max(){return new K(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $s?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends $s{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const oC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends $s{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return oC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(_e.fromString(e))}static fromName(e){return new H(_e.fromString(e).popFirst(5))}static empty(){return new H(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new _e(e.slice()))}}function aC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Xn(i,H.empty(),e)}function lC(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(K.min(),H.empty(),-1)}static max(){return new Xn(K.max(),H.empty(),-1)}}function uC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==cC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function dC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}hd.oe=-1;function Il(t){return t==null}function jc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=s??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Le(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _m(this.data.getIterator())}getIteratorFrom(e){return new _m(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class _m{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new Fe(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new I_("Invalid base64 string: "+s):s}}(e);return new be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const pC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=pC.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?be.fromBase64String(t):be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fd(t){const e=t.mapValue.fields.__previous_value__;return dd(e)?fd(e):e}function Hs(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i,s,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko={mapValue:{}};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dd(t)?4:yC(t)?9007199254740991:gC(t)?10:11:Q()}function $t(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hs(t).isEqual(Hs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Jn(i.timestampValue),l=Jn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Rr(i.bytesValue).isEqual(Rr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Te(i.doubleValue),l=Te(s.doubleValue);return a===l?jc(a)===jc(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vm(a)!==vm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!$t(a[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Ws(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Te(s.integerValue||s.doubleValue),u=Te(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Em(t.timestampValue,e.timestampValue);case 4:return Em(Hs(t),Hs(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Rr(s),u=Rr(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=re(l[h],u[h]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=re(Te(s.latitude),Te(a.latitude));return l!==0?l:re(Te(s.longitude),Te(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return wm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const g=s.fields||{},v=a.fields||{},k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=(u=v.value)===null||u===void 0?void 0:u.arrayValue,D=re(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:wm(k,N)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ko.mapValue&&a===Ko.mapValue)return 0;if(s===Ko.mapValue)return 1;if(a===Ko.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=re(u[g],f[g]);if(v!==0)return v;const k=wi(l[u[g]],h[f[g]]);if(k!==0)return k}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Em(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Jn(t),r=Jn(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function wm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=wi(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function Ti(t){return Bc(t)}function Bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Bc(n.fields[a])}`;return i+"}"}(t.mapValue):Q()}function $c(t){return!!t&&"integerValue"in t}function pd(t){return!!t&&"arrayValue"in t}function Tm(t){return!!t&&"nullValue"in t}function Im(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lu(t){return!!t&&"mapValue"in t}function gC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Es(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Es(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Sl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(Es(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ge(e,0,K.min(),K.min(),K.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,K.min(),K.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,K.min(),K.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.position=e,this.inclusive=n}}function Sm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),n.key):r=wi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Am(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function vC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{}class Re extends S_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new EC(e,n,r):n==="array-contains"?new IC(e,r):n==="in"?new SC(e,r):n==="not-in"?new AC(e,r):n==="array-contains-any"?new CC(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wC(e,r):new TC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wi(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends S_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ht(e,n)}matches(e){return A_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function A_(t){return t.op==="and"}function C_(t){return _C(t)&&A_(t)}function _C(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Hc(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Ti(t.value);if(C_(t))return t.filters.map(e=>Hc(e)).join(",");{const e=t.filters.map(n=>Hc(n)).join(",");return`${t.op}(${e})`}}function k_(t,e){return t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&$t(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&k_(a,i.filters[l]),!0):!1}(t,e):void Q()}function R_(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${Ti(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(R_).join(" ,")+"}"}(t):"Filter"}class EC extends Re{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class wC extends Re{constructor(e,n){super(e,"in",n),this.keys=P_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TC extends Re{constructor(e,n){super(e,"not-in",n),this.keys=P_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class IC extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pd(n)&&Ws(n.arrayValue,this.value)}}class SC extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class AC extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ws(this.value.arrayValue,n)}}class CC extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Cm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new kC(t,e,n,r,i,s,a)}function md(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ti(r)).join(",")),e.ue=n}return e.ue}function gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!k_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Am(t.startAt,e.startAt)&&Am(t.endAt,e.endAt)}function qc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function RC(t,e,n,r,i,s,a,l){return new Al(t,e,n,r,i,s,a,l)}function yd(t){return new Al(t)}function km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PC(t){return t.collectionGroup!==null}function ws(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Fe(et.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Qa(s,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new Qa(et.keyField(),r))}return e.ce}function Bt(t){const e=Z(t);return e.le||(e.le=NC(e,ws(t))),e.le}function NC(t,e){if(t.limitType==="F")return Cm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qa(i.field,s)});const n=t.endAt?new Ga(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ga(t.startAt.position,t.startAt.inclusive):null;return Cm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wc(t,e,n){return new Al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cl(t,e){return gd(Bt(t),Bt(e))&&t.limitType===e.limitType}function N_(t){return`${md(Bt(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>R_(i)).join(", ")}]`),Il(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ti(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ti(i)).join(",")),`Target(${r})`}(Bt(t))}; limitType=${t.limitType})`}function kl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Sm(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,ws(r),i)||r.endAt&&!function(a,l,u){const h=Sm(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,ws(r),i))}(t,e)}function DC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function D_(t){return(e,n)=>{let r=!1;for(const i of ws(t)){const s=OC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function OC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?wi(u,h):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Sl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new Se(H.comparator);function Zn(){return xC}const O_=new Se(H.comparator);function as(...t){let e=O_;for(const n of t)e=e.insert(n.key,n);return e}function VC(t){let e=O_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return Ts()}function x_(){return Ts()}function Ts(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const LC=new Fe(H.comparator);function ee(...t){let e=LC;for(const n of t)e=e.add(n);return e}const MC=new Fe(re);function FC(){return MC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(e)?"-0":e}}function bC(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this._=void 0}}function zC(t,e,n){return t instanceof Kc?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&dd(s)&&(s=fd(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Ya?V_(t,e):t instanceof Xa?L_(t,e):function(i,s){const a=BC(i,s),l=Rm(a)+Rm(i.Pe);return $c(a)&&$c(i.Pe)?bC(l):UC(i.serializer,l)}(t,e)}function jC(t,e,n){return t instanceof Ya?V_(t,e):t instanceof Xa?L_(t,e):n}function BC(t,e){return t instanceof Gc?function(r){return $c(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Kc extends Rl{}class Ya extends Rl{constructor(e){super(),this.elements=e}}function V_(t,e){const n=M_(e);for(const r of t.elements)n.some(i=>$t(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xa extends Rl{constructor(e){super(),this.elements=e}}function L_(t,e){let n=M_(e);for(const r of t.elements)n=n.filter(i=>!$t(i,r));return{arrayValue:{values:n}}}class Gc extends Rl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rm(t){return Te(t.integerValue||t.doubleValue)}function M_(t){return pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $C(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ya&&i instanceof Ya||r instanceof Xa&&i instanceof Xa?Ei(r.elements,i.elements,$t):r instanceof Gc&&i instanceof Gc?$t(r.Pe,i.Pe):r instanceof Kc&&i instanceof Kc}(t.transform,e.transform)}class _r{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _r}static exists(e){return new _r(void 0,e)}static updateTime(e){return new _r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vd{}function F_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qC(t.key,_r.none()):new _d(t.key,t.data,_r.none());{const n=t.data,r=Mt.empty();let i=new Fe(et.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Pl(t.key,r,new Vn(i.toArray()),_r.none())}}function HC(t,e,n){t instanceof _d?function(i,s,a){const l=i.value.clone(),u=Nm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Pl?function(i,s,a){if(!da(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Nm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(U_(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Is(t,e,n,r){return t instanceof _d?function(s,a,l,u){if(!da(s.precondition,a))return l;const h=s.value.clone(),f=Dm(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pl?function(s,a,l,u){if(!da(s.precondition,a))return l;const h=Dm(s.fieldTransforms,u,a),f=a.data;return f.setAll(U_(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return da(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function Pm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ei(r,i,(s,a)=>$C(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _d extends vd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pl extends vd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function U_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nm(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,jC(a,l,n[i]))}return r}function Dm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,zC(s,a,e))}return r}class qC extends vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Is(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Is(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=x_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=F_(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,r)=>Pm(n,r))&&Ei(this.baseMutations,e.baseMutations,(n,r)=>Pm(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,J;function b_(t){if(t===void 0)return yn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ae.OK:return b.OK;case Ae.CANCELLED:return b.CANCELLED;case Ae.UNKNOWN:return b.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return b.INTERNAL;case Ae.UNAVAILABLE:return b.UNAVAILABLE;case Ae.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ae.NOT_FOUND:return b.NOT_FOUND;case Ae.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ae.ABORTED:return b.ABORTED;case Ae.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ae.DATA_LOSS:return b.DATA_LOSS;default:return Q()}}(J=Ae||(Ae={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new vr([4294967295,4294967295],0);function Om(t){const e=QC().encode(t),n=new m_;return n.update(e),new Uint8Array(n.digest())}function xm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vr([n,r],0),new vr([i,s],0)]}class Ed{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ls(`Invalid padding: ${n}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ls(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(vr.fromNumber(r)));return i.compare(YC)===1&&(i=new vr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Om(e),[r,i]=xm(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Ed(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=Om(e),[r,i]=xm(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nl(K.min(),i,new Se(re),Zn(),ee())}}class so{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new so(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class z_{constructor(e,n){this.targetId=e,this.me=n}}class j_{constructor(e,n,r=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Vm{constructor(){this.fe=0,this.ge=Mm(),this.pe=be.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new so(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class XC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zn(),this.qe=Lm(),this.Qe=new Se(re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(qc(s))if(r===0){const a=new H(s.path);this.Ue(n,a,Ge.newNoDocument(a,K.min()))}else Ee(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=Rr(r).toUint8Array()}catch(u){if(u instanceof I_)return _i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ed(a,i,s)}catch(u){return _i(u instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&qc(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ge.newNoDocument(u,e))}s.be&&(n.set(a,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Nl(e,n,this.Qe,this.ke,r);return this.ke=Zn(),this.qe=Lm(),this.Qe=new Se(re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Vm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Fe(re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Vm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Lm(){return new Se(H.comparator)}function Mm(){return new Se(H.comparator)}const JC={asc:"ASCENDING",desc:"DESCENDING"},ZC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},e1={and:"AND",or:"OR"};class t1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qc(t,e){return t.useProto3Json||Il(e)?e:{value:e}}function n1(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ui(t){return Ee(!!t),K.fromTimestamp(function(n){const r=Jn(n);return new ut(r.seconds,r.nanos)}(t))}function i1(t,e){return Yc(t,e).canonicalString()}function Yc(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function B_(t){const e=_e.fromString(t);return Ee(K_(e)),e}function Mu(t,e){const n=B_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(H_(n))}function $_(t,e){return i1(t.databaseId,e)}function s1(t){const e=B_(t);return e.length===4?_e.emptyPath():H_(e)}function Fm(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function H_(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function o1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(Ee(f===void 0||typeof f=="string"),be.fromBase64String(f||"")):(Ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array),be.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?b.UNKNOWN:b_(h.code);return new $(f,h.message||"")}(a);n=new j_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mu(t,r.document.name),s=ui(r.document.updateTime),a=r.document.createTime?ui(r.document.createTime):K.min(),l=new Mt({mapValue:{fields:r.document.fields}}),u=Ge.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new fa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mu(t,r.document),s=r.readTime?ui(r.readTime):K.min(),a=Ge.newNoDocument(i,s),l=r.removedTargetIds||[];n=new fa([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mu(t,r.document),s=r.removedTargetIds||[];n=new fa([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new GC(i,s),l=r.targetId;n=new z_(l,a)}}return n}function a1(t,e){return{documents:[$_(t,e.path)]}}function l1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$_(t,i);const s=function(h){if(h.length!==0)return W_(Ht.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:Ur(v.field),direction:h1(v.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Qc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function u1(t){let e=s1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const v=q_(g);return v instanceof Ht&&C_(v)?v.getFilters():[v]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(v=>function(N){return new Qa(br(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,Il(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(g){const v=!!g.before,k=g.values||[];return new Ga(k,v)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const v=!g.before,k=g.values||[];return new Ga(k,v)}(n.endAt)),RC(e,i,a,s,l,"F",u,h)}function c1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function q_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=br(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=br(n.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=br(n.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=br(n.unaryFilter.field);return Re.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Re.create(br(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>q_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function h1(t){return JC[t]}function d1(t){return ZC[t]}function f1(t){return e1[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function br(t){return et.fromServerFormat(t.fieldPath)}function W_(t){return t instanceof Re?function(n){if(n.op==="=="){if(Im(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(Tm(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Im(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(Tm(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:d1(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>W_(i));return r.length===1?r[0]:{compositeFilter:{op:f1(n.op),filters:r}}}(t):Q()}function K_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,r,i,s=K.min(),a=K.min(),l=be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.ct=e}}function m1(t){const e=u1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.un=new y1}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Xn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class y1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ii(0)}static kn(){return new Ii(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Is(r.mutation,i,Vn.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=as();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Zn();const a=Ts(),l=function(){return Ts()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Pl)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Is(f.mutation,h,f.mutation.getFieldMask(),ut.now())):a.set(h.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new _1(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ts();let i=new Se((a,l)=>a-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Vn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=x_();f.forEach(v=>{if(!s.has(v)){const k=F_(n.get(v),r.get(v));k!==null&&g.set(v,k),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(mr());let l=-1,u=s;return a.next(h=>x.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:VC(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=as();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=as();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,u=>{const h=function(g,v){return new Al(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ge.newInvalidDocument(f)))});let l=as();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Is(f.mutation,h,Vn.empty(),ut.now()),kl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ui(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:m1(i.bundledQuery),readTime:ui(i.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.overlays=new Se(H.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=mr(),s=n.length+1,a=new H(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=mr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return x.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new KC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.Tr=new Fe(Ne.Er),this.dr=new Fe(Ne.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ne(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new _e([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new _e([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||re(e.wr,n.wr)}static Ar(e,n){return re(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Fe(Ne.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new WC(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ne(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(re);return n.forEach(i=>{const s=new Ne(i,0),a=new Ne(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new Ne(new H(s),0);let l=new Fe(re);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),x.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ne(n,0),i=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.Mr=e,this.docs=function(){return new Se(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=Zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zn();const a=n.path,l=new H(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||uC(lC(f),r)<=0||(i.has(f.key)||kl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new C1(this)}getSize(e){return x.resolve(this.size)}}class C1 extends v1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.persistence=e,this.Nr=new Di(n=>md(n),gd),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wd,this.targetCount=0,this.kr=Ii.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new hd(0),this.Kr=!1,this.Kr=!0,this.$r=new I1,this.referenceDelegate=e(this),this.Ur=new k1(this),this.indexManager=new g1,this.remoteDocumentCache=function(i){return new A1(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new p1(n),this.Gr=new w1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new T1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new S1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new P1(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class P1 extends hC{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Jr=new wd,this.Yr=null}static Zr(e){return new Td(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Id(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return VT()?8:dC(Ye())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new N1;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ts()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(ts()<=X.DEBUG&&B("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ts()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bt(n))):x.resolve())}Yi(e,n){if(km(n))return x.resolve(null);let r=Bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wc(n,null,"F"),r=Bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ee(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,a,u.readTime)?this.Yi(e,Wc(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return km(n)||i.isEqual(K.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?x.resolve(null):(ts()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fr(n)),this.rs(e,a,n,aC(i,-1)).next(l=>l))})}ts(e,n){let r=new Fe(D_(e));return n.forEach((i,s)=>{kl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ts()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(re),this._s=new Di(s=>md(s),gd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function x1(t,e,n,r){return new O1(t,e,n,r)}async function G_(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=ee();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Q_(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function V1(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const v=i.get(g);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let k=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(be.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(g,k),function(D,L,I){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(v,k,f)&&l.push(n.Ur.updateTargetData(s,k))});let u=Zn(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(L1(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(K.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function L1(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=Zn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function M1(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ur.allocateTargetId(r).next(a=>(i=new Ln(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Xc(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!io(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Um(t,e,n){const r=Z(t);let i=K.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=Z(u),v=g._s.get(f);return v!==void 0?x.resolve(g.os.get(v)):g.Ur.getTargetData(h,f)}(r,a,Bt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?i:K.min(),n?s:ee())).next(l=>(F1(r,DC(e),l),{documents:l,Ts:s})))}function F1(t,e,n){let r=t.us.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class bm{constructor(){this.activeTargetIds=FC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class U1{constructor(){this.so=new bm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go=null;function Fu(){return Go===null?Go=function(){return 268435456+Math.round(2147483648*Math.random())}():Go++,"0x"+Go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class B1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Fu(),u=this.xo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(n,u,h,i).then(f=>(B("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw _i("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ni}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=z1[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Fu();return new Promise((a,l)=>{const u=new g_;u.setWithCredentials(!0),u.listenOnce(y_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ha.NO_ERROR:const f=u.getResponseJson();B(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ha.TIMEOUT:B(qe,`RPC '${e}' ${s} timed out`),l(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const g=u.getStatus();if(B(qe,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const N=function(L){const I=L.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(k.status);l(new $(N,k.message))}else l(new $(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(b.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B(qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);B(qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Fu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=E_(),l=__(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let v=!1,k=!1;const N=new j1({Io:L=>{k?B(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(v||(B(qe,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),B(qe,`RPC '${e}' stream ${i} sending:`,L),g.send(L))},To:()=>g.close()}),D=(L,I,E)=>{L.listen(I,S=>{try{E(S)}catch(O){setTimeout(()=>{throw O},0)}})};return D(g,os.EventType.OPEN,()=>{k||(B(qe,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),D(g,os.EventType.CLOSE,()=>{k||(k=!0,B(qe,`RPC '${e}' stream ${i} transport closed`),N.So())}),D(g,os.EventType.ERROR,L=>{k||(k=!0,_i(qe,`RPC '${e}' stream ${i} transport errored:`,L),N.So(new $(b.UNAVAILABLE,"The operation could not be completed")))}),D(g,os.EventType.MESSAGE,L=>{var I;if(!k){const E=L.data[0];Ee(!!E);const S=E,O=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(O){B(qe,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let F=function(y){const w=Ae[y];if(w!==void 0)return b_(w)}(U),_=O.message;F===void 0&&(F=b.INTERNAL,_="Unknown error status: "+U+" with message "+O.message),k=!0,N.So(new $(F,_)),g.close()}else B(qe,`RPC '${e}' stream ${i} received:`,E),N.bo(E)}}),D(l,v_.STAT_EVENT,L=>{L.stat===zc.PROXY?B(qe,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===zc.NOPROXY&&B(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Uu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){return new t1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new X_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H1 extends $1{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=o1(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?ui(a.readTime):K.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Fm(this.serializer),n.addTarget=function(s,a){let l;const u=a.target;if(l=qc(u)?{documents:a1(s,u)}:{query:l1(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=r1(s,a.resumeToken);const h=Qc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=n1(s,a.snapshotVersion.toTimestamp());const h=Qc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=c1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Fm(this.serializer),n.removeTarget=e,this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Yc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(b.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Yc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class W1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(yn(n),this.D_=!1):B("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{ao(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await oo(h),h.q_.set("Unknown"),h.L_.delete(4),await Dl(h)}(this))})}),this.q_=new W1(r,i)}}async function Dl(t){if(ao(t))for(const e of t.B_)await e(!0)}async function oo(t){for(const e of t.B_)await e(!1)}function J_(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),kd(n)?Cd(n):Oi(n).r_()&&Ad(n,e))}function Sd(t,e){const n=Z(t),r=Oi(n);n.N_.delete(e),r.r_()&&Z_(n,e),n.N_.size===0&&(r.r_()?r.o_():ao(n)&&n.q_.set("Unknown"))}function Ad(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).A_(e)}function Z_(t,e){t.Q_.xe(e),Oi(t).R_(e)}function Cd(t){t.Q_=new XC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.q_.v_()}function kd(t){return ao(t)&&!Oi(t).n_()&&t.N_.size>0}function ao(t){return Z(t).L_.size===0}function eE(t){t.Q_=void 0}async function G1(t){t.q_.set("Online")}async function Q1(t){t.N_.forEach((e,n)=>{Ad(t,e)})}async function Y1(t,e){eE(t),kd(t)?(t.q_.M_(e),Cd(t)):t.q_.set("Unknown")}async function X1(t,e,n){if(t.q_.set("Online"),e instanceof j_&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jm(t,r)}else if(e instanceof fa?t.Q_.Ke(e):e instanceof z_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(K.min()))try{const r=await Q_(t.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(be.EMPTY_BYTE_STRING,f.snapshotVersion)),Z_(s,u);const g=new Ln(f.target,u,h,f.sequenceNumber);Ad(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await jm(t,r)}}async function jm(t,e,n){if(!io(e))throw e;t.L_.add(1),await oo(t),t.q_.set("Offline"),n||(n=()=>Q_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Dl(t)})}async function Bm(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=ao(n);n.L_.add(3),await oo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Dl(n)}async function J1(t,e){const n=Z(t);e?(n.L_.delete(2),await Dl(n)):e||(n.L_.add(2),await oo(n),n.q_.set("Unknown"))}function Oi(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new H1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:G1.bind(null,t),Ro:Q1.bind(null,t),mo:Y1.bind(null,t),d_:X1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),kd(t)?Cd(t):t.q_.set("Unknown")):(await t.K_.stop(),eE(t))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Rd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tE(t,e){if(yn("AsyncQueue",`${e}: ${t}`),io(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=as(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.W_=new Se(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,i,s,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Si(e,n,ci.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ek{constructor(){this.queries=Hm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Hm(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(b.ABORTED,"Firestore shutting down"))}}function Hm(){return new Di(t=>N_(t),Cl)}async function tk(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Z1,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=tE(a,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Pd(n)}async function nk(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rk(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Pd(n)}function ik(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Pd(t){t.Y_.forEach(e=>{e.next()})}var Jc,qm;(qm=Jc||(Jc={})).ea="default",qm.Cache="cache";class sk{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Jc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.key=e}}class rE{constructor(e){this.key=e}}class ok{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=D_(e),this.Ra=new ci(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new $m,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const v=i.get(f),k=kl(this.query,g)?g:null,N=!!v&&this.mutatedKeys.has(v.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;v&&k?v.data.isEqual(k.data)?N!==D&&(r.track({type:3,doc:k}),L=!0):this.ga(v,k)||(r.track({type:2,doc:k}),L=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),L=!0):v&&!k&&(r.track({type:1,doc:v}),L=!0,(u||h)&&(l=!0)),L&&(k?(a=a.add(k),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(k,N){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return D(k)-D(N)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Si(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $m,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new rE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new nE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ak{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lk{constructor(e){this.key=e,this.va=!1}}class uk{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Di(l=>N_(l),Cl),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(H.comparator),this.Na=new Map,this.La=new wd,this.Ba={},this.ka=new Map,this.qa=Ii.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ck(t,e,n=!0){const r=lE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await iE(r,e,n,!0),i}async function hk(t,e){const n=lE(t);await iE(n,e,!0,!1)}async function iE(t,e,n,r){const i=await M1(t.localStore,Bt(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await dk(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&J_(t.remoteStore,i),l}async function dk(t,e,n,r,i){t.Ka=(g,v,k)=>async function(D,L,I,E){let S=L.view.ma(I);S.ns&&(S=await Um(D.localStore,L.query,!1).then(({documents:_})=>L.view.ma(_,S)));const O=E&&E.targetChanges.get(L.targetId),U=E&&E.targetMismatches.get(L.targetId)!=null,F=L.view.applyChanges(S,D.isPrimaryClient,O,U);return Km(D,L.targetId,F.wa),F.snapshot}(t,g,v,k);const s=await Um(t.localStore,e,!0),a=new ok(e,s.Ts),l=a.ma(s.documents),u=so.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(l,t.isPrimaryClient,u);Km(t,n,h.wa);const f=new ak(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function fk(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Cl(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Xc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sd(r.remoteStore,i.targetId),Zc(r,i.targetId)}).catch(cd)):(Zc(r,i.targetId),await Xc(r.localStore,i.targetId,!0))}async function pk(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sd(n.remoteStore,r.targetId))}async function sE(t,e){const n=Z(t);try{const r=await V1(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Na.get(s);a&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Ee(a.va):i.removedDocuments.size>0&&(Ee(a.va),a.va=!1))}),await aE(n,r,e)}catch(r){await cd(r)}}function Wm(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=Z(a);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const v of g.j_)v.Z_(l)&&(h=!0)}),h&&Pd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mk(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new Se(H.comparator);a=a.insert(s,Ge.newNoDocument(s,K.min()));const l=ee().add(s),u=new Nl(K.min(),new Map,new Se(re),a,l);await sE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Nd(r)}else await Xc(r.localStore,e,!1).then(()=>Zc(r,e,n)).catch(cd)}function Zc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||oE(t,r)})}function oE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Nd(t))}function Km(t,e,n){for(const r of n)r instanceof nE?(t.La.addReference(r.key,e),gk(t,r)):r instanceof rE?(B("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||oE(t,r.key)):Q()}function gk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(B("SyncEngine","New document in limbo: "+n),t.xa.add(r),Nd(t))}function Nd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new lk(n)),t.Oa=t.Oa.insert(n,r),J_(t.remoteStore,new Ln(Bt(yd(n.path)),r,"TargetPurposeLimboResolution",hd.oe))}}async function aE(t,e,n){const r=Z(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Id.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>x.forEach(h,v=>x.forEach(v.$i,k=>f.persistence.referenceDelegate.addReference(g,v.targetId,k)).next(()=>x.forEach(v.Ui,k=>f.persistence.referenceDelegate.removeReference(g,v.targetId,k)))))}catch(g){if(!io(g))throw g;B("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const v=g.targetId;if(!g.fromCache){const k=f.os.get(v),N=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(v,D)}}}(r.localStore,s))}async function yk(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await G_(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(b.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aE(n,r.hs)}}function vk(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const a of s){const l=n.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function lE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mk.bind(null,e),e.Ca.d_=rk.bind(null,e.eventManager),e.Ca.$a=ik.bind(null,e.eventManager),e}class Ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Y_(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return x1(this.persistence,new D1,e.initialUser,this.serializer)}Ga(e){return new R1(Td.Zr,this.serializer)}Wa(e){return new U1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ja.provider={build:()=>new Ja};class eh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yk.bind(null,this.syncEngine),await J1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ek}()}createDatastore(e){const n=Y_(e.databaseInfo.databaseId),r=function(s){return new B1(s)}(e.databaseInfo);return function(s,a,l,u){return new q1(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new K1(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Wm(this.syncEngine,n,0),function(){return zm.D()?new zm:new b1}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const g=new uk(i,s,a,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await oo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}eh.provider={build:()=>new eh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=T_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bu(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await G_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wk(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bm(e.remoteStore,i)),t._onlineComponents=e}async function wk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;_i("Error using user provided cache. Falling back to memory cache: "+n),await bu(t,new Ja)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await bu(t,new Ja);return t._offlineComponents}async function Tk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Gm(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Gm(t,new eh))),t._onlineComponents}async function Qm(t){const e=await Tk(t),n=e.eventManager;return n.onListen=ck.bind(null,e.syncEngine),n.onUnlisten=fk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pk.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sk(t,e,n,r){if(e===!0&&r===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xm(t){if(!H.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ak(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function pa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ak(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JA;switch(r.type){case"firstParty":return new nC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ym.get(n);r&&(B("ComponentProvider","Removing Datastore"),Ym.delete(n),r.terminate())}(this),Promise.resolve()}}function Ck(t,e,n,r={}){var i;const s=(t=pa(t,Dd))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=We.MOCK_USER;else{l=kT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new We(h)}t._authCredentials=new ZA(new w_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ol(this.firestore,e,this._query)}}class un{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class Ks extends Ol{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new H(e))}withConverter(e){return new Ks(this.firestore,e,this._path)}}function Zm(t,e,...n){if(t=St(t),arguments.length===1&&(e=T_.newId()),Ik("doc","path",e),t instanceof Dd){const r=_e.fromString(e,...n);return Xm(r),new un(t,null,new H(r))}{if(!(t instanceof un||t instanceof Ks))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Xm(r),new un(t.firestore,t instanceof Ks?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new X_(this,"async_queue_retry"),this.Vu=()=>{const r=Uu();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Uu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Uu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new li;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!io(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Rd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function tg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class th extends Dd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new eg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eg(e),this._firestoreClient=void 0,await e}}}function kk(t,e){const n=typeof t=="object"?t:ed(),r=typeof t=="string"?t:"(default)",i=vl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Rv("firestore");s&&Ck(i,...s)}return i}function Rk(t){if(t._terminated)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Pk(t),t._firestoreClient}function Pk(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new mC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,uE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Ek(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Za(be.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Za(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}const Ok=new RegExp("[~\\*/\\[\\]]");function xk(t,e,n){if(e.search(Ok)>=0)throw ng(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new cE(...e.split("."))._internalPath}catch{throw ng(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ng(t,e,n,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new $(b.INVALID_ARGUMENT,s+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Vk extends hE{data(){return super.data()}}function dE(t,e){return typeof e=="string"?xk(t,e):e instanceof cE?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mk{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Sl(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Te(a.doubleValue));return new Dk(s)}convertGeoPoint(e){return new Nk(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hs(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);Ee(K_(r));const i=new qs(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fE extends hE{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ma extends fE{data(e={}){return super.data(e)}}class Fk{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ma(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new ma(i._firestore,i._userDataWriter,l.doc.key,l.doc,new us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ma(i._firestore,i._userDataWriter,l.doc.key,l.doc,new us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Uk(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Uk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class pE extends Mk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Za(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,n)}}function rg(t,...e){var n,r,i;t=St(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||tg(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(tg(e[a])){const g=e[a];e[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(t instanceof un)h=pa(t.firestore,th),f=yd(t._key.path),u={next:g=>{e[a]&&e[a](bk(h,t,g))},error:e[a+1],complete:e[a+2]};else{const g=pa(t,Ol);h=pa(g.firestore,th),f=g._query;const v=new pE(h);u={next:k=>{e[a]&&e[a](new Fk(h,v,g,k))},error:e[a+1],complete:e[a+2]},Lk(t._query)}return function(v,k,N,D){const L=new _k(D),I=new sk(k,L,N);return v.asyncQueue.enqueueAndForget(async()=>tk(await Qm(v),I)),()=>{L.Za(),v.asyncQueue.enqueueAndForget(async()=>nk(await Qm(v),I))}}(Rk(h),f,l,u)}function bk(t,e,n){const r=n.docs.get(e._key),i=new pE(t);return new fE(t,i,e._key,r,new us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ni=i})(Ri),Ar(new Qn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new th(new eC(r.getProvider("auth-internal")),new iC(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),bt(ym,"4.7.3",e),bt(ym,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="type.googleapis.com/google.protobuf.Int64Value",jk="type.googleapis.com/google.protobuf.UInt64Value";function mE(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function nh(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>nh(e));if(typeof t=="function"||typeof t=="object")return mE(t,e=>nh(e));throw new Error("Data cannot be encoded in JSON: "+t)}function el(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case zk:case jk:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>el(e)):typeof t=="function"||typeof t=="object"?mE(t,e=>el(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hi extends qt{constructor(e,n,r){super(`${Od}/${e}`,n||""),this.details=r}}function Bk(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function $k(t,e){let n=Bk(t),r=n,i;try{const s=e&&e.error;if(s){const a=s.status;if(typeof a=="string"){if(!ig[a])return new hi("internal","internal");n=ig[a],r=a}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=el(i))}}catch{}return n==="ok"?null:new hi(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="us-central1";function qk(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new hi("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Wk{constructor(e,n,r,i,s=rh,a){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new Hk(n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=rh}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Kk(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Gk(t,e,n){return r=>Yk(t,e,r,{})}async function Qk(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function Yk(t,e,n,r){const i=t._url(e);return Xk(t,i,n,r)}async function Xk(t,e,n,r){n=nh(n);const i={data:n},s={},a=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);a.authToken&&(s.Authorization="Bearer "+a.authToken),a.messagingToken&&(s["Firebase-Instance-ID-Token"]=a.messagingToken),a.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=a.appCheckToken);const l=r.timeout||7e4,u=qk(l),h=await Promise.race([Qk(e,i,s,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!h)throw new hi("cancelled","Firebase Functions instance was deleted.");const f=$k(h.status,h.json);if(f)throw f;if(!h.json)throw new hi("internal","Response is not valid JSON object.");let g=h.json.data;if(typeof g>"u"&&(g=h.json.result),typeof g>"u")throw new hi("internal","Response is missing data field.");return{data:el(g)}}const sg="@firebase/functions",og="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk="auth-internal",Zk="app-check-internal",eR="messaging-internal";function tR(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),a=r.getProvider(Jk),l=r.getProvider(eR),u=r.getProvider(Zk);return new Wk(s,a,l,u,i,t)};Ar(new Qn(Od,n,"PUBLIC").setMultipleInstances(!0)),bt(sg,og,e),bt(sg,og,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t=ed(),e=rh){const r=vl(St(t),Od).getImmediate({identifier:e}),i=Rv("functions");return i&&rR(r,...i),r}function rR(t,e,n){Kk(St(t),e,n)}function ag(t,e,n){return Gk(St(t),e)}tR(fetch.bind(self));const iR={apiKey:"AIzaSyBFb_PhssH28TTsvFjJ5OKE90EdKRqhxJM",authDomain:"ai-tcg-duel.firebaseapp.com",projectId:"ai-tcg-duel",storageBucket:"ai-tcg-duel.firebasestorage.app",messagingSenderId:"1021020492185",appId:"1:1021020492185:web:fc6d9912bdf0de7f92c308",measurementId:"G-V34KKNBFMC"},xd=xv(iR),lg=YA(xd),ug=kk(xd),cg=nR(xd,"asia-northeast1");function sR(){const[t,e]=hr.useState(""),[n,r]=hr.useState(null),[i,s]=hr.useState(null);hr.useEffect(()=>(xS(lg),bS(lg,()=>{})),[]),hr.useEffect(()=>{if(!t)return;const u=rg(Zm(ug,"games",t,"public","state"),f=>r(f.data())),h=rg(Zm(ug,"games",t,"private","P1"),f=>s(f.data()));return()=>{u(),h()}},[t]);const a=async()=>{const h=await ag(cg,"startGameFn")({});e(h.data.gameId)},l=async u=>{if(!t)return;await ag(cg,"applyIntentFn")({gameId:t,actor:"P1",intent:u})};return se.jsxs("div",{style:{fontFamily:"system-ui",padding:16,display:"grid",gap:12},children:[se.jsx("h1",{children:"Dual Raid TCG (Firebase)"}),!t&&se.jsx("button",{onClick:a,children:"Start New Game (vs AI)"}),t&&se.jsxs("div",{children:[se.jsx("b",{children:"Game:"})," ",t]}),!n&&t&&se.jsx("div",{children:"Loading state…"}),n&&se.jsx(oR,{pub:n,priv:i,onAct:l})]})}function oR({pub:t,priv:e,onAct:n}){var s,a,l;const r=t==null?void 0:t.p1,i=t==null?void 0:t.p2;return se.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[se.jsxs("section",{children:[se.jsx("h2",{children:"Your Side"}),se.jsxs("div",{children:["Boss: ",r==null?void 0:r.boss.name," HP ",r==null?void 0:r.boss.hp,"/",r==null?void 0:r.boss.maxHp]}),se.jsx("div",{style:{display:"grid",gap:8},children:(s=r==null?void 0:r.adv)==null?void 0:s.map(u=>{var h;return se.jsxs("div",{style:{border:"1px solid #ccc",borderRadius:8,padding:8},children:[se.jsx("b",{children:u.name})," HP ",u.hp,"/",u.maxHp," AP ",u.ap,"/",u.maxAp,se.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[se.jsx("button",{onClick:()=>n({type:"use_action",unit:u.name,action:"攻撃"}),disabled:u.hp<=0,children:"攻撃"}),se.jsxs("button",{onClick:()=>{var f;return n({type:"use_action",unit:u.name,action:"ヒール",target:(f=r.adv[0])==null?void 0:f.name})},disabled:u.hp<=0,children:["（試）ヒール→",(h=r.adv[0])==null?void 0:h.name]})]})]},u.id)})}),se.jsx("h3",{children:"Hand"}),se.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:(a=e==null?void 0:e.hand)==null?void 0:a.map((u,h)=>se.jsx("button",{onClick:()=>{var f,g;return n({type:"play_support",card:u,mode:"adventurer",target:(g=(f=r==null?void 0:r.adv)==null?void 0:f[0])==null?void 0:g.name})},children:u},h))}),se.jsx("button",{onClick:()=>n({type:"end_turn"}),style:{marginTop:8},children:"End Turn"})]}),se.jsxs("section",{children:[se.jsx("h2",{children:"Opponent"}),se.jsxs("div",{children:["Boss: ",i==null?void 0:i.boss.name," HP ",i==null?void 0:i.boss.hp,"/",i==null?void 0:i.boss.maxHp]}),se.jsx("div",{style:{display:"grid",gap:8},children:(l=i==null?void 0:i.adv)==null?void 0:l.map(u=>se.jsxs("div",{style:{border:"1px dashed #ccc",borderRadius:8,padding:8,opacity:u.hp>0?1:.5},children:[se.jsx("b",{children:u.name})," HP ",u.hp,"/",u.maxHp]},u.id))})]})]})}Iv(document.getElementById("root")).render(se.jsx(sR,{}));
