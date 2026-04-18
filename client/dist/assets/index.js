(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&r(b)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();function Em(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var qr={exports:{}},Kn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function ap(){if(nm)return Kn;nm=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function s(r,d,h){var b=null;if(h!==void 0&&(b=""+h),d.key!==void 0&&(b=""+d.key),"key"in d){h={};for(var j in d)j!=="key"&&(h[j]=d[j])}else h=d;return d=h.ref,{$$typeof:u,type:r,key:b,ref:d!==void 0?d:null,props:h}}return Kn.Fragment=f,Kn.jsx=s,Kn.jsxs=s,Kn}var im;function np(){return im||(im=1,qr.exports=ap()),qr.exports}var g=np(),Xr={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function ip(){if(um)return le;um=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),H=Symbol.iterator;function V(v){return v===null||typeof v!="object"?null:(v=H&&v[H]||v["@@iterator"],typeof v=="function"?v:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,B={};function Y(v,w,Q){this.props=v,this.context=w,this.refs=B,this.updater=Q||k}Y.prototype.isReactComponent={},Y.prototype.setState=function(v,w){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,w,"setState")},Y.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function L(){}L.prototype=Y.prototype;function G(v,w,Q){this.props=v,this.context=w,this.refs=B,this.updater=Q||k}var I=G.prototype=new L;I.constructor=G,q(I,Y.prototype),I.isPureReactComponent=!0;var ee=Array.isArray;function ne(){}var W={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function qe(v,w,Q){var K=Q.ref;return{$$typeof:u,type:v,key:w,ref:K!==void 0?K:null,props:Q}}function Ve(v,w){return qe(v.type,w,v.props)}function ke(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function be(v){var w={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Q){return w[Q]})}var Et=/\/+/g;function at(v,w){return typeof v=="object"&&v!==null&&v.key!=null?be(""+v.key):w.toString(36)}function we(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ne,ne):(v.status="pending",v.then(function(w){v.status==="pending"&&(v.status="fulfilled",v.value=w)},function(w){v.status==="pending"&&(v.status="rejected",v.reason=w)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function D(v,w,Q,K,U){var Z=typeof v;(Z==="undefined"||Z==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(Z){case"bigint":case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case u:case f:de=!0;break;case T:return de=v._init,D(de(v._payload),w,Q,K,U)}}if(de)return U=U(v),de=K===""?"."+at(v,0):K,ee(U)?(Q="",de!=null&&(Q=de.replace(Et,"$&/")+"/"),D(U,w,Q,"",function(sl){return sl})):U!=null&&(ke(U)&&(U=Ve(U,Q+(U.key==null||v&&v.key===U.key?"":(""+U.key).replace(Et,"$&/")+"/")+de)),w.push(U)),1;de=0;var We=K===""?".":K+":";if(ee(v))for(var De=0;De<v.length;De++)K=v[De],Z=We+at(K,De),de+=D(K,w,Q,Z,U);else if(De=V(v),typeof De=="function")for(v=De.call(v),De=0;!(K=v.next()).done;)K=K.value,Z=We+at(K,De++),de+=D(K,w,Q,Z,U);else if(Z==="object"){if(typeof v.then=="function")return D(we(v),w,Q,K,U);throw w=String(v),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return de}function X(v,w,Q){if(v==null)return v;var K=[],U=0;return D(v,K,"","",function(Z){return w.call(Q,Z,U++)}),K}function P(v){if(v._status===-1){var w=v._result;w=w(),w.then(function(Q){(v._status===0||v._status===-1)&&(v._status=1,v._result=Q)},function(Q){(v._status===0||v._status===-1)&&(v._status=2,v._result=Q)}),v._status===-1&&(v._status=0,v._result=w)}if(v._status===1)return v._result.default;throw v._result}var ye=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},ve={map:X,forEach:function(v,w,Q){X(v,function(){w.apply(this,arguments)},Q)},count:function(v){var w=0;return X(v,function(){w++}),w},toArray:function(v){return X(v,function(w){return w})||[]},only:function(v){if(!ke(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return le.Activity=z,le.Children=ve,le.Component=Y,le.Fragment=s,le.Profiler=d,le.PureComponent=G,le.StrictMode=r,le.Suspense=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,le.__COMPILER_RUNTIME={__proto__:null,c:function(v){return W.H.useMemoCache(v)}},le.cache=function(v){return function(){return v.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(v,w,Q){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var K=q({},v.props),U=v.key;if(w!=null)for(Z in w.key!==void 0&&(U=""+w.key),w)!Ae.call(w,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&w.ref===void 0||(K[Z]=w[Z]);var Z=arguments.length-2;if(Z===1)K.children=Q;else if(1<Z){for(var de=Array(Z),We=0;We<Z;We++)de[We]=arguments[We+2];K.children=de}return qe(v.type,U,K)},le.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},le.createElement=function(v,w,Q){var K,U={},Z=null;if(w!=null)for(K in w.key!==void 0&&(Z=""+w.key),w)Ae.call(w,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(U[K]=w[K]);var de=arguments.length-2;if(de===1)U.children=Q;else if(1<de){for(var We=Array(de),De=0;De<de;De++)We[De]=arguments[De+2];U.children=We}if(v&&v.defaultProps)for(K in de=v.defaultProps,de)U[K]===void 0&&(U[K]=de[K]);return qe(v,Z,U)},le.createRef=function(){return{current:null}},le.forwardRef=function(v){return{$$typeof:j,render:v}},le.isValidElement=ke,le.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:P}},le.memo=function(v,w){return{$$typeof:m,type:v,compare:w===void 0?null:w}},le.startTransition=function(v){var w=W.T,Q={};W.T=Q;try{var K=v(),U=W.S;U!==null&&U(Q,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(ne,ye)}catch(Z){ye(Z)}finally{w!==null&&Q.types!==null&&(w.types=Q.types),W.T=w}},le.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},le.use=function(v){return W.H.use(v)},le.useActionState=function(v,w,Q){return W.H.useActionState(v,w,Q)},le.useCallback=function(v,w){return W.H.useCallback(v,w)},le.useContext=function(v){return W.H.useContext(v)},le.useDebugValue=function(){},le.useDeferredValue=function(v,w){return W.H.useDeferredValue(v,w)},le.useEffect=function(v,w){return W.H.useEffect(v,w)},le.useEffectEvent=function(v){return W.H.useEffectEvent(v)},le.useId=function(){return W.H.useId()},le.useImperativeHandle=function(v,w,Q){return W.H.useImperativeHandle(v,w,Q)},le.useInsertionEffect=function(v,w){return W.H.useInsertionEffect(v,w)},le.useLayoutEffect=function(v,w){return W.H.useLayoutEffect(v,w)},le.useMemo=function(v,w){return W.H.useMemo(v,w)},le.useOptimistic=function(v,w){return W.H.useOptimistic(v,w)},le.useReducer=function(v,w,Q){return W.H.useReducer(v,w,Q)},le.useRef=function(v){return W.H.useRef(v)},le.useState=function(v){return W.H.useState(v)},le.useSyncExternalStore=function(v,w,Q){return W.H.useSyncExternalStore(v,w,Q)},le.useTransition=function(){return W.H.useTransition()},le.version="19.2.4",le}var cm;function Pr(){return cm||(cm=1,Xr.exports=ip()),Xr.exports}var S=Pr();const up=Em(S);var Qr={exports:{}},kn={},Gr={exports:{}},Zr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function cp(){return rm||(rm=1,(function(u){function f(D,X){var P=D.length;D.push(X);e:for(;0<P;){var ye=P-1>>>1,ve=D[ye];if(0<d(ve,X))D[ye]=X,D[P]=ve,P=ye;else break e}}function s(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var X=D[0],P=D.pop();if(P!==X){D[0]=P;e:for(var ye=0,ve=D.length,v=ve>>>1;ye<v;){var w=2*(ye+1)-1,Q=D[w],K=w+1,U=D[K];if(0>d(Q,P))K<ve&&0>d(U,Q)?(D[ye]=U,D[K]=P,ye=K):(D[ye]=Q,D[w]=P,ye=w);else if(K<ve&&0>d(U,P))D[ye]=U,D[K]=P,ye=K;else break e}}return X}function d(D,X){var P=D.sortIndex-X.sortIndex;return P!==0?P:D.id-X.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var b=Date,j=b.now();u.unstable_now=function(){return b.now()-j}}var x=[],m=[],T=1,z=null,H=3,V=!1,k=!1,q=!1,B=!1,Y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function I(D){for(var X=s(m);X!==null;){if(X.callback===null)r(m);else if(X.startTime<=D)r(m),X.sortIndex=X.expirationTime,f(x,X);else break;X=s(m)}}function ee(D){if(q=!1,I(D),!k)if(s(x)!==null)k=!0,ne||(ne=!0,be());else{var X=s(m);X!==null&&we(ee,X.startTime-D)}}var ne=!1,W=-1,Ae=5,qe=-1;function Ve(){return B?!0:!(u.unstable_now()-qe<Ae)}function ke(){if(B=!1,ne){var D=u.unstable_now();qe=D;var X=!0;try{e:{k=!1,q&&(q=!1,L(W),W=-1),V=!0;var P=H;try{t:{for(I(D),z=s(x);z!==null&&!(z.expirationTime>D&&Ve());){var ye=z.callback;if(typeof ye=="function"){z.callback=null,H=z.priorityLevel;var ve=ye(z.expirationTime<=D);if(D=u.unstable_now(),typeof ve=="function"){z.callback=ve,I(D),X=!0;break t}z===s(x)&&r(x),I(D)}else r(x);z=s(x)}if(z!==null)X=!0;else{var v=s(m);v!==null&&we(ee,v.startTime-D),X=!1}}break e}finally{z=null,H=P,V=!1}X=void 0}}finally{X?be():ne=!1}}}var be;if(typeof G=="function")be=function(){G(ke)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,at=Et.port2;Et.port1.onmessage=ke,be=function(){at.postMessage(null)}}else be=function(){Y(ke,0)};function we(D,X){W=Y(function(){D(u.unstable_now())},X)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(D){D.callback=null},u.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<D?Math.floor(1e3/D):5},u.unstable_getCurrentPriorityLevel=function(){return H},u.unstable_next=function(D){switch(H){case 1:case 2:case 3:var X=3;break;default:X=H}var P=H;H=X;try{return D()}finally{H=P}},u.unstable_requestPaint=function(){B=!0},u.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=H;H=D;try{return X()}finally{H=P}},u.unstable_scheduleCallback=function(D,X,P){var ye=u.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ye+P:ye):P=ye,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=P+ve,D={id:T++,callback:X,priorityLevel:D,startTime:P,expirationTime:ve,sortIndex:-1},P>ye?(D.sortIndex=P,f(m,D),s(x)===null&&D===s(m)&&(q?(L(W),W=-1):q=!0,we(ee,P-ye))):(D.sortIndex=ve,f(x,D),k||V||(k=!0,ne||(ne=!0,be()))),D},u.unstable_shouldYield=Ve,u.unstable_wrapCallback=function(D){var X=H;return function(){var P=H;H=X;try{return D.apply(this,arguments)}finally{H=P}}}})(Zr)),Zr}var om;function rp(){return om||(om=1,Gr.exports=cp()),Gr.exports}var Vr={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function op(){if(sm)return it;sm=1;var u=Pr();function f(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)m+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(f(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(x,m,T){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:z==null?null:""+z,children:x,containerInfo:m,implementation:T}}var b=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,it.createPortal=function(x,m){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(f(299));return h(x,m,null,T)},it.flushSync=function(x){var m=b.T,T=r.p;try{if(b.T=null,r.p=2,x)return x()}finally{b.T=m,r.p=T,r.d.f()}},it.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(x,m))},it.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},it.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var T=m.as,z=j(T,m.crossOrigin),H=typeof m.integrity=="string"?m.integrity:void 0,V=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;T==="style"?r.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:z,integrity:H,fetchPriority:V}):T==="script"&&r.d.X(x,{crossOrigin:z,integrity:H,fetchPriority:V,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},it.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var T=j(m.as,m.crossOrigin);r.d.M(x,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(x)},it.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var T=m.as,z=j(T,m.crossOrigin);r.d.L(x,T,{crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},it.preloadModule=function(x,m){if(typeof x=="string")if(m){var T=j(m.as,m.crossOrigin);r.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(x)},it.requestFormReset=function(x){r.d.r(x)},it.unstable_batchedUpdates=function(x,m){return x(m)},it.useFormState=function(x,m,T){return b.H.useFormState(x,m,T)},it.useFormStatus=function(){return b.H.useHostTransitionStatus()},it.version="19.2.4",it}var fm;function sp(){if(fm)return Vr.exports;fm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Vr.exports=op(),Vr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function fp(){if(dm)return kn;dm=1;var u=rp(),f=Pr(),s=sp();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(r(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return x(n),e;if(i===a)return x(n),t;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,o=n.child;o;){if(o===l){c=!0,l=n,a=i;break}if(o===a){c=!0,a=n,l=i;break}o=o.sibling}if(!c){for(o=i.child;o;){if(o===l){c=!0,l=i,a=n;break}if(o===a){c=!0,a=i,l=n;break}o=o.sibling}if(!c)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,H=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),G=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),qe=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),ke=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=ke&&e[ke]||e["@@iterator"],typeof e=="function"?e:null)}var Et=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case Y:return"Profiler";case B:return"StrictMode";case ee:return"Suspense";case ne:return"SuspenseList";case qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case G:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var we=Array.isArray,D=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ye=[],ve=-1;function v(e){return{current:e}}function w(e){0>ve||(e.current=ye[ve],ye[ve]=null,ve--)}function Q(e,t){ve++,ye[ve]=e.current,e.current=t}var K=v(null),U=v(null),Z=v(null),de=v(null);function We(e,t){switch(Q(Z,t),Q(U,e),Q(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Rd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Rd(t),e=jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(K),Q(K,e)}function De(){w(K),w(U),w(Z)}function sl(e){e.memoizedState!==null&&Q(de,e);var t=K.current,l=jd(t,e.type);t!==l&&(Q(U,e),Q(K,l))}function fl(e){U.current===e&&(w(K),w(U)),de.current===e&&(w(de),Qn._currentValue=P)}var Ka,ei;function zt(e){if(Ka===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||"",ei=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ka+e+ei}var ka=!1;function na(e,t){if(!e||ka)return"";ka=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(C){var R=C}Reflect.construct(e,[],M)}else{try{M.call()}catch(C){R=C}e.call(M.prototype)}}else{try{throw Error()}catch(C){R=C}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(C){if(C&&R&&typeof C.stack=="string")return[C.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],o=i[1];if(c&&o){var p=c.split(`
`),N=o.split(`
`);for(n=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(a===p.length||n===N.length)for(a=p.length-1,n=N.length-1;1<=a&&0<=n&&p[a]!==N[n];)n--;for(;1<=a&&0<=n;a--,n--)if(p[a]!==N[n]){if(a!==1||n!==1)do if(a--,n--,0>n||p[a]!==N[n]){var O=`
`+p[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=n);break}}}finally{ka=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?zt(l):""}function Ru(e,t){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==t&&t!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return na(e.type,!1);case 11:return na(e.type.render,!1);case 1:return na(e.type,!0);case 31:return zt("Activity");default:return""}}function ti(e){try{var t="",l=null;do t+=Ru(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ja=Object.prototype.hasOwnProperty,$a=u.unstable_scheduleCallback,Wa=u.unstable_cancelCallback,li=u.unstable_shouldYield,ai=u.unstable_requestPaint,nt=u.unstable_now,ni=u.unstable_getCurrentPriorityLevel,Fa=u.unstable_ImmediatePriority,Ia=u.unstable_UserBlockingPriority,Hl=u.unstable_NormalPriority,ii=u.unstable_LowPriority,Pa=u.unstable_IdlePriority,ae=u.log,me=u.unstable_setDisableYieldValue,Ue=null,Re=null;function Fe(e){if(typeof ae=="function"&&me(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ue,e)}catch{}}var _e=Math.clz32?Math.clz32:ui,Yl=Math.log,Ll=Math.LN2;function ui(e){return e>>>=0,e===0?32:31-(Yl(e)/Ll|0)|0}var ct=256,ia=262144,ci=4194304;function ql(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ri(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?n=ql(a):(c&=o,c!==0?n=ql(c):l||(l=o&~e,l!==0&&(n=ql(l))))):(o=a&~i,o!==0?n=ql(o):c!==0?n=ql(c):l||(l=a&~e,l!==0&&(n=ql(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function en(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uo(){var e=ci;return ci<<=1,(ci&62914560)===0&&(ci=4194304),e}function ju(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function tn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vm(e,t,l,a,n,i){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,p=e.expirationTimes,N=e.hiddenUpdates;for(l=c&~l;0<l;){var O=31-_e(l),M=1<<O;o[O]=0,p[O]=-1;var R=N[O];if(R!==null)for(N[O]=null,O=0;O<R.length;O++){var C=R[O];C!==null&&(C.lane&=-536870913)}l&=~M}a!==0&&co(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function co(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-_e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function ro(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-_e(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function oo(e,t){var l=t&-t;return l=(l&42)!==0?1:Cu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function so(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Fd(e.type))}function fo(e,t){var l=X.p;try{return X.p=e,t()}finally{X.p=l}}var dl=Math.random().toString(36).slice(2),Ie="__reactFiber$"+dl,rt="__reactProps$"+dl,ua="__reactContainer$"+dl,Ou="__reactEvents$"+dl,Km="__reactListeners$"+dl,km="__reactHandles$"+dl,mo="__reactResources$"+dl,ln="__reactMarker$"+dl;function _u(e){delete e[Ie],delete e[rt],delete e[Ou],delete e[Km],delete e[km]}function ca(e){var t=e[Ie];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ua]||l[Ie]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Ud(e);e!==null;){if(l=e[Ie])return l;e=Ud(e)}return t}e=l,l=e.parentNode}return null}function ra(e){if(e=e[Ie]||e[ua]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function an(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function oa(e){var t=e[mo];return t||(t=e[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[ln]=!0}var ho=new Set,po={};function Xl(e,t){sa(e,t),sa(e+"Capture",t)}function sa(e,t){for(po[e]=t,e=0;e<t.length;e++)ho.add(t[e])}var Jm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),go={},yo={};function $m(e){return Ja.call(yo,e)?!0:Ja.call(go,e)?!1:Jm.test(e)?yo[e]=!0:(go[e]=!0,!1)}function oi(e,t,l){if($m(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function si(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Vt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wm(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mu(e){if(!e._valueTracker){var t=vo(e)?"checked":"value";e._valueTracker=Wm(e,t,""+e[t])}}function bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=vo(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fm=/[\n"\\]/g;function At(e){return e.replace(Fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wu(e,t,l,a,n,i,c,o){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Uu(e,c,Tt(t)):l!=null?Uu(e,c,Tt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Tt(o):e.removeAttribute("name")}function xo(e,t,l,a,n,i,c,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Mu(e);return}l=l!=null?""+Tt(l):"",t=t!=null?""+Tt(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Mu(e)}function Uu(e,t,l){t==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function fa(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Tt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function So(e,t,l){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Tt(l):""}function Eo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(r(92));if(we(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Tt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Mu(e)}function da(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Im=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zo(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Im.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function To(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&zo(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&zo(e,i,t[i])}function Bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function di(e){return eh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kt(){}var Hu=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,ha=null;function Ao(e){var t=ra(e);if(t&&(e=t.stateNode)){var l=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(wu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[rt]||null;if(!n)throw Error(r(90));wu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&bo(a)}break e;case"textarea":So(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&fa(e,!!l.multiple,t,!1)}}}var Lu=!1;function No(e,t,l){if(Lu)return e(t,l);Lu=!0;try{var a=e(t);return a}finally{if(Lu=!1,(ma!==null||ha!==null)&&(Pi(),ma&&(t=ma,e=ha,ha=ma=null,Ao(t),e)))for(t=0;t<e.length;t++)Ao(e[t])}}function nn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[rt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(kt)try{var un={};Object.defineProperty(un,"passive",{get:function(){qu=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{qu=!1}var ml=null,Xu=null,mi=null;function Ro(){if(mi)return mi;var e,t=Xu,l=t.length,a,n="value"in ml?ml.value:ml.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[i-a];a++);return mi=n.slice(e,1<a?1-a:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function jo(){return!1}function ot(e){function t(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pi:jo,this.isPropagationStopped=jo,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Ql={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=ot(Ql),cn=z({},Ql,{view:0,detail:0}),th=ot(cn),Qu,Gu,rn,yi=z({},cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rn&&(rn&&e.type==="mousemove"?(Qu=e.screenX-rn.screenX,Gu=e.screenY-rn.screenY):Gu=Qu=0,rn=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),Co=ot(yi),lh=z({},yi,{dataTransfer:0}),ah=ot(lh),nh=z({},cn,{relatedTarget:0}),Zu=ot(nh),ih=z({},Ql,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=ot(ih),ch=z({},Ql,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=ot(ch),oh=z({},Ql,{data:0}),Do=ot(oh),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dh[e])?!!t[e]:!1}function Vu(){return mh}var hh=z({},cn,{key:function(e){if(e.key){var t=sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=ot(hh),gh=z({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=ot(gh),yh=z({},cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),vh=ot(yh),bh=z({},Ql,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=ot(bh),Sh=z({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=ot(Sh),zh=z({},Ql,{newState:0,oldState:0}),Th=ot(zh),Ah=[9,13,27,32],Ku=kt&&"CompositionEvent"in window,on=null;kt&&"documentMode"in document&&(on=document.documentMode);var Nh=kt&&"TextEvent"in window&&!on,_o=kt&&(!Ku||on&&8<on&&11>=on),Mo=" ",wo=!1;function Uo(e,t){switch(e){case"keyup":return Ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pa=!1;function Rh(e,t){switch(e){case"compositionend":return Bo(t);case"keypress":return t.which!==32?null:(wo=!0,Mo);case"textInput":return e=t.data,e===Mo&&wo?null:e;default:return null}}function jh(e,t){if(pa)return e==="compositionend"||!Ku&&Uo(e,t)?(e=Ro(),mi=Xu=ml=null,pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _o&&t.locale!=="ko"?null:t.data;default:return null}}var Ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ch[e.type]:t==="textarea"}function Yo(e,t,l,a){ma?ha?ha.push(a):ha=[a]:ma=a,t=uu(t,"onChange"),0<t.length&&(l=new gi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var sn=null,fn=null;function Dh(e){Sd(e,0)}function vi(e){var t=an(e);if(bo(t))return e}function Lo(e,t){if(e==="change")return t}var qo=!1;if(kt){var ku;if(kt){var Ju="oninput"in document;if(!Ju){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),Ju=typeof Xo.oninput=="function"}ku=Ju}else ku=!1;qo=ku&&(!document.documentMode||9<document.documentMode)}function Qo(){sn&&(sn.detachEvent("onpropertychange",Go),fn=sn=null)}function Go(e){if(e.propertyName==="value"&&vi(fn)){var t=[];Yo(t,fn,e,Yu(e)),No(Dh,t)}}function Oh(e,t,l){e==="focusin"?(Qo(),sn=t,fn=l,sn.attachEvent("onpropertychange",Go)):e==="focusout"&&Qo()}function _h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(fn)}function Mh(e,t){if(e==="click")return vi(t)}function wh(e,t){if(e==="input"||e==="change")return vi(t)}function Uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Uh;function dn(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ja.call(t,n)||!pt(e[n],t[n]))return!1}return!0}function Zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vo(e,t){var l=Zo(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Zo(l)}}function Ko(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ko(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ko(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=fi(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bh=kt&&"documentMode"in document&&11>=document.documentMode,ga=null,Wu=null,mn=null,Fu=!1;function Jo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Fu||ga==null||ga!==fi(a)||(a=ga,"selectionStart"in a&&$u(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),mn&&dn(mn,a)||(mn=a,a=uu(Wu,"onSelect"),0<a.length&&(t=new gi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ga)))}function Gl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ya={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionrun:Gl("Transition","TransitionRun"),transitionstart:Gl("Transition","TransitionStart"),transitioncancel:Gl("Transition","TransitionCancel"),transitionend:Gl("Transition","TransitionEnd")},Iu={},$o={};kt&&($o=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Zl(e){if(Iu[e])return Iu[e];if(!ya[e])return e;var t=ya[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in $o)return Iu[e]=t[l];return e}var Wo=Zl("animationend"),Fo=Zl("animationiteration"),Io=Zl("animationstart"),Hh=Zl("transitionrun"),Yh=Zl("transitionstart"),Lh=Zl("transitioncancel"),Po=Zl("transitionend"),es=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ut(e,t){es.set(e,t),Xl(t,[e])}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],va=0,ec=0;function xi(){for(var e=va,t=ec=va=0;t<e;){var l=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var n=Nt[t];Nt[t++]=null;var i=Nt[t];if(Nt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&ts(l,n,i)}}function Si(e,t,l,a){Nt[va++]=e,Nt[va++]=t,Nt[va++]=l,Nt[va++]=a,ec|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function tc(e,t,l,a){return Si(e,t,l,a),Ei(e)}function Vl(e,t){return Si(e,null,null,t),Ei(e)}function ts(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-_e(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Ei(e){if(50<Un)throw Un=0,sr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ba={};function qh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,l,a){return new qh(e,t,l,a)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var l=e.alternate;return l===null?(l=gt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ls(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zi(e,t,l,a,n,i){var c=0;if(a=e,typeof e=="function")lc(e)&&(c=1);else if(typeof e=="string")c=V0(e,l,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case qe:return e=gt(31,l,t,n),e.elementType=qe,e.lanes=i,e;case q:return Kl(l.children,n,i,t);case B:c=8,n|=24;break;case Y:return e=gt(12,l,t,n|2),e.elementType=Y,e.lanes=i,e;case ee:return e=gt(13,l,t,n),e.elementType=ee,e.lanes=i,e;case ne:return e=gt(19,l,t,n),e.elementType=ne,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:c=10;break e;case L:c=9;break e;case I:c=11;break e;case W:c=14;break e;case Ae:c=16,a=null;break e}c=29,l=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=gt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Kl(e,t,l,a){return e=gt(7,e,a,t),e.lanes=l,e}function ac(e,t,l){return e=gt(6,e,null,t),e.lanes=l,e}function as(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function nc(e,t,l){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ns=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var l=ns.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ti(t)},ns.set(e,t),t)}return{value:e,source:t,stack:ti(t)}}var xa=[],Sa=0,Ti=null,hn=0,jt=[],Ct=0,hl=null,Yt=1,Lt="";function $t(e,t){xa[Sa++]=hn,xa[Sa++]=Ti,Ti=e,hn=t}function is(e,t,l){jt[Ct++]=Yt,jt[Ct++]=Lt,jt[Ct++]=hl,hl=e;var a=Yt;e=Lt;var n=32-_e(a)-1;a&=~(1<<n),l+=1;var i=32-_e(t)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Yt=1<<32-_e(t)+n|l<<n|a,Lt=i+e}else Yt=1<<i|l<<n|a,Lt=e}function ic(e){e.return!==null&&($t(e,1),is(e,1,0))}function uc(e){for(;e===Ti;)Ti=xa[--Sa],xa[Sa]=null,hn=xa[--Sa],xa[Sa]=null;for(;e===hl;)hl=jt[--Ct],jt[Ct]=null,Lt=jt[--Ct],jt[Ct]=null,Yt=jt[--Ct],jt[Ct]=null}function us(e,t){jt[Ct++]=Yt,jt[Ct++]=Lt,jt[Ct++]=hl,Yt=t.id,Lt=t.overflow,hl=e}var Pe=null,je=null,fe=!1,pl=null,Dt=!1,cc=Error(r(519));function gl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw pn(Rt(t,e)),cc}function cs(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[rt]=a,l){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(l=0;l<Hn.length;l++)re(Hn[l],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),xo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Eo(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Ad(t.textContent,l)?(a.popover!=null&&(re("beforetoggle",t),re("toggle",t)),a.onScroll!=null&&re("scroll",t),a.onScrollEnd!=null&&re("scrollend",t),a.onClick!=null&&(t.onclick=Kt),t=!0):t=!1,t||gl(e,!0)}function rs(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:Pe=Pe.return}}function Ea(e){if(e!==Pe)return!1;if(!fe)return rs(e),fe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Ar(e.type,e.memoizedProps)),l=!l),l&&je&&gl(e),rs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=wd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=wd(e)}else t===27?(t=je,Dl(e.type)?(e=Dr,Dr=null,je=e):je=t):je=Pe?_t(e.stateNode.nextSibling):null;return!0}function kl(){je=Pe=null,fe=!1}function rc(){var e=pl;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),pl=null),e}function pn(e){pl===null?pl=[e]:pl.push(e)}var oc=v(null),Jl=null,Wt=null;function yl(e,t,l){Q(oc,t._currentValue),t._currentValue=l}function Ft(e){e._currentValue=oc.current,w(oc)}function sc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function fc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var p=0;p<t.length;p++)if(o.context===t[p]){i.lanes|=l,o=i.alternate,o!==null&&(o.lanes|=l),sc(i.return,l,e),a||(c=null);break e}i=o.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),sc(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function za(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var o=n.type;pt(n.pendingProps.value,c.value)||(e!==null?e.push(o):e=[o])}}else if(n===de.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Qn):e=[Qn])}n=n.return}e!==null&&fc(t,e,l,a),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $l(e){Jl=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return os(Jl,e)}function Ni(e,t){return Jl===null&&$l(e),os(e,t)}function os(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Wt===null){if(e===null)throw Error(r(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return l}var Xh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Qh=u.unstable_scheduleCallback,Gh=u.unstable_NormalPriority,Xe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dc(){return{controller:new Xh,data:new Map,refCount:0}}function gn(e){e.refCount--,e.refCount===0&&Qh(Gh,function(){e.controller.abort()})}var yn=null,mc=0,Ta=0,Aa=null;function Zh(e,t){if(yn===null){var l=yn=[];mc=0,Ta=gr(),Aa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return mc++,t.then(ss,ss),t}function ss(){if(--mc===0&&yn!==null){Aa!==null&&(Aa.status="fulfilled");var e=yn;yn=null,Ta=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var fs=D.S;D.S=function(e,t){$f=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zh(e,t),fs!==null&&fs(e,t)};var Wl=v(null);function hc(){var e=Wl.current;return e!==null?e:Ne.pooledCache}function Ri(e,t){t===null?Q(Wl,Wl.current):Q(Wl,t.pool)}function ds(){var e=hc();return e===null?null:{parent:Xe._currentValue,pool:e}}var Na=Error(r(460)),pc=Error(r(474)),ji=Error(r(542)),Ci={then:function(){}};function ms(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hs(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Kt,Kt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gs(e),e;default:if(typeof t.status=="string")t.then(Kt,Kt);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gs(e),e}throw Il=t,Na}}function Fl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Il=l,Na):l}}var Il=null;function ps(){if(Il===null)throw Error(r(459));var e=Il;return Il=null,e}function gs(e){if(e===Na||e===ji)throw Error(r(483))}var Ra=null,vn=0;function Di(e){var t=vn;return vn+=1,Ra===null&&(Ra=[]),hs(Ra,e,t)}function bn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oi(e,t){throw t.$$typeof===H?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ys(e){function t(E,y){if(e){var A=E.deletions;A===null?(E.deletions=[y],E.flags|=16):A.push(y)}}function l(E,y){if(!e)return null;for(;y!==null;)t(E,y),y=y.sibling;return null}function a(E){for(var y=new Map;E!==null;)E.key!==null?y.set(E.key,E):y.set(E.index,E),E=E.sibling;return y}function n(E,y){return E=Jt(E,y),E.index=0,E.sibling=null,E}function i(E,y,A){return E.index=A,e?(A=E.alternate,A!==null?(A=A.index,A<y?(E.flags|=67108866,y):A):(E.flags|=67108866,y)):(E.flags|=1048576,y)}function c(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function o(E,y,A,_){return y===null||y.tag!==6?(y=ac(A,E.mode,_),y.return=E,y):(y=n(y,A),y.return=E,y)}function p(E,y,A,_){var F=A.type;return F===q?O(E,y,A.props.children,_,A.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ae&&Fl(F)===y.type)?(y=n(y,A.props),bn(y,A),y.return=E,y):(y=zi(A.type,A.key,A.props,null,E.mode,_),bn(y,A),y.return=E,y)}function N(E,y,A,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==A.containerInfo||y.stateNode.implementation!==A.implementation?(y=nc(A,E.mode,_),y.return=E,y):(y=n(y,A.children||[]),y.return=E,y)}function O(E,y,A,_,F){return y===null||y.tag!==7?(y=Kl(A,E.mode,_,F),y.return=E,y):(y=n(y,A),y.return=E,y)}function M(E,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ac(""+y,E.mode,A),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case V:return A=zi(y.type,y.key,y.props,null,E.mode,A),bn(A,y),A.return=E,A;case k:return y=nc(y,E.mode,A),y.return=E,y;case Ae:return y=Fl(y),M(E,y,A)}if(we(y)||be(y))return y=Kl(y,E.mode,A,null),y.return=E,y;if(typeof y.then=="function")return M(E,Di(y),A);if(y.$$typeof===G)return M(E,Ni(E,y),A);Oi(E,y)}return null}function R(E,y,A,_){var F=y!==null?y.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return F!==null?null:o(E,y,""+A,_);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case V:return A.key===F?p(E,y,A,_):null;case k:return A.key===F?N(E,y,A,_):null;case Ae:return A=Fl(A),R(E,y,A,_)}if(we(A)||be(A))return F!==null?null:O(E,y,A,_,null);if(typeof A.then=="function")return R(E,y,Di(A),_);if(A.$$typeof===G)return R(E,y,Ni(E,A),_);Oi(E,A)}return null}function C(E,y,A,_,F){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return E=E.get(A)||null,o(y,E,""+_,F);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case V:return E=E.get(_.key===null?A:_.key)||null,p(y,E,_,F);case k:return E=E.get(_.key===null?A:_.key)||null,N(y,E,_,F);case Ae:return _=Fl(_),C(E,y,A,_,F)}if(we(_)||be(_))return E=E.get(A)||null,O(y,E,_,F,null);if(typeof _.then=="function")return C(E,y,A,Di(_),F);if(_.$$typeof===G)return C(E,y,A,Ni(y,_),F);Oi(y,_)}return null}function J(E,y,A,_){for(var F=null,he=null,$=y,ue=y=0,se=null;$!==null&&ue<A.length;ue++){$.index>ue?(se=$,$=null):se=$.sibling;var pe=R(E,$,A[ue],_);if(pe===null){$===null&&($=se);break}e&&$&&pe.alternate===null&&t(E,$),y=i(pe,y,ue),he===null?F=pe:he.sibling=pe,he=pe,$=se}if(ue===A.length)return l(E,$),fe&&$t(E,ue),F;if($===null){for(;ue<A.length;ue++)$=M(E,A[ue],_),$!==null&&(y=i($,y,ue),he===null?F=$:he.sibling=$,he=$);return fe&&$t(E,ue),F}for($=a($);ue<A.length;ue++)se=C($,E,ue,A[ue],_),se!==null&&(e&&se.alternate!==null&&$.delete(se.key===null?ue:se.key),y=i(se,y,ue),he===null?F=se:he.sibling=se,he=se);return e&&$.forEach(function(Ul){return t(E,Ul)}),fe&&$t(E,ue),F}function te(E,y,A,_){if(A==null)throw Error(r(151));for(var F=null,he=null,$=y,ue=y=0,se=null,pe=A.next();$!==null&&!pe.done;ue++,pe=A.next()){$.index>ue?(se=$,$=null):se=$.sibling;var Ul=R(E,$,pe.value,_);if(Ul===null){$===null&&($=se);break}e&&$&&Ul.alternate===null&&t(E,$),y=i(Ul,y,ue),he===null?F=Ul:he.sibling=Ul,he=Ul,$=se}if(pe.done)return l(E,$),fe&&$t(E,ue),F;if($===null){for(;!pe.done;ue++,pe=A.next())pe=M(E,pe.value,_),pe!==null&&(y=i(pe,y,ue),he===null?F=pe:he.sibling=pe,he=pe);return fe&&$t(E,ue),F}for($=a($);!pe.done;ue++,pe=A.next())pe=C($,E,ue,pe.value,_),pe!==null&&(e&&pe.alternate!==null&&$.delete(pe.key===null?ue:pe.key),y=i(pe,y,ue),he===null?F=pe:he.sibling=pe,he=pe);return e&&$.forEach(function(lp){return t(E,lp)}),fe&&$t(E,ue),F}function Te(E,y,A,_){if(typeof A=="object"&&A!==null&&A.type===q&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case V:e:{for(var F=A.key;y!==null;){if(y.key===F){if(F=A.type,F===q){if(y.tag===7){l(E,y.sibling),_=n(y,A.props.children),_.return=E,E=_;break e}}else if(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ae&&Fl(F)===y.type){l(E,y.sibling),_=n(y,A.props),bn(_,A),_.return=E,E=_;break e}l(E,y);break}else t(E,y);y=y.sibling}A.type===q?(_=Kl(A.props.children,E.mode,_,A.key),_.return=E,E=_):(_=zi(A.type,A.key,A.props,null,E.mode,_),bn(_,A),_.return=E,E=_)}return c(E);case k:e:{for(F=A.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===A.containerInfo&&y.stateNode.implementation===A.implementation){l(E,y.sibling),_=n(y,A.children||[]),_.return=E,E=_;break e}else{l(E,y);break}else t(E,y);y=y.sibling}_=nc(A,E.mode,_),_.return=E,E=_}return c(E);case Ae:return A=Fl(A),Te(E,y,A,_)}if(we(A))return J(E,y,A,_);if(be(A)){if(F=be(A),typeof F!="function")throw Error(r(150));return A=F.call(A),te(E,y,A,_)}if(typeof A.then=="function")return Te(E,y,Di(A),_);if(A.$$typeof===G)return Te(E,y,Ni(E,A),_);Oi(E,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,y!==null&&y.tag===6?(l(E,y.sibling),_=n(y,A),_.return=E,E=_):(l(E,y),_=ac(A,E.mode,_),_.return=E,E=_),c(E)):l(E,y)}return function(E,y,A,_){try{vn=0;var F=Te(E,y,A,_);return Ra=null,F}catch($){if($===Na||$===ji)throw $;var he=gt(29,$,null,E.mode);return he.lanes=_,he.return=E,he}finally{}}}var Pl=ys(!0),vs=ys(!1),vl=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ge&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Ei(e),ts(e,null,l),t}return Si(e,a,t,l),Ei(e)}function xn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ro(e,l)}}function vc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var bc=!1;function Sn(){if(bc){var e=Aa;if(e!==null)throw e}}function En(e,t,l,a){bc=!1;var n=e.updateQueue;vl=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var p=o,N=p.next;p.next=null,c===null?i=N:c.next=N,c=p;var O=e.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==c&&(o===null?O.firstBaseUpdate=N:o.next=N,O.lastBaseUpdate=p))}if(i!==null){var M=n.baseState;c=0,O=N=p=null,o=i;do{var R=o.lane&-536870913,C=R!==o.lane;if(C?(oe&R)===R:(a&R)===R){R!==0&&R===Ta&&(bc=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var J=e,te=o;R=t;var Te=l;switch(te.tag){case 1:if(J=te.payload,typeof J=="function"){M=J.call(Te,M,R);break e}M=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,R=typeof J=="function"?J.call(Te,M,R):J,R==null)break e;M=z({},M,R);break e;case 2:vl=!0}}R=o.callback,R!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[R]:C.push(R))}else C={lane:R,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(N=O=C,p=M):O=O.next=C,c|=R;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;C=o,o=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);O===null&&(p=M),n.baseState=p,n.firstBaseUpdate=N,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),Al|=c,e.lanes=c,e.memoizedState=M}}function bs(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function xs(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)bs(l[e],t)}var ja=v(null),_i=v(0);function Ss(e,t){e=ul,Q(_i,e),Q(ja,t),ul=e|t.baseLanes}function xc(){Q(_i,ul),Q(ja,ja.current)}function Sc(){ul=_i.current,w(ja),w(_i)}var yt=v(null),Ot=null;function Sl(e){var t=e.alternate;Q(Ye,Ye.current&1),Q(yt,e),Ot===null&&(t===null||ja.current!==null||t.memoizedState!==null)&&(Ot=e)}function Ec(e){Q(Ye,Ye.current),Q(yt,e),Ot===null&&(Ot=e)}function Es(e){e.tag===22?(Q(Ye,Ye.current),Q(yt,e),Ot===null&&(Ot=e)):El()}function El(){Q(Ye,Ye.current),Q(yt,yt.current)}function vt(e){w(yt),Ot===e&&(Ot=null),w(Ye)}var Ye=v(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||jr(l)||Cr(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ie=null,Ee=null,Qe=null,wi=!1,Ca=!1,ea=!1,Ui=0,zn=0,Da=null,Kh=0;function Be(){throw Error(r(321))}function zc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!pt(e[l],t[l]))return!1;return!0}function Tc(e,t,l,a,n,i){return It=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?uf:Lc,ea=!1,i=l(a,n),ea=!1,Ca&&(i=Ts(t,l,a,n)),zs(e),i}function zs(e){D.H=Nn;var t=Ee!==null&&Ee.next!==null;if(It=0,Qe=Ee=ie=null,wi=!1,zn=0,Da=null,t)throw Error(r(300));e===null||Ge||(e=e.dependencies,e!==null&&Ai(e)&&(Ge=!0))}function Ts(e,t,l,a){ie=e;var n=0;do{if(Ca&&(Da=null),zn=0,Ca=!1,25<=n)throw Error(r(301));if(n+=1,Qe=Ee=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=cf,i=t(l,a)}while(Ca);return i}function kh(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Tn(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ie.flags|=1024),t}function Ac(){var e=Ui!==0;return Ui=0,e}function Nc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Rc(e){if(wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wi=!1}It=0,Qe=Ee=ie=null,Ca=!1,zn=Ui=0,Da=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Le(){if(Ee===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Qe===null?ie.memoizedState:Qe.next;if(t!==null)Qe=t,Ee=e;else{if(e===null)throw ie.alternate===null?Error(r(467)):Error(r(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Bi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tn(e){var t=zn;return zn+=1,Da===null&&(Da=[]),e=hs(Da,e,t),t=ie,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?uf:Lc),e}function Hi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tn(e);if(e.$$typeof===G)return et(e)}throw Error(r(438,String(e)))}function jc(e){var t=null,l=ie.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ie.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Bi(),ie.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ve;return t.index++,l}function Pt(e,t){return typeof t=="function"?t(e):t}function Yi(e){var t=Le();return Cc(t,Ee,e)}function Cc(e,t,l){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=c=null,p=null,N=t,O=!1;do{var M=N.lane&-536870913;if(M!==N.lane?(oe&M)===M:(It&M)===M){var R=N.revertLane;if(R===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),M===Ta&&(O=!0);else if((It&R)===R){N=N.next,R===Ta&&(O=!0);continue}else M={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(o=p=M,c=i):p=p.next=M,ie.lanes|=R,Al|=R;M=N.action,ea&&l(i,M),i=N.hasEagerState?N.eagerState:l(i,M)}else R={lane:M,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(o=p=R,c=i):p=p.next=R,ie.lanes|=M,Al|=M;N=N.next}while(N!==null&&N!==t);if(p===null?c=i:p.next=o,!pt(i,e.memoizedState)&&(Ge=!0,O&&(l=Aa,l!==null)))throw l;e.memoizedState=i,e.baseState=c,e.baseQueue=p,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Dc(e){var t=Le(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);pt(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function As(e,t,l){var a=ie,n=Le(),i=fe;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=t();var c=!pt((Ee||n).memoizedState,l);if(c&&(n.memoizedState=l,Ge=!0),n=n.queue,Mc(js.bind(null,a,n,e),[e]),n.getSnapshot!==t||c||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,Oa(9,{destroy:void 0},Rs.bind(null,a,n,l,t),null),Ne===null)throw Error(r(349));i||(It&127)!==0||Ns(a,t,l)}return l}function Ns(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ie.updateQueue,t===null?(t=Bi(),ie.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Rs(e,t,l,a){t.value=l,t.getSnapshot=a,Cs(t)&&Ds(e)}function js(e,t,l){return l(function(){Cs(t)&&Ds(e)})}function Cs(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!pt(e,l)}catch{return!0}}function Ds(e){var t=Vl(e,2);t!==null&&ht(t,e,2)}function Oc(e){var t=ut();if(typeof e=="function"){var l=e;if(e=l(),ea){Fe(!0);try{l()}finally{Fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Os(e,t,l,a){return e.baseState=l,Cc(e,Ee,typeof a=="function"?a:Pt)}function Jh(e,t,l,a,n){if(Xi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};D.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,_s(t,i)):(i.next=l.next,t.pending=l.next=i)}}function _s(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=D.T,c={};D.T=c;try{var o=l(n,a),p=D.S;p!==null&&p(c,o),Ms(e,t,o)}catch(N){_c(e,t,N)}finally{i!==null&&c.types!==null&&(i.types=c.types),D.T=i}}else try{i=l(n,a),Ms(e,t,i)}catch(N){_c(e,t,N)}}function Ms(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){ws(e,t,a)},function(a){return _c(e,t,a)}):ws(e,t,l)}function ws(e,t,l){t.status="fulfilled",t.value=l,Us(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,_s(e,l)))}function _c(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Us(t),t=t.next;while(t!==a)}e.action=null}function Us(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bs(e,t){return t}function Hs(e,t){if(fe){var l=Ne.formState;if(l!==null){e:{var a=ie;if(fe){if(je){t:{for(var n=je,i=Dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){je=_t(n.nextSibling),a=n.data==="F!";break e}}gl(a)}a=!1}a&&(t=l[0])}}return l=ut(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:t},l.queue=a,l=lf.bind(null,ie,a),a.dispatch=l,a=Oc(!1),i=Yc.bind(null,ie,!1,a.queue),a=ut(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Jh.bind(null,ie,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Ys(e){var t=Le();return Ls(t,Ee,e)}function Ls(e,t,l){if(t=Cc(e,t,Bs)[0],e=Yi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Tn(t)}catch(c){throw c===Na?ji:c}else a=t;t=Le();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(ie.flags|=2048,Oa(9,{destroy:void 0},$h.bind(null,n,l),null)),[a,i,e]}function $h(e,t){e.action=t}function qs(e){var t=Le(),l=Ee;if(l!==null)return Ls(t,l,e);Le(),t=t.memoizedState,l=Le();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Oa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ie.updateQueue,t===null&&(t=Bi(),ie.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Xs(){return Le().memoizedState}function Li(e,t,l,a){var n=ut();ie.flags|=e,n.memoizedState=Oa(1|t,{destroy:void 0},l,a===void 0?null:a)}function qi(e,t,l,a){var n=Le();a=a===void 0?null:a;var i=n.memoizedState.inst;Ee!==null&&a!==null&&zc(a,Ee.memoizedState.deps)?n.memoizedState=Oa(t,i,l,a):(ie.flags|=e,n.memoizedState=Oa(1|t,i,l,a))}function Qs(e,t){Li(8390656,8,e,t)}function Mc(e,t){qi(2048,8,e,t)}function Wh(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=Bi(),ie.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Gs(e){var t=Le().memoizedState;return Wh({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Zs(e,t){return qi(4,2,e,t)}function Vs(e,t){return qi(4,4,e,t)}function Ks(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ks(e,t,l){l=l!=null?l.concat([e]):null,qi(4,4,Ks.bind(null,t,e),l)}function wc(){}function Js(e,t){var l=Le();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&zc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function $s(e,t){var l=Le();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&zc(t,a[1]))return a[0];if(a=e(),ea){Fe(!0);try{e()}finally{Fe(!1)}}return l.memoizedState=[a,t],a}function Uc(e,t,l){return l===void 0||(It&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Ff(),ie.lanes|=e,Al|=e,l)}function Ws(e,t,l,a){return pt(l,t)?l:ja.current!==null?(e=Uc(e,l,a),pt(e,t)||(Ge=!0),e):(It&42)===0||(It&1073741824)!==0&&(oe&261930)===0?(Ge=!0,e.memoizedState=l):(e=Ff(),ie.lanes|=e,Al|=e,t)}function Fs(e,t,l,a,n){var i=X.p;X.p=i!==0&&8>i?i:8;var c=D.T,o={};D.T=o,Yc(e,!1,t,l);try{var p=n(),N=D.S;if(N!==null&&N(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var O=Vh(p,a);An(e,t,O,St(e))}else An(e,t,a,St(e))}catch(M){An(e,t,{then:function(){},status:"rejected",reason:M},St())}finally{X.p=i,c!==null&&o.types!==null&&(c.types=o.types),D.T=c}}function Fh(){}function Bc(e,t,l,a){if(e.tag!==5)throw Error(r(476));var n=Is(e).queue;Fs(e,n,t,P,l===null?Fh:function(){return Ps(e),l(a)})}function Is(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:P},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ps(e){var t=Is(e);t.next===null&&(t=e.alternate.memoizedState),An(e,t.next.queue,{},St())}function Hc(){return et(Qn)}function ef(){return Le().memoizedState}function tf(){return Le().memoizedState}function Ih(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=St();e=bl(l);var a=xl(t,e,l);a!==null&&(ht(a,t,l),xn(a,t,l)),t={cache:dc()},e.payload=t;return}t=t.return}}function Ph(e,t,l){var a=St();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Xi(e)?af(t,l):(l=tc(e,t,l,a),l!==null&&(ht(l,e,a),nf(l,t,a)))}function lf(e,t,l){var a=St();An(e,t,l,a)}function An(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xi(e))af(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,o=i(c,l);if(n.hasEagerState=!0,n.eagerState=o,pt(o,c))return Si(e,t,n,0),Ne===null&&xi(),!1}catch{}finally{}if(l=tc(e,t,n,a),l!==null)return ht(l,e,a),nf(l,t,a),!0}return!1}function Yc(e,t,l,a){if(a={lane:2,revertLane:gr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xi(e)){if(t)throw Error(r(479))}else t=tc(e,l,a,2),t!==null&&ht(t,e,2)}function Xi(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function af(e,t){Ca=wi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function nf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ro(e,l)}}var Nn={readContext:et,use:Hi,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};Nn.useEffectEvent=Be;var uf={readContext:et,use:Hi,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Qs,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Li(4194308,4,Ks.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){Li(4,2,e,t)},useMemo:function(e,t){var l=ut();t=t===void 0?null:t;var a=e();if(ea){Fe(!0);try{e()}finally{Fe(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ut();if(l!==void 0){var n=l(t);if(ea){Fe(!0);try{l(t)}finally{Fe(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Ph.bind(null,ie,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Oc(e);var t=e.queue,l=lf.bind(null,ie,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:wc,useDeferredValue:function(e,t){var l=ut();return Uc(l,e,t)},useTransition:function(){var e=Oc(!1);return e=Fs.bind(null,ie,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ie,n=ut();if(fe){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Ne===null)throw Error(r(349));(oe&127)!==0||Ns(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Qs(js.bind(null,a,i,e),[e]),a.flags|=2048,Oa(9,{destroy:void 0},Rs.bind(null,a,i,l,t),null),l},useId:function(){var e=ut(),t=Ne.identifierPrefix;if(fe){var l=Lt,a=Yt;l=(a&~(1<<32-_e(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ui++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Kh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hc,useFormState:Hs,useActionState:Hs,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Yc.bind(null,ie,!0,l),l.dispatch=t,[e,t]},useMemoCache:jc,useCacheRefresh:function(){return ut().memoizedState=Ih.bind(null,ie)},useEffectEvent:function(e){var t=ut(),l={impl:e};return t.memoizedState=l,function(){if((ge&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},Lc={readContext:et,use:Hi,useCallback:Js,useContext:et,useEffect:Mc,useImperativeHandle:ks,useInsertionEffect:Zs,useLayoutEffect:Vs,useMemo:$s,useReducer:Yi,useRef:Xs,useState:function(){return Yi(Pt)},useDebugValue:wc,useDeferredValue:function(e,t){var l=Le();return Ws(l,Ee.memoizedState,e,t)},useTransition:function(){var e=Yi(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:Tn(e),t]},useSyncExternalStore:As,useId:ef,useHostTransitionStatus:Hc,useFormState:Ys,useActionState:Ys,useOptimistic:function(e,t){var l=Le();return Os(l,Ee,e,t)},useMemoCache:jc,useCacheRefresh:tf};Lc.useEffectEvent=Gs;var cf={readContext:et,use:Hi,useCallback:Js,useContext:et,useEffect:Mc,useImperativeHandle:ks,useInsertionEffect:Zs,useLayoutEffect:Vs,useMemo:$s,useReducer:Dc,useRef:Xs,useState:function(){return Dc(Pt)},useDebugValue:wc,useDeferredValue:function(e,t){var l=Le();return Ee===null?Uc(l,e,t):Ws(l,Ee.memoizedState,e,t)},useTransition:function(){var e=Dc(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:Tn(e),t]},useSyncExternalStore:As,useId:ef,useHostTransitionStatus:Hc,useFormState:qs,useActionState:qs,useOptimistic:function(e,t){var l=Le();return Ee!==null?Os(l,Ee,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:jc,useCacheRefresh:tf};cf.useEffectEvent=Gs;function qc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:z({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Xc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=St(),n=bl(a);n.payload=t,l!=null&&(n.callback=l),t=xl(e,n,a),t!==null&&(ht(t,e,a),xn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=St(),n=bl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=xl(e,n,a),t!==null&&(ht(t,e,a),xn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=St(),a=bl(l);a.tag=2,t!=null&&(a.callback=t),t=xl(e,a,l),t!==null&&(ht(t,e,l),xn(t,e,l))}};function rf(e,t,l,a,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!dn(l,a)||!dn(n,i):!0}function of(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Xc.enqueueReplaceState(t,t.state,null)}function ta(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=z({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function sf(e){bi(e)}function ff(e){console.error(e)}function df(e){bi(e)}function Qi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function mf(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Qc(e,t,l){return l=bl(l),l.tag=3,l.payload={element:null},l.callback=function(){Qi(e,t)},l}function hf(e){return e=bl(e),e.tag=3,e}function pf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){mf(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){mf(t,l,a),typeof n!="function"&&(Nl===null?Nl=new Set([this]):Nl.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function e0(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&za(t,l,n,!0),l=yt.current,l!==null){switch(l.tag){case 31:case 13:return Ot===null?eu():l.alternate===null&&He===0&&(He=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Ci?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),mr(e,a,n)),!1;case 22:return l.flags|=65536,a===Ci?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),mr(e,a,n)),!1}throw Error(r(435,l.tag))}return mr(e,a,n),eu(),!1}if(fe)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==cc&&(e=Error(r(422),{cause:a}),pn(Rt(e,l)))):(a!==cc&&(t=Error(r(423),{cause:a}),pn(Rt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Rt(a,l),n=Qc(e.stateNode,a,n),vc(e,n),He!==4&&(He=2)),!1;var i=Error(r(520),{cause:a});if(i=Rt(i,l),wn===null?wn=[i]:wn.push(i),He!==4&&(He=2),t===null)return!0;a=Rt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Qc(l.stateNode,a,e),vc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Nl===null||!Nl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=hf(n),pf(n,e,l,a),vc(l,n),!1}l=l.return}while(l!==null);return!1}var Gc=Error(r(461)),Ge=!1;function tt(e,t,l,a){t.child=e===null?vs(t,null,l,a):Pl(t,e.child,l,a)}function gf(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var c={};for(var o in a)o!=="ref"&&(c[o]=a[o])}else c=a;return $l(t),a=Tc(e,t,l,c,i,n),o=Ac(),e!==null&&!Ge?(Nc(e,t,n),el(e,t,n)):(fe&&o&&ic(t),t.flags|=1,tt(e,t,a,n),t.child)}function yf(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!lc(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,vf(e,t,i,a,n)):(e=zi(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Fc(e,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:dn,l(c,a)&&e.ref===t.ref)return el(e,t,n)}return t.flags|=1,e=Jt(i,a),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(dn(i,a)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=a=i,Fc(e,n))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,el(e,t,n)}return Zc(e,t,l,a,n)}function bf(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return xf(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,i!==null?i.cachePool:null),i!==null?Ss(t,i):xc(),Es(t);else return a=t.lanes=536870912,xf(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Ri(t,i.cachePool),Ss(t,i),El(),t.memoizedState=null):(e!==null&&Ri(t,null),xc(),El());return tt(e,t,n,l),t.child}function Rn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function xf(e,t,l,a,n){var i=hc();return i=i===null?null:{parent:Xe._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Ri(t,null),xc(),Es(t),e!==null&&za(e,t,a,!0),t.childLanes=n,null}function Gi(e,t){return t=Vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,l){return Pl(t,e.child,null,l),e=Gi(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function t0(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(a.mode==="hidden")return e=Gi(t,a),t.lanes=536870912,Rn(null,e);if(Ec(t),(e=je)?(e=Md(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hl!==null?{id:Yt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},l=as(e),l.return=t,t.child=l,Pe=t,je=null)):e=null,e===null)throw gl(t);return t.lanes=536870912,null}return Gi(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Ec(t),n)if(t.flags&256)t.flags&=-257,t=Sf(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ge||za(e,t,l,!1),n=(l&e.childLanes)!==0,Ge||n){if(a=Ne,a!==null&&(c=oo(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,Vl(e,c),ht(a,e,c),Gc;eu(),t=Sf(e,t,l)}else e=i.treeContext,je=_t(c.nextSibling),Pe=t,fe=!0,pl=null,Dt=!1,e!==null&&us(t,e),t=Gi(t,a),t.flags|=4096;return t}return e=Jt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Zi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Zc(e,t,l,a,n){return $l(t),l=Tc(e,t,l,a,void 0,n),a=Ac(),e!==null&&!Ge?(Nc(e,t,n),el(e,t,n)):(fe&&a&&ic(t),t.flags|=1,tt(e,t,l,n),t.child)}function Ef(e,t,l,a,n,i){return $l(t),t.updateQueue=null,l=Ts(t,a,l,n),zs(e),a=Ac(),e!==null&&!Ge?(Nc(e,t,i),el(e,t,i)):(fe&&a&&ic(t),t.flags|=1,tt(e,t,l,i),t.child)}function zf(e,t,l,a,n){if($l(t),t.stateNode===null){var i=ba,c=l.contextType;typeof c=="object"&&c!==null&&(i=et(c)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},gc(t),c=l.contextType,i.context=typeof c=="object"&&c!==null?et(c):ba,i.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(qc(t,l,c,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Xc.enqueueReplaceState(i,i.state,null),En(t,a,i,n),Sn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,p=ta(l,o);i.props=p;var N=i.context,O=l.contextType;c=ba,typeof O=="object"&&O!==null&&(c=et(O));var M=l.getDerivedStateFromProps;O=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||N!==c)&&of(t,i,a,c),vl=!1;var R=t.memoizedState;i.state=R,En(t,a,i,n),Sn(),N=t.memoizedState,o||R!==N||vl?(typeof M=="function"&&(qc(t,l,M,a),N=t.memoizedState),(p=vl||rf(t,l,p,a,R,N,c))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=N),i.props=a,i.state=N,i.context=c,a=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,yc(e,t),c=t.memoizedProps,O=ta(l,c),i.props=O,M=t.pendingProps,R=i.context,N=l.contextType,p=ba,typeof N=="object"&&N!==null&&(p=et(N)),o=l.getDerivedStateFromProps,(N=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==M||R!==p)&&of(t,i,a,p),vl=!1,R=t.memoizedState,i.state=R,En(t,a,i,n),Sn();var C=t.memoizedState;c!==M||R!==C||vl||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof o=="function"&&(qc(t,l,o,a),C=t.memoizedState),(O=vl||rf(t,l,O,a,R,C,p)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,C,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,C,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=C),i.props=a,i.state=C,i.context=p,a=O):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Zi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Pl(t,e.child,null,n),t.child=Pl(t,null,l,n)):tt(e,t,l,n),t.memoizedState=i.state,e=t.child):e=el(e,t,n),e}function Tf(e,t,l,a){return kl(),t.flags|=256,tt(e,t,l,a),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(e){return{baseLanes:e,cachePool:ds()}}function kc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=xt),e}function Af(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?Sl(t):El(),(e=je)?(e=Md(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hl!==null?{id:Yt,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},l=as(e),l.return=t,t.child=l,Pe=t,je=null)):e=null,e===null)throw gl(t);return Cr(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,n?(El(),n=t.mode,o=Vi({mode:"hidden",children:o},n),a=Kl(a,n,l,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=Kc(l),a.childLanes=kc(e,c,l),t.memoizedState=Vc,Rn(null,a)):(Sl(t),Jc(t,o))}var p=e.memoizedState;if(p!==null&&(o=p.dehydrated,o!==null)){if(i)t.flags&256?(Sl(t),t.flags&=-257,t=$c(e,t,l)):t.memoizedState!==null?(El(),t.child=e.child,t.flags|=128,t=null):(El(),o=a.fallback,n=t.mode,a=Vi({mode:"visible",children:a.children},n),o=Kl(o,n,l,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,Pl(t,e.child,null,l),a=t.child,a.memoizedState=Kc(l),a.childLanes=kc(e,c,l),t.memoizedState=Vc,t=Rn(null,a));else if(Sl(t),Cr(o)){if(c=o.nextSibling&&o.nextSibling.dataset,c)var N=c.dgst;c=N,a=Error(r(419)),a.stack="",a.digest=c,pn({value:a,source:null,stack:null}),t=$c(e,t,l)}else if(Ge||za(e,t,l,!1),c=(l&e.childLanes)!==0,Ge||c){if(c=Ne,c!==null&&(a=oo(c,l),a!==0&&a!==p.retryLane))throw p.retryLane=a,Vl(e,a),ht(c,e,a),Gc;jr(o)||eu(),t=$c(e,t,l)}else jr(o)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,je=_t(o.nextSibling),Pe=t,fe=!0,pl=null,Dt=!1,e!==null&&us(t,e),t=Jc(t,a.children),t.flags|=4096);return t}return n?(El(),o=a.fallback,n=t.mode,p=e.child,N=p.sibling,a=Jt(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,N!==null?o=Jt(N,o):(o=Kl(o,n,l,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,Rn(null,a),a=t.child,o=e.child.memoizedState,o===null?o=Kc(l):(n=o.cachePool,n!==null?(p=Xe._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=ds(),o={baseLanes:o.baseLanes|l,cachePool:n}),a.memoizedState=o,a.childLanes=kc(e,c,l),t.memoizedState=Vc,Rn(e.child,a)):(Sl(t),l=e.child,e=l.sibling,l=Jt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function Jc(e,t){return t=Vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vi(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function $c(e,t,l){return Pl(t,e.child,null,l),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),sc(e.return,t,l)}function Wc(e,t,l,a,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=i)}function Rf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var c=Ye.current,o=(c&2)!==0;if(o?(c=c&1|2,t.flags|=128):c&=1,Q(Ye,c),tt(e,t,a,l),a=fe?hn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,l,t);else if(e.tag===19)Nf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Mi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Wc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Wc(t,!0,l,null,i,a);break;case"together":Wc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Al|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(za(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Jt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Jt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function l0(e,t,l){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),yl(t,Xe,e.memoizedState.cache),kl();break;case 27:case 5:sl(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:yl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ec(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Sl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Af(e,t,l):(Sl(t),e=el(e,t,l),e!==null?e.sibling:null);Sl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(za(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Rf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(Ye,Ye.current),a)break;return null;case 22:return t.lanes=0,bf(e,t,l,t.pendingProps);case 24:yl(t,Xe,e.memoizedState.cache)}return el(e,t,l)}function jf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!Fc(e,l)&&(t.flags&128)===0)return Ge=!1,l0(e,t,l);Ge=(e.flags&131072)!==0}else Ge=!1,fe&&(t.flags&1048576)!==0&&is(t,hn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Fl(t.elementType),t.type=e,typeof e=="function")lc(e)?(a=ta(e,a),t.tag=1,t=zf(null,t,e,a,l)):(t.tag=0,t=Zc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===I){t.tag=11,t=gf(null,t,e,a,l);break e}else if(n===W){t.tag=14,t=yf(null,t,e,a,l);break e}}throw t=at(e)||e,Error(r(306,t,""))}}return t;case 0:return Zc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ta(a,t.pendingProps),zf(e,t,a,n,l);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,yc(e,t),En(t,a,null,l);var c=t.memoizedState;if(a=c.cache,yl(t,Xe,a),a!==i.cache&&fc(t,[Xe],l,!0),Sn(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Tf(e,t,a,l);break e}else if(a!==n){n=Rt(Error(r(424)),t),pn(n),t=Tf(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=_t(e.firstChild),Pe=t,fe=!0,pl=null,Dt=!0,l=vs(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(kl(),a===n){t=el(e,t,l);break e}tt(e,t,a,l)}t=t.child}return t;case 26:return Zi(e,t),e===null?(l=Ld(t.type,null,t.pendingProps,null))?t.memoizedState=l:fe||(l=t.type,e=t.pendingProps,a=cu(Z.current).createElement(l),a[Ie]=t,a[rt]=e,lt(a,l,e),Je(a),t.stateNode=a):t.memoizedState=Ld(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sl(t),e===null&&fe&&(a=t.stateNode=Bd(t.type,t.pendingProps,Z.current),Pe=t,Dt=!0,n=je,Dl(t.type)?(Dr=n,je=_t(a.firstChild)):je=n),tt(e,t,t.pendingProps.children,l),Zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=a=je)&&(a=_0(a,t.type,t.pendingProps,Dt),a!==null?(t.stateNode=a,Pe=t,je=_t(a.firstChild),Dt=!1,n=!0):n=!1),n||gl(t)),sl(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,Ar(n,i)?a=null:c!==null&&Ar(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Tc(e,t,kh,null,null,l),Qn._currentValue=n),Zi(e,t),tt(e,t,a,l),t.child;case 6:return e===null&&fe&&((e=l=je)&&(l=M0(l,t.pendingProps,Dt),l!==null?(t.stateNode=l,Pe=t,je=null,e=!0):e=!1),e||gl(t)),null;case 13:return Af(e,t,l);case 4:return We(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Pl(t,null,a,l):tt(e,t,a,l),t.child;case 11:return gf(e,t,t.type,t.pendingProps,l);case 7:return tt(e,t,t.pendingProps,l),t.child;case 8:return tt(e,t,t.pendingProps.children,l),t.child;case 12:return tt(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,yl(t,t.type,a.value),tt(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,$l(t),n=et(n),a=a(n),t.flags|=1,tt(e,t,a,l),t.child;case 14:return yf(e,t,t.type,t.pendingProps,l);case 15:return vf(e,t,t.type,t.pendingProps,l);case 19:return Rf(e,t,l);case 31:return t0(e,t,l);case 22:return bf(e,t,l,t.pendingProps);case 24:return $l(t),a=et(Xe),e===null?(n=hc(),n===null&&(n=Ne,i=dc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},gc(t),yl(t,Xe,n)):((e.lanes&l)!==0&&(yc(e,t),En(t,null,null,l),Sn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),yl(t,Xe,a)):(a=i.cache,yl(t,Xe,a),a!==n.cache&&fc(t,[Xe],l,!0))),tt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function tl(e){e.flags|=4}function Ic(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(td())e.flags|=8192;else throw Il=Ci,pc}else e.flags&=-16777217}function Cf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zd(t))if(td())e.flags|=8192;else throw Il=Ci,pc}function Ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?uo():536870912,e.lanes|=t,Ua|=t)}function jn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function a0(e,t,l){var a=t.pendingProps;switch(uc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Xe),De(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rc())),Ce(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(tl(t),i!==null?(Ce(t),Cf(t,i)):(Ce(t),Ic(t,n,null,a,l))):i?i!==e.memoizedState?(tl(t),Ce(t),Cf(t,i)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&tl(t),Ce(t),Ic(t,n,e,a,l)),null;case 27:if(fl(t),l=Z.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ce(t),null}e=K.current,Ea(t)?cs(t):(e=Bd(n,a,l),t.stateNode=e,tl(t))}return Ce(t),null;case 5:if(fl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ce(t),null}if(i=K.current,Ea(t))cs(t);else{var c=cu(Z.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}i[Ie]=t,i[rt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(lt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&tl(t)}}return Ce(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=Z.current,Ea(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Pe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ad(e.nodeValue,l)),e||gl(t,!0)}else e=cu(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return Ce(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ea(t),l!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ie]=t}else kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else l=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ce(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ea(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ie]=t}else kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),n=!1}else n=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ki(t,t.updateQueue),Ce(t),null);case 4:return De(),e===null&&xr(t.stateNode.containerInfo),Ce(t),null;case 10:return Ft(t.type),Ce(t),null;case 19:if(w(Ye),a=t.memoizedState,a===null)return Ce(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)jn(a,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,jn(a,!1),e=i.updateQueue,t.updateQueue=e,Ki(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)ls(l,e),l=l.sibling;return Q(Ye,Ye.current&1|2),fe&&$t(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>Fi&&(t.flags|=128,n=!0,jn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Mi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ki(t,e),jn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!fe)return Ce(t),null}else 2*nt()-a.renderingStartTime>Fi&&l!==536870912&&(t.flags|=128,n=!0,jn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,l=Ye.current,Q(Ye,n?l&1|2:l&1),fe&&$t(t,a.treeForkCount),e):(Ce(t),null);case 22:case 23:return vt(t),Sc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),l=t.updateQueue,l!==null&&Ki(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&w(Wl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Xe),Ce(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function n0(e,t){switch(uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Xe),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fl(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(r(340));kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(Ye),null;case 4:return De(),null;case 10:return Ft(t.type),null;case 22:case 23:return vt(t),Sc(),e!==null&&w(Wl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Xe),null;case 25:return null;default:return null}}function Df(e,t){switch(uc(t),t.tag){case 3:Ft(Xe),De();break;case 26:case 27:case 5:fl(t);break;case 4:De();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:w(Ye);break;case 10:Ft(t.type);break;case 22:case 23:vt(t),Sc(),e!==null&&w(Wl);break;case 24:Ft(Xe)}}function Cn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(o){Se(t,t.return,o)}}function zl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var c=a.inst,o=c.destroy;if(o!==void 0){c.destroy=void 0,n=t;var p=l,N=o;try{N()}catch(O){Se(n,p,O)}}}a=a.next}while(a!==i)}}catch(O){Se(t,t.return,O)}}function Of(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{xs(t,l)}catch(a){Se(e,e.return,a)}}}function _f(e,t,l){l.props=ta(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Se(e,t,a)}}function Dn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Se(e,t,n)}}function qt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Se(e,t,n)}else l.current=null}function Mf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Se(e,e.return,n)}}function Pc(e,t,l){try{var a=e.stateNode;N0(a,e.type,l,t),a[rt]=t}catch(n){Se(e,e.return,n)}}function wf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dl(e.type)||e.tag===4}function er(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Kt));else if(a!==4&&(a===27&&Dl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(tr(e,t,l),e=e.sibling;e!==null;)tr(e,t,l),e=e.sibling}function ki(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Dl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(ki(e,t,l),e=e.sibling;e!==null;)ki(e,t,l),e=e.sibling}function Uf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);lt(t,a,l),t[Ie]=e,t[rt]=l}catch(i){Se(e,e.return,i)}}var ll=!1,Ze=!1,lr=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,$e=null;function i0(e,t){if(e=e.containerInfo,zr=hu,e=ko(e),$u(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var c=0,o=-1,p=-1,N=0,O=0,M=e,R=null;t:for(;;){for(var C;M!==l||n!==0&&M.nodeType!==3||(o=c+n),M!==i||a!==0&&M.nodeType!==3||(p=c+a),M.nodeType===3&&(c+=M.nodeValue.length),(C=M.firstChild)!==null;)R=M,M=C;for(;;){if(M===e)break t;if(R===l&&++N===n&&(o=c),R===i&&++O===a&&(p=c),(C=M.nextSibling)!==null)break;M=R,R=M.parentNode}M=C}l=o===-1||p===-1?null:{start:o,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;for(Tr={focusedElem:e,selectionRange:l},hu=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var J=ta(l.type,n);e=a.getSnapshotBeforeUpdate(J,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(te){Se(l,l.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Rr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Hf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:nl(e,l),a&4&&Cn(5,l);break;case 1:if(nl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){Se(l,l.return,c)}else{var n=ta(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Se(l,l.return,c)}}a&64&&Of(l),a&512&&Dn(l,l.return);break;case 3:if(nl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{xs(e,t)}catch(c){Se(l,l.return,c)}}break;case 27:t===null&&a&4&&Uf(l);case 26:case 5:nl(e,l),t===null&&a&4&&Mf(l),a&512&&Dn(l,l.return);break;case 12:nl(e,l);break;case 31:nl(e,l),a&4&&qf(e,l);break;case 13:nl(e,l),a&4&&Xf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=h0.bind(null,l),w0(e,l))));break;case 22:if(a=l.memoizedState!==null||ll,!a){t=t!==null&&t.memoizedState!==null||Ze,n=ll;var i=Ze;ll=a,(Ze=t)&&!i?il(e,l,(l.subtreeFlags&8772)!==0):nl(e,l),ll=n,Ze=i}break;case 30:break;default:nl(e,l)}}function Yf(e){var t=e.alternate;t!==null&&(e.alternate=null,Yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_u(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,st=!1;function al(e,t,l){for(l=l.child;l!==null;)Lf(e,t,l),l=l.sibling}function Lf(e,t,l){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ue,l)}catch{}switch(l.tag){case 26:Ze||qt(l,t),al(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ze||qt(l,t);var a=Oe,n=st;Dl(l.type)&&(Oe=l.stateNode,st=!1),al(e,t,l),Ln(l.stateNode),Oe=a,st=n;break;case 5:Ze||qt(l,t);case 6:if(a=Oe,n=st,Oe=null,al(e,t,l),Oe=a,st=n,Oe!==null)if(st)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(l.stateNode)}catch(i){Se(l,t,i)}else try{Oe.removeChild(l.stateNode)}catch(i){Se(l,t,i)}break;case 18:Oe!==null&&(st?(e=Oe,Od(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ga(e)):Od(Oe,l.stateNode));break;case 4:a=Oe,n=st,Oe=l.stateNode.containerInfo,st=!0,al(e,t,l),Oe=a,st=n;break;case 0:case 11:case 14:case 15:zl(2,l,t),Ze||zl(4,l,t),al(e,t,l);break;case 1:Ze||(qt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&_f(l,t,a)),al(e,t,l);break;case 21:al(e,t,l);break;case 22:Ze=(a=Ze)||l.memoizedState!==null,al(e,t,l),Ze=a;break;default:al(e,t,l)}}function qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ga(e)}catch(l){Se(t,t.return,l)}}}function Xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ga(e)}catch(l){Se(t,t.return,l)}}function u0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bf),t;default:throw Error(r(435,e.tag))}}function Ji(e,t){var l=u0(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=p0.bind(null,e,a);a.then(n,n)}})}function ft(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,c=t,o=c;e:for(;o!==null;){switch(o.tag){case 27:if(Dl(o.type)){Oe=o.stateNode,st=!1;break e}break;case 5:Oe=o.stateNode,st=!1;break e;case 3:case 4:Oe=o.stateNode.containerInfo,st=!0;break e}o=o.return}if(Oe===null)throw Error(r(160));Lf(i,c,n),Oe=null,st=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling}var Bt=null;function Qf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),dt(e),a&4&&(zl(3,e,e.return),Cn(3,e),zl(5,e,e.return));break;case 1:ft(t,e),dt(e),a&512&&(Ze||l===null||qt(l,l.return)),a&64&&ll&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Bt;if(ft(t,e),dt(e),a&512&&(Ze||l===null||qt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ln]||i[Ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),lt(i,a,l),i[Ie]=e,Je(i),a=i;break e;case"link":var c=Qd("link","href",n).get(a+(l.href||""));if(c){for(var o=0;o<c.length;o++)if(i=c[o],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(o,1);break t}}i=n.createElement(a),lt(i,a,l),n.head.appendChild(i);break;case"meta":if(c=Qd("meta","content",n).get(a+(l.content||""))){for(o=0;o<c.length;o++)if(i=c[o],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(o,1);break t}}i=n.createElement(a),lt(i,a,l),n.head.appendChild(i);break;default:throw Error(r(468,a))}i[Ie]=e,Je(i),a=i}e.stateNode=a}else Gd(n,e.type,e.stateNode);else e.stateNode=Xd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Gd(n,e.type,e.stateNode):Xd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Pc(e,e.memoizedProps,l.memoizedProps)}break;case 27:ft(t,e),dt(e),a&512&&(Ze||l===null||qt(l,l.return)),l!==null&&a&4&&Pc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ft(t,e),dt(e),a&512&&(Ze||l===null||qt(l,l.return)),e.flags&32){n=e.stateNode;try{da(n,"")}catch(J){Se(e,e.return,J)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Pc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(lr=!0);break;case 6:if(ft(t,e),dt(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(J){Se(e,e.return,J)}}break;case 3:if(su=null,n=Bt,Bt=ru(t.containerInfo),ft(t,e),Bt=n,dt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(J){Se(e,e.return,J)}lr&&(lr=!1,Gf(e));break;case 4:a=Bt,Bt=ru(e.stateNode.containerInfo),ft(t,e),dt(e),Bt=a;break;case 12:ft(t,e),dt(e);break;case 31:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 13:ft(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Wi=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 22:n=e.memoizedState!==null;var p=l!==null&&l.memoizedState!==null,N=ll,O=Ze;if(ll=N||n,Ze=O||p,ft(t,e),Ze=O,ll=N,dt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||p||ll||Ze||la(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){p=l=t;try{if(i=p.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{o=p.stateNode;var M=p.memoizedProps.style,R=M!=null&&M.hasOwnProperty("display")?M.display:null;o.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(J){Se(p,p.return,J)}}}else if(t.tag===6){if(l===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(J){Se(p,p.return,J)}}}else if(t.tag===18){if(l===null){p=t;try{var C=p.stateNode;n?_d(C,!0):_d(p.stateNode,!1)}catch(J){Se(p,p.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ji(e,l))));break;case 19:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 30:break;case 21:break;default:ft(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(wf(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,i=er(e);ki(e,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(da(c,""),l.flags&=-33);var o=er(e);ki(e,o,c);break;case 3:case 4:var p=l.stateNode.containerInfo,N=er(e);tr(e,N,p);break;default:throw Error(r(161))}}catch(O){Se(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hf(e,t.alternate,t),t=t.sibling}function la(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zl(4,t,t.return),la(t);break;case 1:qt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&_f(t,t.return,l),la(t);break;case 27:Ln(t.stateNode);case 26:case 5:qt(t,t.return),la(t);break;case 22:t.memoizedState===null&&la(t);break;case 30:la(t);break;default:la(t)}e=e.sibling}}function il(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:il(n,i,l),Cn(4,i);break;case 1:if(il(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){Se(a,a.return,N)}if(a=i,n=a.updateQueue,n!==null){var o=a.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)bs(p[n],o)}catch(N){Se(a,a.return,N)}}l&&c&64&&Of(i),Dn(i,i.return);break;case 27:Uf(i);case 26:case 5:il(n,i,l),l&&a===null&&c&4&&Mf(i),Dn(i,i.return);break;case 12:il(n,i,l);break;case 31:il(n,i,l),l&&c&4&&qf(n,i);break;case 13:il(n,i,l),l&&c&4&&Xf(n,i);break;case 22:i.memoizedState===null&&il(n,i,l),Dn(i,i.return);break;case 30:break;default:il(n,i,l)}t=t.sibling}}function ar(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&gn(l))}function nr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gn(e))}function Ht(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zf(e,t,l,a),t=t.sibling}function Zf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,l,a),n&2048&&Cn(9,t);break;case 1:Ht(e,t,l,a);break;case 3:Ht(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gn(e)));break;case 12:if(n&2048){Ht(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,o=i.onPostCommit;typeof o=="function"&&o(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Se(t,t.return,p)}}else Ht(e,t,l,a);break;case 31:Ht(e,t,l,a);break;case 13:Ht(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(e,t,l,a):On(e,t):i._visibility&2?Ht(e,t,l,a):(i._visibility|=2,_a(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ar(c,t);break;case 24:Ht(e,t,l,a),n&2048&&nr(t.alternate,t);break;default:Ht(e,t,l,a)}}function _a(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,o=l,p=a,N=c.flags;switch(c.tag){case 0:case 11:case 15:_a(i,c,o,p,n),Cn(8,c);break;case 23:break;case 22:var O=c.stateNode;c.memoizedState!==null?O._visibility&2?_a(i,c,o,p,n):On(i,c):(O._visibility|=2,_a(i,c,o,p,n)),n&&N&2048&&ar(c.alternate,c);break;case 24:_a(i,c,o,p,n),n&&N&2048&&nr(c.alternate,c);break;default:_a(i,c,o,p,n)}t=t.sibling}}function On(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:On(l,a),n&2048&&ar(a.alternate,a);break;case 24:On(l,a),n&2048&&nr(a.alternate,a);break;default:On(l,a)}t=t.sibling}}var _n=8192;function Ma(e,t,l){if(e.subtreeFlags&_n)for(e=e.child;e!==null;)Vf(e,t,l),e=e.sibling}function Vf(e,t,l){switch(e.tag){case 26:Ma(e,t,l),e.flags&_n&&e.memoizedState!==null&&K0(l,Bt,e.memoizedState,e.memoizedProps);break;case 5:Ma(e,t,l);break;case 3:case 4:var a=Bt;Bt=ru(e.stateNode.containerInfo),Ma(e,t,l),Bt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=_n,_n=16777216,Ma(e,t,l),_n=a):Ma(e,t,l));break;default:Ma(e,t,l)}}function Kf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];$e=a,Jf(a,e)}Kf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kf(e),e=e.sibling}function kf(e){switch(e.tag){case 0:case 11:case 15:Mn(e),e.flags&2048&&zl(9,e,e.return);break;case 3:Mn(e);break;case 12:Mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$i(e)):Mn(e);break;default:Mn(e)}}function $i(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];$e=a,Jf(a,e)}Kf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zl(8,t,t.return),$i(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,$i(t));break;default:$i(t)}e=e.sibling}}function Jf(e,t){for(;$e!==null;){var l=$e;switch(l.tag){case 0:case 11:case 15:zl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:gn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,$e=a;else e:for(l=e;$e!==null;){a=$e;var n=a.sibling,i=a.return;if(Yf(a),a===l){$e=null;break e}if(n!==null){n.return=i,$e=n;break e}$e=i}}}var c0={getCacheForType:function(e){var t=et(Xe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return et(Xe).controller.signal}},r0=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ne=null,ce=null,oe=0,xe=0,bt=null,Tl=!1,wa=!1,ir=!1,ul=0,He=0,Al=0,aa=0,ur=0,xt=0,Ua=0,wn=null,mt=null,cr=!1,Wi=0,$f=0,Fi=1/0,Ii=null,Nl=null,Ke=0,Rl=null,Ba=null,cl=0,rr=0,or=null,Wf=null,Un=0,sr=null;function St(){return(ge&2)!==0&&oe!==0?oe&-oe:D.T!==null?gr():so()}function Ff(){if(xt===0)if((oe&536870912)===0||fe){var e=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),xt=e}else xt=536870912;return e=yt.current,e!==null&&(e.flags|=32),xt}function ht(e,t,l){(e===Ne&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Ha(e,0),jl(e,oe,xt,!1)),tn(e,l),((ge&2)===0||e!==Ne)&&(e===Ne&&((ge&2)===0&&(aa|=l),He===4&&jl(e,oe,xt,!1)),Xt(e))}function If(e,t,l){if((ge&6)!==0)throw Error(r(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||en(e,t),n=a?f0(e,t):dr(e,t,!0),i=a;do{if(n===0){wa&&!a&&jl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!o0(l)){n=dr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var o=e;n=wn;var p=o.current.memoizedState.isDehydrated;if(p&&(Ha(o,c).flags|=256),c=dr(o,c,!1),c!==2){if(ir&&!p){o.errorRecoveryDisabledLanes|=i,aa|=i,n=4;break e}i=mt,mt=n,i!==null&&(mt===null?mt=i:mt.push.apply(mt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ha(e,0),jl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:jl(a,t,xt,!Tl);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=Wi+300-nt(),10<n)){if(jl(a,t,xt,!Tl),ri(a,0,!0)!==0)break e;cl=t,a.timeoutHandle=Cd(Pf.bind(null,a,l,mt,Ii,cr,t,xt,aa,Ua,Tl,i,"Throttled",-0,0),n);break e}Pf(a,l,mt,Ii,cr,t,xt,aa,Ua,Tl,i,null,-0,0)}}break}while(!0);Xt(e)}function Pf(e,t,l,a,n,i,c,o,p,N,O,M,R,C){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kt},Vf(t,i,M);var J=(i&62914560)===i?Wi-nt():(i&4194048)===i?$f-nt():0;if(J=k0(M,J),J!==null){cl=i,e.cancelPendingCommit=J(cd.bind(null,e,t,i,l,a,n,c,o,p,O,M,null,R,C)),jl(e,i,c,!N);return}}cd(e,t,i,l,a,n,c,o,p)}function o0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!pt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jl(e,t,l,a){t&=~ur,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-_e(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&co(e,l,t)}function Pi(){return(ge&6)===0?(Bn(0),!1):!0}function fr(){if(ce!==null){if(xe===0)var e=ce.return;else e=ce,Wt=Jl=null,Rc(e),Ra=null,vn=0,e=ce;for(;e!==null;)Df(e.alternate,e),e=e.return;ce=null}}function Ha(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,C0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),cl=0,fr(),Ne=e,ce=l=Jt(e.current,null),oe=t,xe=0,bt=null,Tl=!1,wa=en(e,t),ir=!1,Ua=xt=ur=aa=Al=He=0,mt=wn=null,cr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-_e(a),i=1<<n;t|=e[n],a&=~i}return ul=t,xi(),l}function ed(e,t){ie=null,D.H=Nn,t===Na||t===ji?(t=ps(),xe=3):t===pc?(t=ps(),xe=4):xe=t===Gc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,ce===null&&(He=1,Qi(e,Rt(t,e.current)))}function td(){var e=yt.current;return e===null?!0:(oe&4194048)===oe?Ot===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Ot:!1}function ld(){var e=D.H;return D.H=Nn,e===null?Nn:e}function ad(){var e=D.A;return D.A=c0,e}function eu(){He=4,Tl||(oe&4194048)!==oe&&yt.current!==null||(wa=!0),(Al&134217727)===0&&(aa&134217727)===0||Ne===null||jl(Ne,oe,xt,!1)}function dr(e,t,l){var a=ge;ge|=2;var n=ld(),i=ad();(Ne!==e||oe!==t)&&(Ii=null,Ha(e,t)),t=!1;var c=He;e:do try{if(xe!==0&&ce!==null){var o=ce,p=bt;switch(xe){case 8:fr(),c=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var N=xe;if(xe=0,bt=null,Ya(e,o,p,N),l&&wa){c=0;break e}break;default:N=xe,xe=0,bt=null,Ya(e,o,p,N)}}s0(),c=He;break}catch(O){ed(e,O)}while(!0);return t&&e.shellSuspendCounter++,Wt=Jl=null,ge=a,D.H=n,D.A=i,ce===null&&(Ne=null,oe=0,xi()),c}function s0(){for(;ce!==null;)nd(ce)}function f0(e,t){var l=ge;ge|=2;var a=ld(),n=ad();Ne!==e||oe!==t?(Ii=null,Fi=nt()+500,Ha(e,t)):wa=en(e,t);e:do try{if(xe!==0&&ce!==null){t=ce;var i=bt;t:switch(xe){case 1:xe=0,bt=null,Ya(e,t,i,1);break;case 2:case 9:if(ms(i)){xe=0,bt=null,id(t);break}t=function(){xe!==2&&xe!==9||Ne!==e||(xe=7),Xt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:ms(i)?(xe=0,bt=null,id(t)):(xe=0,bt=null,Ya(e,t,i,7));break;case 5:var c=null;switch(ce.tag){case 26:c=ce.memoizedState;case 5:case 27:var o=ce;if(c?Zd(c):o.stateNode.complete){xe=0,bt=null;var p=o.sibling;if(p!==null)ce=p;else{var N=o.return;N!==null?(ce=N,tu(N)):ce=null}break t}}xe=0,bt=null,Ya(e,t,i,5);break;case 6:xe=0,bt=null,Ya(e,t,i,6);break;case 8:fr(),He=6;break e;default:throw Error(r(462))}}d0();break}catch(O){ed(e,O)}while(!0);return Wt=Jl=null,D.H=a,D.A=n,ge=l,ce!==null?0:(Ne=null,oe=0,xi(),He)}function d0(){for(;ce!==null&&!li();)nd(ce)}function nd(e){var t=jf(e.alternate,e,ul);e.memoizedProps=e.pendingProps,t===null?tu(e):ce=t}function id(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Ef(l,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=Ef(l,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:Rc(t);default:Df(l,t),t=ce=ls(t,ul),t=jf(l,t,ul)}e.memoizedProps=e.pendingProps,t===null?tu(e):ce=t}function Ya(e,t,l,a){Wt=Jl=null,Rc(t),Ra=null,vn=0;var n=t.return;try{if(e0(e,n,t,l,oe)){He=1,Qi(e,Rt(l,e.current)),ce=null;return}}catch(i){if(n!==null)throw ce=n,i;He=1,Qi(e,Rt(l,e.current)),ce=null;return}t.flags&32768?(fe||a===1?e=!0:wa||(oe&536870912)!==0?e=!1:(Tl=e=!0,(a===2||a===9||a===3||a===6)&&(a=yt.current,a!==null&&a.tag===13&&(a.flags|=16384))),ud(t,e)):tu(t)}function tu(e){var t=e;do{if((t.flags&32768)!==0){ud(t,Tl);return}e=t.return;var l=a0(t.alternate,t,ul);if(l!==null){ce=l;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);He===0&&(He=5)}function ud(e,t){do{var l=n0(e.alternate,e);if(l!==null){l.flags&=32767,ce=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=l}while(e!==null);He=6,ce=null}function cd(e,t,l,a,n,i,c,o,p){e.cancelPendingCommit=null;do lu();while(Ke!==0);if((ge&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=ec,Vm(e,l,i,c,o,p),e===Ne&&(ce=Ne=null,oe=0),Ba=t,Rl=e,cl=l,rr=i,or=n,Wf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g0(Hl,function(){return dd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,n=X.p,X.p=2,c=ge,ge|=4;try{i0(e,t,l)}finally{ge=c,X.p=n,D.T=a}}Ke=1,rd(),od(),sd()}}function rd(){if(Ke===1){Ke=0;var e=Rl,t=Ba,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null;var a=X.p;X.p=2;var n=ge;ge|=4;try{Qf(t,e);var i=Tr,c=ko(e.containerInfo),o=i.focusedElem,p=i.selectionRange;if(c!==o&&o&&o.ownerDocument&&Ko(o.ownerDocument.documentElement,o)){if(p!==null&&$u(o)){var N=p.start,O=p.end;if(O===void 0&&(O=N),"selectionStart"in o)o.selectionStart=N,o.selectionEnd=Math.min(O,o.value.length);else{var M=o.ownerDocument||document,R=M&&M.defaultView||window;if(R.getSelection){var C=R.getSelection(),J=o.textContent.length,te=Math.min(p.start,J),Te=p.end===void 0?te:Math.min(p.end,J);!C.extend&&te>Te&&(c=Te,Te=te,te=c);var E=Vo(o,te),y=Vo(o,Te);if(E&&y&&(C.rangeCount!==1||C.anchorNode!==E.node||C.anchorOffset!==E.offset||C.focusNode!==y.node||C.focusOffset!==y.offset)){var A=M.createRange();A.setStart(E.node,E.offset),C.removeAllRanges(),te>Te?(C.addRange(A),C.extend(y.node,y.offset)):(A.setEnd(y.node,y.offset),C.addRange(A))}}}}for(M=[],C=o;C=C.parentNode;)C.nodeType===1&&M.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<M.length;o++){var _=M[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}hu=!!zr,Tr=zr=null}finally{ge=n,X.p=a,D.T=l}}e.current=t,Ke=2}}function od(){if(Ke===2){Ke=0;var e=Rl,t=Ba,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=D.T,D.T=null;var a=X.p;X.p=2;var n=ge;ge|=4;try{Hf(e,t.alternate,t)}finally{ge=n,X.p=a,D.T=l}}Ke=3}}function sd(){if(Ke===4||Ke===3){Ke=0,ai();var e=Rl,t=Ba,l=cl,a=Wf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Ba=Rl=null,fd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Nl=null),Du(l),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=D.T,n=X.p,X.p=2,D.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var o=a[c];i(o.value,{componentStack:o.stack})}}finally{D.T=t,X.p=n}}(cl&3)!==0&&lu(),Xt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===sr?Un++:(Un=0,sr=e):Un=0,Bn(0)}}function fd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gn(t)))}function lu(){return rd(),od(),sd(),dd()}function dd(){if(Ke!==5)return!1;var e=Rl,t=rr;rr=0;var l=Du(cl),a=D.T,n=X.p;try{X.p=32>l?32:l,D.T=null,l=or,or=null;var i=Rl,c=cl;if(Ke=0,Ba=Rl=null,cl=0,(ge&6)!==0)throw Error(r(331));var o=ge;if(ge|=4,kf(i.current),Zf(i,i.current,c,l),ge=o,Bn(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ue,i)}catch{}return!0}finally{X.p=n,D.T=a,fd(e,t)}}function md(e,t,l){t=Rt(l,t),t=Qc(e.stateNode,t,2),e=xl(e,t,2),e!==null&&(tn(e,2),Xt(e))}function Se(e,t,l){if(e.tag===3)md(e,e,l);else for(;t!==null;){if(t.tag===3){md(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Nl===null||!Nl.has(a))){e=Rt(l,e),l=hf(2),a=xl(t,l,2),a!==null&&(pf(l,a,t,e),tn(a,2),Xt(a));break}}t=t.return}}function mr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new r0;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(ir=!0,n.add(l),e=m0.bind(null,e,t,l),t.then(e,e))}function m0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ne===e&&(oe&l)===l&&(He===4||He===3&&(oe&62914560)===oe&&300>nt()-Wi?(ge&2)===0&&Ha(e,0):ur|=l,Ua===oe&&(Ua=0)),Xt(e)}function hd(e,t){t===0&&(t=uo()),e=Vl(e,t),e!==null&&(tn(e,t),Xt(e))}function h0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),hd(e,l)}function p0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),hd(e,l)}function g0(e,t){return $a(e,t)}var au=null,La=null,hr=!1,nu=!1,pr=!1,Cl=0;function Xt(e){e!==La&&e.next===null&&(La===null?au=La=e:La=La.next=e),nu=!0,hr||(hr=!0,v0())}function Bn(e,t){if(!pr&&nu){pr=!0;do for(var l=!1,a=au;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-_e(42|e)+1)-1,i&=n&~(c&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,vd(a,i))}else i=oe,i=ri(a,a===Ne?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||en(a,i)||(l=!0,vd(a,i));a=a.next}while(l);pr=!1}}function y0(){pd()}function pd(){nu=hr=!1;var e=0;Cl!==0&&j0()&&(e=Cl);for(var t=nt(),l=null,a=au;a!==null;){var n=a.next,i=gd(a,t);i===0?(a.next=null,l===null?au=n:l.next=n,n===null&&(La=l)):(l=a,(e!==0||(i&3)!==0)&&(nu=!0)),a=n}Ke!==0&&Ke!==5||Bn(e),Cl!==0&&(Cl=0)}function gd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-_e(i),o=1<<c,p=n[c];p===-1?((o&l)===0||(o&a)!==0)&&(n[c]=Zm(o,t)):p<=t&&(e.expiredLanes|=o),i&=~o}if(t=Ne,l=oe,l=ri(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Wa(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||en(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Wa(a),Du(l)){case 2:case 8:l=Ia;break;case 32:l=Hl;break;case 268435456:l=Pa;break;default:l=Hl}return a=yd.bind(null,e),l=$a(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Wa(a),e.callbackPriority=2,e.callbackNode=null,2}function yd(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(lu()&&e.callbackNode!==l)return null;var a=oe;return a=ri(e,e===Ne?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(If(e,a,t),gd(e,nt()),e.callbackNode!=null&&e.callbackNode===l?yd.bind(null,e):null)}function vd(e,t){if(lu())return null;If(e,t,!0)}function v0(){D0(function(){(ge&6)!==0?$a(Fa,y0):pd()})}function gr(){if(Cl===0){var e=Ta;e===0&&(e=ct,ct<<=1,(ct&261888)===0&&(ct=256)),Cl=e}return Cl}function bd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:di(""+e)}function xd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function b0(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=bd((n[rt]||null).action),c=a.submitter;c&&(t=(t=c[rt]||null)?bd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var o=new gi("action","action",null,a,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Cl!==0){var p=c?xd(n,c):new FormData(n);Bc(l,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(o.preventDefault(),p=c?xd(n,c):new FormData(n),Bc(l,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var yr=0;yr<Pu.length;yr++){var vr=Pu[yr],x0=vr.toLowerCase(),S0=vr[0].toUpperCase()+vr.slice(1);Ut(x0,"on"+S0)}Ut(Wo,"onAnimationEnd"),Ut(Fo,"onAnimationIteration"),Ut(Io,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(Hh,"onTransitionRun"),Ut(Yh,"onTransitionStart"),Ut(Lh,"onTransitionCancel"),Ut(Po,"onTransitionEnd"),sa("onMouseEnter",["mouseout","mouseover"]),sa("onMouseLeave",["mouseout","mouseover"]),sa("onPointerEnter",["pointerout","pointerover"]),sa("onPointerLeave",["pointerout","pointerover"]),Xl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn));function Sd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var o=a[c],p=o.instance,N=o.currentTarget;if(o=o.listener,p!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=N;try{i(n)}catch(O){bi(O)}n.currentTarget=null,i=p}else for(c=0;c<a.length;c++){if(o=a[c],p=o.instance,N=o.currentTarget,o=o.listener,p!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=N;try{i(n)}catch(O){bi(O)}n.currentTarget=null,i=p}}}}function re(e,t){var l=t[Ou];l===void 0&&(l=t[Ou]=new Set);var a=e+"__bubble";l.has(a)||(Ed(t,e,2,!1),l.add(a))}function br(e,t,l){var a=0;t&&(a|=4),Ed(l,e,a,t)}var iu="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[iu]){e[iu]=!0,ho.forEach(function(l){l!=="selectionchange"&&(E0.has(l)||br(l,!1,e),br(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[iu]||(t[iu]=!0,br("selectionchange",!1,t))}}function Ed(e,t,l,a){switch(Fd(t)){case 2:var n=W0;break;case 8:n=F0;break;default:n=Ur}l=n.bind(null,t,l,e),n=void 0,!qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Sr(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var o=a.stateNode.containerInfo;if(o===n)break;if(c===4)for(c=a.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;o!==null;){if(c=ca(o),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){a=i=c;continue e}o=o.parentNode}}a=a.return}No(function(){var N=i,O=Yu(l),M=[];e:{var R=es.get(e);if(R!==void 0){var C=gi,J=e;switch(e){case"keypress":if(hi(l)===0)break e;case"keydown":case"keyup":C=ph;break;case"focusin":J="focus",C=Zu;break;case"focusout":J="blur",C=Zu;break;case"beforeblur":case"afterblur":C=Zu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=vh;break;case Wo:case Fo:case Io:C=uh;break;case Po:C=xh;break;case"scroll":case"scrollend":C=th;break;case"wheel":C=Eh;break;case"copy":case"cut":case"paste":C=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Oo;break;case"toggle":case"beforetoggle":C=Th}var te=(t&4)!==0,Te=!te&&(e==="scroll"||e==="scrollend"),E=te?R!==null?R+"Capture":null:R;te=[];for(var y=N,A;y!==null;){var _=y;if(A=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||A===null||E===null||(_=nn(y,E),_!=null&&te.push(Yn(y,_,A))),Te)break;y=y.return}0<te.length&&(R=new C(R,J,null,l,O),M.push({event:R,listeners:te}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",R&&l!==Hu&&(J=l.relatedTarget||l.fromElement)&&(ca(J)||J[ua]))break e;if((C||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,C?(J=l.relatedTarget||l.toElement,C=N,J=J?ca(J):null,J!==null&&(Te=h(J),te=J.tag,J!==Te||te!==5&&te!==27&&te!==6)&&(J=null)):(C=null,J=N),C!==J)){if(te=Co,_="onMouseLeave",E="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(te=Oo,_="onPointerLeave",E="onPointerEnter",y="pointer"),Te=C==null?R:an(C),A=J==null?R:an(J),R=new te(_,y+"leave",C,l,O),R.target=Te,R.relatedTarget=A,_=null,ca(O)===N&&(te=new te(E,y+"enter",J,l,O),te.target=A,te.relatedTarget=Te,_=te),Te=_,C&&J)t:{for(te=z0,E=C,y=J,A=0,_=E;_;_=te(_))A++;_=0;for(var F=y;F;F=te(F))_++;for(;0<A-_;)E=te(E),A--;for(;0<_-A;)y=te(y),_--;for(;A--;){if(E===y||y!==null&&E===y.alternate){te=E;break t}E=te(E),y=te(y)}te=null}else te=null;C!==null&&zd(M,R,C,te,!1),J!==null&&Te!==null&&zd(M,Te,J,te,!0)}}e:{if(R=N?an(N):window,C=R.nodeName&&R.nodeName.toLowerCase(),C==="select"||C==="input"&&R.type==="file")var he=Lo;else if(Ho(R))if(qo)he=wh;else{he=_h;var $=Oh}else C=R.nodeName,!C||C.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?N&&Bu(N.elementType)&&(he=Lo):he=Mh;if(he&&(he=he(e,N))){Yo(M,he,l,O);break e}$&&$(e,R,N),e==="focusout"&&N&&R.type==="number"&&N.memoizedProps.value!=null&&Uu(R,"number",R.value)}switch($=N?an(N):window,e){case"focusin":(Ho($)||$.contentEditable==="true")&&(ga=$,Wu=N,mn=null);break;case"focusout":mn=Wu=ga=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Jo(M,l,O);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Jo(M,l,O)}var ue;if(Ku)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else pa?Uo(e,l)&&(se="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(se="onCompositionStart");se&&(_o&&l.locale!=="ko"&&(pa||se!=="onCompositionStart"?se==="onCompositionEnd"&&pa&&(ue=Ro()):(ml=O,Xu="value"in ml?ml.value:ml.textContent,pa=!0)),$=uu(N,se),0<$.length&&(se=new Do(se,e,null,l,O),M.push({event:se,listeners:$}),ue?se.data=ue:(ue=Bo(l),ue!==null&&(se.data=ue)))),(ue=Nh?Rh(e,l):jh(e,l))&&(se=uu(N,"onBeforeInput"),0<se.length&&($=new Do("onBeforeInput","beforeinput",null,l,O),M.push({event:$,listeners:se}),$.data=ue)),b0(M,e,N,l,O)}Sd(M,t)})}function Yn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function uu(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=nn(e,l),n!=null&&a.unshift(Yn(e,n,i)),n=nn(e,t),n!=null&&a.push(Yn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function z0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zd(e,t,l,a,n){for(var i=t._reactName,c=[];l!==null&&l!==a;){var o=l,p=o.alternate,N=o.stateNode;if(o=o.tag,p!==null&&p===a)break;o!==5&&o!==26&&o!==27||N===null||(p=N,n?(N=nn(l,i),N!=null&&c.unshift(Yn(l,N,p))):n||(N=nn(l,i),N!=null&&c.push(Yn(l,N,p)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var T0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(T0,`
`).replace(A0,"")}function Ad(e,t){return t=Td(t),Td(e)===t}function ze(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||da(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&da(e,""+a);break;case"className":si(e,"class",a);break;case"tabIndex":si(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,l,a);break;case"style":To(e,a,i);break;case"data":if(t!=="object"){si(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=di(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&ze(e,t,"name",n.name,n,null),ze(e,t,"formEncType",n.formEncType,n,null),ze(e,t,"formMethod",n.formMethod,n,null),ze(e,t,"formTarget",n.formTarget,n,null)):(ze(e,t,"encType",n.encType,n,null),ze(e,t,"method",n.method,n,null),ze(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=di(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Kt);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=di(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":re("beforetoggle",e),re("toggle",e),oi(e,"popover",a);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":oi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Pm.get(l)||l,oi(e,l,a))}}function Er(e,t,l,a,n,i){switch(l){case"style":To(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof a=="string"?da(e,a):(typeof a=="number"||typeof a=="bigint")&&da(e,""+a);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!po.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[rt]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):oi(e,l,a)}}}function lt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,i,c,l,null)}}n&&ze(e,t,"srcSet",l.srcSet,l,null),a&&ze(e,t,"src",l.src,l,null);return;case"input":re("invalid",e);var o=i=c=n=null,p=null,N=null;for(a in l)if(l.hasOwnProperty(a)){var O=l[a];if(O!=null)switch(a){case"name":n=O;break;case"type":c=O;break;case"checked":p=O;break;case"defaultChecked":N=O;break;case"value":i=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:ze(e,t,a,O,l,null)}}xo(e,i,o,p,N,c,n,!1);return;case"select":re("invalid",e),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":c=o;break;case"multiple":a=o;default:ze(e,t,n,o,l,null)}t=i,l=c,e.multiple=!!a,t!=null?fa(e,!!a,t,!1):l!=null&&fa(e,!!a,l,!0);return;case"textarea":re("invalid",e),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(o=l[c],o!=null))switch(c){case"value":a=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:ze(e,t,c,o,l,null)}Eo(e,a,n,i);return;case"option":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ze(e,t,p,a,l,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(a=0;a<Hn.length;a++)re(Hn[a],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in l)if(l.hasOwnProperty(N)&&(a=l[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,N,a,l,null)}return;default:if(Bu(t)){for(O in l)l.hasOwnProperty(O)&&(a=l[O],a!==void 0&&Er(e,t,O,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&ze(e,t,o,a,l,null))}function N0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,o=null,p=null,N=null,O=null;for(C in l){var M=l[C];if(l.hasOwnProperty(C)&&M!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":p=M;default:a.hasOwnProperty(C)||ze(e,t,C,null,a,M)}}for(var R in a){var C=a[R];if(M=l[R],a.hasOwnProperty(R)&&(C!=null||M!=null))switch(R){case"type":i=C;break;case"name":n=C;break;case"checked":N=C;break;case"defaultChecked":O=C;break;case"value":c=C;break;case"defaultValue":o=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,t));break;default:C!==M&&ze(e,t,R,C,a,M)}}wu(e,c,o,p,N,O,i,n);return;case"select":C=c=o=R=null;for(i in l)if(p=l[i],l.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":C=p;default:a.hasOwnProperty(i)||ze(e,t,i,null,a,p)}for(n in a)if(i=a[n],p=l[n],a.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":R=i;break;case"defaultValue":o=i;break;case"multiple":c=i;default:i!==p&&ze(e,t,n,i,a,p)}t=o,l=c,a=C,R!=null?fa(e,!!l,R,!1):!!a!=!!l&&(t!=null?fa(e,!!l,t,!0):fa(e,!!l,l?[]:"",!1));return;case"textarea":C=R=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ze(e,t,o,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":R=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&ze(e,t,c,n,a,i)}So(e,R,C);return;case"option":for(var J in l)if(R=l[J],l.hasOwnProperty(J)&&R!=null&&!a.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:ze(e,t,J,null,a,R)}for(p in a)if(R=a[p],C=l[p],a.hasOwnProperty(p)&&R!==C&&(R!=null||C!=null))switch(p){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ze(e,t,p,R,a,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in l)R=l[te],l.hasOwnProperty(te)&&R!=null&&!a.hasOwnProperty(te)&&ze(e,t,te,null,a,R);for(N in a)if(R=a[N],C=l[N],a.hasOwnProperty(N)&&R!==C&&(R!=null||C!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:ze(e,t,N,R,a,C)}return;default:if(Bu(t)){for(var Te in l)R=l[Te],l.hasOwnProperty(Te)&&R!==void 0&&!a.hasOwnProperty(Te)&&Er(e,t,Te,void 0,a,R);for(O in a)R=a[O],C=l[O],!a.hasOwnProperty(O)||R===C||R===void 0&&C===void 0||Er(e,t,O,R,a,C);return}}for(var E in l)R=l[E],l.hasOwnProperty(E)&&R!=null&&!a.hasOwnProperty(E)&&ze(e,t,E,null,a,R);for(M in a)R=a[M],C=l[M],!a.hasOwnProperty(M)||R===C||R==null&&C==null||ze(e,t,M,R,a,C)}function Nd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function R0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,c=n.initiatorType,o=n.duration;if(i&&o&&Nd(c)){for(c=0,o=n.responseEnd,a+=1;a<l.length;a++){var p=l[a],N=p.startTime;if(N>o)break;var O=p.transferSize,M=p.initiatorType;O&&Nd(M)&&(p=p.responseEnd,c+=O*(p<o?1:(o-N)/(p-N)))}if(--a,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zr=null,Tr=null;function cu(e){return e.nodeType===9?e:e.ownerDocument}function Rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ar(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nr=null;function j0(){var e=window.event;return e&&e.type==="popstate"?e===Nr?!1:(Nr=e,!0):(Nr=null,!1)}var Cd=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(e){return Dd.resolve(null).then(e).catch(O0)}:Cd;function O0(e){setTimeout(function(){throw e})}function Dl(e){return e==="head"}function Od(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ga(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Ln(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Ln(l);for(var i=l.firstChild;i;){var c=i.nextSibling,o=i.nodeName;i[ln]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&Ln(e.ownerDocument.body);l=n}while(l);Ga(t)}function _d(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Rr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Rr(l),_u(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function _0(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ln])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function M0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=_t(e.nextSibling),e===null))return null;return e}function Md(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function jr(e){return e.data==="$?"||e.data==="$~"}function Cr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function w0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dr=null;function wd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return _t(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Bd(e,t,l){switch(t=cu(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ln(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_u(e)}var Mt=new Map,Hd=new Set;function ru(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rl=X.d;X.d={f:U0,r:B0,D:H0,C:Y0,L:L0,m:q0,X:Q0,S:X0,M:G0};function U0(){var e=rl.f(),t=Pi();return e||t}function B0(e){var t=ra(e);t!==null&&t.tag===5&&t.type==="form"?Ps(t):rl.r(e)}var qa=typeof document>"u"?null:document;function Yd(e,t,l){var a=qa;if(a&&typeof t=="string"&&t){var n=At(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Hd.has(n)||(Hd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),lt(t,"link",e),Je(t),a.head.appendChild(t)))}}function H0(e){rl.D(e),Yd("dns-prefetch",e,null)}function Y0(e,t){rl.C(e,t),Yd("preconnect",e,t)}function L0(e,t,l){rl.L(e,t,l);var a=qa;if(a&&e&&t){var n='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+At(l.imageSizes)+'"]')):n+='[href="'+At(e)+'"]';var i=n;switch(t){case"style":i=Xa(e);break;case"script":i=Qa(e)}Mt.has(i)||(e=z({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Mt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(qn(i))||t==="script"&&a.querySelector(Xn(i))||(t=a.createElement("link"),lt(t,"link",e),Je(t),a.head.appendChild(t)))}}function q0(e,t){rl.m(e,t);var l=qa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+At(a)+'"][href="'+At(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Qa(e)}if(!Mt.has(i)&&(e=z({rel:"modulepreload",href:e},t),Mt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Xn(i)))return}a=l.createElement("link"),lt(a,"link",e),Je(a),l.head.appendChild(a)}}}function X0(e,t,l){rl.S(e,t,l);var a=qa;if(a&&e){var n=oa(a).hoistableStyles,i=Xa(e);t=t||"default";var c=n.get(i);if(!c){var o={loading:0,preload:null};if(c=a.querySelector(qn(i)))o.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Mt.get(i))&&Or(e,l);var p=c=a.createElement("link");Je(p),lt(p,"link",e),p._p=new Promise(function(N,O){p.onload=N,p.onerror=O}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ou(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:o},n.set(i,c)}}}function Q0(e,t){rl.X(e,t);var l=qa;if(l&&e){var a=oa(l).hoistableScripts,n=Qa(e),i=a.get(n);i||(i=l.querySelector(Xn(n)),i||(e=z({src:e,async:!0},t),(t=Mt.get(n))&&_r(e,t),i=l.createElement("script"),Je(i),lt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function G0(e,t){rl.M(e,t);var l=qa;if(l&&e){var a=oa(l).hoistableScripts,n=Qa(e),i=a.get(n);i||(i=l.querySelector(Xn(n)),i||(e=z({src:e,async:!0,type:"module"},t),(t=Mt.get(n))&&_r(e,t),i=l.createElement("script"),Je(i),lt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Ld(e,t,l,a){var n=(n=Z.current)?ru(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Xa(l.href),l=oa(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Xa(l.href);var i=oa(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(qn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Mt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Mt.set(e,l),i||Z0(n,e,l,c.state))),t&&a===null)throw Error(r(528,""));return c}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qa(l),l=oa(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Xa(e){return'href="'+At(e)+'"'}function qn(e){return'link[rel="stylesheet"]['+e+"]"}function qd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function Z0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),lt(t,"link",l),Je(t),e.head.appendChild(t))}function Qa(e){return'[src="'+At(e)+'"]'}function Xn(e){return"script[async]"+e}function Xd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+At(l.href)+'"]');if(a)return t.instance=a,Je(a),a;var n=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),lt(a,"style",n),ou(a,l.precedence,e),t.instance=a;case"stylesheet":n=Xa(l.href);var i=e.querySelector(qn(n));if(i)return t.state.loading|=4,t.instance=i,Je(i),i;a=qd(l),(n=Mt.get(n))&&Or(a,n),i=(e.ownerDocument||e).createElement("link"),Je(i);var c=i;return c._p=new Promise(function(o,p){c.onload=o,c.onerror=p}),lt(i,"link",a),t.state.loading|=4,ou(i,l.precedence,e),t.instance=i;case"script":return i=Qa(l.src),(n=e.querySelector(Xn(i)))?(t.instance=n,Je(n),n):(a=l,(n=Mt.get(i))&&(a=z({},l),_r(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Je(n),lt(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ou(a,l.precedence,e));return t.instance}function ou(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var o=a[c];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _r(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var su=null;function Qd(e,t,l){if(su===null){var a=new Map,n=su=new Map;n.set(l,a)}else n=su,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[ln]||i[Ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var o=a.get(c);o?o.push(i):a.set(c,[i])}}return a}function Gd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function V0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function K0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Xa(a.href),i=t.querySelector(qn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Je(i);return}i=t.ownerDocument||t,a=qd(a),(n=Mt.get(n))&&Or(a,n),i=i.createElement("link"),Je(i);var c=i;c._p=new Promise(function(o,p){c.onload=o,c.onerror=p}),lt(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=fu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Mr=0;function k0(e,t){return e.stylesheets&&e.count===0&&mu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Mr===0&&(Mr=62500*R0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Mr?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var du=null;function mu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,du=new Map,t.forEach(J0,e),du=null,fu.call(e))}function J0(e,t){if(!(t.state.loading&4)){var l=du.get(e);if(l)var a=l.get(null);else{l=new Map,du.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=fu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Qn={$$typeof:G,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function $0(e,t,l,a,n,i,c,o,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ju(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.hiddenUpdates=ju(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Vd(e,t,l,a,n,i,c,o,p,N,O,M){return e=new $0(e,t,l,c,p,N,O,M,o),t=1,i===!0&&(t|=24),i=gt(3,null,null,t),e.current=i,i.stateNode=e,t=dc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},gc(i),e}function Kd(e){return e?(e=ba,e):ba}function kd(e,t,l,a,n,i){n=Kd(n),a.context===null?a.context=n:a.pendingContext=n,a=bl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=xl(e,a,t),l!==null&&(ht(l,e,t),xn(l,e,t))}function Jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function wr(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function $d(e){if(e.tag===13||e.tag===31){var t=Vl(e,67108864);t!==null&&ht(t,e,67108864),wr(e,67108864)}}function Wd(e){if(e.tag===13||e.tag===31){var t=St();t=Cu(t);var l=Vl(e,t);l!==null&&ht(l,e,t),wr(e,t)}}var hu=!0;function W0(e,t,l,a){var n=D.T;D.T=null;var i=X.p;try{X.p=2,Ur(e,t,l,a)}finally{X.p=i,D.T=n}}function F0(e,t,l,a){var n=D.T;D.T=null;var i=X.p;try{X.p=8,Ur(e,t,l,a)}finally{X.p=i,D.T=n}}function Ur(e,t,l,a){if(hu){var n=Br(a);if(n===null)Sr(e,t,a,pu,l),Id(e,a);else if(P0(n,e,t,l,a))a.stopPropagation();else if(Id(e,a),t&4&&-1<I0.indexOf(e)){for(;n!==null;){var i=ra(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=ql(i.pendingLanes);if(c!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;c;){var p=1<<31-_e(c);o.entanglements[1]|=p,c&=~p}Xt(i),(ge&6)===0&&(Fi=nt()+500,Bn(0))}}break;case 31:case 13:o=Vl(i,2),o!==null&&ht(o,i,2),Pi(),wr(i,2)}if(i=Br(a),i===null&&Sr(e,t,a,pu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Sr(e,t,a,null,l)}}function Br(e){return e=Yu(e),Hr(e)}var pu=null;function Hr(e){if(pu=null,e=ca(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=b(t),e!==null)return e;e=null}else if(l===31){if(e=j(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pu=e,null}function Fd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ni()){case Fa:return 2;case Ia:return 8;case Hl:case ii:return 32;case Pa:return 268435456;default:return 32}default:return 32}}var Yr=!1,Ol=null,_l=null,Ml=null,Gn=new Map,Zn=new Map,wl=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Id(e,t){switch(e){case"focusin":case"focusout":Ol=null;break;case"dragenter":case"dragleave":_l=null;break;case"mouseover":case"mouseout":Ml=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function Vn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ra(t),t!==null&&$d(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function P0(e,t,l,a,n){switch(t){case"focusin":return Ol=Vn(Ol,e,t,l,a,n),!0;case"dragenter":return _l=Vn(_l,e,t,l,a,n),!0;case"mouseover":return Ml=Vn(Ml,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Gn.set(i,Vn(Gn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Zn.set(i,Vn(Zn.get(i)||null,e,t,l,a,n)),!0}return!1}function Pd(e){var t=ca(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=b(l),t!==null){e.blockedOn=t,fo(e.priority,function(){Wd(l)});return}}else if(t===31){if(t=j(l),t!==null){e.blockedOn=t,fo(e.priority,function(){Wd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Br(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Hu=a,l.target.dispatchEvent(a),Hu=null}else return t=ra(l),t!==null&&$d(t),e.blockedOn=l,!1;t.shift()}return!0}function em(e,t,l){gu(e)&&l.delete(t)}function ep(){Yr=!1,Ol!==null&&gu(Ol)&&(Ol=null),_l!==null&&gu(_l)&&(_l=null),Ml!==null&&gu(Ml)&&(Ml=null),Gn.forEach(em),Zn.forEach(em)}function yu(e,t){e.blockedOn===t&&(e.blockedOn=null,Yr||(Yr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,ep)))}var vu=null;function tm(e){vu!==e&&(vu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){vu===e&&(vu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Hr(a||l)===null)continue;break}var i=ra(l);i!==null&&(e.splice(t,3),t-=3,Bc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ga(e){function t(p){return yu(p,e)}Ol!==null&&yu(Ol,e),_l!==null&&yu(_l,e),Ml!==null&&yu(Ml,e),Gn.forEach(t),Zn.forEach(t);for(var l=0;l<wl.length;l++){var a=wl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wl.length&&(l=wl[0],l.blockedOn===null);)Pd(l),l.blockedOn===null&&wl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[rt]||null;if(typeof i=="function")c||tm(l);else if(c){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[rt]||null)o=c.formAction;else if(Hr(n)!==null)continue}else o=c.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),tm(l)}}}function lm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Lr(e){this._internalRoot=e}bu.prototype.render=Lr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,a=St();kd(l,a,e,t,null,null)},bu.prototype.unmount=Lr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kd(e.current,2,null,e,null,null),Pi(),t[ua]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=so();e={blockedOn:null,target:e,priority:t};for(var l=0;l<wl.length&&t!==0&&t<wl[l].priority;l++);wl.splice(l,0,e),l===0&&Pd(e)}};var am=f.version;if(am!=="19.2.4")throw Error(r(527,am,"19.2.4"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var tp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Ue=xu.inject(tp),Re=xu}catch{}}return kn.createRoot=function(e,t){if(!d(e))throw Error(r(299));var l=!1,a="",n=sf,i=ff,c=df;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Vd(e,1,!1,null,null,l,a,null,n,i,c,lm),e[ua]=t.current,xr(e),new Lr(t)},kn.hydrateRoot=function(e,t,l){if(!d(e))throw Error(r(299));var a=!1,n="",i=sf,c=ff,o=df,p=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(p=l.formState)),t=Vd(e,1,!0,t,l??null,a,n,p,i,c,o,lm),t.context=Kd(null),l=t.current,a=St(),a=Cu(a),n=bl(a),n.callback=null,xl(l,n,a),l=a,t.current.lanes=l,tn(t,l),Xt(t),e[ua]=t.current,xr(e),new bu(t)},kn.version="19.2.4",kn}var mm;function dp(){if(mm)return Qr.exports;mm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Qr.exports=fp(),Qr.exports}var mp=dp();const hp=Em(mp);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hm="popstate";function pm(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function pp(u={}){function f(r,d){var m;let h=(m=d.state)==null?void 0:m.masked,{pathname:b,search:j,hash:x}=h||r.location;return Wr("",{pathname:b,search:j,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default",h?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function s(r,d){return typeof d=="string"?d:Wn(d)}return yp(f,s,null,u)}function Me(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Gt(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function gp(){return Math.random().toString(36).substring(2,10)}function gm(u,f){return{usr:u.state,key:u.key,idx:f,masked:u.unstable_mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function Wr(u,f,s=null,r,d){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof f=="string"?Za(f):f,state:s,key:f&&f.key||r||gp(),unstable_mask:d}}function Wn({pathname:u="/",search:f="",hash:s=""}){return f&&f!=="?"&&(u+=f.charAt(0)==="?"?f:"?"+f),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function Za(u){let f={};if(u){let s=u.indexOf("#");s>=0&&(f.hash=u.substring(s),u=u.substring(0,s));let r=u.indexOf("?");r>=0&&(f.search=u.substring(r),u=u.substring(0,r)),u&&(f.pathname=u)}return f}function yp(u,f,s,r={}){let{window:d=document.defaultView,v5Compat:h=!1}=r,b=d.history,j="POP",x=null,m=T();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function T(){return(b.state||{idx:null}).idx}function z(){j="POP";let B=T(),Y=B==null?null:B-m;m=B,x&&x({action:j,location:q.location,delta:Y})}function H(B,Y){j="PUSH";let L=pm(B)?B:Wr(q.location,B,Y);m=T()+1;let G=gm(L,m),I=q.createHref(L.unstable_mask||L);try{b.pushState(G,"",I)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;d.location.assign(I)}h&&x&&x({action:j,location:q.location,delta:1})}function V(B,Y){j="REPLACE";let L=pm(B)?B:Wr(q.location,B,Y);m=T();let G=gm(L,m),I=q.createHref(L.unstable_mask||L);b.replaceState(G,"",I),h&&x&&x({action:j,location:q.location,delta:0})}function k(B){return vp(B)}let q={get action(){return j},get location(){return u(d,b)},listen(B){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(hm,z),x=B,()=>{d.removeEventListener(hm,z),x=null}},createHref(B){return f(d,B)},createURL:k,encodeLocation(B){let Y=k(B);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:H,replace:V,go(B){return b.go(B)}};return q}function vp(u,f=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Me(s,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:Wn(u);return r=r.replace(/ $/,"%20"),!f&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function zm(u,f,s="/"){return bp(u,f,s,!1)}function bp(u,f,s,r){let d=typeof f=="string"?Za(f):f,h=ol(d.pathname||"/",s);if(h==null)return null;let b=Tm(u);xp(b);let j=null;for(let x=0;j==null&&x<b.length;++x){let m=Op(h);j=Cp(b[x],m,r)}return j}function Tm(u,f=[],s=[],r="",d=!1){let h=(b,j,x=d,m)=>{let T={relativePath:m===void 0?b.path||"":m,caseSensitive:b.caseSensitive===!0,childrenIndex:j,route:b};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(r)&&x)return;Me(T.relativePath.startsWith(r),`Absolute route path "${T.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(r.length)}let z=Qt([r,T.relativePath]),H=s.concat(T);b.children&&b.children.length>0&&(Me(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),Tm(b.children,f,H,z,x)),!(b.path==null&&!b.index)&&f.push({path:z,score:Rp(z,b.index),routesMeta:H})};return u.forEach((b,j)=>{var x;if(b.path===""||!((x=b.path)!=null&&x.includes("?")))h(b,j);else for(let m of Am(b.path))h(b,j,!0,m)}),f}function Am(u){let f=u.split("/");if(f.length===0)return[];let[s,...r]=f,d=s.endsWith("?"),h=s.replace(/\?$/,"");if(r.length===0)return d?[h,""]:[h];let b=Am(r.join("/")),j=[];return j.push(...b.map(x=>x===""?h:[h,x].join("/"))),d&&j.push(...b),j.map(x=>u.startsWith("/")&&x===""?"/":x)}function xp(u){u.sort((f,s)=>f.score!==s.score?s.score-f.score:jp(f.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var Sp=/^:[\w-]+$/,Ep=3,zp=2,Tp=1,Ap=10,Np=-2,ym=u=>u==="*";function Rp(u,f){let s=u.split("/"),r=s.length;return s.some(ym)&&(r+=Np),f&&(r+=zp),s.filter(d=>!ym(d)).reduce((d,h)=>d+(Sp.test(h)?Ep:h===""?Tp:Ap),r)}function jp(u,f){return u.length===f.length&&u.slice(0,-1).every((r,d)=>r===f[d])?u[u.length-1]-f[f.length-1]:0}function Cp(u,f,s=!1){let{routesMeta:r}=u,d={},h="/",b=[];for(let j=0;j<r.length;++j){let x=r[j],m=j===r.length-1,T=h==="/"?f:f.slice(h.length)||"/",z=Tu({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},T),H=x.route;if(!z&&m&&s&&!r[r.length-1].route.index&&(z=Tu({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},T)),!z)return null;Object.assign(d,z.params),b.push({params:d,pathname:Qt([h,z.pathname]),pathnameBase:Up(Qt([h,z.pathnameBase])),route:H}),z.pathnameBase!=="/"&&(h=Qt([h,z.pathnameBase]))}return b}function Tu(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,r]=Dp(u.path,u.caseSensitive,u.end),d=f.match(s);if(!d)return null;let h=d[0],b=h.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:r.reduce((m,{paramName:T,isOptional:z},H)=>{if(T==="*"){let k=j[H]||"";b=h.slice(0,h.length-k.length).replace(/(.)\/+$/,"$1")}const V=j[H];return z&&!V?m[T]=void 0:m[T]=(V||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:b,pattern:u}}function Dp(u,f=!1,s=!0){Gt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,j,x,m,T)=>{if(r.push({paramName:j,isOptional:x!=null}),x){let z=T.charAt(m+b.length);return z&&z!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,f?void 0:"i"),r]}function Op(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Gt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),u}}function ol(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let s=f.endsWith("/")?f.length-1:f.length,r=u.charAt(s);return r&&r!=="/"?null:u.slice(s)||"/"}var _p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Mp(u,f="/"){let{pathname:s,search:r="",hash:d=""}=typeof u=="string"?Za(u):u,h;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?h=vm(s.substring(1),"/"):h=vm(s,f)):h=f,{pathname:h,search:Bp(r),hash:Hp(d)}}function vm(u,f){let s=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Kr(u,f,s,r){return`Cannot include a '${u}' character in a manually specified \`to.${f}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wp(u){return u.filter((f,s)=>s===0||f.route.path&&f.route.path.length>0)}function Nm(u){let f=wp(u);return f.map((s,r)=>r===f.length-1?s.pathname:s.pathnameBase)}function eo(u,f,s,r=!1){let d;typeof u=="string"?d=Za(u):(d={...u},Me(!d.pathname||!d.pathname.includes("?"),Kr("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Kr("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Kr("#","search","hash",d)));let h=u===""||d.pathname==="",b=h?"/":d.pathname,j;if(b==null)j=s;else{let z=f.length-1;if(!r&&b.startsWith("..")){let H=b.split("/");for(;H[0]==="..";)H.shift(),z-=1;d.pathname=H.join("/")}j=z>=0?f[z]:"/"}let x=Mp(d,j),m=b&&b!=="/"&&b.endsWith("/"),T=(h||b===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(m||T)&&(x.pathname+="/"),x}var Qt=u=>u.join("/").replace(/\/\/+/g,"/"),Up=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Bp=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Hp=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Yp=class{constructor(u,f,s,r=!1){this.status=u,this.statusText=f||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Lp(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function qp(u){return u.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jm(u,f){let s=u;if(typeof s!="string"||!_p.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,d=!1;if(Rm)try{let h=new URL(window.location.href),b=s.startsWith("//")?new URL(h.protocol+s):new URL(s),j=ol(b.pathname,f);b.origin===h.origin&&j!=null?s=j+b.search+b.hash:d=!0}catch{Gt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cm=["POST","PUT","PATCH","DELETE"];new Set(Cm);var Xp=["GET",...Cm];new Set(Xp);var Va=S.createContext(null);Va.displayName="DataRouter";var Au=S.createContext(null);Au.displayName="DataRouterState";var Qp=S.createContext(!1),Dm=S.createContext({isTransitioning:!1});Dm.displayName="ViewTransition";var Gp=S.createContext(new Map);Gp.displayName="Fetchers";var Zp=S.createContext(null);Zp.displayName="Await";var wt=S.createContext(null);wt.displayName="Navigation";var Fn=S.createContext(null);Fn.displayName="Location";var Zt=S.createContext({outlet:null,matches:[],isDataRoute:!1});Zt.displayName="Route";var to=S.createContext(null);to.displayName="RouteError";var Om="REACT_ROUTER_ERROR",Vp="REDIRECT",Kp="ROUTE_ERROR_RESPONSE";function kp(u){if(u.startsWith(`${Om}:${Vp}:{`))try{let f=JSON.parse(u.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function Jp(u){if(u.startsWith(`${Om}:${Kp}:{`))try{let f=JSON.parse(u.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Yp(f.status,f.statusText,f.data)}catch{}}function $p(u,{relative:f}={}){Me(In(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=S.useContext(wt),{hash:d,pathname:h,search:b}=Pn(u,{relative:f}),j=h;return s!=="/"&&(j=h==="/"?s:Qt([s,h])),r.createHref({pathname:j,search:b,hash:d})}function In(){return S.useContext(Fn)!=null}function Bl(){return Me(In(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Fn).location}var _m="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mm(u){S.useContext(wt).static||S.useLayoutEffect(u)}function Wp(){let{isDataRoute:u}=S.useContext(Zt);return u?sg():Fp()}function Fp(){Me(In(),"useNavigate() may be used only in the context of a <Router> component.");let u=S.useContext(Va),{basename:f,navigator:s}=S.useContext(wt),{matches:r}=S.useContext(Zt),{pathname:d}=Bl(),h=JSON.stringify(Nm(r)),b=S.useRef(!1);return Mm(()=>{b.current=!0}),S.useCallback((x,m={})=>{if(Gt(b.current,_m),!b.current)return;if(typeof x=="number"){s.go(x);return}let T=eo(x,JSON.parse(h),d,m.relative==="path");u==null&&f!=="/"&&(T.pathname=T.pathname==="/"?f:Qt([f,T.pathname])),(m.replace?s.replace:s.push)(T,m.state,m)},[f,s,h,d,u])}S.createContext(null);function Ip(){let{matches:u}=S.useContext(Zt),f=u[u.length-1];return f?f.params:{}}function Pn(u,{relative:f}={}){let{matches:s}=S.useContext(Zt),{pathname:r}=Bl(),d=JSON.stringify(Nm(s));return S.useMemo(()=>eo(u,JSON.parse(d),r,f==="path"),[u,d,r,f])}function Pp(u,f){return wm(u,f)}function wm(u,f,s){var B;Me(In(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=S.useContext(wt),{matches:d}=S.useContext(Zt),h=d[d.length-1],b=h?h.params:{},j=h?h.pathname:"/",x=h?h.pathnameBase:"/",m=h&&h.route;{let Y=m&&m.path||"";Bm(j,!m||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let T=Bl(),z;if(f){let Y=typeof f=="string"?Za(f):f;Me(x==="/"||((B=Y.pathname)==null?void 0:B.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),z=Y}else z=T;let H=z.pathname||"/",V=H;if(x!=="/"){let Y=x.replace(/^\//,"").split("/");V="/"+H.replace(/^\//,"").split("/").slice(Y.length).join("/")}let k=zm(u,{pathname:V});Gt(m||k!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),Gt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=ng(k&&k.map(Y=>Object.assign({},Y,{params:Object.assign({},b,Y.params),pathname:Qt([x,r.encodeLocation?r.encodeLocation(Y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?x:Qt([x,r.encodeLocation?r.encodeLocation(Y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),d,s);return f&&q?S.createElement(Fn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...z},navigationType:"POP"}},q):q}function eg(){let u=og(),f=Lp(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},b=null;return console.error("Error handled by React Router default ErrorBoundary:",u),b=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:h},"ErrorBoundary")," or"," ",S.createElement("code",{style:h},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},f),s?S.createElement("pre",{style:d},s):null,b)}var tg=S.createElement(eg,null),Um=class extends S.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,f){return f.location!==u.location||f.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:f.error,location:f.location,revalidation:u.revalidation||f.revalidation}}componentDidCatch(u,f){this.props.onError?this.props.onError(u,f):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=Jp(u.digest);s&&(u=s)}let f=u!==void 0?S.createElement(Zt.Provider,{value:this.props.routeContext},S.createElement(to.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?S.createElement(lg,{error:u},f):f}};Um.contextType=Qp;var kr=new WeakMap;function lg({children:u,error:f}){let{basename:s}=S.useContext(wt);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let r=kp(f.digest);if(r){let d=kr.get(f);if(d)throw d;let h=jm(r.location,s);if(Rm&&!kr.get(f))if(h.isExternal||r.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:r.replace}));throw kr.set(f,b),b}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function ag({routeContext:u,match:f,children:s}){let r=S.useContext(Va);return r&&r.static&&r.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=f.route.id),S.createElement(Zt.Provider,{value:u},s)}function ng(u,f=[],s){let r=s==null?void 0:s.state;if(u==null){if(!r)return null;if(r.errors)u=r.matches;else if(f.length===0&&!r.initialized&&r.matches.length>0)u=r.matches;else return null}let d=u,h=r==null?void 0:r.errors;if(h!=null){let T=d.findIndex(z=>z.route.id&&(h==null?void 0:h[z.route.id])!==void 0);Me(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,T+1))}let b=!1,j=-1;if(s&&r){b=r.renderFallback;for(let T=0;T<d.length;T++){let z=d[T];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(j=T),z.route.id){let{loaderData:H,errors:V}=r,k=z.route.loader&&!H.hasOwnProperty(z.route.id)&&(!V||V[z.route.id]===void 0);if(z.route.lazy||k){s.isStatic&&(b=!0),j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}}let x=s==null?void 0:s.onError,m=r&&x?(T,z)=>{var H,V;x(T,{location:r.location,params:((V=(H=r.matches)==null?void 0:H[0])==null?void 0:V.params)??{},unstable_pattern:qp(r.matches),errorInfo:z})}:void 0;return d.reduceRight((T,z,H)=>{let V,k=!1,q=null,B=null;r&&(V=h&&z.route.id?h[z.route.id]:void 0,q=z.route.errorElement||tg,b&&(j<0&&H===0?(Bm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,B=null):j===H&&(k=!0,B=z.route.hydrateFallbackElement||null)));let Y=f.concat(d.slice(0,H+1)),L=()=>{let G;return V?G=q:k?G=B:z.route.Component?G=S.createElement(z.route.Component,null):z.route.element?G=z.route.element:G=T,S.createElement(ag,{match:z,routeContext:{outlet:T,matches:Y,isDataRoute:r!=null},children:G})};return r&&(z.route.ErrorBoundary||z.route.errorElement||H===0)?S.createElement(Um,{location:r.location,revalidation:r.revalidation,component:q,error:V,children:L(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:m}):L()},null)}function lo(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ig(u){let f=S.useContext(Va);return Me(f,lo(u)),f}function ug(u){let f=S.useContext(Au);return Me(f,lo(u)),f}function cg(u){let f=S.useContext(Zt);return Me(f,lo(u)),f}function ao(u){let f=cg(u),s=f.matches[f.matches.length-1];return Me(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function rg(){return ao("useRouteId")}function og(){var r;let u=S.useContext(to),f=ug("useRouteError"),s=ao("useRouteError");return u!==void 0?u:(r=f.errors)==null?void 0:r[s]}function sg(){let{router:u}=ig("useNavigate"),f=ao("useNavigate"),s=S.useRef(!1);return Mm(()=>{s.current=!0}),S.useCallback(async(d,h={})=>{Gt(s.current,_m),s.current&&(typeof d=="number"?await u.navigate(d):await u.navigate(d,{fromRouteId:f,...h}))},[u,f])}var bm={};function Bm(u,f,s){!f&&!bm[u]&&(bm[u]=!0,Gt(!1,s))}S.memo(fg);function fg({routes:u,future:f,state:s,isStatic:r,onError:d}){return wm(u,void 0,{state:s,isStatic:r,onError:d})}function Fr(u){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dg({basename:u="/",children:f=null,location:s,navigationType:r="POP",navigator:d,static:h=!1,unstable_useTransitions:b}){Me(!In(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=u.replace(/^\/*/,"/"),x=S.useMemo(()=>({basename:j,navigator:d,static:h,unstable_useTransitions:b,future:{}}),[j,d,h,b]);typeof s=="string"&&(s=Za(s));let{pathname:m="/",search:T="",hash:z="",state:H=null,key:V="default",unstable_mask:k}=s,q=S.useMemo(()=>{let B=ol(m,j);return B==null?null:{location:{pathname:B,search:T,hash:z,state:H,key:V,unstable_mask:k},navigationType:r}},[j,m,T,z,H,V,r,k]);return Gt(q!=null,`<Router basename="${j}"> is not able to match the URL "${m}${T}${z}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:S.createElement(wt.Provider,{value:x},S.createElement(Fn.Provider,{children:f,value:q}))}function mg({children:u,location:f}){return Pp(Ir(u),f)}function Ir(u,f=[]){let s=[];return S.Children.forEach(u,(r,d)=>{if(!S.isValidElement(r))return;let h=[...f,d];if(r.type===S.Fragment){s.push.apply(s,Ir(r.props.children,h));return}Me(r.type===Fr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!r.props.index||!r.props.children,"An index route cannot have child routes.");let b={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(b.children=Ir(r.props.children,h)),s.push(b)}),s}var Eu="get",zu="application/x-www-form-urlencoded";function Nu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function hg(u){return Nu(u)&&u.tagName.toLowerCase()==="button"}function pg(u){return Nu(u)&&u.tagName.toLowerCase()==="form"}function gg(u){return Nu(u)&&u.tagName.toLowerCase()==="input"}function yg(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function vg(u,f){return u.button===0&&(!f||f==="_self")&&!yg(u)}var Su=null;function bg(){if(Su===null)try{new FormData(document.createElement("form"),0),Su=!1}catch{Su=!0}return Su}var xg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jr(u){return u!=null&&!xg.has(u)?(Gt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zu}"`),null):u}function Sg(u,f){let s,r,d,h,b;if(pg(u)){let j=u.getAttribute("action");r=j?ol(j,f):null,s=u.getAttribute("method")||Eu,d=Jr(u.getAttribute("enctype"))||zu,h=new FormData(u)}else if(hg(u)||gg(u)&&(u.type==="submit"||u.type==="image")){let j=u.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=u.getAttribute("formaction")||j.getAttribute("action");if(r=x?ol(x,f):null,s=u.getAttribute("formmethod")||j.getAttribute("method")||Eu,d=Jr(u.getAttribute("formenctype"))||Jr(j.getAttribute("enctype"))||zu,h=new FormData(j,u),!bg()){let{name:m,type:T,value:z}=u;if(T==="image"){let H=m?`${m}.`:"";h.append(`${H}x`,"0"),h.append(`${H}y`,"0")}else m&&h.append(m,z)}}else{if(Nu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Eu,r=null,d=zu,b=u}return h&&d==="text/plain"&&(b=h,h=void 0),{action:r,method:s.toLowerCase(),encType:d,formData:h,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function no(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Eg(u,f,s,r){let d=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${r}`:d.pathname=`${d.pathname}.${r}`:d.pathname==="/"?d.pathname=`_root.${r}`:f&&ol(d.pathname,f)==="/"?d.pathname=`${f.replace(/\/$/,"")}/_root.${r}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${r}`,d}async function zg(u,f){if(u.id in f)return f[u.id];try{let s=await import(u.module);return f[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Tg(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Ag(u,f,s){let r=await Promise.all(u.map(async d=>{let h=f.routes[d.route.id];if(h){let b=await zg(h,s);return b.links?b.links():[]}return[]}));return Cg(r.flat(1).filter(Tg).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function xm(u,f,s,r,d,h){let b=(x,m)=>s[m]?x.route.id!==s[m].route.id:!0,j=(x,m)=>{var T;return s[m].pathname!==x.pathname||((T=s[m].route.path)==null?void 0:T.endsWith("*"))&&s[m].params["*"]!==x.params["*"]};return h==="assets"?f.filter((x,m)=>b(x,m)||j(x,m)):h==="data"?f.filter((x,m)=>{var z;let T=r.routes[x.route.id];if(!T||!T.hasLoader)return!1;if(b(x,m)||j(x,m))return!0;if(x.route.shouldRevalidate){let H=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((z=s[0])==null?void 0:z.params)||{},nextUrl:new URL(u,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof H=="boolean")return H}return!0}):[]}function Ng(u,f,{includeHydrateFallback:s}={}){return Rg(u.map(r=>{let d=f.routes[r.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function Rg(u){return[...new Set(u)]}function jg(u){let f={},s=Object.keys(u).sort();for(let r of s)f[r]=u[r];return f}function Cg(u,f){let s=new Set;return new Set(f),u.reduce((r,d)=>{let h=JSON.stringify(jg(d));return s.has(h)||(s.add(h),r.push({key:h,link:d})),r},[])}function Hm(){let u=S.useContext(Va);return no(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Dg(){let u=S.useContext(Au);return no(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var io=S.createContext(void 0);io.displayName="FrameworkContext";function Ym(){let u=S.useContext(io);return no(u,"You must render this element inside a <HydratedRouter> element"),u}function Og(u,f){let s=S.useContext(io),[r,d]=S.useState(!1),[h,b]=S.useState(!1),{onFocus:j,onBlur:x,onMouseEnter:m,onMouseLeave:T,onTouchStart:z}=f,H=S.useRef(null);S.useEffect(()=>{if(u==="render"&&b(!0),u==="viewport"){let q=Y=>{Y.forEach(L=>{b(L.isIntersecting)})},B=new IntersectionObserver(q,{threshold:.5});return H.current&&B.observe(H.current),()=>{B.disconnect()}}},[u]),S.useEffect(()=>{if(r){let q=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(q)}}},[r]);let V=()=>{d(!0)},k=()=>{d(!1),b(!1)};return s?u!=="intent"?[h,H,{}]:[h,H,{onFocus:Jn(j,V),onBlur:Jn(x,k),onMouseEnter:Jn(m,V),onMouseLeave:Jn(T,k),onTouchStart:Jn(z,V)}]:[!1,H,{}]}function Jn(u,f){return s=>{u&&u(s),s.defaultPrevented||f(s)}}function _g({page:u,...f}){let{router:s}=Hm(),r=S.useMemo(()=>zm(s.routes,u,s.basename),[s.routes,u,s.basename]);return r?S.createElement(wg,{page:u,matches:r,...f}):null}function Mg(u){let{manifest:f,routeModules:s}=Ym(),[r,d]=S.useState([]);return S.useEffect(()=>{let h=!1;return Ag(u,f,s).then(b=>{h||d(b)}),()=>{h=!0}},[u,f,s]),r}function wg({page:u,matches:f,...s}){let r=Bl(),{future:d,manifest:h,routeModules:b}=Ym(),{basename:j}=Hm(),{loaderData:x,matches:m}=Dg(),T=S.useMemo(()=>xm(u,f,m,h,r,"data"),[u,f,m,h,r]),z=S.useMemo(()=>xm(u,f,m,h,r,"assets"),[u,f,m,h,r]),H=S.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let q=new Set,B=!1;if(f.forEach(L=>{var I;let G=h.routes[L.route.id];!G||!G.hasLoader||(!T.some(ee=>ee.route.id===L.route.id)&&L.route.id in x&&((I=b[L.route.id])!=null&&I.shouldRevalidate)||G.hasClientLoader?B=!0:q.add(L.route.id))}),q.size===0)return[];let Y=Eg(u,j,d.unstable_trailingSlashAwareDataRequests,"data");return B&&q.size>0&&Y.searchParams.set("_routes",f.filter(L=>q.has(L.route.id)).map(L=>L.route.id).join(",")),[Y.pathname+Y.search]},[j,d.unstable_trailingSlashAwareDataRequests,x,r,h,T,f,u,b]),V=S.useMemo(()=>Ng(z,h),[z,h]),k=Mg(z);return S.createElement(S.Fragment,null,H.map(q=>S.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...s})),V.map(q=>S.createElement("link",{key:q,rel:"modulepreload",href:q,...s})),k.map(({key:q,link:B})=>S.createElement("link",{key:q,nonce:s.nonce,...B,crossOrigin:B.crossOrigin??s.crossOrigin})))}function Ug(...u){return f=>{u.forEach(s=>{typeof s=="function"?s(f):s!=null&&(s.current=f)})}}var Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bg&&(window.__reactRouterVersion="7.13.2")}catch{}function Hg({basename:u,children:f,unstable_useTransitions:s,window:r}){let d=S.useRef();d.current==null&&(d.current=pp({window:r,v5Compat:!0}));let h=d.current,[b,j]=S.useState({action:h.action,location:h.location}),x=S.useCallback(m=>{s===!1?j(m):S.startTransition(()=>j(m))},[s]);return S.useLayoutEffect(()=>h.listen(x),[h,x]),S.createElement(dg,{basename:u,children:f,location:b.location,navigationType:b.action,navigator:h,unstable_useTransitions:s})}var Lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qm=S.forwardRef(function({onClick:f,discover:s="render",prefetch:r="none",relative:d,reloadDocument:h,replace:b,unstable_mask:j,state:x,target:m,to:T,preventScrollReset:z,viewTransition:H,unstable_defaultShouldRevalidate:V,...k},q){let{basename:B,navigator:Y,unstable_useTransitions:L}=S.useContext(wt),G=typeof T=="string"&&Lm.test(T),I=jm(T,B);T=I.to;let ee=$p(T,{relative:d}),ne=Bl(),W=null;if(j){let we=eo(j,[],ne.unstable_mask?ne.unstable_mask.pathname:"/",!0);B!=="/"&&(we.pathname=we.pathname==="/"?B:Qt([B,we.pathname])),W=Y.createHref(we)}let[Ae,qe,Ve]=Og(r,k),ke=Xg(T,{replace:b,unstable_mask:j,state:x,target:m,preventScrollReset:z,relative:d,viewTransition:H,unstable_defaultShouldRevalidate:V,unstable_useTransitions:L});function be(we){f&&f(we),we.defaultPrevented||ke(we)}let Et=!(I.isExternal||h),at=S.createElement("a",{...k,...Ve,href:(Et?W:void 0)||I.absoluteURL||ee,onClick:Et?be:f,ref:Ug(q,qe),target:m,"data-discover":!G&&s==="render"?"true":void 0});return Ae&&!G?S.createElement(S.Fragment,null,at,S.createElement(_g,{page:ee})):at});qm.displayName="Link";var Yg=S.forwardRef(function({"aria-current":f="page",caseSensitive:s=!1,className:r="",end:d=!1,style:h,to:b,viewTransition:j,children:x,...m},T){let z=Pn(b,{relative:m.relative}),H=Bl(),V=S.useContext(Au),{navigator:k,basename:q}=S.useContext(wt),B=V!=null&&Kg(z)&&j===!0,Y=k.encodeLocation?k.encodeLocation(z).pathname:z.pathname,L=H.pathname,G=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;s||(L=L.toLowerCase(),G=G?G.toLowerCase():null,Y=Y.toLowerCase()),G&&q&&(G=ol(G,q)||G);const I=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ee=L===Y||!d&&L.startsWith(Y)&&L.charAt(I)==="/",ne=G!=null&&(G===Y||!d&&G.startsWith(Y)&&G.charAt(Y.length)==="/"),W={isActive:ee,isPending:ne,isTransitioning:B},Ae=ee?f:void 0,qe;typeof r=="function"?qe=r(W):qe=[r,ee?"active":null,ne?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let Ve=typeof h=="function"?h(W):h;return S.createElement(qm,{...m,"aria-current":Ae,className:qe,ref:T,style:Ve,to:b,viewTransition:j},typeof x=="function"?x(W):x)});Yg.displayName="NavLink";var Lg=S.forwardRef(({discover:u="render",fetcherKey:f,navigate:s,reloadDocument:r,replace:d,state:h,method:b=Eu,action:j,onSubmit:x,relative:m,preventScrollReset:T,viewTransition:z,unstable_defaultShouldRevalidate:H,...V},k)=>{let{unstable_useTransitions:q}=S.useContext(wt),B=Zg(),Y=Vg(j,{relative:m}),L=b.toLowerCase()==="get"?"get":"post",G=typeof j=="string"&&Lm.test(j),I=ee=>{if(x&&x(ee),ee.defaultPrevented)return;ee.preventDefault();let ne=ee.nativeEvent.submitter,W=(ne==null?void 0:ne.getAttribute("formmethod"))||b,Ae=()=>B(ne||ee.currentTarget,{fetcherKey:f,method:W,navigate:s,replace:d,state:h,relative:m,preventScrollReset:T,viewTransition:z,unstable_defaultShouldRevalidate:H});q&&s!==!1?S.startTransition(()=>Ae()):Ae()};return S.createElement("form",{ref:k,method:L,action:Y,onSubmit:r?x:I,...V,"data-discover":!G&&u==="render"?"true":void 0})});Lg.displayName="Form";function qg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(u){let f=S.useContext(Va);return Me(f,qg(u)),f}function Xg(u,{target:f,replace:s,unstable_mask:r,state:d,preventScrollReset:h,relative:b,viewTransition:j,unstable_defaultShouldRevalidate:x,unstable_useTransitions:m}={}){let T=Wp(),z=Bl(),H=Pn(u,{relative:b});return S.useCallback(V=>{if(vg(V,f)){V.preventDefault();let k=s!==void 0?s:Wn(z)===Wn(H),q=()=>T(u,{replace:k,unstable_mask:r,state:d,preventScrollReset:h,relative:b,viewTransition:j,unstable_defaultShouldRevalidate:x});m?S.startTransition(()=>q()):q()}},[z,T,H,s,r,d,f,u,h,b,j,x,m])}var Qg=0,Gg=()=>`__${String(++Qg)}__`;function Zg(){let{router:u}=Xm("useSubmit"),{basename:f}=S.useContext(wt),s=rg(),r=u.fetch,d=u.navigate;return S.useCallback(async(h,b={})=>{let{action:j,method:x,encType:m,formData:T,body:z}=Sg(h,f);if(b.navigate===!1){let H=b.fetcherKey||Gg();await r(H,s,b.action||j,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:T,body:z,formMethod:b.method||x,formEncType:b.encType||m,flushSync:b.flushSync})}else await d(b.action||j,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:T,body:z,formMethod:b.method||x,formEncType:b.encType||m,replace:b.replace,state:b.state,fromRouteId:s,flushSync:b.flushSync,viewTransition:b.viewTransition})},[r,d,f,s])}function Vg(u,{relative:f}={}){let{basename:s}=S.useContext(wt),r=S.useContext(Zt);Me(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),h={...Pn(u||".",{relative:f})},b=Bl();if(u==null){h.search=b.search;let j=new URLSearchParams(h.search),x=j.getAll("index");if(x.some(T=>T==="")){j.delete("index"),x.filter(z=>z).forEach(z=>j.append("index",z));let T=j.toString();h.search=T?`?${T}`:""}}return(!u||u===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:Qt([s,h.pathname])),Wn(h)}function Kg(u,{relative:f}={}){let s=S.useContext(Dm);Me(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xm("useViewTransitionState"),d=Pn(u,{relative:f});if(!s.isTransitioning)return!1;let h=ol(s.currentLocation.pathname,r)||s.currentLocation.pathname,b=ol(s.nextLocation.pathname,r)||s.nextLocation.pathname;return Tu(d.pathname,b)!=null||Tu(d.pathname,h)!=null}const kg=`
  .chat-window {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    background: #1a1a1a;
  }
  .chat-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.75rem 1rem;
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
    flex-shrink: 0;
  }
  .silas-avatar-small {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .chat-header-info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex: 1;
  }
  .chat-header-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #f0f0f0;
    letter-spacing: 0.02em;
  }
  .chat-header-role {
    font-size: 0.7rem;
    color: #aaa;
    font-weight: 400;
  }
  .chat-header-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4caf50;
    flex-shrink: 0;
  }
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .chat-msg {
    display: flex;
    gap: 0.5rem;
    max-width: 92%;
  }
  .chat-msg.user {
    align-self: flex-end;
    flex-direction: row-reverse;
  }
  .msg-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .silas-bubble {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
  }
  .msg-bubble {
    padding: 0.6rem 0.9rem;
    border-radius: 12px;
    font-size: 0.88rem;
    line-height: 1.55;
    white-space: pre-wrap;
    color: #f0f0f0;
  }
  .chat-msg.assistant .msg-bubble {
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 2px 12px 12px 12px;
  }
  .chat-msg.user .msg-bubble {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-weight: 500;
    border-radius: 12px 2px 12px 12px;
  }
  .completion-note {
    color: #f0f0f0 !important;
    border-color: rgba(184, 134, 11, 0.3) !important;
  }
  .msg-bubble.typing {
    display: flex;
    gap: 4px;
    padding: 0.8rem 1rem;
    align-items: center;
  }
  .msg-bubble.typing span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #555;
    animation: typingDot 1.2s infinite;
  }
  .msg-bubble.typing span:nth-child(2) { animation-delay: 0.2s; }
  .msg-bubble.typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes typingDot {
    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
    30% { opacity: 1; transform: translateY(-3px); }
  }
  .chat-input-area {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid #3a3a3a;
    background: #2a2a2a;
    align-items: center;
  }
  .chat-input-area input {
    flex: 1;
    padding: 0.65rem 1rem;
    background: #1a1a1a;
    border: 1px solid #3a3a3a;
    border-radius: 24px;
    color: #f0f0f0;
    font-size: 0.88rem;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }
  .chat-input-area input:focus { border-color: #B8860B; }
  .chat-input-area input::placeholder { color: #555; }
  .chat-input-area input:disabled { opacity: 0.45; }
  .send-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: opacity 0.2s, transform 0.15s;
  }
  .send-btn:hover:not(:disabled) { opacity: 0.85; transform: scale(1.05); }
  .send-btn:disabled { opacity: 0.35; cursor: not-allowed; }

  @media (max-width: 768px) {
    .chat-window {
      min-height: 40vh;
      height: auto;
      display: flex;
      flex-direction: column;
    }
    .chat-messages {
      min-height: 200px;
      overflow-y: auto;
      max-height: 50vh;
    }
    .chat-input-area {
      position: sticky;
      bottom: 0;
      z-index: 100;
      background: #2a2a2a;
      padding: 0.75rem 1rem;
    }
    .chat-input-area input {
      font-size: 16px; /* prevents iOS zoom */
      min-height: 44px;
      padding: 0.65rem 1rem;
    }
    .send-btn {
      width: 44px;
      height: 44px;
      min-width: 44px;
      min-height: 44px;
    }
    .msg-bubble {
      font-size: 0.9rem;
    }
  }
`;function Qm({messages:u,onSend:f,isComplete:s}){const[r,d]=S.useState(""),[h,b]=S.useState(!1),j=S.useRef(null);S.useEffect(()=>{var m;(m=j.current)==null||m.scrollIntoView({behavior:"smooth"})},[u]);const x=async()=>{if(!r.trim()||h)return;const m=r.trim();d(""),b(!0),await f(m),b(!1)};return g.jsxs("div",{className:"chat-window",children:[g.jsx("style",{children:kg}),g.jsxs("div",{className:"chat-header",children:[g.jsx("div",{className:"silas-avatar-small",children:"S"}),g.jsxs("div",{className:"chat-header-info",children:[g.jsx("span",{className:"chat-header-name",children:"Silas"}),g.jsx("span",{className:"chat-header-role",children:"Barnhaus Design Guide"})]}),g.jsx("div",{className:"chat-header-status"})]}),g.jsxs("div",{className:"chat-messages",children:[u.map((m,T)=>g.jsxs("div",{className:`chat-msg ${m.role}`,children:[m.role==="assistant"&&g.jsx("div",{className:"msg-avatar silas-bubble",children:"S"}),g.jsx("div",{className:"msg-bubble",children:m.content})]},T)),h&&g.jsxs("div",{className:"chat-msg assistant",children:[g.jsx("div",{className:"msg-avatar silas-bubble",children:"S"}),g.jsxs("div",{className:"msg-bubble typing",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]})]}),s&&g.jsxs("div",{className:"chat-msg assistant",children:[g.jsx("div",{className:"msg-avatar silas-bubble",children:"S"}),g.jsx("div",{className:"msg-bubble completion-note",children:"Your feedback has been sent to the Barnhaus team. We'll be in touch shortly with next steps. 🏡"})]}),g.jsx("div",{ref:j})]}),g.jsxs("div",{className:"chat-input-area",children:[g.jsx("input",{type:"text",value:r,onChange:m=>d(m.target.value),onKeyDown:m=>m.key==="Enter"&&x(),placeholder:s?"Review complete!":"Type your response...",disabled:h||s}),g.jsx("button",{onClick:x,disabled:!r.trim()||h||s,className:"send-btn",children:g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),g.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]})]})}const Jg=`
  .inspiration-strip {
    padding: 0.75rem 1rem;
    background: #1e1e1e;
    border-top: 1px solid #2a2a2a;
    flex-shrink: 0;
  }
  .inspiration-label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #666;
    margin-bottom: 0.5rem;
  }
  .inspiration-row {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.25rem;
    scrollbar-width: thin;
    scrollbar-color: #333 transparent;
  }
  .inspiration-thumb {
    flex-shrink: 0;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.15s, transform 0.15s;
    position: relative;
  }
  .inspiration-thumb:hover { border-color: #B8860B; transform: scale(1.03); }
  .inspiration-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .inspiration-thumb .pick-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.15s;
    font-size: 0.7rem; color: #fff; font-weight: 600;
    flex-direction: column; gap: 3px;
  }
  .inspiration-thumb:hover .pick-overlay { opacity: 1; }
  .pick-icon { font-size: 1.1rem; }
  .inspiration-skip {
    flex-shrink: 0;
    width: 90px; height: 90px;
    border-radius: 6px;
    border: 2px dashed #333;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: #555; font-size: 0.7rem;
    transition: border-color 0.15s, color 0.15s;
    flex-direction: column; gap: 4px;
  }
  .inspiration-skip:hover { border-color: #555; color: #888; }

  /* Lightbox */
  .inspo-lightbox {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.92);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .inspo-lb-img {
    max-width: 80vw; max-height: 70vh;
    border-radius: 8px;
    object-fit: contain;
    box-shadow: 0 8px 40px rgba(0,0,0,0.6);
  }
  .inspo-lb-nav {
    display: flex; align-items: center; gap: 1.5rem;
  }
  .inspo-lb-arrow {
    background: rgba(255,255,255,0.1); border: none;
    color: #fff; font-size: 1.5rem;
    width: 44px; height: 44px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background 0.15s;
  }
  .inspo-lb-arrow:hover { background: rgba(255,255,255,0.2); }
  .inspo-lb-arrow:disabled { opacity: 0.3; cursor: default; }
  .inspo-lb-actions {
    display: flex; gap: 0.75rem;
  }
  .inspo-lb-pick {
    background: #B8860B; color: #fff; border: none;
    padding: 0.5rem 1.25rem; border-radius: 20px;
    font-size: 0.85rem; font-weight: 600; cursor: pointer;
    transition: background 0.15s;
  }
  .inspo-lb-pick:hover { background: #d4a017; }
  .inspo-lb-skip {
    background: transparent; color: #888; border: 1px solid #444;
    padding: 0.5rem 1rem; border-radius: 20px;
    font-size: 0.85rem; cursor: pointer; transition: color 0.15s;
  }
  .inspo-lb-skip:hover { color: #aaa; }
  .inspo-lb-close {
    position: absolute; top: 1rem; right: 1.25rem;
    background: none; border: none; color: #888;
    font-size: 1.5rem; cursor: pointer; line-height: 1;
  }
  .inspo-lb-counter { color: #555; font-size: 0.75rem; }
  .inspo-lb-source { color: #444; font-size: 0.65rem; }
`;function Gm({images:u,onPick:f}){const[s,r]=S.useState(null);if(!u||u.length===0)return null;const d=T=>r(T),h=()=>r(null),b=()=>r(T=>Math.max(0,T-1)),j=()=>r(T=>Math.min(u.length-1,T+1)),x=T=>{h(),f(u[T],T+1)},m=()=>{h(),f(null,0)};return g.jsxs(g.Fragment,{children:[g.jsx("style",{children:Jg}),g.jsxs("div",{className:"inspiration-strip",children:[g.jsx("div",{className:"inspiration-label",children:"Pick a vibe →"}),g.jsxs("div",{className:"inspiration-row",children:[u.map((T,z)=>g.jsxs("div",{className:"inspiration-thumb",onClick:()=>d(z),children:[g.jsx("img",{src:T.thumb||T.url,alt:T.title||`Option ${z+1}`,loading:"lazy"}),g.jsxs("div",{className:"pick-overlay",children:[g.jsx("span",{className:"pick-icon",children:"🔍"}),g.jsx("span",{children:"View"})]})]},z)),g.jsxs("div",{className:"inspiration-skip",onClick:m,children:[g.jsx("span",{children:"Skip →"}),g.jsx("span",{children:"None fit"})]})]})]}),s!==null&&g.jsxs("div",{className:"inspo-lightbox",onClick:h,children:[g.jsx("button",{className:"inspo-lb-close",onClick:h,children:"✕"}),g.jsx("div",{onClick:T=>T.stopPropagation(),children:g.jsx("img",{className:"inspo-lb-img",src:u[s].url,alt:u[s].title||`Option ${s+1}`})}),g.jsxs("div",{className:"inspo-lb-nav",onClick:T=>T.stopPropagation(),children:[g.jsx("button",{className:"inspo-lb-arrow",onClick:b,disabled:s===0,children:"‹"}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[g.jsxs("div",{className:"inspo-lb-actions",children:[g.jsx("button",{className:"inspo-lb-pick",onClick:()=>x(s),children:"✓ This vibe"}),g.jsx("button",{className:"inspo-lb-skip",onClick:m,children:"None fit"})]}),g.jsxs("div",{className:"inspo-lb-counter",children:[s+1," of ",u.length]}),u[s].source&&g.jsxs("div",{className:"inspo-lb-source",children:["via ",u[s].source]})]}),g.jsx("button",{className:"inspo-lb-arrow",onClick:j,disabled:s===u.length-1,children:"›"})]})]})]})}const $g=`
  .chat-drawer-backdrop {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    z-index: 200;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  .chat-drawer-backdrop.visible {
    opacity: 1;
    pointer-events: all;
  }
  .chat-drawer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72vh;
    z-index: 201;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #1a1a1a;
    box-shadow: 0 -8px 40px rgba(0,0,0,0.6);
    will-change: transform;
  }
  .chat-drawer-handle-area {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 1rem 6px;
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
    flex-shrink: 0;
    position: relative;
    touch-action: none;
    cursor: grab;
  }
  .chat-drawer-handle {
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: #555;
  }
  .chat-drawer-close {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #888;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.35rem 0.5rem;
    line-height: 1;
    transition: color 0.2s;
  }
  .chat-drawer-close:hover { color: #f0f0f0; }
  .chat-drawer-body {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .chat-drawer-body .chat-window {
    height: 100% !important;
    min-height: 0 !important;
  }
  .chat-drawer-body .chat-messages {
    max-height: none !important;
    flex: 1;
  }
  @media (min-width: 769px) {
    .chat-drawer-backdrop,
    .chat-drawer {
      display: none !important;
    }
  }
  @media (max-width: 768px) {
    .chat-drawer-backdrop {
      display: block;
    }
  }
`;function Wg({open:u,onClose:f,messages:s,onSend:r,isComplete:d,inspirationImages:h,onVibePick:b}){const j=S.useRef(null),[x,m]=S.useState(!1),[T,z]=S.useState(0);S.useEffect(()=>{z(0)},[u]);const H=q=>{j.current=q.touches[0].clientY,m(!0)},V=q=>{if(j.current===null)return;const B=q.touches[0].clientY-j.current;B>0&&z(B)},k=()=>{m(!1),T>120&&f(),z(0),j.current=null};return g.jsxs(g.Fragment,{children:[g.jsx("style",{children:$g}),g.jsx("div",{className:`chat-drawer-backdrop ${u?"visible":""}`,onClick:f}),g.jsxs("div",{className:`chat-drawer ${u?"open":""}`,style:{transform:u?`translateY(${T}px)`:"translateY(100%)",transition:x?"none":"transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)"},children:[g.jsxs("div",{className:"chat-drawer-handle-area",onTouchStart:H,onTouchMove:V,onTouchEnd:k,children:[g.jsx("div",{className:"chat-drawer-handle"}),g.jsx("button",{className:"chat-drawer-close",onClick:f,"aria-label":"Close chat",children:"✕"})]}),g.jsxs("div",{className:"chat-drawer-body",children:[g.jsx(Qm,{messages:s,onSend:r,isComplete:d}),g.jsx(Gm,{images:h||[],onPick:b||(()=>{})})]})]})]})}const Fg=`
  .enhance-section {
    padding: 0.75rem 0 0.25rem;
  }
  .btn-enhance {
    padding: 0.6rem 1.4rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s, transform 0.15s;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    letter-spacing: 0.01em;
  }
  .btn-enhance:hover:not(:disabled) { opacity: 0.85; transform: scale(1.02); }
  .btn-enhance:disabled { opacity: 0.55; cursor: not-allowed; }
  .enhance-auto-group {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  .btn-enhance-auto {
    background: linear-gradient(135deg, #1a3a1a, #2d5a2d);
    color: #7ddc7d;
    border: 1px solid #3a7a3a;
  }
  .btn-enhance-auto:hover:not(:disabled) {
    background: linear-gradient(135deg, #2d5a2d, #3a7a3a);
    opacity: 1;
  }
  .btn-manual-toggle {
    background: transparent;
    border: none;
    color: #555;
    font-size: 0.75rem;
    cursor: pointer;
    font-family: inherit;
    text-decoration: underline;
    padding: 0;
  }
  .btn-manual-toggle:hover { color: #888; }
  .btn-cancel {
    padding: 0.6rem 1rem;
    background: transparent;
    color: #aaa;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: border-color 0.2s;
  }
  .btn-cancel:hover { border-color: #666; color: #f0f0f0; }
  .enhance-input-group {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .enhance-input-group input {
    flex: 1;
    min-width: 200px;
    padding: 0.6rem 0.9rem;
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    color: #f0f0f0;
    font-size: 0.85rem;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }
  .enhance-input-group input:focus { border-color: #B8860B; }
  .enhance-input-group input::placeholder { color: #555; }
  .enhance-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(26, 26, 26, 0.25);
    border-top-color: #1a1a1a;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    display: inline-block;
  }
`;function Ig({imageUrl:u,roomType:f,onEnhanced:s,autoPrompt:r}){const[d,h]=S.useState(!1),[b,j]=S.useState(""),[x,m]=S.useState(!1),T=async z=>{if(z!=null&&z.trim()){h(!0);try{const V=await(await fetch("/api/enhance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:window.location.origin+u,prompt:`Photorealistic architectural render, luxury custom home, high-end finishes, bright daytime lighting, natural sunlight. ${f.charAt(0).toUpperCase()+f.slice(1)}: ${z}. Sharp detail, professional architectural photography quality.`})})).json();V.enhancedImage&&(s(V.enhancedImage),m(!1),j(""))}catch{alert("Enhancement failed. Please try again.")}finally{h(!1)}}};return g.jsxs("div",{className:"enhance-section",children:[g.jsx("style",{children:Fg}),r&&!x&&g.jsxs("div",{className:"enhance-auto-group",children:[g.jsx("button",{className:"btn-enhance btn-enhance-auto",onClick:()=>T(r),disabled:d,children:d?g.jsx("span",{className:"enhance-spinner"}):"✨ Visualize This Style"}),g.jsx("button",{className:"btn-manual-toggle",onClick:()=>m(!0),children:"Custom prompt"})]}),(!r||x)&&(x||!r?!x&&!r?g.jsx("button",{className:"btn-enhance",onClick:()=>m(!0),children:"✨ Visualize My Style"}):g.jsxs("div",{className:"enhance-input-group",children:[g.jsx("input",{type:"text",value:b,onChange:z=>j(z.target.value),placeholder:`Describe your finish preferences for this ${f}...`,disabled:d,onKeyDown:z=>z.key==="Enter"&&T(b),autoFocus:!0}),g.jsx("button",{className:"btn-enhance",onClick:()=>T(b),disabled:d||!b.trim(),children:d?g.jsx("span",{className:"enhance-spinner"}):"Apply"}),g.jsx("button",{className:"btn-cancel",onClick:()=>{m(!1),j("")},children:"Cancel"})]}):null)]})}function Pg({src:u,alt:f,onClose:s}){const[r,d]=S.useState(1),[h,b]=S.useState({x:0,y:0}),[j,x]=S.useState(!1),[m,T]=S.useState({x:0,y:0}),[z,H]=S.useState(0);S.useEffect(()=>{const L=G=>{G.key==="Escape"&&s()};return window.addEventListener("keydown",L),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",L),document.body.style.overflow=""}},[s]);const V=L=>{const G=Date.now();G-z<300&&(d(I=>I===1?2.5:1),b({x:0,y:0})),H(G)},k=L=>{L.preventDefault(),d(G=>Math.min(5,Math.max(1,G-L.deltaY*.002)))},q=L=>{r!==1&&(x(!0),T({x:L.clientX-h.x,y:L.clientY-h.y}))},B=L=>{j&&b({x:L.clientX-m.x,y:L.clientY-m.y})},Y=()=>x(!1);return g.jsxs("div",{style:$n.overlay,onClick:L=>{L.target===L.currentTarget&&s()},children:[g.jsx("button",{style:$n.closeBtn,onClick:s,children:"✕"}),g.jsx("div",{style:$n.imgWrap,onWheel:k,onMouseDown:q,onMouseMove:B,onMouseUp:Y,onMouseLeave:Y,onClick:V,children:g.jsx("img",{src:u,alt:f,style:{...$n.img,transform:`scale(${r}) translate(${h.x/r}px, ${h.y/r}px)`,cursor:r>1?j?"grabbing":"grab":"zoom-in"},draggable:!1})}),g.jsx("div",{style:$n.hint,children:r===1?"Double-tap or scroll to zoom · Tap outside to close":"Scroll to zoom · Drag to pan · Double-tap to reset"})]})}const $n={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.95)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},closeBtn:{position:"absolute",top:16,right:16,background:"rgba(255,255,255,0.1)",border:"none",color:"#fff",fontSize:20,width:44,height:44,borderRadius:"50%",cursor:"pointer",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},imgWrap:{maxWidth:"95vw",maxHeight:"90vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},img:{maxWidth:"95vw",maxHeight:"88vh",objectFit:"contain",transition:"transform 0.1s ease",userSelect:"none"},hint:{position:"absolute",bottom:16,color:"rgba(255,255,255,0.4)",fontSize:12,fontFamily:"'Inter', sans-serif"}},ey=`
  .feedback-section {
    padding: 0.75rem 0;
    border-top: 1px solid #3a3a3a;
    margin-top: 0.5rem;
  }
  .feedback-label {
    font-size: 0.78rem;
    color: #aaa;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .feedback-buttons {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .fb-btn {
    flex: 1;
    padding: 0.5rem 0.5rem;
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    color: #aaa;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .fb-btn:hover { border-color: #666; color: #f0f0f0; }
  .fb-btn.love.active { background: #1a3a1a; border-color: #4caf50; color: #4caf50; }
  .fb-btn.change.active { background: #3a2a1a; border-color: #ff9800; color: #ff9800; }
  .fb-btn.question.active { background: #1a2a3a; border-color: #2196f3; color: #2196f3; }
  .feedback-notes {
    width: 100%;
    padding: 0.55rem 0.75rem;
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    color: #f0f0f0;
    font-size: 0.85rem;
    font-family: 'Inter', sans-serif;
    resize: vertical;
    outline: none;
    margin-bottom: 0.5rem;
    transition: border-color 0.2s;
  }
  .feedback-notes:focus { border-color: #B8860B; }
  .feedback-notes::placeholder { color: #555; }
  .btn-next {
    padding: 0.55rem 1.5rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s;
  }
  .btn-next:hover { opacity: 0.85; }
  .btn-submit { padding: 0.55rem 2rem; }

  @media (max-width: 768px) {
    .feedback-buttons {
      flex-direction: column;
      gap: 0.4rem;
    }
    .fb-btn {
      width: 100%;
      min-height: 44px;
      font-size: 0.9rem;
      padding: 0.65rem 1rem;
    }
    .btn-next {
      width: 100%;
      min-height: 44px;
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
    }
    .feedback-label {
      font-size: 0.8rem;
    }
    .feedback-notes {
      font-size: 0.9rem;
    }
  }
`;function ty({imageId:u,feedback:f,onFeedback:s,onNext:r,hasNext:d,onComplete:h,isLastImage:b}){const[j,x]=S.useState((f==null?void 0:f.notes)||""),[m,T]=S.useState((f==null?void 0:f.status)||null);S.useEffect(()=>{T((f==null?void 0:f.status)||null),x((f==null?void 0:f.notes)||"")},[u]);const z=V=>{T(V),s(V,j)},H=V=>{x(V.target.value),m&&s(m,V.target.value)};return g.jsxs("div",{className:"feedback-section",children:[g.jsx("style",{children:ey}),g.jsx("div",{className:"feedback-label",children:"How do you feel about this render?"}),g.jsxs("div",{className:"feedback-buttons",children:[g.jsx("button",{className:`fb-btn love ${m==="love"?"active":""}`,onClick:()=>z("love"),children:"💚 Love It"}),g.jsx("button",{className:`fb-btn change ${m==="change"?"active":""}`,onClick:()=>z("change"),children:"🔶 Change It"}),g.jsx("button",{className:`fb-btn question ${m==="question"?"active":""}`,onClick:()=>z("question"),children:"❓ Question"})]}),m&&g.jsxs(g.Fragment,{children:[g.jsx("textarea",{className:"feedback-notes",value:j,onChange:H,placeholder:"Add any notes or details...",rows:2}),b?g.jsx("button",{className:"btn-next btn-submit",onClick:h,children:"Submit Review ✓"}):d?g.jsx("button",{className:"btn-next",onClick:r,children:"Next Image →"}):null]})]})}const Sm=`
  .image-viewer {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    overflow-y: auto;
    background: #1a1a1a;
  }
  .image-viewer.empty {
    align-items: center;
    justify-content: center;
    color: #555;
  }
  .image-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    flex-shrink: 0;
  }
  .room-label {
    font-size: 1rem;
    font-weight: 600;
    color: #B8860B;
  }
  .ref-badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    background: #2a2a2a;
    border: 1px solid #B8860B;
    border-radius: 12px;
    color: #B8860B;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .image-counter {
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.2rem 0.7rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border-radius: 12px;
    letter-spacing: 0.03em;
  }
  .image-name {
    font-size: 0.78rem;
    color: #555;
    margin-left: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }
  .image-main-wrap {
    position: relative;
    flex: 1;
    display: flex;
    align-items: stretch;
    min-height: 0;
  }
  .image-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #2a2a2a;
    border-radius: 8px;
    border: 1px solid #3a3a3a;
  }
  .main-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 6px;
  }
  .nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(184, 134, 11, 0.9);
    color: #1a1a1a;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background 0.2s, transform 0.15s;
    line-height: 1;
  }
  .nav-arrow:hover { background: #DAA520; transform: translateY(-50%) scale(1.1); }
  .nav-prev { left: 8px; }
  .nav-next { right: 8px; }
  .thumbnails {
    flex-shrink: 0;
    margin-top: 0.75rem;
  }
  .thumb-scroll-hint {
    font-size: 0.72rem;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .thumb-strip {
    display: flex;
    gap: 0.6rem;
    overflow-x: auto;
    padding-bottom: 4px;
  }
  .thumb-strip::-webkit-scrollbar { height: 4px; }
  .thumb-strip::-webkit-scrollbar-track { background: #2a2a2a; border-radius: 2px; }
  .thumb-strip::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 2px; }
  .thumb {
    position: relative;
    width: 90px;
    height: 68px;
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid #3a3a3a;
    cursor: pointer;
    padding: 0;
    background: #2a2a2a;
    flex-shrink: 0;
    transition: border-color 0.2s, transform 0.15s;
  }
  .thumb:hover { border-color: #aaa; transform: scale(1.03); }
  .thumb.active { border-color: #DAA520; box-shadow: 0 0 0 1px #B8860B; }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .thumb-num {
    position: absolute;
    bottom: 3px;
    right: 5px;
    font-size: 0.65rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
  }
  .enhanced-container {
    margin-top: 0.75rem;
    border: 1px solid rgba(184, 134, 11, 0.3);
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .enhanced-label {
    padding: 0.4rem 0.75rem;
    background: rgba(184, 134, 11, 0.1);
    font-size: 0.75rem;
    color: #DAA520;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .enhanced-toggle-row {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
  }
  .toggle-btn {
    flex: 1;
    padding: 0.45rem 0.75rem;
    border-radius: 20px;
    border: 1px solid #3a3a3a;
    background: #2a2a2a;
    color: #888;
    font-size: 0.8rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.2s;
  }
  .toggle-btn.active {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-weight: 600;
    border-color: transparent;
  }
  .enhanced-image {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    background: #2a2a2a;
  }
  .image-controls {
    flex-shrink: 0;
  }
  .btn-floor-next {
    margin-top: 0.75rem;
    padding: 0.6rem 1.5rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s;
  }
  .btn-floor-next:hover { opacity: 0.85; }

  @media (max-width: 768px) {
    .image-viewer {
      height: auto;
      overflow-y: visible;
      padding: 0.75rem;
    }
    .image-main-wrap {
      flex: none;
    }
    .image-main {
      max-height: 45vh;
    }
    .main-image {
      max-height: 45vh;
    }
    .room-label {
      font-size: 0.9rem;
    }
    .image-name {
      max-width: 120px;
      font-size: 0.72rem;
    }
    .thumb {
      width: 80px;
      height: 60px;
      min-width: 80px;
      min-height: 60px;
    }
    .nav-arrow {
      width: 44px;
      height: 44px;
      font-size: 1.6rem;
    }
    .btn-floor-next {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
      min-height: 44px;
      margin-top: 0.75rem;
    }
    .enhanced-toggle-row {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
  }
  .toggle-btn {
    flex: 1;
    padding: 0.45rem 0.75rem;
    border-radius: 20px;
    border: 1px solid #3a3a3a;
    background: #2a2a2a;
    color: #888;
    font-size: 0.8rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.2s;
  }
  .toggle-btn.active {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-weight: 600;
    border-color: transparent;
  }
  .enhanced-image {
      max-height: 200px;
    }
  }
`;function ly({image:u,images:f,currentIndex:s,onSelectImage:r,isFloorPlan:d,enhancedUrl:h,roomType:b,onEnhanced:j,autoEnhancePrompt:x,feedback:m,onFeedback:T,onNext:z,hasNext:H,onComplete:V,isLastImage:k}){const[q,B]=S.useState(!1),[Y,L]=S.useState(!1),[G,I]=S.useState(!0);if(S.useEffect(()=>{L(!1)},[u==null?void 0:u.id]),S.useEffect(()=>{I(!0)},[h]),!u)return g.jsxs("div",{className:"image-viewer empty",children:[g.jsx("style",{children:Sm}),g.jsx("p",{children:"No image to display"})]});const ee=b?b.charAt(0).toUpperCase()+b.slice(1):"",ne=f.length,W=ne>1,Ae=()=>{s>0&&r(s-1)},qe=()=>{s<ne-1&&r(s+1)};return g.jsxs("div",{className:"image-viewer",children:[g.jsx("style",{children:Sm}),g.jsxs("div",{className:"image-header",children:[g.jsx("span",{className:"room-label",children:ee}),d&&g.jsx("span",{className:"ref-badge",children:"Reference Only"}),W&&g.jsxs("span",{className:"image-counter",children:[s+1," of ",ne]}),g.jsx("span",{className:"image-name",children:u.name})]}),g.jsxs("div",{className:"image-main-wrap",children:[W&&s>0&&g.jsx("button",{className:"nav-arrow nav-prev",onClick:Ae,"aria-label":"Previous image",children:"‹"}),g.jsxs("div",{className:"image-main",children:[!Y&&g.jsx("div",{style:{width:"100%",minHeight:300,background:"linear-gradient(90deg, #2a2a2a 25%, #333 50%, #2a2a2a 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite",borderRadius:8}}),g.jsx("img",{src:u.url,alt:u.name,className:"main-image",onClick:()=>B(!0),onLoad:()=>L(!0),style:{cursor:"zoom-in",display:Y?"block":"none"},title:"Click to zoom"})]}),W&&s<ne-1&&g.jsx("button",{className:"nav-arrow nav-next",onClick:qe,"aria-label":"Next image",children:"›"})]}),h&&g.jsxs("div",{className:"enhanced-container",children:[g.jsxs("div",{className:"enhanced-toggle-row",children:[g.jsx("button",{className:`toggle-btn ${G?"":"active"}`,onClick:()=>I(!1),children:"Original"}),g.jsx("button",{className:`toggle-btn ${G?"active":""}`,onClick:()=>I(!0),children:"✨ Visualized"})]}),g.jsx("img",{src:G?h:u.url,alt:G?"Visualized render":"Original render",className:"enhanced-image",onClick:()=>B(!0),style:{cursor:"zoom-in"}})]}),W&&g.jsxs("div",{className:"thumbnails",children:[g.jsxs("div",{className:"thumb-scroll-hint",children:[ne," views — click to explore"]}),g.jsx("div",{className:"thumb-strip",children:f.map((Ve,ke)=>g.jsxs("button",{className:`thumb ${ke===s?"active":""}`,onClick:()=>r(ke),title:Ve.name,children:[g.jsx("img",{src:Ve.url,alt:Ve.name}),g.jsx("span",{className:"thumb-num",children:ke+1})]},Ve.id))})]}),g.jsxs("div",{className:"image-controls",children:[!d&&g.jsx(Ig,{imageUrl:u.url,roomType:b,onEnhanced:j,autoPrompt:x}),!d&&g.jsx(ty,{imageId:u.id,feedback:m,onFeedback:T,onNext:z,hasNext:H,onComplete:V,isLastImage:k}),d&&H&&g.jsx("button",{className:"btn-floor-next",onClick:z,children:"Continue to Next Section →"})]}),q&&g.jsx(Pg,{src:h||u.url,alt:u.name,onClose:()=>B(!1)})]})}function ay({sections:u,currentIndex:f,onSelect:s,locked:r=!1}){const d=`
  .progress-bar-container {
    padding: 0.5rem 1.5rem;
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
    overflow-x: auto;
    flex-shrink: 0;
  }
  .progress-track {
    display: flex;
    align-items: center;
    position: relative;
    min-width: fit-content;
  }
  .progress-fill {
    position: absolute;
    top: 50%;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, #B8860B, #DAA520);
    transform: translateY(-50%);
    transition: width 0.4s ease;
    z-index: 0;
    pointer-events: none;
  }
  .progress-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    min-width: 64px;
    cursor: pointer;
    user-select: none;
    outline: none;
  }
  .progress-step:hover .step-dot { border-color: #DAA520; }
  .progress-step:hover .step-label { color: #aaa; }
  .step-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3a3a3a;
    border: 2px solid #444;
    transition: all 0.3s;
  }
  .progress-step.done .step-dot {
    background: #B8860B;
    border-color: #B8860B;
  }
  .progress-step.active .step-dot {
    background: #1a1a1a;
    border-color: #DAA520;
    box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.3);
  }
  .step-label {
    font-size: 0.65rem;
    color: #555;
    margin-top: 4px;
    white-space: nowrap;
    transition: color 0.3s;
    font-family: 'Inter', sans-serif;
  }
  .progress-step.active .step-label { color: #DAA520; font-weight: 600; }
  .progress-step.done .step-label { color: #888; }

  @media (max-width: 768px) {
    .progress-bar-container {
      padding: 0 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .progress-bar-container::-webkit-scrollbar {
      display: none;
    }
    .progress-track {
      padding: 0 0.75rem;
      gap: 0;
      min-width: max-content;
    }
    .progress-step {
      min-width: 80px;
      flex: none;
      padding: 0.5rem 0.25rem;
    }
    .step-label {
      font-size: 0.7rem;
      font-weight: 500;
    }
    .progress-step.active .step-label {
      font-size: 0.72rem;
    }
    .step-dot {
      width: 8px;
      height: 8px;
    }
  }
`;return u.length?g.jsxs("div",{className:"progress-bar-container",style:r?{cursor:"not-allowed"}:{},children:[g.jsx("style",{children:d}),g.jsxs("div",{className:"progress-track",children:[u.map((h,b)=>g.jsxs("div",{className:`progress-step ${b<f?"done":""} ${b===f?"active":""}`,style:r&&b!==f?{cursor:"not-allowed",opacity:b>f?.4:1}:{},onClick:()=>!r&&s&&s(b),role:"button",tabIndex:0,onKeyDown:j=>j.key==="Enter"&&!r&&s&&s(b),children:[g.jsx("div",{className:"step-dot"}),g.jsx("span",{className:"step-label",children:h})]},b)),g.jsx("div",{className:"progress-fill",style:{width:`${f/Math.max(u.length-1,1)*100}%`}})]})]}):null}const ny=`
  .overview-screen {
    height: 100vh;
    background: #1a1a1a;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 1rem 5rem;
    overflow-y: auto;
  }
  .overview-inner {
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .overview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  .overview-logo { height: 40px; }
  .overview-badge {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #B8860B;
    border: 1px solid #B8860B44;
    padding: 0.3rem 0.75rem;
    border-radius: 20px;
  }
  .memo-card {
    background: #232323;
    border: 1px solid #2e2e2e;
    border-radius: 12px;
    overflow: visible;
  }
  .silas-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: #1e1e1e;
    border-bottom: 1px solid #2a2a2a;
    font-size: 0.78rem;
    color: #888;
  }
  .silas-dot-lg {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #B8860B;
    flex-shrink: 0;
  }
  .memo-body {
    padding: 1.5rem 1.5rem 1.75rem;
    color: #d0d0d0;
    font-size: 0.95rem;
    line-height: 1.75;
  }
  .memo-section-heading {
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #B8860B;
    margin: 1.5rem 0 0.6rem;
    font-weight: 500;
  }
  .memo-section-heading:first-child { margin-top: 0; }
  .memo-p { margin: 0 0 0.6rem; }
  .memo-spacer { height: 0.4rem; }
  .memo-list { margin: 0 0 0.5rem; padding: 0; list-style: none; }
  .memo-bullet {
    padding: 0.2rem 0 0.2rem 1.1rem;
    position: relative;
    color: #bbb;
  }
  .memo-bullet::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #B8860B;
    font-size: 0.85em;
  }
  .memo-loading {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #555;
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }
  .memo-spinner {
    width: 18px; height: 18px;
    border: 2px solid #333;
    border-top-color: #B8860B;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    flex-shrink: 0;
  }
  .memo-spinner.small { width: 14px; height: 14px; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .inspiration-section { display: flex; flex-direction: column; gap: 0.6rem; }
  .inspiration-label { display: flex; flex-direction: column; gap: 0.15rem; }
  .inspiration-label span:first-child { font-size: 0.85rem; font-weight: 500; color: #bbb; }
  .inspiration-sub { font-size: 0.78rem; color: #555; }
  .drop-zone {
    border: 1.5px dashed #2e2e2e;
    border-radius: 10px;
    padding: 1.25rem;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    min-height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .drop-zone:hover, .drop-zone-active { border-color: #B8860B; background: #B8860B0a; }
  .drop-zone-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    color: #444;
    font-size: 0.83rem;
    text-align: center;
  }
  .drop-icon { font-size: 1.3rem; }
  .drop-sub { font-size: 0.73rem; color: #3a3a3a; }
  .upload-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; width: 100%; }
  .upload-thumb {
    position: relative;
    width: 70px; height: 70px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #333;
  }
  .upload-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .upload-remove {
    position: absolute; top: 3px; right: 3px;
    width: 18px; height: 18px;
    border-radius: 50%;
    background: rgba(0,0,0,0.8);
    border: none; color: #fff;
    font-size: 0.8rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    line-height: 1;
  }
  .upload-add {
    width: 70px; height: 70px;
    border-radius: 6px;
    border: 1.5px dashed #2e2e2e;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; color: #444; cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .upload-add:hover { border-color: #B8860B; color: #B8860B; }
  .start-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-size: 1rem;
    font-weight: 700;
    font-family: inherit;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: opacity 0.15s, transform 0.1s;
  }
  .start-btn:hover:not(:disabled) { opacity: 0.9; }
  .start-btn:active:not(:disabled) { transform: scale(0.99); }
  .start-btn:disabled { opacity: 0.35; cursor: default; }
  @media (max-width: 600px) {
    .overview-screen { padding: 1.25rem 0.75rem 4rem; }
    .memo-body { padding: 1.25rem; }
  }
`;function iy({memo:u,sessionId:f,onStart:s}){const[r,d]=S.useState([]),[h,b]=S.useState(!1),[j,x]=S.useState(!1),m=S.useRef(null),T=S.useCallback(async B=>{if(!B||B.length===0)return;x(!0);const Y=[];for(const L of Array.from(B)){if(!L.type.startsWith("image/"))continue;const G=new FileReader,I=await new Promise(ee=>{G.onload=ne=>ee(ne.target.result),G.readAsDataURL(L)});Y.push({name:L.name,dataUrl:I,file:L})}if(f&&Y.length>0)try{const L=new FormData;Y.forEach(G=>L.append("images",G.file)),L.append("sessionId",f),await fetch("/api/session/inspiration",{method:"POST",body:L})}catch{}d(L=>[...L,...Y]),x(!1)},[f]),z=S.useCallback(B=>{B.preventDefault(),b(!1),T(B.dataTransfer.files)},[T]),H=B=>{B.preventDefault(),b(!0)},V=()=>b(!1),k=B=>d(Y=>Y.filter((L,G)=>G!==B)),q=B=>{if(!B)return null;const Y=B.split(`
`),L=[];let G=[];const I=()=>{G.length>0&&(L.push(g.jsx("ul",{className:"memo-list",children:G},`list-${L.length}`)),G=[])};return Y.forEach((ee,ne)=>{if(ee.startsWith("### ")||ee.startsWith("## ")||ee.startsWith("# "))I(),L.push(g.jsx("h3",{className:"memo-section-heading",children:ee.replace(/^#+\s*/,"")},ne));else if(ee.startsWith("- ")||ee.startsWith("* ")){const W=ee.replace(/^[-*]\s*/,"").replace(/\*\*([^*]+)\*\*/g,"$1");G.push(g.jsx("li",{className:"memo-bullet",children:W},ne))}else if(ee.trim()==="")I(),L.push(g.jsx("div",{className:"memo-spacer"},ne));else{I();const W=ee.replace(/\*\*([^*]+)\*\*/g,"$1");L.push(g.jsx("p",{className:"memo-p",children:W},ne))}}),I(),L};return g.jsxs("div",{className:"overview-screen",children:[g.jsx("style",{children:ny}),g.jsxs("div",{className:"overview-inner",children:[g.jsxs("div",{className:"overview-header",children:[g.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus",className:"overview-logo"}),g.jsx("div",{className:"overview-badge",children:"Draft 1 Review"})]}),g.jsxs("div",{className:"memo-card",children:[g.jsxs("div",{className:"silas-tag",children:[g.jsx("div",{className:"silas-dot-lg"}),g.jsx("span",{children:"Silas · Barnhaus Design Guide"})]}),g.jsx("div",{className:"memo-body",children:u?q(u):g.jsxs("div",{className:"memo-loading",children:[g.jsx("div",{className:"memo-spinner"}),g.jsx("span",{children:"Preparing your overview..."})]})})]}),g.jsxs("div",{className:"inspiration-section",children:[g.jsxs("div",{className:"inspiration-label",children:[g.jsx("span",{children:"Have inspiration images?"}),g.jsx("span",{className:"inspiration-sub",children:"Drop them here — Silas will reference them throughout your review."})]}),g.jsxs("div",{className:`drop-zone ${h?"drop-zone-active":""}`,onDrop:z,onDragOver:H,onDragLeave:V,onClick:()=>{var B;return(B=m.current)==null?void 0:B.click()},children:[g.jsx("input",{ref:m,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:B=>T(B.target.files)}),r.length===0?g.jsx("div",{className:"drop-zone-placeholder",children:j?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"memo-spinner small"}),g.jsx("span",{children:"Uploading..."})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"drop-icon",children:"📎"}),g.jsx("span",{children:"Drag & drop or tap to browse"}),g.jsx("span",{className:"drop-sub",children:"Kitchen vibes, tile ideas, fireplace inspo — anything helps"})]})}):g.jsxs("div",{className:"upload-grid",children:[r.map((B,Y)=>g.jsxs("div",{className:"upload-thumb",children:[g.jsx("img",{src:B.dataUrl,alt:B.name}),g.jsx("button",{className:"upload-remove",onClick:L=>{L.stopPropagation(),k(Y)},children:"×"})]},Y)),g.jsx("div",{className:"upload-add",onClick:B=>{var Y;B.stopPropagation(),(Y=m.current)==null||Y.click()},children:"+ Add more"})]})]})]}),g.jsx("button",{className:"start-btn",onClick:()=>s(r),disabled:!u,children:u?"Start My Review →":"Loading..."})]})]})}const $r={"floor plan":"Floor Plan",exterior:"Exterior",kitchen:"Kitchen","living room":"Living Room","great room":"Great Room","dining room":"Dining Room","primary bedroom":"Primary Bedroom","primary bath":"Primary Bath","master bedroom":"Primary Bedroom","master bath":"Primary Bath",bathroom:"Bathroom",office:"Office","bonus room":"Bonus Room",laundry:"Laundry",hallway:"Hallway",patio:"Patio",outdoor:"Outdoor",garage:"Garage",other:"Other"},uy=`
  .loading-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .loading-screen p { margin-top: 1rem; color: var(--text-muted); }

  .landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
  }
  .landing-card {
    background: var(--charcoal-light);
    padding: 3rem 4rem;
    border-radius: 12px;
    border: 1px solid var(--charcoal-lighter);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .landing-card h2 {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--text-dim);
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .landing-card p { color: #666; max-width: 400px; }

  /* Visibility helpers */
  .desktop-only { display: flex; }
  .mobile-only { display: none !important; }

  .review-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  .review-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background: var(--charcoal-light);
    border-bottom: 1px solid var(--charcoal-lighter);
    flex-shrink: 0;
  }
  .header-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  .header-logo {
    height: 44px;
  }
  .header-subtitle {
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    color: var(--text-muted);
    text-transform: uppercase;
    font-weight: 400;
  }
  .review-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  /* Image panel */
  .image-panel {
    flex: 1;
    overflow: hidden;
    position: relative;
    transition: flex 0.3s ease;
  }

  /* Desktop chat toggle button */
  .chat-toggle-btn {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 10;
    background: rgba(30,30,30,0.85);
    border: 1px solid #3a3a3a;
    border-radius: 20px;
    color: #f0f0f0;
    font-size: 0.8rem;
    padding: 0.4rem 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    backdrop-filter: blur(6px);
    transition: background 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .chat-toggle-btn:hover {
    background: rgba(50,50,50,0.95);
    border-color: #B8860B;
  }

  /* Desktop chat panel */
  .chat-panel {
    width: 35%;
    min-width: 280px;
    max-width: 420px;
    border-left: 1px solid var(--charcoal-lighter);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease, min-width 0.3s ease, opacity 0.3s ease;
  }
  .chat-panel-closed {
    width: 0 !important;
    min-width: 0 !important;
    opacity: 0;
    pointer-events: none;
    border-left: none;
  }

  /* Mobile FAB */
  .mobile-chat-fab {
    display: none !important;
    position: fixed;
    bottom: 80px;
    right: 1rem;
    z-index: 50;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 28px;
    padding: 0.65rem 1.1rem;
    font-size: 0.88rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    align-items: center;
    gap: 0.4rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    transition: transform 0.15s, opacity 0.15s;
  }
  .mobile-chat-fab:hover { transform: scale(1.03); }
  .mobile-chat-fab:active { transform: scale(0.97); }
  .fab-icon { font-size: 1.1rem; }
  .fab-unread-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff4444;
    position: absolute;
    top: -2px;
    right: -2px;
    border: 2px solid #1a1a1a;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
  }

  /* Mobile sticky chat bar */
  .mobile-chat-bar {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-only { display: none !important; }
    .mobile-only { display: flex !important; }

    .mobile-chat-bar {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: linear-gradient(135deg, #B8860B, #DAA520);
      padding: 0.75rem 1.25rem;
      cursor: pointer;
      box-shadow: 0 -2px 16px rgba(0,0,0,0.4);
    }
    .mobile-chat-bar-inner {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: #1a1a1a;
      font-weight: 600;
      font-size: 0.95rem;
    }
    .silas-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #1a1a1a;
      opacity: 0.6;
      animation: pulse 1.5s infinite;
    }
    .mobile-chat-unread {
      margin-left: auto;
      background: #1a1a1a;
      color: #DAA520;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.2rem 0.5rem;
      border-radius: 10px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .mobile-chat-hint {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.78rem;
      font-weight: 500;
      opacity: 0.75;
      animation: bounceUp 1.2s ease-in-out infinite;
    }
    .mobile-chat-hint-arrow {
      font-size: 1rem;
      animation: bounceUp 1.2s ease-in-out infinite;
    }
    @keyframes bounceUp {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }

    .review-page {
      height: auto;
      min-height: 100vh;
      overflow: visible;
    }
    .review-content {
      flex-direction: column;
      overflow: visible;
      flex: none;
    }
    .image-panel {
      width: 100%;
      flex: none;
      padding-bottom: 60px;
    }
    .header-logo {
      height: 36px;
    }
    .header-subtitle {
      font-size: 0.65rem;
    }
    .landing-card {
      padding: 2rem 1.5rem;
    }
    .mobile-chat-fab {
      display: flex !important;
      bottom: 80px;
      right: 1rem;
    }
  }
`,cy=`
  .completion-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: var(--charcoal);
    padding: 2rem;
  }
  .completion-card {
    background: var(--charcoal-light);
    border: 1px solid var(--charcoal-lighter);
    border-radius: 16px;
    padding: 3rem 4rem;
    text-align: center;
    max-width: 480px;
    width: 100%;
  }
  .completion-logo {
    height: 44px;
    margin-bottom: 2rem;
  }
  .completion-checkmark {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }
  .completion-card h2 {
    color: var(--text);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }
  .completion-message {
    color: var(--text-dim);
    font-size: 1rem;
    line-height: 1.6;
  }
`;function ry(){var li,ai,nt,ni,Fa,Ia,Hl,ii,Pa;const{projectSlug:u,draft:f}=Ip(),[s,r]=S.useState(null),[d,h]=S.useState(!0),[b,j]=S.useState(null),[x,m]=S.useState(0),[T,z]=S.useState(0),[H,V]=S.useState("overview"),[k,q]=S.useState([]),[B,Y]=S.useState({}),[L,G]=S.useState(null),[I,ee]=S.useState([]),[ne,W]=S.useState({}),[Ae,qe]=S.useState({}),[Ve,ke]=S.useState(!1),[be,Et]=S.useState(null),[at,we]=S.useState(!0),[D,X]=S.useState(!1),[P,ye]=S.useState(()=>window.innerWidth<=768);S.useEffect(()=>{const ae=()=>ye(window.innerWidth<=768);return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]);const[ve,v]=S.useState(!1);S.useRef(!1);const w=S.useRef(0),Q=S.useRef(!1),K=u?u.charAt(0).toUpperCase()+u.slice(1):"Client";S.useEffect(()=>{async function ae(){try{const me=await fetch(`/api/project/${u}`);if(!me.ok)throw new Error("Project not found");const Ue=await me.json();r(Ue)}catch(me){j(me.message)}finally{h(!1)}}ae()},[u]),S.useEffect(()=>{if(!s)return;const ae=(s.groups||[]).map(me=>$r[me.roomType]||me.roomType);fetch("/api/session/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectSlug:u,draft:f,clientName:K,projectName:s.projectName,rooms:ae})}).then(me=>me.json()).then(me=>{me.sessionId&&Et(me.sessionId),me.memo&&G(me.memo)}).catch(()=>{})},[s]);const U=(li=s==null?void 0:s.groups)==null?void 0:li[x],Z=(ai=U==null?void 0:U.images)==null?void 0:ai[T],de=((nt=U==null?void 0:U.roomType)==null?void 0:nt.toLowerCase())==="floor plan",We=((ni=s==null?void 0:s.groups)==null?void 0:ni.map(ae=>$r[ae.roomType]||ae.roomType))||[],De=(Fa=s==null?void 0:s.groups)!=null&&Fa[x+1]?$r[s.groups[x+1].roomType]||s.groups[x+1].roomType:null,sl=S.useRef(null),fl=S.useRef(null);S.useEffect(()=>{var _e,Yl,Ll,ui;if(!s||!Z||H!=="walkthrough")return;const ae=`${U==null?void 0:U.roomType}-${Z.id}`;if(sl.current===ae)return;sl.current=ae,fl.current&&fl.current.abort();const me=new AbortController;fl.current=me;const Ue=(U==null?void 0:U.roomType)||"other",Re=((Yl=(_e=Z.analysis)==null?void 0:_e.features)==null?void 0:Yl.join(", "))||"",Fe=`[IMAGE CHANGE] The client is now viewing image ${T+1} of ${(Ll=U==null?void 0:U.images)==null?void 0:Ll.length} in the ${Ue} section. Image name: ${Z.name}. Visible features: ${Re||"not analyzed"}. Open the conversation for this image — ask one targeted question based on the room type and what you know about this client. Do not wait for them to speak first.`;fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[],clientName:K,projectSlug:u,currentRoom:Ue,currentImage:Z.name,currentImageId:Z.id,currentImageFeatures:((ui=Z.analysis)==null?void 0:ui.features)||[],sessionId:be,currentImageIndexInSection:T,isImageChangeTrigger:!0,triggerMessage:Fe})}).then(ct=>ct.json()).then(ct=>{ct.reply&&ct.reply!=="NO_REPLY"&&ct.reply!=="ANNOUNCE_SKIP"&&ee(ia=>[...ia,{role:"assistant",content:ct.reply}]),ct.inspiration&&ct.inspiration.length>0?q(ct.inspiration):q([])}).catch(()=>{})},[U,Z,x,T,s,be,K,H]),S.useEffect(()=>{const ae=I[I.length-1];ae&&ae.role==="assistant"&&I.length>w.current&&(D||(!Q.current&&P?(Q.current=!0,X(!0)):v(!0))),w.current=I.length},[I,D,P]);const Ka=()=>{X(!0),v(!1)},ei=()=>X(!1),zt=S.useCallback(async ae=>{var Ue,Re;const me=[...I,{role:"user",content:ae}];ee(me),be&&fetch(`/api/session/${be}/transcript`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript:me})}).catch(()=>{});try{const _e=await(await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:me.map(Ll=>({role:Ll.role,content:Ll.content})),projectName:s==null?void 0:s.projectName,clientName:K,currentRoom:(U==null?void 0:U.roomType)||"greeting",currentImage:(Z==null?void 0:Z.name)||"",currentImageId:(Z==null?void 0:Z.id)||null,totalImagesInSection:((Ue=U==null?void 0:U.images)==null?void 0:Ue.length)||1,currentImageIndexInSection:T,nextSectionName:T===(((Re=U==null?void 0:U.images)==null?void 0:Re.length)||1)-1?De:null})})).json();if(!_e.reply||_e.reply==="NO_REPLY"||_e.reply==="ANNOUNCE_SKIP")return;const Yl=[...me,{role:"assistant",content:_e.reply}];ee(Yl),be&&fetch(`/api/session/${be}/transcript`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript:Yl})}).catch(()=>{})}catch{ee(Fe=>[...Fe,{role:"assistant",content:"I'm having trouble connecting. Please try again."}])}},[I,s,K,U,Z,T,De,be]),ka=S.useCallback(async ae=>{V("walkthrough")},[]),na=S.useCallback(async(ae,me)=>{if(q([]),!ae){await zt("None of those quite fit — let me describe what I have in mind.");return}ee(Ue=>[...Ue,{role:"user",content:`I like the look of option ${me}.`}]);try{const Re=await(await fetch("/api/inspiration/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:ae.url,imageIndex:me,roomType:(U==null?void 0:U.roomType)||"this room",clientName:K,sessionId:be})})).json();if(Re.reply&&ee(Fe=>[...Fe,{role:"assistant",content:Re.reply}]),Re.description&&(U!=null&&U.roomType)){const Fe=`Transform this render to match the client's chosen inspiration style. ${Re.description} Maintain the existing room layout and dimensions exactly.`;Y(_e=>({..._e,[U.roomType]:Fe}))}}catch{ee(Ue=>[...Ue,{role:"assistant",content:"Great choice — let me ask you a few more things about that direction."}])}},[U,K,be,zt]),Ru=S.useCallback(()=>{U&&(T<U.images.length-1?z(ae=>ae+1):x<s.groups.length-1&&(m(ae=>ae+1),z(0)))},[U,x,T,s]),ti=S.useCallback(ae=>{m(ae),z(0),q([])},[]),Ja=S.useCallback((ae,me,Ue)=>{W(Re=>({...Re,[ae]:{imageId:ae,imageName:Z==null?void 0:Z.name,roomType:U==null?void 0:U.roomType,status:me,notes:Ue,originalUrl:Z==null?void 0:Z.url,enhancedUrl:Ae[ae]||null}}))},[Z,U,Ae]),$a=S.useCallback((ae,me)=>{qe(Ue=>({...Ue,[ae]:me}))},[]),Wa=S.useCallback(async()=>{const ae=Object.values(ne);try{await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:s==null?void 0:s.projectName,projectSlug:slug,clientName:K,feedback:ae,sessionId:be,chatTranscript:I})}),ke(!0)}catch{alert("Failed to submit feedback. Please try again.")}},[ne,s,K,be]);return d?g.jsxs("div",{className:"loading-screen",children:[g.jsx("div",{className:"loading-spinner"}),g.jsx("p",{children:"Loading your design review..."})]}):!d&&!b&&H==="overview"?g.jsx(iy,{memo:L,sessionId:be,onStart:ka}):b?g.jsxs("div",{className:"error-screen",children:[g.jsx("h2",{children:"Unable to Load Project"}),g.jsx("p",{children:b})]}):Ve?g.jsxs("div",{className:"completion-screen",children:[g.jsx("style",{children:cy}),g.jsxs("div",{className:"completion-card",children:[g.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus",className:"completion-logo"}),g.jsx("div",{className:"completion-checkmark",children:"✓"}),g.jsx("h2",{children:"Review Complete"}),g.jsx("p",{className:"completion-message",children:"Your feedback has been sent to the Barnhaus team. We'll be in touch shortly with next steps."})]})]}):g.jsxs("div",{className:"review-page",children:[g.jsx("header",{className:"review-header",children:g.jsxs("div",{className:"header-inner",children:[g.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus Steel Builders",className:"header-logo"}),g.jsx("div",{className:"header-subtitle",children:"Design Review"})]})}),g.jsx(ay,{sections:We,currentIndex:x,onSelect:ti,locked:H==="walkthrough"}),g.jsxs("div",{className:"review-content",children:[g.jsxs("div",{className:"image-panel",children:[g.jsxs("button",{className:"chat-toggle-btn desktop-only",onClick:()=>we(ae=>!ae),"aria-label":at?"Hide chat":"Show chat",children:["💬 ",at?"Hide Silas":"Silas"]}),g.jsx(ly,{image:Z,images:(U==null?void 0:U.images)||[],currentIndex:T,onSelectImage:z,isFloorPlan:de,enhancedUrl:Ae[Z==null?void 0:Z.id],roomType:U==null?void 0:U.roomType,autoEnhancePrompt:B[U==null?void 0:U.roomType]||null,onEnhanced:ae=>$a(Z==null?void 0:Z.id,ae),feedback:ne[Z==null?void 0:Z.id],onFeedback:(ae,me)=>Ja(Z==null?void 0:Z.id,ae,me),onNext:Ru,hasNext:T<(((Ia=U==null?void 0:U.images)==null?void 0:Ia.length)||0)-1||x<(((Hl=s==null?void 0:s.groups)==null?void 0:Hl.length)||0)-1,onComplete:Wa,isLastImage:x===(((ii=s==null?void 0:s.groups)==null?void 0:ii.length)||0)-1&&T===(((Pa=U==null?void 0:U.images)==null?void 0:Pa.length)||0)-1})]}),g.jsxs("div",{className:`chat-panel desktop-only ${at?"chat-panel-open":"chat-panel-closed"}`,children:[g.jsx(Qm,{messages:I,onSend:zt,isComplete:Ve}),g.jsx(Gm,{images:k,onPick:na})]})]}),P&&g.jsx("div",{className:"mobile-chat-bar",onClick:Ka,children:g.jsxs("div",{className:"mobile-chat-bar-inner",children:[g.jsx("div",{className:"silas-dot"}),g.jsx("span",{children:"💬 Chat with Silas"}),ve&&g.jsx("span",{className:"mobile-chat-unread",children:"New message"}),!Q.current&&!ve&&g.jsxs("span",{className:"mobile-chat-hint",children:["Tap to start ",g.jsx("span",{className:"mobile-chat-hint-arrow",children:"↑"})]})]})}),g.jsx(Wg,{open:D,onClose:ei,messages:I,onSend:zt,isComplete:Ve,inspirationImages:k,onVibePick:na})]})}function oy(){return g.jsx("div",{className:"landing-page",children:g.jsxs("div",{className:"landing-card",children:[g.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus Steel Builders",style:{height:"44px",marginBottom:"1.5rem"}}),g.jsx("h2",{children:"Design Review Portal"}),g.jsx("p",{children:"Use the unique link provided by your Barnhaus team to access your design review."})]})})}function sy(){return g.jsxs(g.Fragment,{children:[g.jsx("style",{children:uy}),g.jsxs(mg,{children:[g.jsx(Fr,{path:"/review/:projectSlug/:draft",element:g.jsx(ry,{})}),g.jsx(Fr,{path:"*",element:g.jsx(oy,{})})]})]})}hp.createRoot(document.getElementById("root")).render(g.jsx(up.StrictMode,{children:g.jsx(Hg,{children:g.jsx(sy,{})})}));
