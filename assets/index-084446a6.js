(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Bv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bp={exports:{}},ll={},Hp={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Gv=Symbol.for("react.fragment"),Vv=Symbol.for("react.strict_mode"),Wv=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Kv=Symbol.for("react.lazy"),Jd=Symbol.iterator;function Zv(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Wp={};function Ms(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Gp}Ms.prototype.isReactComponent={};Ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jp(){}jp.prototype=Ms.prototype;function ju(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Gp}var Xu=ju.prototype=new jp;Xu.constructor=ju;Vp(Xu,Ms.prototype);Xu.isPureReactComponent=!0;var ef=Array.isArray,Xp=Object.prototype.hasOwnProperty,Yu={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xp.call(e,i)&&!Yp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:So,type:t,key:s,ref:o,props:r,_owner:Yu.current}}function Qv(t,e){return{$$typeof:So,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qu(t){return typeof t=="object"&&t!==null&&t.$$typeof===So}function Jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tf=/\/+/g;function Nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jv(""+t.key):e.toString(36)}function _a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case So:case Hv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nl(o,0):i,ef(r)?(n="",t!=null&&(n=t.replace(tf,"$&/")+"/"),_a(r,e,n,"",function(c){return c})):r!=null&&(qu(r)&&(r=Qv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ef(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nl(s,a);o+=_a(s,e,n,l,r)}else if(l=Zv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nl(s,a++),o+=_a(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var i=[],r=0;return _a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function e0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},xa={transition:null},t0={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Yu};function $p(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!qu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Ms;He.Fragment=Gv;He.Profiler=Wv;He.PureComponent=ju;He.StrictMode=Vv;He.Suspense=qv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;He.act=$p;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xp.call(e,l)&&!Yp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:So,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:Xv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jv,_context:t},t.Consumer=t};He.createElement=qp;He.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:Yv,render:t}};He.isValidElement=qu;He.lazy=function(t){return{$$typeof:Kv,_payload:{_status:-1,_result:t},_init:e0}};He.memo=function(t,e){return{$$typeof:$v,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};He.unstable_act=$p;He.useCallback=function(t,e){return jt.current.useCallback(t,e)};He.useContext=function(t){return jt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};He.useEffect=function(t,e){return jt.current.useEffect(t,e)};He.useId=function(){return jt.current.useId()};He.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return jt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};He.useRef=function(t){return jt.current.useRef(t)};He.useState=function(t){return jt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return jt.current.useTransition()};He.version="18.3.1";Hp.exports=He;var wt=Hp.exports;const n0=Bv(wt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=wt,r0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),o0=Object.prototype.hasOwnProperty,a0=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l0={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)o0.call(e,i)&&!l0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:r0,type:t,key:s,ref:o,props:r,_owner:a0.current}}ll.Fragment=s0;ll.jsx=Kp;ll.jsxs=Kp;Bp.exports=ll;var E=Bp.exports,Bc={},Zp={exports:{}},hn={},Qp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,U){var H=P.length;P.push(U);e:for(;0<H;){var K=H-1>>>1,re=P[K];if(0<r(re,U))P[K]=U,P[H]=re,H=K;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var U=P[0],H=P.pop();if(H!==U){P[0]=H;e:for(var K=0,re=P.length,Ee=re>>>1;K<Ee;){var V=2*(K+1)-1,Z=P[V],le=V+1,ye=P[le];if(0>r(Z,H))le<re&&0>r(ye,Z)?(P[K]=ye,P[le]=H,K=le):(P[K]=Z,P[V]=H,K=V);else if(le<re&&0>r(ye,H))P[K]=ye,P[le]=H,K=le;else break e}}return U}function r(P,U){var H=P.sortIndex-U.sortIndex;return H!==0?H:P.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=P)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function M(P){if(x=!1,g(P),!_)if(n(l)!==null)_=!0,z(b);else{var U=n(c);U!==null&&X(M,U.startTime-P)}}function b(P,U){_=!1,x&&(x=!1,u(L),L=-1),m=!0;var H=f;try{for(g(U),h=n(l);h!==null&&(!(h.expirationTime>U)||P&&!R());){var K=h.callback;if(typeof K=="function"){h.callback=null,f=h.priorityLevel;var re=K(h.expirationTime<=U);U=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&i(l),g(U)}else i(l);h=n(l)}if(h!==null)var Ee=!0;else{var V=n(c);V!==null&&X(M,V.startTime-U),Ee=!1}return Ee}finally{h=null,f=H,m=!1}}var A=!1,w=null,L=-1,$=5,y=-1;function R(){return!(t.unstable_now()-y<$)}function te(){if(w!==null){var P=t.unstable_now();y=P;var U=!0;try{U=w(!0,P)}finally{U?Q():(A=!1,w=null)}}else A=!1}var Q;if(typeof v=="function")Q=function(){v(te)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Y=D.port2;D.port1.onmessage=te,Q=function(){Y.postMessage(null)}}else Q=function(){p(te,0)};function z(P){w=P,A||(A=!0,Q())}function X(P,U){L=p(function(){P(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,z(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var H=f;f=U;try{return P()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,U){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=f;f=P;try{return U()}finally{f=H}},t.unstable_scheduleCallback=function(P,U,H){var K=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?K+H:K):H=K,P){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=H+re,P={id:d++,callback:U,priorityLevel:P,startTime:H,expirationTime:re,sortIndex:-1},H>K?(P.sortIndex=H,e(c,P),n(l)===null&&P===n(c)&&(x?(u(L),L=-1):x=!0,X(M,H-K))):(P.sortIndex=re,e(l,P),_||m||(_=!0,z(b))),P},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(P){var U=f;return function(){var H=f;f=U;try{return P.apply(this,arguments)}finally{f=H}}}})(Jp);Qp.exports=Jp;var c0=Qp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=wt,fn=c0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var em=new Set,no={};function Tr(t,e){ds(t,e),ds(t+"Capture",e)}function ds(t,e){for(no[t]=e,t=0;t<e.length;t++)em.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nf={},rf={};function f0(t){return Hc.call(rf,t)?!0:Hc.call(nf,t)?!1:d0.test(t)?rf[t]=!0:(nf[t]=!0,!1)}function h0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p0(t,e,n,i){if(e===null||typeof e>"u"||h0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Ku(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($u,Ku);Dt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($u,Ku);Dt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($u,Ku);Dt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zu(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p0(e,n,r,i)&&(n=null),i||r===null?f0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mi=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),im=Symbol.for("react.offscreen"),sf=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=sf&&t[sf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Il;function Gs(t){if(Il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Il=e&&e[1]||""}return`
`+Il+t}var Ul=!1;function Fl(t,e){if(!t||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function m0(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Fl(t.type,!1),t;case 11:return t=Fl(t.type.render,!1),t;case 1:return t=Fl(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wr:return"Fragment";case Vr:return"Portal";case Gc:return"Profiler";case Qu:return"StrictMode";case Vc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nm:return(t.displayName||"Context")+".Consumer";case tm:return(t._context.displayName||"Context")+".Provider";case Ju:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ed:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function g0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v0(t){var e=rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uo(t){t._valueTracker||(t._valueTracker=v0(t))}function sm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function La(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function of(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&Zu(t,"checked",e,!1)}function Yc(t,e){om(t,e);var n=Gi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function af(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||La(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Vs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function am(t,e){var n=Gi(e.value),i=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function cf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fo,cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_0=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){_0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function um(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function dm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=um(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var x0=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(t,e){if(e){if(x0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function td(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eu=null,rs=null,ss=null;function uf(t){if(t=To(t)){if(typeof eu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=hl(e),eu(t.stateNode,t.type,e))}}function fm(t){rs?ss?ss.push(t):ss=[t]:rs=t}function hm(){if(rs){var t=rs,e=ss;if(ss=rs=null,uf(t),e)for(t=0;t<e.length;t++)uf(e[t])}}function pm(t,e){return t(e)}function mm(){}var Ol=!1;function gm(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return pm(t,e,n)}finally{Ol=!1,(rs!==null||ss!==null)&&(mm(),hm())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var i=hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var tu=!1;if(ui)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){tu=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{tu=!1}function y0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qs=!1,Da=null,Na=!1,nu=null,S0={onError:function(t){qs=!0,Da=t}};function M0(t,e,n,i,r,s,o,a,l){qs=!1,Da=null,y0.apply(S0,arguments)}function E0(t,e,n,i,r,s,o,a,l){if(M0.apply(this,arguments),qs){if(qs){var c=Da;qs=!1,Da=null}else throw Error(ee(198));Na||(Na=!0,nu=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function df(t){if(wr(t)!==t)throw Error(ee(188))}function T0(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return df(r),t;if(s===i)return df(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function _m(t){return t=T0(t),t!==null?xm(t):null}function xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xm(t);if(e!==null)return e;t=t.sibling}return null}var ym=fn.unstable_scheduleCallback,ff=fn.unstable_cancelCallback,w0=fn.unstable_shouldYield,A0=fn.unstable_requestPaint,ht=fn.unstable_now,C0=fn.unstable_getCurrentPriorityLevel,nd=fn.unstable_ImmediatePriority,Sm=fn.unstable_UserBlockingPriority,Ia=fn.unstable_NormalPriority,R0=fn.unstable_LowPriority,Mm=fn.unstable_IdlePriority,cl=null,jn=null;function b0(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:D0,P0=Math.log,L0=Math.LN2;function D0(t){return t>>>=0,t===0?32:31-(P0(t)/L0|0)|0}var Oo=64,ko=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ua(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ws(a):(s&=o,s!==0&&(i=Ws(s)))}else o=n&~r,o!==0?i=Ws(o):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function N0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=N0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Em(){var t=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function U0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function Tm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wm,rd,Am,Cm,Rm,ru=!1,zo=[],Li=null,Di=null,Ni=null,so=new Map,oo=new Map,wi=[],F0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Ps(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=To(e),e!==null&&rd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function O0(t,e,n,i,r){switch(e){case"focusin":return Li=Ps(Li,t,e,n,i,r),!0;case"dragenter":return Di=Ps(Di,t,e,n,i,r),!0;case"mouseover":return Ni=Ps(Ni,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return so.set(s,Ps(so.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oo.set(s,Ps(oo.get(s)||null,t,e,n,i,r)),!0}return!1}function bm(t){var e=ur(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=vm(n),e!==null){t.blockedOn=e,Rm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jc=i,n.target.dispatchEvent(i),Jc=null}else return e=To(n),e!==null&&rd(e),t.blockedOn=n,!1;e.shift()}return!0}function pf(t,e,n){ya(t)&&n.delete(e)}function k0(){ru=!1,Li!==null&&ya(Li)&&(Li=null),Di!==null&&ya(Di)&&(Di=null),Ni!==null&&ya(Ni)&&(Ni=null),so.forEach(pf),oo.forEach(pf)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,k0)))}function ao(t){function e(r){return Ls(r,t)}if(0<zo.length){Ls(zo[0],t);for(var n=1;n<zo.length;n++){var i=zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Ls(Li,t),Di!==null&&Ls(Di,t),Ni!==null&&Ls(Ni,t),so.forEach(e),oo.forEach(e),n=0;n<wi.length;n++)i=wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wi.length&&(n=wi[0],n.blockedOn===null);)bm(n),n.blockedOn===null&&wi.shift()}var os=mi.ReactCurrentBatchConfig,Fa=!0;function z0(t,e,n,i){var r=$e,s=os.transition;os.transition=null;try{$e=1,sd(t,e,n,i)}finally{$e=r,os.transition=s}}function B0(t,e,n,i){var r=$e,s=os.transition;os.transition=null;try{$e=4,sd(t,e,n,i)}finally{$e=r,os.transition=s}}function sd(t,e,n,i){if(Fa){var r=su(t,e,n,i);if(r===null)ql(t,e,i,Oa,n),hf(t,i);else if(O0(r,t,e,n,i))i.stopPropagation();else if(hf(t,i),e&4&&-1<F0.indexOf(t)){for(;r!==null;){var s=To(r);if(s!==null&&wm(s),s=su(t,e,n,i),s===null&&ql(t,e,i,Oa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ql(t,e,i,null,n)}}var Oa=null;function su(t,e,n,i){if(Oa=null,t=td(i),t=ur(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oa=t,null}function Pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case nd:return 1;case Sm:return 4;case Ia:case R0:return 16;case Mm:return 536870912;default:return 16}default:return 16}}var Ri=null,od=null,Sa=null;function Lm(){if(Sa)return Sa;var t,e=od,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Sa=r.slice(t,1<i?1-i:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function mf(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:mf,this.isPropagationStopped=mf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=pn(Es),Eo=ct({},Es,{view:0,detail:0}),H0=pn(Eo),zl,Bl,Ds,ul=ct({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(zl=t.screenX-Ds.screenX,Bl=t.screenY-Ds.screenY):Bl=zl=0,Ds=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),gf=pn(ul),G0=ct({},ul,{dataTransfer:0}),V0=pn(G0),W0=ct({},Eo,{relatedTarget:0}),Hl=pn(W0),j0=ct({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=pn(j0),Y0=ct({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=pn(Y0),$0=ct({},Es,{data:0}),vf=pn($0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q0[t])?!!e[t]:!1}function ld(){return J0}var e_=ct({},Eo,{key:function(t){if(t.key){var e=K0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),t_=pn(e_),n_=ct({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=pn(n_),i_=ct({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),r_=pn(i_),s_=ct({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),o_=pn(s_),a_=ct({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l_=pn(a_),c_=[9,13,27,32],cd=ui&&"CompositionEvent"in window,$s=null;ui&&"documentMode"in document&&($s=document.documentMode);var u_=ui&&"TextEvent"in window&&!$s,Dm=ui&&(!cd||$s&&8<$s&&11>=$s),xf=String.fromCharCode(32),yf=!1;function Nm(t,e){switch(t){case"keyup":return c_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function d_(t,e){switch(t){case"compositionend":return Im(e);case"keypress":return e.which!==32?null:(yf=!0,xf);case"textInput":return t=e.data,t===xf&&yf?null:t;default:return null}}function f_(t,e){if(jr)return t==="compositionend"||!cd&&Nm(t,e)?(t=Lm(),Sa=od=Ri=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dm&&e.locale!=="ko"?null:e.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h_[t.type]:e==="textarea"}function Um(t,e,n,i){fm(i),e=ka(e,"onChange"),0<e.length&&(n=new ad("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,lo=null;function p_(t){Xm(t,0)}function dl(t){var e=qr(t);if(sm(e))return t}function m_(t,e){if(t==="change")return e}var Fm=!1;if(ui){var Gl;if(ui){var Vl="oninput"in document;if(!Vl){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Vl=typeof Mf.oninput=="function"}Gl=Vl}else Gl=!1;Fm=Gl&&(!document.documentMode||9<document.documentMode)}function Ef(){Ks&&(Ks.detachEvent("onpropertychange",Om),lo=Ks=null)}function Om(t){if(t.propertyName==="value"&&dl(lo)){var e=[];Um(e,lo,t,td(t)),gm(p_,e)}}function g_(t,e,n){t==="focusin"?(Ef(),Ks=e,lo=n,Ks.attachEvent("onpropertychange",Om)):t==="focusout"&&Ef()}function v_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(lo)}function __(t,e){if(t==="click")return dl(e)}function x_(t,e){if(t==="input"||t==="change")return dl(e)}function y_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:y_;function co(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hc.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function Tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,e){var n=Tf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tf(n)}}function km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zm(){for(var t=window,e=La();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=La(t.document)}return e}function ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function S_(t){var e=zm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&km(n.ownerDocument.documentElement,n)){if(i!==null&&ud(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wf(n,s);var o=wf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M_=ui&&"documentMode"in document&&11>=document.documentMode,Xr=null,ou=null,Zs=null,au=!1;function Af(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||Xr==null||Xr!==La(i)||(i=Xr,"selectionStart"in i&&ud(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&co(Zs,i)||(Zs=i,i=ka(ou,"onSelect"),0<i.length&&(e=new ad("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xr)))}function Ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Wl={},Bm={};ui&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function fl(t){if(Wl[t])return Wl[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bm)return Wl[t]=e[n];return t}var Hm=fl("animationend"),Gm=fl("animationiteration"),Vm=fl("animationstart"),Wm=fl("transitionend"),jm=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){jm.set(t,e),Tr(e,[t])}for(var jl=0;jl<Cf.length;jl++){var Xl=Cf[jl],E_=Xl.toLowerCase(),T_=Xl[0].toUpperCase()+Xl.slice(1);Xi(E_,"on"+T_)}Xi(Hm,"onAnimationEnd");Xi(Gm,"onAnimationIteration");Xi(Vm,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(Wm,"onTransitionEnd");ds("onMouseEnter",["mouseout","mouseover"]);ds("onMouseLeave",["mouseout","mouseover"]);ds("onPointerEnter",["pointerout","pointerover"]);ds("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w_=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Rf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,E0(i,e,void 0,t),t.currentTarget=null}function Xm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rf(r,a,c),s=l}}}if(Na)throw t=nu,Na=!1,nu=null,t}function et(t,e){var n=e[fu];n===void 0&&(n=e[fu]=new Set);var i=t+"__bubble";n.has(i)||(Ym(e,t,2,!1),n.add(i))}function Yl(t,e,n){var i=0;e&&(i|=4),Ym(n,t,i,e)}var Go="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[Go]){t[Go]=!0,em.forEach(function(n){n!=="selectionchange"&&(w_.has(n)||Yl(n,!1,t),Yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Go]||(e[Go]=!0,Yl("selectionchange",!1,e))}}function Ym(t,e,n,i){switch(Pm(e)){case 1:var r=z0;break;case 4:r=B0;break;default:r=sd}n=r.bind(null,e,n,t),r=void 0,!tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gm(function(){var c=s,d=td(n),h=[];e:{var f=jm.get(t);if(f!==void 0){var m=ad,_=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":m=t_;break;case"focusin":_="focus",m=Hl;break;case"focusout":_="blur",m=Hl;break;case"beforeblur":case"afterblur":m=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=r_;break;case Hm:case Gm:case Vm:m=X0;break;case Wm:m=o_;break;case"scroll":m=H0;break;case"wheel":m=l_;break;case"copy":case"cut":case"paste":m=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_f}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ro(v,u),M!=null&&x.push(fo(v,M,g)))),p)break;v=v.return}0<x.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Jc&&(_=n.relatedTarget||n.fromElement)&&(ur(_)||_[di]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?ur(_):null,_!==null&&(p=wr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=gf,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=_f,M="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?f:qr(m),g=_==null?f:qr(_),f=new x(M,v+"leave",m,n,d),f.target=p,f.relatedTarget=g,M=null,ur(d)===c&&(x=new x(u,v+"enter",_,n,d),x.target=g,x.relatedTarget=p,M=x),p=M,m&&_)t:{for(x=m,u=_,v=0,g=x;g;g=Ar(g))v++;for(g=0,M=u;M;M=Ar(M))g++;for(;0<v-g;)x=Ar(x),v--;for(;0<g-v;)u=Ar(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=Ar(x),u=Ar(u)}x=null}else x=null;m!==null&&bf(h,f,m,x,!1),_!==null&&p!==null&&bf(h,p,_,x,!0)}}e:{if(f=c?qr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=m_;else if(Sf(f))if(Fm)b=x_;else{b=v_;var A=g_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=__);if(b&&(b=b(t,c))){Um(h,b,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&qc(f,"number",f.value)}switch(A=c?qr(c):window,t){case"focusin":(Sf(A)||A.contentEditable==="true")&&(Xr=A,ou=c,Zs=null);break;case"focusout":Zs=ou=Xr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Af(h,n,d);break;case"selectionchange":if(M_)break;case"keydown":case"keyup":Af(h,n,d)}var w;if(cd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else jr?Nm(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Dm&&n.locale!=="ko"&&(jr||L!=="onCompositionStart"?L==="onCompositionEnd"&&jr&&(w=Lm()):(Ri=d,od="value"in Ri?Ri.value:Ri.textContent,jr=!0)),A=ka(c,L),0<A.length&&(L=new vf(L,t,null,n,d),h.push({event:L,listeners:A}),w?L.data=w:(w=Im(n),w!==null&&(L.data=w)))),(w=u_?d_(t,n):f_(t,n))&&(c=ka(c,"onBeforeInput"),0<c.length&&(d=new vf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=w))}Xm(h,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ro(t,n),s!=null&&i.unshift(fo(t,s,r)),s=ro(t,e),s!=null&&i.push(fo(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ro(n,s),l!=null&&o.unshift(fo(n,l,a))):r||(l=ro(n,s),l!=null&&o.push(fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var A_=/\r\n?/g,C_=/\u0000|\uFFFD/g;function Pf(t){return(typeof t=="string"?t:""+t).replace(A_,`
`).replace(C_,"")}function Vo(t,e,n){if(e=Pf(e),Pf(t)!==e&&n)throw Error(ee(425))}function za(){}var lu=null,cu=null;function uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,R_=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,b_=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(t){return Lf.resolve(null).then(t).catch(P_)}:du;function P_(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ao(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ao(e)}function Ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Df(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Ts,ho="__reactProps$"+Ts,di="__reactContainer$"+Ts,fu="__reactEvents$"+Ts,L_="__reactListeners$"+Ts,D_="__reactHandles$"+Ts;function ur(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Df(t);t!==null;){if(n=t[Gn])return n;t=Df(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[Gn]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function hl(t){return t[ho]||null}var hu=[],$r=-1;function Yi(t){return{current:t}}function nt(t){0>$r||(t.current=hu[$r],hu[$r]=null,$r--)}function Je(t,e){$r++,hu[$r]=t.current,t.current=e}var Vi={},zt=Yi(Vi),Qt=Yi(!1),_r=Vi;function fs(t,e){var n=t.type.contextTypes;if(!n)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function Ba(){nt(Qt),nt(zt)}function Nf(t,e,n){if(zt.current!==Vi)throw Error(ee(168));Je(zt,e),Je(Qt,n)}function qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,g0(t)||"Unknown",r));return ct({},n,i)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,_r=zt.current,Je(zt,t),Je(Qt,Qt.current),!0}function If(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=qm(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,nt(Qt),nt(zt),Je(zt,t)):nt(Qt),Je(Qt,n)}var ii=null,pl=!1,Kl=!1;function $m(t){ii===null?ii=[t]:ii.push(t)}function N_(t){pl=!0,$m(t)}function qi(){if(!Kl&&ii!==null){Kl=!0;var t=0,e=$e;try{var n=ii;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,pl=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),ym(nd,qi),r}finally{$e=e,Kl=!1}}return null}var Kr=[],Zr=0,Ga=null,Va=0,_n=[],xn=0,xr=null,oi=1,ai="";function rr(t,e){Kr[Zr++]=Va,Kr[Zr++]=Ga,Ga=t,Va=e}function Km(t,e,n){_n[xn++]=oi,_n[xn++]=ai,_n[xn++]=xr,xr=t;var i=oi;t=ai;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,oi=1<<32-In(e)+r|n<<r|i,ai=s+t}else oi=1<<s|n<<r|i,ai=t}function dd(t){t.return!==null&&(rr(t,1),Km(t,1,0))}function fd(t){for(;t===Ga;)Ga=Kr[--Zr],Kr[Zr]=null,Va=Kr[--Zr],Kr[Zr]=null;for(;t===xr;)xr=_n[--xn],_n[xn]=null,ai=_n[--xn],_n[xn]=null,oi=_n[--xn],_n[xn]=null}var un=null,cn=null,st=!1,Ln=null;function Zm(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=Ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:oi,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(st){var e=cn;if(e){var n=e;if(!Uf(t,e)){if(pu(t))throw Error(ee(418));e=Ii(n.nextSibling);var i=un;e&&Uf(t,e)?Zm(i,n):(t.flags=t.flags&-4097|2,st=!1,un=t)}}else{if(pu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,st=!1,un=t}}}function Ff(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Wo(t){if(t!==un)return!1;if(!st)return Ff(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uu(t.type,t.memoizedProps)),e&&(e=cn)){if(pu(t))throw Qm(),Error(ee(418));for(;e;)Zm(t,e),e=Ii(e.nextSibling)}if(Ff(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?Ii(t.stateNode.nextSibling):null;return!0}function Qm(){for(var t=cn;t;)t=Ii(t.nextSibling)}function hs(){cn=un=null,st=!1}function hd(t){Ln===null?Ln=[t]:Ln.push(t)}var I_=mi.ReactCurrentBatchConfig;function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function jo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Of(t){var e=t._init;return e(t._payload)}function Jm(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ki(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,M){return v===null||v.tag!==6?(v=ic(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var b=g.type;return b===Wr?d(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ei&&Of(b)===v.type)?(M=r(v,g.props),M.ref=Ns(u,v,g),M.return=u,M):(M=ba(g.type,g.key,g.props,null,u.mode,M),M.ref=Ns(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=rc(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,M,b){return v===null||v.tag!==7?(v=mr(g,u.mode,M,b),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ic(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Io:return g=ba(v.type,v.key,v.props,null,u.mode,g),g.ref=Ns(u,null,v),g.return=u,g;case Vr:return v=rc(v,u.mode,g),v.return=u,v;case Ei:var M=v._init;return h(u,M(v._payload),g)}if(Vs(v)||Rs(v))return v=mr(v,u.mode,g,null),v.return=u,v;jo(u,v)}return null}function f(u,v,g,M){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:return g.key===b?l(u,v,g,M):null;case Vr:return g.key===b?c(u,v,g,M):null;case Ei:return b=g._init,f(u,v,b(g._payload),M)}if(Vs(g)||Rs(g))return b!==null?null:d(u,v,g,M,null);jo(u,g)}return null}function m(u,v,g,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(v,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Io:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,b);case Vr:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,b);case Ei:var A=M._init;return m(u,v,g,A(M._payload),b)}if(Vs(M)||Rs(M))return u=u.get(g)||null,d(v,u,M,b,null);jo(v,M)}return null}function _(u,v,g,M){for(var b=null,A=null,w=v,L=v=0,$=null;w!==null&&L<g.length;L++){w.index>L?($=w,w=null):$=w.sibling;var y=f(u,w,g[L],M);if(y===null){w===null&&(w=$);break}t&&w&&y.alternate===null&&e(u,w),v=s(y,v,L),A===null?b=y:A.sibling=y,A=y,w=$}if(L===g.length)return n(u,w),st&&rr(u,L),b;if(w===null){for(;L<g.length;L++)w=h(u,g[L],M),w!==null&&(v=s(w,v,L),A===null?b=w:A.sibling=w,A=w);return st&&rr(u,L),b}for(w=i(u,w);L<g.length;L++)$=m(w,u,L,g[L],M),$!==null&&(t&&$.alternate!==null&&w.delete($.key===null?L:$.key),v=s($,v,L),A===null?b=$:A.sibling=$,A=$);return t&&w.forEach(function(R){return e(u,R)}),st&&rr(u,L),b}function x(u,v,g,M){var b=Rs(g);if(typeof b!="function")throw Error(ee(150));if(g=b.call(g),g==null)throw Error(ee(151));for(var A=b=null,w=v,L=v=0,$=null,y=g.next();w!==null&&!y.done;L++,y=g.next()){w.index>L?($=w,w=null):$=w.sibling;var R=f(u,w,y.value,M);if(R===null){w===null&&(w=$);break}t&&w&&R.alternate===null&&e(u,w),v=s(R,v,L),A===null?b=R:A.sibling=R,A=R,w=$}if(y.done)return n(u,w),st&&rr(u,L),b;if(w===null){for(;!y.done;L++,y=g.next())y=h(u,y.value,M),y!==null&&(v=s(y,v,L),A===null?b=y:A.sibling=y,A=y);return st&&rr(u,L),b}for(w=i(u,w);!y.done;L++,y=g.next())y=m(w,u,L,y.value,M),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?L:y.key),v=s(y,v,L),A===null?b=y:A.sibling=y,A=y);return t&&w.forEach(function(te){return e(u,te)}),st&&rr(u,L),b}function p(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Wr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:e:{for(var b=g.key,A=v;A!==null;){if(A.key===b){if(b=g.type,b===Wr){if(A.tag===7){n(u,A.sibling),v=r(A,g.props.children),v.return=u,u=v;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ei&&Of(b)===A.type){n(u,A.sibling),v=r(A,g.props),v.ref=Ns(u,A,g),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===Wr?(v=mr(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=ba(g.type,g.key,g.props,null,u.mode,M),M.ref=Ns(u,v,g),M.return=u,u=M)}return o(u);case Vr:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=rc(g,u.mode,M),v.return=u,u=v}return o(u);case Ei:return A=g._init,p(u,v,A(g._payload),M)}if(Vs(g))return _(u,v,g,M);if(Rs(g))return x(u,v,g,M);jo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=ic(g,u.mode,M),v.return=u,u=v),o(u)):n(u,v)}return p}var ps=Jm(!0),eg=Jm(!1),Wa=Yi(null),ja=null,Qr=null,pd=null;function md(){pd=Qr=ja=null}function gd(t){var e=Wa.current;nt(Wa),t._currentValue=e}function gu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function as(t,e){ja=t,pd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(pd!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(ja===null)throw Error(ee(308));Qr=t,ja.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var dr=null;function vd(t){dr===null?dr=[t]:dr.push(t)}function tg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vd(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function _d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,vd(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function Ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,id(t,n)}}function kf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xa(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(f=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=ct({},h,f);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Sr|=o,t.lanes=o,t.memoizedState=h}}function zf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var wo={},Xn=Yi(wo),po=Yi(wo),mo=Yi(wo);function fr(t){if(t===wo)throw Error(ee(174));return t}function xd(t,e){switch(Je(mo,e),Je(po,t),Je(Xn,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}nt(Xn),Je(Xn,e)}function ms(){nt(Xn),nt(po),nt(mo)}function ig(t){fr(mo.current);var e=fr(Xn.current),n=Kc(e,t.type);e!==n&&(Je(po,t),Je(Xn,n))}function yd(t){po.current===t&&(nt(Xn),nt(po))}var at=Yi(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function Sd(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var Ta=mi.ReactCurrentDispatcher,Ql=mi.ReactCurrentBatchConfig,yr=0,lt=null,_t=null,Tt=null,qa=!1,Qs=!1,go=0,U_=0;function It(){throw Error(ee(321))}function Md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Ed(t,e,n,i,r,s){if(yr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ta.current=t===null||t.memoizedState===null?z_:B_,t=n(i,r),Qs){s=0;do{if(Qs=!1,go=0,25<=s)throw Error(ee(301));s+=1,Tt=_t=null,e.updateQueue=null,Ta.current=H_,t=n(i,r)}while(Qs)}if(Ta.current=$a,e=_t!==null&&_t.next!==null,yr=0,Tt=_t=lt=null,qa=!1,e)throw Error(ee(300));return t}function Td(){var t=go!==0;return go=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?lt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Tn(){if(_t===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Tt===null?lt.memoizedState:Tt.next;if(e!==null)Tt=e,_t=t;else{if(t===null)throw Error(ee(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?lt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function vo(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((yr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,lt.lanes|=d,Sr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,Sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rg(){}function sg(t,e){var n=lt,i=Tn(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,wd(lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,_o(9,ag.bind(null,n,i,r,e),void 0,null),At===null)throw Error(ee(349));yr&30||og(n,e,r)}return r}function og(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ag(t,e,n,i){e.value=n,e.getSnapshot=i,cg(e)&&ug(t)}function lg(t,e,n){return n(function(){cg(e)&&ug(t)})}function cg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function ug(t){var e=fi(t,1);e!==null&&Un(e,t,1,-1)}function Bf(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=k_.bind(null,lt,t),[e.memoizedState,t]}function _o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dg(){return Tn().memoizedState}function wa(t,e,n,i){var r=zn();lt.flags|=t,r.memoizedState=_o(1|e,n,void 0,i===void 0?null:i)}function ml(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&Md(i,o.deps)){r.memoizedState=_o(e,n,s,i);return}}lt.flags|=t,r.memoizedState=_o(1|e,n,s,i)}function Hf(t,e){return wa(8390656,8,t,e)}function wd(t,e){return ml(2048,8,t,e)}function fg(t,e){return ml(4,2,t,e)}function hg(t,e){return ml(4,4,t,e)}function pg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mg(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,pg.bind(null,e,t),n)}function Ad(){}function gg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Md(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Md(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _g(t,e,n){return yr&21?(Fn(n,e)||(n=Em(),lt.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function F_(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=Ql.transition;Ql.transition={};try{t(!1),e()}finally{$e=n,Ql.transition=i}}function xg(){return Tn().memoizedState}function O_(t,e,n){var i=Oi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yg(t))Sg(e,n);else if(n=tg(t,e,n,i),n!==null){var r=Wt();Un(n,t,i,r),Mg(n,e,i)}}function k_(t,e,n){var i=Oi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yg(t))Sg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,vd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tg(t,e,r,i),n!==null&&(r=Wt(),Un(n,t,i,r),Mg(n,e,i))}}function yg(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function Sg(t,e){Qs=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,id(t,n)}}var $a={readContext:En,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},z_={readContext:En,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Hf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wa(4194308,4,pg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return wa(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=O_.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Bf,useDebugValue:Ad,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Bf(!1),e=t[0];return t=F_.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=zn();if(st){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),At===null)throw Error(ee(349));yr&30||og(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Hf(lg.bind(null,i,s,t),[t]),i.flags|=2048,_o(9,ag.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=At.identifierPrefix;if(st){var n=ai,i=oi;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=U_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},B_={readContext:En,useCallback:gg,useContext:En,useEffect:wd,useImperativeHandle:mg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:vg,useReducer:Jl,useRef:dg,useState:function(){return Jl(vo)},useDebugValue:Ad,useDeferredValue:function(t){var e=Tn();return _g(e,_t.memoizedState,t)},useTransition:function(){var t=Jl(vo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1},H_={readContext:En,useCallback:gg,useContext:En,useEffect:wd,useImperativeHandle:mg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:vg,useReducer:ec,useRef:dg,useState:function(){return ec(vo)},useDebugValue:Ad,useDeferredValue:function(t){var e=Tn();return _t===null?e.memoizedState=t:_g(e,_t.memoizedState,t)},useTransition:function(){var t=ec(vo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Oi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Un(e,t,r,i),Ea(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Oi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Un(e,t,r,i),Ea(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Oi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Un(e,t,i,n),Ea(e,t,i))}};function Gf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!co(n,i)||!co(r,s):!0}function Eg(t,e,n){var i=!1,r=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=Jt(e)?_r:zt.current,i=e.contextTypes,s=(i=i!=null)?fs(t,r):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function _u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_d(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=Jt(e)?_r:zt.current,r.context=fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gl.enqueueReplaceState(r,r.state,null),Xa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",i=e;do n+=m0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function Tg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Za||(Za=!0,bu=i),xu(t,e)},n}function wg(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xu(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new G_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nx.bind(null,t,e,n),e.then(t,t))}function jf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var V_=mi.ReactCurrentOwner,Zt=!1;function Gt(t,e,n,i){e.child=t===null?eg(e,null,n,i):ps(e,t.child,n,i)}function Yf(t,e,n,i,r){n=n.render;var s=e.ref;return as(e,r),i=Ed(t,e,n,i,s,r),n=Td(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(st&&n&&dd(e),e.flags|=1,Gt(t,e,i,r),e.child)}function qf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ag(t,e,s,i,r)):(t=ba(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ag(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(co(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return yu(t,e,n,i,r)}function Cg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(es,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(es,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Je(es,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Je(es,ln),ln|=i;return Gt(t,e,r,n),e.child}function Rg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yu(t,e,n,i,r){var s=Jt(n)?_r:zt.current;return s=fs(e,s),as(e,r),n=Ed(t,e,n,i,s,r),i=Td(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(st&&i&&dd(e),e.flags|=1,Gt(t,e,n,r),e.child)}function $f(t,e,n,i,r){if(Jt(n)){var s=!0;Ha(e)}else s=!1;if(as(e,r),e.stateNode===null)Aa(t,e),Eg(e,n,i),_u(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Jt(n)?_r:zt.current,c=fs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Vf(e,o,i,c),Ti=!1;var f=e.memoizedState;o.state=f,Xa(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Qt.current||Ti?(typeof d=="function"&&(vu(e,n,d,i),l=e.memoizedState),(a=Ti||Gf(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ng(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Jt(n)?_r:zt.current,l=fs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Vf(e,o,i,l),Ti=!1,f=e.memoizedState,o.state=f,Xa(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||Qt.current||Ti?(typeof m=="function"&&(vu(e,n,m,i),_=e.memoizedState),(c=Ti||Gf(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Su(t,e,n,i,s,r)}function Su(t,e,n,i,r,s){Rg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&If(e,n,!1),hi(t,e,s);i=e.stateNode,V_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&If(e,n,!0),e.child}function bg(t){var e=t.stateNode;e.pendingContext?Nf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nf(t,e.context,!1),xd(t,e.containerInfo)}function Kf(t,e,n,i,r){return hs(),hd(r),e.flags|=256,Gt(t,e,n,i),e.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pg(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(at,r&1),t===null)return mu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,i,0,null),t=mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eu(n),e.memoizedState=Mu,t):Cd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return W_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mu,i}return s=t.child,t=s.sibling,i=ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cd(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,i){return i!==null&&hd(i),ps(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function W_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tc(Error(ee(422))),Xo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xl({mode:"visible",children:i.children},r,0,null),s=mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=Eu(o),e.memoizedState=Mu,s);if(!(e.mode&1))return Xo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=tc(s,i,void 0),Xo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),Un(i,t,r,-1))}return Nd(),i=tc(Error(ee(421))),Xo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ix.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Ii(r.nextSibling),un=e,st=!0,Ln=null,t!==null&&(_n[xn++]=oi,_n[xn++]=ai,_n[xn++]=xr,oi=t.id,ai=t.overflow,xr=e),e=Cd(e,i.children),e.flags|=4096,e)}function Zf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gu(t.return,e,n)}function nc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Lg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zf(t,n,e);else if(t.tag===19)Zf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ya(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function j_(t,e,n){switch(e.tag){case 3:bg(e),hs();break;case 5:ig(e);break;case 1:Jt(e.type)&&Ha(e);break;case 4:xd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(Wa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?Pg(t,e,n):(Je(at,at.current&1),t=hi(t,e,n),t!==null?t.sibling:null);Je(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,Cg(t,e,n)}return hi(t,e,n)}var Dg,Tu,Ng,Ig;Dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tu=function(){};Ng=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,fr(Xn.current);var s=null;switch(n){case"input":r=Xc(t,r),i=Xc(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=$c(t,r),i=$c(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=za)}Zc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(no.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(no.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ig=function(t,e,n,i){n!==i&&(e.flags|=4)};function Is(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function X_(t,e,n){var i=e.pendingProps;switch(fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Jt(e.type)&&Ba(),Ut(e),null;case 3:return i=e.stateNode,ms(),nt(Qt),nt(zt),Sd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Du(Ln),Ln=null))),Tu(t,e),Ut(e),null;case 5:yd(e);var r=fr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ut(e),null}if(t=fr(Xn.current),Wo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Gn]=e,i[ho]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<js.length;r++)et(js[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":of(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":lf(i,s),et("invalid",i)}Zc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,t),r=["children",""+a]):no.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&et("scroll",i)}switch(n){case"input":Uo(i),af(i,s,!0);break;case"textarea":Uo(i),cf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=za)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Gn]=e,t[ho]=i,Dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<js.length;r++)et(js[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":of(t,i),r=Xc(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),et("invalid",t);break;case"textarea":lf(t,i),r=$c(t,i),et("invalid",t);break;default:r=i}Zc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&io(t,l):typeof l=="number"&&io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&Zu(t,s,l,o))}switch(n){case"input":Uo(t),af(t,i,!1);break;case"textarea":Uo(t),cf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?is(t,!!i.multiple,s,!1):i.defaultValue!=null&&is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Ig(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=fr(mo.current),fr(Xn.current),Wo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Gn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:Vo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=e,e.stateNode=i}return Ut(e),null;case 13:if(nt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&cn!==null&&e.mode&1&&!(e.flags&128))Qm(),hs(),e.flags|=98560,s=!1;else if(s=Wo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Gn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Ln!==null&&(Du(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?xt===0&&(xt=3):Nd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return ms(),Tu(t,e),t===null&&uo(e.stateNode.containerInfo),Ut(e),null;case 10:return gd(e.type._context),Ut(e),null;case 17:return Jt(e.type)&&Ba(),Ut(e),null;case 19:if(nt(at),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Is(s,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,Is(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&ht()>vs&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ya(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return Ut(e),null}else 2*ht()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,n=at.current,Je(at,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Dd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Y_(t,e){switch(fd(e),e.tag){case 1:return Jt(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),nt(Qt),nt(zt),Sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yd(e),null;case 13:if(nt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(at),null;case 4:return ms(),null;case 10:return gd(e.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var Yo=!1,kt=!1,q_=typeof WeakSet=="function"?WeakSet:Set,he=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ut(t,e,i)}else n.current=null}function wu(t,e,n){try{n()}catch(i){ut(t,e,i)}}var Qf=!1;function $_(t,e){if(lu=Fa,t=zm(),ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cu={focusedElem:t,selectionRange:n},Fa=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:bn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){ut(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=Qf,Qf=!1,_}function Js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wu(e,n,s)}r=r.next}while(r!==i)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ug(t){var e=t.alternate;e!==null&&(t.alternate=null,Ug(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[ho],delete e[fu],delete e[L_],delete e[D_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fg(t){return t.tag===5||t.tag===3||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}var bt=null,Pn=!1;function gi(t,e,n){for(n=n.child;n!==null;)Og(t,e,n),n=n.sibling}function Og(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:kt||Jr(n,e);case 6:var i=bt,r=Pn;bt=null,gi(t,e,n),bt=i,Pn=r,bt!==null&&(Pn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Pn?(t=bt,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),ao(t)):$l(bt,n.stateNode));break;case 4:i=bt,r=Pn,bt=n.stateNode.containerInfo,Pn=!0,gi(t,e,n),bt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wu(n,e,o),r=r.next}while(r!==i)}gi(t,e,n);break;case 1:if(!kt&&(Jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ut(n,e,a)}gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,gi(t,e,n),kt=i):gi(t,e,n);break;default:gi(t,e,n)}}function eh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new q_),e.forEach(function(i){var r=rx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Pn=!1;break e;case 3:bt=a.stateNode.containerInfo,Pn=!0;break e;case 4:bt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(bt===null)throw Error(ee(160));Og(s,o,r),bt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kg(e,t),e=e.sibling}function kg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),kn(t),i&4){try{Js(3,t,t.return),vl(3,t)}catch(x){ut(t,t.return,x)}try{Js(5,t,t.return)}catch(x){ut(t,t.return,x)}}break;case 1:wn(e,t),kn(t),i&512&&n!==null&&Jr(n,n.return);break;case 5:if(wn(e,t),kn(t),i&512&&n!==null&&Jr(n,n.return),t.flags&32){var r=t.stateNode;try{io(r,"")}catch(x){ut(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&om(r,s),Qc(a,o);var c=Qc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?dm(r,h):d==="dangerouslySetInnerHTML"?cm(r,h):d==="children"?io(r,h):Zu(r,d,h,c)}switch(a){case"input":Yc(r,s);break;case"textarea":am(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?is(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?is(r,!!s.multiple,s.defaultValue,!0):is(r,!!s.multiple,s.multiple?[]:"",!1))}r[ho]=s}catch(x){ut(t,t.return,x)}}break;case 6:if(wn(e,t),kn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ut(t,t.return,x)}}break;case 3:if(wn(e,t),kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(x){ut(t,t.return,x)}break;case 4:wn(e,t),kn(t);break;case 13:wn(e,t),kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pd=ht())),i&4&&eh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||d,wn(e,t),kt=c):wn(e,t),kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(he=t,d=t.child;d!==null;){for(h=he=d;he!==null;){switch(f=he,m=f.child,f.tag){case 0:case 11:case 14:case 15:Js(4,f,f.return);break;case 1:Jr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ut(i,n,x)}}break;case 5:Jr(f,f.return);break;case 22:if(f.memoizedState!==null){nh(h);continue}}m!==null?(m.return=f,he=m):nh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=um("display",o))}catch(x){ut(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){ut(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wn(e,t),kn(t),i&4&&eh(t);break;case 21:break;default:wn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(io(r,""),i.flags&=-33);var s=Jf(t);Ru(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jf(t);Cu(t,a,o);break;default:throw Error(ee(161))}}catch(l){ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function K_(t,e,n){he=t,zg(t)}function zg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Yo;var c=kt;if(Yo=o,(kt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?ih(r):l!==null?(l.return=o,he=l):ih(r);for(;s!==null;)he=s,zg(s),s=s.sibling;he=r,Yo=a,kt=c}th(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):th(t)}}function th(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}kt||e.flags&512&&Au(e)}catch(f){ut(e,e.return,f)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function nh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function ih(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(l){ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{Au(e)}catch(l){ut(e,s,l)}break;case 5:var o=e.return;try{Au(e)}catch(l){ut(e,o,l)}}}catch(l){ut(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Z_=Math.ceil,Ka=mi.ReactCurrentDispatcher,Rd=mi.ReactCurrentOwner,Mn=mi.ReactCurrentBatchConfig,je=0,At=null,vt=null,Lt=0,ln=0,es=Yi(0),xt=0,xo=null,Sr=0,_l=0,bd=0,eo=null,$t=null,Pd=0,vs=1/0,ni=null,Za=!1,bu=null,Fi=null,qo=!1,bi=null,Qa=0,to=0,Pu=null,Ca=-1,Ra=0;function Wt(){return je&6?ht():Ca!==-1?Ca:Ca=ht()}function Oi(t){return t.mode&1?je&2&&Lt!==0?Lt&-Lt:I_.transition!==null?(Ra===0&&(Ra=Em()),Ra):(t=$e,t!==0||(t=window.event,t=t===void 0?16:Pm(t.type)),t):1}function Un(t,e,n,i){if(50<to)throw to=0,Pu=null,Error(ee(185));Mo(t,n,i),(!(je&2)||t!==At)&&(t===At&&(!(je&2)&&(_l|=n),xt===4&&Ai(t,Lt)),en(t,i),n===1&&je===0&&!(e.mode&1)&&(vs=ht()+500,pl&&qi()))}function en(t,e){var n=t.callbackNode;I0(t,e);var i=Ua(t,t===At?Lt:0);if(i===0)n!==null&&ff(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ff(n),e===1)t.tag===0?N_(rh.bind(null,t)):$m(rh.bind(null,t)),b_(function(){!(je&6)&&qi()}),n=null;else{switch(Tm(i)){case 1:n=nd;break;case 4:n=Sm;break;case 16:n=Ia;break;case 536870912:n=Mm;break;default:n=Ia}n=Yg(n,Bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bg(t,e){if(Ca=-1,Ra=0,je&6)throw Error(ee(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var i=Ua(t,t===At?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ja(t,i);else{e=i;var r=je;je|=2;var s=Gg();(At!==t||Lt!==e)&&(ni=null,vs=ht()+500,pr(t,e));do try{ex();break}catch(a){Hg(t,a)}while(1);md(),Ka.current=s,je=r,vt!==null?e=0:(At=null,Lt=0,e=xt)}if(e!==0){if(e===2&&(r=iu(t),r!==0&&(i=r,e=Lu(t,r))),e===1)throw n=xo,pr(t,0),Ai(t,i),en(t,ht()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!Q_(r)&&(e=Ja(t,i),e===2&&(s=iu(t),s!==0&&(i=s,e=Lu(t,s))),e===1))throw n=xo,pr(t,0),Ai(t,i),en(t,ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:sr(t,$t,ni);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=Pd+500-ht(),10<e)){if(Ua(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=du(sr.bind(null,t,$t,ni),e);break}sr(t,$t,ni);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Z_(i/1960))-i,10<i){t.timeoutHandle=du(sr.bind(null,t,$t,ni),i);break}sr(t,$t,ni);break;case 5:sr(t,$t,ni);break;default:throw Error(ee(329))}}}return en(t,ht()),t.callbackNode===n?Bg.bind(null,t):null}function Lu(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=Ja(t,e),t!==2&&(e=$t,$t=n,e!==null&&Du(e)),t}function Du(t){$t===null?$t=t:$t.push.apply($t,t)}function Q_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~bd,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function rh(t){if(je&6)throw Error(ee(327));ls();var e=Ua(t,0);if(!(e&1))return en(t,ht()),null;var n=Ja(t,e);if(t.tag!==0&&n===2){var i=iu(t);i!==0&&(e=i,n=Lu(t,i))}if(n===1)throw n=xo,pr(t,0),Ai(t,e),en(t,ht()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,$t,ni),en(t,ht()),null}function Ld(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(vs=ht()+500,pl&&qi())}}function Mr(t){bi!==null&&bi.tag===0&&!(je&6)&&ls();var e=je;je|=1;var n=Mn.transition,i=$e;try{if(Mn.transition=null,$e=1,t)return t()}finally{$e=i,Mn.transition=n,je=e,!(je&6)&&qi()}}function Dd(){ln=es.current,nt(es)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R_(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(fd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ba();break;case 3:ms(),nt(Qt),nt(zt),Sd();break;case 5:yd(i);break;case 4:ms();break;case 13:nt(at);break;case 19:nt(at);break;case 10:gd(i.type._context);break;case 22:case 23:Dd()}n=n.return}if(At=t,vt=t=ki(t.current,null),Lt=ln=e,xt=0,xo=null,bd=_l=Sr=0,$t=eo=null,dr!==null){for(e=0;e<dr.length;e++)if(n=dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}dr=null}return t}function Hg(t,e){do{var n=vt;try{if(md(),Ta.current=$a,qa){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qa=!1}if(yr=0,Tt=_t=lt=null,Qs=!1,go=0,Rd.current=null,n===null||n.return===null){xt=1,xo=e,vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=jf(o);if(m!==null){m.flags&=-257,Xf(m,o,a,s,e),m.mode&1&&Wf(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Wf(s,c,e),Nd();break e}l=Error(ee(426))}}else if(st&&a.mode&1){var p=jf(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Xf(p,o,a,s,e),hd(gs(l,a));break e}}s=l=gs(l,a),xt!==4&&(xt=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Tg(s,l,e);kf(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Fi===null||!Fi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=wg(s,a,e);kf(s,M);break e}}s=s.return}while(s!==null)}Wg(n)}catch(b){e=b,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(1)}function Gg(){var t=Ka.current;return Ka.current=$a,t===null?$a:t}function Nd(){(xt===0||xt===3||xt===2)&&(xt=4),At===null||!(Sr&268435455)&&!(_l&268435455)||Ai(At,Lt)}function Ja(t,e){var n=je;je|=2;var i=Gg();(At!==t||Lt!==e)&&(ni=null,pr(t,e));do try{J_();break}catch(r){Hg(t,r)}while(1);if(md(),je=n,Ka.current=i,vt!==null)throw Error(ee(261));return At=null,Lt=0,xt}function J_(){for(;vt!==null;)Vg(vt)}function ex(){for(;vt!==null&&!w0();)Vg(vt)}function Vg(t){var e=Xg(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Wg(t):vt=e,Rd.current=null}function Wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Y_(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,vt=null;return}}else if(n=X_(n,e,ln),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);xt===0&&(xt=5)}function sr(t,e,n){var i=$e,r=Mn.transition;try{Mn.transition=null,$e=1,tx(t,e,n,i)}finally{Mn.transition=r,$e=i}return null}function tx(t,e,n,i){do ls();while(bi!==null);if(je&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(U0(t,s),t===At&&(vt=At=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Yg(Ia,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=$e;$e=1;var a=je;je|=4,Rd.current=null,$_(t,n),kg(n,t),S_(cu),Fa=!!lu,cu=lu=null,t.current=n,K_(n),A0(),je=a,$e=o,Mn.transition=s}else t.current=n;if(qo&&(qo=!1,bi=t,Qa=r),s=t.pendingLanes,s===0&&(Fi=null),b0(n.stateNode),en(t,ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Za)throw Za=!1,t=bu,bu=null,t;return Qa&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Pu?to++:(to=0,Pu=t):to=0,qi(),null}function ls(){if(bi!==null){var t=Tm(Qa),e=Mn.transition,n=$e;try{if(Mn.transition=null,$e=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,Qa=0,je&6)throw Error(ee(331));var r=je;for(je|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:Js(8,d,s)}var h=d.child;if(h!==null)h.return=d,he=h;else for(;he!==null;){d=he;var f=d.sibling,m=d.return;if(Ug(d),d===c){he=null;break}if(f!==null){f.return=m,he=f;break}he=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(b){ut(a,a.return,b)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(je=r,qi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(cl,t)}catch{}i=!0}return i}finally{$e=n,Mn.transition=e}}return!1}function sh(t,e,n){e=gs(n,e),e=Tg(t,e,1),t=Ui(t,e,1),e=Wt(),t!==null&&(Mo(t,1,e),en(t,e))}function ut(t,e,n){if(t.tag===3)sh(t,t,n);else for(;e!==null;){if(e.tag===3){sh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=gs(n,t),t=wg(e,t,1),e=Ui(e,t,1),t=Wt(),e!==null&&(Mo(e,1,t),en(e,t));break}}e=e.return}}function nx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Lt&n)===n&&(xt===4||xt===3&&(Lt&130023424)===Lt&&500>ht()-Pd?pr(t,0):bd|=n),en(t,e)}function jg(t,e){e===0&&(t.mode&1?(e=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):e=1);var n=Wt();t=fi(t,e),t!==null&&(Mo(t,e,n),en(t,n))}function ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jg(t,n)}function rx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),jg(t,n)}var Xg;Xg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,j_(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,st&&e.flags&1048576&&Km(e,Va,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Aa(t,e),t=e.pendingProps;var r=fs(e,zt.current);as(e,n),r=Ed(null,e,i,t,r,n);var s=Td();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,Ha(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_d(e),r.updater=gl,e.stateNode=r,r._reactInternals=e,_u(e,i,t,n),e=Su(null,e,i,!0,s,n)):(e.tag=0,st&&s&&dd(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Aa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ox(i),t=bn(i,t),r){case 0:e=yu(null,e,i,t,n);break e;case 1:e=$f(null,e,i,t,n);break e;case 11:e=Yf(null,e,i,t,n);break e;case 14:e=qf(null,e,i,bn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),$f(t,e,i,r,n);case 3:e:{if(bg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ng(t,e),Xa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=gs(Error(ee(423)),e),e=Kf(t,e,i,n,r);break e}else if(i!==r){r=gs(Error(ee(424)),e),e=Kf(t,e,i,n,r);break e}else for(cn=Ii(e.stateNode.containerInfo.firstChild),un=e,st=!0,Ln=null,n=eg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),i===r){e=hi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return ig(e),t===null&&mu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uu(i,r)?o=null:s!==null&&uu(i,s)&&(e.flags|=32),Rg(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&mu(e),null;case 13:return Pg(t,e,n);case 4:return xd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ps(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Yf(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Je(Wa,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!Qt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,as(e,n),r=En(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),qf(t,e,i,r,n);case 15:return Ag(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Aa(t,e),e.tag=1,Jt(i)?(t=!0,Ha(e)):t=!1,as(e,n),Eg(e,i,r),_u(e,i,r,n),Su(null,e,i,!0,t,n);case 19:return Lg(t,e,n);case 22:return Cg(t,e,n)}throw Error(ee(156,e.tag))};function Yg(t,e){return ym(t,e)}function sx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new sx(t,e,n,i)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ox(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ju)return 11;if(t===ed)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wr:return mr(n.children,r,s,e);case Qu:o=8,r|=8;break;case Gc:return t=Sn(12,n,e,r|2),t.elementType=Gc,t.lanes=s,t;case Vc:return t=Sn(13,n,e,r),t.elementType=Vc,t.lanes=s,t;case Wc:return t=Sn(19,n,e,r),t.elementType=Wc,t.lanes=s,t;case im:return xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tm:o=10;break e;case nm:o=9;break e;case Ju:o=11;break e;case ed:o=14;break e;case Ei:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function mr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function xl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=im,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ax(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,i,r,s,o,a,l){return t=new ax(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(s),t}function lx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return Vi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Jt(n))return qm(t,n,e)}return e}function $g(t,e,n,i,r,s,o,a,l){return t=Ud(n,i,!0,t,r,s,o,a,l),t.context=qg(null),n=t.current,i=Wt(),r=Oi(n),s=ci(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,Mo(t,r,i),en(t,i),t}function yl(t,e,n,i){var r=e.current,s=Wt(),o=Oi(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(Un(t,r,o,s),Ea(t,r,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fd(t,e){oh(t,e),(t=t.alternate)&&oh(t,e)}function cx(){return null}var Kg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Od(t){this._internalRoot=t}Sl.prototype.render=Od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));yl(t,e,null,null)};Sl.prototype.unmount=Od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){yl(null,t,null,null)}),e[di]=null}};function Sl(t){this._internalRoot=t}Sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wi.length&&e!==0&&e<wi[n].priority;n++);wi.splice(n,0,t),n===0&&bm(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ah(){}function ux(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=el(o);s.call(c)}}var o=$g(e,i,t,0,null,!1,!1,"",ah);return t._reactRootContainer=o,t[di]=o.current,uo(t.nodeType===8?t.parentNode:t),Mr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=el(l);a.call(c)}}var l=Ud(t,0,!1,null,null,!1,!1,"",ah);return t._reactRootContainer=l,t[di]=l.current,uo(t.nodeType===8?t.parentNode:t),Mr(function(){yl(e,l,n,i)}),l}function El(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=el(o);a.call(l)}}yl(e,o,t,r)}else o=ux(n,e,t,r,i);return el(o)}wm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(id(e,n|1),en(e,ht()),!(je&6)&&(vs=ht()+500,qi()))}break;case 13:Mr(function(){var i=fi(t,1);if(i!==null){var r=Wt();Un(i,t,1,r)}}),Fd(t,1)}};rd=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=Wt();Un(e,t,134217728,n)}Fd(t,134217728)}};Am=function(t){if(t.tag===13){var e=Oi(t),n=fi(t,e);if(n!==null){var i=Wt();Un(n,t,e,i)}Fd(t,e)}};Cm=function(){return $e};Rm=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};eu=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hl(i);if(!r)throw Error(ee(90));sm(i),Yc(i,r)}}}break;case"textarea":am(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};pm=Ld;mm=Mr;var dx={usingClientEntryPoint:!1,Events:[To,qr,hl,fm,hm,Ld]},Us={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fx={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_m(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{cl=$o.inject(fx),jn=$o}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(ee(200));return lx(t,e,null,n)};hn.createRoot=function(t,e){if(!kd(t))throw Error(ee(299));var n=!1,i="",r=Kg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,i,r),t[di]=e.current,uo(t.nodeType===8?t.parentNode:t),new Od(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=_m(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Mr(t)};hn.hydrate=function(t,e,n){if(!Ml(e))throw Error(ee(200));return El(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$g(e,null,t,1,n??null,r,!1,s,o),t[di]=e.current,uo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sl(e)};hn.render=function(t,e,n){if(!Ml(e))throw Error(ee(200));return El(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(ee(40));return t._reactRootContainer?(Mr(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};hn.unstable_batchedUpdates=Ld;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ml(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return El(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(t){console.error(t)}}Zg(),Zp.exports=hn;var hx=Zp.exports,lh=hx;Bc.createRoot=lh.createRoot,Bc.hydrateRoot=lh.hydrateRoot;const Qg=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}),E.jsx("rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}),E.jsx("line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}),E.jsx("line",{x1:"6",x2:"6.01",y1:"18",y2:"18"})]}),Jg=({size:t=20,className:e=""})=>E.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:E.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),px=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}),E.jsx("path",{d:"m9 12 2 2 4-4"})]}),Nu=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}),E.jsx("rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}),E.jsx("path",{d:"M15 2v2"}),E.jsx("path",{d:"M15 20v2"}),E.jsx("path",{d:"M2 15h2"}),E.jsx("path",{d:"M2 9h2"}),E.jsx("path",{d:"M20 15h2"}),E.jsx("path",{d:"M20 9h2"}),E.jsx("path",{d:"M9 2v2"}),E.jsx("path",{d:"M9 20v2"})]}),mx=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("line",{x1:"6",x2:"6",y1:"3",y2:"15"}),E.jsx("circle",{cx:"18",cy:"6",r:"3"}),E.jsx("circle",{cx:"6",cy:"18",r:"3"}),E.jsx("path",{d:"M18 9a9 9 0 0 1-9 9"})]}),ev=({size:t=20,className:e=""})=>E.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:E.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),tl=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),E.jsx("polyline",{points:"7 10 12 15 17 10"}),E.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]}),ch=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("circle",{cx:"12",cy:"8",r:"6"}),E.jsx("path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"})]}),gx=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),E.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),tv=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),E.jsx("polyline",{points:"2 17 12 22 22 17"}),E.jsx("polyline",{points:"2 12 12 17 22 12"})]}),nv=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("polyline",{points:"16 18 22 12 16 6"}),E.jsx("polyline",{points:"8 6 2 12 8 18"})]}),vx=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),E.jsx("path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}),E.jsx("path",{d:"M3 12A9 3 0 0 0 21 12"})]}),_x=({size:t=20,className:e=""})=>E.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[E.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),E.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),iv=({size:t=20,className:e=""})=>E.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",className:e,children:E.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})}),xx=({size:t=20,className:e=""})=>E.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",className:e,children:E.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.24c-.92 0-1.66.74-1.66 1.66 0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z"})}),yx=({onOpenArchitectureModal:t})=>{const[e,n]=wt.useState(!1),[i,r]=wt.useState(!1);wt.useEffect(()=>{const a=()=>{n(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const s=[{label:"Skills Topology",href:"#portrait"},{label:"Featured Systems",href:"#systems"},{label:"Experience",href:"#experience"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Education",href:"#education"}],o=()=>{r(!1)};return E.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:e?"0.75rem 0":"1.25rem 0",backgroundColor:e?"rgba(8, 12, 20, 0.85)":"transparent",backdropFilter:e?"blur(16px)":"none",WebkitBackdropFilter:e?"blur(16px)":"none",borderBottom:e?"1px solid var(--border-subtle)":"1px solid transparent",transition:"all var(--transition-normal)"},children:[E.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[E.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"0.75rem",textDecoration:"none"},children:[E.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1.05rem",color:"#ffffff",boxShadow:"0 4px 12px rgba(99, 102, 241, 0.25)"},children:"SK"}),E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:700,fontSize:"1.05rem",letterSpacing:"-0.02em",color:"var(--text-primary)"},children:"Sachin Kumawat"}),E.jsx("div",{style:{fontSize:"0.75rem",color:"var(--accent-cyan)",fontWeight:600},children:"Senior Software Engineer"})]})]}),E.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:"1.5rem"},className:"desktop-nav",children:[s.map(a=>E.jsx("a",{href:a.href,onClick:l=>o(),style:{fontSize:"0.88rem",fontWeight:500,color:"var(--text-secondary)",padding:"0.4rem 0.6rem",borderRadius:"6px",transition:"color var(--transition-fast)"},onMouseEnter:l=>l.target.style.color="#ffffff",onMouseLeave:l=>l.target.style.color="var(--text-secondary)",children:a.label},a.label)),E.jsxs("a",{href:"./assets/cv.pdf",download:"Sachin_Kumawat_CV.pdf",className:"btn btn-primary",style:{padding:"0.5rem 1rem",fontSize:"0.84rem"},children:[E.jsx(tl,{size:16}),"Resume"]})]}),E.jsx("button",{onClick:()=>r(!i),className:"mobile-toggle","aria-label":"Toggle Menu",style:{display:"none",background:"transparent",border:"none",color:"var(--text-primary)",padding:"0.5rem",cursor:"pointer"},children:E.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i?E.jsx("path",{d:"M18 6 6 18M6 6l12 12"}):E.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})})})]}),i&&E.jsxs("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"rgba(8, 12, 20, 0.96)",backdropFilter:"blur(20px)",borderBottom:"1px solid var(--border-subtle)",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[s.map(a=>E.jsx("a",{href:a.href,onClick:l=>o(),style:{fontSize:"1rem",color:"var(--text-primary)",padding:"0.5rem 0",borderBottom:"1px solid var(--border-subtle)"},children:a.label},a.label)),E.jsxs("a",{href:"./assets/cv.pdf",download:"Sachin_Kumawat_CV.pdf",className:"btn btn-primary",style:{width:"100%",marginTop:"0.5rem"},children:[E.jsx(tl,{size:16}),"Download Resume (PDF)"]})]}),E.jsx("style",{children:`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `})]})},Sx=({onOpenArchitectureModal:t})=>{const[e,n]=wt.useState(!1),i=[{value:"10K+",label:"Monthly Queries Processed",sub:"99.9% Production Uptime"},{value:"<200ms",label:"P95 API Latency",sub:"Telemetry & SLO Monitored"},{value:"17-State",label:"Deterministic FSM",sub:"CAS Concurrency & Zero Double-Debit"},{value:"16K+",label:"Manual Ops Automated/mo",sub:"40% Operational Cost Reduction"}];return E.jsx("section",{style:{paddingTop:"8rem",paddingBottom:"3.5rem",position:"relative",zIndex:2},children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap-reverse",gap:"2.5rem",marginBottom:"3.5rem"},children:[E.jsxs("div",{style:{flex:"1 1 600px",maxWidth:"780px"},children:[E.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",marginBottom:"1.25rem"},children:E.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.45rem",padding:"0.35rem 0.8rem",borderRadius:"var(--radius-full)",background:"var(--accent-emerald-soft)",border:"1px solid var(--border-emerald)",fontSize:"0.82rem",color:"#34d399",fontWeight:600},children:[E.jsx("span",{style:{width:"7px",height:"7px",borderRadius:"50%",backgroundColor:"#10b981",display:"inline-block"}}),"Senior Software Engineer · Distributed Systems & Backend"]})}),E.jsxs("h1",{style:{fontSize:"clamp(2.2rem, 4.5vw, 3.4rem)",lineHeight:1.18,marginBottom:"1.25rem",fontWeight:800,color:"var(--text-primary)"},children:["Building ",E.jsx("span",{className:"gradient-text-accent",children:"High-Throughput"})," Distributed Engines & Resilient Financial Systems."]}),E.jsx("p",{style:{fontSize:"clamp(1rem, 1.8vw, 1.15rem)",color:"var(--text-secondary)",marginBottom:"2rem",lineHeight:1.6},children:"Specialized in designing mission-critical payout gateways, idempotent state machines, event-driven microservices, and automated health failover for high-volume transactions."}),E.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.85rem"},children:[E.jsxs("a",{href:"#systems",className:"btn btn-primary",children:[E.jsx(tv,{size:17}),"Explore Systems"]}),E.jsxs("a",{href:"./assets/cv.pdf",download:"Sachin_Kumawat_CV.pdf",className:"btn btn-secondary",children:[E.jsx(tl,{size:17}),"Download Resume"]})]})]}),E.jsxs("div",{style:{flexShrink:0},children:[E.jsx("div",{className:"avatar-frame",children:e?E.jsx("div",{className:"avatar-placeholder",children:"SK"}):E.jsx("img",{src:"./assets/profile.jpg",alt:"Sachin Kumawat",className:"avatar-image",onError:()=>n(!0)})}),E.jsx("div",{style:{textAlign:"center",marginTop:"0.6rem",fontSize:"0.78rem",color:"var(--text-muted)"},children:"IIT Ropar Alumnus"})]})]}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1.25rem"},children:i.map((r,s)=>E.jsxs("div",{className:"glass-card",style:{padding:"1.4rem"},children:[E.jsx("div",{className:"mono gradient-text-accent",style:{fontSize:"1.85rem",fontWeight:700,marginBottom:"0.25rem",letterSpacing:"-0.02em"},children:r.value}),E.jsx("div",{style:{fontWeight:600,fontSize:"0.92rem",color:"var(--text-primary)",marginBottom:"0.15rem"},children:r.label}),E.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:r.sub})]},s))})]})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="162",Mx=0,uh=1,Ex=2,rv=1,Tx=2,ti=3,Wi=0,tn=1,ri=2,zi=0,cs=1,dh=2,fh=3,hh=4,wx=5,lr=100,Ax=101,Cx=102,ph=103,mh=104,Rx=200,bx=201,Px=202,Lx=203,Iu=204,Uu=205,Dx=206,Nx=207,Ix=208,Ux=209,Fx=210,Ox=211,kx=212,zx=213,Bx=214,Hx=0,Gx=1,Vx=2,nl=3,Wx=4,jx=5,Xx=6,Yx=7,sv=0,qx=1,$x=2,Bi=0,Kx=1,Zx=2,Qx=3,Jx=4,ey=5,ty=6,ny=7,ov=300,_s=301,xs=302,Fu=303,Ou=304,Tl=306,ku=1e3,Dn=1001,zu=1002,Vt=1003,gh=1004,Fs=1005,qt=1006,sc=1007,hr=1008,Hi=1009,iy=1010,ry=1011,Bd=1012,av=1013,Pi=1014,si=1015,yo=1016,lv=1017,cv=1018,gr=1020,sy=1021,Nn=1023,oy=1024,ay=1025,vr=1026,ys=1027,ly=1028,uv=1029,cy=1030,dv=1031,fv=1033,oc=33776,ac=33777,lc=33778,cc=33779,vh=35840,_h=35841,xh=35842,yh=35843,hv=36196,Sh=37492,Mh=37496,Eh=37808,Th=37809,wh=37810,Ah=37811,Ch=37812,Rh=37813,bh=37814,Ph=37815,Lh=37816,Dh=37817,Nh=37818,Ih=37819,Uh=37820,Fh=37821,uc=36492,Oh=36494,kh=36495,uy=36283,zh=36284,Bh=36285,Hh=36286,dy=3200,fy=3201,hy=0,py=1,Ci="",Bn="srgb",$i="srgb-linear",Hd="display-p3",wl="display-p3-linear",il="linear",tt="srgb",rl="rec709",sl="p3",Cr=7680,Gh=519,my=512,gy=513,vy=514,pv=515,_y=516,xy=517,yy=518,Sy=519,Vh=35044,Wh="300 es",Bu=1035,li=2e3,ol=2001;class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Hu=180/Math.PI;function Ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function My(t,e){return(t%e+e)%e}function fc(t,e,n){return(1-n)*t+n*e}function jh(t){return(t&t-1)===0&&t!==0}function Gu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],v=r[1],g=r[4],M=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*x+a*v+l*b,s[3]=o*p+a*g+l*A,s[6]=o*u+a*M+l*w,s[1]=c*x+d*v+h*b,s[4]=c*p+d*g+h*A,s[7]=c*u+d*M+h*w,s[2]=f*x+m*v+_*b,s[5]=f*p+m*g+_*A,s[8]=f*u+m*M+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hc.makeScale(e,n)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Ue;function mv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ey(){const t=al("canvas");return t.style.display="block",t}const Xh={};function Ty(t){t in Xh||(Xh[t]=!0,console.warn(t))}const Yh=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ko={[$i]:{transfer:il,primaries:rl,toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:tt,primaries:rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wl]:{transfer:il,primaries:sl,toReference:t=>t.applyMatrix3(qh),fromReference:t=>t.applyMatrix3(Yh)},[Hd]:{transfer:tt,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(qh),fromReference:t=>t.applyMatrix3(Yh).convertLinearToSRGB()}},wy=new Set([$i,wl]),Ke={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!wy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ko[e].toReference,r=Ko[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ko[t].primaries},getTransfer:function(t){return t===Ci?il:Ko[t].transfer}};function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class gv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=al("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(us(n[i]/255)*255):n[i]=us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ay=0;class vv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mc(r[o].image)):s.push(mc(r[o]))}else s=mc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cy=0;class nn extends ws{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Dn,r=Dn,s=qt,o=hr,a=Nn,l=Hi,c=nn.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Ao(),this.name="",this.source=new vv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ku:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case zu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ku:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case zu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ov;nn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,b=(u+1)/2,A=(d+f)/4,w=(h+x)/4,L=(_+p)/4;return g>M&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=w/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=L/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-x)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ry extends ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new vv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends Ry{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _v extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class by extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==m||d!==_){let p=1-a;const u=l*f+c*m+d*_+h*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),A=Math.atan2(b,u*v);p=Math.sin(p*A)/b,a=Math.sin(a*A)/b}const M=a*v;if(l=l*p+f*M,c=c*p+m*M,d=d*p+_*M,h=h*p+x*M,p===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-a*m,e[n+2]=c*_+d*m+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($h.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new O,$h=new Co;class Ro{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Qo.subVectors(this.max,ks),br.subVectors(e.a,ks),Pr.subVectors(e.b,ks),Lr.subVectors(e.c,ks),vi.subVectors(Pr,br),_i.subVectors(Lr,Pr),Qi.subVectors(br,Lr);let n=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-Qi.z,Qi.y,vi.z,0,-vi.x,_i.z,0,-_i.x,Qi.z,0,-Qi.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-Qi.y,Qi.x,0];return!vc(n,br,Pr,Lr,Qo)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,br,Pr,Lr,Qo))?!1:(Jo.crossVectors(vi,_i),n=[Jo.x,Jo.y,Jo.z],vc(n,br,Pr,Lr,Qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new O,new O,new O,new O,new O,new O,new O,new O],An=new O,Zo=new Ro,br=new O,Pr=new O,Lr=new O,vi=new O,_i=new O,Qi=new O,ks=new O,Qo=new O,Jo=new O,Ji=new O;function vc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ji.fromArray(t,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),d=i.dot(Ji);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Py=new Ro,zs=new O,_c=new O;class Al{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Py.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const n=zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(_c)),this.expandByPoint(zs.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new O,xc=new O,ea=new O,xi=new O,yc=new O,ta=new O,Sc=new O;class Gd{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),ea.copy(n).sub(e).normalize(),xi.copy(this.origin).sub(xc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ea),a=xi.dot(this.direction),l=-xi.dot(ea),c=xi.lengthSq(),d=Math.abs(1-o*o);let h,f,m,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xc).addScaledVector(ea,f),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){yc.subVectors(n,e),ta.subVectors(i,e),Sc.crossVectors(yc,ta);let o=this.direction.dot(Sc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(xi,ta));if(l<0)return null;const c=a*this.direction.dot(yc.cross(xi));if(c<0||l+c>o)return null;const d=-a*xi.dot(Sc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,m,_,x,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,x,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f+x*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=x-f*h,n[8]=_*h+m,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=o*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ly,e,Dy)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(i,on),yi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(i,on)),yi.normalize(),na.crossVectors(on,yi),r[0]=yi.x,r[4]=na.x,r[8]=on.x,r[1]=yi.y,r[5]=na.y,r[9]=on.y,r[2]=yi.z,r[6]=na.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],v=i[3],g=i[7],M=i[11],b=i[15],A=r[0],w=r[4],L=r[8],$=r[12],y=r[1],R=r[5],te=r[9],Q=r[13],D=r[2],Y=r[6],z=r[10],X=r[14],P=r[3],U=r[7],H=r[11],K=r[15];return s[0]=o*A+a*y+l*D+c*P,s[4]=o*w+a*R+l*Y+c*U,s[8]=o*L+a*te+l*z+c*H,s[12]=o*$+a*Q+l*X+c*K,s[1]=d*A+h*y+f*D+m*P,s[5]=d*w+h*R+f*Y+m*U,s[9]=d*L+h*te+f*z+m*H,s[13]=d*$+h*Q+f*X+m*K,s[2]=_*A+x*y+p*D+u*P,s[6]=_*w+x*R+p*Y+u*U,s[10]=_*L+x*te+p*z+u*H,s[14]=_*$+x*Q+p*X+u*K,s[3]=v*A+g*y+M*D+b*P,s[7]=v*w+g*R+M*Y+b*U,s[11]=v*L+g*te+M*z+b*H,s[15]=v*$+g*Q+M*X+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+x*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],v=h*p*c-x*f*c+x*l*m-a*p*m-h*l*u+a*f*u,g=_*f*c-d*p*c-_*l*m+o*p*m+d*l*u-o*f*u,M=d*x*c-_*h*c+_*a*m-o*x*m-d*a*u+o*h*u,b=_*h*l-d*x*l-_*a*f+o*x*f+d*a*p-o*h*p,A=n*v+i*g+r*M+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(x*f*s-h*p*s-x*r*m+i*p*m+h*r*u-i*f*u)*w,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*w,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*w,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*m+n*l*m)*w,e[8]=M*w,e[9]=(_*h*s-d*x*s-_*i*m+n*x*m+d*i*u-n*h*u)*w,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*u+n*a*u)*w,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*m-n*a*m)*w,e[12]=b*w,e[13]=(d*x*r-_*h*r+_*i*f-n*x*f-d*i*p+n*h*p)*w,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*p-n*a*p)*w,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,_=s*h,x=o*d,p=o*h,u=a*h,v=l*c,g=l*d,M=l*h,b=i.x,A=i.y,w=i.z;return r[0]=(1-(x+u))*b,r[1]=(m+M)*b,r[2]=(_-g)*b,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(f+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(_+g)*w,r[9]=(p-v)*w,r[10]=(1-(f+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),a=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,d=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===li)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ol)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*d;let _,x;if(a===li)_=(o+s)*h,x=-2*h;else if(a===ol)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new O,Cn=new pt,Ly=new O(0,0,0),Dy=new O(1,1,1),yi=new O,na=new O,on=new O,Kh=new pt,Zh=new Co;class pi{constructor(e=0,n=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const Qh=new O,Nr=new Co,Qn=new pt,ia=new O,Bs=new O,Iy=new O,Uy=new Co,Jh=new O(1,0,0),ep=new O(0,1,0),tp=new O(0,0,1),Fy={type:"added"},Oy={type:"removed"},Mc={type:"childadded",child:null},Ec={type:"childremoved",child:null};class rn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new O,n=new pi,i=new Co,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ue}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,n){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Bs,ia,this.up):Qn.lookAt(ia,Bs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fy),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Oy),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new O(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new O,Jn=new O,Tc=new O,ei=new O,Ir=new O,Ur=new O,np=new O,wc=new O,Ac=new O,Cc=new O;class Vn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),Jn.subVectors(i,n),Tc.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(Jn),l=Rn.dot(Tc),c=Jn.dot(Jn),d=Jn.dot(Tc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),Jn.subVectors(e,n),Rn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Ur.subVectors(s,i),wc.subVectors(e,i);const l=Ir.dot(wc),c=Ur.dot(wc);if(l<=0&&c<=0)return n.copy(i);Ac.subVectors(e,r);const d=Ir.dot(Ac),h=Ur.dot(Ac);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ir,o);Cc.subVectors(e,s);const m=Ir.dot(Cc),_=Ur.dot(Cc);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ur,a);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return np.subVectors(s,r),a=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(np,a);const u=1/(p+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Ir,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=My(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Rc(o,s,e+1/3),this.g=Rc(o,s,e),this.b=Rc(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=xv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Ke.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Kt(Ot.r*255,0,255))*65536+Math.round(Kt(Ot.g*255,0,255))*256+Math.round(Kt(Ot.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Bn){Ke.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(ra);const i=fc(Si.h,ra.h,n),r=fc(Si.s,ra.s,n),s=fc(Si.l,ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new qe;qe.NAMES=xv;let ky=0;class bo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=cs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Uu,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Uu&&(i.blendDst=this.blendDst),this.blendEquation!==lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wd extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,sa=new Xe;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ty("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sa.fromBufferAttribute(this,n),sa.applyMatrix3(e),this.setXY(n,sa.x,sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}}class yv extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sv extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zy=0;const vn=new pt,bc=new rn,Fr=new O,an=new Ro,Hs=new Ro,Et=new O;class qn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mv(e)?Sv:yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(an.min,Hs.min),an.expandByPoint(Et),Et.addVectors(an.max,Hs.max),an.expandByPoint(Et)):(an.expandByPoint(Hs.min),an.expandByPoint(Hs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Et.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Et.add(Fr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new O,l[L]=new O;const c=new O,d=new O,h=new O,f=new Xe,m=new Xe,_=new Xe,x=new O,p=new O;function u(L,$,y){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,$),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,$),_.fromBufferAttribute(s,y),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(R),a[L].add(x),a[$].add(x),a[y].add(x),l[L].add(p),l[$].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,$=v.length;L<$;++L){const y=v[L],R=y.start,te=y.count;for(let Q=R,D=R+te;Q<D;Q+=3)u(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const g=new O,M=new O,b=new O,A=new O;function w(L){b.fromBufferAttribute(r,L),A.copy(b);const $=a[L];g.copy($),g.sub(b.multiplyScalar(b.dot($))).normalize(),M.crossVectors(A,$);const R=M.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,R)}for(let L=0,$=v.length;L<$;++L){const y=v[L],R=y.start,te=y.count;for(let Q=R,D=R+te;Q<D;Q+=3)w(e.getX(Q+0)),w(e.getX(Q+1)),w(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,d=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Yn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new pt,er=new Gd,oa=new Al,rp=new O,Or=new O,kr=new O,zr=new O,Pc=new O,aa=new O,la=new Xe,ca=new Xe,ua=new Xe,sp=new O,op=new O,ap=new O,da=new O,fa=new O;class Wn extends rn{constructor(e=new qn,n=new Wd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Pc.fromBufferAttribute(h,e),o?aa.addScaledVector(Pc,d):aa.addScaledVector(Pc.sub(n),d))}n.add(aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(oa.containsPoint(er.origin)===!1&&(er.intersectSphere(oa,rp)===null||er.origin.distanceToSquared(rp)>(e.far-e.near)**2))&&(ip.copy(s).invert(),er.copy(e.ray).applyMatrix4(ip),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,b=g;M<b;M+=3){const A=a.getX(M),w=a.getX(M+1),L=a.getX(M+2);r=ha(this,u,e,i,c,d,h,A,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=ha(this,o,e,i,c,d,h,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,b=g;M<b;M+=3){const A=M,w=M+1,L=M+2;r=ha(this,u,e,i,c,d,h,A,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=p,g=p+1,M=p+2;r=ha(this,o,e,i,c,d,h,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function By(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;fa.copy(a),fa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(fa);return c<n.near||c>n.far?null:{distance:c,point:fa.clone(),object:t}}function ha(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Or),t.getVertexPosition(l,kr),t.getVertexPosition(c,zr);const d=By(t,e,n,i,Or,kr,zr,da);if(d){r&&(la.fromBufferAttribute(r,a),ca.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,c),d.uv=Vn.getInterpolation(da,Or,kr,zr,la,ca,ua,new Xe)),s&&(la.fromBufferAttribute(s,a),ca.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),d.uv1=Vn.getInterpolation(da,Or,kr,zr,la,ca,ua,new Xe)),o&&(sp.fromBufferAttribute(o,a),op.fromBufferAttribute(o,l),ap.fromBufferAttribute(o,c),d.normal=Vn.getInterpolation(da,Or,kr,zr,sp,op,ap,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Vn.getNormal(Or,kr,zr,h.normal),d.face=h}return d}class Po extends qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(h,2));function _(x,p,u,v,g,M,b,A,w,L,$){const y=M/w,R=b/L,te=M/2,Q=b/2,D=A/2,Y=w+1,z=L+1;let X=0,P=0;const U=new O;for(let H=0;H<z;H++){const K=H*R-Q;for(let re=0;re<Y;re++){const Ee=re*y-te;U[x]=Ee*v,U[p]=K*g,U[u]=D,c.push(U.x,U.y,U.z),U[x]=0,U[p]=0,U[u]=A>0?1:-1,d.push(U.x,U.y,U.z),h.push(re/w),h.push(1-H/L),X+=1}}for(let H=0;H<L;H++)for(let K=0;K<w;K++){const re=f+K+Y*H,Ee=f+K+Y*(H+1),V=f+(K+1)+Y*(H+1),Z=f+(K+1)+Y*H;l.push(re,Ee,Z),l.push(Ee,V,Z),P+=6}a.addGroup(m,P,$),m+=P,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ss(t[n]);for(const r in i)e[r]=i[r]}return e}function Hy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mv(t){return t.getRenderTarget()===null?t.outputColorSpace:Ke.workingColorSpace}const Gy={clone:Ss,merge:Ht};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ev extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new O,lp=new Xe,cp=new Xe;class yn extends Ev{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,lp,cp),n.subVectors(cp,lp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,Hr=1;class jy extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Br,Hr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Br,Hr,e,n);s.layers=this.layers,this.add(s);const o=new yn(Br,Hr,e,n);o.layers=this.layers,this.add(o);const a=new yn(Br,Hr,e,n);a.layers=this.layers,this.add(a);const l=new yn(Br,Hr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Br,Hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tv extends nn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:_s,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xy extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Po(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:zi});s.uniforms.tEquirect.value=n;const o=new Wn(r,s),a=n.minFilter;return n.minFilter===hr&&(n.minFilter=qt),new jy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lc=new O,Yy=new O,qy=new Ue;class or{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(Yy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qy.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Al,pa=new O;class wv{constructor(e=new or,n=new or,i=new or,r=new or,s=new or,o=new or){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,p-m,M-u).normalize(),i[1].setComponents(l+s,f+c,p+m,M+u).normalize(),i[2].setComponents(l+o,f+d,p+_,M+v).normalize(),i[3].setComponents(l-o,f-d,p-_,M-v).normalize(),i[4].setComponents(l-a,f-h,p-x,M-g).normalize(),n===li)i[5].setComponents(l+a,f+h,p+x,M+g).normalize();else if(n===ol)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Av(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $y(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=h.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const f=d.array,m=d._updateRange,_=d.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&_.length===0&&t.bufferSubData(h,0,f),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Cl extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const v=u*f-o;for(let g=0;g<c;g++){const M=g*h-s;_.push(M,-v,0),x.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,M=v+c*(u+1),b=v+1+c*(u+1),A=v+1+c*u;m.push(g,M,A),m.push(M,b,A)}this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,oS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$S=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Ky,alphahash_pars_fragment:Zy,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:eS,alphatest_pars_fragment:tS,aomap_fragment:nS,aomap_pars_fragment:iS,batching_pars_vertex:rS,batching_vertex:sS,begin_vertex:oS,beginnormal_vertex:aS,bsdfs:lS,iridescence_fragment:cS,bumpmap_pars_fragment:uS,clipping_planes_fragment:dS,clipping_planes_pars_fragment:fS,clipping_planes_pars_vertex:hS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:gS,color_pars_vertex:vS,color_vertex:_S,common:xS,cube_uv_reflection_fragment:yS,defaultnormal_vertex:SS,displacementmap_pars_vertex:MS,displacementmap_vertex:ES,emissivemap_fragment:TS,emissivemap_pars_fragment:wS,colorspace_fragment:AS,colorspace_pars_fragment:CS,envmap_fragment:RS,envmap_common_pars_fragment:bS,envmap_pars_fragment:PS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:VS,envmap_vertex:DS,fog_vertex:NS,fog_pars_vertex:IS,fog_fragment:US,fog_pars_fragment:FS,gradientmap_pars_fragment:OS,lightmap_fragment:kS,lightmap_pars_fragment:zS,lights_lambert_fragment:BS,lights_lambert_pars_fragment:HS,lights_pars_begin:GS,lights_toon_fragment:WS,lights_toon_pars_fragment:jS,lights_phong_fragment:XS,lights_phong_pars_fragment:YS,lights_physical_fragment:qS,lights_physical_pars_fragment:$S,lights_fragment_begin:KS,lights_fragment_maps:ZS,lights_fragment_end:QS,logdepthbuf_fragment:JS,logdepthbuf_pars_fragment:eM,logdepthbuf_pars_vertex:tM,logdepthbuf_vertex:nM,map_fragment:iM,map_pars_fragment:rM,map_particle_fragment:sM,map_particle_pars_fragment:oM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:lM,morphinstance_vertex:cM,morphcolor_vertex:uM,morphnormal_vertex:dM,morphtarget_pars_vertex:fM,morphtarget_vertex:hM,normal_fragment_begin:pM,normal_fragment_maps:mM,normal_pars_fragment:gM,normal_pars_vertex:vM,normal_vertex:_M,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:yM,clearcoat_normal_fragment_maps:SM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:EM,opaque_fragment:TM,packing:wM,premultiplied_alpha_fragment:AM,project_vertex:CM,dithering_fragment:RM,dithering_pars_fragment:bM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:NM,shadowmap_vertex:IM,shadowmask_pars_fragment:UM,skinbase_vertex:FM,skinning_pars_vertex:OM,skinning_vertex:kM,skinnormal_vertex:zM,specularmap_fragment:BM,specularmap_pars_fragment:HM,tonemapping_fragment:GM,tonemapping_pars_fragment:VM,transmission_fragment:WM,transmission_pars_fragment:jM,uv_pars_fragment:XM,uv_pars_vertex:YM,uv_vertex:qM,worldpos_vertex:$M,background_vert:KM,background_frag:ZM,backgroundCube_vert:QM,backgroundCube_frag:JM,cube_vert:eE,cube_frag:tE,depth_vert:nE,depth_frag:iE,distanceRGBA_vert:rE,distanceRGBA_frag:sE,equirect_vert:oE,equirect_frag:aE,linedashed_vert:lE,linedashed_frag:cE,meshbasic_vert:uE,meshbasic_frag:dE,meshlambert_vert:fE,meshlambert_frag:hE,meshmatcap_vert:pE,meshmatcap_frag:mE,meshnormal_vert:gE,meshnormal_frag:vE,meshphong_vert:_E,meshphong_frag:xE,meshphysical_vert:yE,meshphysical_frag:SE,meshtoon_vert:ME,meshtoon_frag:EE,points_vert:TE,points_frag:wE,shadow_vert:AE,shadow_frag:CE,sprite_vert:RE,sprite_frag:bE},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Hn={basic:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ht([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ht([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ht([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ht([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ht([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ht([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ht([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ht([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Hn.physical={uniforms:Ht([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ma={r:0,b:0,g:0},nr=new pi,PE=new pt;function LE(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Tl)?(d===void 0&&(d=new Wn(new Po(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Ss(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),nr.copy(u.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(PE.makeRotationFromEuler(nr)),d.material.toneMapped=Ke.getTransfer(g.colorSpace)!==tt,(h!==g||f!==g.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=g,f=g.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Wn(new Cl(2,2),new ji({name:"BackgroundMaterial",uniforms:Ss(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(ma,Mv(t)),i.buffers.color.setClear(ma.r,ma.g,ma.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function DE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(D,Y,z,X,P){let U=!1;if(o){const H=x(X,z,Y);c!==H&&(c=H,m(c.object)),U=u(D,X,z,P),U&&v(D,X,z,P)}else{const H=Y.wireframe===!0;(c.geometry!==X.id||c.program!==z.id||c.wireframe!==H)&&(c.geometry=X.id,c.program=z.id,c.wireframe=H,U=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,L(D,Y,z,X),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,Y,z){const X=z.wireframe===!0;let P=a[D.id];P===void 0&&(P={},a[D.id]=P);let U=P[Y.id];U===void 0&&(U={},P[Y.id]=U);let H=U[X];return H===void 0&&(H=p(f()),U[X]=H),H}function p(D){const Y=[],z=[],X=[];for(let P=0;P<r;P++)Y[P]=0,z[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:z,attributeDivisors:X,object:D,attributes:{},index:null}}function u(D,Y,z,X){const P=c.attributes,U=Y.attributes;let H=0;const K=z.getAttributes();for(const re in K)if(K[re].location>=0){const V=P[re];let Z=U[re];if(Z===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==X}function v(D,Y,z,X){const P={},U=Y.attributes;let H=0;const K=z.getAttributes();for(const re in K)if(K[re].location>=0){let V=U[re];V===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),P[re]=Z,H++}c.attributes=P,c.attributesNum=H,c.index=X}function g(){const D=c.newAttributes;for(let Y=0,z=D.length;Y<z;Y++)D[Y]=0}function M(D){b(D,0)}function b(D,Y){const z=c.newAttributes,X=c.enabledAttributes,P=c.attributeDivisors;z[D]=1,X[D]===0&&(t.enableVertexAttribArray(D),X[D]=1),P[D]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,Y),P[D]=Y)}function A(){const D=c.newAttributes,Y=c.enabledAttributes;for(let z=0,X=Y.length;z<X;z++)Y[z]!==D[z]&&(t.disableVertexAttribArray(z),Y[z]=0)}function w(D,Y,z,X,P,U,H){H===!0?t.vertexAttribIPointer(D,Y,z,P,U):t.vertexAttribPointer(D,Y,z,X,P,U)}function L(D,Y,z,X){if(i.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const P=X.attributes,U=z.getAttributes(),H=Y.defaultAttributeValues;for(const K in U){const re=U[K];if(re.location>=0){let Ee=P[K];if(Ee===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),Ee!==void 0){const V=Ee.normalized,Z=Ee.itemSize,le=n.get(Ee);if(le===void 0)continue;const ye=le.buffer,me=le.type,pe=le.bytesPerElement,Ye=i.isWebGL2===!0&&(me===t.INT||me===t.UNSIGNED_INT||Ee.gpuType===av);if(Ee.isInterleavedBufferAttribute){const Ce=Ee.data,F=Ce.stride,Ct=Ee.offset;if(Ce.isInstancedInterleavedBuffer){for(let Se=0;Se<re.locationSize;Se++)b(re.location+Se,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Se=0;Se<re.locationSize;Se++)M(re.location+Se);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Se=0;Se<re.locationSize;Se++)w(re.location+Se,Z/re.locationSize,me,V,F*pe,(Ct+Z/re.locationSize*Se)*pe,Ye)}else{if(Ee.isInstancedBufferAttribute){for(let Ce=0;Ce<re.locationSize;Ce++)b(re.location+Ce,Ee.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ce=0;Ce<re.locationSize;Ce++)M(re.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Ce=0;Ce<re.locationSize;Ce++)w(re.location+Ce,Z/re.locationSize,me,V,Z*pe,Z/re.locationSize*Ce*pe,Ye)}}else if(H!==void 0){const V=H[K];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(re.location,V);break;case 3:t.vertexAttrib3fv(re.location,V);break;case 4:t.vertexAttrib4fv(re.location,V);break;default:t.vertexAttrib1fv(re.location,V)}}}}A()}function $(){te();for(const D in a){const Y=a[D];for(const z in Y){const X=Y[z];for(const P in X)_(X[P].object),delete X[P];delete Y[z]}delete a[D]}}function y(D){if(a[D.id]===void 0)return;const Y=a[D.id];for(const z in Y){const X=Y[z];for(const P in X)_(X[P].object),delete X[P];delete Y[z]}delete a[D.id]}function R(D){for(const Y in a){const z=a[Y];if(z[D.id]===void 0)continue;const X=z[D.id];for(const P in X)_(X[P].object),delete X[P];delete z[D.id]}}function te(){Q(),d=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:te,resetDefaultState:Q,dispose:$,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:M,disableUnusedAttributes:A}}function NE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(d[_],h[_]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function IE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,M=o||e.has("OES_texture_float"),b=g&&M,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:A}}function UE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new or,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=d(_,f,g,m);for(let b=0;b!==g;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==x;++g,M+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function FE(t){let e=new WeakMap;function n(o,a){return a===Fu?o.mapping=_s:a===Ou&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fu||a===Ou)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xy(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class OE extends Ev{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=4,up=[.125,.215,.35,.446,.526,.582],cr=20,Dc=new OE,dp=new qe;let Nc=null,Ic=0,Uc=0;const ar=(1+Math.sqrt(5))/2,Gr=1/ar,fp=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ar,Gr),new O(0,ar,-Gr),new O(Gr,0,ar),new O(-Gr,0,ar),new O(ar,Gr,0),new O(-ar,Gr,0)];class hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Ic,Uc),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:yo,format:Nn,colorSpace:$i,depthBuffer:!1},r=pp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kE(s)),this._blurMaterial=zE(s,e,n)}return r}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,Dc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(dp),d.toneMapping=Bi,d.autoClear=!1;const m=new Wd({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new Wn(new Po,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(dp),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;ga(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),x&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_s||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fp[(r-1)%fp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Wn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*cr-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):cr;p>cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${cr}`);const u=[];let v=0;for(let w=0;w<cr;++w){const L=w/x,$=Math.exp(-L*L/2);u.push($),w===0?v+=$:w<p&&(v+=2*$)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const M=this._sizeLods[r],b=3*M*(r>g-ts?r-g+ts:0),A=4*(this._cubeSize-M);ga(n,b,A,3*M,2*M),l.setRenderTarget(n),l.render(h,Dc)}}function kE(t){const e=[],n=[],i=[];let r=t;const s=t-ts+1+up.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ts?l=up[o-t+ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,x=3,p=2,u=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,L=A>2?0:-1,$=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set($,x*_*A),g.set(f,p*_*A);const y=[A,A,A,A,A,A];M.set(y,u*_*A)}const b=new qn;b.setAttribute("position",new Yn(v,x)),b.setAttribute("uv",new Yn(g,p)),b.setAttribute("faceIndex",new Yn(M,u)),e.push(b),r>ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pp(t,e,n){const i=new Er(t,e,n);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zE(t,e,n){const i=new Float32Array(cr),r=new O(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function mp(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function gp(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fu||l===Ou,d=l===_s||l===xs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new hp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new hp(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,M=v.length;g<M;g+=3){const b=v[g+0],A=v[g+1],w=v[g+2];f.push(b,A,A,w,w,b)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const b=g+0,A=g+1,w=g+2;f.push(b,A,A,w,w,b)}}else return;const p=new(mv(f)?Sv:yv)(f,1);p.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function VE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,_){t.drawElements(s,_,a,m*l),n.update(_,s,1)}function h(m,_,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,m*l,x),n.update(_,s,x)}function f(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,m,0,x);let u=0;for(let v=0;v<x;v++)u+=_[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function WE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jE(t,e){return t[0]-e[0]}function XE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function YE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(d);if(p===void 0||p.count!==x){let Q=function(){R.dispose(),s.delete(d),d.removeEventListener("dispose",Q)};var m=Q;p!==void 0&&p.texture.dispose();const u=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let w=0;u===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let L=d.attributes.position.count*w,$=1;L>e.maxTextureSize&&($=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const y=new Float32Array(L*$*4*x),R=new _v(y,L,$,x);R.type=si,R.needsUpdate=!0;const te=w*4;for(let D=0;D<x;D++){const Y=M[D],z=b[D],X=A[D],P=L*$*4*D;for(let U=0;U<Y.count;U++){const H=U*te;u===!0&&(o.fromBufferAttribute(Y,U),y[P+H+0]=o.x,y[P+H+1]=o.y,y[P+H+2]=o.z,y[P+H+3]=0),v===!0&&(o.fromBufferAttribute(z,U),y[P+H+4]=o.x,y[P+H+5]=o.y,y[P+H+6]=o.z,y[P+H+7]=0),g===!0&&(o.fromBufferAttribute(X,U),y[P+H+8]=o.x,y[P+H+9]=o.y,y[P+H+10]=o.z,y[P+H+11]=X.itemSize===4?o.w:1)}}p={count:x,texture:R,size:new Xe(L,$)},s.set(d,p),d.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let g=0;g<f.length;g++)u+=f[g];const v=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",f)}h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==_){x=[];for(let M=0;M<_;M++)x[M]=[M,0];i[d.id]=x}for(let M=0;M<_;M++){const b=x[M];b[0]=M,b[1]=f[M]}x.sort(XE);for(let M=0;M<8;M++)M<_&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(jE);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const b=a[M],A=b[0],w=b[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&d.getAttribute("morphTarget"+M)!==p[A]&&d.setAttribute("morphTarget"+M,p[A]),u&&d.getAttribute("morphNormal"+M)!==u[A]&&d.setAttribute("morphNormal"+M,u[A]),r[M]=w,v+=w):(p&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),u&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const g=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function qE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Cv extends nn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:vr,d!==vr&&d!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===vr&&(i=Pi),i===void 0&&d===ys&&(i=gr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rv=new nn,bv=new Cv(1,1);bv.compareFunction=pv;const Pv=new _v,Lv=new by,Dv=new Tv,vp=[],_p=[],xp=new Float32Array(16),yp=new Float32Array(9),Sp=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vp[r];if(s===void 0&&(s=new Float32Array(r),vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=_p[e];n===void 0&&(n=new Int32Array(e),_p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $E(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;Sp.set(i),t.uniformMatrix2fv(this.addr,!1,Sp),St(n,i)}}function e1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;yp.set(i),t.uniformMatrix3fv(this.addr,!1,yp),St(n,i)}}function t1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;xp.set(i),t.uniformMatrix4fv(this.addr,!1,xp),St(n,i)}}function n1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function r1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function s1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function o1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function a1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function u1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?bv:Rv;n.setTexture2D(e||s,r)}function d1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Lv,r)}function f1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dv,r)}function h1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Pv,r)}function p1(t){switch(t){case 5126:return $E;case 35664:return KE;case 35665:return ZE;case 35666:return QE;case 35674:return JE;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}function m1(t,e){t.uniform1fv(this.addr,e)}function g1(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function v1(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function _1(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function x1(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function y1(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function S1(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function M1(t,e){t.uniform1iv(this.addr,e)}function E1(t,e){t.uniform2iv(this.addr,e)}function T1(t,e){t.uniform3iv(this.addr,e)}function w1(t,e){t.uniform4iv(this.addr,e)}function A1(t,e){t.uniform1uiv(this.addr,e)}function C1(t,e){t.uniform2uiv(this.addr,e)}function R1(t,e){t.uniform3uiv(this.addr,e)}function b1(t,e){t.uniform4uiv(this.addr,e)}function P1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Rv,s[o])}function L1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Lv,s[o])}function D1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Dv,s[o])}function N1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Pv,s[o])}function I1(t){switch(t){case 5126:return m1;case 35664:return g1;case 35665:return v1;case 35666:return _1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return E1;case 35668:case 35672:return T1;case 35669:case 35673:return w1;case 5125:return A1;case 36294:return C1;case 36295:return R1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return N1}}class U1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p1(n.type)}}class F1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=I1(n.type)}}class O1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function Mp(t,e){t.seq.push(e),t.map[e.id]=e}function k1(t,e,n){const i=t.name,r=i.length;for(Fc.lastIndex=0;;){const s=Fc.exec(i),o=Fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Mp(n,c===void 0?new U1(a,t,e):new F1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new O1(a),Mp(n,h)),n=h}}}class Pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);k1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ep(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const z1=37297;let B1=0;function H1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function G1(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===rl?i="LinearDisplayP3ToLinearSRGB":e===rl&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case wl:return[i,"LinearTransferOETF"];case Bn:case Hd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Tp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+H1(t.getShaderSource(e),o)}else return r}function V1(t,e){const n=G1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function W1(t,e){let n;switch(e){case Kx:n="Linear";break;case Zx:n="Reinhard";break;case Qx:n="OptimizedCineon";break;case Jx:n="ACESFilmic";break;case ty:n="AgX";break;case ny:n="Neutral";break;case ey:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function j1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function X1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Y1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function q1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ns(t){return t!==""}function wp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ap(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(t){return t.replace($1,Z1)}const K1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z1(t,e){let n=Ie[e];if(n===void 0){const i=K1.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vu(n)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(t){return t.replace(Q1,J1)}function J1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Tx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function tT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function iT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sv:e="ENVMAP_BLENDING_MULTIPLY";break;case qx:e="ENVMAP_BLENDING_MIX";break;case $x:e="ENVMAP_BLENDING_ADD";break}return e}function rT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=eT(n),c=tT(n),d=nT(n),h=iT(n),f=rT(n),m=n.isWebGL2?"":j1(n),_=X1(n),x=Y1(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ns).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ns).join(`
`),v.length>0&&(v+=`
`)):(u=[Rp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),v=[m,Rp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Bi?W1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,V1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ns).join(`
`)),o=Vu(o),o=wp(o,n),o=Ap(o,n),a=Vu(a),a=wp(a,n),a=Ap(a,n),o=Cp(o),a=Cp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=g+u+o,b=g+v+a,A=Ep(r,r.VERTEX_SHADER,M),w=Ep(r,r.FRAGMENT_SHADER,b);r.attachShader(p,A),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L(te){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(A).trim(),Y=r.getShaderInfoLog(w).trim();let z=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,A,w);else{const P=Tp(r,A,"vertex"),U=Tp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+Q+`
`+P+`
`+U)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||Y==="")&&(X=!1);X&&(te.diagnostics={runnable:z,programLog:Q,vertexShader:{log:D,prefix:u},fragmentShader:{log:Y,prefix:v}})}r.deleteShader(A),r.deleteShader(w),$=new Pa(r,p),y=q1(r,p)}let $;this.getUniforms=function(){return $===void 0&&L(this),$};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,z1)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let oT=0;class aT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lT(e),n.set(e,i)),i}}class lT{constructor(e){this.id=oT++,this.code=e,this.usedTimes=0}}function cT(t,e,n,i,r,s,o){const a=new Vd,l=new aT,c=new Set,d=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,R,te,Q,D){const Y=Q.fog,z=D.geometry,X=y.isMeshStandardMaterial?Q.environment:null,P=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),U=P&&P.mapping===Tl?P.image.height:null,H=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=K!==void 0?K.length:0;let Ee=0;z.morphAttributes.position!==void 0&&(Ee=1),z.morphAttributes.normal!==void 0&&(Ee=2),z.morphAttributes.color!==void 0&&(Ee=3);let V,Z,le,ye;if(H){const Ze=Hn[H];V=Ze.vertexShader,Z=Ze.fragmentShader}else V=y.vertexShader,Z=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const me=t.getRenderTarget(),pe=D.isInstancedMesh===!0,Ye=D.isBatchedMesh===!0,Ce=!!y.map,F=!!y.matcap,Ct=!!P,Se=!!y.aoMap,ke=!!y.lightMap,Te=!!y.bumpMap,Ve=!!y.normalMap,Fe=!!y.displacementMap,ze=!!y.emissiveMap,dt=!!y.metalnessMap,C=!!y.roughnessMap,S=y.anisotropy>0,j=y.clearcoat>0,q=y.iridescence>0,ne=y.sheen>0,J=y.transmission>0,Le=S&&!!y.anisotropyMap,we=j&&!!y.clearcoatMap,ae=j&&!!y.clearcoatNormalMap,ue=j&&!!y.clearcoatRoughnessMap,De=q&&!!y.iridescenceMap,ie=q&&!!y.iridescenceThicknessMap,mt=ne&&!!y.sheenColorMap,Be=ne&&!!y.sheenRoughnessMap,xe=!!y.specularMap,ge=!!y.specularColorMap,ve=!!y.specularIntensityMap,We=J&&!!y.transmissionMap,be=J&&!!y.thicknessMap,it=!!y.gradientMap,N=!!y.alphaMap,ce=y.alphaTest>0,B=!!y.alphaHash,se=!!y.extensions;let de=Bi;y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(de=t.toneMapping);const Ge={isWebGL2:h,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:Z,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ye,instancing:pe,instancingColor:pe&&D.instanceColor!==null,instancingMorph:pe&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:$i,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:F,envMap:Ct,envMapMode:Ct&&P.mapping,envMapCubeUVHeight:U,aoMap:Se,lightMap:ke,bumpMap:Te,normalMap:Ve,displacementMap:m&&Fe,emissiveMap:ze,normalMapObjectSpace:Ve&&y.normalMapType===py,normalMapTangentSpace:Ve&&y.normalMapType===hy,metalnessMap:dt,roughnessMap:C,anisotropy:S,anisotropyMap:Le,clearcoat:j,clearcoatMap:we,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:ie,sheen:ne,sheenColorMap:mt,sheenRoughnessMap:Be,specularMap:xe,specularColorMap:ge,specularIntensityMap:ve,transmission:J,transmissionMap:We,thicknessMap:be,gradientMap:it,opaque:y.transparent===!1&&y.blending===cs&&y.alphaToCoverage===!1,alphaMap:N,alphaTest:ce,alphaHash:B,combine:y.combine,mapUv:Ce&&p(y.map.channel),aoMapUv:Se&&p(y.aoMap.channel),lightMapUv:ke&&p(y.lightMap.channel),bumpMapUv:Te&&p(y.bumpMap.channel),normalMapUv:Ve&&p(y.normalMap.channel),displacementMapUv:Fe&&p(y.displacementMap.channel),emissiveMapUv:ze&&p(y.emissiveMap.channel),metalnessMapUv:dt&&p(y.metalnessMap.channel),roughnessMapUv:C&&p(y.roughnessMap.channel),anisotropyMapUv:Le&&p(y.anisotropyMap.channel),clearcoatMapUv:we&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&p(y.sheenRoughnessMap.channel),specularMapUv:xe&&p(y.specularMap.channel),specularColorMapUv:ge&&p(y.specularColorMap.channel),specularIntensityMapUv:ve&&p(y.specularIntensityMap.channel),transmissionMapUv:We&&p(y.transmissionMap.channel),thicknessMapUv:be&&p(y.thicknessMap.channel),alphaMapUv:N&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ve||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ce||N),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ee,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:de,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ri,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:se&&y.extensions.derivatives===!0,extensionFragDepth:se&&y.extensions.fragDepth===!0,extensionDrawBuffers:se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function v(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const te in y.defines)R.push(te),R.push(y.defines[te]);return y.isRawShaderMaterial===!1&&(g(R,y),M(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function g(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function M(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),y.push(a.mask)}function b(y){const R=x[y.type];let te;if(R){const Q=Hn[R];te=Gy.clone(Q.uniforms)}else te=y.uniforms;return te}function A(y,R){let te;for(let Q=0,D=d.length;Q<D;Q++){const Y=d[Q];if(Y.cacheKey===R){te=Y,++te.usedTimes;break}}return te===void 0&&(te=new sT(t,R,y,s),d.push(te)),te}function w(y){if(--y.usedTimes===0){const R=d.indexOf(y);d[R]=d[d.length-1],d.pop(),y.destroy()}}function L(y){l.remove(y)}function $(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:L,programs:d,dispose:$}}function uT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function dT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,_,x,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=p),e++,u}function a(h,f,m,_,x,p){const u=o(h,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,x,p){const u=o(h,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||dT),i.length>1&&i.sort(f||bp),r.length>1&&r.sort(f||bp)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function fT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pp,t.set(i,[o])):r>=s.length?(o=new Pp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new qe};break;case"SpotLight":n={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function pT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mT=0;function gT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vT(t,e){const n=new hT,i=pT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new O);const s=new O,o=new pt,a=new pt;function l(d,h){let f=0,m=0,_=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let x=0,p=0,u=0,v=0,g=0,M=0,b=0,A=0,w=0,L=0,$=0;d.sort(gT);const y=h===!0?Math.PI:1;for(let te=0,Q=d.length;te<Q;te++){const D=d[te],Y=D.color,z=D.intensity,X=D.distance,P=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=Y.r*z*y,m+=Y.g*z*y,_+=Y.b*z*y;else if(D.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(D.sh.coefficients[U],z);$++}else if(D.isDirectionalLight){const U=n.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const H=D.shadow,K=i.get(D);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=P,r.directionalShadowMatrix[x]=D.shadow.matrix,M++}r.directional[x]=U,x++}else if(D.isSpotLight){const U=n.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(Y).multiplyScalar(z*y),U.distance=X,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,r.spot[u]=U;const H=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,H.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[u]=H.matrix,D.castShadow){const K=i.get(D);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=P,A++}u++}else if(D.isRectAreaLight){const U=n.get(D);U.color.copy(Y).multiplyScalar(z),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=U,v++}else if(D.isPointLight){const U=n.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity*y),U.distance=D.distance,U.decay=D.decay,D.castShadow){const H=D.shadow,K=i.get(D);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=P,r.pointShadowMatrix[p]=D.shadow.matrix,b++}r.point[p]=U,p++}else if(D.isHemisphereLight){const U=n.get(D);U.skyColor.copy(D.color).multiplyScalar(z*y),U.groundColor.copy(D.groundColor).multiplyScalar(z*y),r.hemi[g]=U,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==x||R.pointLength!==p||R.spotLength!==u||R.rectAreaLength!==v||R.hemiLength!==g||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==A||R.numSpotMaps!==w||R.numLightProbes!==$)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+w-L,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=$,R.directionalLength=x,R.pointLength=p,R.spotLength=u,R.rectAreaLength=v,R.hemiLength=g,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=A,R.numSpotMaps=w,R.numLightProbes=$,r.version=mT++)}function c(d,h){let f=0,m=0,_=0,x=0,p=0;const u=h.matrixWorldInverse;for(let v=0,g=d.length;v<g;v++){const M=d[v];if(M.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),f++}else if(M.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Lp(t,e){const n=new vT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _T(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Lp(t,e),n.set(s,[l])):o>=a.length?(l=new Lp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class xT extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yT extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ST=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ET(t,e,n){let i=new wv;const r=new Xe,s=new Xe,o=new Pt,a=new xT({depthPacking:fy}),l=new yT,c={},d=n.maxTextureSize,h={[Wi]:tn,[tn]:Wi,[ri]:ri},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ST,fragmentShader:MT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rv;let u=this.type;this.render=function(A,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const $=t.getRenderTarget(),y=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),te=t.state;te.setBlending(zi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Q=u!==ti&&this.type===ti,D=u===ti&&this.type!==ti;for(let Y=0,z=A.length;Y<z;Y++){const X=A[Y],P=X.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const U=P.getFrameExtents();if(r.multiply(U),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/U.x),r.x=s.x*U.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/U.y),r.y=s.y*U.y,P.mapSize.y=s.y)),P.map===null||Q===!0||D===!0){const K=this.type!==ti?{minFilter:Vt,magFilter:Vt}:{};P.map!==null&&P.map.dispose(),P.map=new Er(r.x,r.y,K),P.map.texture.name=X.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const H=P.getViewportCount();for(let K=0;K<H;K++){const re=P.getViewport(K);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),te.viewport(o),P.updateMatrices(X,K),i=P.getFrustum(),M(w,L,P.camera,X,this.type)}P.isPointLightShadow!==!0&&this.type===ti&&v(P,L),P.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget($,y,R)};function v(A,w){const L=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Er(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,L,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,L,m,x,null)}function g(A,w,L,$){let y=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const te=y.uuid,Q=w.uuid;let D=c[te];D===void 0&&(D={},c[te]=D);let Y=D[Q];Y===void 0&&(Y=y.clone(),D[Q]=Y,w.addEventListener("dispose",b)),y=Y}if(y.visible=w.visible,y.wireframe=w.wireframe,$===ti?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const te=t.properties.get(y);te.light=L}return y}function M(A,w,L,$,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ti)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),D=A.material;if(Array.isArray(D)){const Y=Q.groups;for(let z=0,X=Y.length;z<X;z++){const P=Y[z],U=D[P.materialIndex];if(U&&U.visible){const H=g(A,U,$,y);A.onBeforeShadow(t,A,w,L,Q,H,P),t.renderBufferDirect(L,null,Q,H,A,P),A.onAfterShadow(t,A,w,L,Q,H,P)}}}else if(D.visible){const Y=g(A,D,$,y);A.onBeforeShadow(t,A,w,L,Q,Y,null),t.renderBufferDirect(L,null,Q,Y,A,null),A.onAfterShadow(t,A,w,L,Q,Y,null)}}const te=A.children;for(let Q=0,D=te.length;Q<D;Q++)M(te[Q],w,L,$,y)}function b(A){A.target.removeEventListener("dispose",b);for(const L in c){const $=c[L],y=A.target.uuid;y in $&&($[y].dispose(),delete $[y])}}}function TT(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const ce=new Pt;let B=null;const se=new Pt(0,0,0,0);return{setMask:function(de){B!==de&&!N&&(t.colorMask(de,de,de,de),B=de)},setLocked:function(de){N=de},setClear:function(de,Ge,Ze,Rt,mn){mn===!0&&(de*=Rt,Ge*=Rt,Ze*=Rt),ce.set(de,Ge,Ze,Rt),se.equals(ce)===!1&&(t.clearColor(de,Ge,Ze,Rt),se.copy(ce))},reset:function(){N=!1,B=null,se.set(-1,0,0,0)}}}function s(){let N=!1,ce=null,B=null,se=null;return{setTest:function(de){de?pe(t.DEPTH_TEST):Ye(t.DEPTH_TEST)},setMask:function(de){ce!==de&&!N&&(t.depthMask(de),ce=de)},setFunc:function(de){if(B!==de){switch(de){case Hx:t.depthFunc(t.NEVER);break;case Gx:t.depthFunc(t.ALWAYS);break;case Vx:t.depthFunc(t.LESS);break;case nl:t.depthFunc(t.LEQUAL);break;case Wx:t.depthFunc(t.EQUAL);break;case jx:t.depthFunc(t.GEQUAL);break;case Xx:t.depthFunc(t.GREATER);break;case Yx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=de}},setLocked:function(de){N=de},setClear:function(de){se!==de&&(t.clearDepth(de),se=de)},reset:function(){N=!1,ce=null,B=null,se=null}}}function o(){let N=!1,ce=null,B=null,se=null,de=null,Ge=null,Ze=null,Rt=null,mn=null;return{setTest:function(Qe){N||(Qe?pe(t.STENCIL_TEST):Ye(t.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!N&&(t.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Bt,On){(B!==Qe||se!==Bt||de!==On)&&(t.stencilFunc(Qe,Bt,On),B=Qe,se=Bt,de=On)},setOp:function(Qe,Bt,On){(Ge!==Qe||Ze!==Bt||Rt!==On)&&(t.stencilOp(Qe,Bt,On),Ge=Qe,Ze=Bt,Rt=On)},setLocked:function(Qe){N=Qe},setClear:function(Qe){mn!==Qe&&(t.clearStencil(Qe),mn=Qe)},reset:function(){N=!1,ce=null,B=null,se=null,de=null,Ge=null,Ze=null,Rt=null,mn=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,M=null,b=null,A=null,w=null,L=null,$=new qe(0,0,0),y=0,R=!1,te=null,Q=null,D=null,Y=null,z=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,U=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(H)[1]),P=U>=1):H.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),P=U>=2);let K=null,re={};const Ee=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),Z=new Pt().fromArray(Ee),le=new Pt().fromArray(V);function ye(N,ce,B,se){const de=new Uint8Array(4),Ge=t.createTexture();t.bindTexture(N,Ge),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<B;Ze++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ce+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Ge}const me={};me[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(t.DEPTH_TEST),l.setFunc(nl),Fe(!1),ze(uh),pe(t.CULL_FACE),Te(zi);function pe(N){f[N]!==!0&&(t.enable(N),f[N]=!0)}function Ye(N){f[N]!==!1&&(t.disable(N),f[N]=!1)}function Ce(N,ce){return m[N]!==ce?(t.bindFramebuffer(N,ce),m[N]=ce,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ce),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function F(N,ce){let B=x,se=!1;if(N){B=_.get(ce),B===void 0&&(B=[],_.set(ce,B));const de=N.textures;if(B.length!==de.length||B[0]!==t.COLOR_ATTACHMENT0){for(let Ge=0,Ze=de.length;Ge<Ze;Ge++)B[Ge]=t.COLOR_ATTACHMENT0+Ge;B.length=de.length,se=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,se=!0);if(se)if(n.isWebGL2)t.drawBuffers(B);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ct(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Se={[lr]:t.FUNC_ADD,[Ax]:t.FUNC_SUBTRACT,[Cx]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[ph]=t.MIN,Se[mh]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Se[ph]=N.MIN_EXT,Se[mh]=N.MAX_EXT)}const ke={[Rx]:t.ZERO,[bx]:t.ONE,[Px]:t.SRC_COLOR,[Iu]:t.SRC_ALPHA,[Fx]:t.SRC_ALPHA_SATURATE,[Ix]:t.DST_COLOR,[Dx]:t.DST_ALPHA,[Lx]:t.ONE_MINUS_SRC_COLOR,[Uu]:t.ONE_MINUS_SRC_ALPHA,[Ux]:t.ONE_MINUS_DST_COLOR,[Nx]:t.ONE_MINUS_DST_ALPHA,[Ox]:t.CONSTANT_COLOR,[kx]:t.ONE_MINUS_CONSTANT_COLOR,[zx]:t.CONSTANT_ALPHA,[Bx]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(N,ce,B,se,de,Ge,Ze,Rt,mn,Qe){if(N===zi){u===!0&&(Ye(t.BLEND),u=!1);return}if(u===!1&&(pe(t.BLEND),u=!0),N!==wx){if(N!==v||Qe!==R){if((g!==lr||A!==lr)&&(t.blendEquation(t.FUNC_ADD),g=lr,A=lr),Qe)switch(N){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.ONE,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,w=null,L=null,$.set(0,0,0),y=0,v=N,R=Qe}return}de=de||ce,Ge=Ge||B,Ze=Ze||se,(ce!==g||de!==A)&&(t.blendEquationSeparate(Se[ce],Se[de]),g=ce,A=de),(B!==M||se!==b||Ge!==w||Ze!==L)&&(t.blendFuncSeparate(ke[B],ke[se],ke[Ge],ke[Ze]),M=B,b=se,w=Ge,L=Ze),(Rt.equals($)===!1||mn!==y)&&(t.blendColor(Rt.r,Rt.g,Rt.b,mn),$.copy(Rt),y=mn),v=N,R=!1}function Ve(N,ce){N.side===ri?Ye(t.CULL_FACE):pe(t.CULL_FACE);let B=N.side===tn;ce&&(B=!B),Fe(B),N.blending===cs&&N.transparent===!1?Te(zi):Te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const se=N.stencilWrite;c.setTest(se),se&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),C(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){te!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),te=N)}function ze(N){N!==Mx?(pe(t.CULL_FACE),N!==Q&&(N===uh?t.cullFace(t.BACK):N===Ex?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ye(t.CULL_FACE),Q=N}function dt(N){N!==D&&(P&&t.lineWidth(N),D=N)}function C(N,ce,B){N?(pe(t.POLYGON_OFFSET_FILL),(Y!==ce||z!==B)&&(t.polygonOffset(ce,B),Y=ce,z=B)):Ye(t.POLYGON_OFFSET_FILL)}function S(N){N?pe(t.SCISSOR_TEST):Ye(t.SCISSOR_TEST)}function j(N){N===void 0&&(N=t.TEXTURE0+X-1),K!==N&&(t.activeTexture(N),K=N)}function q(N,ce,B){B===void 0&&(K===null?B=t.TEXTURE0+X-1:B=K);let se=re[B];se===void 0&&(se={type:void 0,texture:void 0},re[B]=se),(se.type!==N||se.texture!==ce)&&(K!==B&&(t.activeTexture(B),K=B),t.bindTexture(N,ce||me[N]),se.type=N,se.texture=ce)}function ne(){const N=re[K];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){Z.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function ve(N){le.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),le.copy(N))}function We(N,ce){let B=h.get(ce);B===void 0&&(B=new WeakMap,h.set(ce,B));let se=B.get(N);se===void 0&&(se=t.getUniformBlockIndex(ce,N.name),B.set(N,se))}function be(N,ce){const se=h.get(ce).get(N);d.get(ce)!==se&&(t.uniformBlockBinding(ce,se,N.__bindingPointIndex),d.set(ce,se))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},K=null,re={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,M=null,b=null,A=null,w=null,L=null,$=new qe(0,0,0),y=0,R=!1,te=null,Q=null,D=null,Y=null,z=null,Z.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:Ye,bindFramebuffer:Ce,drawBuffers:F,useProgram:Ct,setBlending:Te,setMaterial:Ve,setFlipSided:Fe,setCullFace:ze,setLineWidth:dt,setPolygonOffset:C,setScissorTest:S,activeTexture:j,bindTexture:q,unbindTexture:ne,compressedTexImage2D:J,compressedTexImage3D:Le,texImage2D:Be,texImage3D:xe,updateUBOMapping:We,uniformBlockBinding:be,texStorage2D:ie,texStorage3D:mt,texSubImage2D:we,texSubImage3D:ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:De,scissor:ge,viewport:ve,reset:it}}function wT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,h=new WeakMap;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return _?new OffscreenCanvas(C,S):al("canvas")}function p(C,S,j,q){let ne=1;const J=dt(C);if((J.width>q||J.height>q)&&(ne=q/Math.max(J.width,J.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Le=S?Gu:Math.floor,we=Le(ne*J.width),ae=Le(ne*J.height);f===void 0&&(f=x(we,ae));const ue=j?x(we,ae):f;return ue.width=we,ue.height=ae,ue.getContext("2d").drawImage(C,0,0,we,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+we+"x"+ae+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function u(C){const S=dt(C);return jh(S.width)&&jh(S.height)}function v(C){return a?!1:C.wrapS!==Dn||C.wrapT!==Dn||C.minFilter!==Vt&&C.minFilter!==qt}function g(C,S){return C.generateMipmaps&&S&&C.minFilter!==Vt&&C.minFilter!==qt}function M(C){t.generateMipmap(C)}function b(C,S,j,q,ne=!1){if(a===!1)return S;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===t.RED&&(j===t.FLOAT&&(J=t.R32F),j===t.HALF_FLOAT&&(J=t.R16F),j===t.UNSIGNED_BYTE&&(J=t.R8)),S===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.R8UI),j===t.UNSIGNED_SHORT&&(J=t.R16UI),j===t.UNSIGNED_INT&&(J=t.R32UI),j===t.BYTE&&(J=t.R8I),j===t.SHORT&&(J=t.R16I),j===t.INT&&(J=t.R32I)),S===t.RG&&(j===t.FLOAT&&(J=t.RG32F),j===t.HALF_FLOAT&&(J=t.RG16F),j===t.UNSIGNED_BYTE&&(J=t.RG8)),S===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RG8UI),j===t.UNSIGNED_SHORT&&(J=t.RG16UI),j===t.UNSIGNED_INT&&(J=t.RG32UI),j===t.BYTE&&(J=t.RG8I),j===t.SHORT&&(J=t.RG16I),j===t.INT&&(J=t.RG32I)),S===t.RGBA){const Le=ne?il:Ke.getTransfer(q);j===t.FLOAT&&(J=t.RGBA32F),j===t.HALF_FLOAT&&(J=t.RGBA16F),j===t.UNSIGNED_BYTE&&(J=Le===tt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function A(C,S,j){return g(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){return C===Vt||C===gh||C===Fs?t.NEAREST:t.LINEAR}function L(C){const S=C.target;S.removeEventListener("dispose",L),y(S),S.isVideoTexture&&h.delete(S)}function $(C){const S=C.target;S.removeEventListener("dispose",$),te(S)}function y(C){const S=i.get(C);if(S.__webglInit===void 0)return;const j=C.source,q=m.get(j);if(q){const ne=q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(C),Object.keys(q).length===0&&m.delete(j)}i.remove(C)}function R(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const j=C.source,q=m.get(j);delete q[S.__cacheKey],o.memory.textures--}function te(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ne=0;ne<S.__webglFramebuffer[q].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[q][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const j=C.textures;for(let q=0,ne=j.length;q<ne;q++){const J=i.get(j[q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(j[q])}i.remove(C)}let Q=0;function D(){Q=0}function Y(){const C=Q;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),Q+=1,C}function z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const j=i.get(C);if(C.isVideoTexture&&Fe(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(j,C,S);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+S)}function P(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){le(j,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+S)}function U(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){le(j,C,S);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+S)}function H(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){ye(j,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+S)}const K={[ku]:t.REPEAT,[Dn]:t.CLAMP_TO_EDGE,[zu]:t.MIRRORED_REPEAT},re={[Vt]:t.NEAREST,[gh]:t.NEAREST_MIPMAP_NEAREST,[Fs]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[sc]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},Ee={[my]:t.NEVER,[Sy]:t.ALWAYS,[gy]:t.LESS,[pv]:t.LEQUAL,[vy]:t.EQUAL,[yy]:t.GEQUAL,[_y]:t.GREATER,[xy]:t.NOTEQUAL};function V(C,S,j){if(S.type===si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===sc||S.magFilter===Fs||S.magFilter===hr||S.minFilter===qt||S.minFilter===sc||S.minFilter===Fs||S.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(t.texParameteri(C,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,K[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,re[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,re[S.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Dn||S.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Vt&&S.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==Fs&&S.minFilter!==hr||S.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===yo&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Z(C,S){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L));const q=S.source;let ne=m.get(q);ne===void 0&&(ne={},m.set(q,ne));const J=z(S);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ne[J].usedTimes++;const Le=ne[C.__cacheKey];Le!==void 0&&(ne[C.__cacheKey].usedTimes--,Le.usedTimes===0&&R(S)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return j}function le(C,S,j){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const ne=Z(C,S),J=S.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+j);const Le=i.get(J);if(J.version!==Le.__version||ne===!0){n.activeTexture(t.TEXTURE0+j);const we=Ke.getPrimaries(Ke.workingColorSpace),ae=S.colorSpace===Ci?null:Ke.getPrimaries(S.colorSpace),ue=S.colorSpace===Ci||we===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const De=v(S)&&u(S.image)===!1;let ie=p(S.image,De,!1,r.maxTextureSize);ie=ze(S,ie);const mt=u(ie)||a,Be=s.convert(S.format,S.colorSpace);let xe=s.convert(S.type),ge=b(S.internalFormat,Be,xe,S.colorSpace,S.isVideoTexture);V(q,S,mt);let ve;const We=S.mipmaps,be=a&&S.isVideoTexture!==!0&&ge!==hv,it=Le.__version===void 0||ne===!0,N=J.dataReady,ce=A(S,ie,mt);if(S.isDepthTexture)ge=t.DEPTH_COMPONENT,a?S.type===si?ge=t.DEPTH_COMPONENT32F:S.type===Pi?ge=t.DEPTH_COMPONENT24:S.type===gr?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:S.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vr&&ge===t.DEPTH_COMPONENT&&S.type!==Bd&&S.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Pi,xe=s.convert(S.type)),S.format===ys&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,S.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=gr,xe=s.convert(S.type))),it&&(be?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,Be,xe,null));else if(S.isDataTexture)if(We.length>0&&mt){be&&it&&n.texStorage2D(t.TEXTURE_2D,ce,ge,We[0].width,We[0].height);for(let B=0,se=We.length;B<se;B++)ve=We[B],be?N&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,Be,xe,ve.data):n.texImage2D(t.TEXTURE_2D,B,ge,ve.width,ve.height,0,Be,xe,ve.data);S.generateMipmaps=!1}else be?(it&&n.texStorage2D(t.TEXTURE_2D,ce,ge,ie.width,ie.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Be,xe,ie.data)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,Be,xe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){be&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ge,We[0].width,We[0].height,ie.depth);for(let B=0,se=We.length;B<se;B++)ve=We[B],S.format!==Nn?Be!==null?be?N&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,ie.depth,Be,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,ge,ve.width,ve.height,ie.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,ie.depth,Be,xe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,ge,ve.width,ve.height,ie.depth,0,Be,xe,ve.data)}else{be&&it&&n.texStorage2D(t.TEXTURE_2D,ce,ge,We[0].width,We[0].height);for(let B=0,se=We.length;B<se;B++)ve=We[B],S.format!==Nn?Be!==null?be?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,Be,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,B,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?N&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,Be,xe,ve.data):n.texImage2D(t.TEXTURE_2D,B,ge,ve.width,ve.height,0,Be,xe,ve.data)}else if(S.isDataArrayTexture)be?(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ge,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Be,xe,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,Be,xe,ie.data);else if(S.isData3DTexture)be?(it&&n.texStorage3D(t.TEXTURE_3D,ce,ge,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Be,xe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,Be,xe,ie.data);else if(S.isFramebufferTexture){if(it)if(be)n.texStorage2D(t.TEXTURE_2D,ce,ge,ie.width,ie.height);else{let B=ie.width,se=ie.height;for(let de=0;de<ce;de++)n.texImage2D(t.TEXTURE_2D,de,ge,B,se,0,Be,xe,null),B>>=1,se>>=1}}else if(We.length>0&&mt){if(be&&it){const B=dt(We[0]);n.texStorage2D(t.TEXTURE_2D,ce,ge,B.width,B.height)}for(let B=0,se=We.length;B<se;B++)ve=We[B],be?N&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,Be,xe,ve):n.texImage2D(t.TEXTURE_2D,B,ge,Be,xe,ve);S.generateMipmaps=!1}else if(be){if(it){const B=dt(ie);n.texStorage2D(t.TEXTURE_2D,ce,ge,B.width,B.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,xe,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,Be,xe,ie);g(S,mt)&&M(q),Le.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,j){if(S.image.length!==6)return;const q=Z(C,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+j);const J=i.get(ne);if(ne.version!==J.__version||q===!0){n.activeTexture(t.TEXTURE0+j);const Le=Ke.getPrimaries(Ke.workingColorSpace),we=S.colorSpace===Ci?null:Ke.getPrimaries(S.colorSpace),ae=S.colorSpace===Ci||Le===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let B=0;B<6;B++)!ue&&!De?ie[B]=p(S.image[B],!1,!0,r.maxCubemapSize):ie[B]=De?S.image[B].image:S.image[B],ie[B]=ze(S,ie[B]);const mt=ie[0],Be=u(mt)||a,xe=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),ve=b(S.internalFormat,xe,ge,S.colorSpace),We=a&&S.isVideoTexture!==!0,be=J.__version===void 0||q===!0,it=ne.dataReady;let N=A(S,mt,Be);V(t.TEXTURE_CUBE_MAP,S,Be);let ce;if(ue){We&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,ve,mt.width,mt.height);for(let B=0;B<6;B++){ce=ie[B].mipmaps;for(let se=0;se<ce.length;se++){const de=ce[se];S.format!==Nn?xe!==null?We?it&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,de.width,de.height,xe,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,ve,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?it&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,de.width,de.height,xe,ge,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,ve,de.width,de.height,0,xe,ge,de.data)}}}else{if(ce=S.mipmaps,We&&be){ce.length>0&&N++;const B=dt(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,ve,B.width,B.height)}for(let B=0;B<6;B++)if(De){We?it&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ie[B].width,ie[B].height,xe,ge,ie[B].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ve,ie[B].width,ie[B].height,0,xe,ge,ie[B].data);for(let se=0;se<ce.length;se++){const Ge=ce[se].image[B].image;We?it&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,Ge.width,Ge.height,xe,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,ve,Ge.width,Ge.height,0,xe,ge,Ge.data)}}else{We?it&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,xe,ge,ie[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ve,xe,ge,ie[B]);for(let se=0;se<ce.length;se++){const de=ce[se];We?it&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,xe,ge,de.image[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,ve,xe,ge,de.image[B])}}}g(S,Be)&&M(t.TEXTURE_CUBE_MAP),J.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function me(C,S,j,q,ne,J){const Le=s.convert(j.format,j.colorSpace),we=s.convert(j.type),ae=b(j.internalFormat,Le,we,j.colorSpace);if(!i.get(S).__hasExternalTextures){const De=Math.max(1,S.width>>J),ie=Math.max(1,S.height>>J);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,J,ae,De,ie,S.depth,0,Le,we,null):n.texImage2D(ne,J,ae,De,ie,0,Le,we,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ne,i.get(j).__webglTexture,0,Te(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ne,i.get(j).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(C,S,j){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||Ve(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===si?q=t.DEPTH_COMPONENT32F:ne.type===Pi&&(q=t.DEPTH_COMPONENT24));const J=Te(S);Ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,q,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,q,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const q=Te(S);j&&Ve(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):Ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const q=S.textures;for(let ne=0;ne<q.length;ne++){const J=q[ne],Le=s.convert(J.format,J.colorSpace),we=s.convert(J.type),ae=b(J.internalFormat,Le,we,J.colorSpace),ue=Te(S);j&&Ve(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ae,S.width,S.height):Ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const q=i.get(S.depthTexture).__webglTexture,ne=Te(S);if(S.depthTexture.format===vr)Ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(S.depthTexture.format===ys)Ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const S=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ye(S.__webglFramebuffer,C)}else if(j){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=t.createRenderbuffer(),pe(S.__webglDepthbuffer[q],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),pe(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(C,S,j){const q=i.get(C);S!==void 0&&me(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Ce(C)}function Ct(C){const S=C.texture,j=i.get(C),q=i.get(S);C.addEventListener("dispose",$);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,Le=ne.length>1,we=u(C)||a;if(Le||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,o.memory.textures++),J){j.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[ae]=[];for(let ue=0;ue<S.mipmaps.length;ue++)j.__webglFramebuffer[ae][ue]=t.createFramebuffer()}else j.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)j.__webglFramebuffer[ae]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Le)if(r.drawBuffers)for(let ae=0,ue=ne.length;ae<ue;ae++){const De=i.get(ne[ae]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ve(C)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ae=0;ae<ne.length;ae++){const ue=ne[ae];j.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[ae]);const De=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),mt=b(ue.internalFormat,De,ie,ue.colorSpace,C.isXRRenderTarget===!0),Be=Te(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,mt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,j.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(j.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),V(t.TEXTURE_CUBE_MAP,S,we);for(let ae=0;ae<6;ae++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)me(j.__webglFramebuffer[ae][ue],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else me(j.__webglFramebuffer[ae],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(S,we)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ae=0,ue=ne.length;ae<ue;ae++){const De=ne[ae],ie=i.get(De);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),V(t.TEXTURE_2D,De,we),me(j.__webglFramebuffer,C,De,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),g(De,we)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,q.__webglTexture),V(ae,S,we),a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)me(j.__webglFramebuffer[ue],C,S,t.COLOR_ATTACHMENT0,ae,ue);else me(j.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,ae,0);g(S,we)&&M(ae),n.unbindTexture()}C.depthBuffer&&Ce(C)}function Se(C){const S=u(C)||a,j=C.textures;for(let q=0,ne=j.length;q<ne;q++){const J=j[q];if(g(J,S)){const Le=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(J).__webglTexture;n.bindTexture(Le,we),M(Le),n.unbindTexture()}}}function ke(C){if(a&&C.samples>0&&Ve(C)===!1){const S=C.textures,j=C.width,q=C.height;let ne=t.COLOR_BUFFER_BIT;const J=[],Le=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(C),ae=S.length>1;if(ae)for(let ue=0;ue<S.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){J.push(t.COLOR_ATTACHMENT0+ue),C.depthBuffer&&J.push(Le);const De=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(De===!1&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ue]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Le]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Le])),ae){const ie=i.get(S[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,j,q,0,0,j,q,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<S.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,we.__webglColorRenderbuffer[ue]);const De=i.get(S[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Te(C){return Math.min(r.maxSamples,C.samples)}function Ve(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ze(C,S){const j=C.colorSpace,q=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Bu||j!==$i&&j!==Ci&&(Ke.getTransfer(j)===tt?a===!1?e.has("EXT_sRGB")===!0&&q===Nn?(C.format=Bu,C.minFilter=qt,C.generateMipmaps=!1):S=gv.sRGBToLinear(S):(q!==Nn||ne!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=Y,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=P,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=F,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ve}function AT(t,e,n){const i=n.isWebGL2;function r(s,o=Ci){let a;const l=Ke.getTransfer(o);if(s===Hi)return t.UNSIGNED_BYTE;if(s===lv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===cv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===iy)return t.BYTE;if(s===ry)return t.SHORT;if(s===Bd)return t.UNSIGNED_SHORT;if(s===av)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===si)return t.FLOAT;if(s===yo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sy)return t.ALPHA;if(s===Nn)return t.RGBA;if(s===oy)return t.LUMINANCE;if(s===ay)return t.LUMINANCE_ALPHA;if(s===vr)return t.DEPTH_COMPONENT;if(s===ys)return t.DEPTH_STENCIL;if(s===Bu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ly)return t.RED;if(s===uv)return t.RED_INTEGER;if(s===cy)return t.RG;if(s===dv)return t.RG_INTEGER;if(s===fv)return t.RGBA_INTEGER;if(s===oc||s===ac||s===lc||s===cc)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vh||s===_h||s===xh||s===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sh||s===Mh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sh)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Mh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eh||s===Th||s===wh||s===Ah||s===Ch||s===Rh||s===bh||s===Ph||s===Lh||s===Dh||s===Nh||s===Ih||s===Uh||s===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Eh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Th)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ah)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ch)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ph)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ih)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uc||s===Oh||s===kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===uc)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uy||s===zh||s===Bh||s===Hh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class CT extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xs extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RT={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new ji({extensions:{fragDepth:!0},vertexShader:bT,fragmentShader:PT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wn(new Cl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class DT extends ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const x=new LT,p=n.getContextAttributes();let u=null,v=null;const g=[],M=[],b=new Xe;let A=null;const w=new yn;w.layers.enable(1),w.viewport=new Pt;const L=new yn;L.layers.enable(2),L.viewport=new Pt;const $=[w,L],y=new CT;y.layers.enable(1),y.layers.enable(2);let R=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=g[V];return Z===void 0&&(Z=new Oc,g[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=g[V];return Z===void 0&&(Z=new Oc,g[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=g[V];return Z===void 0&&(Z=new Oc,g[V]=Z),Z.getHandSpace()};function Q(V){const Z=M.indexOf(V.inputSource);if(Z===-1)return;const le=g[Z];le!==void 0&&(le.update(V.inputSource,V.frame,c||o),le.dispatchEvent({type:V.type,data:V.inputSource}))}function D(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<g.length;V++){const Z=M[V];Z!==null&&(M[V]=null,g[V].disconnect(Z))}R=null,te=null,x.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,v=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",D),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Er(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,le=null,ye=null;p.depth&&(ye=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=p.stencil?ys:vr,le=p.stencil?gr:Pi);const me={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Er(f.textureWidth,f.textureHeight,{format:Nn,type:Hi,depthTexture:new Cv(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const pe=e.properties.get(v);pe.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(V){for(let Z=0;Z<V.removed.length;Z++){const le=V.removed[Z],ye=M.indexOf(le);ye>=0&&(M[ye]=null,g[ye].disconnect(le))}for(let Z=0;Z<V.added.length;Z++){const le=V.added[Z];let ye=M.indexOf(le);if(ye===-1){for(let pe=0;pe<g.length;pe++)if(pe>=M.length){M.push(le),ye=pe;break}else if(M[pe]===null){M[pe]=le,ye=pe;break}if(ye===-1)break}const me=g[ye];me&&me.connect(le)}}const z=new O,X=new O;function P(V,Z,le){z.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const ye=z.distanceTo(X),me=Z.projectionMatrix.elements,pe=le.projectionMatrix.elements,Ye=me[14]/(me[10]-1),Ce=me[14]/(me[10]+1),F=(me[9]+1)/me[5],Ct=(me[9]-1)/me[5],Se=(me[8]-1)/me[0],ke=(pe[8]+1)/pe[0],Te=Ye*Se,Ve=Ye*ke,Fe=ye/(-Se+ke),ze=Fe*-Se;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(Fe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const dt=Ye+Fe,C=Ce+Fe,S=Te-ze,j=Ve+(ye-ze),q=F*Ce/C*dt,ne=Ct*Ce/C*dt;V.projectionMatrix.makePerspective(S,j,q,ne,dt,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function U(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.texture!==null&&(V.near=x.depthNear,V.far=x.depthFar),y.near=L.near=w.near=V.near,y.far=L.far=w.far=V.far,(R!==y.near||te!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,te=y.far,w.near=R,w.far=te,L.near=R,L.far=te,w.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const Z=V.parent,le=y.cameras;U(y,Z);for(let ye=0;ye<le.length;ye++)U(le[ye],Z);le.length===2?P(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),H(V,y,Z)};function H(V,Z,le){le===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Hu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null};let K=null;function re(V,Z){if(d=Z.getViewerPose(c||o),_=Z,d!==null){const le=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ye=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let pe=0;pe<le.length;pe++){const Ye=le[pe];let Ce=null;if(m!==null)Ce=m.getViewport(Ye);else{const Ct=h.getViewSubImage(f,Ye);Ce=Ct.viewport,pe===0&&(e.setRenderTargetTextures(v,Ct.colorTexture,f.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(v))}let F=$[pe];F===void 0&&(F=new yn,F.layers.enable(pe),F.viewport=new Pt,$[pe]=F),F.matrix.fromArray(Ye.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Ye.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),pe===0&&(y.matrix.copy(F.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(F)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")){const pe=h.getDepthInformation(le[0]);pe&&pe.isValid&&pe.texture&&x.init(e,pe,r.renderState)}}for(let le=0;le<g.length;le++){const ye=M[le],me=g[le];ye!==null&&me!==void 0&&me.update(ye,Z,c||o)}x.render(e,y),K&&K(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ee=new Av;Ee.setAnimationLoop(re),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}const ir=new pi,NT=new pt;function IT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Mv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;if(g&&(p.envMap.value=g,ir.copy(M),ir.x*=-1,ir.y*=-1,ir.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),p.envMapRotation.value.setFromMatrix4(NT.makeRotationFromEuler(ir)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*b,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(_(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(v,b);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function d(v){const g=h();v.__bindingPointIndex=g;const M=t.createBuffer(),b=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],M=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=M.length;A<w;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let $=0,y=L.length;$<y;$++){const R=L[$];if(m(R,A,$,b)===!0){const te=R.__offset,Q=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let Y=0;Y<Q.length;Y++){const z=Q[Y],X=x(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,te+D,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,b){const A=v.value,w=g+"_"+M;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const L=b[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return b[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(v){const g=v.uniforms;let M=0;const b=16;for(let w=0,L=g.length;w<L;w++){const $=Array.isArray(g[w])?g[w]:[g[w]];for(let y=0,R=$.length;y<R;y++){const te=$[y],Q=Array.isArray(te.value)?te.value:[te.value];for(let D=0,Y=Q.length;D<Y;D++){const z=Q[D],X=x(z),P=M%b;P!==0&&b-P<X.boundary&&(M+=b-P),te.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=M,M+=X.storage}}}const A=M%b;return A>0&&(M+=b-A),v.__size=M,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Nv{constructor(e={}){const{canvas:n=Ey(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let M=!1,b=0,A=0,w=null,L=-1,$=null;const y=new Pt,R=new Pt;let te=null;const Q=new qe(0);let D=0,Y=n.width,z=n.height,X=1,P=null,U=null;const H=new Pt(0,0,Y,z),K=new Pt(0,0,Y,z);let re=!1;const Ee=new wv;let V=!1,Z=!1,le=null;const ye=new pt,me=new Xe,pe=new O,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return w===null?X:1}let F=i;function Ct(T,I){for(let G=0;G<T.length;G++){const W=T[G],k=n.getContext(W,I);if(k!==null)return k}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zd}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",ce,!1),F===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),F=Ct(I,T),F===null)throw Ct(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,ke,Te,Ve,Fe,ze,dt,C,S,j,q,ne,J,Le,we,ae,ue,De,ie,mt,Be,xe,ge,ve;function We(){Se=new HE(F),ke=new IE(F,Se,e),Se.init(ke),xe=new AT(F,Se,ke),Te=new TT(F,Se,ke),Ve=new WE(F),Fe=new uT,ze=new wT(F,Se,Te,Fe,ke,xe,Ve),dt=new FE(g),C=new BE(g),S=new $y(F,ke),ge=new DE(F,Se,S,ke),j=new GE(F,S,Ve,ge),q=new qE(F,j,S,Ve),ie=new YE(F,ke,ze),ae=new UE(Fe),ne=new cT(g,dt,C,Se,ke,ge,ae),J=new IT(g,Fe),Le=new fT,we=new _T(Se,ke),De=new LE(g,dt,C,Te,q,f,l),ue=new ET(g,q,ke),ve=new UT(F,Ve,ke,Te),mt=new NE(F,Se,Ve,ke),Be=new VE(F,Se,Ve,ke),Ve.programs=ne.programs,g.capabilities=ke,g.extensions=Se,g.properties=Fe,g.renderLists=Le,g.shadowMap=ue,g.state=Te,g.info=Ve}We();const be=new DT(g,F);this.xr=be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(Y,z,!1))},this.getSize=function(T){return T.set(Y,z)},this.setSize=function(T,I,G=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,z=I,n.width=Math.floor(T*X),n.height=Math.floor(I*X),G===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(Y*X,z*X).floor()},this.setDrawingBufferSize=function(T,I,G){Y=T,z=I,X=G,n.width=Math.floor(T*G),n.height=Math.floor(I*G),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(H)},this.setViewport=function(T,I,G,W){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,I,G,W),Te.viewport(y.copy(H).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,I,G,W){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,I,G,W),Te.scissor(R.copy(K).multiplyScalar(X).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){Te.setScissorTest(re=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,I=!0,G=!0){let W=0;if(T){let k=!1;if(w!==null){const fe=w.texture.format;k=fe===fv||fe===dv||fe===uv}if(k){const fe=w.texture.type,_e=fe===Hi||fe===Pi||fe===Bd||fe===gr||fe===lv||fe===cv,Me=De.getClearColor(),Ae=De.getClearAlpha(),Oe=Me.r,Re=Me.g,Pe=Me.b;_e?(m[0]=Oe,m[1]=Re,m[2]=Pe,m[3]=Ae,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Oe,_[1]=Re,_[2]=Pe,_[3]=Ae,F.clearBufferiv(F.COLOR,0,_))}else W|=F.COLOR_BUFFER_BIT}I&&(W|=F.DEPTH_BUFFER_BIT),G&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Le.dispose(),we.dispose(),Fe.dispose(),dt.dispose(),C.dispose(),q.dispose(),ge.dispose(),ve.dispose(),ne.dispose(),be.dispose(),be.removeEventListener("sessionstart",mn),be.removeEventListener("sessionend",Qe),le&&(le.dispose(),le=null),Bt.stop()};function it(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Ve.autoReset,I=ue.enabled,G=ue.autoUpdate,W=ue.needsUpdate,k=ue.type;We(),Ve.autoReset=T,ue.enabled=I,ue.autoUpdate=G,ue.needsUpdate=W,ue.type=k}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function B(T){const I=T.target;I.removeEventListener("dispose",B),se(I)}function se(T){de(T),Fe.remove(T)}function de(T){const I=Fe.get(T).programs;I!==void 0&&(I.forEach(function(G){ne.releaseProgram(G)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,G,W,k,fe){I===null&&(I=Ye);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Me=Fv(T,I,G,W,k);Te.setMaterial(W,_e);let Ae=G.index,Oe=1;if(W.wireframe===!0){if(Ae=j.getWireframeAttribute(G),Ae===void 0)return;Oe=2}const Re=G.drawRange,Pe=G.attributes.position;let ft=Re.start*Oe,sn=(Re.start+Re.count)*Oe;fe!==null&&(ft=Math.max(ft,fe.start*Oe),sn=Math.min(sn,(fe.start+fe.count)*Oe)),Ae!==null?(ft=Math.max(ft,0),sn=Math.min(sn,Ae.count)):Pe!=null&&(ft=Math.max(ft,0),sn=Math.min(sn,Pe.count));const Mt=sn-ft;if(Mt<0||Mt===1/0)return;ge.setup(k,W,Me,G,Ae);let $n,ot=mt;if(Ae!==null&&($n=S.get(Ae),ot=Be,ot.setIndex($n)),k.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*Ce()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(k.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),Te.setLineWidth(Ne*Ce()),k.isLineSegments?ot.setMode(F.LINES):k.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else k.isPoints?ot.setMode(F.POINTS):k.isSprite&&ot.setMode(F.TRIANGLES);if(k.isBatchedMesh)ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ot.renderInstances(ft,Mt,k.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bl=Math.min(G.instanceCount,Ne);ot.renderInstances(ft,Mt,bl)}else ot.render(ft,Mt)};function Ge(T,I,G){T.transparent===!0&&T.side===ri&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Do(T,I,G),T.side=Wi,T.needsUpdate=!0,Do(T,I,G),T.side=ri):Do(T,I,G)}this.compile=function(T,I,G=null){G===null&&(G=T),p=we.get(G),p.init(),v.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(g._useLegacyLights);const W=new Set;return T.traverse(function(k){const fe=k.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const Me=fe[_e];Ge(Me,G,k),W.add(Me)}else Ge(fe,G,k),W.add(fe)}),v.pop(),p=null,W},this.compileAsync=function(T,I,G=null){const W=this.compile(T,I,G);return new Promise(k=>{function fe(){if(W.forEach(function(_e){Fe.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){k(T);return}setTimeout(fe,10)}Se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ze=null;function Rt(T){Ze&&Ze(T)}function mn(){Bt.stop()}function Qe(){Bt.start()}const Bt=new Av;Bt.setAnimationLoop(Rt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(T){Ze=T,be.setAnimationLoop(T),T===null?Bt.stop():Bt.start()},be.addEventListener("sessionstart",mn),be.addEventListener("sessionend",Qe),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(I),I=be.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,I,w),p=we.get(T,v.length),p.init(),v.push(p),ye.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ee.setFromProjectionMatrix(ye),Z=this.localClippingEnabled,V=ae.init(this.clippingPlanes,Z),x=Le.get(T,u.length),x.init(),u.push(x),On(T,I,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(P,U),this.info.render.frame++,V===!0&&ae.beginShadows();const G=p.state.shadowsArray;if(ue.render(G,T,I),V===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1)&&De.render(x,T),p.setupLights(g._useLegacyLights),I.isArrayCamera){const W=I.cameras;for(let k=0,fe=W.length;k<fe;k++){const _e=W[k];Yd(x,T,_e,_e.viewport)}}else Yd(x,T,I);w!==null&&(ze.updateMultisampleRenderTarget(w),ze.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,I),ge.resetDefaultState(),L=-1,$=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function On(T,I,G,W){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ee.intersectsSprite(T)){W&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);const _e=q.update(T),Me=T.material;Me.visible&&x.push(T,_e,Me,G,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ee.intersectsObject(T))){const _e=q.update(T),Me=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),pe.copy(_e.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(Me)){const Ae=_e.groups;for(let Oe=0,Re=Ae.length;Oe<Re;Oe++){const Pe=Ae[Oe],ft=Me[Pe.materialIndex];ft&&ft.visible&&x.push(T,_e,ft,G,pe.z,Pe)}}else Me.visible&&x.push(T,_e,Me,G,pe.z,null)}}const fe=T.children;for(let _e=0,Me=fe.length;_e<Me;_e++)On(fe[_e],I,G,W)}function Yd(T,I,G,W){const k=T.opaque,fe=T.transmissive,_e=T.transparent;p.setupLightsView(G),V===!0&&ae.setGlobalState(g.clippingPlanes,G),fe.length>0&&Uv(k,fe,I,G),W&&Te.viewport(y.copy(W)),k.length>0&&Lo(k,I,G),fe.length>0&&Lo(fe,I,G),_e.length>0&&Lo(_e,I,G),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Uv(T,I,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const fe=ke.isWebGL2;le===null&&(le=new Er(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?yo:Hi,minFilter:hr,samples:fe?4:0})),g.getDrawingBufferSize(me),fe?le.setSize(me.x,me.y):le.setSize(Gu(me.x),Gu(me.y));const _e=g.getRenderTarget();g.setRenderTarget(le),g.getClearColor(Q),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=Bi,Lo(T,G,W),ze.updateMultisampleRenderTarget(le),ze.updateRenderTargetMipmap(le);let Ae=!1;for(let Oe=0,Re=I.length;Oe<Re;Oe++){const Pe=I[Oe],ft=Pe.object,sn=Pe.geometry,Mt=Pe.material,$n=Pe.group;if(Mt.side===ri&&ft.layers.test(W.layers)){const ot=Mt.side;Mt.side=tn,Mt.needsUpdate=!0,qd(ft,G,W,sn,Mt,$n),Mt.side=ot,Mt.needsUpdate=!0,Ae=!0}}Ae===!0&&(ze.updateMultisampleRenderTarget(le),ze.updateRenderTargetMipmap(le)),g.setRenderTarget(_e),g.setClearColor(Q,D),g.toneMapping=Me}function Lo(T,I,G){const W=I.isScene===!0?I.overrideMaterial:null;for(let k=0,fe=T.length;k<fe;k++){const _e=T[k],Me=_e.object,Ae=_e.geometry,Oe=W===null?_e.material:W,Re=_e.group;Me.layers.test(G.layers)&&qd(Me,I,G,Ae,Oe,Re)}}function qd(T,I,G,W,k,fe){T.onBeforeRender(g,I,G,W,k,fe),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(g,I,G,W,T,fe),k.transparent===!0&&k.side===ri&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,g.renderBufferDirect(G,I,W,k,T,fe),k.side=Wi,k.needsUpdate=!0,g.renderBufferDirect(G,I,W,k,T,fe),k.side=ri):g.renderBufferDirect(G,I,W,k,T,fe),T.onAfterRender(g,I,G,W,k,fe)}function Do(T,I,G){I.isScene!==!0&&(I=Ye);const W=Fe.get(T),k=p.state.lights,fe=p.state.shadowsArray,_e=k.state.version,Me=ne.getParameters(T,k.state,fe,I,G),Ae=ne.getProgramCacheKey(Me);let Oe=W.programs;W.environment=T.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(T.isMeshStandardMaterial?C:dt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",B),Oe=new Map,W.programs=Oe);let Re=Oe.get(Ae);if(Re!==void 0){if(W.currentProgram===Re&&W.lightsStateVersion===_e)return Kd(T,Me),Re}else Me.uniforms=ne.getUniforms(T),T.onBuild(G,Me,g),T.onBeforeCompile(Me,g),Re=ne.acquireProgram(Me,Ae),Oe.set(Ae,Re),W.uniforms=Me.uniforms;const Pe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ae.uniform),Kd(T,Me),W.needsLights=kv(T),W.lightsStateVersion=_e,W.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Re,W.uniformsList=null,Re}function $d(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Pa.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Kd(T,I){const G=Fe.get(T);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Fv(T,I,G,W,k){I.isScene!==!0&&(I=Ye),ze.resetTextureUnits();const fe=I.fog,_e=W.isMeshStandardMaterial?I.environment:null,Me=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:$i,Ae=(W.isMeshStandardMaterial?C:dt).get(W.envMap||_e),Oe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!G.morphAttributes.position,ft=!!G.morphAttributes.normal,sn=!!G.morphAttributes.color;let Mt=Bi;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Mt=g.toneMapping);const $n=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=$n!==void 0?$n.length:0,Ne=Fe.get(W),bl=p.state.lights;if(V===!0&&(Z===!0||T!==$)){const gn=T===$&&W.id===L;ae.setState(W,T,gn)}let rt=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==bl.state.version||Ne.outputColorSpace!==Me||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Ae||W.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ae.numPlanes||Ne.numIntersection!==ae.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==Re||Ne.morphTargets!==Pe||Ne.morphNormals!==ft||Ne.morphColors!==sn||Ne.toneMapping!==Mt||ke.isWebGL2===!0&&Ne.morphTargetsCount!==ot)&&(rt=!0):(rt=!0,Ne.__version=W.version);let Ki=Ne.currentProgram;rt===!0&&(Ki=Do(W,I,k));let Zd=!1,Cs=!1,Pl=!1;const Nt=Ki.getUniforms(),Zi=Ne.uniforms;if(Te.useProgram(Ki.program)&&(Zd=!0,Cs=!0,Pl=!0),W.id!==L&&(L=W.id,Cs=!0),Zd||$!==T){Nt.setValue(F,"projectionMatrix",T.projectionMatrix),Nt.setValue(F,"viewMatrix",T.matrixWorldInverse);const gn=Nt.map.cameraPosition;gn!==void 0&&gn.setValue(F,pe.setFromMatrixPosition(T.matrixWorld)),ke.logarithmicDepthBuffer&&Nt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Nt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Cs=!0,Pl=!0)}if(k.isSkinnedMesh){Nt.setOptional(F,k,"bindMatrix"),Nt.setOptional(F,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(ke.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Nt.setValue(F,"boneTexture",gn.boneTexture,ze)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Nt.setOptional(F,k,"batchingTexture"),Nt.setValue(F,"batchingTexture",k._matricesTexture,ze));const Ll=G.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0&&ke.isWebGL2===!0)&&ie.update(k,G,Ki),(Cs||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,Nt.setValue(F,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Zi.envMap.value=Ae,Zi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Cs&&(Nt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ne.needsLights&&Ov(Zi,Pl),fe&&W.fog===!0&&J.refreshFogUniforms(Zi,fe),J.refreshMaterialUniforms(Zi,W,X,z,le),Pa.upload(F,$d(Ne),Zi,ze)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pa.upload(F,$d(Ne),Zi,ze),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Nt.setValue(F,"center",k.center),Nt.setValue(F,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(F,"normalMatrix",k.normalMatrix),Nt.setValue(F,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gn=W.uniformsGroups;for(let Dl=0,zv=gn.length;Dl<zv;Dl++)if(ke.isWebGL2){const Qd=gn[Dl];ve.update(Qd,Ki),ve.bind(Qd,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function Ov(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function kv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,I,G){Fe.get(T.texture).__webglTexture=I,Fe.get(T.depthTexture).__webglTexture=G;const W=Fe.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const G=Fe.get(T);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,G=0){w=T,b=I,A=G;let W=!0,k=null,fe=!1,_e=!1;if(T){const Ae=Fe.get(T);Ae.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Ae.__webglFramebuffer===void 0?ze.setupRenderTarget(T):Ae.__hasExternalTextures&&ze.rebindTextures(T,Fe.get(T.texture).__webglTexture,Fe.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Re=Fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?k=Re[I][G]:k=Re[I],fe=!0):ke.isWebGL2&&T.samples>0&&ze.useMultisampledRTT(T)===!1?k=Fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[G]:k=Re,y.copy(T.viewport),R.copy(T.scissor),te=T.scissorTest}else y.copy(H).multiplyScalar(X).floor(),R.copy(K).multiplyScalar(X).floor(),te=re;if(Te.bindFramebuffer(F.FRAMEBUFFER,k)&&ke.drawBuffers&&W&&Te.drawBuffers(T,k),Te.viewport(y),Te.scissor(R),Te.setScissorTest(te),fe){const Ae=Fe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,G)}else if(_e){const Ae=Fe.get(T.texture),Oe=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Oe)}L=-1},this.readRenderTargetPixels=function(T,I,G,W,k,fe,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Te.bindFramebuffer(F.FRAMEBUFFER,Me);try{const Ae=T.texture,Oe=Ae.format,Re=Ae.type;if(Oe!==Nn&&xe.convert(Oe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===yo&&(Se.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Re!==Hi&&xe.convert(Re)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===si&&(ke.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-W&&G>=0&&G<=T.height-k&&F.readPixels(I,G,W,k,xe.convert(Oe),xe.convert(Re),fe)}finally{const Ae=w!==null?Fe.get(w).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(T,I,G=0){const W=Math.pow(2,-G),k=Math.floor(I.image.width*W),fe=Math.floor(I.image.height*W);ze.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,T.x,T.y,k,fe),Te.unbindTexture()},this.copyTextureToTexture=function(T,I,G,W=0){const k=I.image.width,fe=I.image.height,_e=xe.convert(G.format),Me=xe.convert(G.type);ze.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,T.x,T.y,k,fe,_e,Me,I.image.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,_e,I.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,T.x,T.y,_e,Me,I.image),W===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,I,G,W,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=Math.round(T.max.x-T.min.x),_e=Math.round(T.max.y-T.min.y),Me=T.max.z-T.min.z+1,Ae=xe.convert(W.format),Oe=xe.convert(W.type);let Re;if(W.isData3DTexture)ze.setTexture3D(W,0),Re=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)ze.setTexture2DArray(W,0),Re=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Pe=F.getParameter(F.UNPACK_ROW_LENGTH),ft=F.getParameter(F.UNPACK_IMAGE_HEIGHT),sn=F.getParameter(F.UNPACK_SKIP_PIXELS),Mt=F.getParameter(F.UNPACK_SKIP_ROWS),$n=F.getParameter(F.UNPACK_SKIP_IMAGES),ot=G.isCompressedTexture?G.mipmaps[k]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Re,k,I.x,I.y,I.z,fe,_e,Me,Ae,Oe,ot.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Re,k,I.x,I.y,I.z,fe,_e,Me,Ae,ot.data):F.texSubImage3D(Re,k,I.x,I.y,I.z,fe,_e,Me,Ae,Oe,ot),F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),F.pixelStorei(F.UNPACK_SKIP_PIXELS,sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$n),k===0&&W.generateMipmaps&&F.generateMipmap(Re),Te.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,Te.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hd?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===wl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FT extends Nv{}FT.prototype.isWebGL1Renderer=!0;class OT extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Iv extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dp=new O,Np=new O,Ip=new pt,kc=new Gd,va=new Al;class kT extends rn{constructor(e=new qn,n=new Iv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Dp.fromBufferAttribute(n,r-1),Np.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Dp.distanceTo(Np);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;Ip.copy(r).invert(),kc.copy(e.ray).applyMatrix4(Ip);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,d=new O,h=new O,f=new O,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=u,M=v-1;g<M;g+=m){const b=_.getX(g),A=_.getX(g+1);if(c.fromBufferAttribute(p,b),d.fromBufferAttribute(p,A),kc.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||n.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let g=u,M=v-1;g<M;g+=m){if(c.fromBufferAttribute(p,g),d.fromBufferAttribute(p,g+1),kc.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||n.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Up=new O,Fp=new O;class zT extends kT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Up.fromBufferAttribute(n,r),Fp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Up.distanceTo(Fp);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xd extends qn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new O,f=new O,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const A=b/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(A+M,1-g),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=d[u][v+1],M=d[u][v],b=d[u+1][v],A=d[u+1][v+1];(u!==0||o>0)&&m.push(g,M,A),(u!==i-1||l<Math.PI)&&m.push(M,b,A)}this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class BT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Op(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Op();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Op(){return(typeof performance>"u"?Date:performance).now()}const kp=new pt;class HT{constructor(e,n,i=0,r=1/0){this.ray=new Gd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kp),this}intersectObject(e,n=!0,i=[]){return Wu(e,this,i,n),i.sort(zp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wu(e[r],this,i,n);return i.sort(zp),i}}function zp(t,e){return t.distance-e.distance}function Wu(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Wu(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);const zc=[{id:"fsm",label:"17-State FSM",category:"distributed",size:1.4,desc:"Deterministic state machine with CAS concurrency & zero double-debit",metric:"17 Transitions"},{id:"kafka",label:"Apache Kafka",category:"distributed",size:1.3,desc:"Event-driven streaming for terminal wallet debits & async workflows",metric:"10K+ msg/mo"},{id:"circuit_breaker",label:"Circuit Breaker",category:"distributed",size:1.2,desc:"Automated partner rail health breach detection & dynamic failover",metric:"99.9% Uptime"},{id:"grpc",label:"gRPC & Protobuf",category:"distributed",size:1.1,desc:"Strict API contract freezes & cross-service RPC communication",metric:"Sub-ms RPC"},{id:"idempotency",label:"Idempotency & Outbox",category:"distributed",size:1.2,desc:"Transactional outbox pattern guaranteeing zero orphaned locks",metric:"Zero Loss"},{id:"go",label:"Go (Golang)",category:"backend",size:1.4,desc:"High-throughput microservices and concurrent payout pipelines",metric:"Core Stack"},{id:"rails",label:"Ruby on Rails",category:"backend",size:1.3,desc:"Core business engines, API gateways, and account normalization",metric:"Production"},{id:"nodejs",label:"Node.js",category:"backend",size:1.2,desc:"Support platforms, profile APIs, and MCP automation tooling",metric:"Microservices"},{id:"python",label:"Python",category:"backend",size:1.1,desc:"NLP pipelines (spaCy/NLTK) & automated document parsing",metric:"92% F1"},{id:"mcp",label:"Model Context Protocol",category:"backend",size:1.2,desc:"Agentic AI tool-calling infrastructure for on-ramp & off-ramp flows",metric:"10+ Flows"},{id:"postgres",label:"PostgreSQL",category:"data",size:1.3,desc:"Relational data modeling, ACID transactions, and query optimization",metric:"Primary DB"},{id:"redis",label:"Redis",category:"data",size:1.4,desc:"Distributed caching, session locking, and real-time health states",metric:"<5ms Cache"},{id:"elasticsearch",label:"Elasticsearch",category:"data",size:1.1,desc:"Optimized search queries for high-volume entity indexing",metric:"-50% Latency"},{id:"scale_p95",label:"Sub-200ms P95",category:"impact",size:1.5,desc:"Consistently optimized API latency with Datadog & Grafana telemetry",metric:"P95 < 200ms"},{id:"scale_ops",label:"16K+ Ops/mo Automated",category:"impact",size:1.4,desc:"Streamlined profile verification workflows reducing operational cost by 40%",metric:"40% Savings"},{id:"scale_queries",label:"10K+ Monthly Queries",category:"impact",size:1.3,desc:"High-availability customer support & payment platform processing scale",metric:"99.9% SLA"},{id:"iit_ropar",label:"IIT Ropar (B.Tech)",category:"honors",size:1.3,desc:"Computer Science coursework & strong engineering foundations",metric:"2018–2022"},{id:"whale_award",label:"Whale of the Quarter",category:"honors",size:1.4,desc:"CoinDCX top engineering & leadership recognition",metric:"Q2 2024"}],GT=[{id:"all",label:"Full Engineering DNA",color:"#818cf8"},{id:"distributed",label:"Distributed Systems",color:"#6366f1"},{id:"backend",label:"Backend & Languages",color:"#38bdf8"},{id:"data",label:"Databases & Caching",color:"#06b6d4"},{id:"impact",label:"Production Scale & Impact",color:"#10b981"},{id:"honors",label:"Honors & Education",color:"#f59e0b"}],VT=()=>{const t=wt.useRef(null),[e,n]=wt.useState("all"),[i,r]=wt.useState(zc[0]),[s,o]=wt.useState(null),a=wt.useRef(e);wt.useEffect(()=>{a.current=e},[e]),wt.useEffect(()=>{const c=t.current;if(!c)return;const d=c.clientWidth,h=c.clientHeight||460,f=new OT,m=new yn(48,d/h,.1,1e3);m.position.z=4.2;const _=new Nv({antialias:!0,alpha:!0});_.setSize(d,h),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(_.domElement);const x=new Xs;f.add(x);const p=[],u=zc.length;zc.forEach((z,X)=>{const P=Math.acos(-1+2*X/u),U=Math.sqrt(u*Math.PI)*P,H=1.45,K=H*Math.cos(U)*Math.sin(P),re=H*Math.sin(U)*Math.sin(P),Ee=H*Math.cos(P),Z={distributed:6514417,backend:3718648,data:440020,impact:1096065,honors:16096779}[z.category]||8490232,le=new Xd(.06*z.size,16,16),ye=new Wd({color:Z,transparent:!0,opacity:.9}),me=new Wn(le,ye);me.position.set(K,re,Ee),me.userData={...z,originalColor:Z},x.add(me),p.push(me)});const v=new Iv({color:6514417,transparent:!0,opacity:.25}),g=new qn,M=[];for(let z=0;z<p.length;z++)for(let X=z+1;X<p.length;X++){const P=p[z].position,U=p[X].position;(P.distanceTo(U)<1.3||p[z].userData.category===p[X].userData.category)&&(M.push(P.x,P.y,P.z),M.push(U.x,U.y,U.z))}g.setAttribute("position",new dn(M,3));const b=new zT(g,v);x.add(b);const A=new HT,w=new Xe;let L=0,$=0;const y=z=>{const X=c.getBoundingClientRect();w.x=(z.clientX-X.left)/X.width*2-1,w.y=-((z.clientY-X.top)/X.height*2-1),$=w.x*.5,L=-w.y*.5,A.setFromCamera(w,m);const P=A.intersectObjects(p);if(P.length>0){const U=P[0].object.userData;o(U),c.style.cursor="pointer"}else o(null),c.style.cursor="grab"},R=()=>{A.setFromCamera(w,m);const z=A.intersectObjects(p);z.length>0&&r(z[0].object.userData)};c.addEventListener("mousemove",y),c.addEventListener("click",R);const te=()=>{if(!c)return;const z=c.clientWidth,X=c.clientHeight||460;m.aspect=z/X,m.updateProjectionMatrix(),_.setSize(z,X)};window.addEventListener("resize",te);let Q,D=new BT;const Y=()=>{Q=requestAnimationFrame(Y);const z=D.getElapsedTime();x.rotation.y=z*.12+$,x.rotation.x=Math.sin(z*.08)*.1+L;const X=a.current;p.forEach(P=>{const U=X==="all"||P.userData.category===X;P.material.opacity=U?.95:.2,P.scale.setScalar(U?1:.6)}),_.render(f,m)};return Y(),()=>{window.removeEventListener("resize",te),c.removeEventListener("mousemove",y),c.removeEventListener("click",R),cancelAnimationFrame(Q),c.contains(_.domElement)&&c.removeChild(_.domElement),f.clear(),_.dispose()}},[]);const l=s||i;return E.jsxs("section",{id:"portrait",className:"section",style:{padding:"4.5rem 0",position:"relative"},children:[E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"section-header",style:{marginBottom:"2.5rem"},children:[E.jsxs("span",{className:"section-tag",children:[E.jsx(Jg,{size:14}),"Engineering Topology"]}),E.jsxs("h2",{className:"section-title",children:["Interactive ",E.jsx("span",{className:"gradient-text-accent",children:"Skills & Impact Constellation"})]}),E.jsx("p",{className:"section-subtitle",children:"An interactive 3D map of my core engineering competencies, production scale milestones, and backend architectures. Click or hover any node to inspect details."})]}),E.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.5rem",marginBottom:"2rem",flexWrap:"wrap"},children:GT.map(c=>E.jsx("button",{onClick:()=>n(c.id),style:{padding:"0.45rem 1rem",borderRadius:"var(--radius-full)",fontSize:"0.82rem",fontWeight:600,cursor:"pointer",border:e===c.id?"1px solid var(--border-accent)":"1px solid var(--border-subtle)",background:e===c.id?"var(--accent-primary-soft)":"rgba(255, 255, 255, 0.02)",color:e===c.id?"#ffffff":"var(--text-secondary)",transition:"all var(--transition-fast)"},children:c.label},c.id))}),E.jsxs("div",{className:"glass-card",style:{padding:"1.75rem",border:"1px solid var(--border-subtle)",display:"grid",gridTemplateColumns:"minmax(300px, 1.2fr) minmax(320px, 1fr)",gap:"2rem",alignItems:"center"},className:"constellation-grid",children:[E.jsxs("div",{style:{position:"relative"},children:[E.jsx("div",{ref:t,style:{width:"100%",height:"420px",position:"relative"}}),E.jsx("div",{style:{position:"absolute",bottom:"10px",left:"10px",fontSize:"0.74rem",color:"var(--text-muted)"},children:"✦ Drag or move cursor to rotate constellation · Click nodes to inspect"})]}),E.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[E.jsx("span",{className:"badge badge-accent mono",style:{textTransform:"uppercase",fontSize:"0.75rem"},children:l.category}),E.jsx("span",{className:"badge badge-emerald mono",style:{fontSize:"0.78rem"},children:l.metric})]}),E.jsxs("div",{children:[E.jsx("h3",{style:{fontSize:"1.6rem",color:"var(--text-primary)",marginBottom:"0.4rem"},children:l.label}),E.jsx("p",{style:{fontSize:"0.96rem",color:"var(--text-secondary)",lineHeight:1.6},children:l.desc})]}),E.jsxs("div",{style:{padding:"1rem",background:"rgba(0, 0, 0, 0.25)",borderRadius:"8px",border:"1px solid var(--border-subtle)"},children:[E.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.6rem"},children:"Verified Production Context"}),E.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.45rem",fontSize:"0.86rem",color:"var(--text-secondary)"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[E.jsx("span",{style:{color:"var(--accent-emerald)"},children:"✓"}),E.jsx("span",{children:"Integrated in High-Throughput Microservices"})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[E.jsx("span",{style:{color:"var(--accent-cyan)"},children:"✓"}),E.jsx("span",{children:"Sub-200ms P95 & High Availability SLA"})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[E.jsx("span",{style:{color:"var(--accent-primary)"},children:"✓"}),E.jsx("span",{children:"CoinDCX & IntelleWings Production Verified"})]})]})]}),E.jsx("div",{children:E.jsx("a",{href:"#experience",className:"btn btn-secondary",style:{width:"100%",fontSize:"0.85rem"},children:"View in Experience Timeline →"})})]})]})]}),E.jsx("style",{children:`
        @media (max-width: 860px) {
          .constellation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})},WT=({onOpenArchitectureModal:t})=>{const e=[{title:"Distributed Payout & Banking Gateway",category:"Distributed Systems · Payment Infrastructure",icon:Qg,badge:"Core Architecture",badgeClass:"badge-accent",description:"Architected high-throughput payment orchestration platform consolidating multi-bank payout pipelines with partner-specific cryptography, deterministic state machines, and zero double-credit risk.",highlights:["Consolidated 4 legacy runtime services into a unified, event-driven microservices architecture","Implemented 17-transition deterministic state machine with CAS concurrency and transactional outbox pattern","Direct cryptographic bank wire integration across major banking rails with automated status reconciliation","Decoupled terminal wallet lifecycle (lock, debit, unlock, revert) through distributed event streaming"],stack:["Go","gRPC","Ruby on Rails","Apache Kafka","Redis","PostgreSQL","Docker"]},{title:"Automated Partner Health & Circuit Breaker Engine",category:"Fault Tolerance · High Availability",icon:ev,badge:"Resilience",badgeClass:"badge-emerald",description:"Engineered real-time reactive health telemetry and automated circuit breakers that detect degraded banking rails and dynamically redistribute transaction volume.",highlights:["Automated health anomaly detection based on terminal payout telemetry and rolling error rates","Real-time traffic exclusion for degraded partner rails without requiring manual configuration deployments","Dramatically reduced customer-facing payout drop-offs during banking partner maintenance windows"],stack:["Ruby on Rails","Redis","Datadog Telemetry","Circuit Breakers","Grafana"]},{title:"3-Tier Deposit Attribution & Normalization Engine",category:"Financial Correctness · Data Integrity",icon:px,badge:"Data Integrity",badgeClass:"badge-cyan",description:"Architected multi-tier bidirectional account normalization and virtual account anchor resolution algorithms to eliminate cross-user collision defects.",highlights:["Anchor-based detection guaranteeing incoming deposits resolve strictly against active beneficiary accounts","3-tier normalization engine (exact match, leading-zero strip, non-digit sanitization) across banking partners","Zero false auto-refund regressions with structured real-time telemetry validation on every transaction"],stack:["Ruby on Rails","PostgreSQL","Datadog Telemetry","Algorithms"]},{title:"Agentic Workflow & Rule Engine Infrastructure",category:"Automation · Intelligent Workflows",icon:Nu,badge:"Automation",badgeClass:"badge-accent",description:"Implemented tool-calling infrastructure supporting 10+ business workflows for payment operations, user lifecycle management, and rule-based automation.",highlights:["Standardized tool-calling schemas and execution sandboxes for automated operations","Integrated with live banking state queries, user verification, and automated dispute resolution","Reduced manual engineering intervention and accelerated transaction resolution times"],stack:["Node.js","Model Context Protocol (MCP)","Microservices","Redis","Event Streams"]}];return E.jsx("section",{id:"systems",className:"section",style:{backgroundColor:"rgba(14, 20, 34, 0.4)"},children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"section-header",children:[E.jsxs("span",{className:"section-tag",children:[E.jsx(mx,{size:14}),"Engineering Projects"]}),E.jsxs("h2",{className:"section-title",children:["Featured ",E.jsx("span",{className:"gradient-text-accent",children:"Distributed Systems"})]}),E.jsx("p",{className:"section-subtitle",children:"Core financial platforms, mission-critical banking connectors, and high-concurrency microservices engineered for high reliability and financial correctness."})]}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"1.75rem"},children:e.map((n,i)=>{const r=n.icon;return E.jsxs("div",{className:"glass-card",style:{padding:"2rem",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[E.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"var(--accent-primary-soft)",border:"1px solid var(--border-accent)",display:"flex",alignItems:"center",justifyContent:"center",color:"#a5b4fc"},children:E.jsx(r,{size:20})}),E.jsx("span",{className:`badge ${n.badgeClass}`,children:n.badge})]}),E.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"0.35rem"},children:n.category}),E.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.75rem",color:"var(--text-primary)"},children:n.title}),E.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",marginBottom:"1.15rem",lineHeight:1.6},children:n.description}),E.jsxs("div",{style:{marginBottom:"1.25rem"},children:[E.jsx("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"#e2e8f0",marginBottom:"0.5rem"},children:"Key Deliverables:"}),E.jsx("ul",{style:{paddingLeft:"1.1rem",fontSize:"0.84rem",color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:"0.4rem"},children:n.highlights.map((s,o)=>E.jsx("li",{children:s},o))})]})]}),E.jsx("div",{children:E.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem",paddingTop:"1rem",borderTop:"1px solid var(--border-subtle)"},children:n.stack.map((s,o)=>E.jsx("span",{className:"badge mono",style:{fontSize:"0.74rem"},children:s},o))})})]},i)})})]})})},jT=()=>{const[t,e]=wt.useState("coindcx"),n=[{id:"coindcx",role:"Senior Software Engineer",company:"CoinDCX",location:"Bangalore, India",period:"June 2022 – Present",badge:"Current Role",badgeClass:"badge-emerald",summary:"Leading backend architecture and distributed payments infrastructure, architecting high-throughput financial payout engines, automated banking health failover, event-driven microservices, and AI-driven automation workflows.",bullets:["Spearheaded the architectural overhaul and consolidation of the fiat withdrawal pipeline into a unified, event-driven microservices ecosystem with a 17-transition deterministic state machine and Kafka-driven terminal wallet debit/unlock operations.","Designed deterministic payout state machines with zero double-credit risk (strict poll-only isolation, outbox pattern, CAS concurrency), eliminating orphaned locked balances.","Built automated bank partner health detection and circuit-breaker routing, dynamically excluding degraded rails and minimizing customer payout drop-offs.","Designed and deployed a microservices-based customer support platform processing 10,000+ monthly queries with 99.9% uptime, leveraging Apache Kafka for event-driven workflows and Redis for low-latency caching.","Engineered a 3-tier bidirectional account normalization and deposit attribution engine, resolving critical deposit misattribution RCA defects and preventing false auto-refunds.","Developed automated profile management APIs that eliminated 16,000 manual operations monthly, reducing operational costs by 40% through streamlined verification workflows.","Built high-performance APIs with sub-200ms P95 latency, implementing comprehensive Datadog and Grafana telemetry for proactive incident response and SLO compliance.","Implemented Model Context Protocol (MCP) infrastructure for 10+ business flows for payments on-ramps, off-ramps, and rule-engine-based chatbot functionalities.","Led cross-functional collaboration with product, design, QA, and external banking vendors, accelerating deployment velocity by 60% while maintaining high code quality standards."],skills:["Go","gRPC","Ruby on Rails","Node.js","Apache Kafka","Redis","PostgreSQL","AWS","Datadog","Docker"]},{id:"intellewings",role:"Data Science Engineer Intern",company:"IntelleWings",location:"Remote",period:"May 2021 – November 2021",badge:"Internship",badgeClass:"badge-accent",summary:"Engineered production-grade Natural Language Processing (NLP) pipelines, distributed web scrapers, and computer vision recognition modules for anti-money laundering (AML) intelligence.",bullets:["Built production-ready Named Entity Recognition (NER) pipeline achieving 92% F1-score using spaCy and NLTK, deployed as REST APIs serving 10,000+ daily requests with sub-150ms latency.","Developed distributed web scraping infrastructure processing 50,000+ documents daily using Beautiful Soup for parallel data extraction from multiple online sources.","Implemented YOLO-based face recognition module and optimized Elasticsearch queries, reducing search latency by 50% and improving ML pipeline accuracy by 25%.","Conducted comprehensive load testing with JMeter and designed multi-tier caching strategies that improved API throughput by 3x under peak concurrent load."],skills:["Python","spaCy","NLTK","Elasticsearch","Beautiful Soup","OpenCV","JMeter","REST APIs"]}];return E.jsx("section",{id:"experience",className:"section",children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"section-header",children:[E.jsxs("span",{className:"section-tag",children:[E.jsx(Jg,{size:14}),"Career History"]}),E.jsxs("h2",{className:"section-title",children:["Professional ",E.jsx("span",{className:"gradient-text-accent",children:"Experience"})]}),E.jsx("p",{className:"section-subtitle",children:"Demonstrated track record of delivering resilient backend systems, payment infrastructure, and automation at high scale."})]}),E.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.6rem",marginBottom:"2.25rem",flexWrap:"wrap"},children:n.map(i=>E.jsxs("button",{onClick:()=>e(i.id),style:{padding:"0.55rem 1.2rem",borderRadius:"var(--radius-md)",fontSize:"0.88rem",fontWeight:600,cursor:"pointer",border:t===i.id?"1px solid var(--border-accent)":"1px solid var(--border-subtle)",background:t===i.id?"var(--accent-primary-soft)":"rgba(255, 255, 255, 0.02)",color:t===i.id?"#ffffff":"var(--text-secondary)",transition:"all var(--transition-fast)"},children:[i.company," — ",i.role]},i.id))}),n.filter(i=>i.id===t).map(i=>E.jsxs("div",{className:"glass-card",style:{padding:"2.25rem"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem",marginBottom:"1.25rem"},children:[E.jsxs("div",{children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem",marginBottom:"0.25rem"},children:[E.jsx("h3",{style:{fontSize:"1.45rem",color:"var(--text-primary)"},children:i.role}),E.jsx("span",{className:`badge ${i.badgeClass}`,children:i.badge})]}),E.jsxs("div",{style:{fontSize:"1.05rem",color:"var(--accent-cyan)",fontWeight:600},children:[i.company," ",E.jsxs("span",{style:{color:"var(--text-muted)",fontWeight:400},children:["· ",i.location]})]})]}),E.jsx("div",{className:"mono",style:{fontSize:"0.85rem",color:"var(--text-secondary)",background:"rgba(255, 255, 255, 0.04)",padding:"0.35rem 0.75rem",borderRadius:"6px",border:"1px solid var(--border-subtle)"},children:i.period})]}),E.jsx("p",{style:{fontSize:"0.96rem",color:"var(--text-secondary)",marginBottom:"1.5rem",lineHeight:1.6},children:i.summary}),E.jsxs("div",{style:{marginBottom:"1.75rem"},children:[E.jsx("h4",{style:{fontSize:"0.88rem",textTransform:"uppercase",letterSpacing:"0.04em",color:"#e2e8f0",marginBottom:"0.85rem"},children:"Impact & Key Contributions"}),E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:i.bullets.map((r,s)=>E.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.65rem"},children:[E.jsx("div",{style:{color:"var(--accent-primary)",marginTop:"0.2rem",flexShrink:0},children:E.jsx(gx,{size:16})}),E.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",lineHeight:1.6,margin:0},children:r})]},s))})]}),E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"0.5rem"},children:"Technologies & Frameworks"}),E.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.45rem"},children:i.skills.map((r,s)=>E.jsx("span",{className:"badge badge-accent mono",style:{fontSize:"0.78rem",padding:"0.25rem 0.65rem"},children:r},s))})]})]},i.id))]})})},XT=()=>{const[t,e]=wt.useState("all"),n=[{id:"all",label:"All Expertise",icon:tv},{id:"distributed",label:"Distributed Systems",icon:Qg},{id:"backend",label:"Languages & Frameworks",icon:nv},{id:"data",label:"Databases & Caching",icon:vx},{id:"devops",label:"Cloud & Infrastructure",icon:Nu},{id:"reliability",label:"Observability & SLOs",icon:ev}],i=[{category:"distributed",title:"Distributed Systems & Architecture",skills:["Finite State Machines (FSM)","Event-Driven Architecture","Compare-And-Swap (CAS) Concurrency","Transactional Outbox Pattern","Circuit Breakers & Health Routing","Microservices Orchestration","gRPC & Protocol Buffers","Idempotency & Deduplication","Distributed Caching & Locking"]},{category:"backend",title:"Languages & Core Frameworks",skills:["Go (Golang)","TypeScript / JavaScript","Ruby on Rails","Python","C++","Node.js (Express)","Gin & gRPC Frameworks","RESTful API Design","Model Context Protocol (MCP)"]},{category:"data",title:"Databases, Queues & Storage",skills:["Apache Kafka","Redis (Distributed Cache & Pub/Sub)","PostgreSQL","Amazon SQS","Elasticsearch","MongoDB","SQL Optimization & Indexing","Schema Migrations & Governance"]},{category:"devops",title:"Cloud & DevOps Infrastructure",skills:["Amazon Web Services (AWS)","AWS Lambda, SQS, EC2, S3","Docker & Containerization","Kubernetes","CI/CD Pipelines","Git & GitHub Release Governance"]},{category:"reliability",title:"Observability, Reliability & Testing",skills:["Datadog Telemetry & APM","Grafana Dashboards","Prometheus Metrics","SLO / SLA Management","JMeter Load & Stress Testing","RCA Investigation & Post-Mortems"]}],r=t==="all"?i:i.filter(s=>s.category===t);return E.jsx("section",{id:"skills",className:"section",style:{backgroundColor:"rgba(14, 19, 32, 0.4)"},children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"section-header",children:[E.jsxs("span",{className:"section-tag",children:[E.jsx(Nu,{size:14}),"Technical Proficiency"]}),E.jsxs("h2",{className:"section-title",children:["Skills & ",E.jsx("span",{className:"gradient-text-accent",children:"Architectural Competency"})]}),E.jsx("p",{className:"section-subtitle",children:"Core strengths across distributed systems design, high-concurrency payment rails, data integrity, and production reliability."})]}),E.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.6rem",marginBottom:"3rem",flexWrap:"wrap"},children:n.map(s=>{const o=s.icon,a=t===s.id;return E.jsxs("button",{onClick:()=>e(s.id),style:{display:"flex",alignItems:"center",gap:"0.45rem",padding:"0.55rem 1.1rem",borderRadius:"var(--radius-full)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",border:a?"1px solid var(--border-accent)":"1px solid var(--border-subtle)",background:a?"var(--accent-primary-soft)":"rgba(255, 255, 255, 0.02)",color:a?"#c7d2fe":"var(--text-secondary)",transition:"all var(--transition-fast)"},children:[E.jsx(o,{size:15}),s.label]},s.id)})}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"1.75rem"},children:r.map((s,o)=>E.jsxs("div",{className:"glass-card",style:{padding:"1.75rem"},children:[E.jsx("h3",{style:{fontSize:"1.15rem",marginBottom:"1.25rem",color:"var(--text-primary)",borderBottom:"1px solid var(--border-subtle)",paddingBottom:"0.75rem"},children:s.title}),E.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.55rem"},children:s.skills.map((a,l)=>E.jsx("span",{className:"badge",style:{fontSize:"0.82rem",padding:"0.35rem 0.75rem",background:"rgba(255, 255, 255, 0.04)",borderColor:"rgba(255, 255, 255, 0.08)"},children:a},l))})]},o))})]})})},YT=()=>{const t=[{title:"Faculty Leave Application Portal",category:"Full-Stack & Database Architecture",period:"March 2021 – April 2021",description:"Hierarchical enterprise leave management system with fine-grained role-based access control (RBAC) supporting 500+ concurrent faculty users.",highlights:["Engineered complex approval workflows with PostgreSQL triggers and ACID-compliant stored procedures","Implemented hybrid database design using PostgreSQL for relational audit logs and MongoDB for dynamic document metadata","Designed secure session authentication and real-time email notification triggers"],stack:["Node.js","PostgreSQL","MongoDB","Express","RBAC Security"],githubUrl:"https://github.com/kumawatsachin009"},{title:"Automated Document & Data Mining Pipeline",category:"Data Mining & Computer Vision",period:"July 2020 – August 2020",description:"Automated document processing and computer vision pipeline for parsing chemical and molecular structures from scientific research papers.",highlights:["Processed 1,000+ complex multi-column PDF research papers with 85% extraction accuracy","Built OpenCV contour detection and adaptive thresholding for molecular structure isolation","Structured tabular data extraction using PyPDF and Tabula for downstream analytical ingestion"],stack:["Python","OpenCV","PyPDF","Tabula","NumPy","Data Extraction"],githubUrl:"https://github.com/kumawatsachin009"}];return E.jsx("section",{id:"projects",className:"section",children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"section-header",children:[E.jsxs("span",{className:"section-tag",children:[E.jsx(nv,{size:14}),"Academic & Systems Projects"]}),E.jsxs("h2",{className:"section-title",children:["Featured ",E.jsx("span",{className:"gradient-text-accent",children:"Software Projects"})]}),E.jsx("p",{className:"section-subtitle",children:"Selected standalone applications and engineering solutions built with strong architectural fundamentals."})]}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"2rem"},children:t.map((e,n)=>E.jsxs("div",{className:"glass-card",style:{padding:"2.25rem",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"},children:[E.jsx("span",{className:"badge badge-accent mono",children:e.category}),E.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:e.period})]}),E.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"0.75rem",color:"var(--text-primary)"},children:e.title}),E.jsx("p",{style:{fontSize:"0.92rem",color:"var(--text-secondary)",marginBottom:"1.25rem",lineHeight:1.6},children:e.description}),E.jsx("div",{style:{marginBottom:"1.5rem"},children:E.jsx("ul",{style:{paddingLeft:"1.1rem",fontSize:"0.86rem",color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:"0.45rem"},children:e.highlights.map((i,r)=>E.jsx("li",{children:i},r))})})]}),E.jsxs("div",{children:[E.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem",paddingTop:"1.25rem",borderTop:"1px solid var(--border-subtle)",marginBottom:"1.25rem"},children:e.stack.map((i,r)=>E.jsx("span",{className:"badge mono",style:{fontSize:"0.74rem"},children:i},r))}),E.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",style:{width:"100%",fontSize:"0.84rem",padding:"0.55rem"},children:[E.jsx(iv,{size:16}),"View on GitHub"]})]})]},n))})]})})},qT=()=>E.jsx("section",{id:"education",className:"section",style:{backgroundColor:"rgba(14, 19, 32, 0.4)"},children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"section-header",children:[E.jsxs("span",{className:"section-tag",children:[E.jsx(ch,{size:14}),"Academic & Honors"]}),E.jsxs("h2",{className:"section-title",children:["Education & ",E.jsx("span",{className:"gradient-text-accent",children:"Recognition"})]}),E.jsx("p",{className:"section-subtitle",children:"Formal education from premier technical institute and organizational honors."})]}),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"2rem"},children:[E.jsxs("div",{className:"glass-card",style:{padding:"2.25rem"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.25rem"},children:[E.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(6, 182, 212, 0.12)",border:"1px solid rgba(6, 182, 212, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#67e8f9"},children:"🎓"}),E.jsx("div",{children:E.jsx("span",{className:"badge badge-cyan mono",children:"Degree"})})]}),E.jsx("h3",{style:{fontSize:"1.35rem",color:"var(--text-primary)",marginBottom:"0.35rem"},children:"Indian Institute of Technology, Ropar"}),E.jsx("div",{style:{fontSize:"1rem",color:"var(--accent-cyan)",fontWeight:600,marginBottom:"0.5rem"},children:"Bachelor of Technology (B.Tech)"}),E.jsx("div",{className:"mono",style:{fontSize:"0.84rem",color:"var(--text-muted)",marginBottom:"1.25rem"},children:"August 2018 – May 2022 · Punjab, India"}),E.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",lineHeight:1.6},children:"Comprehensive coursework in Computer Science, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Distributed Computing."})]}),E.jsxs("div",{className:"glass-card",style:{padding:"2.25rem"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.25rem"},children:[E.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(245, 158, 11, 0.12)",border:"1px solid rgba(245, 158, 11, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fbbf24"},children:E.jsx(ch,{size:22})}),E.jsx("div",{children:E.jsx("span",{className:"badge",style:{background:"rgba(245, 158, 11, 0.1)",borderColor:"rgba(245, 158, 11, 0.3)",color:"#fbbf24"},children:"Awards & Honors"})})]}),E.jsxs("div",{style:{marginBottom:"1.5rem"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.35rem"},children:[E.jsx("h4",{style:{fontSize:"1.15rem",color:"var(--text-primary)"},children:"Whale of the Quarter Award"}),E.jsx("span",{className:"badge badge-accent mono",children:"Q2 2024"})]}),E.jsx("div",{style:{fontSize:"0.92rem",color:"var(--accent-primary)",fontWeight:600,marginBottom:"0.4rem"},children:"CoinDCX"}),E.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.5},children:"Recognized for exceptional engineering contributions, technical leadership, and driving mission-critical backend stability."})]}),E.jsxs("div",{style:{paddingTop:"1.25rem",borderTop:"1px solid var(--border-subtle)"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.35rem"},children:[E.jsx("h4",{style:{fontSize:"1.05rem",color:"var(--text-primary)"},children:"Introduction to Deep Learning"}),E.jsx("span",{className:"badge mono",children:"2021"})]}),E.jsx("div",{style:{fontSize:"0.88rem",color:"var(--text-muted)"},children:"HSE University (Coursera)"})]})]})]})]})}),$T=()=>E.jsx("footer",{style:{paddingTop:"5rem",paddingBottom:"3rem",backgroundColor:"var(--bg-primary)",borderTop:"1px solid var(--border-subtle)",position:"relative",zIndex:2},children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"glass-card",style:{padding:"3rem 2.5rem",textAlign:"center",marginBottom:"4rem",background:"linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(56, 189, 248, 0.05) 100%)",border:"1px solid var(--border-accent)"},children:[E.jsx("span",{className:"section-tag",style:{marginBottom:"1rem"},children:"Get In Touch"}),E.jsxs("h2",{style:{fontSize:"2.2rem",marginBottom:"1rem"},children:["Let's Build ",E.jsx("span",{className:"gradient-text-accent",children:"Mission-Critical Systems"})," Together"]}),E.jsx("p",{style:{maxWidth:"650px",margin:"0 auto 2rem",color:"var(--text-secondary)",fontSize:"1rem"},children:"Open to discussing high-throughput distributed systems, fintech payment architectures, or technical leadership opportunities."}),E.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[E.jsxs("a",{href:"mailto:kumawatsachin009@gmail.com",className:"btn btn-primary",style:{padding:"0.85rem 1.6rem"},children:[E.jsx(_x,{size:18}),"kumawatsachin009@gmail.com"]}),E.jsxs("a",{href:"./assets/cv.pdf",download:"Sachin_Kumawat_CV.pdf",className:"btn btn-secondary",style:{padding:"0.85rem 1.6rem"},children:[E.jsx(tl,{size:18}),"Download Resume"]})]})]}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.5rem",paddingTop:"2rem",borderTop:"1px solid var(--border-subtle)"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:700,fontSize:"1.1rem",color:"var(--text-primary)"},children:"Sachin Kumawat"}),E.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Senior Software Engineer · Distributed Systems & FinTech"})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:[E.jsx("a",{href:"https://github.com/kumawatsachin009",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",style:{width:"38px",height:"38px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",transition:"all var(--transition-fast)"},onMouseEnter:t=>{t.currentTarget.style.color="#ffffff",t.currentTarget.style.borderColor="var(--border-accent)"},onMouseLeave:t=>{t.currentTarget.style.color="var(--text-secondary)",t.currentTarget.style.borderColor="var(--border-subtle)"},children:E.jsx(iv,{size:18})}),E.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",style:{width:"38px",height:"38px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",transition:"all var(--transition-fast)"},onMouseEnter:t=>{t.currentTarget.style.color="#ffffff",t.currentTarget.style.borderColor="var(--border-accent)"},onMouseLeave:t=>{t.currentTarget.style.color="var(--text-secondary)",t.currentTarget.style.borderColor="var(--border-subtle)"},children:E.jsx(xx,{size:18})})]}),E.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:["© ",new Date().getFullYear()," Sachin Kumawat · Optimized for GitHub Pages"]})]})]})}),KT=()=>{const t=wt.useRef(null);return wt.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const o=()=>{r=e.width=window.innerWidth,s=e.height=window.innerHeight};window.addEventListener("resize",o);const a=Math.min(Math.floor(r*s/24e3),45),l=[];class c{constructor(){this.x=Math.random()*r,this.y=Math.random()*s,this.vx=(Math.random()-.5)*.2,this.vy=(Math.random()-.5)*.2,this.radius=Math.random()*1.2+.6,this.alpha=Math.random()*.15+.08}update(){this.x+=this.vx,this.y+=this.vy,this.x<0?this.x=r:this.x>r&&(this.x=0),this.y<0?this.y=s:this.y>s&&(this.y=0)}draw(){n.beginPath(),n.arc(this.x,this.y,this.radius,0,Math.PI*2),n.fillStyle=`rgba(165, 180, 252, ${this.alpha})`,n.fill()}}for(let f=0;f<a;f++)l.push(new c);const d=120,h=()=>{n.clearRect(0,0,r,s);for(let f=0;f<l.length;f++)for(let m=f+1;m<l.length;m++){const _=l[f].x-l[m].x,x=l[f].y-l[m].y,p=Math.sqrt(_*_+x*x);if(p<d){const u=(1-p/d)*.08;n.beginPath(),n.moveTo(l[f].x,l[f].y),n.lineTo(l[m].x,l[m].y),n.strokeStyle=`rgba(99, 102, 241, ${u})`,n.lineWidth=.5,n.stroke()}}l.forEach(f=>{f.update(),f.draw()}),i=requestAnimationFrame(h)};return h(),()=>{window.removeEventListener("resize",o),cancelAnimationFrame(i)}},[]),E.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:0}})},ZT=()=>E.jsxs("div",{className:"portfolio-app",style:{position:"relative",minHeight:"100vh"},children:[E.jsx(KT,{}),E.jsx(yx,{}),E.jsxs("main",{children:[E.jsx(Sx,{}),E.jsx(VT,{}),E.jsx(WT,{}),E.jsx(jT,{}),E.jsx(XT,{}),E.jsx(YT,{}),E.jsx(qT,{})]}),E.jsx($T,{})]});Bc.createRoot(document.getElementById("root")).render(E.jsx(n0.StrictMode,{children:E.jsx(ZT,{})}));
