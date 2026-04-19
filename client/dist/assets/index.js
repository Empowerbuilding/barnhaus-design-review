(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const x of g.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&r(x)}).observe(document,{childList:!0,subtree:!0});function s(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(d){if(d.ep)return;d.ep=!0;const g=s(d);fetch(d.href,g)}})();function Em(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var qr={exports:{}},Jn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function ag(){if(nm)return Jn;nm=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function s(r,d,g){var x=null;if(g!==void 0&&(x=""+g),d.key!==void 0&&(x=""+d.key),"key"in d){g={};for(var A in d)A!=="key"&&(g[A]=d[A])}else g=d;return d=g.ref,{$$typeof:u,type:r,key:x,ref:d!==void 0?d:null,props:g}}return Jn.Fragment=f,Jn.jsx=s,Jn.jsxs=s,Jn}var im;function lg(){return im||(im=1,qr.exports=ag()),qr.exports}var y=lg(),Xr={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function ng(){if(um)return ae;um=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),x=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),U=Symbol.iterator;function L(m){return m===null||typeof m!="object"?null:(m=U&&m[U]||m["@@iterator"],typeof m=="function"?m:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,H={};function B(m,O,q){this.props=m,this.context=O,this.refs=H,this.updater=q||G}B.prototype.isReactComponent={},B.prototype.setState=function(m,O){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,O,"setState")},B.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Q(){}Q.prototype=B.prototype;function k(m,O,q){this.props=m,this.context=O,this.refs=H,this.updater=q||G}var J=k.prototype=new Q;J.constructor=k,X(J,B.prototype),J.isPureReactComponent=!0;var re=Array.isArray;function me(){}var I={H:null,A:null,T:null,S:null},ue=Object.prototype.hasOwnProperty;function Xe(m,O,q){var Z=q.ref;return{$$typeof:u,type:m,key:O,ref:Z!==void 0?Z:null,props:q}}function at(m,O){return Xe(m.type,O,m.props)}function ge(m){return typeof m=="object"&&m!==null&&m.$$typeof===u}function pe(m){var O={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(q){return O[q]})}var lt=/\/+/g;function _e(m,O){return typeof m=="object"&&m!==null&&m.key!=null?pe(""+m.key):O.toString(36)}function Ue(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(me,me):(m.status="pending",m.then(function(O){m.status==="pending"&&(m.status="fulfilled",m.value=O)},function(O){m.status==="pending"&&(m.status="rejected",m.reason=O)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function M(m,O,q,Z,ee){var ce=typeof m;(ce==="undefined"||ce==="boolean")&&(m=null);var ve=!1;if(m===null)ve=!0;else switch(ce){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(m.$$typeof){case u:case f:ve=!0;break;case z:return ve=m._init,M(ve(m._payload),O,q,Z,ee)}}if(ve)return ee=ee(m),ve=Z===""?"."+_e(m,0):Z,re(ee)?(q="",ve!=null&&(q=ve.replace(lt,"$&/")+"/"),M(ee,O,q,"",function(Ft){return Ft})):ee!=null&&(ge(ee)&&(ee=at(ee,q+(ee.key==null||m&&m.key===ee.key?"":(""+ee.key).replace(lt,"$&/")+"/")+ve)),O.push(ee)),1;ve=0;var Ke=Z===""?".":Z+":";if(re(m))for(var Re=0;Re<m.length;Re++)Z=m[Re],ce=Ke+_e(Z,Re),ve+=M(Z,O,q,ce,ee);else if(Re=L(m),typeof Re=="function")for(m=Re.call(m),Re=0;!(Z=m.next()).done;)Z=Z.value,ce=Ke+_e(Z,Re++),ve+=M(Z,O,q,ce,ee);else if(ce==="object"){if(typeof m.then=="function")return M(Ue(m),O,q,Z,ee);throw O=String(m),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Y(m,O,q){if(m==null)return m;var Z=[],ee=0;return M(m,Z,"","",function(ce){return O.call(q,ce,ee++)}),Z}function W(m){if(m._status===-1){var O=m._result;O=O(),O.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q)},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q)}),m._status===-1&&(m._status=0,m._result=O)}if(m._status===1)return m._result.default;throw m._result}var ye=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ie={map:Y,forEach:function(m,O,q){Y(m,function(){O.apply(this,arguments)},q)},count:function(m){var O=0;return Y(m,function(){O++}),O},toArray:function(m){return Y(m,function(O){return O})||[]},only:function(m){if(!ge(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return ae.Activity=E,ae.Children=ie,ae.Component=B,ae.Fragment=s,ae.Profiler=d,ae.PureComponent=k,ae.StrictMode=r,ae.Suspense=v,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ae.__COMPILER_RUNTIME={__proto__:null,c:function(m){return I.H.useMemoCache(m)}},ae.cache=function(m){return function(){return m.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(m,O,q){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Z=X({},m.props),ee=m.key;if(O!=null)for(ce in O.key!==void 0&&(ee=""+O.key),O)!ue.call(O,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&O.ref===void 0||(Z[ce]=O[ce]);var ce=arguments.length-2;if(ce===1)Z.children=q;else if(1<ce){for(var ve=Array(ce),Ke=0;Ke<ce;Ke++)ve[Ke]=arguments[Ke+2];Z.children=ve}return Xe(m.type,ee,Z)},ae.createContext=function(m){return m={$$typeof:x,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:g,_context:m},m},ae.createElement=function(m,O,q){var Z,ee={},ce=null;if(O!=null)for(Z in O.key!==void 0&&(ce=""+O.key),O)ue.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ee[Z]=O[Z]);var ve=arguments.length-2;if(ve===1)ee.children=q;else if(1<ve){for(var Ke=Array(ve),Re=0;Re<ve;Re++)Ke[Re]=arguments[Re+2];ee.children=Ke}if(m&&m.defaultProps)for(Z in ve=m.defaultProps,ve)ee[Z]===void 0&&(ee[Z]=ve[Z]);return Xe(m,ce,ee)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(m){return{$$typeof:A,render:m}},ae.isValidElement=ge,ae.lazy=function(m){return{$$typeof:z,_payload:{_status:-1,_result:m},_init:W}},ae.memo=function(m,O){return{$$typeof:h,type:m,compare:O===void 0?null:O}},ae.startTransition=function(m){var O=I.T,q={};I.T=q;try{var Z=m(),ee=I.S;ee!==null&&ee(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(me,ye)}catch(ce){ye(ce)}finally{O!==null&&q.types!==null&&(O.types=q.types),I.T=O}},ae.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ae.use=function(m){return I.H.use(m)},ae.useActionState=function(m,O,q){return I.H.useActionState(m,O,q)},ae.useCallback=function(m,O){return I.H.useCallback(m,O)},ae.useContext=function(m){return I.H.useContext(m)},ae.useDebugValue=function(){},ae.useDeferredValue=function(m,O){return I.H.useDeferredValue(m,O)},ae.useEffect=function(m,O){return I.H.useEffect(m,O)},ae.useEffectEvent=function(m){return I.H.useEffectEvent(m)},ae.useId=function(){return I.H.useId()},ae.useImperativeHandle=function(m,O,q){return I.H.useImperativeHandle(m,O,q)},ae.useInsertionEffect=function(m,O){return I.H.useInsertionEffect(m,O)},ae.useLayoutEffect=function(m,O){return I.H.useLayoutEffect(m,O)},ae.useMemo=function(m,O){return I.H.useMemo(m,O)},ae.useOptimistic=function(m,O){return I.H.useOptimistic(m,O)},ae.useReducer=function(m,O,q){return I.H.useReducer(m,O,q)},ae.useRef=function(m){return I.H.useRef(m)},ae.useState=function(m){return I.H.useState(m)},ae.useSyncExternalStore=function(m,O,q){return I.H.useSyncExternalStore(m,O,q)},ae.useTransition=function(){return I.H.useTransition()},ae.version="19.2.4",ae}var cm;function Pr(){return cm||(cm=1,Xr.exports=ng()),Xr.exports}var S=Pr();const ig=Em(S);var Qr={exports:{}},$n={},Gr={exports:{}},Zr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function ug(){return rm||(rm=1,(function(u){function f(M,Y){var W=M.length;M.push(Y);e:for(;0<W;){var ye=W-1>>>1,ie=M[ye];if(0<d(ie,Y))M[ye]=Y,M[W]=ie,W=ye;else break e}}function s(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var Y=M[0],W=M.pop();if(W!==Y){M[0]=W;e:for(var ye=0,ie=M.length,m=ie>>>1;ye<m;){var O=2*(ye+1)-1,q=M[O],Z=O+1,ee=M[Z];if(0>d(q,W))Z<ie&&0>d(ee,q)?(M[ye]=ee,M[Z]=W,ye=Z):(M[ye]=q,M[O]=W,ye=O);else if(Z<ie&&0>d(ee,W))M[ye]=ee,M[Z]=W,ye=Z;else break e}}return Y}function d(M,Y){var W=M.sortIndex-Y.sortIndex;return W!==0?W:M.id-Y.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;u.unstable_now=function(){return g.now()}}else{var x=Date,A=x.now();u.unstable_now=function(){return x.now()-A}}var v=[],h=[],z=1,E=null,U=3,L=!1,G=!1,X=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function J(M){for(var Y=s(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=M)r(h),Y.sortIndex=Y.expirationTime,f(v,Y);else break;Y=s(h)}}function re(M){if(X=!1,J(M),!G)if(s(v)!==null)G=!0,me||(me=!0,pe());else{var Y=s(h);Y!==null&&Ue(re,Y.startTime-M)}}var me=!1,I=-1,ue=5,Xe=-1;function at(){return H?!0:!(u.unstable_now()-Xe<ue)}function ge(){if(H=!1,me){var M=u.unstable_now();Xe=M;var Y=!0;try{e:{G=!1,X&&(X=!1,Q(I),I=-1),L=!0;var W=U;try{t:{for(J(M),E=s(v);E!==null&&!(E.expirationTime>M&&at());){var ye=E.callback;if(typeof ye=="function"){E.callback=null,U=E.priorityLevel;var ie=ye(E.expirationTime<=M);if(M=u.unstable_now(),typeof ie=="function"){E.callback=ie,J(M),Y=!0;break t}E===s(v)&&r(v),J(M)}else r(v);E=s(v)}if(E!==null)Y=!0;else{var m=s(h);m!==null&&Ue(re,m.startTime-M),Y=!1}}break e}finally{E=null,U=W,L=!1}Y=void 0}}finally{Y?pe():me=!1}}}var pe;if(typeof k=="function")pe=function(){k(ge)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,_e=lt.port2;lt.port1.onmessage=ge,pe=function(){_e.postMessage(null)}}else pe=function(){B(ge,0)};function Ue(M,Y){I=B(function(){M(u.unstable_now())},Y)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(M){M.callback=null},u.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<M?Math.floor(1e3/M):5},u.unstable_getCurrentPriorityLevel=function(){return U},u.unstable_next=function(M){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var W=U;U=Y;try{return M()}finally{U=W}},u.unstable_requestPaint=function(){H=!0},u.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=U;U=M;try{return Y()}finally{U=W}},u.unstable_scheduleCallback=function(M,Y,W){var ye=u.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ye+W:ye):W=ye,M){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=W+ie,M={id:z++,callback:Y,priorityLevel:M,startTime:W,expirationTime:ie,sortIndex:-1},W>ye?(M.sortIndex=W,f(h,M),s(v)===null&&M===s(h)&&(X?(Q(I),I=-1):X=!0,Ue(re,W-ye))):(M.sortIndex=ie,f(v,M),G||L||(G=!0,me||(me=!0,pe()))),M},u.unstable_shouldYield=at,u.unstable_wrapCallback=function(M){var Y=U;return function(){var W=U;U=Y;try{return M.apply(this,arguments)}finally{U=W}}}})(Zr)),Zr}var om;function cg(){return om||(om=1,Gr.exports=ug()),Gr.exports}var Vr={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function rg(){if(sm)return ut;sm=1;var u=Pr();function f(v){var h="https://react.dev/errors/"+v;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)h+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+v+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(f(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(v,h,z){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:E==null?null:""+E,children:v,containerInfo:h,implementation:z}}var x=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(v,h){if(v==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ut.createPortal=function(v,h){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(f(299));return g(v,h,null,z)},ut.flushSync=function(v){var h=x.T,z=r.p;try{if(x.T=null,r.p=2,v)return v()}finally{x.T=h,r.p=z,r.d.f()}},ut.preconnect=function(v,h){typeof v=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(v,h))},ut.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},ut.preinit=function(v,h){if(typeof v=="string"&&h&&typeof h.as=="string"){var z=h.as,E=A(z,h.crossOrigin),U=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;z==="style"?r.d.S(v,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:E,integrity:U,fetchPriority:L}):z==="script"&&r.d.X(v,{crossOrigin:E,integrity:U,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ut.preinitModule=function(v,h){if(typeof v=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var z=A(h.as,h.crossOrigin);r.d.M(v,{crossOrigin:z,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(v)},ut.preload=function(v,h){if(typeof v=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var z=h.as,E=A(z,h.crossOrigin);r.d.L(v,z,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ut.preloadModule=function(v,h){if(typeof v=="string")if(h){var z=A(h.as,h.crossOrigin);r.d.m(v,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:z,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(v)},ut.requestFormReset=function(v){r.d.r(v)},ut.unstable_batchedUpdates=function(v,h){return v(h)},ut.useFormState=function(v,h,z){return x.H.useFormState(v,h,z)},ut.useFormStatus=function(){return x.H.useHostTransitionStatus()},ut.version="19.2.4",ut}var fm;function og(){if(fm)return Vr.exports;fm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Vr.exports=rg(),Vr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function sg(){if(dm)return $n;dm=1;var u=cg(),f=Pr(),s=og();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(g(e)!==e)throw Error(r(188))}function h(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return v(n),e;if(i===l)return v(n),t;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,o=n.child;o;){if(o===a){c=!0,a=n,l=i;break}if(o===l){c=!0,l=n,a=i;break}o=o.sibling}if(!c){for(o=i.child;o;){if(o===a){c=!0,a=i,l=n;break}if(o===l){c=!0,l=i,a=n;break}o=o.sibling}if(!c)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,U=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),ge=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=ge&&e[ge]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case B:return"Profiler";case H:return"StrictMode";case re:return"Suspense";case me:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case k:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var Ue=Array.isArray,M=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ye=[],ie=-1;function m(e){return{current:e}}function O(e){0>ie||(e.current=ye[ie],ye[ie]=null,ie--)}function q(e,t){ie++,ye[ie]=e.current,e.current=t}var Z=m(null),ee=m(null),ce=m(null),ve=m(null);function Ke(e,t){switch(q(ce,t),q(ee,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Rd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Rd(t),e=Cd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Z),q(Z,e)}function Re(){O(Z),O(ee),O(ce)}function Ft(e){e.memoizedState!==null&&q(ve,e);var t=Z.current,a=Cd(t,e.type);t!==a&&(q(ee,e),q(Z,a))}function Ut(e){ee.current===e&&(O(Z),O(ee)),ve.current===e&&(O(ve),Zn._currentValue=W)}var Wl,ai;function Yt(e){if(Wl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Wl=t&&t[1]||"",ai=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wl+e+ai}var ol=!1;function Fl(e,t){if(!e||ol)return"";ol=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(j){var C=j}Reflect.construct(e,[],w)}else{try{w.call()}catch(j){C=j}e.call(w.prototype)}}else{try{throw Error()}catch(j){C=j}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(j){if(j&&C&&typeof j.stack=="string")return[j.stack,C.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],o=i[1];if(c&&o){var p=c.split(`
`),R=o.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<R.length&&!R[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===R.length)for(l=p.length-1,n=R.length-1;1<=l&&0<=n&&p[l]!==R[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==R[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==R[n]){var D=`
`+p[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{ol=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Nu(e,t){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==t&&t!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Fl(e.type,!1);case 11:return Fl(e.type.render,!1);case 1:return Fl(e.type,!0);case 31:return Yt("Activity");default:return""}}function li(e){try{var t="",a=null;do t+=Nu(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Il=Object.prototype.hasOwnProperty,Ga=u.unstable_scheduleCallback,Pl=u.unstable_cancelCallback,Ru=u.unstable_shouldYield,ni=u.unstable_requestPaint,nt=u.unstable_now,ii=u.unstable_getCurrentPriorityLevel,en=u.unstable_ImmediatePriority,tn=u.unstable_UserBlockingPriority,Za=u.unstable_NormalPriority,ui=u.unstable_LowPriority,an=u.unstable_IdlePriority,ci=u.log,P=u.unstable_setDisableYieldValue,te=null,Ce=null;function Je(e){if(typeof ci=="function"&&P(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(te,e)}catch{}}var Le=Math.clz32?Math.clz32:Xt,qt=Math.log,It=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(qt(e)/It|0)|0}var Qt=256,Gt=262144,rt=4194304;function zt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function it(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=zt(l):(c&=o,c!==0?n=zt(c):a||(a=o&~e,a!==0&&(n=zt(a))))):(o=l&~i,o!==0?n=zt(o):c!==0?n=zt(c):a||(a=l&~e,a!==0&&(n=zt(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Va(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uo(){var e=rt;return rt<<=1,(rt&62914560)===0&&(rt=4194304),e}function Cu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ln(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zm(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,p=e.expirationTimes,R=e.hiddenUpdates;for(a=c&~a;0<a;){var D=31-Le(a),w=1<<D;o[D]=0,p[D]=-1;var C=R[D];if(C!==null)for(R[D]=null,D=0;D<C.length;D++){var j=C[D];j!==null&&(j.lane&=-536870913)}a&=~w}l!==0&&co(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function co(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Le(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ro(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Le(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function oo(e,t){var a=t&-t;return a=(a&42)!==0?1:Ou(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ju(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function so(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Fd(e.type))}function fo(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var va=Math.random().toString(36).slice(2),Fe="__reactFiber$"+va,ot="__reactProps$"+va,sl="__reactContainer$"+va,Du="__reactEvents$"+va,Vm="__reactListeners$"+va,km="__reactHandles$"+va,mo="__reactResources$"+va,nn="__reactMarker$"+va;function Mu(e){delete e[Fe],delete e[ot],delete e[Du],delete e[Vm],delete e[km]}function fl(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[sl]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ud(e);e!==null;){if(a=e[Fe])return a;e=Ud(e)}return t}e=a,a=e.parentNode}return null}function dl(e){if(e=e[Fe]||e[sl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ml(e){var t=e[mo];return t||(t=e[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[nn]=!0}var ho=new Set,go={};function ka(e,t){hl(e,t),hl(e+"Capture",t)}function hl(e,t){for(go[e]=t,e=0;e<t.length;e++)ho.add(t[e])}var Km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),po={},yo={};function Jm(e){return Il.call(yo,e)?!0:Il.call(po,e)?!1:Km.test(e)?yo[e]=!0:(po[e]=!0,!1)}function ri(e,t,a){if(Jm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function oi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _u(e){if(!e._valueTracker){var t=vo(e)?"checked":"value";e._valueTracker=$m(e,t,""+e[t])}}function bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=vo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wm=/[\n"\\]/g;function At(e){return e.replace(Wm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wu(e,t,a,l,n,i,c,o){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Uu(e,c,Tt(t)):a!=null?Uu(e,c,Tt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Tt(o):e.removeAttribute("name")}function xo(e,t,a,l,n,i,c,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){_u(e);return}a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),_u(e)}function Uu(e,t,a){t==="number"&&si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function So(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function Eo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ue(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),_u(e)}function pl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function To(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&zo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&zo(e,i,t[i])}function Bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(e){return Pm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Hu=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,vl=null;function Ao(e){var t=dl(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(wu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[ot]||null;if(!n)throw Error(r(90));wu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&bo(l)}break e;case"textarea":So(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&gl(e,!!a.multiple,t,!1)}}}var Yu=!1;function No(e,t,a){if(Yu)return e(t,a);Yu=!0;try{var l=e(t);return l}finally{if(Yu=!1,(yl!==null||vl!==null)&&(Ii(),yl&&(t=yl,e=vl,vl=yl=null,Ao(t),e)))for(t=0;t<e.length;t++)Ao(e[t])}}function cn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ot]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(ta)try{var rn={};Object.defineProperty(rn,"passive",{get:function(){qu=!0}}),window.addEventListener("test",rn,rn),window.removeEventListener("test",rn,rn)}catch{qu=!1}var ba=null,Xu=null,di=null;function Ro(){if(di)return di;var e,t=Xu,a=t.length,l,n="value"in ba?ba.value:ba.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return di=n.slice(e,1<l?1-l:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function Co(){return!1}function st(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hi:Co,this.isPropagationStopped=Co,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=st(Ka),on=E({},Ka,{view:0,detail:0}),eh=st(on),Qu,Gu,sn,pi=E({},on,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&e.type==="mousemove"?(Qu=e.screenX-sn.screenX,Gu=e.screenY-sn.screenY):Gu=Qu=0,sn=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),Oo=st(pi),th=E({},pi,{dataTransfer:0}),ah=st(th),lh=E({},on,{relatedTarget:0}),Zu=st(lh),nh=E({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=st(nh),uh=E({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ch=st(uh),rh=E({},Ka,{data:0}),jo=st(rh),oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fh[e])?!!t[e]:!1}function Vu(){return dh}var mh=E({},on,{key:function(e){if(e.key){var t=oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=st(mh),gh=E({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Do=st(gh),ph=E({},on,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),yh=st(ph),vh=E({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=st(vh),xh=E({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sh=st(xh),Eh=E({},Ka,{newState:0,oldState:0}),zh=st(Eh),Th=[9,13,27,32],ku=ta&&"CompositionEvent"in window,fn=null;ta&&"documentMode"in document&&(fn=document.documentMode);var Ah=ta&&"TextEvent"in window&&!fn,Mo=ta&&(!ku||fn&&8<fn&&11>=fn),_o=" ",wo=!1;function Uo(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function Nh(e,t){switch(e){case"compositionend":return Bo(t);case"keypress":return t.which!==32?null:(wo=!0,_o);case"textInput":return e=t.data,e===_o&&wo?null:e;default:return null}}function Rh(e,t){if(bl)return e==="compositionend"||!ku&&Uo(e,t)?(e=Ro(),di=Xu=ba=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mo&&t.locale!=="ko"?null:t.data;default:return null}}var Ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ch[e.type]:t==="textarea"}function Lo(e,t,a,l){yl?vl?vl.push(l):vl=[l]:yl=l,t=iu(t,"onChange"),0<t.length&&(a=new gi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var dn=null,mn=null;function Oh(e){Sd(e,0)}function yi(e){var t=un(e);if(bo(t))return e}function Yo(e,t){if(e==="change")return t}var qo=!1;if(ta){var Ku;if(ta){var Ju="oninput"in document;if(!Ju){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),Ju=typeof Xo.oninput=="function"}Ku=Ju}else Ku=!1;qo=Ku&&(!document.documentMode||9<document.documentMode)}function Qo(){dn&&(dn.detachEvent("onpropertychange",Go),mn=dn=null)}function Go(e){if(e.propertyName==="value"&&yi(mn)){var t=[];Lo(t,mn,e,Lu(e)),No(Oh,t)}}function jh(e,t,a){e==="focusin"?(Qo(),dn=t,mn=a,dn.attachEvent("onpropertychange",Go)):e==="focusout"&&Qo()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(mn)}function Mh(e,t){if(e==="click")return yi(t)}function _h(e,t){if(e==="input"||e==="change")return yi(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:wh;function hn(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Il.call(t,n)||!pt(e[n],t[n]))return!1}return!0}function Zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vo(e,t){var a=Zo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zo(a)}}function ko(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ko(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ko(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=si(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=si(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uh=ta&&"documentMode"in document&&11>=document.documentMode,xl=null,Wu=null,gn=null,Fu=!1;function Jo(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||xl==null||xl!==si(l)||(l=xl,"selectionStart"in l&&$u(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),gn&&hn(gn,l)||(gn=l,l=iu(Wu,"onSelect"),0<l.length&&(t=new gi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=xl)))}function Ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sl={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Iu={},$o={};ta&&($o=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function $a(e){if(Iu[e])return Iu[e];if(!Sl[e])return e;var t=Sl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in $o)return Iu[e]=t[a];return e}var Wo=$a("animationend"),Fo=$a("animationiteration"),Io=$a("animationstart"),Bh=$a("transitionrun"),Hh=$a("transitionstart"),Lh=$a("transitioncancel"),Po=$a("transitionend"),es=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Bt(e,t){es.set(e,t),ka(t,[e])}var vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],El=0,ec=0;function bi(){for(var e=El,t=ec=El=0;t<e;){var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var n=Nt[t];Nt[t++]=null;var i=Nt[t];if(Nt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&ts(a,n,i)}}function xi(e,t,a,l){Nt[El++]=e,Nt[El++]=t,Nt[El++]=a,Nt[El++]=l,ec|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function tc(e,t,a,l){return xi(e,t,a,l),Si(e)}function Wa(e,t){return xi(e,null,null,t),Si(e)}function ts(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Le(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Si(e){if(50<Hn)throw Hn=0,sr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zl={};function Yh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,a,l){return new Yh(e,t,a,l)}function ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=yt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function as(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ei(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")ac(e)&&(c=1);else if(typeof e=="string")c=Z0(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=yt(31,a,t,n),e.elementType=Xe,e.lanes=i,e;case X:return Fa(a.children,n,i,t);case H:c=8,n|=24;break;case B:return e=yt(12,a,t,n|2),e.elementType=B,e.lanes=i,e;case re:return e=yt(13,a,t,n),e.elementType=re,e.lanes=i,e;case me:return e=yt(19,a,t,n),e.elementType=me,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:c=10;break e;case Q:c=9;break e;case J:c=11;break e;case I:c=14;break e;case ue:c=16,l=null;break e}c=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=yt(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Fa(e,t,a,l){return e=yt(7,e,l,t),e.lanes=a,e}function lc(e,t,a){return e=yt(6,e,null,t),e.lanes=a,e}function ls(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function nc(e,t,a){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ns=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var a=ns.get(e);return a!==void 0?a:(t={value:e,source:t,stack:li(t)},ns.set(e,t),t)}return{value:e,source:t,stack:li(t)}}var Tl=[],Al=0,zi=null,pn=0,Ct=[],Ot=0,xa=null,Zt=1,Vt="";function la(e,t){Tl[Al++]=pn,Tl[Al++]=zi,zi=e,pn=t}function is(e,t,a){Ct[Ot++]=Zt,Ct[Ot++]=Vt,Ct[Ot++]=xa,xa=e;var l=Zt;e=Vt;var n=32-Le(l)-1;l&=~(1<<n),a+=1;var i=32-Le(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Zt=1<<32-Le(t)+n|a<<n|l,Vt=i+e}else Zt=1<<i|a<<n|l,Vt=e}function ic(e){e.return!==null&&(la(e,1),is(e,1,0))}function uc(e){for(;e===zi;)zi=Tl[--Al],Tl[Al]=null,pn=Tl[--Al],Tl[Al]=null;for(;e===xa;)xa=Ct[--Ot],Ct[Ot]=null,Vt=Ct[--Ot],Ct[Ot]=null,Zt=Ct[--Ot],Ct[Ot]=null}function us(e,t){Ct[Ot++]=Zt,Ct[Ot++]=Vt,Ct[Ot++]=xa,Zt=t.id,Vt=t.overflow,xa=e}var Ie=null,je=null,he=!1,Sa=null,jt=!1,cc=Error(r(519));function Ea(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yn(Rt(t,e)),cc}function cs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Fe]=e,t[ot]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Yn.length;a++)se(Yn[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),xo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Eo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Ad(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=ea),t=!0):t=!1,t||Ea(e,!0)}function rs(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:Ie=Ie.return}}function Nl(e){if(e!==Ie)return!1;if(!he)return rs(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ar(e.type,e.memoizedProps)),a=!a),a&&je&&Ea(e),rs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=wd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=wd(e)}else t===27?(t=je,Ba(e.type)?(e=jr,jr=null,je=e):je=t):je=Ie?Mt(e.stateNode.nextSibling):null;return!0}function Ia(){je=Ie=null,he=!1}function rc(){var e=Sa;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),Sa=null),e}function yn(e){Sa===null?Sa=[e]:Sa.push(e)}var oc=m(null),Pa=null,na=null;function za(e,t,a){q(oc,t._currentValue),t._currentValue=a}function ia(e){e._currentValue=oc.current,O(oc)}function sc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function fc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var p=0;p<t.length;p++)if(o.context===t[p]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),sc(i.return,a,e),l||(c=null);break e}i=o.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),sc(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Rl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var o=n.type;pt(n.pendingProps.value,c.value)||(e!==null?e.push(o):e=[o])}}else if(n===ve.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Zn):e=[Zn])}n=n.return}e!==null&&fc(t,e,a,l),t.flags|=262144}function Ti(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function el(e){Pa=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return os(Pa,e)}function Ai(e,t){return Pa===null&&el(e),os(e,t)}function os(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},na===null){if(e===null)throw Error(r(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return a}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Xh=u.unstable_scheduleCallback,Qh=u.unstable_NormalPriority,Qe={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dc(){return{controller:new qh,data:new Map,refCount:0}}function vn(e){e.refCount--,e.refCount===0&&Xh(Qh,function(){e.controller.abort()})}var bn=null,mc=0,Cl=0,Ol=null;function Gh(e,t){if(bn===null){var a=bn=[];mc=0,Cl=pr(),Ol={status:"pending",value:void 0,then:function(l){a.push(l)}}}return mc++,t.then(ss,ss),t}function ss(){if(--mc===0&&bn!==null){Ol!==null&&(Ol.status="fulfilled");var e=bn;bn=null,Cl=0,Ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var fs=M.S;M.S=function(e,t){$f=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),fs!==null&&fs(e,t)};var tl=m(null);function hc(){var e=tl.current;return e!==null?e:Oe.pooledCache}function Ni(e,t){t===null?q(tl,tl.current):q(tl,t.pool)}function ds(){var e=hc();return e===null?null:{parent:Qe._currentValue,pool:e}}var jl=Error(r(460)),gc=Error(r(474)),Ri=Error(r(542)),Ci={then:function(){}};function ms(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ea,ea),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ps(e),e;default:if(typeof t.status=="string")t.then(ea,ea);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ps(e),e}throw ll=t,jl}}function al(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ll=a,jl):a}}var ll=null;function gs(){if(ll===null)throw Error(r(459));var e=ll;return ll=null,e}function ps(e){if(e===jl||e===Ri)throw Error(r(483))}var Dl=null,xn=0;function Oi(e){var t=xn;return xn+=1,Dl===null&&(Dl=[]),hs(Dl,e,t)}function Sn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ji(e,t){throw t.$$typeof===U?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ys(e){function t(T,b){if(e){var N=T.deletions;N===null?(T.deletions=[b],T.flags|=16):N.push(b)}}function a(T,b){if(!e)return null;for(;b!==null;)t(T,b),b=b.sibling;return null}function l(T){for(var b=new Map;T!==null;)T.key!==null?b.set(T.key,T):b.set(T.index,T),T=T.sibling;return b}function n(T,b){return T=aa(T,b),T.index=0,T.sibling=null,T}function i(T,b,N){return T.index=N,e?(N=T.alternate,N!==null?(N=N.index,N<b?(T.flags|=67108866,b):N):(T.flags|=67108866,b)):(T.flags|=1048576,b)}function c(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function o(T,b,N,_){return b===null||b.tag!==6?(b=lc(N,T.mode,_),b.return=T,b):(b=n(b,N),b.return=T,b)}function p(T,b,N,_){var $=N.type;return $===X?D(T,b,N.props.children,_,N.key):b!==null&&(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ue&&al($)===b.type)?(b=n(b,N.props),Sn(b,N),b.return=T,b):(b=Ei(N.type,N.key,N.props,null,T.mode,_),Sn(b,N),b.return=T,b)}function R(T,b,N,_){return b===null||b.tag!==4||b.stateNode.containerInfo!==N.containerInfo||b.stateNode.implementation!==N.implementation?(b=nc(N,T.mode,_),b.return=T,b):(b=n(b,N.children||[]),b.return=T,b)}function D(T,b,N,_,$){return b===null||b.tag!==7?(b=Fa(N,T.mode,_,$),b.return=T,b):(b=n(b,N),b.return=T,b)}function w(T,b,N){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=lc(""+b,T.mode,N),b.return=T,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case L:return N=Ei(b.type,b.key,b.props,null,T.mode,N),Sn(N,b),N.return=T,N;case G:return b=nc(b,T.mode,N),b.return=T,b;case ue:return b=al(b),w(T,b,N)}if(Ue(b)||pe(b))return b=Fa(b,T.mode,N,null),b.return=T,b;if(typeof b.then=="function")return w(T,Oi(b),N);if(b.$$typeof===k)return w(T,Ai(T,b),N);ji(T,b)}return null}function C(T,b,N,_){var $=b!==null?b.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return $!==null?null:o(T,b,""+N,_);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case L:return N.key===$?p(T,b,N,_):null;case G:return N.key===$?R(T,b,N,_):null;case ue:return N=al(N),C(T,b,N,_)}if(Ue(N)||pe(N))return $!==null?null:D(T,b,N,_,null);if(typeof N.then=="function")return C(T,b,Oi(N),_);if(N.$$typeof===k)return C(T,b,Ai(T,N),_);ji(T,N)}return null}function j(T,b,N,_,$){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return T=T.get(N)||null,o(b,T,""+_,$);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case L:return T=T.get(_.key===null?N:_.key)||null,p(b,T,_,$);case G:return T=T.get(_.key===null?N:_.key)||null,R(b,T,_,$);case ue:return _=al(_),j(T,b,N,_,$)}if(Ue(_)||pe(_))return T=T.get(N)||null,D(b,T,_,$,null);if(typeof _.then=="function")return j(T,b,N,Oi(_),$);if(_.$$typeof===k)return j(T,b,N,Ai(b,_),$);ji(b,_)}return null}function V(T,b,N,_){for(var $=null,be=null,K=b,ne=b=0,de=null;K!==null&&ne<N.length;ne++){K.index>ne?(de=K,K=null):de=K.sibling;var xe=C(T,K,N[ne],_);if(xe===null){K===null&&(K=de);break}e&&K&&xe.alternate===null&&t(T,K),b=i(xe,b,ne),be===null?$=xe:be.sibling=xe,be=xe,K=de}if(ne===N.length)return a(T,K),he&&la(T,ne),$;if(K===null){for(;ne<N.length;ne++)K=w(T,N[ne],_),K!==null&&(b=i(K,b,ne),be===null?$=K:be.sibling=K,be=K);return he&&la(T,ne),$}for(K=l(K);ne<N.length;ne++)de=j(K,T,ne,N[ne],_),de!==null&&(e&&de.alternate!==null&&K.delete(de.key===null?ne:de.key),b=i(de,b,ne),be===null?$=de:be.sibling=de,be=de);return e&&K.forEach(function(Xa){return t(T,Xa)}),he&&la(T,ne),$}function F(T,b,N,_){if(N==null)throw Error(r(151));for(var $=null,be=null,K=b,ne=b=0,de=null,xe=N.next();K!==null&&!xe.done;ne++,xe=N.next()){K.index>ne?(de=K,K=null):de=K.sibling;var Xa=C(T,K,xe.value,_);if(Xa===null){K===null&&(K=de);break}e&&K&&Xa.alternate===null&&t(T,K),b=i(Xa,b,ne),be===null?$=Xa:be.sibling=Xa,be=Xa,K=de}if(xe.done)return a(T,K),he&&la(T,ne),$;if(K===null){for(;!xe.done;ne++,xe=N.next())xe=w(T,xe.value,_),xe!==null&&(b=i(xe,b,ne),be===null?$=xe:be.sibling=xe,be=xe);return he&&la(T,ne),$}for(K=l(K);!xe.done;ne++,xe=N.next())xe=j(K,T,ne,xe.value,_),xe!==null&&(e&&xe.alternate!==null&&K.delete(xe.key===null?ne:xe.key),b=i(xe,b,ne),be===null?$=xe:be.sibling=xe,be=xe);return e&&K.forEach(function(tg){return t(T,tg)}),he&&la(T,ne),$}function Ne(T,b,N,_){if(typeof N=="object"&&N!==null&&N.type===X&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case L:e:{for(var $=N.key;b!==null;){if(b.key===$){if($=N.type,$===X){if(b.tag===7){a(T,b.sibling),_=n(b,N.props.children),_.return=T,T=_;break e}}else if(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ue&&al($)===b.type){a(T,b.sibling),_=n(b,N.props),Sn(_,N),_.return=T,T=_;break e}a(T,b);break}else t(T,b);b=b.sibling}N.type===X?(_=Fa(N.props.children,T.mode,_,N.key),_.return=T,T=_):(_=Ei(N.type,N.key,N.props,null,T.mode,_),Sn(_,N),_.return=T,T=_)}return c(T);case G:e:{for($=N.key;b!==null;){if(b.key===$)if(b.tag===4&&b.stateNode.containerInfo===N.containerInfo&&b.stateNode.implementation===N.implementation){a(T,b.sibling),_=n(b,N.children||[]),_.return=T,T=_;break e}else{a(T,b);break}else t(T,b);b=b.sibling}_=nc(N,T.mode,_),_.return=T,T=_}return c(T);case ue:return N=al(N),Ne(T,b,N,_)}if(Ue(N))return V(T,b,N,_);if(pe(N)){if($=pe(N),typeof $!="function")throw Error(r(150));return N=$.call(N),F(T,b,N,_)}if(typeof N.then=="function")return Ne(T,b,Oi(N),_);if(N.$$typeof===k)return Ne(T,b,Ai(T,N),_);ji(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,b!==null&&b.tag===6?(a(T,b.sibling),_=n(b,N),_.return=T,T=_):(a(T,b),_=lc(N,T.mode,_),_.return=T,T=_),c(T)):a(T,b)}return function(T,b,N,_){try{xn=0;var $=Ne(T,b,N,_);return Dl=null,$}catch(K){if(K===jl||K===Ri)throw K;var be=yt(29,K,null,T.mode);return be.lanes=_,be.return=T,be}finally{}}}var nl=ys(!0),vs=ys(!1),Ta=!1;function pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Si(e),ts(e,null,a),t}return xi(e,l,t,a),Si(e)}function En(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ro(e,a)}}function vc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bc=!1;function zn(){if(bc){var e=Ol;if(e!==null)throw e}}function Tn(e,t,a,l){bc=!1;var n=e.updateQueue;Ta=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var p=o,R=p.next;p.next=null,c===null?i=R:c.next=R,c=p;var D=e.alternate;D!==null&&(D=D.updateQueue,o=D.lastBaseUpdate,o!==c&&(o===null?D.firstBaseUpdate=R:o.next=R,D.lastBaseUpdate=p))}if(i!==null){var w=n.baseState;c=0,D=R=p=null,o=i;do{var C=o.lane&-536870913,j=C!==o.lane;if(j?(fe&C)===C:(l&C)===C){C!==0&&C===Cl&&(bc=!0),D!==null&&(D=D.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var V=e,F=o;C=t;var Ne=a;switch(F.tag){case 1:if(V=F.payload,typeof V=="function"){w=V.call(Ne,w,C);break e}w=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=F.payload,C=typeof V=="function"?V.call(Ne,w,C):V,C==null)break e;w=E({},w,C);break e;case 2:Ta=!0}}C=o.callback,C!==null&&(e.flags|=64,j&&(e.flags|=8192),j=n.callbacks,j===null?n.callbacks=[C]:j.push(C))}else j={lane:C,tag:o.tag,payload:o.payload,callback:o.callback,next:null},D===null?(R=D=j,p=w):D=D.next=j,c|=C;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;j=o,o=j.next,j.next=null,n.lastBaseUpdate=j,n.shared.pending=null}}while(!0);D===null&&(p=w),n.baseState=p,n.firstBaseUpdate=R,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),Da|=c,e.lanes=c,e.memoizedState=w}}function bs(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function xs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)bs(a[e],t)}var Ml=m(null),Di=m(0);function Ss(e,t){e=ha,q(Di,e),q(Ml,t),ha=e|t.baseLanes}function xc(){q(Di,ha),q(Ml,Ml.current)}function Sc(){ha=Di.current,O(Ml),O(Di)}var vt=m(null),Dt=null;function Ra(e){var t=e.alternate;q(Ye,Ye.current&1),q(vt,e),Dt===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(Dt=e)}function Ec(e){q(Ye,Ye.current),q(vt,e),Dt===null&&(Dt=e)}function Es(e){e.tag===22?(q(Ye,Ye.current),q(vt,e),Dt===null&&(Dt=e)):Ca()}function Ca(){q(Ye,Ye.current),q(vt,vt.current)}function bt(e){O(vt),Dt===e&&(Dt=null),O(Ye)}var Ye=m(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cr(a)||Or(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=0,le=null,Te=null,Ge=null,_i=!1,_l=!1,il=!1,wi=0,An=0,wl=null,Vh=0;function Be(){throw Error(r(321))}function zc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!pt(e[a],t[a]))return!1;return!0}function Tc(e,t,a,l,n,i){return ua=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?uf:Yc,il=!1,i=a(l,n),il=!1,_l&&(i=Ts(t,a,l,n)),zs(e),i}function zs(e){M.H=Cn;var t=Te!==null&&Te.next!==null;if(ua=0,Ge=Te=le=null,_i=!1,An=0,wl=null,t)throw Error(r(300));e===null||Ze||(e=e.dependencies,e!==null&&Ti(e)&&(Ze=!0))}function Ts(e,t,a,l){le=e;var n=0;do{if(_l&&(wl=null),An=0,_l=!1,25<=n)throw Error(r(301));if(n+=1,Ge=Te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=cf,i=t(a,l)}while(_l);return i}function kh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Nn(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(le.flags|=1024),t}function Ac(){var e=wi!==0;return wi=0,e}function Nc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Rc(e){if(_i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_i=!1}ua=0,Ge=Te=le=null,_l=!1,An=wi=0,wl=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(Te===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ge===null?le.memoizedState:Ge.next;if(t!==null)Ge=t,Te=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ui(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nn(e){var t=An;return An+=1,wl===null&&(wl=[]),e=hs(wl,e,t),t=le,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?uf:Yc),e}function Bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Nn(e);if(e.$$typeof===k)return Pe(e)}throw Error(r(438,String(e)))}function Cc(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ui(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=at;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=qe();return Oc(t,Te,e)}function Oc(e,t,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=c=null,p=null,R=t,D=!1;do{var w=R.lane&-536870913;if(w!==R.lane?(fe&w)===w:(ua&w)===w){var C=R.revertLane;if(C===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),w===Cl&&(D=!0);else if((ua&C)===C){R=R.next,C===Cl&&(D=!0);continue}else w={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},p===null?(o=p=w,c=i):p=p.next=w,le.lanes|=C,Da|=C;w=R.action,il&&a(i,w),i=R.hasEagerState?R.eagerState:a(i,w)}else C={lane:w,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},p===null?(o=p=C,c=i):p=p.next=C,le.lanes|=w,Da|=w;R=R.next}while(R!==null&&R!==t);if(p===null?c=i:p.next=o,!pt(i,e.memoizedState)&&(Ze=!0,D&&(a=Ol,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jc(e){var t=qe(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);pt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function As(e,t,a){var l=le,n=qe(),i=he;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=t();var c=!pt((Te||n).memoizedState,a);if(c&&(n.memoizedState=a,Ze=!0),n=n.queue,_c(Cs.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,Ul(9,{destroy:void 0},Rs.bind(null,l,n,a,t),null),Oe===null)throw Error(r(349));i||(ua&127)!==0||Ns(l,t,a)}return a}function Ns(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=Ui(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Rs(e,t,a,l){t.value=a,t.getSnapshot=l,Os(t)&&js(e)}function Cs(e,t,a){return a(function(){Os(t)&&js(e)})}function Os(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!pt(e,a)}catch{return!0}}function js(e){var t=Wa(e,2);t!==null&&gt(t,e,2)}function Dc(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),il){Je(!0);try{a()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Ds(e,t,a,l){return e.baseState=a,Oc(e,Te,typeof l=="function"?l:ca)}function Kh(e,t,a,l,n){if(qi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ms(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ms(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,c={};M.T=c;try{var o=a(n,l),p=M.S;p!==null&&p(c,o),_s(e,t,o)}catch(R){Mc(e,t,R)}finally{i!==null&&c.types!==null&&(i.types=c.types),M.T=i}}else try{i=a(n,l),_s(e,t,i)}catch(R){Mc(e,t,R)}}function _s(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ws(e,t,l)},function(l){return Mc(e,t,l)}):ws(e,t,a)}function ws(e,t,a){t.status="fulfilled",t.value=a,Us(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ms(e,a)))}function Mc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Us(t),t=t.next;while(t!==l)}e.action=null}function Us(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bs(e,t){return t}function Hs(e,t){if(he){var a=Oe.formState;if(a!==null){e:{var l=le;if(he){if(je){t:{for(var n=je,i=jt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Mt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){je=Mt(n.nextSibling),l=n.data==="F!";break e}}Ea(l)}l=!1}l&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:t},a.queue=l,a=af.bind(null,le,l),l.dispatch=a,l=Dc(!1),i=Lc.bind(null,le,!1,l.queue),l=ct(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Kh.bind(null,le,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ls(e){var t=qe();return Ys(t,Te,e)}function Ys(e,t,a){if(t=Oc(e,t,Bs)[0],e=Hi(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Nn(t)}catch(c){throw c===jl?Ri:c}else l=t;t=qe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(le.flags|=2048,Ul(9,{destroy:void 0},Jh.bind(null,n,a),null)),[l,i,e]}function Jh(e,t){e.action=t}function qs(e){var t=qe(),a=Te;if(a!==null)return Ys(t,a,e);qe(),t=t.memoizedState,a=qe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ul(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=le.updateQueue,t===null&&(t=Ui(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Xs(){return qe().memoizedState}function Li(e,t,a,l){var n=ct();le.flags|=e,n.memoizedState=Ul(1|t,{destroy:void 0},a,l===void 0?null:l)}function Yi(e,t,a,l){var n=qe();l=l===void 0?null:l;var i=n.memoizedState.inst;Te!==null&&l!==null&&zc(l,Te.memoizedState.deps)?n.memoizedState=Ul(t,i,a,l):(le.flags|=e,n.memoizedState=Ul(1|t,i,a,l))}function Qs(e,t){Li(8390656,8,e,t)}function _c(e,t){Yi(2048,8,e,t)}function $h(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=Ui(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Gs(e){var t=qe().memoizedState;return $h({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Zs(e,t){return Yi(4,2,e,t)}function Vs(e,t){return Yi(4,4,e,t)}function ks(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,a){a=a!=null?a.concat([e]):null,Yi(4,4,ks.bind(null,t,e),a)}function wc(){}function Js(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&zc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function $s(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&zc(t,l[1]))return l[0];if(l=e(),il){Je(!0);try{e()}finally{Je(!1)}}return a.memoizedState=[l,t],l}function Uc(e,t,a){return a===void 0||(ua&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ff(),le.lanes|=e,Da|=e,a)}function Ws(e,t,a,l){return pt(a,t)?a:Ml.current!==null?(e=Uc(e,a,l),pt(e,t)||(Ze=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(fe&261930)===0?(Ze=!0,e.memoizedState=a):(e=Ff(),le.lanes|=e,Da|=e,t)}function Fs(e,t,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var c=M.T,o={};M.T=o,Lc(e,!1,t,a);try{var p=n(),R=M.S;if(R!==null&&R(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=Zh(p,l);Rn(e,t,D,Et(e))}else Rn(e,t,l,Et(e))}catch(w){Rn(e,t,{then:function(){},status:"rejected",reason:w},Et())}finally{Y.p=i,c!==null&&o.types!==null&&(c.types=o.types),M.T=c}}function Wh(){}function Bc(e,t,a,l){if(e.tag!==5)throw Error(r(476));var n=Is(e).queue;Fs(e,n,t,W,a===null?Wh:function(){return Ps(e),a(l)})}function Is(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ps(e){var t=Is(e);t.next===null&&(t=e.alternate.memoizedState),Rn(e,t.next.queue,{},Et())}function Hc(){return Pe(Zn)}function ef(){return qe().memoizedState}function tf(){return qe().memoizedState}function Fh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Et();e=Aa(a);var l=Na(t,e,a);l!==null&&(gt(l,t,a),En(l,t,a)),t={cache:dc()},e.payload=t;return}t=t.return}}function Ih(e,t,a){var l=Et();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)?lf(t,a):(a=tc(e,t,a,l),a!==null&&(gt(a,e,l),nf(a,t,l)))}function af(e,t,a){var l=Et();Rn(e,t,a,l)}function Rn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(qi(e))lf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,o=i(c,a);if(n.hasEagerState=!0,n.eagerState=o,pt(o,c))return xi(e,t,n,0),Oe===null&&bi(),!1}catch{}finally{}if(a=tc(e,t,n,l),a!==null)return gt(a,e,l),nf(a,t,l),!0}return!1}function Lc(e,t,a,l){if(l={lane:2,revertLane:pr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(r(479))}else t=tc(e,a,l,2),t!==null&&gt(t,e,2)}function qi(e){var t=e.alternate;return e===le||t!==null&&t===le}function lf(e,t){_l=_i=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function nf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ro(e,a)}}var Cn={readContext:Pe,use:Bi,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};Cn.useEffectEvent=Be;var uf={readContext:Pe,use:Bi,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Qs,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Li(4194308,4,ks.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){Li(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var l=e();if(il){Je(!0);try{e()}finally{Je(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ct();if(a!==void 0){var n=a(t);if(il){Je(!0);try{a(t)}finally{Je(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Ih.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Dc(e);var t=e.queue,a=af.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:wc,useDeferredValue:function(e,t){var a=ct();return Uc(a,e,t)},useTransition:function(){var e=Dc(!1);return e=Fs.bind(null,le,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=le,n=ct();if(he){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Oe===null)throw Error(r(349));(fe&127)!==0||Ns(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Qs(Cs.bind(null,l,i,e),[e]),l.flags|=2048,Ul(9,{destroy:void 0},Rs.bind(null,l,i,a,t),null),a},useId:function(){var e=ct(),t=Oe.identifierPrefix;if(he){var a=Vt,l=Zt;a=(l&~(1<<32-Le(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Vh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hc,useFormState:Hs,useActionState:Hs,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Lc.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Cc,useCacheRefresh:function(){return ct().memoizedState=Fh.bind(null,le)},useEffectEvent:function(e){var t=ct(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Yc={readContext:Pe,use:Bi,useCallback:Js,useContext:Pe,useEffect:_c,useImperativeHandle:Ks,useInsertionEffect:Zs,useLayoutEffect:Vs,useMemo:$s,useReducer:Hi,useRef:Xs,useState:function(){return Hi(ca)},useDebugValue:wc,useDeferredValue:function(e,t){var a=qe();return Ws(a,Te.memoizedState,e,t)},useTransition:function(){var e=Hi(ca)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Nn(e),t]},useSyncExternalStore:As,useId:ef,useHostTransitionStatus:Hc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e,t){var a=qe();return Ds(a,Te,e,t)},useMemoCache:Cc,useCacheRefresh:tf};Yc.useEffectEvent=Gs;var cf={readContext:Pe,use:Bi,useCallback:Js,useContext:Pe,useEffect:_c,useImperativeHandle:Ks,useInsertionEffect:Zs,useLayoutEffect:Vs,useMemo:$s,useReducer:jc,useRef:Xs,useState:function(){return jc(ca)},useDebugValue:wc,useDeferredValue:function(e,t){var a=qe();return Te===null?Uc(a,e,t):Ws(a,Te.memoizedState,e,t)},useTransition:function(){var e=jc(ca)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Nn(e),t]},useSyncExternalStore:As,useId:ef,useHostTransitionStatus:Hc,useFormState:qs,useActionState:qs,useOptimistic:function(e,t){var a=qe();return Te!==null?Ds(a,Te,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cc,useCacheRefresh:tf};cf.useEffectEvent=Gs;function qc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Et(),n=Aa(l);n.payload=t,a!=null&&(n.callback=a),t=Na(e,n,l),t!==null&&(gt(t,e,l),En(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Et(),n=Aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Na(e,n,l),t!==null&&(gt(t,e,l),En(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Et(),l=Aa(a);l.tag=2,t!=null&&(l.callback=t),t=Na(e,l,a),t!==null&&(gt(t,e,a),En(t,e,a))}};function rf(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!hn(a,l)||!hn(n,i):!0}function of(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Xc.enqueueReplaceState(t,t.state,null)}function ul(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function sf(e){vi(e)}function ff(e){console.error(e)}function df(e){vi(e)}function Xi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function mf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Qc(e,t,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Xi(e,t)},a}function hf(e){return e=Aa(e),e.tag=3,e}function gf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){mf(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){mf(t,a,l),typeof n!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Ph(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Rl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return Dt===null?Pi():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ci?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),mr(e,l,n)),!1;case 22:return a.flags|=65536,l===Ci?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),mr(e,l,n)),!1}throw Error(r(435,a.tag))}return mr(e,l,n),Pi(),!1}if(he)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==cc&&(e=Error(r(422),{cause:l}),yn(Rt(e,a)))):(l!==cc&&(t=Error(r(423),{cause:l}),yn(Rt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Rt(l,a),n=Qc(e.stateNode,l,n),vc(e,n),He!==4&&(He=2)),!1;var i=Error(r(520),{cause:l});if(i=Rt(i,a),Bn===null?Bn=[i]:Bn.push(i),He!==4&&(He=2),t===null)return!0;l=Rt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Qc(a.stateNode,l,e),vc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ma===null||!Ma.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=hf(n),gf(n,e,a,l),vc(a,n),!1}a=a.return}while(a!==null);return!1}var Gc=Error(r(461)),Ze=!1;function et(e,t,a,l){t.child=e===null?vs(t,null,a,l):nl(t,e.child,a,l)}function pf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var o in l)o!=="ref"&&(c[o]=l[o])}else c=l;return el(t),l=Tc(e,t,a,c,i,n),o=Ac(),e!==null&&!Ze?(Nc(e,t,n),ra(e,t,n)):(he&&o&&ic(t),t.flags|=1,et(e,t,l,n),t.child)}function yf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ac(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,vf(e,t,i,l,n)):(e=Ei(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Fc(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:hn,a(c,l)&&e.ref===t.ref)return ra(e,t,n)}return t.flags|=1,e=aa(i,l),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(hn(i,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=i,Fc(e,n))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ra(e,t,n)}return Zc(e,t,a,l,n)}function bf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return xf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ni(t,i!==null?i.cachePool:null),i!==null?Ss(t,i):xc(),Es(t);else return l=t.lanes=536870912,xf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Ni(t,i.cachePool),Ss(t,i),Ca(),t.memoizedState=null):(e!==null&&Ni(t,null),xc(),Ca());return et(e,t,n,a),t.child}function On(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function xf(e,t,a,l,n){var i=hc();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ni(t,null),xc(),Es(t),e!==null&&Rl(e,t,l,!0),t.childLanes=n,null}function Qi(e,t){return t=Zi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,a){return nl(t,e.child,null,a),e=Qi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function e0(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(l.mode==="hidden")return e=Qi(t,l),t.lanes=536870912,On(null,e);if(Ec(t),(e=je)?(e=_d(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Zt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=ls(e),a.return=t,t.child=a,Ie=t,je=null)):e=null,e===null)throw Ea(t);return t.lanes=536870912,null}return Qi(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Ec(t),n)if(t.flags&256)t.flags&=-257,t=Sf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ze||Rl(e,t,a,!1),n=(a&e.childLanes)!==0,Ze||n){if(l=Oe,l!==null&&(c=oo(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Wa(e,c),gt(l,e,c),Gc;Pi(),t=Sf(e,t,a)}else e=i.treeContext,je=Mt(c.nextSibling),Ie=t,he=!0,Sa=null,jt=!1,e!==null&&us(t,e),t=Qi(t,l),t.flags|=4096;return t}return e=aa(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zc(e,t,a,l,n){return el(t),a=Tc(e,t,a,l,void 0,n),l=Ac(),e!==null&&!Ze?(Nc(e,t,n),ra(e,t,n)):(he&&l&&ic(t),t.flags|=1,et(e,t,a,n),t.child)}function Ef(e,t,a,l,n,i){return el(t),t.updateQueue=null,a=Ts(t,l,a,n),zs(e),l=Ac(),e!==null&&!Ze?(Nc(e,t,i),ra(e,t,i)):(he&&l&&ic(t),t.flags|=1,et(e,t,a,i),t.child)}function zf(e,t,a,l,n){if(el(t),t.stateNode===null){var i=zl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Pe(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},pc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Pe(c):zl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(qc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Xc.enqueueReplaceState(i,i.state,null),Tn(t,l,i,n),zn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,p=ul(a,o);i.props=p;var R=i.context,D=a.contextType;c=zl,typeof D=="object"&&D!==null&&(c=Pe(D));var w=a.getDerivedStateFromProps;D=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||R!==c)&&of(t,i,l,c),Ta=!1;var C=t.memoizedState;i.state=C,Tn(t,l,i,n),zn(),R=t.memoizedState,o||C!==R||Ta?(typeof w=="function"&&(qc(t,a,w,l),R=t.memoizedState),(p=Ta||rf(t,a,p,l,C,R,c))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),i.props=l,i.state=R,i.context=c,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,yc(e,t),c=t.memoizedProps,D=ul(a,c),i.props=D,w=t.pendingProps,C=i.context,R=a.contextType,p=zl,typeof R=="object"&&R!==null&&(p=Pe(R)),o=a.getDerivedStateFromProps,(R=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==w||C!==p)&&of(t,i,l,p),Ta=!1,C=t.memoizedState,i.state=C,Tn(t,l,i,n),zn();var j=t.memoizedState;c!==w||C!==j||Ta||e!==null&&e.dependencies!==null&&Ti(e.dependencies)?(typeof o=="function"&&(qc(t,a,o,l),j=t.memoizedState),(D=Ta||rf(t,a,D,l,C,j,p)||e!==null&&e.dependencies!==null&&Ti(e.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,j,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,j,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=p,l=D):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Gi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=nl(t,e.child,null,n),t.child=nl(t,null,a,n)):et(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ra(e,t,n),e}function Tf(e,t,a,l){return Ia(),t.flags|=256,et(e,t,a,l),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kc(e){return{baseLanes:e,cachePool:ds()}}function Kc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=St),e}function Af(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(n?Ra(t):Ca(),(e=je)?(e=_d(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Zt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=ls(e),a.return=t,t.child=a,Ie=t,je=null)):e=null,e===null)throw Ea(t);return Or(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(Ca(),n=t.mode,o=Zi({mode:"hidden",children:o},n),l=Fa(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=kc(a),l.childLanes=Kc(e,c,a),t.memoizedState=Vc,On(null,l)):(Ra(t),Jc(t,o))}var p=e.memoizedState;if(p!==null&&(o=p.dehydrated,o!==null)){if(i)t.flags&256?(Ra(t),t.flags&=-257,t=$c(e,t,a)):t.memoizedState!==null?(Ca(),t.child=e.child,t.flags|=128,t=null):(Ca(),o=l.fallback,n=t.mode,l=Zi({mode:"visible",children:l.children},n),o=Fa(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,nl(t,e.child,null,a),l=t.child,l.memoizedState=kc(a),l.childLanes=Kc(e,c,a),t.memoizedState=Vc,t=On(null,l));else if(Ra(t),Or(o)){if(c=o.nextSibling&&o.nextSibling.dataset,c)var R=c.dgst;c=R,l=Error(r(419)),l.stack="",l.digest=c,yn({value:l,source:null,stack:null}),t=$c(e,t,a)}else if(Ze||Rl(e,t,a,!1),c=(a&e.childLanes)!==0,Ze||c){if(c=Oe,c!==null&&(l=oo(c,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Wa(e,l),gt(c,e,l),Gc;Cr(o)||Pi(),t=$c(e,t,a)}else Cr(o)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,je=Mt(o.nextSibling),Ie=t,he=!0,Sa=null,jt=!1,e!==null&&us(t,e),t=Jc(t,l.children),t.flags|=4096);return t}return n?(Ca(),o=l.fallback,n=t.mode,p=e.child,R=p.sibling,l=aa(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,R!==null?o=aa(R,o):(o=Fa(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,On(null,l),l=t.child,o=e.child.memoizedState,o===null?o=kc(a):(n=o.cachePool,n!==null?(p=Qe._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=ds(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=Kc(e,c,a),t.memoizedState=Vc,On(e.child,l)):(Ra(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Jc(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function $c(e,t,a){return nl(t,e.child,null,a),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),sc(e.return,t,a)}function Wc(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Rf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Ye.current,o=(c&2)!==0;if(o?(c=c&1|2,t.flags|=128):c&=1,q(Ye,c),et(e,t,l,a),l=he?pn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,a,t);else if(e.tag===19)Nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Mi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Wc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Wc(t,!0,a,null,i,l);break;case"together":Wc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ra(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Rl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ti(e)))}function t0(e,t,a){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),za(t,Qe,e.memoizedState.cache),Ia();break;case 27:case 5:Ft(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:za(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ec(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Af(e,t,a):(Ra(t),e=ra(e,t,a),e!==null?e.sibling:null);Ra(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Rl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Rf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Ye,Ye.current),l)break;return null;case 22:return t.lanes=0,bf(e,t,a,t.pendingProps);case 24:za(t,Qe,e.memoizedState.cache)}return ra(e,t,a)}function Cf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Fc(e,a)&&(t.flags&128)===0)return Ze=!1,t0(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,he&&(t.flags&1048576)!==0&&is(t,pn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=al(t.elementType),t.type=e,typeof e=="function")ac(e)?(l=ul(e,l),t.tag=1,t=zf(null,t,e,l,a)):(t.tag=0,t=Zc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===J){t.tag=11,t=pf(null,t,e,l,a);break e}else if(n===I){t.tag=14,t=yf(null,t,e,l,a);break e}}throw t=_e(e)||e,Error(r(306,t,""))}}return t;case 0:return Zc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ul(l,t.pendingProps),zf(e,t,l,n,a);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,yc(e,t),Tn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,za(t,Qe,l),l!==i.cache&&fc(t,[Qe],a,!0),zn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Tf(e,t,l,a);break e}else if(l!==n){n=Rt(Error(r(424)),t),yn(n),t=Tf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Mt(e.firstChild),Ie=t,he=!0,Sa=null,jt=!0,a=vs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ia(),l===n){t=ra(e,t,a);break e}et(e,t,l,a)}t=t.child}return t;case 26:return Gi(e,t),e===null?(a=Yd(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=uu(ce.current).createElement(a),l[Fe]=t,l[ot]=e,tt(l,a,e),$e(l),t.stateNode=l):t.memoizedState=Yd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ft(t),e===null&&he&&(l=t.stateNode=Bd(t.type,t.pendingProps,ce.current),Ie=t,jt=!0,n=je,Ba(t.type)?(jr=n,je=Mt(l.firstChild)):je=n),et(e,t,t.pendingProps.children,a),Gi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((n=l=je)&&(l=D0(l,t.type,t.pendingProps,jt),l!==null?(t.stateNode=l,Ie=t,je=Mt(l.firstChild),jt=!1,n=!0):n=!1),n||Ea(t)),Ft(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Ar(n,i)?l=null:c!==null&&Ar(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Tc(e,t,kh,null,null,a),Zn._currentValue=n),Gi(e,t),et(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=je)&&(a=M0(a,t.pendingProps,jt),a!==null?(t.stateNode=a,Ie=t,je=null,e=!0):e=!1),e||Ea(t)),null;case 13:return Af(e,t,a);case 4:return Ke(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=nl(t,null,l,a):et(e,t,l,a),t.child;case 11:return pf(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,za(t,t.type,l.value),et(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,el(t),n=Pe(n),l=l(n),t.flags|=1,et(e,t,l,a),t.child;case 14:return yf(e,t,t.type,t.pendingProps,a);case 15:return vf(e,t,t.type,t.pendingProps,a);case 19:return Rf(e,t,a);case 31:return e0(e,t,a);case 22:return bf(e,t,a,t.pendingProps);case 24:return el(t),l=Pe(Qe),e===null?(n=hc(),n===null&&(n=Oe,i=dc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},pc(t),za(t,Qe,n)):((e.lanes&a)!==0&&(yc(e,t),Tn(t,null,null,a),zn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),za(t,Qe,l)):(l=i.cache,za(t,Qe,l),l!==n.cache&&fc(t,[Qe],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function oa(e){e.flags|=4}function Ic(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(td())e.flags|=8192;else throw ll=Ci,gc}else e.flags&=-16777217}function Of(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zd(t))if(td())e.flags|=8192;else throw ll=Ci,gc}function Vi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?uo():536870912,e.lanes|=t,Yl|=t)}function jn(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function a0(e,t,a){var l=t.pendingProps;switch(uc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ia(Qe),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nl(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rc())),De(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(oa(t),i!==null?(De(t),Of(t,i)):(De(t),Ic(t,n,null,l,a))):i?i!==e.memoizedState?(oa(t),De(t),Of(t,i)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&oa(t),De(t),Ic(t,n,e,l,a)),null;case 27:if(Ut(t),a=ce.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&oa(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return De(t),null}e=Z.current,Nl(t)?cs(t):(e=Bd(n,l,a),t.stateNode=e,oa(t))}return De(t),null;case 5:if(Ut(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&oa(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return De(t),null}if(i=Z.current,Nl(t))cs(t);else{var c=uu(ce.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Fe]=t,i[ot]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(tt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&oa(t)}}return De(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&oa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=ce.current,Nl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ie,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ad(e.nodeValue,a)),e||Ea(t,!0)}else e=uu(e).createTextNode(l),e[Fe]=t,t.stateNode=e}return De(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Nl(t),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Fe]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else a=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return De(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Nl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Fe]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),n=!1}else n=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Vi(t,t.updateQueue),De(t),null);case 4:return Re(),e===null&&xr(t.stateNode.containerInfo),De(t),null;case 10:return ia(t.type),De(t),null;case 19:if(O(Ye),l=t.memoizedState,l===null)return De(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)jn(l,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,jn(l,!1),e=i.updateQueue,t.updateQueue=e,Vi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)as(a,e),a=a.sibling;return q(Ye,Ye.current&1|2),he&&la(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>Wi&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Mi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Vi(t,e),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!he)return De(t),null}else 2*nt()-l.renderingStartTime>Wi&&a!==536870912&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,a=Ye.current,q(Ye,n?a&1|2:a&1),he&&la(t,l.treeForkCount),e):(De(t),null);case 22:case 23:return bt(t),Sc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),a=t.updateQueue,a!==null&&Vi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(tl),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ia(Qe),De(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function l0(e,t){switch(uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Qe),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ut(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(r(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Ye),null;case 4:return Re(),null;case 10:return ia(t.type),null;case 22:case 23:return bt(t),Sc(),e!==null&&O(tl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Qe),null;case 25:return null;default:return null}}function jf(e,t){switch(uc(t),t.tag){case 3:ia(Qe),Re();break;case 26:case 27:case 5:Ut(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:O(Ye);break;case 10:ia(t.type);break;case 22:case 23:bt(t),Sc(),e!==null&&O(tl);break;case 24:ia(Qe)}}function Dn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(o){ze(t,t.return,o)}}function Oa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,o=c.destroy;if(o!==void 0){c.destroy=void 0,n=t;var p=a,R=o;try{R()}catch(D){ze(n,p,D)}}}l=l.next}while(l!==i)}}catch(D){ze(t,t.return,D)}}function Df(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{xs(t,a)}catch(l){ze(e,e.return,l)}}}function Mf(e,t,a){a.props=ul(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ze(e,t,l)}}function Mn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ze(e,t,n)}}function kt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ze(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ze(e,t,n)}else a.current=null}function _f(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ze(e,e.return,n)}}function Pc(e,t,a){try{var l=e.stateNode;A0(l,e.type,a,t),l[ot]=t}catch(n){ze(e,e.return,n)}}function wf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function er(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ea));else if(l!==4&&(l===27&&Ba(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(tr(e,t,a),e=e.sibling;e!==null;)tr(e,t,a),e=e.sibling}function ki(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ki(e,t,a),e=e.sibling;e!==null;)ki(e,t,a),e=e.sibling}function Uf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);tt(t,l,a),t[Fe]=e,t[ot]=a}catch(i){ze(e,e.return,i)}}var sa=!1,Ve=!1,ar=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,We=null;function n0(e,t){if(e=e.containerInfo,zr=mu,e=Ko(e),$u(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,o=-1,p=-1,R=0,D=0,w=e,C=null;t:for(;;){for(var j;w!==a||n!==0&&w.nodeType!==3||(o=c+n),w!==i||l!==0&&w.nodeType!==3||(p=c+l),w.nodeType===3&&(c+=w.nodeValue.length),(j=w.firstChild)!==null;)C=w,w=j;for(;;){if(w===e)break t;if(C===a&&++R===n&&(o=c),C===i&&++D===l&&(p=c),(j=w.nextSibling)!==null)break;w=C,C=w.parentNode}w=j}a=o===-1||p===-1?null:{start:o,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tr={focusedElem:e,selectionRange:a},mu=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var V=ul(a.type,n);e=l.getSnapshotBeforeUpdate(V,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){ze(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Rr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Hf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),l&4&&Dn(5,a);break;case 1:if(da(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ze(a,a.return,c)}else{var n=ul(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ze(a,a.return,c)}}l&64&&Df(a),l&512&&Mn(a,a.return);break;case 3:if(da(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{xs(e,t)}catch(c){ze(a,a.return,c)}}break;case 27:t===null&&l&4&&Uf(a);case 26:case 5:da(e,a),t===null&&l&4&&_f(a),l&512&&Mn(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),l&4&&qf(e,a);break;case 13:da(e,a),l&4&&Xf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=m0.bind(null,a),_0(e,a))));break;case 22:if(l=a.memoizedState!==null||sa,!l){t=t!==null&&t.memoizedState!==null||Ve,n=sa;var i=Ve;sa=l,(Ve=t)&&!i?ma(e,a,(a.subtreeFlags&8772)!==0):da(e,a),sa=n,Ve=i}break;case 30:break;default:da(e,a)}}function Lf(e){var t=e.alternate;t!==null&&(e.alternate=null,Lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,ft=!1;function fa(e,t,a){for(a=a.child;a!==null;)Yf(e,t,a),a=a.sibling}function Yf(e,t,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 26:Ve||kt(a,t),fa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||kt(a,t);var l=Me,n=ft;Ba(a.type)&&(Me=a.stateNode,ft=!1),fa(e,t,a),Xn(a.stateNode),Me=l,ft=n;break;case 5:Ve||kt(a,t);case 6:if(l=Me,n=ft,Me=null,fa(e,t,a),Me=l,ft=n,Me!==null)if(ft)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(i){ze(a,t,i)}else try{Me.removeChild(a.stateNode)}catch(i){ze(a,t,i)}break;case 18:Me!==null&&(ft?(e=Me,Dd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Kl(e)):Dd(Me,a.stateNode));break;case 4:l=Me,n=ft,Me=a.stateNode.containerInfo,ft=!0,fa(e,t,a),Me=l,ft=n;break;case 0:case 11:case 14:case 15:Oa(2,a,t),Ve||Oa(4,a,t),fa(e,t,a);break;case 1:Ve||(kt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Mf(a,t,l)),fa(e,t,a);break;case 21:fa(e,t,a);break;case 22:Ve=(l=Ve)||a.memoizedState!==null,fa(e,t,a),Ve=l;break;default:fa(e,t,a)}}function qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kl(e)}catch(a){ze(t,t.return,a)}}}function Xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kl(e)}catch(a){ze(t,t.return,a)}}function i0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bf),t;default:throw Error(r(435,e.tag))}}function Ki(e,t){var a=i0(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=h0.bind(null,e,l);l.then(n,n)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,o=c;e:for(;o!==null;){switch(o.tag){case 27:if(Ba(o.type)){Me=o.stateNode,ft=!1;break e}break;case 5:Me=o.stateNode,ft=!1;break e;case 3:case 4:Me=o.stateNode.containerInfo,ft=!0;break e}o=o.return}if(Me===null)throw Error(r(160));Yf(i,c,n),Me=null,ft=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling}var Ht=null;function Qf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),mt(e),l&4&&(Oa(3,e,e.return),Dn(3,e),Oa(5,e,e.return));break;case 1:dt(t,e),mt(e),l&512&&(Ve||a===null||kt(a,a.return)),l&64&&sa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ht;if(dt(t,e),mt(e),l&512&&(Ve||a===null||kt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[nn]||i[Fe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),tt(i,l,a),i[Fe]=e,$e(i),l=i;break e;case"link":var c=Qd("link","href",n).get(l+(a.href||""));if(c){for(var o=0;o<c.length;o++)if(i=c[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(o,1);break t}}i=n.createElement(l),tt(i,l,a),n.head.appendChild(i);break;case"meta":if(c=Qd("meta","content",n).get(l+(a.content||""))){for(o=0;o<c.length;o++)if(i=c[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(o,1);break t}}i=n.createElement(l),tt(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[Fe]=e,$e(i),l=i}e.stateNode=l}else Gd(n,e.type,e.stateNode);else e.stateNode=Xd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Gd(n,e.type,e.stateNode):Xd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Pc(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),mt(e),l&512&&(Ve||a===null||kt(a,a.return)),a!==null&&l&4&&Pc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),mt(e),l&512&&(Ve||a===null||kt(a,a.return)),e.flags&32){n=e.stateNode;try{pl(n,"")}catch(V){ze(e,e.return,V)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Pc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(ar=!0);break;case 6:if(dt(t,e),mt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(V){ze(e,e.return,V)}}break;case 3:if(ou=null,n=Ht,Ht=cu(t.containerInfo),dt(t,e),Ht=n,mt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Kl(t.containerInfo)}catch(V){ze(e,e.return,V)}ar&&(ar=!1,Gf(e));break;case 4:l=Ht,Ht=cu(e.stateNode.containerInfo),dt(t,e),mt(e),Ht=l;break;case 12:dt(t,e),mt(e);break;case 31:dt(t,e),mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ki(e,l)));break;case 13:dt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($i=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ki(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,R=sa,D=Ve;if(sa=R||n,Ve=D||p,dt(t,e),Ve=D,sa=R,mt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||sa||Ve||cl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{o=p.stateNode;var w=p.memoizedProps.style,C=w!=null&&w.hasOwnProperty("display")?w.display:null;o.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(V){ze(p,p.return,V)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(V){ze(p,p.return,V)}}}else if(t.tag===18){if(a===null){p=t;try{var j=p.stateNode;n?Md(j,!0):Md(p.stateNode,!1)}catch(V){ze(p,p.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ki(e,a))));break;case 19:dt(t,e),mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ki(e,l)));break;case 30:break;case 21:break;default:dt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(wf(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,i=er(e);ki(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(pl(c,""),a.flags&=-33);var o=er(e);ki(e,o,c);break;case 3:case 4:var p=a.stateNode.containerInfo,R=er(e);tr(e,R,p);break;default:throw Error(r(161))}}catch(D){ze(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hf(e,t.alternate,t),t=t.sibling}function cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Oa(4,t,t.return),cl(t);break;case 1:kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Mf(t,t.return,a),cl(t);break;case 27:Xn(t.stateNode);case 26:case 5:kt(t,t.return),cl(t);break;case 22:t.memoizedState===null&&cl(t);break;case 30:cl(t);break;default:cl(t)}e=e.sibling}}function ma(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ma(n,i,a),Dn(4,i);break;case 1:if(ma(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(R){ze(l,l.return,R)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)bs(p[n],o)}catch(R){ze(l,l.return,R)}}a&&c&64&&Df(i),Mn(i,i.return);break;case 27:Uf(i);case 26:case 5:ma(n,i,a),a&&l===null&&c&4&&_f(i),Mn(i,i.return);break;case 12:ma(n,i,a);break;case 31:ma(n,i,a),a&&c&4&&qf(n,i);break;case 13:ma(n,i,a),a&&c&4&&Xf(n,i);break;case 22:i.memoizedState===null&&ma(n,i,a),Mn(i,i.return);break;case 30:break;default:ma(n,i,a)}t=t.sibling}}function lr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vn(a))}function nr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vn(e))}function Lt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zf(e,t,a,l),t=t.sibling}function Zf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,l),n&2048&&Dn(9,t);break;case 1:Lt(e,t,a,l);break;case 3:Lt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vn(e)));break;case 12:if(n&2048){Lt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,o=i.onPostCommit;typeof o=="function"&&o(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ze(t,t.return,p)}}else Lt(e,t,a,l);break;case 31:Lt(e,t,a,l);break;case 13:Lt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Lt(e,t,a,l):_n(e,t):i._visibility&2?Lt(e,t,a,l):(i._visibility|=2,Bl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&lr(c,t);break;case 24:Lt(e,t,a,l),n&2048&&nr(t.alternate,t);break;default:Lt(e,t,a,l)}}function Bl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,o=a,p=l,R=c.flags;switch(c.tag){case 0:case 11:case 15:Bl(i,c,o,p,n),Dn(8,c);break;case 23:break;case 22:var D=c.stateNode;c.memoizedState!==null?D._visibility&2?Bl(i,c,o,p,n):_n(i,c):(D._visibility|=2,Bl(i,c,o,p,n)),n&&R&2048&&lr(c.alternate,c);break;case 24:Bl(i,c,o,p,n),n&&R&2048&&nr(c.alternate,c);break;default:Bl(i,c,o,p,n)}t=t.sibling}}function _n(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:_n(a,l),n&2048&&lr(l.alternate,l);break;case 24:_n(a,l),n&2048&&nr(l.alternate,l);break;default:_n(a,l)}t=t.sibling}}var wn=8192;function Hl(e,t,a){if(e.subtreeFlags&wn)for(e=e.child;e!==null;)Vf(e,t,a),e=e.sibling}function Vf(e,t,a){switch(e.tag){case 26:Hl(e,t,a),e.flags&wn&&e.memoizedState!==null&&V0(a,Ht,e.memoizedState,e.memoizedProps);break;case 5:Hl(e,t,a);break;case 3:case 4:var l=Ht;Ht=cu(e.stateNode.containerInfo),Hl(e,t,a),Ht=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=wn,wn=16777216,Hl(e,t,a),wn=l):Hl(e,t,a));break;default:Hl(e,t,a)}}function kf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Jf(l,e)}kf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kf(e),e=e.sibling}function Kf(e){switch(e.tag){case 0:case 11:case 15:Un(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Un(e);break;case 12:Un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Un(e);break;default:Un(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Jf(l,e)}kf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Oa(8,t,t.return),Ji(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function Jf(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,We=l;else e:for(a=e;We!==null;){l=We;var n=l.sibling,i=l.return;if(Lf(l),l===a){We=null;break e}if(n!==null){n.return=i,We=n;break e}We=i}}}var u0={getCacheForType:function(e){var t=Pe(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Pe(Qe).controller.signal}},c0=typeof WeakMap=="function"?WeakMap:Map,Se=0,Oe=null,oe=null,fe=0,Ee=0,xt=null,ja=!1,Ll=!1,ir=!1,ha=0,He=0,Da=0,rl=0,ur=0,St=0,Yl=0,Bn=null,ht=null,cr=!1,$i=0,$f=0,Wi=1/0,Fi=null,Ma=null,ke=0,_a=null,ql=null,ga=0,rr=0,or=null,Wf=null,Hn=0,sr=null;function Et(){return(Se&2)!==0&&fe!==0?fe&-fe:M.T!==null?pr():so()}function Ff(){if(St===0)if((fe&536870912)===0||he){var e=Gt;Gt<<=1,(Gt&3932160)===0&&(Gt=262144),St=e}else St=536870912;return e=vt.current,e!==null&&(e.flags|=32),St}function gt(e,t,a){(e===Oe&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Xl(e,0),wa(e,fe,St,!1)),ln(e,a),((Se&2)===0||e!==Oe)&&(e===Oe&&((Se&2)===0&&(rl|=a),He===4&&wa(e,fe,St,!1)),Kt(e))}function If(e,t,a){if((Se&6)!==0)throw Error(r(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Va(e,t),n=l?s0(e,t):dr(e,t,!0),i=l;do{if(n===0){Ll&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!r0(a)){n=dr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var o=e;n=Bn;var p=o.current.memoizedState.isDehydrated;if(p&&(Xl(o,c).flags|=256),c=dr(o,c,!1),c!==2){if(ir&&!p){o.errorRecoveryDisabledLanes|=i,rl|=i,n=4;break e}i=ht,ht=n,i!==null&&(ht===null?ht=i:ht.push.apply(ht,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Xl(e,0),wa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,St,!ja);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=$i+300-nt(),10<n)){if(wa(l,t,St,!ja),it(l,0,!0)!==0)break e;ga=t,l.timeoutHandle=Od(Pf.bind(null,l,a,ht,Fi,cr,t,St,rl,Yl,ja,i,"Throttled",-0,0),n);break e}Pf(l,a,ht,Fi,cr,t,St,rl,Yl,ja,i,null,-0,0)}}break}while(!0);Kt(e)}function Pf(e,t,a,l,n,i,c,o,p,R,D,w,C,j){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Vf(t,i,w);var V=(i&62914560)===i?$i-nt():(i&4194048)===i?$f-nt():0;if(V=k0(w,V),V!==null){ga=i,e.cancelPendingCommit=V(cd.bind(null,e,t,i,a,l,n,c,o,p,D,w,null,C,j)),wa(e,i,c,!R);return}}cd(e,t,i,a,l,n,c,o,p)}function r0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!pt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~ur,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Le(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&co(e,a,t)}function Ii(){return(Se&6)===0?(Ln(0),!1):!0}function fr(){if(oe!==null){if(Ee===0)var e=oe.return;else e=oe,na=Pa=null,Rc(e),Dl=null,xn=0,e=oe;for(;e!==null;)jf(e.alternate,e),e=e.return;oe=null}}function Xl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,C0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,fr(),Oe=e,oe=a=aa(e.current,null),fe=t,Ee=0,xt=null,ja=!1,Ll=Va(e,t),ir=!1,Yl=St=ur=rl=Da=He=0,ht=Bn=null,cr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Le(l),i=1<<n;t|=e[n],l&=~i}return ha=t,bi(),a}function ed(e,t){le=null,M.H=Cn,t===jl||t===Ri?(t=gs(),Ee=3):t===gc?(t=gs(),Ee=4):Ee=t===Gc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,oe===null&&(He=1,Xi(e,Rt(t,e.current)))}function td(){var e=vt.current;return e===null?!0:(fe&4194048)===fe?Dt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Dt:!1}function ad(){var e=M.H;return M.H=Cn,e===null?Cn:e}function ld(){var e=M.A;return M.A=u0,e}function Pi(){He=4,ja||(fe&4194048)!==fe&&vt.current!==null||(Ll=!0),(Da&134217727)===0&&(rl&134217727)===0||Oe===null||wa(Oe,fe,St,!1)}function dr(e,t,a){var l=Se;Se|=2;var n=ad(),i=ld();(Oe!==e||fe!==t)&&(Fi=null,Xl(e,t)),t=!1;var c=He;e:do try{if(Ee!==0&&oe!==null){var o=oe,p=xt;switch(Ee){case 8:fr(),c=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var R=Ee;if(Ee=0,xt=null,Ql(e,o,p,R),a&&Ll){c=0;break e}break;default:R=Ee,Ee=0,xt=null,Ql(e,o,p,R)}}o0(),c=He;break}catch(D){ed(e,D)}while(!0);return t&&e.shellSuspendCounter++,na=Pa=null,Se=l,M.H=n,M.A=i,oe===null&&(Oe=null,fe=0,bi()),c}function o0(){for(;oe!==null;)nd(oe)}function s0(e,t){var a=Se;Se|=2;var l=ad(),n=ld();Oe!==e||fe!==t?(Fi=null,Wi=nt()+500,Xl(e,t)):Ll=Va(e,t);e:do try{if(Ee!==0&&oe!==null){t=oe;var i=xt;t:switch(Ee){case 1:Ee=0,xt=null,Ql(e,t,i,1);break;case 2:case 9:if(ms(i)){Ee=0,xt=null,id(t);break}t=function(){Ee!==2&&Ee!==9||Oe!==e||(Ee=7),Kt(e)},i.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:ms(i)?(Ee=0,xt=null,id(t)):(Ee=0,xt=null,Ql(e,t,i,7));break;case 5:var c=null;switch(oe.tag){case 26:c=oe.memoizedState;case 5:case 27:var o=oe;if(c?Zd(c):o.stateNode.complete){Ee=0,xt=null;var p=o.sibling;if(p!==null)oe=p;else{var R=o.return;R!==null?(oe=R,eu(R)):oe=null}break t}}Ee=0,xt=null,Ql(e,t,i,5);break;case 6:Ee=0,xt=null,Ql(e,t,i,6);break;case 8:fr(),He=6;break e;default:throw Error(r(462))}}f0();break}catch(D){ed(e,D)}while(!0);return na=Pa=null,M.H=l,M.A=n,Se=a,oe!==null?0:(Oe=null,fe=0,bi(),He)}function f0(){for(;oe!==null&&!Ru();)nd(oe)}function nd(e){var t=Cf(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?eu(e):oe=t}function id(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ef(a,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=Ef(a,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:Rc(t);default:jf(a,t),t=oe=as(t,ha),t=Cf(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?eu(e):oe=t}function Ql(e,t,a,l){na=Pa=null,Rc(t),Dl=null,xn=0;var n=t.return;try{if(Ph(e,n,t,a,fe)){He=1,Xi(e,Rt(a,e.current)),oe=null;return}}catch(i){if(n!==null)throw oe=n,i;He=1,Xi(e,Rt(a,e.current)),oe=null;return}t.flags&32768?(he||l===1?e=!0:Ll||(fe&536870912)!==0?e=!1:(ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ud(t,e)):eu(t)}function eu(e){var t=e;do{if((t.flags&32768)!==0){ud(t,ja);return}e=t.return;var a=a0(t.alternate,t,ha);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);He===0&&(He=5)}function ud(e,t){do{var a=l0(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);He=6,oe=null}function cd(e,t,a,l,n,i,c,o,p){e.cancelPendingCommit=null;do tu();while(ke!==0);if((Se&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=ec,Zm(e,a,i,c,o,p),e===Oe&&(oe=Oe=null,fe=0),ql=t,_a=e,ga=a,rr=i,or=n,Wf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g0(Za,function(){return dd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=Y.p,Y.p=2,c=Se,Se|=4;try{n0(e,t,a)}finally{Se=c,Y.p=n,M.T=l}}ke=1,rd(),od(),sd()}}function rd(){if(ke===1){ke=0;var e=_a,t=ql,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=Y.p;Y.p=2;var n=Se;Se|=4;try{Qf(t,e);var i=Tr,c=Ko(e.containerInfo),o=i.focusedElem,p=i.selectionRange;if(c!==o&&o&&o.ownerDocument&&ko(o.ownerDocument.documentElement,o)){if(p!==null&&$u(o)){var R=p.start,D=p.end;if(D===void 0&&(D=R),"selectionStart"in o)o.selectionStart=R,o.selectionEnd=Math.min(D,o.value.length);else{var w=o.ownerDocument||document,C=w&&w.defaultView||window;if(C.getSelection){var j=C.getSelection(),V=o.textContent.length,F=Math.min(p.start,V),Ne=p.end===void 0?F:Math.min(p.end,V);!j.extend&&F>Ne&&(c=Ne,Ne=F,F=c);var T=Vo(o,F),b=Vo(o,Ne);if(T&&b&&(j.rangeCount!==1||j.anchorNode!==T.node||j.anchorOffset!==T.offset||j.focusNode!==b.node||j.focusOffset!==b.offset)){var N=w.createRange();N.setStart(T.node,T.offset),j.removeAllRanges(),F>Ne?(j.addRange(N),j.extend(b.node,b.offset)):(N.setEnd(b.node,b.offset),j.addRange(N))}}}}for(w=[],j=o;j=j.parentNode;)j.nodeType===1&&w.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<w.length;o++){var _=w[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}mu=!!zr,Tr=zr=null}finally{Se=n,Y.p=l,M.T=a}}e.current=t,ke=2}}function od(){if(ke===2){ke=0;var e=_a,t=ql,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=Y.p;Y.p=2;var n=Se;Se|=4;try{Hf(e,t.alternate,t)}finally{Se=n,Y.p=l,M.T=a}}ke=3}}function sd(){if(ke===4||ke===3){ke=0,ni();var e=_a,t=ql,a=ga,l=Wf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,ql=_a=null,fd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ma=null),ju(a),t=t.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(te,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=Y.p,Y.p=2,M.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var o=l[c];i(o.value,{componentStack:o.stack})}}finally{M.T=t,Y.p=n}}(ga&3)!==0&&tu(),Kt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===sr?Hn++:(Hn=0,sr=e):Hn=0,Ln(0)}}function fd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vn(t)))}function tu(){return rd(),od(),sd(),dd()}function dd(){if(ke!==5)return!1;var e=_a,t=rr;rr=0;var a=ju(ga),l=M.T,n=Y.p;try{Y.p=32>a?32:a,M.T=null,a=or,or=null;var i=_a,c=ga;if(ke=0,ql=_a=null,ga=0,(Se&6)!==0)throw Error(r(331));var o=Se;if(Se|=4,Kf(i.current),Zf(i,i.current,c,a),Se=o,Ln(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(te,i)}catch{}return!0}finally{Y.p=n,M.T=l,fd(e,t)}}function md(e,t,a){t=Rt(a,t),t=Qc(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(ln(e,2),Kt(e))}function ze(e,t,a){if(e.tag===3)md(e,e,a);else for(;t!==null;){if(t.tag===3){md(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ma===null||!Ma.has(l))){e=Rt(a,e),a=hf(2),l=Na(t,a,2),l!==null&&(gf(a,l,t,e),ln(l,2),Kt(l));break}}t=t.return}}function mr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new c0;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ir=!0,n.add(a),e=d0.bind(null,e,t,a),t.then(e,e))}function d0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(fe&a)===a&&(He===4||He===3&&(fe&62914560)===fe&&300>nt()-$i?(Se&2)===0&&Xl(e,0):ur|=a,Yl===fe&&(Yl=0)),Kt(e)}function hd(e,t){t===0&&(t=uo()),e=Wa(e,t),e!==null&&(ln(e,t),Kt(e))}function m0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),hd(e,a)}function h0(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),hd(e,a)}function g0(e,t){return Ga(e,t)}var au=null,Gl=null,hr=!1,lu=!1,gr=!1,Ua=0;function Kt(e){e!==Gl&&e.next===null&&(Gl===null?au=Gl=e:Gl=Gl.next=e),lu=!0,hr||(hr=!0,y0())}function Ln(e,t){if(!gr&&lu){gr=!0;do for(var a=!1,l=au;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-Le(42|e)+1)-1,i&=n&~(c&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,vd(l,i))}else i=fe,i=it(l,l===Oe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Va(l,i)||(a=!0,vd(l,i));l=l.next}while(a);gr=!1}}function p0(){gd()}function gd(){lu=hr=!1;var e=0;Ua!==0&&R0()&&(e=Ua);for(var t=nt(),a=null,l=au;l!==null;){var n=l.next,i=pd(l,t);i===0?(l.next=null,a===null?au=n:a.next=n,n===null&&(Gl=a)):(a=l,(e!==0||(i&3)!==0)&&(lu=!0)),l=n}ke!==0&&ke!==5||Ln(e),Ua!==0&&(Ua=0)}function pd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-Le(i),o=1<<c,p=n[c];p===-1?((o&a)===0||(o&l)!==0)&&(n[c]=Gm(o,t)):p<=t&&(e.expiredLanes|=o),i&=~o}if(t=Oe,a=fe,a=it(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Pl(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Va(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Pl(l),ju(a)){case 2:case 8:a=tn;break;case 32:a=Za;break;case 268435456:a=an;break;default:a=Za}return l=yd.bind(null,e),a=Ga(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Pl(l),e.callbackPriority=2,e.callbackNode=null,2}function yd(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tu()&&e.callbackNode!==a)return null;var l=fe;return l=it(e,e===Oe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(If(e,l,t),pd(e,nt()),e.callbackNode!=null&&e.callbackNode===a?yd.bind(null,e):null)}function vd(e,t){if(tu())return null;If(e,t,!0)}function y0(){O0(function(){(Se&6)!==0?Ga(en,p0):gd()})}function pr(){if(Ua===0){var e=Cl;e===0&&(e=Qt,Qt<<=1,(Qt&261888)===0&&(Qt=256)),Ua=e}return Ua}function bd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fi(""+e)}function xd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function v0(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=bd((n[ot]||null).action),c=l.submitter;c&&(t=(t=c[ot]||null)?bd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var o=new gi("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ua!==0){var p=c?xd(n,c):new FormData(n);Bc(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(o.preventDefault(),p=c?xd(n,c):new FormData(n),Bc(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var yr=0;yr<Pu.length;yr++){var vr=Pu[yr],b0=vr.toLowerCase(),x0=vr[0].toUpperCase()+vr.slice(1);Bt(b0,"on"+x0)}Bt(Wo,"onAnimationEnd"),Bt(Fo,"onAnimationIteration"),Bt(Io,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Bh,"onTransitionRun"),Bt(Hh,"onTransitionStart"),Bt(Lh,"onTransitionCancel"),Bt(Po,"onTransitionEnd"),hl("onMouseEnter",["mouseout","mouseover"]),hl("onMouseLeave",["mouseout","mouseover"]),hl("onPointerEnter",["pointerout","pointerover"]),hl("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yn));function Sd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var o=l[c],p=o.instance,R=o.currentTarget;if(o=o.listener,p!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=R;try{i(n)}catch(D){vi(D)}n.currentTarget=null,i=p}else for(c=0;c<l.length;c++){if(o=l[c],p=o.instance,R=o.currentTarget,o=o.listener,p!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=R;try{i(n)}catch(D){vi(D)}n.currentTarget=null,i=p}}}}function se(e,t){var a=t[Du];a===void 0&&(a=t[Du]=new Set);var l=e+"__bubble";a.has(l)||(Ed(t,e,2,!1),a.add(l))}function br(e,t,a){var l=0;t&&(l|=4),Ed(a,e,l,t)}var nu="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[nu]){e[nu]=!0,ho.forEach(function(a){a!=="selectionchange"&&(S0.has(a)||br(a,!1,e),br(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nu]||(t[nu]=!0,br("selectionchange",!1,t))}}function Ed(e,t,a,l){switch(Fd(t)){case 2:var n=$0;break;case 8:n=W0;break;default:n=Ur}a=n.bind(null,t,a,e),n=void 0,!qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Sr(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var o=l.stateNode.containerInfo;if(o===n)break;if(c===4)for(c=l.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;o!==null;){if(c=fl(o),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){l=i=c;continue e}o=o.parentNode}}l=l.return}No(function(){var R=i,D=Lu(a),w=[];e:{var C=es.get(e);if(C!==void 0){var j=gi,V=e;switch(e){case"keypress":if(mi(a)===0)break e;case"keydown":case"keyup":j=hh;break;case"focusin":V="focus",j=Zu;break;case"focusout":V="blur",j=Zu;break;case"beforeblur":case"afterblur":j=Zu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=yh;break;case Wo:case Fo:case Io:j=ih;break;case Po:j=bh;break;case"scroll":case"scrollend":j=eh;break;case"wheel":j=Sh;break;case"copy":case"cut":case"paste":j=ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Do;break;case"toggle":case"beforetoggle":j=zh}var F=(t&4)!==0,Ne=!F&&(e==="scroll"||e==="scrollend"),T=F?C!==null?C+"Capture":null:C;F=[];for(var b=R,N;b!==null;){var _=b;if(N=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||N===null||T===null||(_=cn(b,T),_!=null&&F.push(qn(b,_,N))),Ne)break;b=b.return}0<F.length&&(C=new j(C,V,null,a,D),w.push({event:C,listeners:F}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",C&&a!==Hu&&(V=a.relatedTarget||a.fromElement)&&(fl(V)||V[sl]))break e;if((j||C)&&(C=D.window===D?D:(C=D.ownerDocument)?C.defaultView||C.parentWindow:window,j?(V=a.relatedTarget||a.toElement,j=R,V=V?fl(V):null,V!==null&&(Ne=g(V),F=V.tag,V!==Ne||F!==5&&F!==27&&F!==6)&&(V=null)):(j=null,V=R),j!==V)){if(F=Oo,_="onMouseLeave",T="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(F=Do,_="onPointerLeave",T="onPointerEnter",b="pointer"),Ne=j==null?C:un(j),N=V==null?C:un(V),C=new F(_,b+"leave",j,a,D),C.target=Ne,C.relatedTarget=N,_=null,fl(D)===R&&(F=new F(T,b+"enter",V,a,D),F.target=N,F.relatedTarget=Ne,_=F),Ne=_,j&&V)t:{for(F=E0,T=j,b=V,N=0,_=T;_;_=F(_))N++;_=0;for(var $=b;$;$=F($))_++;for(;0<N-_;)T=F(T),N--;for(;0<_-N;)b=F(b),_--;for(;N--;){if(T===b||b!==null&&T===b.alternate){F=T;break t}T=F(T),b=F(b)}F=null}else F=null;j!==null&&zd(w,C,j,F,!1),V!==null&&Ne!==null&&zd(w,Ne,V,F,!0)}}e:{if(C=R?un(R):window,j=C.nodeName&&C.nodeName.toLowerCase(),j==="select"||j==="input"&&C.type==="file")var be=Yo;else if(Ho(C))if(qo)be=_h;else{be=Dh;var K=jh}else j=C.nodeName,!j||j.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?R&&Bu(R.elementType)&&(be=Yo):be=Mh;if(be&&(be=be(e,R))){Lo(w,be,a,D);break e}K&&K(e,C,R),e==="focusout"&&R&&C.type==="number"&&R.memoizedProps.value!=null&&Uu(C,"number",C.value)}switch(K=R?un(R):window,e){case"focusin":(Ho(K)||K.contentEditable==="true")&&(xl=K,Wu=R,gn=null);break;case"focusout":gn=Wu=xl=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Jo(w,a,D);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":Jo(w,a,D)}var ne;if(ku)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else bl?Uo(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Mo&&a.locale!=="ko"&&(bl||de!=="onCompositionStart"?de==="onCompositionEnd"&&bl&&(ne=Ro()):(ba=D,Xu="value"in ba?ba.value:ba.textContent,bl=!0)),K=iu(R,de),0<K.length&&(de=new jo(de,e,null,a,D),w.push({event:de,listeners:K}),ne?de.data=ne:(ne=Bo(a),ne!==null&&(de.data=ne)))),(ne=Ah?Nh(e,a):Rh(e,a))&&(de=iu(R,"onBeforeInput"),0<de.length&&(K=new jo("onBeforeInput","beforeinput",null,a,D),w.push({event:K,listeners:de}),K.data=ne)),v0(w,e,R,a,D)}Sd(w,t)})}function qn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function iu(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=cn(e,a),n!=null&&l.unshift(qn(e,n,i)),n=cn(e,t),n!=null&&l.push(qn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function E0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zd(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var o=a,p=o.alternate,R=o.stateNode;if(o=o.tag,p!==null&&p===l)break;o!==5&&o!==26&&o!==27||R===null||(p=R,n?(R=cn(a,i),R!=null&&c.unshift(qn(a,R,p))):n||(R=cn(a,i),R!=null&&c.push(qn(a,R,p)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var z0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(z0,`
`).replace(T0,"")}function Ad(e,t){return t=Td(t),Td(e)===t}function Ae(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||pl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&pl(e,""+l);break;case"className":oi(e,"class",l);break;case"tabIndex":oi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":oi(e,a,l);break;case"style":To(e,l,i);break;case"data":if(t!=="object"){oi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=fi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",n.name,n,null),Ae(e,t,"formEncType",n.formEncType,n,null),Ae(e,t,"formMethod",n.formMethod,n,null),Ae(e,t,"formTarget",n.formTarget,n,null)):(Ae(e,t,"encType",n.encType,n,null),Ae(e,t,"method",n.method,n,null),Ae(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=fi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ea);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=fi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),ri(e,"popover",l);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ri(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Im.get(a)||a,ri(e,a,l))}}function Er(e,t,a,l,n,i){switch(a){case"style":To(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?pl(e,l):(typeof l=="number"||typeof l=="bigint")&&pl(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!go.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[ot]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ri(e,a,l)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ae(e,t,i,c,a,null)}}n&&Ae(e,t,"srcSet",a.srcSet,a,null),l&&Ae(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var o=i=c=n=null,p=null,R=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":c=D;break;case"checked":p=D;break;case"defaultChecked":R=D;break;case"value":i=D;break;case"defaultValue":o=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,t));break;default:Ae(e,t,l,D,a,null)}}xo(e,i,o,p,R,c,n,!1);return;case"select":se("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":c=o;break;case"multiple":l=o;default:Ae(e,t,n,o,a,null)}t=i,a=c,e.multiple=!!l,t!=null?gl(e,!!l,t,!1):a!=null&&gl(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:Ae(e,t,c,o,a,null)}Eo(e,l,n,i);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ae(e,t,p,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Yn.length;l++)se(Yn[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ae(e,t,R,l,a,null)}return;default:if(Bu(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&Er(e,t,D,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&Ae(e,t,o,l,a,null))}function A0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,o=null,p=null,R=null,D=null;for(j in a){var w=a[j];if(a.hasOwnProperty(j)&&w!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":p=w;default:l.hasOwnProperty(j)||Ae(e,t,j,null,l,w)}}for(var C in l){var j=l[C];if(w=a[C],l.hasOwnProperty(C)&&(j!=null||w!=null))switch(C){case"type":i=j;break;case"name":n=j;break;case"checked":R=j;break;case"defaultChecked":D=j;break;case"value":c=j;break;case"defaultValue":o=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,t));break;default:j!==w&&Ae(e,t,C,j,l,w)}}wu(e,c,o,p,R,D,i,n);return;case"select":j=c=o=C=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":j=p;default:l.hasOwnProperty(i)||Ae(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":C=i;break;case"defaultValue":o=i;break;case"multiple":c=i;default:i!==p&&Ae(e,t,n,i,l,p)}t=o,a=c,l=j,C!=null?gl(e,!!a,C,!1):!!l!=!!a&&(t!=null?gl(e,!!a,t,!0):gl(e,!!a,a?[]:"",!1));return;case"textarea":j=C=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ae(e,t,o,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":C=n;break;case"defaultValue":j=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&Ae(e,t,c,n,l,i)}So(e,C,j);return;case"option":for(var V in a)if(C=a[V],a.hasOwnProperty(V)&&C!=null&&!l.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:Ae(e,t,V,null,l,C)}for(p in l)if(C=l[p],j=a[p],l.hasOwnProperty(p)&&C!==j&&(C!=null||j!=null))switch(p){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ae(e,t,p,C,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)C=a[F],a.hasOwnProperty(F)&&C!=null&&!l.hasOwnProperty(F)&&Ae(e,t,F,null,l,C);for(R in l)if(C=l[R],j=a[R],l.hasOwnProperty(R)&&C!==j&&(C!=null||j!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,t));break;default:Ae(e,t,R,C,l,j)}return;default:if(Bu(t)){for(var Ne in a)C=a[Ne],a.hasOwnProperty(Ne)&&C!==void 0&&!l.hasOwnProperty(Ne)&&Er(e,t,Ne,void 0,l,C);for(D in l)C=l[D],j=a[D],!l.hasOwnProperty(D)||C===j||C===void 0&&j===void 0||Er(e,t,D,C,l,j);return}}for(var T in a)C=a[T],a.hasOwnProperty(T)&&C!=null&&!l.hasOwnProperty(T)&&Ae(e,t,T,null,l,C);for(w in l)C=l[w],j=a[w],!l.hasOwnProperty(w)||C===j||C==null&&j==null||Ae(e,t,w,C,l,j)}function Nd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function N0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,o=n.duration;if(i&&o&&Nd(c)){for(c=0,o=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],R=p.startTime;if(R>o)break;var D=p.transferSize,w=p.initiatorType;D&&Nd(w)&&(p=p.responseEnd,c+=D*(p<o?1:(o-R)/(p-R)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zr=null,Tr=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function Rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ar(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nr=null;function R0(){var e=window.event;return e&&e.type==="popstate"?e===Nr?!1:(Nr=e,!0):(Nr=null,!1)}var Od=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(j0)}:Od;function j0(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function Dd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Kl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Xn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Xn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,o=i.nodeName;i[nn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&Xn(e.ownerDocument.body);a=n}while(a);Kl(t)}function Md(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Rr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rr(a),Mu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function D0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[nn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function M0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function _d(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Cr(e){return e.data==="$?"||e.data==="$~"}function Or(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jr=null;function wd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Mt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Bd(e,t,a){switch(t=uu(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Xn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mu(e)}var _t=new Map,Hd=new Set;function cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=Y.d;Y.d={f:w0,r:U0,D:B0,C:H0,L:L0,m:Y0,X:X0,S:q0,M:Q0};function w0(){var e=pa.f(),t=Ii();return e||t}function U0(e){var t=dl(e);t!==null&&t.tag===5&&t.type==="form"?Ps(t):pa.r(e)}var Zl=typeof document>"u"?null:document;function Ld(e,t,a){var l=Zl;if(l&&typeof t=="string"&&t){var n=At(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Hd.has(n)||(Hd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),tt(t,"link",e),$e(t),l.head.appendChild(t)))}}function B0(e){pa.D(e),Ld("dns-prefetch",e,null)}function H0(e,t){pa.C(e,t),Ld("preconnect",e,t)}function L0(e,t,a){pa.L(e,t,a);var l=Zl;if(l&&e&&t){var n='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+At(a.imageSizes)+'"]')):n+='[href="'+At(e)+'"]';var i=n;switch(t){case"style":i=Vl(e);break;case"script":i=kl(e)}_t.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Qn(i))||t==="script"&&l.querySelector(Gn(i))||(t=l.createElement("link"),tt(t,"link",e),$e(t),l.head.appendChild(t)))}}function Y0(e,t){pa.m(e,t);var a=Zl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!_t.has(i)&&(e=E({rel:"modulepreload",href:e},t),_t.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Gn(i)))return}l=a.createElement("link"),tt(l,"link",e),$e(l),a.head.appendChild(l)}}}function q0(e,t,a){pa.S(e,t,a);var l=Zl;if(l&&e){var n=ml(l).hoistableStyles,i=Vl(e);t=t||"default";var c=n.get(i);if(!c){var o={loading:0,preload:null};if(c=l.querySelector(Qn(i)))o.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(i))&&Dr(e,a);var p=c=l.createElement("link");$e(p),tt(p,"link",e),p._p=new Promise(function(R,D){p.onload=R,p.onerror=D}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ru(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:o},n.set(i,c)}}}function X0(e,t){pa.X(e,t);var a=Zl;if(a&&e){var l=ml(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Gn(n)),i||(e=E({src:e,async:!0},t),(t=_t.get(n))&&Mr(e,t),i=a.createElement("script"),$e(i),tt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Q0(e,t){pa.M(e,t);var a=Zl;if(a&&e){var l=ml(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Gn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=_t.get(n))&&Mr(e,t),i=a.createElement("script"),$e(i),tt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Yd(e,t,a,l){var n=(n=ce.current)?cu(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Vl(a.href),a=ml(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Vl(a.href);var i=ml(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Qn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),i||G0(n,e,a,c.state))),t&&l===null)throw Error(r(528,""));return c}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kl(a),a=ml(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Vl(e){return'href="'+At(e)+'"'}function Qn(e){return'link[rel="stylesheet"]['+e+"]"}function qd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function G0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),tt(t,"link",a),$e(t),e.head.appendChild(t))}function kl(e){return'[src="'+At(e)+'"]'}function Gn(e){return"script[async]"+e}function Xd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+At(a.href)+'"]');if(l)return t.instance=l,$e(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),tt(l,"style",n),ru(l,a.precedence,e),t.instance=l;case"stylesheet":n=Vl(a.href);var i=e.querySelector(Qn(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;l=qd(a),(n=_t.get(n))&&Dr(l,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var c=i;return c._p=new Promise(function(o,p){c.onload=o,c.onerror=p}),tt(i,"link",l),t.state.loading|=4,ru(i,a.precedence,e),t.instance=i;case"script":return i=kl(a.src),(n=e.querySelector(Gn(i)))?(t.instance=n,$e(n),n):(l=a,(n=_t.get(i))&&(l=E({},a),Mr(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),tt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ru(l,a.precedence,e));return t.instance}function ru(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var o=l[c];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Dr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ou=null;function Qd(e,t,a){if(ou===null){var l=new Map,n=ou=new Map;n.set(a,l)}else n=ou,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[nn]||i[Fe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var o=l.get(c);o?o.push(i):l.set(c,[i])}}return l}function Gd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Z0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function V0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Vl(l.href),i=t.querySelector(Qn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=su.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,$e(i);return}i=t.ownerDocument||t,l=qd(l),(n=_t.get(n))&&Dr(l,n),i=i.createElement("link"),$e(i);var c=i;c._p=new Promise(function(o,p){c.onload=o,c.onerror=p}),tt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=su.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var _r=0;function k0(e,t){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&_r===0&&(_r=62500*N0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>_r?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fu=null;function du(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,t.forEach(K0,e),fu=null,su.call(e))}function K0(e,t){if(!(t.state.loading&4)){var a=fu.get(e);if(a)var l=a.get(null);else{a=new Map,fu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=su.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Zn={$$typeof:k,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function J0(e,t,a,l,n,i,c,o,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.hiddenUpdates=Cu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Vd(e,t,a,l,n,i,c,o,p,R,D,w){return e=new J0(e,t,a,c,p,R,D,w,o),t=1,i===!0&&(t|=24),i=yt(3,null,null,t),e.current=i,i.stateNode=e,t=dc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},pc(i),e}function kd(e){return e?(e=zl,e):zl}function Kd(e,t,a,l,n,i){n=kd(n),l.context===null?l.context=n:l.pendingContext=n,l=Aa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Na(e,l,t),a!==null&&(gt(a,e,t),En(a,e,t))}function Jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function wr(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function $d(e){if(e.tag===13||e.tag===31){var t=Wa(e,67108864);t!==null&&gt(t,e,67108864),wr(e,67108864)}}function Wd(e){if(e.tag===13||e.tag===31){var t=Et();t=Ou(t);var a=Wa(e,t);a!==null&&gt(a,e,t),wr(e,t)}}var mu=!0;function $0(e,t,a,l){var n=M.T;M.T=null;var i=Y.p;try{Y.p=2,Ur(e,t,a,l)}finally{Y.p=i,M.T=n}}function W0(e,t,a,l){var n=M.T;M.T=null;var i=Y.p;try{Y.p=8,Ur(e,t,a,l)}finally{Y.p=i,M.T=n}}function Ur(e,t,a,l){if(mu){var n=Br(l);if(n===null)Sr(e,t,l,hu,a),Id(e,l);else if(I0(n,e,t,a,l))l.stopPropagation();else if(Id(e,l),t&4&&-1<F0.indexOf(e)){for(;n!==null;){var i=dl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=zt(i.pendingLanes);if(c!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;c;){var p=1<<31-Le(c);o.entanglements[1]|=p,c&=~p}Kt(i),(Se&6)===0&&(Wi=nt()+500,Ln(0))}}break;case 31:case 13:o=Wa(i,2),o!==null&&gt(o,i,2),Ii(),wr(i,2)}if(i=Br(l),i===null&&Sr(e,t,l,hu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Sr(e,t,l,null,a)}}function Br(e){return e=Lu(e),Hr(e)}var hu=null;function Hr(e){if(hu=null,e=fl(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hu=e,null}function Fd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ii()){case en:return 2;case tn:return 8;case Za:case ui:return 32;case an:return 268435456;default:return 32}default:return 32}}var Lr=!1,Ha=null,La=null,Ya=null,Vn=new Map,kn=new Map,qa=[],F0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Id(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(t.pointerId)}}function Kn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=dl(t),t!==null&&$d(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function I0(e,t,a,l,n){switch(t){case"focusin":return Ha=Kn(Ha,e,t,a,l,n),!0;case"dragenter":return La=Kn(La,e,t,a,l,n),!0;case"mouseover":return Ya=Kn(Ya,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Vn.set(i,Kn(Vn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,kn.set(i,Kn(kn.get(i)||null,e,t,a,l,n)),!0}return!1}function Pd(e){var t=fl(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,fo(e.priority,function(){Wd(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,fo(e.priority,function(){Wd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Br(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Hu=l,a.target.dispatchEvent(l),Hu=null}else return t=dl(a),t!==null&&$d(t),e.blockedOn=a,!1;t.shift()}return!0}function em(e,t,a){gu(e)&&a.delete(t)}function P0(){Lr=!1,Ha!==null&&gu(Ha)&&(Ha=null),La!==null&&gu(La)&&(La=null),Ya!==null&&gu(Ya)&&(Ya=null),Vn.forEach(em),kn.forEach(em)}function pu(e,t){e.blockedOn===t&&(e.blockedOn=null,Lr||(Lr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,P0)))}var yu=null;function tm(e){yu!==e&&(yu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){yu===e&&(yu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Hr(l||a)===null)continue;break}var i=dl(a);i!==null&&(e.splice(t,3),t-=3,Bc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Kl(e){function t(p){return pu(p,e)}Ha!==null&&pu(Ha,e),La!==null&&pu(La,e),Ya!==null&&pu(Ya,e),Vn.forEach(t),kn.forEach(t);for(var a=0;a<qa.length;a++){var l=qa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Pd(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[ot]||null;if(typeof i=="function")c||tm(a);else if(c){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[ot]||null)o=c.formAction;else if(Hr(n)!==null)continue}else o=c.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),tm(a)}}}function am(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Yr(e){this._internalRoot=e}vu.prototype.render=Yr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,l=Et();Kd(a,l,e,t,null,null)},vu.prototype.unmount=Yr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kd(e.current,2,null,e,null,null),Ii(),t[sl]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=so();e={blockedOn:null,target:e,priority:t};for(var a=0;a<qa.length&&t!==0&&t<qa[a].priority;a++);qa.splice(a,0,e),a===0&&Pd(e)}};var lm=f.version;if(lm!=="19.2.4")throw Error(r(527,lm,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var eg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{te=bu.inject(eg),Ce=bu}catch{}}return $n.createRoot=function(e,t){if(!d(e))throw Error(r(299));var a=!1,l="",n=sf,i=ff,c=df;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Vd(e,1,!1,null,null,a,l,null,n,i,c,am),e[sl]=t.current,xr(e),new Yr(t)},$n.hydrateRoot=function(e,t,a){if(!d(e))throw Error(r(299));var l=!1,n="",i=sf,c=ff,o=df,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Vd(e,1,!0,t,a??null,l,n,p,i,c,o,am),t.context=kd(null),a=t.current,l=Et(),l=Ou(l),n=Aa(l),n.callback=null,Na(a,n,l),a=l,t.current.lanes=a,ln(t,a),Kt(t),e[sl]=t.current,xr(e),new vu(t)},$n.version="19.2.4",$n}var mm;function fg(){if(mm)return Qr.exports;mm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Qr.exports=sg(),Qr.exports}var dg=fg();const mg=Em(dg);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hm="popstate";function gm(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function hg(u={}){function f(r,d){var h;let g=(h=d.state)==null?void 0:h.masked,{pathname:x,search:A,hash:v}=g||r.location;return Wr("",{pathname:x,search:A,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default",g?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function s(r,d){return typeof d=="string"?d:In(d)}return pg(f,s,null,u)}function we(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function $t(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function gg(){return Math.random().toString(36).substring(2,10)}function pm(u,f){return{usr:u.state,key:u.key,idx:f,masked:u.unstable_mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function Wr(u,f,s=null,r,d){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof f=="string"?Jl(f):f,state:s,key:f&&f.key||r||gg(),unstable_mask:d}}function In({pathname:u="/",search:f="",hash:s=""}){return f&&f!=="?"&&(u+=f.charAt(0)==="?"?f:"?"+f),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function Jl(u){let f={};if(u){let s=u.indexOf("#");s>=0&&(f.hash=u.substring(s),u=u.substring(0,s));let r=u.indexOf("?");r>=0&&(f.search=u.substring(r),u=u.substring(0,r)),u&&(f.pathname=u)}return f}function pg(u,f,s,r={}){let{window:d=document.defaultView,v5Compat:g=!1}=r,x=d.history,A="POP",v=null,h=z();h==null&&(h=0,x.replaceState({...x.state,idx:h},""));function z(){return(x.state||{idx:null}).idx}function E(){A="POP";let H=z(),B=H==null?null:H-h;h=H,v&&v({action:A,location:X.location,delta:B})}function U(H,B){A="PUSH";let Q=gm(H)?H:Wr(X.location,H,B);h=z()+1;let k=pm(Q,h),J=X.createHref(Q.unstable_mask||Q);try{x.pushState(k,"",J)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;d.location.assign(J)}g&&v&&v({action:A,location:X.location,delta:1})}function L(H,B){A="REPLACE";let Q=gm(H)?H:Wr(X.location,H,B);h=z();let k=pm(Q,h),J=X.createHref(Q.unstable_mask||Q);x.replaceState(k,"",J),g&&v&&v({action:A,location:X.location,delta:0})}function G(H){return yg(H)}let X={get action(){return A},get location(){return u(d,x)},listen(H){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(hm,E),v=H,()=>{d.removeEventListener(hm,E),v=null}},createHref(H){return f(d,H)},createURL:G,encodeLocation(H){let B=G(H);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:U,replace:L,go(H){return x.go(H)}};return X}function yg(u,f=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),we(s,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:In(u);return r=r.replace(/ $/,"%20"),!f&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function zm(u,f,s="/"){return vg(u,f,s,!1)}function vg(u,f,s,r){let d=typeof f=="string"?Jl(f):f,g=ya(d.pathname||"/",s);if(g==null)return null;let x=Tm(u);bg(x);let A=null;for(let v=0;A==null&&v<x.length;++v){let h=jg(g);A=Cg(x[v],h,r)}return A}function Tm(u,f=[],s=[],r="",d=!1){let g=(x,A,v=d,h)=>{let z={relativePath:h===void 0?x.path||"":h,caseSensitive:x.caseSensitive===!0,childrenIndex:A,route:x};if(z.relativePath.startsWith("/")){if(!z.relativePath.startsWith(r)&&v)return;we(z.relativePath.startsWith(r),`Absolute route path "${z.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),z.relativePath=z.relativePath.slice(r.length)}let E=Jt([r,z.relativePath]),U=s.concat(z);x.children&&x.children.length>0&&(we(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Tm(x.children,f,U,E,v)),!(x.path==null&&!x.index)&&f.push({path:E,score:Ng(E,x.index),routesMeta:U})};return u.forEach((x,A)=>{var v;if(x.path===""||!((v=x.path)!=null&&v.includes("?")))g(x,A);else for(let h of Am(x.path))g(x,A,!0,h)}),f}function Am(u){let f=u.split("/");if(f.length===0)return[];let[s,...r]=f,d=s.endsWith("?"),g=s.replace(/\?$/,"");if(r.length===0)return d?[g,""]:[g];let x=Am(r.join("/")),A=[];return A.push(...x.map(v=>v===""?g:[g,v].join("/"))),d&&A.push(...x),A.map(v=>u.startsWith("/")&&v===""?"/":v)}function bg(u){u.sort((f,s)=>f.score!==s.score?s.score-f.score:Rg(f.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var xg=/^:[\w-]+$/,Sg=3,Eg=2,zg=1,Tg=10,Ag=-2,ym=u=>u==="*";function Ng(u,f){let s=u.split("/"),r=s.length;return s.some(ym)&&(r+=Ag),f&&(r+=Eg),s.filter(d=>!ym(d)).reduce((d,g)=>d+(xg.test(g)?Sg:g===""?zg:Tg),r)}function Rg(u,f){return u.length===f.length&&u.slice(0,-1).every((r,d)=>r===f[d])?u[u.length-1]-f[f.length-1]:0}function Cg(u,f,s=!1){let{routesMeta:r}=u,d={},g="/",x=[];for(let A=0;A<r.length;++A){let v=r[A],h=A===r.length-1,z=g==="/"?f:f.slice(g.length)||"/",E=zu({path:v.relativePath,caseSensitive:v.caseSensitive,end:h},z),U=v.route;if(!E&&h&&s&&!r[r.length-1].route.index&&(E=zu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},z)),!E)return null;Object.assign(d,E.params),x.push({params:d,pathname:Jt([g,E.pathname]),pathnameBase:wg(Jt([g,E.pathnameBase])),route:U}),E.pathnameBase!=="/"&&(g=Jt([g,E.pathnameBase]))}return x}function zu(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,r]=Og(u.path,u.caseSensitive,u.end),d=f.match(s);if(!d)return null;let g=d[0],x=g.replace(/(.)\/+$/,"$1"),A=d.slice(1);return{params:r.reduce((h,{paramName:z,isOptional:E},U)=>{if(z==="*"){let G=A[U]||"";x=g.slice(0,g.length-G.length).replace(/(.)\/+$/,"$1")}const L=A[U];return E&&!L?h[z]=void 0:h[z]=(L||"").replace(/%2F/g,"/"),h},{}),pathname:g,pathnameBase:x,pattern:u}}function Og(u,f=!1,s=!0){$t(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,A,v,h,z)=>{if(r.push({paramName:A,isOptional:v!=null}),v){let E=z.charAt(h+x.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,f?void 0:"i"),r]}function jg(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return $t(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),u}}function ya(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let s=f.endsWith("/")?f.length-1:f.length,r=u.charAt(s);return r&&r!=="/"?null:u.slice(s)||"/"}var Dg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Mg(u,f="/"){let{pathname:s,search:r="",hash:d=""}=typeof u=="string"?Jl(u):u,g;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?g=vm(s.substring(1),"/"):g=vm(s,f)):g=f,{pathname:g,search:Ug(r),hash:Bg(d)}}function vm(u,f){let s=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function kr(u,f,s,r){return`Cannot include a '${u}' character in a manually specified \`to.${f}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _g(u){return u.filter((f,s)=>s===0||f.route.path&&f.route.path.length>0)}function Nm(u){let f=_g(u);return f.map((s,r)=>r===f.length-1?s.pathname:s.pathnameBase)}function eo(u,f,s,r=!1){let d;typeof u=="string"?d=Jl(u):(d={...u},we(!d.pathname||!d.pathname.includes("?"),kr("?","pathname","search",d)),we(!d.pathname||!d.pathname.includes("#"),kr("#","pathname","hash",d)),we(!d.search||!d.search.includes("#"),kr("#","search","hash",d)));let g=u===""||d.pathname==="",x=g?"/":d.pathname,A;if(x==null)A=s;else{let E=f.length-1;if(!r&&x.startsWith("..")){let U=x.split("/");for(;U[0]==="..";)U.shift(),E-=1;d.pathname=U.join("/")}A=E>=0?f[E]:"/"}let v=Mg(d,A),h=x&&x!=="/"&&x.endsWith("/"),z=(g||x===".")&&s.endsWith("/");return!v.pathname.endsWith("/")&&(h||z)&&(v.pathname+="/"),v}var Jt=u=>u.join("/").replace(/\/\/+/g,"/"),wg=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Ug=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Bg=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Hg=class{constructor(u,f,s,r=!1){this.status=u,this.statusText=f||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Lg(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Yg(u){return u.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Cm(u,f){let s=u;if(typeof s!="string"||!Dg.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,d=!1;if(Rm)try{let g=new URL(window.location.href),x=s.startsWith("//")?new URL(g.protocol+s):new URL(s),A=ya(x.pathname,f);x.origin===g.origin&&A!=null?s=A+x.search+x.hash:d=!0}catch{$t(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Om=["POST","PUT","PATCH","DELETE"];new Set(Om);var qg=["GET",...Om];new Set(qg);var $l=S.createContext(null);$l.displayName="DataRouter";var Tu=S.createContext(null);Tu.displayName="DataRouterState";var Xg=S.createContext(!1),jm=S.createContext({isTransitioning:!1});jm.displayName="ViewTransition";var Qg=S.createContext(new Map);Qg.displayName="Fetchers";var Gg=S.createContext(null);Gg.displayName="Await";var wt=S.createContext(null);wt.displayName="Navigation";var Pn=S.createContext(null);Pn.displayName="Location";var Wt=S.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var to=S.createContext(null);to.displayName="RouteError";var Dm="REACT_ROUTER_ERROR",Zg="REDIRECT",Vg="ROUTE_ERROR_RESPONSE";function kg(u){if(u.startsWith(`${Dm}:${Zg}:{`))try{let f=JSON.parse(u.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function Kg(u){if(u.startsWith(`${Dm}:${Vg}:{`))try{let f=JSON.parse(u.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new Hg(f.status,f.statusText,f.data)}catch{}}function Jg(u,{relative:f}={}){we(ei(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=S.useContext(wt),{hash:d,pathname:g,search:x}=ti(u,{relative:f}),A=g;return s!=="/"&&(A=g==="/"?s:Jt([s,g])),r.createHref({pathname:A,search:x,hash:d})}function ei(){return S.useContext(Pn)!=null}function Qa(){return we(ei(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Pn).location}var Mm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _m(u){S.useContext(wt).static||S.useLayoutEffect(u)}function $g(){let{isDataRoute:u}=S.useContext(Wt);return u?op():Wg()}function Wg(){we(ei(),"useNavigate() may be used only in the context of a <Router> component.");let u=S.useContext($l),{basename:f,navigator:s}=S.useContext(wt),{matches:r}=S.useContext(Wt),{pathname:d}=Qa(),g=JSON.stringify(Nm(r)),x=S.useRef(!1);return _m(()=>{x.current=!0}),S.useCallback((v,h={})=>{if($t(x.current,Mm),!x.current)return;if(typeof v=="number"){s.go(v);return}let z=eo(v,JSON.parse(g),d,h.relative==="path");u==null&&f!=="/"&&(z.pathname=z.pathname==="/"?f:Jt([f,z.pathname])),(h.replace?s.replace:s.push)(z,h.state,h)},[f,s,g,d,u])}S.createContext(null);function Fg(){let{matches:u}=S.useContext(Wt),f=u[u.length-1];return f?f.params:{}}function ti(u,{relative:f}={}){let{matches:s}=S.useContext(Wt),{pathname:r}=Qa(),d=JSON.stringify(Nm(s));return S.useMemo(()=>eo(u,JSON.parse(d),r,f==="path"),[u,d,r,f])}function Ig(u,f){return wm(u,f)}function wm(u,f,s){var H;we(ei(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=S.useContext(wt),{matches:d}=S.useContext(Wt),g=d[d.length-1],x=g?g.params:{},A=g?g.pathname:"/",v=g?g.pathnameBase:"/",h=g&&g.route;{let B=h&&h.path||"";Bm(A,!h||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${A}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let z=Qa(),E;if(f){let B=typeof f=="string"?Jl(f):f;we(v==="/"||((H=B.pathname)==null?void 0:H.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${B.pathname}" was given in the \`location\` prop.`),E=B}else E=z;let U=E.pathname||"/",L=U;if(v!=="/"){let B=v.replace(/^\//,"").split("/");L="/"+U.replace(/^\//,"").split("/").slice(B.length).join("/")}let G=zm(u,{pathname:L});$t(h||G!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),$t(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=lp(G&&G.map(B=>Object.assign({},B,{params:Object.assign({},x,B.params),pathname:Jt([v,r.encodeLocation?r.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?v:Jt([v,r.encodeLocation?r.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),d,s);return f&&X?S.createElement(Pn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},X):X}function Pg(){let u=rp(),f=Lg(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},g={padding:"2px 4px",backgroundColor:r},x=null;return console.error("Error handled by React Router default ErrorBoundary:",u),x=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:g},"ErrorBoundary")," or"," ",S.createElement("code",{style:g},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},f),s?S.createElement("pre",{style:d},s):null,x)}var ep=S.createElement(Pg,null),Um=class extends S.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,f){return f.location!==u.location||f.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:f.error,location:f.location,revalidation:u.revalidation||f.revalidation}}componentDidCatch(u,f){this.props.onError?this.props.onError(u,f):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=Kg(u.digest);s&&(u=s)}let f=u!==void 0?S.createElement(Wt.Provider,{value:this.props.routeContext},S.createElement(to.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?S.createElement(tp,{error:u},f):f}};Um.contextType=Xg;var Kr=new WeakMap;function tp({children:u,error:f}){let{basename:s}=S.useContext(wt);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let r=kg(f.digest);if(r){let d=Kr.get(f);if(d)throw d;let g=Cm(r.location,s);if(Rm&&!Kr.get(f))if(g.isExternal||r.reloadDocument)window.location.href=g.absoluteURL||g.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(g.to,{replace:r.replace}));throw Kr.set(f,x),x}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g.absoluteURL||g.to}`})}}return u}function ap({routeContext:u,match:f,children:s}){let r=S.useContext($l);return r&&r.static&&r.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=f.route.id),S.createElement(Wt.Provider,{value:u},s)}function lp(u,f=[],s){let r=s==null?void 0:s.state;if(u==null){if(!r)return null;if(r.errors)u=r.matches;else if(f.length===0&&!r.initialized&&r.matches.length>0)u=r.matches;else return null}let d=u,g=r==null?void 0:r.errors;if(g!=null){let z=d.findIndex(E=>E.route.id&&(g==null?void 0:g[E.route.id])!==void 0);we(z>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,z+1))}let x=!1,A=-1;if(s&&r){x=r.renderFallback;for(let z=0;z<d.length;z++){let E=d[z];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(A=z),E.route.id){let{loaderData:U,errors:L}=r,G=E.route.loader&&!U.hasOwnProperty(E.route.id)&&(!L||L[E.route.id]===void 0);if(E.route.lazy||G){s.isStatic&&(x=!0),A>=0?d=d.slice(0,A+1):d=[d[0]];break}}}}let v=s==null?void 0:s.onError,h=r&&v?(z,E)=>{var U,L;v(z,{location:r.location,params:((L=(U=r.matches)==null?void 0:U[0])==null?void 0:L.params)??{},unstable_pattern:Yg(r.matches),errorInfo:E})}:void 0;return d.reduceRight((z,E,U)=>{let L,G=!1,X=null,H=null;r&&(L=g&&E.route.id?g[E.route.id]:void 0,X=E.route.errorElement||ep,x&&(A<0&&U===0?(Bm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,H=null):A===U&&(G=!0,H=E.route.hydrateFallbackElement||null)));let B=f.concat(d.slice(0,U+1)),Q=()=>{let k;return L?k=X:G?k=H:E.route.Component?k=S.createElement(E.route.Component,null):E.route.element?k=E.route.element:k=z,S.createElement(ap,{match:E,routeContext:{outlet:z,matches:B,isDataRoute:r!=null},children:k})};return r&&(E.route.ErrorBoundary||E.route.errorElement||U===0)?S.createElement(Um,{location:r.location,revalidation:r.revalidation,component:X,error:L,children:Q(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:h}):Q()},null)}function ao(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function np(u){let f=S.useContext($l);return we(f,ao(u)),f}function ip(u){let f=S.useContext(Tu);return we(f,ao(u)),f}function up(u){let f=S.useContext(Wt);return we(f,ao(u)),f}function lo(u){let f=up(u),s=f.matches[f.matches.length-1];return we(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function cp(){return lo("useRouteId")}function rp(){var r;let u=S.useContext(to),f=ip("useRouteError"),s=lo("useRouteError");return u!==void 0?u:(r=f.errors)==null?void 0:r[s]}function op(){let{router:u}=np("useNavigate"),f=lo("useNavigate"),s=S.useRef(!1);return _m(()=>{s.current=!0}),S.useCallback(async(d,g={})=>{$t(s.current,Mm),s.current&&(typeof d=="number"?await u.navigate(d):await u.navigate(d,{fromRouteId:f,...g}))},[u,f])}var bm={};function Bm(u,f,s){!f&&!bm[u]&&(bm[u]=!0,$t(!1,s))}S.memo(sp);function sp({routes:u,future:f,state:s,isStatic:r,onError:d}){return wm(u,void 0,{state:s,isStatic:r,onError:d})}function Fr(u){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fp({basename:u="/",children:f=null,location:s,navigationType:r="POP",navigator:d,static:g=!1,unstable_useTransitions:x}){we(!ei(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=u.replace(/^\/*/,"/"),v=S.useMemo(()=>({basename:A,navigator:d,static:g,unstable_useTransitions:x,future:{}}),[A,d,g,x]);typeof s=="string"&&(s=Jl(s));let{pathname:h="/",search:z="",hash:E="",state:U=null,key:L="default",unstable_mask:G}=s,X=S.useMemo(()=>{let H=ya(h,A);return H==null?null:{location:{pathname:H,search:z,hash:E,state:U,key:L,unstable_mask:G},navigationType:r}},[A,h,z,E,U,L,r,G]);return $t(X!=null,`<Router basename="${A}"> is not able to match the URL "${h}${z}${E}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:S.createElement(wt.Provider,{value:v},S.createElement(Pn.Provider,{children:f,value:X}))}function dp({children:u,location:f}){return Ig(Ir(u),f)}function Ir(u,f=[]){let s=[];return S.Children.forEach(u,(r,d)=>{if(!S.isValidElement(r))return;let g=[...f,d];if(r.type===S.Fragment){s.push.apply(s,Ir(r.props.children,g));return}we(r.type===Fr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!r.props.index||!r.props.children,"An index route cannot have child routes.");let x={id:r.props.id||g.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(x.children=Ir(r.props.children,g)),s.push(x)}),s}var Su="get",Eu="application/x-www-form-urlencoded";function Au(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function mp(u){return Au(u)&&u.tagName.toLowerCase()==="button"}function hp(u){return Au(u)&&u.tagName.toLowerCase()==="form"}function gp(u){return Au(u)&&u.tagName.toLowerCase()==="input"}function pp(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function yp(u,f){return u.button===0&&(!f||f==="_self")&&!pp(u)}var xu=null;function vp(){if(xu===null)try{new FormData(document.createElement("form"),0),xu=!1}catch{xu=!0}return xu}var bp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jr(u){return u!=null&&!bp.has(u)?($t(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eu}"`),null):u}function xp(u,f){let s,r,d,g,x;if(hp(u)){let A=u.getAttribute("action");r=A?ya(A,f):null,s=u.getAttribute("method")||Su,d=Jr(u.getAttribute("enctype"))||Eu,g=new FormData(u)}else if(mp(u)||gp(u)&&(u.type==="submit"||u.type==="image")){let A=u.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=u.getAttribute("formaction")||A.getAttribute("action");if(r=v?ya(v,f):null,s=u.getAttribute("formmethod")||A.getAttribute("method")||Su,d=Jr(u.getAttribute("formenctype"))||Jr(A.getAttribute("enctype"))||Eu,g=new FormData(A,u),!vp()){let{name:h,type:z,value:E}=u;if(z==="image"){let U=h?`${h}.`:"";g.append(`${U}x`,"0"),g.append(`${U}y`,"0")}else h&&g.append(h,E)}}else{if(Au(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Su,r=null,d=Eu,x=u}return g&&d==="text/plain"&&(x=g,g=void 0),{action:r,method:s.toLowerCase(),encType:d,formData:g,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function no(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Sp(u,f,s,r){let d=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${r}`:d.pathname=`${d.pathname}.${r}`:d.pathname==="/"?d.pathname=`_root.${r}`:f&&ya(d.pathname,f)==="/"?d.pathname=`${f.replace(/\/$/,"")}/_root.${r}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${r}`,d}async function Ep(u,f){if(u.id in f)return f[u.id];try{let s=await import(u.module);return f[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zp(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Tp(u,f,s){let r=await Promise.all(u.map(async d=>{let g=f.routes[d.route.id];if(g){let x=await Ep(g,s);return x.links?x.links():[]}return[]}));return Cp(r.flat(1).filter(zp).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function xm(u,f,s,r,d,g){let x=(v,h)=>s[h]?v.route.id!==s[h].route.id:!0,A=(v,h)=>{var z;return s[h].pathname!==v.pathname||((z=s[h].route.path)==null?void 0:z.endsWith("*"))&&s[h].params["*"]!==v.params["*"]};return g==="assets"?f.filter((v,h)=>x(v,h)||A(v,h)):g==="data"?f.filter((v,h)=>{var E;let z=r.routes[v.route.id];if(!z||!z.hasLoader)return!1;if(x(v,h)||A(v,h))return!0;if(v.route.shouldRevalidate){let U=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((E=s[0])==null?void 0:E.params)||{},nextUrl:new URL(u,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function Ap(u,f,{includeHydrateFallback:s}={}){return Np(u.map(r=>{let d=f.routes[r.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Np(u){return[...new Set(u)]}function Rp(u){let f={},s=Object.keys(u).sort();for(let r of s)f[r]=u[r];return f}function Cp(u,f){let s=new Set;return new Set(f),u.reduce((r,d)=>{let g=JSON.stringify(Rp(d));return s.has(g)||(s.add(g),r.push({key:g,link:d})),r},[])}function Hm(){let u=S.useContext($l);return no(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Op(){let u=S.useContext(Tu);return no(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var io=S.createContext(void 0);io.displayName="FrameworkContext";function Lm(){let u=S.useContext(io);return no(u,"You must render this element inside a <HydratedRouter> element"),u}function jp(u,f){let s=S.useContext(io),[r,d]=S.useState(!1),[g,x]=S.useState(!1),{onFocus:A,onBlur:v,onMouseEnter:h,onMouseLeave:z,onTouchStart:E}=f,U=S.useRef(null);S.useEffect(()=>{if(u==="render"&&x(!0),u==="viewport"){let X=B=>{B.forEach(Q=>{x(Q.isIntersecting)})},H=new IntersectionObserver(X,{threshold:.5});return U.current&&H.observe(U.current),()=>{H.disconnect()}}},[u]),S.useEffect(()=>{if(r){let X=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(X)}}},[r]);let L=()=>{d(!0)},G=()=>{d(!1),x(!1)};return s?u!=="intent"?[g,U,{}]:[g,U,{onFocus:Wn(A,L),onBlur:Wn(v,G),onMouseEnter:Wn(h,L),onMouseLeave:Wn(z,G),onTouchStart:Wn(E,L)}]:[!1,U,{}]}function Wn(u,f){return s=>{u&&u(s),s.defaultPrevented||f(s)}}function Dp({page:u,...f}){let{router:s}=Hm(),r=S.useMemo(()=>zm(s.routes,u,s.basename),[s.routes,u,s.basename]);return r?S.createElement(_p,{page:u,matches:r,...f}):null}function Mp(u){let{manifest:f,routeModules:s}=Lm(),[r,d]=S.useState([]);return S.useEffect(()=>{let g=!1;return Tp(u,f,s).then(x=>{g||d(x)}),()=>{g=!0}},[u,f,s]),r}function _p({page:u,matches:f,...s}){let r=Qa(),{future:d,manifest:g,routeModules:x}=Lm(),{basename:A}=Hm(),{loaderData:v,matches:h}=Op(),z=S.useMemo(()=>xm(u,f,h,g,r,"data"),[u,f,h,g,r]),E=S.useMemo(()=>xm(u,f,h,g,r,"assets"),[u,f,h,g,r]),U=S.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let X=new Set,H=!1;if(f.forEach(Q=>{var J;let k=g.routes[Q.route.id];!k||!k.hasLoader||(!z.some(re=>re.route.id===Q.route.id)&&Q.route.id in v&&((J=x[Q.route.id])!=null&&J.shouldRevalidate)||k.hasClientLoader?H=!0:X.add(Q.route.id))}),X.size===0)return[];let B=Sp(u,A,d.unstable_trailingSlashAwareDataRequests,"data");return H&&X.size>0&&B.searchParams.set("_routes",f.filter(Q=>X.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[B.pathname+B.search]},[A,d.unstable_trailingSlashAwareDataRequests,v,r,g,z,f,u,x]),L=S.useMemo(()=>Ap(E,g),[E,g]),G=Mp(E);return S.createElement(S.Fragment,null,U.map(X=>S.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...s})),L.map(X=>S.createElement("link",{key:X,rel:"modulepreload",href:X,...s})),G.map(({key:X,link:H})=>S.createElement("link",{key:X,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function wp(...u){return f=>{u.forEach(s=>{typeof s=="function"?s(f):s!=null&&(s.current=f)})}}var Up=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Up&&(window.__reactRouterVersion="7.13.2")}catch{}function Bp({basename:u,children:f,unstable_useTransitions:s,window:r}){let d=S.useRef();d.current==null&&(d.current=hg({window:r,v5Compat:!0}));let g=d.current,[x,A]=S.useState({action:g.action,location:g.location}),v=S.useCallback(h=>{s===!1?A(h):S.startTransition(()=>A(h))},[s]);return S.useLayoutEffect(()=>g.listen(v),[g,v]),S.createElement(fp,{basename:u,children:f,location:x.location,navigationType:x.action,navigator:g,unstable_useTransitions:s})}var Ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qm=S.forwardRef(function({onClick:f,discover:s="render",prefetch:r="none",relative:d,reloadDocument:g,replace:x,unstable_mask:A,state:v,target:h,to:z,preventScrollReset:E,viewTransition:U,unstable_defaultShouldRevalidate:L,...G},X){let{basename:H,navigator:B,unstable_useTransitions:Q}=S.useContext(wt),k=typeof z=="string"&&Ym.test(z),J=Cm(z,H);z=J.to;let re=Jg(z,{relative:d}),me=Qa(),I=null;if(A){let Ue=eo(A,[],me.unstable_mask?me.unstable_mask.pathname:"/",!0);H!=="/"&&(Ue.pathname=Ue.pathname==="/"?H:Jt([H,Ue.pathname])),I=B.createHref(Ue)}let[ue,Xe,at]=jp(r,G),ge=qp(z,{replace:x,unstable_mask:A,state:v,target:h,preventScrollReset:E,relative:d,viewTransition:U,unstable_defaultShouldRevalidate:L,unstable_useTransitions:Q});function pe(Ue){f&&f(Ue),Ue.defaultPrevented||ge(Ue)}let lt=!(J.isExternal||g),_e=S.createElement("a",{...G,...at,href:(lt?I:void 0)||J.absoluteURL||re,onClick:lt?pe:f,ref:wp(X,Xe),target:h,"data-discover":!k&&s==="render"?"true":void 0});return ue&&!k?S.createElement(S.Fragment,null,_e,S.createElement(Dp,{page:re})):_e});qm.displayName="Link";var Hp=S.forwardRef(function({"aria-current":f="page",caseSensitive:s=!1,className:r="",end:d=!1,style:g,to:x,viewTransition:A,children:v,...h},z){let E=ti(x,{relative:h.relative}),U=Qa(),L=S.useContext(Tu),{navigator:G,basename:X}=S.useContext(wt),H=L!=null&&Vp(E)&&A===!0,B=G.encodeLocation?G.encodeLocation(E).pathname:E.pathname,Q=U.pathname,k=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;s||(Q=Q.toLowerCase(),k=k?k.toLowerCase():null,B=B.toLowerCase()),k&&X&&(k=ya(k,X)||k);const J=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let re=Q===B||!d&&Q.startsWith(B)&&Q.charAt(J)==="/",me=k!=null&&(k===B||!d&&k.startsWith(B)&&k.charAt(B.length)==="/"),I={isActive:re,isPending:me,isTransitioning:H},ue=re?f:void 0,Xe;typeof r=="function"?Xe=r(I):Xe=[r,re?"active":null,me?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let at=typeof g=="function"?g(I):g;return S.createElement(qm,{...h,"aria-current":ue,className:Xe,ref:z,style:at,to:x,viewTransition:A},typeof v=="function"?v(I):v)});Hp.displayName="NavLink";var Lp=S.forwardRef(({discover:u="render",fetcherKey:f,navigate:s,reloadDocument:r,replace:d,state:g,method:x=Su,action:A,onSubmit:v,relative:h,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:U,...L},G)=>{let{unstable_useTransitions:X}=S.useContext(wt),H=Gp(),B=Zp(A,{relative:h}),Q=x.toLowerCase()==="get"?"get":"post",k=typeof A=="string"&&Ym.test(A),J=re=>{if(v&&v(re),re.defaultPrevented)return;re.preventDefault();let me=re.nativeEvent.submitter,I=(me==null?void 0:me.getAttribute("formmethod"))||x,ue=()=>H(me||re.currentTarget,{fetcherKey:f,method:I,navigate:s,replace:d,state:g,relative:h,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:U});X&&s!==!1?S.startTransition(()=>ue()):ue()};return S.createElement("form",{ref:G,method:Q,action:B,onSubmit:r?v:J,...L,"data-discover":!k&&u==="render"?"true":void 0})});Lp.displayName="Form";function Yp(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(u){let f=S.useContext($l);return we(f,Yp(u)),f}function qp(u,{target:f,replace:s,unstable_mask:r,state:d,preventScrollReset:g,relative:x,viewTransition:A,unstable_defaultShouldRevalidate:v,unstable_useTransitions:h}={}){let z=$g(),E=Qa(),U=ti(u,{relative:x});return S.useCallback(L=>{if(yp(L,f)){L.preventDefault();let G=s!==void 0?s:In(E)===In(U),X=()=>z(u,{replace:G,unstable_mask:r,state:d,preventScrollReset:g,relative:x,viewTransition:A,unstable_defaultShouldRevalidate:v});h?S.startTransition(()=>X()):X()}},[E,z,U,s,r,d,f,u,g,x,A,v,h])}var Xp=0,Qp=()=>`__${String(++Xp)}__`;function Gp(){let{router:u}=Xm("useSubmit"),{basename:f}=S.useContext(wt),s=cp(),r=u.fetch,d=u.navigate;return S.useCallback(async(g,x={})=>{let{action:A,method:v,encType:h,formData:z,body:E}=xp(g,f);if(x.navigate===!1){let U=x.fetcherKey||Qp();await r(U,s,x.action||A,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:z,body:E,formMethod:x.method||v,formEncType:x.encType||h,flushSync:x.flushSync})}else await d(x.action||A,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:z,body:E,formMethod:x.method||v,formEncType:x.encType||h,replace:x.replace,state:x.state,fromRouteId:s,flushSync:x.flushSync,viewTransition:x.viewTransition})},[r,d,f,s])}function Zp(u,{relative:f}={}){let{basename:s}=S.useContext(wt),r=S.useContext(Wt);we(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),g={...ti(u||".",{relative:f})},x=Qa();if(u==null){g.search=x.search;let A=new URLSearchParams(g.search),v=A.getAll("index");if(v.some(z=>z==="")){A.delete("index"),v.filter(E=>E).forEach(E=>A.append("index",E));let z=A.toString();g.search=z?`?${z}`:""}}return(!u||u===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(g.pathname=g.pathname==="/"?s:Jt([s,g.pathname])),In(g)}function Vp(u,{relative:f}={}){let s=S.useContext(jm);we(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xm("useViewTransitionState"),d=ti(u,{relative:f});if(!s.isTransitioning)return!1;let g=ya(s.currentLocation.pathname,r)||s.currentLocation.pathname,x=ya(s.nextLocation.pathname,r)||s.nextLocation.pathname;return zu(d.pathname,x)!=null||zu(d.pathname,g)!=null}const kp=`
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
`;function Qm({messages:u,onSend:f,isComplete:s}){const[r,d]=S.useState(""),[g,x]=S.useState(!1),A=S.useRef(null);S.useEffect(()=>{var h;(h=A.current)==null||h.scrollIntoView({behavior:"smooth"})},[u]);const v=async()=>{if(!r.trim()||g)return;const h=r.trim();d(""),x(!0),await f(h),x(!1)};return y.jsxs("div",{className:"chat-window",children:[y.jsx("style",{children:kp}),y.jsxs("div",{className:"chat-header",children:[y.jsx("div",{className:"silas-avatar-small",children:"S"}),y.jsxs("div",{className:"chat-header-info",children:[y.jsx("span",{className:"chat-header-name",children:"Silas"}),y.jsx("span",{className:"chat-header-role",children:"Barnhaus Design Guide"})]}),y.jsx("div",{className:"chat-header-status"})]}),y.jsxs("div",{className:"chat-messages",children:[u.map((h,z)=>y.jsxs("div",{className:`chat-msg ${h.role}`,children:[h.role==="assistant"&&y.jsx("div",{className:"msg-avatar silas-bubble",children:"S"}),y.jsx("div",{className:"msg-bubble",children:h.content})]},z)),g&&y.jsxs("div",{className:"chat-msg assistant",children:[y.jsx("div",{className:"msg-avatar silas-bubble",children:"S"}),y.jsxs("div",{className:"msg-bubble typing",children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]})]}),s&&y.jsxs("div",{className:"chat-msg assistant",children:[y.jsx("div",{className:"msg-avatar silas-bubble",children:"S"}),y.jsx("div",{className:"msg-bubble completion-note",children:"Your feedback has been sent to the Barnhaus team. We'll be in touch shortly with next steps. 🏡"})]}),y.jsx("div",{ref:A})]}),y.jsxs("div",{className:"chat-input-area",children:[y.jsx("input",{type:"text",value:r,onChange:h=>d(h.target.value),onKeyDown:h=>h.key==="Enter"&&v(),placeholder:s?"Review complete!":"Type your response...",disabled:g||s}),y.jsx("button",{onClick:v,disabled:!r.trim()||g||s,className:"send-btn",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),y.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]})]})}const Kp=`
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
`;function Jp({open:u,onClose:f,messages:s,onSend:r,isComplete:d}){const g=S.useRef(null),[x,A]=S.useState(!1),[v,h]=S.useState(0);S.useEffect(()=>{h(0)},[u]);const z=L=>{g.current=L.touches[0].clientY,A(!0)},E=L=>{if(g.current===null)return;const G=L.touches[0].clientY-g.current;G>0&&h(G)},U=()=>{A(!1),v>120&&f(),h(0),g.current=null};return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:Kp}),y.jsx("div",{className:`chat-drawer-backdrop ${u?"visible":""}`,onClick:f}),y.jsxs("div",{className:`chat-drawer ${u?"open":""}`,style:{transform:u?`translateY(${v}px)`:"translateY(100%)",transition:x?"none":"transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)"},children:[y.jsxs("div",{className:"chat-drawer-handle-area",onTouchStart:z,onTouchMove:E,onTouchEnd:U,children:[y.jsx("div",{className:"chat-drawer-handle"}),y.jsx("button",{className:"chat-drawer-close",onClick:f,"aria-label":"Close chat",children:"✕"})]}),y.jsx("div",{className:"chat-drawer-body",children:y.jsx(Qm,{messages:s,onSend:r,isComplete:d})})]})]})}function $p({src:u,alt:f,onClose:s}){const[r,d]=S.useState(1),[g,x]=S.useState({x:0,y:0}),[A,v]=S.useState(!1),[h,z]=S.useState({x:0,y:0}),[E,U]=S.useState(0);S.useEffect(()=>{const Q=k=>{k.key==="Escape"&&s()};return window.addEventListener("keydown",Q),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",Q),document.body.style.overflow=""}},[s]);const L=Q=>{const k=Date.now();k-E<300&&(d(J=>J===1?2.5:1),x({x:0,y:0})),U(k)},G=Q=>{Q.preventDefault(),d(k=>Math.min(5,Math.max(1,k-Q.deltaY*.002)))},X=Q=>{r!==1&&(v(!0),z({x:Q.clientX-g.x,y:Q.clientY-g.y}))},H=Q=>{A&&x({x:Q.clientX-h.x,y:Q.clientY-h.y})},B=()=>v(!1);return y.jsxs("div",{style:Fn.overlay,onClick:Q=>{Q.target===Q.currentTarget&&s()},children:[y.jsx("button",{style:Fn.closeBtn,onClick:s,children:"✕"}),y.jsx("div",{style:Fn.imgWrap,onWheel:G,onMouseDown:X,onMouseMove:H,onMouseUp:B,onMouseLeave:B,onClick:L,children:y.jsx("img",{src:u,alt:f,style:{...Fn.img,transform:`scale(${r}) translate(${g.x/r}px, ${g.y/r}px)`,cursor:r>1?A?"grabbing":"grab":"zoom-in"},draggable:!1})}),y.jsx("div",{style:Fn.hint,children:r===1?"Double-tap or scroll to zoom · Tap outside to close":"Scroll to zoom · Drag to pan · Double-tap to reset"})]})}const Fn={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.95)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},closeBtn:{position:"absolute",top:16,right:16,background:"rgba(255,255,255,0.1)",border:"none",color:"#fff",fontSize:20,width:44,height:44,borderRadius:"50%",cursor:"pointer",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},imgWrap:{maxWidth:"95vw",maxHeight:"90vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},img:{maxWidth:"95vw",maxHeight:"88vh",objectFit:"contain",transition:"transform 0.1s ease",userSelect:"none"},hint:{position:"absolute",bottom:16,color:"rgba(255,255,255,0.4)",fontSize:12,fontFamily:"'Inter', sans-serif"}},Wp=`
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
  .next-btn-row { margin-top: 0.75rem; }

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
`;function Fp({imageId:u,feedback:f,onFeedback:s,onNext:r,hasNext:d,onComplete:g,isLastImage:x}){const[A,v]=S.useState((f==null?void 0:f.notes)||""),[h,z]=S.useState((f==null?void 0:f.status)||null);S.useEffect(()=>{z((f==null?void 0:f.status)||null),v((f==null?void 0:f.notes)||"")},[u]);const E=L=>{z(L),s(L,A)},U=L=>{v(L.target.value),h&&s(h,L.target.value)};return y.jsxs("div",{className:"feedback-section",children:[y.jsx("style",{children:Wp}),y.jsx("div",{className:"feedback-label",children:"How do you feel about this render?"}),y.jsxs("div",{className:"feedback-buttons",children:[y.jsx("button",{className:`fb-btn love ${h==="love"?"active":""}`,onClick:()=>E("love"),children:"💚 Love It"}),y.jsx("button",{className:`fb-btn change ${h==="change"?"active":""}`,onClick:()=>E("change"),children:"🔶 Change It"}),y.jsx("button",{className:`fb-btn question ${h==="question"?"active":""}`,onClick:()=>E("question"),children:"❓ Question"})]}),h&&y.jsx("textarea",{className:"feedback-notes",value:A,onChange:U,placeholder:"Add any notes or details...",rows:2}),y.jsx("div",{className:"next-btn-row",children:x?y.jsx("button",{className:"btn-next btn-submit",onClick:g,children:"Make It Yours →"}):d?y.jsx("button",{className:"btn-next",onClick:r,children:"Next →"}):null})]})}const Sm=`
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
`;function Ip({image:u,images:f,currentIndex:s,onSelectImage:r,isFloorPlan:d,roomType:g,feedback:x,onFeedback:A,onNext:v,hasNext:h,onComplete:z,isLastImage:E}){const[U,L]=S.useState(!1),[G,X]=S.useState(!1);if(S.useEffect(()=>{X(!1)},[u==null?void 0:u.id]),!u)return y.jsxs("div",{className:"image-viewer empty",children:[y.jsx("style",{children:Sm}),y.jsx("p",{children:"No image to display"})]});const H=g?g.charAt(0).toUpperCase()+g.slice(1):"",B=f.length,Q=B>1,k=()=>{s>0&&r(s-1)},J=()=>{s<B-1&&r(s+1)};return y.jsxs("div",{className:"image-viewer",children:[y.jsx("style",{children:Sm}),y.jsxs("div",{className:"image-header",children:[y.jsx("span",{className:"room-label",children:H}),d&&y.jsx("span",{className:"ref-badge",children:"Reference Only"}),Q&&y.jsxs("span",{className:"image-counter",children:[s+1," of ",B]}),y.jsx("span",{className:"image-name",children:u.name})]}),y.jsxs("div",{className:"image-main-wrap",children:[Q&&s>0&&y.jsx("button",{className:"nav-arrow nav-prev",onClick:k,"aria-label":"Previous image",children:"‹"}),y.jsxs("div",{className:"image-main",children:[!G&&y.jsx("div",{style:{width:"100%",minHeight:300,background:"linear-gradient(90deg, #2a2a2a 25%, #333 50%, #2a2a2a 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite",borderRadius:8}}),y.jsx("img",{src:u.url,alt:u.name,className:"main-image",onClick:()=>L(!0),onLoad:()=>X(!0),style:{cursor:"zoom-in",display:G?"block":"none"},title:"Click to zoom"})]}),Q&&s<B-1&&y.jsx("button",{className:"nav-arrow nav-next",onClick:J,"aria-label":"Next image",children:"›"})]}),Q&&y.jsxs("div",{className:"thumbnails",children:[y.jsxs("div",{className:"thumb-scroll-hint",children:[B," views — click to explore"]}),y.jsx("div",{className:"thumb-strip",children:f.map((re,me)=>y.jsxs("button",{className:`thumb ${me===s?"active":""}`,onClick:()=>r(me),title:re.name,children:[y.jsx("img",{src:re.url,alt:re.name}),y.jsx("span",{className:"thumb-num",children:me+1})]},re.id))})]}),y.jsxs("div",{className:"image-controls",children:[!d&&y.jsx(Fp,{imageId:u.id,feedback:x,onFeedback:A,onNext:v,hasNext:h,onComplete:z,isLastImage:E}),d&&h&&y.jsx("button",{className:"btn-floor-next",onClick:v,children:"Continue to Next Section →"})]}),U&&y.jsx($p,{src:u.url,alt:u.name,onClose:()=>L(!1)})]})}function Pp({sections:u,currentIndex:f,onSelect:s,locked:r=!1}){const d=`
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
`;return u.length?y.jsxs("div",{className:"progress-bar-container",style:r?{cursor:"not-allowed"}:{},children:[y.jsx("style",{children:d}),y.jsxs("div",{className:"progress-track",children:[u.map((g,x)=>y.jsxs("div",{className:`progress-step ${x<f?"done":""} ${x===f?"active":""}`,style:r&&x!==f?{cursor:"not-allowed",opacity:x>f?.4:1}:{},onClick:()=>!r&&s&&s(x),role:"button",tabIndex:0,onKeyDown:A=>A.key==="Enter"&&!r&&s&&s(x),children:[y.jsx("div",{className:"step-dot"}),y.jsx("span",{className:"step-label",children:g})]},x)),y.jsx("div",{className:"progress-fill",style:{width:`${f/Math.max(u.length-1,1)*100}%`}})]})]}):null}const ey=`
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
`;function ty({memo:u,sessionId:f,onStart:s}){const r=S.useCallback(async g=>{if(!g||g.length===0)return;setUploading(!0);const x=[];for(const A of Array.from(g)){if(!A.type.startsWith("image/"))continue;const v=new FileReader,h=await new Promise(z=>{v.onload=E=>z(E.target.result),v.readAsDataURL(A)});x.push({name:A.name,dataUrl:h,file:A})}if(f&&x.length>0)try{const A=new FormData;x.forEach(v=>A.append("images",v.file)),A.append("sessionId",f),await fetch("/api/session/inspiration",{method:"POST",body:A})}catch{}setUploads(A=>[...A,...x]),setUploading(!1)},[f]);S.useCallback(g=>{g.preventDefault(),setDragging(!1),r(g.dataTransfer.files)},[r]);const d=g=>{if(!g)return null;const x=g.split(`
`),A=[];let v=[];const h=()=>{v.length>0&&(A.push(y.jsx("ul",{className:"memo-list",children:v},`list-${A.length}`)),v=[])};return x.forEach((z,E)=>{if(z.startsWith("### ")||z.startsWith("## ")||z.startsWith("# "))h(),A.push(y.jsx("h3",{className:"memo-section-heading",children:z.replace(/^#+\s*/,"")},E));else if(z.startsWith("- ")||z.startsWith("* ")){const U=z.replace(/^[-*]\s*/,"").replace(/\*\*([^*]+)\*\*/g,"$1");v.push(y.jsx("li",{className:"memo-bullet",children:U},E))}else if(z.trim()==="")h(),A.push(y.jsx("div",{className:"memo-spacer"},E));else{h();const U=z.replace(/\*\*([^*]+)\*\*/g,"$1");A.push(y.jsx("p",{className:"memo-p",children:U},E))}}),h(),A};return y.jsxs("div",{className:"overview-screen",children:[y.jsx("style",{children:ey}),y.jsxs("div",{className:"overview-inner",children:[y.jsxs("div",{className:"overview-header",children:[y.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus",className:"overview-logo"}),y.jsx("div",{className:"overview-badge",children:"Draft 1 Review"})]}),y.jsxs("div",{className:"memo-card",children:[y.jsxs("div",{className:"silas-tag",children:[y.jsx("div",{className:"silas-dot-lg"}),y.jsx("span",{children:"Silas · Barnhaus Design Guide"})]}),y.jsx("div",{className:"memo-body",children:u?d(u):y.jsxs("div",{className:"memo-loading",children:[y.jsx("div",{className:"memo-spinner"}),y.jsx("span",{children:"Preparing your overview..."})]})})]}),y.jsx("button",{className:"start-btn",onClick:()=>s([]),disabled:!u,children:u?"Start My Review →":"Loading..."})]})]})}const ay=`
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
`;function ly({images:u,onPick:f}){const[s,r]=S.useState(null);if(!u||u.length===0)return null;const d=z=>r(z),g=()=>r(null),x=()=>r(z=>Math.max(0,z-1)),A=()=>r(z=>Math.min(u.length-1,z+1)),v=z=>{g(),f(u[z],z+1)},h=()=>{g(),f(null,0)};return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:ay}),y.jsxs("div",{className:"inspiration-strip",children:[y.jsx("div",{className:"inspiration-label",children:"Pick a vibe →"}),y.jsxs("div",{className:"inspiration-row",children:[u.map((z,E)=>y.jsxs("div",{className:"inspiration-thumb",onClick:()=>d(E),children:[y.jsx("img",{src:z.thumb||z.url,alt:z.title||`Option ${E+1}`,loading:"lazy"}),y.jsxs("div",{className:"pick-overlay",children:[y.jsx("span",{className:"pick-icon",children:"🔍"}),y.jsx("span",{children:"View"})]})]},E)),y.jsxs("div",{className:"inspiration-skip",onClick:h,children:[y.jsx("span",{children:"Skip →"}),y.jsx("span",{children:"None fit"})]})]})]}),s!==null&&y.jsxs("div",{className:"inspo-lightbox",onClick:g,children:[y.jsx("button",{className:"inspo-lb-close",onClick:g,children:"✕"}),y.jsx("div",{onClick:z=>z.stopPropagation(),children:y.jsx("img",{className:"inspo-lb-img",src:u[s].url,alt:u[s].title||`Option ${s+1}`})}),y.jsxs("div",{className:"inspo-lb-nav",onClick:z=>z.stopPropagation(),children:[y.jsx("button",{className:"inspo-lb-arrow",onClick:x,disabled:s===0,children:"‹"}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[y.jsxs("div",{className:"inspo-lb-actions",children:[y.jsx("button",{className:"inspo-lb-pick",onClick:()=>v(s),children:"✓ This vibe"}),y.jsx("button",{className:"inspo-lb-skip",onClick:h,children:"None fit"})]}),y.jsxs("div",{className:"inspo-lb-counter",children:[s+1," of ",u.length]}),u[s].source&&y.jsxs("div",{className:"inspo-lb-source",children:["via ",u[s].source]})]}),y.jsx("button",{className:"inspo-lb-arrow",onClick:A,disabled:s===u.length-1,children:"›"})]})]})]})}const ny=`
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
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: 1px solid #3a7a3a;
  }
  .btn-enhance-auto:hover:not(:disabled) {
    background: linear-gradient(135deg, #d4a017, #e8b820);
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
`;function iy({imageUrl:u,roomType:f,onEnhanced:s,autoEnhancePrompt:r}){const[d,g]=S.useState(!1),[x,A]=S.useState(""),[v,h]=S.useState(!1);S.useEffect(()=>{r&&(A(r),h(!0))},[r]);const z=async E=>{if(E!=null&&E.trim()){g(!0);try{const L=await(await fetch("/api/enhance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:window.location.origin+u,prompt:`Photorealistic architectural render, luxury custom home, high-end finishes, bright daytime lighting, natural sunlight. ${f.charAt(0).toUpperCase()+f.slice(1)}: ${E}. Sharp detail, professional architectural photography quality.`})})).json();L.enhancedImage&&(s(L.enhancedImage),h(!1),A(""))}catch{alert("Enhancement failed. Please try again.")}finally{g(!1)}}};return y.jsxs("div",{className:"enhance-section",children:[y.jsx("style",{children:ny}),r&&!v&&y.jsxs("div",{className:"enhance-auto-group",children:[y.jsx("button",{className:"btn-enhance btn-enhance-auto",onClick:()=>z(r),disabled:d,children:d?y.jsx("span",{className:"enhance-spinner"}):"✨ Visualize This Style"}),y.jsx("button",{className:"btn-manual-toggle",onClick:()=>h(!0),children:"Custom prompt"})]}),(!r||v)&&(v||!r?!v&&!r?y.jsx("button",{className:"btn-enhance",onClick:()=>h(!0),children:"✨ Visualize My Style"}):y.jsxs("div",{className:"enhance-input-group",children:[y.jsx("input",{type:"text",value:x,onChange:E=>A(E.target.value),placeholder:`Describe your finish preferences for this ${f}...`,disabled:d,onKeyDown:E=>E.key==="Enter"&&z(x),autoFocus:!0}),y.jsx("button",{className:"btn-enhance",onClick:()=>z(x),disabled:d||!x.trim(),children:d?y.jsx("span",{className:"enhance-spinner"}):"Apply"}),y.jsx("button",{className:"btn-cancel",onClick:()=>{h(!1),A("")},children:"Cancel"})]}):null)]})}const uy=`
  .pg-screen {
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: #1a1a1a;
    color: #e0e0e0;
    font-family: 'Inter', sans-serif;
    position: relative;
  }
  .pg-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.65rem 1.25rem;
    border-bottom: 1px solid #2a2a2a;
    flex-shrink: 0;
  }
  .pg-logo { height: 28px; }
  .pg-title {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #B8860B;
  }
  .pg-counter {
    font-size: 0.75rem;
    color: #666;
    min-width: 3rem;
    text-align: right;
  }
  .pg-image-area {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    background: #111;
  }
  .pg-main-img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    display: block;
  }
  .pg-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    color: #ccc;
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    z-index: 2;
    line-height: 1;
  }
  .pg-arrow:hover { background: rgba(255,255,255,0.18); }
  .pg-arrow-left { left: 0.75rem; }
  .pg-arrow-right { right: 0.75rem; }
  .pg-room-label {
    text-align: center;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #B8860B;
    padding: 0.4rem 0 0.2rem;
    flex-shrink: 0;
  }
  .pg-bottom {
    flex-shrink: 0;
  }
  .pg-footer {
    padding: 0.5rem 1.25rem 0.75rem;
    flex-shrink: 0;
  }
  .pg-send-btn {
    width: 100%;
    padding: 0.85rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.03em;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s, transform 0.15s;
  }
  .pg-send-btn:hover:not(:disabled) { opacity: 0.85; transform: scale(1.01); }
  .pg-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  @keyframes pg-pulse {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 0.65; }
  }
  .pg-skeleton-strip {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }
  .pg-skeleton-box {
    flex: 1;
    height: 72px;
    border-radius: 6px;
    background: rgba(184, 134, 11, 0.25);
    animation: pg-pulse 1.4s ease-in-out infinite;
  }
  .pg-skeleton-box:nth-child(2) { animation-delay: 0.15s; }
  .pg-skeleton-box:nth-child(3) { animation-delay: 0.3s; }
  .pg-skeleton-box:nth-child(4) { animation-delay: 0.45s; }
  .pg-skeleton-box:nth-child(5) { animation-delay: 0.6s; }
`;function cy({feedback:u,project:f,clientName:s,projectSlug:r,sessionId:d,onSendToMichael:g}){let A=Object.values(u);A.length===0&&(f!=null&&f.groups)&&(A=f.groups.filter(ge=>{var pe;return((pe=ge.roomType)==null?void 0:pe.toLowerCase())!=="floor plan"}).flatMap(ge=>(ge.images||[]).map(pe=>({imageId:pe.id,imageName:pe.name,roomType:ge.roomType,originalUrl:pe.url,status:null,notes:""}))));const[v,h]=S.useState(0),[z,E]=S.useState([]),[U,L]=S.useState(!1),[G,X]=S.useState(""),[H,B]=S.useState({}),[Q,k]=S.useState(!1),J=A[v],re=v===0,me=v===A.length-1;S.useEffect(()=>{if(!J)return;E([]),L(!0),X(J.notes||"");let ge=!1;async function pe(){try{const _e=await(await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[],clientName:s,projectSlug:r,currentRoom:J.roomType,isImageChangeTrigger:!0,triggerMessage:`[PLAYGROUND] Fetch 4-6 inspiration images for a ${J.roomType}. Client note: "${J.notes||"no specific preference"}". Return inspiration images only.`,sessionId:d})})).json();ge||(_e.inspiration&&_e.inspiration.length>0&&E(_e.inspiration),L(!1))}catch{ge||L(!1)}}return pe(),()=>{ge=!0}},[v]);const I=S.useCallback(async(ge,pe)=>{if(E([]),!!ge)try{const _e=await(await fetch("/api/inspiration/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:ge.url,imageIndex:pe,roomType:J.roomType,clientName:s,sessionId:d})})).json();_e.description&&X(`Transform this render to match the client's chosen inspiration style. ${_e.description} Maintain the existing room layout and dimensions exactly.`)}catch{}},[J==null?void 0:J.roomType,s,d]),ue=S.useCallback(ge=>{J&&B(pe=>({...pe,[J.imageId]:ge}))},[J==null?void 0:J.imageId]),Xe=async()=>{k(!0);try{await g()}catch{k(!1)}};if(!J)return null;const at=H[J.imageId]||J.originalUrl;return y.jsxs("div",{className:"pg-screen",children:[y.jsx("style",{children:uy}),y.jsxs("div",{className:"pg-counter",children:[v+1," / ",A.length]}),y.jsxs("div",{className:"pg-image-area",children:[!re&&y.jsx("button",{className:"pg-arrow pg-arrow-left",onClick:()=>h(ge=>ge-1),children:"‹"}),y.jsx("img",{src:at,alt:J.imageName,className:"pg-main-img"}),!me&&y.jsx("button",{className:"pg-arrow pg-arrow-right",onClick:()=>h(ge=>ge+1),children:"›"})]}),y.jsx("div",{className:"pg-room-label",children:J.roomType}),y.jsxs("div",{className:"pg-bottom",children:[U&&z.length===0?y.jsx("div",{className:"pg-skeleton-strip",children:[0,1,2,3,4].map(ge=>y.jsx("div",{className:"pg-skeleton-box"},ge))}):y.jsx(ly,{images:z,onPick:I}),y.jsx(iy,{imageUrl:J.originalUrl,roomType:J.roomType||"room",onEnhanced:ue,autoEnhancePrompt:G},J.imageId)]}),me&&y.jsx("div",{className:"pg-footer",children:y.jsx("button",{className:"pg-send-btn",onClick:Xe,disabled:Q,children:Q?"Sending…":"Send to Michael ✓"})})]})}const $r={"floor plan":"Floor Plan",exterior:"Exterior",kitchen:"Kitchen","living room":"Living Room","great room":"Great Room","dining room":"Dining Room","primary bedroom":"Primary Bedroom","primary bath":"Primary Bath","master bedroom":"Primary Bedroom","master bath":"Primary Bath",bathroom:"Bathroom",office:"Office","bonus room":"Bonus Room",laundry:"Laundry",hallway:"Hallway",patio:"Patio",outdoor:"Outdoor",garage:"Garage",other:"Other"},ry=`
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

  /* Playground scrollable mode */
  .review-page.playground-mode {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }
  .review-page.playground-mode .review-content {
    overflow: hidden;
    flex: 1;
    min-height: 0;
  }
  .review-page.playground-mode .image-panel {
    overflow-y: auto;
    flex: 1;
    height: 0;
    min-height: 0;
  }
  .pg-wrap {
    width: 100%;
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
`,oy=`
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
`;function sy(){var ni,nt,ii,en,tn,Za,ui,an,ci;const{projectSlug:u,draft:f}=Fg(),[s,r]=S.useState(null),[d,g]=S.useState(!0),[x,A]=S.useState(null),[v,h]=S.useState(0),[z,E]=S.useState(0),[U,L]=S.useState("overview"),[G,X]=S.useState(null),[H,B]=S.useState([]),[Q,k]=S.useState({}),[J,re]=S.useState(!1),[me,I]=S.useState(!1),[ue,Xe]=S.useState(null),[at,ge]=S.useState(!0),[pe,lt]=S.useState(!1),[_e,Ue]=S.useState(()=>window.innerWidth<=768);S.useEffect(()=>{const P=()=>Ue(window.innerWidth<=768);return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const[M,Y]=S.useState(!1),W=S.useRef(0),ye=S.useRef(!1),ie=u?u.charAt(0).toUpperCase()+u.slice(1):"Client";S.useEffect(()=>{async function P(){try{const te=await fetch(`/api/project/${u}`);if(!te.ok)throw new Error("Project not found");const Ce=await te.json();r(Ce)}catch(te){A(te.message)}finally{g(!1)}}P()},[u]),S.useEffect(()=>{if(!s)return;const P=(s.groups||[]).map(te=>$r[te.roomType]||te.roomType);fetch("/api/session/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectSlug:u,draft:f,clientName:ie,projectName:s.projectName,rooms:P})}).then(te=>te.json()).then(te=>{te.sessionId&&Xe(te.sessionId),te.memo&&X(te.memo)}).catch(()=>{})},[s]);const m=(ni=s==null?void 0:s.groups)==null?void 0:ni[v],O=(nt=m==null?void 0:m.images)==null?void 0:nt[z],q=((ii=m==null?void 0:m.roomType)==null?void 0:ii.toLowerCase())==="floor plan",Z=((en=s==null?void 0:s.groups)==null?void 0:en.map(P=>$r[P.roomType]||P.roomType))||[],ee=[...Z,"Visualize"],ce=U==="playground"?ee.length-1:v,ve=Object.fromEntries(Object.entries(Q).filter(([,P])=>{var te;return((te=P.roomType)==null?void 0:te.toLowerCase())!=="floor plan"})),Ke=(tn=s==null?void 0:s.groups)!=null&&tn[v+1]?$r[s.groups[v+1].roomType]||s.groups[v+1].roomType:null,Re=S.useRef(null),Ft=S.useRef(null),Ut=S.useRef(!1);S.useEffect(()=>{var It,Xt,Qt,Gt;if(!s||!O||U!=="walkthrough")return;const P=`${m==null?void 0:m.roomType}-${O.id}`;if(Re.current===P)return;if(!(z===0)){Re.current=P,Ut.current=!1;return}Re.current=P,Ut.current=!1,Ft.current&&Ft.current.abort();const Ce=new AbortController;Ft.current=Ce;const Je=(m==null?void 0:m.roomType)||"other",Le=((Xt=(It=O.analysis)==null?void 0:It.features)==null?void 0:Xt.join(", "))||"",qt=`[IMAGE CHANGE] The client is now viewing image ${z+1} of ${(Qt=m==null?void 0:m.images)==null?void 0:Qt.length} in the ${Je} section. Image name: ${O.name}. Visible features: ${Le||"not analyzed"}. Open the conversation for this image — ask one targeted question based on the room type and what you know about this client. Do not wait for them to speak first.`;fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[],clientName:ie,projectSlug:u,currentRoom:Je,currentImage:O.name,currentImageId:O.id,currentImageFeatures:((Gt=O.analysis)==null?void 0:Gt.features)||[],sessionId:ue,currentImageIndexInSection:z,isImageChangeTrigger:!0,triggerMessage:qt})}).then(rt=>rt.json()).then(rt=>{rt.reply&&rt.reply!=="NO_REPLY"&&rt.reply!=="ANNOUNCE_SKIP"&&B(zt=>[...zt,{role:"assistant",content:rt.reply}])}).catch(()=>{})},[m,O,v,z,s,ue,ie,U]),S.useEffect(()=>{const P=H[H.length-1];P&&P.role==="assistant"&&H.length>W.current&&(pe||(!ye.current&&_e?(ye.current=!0,lt(!0)):Y(!0))),W.current=H.length},[H,pe,_e]);const Wl=()=>{lt(!0),Y(!1)},ai=()=>lt(!1),Yt=S.useCallback(()=>{var Xt,Qt,Gt,rt,zt;if(!O||!m||U!=="walkthrough")return;const P=`${m.roomType}-${O.id}`;if(Re.current===P)return;Re.current=P;const te=m.roomType||"other",Ce=((Qt=(Xt=O.analysis)==null?void 0:Xt.features)==null?void 0:Qt.join(", "))||"",Je=z===(((Gt=m.images)==null?void 0:Gt.length)||1)-1,Le=H.filter(it=>it.sectionKey===te),qt=Le.length>0?`

So far in this section you have already discussed:
${Le.map(it=>`${it.role==="user"?"Client":"Silas"}: ${it.content}`).join(`
`)}`:"",It=`[IMAGE CHANGE] Image ${z+1} of ${(rt=m.images)==null?void 0:rt.length} in the ${te} section. Image name: ${O.name}. Visible features: ${Ce||"not analyzed"}.${qt}${Je?`

This is the LAST image in this section — wrap up any remaining key questions.`:""}

Continue the conversation naturally for this image. Output ONLY the message to the client.`;fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[],clientName:ie,projectSlug:u,currentRoom:te,currentImage:O.name,currentImageId:O.id,currentImageFeatures:((zt=O.analysis)==null?void 0:zt.features)||[],sessionId:ue,currentImageIndexInSection:z,isImageChangeTrigger:!0,triggerMessage:It})}).then(it=>it.json()).then(it=>{it.reply&&it.reply!=="NO_REPLY"&&it.reply!=="ANNOUNCE_SKIP"&&B(Va=>[...Va,{role:"assistant",content:it.reply,sectionKey:te}])}).catch(()=>{})},[O,m,z,H,ie,u,ue,U]),ol=S.useCallback(async P=>{var Ce,Je;Ut.current||(Ut.current=!0,Yt());const te=[...H,{role:"user",content:P}];B(te),ue&&fetch(`/api/session/${ue}/transcript`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript:te})}).catch(()=>{});try{const qt=await(await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:te.map(Xt=>({role:Xt.role,content:Xt.content})),projectName:s==null?void 0:s.projectName,clientName:ie,currentRoom:(m==null?void 0:m.roomType)||"greeting",currentImage:(O==null?void 0:O.name)||"",currentImageId:(O==null?void 0:O.id)||null,totalImagesInSection:((Ce=m==null?void 0:m.images)==null?void 0:Ce.length)||1,currentImageIndexInSection:z,nextSectionName:z===(((Je=m==null?void 0:m.images)==null?void 0:Je.length)||1)-1?Ke:null})})).json();if(!qt.reply||qt.reply==="NO_REPLY"||qt.reply==="ANNOUNCE_SKIP")return;const It=[...te,{role:"assistant",content:qt.reply}];B(It),ue&&fetch(`/api/session/${ue}/transcript`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript:It})}).catch(()=>{})}catch{B(Le=>[...Le,{role:"assistant",content:"I'm having trouble connecting. Please try again."}])}},[H,s,ie,m,O,z,Ke,ue]),Fl=S.useCallback(()=>{L("walkthrough")},[]),Nu=S.useCallback(()=>{m&&(z<m.images.length-1?E(P=>P+1):v<s.groups.length-1&&(h(P=>P+1),E(0)))},[m,v,z,s]),li=S.useCallback(P=>{P===Z.length?(L("playground"),Ga()):(U==="playground"&&L("walkthrough"),h(P),E(0))},[Z.length,U]),Il=S.useCallback((P,te,Ce)=>{Ut.current||(Ut.current=!0,Yt()),k(Je=>({...Je,[P]:{imageId:P,imageName:O==null?void 0:O.name,roomType:m==null?void 0:m.roomType,status:te,notes:Ce,originalUrl:O==null?void 0:O.url}}))},[O,m]),Ga=S.useCallback(()=>{fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[],clientName:ie,projectSlug:u,currentRoom:"playground",isImageChangeTrigger:!0,triggerMessage:"[PLAYGROUND MODE] The client has finished the review and is now in the Make It Yours section. Send a short, friendly intro (2-3 sentences max) explaining: 1) They can browse the inspiration images below each render, 2) clicking a vibe image updates the enhance prompt, 3) hitting the Enhance button generates an AI version of the render. Keep it warm and excited — this is the fun part. Output ONLY the message to send.",sessionId:ue})}).then(P=>P.json()).then(P=>{P.reply&&P.reply!=="NO_REPLY"&&P.reply!=="ANNOUNCE_SKIP"&&B(te=>[...te,{role:"assistant",content:P.reply}])}).catch(()=>{})},[ie,u,ue]),Pl=S.useCallback(()=>{L("playground"),Ga()},[Ga]),Ru=S.useCallback(async()=>{if(me)return;I(!0);const P=Object.values(Q);try{const te=JSON.stringify({projectName:s==null?void 0:s.projectName,projectSlug:u,clientName:ie,feedback:P,sessionId:ue,chatTranscript:H}),Ce=await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:te});if(!Ce.ok)throw new Error("Server error "+Ce.status);re(!0)}catch(te){console.error("Submit feedback error:",te),alert("Failed to submit feedback: "+te.message),I(!1)}},[Q,s,ie,ue,H,u,me]);return d?y.jsxs("div",{className:"loading-screen",children:[y.jsx("div",{className:"loading-spinner"}),y.jsx("p",{children:"Loading your design review..."})]}):!d&&!x&&U==="overview"?y.jsx(ty,{memo:G,sessionId:ue,onStart:Fl}):x?y.jsxs("div",{className:"error-screen",children:[y.jsx("h2",{children:"Unable to Load Project"}),y.jsx("p",{children:x})]}):J?y.jsxs("div",{className:"completion-screen",children:[y.jsx("style",{children:oy}),y.jsxs("div",{className:"completion-card",children:[y.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus",className:"completion-logo"}),y.jsx("div",{className:"completion-checkmark",children:"✓"}),y.jsx("h2",{children:"Review Complete"}),y.jsx("p",{className:"completion-message",children:"Your feedback has been sent to the Barnhaus team. We'll be in touch shortly with next steps."})]})]}):y.jsxs("div",{className:`review-page${U==="playground"?" playground-mode":""}`,children:[y.jsx("header",{className:"review-header",children:y.jsxs("div",{className:"header-inner",children:[y.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus Steel Builders",className:"header-logo"}),y.jsx("div",{className:"header-subtitle",children:"Design Review"})]})}),y.jsx(Pp,{sections:ee,currentIndex:ce,onSelect:li,locked:!1}),y.jsxs("div",{className:"review-content",children:[y.jsx("div",{className:"image-panel",children:U==="playground"?y.jsx(cy,{feedback:ve,project:s,clientName:ie,projectSlug:u,sessionId:ue,onSendToMichael:Ru}):y.jsxs(y.Fragment,{children:[y.jsxs("button",{className:"chat-toggle-btn desktop-only",onClick:()=>ge(P=>!P),"aria-label":at?"Hide chat":"Show chat",children:["💬 ",at?"Hide Silas":"Silas"]}),y.jsx(Ip,{image:O,images:(m==null?void 0:m.images)||[],currentIndex:z,onSelectImage:E,isFloorPlan:q,roomType:m==null?void 0:m.roomType,feedback:Q[O==null?void 0:O.id],onFeedback:(P,te)=>Il(O==null?void 0:O.id,P,te),onNext:Nu,hasNext:z<(((Za=m==null?void 0:m.images)==null?void 0:Za.length)||0)-1||v<(((ui=s==null?void 0:s.groups)==null?void 0:ui.length)||0)-1,onComplete:Pl,isLastImage:v===(((an=s==null?void 0:s.groups)==null?void 0:an.length)||0)-1&&z===(((ci=m==null?void 0:m.images)==null?void 0:ci.length)||0)-1})]})}),y.jsx("div",{className:`chat-panel desktop-only ${at?"chat-panel-open":"chat-panel-closed"}`,children:y.jsx(Qm,{messages:H,onSend:ol,isComplete:J})})]}),_e&&y.jsx("div",{className:"mobile-chat-bar",onClick:Wl,children:y.jsxs("div",{className:"mobile-chat-bar-inner",children:[y.jsx("div",{className:"silas-dot"}),y.jsx("span",{children:"💬 Chat with Silas"}),M&&y.jsx("span",{className:"mobile-chat-unread",children:"New message"}),!ye.current&&!M&&y.jsxs("span",{className:"mobile-chat-hint",children:["Tap to start ",y.jsx("span",{className:"mobile-chat-hint-arrow",children:"↑"})]})]})}),y.jsx(Jp,{open:pe,onClose:ai,messages:H,onSend:ol,isComplete:J})]})}function fy(){return y.jsx("div",{className:"landing-page",children:y.jsxs("div",{className:"landing-card",children:[y.jsx("img",{src:"https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png",alt:"Barnhaus Steel Builders",style:{height:"44px",marginBottom:"1.5rem"}}),y.jsx("h2",{children:"Design Review Portal"}),y.jsx("p",{children:"Use the unique link provided by your Barnhaus team to access your design review."})]})})}function dy(){return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:ry}),y.jsxs(dp,{children:[y.jsx(Fr,{path:"/review/:projectSlug/:draft",element:y.jsx(sy,{})}),y.jsx(Fr,{path:"*",element:y.jsx(fy,{})})]})]})}mg.createRoot(document.getElementById("root")).render(y.jsx(ig.StrictMode,{children:y.jsx(Bp,{children:y.jsx(dy,{})})}));
