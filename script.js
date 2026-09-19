(()=>{var l_=Object.create;var Tf=Object.defineProperty;var c_=Object.getOwnPropertyDescriptor;var u_=Object.getOwnPropertyNames;var h_=Object.getPrototypeOf,d_=Object.prototype.hasOwnProperty;var lr=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};var f_=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of u_(e))!d_.call(t,r)&&r!==n&&Tf(t,r,{get:()=>e[r],enumerable:!(i=c_(e,r))||i.enumerable});return t};var Af=(t,e,n)=>(n=t!=null?l_(h_(t)):{},f_(e||!t||!t.__esModule?Tf(n,"default",{value:t,enumerable:!0}):n,t));var kf=lr(He=>{"use strict";var Ws=Symbol.for("react.element"),p_=Symbol.for("react.portal"),m_=Symbol.for("react.fragment"),g_=Symbol.for("react.strict_mode"),v_=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),y_=Symbol.for("react.context"),x_=Symbol.for("react.forward_ref"),S_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),w_=Symbol.for("react.lazy"),bf=Symbol.iterator;function E_(t){return t===null||typeof t!="object"?null:(t=bf&&t[bf]||t["@@iterator"],typeof t=="function"?t:null)}var Pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lf=Object.assign,If={};function Br(t,e,n){this.props=t,this.context=e,this.refs=If,this.updater=n||Pf}Br.prototype.isReactComponent={};Br.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Br.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nf(){}Nf.prototype=Br.prototype;function Pc(t,e,n){this.props=t,this.context=e,this.refs=If,this.updater=n||Pf}var Lc=Pc.prototype=new Nf;Lc.constructor=Pc;Lf(Lc,Br.prototype);Lc.isPureReactComponent=!0;var Cf=Array.isArray,Df=Object.prototype.hasOwnProperty,Ic={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function Of(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Df.call(e,i)&&!Uf.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ws,type:t,key:s,ref:o,props:r,_owner:Ic.current}}function T_(t,e){return{$$typeof:Ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ws}function A_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rf=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A_(""+t.key):e.toString(36)}function sa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ws:case p_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Rc(o,0):i,Cf(r)?(n="",t!=null&&(n=t.replace(Rf,"$&/")+"/"),sa(r,e,n,"",function(c){return c})):r!=null&&(Nc(r)&&(r=T_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Rc(s,a);o+=sa(s,e,n,l,r)}else if(l=E_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Rc(s,a++),o+=sa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(t,e,n){if(t==null)return t;var i=[],r=0;return sa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function b_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},oa={transition:null},C_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:oa,ReactCurrentOwner:Ic};function Ff(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:ra,forEach:function(t,e,n){ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ra(t,function(){e++}),e},toArray:function(t){return ra(t,function(e){return e})||[]},only:function(t){if(!Nc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Br;He.Fragment=m_;He.Profiler=v_;He.PureComponent=Pc;He.StrictMode=g_;He.Suspense=S_;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;He.act=Ff;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lf({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ic.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Df.call(e,l)&&!Uf.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ws,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:__,_context:t},t.Consumer=t};He.createElement=Of;He.createFactory=function(t){var e=Of.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:x_,render:t}};He.isValidElement=Nc;He.lazy=function(t){return{$$typeof:w_,_payload:{_status:-1,_result:t},_init:b_}};He.memo=function(t,e){return{$$typeof:M_,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=oa.transition;oa.transition={};try{t()}finally{oa.transition=e}};He.unstable_act=Ff;He.useCallback=function(t,e){return Yt.current.useCallback(t,e)};He.useContext=function(t){return Yt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Yt.current.useEffect(t,e)};He.useId=function(){return Yt.current.useId()};He.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Yt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};He.useRef=function(t){return Yt.current.useRef(t)};He.useState=function(t){return Yt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Yt.current.useTransition()};He.version="18.3.1"});var Dc=lr((XT,Bf)=>{"use strict";Bf.exports=kf()});var $f=lr(et=>{"use strict";function kc(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<aa(r,e))t[i]=e,t[n]=r,n=i;else break e}}function Ln(t){return t.length===0?null:t[0]}function ca(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>aa(a,n))l<r&&0>aa(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>aa(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function aa(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(zf=performance,et.unstable_now=function(){return zf.now()}):(Uc=Date,Vf=Uc.now(),et.unstable_now=function(){return Uc.now()-Vf});var zf,Uc,Vf,qn=[],wi=[],R_=1,_n=null,Ut=3,ua=!1,cr=!1,Ys=!1,Wf=typeof setTimeout=="function"?setTimeout:null,Xf=typeof clearTimeout=="function"?clearTimeout:null,Hf=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Bc(t){for(var e=Ln(wi);e!==null;){if(e.callback===null)ca(wi);else if(e.startTime<=t)ca(wi),e.sortIndex=e.expirationTime,kc(qn,e);else break;e=Ln(wi)}}function zc(t){if(Ys=!1,Bc(t),!cr)if(Ln(qn)!==null)cr=!0,Hc(Vc);else{var e=Ln(wi);e!==null&&Gc(zc,e.startTime-t)}}function Vc(t,e){cr=!1,Ys&&(Ys=!1,Xf(qs),qs=-1),ua=!0;var n=Ut;try{for(Bc(e),_n=Ln(qn);_n!==null&&(!(_n.expirationTime>e)||t&&!Zf());){var i=_n.callback;if(typeof i=="function"){_n.callback=null,Ut=_n.priorityLevel;var r=i(_n.expirationTime<=e);e=et.unstable_now(),typeof r=="function"?_n.callback=r:_n===Ln(qn)&&ca(qn),Bc(e)}else ca(qn);_n=Ln(qn)}if(_n!==null)var s=!0;else{var o=Ln(wi);o!==null&&Gc(zc,o.startTime-e),s=!1}return s}finally{_n=null,Ut=n,ua=!1}}var ha=!1,la=null,qs=-1,Yf=5,qf=-1;function Zf(){return!(et.unstable_now()-qf<Yf)}function Oc(){if(la!==null){var t=et.unstable_now();qf=t;var e=!0;try{e=la(!0,t)}finally{e?Xs():(ha=!1,la=null)}}else ha=!1}var Xs;typeof Hf=="function"?Xs=function(){Hf(Oc)}:typeof MessageChannel!="undefined"?(Fc=new MessageChannel,Gf=Fc.port2,Fc.port1.onmessage=Oc,Xs=function(){Gf.postMessage(null)}):Xs=function(){Wf(Oc,0)};var Fc,Gf;function Hc(t){la=t,ha||(ha=!0,Xs())}function Gc(t,e){qs=Wf(function(){t(et.unstable_now())},e)}et.unstable_IdlePriority=5;et.unstable_ImmediatePriority=1;et.unstable_LowPriority=4;et.unstable_NormalPriority=3;et.unstable_Profiling=null;et.unstable_UserBlockingPriority=2;et.unstable_cancelCallback=function(t){t.callback=null};et.unstable_continueExecution=function(){cr||ua||(cr=!0,Hc(Vc))};et.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yf=0<t?Math.floor(1e3/t):5};et.unstable_getCurrentPriorityLevel=function(){return Ut};et.unstable_getFirstCallbackNode=function(){return Ln(qn)};et.unstable_next=function(t){switch(Ut){case 1:case 2:case 3:var e=3;break;default:e=Ut}var n=Ut;Ut=e;try{return t()}finally{Ut=n}};et.unstable_pauseExecution=function(){};et.unstable_requestPaint=function(){};et.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Ut;Ut=t;try{return e()}finally{Ut=n}};et.unstable_scheduleCallback=function(t,e,n){var i=et.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:R_++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,kc(wi,t),Ln(qn)===null&&t===Ln(wi)&&(Ys?(Xf(qs),qs=-1):Ys=!0,Gc(zc,n-i))):(t.sortIndex=r,kc(qn,t),cr||ua||(cr=!0,Hc(Vc))),t};et.unstable_shouldYield=Zf;et.unstable_wrapCallback=function(t){var e=Ut;return function(){var n=Ut;Ut=e;try{return t.apply(this,arguments)}finally{Ut=n}}}});var jf=lr((qT,Jf)=>{"use strict";Jf.exports=$f()});var t0=lr(pn=>{"use strict";var P_=Dc(),dn=jf();function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rm=new Set,go={};function Mr(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(go[t]=e,t=0;t<e.length;t++)rm.add(e[t])}var oi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),du=Object.prototype.hasOwnProperty,L_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kf={},Qf={};function I_(t){return du.call(Qf,t)?!0:du.call(Kf,t)?!1:L_.test(t)?Qf[t]=!0:(Kf[t]=!0,!1)}function N_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D_(t,e,n,i){if(e===null||typeof e=="undefined"||N_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var rh=/[\-:]([a-z])/g;function sh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rh,sh);It[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rh,sh);It[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rh,sh);It[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function oh(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D_(e,n,r,i)&&(n=null),i||r===null?I_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ui=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),ah=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),om=Symbol.for("react.context"),lh=Symbol.for("react.forward_ref"),pu=Symbol.for("react.suspense"),mu=Symbol.for("react.suspense_list"),ch=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),am=Symbol.for("react.offscreen"),ep=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=ep&&t[ep]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Wc;function no(t){if(Wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wc=e&&e[1]||""}return`
`+Wc+t}var Xc=!1;function Yc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function U_(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=Yc(t.type,!1),t;case 11:return t=Yc(t.type.render,!1),t;case 1:return t=Yc(t.type,!0),t;default:return""}}function gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gr:return"Fragment";case Hr:return"Portal";case fu:return"Profiler";case ah:return"StrictMode";case pu:return"Suspense";case mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case om:return(t.displayName||"Context")+".Consumer";case sm:return(t._context.displayName||"Context")+".Provider";case lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ch:return e=t.displayName||null,e!==null?e:gu(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return gu(t(e))}catch{}}return null}function O_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gu(e);case 8:return e===ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F_(t){var e=lm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=F_(t))}function cm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=lm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function vu(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function tp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function um(t,e){e=e.checked,e!=null&&oh(t,"checked",e,!1)}function _u(t,e){um(t,e);var n=Bi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&yu(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yu(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(io(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function hm(t,e){var n=Bi(e.value),i=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pa,fm=(function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k_=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){k_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function pm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function mm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=pm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var B_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mu(t,e){if(e){if(B_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tu=null,ts=null,ns=null;function sp(t){if(t=Uo(t)){if(typeof Tu!="function")throw Error(j(280));var e=t.stateNode;e&&(e=ml(e),Tu(t.stateNode,t.type,e))}}function gm(t){ts?ns?ns.push(t):ns=[t]:ts=t}function vm(){if(ts){var t=ts,e=ns;if(ns=ts=null,sp(t),e)for(t=0;t<e.length;t++)sp(e[t])}}function _m(t,e){return t(e)}function ym(){}var qc=!1;function xm(t,e,n){if(qc)return t(e,n);qc=!0;try{return _m(t,e,n)}finally{qc=!1,(ts!==null||ns!==null)&&(ym(),vm())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var i=ml(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Au=!1;if(oi)try{zr={},Object.defineProperty(zr,"passive",{get:function(){Au=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Au=!1}var zr;function z_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ao=!1,Ha=null,Ga=!1,bu=null,V_={onError:function(t){ao=!0,Ha=t}};function H_(t,e,n,i,r,s,o,a,l){ao=!1,Ha=null,z_.apply(V_,arguments)}function G_(t,e,n,i,r,s,o,a,l){if(H_.apply(this,arguments),ao){if(ao){var c=Ha;ao=!1,Ha=null}else throw Error(j(198));Ga||(Ga=!0,bu=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(wr(t)!==t)throw Error(j(188))}function W_(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return op(r),t;if(s===i)return op(r),e;s=s.sibling}throw Error(j(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Mm(t){return t=W_(t),t!==null?wm(t):null}function wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wm(t);if(e!==null)return e;t=t.sibling}return null}var Em=dn.unstable_scheduleCallback,ap=dn.unstable_cancelCallback,X_=dn.unstable_shouldYield,Y_=dn.unstable_requestPaint,vt=dn.unstable_now,q_=dn.unstable_getCurrentPriorityLevel,hh=dn.unstable_ImmediatePriority,Tm=dn.unstable_UserBlockingPriority,Wa=dn.unstable_NormalPriority,Z_=dn.unstable_LowPriority,Am=dn.unstable_IdlePriority,hl=null,jn=null;function $_(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:K_,J_=Math.log,j_=Math.LN2;function K_(t){return t>>>=0,t===0?32:31-(J_(t)/j_|0)|0}var ma=64,ga=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ro(a):(s&=o,s!==0&&(i=ro(s)))}else o=n&~r,o!==0?i=ro(o):s!==0&&(i=ro(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function Q_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ey(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=Q_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bm(){var t=ma;return ma<<=1,(ma&4194240)===0&&(ma=64),t}function Zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function ty(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Cm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Rm,fh,Pm,Lm,Im,Ru=!1,va=[],Li=null,Ii=null,Ni=null,yo=new Map,xo=new Map,bi=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lp(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uo(e),e!==null&&fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function iy(t,e,n,i,r){switch(e){case"focusin":return Li=$s(Li,t,e,n,i,r),!0;case"dragenter":return Ii=$s(Ii,t,e,n,i,r),!0;case"mouseover":return Ni=$s(Ni,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,$s(yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xo.set(s,$s(xo.get(s)||null,t,e,n,i,r)),!0}return!1}function Nm(t){var e=dr(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Sm(n),e!==null){t.blockedOn=e,Im(t.priority,function(){Pm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function La(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=Uo(n),e!==null&&fh(e),t.blockedOn=n,!1;e.shift()}return!0}function cp(t,e,n){La(t)&&n.delete(e)}function ry(){Ru=!1,Li!==null&&La(Li)&&(Li=null),Ii!==null&&La(Ii)&&(Ii=null),Ni!==null&&La(Ni)&&(Ni=null),yo.forEach(cp),xo.forEach(cp)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Ru||(Ru=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,ry)))}function So(t){function e(r){return Js(r,t)}if(0<va.length){Js(va[0],t);for(var n=1;n<va.length;n++){var i=va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Js(Li,t),Ii!==null&&Js(Ii,t),Ni!==null&&Js(Ni,t),yo.forEach(e),xo.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Nm(n),n.blockedOn===null&&bi.shift()}var is=ui.ReactCurrentBatchConfig,Ya=!0;function sy(t,e,n,i){var r=Ze,s=is.transition;is.transition=null;try{Ze=1,ph(t,e,n,i)}finally{Ze=r,is.transition=s}}function oy(t,e,n,i){var r=Ze,s=is.transition;is.transition=null;try{Ze=4,ph(t,e,n,i)}finally{Ze=r,is.transition=s}}function ph(t,e,n,i){if(Ya){var r=Pu(t,e,n,i);if(r===null)tu(t,e,i,qa,n),lp(t,i);else if(iy(r,t,e,n,i))i.stopPropagation();else if(lp(t,i),e&4&&-1<ny.indexOf(t)){for(;r!==null;){var s=Uo(r);if(s!==null&&Rm(s),s=Pu(t,e,n,i),s===null&&tu(t,e,i,qa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(t,e,i,null,n)}}var qa=null;function Pu(t,e,n,i){if(qa=null,t=uh(i),t=dr(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function Dm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q_()){case hh:return 1;case Tm:return 4;case Wa:case Z_:return 16;case Am:return 536870912;default:return 16}default:return 16}}var Ri=null,mh=null,Ia=null;function Um(){if(Ia)return Ia;var t,e=mh,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ia=r.slice(t,1<i?1-i:void 0)}function Na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function up(){return!1}function fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:up,this.isPropagationStopped=up,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gh=fn(fs),Do=dt({},fs,{view:0,detail:0}),ay=fn(Do),$c,Jc,js,dl=dt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?($c=t.screenX-js.screenX,Jc=t.screenY-js.screenY):Jc=$c=0,js=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),hp=fn(dl),ly=dt({},dl,{dataTransfer:0}),cy=fn(ly),uy=dt({},Do,{relatedTarget:0}),jc=fn(uy),hy=dt({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),dy=fn(hy),fy=dt({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=fn(fy),my=dt({},fs,{data:0}),dp=fn(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_y[t])?!!e[t]:!1}function vh(){return yy}var xy=dt({},Do,{key:function(t){if(t.key){var e=gy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vh,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sy=fn(xy),My=dt({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=fn(My),wy=dt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vh}),Ey=fn(wy),Ty=dt({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=fn(Ty),by=dt({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=fn(by),Ry=[9,13,27,32],_h=oi&&"CompositionEvent"in window,lo=null;oi&&"documentMode"in document&&(lo=document.documentMode);var Py=oi&&"TextEvent"in window&&!lo,Om=oi&&(!_h||lo&&8<lo&&11>=lo),pp=" ",mp=!1;function Fm(t,e){switch(t){case"keyup":return Ry.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Ly(t,e){switch(t){case"compositionend":return km(e);case"keypress":return e.which!==32?null:(mp=!0,pp);case"textInput":return t=e.data,t===pp&&mp?null:t;default:return null}}function Iy(t,e){if(Wr)return t==="compositionend"||!_h&&Fm(t,e)?(t=Um(),Ia=mh=Ri=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ny[t.type]:e==="textarea"}function Bm(t,e,n,i){gm(i),e=Za(e,"onChange"),0<e.length&&(n=new gh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var co=null,Mo=null;function Dy(t){Jm(t,0)}function fl(t){var e=qr(t);if(cm(e))return t}function Uy(t,e){if(t==="change")return e}var zm=!1;oi&&(oi?(xa="oninput"in document,xa||(Kc=document.createElement("div"),Kc.setAttribute("oninput","return;"),xa=typeof Kc.oninput=="function"),ya=xa):ya=!1,zm=ya&&(!document.documentMode||9<document.documentMode));var ya,xa,Kc;function vp(){co&&(co.detachEvent("onpropertychange",Vm),Mo=co=null)}function Vm(t){if(t.propertyName==="value"&&fl(Mo)){var e=[];Bm(e,Mo,t,uh(t)),xm(Dy,e)}}function Oy(t,e,n){t==="focusin"?(vp(),co=e,Mo=n,co.attachEvent("onpropertychange",Vm)):t==="focusout"&&vp()}function Fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(Mo)}function ky(t,e){if(t==="click")return fl(e)}function By(t,e){if(t==="input"||t==="change")return fl(e)}function zy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:zy;function wo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yp(t,e){var n=_p(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_p(n)}}function Hm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gm(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vy(t){var e=Gm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(i!==null&&yh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=yp(n,s);var o=yp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hy=oi&&"documentMode"in document&&11>=document.documentMode,Xr=null,Lu=null,uo=null,Iu=!1;function xp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Iu||Xr==null||Xr!==Va(i)||(i=Xr,"selectionStart"in i&&yh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uo&&wo(uo,i)||(uo=i,i=Za(Lu,"onSelect"),0<i.length&&(e=new gh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xr)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Qc={},Wm={};oi&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function pl(t){if(Qc[t])return Qc[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wm)return Qc[t]=e[n];return t}var Xm=pl("animationend"),Ym=pl("animationiteration"),qm=pl("animationstart"),Zm=pl("transitionend"),$m=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){$m.set(t,e),Mr(e,[t])}for(Ma=0;Ma<Sp.length;Ma++)wa=Sp[Ma],Mp=wa.toLowerCase(),wp=wa[0].toUpperCase()+wa.slice(1),Vi(Mp,"on"+wp);var wa,Mp,wp,Ma;Vi(Xm,"onAnimationEnd");Vi(Ym,"onAnimationIteration");Vi(qm,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(Zm,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Ep(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,G_(i,e,void 0,t),t.currentTarget=null}function Jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ep(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ep(r,a,c),s=l}}}if(Ga)throw t=bu,Ga=!1,bu=null,t}function nt(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(jm(e,t,2,!1),n.add(i))}function eu(t,e,n){var i=0;e&&(i|=4),jm(n,t,i,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[Ea]){t[Ea]=!0,rm.forEach(function(n){n!=="selectionchange"&&(Gy.has(n)||eu(n,!1,t),eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,eu("selectionchange",!1,e))}}function jm(t,e,n,i){switch(Dm(e)){case 1:var r=sy;break;case 4:r=oy;break;default:r=ph}n=r.bind(null,e,n,t),r=void 0,!Au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tu(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xm(function(){var c=s,h=uh(n),f=[];e:{var d=$m.get(t);if(d!==void 0){var g=gh,_=t;switch(t){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":g=Sy;break;case"focusin":_="focus",g=jc;break;case"focusout":_="blur",g=jc;break;case"beforeblur":case"afterblur":g=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ey;break;case Xm:case Ym:case qm:g=dy;break;case Zm:g=Ay;break;case"scroll":g=ay;break;case"wheel":g=Cy;break;case"copy":case"cut":case"paste":g=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fp}var y=(e&4)!==0,v=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,p;m!==null;){p=m;var M=p.stateNode;if(p.tag===5&&M!==null&&(p=M,u!==null&&(M=_o(m,u),M!=null&&y.push(To(m,M,p)))),v)break;m=m.return}0<y.length&&(d=new g(d,_,null,n,h),f.push({event:d,listeners:y}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Eu&&(_=n.relatedTarget||n.fromElement)&&(dr(_)||_[ai]))break e;if((g||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?dr(_):null,_!==null&&(v=wr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=hp,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=fp,M="onPointerLeave",u="onPointerEnter",m="pointer"),v=g==null?d:qr(g),p=_==null?d:qr(_),d=new y(M,m+"leave",g,n,h),d.target=v,d.relatedTarget=p,M=null,dr(h)===c&&(y=new y(u,m+"enter",_,n,h),y.target=p,y.relatedTarget=v,M=y),v=M,g&&_)t:{for(y=g,u=_,m=0,p=y;p;p=Vr(p))m++;for(p=0,M=u;M;M=Vr(M))p++;for(;0<m-p;)y=Vr(y),m--;for(;0<p-m;)u=Vr(u),p--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=Vr(y),u=Vr(u)}y=null}else y=null;g!==null&&Tp(f,d,g,y,!1),_!==null&&v!==null&&Tp(f,v,_,y,!0)}}e:{if(d=c?qr(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=Uy;else if(gp(d))if(zm)C=By;else{C=Fy;var b=Oy}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=ky);if(C&&(C=C(t,c))){Bm(f,C,n,h);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&yu(d,"number",d.value)}switch(b=c?qr(c):window,t){case"focusin":(gp(b)||b.contentEditable==="true")&&(Xr=b,Lu=c,uo=null);break;case"focusout":uo=Lu=Xr=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,xp(f,n,h);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":xp(f,n,h)}var A;if(_h)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Wr?Fm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Om&&n.locale!=="ko"&&(Wr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Wr&&(A=Um()):(Ri=h,mh="value"in Ri?Ri.value:Ri.textContent,Wr=!0)),b=Za(c,P),0<b.length&&(P=new dp(P,t,null,n,h),f.push({event:P,listeners:b}),A?P.data=A:(A=km(n),A!==null&&(P.data=A)))),(A=Py?Ly(t,n):Iy(t,n))&&(c=Za(c,"onBeforeInput"),0<c.length&&(h=new dp("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=A))}Jm(f,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(t,n),s!=null&&i.unshift(To(t,s,r)),s=_o(t,e),s!=null&&i.push(To(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_o(n,s),l!=null&&o.unshift(To(n,l,a))):r||(l=_o(n,s),l!=null&&o.push(To(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(Wy,`
`).replace(Xy,"")}function Ta(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(j(425))}function $a(){}var Nu=null,Du=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof bp!="undefined"?function(t){return bp.resolve(null).then(t).catch(Zy)}:Ou;function Zy(t){setTimeout(function(){throw t})}function nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),So(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);So(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Jn="__reactFiber$"+ps,Ao="__reactProps$"+ps,ai="__reactContainer$"+ps,Fu="__reactEvents$"+ps,$y="__reactListeners$"+ps,Jy="__reactHandles$"+ps;function dr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ai]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cp(t);t!==null;){if(n=t[Jn])return n;t=Cp(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Jn]||t[ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function ml(t){return t[Ao]||null}var ku=[],Zr=-1;function Hi(t){return{current:t}}function it(t){0>Zr||(t.current=ku[Zr],ku[Zr]=null,Zr--)}function tt(t,e){Zr++,ku[Zr]=t.current,t.current=e}var zi={},Bt=Hi(zi),en=Hi(!1),vr=zi;function as(t,e){var n=t.type.contextTypes;if(!n)return zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Ja(){it(en),it(Bt)}function Rp(t,e,n){if(Bt.current!==zi)throw Error(j(168));tt(Bt,e),tt(en,n)}function Km(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(j(108,O_(t)||"Unknown",r));return dt({},n,i)}function ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,vr=Bt.current,tt(Bt,t),tt(en,en.current),!0}function Pp(t,e,n){var i=t.stateNode;if(!i)throw Error(j(169));n?(t=Km(t,e,vr),i.__reactInternalMemoizedMergedChildContext=t,it(en),it(Bt),tt(Bt,t)):it(en),tt(en,n)}var ni=null,gl=!1,iu=!1;function Qm(t){ni===null?ni=[t]:ni.push(t)}function jy(t){gl=!0,Qm(t)}function Gi(){if(!iu&&ni!==null){iu=!0;var t=0,e=Ze;try{var n=ni;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,gl=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),Em(hh,Gi),r}finally{Ze=e,iu=!1}}return null}var $r=[],Jr=0,Ka=null,Qa=0,yn=[],xn=0,_r=null,ii=1,ri="";function ur(t,e){$r[Jr++]=Qa,$r[Jr++]=Ka,Ka=t,Qa=e}function eg(t,e,n){yn[xn++]=ii,yn[xn++]=ri,yn[xn++]=_r,_r=t;var i=ii;t=ri;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ii=1<<32-On(e)+r|n<<r|i,ri=s+t}else ii=1<<s|n<<r|i,ri=t}function xh(t){t.return!==null&&(ur(t,1),eg(t,1,0))}function Sh(t){for(;t===Ka;)Ka=$r[--Jr],$r[Jr]=null,Qa=$r[--Jr],$r[Jr]=null;for(;t===_r;)_r=yn[--xn],yn[xn]=null,ri=yn[--xn],yn[xn]=null,ii=yn[--xn],yn[xn]=null}var hn=null,un=null,st=!1,Un=null;function tg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,un=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:ii,overflow:ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,un=null,!0):!1;default:return!1}}function Bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zu(t){if(st){var e=un;if(e){var n=e;if(!Lp(t,e)){if(Bu(t))throw Error(j(418));e=Di(n.nextSibling);var i=hn;e&&Lp(t,e)?tg(i,n):(t.flags=t.flags&-4097|2,st=!1,hn=t)}}else{if(Bu(t))throw Error(j(418));t.flags=t.flags&-4097|2,st=!1,hn=t}}}function Ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Aa(t){if(t!==hn)return!1;if(!st)return Ip(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=un)){if(Bu(t))throw ng(),Error(j(418));for(;e;)tg(t,e),e=Di(e.nextSibling)}if(Ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=hn?Di(t.stateNode.nextSibling):null;return!0}function ng(){for(var t=un;t;)t=Di(t.nextSibling)}function ls(){un=hn=null,st=!1}function Mh(t){Un===null?Un=[t]:Un.push(t)}var Ky=ui.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var i=n.stateNode}if(!i)throw Error(j(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Np(t){var e=t._init;return e(t._payload)}function ig(t){function e(u,m){if(t){var p=u.deletions;p===null?(u.deletions=[m],u.flags|=16):p.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=ki(u,m),u.index=0,u.sibling=null,u}function s(u,m,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<m?(u.flags|=2,m):p):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,p,M){return m===null||m.tag!==6?(m=uu(p,u.mode,M),m.return=u,m):(m=r(m,p),m.return=u,m)}function l(u,m,p,M){var C=p.type;return C===Gr?h(u,m,p.props.children,M,p.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ti&&Np(C)===m.type)?(M=r(m,p.props),M.ref=Ks(u,m,p),M.return=u,M):(M=za(p.type,p.key,p.props,null,u.mode,M),M.ref=Ks(u,m,p),M.return=u,M)}function c(u,m,p,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=hu(p,u.mode,M),m.return=u,m):(m=r(m,p.children||[]),m.return=u,m)}function h(u,m,p,M,C){return m===null||m.tag!==7?(m=gr(p,u.mode,M,C),m.return=u,m):(m=r(m,p),m.return=u,m)}function f(u,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=uu(""+m,u.mode,p),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case da:return p=za(m.type,m.key,m.props,null,u.mode,p),p.ref=Ks(u,null,m),p.return=u,p;case Hr:return m=hu(m,u.mode,p),m.return=u,m;case Ti:var M=m._init;return f(u,M(m._payload),p)}if(io(m)||Zs(m))return m=gr(m,u.mode,p,null),m.return=u,m;ba(u,m)}return null}function d(u,m,p,M){var C=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(u,m,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case da:return p.key===C?l(u,m,p,M):null;case Hr:return p.key===C?c(u,m,p,M):null;case Ti:return C=p._init,d(u,m,C(p._payload),M)}if(io(p)||Zs(p))return C!==null?null:h(u,m,p,M,null);ba(u,p)}return null}function g(u,m,p,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(p)||null,a(m,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case da:return u=u.get(M.key===null?p:M.key)||null,l(m,u,M,C);case Hr:return u=u.get(M.key===null?p:M.key)||null,c(m,u,M,C);case Ti:var b=M._init;return g(u,m,p,b(M._payload),C)}if(io(M)||Zs(M))return u=u.get(p)||null,h(m,u,M,C,null);ba(m,M)}return null}function _(u,m,p,M){for(var C=null,b=null,A=m,P=m=0,x=null;A!==null&&P<p.length;P++){A.index>P?(x=A,A=null):x=A.sibling;var w=d(u,A,p[P],M);if(w===null){A===null&&(A=x);break}t&&A&&w.alternate===null&&e(u,A),m=s(w,m,P),b===null?C=w:b.sibling=w,b=w,A=x}if(P===p.length)return n(u,A),st&&ur(u,P),C;if(A===null){for(;P<p.length;P++)A=f(u,p[P],M),A!==null&&(m=s(A,m,P),b===null?C=A:b.sibling=A,b=A);return st&&ur(u,P),C}for(A=i(u,A);P<p.length;P++)x=g(A,u,P,p[P],M),x!==null&&(t&&x.alternate!==null&&A.delete(x.key===null?P:x.key),m=s(x,m,P),b===null?C=x:b.sibling=x,b=x);return t&&A.forEach(function(U){return e(u,U)}),st&&ur(u,P),C}function y(u,m,p,M){var C=Zs(p);if(typeof C!="function")throw Error(j(150));if(p=C.call(p),p==null)throw Error(j(151));for(var b=C=null,A=m,P=m=0,x=null,w=p.next();A!==null&&!w.done;P++,w=p.next()){A.index>P?(x=A,A=null):x=A.sibling;var U=d(u,A,w.value,M);if(U===null){A===null&&(A=x);break}t&&A&&U.alternate===null&&e(u,A),m=s(U,m,P),b===null?C=U:b.sibling=U,b=U,A=x}if(w.done)return n(u,A),st&&ur(u,P),C;if(A===null){for(;!w.done;P++,w=p.next())w=f(u,w.value,M),w!==null&&(m=s(w,m,P),b===null?C=w:b.sibling=w,b=w);return st&&ur(u,P),C}for(A=i(u,A);!w.done;P++,w=p.next())w=g(A,u,P,w.value,M),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?P:w.key),m=s(w,m,P),b===null?C=w:b.sibling=w,b=w);return t&&A.forEach(function(Y){return e(u,Y)}),st&&ur(u,P),C}function v(u,m,p,M){if(typeof p=="object"&&p!==null&&p.type===Gr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case da:e:{for(var C=p.key,b=m;b!==null;){if(b.key===C){if(C=p.type,C===Gr){if(b.tag===7){n(u,b.sibling),m=r(b,p.props.children),m.return=u,u=m;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ti&&Np(C)===b.type){n(u,b.sibling),m=r(b,p.props),m.ref=Ks(u,b,p),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}p.type===Gr?(m=gr(p.props.children,u.mode,M,p.key),m.return=u,u=m):(M=za(p.type,p.key,p.props,null,u.mode,M),M.ref=Ks(u,m,p),M.return=u,u=M)}return o(u);case Hr:e:{for(b=p.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(u,m.sibling),m=r(m,p.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=hu(p,u.mode,M),m.return=u,u=m}return o(u);case Ti:return b=p._init,v(u,m,b(p._payload),M)}if(io(p))return _(u,m,p,M);if(Zs(p))return y(u,m,p,M);ba(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,p),m.return=u,u=m):(n(u,m),m=uu(p,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return v}var cs=ig(!0),rg=ig(!1),el=Hi(null),tl=null,jr=null,wh=null;function Eh(){wh=jr=tl=null}function Th(t){var e=el.current;it(el),t._currentValue=e}function Vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){tl=t,wh=jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},jr===null){if(tl===null)throw Error(j(308));jr=t,tl.dependencies={lanes:0,firstContext:t}}else jr=jr.next=t;return e}var fr=null;function Ah(t){fr===null?fr=[t]:fr.push(t)}function sg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ah(e)):(n.next=r.next,r.next=n),e.interleaved=n,li(t,i)}function li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Xe&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,li(t,n)}return r=i.interleaved,r===null?(e.next=e,Ah(i)):(e.next=r.next,r.next=e),i.interleaved=e,li(t,n)}function Da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}function Dp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(g,f,d):_,d==null)break e;f=dt({},f,d);break e;case 2:Ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xr|=o,t.lanes=o,t.memoizedState=f}}function Up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(j(191,r));r.call(i)}}}var Oo={},Kn=Hi(Oo),bo=Hi(Oo),Co=Hi(Oo);function pr(t){if(t===Oo)throw Error(j(174));return t}function Ch(t,e){switch(tt(Co,e),tt(bo,t),tt(Kn,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Su(e,t)}it(Kn),tt(Kn,e)}function us(){it(Kn),it(bo),it(Co)}function ag(t){pr(Co.current);var e=pr(Kn.current),n=Su(e,t.type);e!==n&&(tt(bo,t),tt(Kn,n))}function Rh(t){bo.current===t&&(it(Kn),it(bo))}var ut=Hi(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function Ph(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var Ua=ui.ReactCurrentDispatcher,su=ui.ReactCurrentBatchConfig,yr=0,ht=null,xt=null,bt=null,rl=!1,ho=!1,Ro=0,Qy=0;function Ot(){throw Error(j(321))}function Lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Ih(t,e,n,i,r,s){if(yr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?ix:rx,t=n(i,r),ho){s=0;do{if(ho=!1,Ro=0,25<=s)throw Error(j(301));s+=1,bt=xt=null,e.updateQueue=null,Ua.current=sx,t=n(i,r)}while(ho)}if(Ua.current=sl,e=xt!==null&&xt.next!==null,yr=0,bt=xt=ht=null,rl=!1,e)throw Error(j(300));return t}function Nh(){var t=Ro!==0;return Ro=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ht.memoizedState=bt=t:bt=bt.next=t,bt}function En(){if(xt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=bt===null?ht.memoizedState:bt.next;if(e!==null)bt=e,xt=t;else{if(t===null)throw Error(j(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},bt===null?ht.memoizedState=bt=t:bt=bt.next=t}return bt}function Po(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=En(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var i=xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((yr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ht.lanes|=h,xr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function au(t){var e=En(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function lg(){}function cg(t,e){var n=ht,i=En(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Dh(dg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Lo(9,hg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(j(349));(yr&30)!==0||ug(n,e,r)}return r}function ug(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hg(t,e,n,i){e.value=n,e.getSnapshot=i,fg(e)&&pg(t)}function dg(t,e,n){return n(function(){fg(e)&&pg(t)})}function fg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function pg(t){var e=li(t,1);e!==null&&Fn(e,t,1,-1)}function Op(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=nx.bind(null,ht,t),[e.memoizedState,t]}function Lo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function mg(){return En().memoizedState}function Oa(t,e,n,i){var r=$n();ht.flags|=t,r.memoizedState=Lo(1|e,n,void 0,i===void 0?null:i)}function vl(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(xt!==null){var o=xt.memoizedState;if(s=o.destroy,i!==null&&Lh(i,o.deps)){r.memoizedState=Lo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Lo(1|e,n,s,i)}function Fp(t,e){return Oa(8390656,8,t,e)}function Dh(t,e){return vl(2048,8,t,e)}function gg(t,e){return vl(4,2,t,e)}function vg(t,e){return vl(4,4,t,e)}function _g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yg(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,_g.bind(null,e,t),n)}function Uh(){}function xg(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sg(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Mg(t,e,n){return(yr&21)===0?(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n):(kn(n,e)||(n=bm(),ht.lanes|=n,xr|=n,t.baseState=!0),e)}function ex(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=su.transition;su.transition={};try{t(!1),e()}finally{Ze=n,su.transition=i}}function wg(){return En().memoizedState}function tx(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Eg(t))Tg(e,n);else if(n=sg(t,e,n,i),n!==null){var r=Zt();Fn(n,t,i,r),Ag(n,e,i)}}function nx(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eg(t))Tg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Ah(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}n=sg(t,e,r,i),n!==null&&(r=Zt(),Fn(n,t,i,r),Ag(n,e,i))}}function Eg(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Tg(t,e){ho=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ag(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dh(t,n)}}var sl={readContext:wn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},ix={readContext:wn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,_g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tx.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Op,useDebugValue:Uh,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Op(!1),e=t[0];return t=ex.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=$n();if(st){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ct===null)throw Error(j(349));(yr&30)!==0||ug(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Fp(dg.bind(null,i,s,t),[t]),i.flags|=2048,Lo(9,hg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=Ct.identifierPrefix;if(st){var n=ri,i=ii;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rx={readContext:wn,useCallback:xg,useContext:wn,useEffect:Dh,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:vg,useMemo:Sg,useReducer:ou,useRef:mg,useState:function(){return ou(Po)},useDebugValue:Uh,useDeferredValue:function(t){var e=En();return Mg(e,xt.memoizedState,t)},useTransition:function(){var t=ou(Po)[0],e=En().memoizedState;return[t,e]},useMutableSource:lg,useSyncExternalStore:cg,useId:wg,unstable_isNewReconciler:!1},sx={readContext:wn,useCallback:xg,useContext:wn,useEffect:Dh,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:vg,useMemo:Sg,useReducer:au,useRef:mg,useState:function(){return au(Po)},useDebugValue:Uh,useDeferredValue:function(t){var e=En();return xt===null?e.memoizedState=t:Mg(e,xt.memoizedState,t)},useTransition:function(){var t=au(Po)[0],e=En().memoizedState;return[t,e]},useMutableSource:lg,useSyncExternalStore:cg,useId:wg,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Fi(t),s=si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Fn(e,t,r,i),Da(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Fi(t),s=si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Fn(e,t,r,i),Da(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Fi(t),r=si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Fn(e,t,i,n),Da(e,t,i))}};function kp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,i)||!wo(r,s):!0}function bg(t,e,n){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=tn(e)?vr:Bt.current,i=e.contextTypes,s=(i=i!=null)?as(t,r):zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function Gu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=tn(e)?vr:Bt.current,r.context=as(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_l.enqueueReplaceState(r,r.state,null),nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e){try{var n="",i=e;do n+=U_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Wu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ox=typeof WeakMap=="function"?WeakMap:Map;function Cg(t,e,n){n=si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){al||(al=!0,eh=i),Wu(t,e)},n}function Rg(t,e,n){n=si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wu(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ox;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=xx.bind(null,t,e,n),e.then(t,t))}function Vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hp(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=si(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var ax=ui.ReactCurrentOwner,Qt=!1;function qt(t,e,n,i){e.child=t===null?rg(e,null,n,i):cs(e,t.child,n,i)}function Gp(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=Ih(t,e,n,i,s,r),n=Nh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(st&&n&&xh(e),e.flags|=1,qt(t,e,i,r),e.child)}function Wp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pg(t,e,s,i,r)):(t=za(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,i)&&t.ref===e.ref)return ci(t,e,r)}return e.flags|=1,t=ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function Pg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wo(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,ci(t,e,r)}return Xu(t,e,n,i,r)}function Lg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Qr,cn),cn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Qr,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(Qr,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(Qr,cn),cn|=i;return qt(t,e,r,n),e.child}function Ig(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,i,r){var s=tn(n)?vr:Bt.current;return s=as(e,s),rs(e,r),n=Ih(t,e,n,i,s,r),i=Nh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(st&&i&&xh(e),e.flags|=1,qt(t,e,n,r),e.child)}function Xp(t,e,n,i,r){if(tn(n)){var s=!0;ja(e)}else s=!1;if(rs(e,r),e.stateNode===null)Fa(t,e),bg(e,n,i),Gu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=tn(n)?vr:Bt.current,c=as(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bp(e,o,i,c),Ai=!1;var d=e.memoizedState;o.state=d,nl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||en.current||Ai?(typeof h=="function"&&(Hu(e,n,h,i),l=e.memoizedState),(a=Ai||kp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,og(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=tn(n)?vr:Bt.current,l=as(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Bp(e,o,i,l),Ai=!1,d=e.memoizedState,o.state=d,nl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||en.current||Ai?(typeof g=="function"&&(Hu(e,n,g,i),_=e.memoizedState),(c=Ai||kp(e,n,c,i,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Yu(t,e,n,i,s,r)}function Yu(t,e,n,i,r,s){Ig(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pp(e,n,!1),ci(t,e,s);i=e.stateNode,ax.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Pp(e,n,!0),e.child}function Ng(t){var e=t.stateNode;e.pendingContext?Rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rp(t,e.context,!1),Ch(t,e.containerInfo)}function Yp(t,e,n,i,r){return ls(),Mh(r),e.flags|=256,qt(t,e,n,i),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dg(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ut,r&1),t===null)return zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,i,0,null),t=gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zu(n),e.memoizedState=qu,t):Oh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Zu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qu,i}return s=t.child,t=s.sibling,i=ki(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Oh(t,e){return e=Sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,i){return i!==null&&Mh(i),cs(e,t.child,null,n),t=Oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lu(Error(j(422))),Ca(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sl({mode:"visible",children:i.children},r,0,null),s=gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&cs(e,t.child,null,o),e.child.memoizedState=Zu(o),e.memoizedState=qu,s);if((e.mode&1)===0)return Ca(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(j(419)),i=lu(s,i,void 0),Ca(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,li(t,r),Fn(i,t,r,-1))}return Hh(),i=lu(Error(j(421))),Ca(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Sx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Di(r.nextSibling),hn=e,st=!0,Un=null,t!==null&&(yn[xn++]=ii,yn[xn++]=ri,yn[xn++]=_r,ii=t.id,ri=t.overflow,_r=e),e=Oh(e,i.children),e.flags|=4096,e)}function qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vu(t.return,e,n)}function cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ug(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=ut.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,n,e);else if(t.tag===19)qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cu(e,!0,n,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fa(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cx(t,e,n){switch(e.tag){case 3:Ng(e),ls();break;case 5:ag(e);break;case 1:tn(e.type)&&ja(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Dg(t,e,n):(tt(ut,ut.current&1),t=ci(t,e,n),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Ug(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Lg(t,e,n)}return ci(t,e,n)}var Og,$u,Fg,kg;Og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};Fg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Kn.current);var s=null;switch(n){case"input":r=vu(t,r),i=vu(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$a)}Mu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};kg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ux(t,e,n){var i=e.pendingProps;switch(Sh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&Ja(),Ft(e),null;case 3:return i=e.stateNode,us(),it(en),it(Bt),Ph(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Un!==null&&(ih(Un),Un=null))),$u(t,e),Ft(e),null;case 5:Rh(e);var r=pr(Co.current);if(n=e.type,t!==null&&e.stateNode!=null)Fg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(j(166));return Ft(e),null}if(t=pr(Kn.current),Aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<so.length;r++)nt(so[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":tp(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":ip(i,s),nt("invalid",i)}Mu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":fa(i),np(i,s,!0);break;case"textarea":fa(i),rp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$a)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Ao]=i,Og(t,e,!1,!1),e.stateNode=t;e:{switch(o=wu(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<so.length;r++)nt(so[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":tp(t,i),r=vu(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),nt("invalid",t);break;case"textarea":ip(t,i),r=xu(t,i),nt("invalid",t);break;default:r=i}Mu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&oh(t,s,l,o))}switch(n){case"input":fa(t),np(t,i,!1);break;case"textarea":fa(t),rp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Bi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$a)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)kg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(j(166));if(n=pr(Co.current),pr(Kn.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Ft(e),null;case 13:if(it(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&un!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ng(),ls(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Jn]=e}else ls(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Un!==null&&(ih(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ut.current&1)!==0?St===0&&(St=3):Hh())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return us(),$u(t,e),t===null&&Eo(e.stateNode.containerInfo),Ft(e),null;case 10:return Th(e.type._context),Ft(e),null;case 17:return tn(e.type)&&Ja(),Ft(e),null;case 19:if(it(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qs(s,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=il(t),o!==null){for(e.flags|=128,Qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>ds&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=il(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return Ft(e),null}else 2*vt()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,tt(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Vh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(cn&1073741824)!==0&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function hx(t,e){switch(Sh(e),e.tag){case 1:return tn(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),it(en),it(Bt),Ph(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Rh(e),null;case 13:if(it(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(ut),null;case 4:return us(),null;case 10:return Th(e.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Ra=!1,kt=!1,dx=typeof WeakSet=="function"?WeakSet:Set,he=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Ju(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Zp=!1;function fx(t,e){if(Nu=Ya,t=Gm(),yh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},Ya=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,v=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),v);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(M){mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=Zp,Zp=!1,_}function fo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ju(e,n,s)}r=r.next}while(r!==i)}}function yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;t.tag,t=n,typeof e=="function"?e(t):e.current=t}}function Bg(t){var e=t.alternate;e!==null&&(t.alternate=null,Bg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Ao],delete e[Fu],delete e[$y],delete e[Jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zg(t){return t.tag===5||t.tag===3||t.tag===4}function $p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$a));else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Pt=null,Dn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)Vg(t,e,n),n=n.sibling}function Vg(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:kt||Kr(n,e);case 6:var i=Pt,r=Dn;Pt=null,Ei(t,e,n),Pt=i,Dn=r,Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?nu(t.parentNode,n):t.nodeType===1&&nu(t,n),So(t)):nu(Pt,n.stateNode));break;case 4:i=Pt,r=Dn,Pt=n.stateNode.containerInfo,Dn=!0,Ei(t,e,n),Pt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Ju(n,e,o),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!kt&&(Kr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,Ei(t,e,n),kt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function Jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dx),e.forEach(function(i){var r=Mx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Dn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Dn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Pt===null)throw Error(j(160));Vg(s,o,r),Pt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hg(e,t),e=e.sibling}function Hg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Zn(t),i&4){try{fo(3,t,t.return),yl(3,t)}catch(y){mt(t,t.return,y)}try{fo(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:In(e,t),Zn(t),i&512&&n!==null&&Kr(n,n.return);break;case 5:if(In(e,t),Zn(t),i&512&&n!==null&&Kr(n,n.return),t.flags&32){var r=t.stateNode;try{vo(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&um(r,s),wu(a,o);var c=wu(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?mm(r,f):h==="dangerouslySetInnerHTML"?fm(r,f):h==="children"?vo(r,f):oh(r,h,f,c)}switch(a){case"input":_u(r,s);break;case"textarea":hm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?es(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ao]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(In(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(j(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(In(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:In(e,t),Zn(t);break;case 13:In(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bh=vt())),i&4&&Jp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||h,In(e,t),kt=c):In(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&(t.mode&1)!==0)for(he=t,h=t.child;h!==null;){for(f=he=h;he!==null;){switch(d=he,g=d.child,d.tag){case 0:case 11:case 14:case 15:fo(4,d,d.return);break;case 1:Kr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:Kr(d,d.return);break;case 22:if(d.memoizedState!==null){Kp(f);continue}}g!==null?(g.return=d,he=g):Kp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pm("display",o))}catch(y){mt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),Zn(t),i&4&&Jp(t);break;case 21:break;default:In(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zg(n)){var i=n;break e}n=n.return}throw Error(j(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vo(r,""),i.flags&=-33);var s=$p(t);Qu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$p(t);Ku(t,a,o);break;default:throw Error(j(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function px(t,e,n){he=t,Gg(t,e,n)}function Gg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ra;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Ra;var c=kt;if(Ra=o,(kt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Qp(r):l!==null?(l.return=o,he=l):Qp(r);for(;s!==null;)he=s,Gg(s,e,n),s=s.sibling;he=r,Ra=a,kt=c}jp(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,he=s):jp(t,e,n)}}function jp(t){for(;he!==null;){var e=he;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:kt||yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Up(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Up(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&So(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}kt||e.flags&512&&ju(e)}catch(d){mt(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Kp(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Qp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{ju(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{ju(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var mx=Math.ceil,ol=ui.ReactCurrentDispatcher,Fh=ui.ReactCurrentOwner,Mn=ui.ReactCurrentBatchConfig,Xe=0,Ct=null,_t=null,Lt=0,cn=0,Qr=Hi(0),St=0,Io=null,xr=0,xl=0,kh=0,po=null,Kt=null,Bh=0,ds=1/0,ti=null,al=!1,eh=null,Oi=null,Pa=!1,Pi=null,ll=0,mo=0,th=null,ka=-1,Ba=0;function Zt(){return(Xe&6)!==0?vt():ka!==-1?ka:ka=vt()}function Fi(t){return(t.mode&1)===0?1:(Xe&2)!==0&&Lt!==0?Lt&-Lt:Ky.transition!==null?(Ba===0&&(Ba=bm()),Ba):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Dm(t.type)),t)}function Fn(t,e,n,i){if(50<mo)throw mo=0,th=null,Error(j(185));No(t,n,i),((Xe&2)===0||t!==Ct)&&(t===Ct&&((Xe&2)===0&&(xl|=n),St===4&&Ci(t,Lt)),nn(t,i),n===1&&Xe===0&&(e.mode&1)===0&&(ds=vt()+500,gl&&Gi()))}function nn(t,e){var n=t.callbackNode;ey(t,e);var i=Xa(t,t===Ct?Lt:0);if(i===0)n!==null&&ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ap(n),e===1)t.tag===0?jy(em.bind(null,t)):Qm(em.bind(null,t)),qy(function(){(Xe&6)===0&&Gi()}),n=null;else{switch(Cm(i)){case 1:n=hh;break;case 4:n=Tm;break;case 16:n=Wa;break;case 536870912:n=Am;break;default:n=Wa}n=jg(n,Wg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wg(t,e){if(ka=-1,Ba=0,(Xe&6)!==0)throw Error(j(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Xa(t,t===Ct?Lt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=cl(t,i);else{e=i;var r=Xe;Xe|=2;var s=Yg();(Ct!==t||Lt!==e)&&(ti=null,ds=vt()+500,mr(t,e));do try{_x();break}catch(a){Xg(t,a)}while(!0);Eh(),ol.current=s,Xe=r,_t!==null?e=0:(Ct=null,Lt=0,e=St)}if(e!==0){if(e===2&&(r=Cu(t),r!==0&&(i=r,e=nh(t,r))),e===1)throw n=Io,mr(t,0),Ci(t,i),nn(t,vt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,(i&30)===0&&!gx(r)&&(e=cl(t,i),e===2&&(s=Cu(t),s!==0&&(i=s,e=nh(t,s))),e===1))throw n=Io,mr(t,0),Ci(t,i),nn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(j(345));case 2:hr(t,Kt,ti);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Bh+500-vt(),10<e)){if(Xa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ou(hr.bind(null,t,Kt,ti),e);break}hr(t,Kt,ti);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mx(i/1960))-i,10<i){t.timeoutHandle=Ou(hr.bind(null,t,Kt,ti),i);break}hr(t,Kt,ti);break;case 5:hr(t,Kt,ti);break;default:throw Error(j(329))}}}return nn(t,vt()),t.callbackNode===n?Wg.bind(null,t):null}function nh(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&ih(e)),t}function ih(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function gx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~kh,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function em(t){if((Xe&6)!==0)throw Error(j(327));ss();var e=Xa(t,0);if((e&1)===0)return nn(t,vt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=Cu(t);i!==0&&(e=i,n=nh(t,i))}if(n===1)throw n=Io,mr(t,0),Ci(t,e),nn(t,vt()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,Kt,ti),nn(t,vt()),null}function zh(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(ds=vt()+500,gl&&Gi())}}function Sr(t){Pi!==null&&Pi.tag===0&&(Xe&6)===0&&ss();var e=Xe;Xe|=1;var n=Mn.transition,i=Ze;try{if(Mn.transition=null,Ze=1,t)return t()}finally{Ze=i,Mn.transition=n,Xe=e,(Xe&6)===0&&Gi()}}function Vh(){cn=Qr.current,it(Qr)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yy(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(Sh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ja();break;case 3:us(),it(en),it(Bt),Ph();break;case 5:Rh(i);break;case 4:us();break;case 13:it(ut);break;case 19:it(ut);break;case 10:Th(i.type._context);break;case 22:case 23:Vh()}n=n.return}if(Ct=t,_t=t=ki(t.current,null),Lt=cn=e,St=0,Io=null,kh=xl=xr=0,Kt=po=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}fr=null}return t}function Xg(t,e){do{var n=_t;try{if(Eh(),Ua.current=sl,rl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(yr=0,bt=xt=ht=null,ho=!1,Ro=0,Fh.current=null,n===null||n.return===null){St=1,Io=e,_t=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if((h.mode&1)===0&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Vp(o);if(g!==null){g.flags&=-257,Hp(g,o,a,s,e),g.mode&1&&zp(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if((e&1)===0){zp(s,c,e),Hh();break e}l=Error(j(426))}}else if(st&&a.mode&1){var v=Vp(o);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Hp(v,o,a,s,e),Mh(hs(l,a));break e}}s=l=hs(l,a),St!==4&&(St=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Cg(s,l,e);Dp(s,u);break e;case 1:a=l;var m=s.type,p=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Oi===null||!Oi.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Rg(s,a,e);Dp(s,M);break e}}s=s.return}while(s!==null)}Zg(n)}catch(C){e=C,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Yg(){var t=ol.current;return ol.current=sl,t===null?sl:t}function Hh(){(St===0||St===3||St===2)&&(St=4),Ct===null||(xr&268435455)===0&&(xl&268435455)===0||Ci(Ct,Lt)}function cl(t,e){var n=Xe;Xe|=2;var i=Yg();(Ct!==t||Lt!==e)&&(ti=null,mr(t,e));do try{vx();break}catch(r){Xg(t,r)}while(!0);if(Eh(),Xe=n,ol.current=i,_t!==null)throw Error(j(261));return Ct=null,Lt=0,St}function vx(){for(;_t!==null;)qg(_t)}function _x(){for(;_t!==null&&!X_();)qg(_t)}function qg(t){var e=Jg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Zg(t):_t=e,Fh.current=null}function Zg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=ux(n,e,cn),n!==null){_t=n;return}}else{if(n=hx(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,_t=null;return}}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);St===0&&(St=5)}function hr(t,e,n){var i=Ze,r=Mn.transition;try{Mn.transition=null,Ze=1,yx(t,e,n,i)}finally{Mn.transition=r,Ze=i}return null}function yx(t,e,n,i){do ss();while(Pi!==null);if((Xe&6)!==0)throw Error(j(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ty(t,s),t===Ct&&(_t=Ct=null,Lt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Pa||(Pa=!0,jg(Wa,function(){return ss(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Mn.transition,Mn.transition=null;var o=Ze;Ze=1;var a=Xe;Xe|=4,Fh.current=null,fx(t,n),Hg(n,t),Vy(Du),Ya=!!Nu,Du=Nu=null,t.current=n,px(n,t,r),Y_(),Xe=a,Ze=o,Mn.transition=s}else t.current=n;if(Pa&&(Pa=!1,Pi=t,ll=r),s=t.pendingLanes,s===0&&(Oi=null),$_(n.stateNode,i),nn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(al)throw al=!1,t=eh,eh=null,t;return(ll&1)!==0&&t.tag!==0&&ss(),s=t.pendingLanes,(s&1)!==0?t===th?mo++:(mo=0,th=t):mo=0,Gi(),null}function ss(){if(Pi!==null){var t=Cm(ll),e=Mn.transition,n=Ze;try{if(Mn.transition=null,Ze=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,ll=0,(Xe&6)!==0)throw Error(j(331));var r=Xe;for(Xe|=4,he=t.current;he!==null;){var s=he,o=s.child;if((he.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var h=he;switch(h.tag){case 0:case 11:case 15:fo(8,h,s)}var f=h.child;if(f!==null)f.return=h,he=f;else for(;he!==null;){h=he;var d=h.sibling,g=h.return;if(Bg(h),h===c){he=null;break}if(d!==null){d.return=g,he=d;break}he=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}he=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var m=t.current;for(he=m;he!==null;){o=he;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,he=p;else e:for(o=m;he!==null;){if(a=he,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(C){mt(a,a.return,C)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(Xe=r,Gi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(hl,t)}catch{}i=!0}return i}finally{Ze=n,Mn.transition=e}}return!1}function tm(t,e,n){e=hs(n,e),e=Cg(t,e,1),t=Ui(t,e,1),e=Zt(),t!==null&&(No(t,1,e),nn(t,e))}function mt(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=hs(n,t),t=Rg(e,t,1),e=Ui(e,t,1),t=Zt(),e!==null&&(No(e,1,t),nn(e,t));break}}e=e.return}}function xx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Lt&n)===n&&(St===4||St===3&&(Lt&130023424)===Lt&&500>vt()-Bh?mr(t,0):kh|=n),nn(t,e)}function $g(t,e){e===0&&((t.mode&1)===0?e=1:(e=ga,ga<<=1,(ga&130023424)===0&&(ga=4194304)));var n=Zt();t=li(t,e),t!==null&&(No(t,e,n),nn(t,n))}function Sx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$g(t,n)}function Mx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(j(314))}i!==null&&i.delete(e),$g(t,n)}var Jg;Jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Qt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Qt=!1,cx(t,e,n);Qt=(t.flags&131072)!==0}else Qt=!1,st&&(e.flags&1048576)!==0&&eg(e,Qa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fa(t,e),t=e.pendingProps;var r=as(e,Bt.current);rs(e,n),r=Ih(null,e,i,t,r,n);var s=Nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,ja(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=_l,e.stateNode=r,r._reactInternals=e,Gu(e,i,t,n),e=Yu(null,e,i,!0,s,n)):(e.tag=0,st&&s&&xh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ex(i),t=Nn(i,t),r){case 0:e=Xu(null,e,i,t,n);break e;case 1:e=Xp(null,e,i,t,n);break e;case 11:e=Gp(null,e,i,t,n);break e;case 14:e=Wp(null,e,i,Nn(i.type,t),n);break e}throw Error(j(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Xu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Xp(t,e,i,r,n);case 3:e:{if(Ng(e),t===null)throw Error(j(387));i=e.pendingProps,s=e.memoizedState,r=s.element,og(t,e),nl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(j(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(j(424)),e),e=Yp(t,e,i,n,r);break e}else for(un=Di(e.stateNode.containerInfo.firstChild),hn=e,st=!0,Un=null,n=rg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),i===r){e=ci(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return ag(e),t===null&&zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Uu(i,r)?o=null:s!==null&&Uu(i,s)&&(e.flags|=32),Ig(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&zu(e),null;case 13:return Dg(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=cs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Gp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(el,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!en.current){e=ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=wn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Wp(t,e,i,r,n);case 15:return Pg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Fa(t,e),e.tag=1,tn(i)?(t=!0,ja(e)):t=!1,rs(e,n),bg(e,i,r),Gu(e,i,r,n),Yu(null,e,i,!0,t,n);case 19:return Ug(t,e,n);case 22:return Lg(t,e,n)}throw Error(j(156,e.tag))};function jg(t,e){return Em(t,e)}function wx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new wx(t,e,n,i)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ex(t){if(typeof t=="function")return Gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lh)return 11;if(t===ch)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gr:return gr(n.children,r,s,e);case ah:o=8,r|=8;break;case fu:return t=Sn(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case pu:return t=Sn(13,n,e,r),t.elementType=pu,t.lanes=s,t;case mu:return t=Sn(19,n,e,r),t.elementType=mu,t.lanes=s,t;case am:return Sl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sm:o=10;break e;case om:o=9;break e;case lh:o=11;break e;case ch:o=14;break e;case Ti:o=16,i=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Sl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=am,t.lanes=n,t.stateNode={isHidden:!1},t}function uu(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function hu(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wh(t,e,n,i,r,s,o,a,l){return t=new Tx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function Ax(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Kg(t){if(!t)return zi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(tn(n))return Km(t,n,e)}return e}function Qg(t,e,n,i,r,s,o,a,l){return t=Wh(n,i,!0,t,r,s,o,a,l),t.context=Kg(null),n=t.current,i=Zt(),r=Fi(n),s=si(i,r),s.callback=e!=null?e:null,Ui(n,s,r),t.current.lanes=r,No(t,r,i),nn(t,i),t}function Ml(t,e,n,i){var r=e.current,s=Zt(),o=Fi(r);return n=Kg(n),e.context===null?e.context=n:e.pendingContext=n,e=si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(Fn(t,r,o,s),Da(t,r,o)),o}function ul(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xh(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function bx(){return null}var e0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}wl.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Ml(t,e,null,null)};wl.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){Ml(null,t,null,null)}),e[ai]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&Nm(t)}};function qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function Cx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ul(o);s.call(c)}}var o=Qg(e,i,t,0,null,!1,!1,"",im);return t._reactRootContainer=o,t[ai]=o.current,Eo(t.nodeType===8?t.parentNode:t),Sr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ul(l);a.call(c)}}var l=Wh(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=l,t[ai]=l.current,Eo(t.nodeType===8?t.parentNode:t),Sr(function(){Ml(e,l,n,i)}),l}function Tl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ul(o);a.call(l)}}Ml(e,o,t,r)}else o=Cx(n,e,t,r,i);return ul(o)}Rm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(dh(e,n|1),nn(e,vt()),(Xe&6)===0&&(ds=vt()+500,Gi()))}break;case 13:Sr(function(){var i=li(t,1);if(i!==null){var r=Zt();Fn(i,t,1,r)}}),Xh(t,1)}};fh=function(t){if(t.tag===13){var e=li(t,134217728);if(e!==null){var n=Zt();Fn(e,t,134217728,n)}Xh(t,134217728)}};Pm=function(t){if(t.tag===13){var e=Fi(t),n=li(t,e);if(n!==null){var i=Zt();Fn(n,t,e,i)}Xh(t,e)}};Lm=function(){return Ze};Im=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Tu=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ml(i);if(!r)throw Error(j(90));cm(i),_u(i,r)}}}break;case"textarea":hm(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};_m=zh;ym=Sr;var Rx={usingClientEntryPoint:!1,Events:[Uo,qr,ml,gm,vm,zh]},eo={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mm(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(to=__REACT_DEVTOOLS_GLOBAL_HOOK__,!to.isDisabled&&to.supportsFiber))try{hl=to.inject(Px),jn=to}catch{}var to;pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(e))throw Error(j(200));return Ax(t,e,null,n)};pn.createRoot=function(t,e){if(!qh(t))throw Error(j(299));var n=!1,i="",r=e0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wh(t,1,!1,null,null,n,!1,i,r),t[ai]=e.current,Eo(t.nodeType===8?t.parentNode:t),new Yh(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Mm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Sr(t)};pn.hydrate=function(t,e,n){if(!El(e))throw Error(j(200));return Tl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!qh(t))throw Error(j(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=e0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qg(e,null,t,1,n!=null?n:null,r,!1,s,o),t[ai]=e.current,Eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wl(e)};pn.render=function(t,e,n){if(!El(e))throw Error(j(200));return Tl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!El(t))throw Error(j(40));return t._reactRootContainer?(Sr(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[ai]=null})}),!0):!1};pn.unstable_batchedUpdates=zh;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!El(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Tl(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426"});var r0=lr(($T,i0)=>{"use strict";function n0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0)}catch(t){console.error(t)}}n0(),i0.exports=t0()});var o0=lr(Zh=>{"use strict";var s0=r0();Zh.createRoot=s0.createRoot,Zh.hydrateRoot=s0.hydrateRoot;var JT});var I=Af(Dc()),n_=Af(o0());var Lx=0,a0=1,Ix=2;var Nv=1,Nx=2,gi=3,tr=0,an=1,_i=2;var Ki=0,Ds=1,l0=2,c0=3,u0=4,Dx=5,Rr=100,Ux=101,Ox=102,h0=103,d0=104,Fx=200,kx=201,Bx=202,zx=203,Cd=204,Rd=205,Vx=206,Hx=207,Gx=208,Wx=209,Xx=210,Yx=211,qx=212,Zx=213,$x=214,Jx=0,jx=1,Kx=2,$l=3,Qx=4,eS=5,tS=6,nS=7,Dv=0,iS=1,rS=2,Qi=0,sS=1,oS=2,aS=3,lS=4,cS=5,uS=6;var Uv=300,Fs=301,ks=302,Pd=303,Ld=304,Mc=306,Id=1e3,Hn=1001,Nd=1002,jt=1003,f0=1004;var $h=1005;var An=1006,hS=1007;var Xo=1008;var er=1009,dS=1010,fS=1011,pf=1012,Ov=1013,$i=1014,Ji=1015,Yo=1016,Fv=1017,kv=1018,Lr=1020,pS=1021,Gn=1023,mS=1024,gS=1025,Ir=1026,Bs=1027,vS=1028,Bv=1029,_S=1030,zv=1031,Vv=1033,Jh=33776,jh=33777,Kh=33778,Qh=33779,p0=35840,m0=35841,g0=35842,v0=35843,Hv=36196,_0=37492,y0=37496,x0=37808,S0=37809,M0=37810,w0=37811,E0=37812,T0=37813,A0=37814,b0=37815,C0=37816,R0=37817,P0=37818,L0=37819,I0=37820,N0=37821,ed=36492,D0=36494,U0=36495,yS=36283,O0=36284,F0=36285,k0=36286;var Jl=2300,jl=2301,td=2302,B0=2400,z0=2401,V0=2402;var Gv=3e3,Nr=3001,xS=3200,SS=3201,Wv=0,MS=1,bn="",Nt="srgb",xi="srgb-linear",mf="display-p3",wc="display-p3-linear",Kl="linear",rt="srgb",Ql="rec709",ec="p3";var ms=7680;var H0=519,wS=512,ES=513,TS=514,Xv=515,AS=516,bS=517,CS=518,RS=519,G0=35044;var W0="300 es",Dd=1035,yi=2e3,tc=2001,nr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nd=Math.PI/180,Ud=180/Math.PI;function ea(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function PS(t,e){return(t%e+e)%e}function id(t,e,n){return(1-n)*t+n*e}function X0(t){return(t&t-1)===0&&t!==0}function Od(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Ge=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],g=i[5],_=i[8],y=r[0],v=r[3],u=r[6],m=r[1],p=r[4],M=r[7],C=r[2],b=r[5],A=r[8];return s[0]=o*y+a*m+l*C,s[3]=o*v+a*p+l*b,s[6]=o*u+a*M+l*A,s[1]=c*y+h*m+f*C,s[4]=c*v+h*p+f*b,s[7]=c*u+h*M+f*A,s[2]=d*y+g*m+_*C,s[5]=d*v+g*p+_*b,s[8]=d*u+g*M+_*A,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,g=c*s-o*l,_=n*f+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(rd.makeScale(e,n)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rd=new ze;function Yv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LS(){let t=nc("canvas");return t.style.display="block",t}var Y0={};function Go(t){t in Y0||(Y0[t]=!0,console.warn(t))}var q0=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Z0=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Al={[xi]:{transfer:Kl,primaries:Ql,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:rt,primaries:Ql,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wc]:{transfer:Kl,primaries:ec,toReference:t=>t.applyMatrix3(Z0),fromReference:t=>t.applyMatrix3(q0)},[mf]:{transfer:rt,primaries:ec,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Z0),fromReference:t=>t.applyMatrix3(q0).convertLinearToSRGB()}},IS=new Set([xi,wc]),Je={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!IS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=Al[e].toReference,r=Al[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Al[t].primaries},getTransfer:function(t){return t===bn?Kl:Al[t].transfer}};function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function sd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var gs,ic=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=nc("canvas")),gs.width=e.width,gs.height=e.height;let i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let n=nc("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},NS=0,rc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=ea(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(od(r[o].image)):s.push(od(r[o]))}else s=od(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function od(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?ic.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var DS=0,Wn=class t extends nr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Hn,r=Hn,s=An,o=Xo,a=Gn,l=er,c=t.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ea(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Nr?Nt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Nr:Gv}set encoding(e){Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?Nt:bn}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Uv;Wn.DEFAULT_ANISOTROPY=1;var at=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],g=l[5],_=l[9],y=l[2],v=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+v)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let p=(c+1)/2,M=(g+1)/2,C=(u+1)/2,b=(h+d)/4,A=(f+y)/4,P=(_+v)/4;return p>M&&p>C?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=b/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-_)*(v-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(v-_)/m,this.y=(f-y)/m,this.z=(d-h)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fd=class extends nr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);let r={width:e,height:n,depth:1};i.encoding!==void 0&&(Go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?Nt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new rc(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Fd{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},sc=class extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kd=class extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[o+0],g=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||c!==g||h!==_){let v=1-a,u=l*d+c*g+h*_+f*y,m=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){let C=Math.sqrt(p),b=Math.atan2(C,u*m);v=Math.sin(v*b)/C,a=Math.sin(a*b)/C}let M=a*m;if(l=l*v+d*M,c=c*v+g*M,h=h*v+_*M,f=f*v+y*M,v===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+h*f+l*g-c*d,e[n+1]=l*_+h*d+c*f-a*g,e[n+2]=c*_+h*g+a*d-l*f,e[n+3]=h*_-a*f-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*g*_,this._y=c*g*f-d*h*_,this._z=c*h*_+d*g*f,this._w=c*h*f-d*g*_;break;case"YXZ":this._x=d*h*f+c*g*_,this._y=c*g*f-d*h*_,this._z=c*h*_-d*g*f,this._w=c*h*f+d*g*_;break;case"ZXY":this._x=d*h*f-c*g*_,this._y=c*g*f+d*h*_,this._z=c*h*_+d*g*f,this._w=c*h*f-d*g*_;break;case"ZYX":this._x=d*h*f-c*g*_,this._y=c*g*f+d*h*_,this._z=c*h*_-d*g*f,this._w=c*h*f+d*g*_;break;case"YZX":this._x=d*h*f+c*g*_,this._y=c*g*f+d*h*_,this._z=c*h*_-d*g*f,this._w=c*h*f-d*g*_;break;case"XZY":this._x=d*h*f-c*g*_,this._y=c*g*f-d*h*_,this._z=c*h*_+d*g*f,this._w=c*h*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){let g=2*Math.sqrt(1+i-a-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($0.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ad=new N,$0=new ir,Dr=class{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Cl.subVectors(this.max,ko),vs.subVectors(e.a,ko),_s.subVectors(e.b,ko),ys.subVectors(e.c,ko),Wi.subVectors(_s,vs),Xi.subVectors(ys,_s),Er.subVectors(vs,ys);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Er.z,Er.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Er.z,0,-Er.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Er.y,Er.x,0];return!ld(n,vs,_s,ys,Cl)||(n=[1,0,0,0,1,0,0,0,1],!ld(n,vs,_s,ys,Cl))?!1:(Rl.crossVectors(Wi,Xi),n=[Rl.x,Rl.y,Rl.z],ld(n,vs,_s,ys,Cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new N,new N,new N,new N,new N,new N,new N,new N],Bn=new N,bl=new Dr,vs=new N,_s=new N,ys=new N,Wi=new N,Xi=new N,Er=new N,ko=new N,Cl=new N,Rl=new N,Tr=new N;function ld(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);let a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),h=i.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var US=new Dr,Bo=new N,cd=new N,qo=class{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):US.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);let n=Bo.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(cd)),this.expandByPoint(Bo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new N,ud=new N,Pl=new N,Yi=new N,hd=new N,Ll=new N,dd=new N,Bd=class{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ud.copy(e).add(n).multiplyScalar(.5),Pl.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(ud);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Pl),a=Yi.dot(this.direction),l=-Yi.dot(Pl),c=Yi.lengthSq(),h=Math.abs(1-o*o),f,d,g,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){let y=1/h;f*=y,d*=y,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ud).addScaledVector(Pl,d),g}intersectSphere(e,n){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){hd.subVectors(n,e),Ll.subVectors(i,e),dd.crossVectors(hd,Ll);let o=this.direction.dot(dd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(Ll.crossVectors(Yi,Ll));if(l<0)return null;let c=a*this.direction.dot(hd.cross(Yi));if(c<0||l+c>o)return null;let h=-a*Yi.dot(dd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class t{constructor(e,n,i,r,s,o,a,l,c,h,f,d,g,_,y,v){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,g,_,y,v)}set(e,n,i,r,s,o,a,l,c,h,f,d,g,_,y,v){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=g,u[7]=_,u[11]=y,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*h,g=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*h,g=l*f,_=c*h,y=c*f;n[0]=d+y*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=g*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*h,g=l*f,_=c*h,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*h,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*h,g=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=_*c-g,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=y-d*f,n[8]=_*f+g,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*f+_,n[10]=d-y*f}else if(e.order==="XZY"){let d=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+y,n[5]=o*h,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*h,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OS,e,FS)}lookAt(e,n,i){let r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),qi.crossVectors(i,mn),qi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),qi.crossVectors(i,mn)),qi.normalize(),Il.crossVectors(mn,qi),r[0]=qi.x,r[4]=Il.x,r[8]=mn.x,r[1]=qi.y,r[5]=Il.y,r[9]=mn.y,r[2]=qi.z,r[6]=Il.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],g=i[13],_=i[2],y=i[6],v=i[10],u=i[14],m=i[3],p=i[7],M=i[11],C=i[15],b=r[0],A=r[4],P=r[8],x=r[12],w=r[1],U=r[5],Y=r[9],re=r[13],L=r[2],O=r[6],G=r[10],q=r[14],X=r[3],W=r[7],K=r[11],te=r[15];return s[0]=o*b+a*w+l*L+c*X,s[4]=o*A+a*U+l*O+c*W,s[8]=o*P+a*Y+l*G+c*K,s[12]=o*x+a*re+l*q+c*te,s[1]=h*b+f*w+d*L+g*X,s[5]=h*A+f*U+d*O+g*W,s[9]=h*P+f*Y+d*G+g*K,s[13]=h*x+f*re+d*q+g*te,s[2]=_*b+y*w+v*L+u*X,s[6]=_*A+y*U+v*O+u*W,s[10]=_*P+y*Y+v*G+u*K,s[14]=_*x+y*re+v*q+u*te,s[3]=m*b+p*w+M*L+C*X,s[7]=m*A+p*U+M*O+C*W,s[11]=m*P+p*Y+M*G+C*K,s[15]=m*x+p*re+M*q+C*te,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],g=e[14],_=e[3],y=e[7],v=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*g-i*l*g)+y*(+n*l*g-n*c*d+s*o*d-r*o*g+r*c*h-s*l*h)+v*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],g=e[11],_=e[12],y=e[13],v=e[14],u=e[15],m=f*v*c-y*d*c+y*l*g-a*v*g-f*l*u+a*d*u,p=_*d*c-h*v*c-_*l*g+o*v*g+h*l*u-o*d*u,M=h*y*c-_*f*c+_*a*g-o*y*g-h*a*u+o*f*u,C=_*f*l-h*y*l-_*a*d+o*y*d+h*a*v-o*f*v,b=n*m+i*p+r*M+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return e[0]=m*A,e[1]=(y*d*s-f*v*s-y*r*g+i*v*g+f*r*u-i*d*u)*A,e[2]=(a*v*s-y*l*s+y*r*c-i*v*c-a*r*u+i*l*u)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*g-i*l*g)*A,e[4]=p*A,e[5]=(h*v*s-_*d*s+_*r*g-n*v*g-h*r*u+n*d*u)*A,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*u-n*l*u)*A,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*g+n*l*g)*A,e[8]=M*A,e[9]=(_*f*s-h*y*s-_*i*g+n*y*g+h*i*u-n*f*u)*A,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*A,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*g-n*a*g)*A,e[12]=C*A,e[13]=(h*y*r-_*f*r+_*i*d-n*y*d-h*i*v+n*f*v)*A,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*v-n*a*v)*A,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,g=s*h,_=s*f,y=o*h,v=o*f,u=a*f,m=l*c,p=l*h,M=l*f,C=i.x,b=i.y,A=i.z;return r[0]=(1-(y+u))*C,r[1]=(g+M)*C,r[2]=(_-p)*C,r[3]=0,r[4]=(g-M)*b,r[5]=(1-(d+u))*b,r[6]=(v+m)*b,r[7]=0,r[8]=(_+p)*A,r[9]=(v-m)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=xs.set(r[0],r[1],r[2]).length(),o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);let c=1/s,h=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){let l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),g,_;if(a===yi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===tc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){let l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,g=(i+r)*h,_,y;if(a===yi)_=(o+s)*f,y=-2*f;else if(a===tc)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},xs=new N,zn=new Mt,OS=new N(0,0,0),FS=new N(1,1,1),qi=new N,Il=new N,mn=new N,J0=new Mt,j0=new ir,oc=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return j0.setFromEuler(this),this.setFromQuaternion(j0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oc.DEFAULT_ORDER="XYZ";var ac=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kS=0,K0=new N,Ss=new ir,fi=new Mt,Nl=new N,zo=new N,BS=new N,zS=new ir,Q0=new N(1,0,0),ev=new N(0,1,0),tv=new N(0,0,1),VS={type:"added"},HS={type:"removed"},Pn=class t extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new N,n=new oc,i=new ir,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ze}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Q0,e)}rotateY(e){return this.rotateOnAxis(ev,e)}rotateZ(e){return this.rotateOnAxis(tv,e)}translateOnAxis(e,n){return K0.copy(e).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Q0,e)}translateY(e){return this.translateOnAxis(ev,e)}translateZ(e){return this.translateOnAxis(tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Nl.copy(e):Nl.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(zo,Nl,this.up):fi.lookAt(Nl,zo,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(fi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(VS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HS)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,BS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++){let s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Pn.DEFAULT_UP=new N(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new N,pi=new N,fd=new N,mi=new N,Ms=new N,ws=new N,nv=new N,pd=new N,md=new N,gd=new N,Dl=!1,Ls=class t{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),pi.subVectors(i,n),fd.subVectors(e,n);let o=Vn.dot(Vn),a=Vn.dot(pi),l=Vn.dot(fd),c=pi.dot(pi),h=pi.dot(fd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,g=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),pi.subVectors(e,n),Vn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Ms.subVectors(r,i),ws.subVectors(s,i),pd.subVectors(e,i);let l=Ms.dot(pd),c=ws.dot(pd);if(l<=0&&c<=0)return n.copy(i);md.subVectors(e,r);let h=Ms.dot(md),f=ws.dot(md);if(h>=0&&f<=h)return n.copy(r);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Ms,o);gd.subVectors(e,s);let g=Ms.dot(gd),_=ws.dot(gd);if(_>=0&&g<=_)return n.copy(s);let y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ws,a);let v=h*_-g*f;if(v<=0&&f-h>=0&&g-_>=0)return nv.subVectors(s,r),a=(f-h)/(f-h+(g-_)),n.copy(r).addScaledVector(nv,a);let u=1/(v+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(Ms,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ye=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=PS(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){let i=qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=sd(e.r),this.g=sd(e.g),this.b=sd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Je.fromWorkingColorSpace(Vt.copy(this),e),Math.round(sn(Vt.r*255,0,255))*65536+Math.round(sn(Vt.g*255,0,255))*256+Math.round(sn(Vt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Vt.copy(this),n);let i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Nt){Je.fromWorkingColorSpace(Vt.copy(this),e);let n=Vt.r,i=Vt.g,r=Vt.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(Ul);let i=id(Zi.h,Ul.h,n),r=id(Zi.s,Ul.s,n),s=id(Zi.l,Ul.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ye;Ye.NAMES=qv;var GS=0,Ur=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Ds,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Or=class extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new N,Ol=new Ge,Cn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=G0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(e),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}};var lc=class extends Cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var cc=class extends Cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Rn=class extends Cn{constructor(e,n,i){super(new Float32Array(e),n,i)}};var WS=0,Tn=new Mt,_d=new Pn,Es=new N,gn=new Dr,Vo=new Dr,Rt=new N,rr=class t extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?cc:lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(gn.min,Vo.min),gn.expandByPoint(Rt),Rt.addVectors(gn.max,Vo.max),gn.expandByPoint(Rt)):(gn.expandByPoint(Vo.min),gn.expandByPoint(Vo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),Rt.add(Es)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new N,h[w]=new N;let f=new N,d=new N,g=new N,_=new Ge,y=new Ge,v=new Ge,u=new N,m=new N;function p(w,U,Y){f.fromArray(r,w*3),d.fromArray(r,U*3),g.fromArray(r,Y*3),_.fromArray(o,w*2),y.fromArray(o,U*2),v.fromArray(o,Y*2),d.sub(f),g.sub(f),y.sub(_),v.sub(_);let re=1/(y.x*v.y-v.x*y.y);isFinite(re)&&(u.copy(d).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(re),m.copy(g).multiplyScalar(y.x).addScaledVector(d,-v.x).multiplyScalar(re),c[w].add(u),c[U].add(u),c[Y].add(u),h[w].add(m),h[U].add(m),h[Y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,U=M.length;w<U;++w){let Y=M[w],re=Y.start,L=Y.count;for(let O=re,G=re+L;O<G;O+=3)p(i[O+0],i[O+1],i[O+2])}let C=new N,b=new N,A=new N,P=new N;function x(w){A.fromArray(s,w*3),P.copy(A);let U=c[w];C.copy(U),C.sub(A.multiplyScalar(A.dot(U))).normalize(),b.crossVectors(P,U);let re=b.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=re}for(let w=0,U=M.length;w<U;++w){let Y=M[w],re=Y.start,L=Y.count;for(let O=re,G=re+L;O<G;O+=3)x(i[O+0]),x(i[O+1]),x(i[O+2])}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);let r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let d=0,g=e.count;d<g;d+=3){let _=e.getX(d+0),y=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),g=0,_=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*h;for(let u=0;u<h;u++)d[_++]=c[g++]}return new Cn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},iv=new Mt,Ar=new Bd,Fl=new qo,rv=new N,Ts=new N,As=new N,bs=new N,yd=new N,kl=new N,Bl=new Ge,zl=new Ge,Vl=new Ge,sv=new N,ov=new N,av=new N,Hl=new N,Gl=new N,on=class extends Pn{constructor(e=new rr,n=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(yd.fromBufferAttribute(f,e),o?kl.addScaledVector(yd,h):kl.addScaledVector(yd.sub(n),h))}n.add(kl)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Fl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Fl,rv)===null||Ar.origin.distanceToSquared(rv)>(e.far-e.near)**2))&&(iv.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(iv),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let v=d[_],u=o[v.materialIndex],m=Math.max(v.start,g.start),p=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=m,C=p;M<C;M+=3){let b=a.getX(M),A=a.getX(M+1),P=a.getX(M+2);r=Wl(this,u,e,i,c,h,f,b,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{let _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let v=_,u=y;v<u;v+=3){let m=a.getX(v),p=a.getX(v+1),M=a.getX(v+2);r=Wl(this,o,e,i,c,h,f,m,p,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let v=d[_],u=o[v.materialIndex],m=Math.max(v.start,g.start),p=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=m,C=p;M<C;M+=3){let b=M,A=M+1,P=M+2;r=Wl(this,u,e,i,c,h,f,b,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{let _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let v=_,u=y;v<u;v+=3){let m=v,p=v+1,M=v+2;r=Wl(this,o,e,i,c,h,f,m,p,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}};function XS(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===tr,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function Wl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ts),t.getVertexPosition(l,As),t.getVertexPosition(c,bs);let h=XS(t,e,n,i,Ts,As,bs,Hl);if(h){r&&(Bl.fromBufferAttribute(r,a),zl.fromBufferAttribute(r,l),Vl.fromBufferAttribute(r,c),h.uv=Ls.getInterpolation(Hl,Ts,As,bs,Bl,zl,Vl,new Ge)),s&&(Bl.fromBufferAttribute(s,a),zl.fromBufferAttribute(s,l),Vl.fromBufferAttribute(s,c),h.uv1=Ls.getInterpolation(Hl,Ts,As,bs,Bl,zl,Vl,new Ge),h.uv2=h.uv1),o&&(sv.fromBufferAttribute(o,a),ov.fromBufferAttribute(o,l),av.fromBufferAttribute(o,c),h.normal=Ls.getInterpolation(Hl,Ts,As,bs,sv,ov,av,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};Ls.getNormal(Ts,As,bs,f.normal),h.face=f}return h}var Zo=class t extends rr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(h,3)),this.setAttribute("uv",new Rn(f,2));function _(y,v,u,m,p,M,C,b,A,P,x){let w=M/A,U=C/P,Y=M/2,re=C/2,L=b/2,O=A+1,G=P+1,q=0,X=0,W=new N;for(let K=0;K<G;K++){let te=K*U-re;for(let ue=0;ue<O;ue++){let H=ue*w-Y;W[y]=H*m,W[v]=te*p,W[u]=L,c.push(W.x,W.y,W.z),W[y]=0,W[v]=0,W[u]=b>0?1:-1,h.push(W.x,W.y,W.z),f.push(ue/A),f.push(1-K/P),q+=1}}for(let K=0;K<P;K++)for(let te=0;te<A;te++){let ue=d+te+O*K,H=d+te+O*(K+1),Z=d+(te+1)+O*(K+1),le=d+(te+1)+O*K;l.push(ue,H,le),l.push(H,Z,le),X+=6}a.addGroup(g,X,x),g+=X,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){let e={};for(let n=0;n<t.length;n++){let i=zs(t[n]);for(let r in i)e[r]=i[r]}return e}function YS(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zv(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}var qS={clone:zs,merge:Jt},ZS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=YS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},uc=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends uc{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(nd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Cs=-90,Rs=1,zd=class extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ht(Cs,Rs,e,n);r.layers=this.layers,this.add(r);let s=new Ht(Cs,Rs,e,n);s.layers=this.layers,this.add(s);let o=new Ht(Cs,Rs,e,n);o.layers=this.layers,this.add(o);let a=new Ht(Cs,Rs,e,n);a.layers=this.layers,this.add(a);let l=new Ht(Cs,Rs,e,n);l.layers=this.layers,this.add(l);let c=new Ht(Cs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},hc=class extends Wn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Fs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vd=class extends Si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?Nt:bn),this.texture=new hc(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zo(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ki});s.uniforms.tEquirect.value=n;let o=new on(r,s),a=n.minFilter;return n.minFilter===Xo&&(n.minFilter=An),new zd(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},xd=new N,JS=new N,jS=new ze,vi=class{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=xd.subVectors(i,n).cross(JS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(xd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||jS.getNormalMatrix(e),r=this.coplanarPoint(xd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},br=new qo,Xl=new N,$o=class{constructor(e=new vi,n=new vi,i=new vi,r=new vi,s=new vi,o=new vi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],y=r[10],v=r[11],u=r[12],m=r[13],p=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,v-g,M-u).normalize(),i[1].setComponents(l+s,d+c,v+g,M+u).normalize(),i[2].setComponents(l+o,d+h,v+_,M+m).normalize(),i[3].setComponents(l-o,d-h,v-_,M-m).normalize(),i[4].setComponents(l-a,d-f,v-y,M-p).normalize(),n===yi)i[5].setComponents(l+a,d+f,v+y,M+p).normalize();else if(n===tc)i[5].setComponents(a,f,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $v(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KS(t,e){let n=e.isWebGL2,i=new WeakMap;function r(c,h){let f=c.array,d=c.usage,g=f.byteLength,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,f,d),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,h,f){let d=h.array,g=h._updateRange,_=h.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&_.length===0&&t.bufferSubData(f,0,d),_.length!==0){for(let y=0,v=_.length;y<v;y++){let u=_[y];n?t.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,r(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}var Hd=class t extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,g=[],_=[],y=[],v=[];for(let u=0;u<h;u++){let m=u*d-o;for(let p=0;p<c;p++){let M=p*f-s;_.push(M,-m,0),y.push(0,0,1),v.push(p/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){let p=m+c*u,M=m+c*(u+1),C=m+1+c*(u+1),b=m+1+c*u;g.push(p,M,b),g.push(M,C,b)}this.setIndex(g),this.setAttribute("position",new Rn(_,3)),this.setAttribute("normal",new Rn(y,3)),this.setAttribute("uv",new Rn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
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
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dM=`#ifdef USE_IRIDESCENCE
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
#endif`,fM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`
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
}`,LM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
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
}`,VM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,YM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jM=`PhysicalMaterial material;
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
#endif`,KM=`struct PhysicalMaterial {
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
}`,QM=`
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c1=`#if defined( USE_POINTS_UV )
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
#endif`,u1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
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
#endif`,p1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
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
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
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
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F1=`float getShadowMask() {
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
}`,k1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B1=`#ifdef USE_SKINNING
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
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,H1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X1=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
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
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`#include <common>
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
}`,sw=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,ow=`#define DISTANCE
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
}`,aw=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dw=`#include <common>
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
}`,fw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pw=`#define LAMBERT
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
}`,mw=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gw=`#define MATCAP
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
}`,vw=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_w=`#define NORMAL
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
}`,yw=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xw=`#define PHONG
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
}`,Sw=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mw=`#define STANDARD
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
}`,ww=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ew=`#define TOON
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
}`,Tw=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Aw=`uniform float size;
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
}`,bw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Rw=`uniform vec3 color;
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
}`,Pw=`uniform float rotation;
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
}`,Lw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,De={alphahash_fragment:QS,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:aM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:hM,iridescence_fragment:dM,bumpmap_pars_fragment:fM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:vM,color_fragment:_M,color_pars_fragment:yM,color_pars_vertex:xM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:EM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:bM,emissivemap_pars_fragment:CM,colorspace_fragment:RM,colorspace_pars_fragment:PM,envmap_fragment:LM,envmap_common_pars_fragment:IM,envmap_pars_fragment:NM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:YM,envmap_vertex:UM,fog_vertex:OM,fog_pars_vertex:FM,fog_fragment:kM,fog_pars_fragment:BM,gradientmap_pars_fragment:zM,lightmap_fragment:VM,lightmap_pars_fragment:HM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:qM,lights_toon_pars_fragment:ZM,lights_phong_fragment:$M,lights_phong_pars_fragment:JM,lights_physical_fragment:jM,lights_physical_pars_fragment:KM,lights_fragment_begin:QM,lights_fragment_maps:e1,lights_fragment_end:t1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:a1,map_particle_fragment:l1,map_particle_pars_fragment:c1,metalnessmap_fragment:u1,metalnessmap_pars_fragment:h1,morphcolor_vertex:d1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:v1,normal_pars_fragment:_1,normal_pars_vertex:y1,normal_vertex:x1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:T1,opaque_fragment:A1,packing:b1,premultiplied_alpha_fragment:C1,project_vertex:R1,dithering_fragment:P1,dithering_pars_fragment:L1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:N1,shadowmap_pars_fragment:D1,shadowmap_pars_vertex:U1,shadowmap_vertex:O1,shadowmask_pars_fragment:F1,skinbase_vertex:k1,skinning_pars_vertex:B1,skinning_vertex:z1,skinnormal_vertex:V1,specularmap_fragment:H1,specularmap_pars_fragment:G1,tonemapping_fragment:W1,tonemapping_pars_fragment:X1,transmission_fragment:Y1,transmission_pars_fragment:q1,uv_pars_fragment:Z1,uv_pars_vertex:$1,uv_vertex:J1,worldpos_vertex:j1,background_vert:K1,background_frag:Q1,backgroundCube_vert:ew,backgroundCube_frag:tw,cube_vert:nw,cube_frag:iw,depth_vert:rw,depth_frag:sw,distanceRGBA_vert:ow,distanceRGBA_frag:aw,equirect_vert:lw,equirect_frag:cw,linedashed_vert:uw,linedashed_frag:hw,meshbasic_vert:dw,meshbasic_frag:fw,meshlambert_vert:pw,meshlambert_frag:mw,meshmatcap_vert:gw,meshmatcap_frag:vw,meshnormal_vert:_w,meshnormal_frag:yw,meshphong_vert:xw,meshphong_frag:Sw,meshphysical_vert:Mw,meshphysical_frag:ww,meshtoon_vert:Ew,meshtoon_frag:Tw,points_vert:Aw,points_frag:bw,shadow_vert:Cw,shadow_frag:Rw,sprite_vert:Pw,sprite_frag:Lw},ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qn={basic:{uniforms:Jt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Jt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Jt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Jt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Jt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Jt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Jt([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Jt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Jt([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Jt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Jt([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Jt([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Jt([ie.lights,ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Qn.physical={uniforms:Jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Yl={r:0,b:0,g:0};function Iw(t,e,n,i,r,s,o){let a=new Ye(0),l=s===!0?0:1,c,h,f=null,d=0,g=null;function _(v,u){let m=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?y(a,l):p&&p.isColor&&(y(p,1),m=!0);let M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Mc)?(h===void 0&&(h=new on(new Zo(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:zs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=p,h.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Je.getTransfer(p.colorSpace)!==rt,(f!==p||d!==p.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,f=p,d=p.version,g=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new on(new Hd(2,2),new Mi({name:"BackgroundMaterial",uniforms:zs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(p.colorSpace)!==rt,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(f!==p||d!==p.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=p,d=p.version,g=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function y(v,u){v.getRGB(Yl,Zv(t)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(v,u=1){a.set(v),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,y(a,l)},render:_}}function Nw(t,e,n,i){let r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=v(null),c=l,h=!1;function f(L,O,G,q,X){let W=!1;if(o){let K=y(q,G,O);c!==K&&(c=K,g(c.object)),W=u(L,q,G,X),W&&m(L,q,G,X)}else{let K=O.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=G.id,c.wireframe=K,W=!0)}X!==null&&n.update(X,t.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,P(L,O,G,q),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,O,G){let q=G.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[O.id];W===void 0&&(W={},X[O.id]=W);let K=W[q];return K===void 0&&(K=v(d()),W[q]=K),K}function v(L){let O=[],G=[],q=[];for(let X=0;X<r;X++)O[X]=0,G[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,O,G,q){let X=c.attributes,W=O.attributes,K=0,te=G.getAttributes();for(let ue in te)if(te[ue].location>=0){let Z=X[ue],le=W[ue];if(le===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function m(L,O,G,q){let X={},W=O.attributes,K=0,te=G.getAttributes();for(let ue in te)if(te[ue].location>=0){let Z=W[ue];Z===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),X[ue]=le,K++}c.attributes=X,c.attributesNum=K,c.index=q}function p(){let L=c.newAttributes;for(let O=0,G=L.length;O<G;O++)L[O]=0}function M(L){C(L,0)}function C(L,O){let G=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;G[L]=1,q[L]===0&&(t.enableVertexAttribArray(L),q[L]=1),X[L]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),X[L]=O)}function b(){let L=c.newAttributes,O=c.enabledAttributes;for(let G=0,q=O.length;G<q;G++)O[G]!==L[G]&&(t.disableVertexAttribArray(G),O[G]=0)}function A(L,O,G,q,X,W,K){K===!0?t.vertexAttribIPointer(L,O,G,X,W):t.vertexAttribPointer(L,O,G,q,X,W)}function P(L,O,G,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let X=q.attributes,W=G.getAttributes(),K=O.defaultAttributeValues;for(let te in W){let ue=W[te];if(ue.location>=0){let H=X[te];if(H===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let Z=H.normalized,le=H.itemSize,_e=n.get(H);if(_e===void 0)continue;let ve=_e.buffer,Pe=_e.type,Ie=_e.bytesPerElement,Ee=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||H.gpuType===Ov);if(H.isInterleavedBufferAttribute){let We=H.data,F=We.stride,Gt=H.offset;if(We.isInstancedInterleavedBuffer){for(let xe=0;xe<ue.locationSize;xe++)C(ue.location+xe,We.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let xe=0;xe<ue.locationSize;xe++)M(ue.location+xe);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let xe=0;xe<ue.locationSize;xe++)A(ue.location+xe,le/ue.locationSize,Pe,Z,F*Ie,(Gt+le/ue.locationSize*xe)*Ie,Ee)}else{if(H.isInstancedBufferAttribute){for(let We=0;We<ue.locationSize;We++)C(ue.location+We,H.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let We=0;We<ue.locationSize;We++)M(ue.location+We);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let We=0;We<ue.locationSize;We++)A(ue.location+We,le/ue.locationSize,Pe,Z,le*Ie,le/ue.locationSize*We*Ie,Ee)}}else if(K!==void 0){let Z=K[te];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(ue.location,Z);break;case 3:t.vertexAttrib3fv(ue.location,Z);break;case 4:t.vertexAttrib4fv(ue.location,Z);break;default:t.vertexAttrib1fv(ue.location,Z)}}}}b()}function x(){Y();for(let L in a){let O=a[L];for(let G in O){let q=O[G];for(let X in q)_(q[X].object),delete q[X];delete O[G]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let G in O){let q=O[G];for(let X in q)_(q[X].object),delete q[X];delete O[G]}delete a[L.id]}function U(L){for(let O in a){let G=a[O];if(G[L.id]===void 0)continue;let q=G[L.id];for(let X in q)_(q[X].object),delete q[X];delete G[L.id]}}function Y(){re(),h=!0,c!==l&&(c=l,g(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:re,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:p,enableAttribute:M,disableUnusedAttributes:b}}function Dw(t,e,n,i){let r=i.isWebGL2,s;function o(h){s=h}function a(h,f){t.drawArrays(s,h,f),n.update(f,s,1)}function l(h,f,d){if(d===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,h,f,d),n.update(f,s,d)}function c(h,f,d){if(d===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{g.multiDrawArraysWEBGL(s,h,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Uw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&t.constructor.name==="WebGL2RenderingContext",a=n.precision!==void 0?n.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=d>0,M=o||e.has("OES_texture_float"),C=p&&M,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:v,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:b}}function Ow(t){let e=this,n=null,i=0,r=!1,s=!1,o=new vi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let g=f.length!==0||d||i!==0||r;return r=d,i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,g){let _=f.clippingPlanes,y=f.clipIntersection,v=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!v)s?h(null):c();else{let m=s?0:i,p=m*4,M=u.clippingState||null;l.value=M,M=h(_,d,p,g);for(let C=0;C!==p;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,g,_){let y=f!==null?f.length:0,v=null;if(y!==0){if(v=l.value,_!==!0||v===null){let u=g+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<u)&&(v=new Float32Array(u));for(let p=0,M=g;p!==y;++p,M+=4)o.copy(f[p]).applyMatrix4(m,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Fw(t){let e=new WeakMap;function n(o,a){return a===Pd?o.mapping=Fs:a===Ld&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pd||a===Ld)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vd(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Gd=class extends uc{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Is=4,lv=[.125,.215,.35,.446,.526,.582],Pr=20,Sd=new Gd,cv=new Ye,Md=null,wd=0,Ed=0,Cr=(1+Math.sqrt(5))/2,Ps=1/Cr,uv=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Cr,Ps),new N(0,Cr,-Ps),new N(Ps,0,Cr),new N(-Ps,0,Cr),new N(Cr,Ps,0),new N(-Cr,Ps,0)],dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Md=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,wd,Ed),e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Yo,format:Gn,colorSpace:xi,depthBuffer:!1},r=hv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kw(s)),this._blurMaterial=Bw(s,e,n)}return r}_compileMaterial(e){let n=new on(this._lodPlanes[0],e);this._renderer.compile(n,Sd)}_sceneToCubeUV(e,n,i,r){let a=new Ht(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(cv),h.toneMapping=Qi,h.autoClear=!1;let g=new Or({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new on(new Zo,g),y=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,y=!0):(g.color.copy(cv),y=!0);for(let u=0;u<6;u++){let m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let p=this._cubeSize;ql(r,m*p,u>2?p:0,p,p),h.setRenderTarget(r),y&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Fs||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ql(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sd)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uv[(r-1)%uv.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new on(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Pr-1),y=s/_,v=isFinite(s)?1+Math.floor(h*y):Pr;v>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Pr}`);let u=[],m=0;for(let A=0;A<Pr;++A){let P=A/y,x=Math.exp(-P*P/2);u.push(x),A===0?m+=x:A<v&&(m+=2*x)}for(let A=0;A<u.length;A++)u[A]=u[A]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:p}=this;d.dTheta.value=_,d.mipInt.value=p-i;let M=this._sizeLods[r],C=3*M*(r>p-Is?r-p+Is:0),b=4*(this._cubeSize-M);ql(n,C,b,3*M,2*M),l.setRenderTarget(n),l.render(f,Sd)}};function kw(t){let e=[],n=[],i=[],r=t,s=t-Is+1+lv.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Is?l=lv[o-t+Is-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,_=6,y=3,v=2,u=1,m=new Float32Array(y*_*g),p=new Float32Array(v*_*g),M=new Float32Array(u*_*g);for(let b=0;b<g;b++){let A=b%3*2/3-1,P=b>2?0:-1,x=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];m.set(x,y*_*b),p.set(d,v*_*b);let w=[b,b,b,b,b,b];M.set(w,u*_*b)}let C=new rr;C.setAttribute("position",new Cn(m,y)),C.setAttribute("uv",new Cn(p,v)),C.setAttribute("faceIndex",new Cn(M,u)),e.push(C),r>Is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hv(t,e,n){let i=new Si(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ql(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Bw(t,e,n){let i=new Float32Array(Pr),r=new N(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function dv(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function fv(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function gf(){return`

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
	`}function zw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pd||l===Ld,h=l===Fs||l===ks;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new dc(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new dc(t));let d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Vw(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hw(t,e,n,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let y=d.morphAttributes[_];for(let v=0,u=y.length;v<u;v++)e.remove(y[v])}d.removeEventListener("dispose",o),delete r[d.id];let g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let _ in d)e.update(d[_],t.ARRAY_BUFFER);let g=f.morphAttributes;for(let _ in g){let y=g[_];for(let v=0,u=y.length;v<u;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(f){let d=[],g=f.index,_=f.attributes.position,y=0;if(g!==null){let m=g.array;y=g.version;for(let p=0,M=m.length;p<M;p+=3){let C=m[p+0],b=m[p+1],A=m[p+2];d.push(C,b,b,A,A,C)}}else if(_!==void 0){let m=_.array;y=_.version;for(let p=0,M=m.length/3-1;p<M;p+=3){let C=p+0,b=p+1,A=p+2;d.push(C,b,b,A,A,C)}}else return;let v=new(Yv(d)?cc:lc)(d,1);v.version=y;let u=s.get(f);u&&e.remove(u),s.set(f,v)}function h(f){let d=s.get(f);if(d){let g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Gw(t,e,n,i){let r=i.isWebGL2,s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,_){t.drawElements(s,_,a,g*l),n.update(_,s,1)}function f(g,_,y){if(y===0)return;let v,u;if(r)v=t,u="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[u](s,_,a,g*l,y),n.update(_,s,y)}function d(g,_,y){if(y===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<y;u++)this.render(g[u]/l,_[u]);else{v.multiDrawElementsWEBGL(s,_,0,a,g,0,y);let u=0;for(let m=0;m<y;m++)u+=_[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Ww(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Xw(t,e){return t[0]-e[0]}function Yw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function qw(t,e,n){let i={},r=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0,y=s.get(h);if(y===void 0||y.count!==_){let L=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let m=h.morphAttributes.position!==void 0,p=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],P=0;m===!0&&(P=1),p===!0&&(P=2),M===!0&&(P=3);let x=h.attributes.position.count*P,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let U=new Float32Array(x*w*4*_),Y=new sc(U,x,w,_);Y.type=Ji,Y.needsUpdate=!0;let re=P*4;for(let O=0;O<_;O++){let G=C[O],q=b[O],X=A[O],W=x*w*4*O;for(let K=0;K<G.count;K++){let te=K*re;m===!0&&(o.fromBufferAttribute(G,K),U[W+te+0]=o.x,U[W+te+1]=o.y,U[W+te+2]=o.z,U[W+te+3]=0),p===!0&&(o.fromBufferAttribute(q,K),U[W+te+4]=o.x,U[W+te+5]=o.y,U[W+te+6]=o.z,U[W+te+7]=0),M===!0&&(o.fromBufferAttribute(X,K),U[W+te+8]=o.x,U[W+te+9]=o.y,U[W+te+10]=o.z,U[W+te+11]=X.itemSize===4?o.w:1)}}y={count:_,texture:Y,size:new Ge(x,w)},s.set(h,y),h.addEventListener("dispose",L)}let v=0;for(let m=0;m<d.length;m++)v+=d[m];let u=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",u),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{let g=d===void 0?0:d.length,_=i[h.id];if(_===void 0||_.length!==g){_=[];for(let p=0;p<g;p++)_[p]=[p,0];i[h.id]=_}for(let p=0;p<g;p++){let M=_[p];M[0]=p,M[1]=d[p]}_.sort(Yw);for(let p=0;p<8;p++)p<g&&_[p][1]?(a[p][0]=_[p][0],a[p][1]=_[p][1]):(a[p][0]=Number.MAX_SAFE_INTEGER,a[p][1]=0);a.sort(Xw);let y=h.morphAttributes.position,v=h.morphAttributes.normal,u=0;for(let p=0;p<8;p++){let M=a[p],C=M[0],b=M[1];C!==Number.MAX_SAFE_INTEGER&&b?(y&&h.getAttribute("morphTarget"+p)!==y[C]&&h.setAttribute("morphTarget"+p,y[C]),v&&h.getAttribute("morphNormal"+p)!==v[C]&&h.setAttribute("morphNormal"+p,v[C]),r[p]=b,u+=b):(y&&h.hasAttribute("morphTarget"+p)===!0&&h.deleteAttribute("morphTarget"+p),v&&h.hasAttribute("morphNormal"+p)===!0&&h.deleteAttribute("morphNormal"+p),r[p]=0)}let m=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Zw(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var fc=class extends Wn{constructor(e,n,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Ir,h!==Ir&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ir&&(i=$i),i===void 0&&h===Bs&&(i=Lr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Jv=new Wn,jv=new fc(1,1);jv.compareFunction=Xv;var Kv=new sc,Qv=new kd,e_=new hc,pv=[],mv=[],gv=new Float32Array(16),vv=new Float32Array(9),_v=new Float32Array(4);function Hs(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=pv[r];if(s===void 0&&(s=new Float32Array(r),pv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=mv[e];n===void 0&&(n=new Int32Array(e),mv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $w(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Jw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function jw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function Kw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function Qw(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(wt(n,i))return;_v.set(i),t.uniformMatrix2fv(this.addr,!1,_v),Et(n,i)}}function eE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(wt(n,i))return;vv.set(i),t.uniformMatrix3fv(this.addr,!1,vv),Et(n,i)}}function tE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(wt(n,i))return;gv.set(i),t.uniformMatrix4fv(this.addr,!1,gv),Et(n,i)}}function nE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function rE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function sE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function oE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function lE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function cE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function uE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s=this.type===t.SAMPLER_2D_SHADOW?jv:Jv;n.setTexture2D(e||s,r)}function hE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qv,r)}function dE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||e_,r)}function fE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Kv,r)}function pE(t){switch(t){case 5126:return $w;case 35664:return Jw;case 35665:return jw;case 35666:return Kw;case 35674:return Qw;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return oE;case 36294:return aE;case 36295:return lE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return fE}}function mE(t,e){t.uniform1fv(this.addr,e)}function gE(t,e){let n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function vE(t,e){let n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function _E(t,e){let n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function yE(t,e){let n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xE(t,e){let n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function SE(t,e){let n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ME(t,e){t.uniform1iv(this.addr,e)}function wE(t,e){t.uniform2iv(this.addr,e)}function EE(t,e){t.uniform3iv(this.addr,e)}function TE(t,e){t.uniform4iv(this.addr,e)}function AE(t,e){t.uniform1uiv(this.addr,e)}function bE(t,e){t.uniform2uiv(this.addr,e)}function CE(t,e){t.uniform3uiv(this.addr,e)}function RE(t,e){t.uniform4uiv(this.addr,e)}function PE(t,e,n){let i=this.cache,r=e.length,s=Ec(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Jv,s[o])}function LE(t,e,n){let i=this.cache,r=e.length,s=Ec(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Qv,s[o])}function IE(t,e,n){let i=this.cache,r=e.length,s=Ec(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||e_,s[o])}function NE(t,e,n){let i=this.cache,r=e.length,s=Ec(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Kv,s[o])}function DE(t){switch(t){case 5126:return mE;case 35664:return gE;case 35665:return vE;case 35666:return _E;case 35674:return yE;case 35675:return xE;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return wE;case 35668:case 35672:return EE;case 35669:case 35673:return TE;case 5125:return AE;case 36294:return bE;case 36295:return CE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return IE;case 36289:case 36303:case 36311:case 36292:return NE}}var Wd=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pE(n.type)}},Xd=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DE(n.type)}},Yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Td=/(\w+)(\])?(\[|\.)?/g;function yv(t,e){t.seq.push(e),t.map[e.id]=e}function UE(t,e,n){let i=t.name,r=i.length;for(Td.lastIndex=0;;){let s=Td.exec(i),o=Td.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yv(n,c===void 0?new Wd(a,t,e):new Xd(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Yd(a),yv(n,f)),n=f}}}var Os=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);UE(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function xv(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var OE=37297,FE=0;function kE(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function BE(t){let e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t),i;switch(e===n?i="":e===ec&&n===Ql?i="LinearDisplayP3ToLinearSRGB":e===Ql&&n===ec&&(i="LinearSRGBToLinearDisplayP3"),t){case xi:case wc:return[i,"LinearTransferOETF"];case Nt:case mf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Sv(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kE(t.getShaderSource(e),o)}else return r}function zE(t,e){let n=BE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function VE(t,e){let n;switch(e){case sS:n="Linear";break;case oS:n="Reinhard";break;case aS:n="OptimizedCineon";break;case lS:n="ACESFilmic";break;case uS:n="AgX";break;case cS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function HE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function GE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function WE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ns(t){return t!==""}function Mv(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var YE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(t){return t.replace(YE,ZE)}var qE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ZE(t,e){let n=De[e];if(n===void 0){let i=qE.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qd(n)}var $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(t){return t.replace($E,JE)}function JE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Nv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function KE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fs:case ks:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QE(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===ks&&(e="ENVMAP_MODE_REFRACTION"),e}function eT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Dv:e="ENVMAP_BLENDING_MULTIPLY";break;case iS:e="ENVMAP_BLENDING_MIX";break;case rS:e="ENVMAP_BLENDING_ADD";break}return e}function tT(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function nT(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=jE(n),c=KE(n),h=QE(n),f=eT(n),d=tT(n),g=n.isWebGL2?"":HE(n),_=GE(n),y=WE(s),v=r.createProgram(),u,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ns).join(`
`),u.length>0&&(u+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(u=[Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[g,Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?De.tonemapping_pars_fragment:"",n.toneMapping!==Qi?VE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,zE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ns).join(`
`)),o=qd(o),o=Mv(o,n),o=wv(o,n),a=qd(a),a=Mv(a,n),a=wv(a,n),o=Ev(o),a=Ev(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=p+u+o,C=p+m+a,b=xv(r,r.VERTEX_SHADER,M),A=xv(r,r.FRAGMENT_SHADER,C);r.attachShader(v,b),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(Y){if(t.debug.checkShaderErrors){let re=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(b).trim(),O=r.getShaderInfoLog(A).trim(),G=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,b,A);else{let X=Sv(r,b,"vertex"),W=Sv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+X+`
`+W)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(L===""||O==="")&&(q=!1);q&&(Y.diagnostics={runnable:G,programLog:re,vertexShader:{log:L,prefix:u},fragmentShader:{log:O,prefix:m}})}r.deleteShader(b),r.deleteShader(A),x=new Os(r,v),w=XE(r,v)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(v,OE)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}var iT=0,Zd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new $d(e),n.set(e,i)),i}},$d=class{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}};function rT(t,e,n,i,r,s,o){let a=new ac,l=new Zd,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return x===0?"uv":`uv${x}`}function v(x,w,U,Y,re){let L=Y.fog,O=re.geometry,G=x.isMeshStandardMaterial?Y.environment:null,q=(x.isMeshStandardMaterial?n:e).get(x.envMap||G),X=q&&q.mapping===Mc?q.image.height:null,W=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=K!==void 0?K.length:0,ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let H,Z,le,_e;if(W){let Wt=Qn[W];H=Wt.vertexShader,Z=Wt.fragmentShader}else H=x.vertexShader,Z=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);let ve=t.getRenderTarget(),Pe=re.isInstancedMesh===!0,Ie=re.isBatchedMesh===!0,Ee=!!x.map,We=!!x.matcap,F=!!q,Gt=!!x.aoMap,xe=!!x.lightMap,Ce=!!x.bumpMap,pe=!!x.normalMap,lt=!!x.displacementMap,Ue=!!x.emissiveMap,T=!!x.metalnessMap,S=!!x.roughnessMap,B=x.anisotropy>0,Q=x.clearcoat>0,J=x.iridescence>0,ee=x.sheen>0,me=x.transmission>0,ae=B&&!!x.anisotropyMap,de=Q&&!!x.clearcoatMap,we=Q&&!!x.clearcoatNormalMap,Oe=Q&&!!x.clearcoatRoughnessMap,$=J&&!!x.iridescenceMap,$e=J&&!!x.iridescenceThicknessMap,Ve=ee&&!!x.sheenColorMap,be=ee&&!!x.sheenRoughnessMap,ye=!!x.specularMap,fe=!!x.specularColorMap,Ne=!!x.specularIntensityMap,qe=me&&!!x.transmissionMap,ft=me&&!!x.thicknessMap,ke=!!x.gradientMap,ne=!!x.alphaMap,R=x.alphaTest>0,se=!!x.alphaHash,oe=!!x.extensions,Te=!!O.attributes.uv1,Se=!!O.attributes.uv2,je=!!O.attributes.uv3,Ke=Qi;return x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ke=t.toneMapping),{isWebGL2:h,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:Z,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ie,instancing:Pe,instancingColor:Pe&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:xi,map:Ee,matcap:We,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:X,aoMap:Gt,lightMap:xe,bumpMap:Ce,normalMap:pe,displacementMap:d&&lt,emissiveMap:Ue,normalMapObjectSpace:pe&&x.normalMapType===MS,normalMapTangentSpace:pe&&x.normalMapType===Wv,metalnessMap:T,roughnessMap:S,anisotropy:B,anisotropyMap:ae,clearcoat:Q,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:$e,sheen:ee,sheenColorMap:Ve,sheenRoughnessMap:be,specularMap:ye,specularColorMap:fe,specularIntensityMap:Ne,transmission:me,transmissionMap:qe,thicknessMap:ft,gradientMap:ke,opaque:x.transparent===!1&&x.blending===Ds,alphaMap:ne,alphaTest:R,alphaHash:se,combine:x.combine,mapUv:Ee&&y(x.map.channel),aoMapUv:Gt&&y(x.aoMap.channel),lightMapUv:xe&&y(x.lightMap.channel),bumpMapUv:Ce&&y(x.bumpMap.channel),normalMapUv:pe&&y(x.normalMap.channel),displacementMapUv:lt&&y(x.displacementMap.channel),emissiveMapUv:Ue&&y(x.emissiveMap.channel),metalnessMapUv:T&&y(x.metalnessMap.channel),roughnessMapUv:S&&y(x.roughnessMap.channel),anisotropyMapUv:ae&&y(x.anisotropyMap.channel),clearcoatMapUv:de&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:we&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(x.sheenRoughnessMap.channel),specularMapUv:ye&&y(x.specularMap.channel),specularColorMapUv:fe&&y(x.specularColorMap.channel),specularIntensityMapUv:Ne&&y(x.specularIntensityMap.channel),transmissionMapUv:qe&&y(x.transmissionMap.channel),thicknessMapUv:ft&&y(x.thicknessMap.channel),alphaMapUv:ne&&y(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pe||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:je,pointsUvs:re.isPoints===!0&&!!O.attributes.uv&&(Ee||ne),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)w.push(U),w.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(m(w,x),p(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function p(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function M(x){let w=_[x.type],U;if(w){let Y=Qn[w];U=qS.clone(Y.uniforms)}else U=x.uniforms;return U}function C(x,w){let U;for(let Y=0,re=c.length;Y<re;Y++){let L=c[Y];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new nT(t,w,x,s),c.push(U)),U}function b(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:P}}function sT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function oT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Av(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bv(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,g,_,y,v){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:y,group:v},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=v),e++,u}function a(f,d,g,_,y,v){let u=o(f,d,g,_,y,v);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,d,g,_,y,v){let u=o(f,d,g,_,y,v);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||oT),i.length>1&&i.sort(d||Av),r.length>1&&r.sort(d||Av)}function h(){for(let f=e,d=t.length;f<d;f++){let g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function aT(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new bv,t.set(i,[o])):r>=s.length?(o=new bv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function lT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Ye};break;case"SpotLight":n={position:new N,direction:new N,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function cT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var uT=0;function hT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dT(t,e){let n=new lT,i=cT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);let s=new N,o=new Mt,a=new Mt;function l(h,f){let d=0,g=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,v=0,u=0,m=0,p=0,M=0,C=0,b=0,A=0,P=0,x=0;h.sort(hT);let w=f===!0?Math.PI:1;for(let Y=0,re=h.length;Y<re;Y++){let L=h[Y],O=L.color,G=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*G*w,g+=O.g*G*w,_+=O.b*G*w;else if(L.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(L.sh.coefficients[W],G);x++}else if(L.isDirectionalLight){let W=n.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let K=L.shadow,te=i.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.directionalShadow[y]=te,r.directionalShadowMap[y]=X,r.directionalShadowMatrix[y]=L.shadow.matrix,M++}r.directional[y]=W,y++}else if(L.isSpotLight){let W=n.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(G*w),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,r.spot[u]=W;let K=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[u]=K.matrix,L.castShadow){let te=i.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.spotShadow[u]=te,r.spotShadowMap[u]=X,b++}u++}else if(L.isRectAreaLight){let W=n.get(L);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),r.rectArea[m]=W,m++}else if(L.isPointLight){let W=n.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*w),W.distance=L.distance,W.decay=L.decay,L.castShadow){let K=L.shadow,te=i.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,r.pointShadow[v]=te,r.pointShadowMap[v]=X,r.pointShadowMatrix[v]=L.shadow.matrix,C++}r.point[v]=W,v++}else if(L.isHemisphereLight){let W=n.get(L);W.skyColor.copy(L.color).multiplyScalar(G*w),W.groundColor.copy(L.groundColor).multiplyScalar(G*w),r.hemi[p]=W,p++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=_;let U=r.hash;(U.directionalLength!==y||U.pointLength!==v||U.spotLength!==u||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==M||U.numPointShadows!==C||U.numSpotShadows!==b||U.numSpotMaps!==A||U.numLightProbes!==x)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=m,r.point.length=v,r.hemi.length=p,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=b+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=x,U.directionalLength=y,U.pointLength=v,U.spotLength=u,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=M,U.numPointShadows=C,U.numSpotShadows=b,U.numSpotMaps=A,U.numLightProbes=x,r.version=uT++)}function c(h,f){let d=0,g=0,_=0,y=0,v=0,u=f.matrixWorldInverse;for(let m=0,p=h.length;m<p;m++){let M=h[m];if(M.isDirectionalLight){let C=r.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),d++}else if(M.isSpotLight){let C=r.spot[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),_++}else if(M.isRectAreaLight){let C=r.rectArea[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let C=r.point[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){let C=r.hemi[v];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(u),v++}}}return{setup:l,setupView:c,state:r}}function Cv(t,e){let n=new dT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fT(t,e){let n=new WeakMap;function i(s,o=0){let a=n.get(s),l;return a===void 0?(l=new Cv(t,e),n.set(s,[l])):o>=a.length?(l=new Cv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}var Jd=class extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jd=class extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mT=`uniform sampler2D shadow_pass;
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
}`;function gT(t,e,n){let i=new $o,r=new Ge,s=new Ge,o=new at,a=new Jd({depthPacking:SS}),l=new jd,c={},h=n.maxTextureSize,f={[tr]:an,[an]:tr,[_i]:_i},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:pT,fragmentShader:mT}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let _=new rr;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new on(_,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nv;let u=this.type;this.render=function(b,A,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;let x=t.getRenderTarget(),w=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Ki),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let re=u!==gi&&this.type===gi,L=u===gi&&this.type!==gi;for(let O=0,G=b.length;O<G;O++){let q=b[O],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let W=X.getFrameExtents();if(r.multiply(W),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,X.mapSize.y=s.y)),X.map===null||re===!0||L===!0){let te=this.type!==gi?{minFilter:jt,magFilter:jt}:{};X.map!==null&&X.map.dispose(),X.map=new Si(r.x,r.y,te),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();let K=X.getViewportCount();for(let te=0;te<K;te++){let ue=X.getViewport(te);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),Y.viewport(o),X.updateMatrices(q,te),i=X.getFrustum(),M(A,P,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===gi&&m(X,P),X.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(x,w,U)};function m(b,A){let P=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Si(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,P,g,y,null)}function p(b,A,P,x){let w=null,U=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)w=U;else if(w=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let Y=w.uuid,re=A.uuid,L=c[Y];L===void 0&&(L={},c[Y]=L);let O=L[re];O===void 0&&(O=w.clone(),L[re]=O,A.addEventListener("dispose",C)),w=O}if(w.visible=A.visible,w.wireframe=A.wireframe,x===gi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:f[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let Y=t.properties.get(w);Y.light=P}return w}function M(b,A,P,x,w){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===gi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let re=e.update(b),L=b.material;if(Array.isArray(L)){let O=re.groups;for(let G=0,q=O.length;G<q;G++){let X=O[G],W=L[X.materialIndex];if(W&&W.visible){let K=p(b,W,x,w);b.onBeforeShadow(t,b,A,P,re,K,X),t.renderBufferDirect(P,null,re,K,b,X),b.onAfterShadow(t,b,A,P,re,K,X)}}}else if(L.visible){let O=p(b,L,x,w);b.onBeforeShadow(t,b,A,P,re,O,null),t.renderBufferDirect(P,null,re,O,b,null),b.onAfterShadow(t,b,A,P,re,O,null)}}let Y=b.children;for(let re=0,L=Y.length;re<L;re++)M(Y[re],A,P,x,w)}function C(b){b.target.removeEventListener("dispose",C);for(let P in c){let x=c[P],w=b.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function vT(t,e,n){let i=n.isWebGL2;function r(){let R=!1,se=new at,oe=null,Te=new at(0,0,0,0);return{setMask:function(Se){oe!==Se&&!R&&(t.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){R=Se},setClear:function(Se,je,Ke,Tt,Wt){Wt===!0&&(Se*=Tt,je*=Tt,Ke*=Tt),se.set(Se,je,Ke,Tt),Te.equals(se)===!1&&(t.clearColor(Se,je,Ke,Tt),Te.copy(se))},reset:function(){R=!1,oe=null,Te.set(-1,0,0,0)}}}function s(){let R=!1,se=null,oe=null,Te=null;return{setTest:function(Se){Se?Ie(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(Se){se!==Se&&!R&&(t.depthMask(Se),se=Se)},setFunc:function(Se){if(oe!==Se){switch(Se){case Jx:t.depthFunc(t.NEVER);break;case jx:t.depthFunc(t.ALWAYS);break;case Kx:t.depthFunc(t.LESS);break;case $l:t.depthFunc(t.LEQUAL);break;case Qx:t.depthFunc(t.EQUAL);break;case eS:t.depthFunc(t.GEQUAL);break;case tS:t.depthFunc(t.GREATER);break;case nS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Se}},setLocked:function(Se){R=Se},setClear:function(Se){Te!==Se&&(t.clearDepth(Se),Te=Se)},reset:function(){R=!1,se=null,oe=null,Te=null}}}function o(){let R=!1,se=null,oe=null,Te=null,Se=null,je=null,Ke=null,Tt=null,Wt=null;return{setTest:function(Qe){R||(Qe?Ie(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!R&&(t.stencilMask(Qe),se=Qe)},setFunc:function(Qe,Xt,Yn){(oe!==Qe||Te!==Xt||Se!==Yn)&&(t.stencilFunc(Qe,Xt,Yn),oe=Qe,Te=Xt,Se=Yn)},setOp:function(Qe,Xt,Yn){(je!==Qe||Ke!==Xt||Tt!==Yn)&&(t.stencilOp(Qe,Xt,Yn),je=Qe,Ke=Xt,Tt=Yn)},setLocked:function(Qe){R=Qe},setClear:function(Qe){Wt!==Qe&&(t.clearStencil(Qe),Wt=Qe)},reset:function(){R=!1,se=null,oe=null,Te=null,Se=null,je=null,Ke=null,Tt=null,Wt=null}}}let a=new r,l=new s,c=new o,h=new WeakMap,f=new WeakMap,d={},g={},_=new WeakMap,y=[],v=null,u=!1,m=null,p=null,M=null,C=null,b=null,A=null,P=null,x=new Ye(0,0,0),w=0,U=!1,Y=null,re=null,L=null,O=null,G=null,q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=W>=2);let te=null,ue={},H=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),le=new at().fromArray(H),_e=new at().fromArray(Z);function ve(R,se,oe,Te){let Se=new Uint8Array(4),je=t.createTexture();t.bindTexture(R,je),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<oe;Ke++)i&&(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,Te,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(se+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return je}let Pe={};Pe[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(t.DEPTH_TEST),l.setFunc($l),Ue(!1),T(a0),Ie(t.CULL_FACE),pe(Ki);function Ie(R){d[R]!==!0&&(t.enable(R),d[R]=!0)}function Ee(R){d[R]!==!1&&(t.disable(R),d[R]=!1)}function We(R,se){return g[R]!==se?(t.bindFramebuffer(R,se),g[R]=se,i&&(R===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=se),R===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function F(R,se){let oe=y,Te=!1;if(R)if(oe=_.get(se),oe===void 0&&(oe=[],_.set(se,oe)),R.isWebGLMultipleRenderTargets){let Se=R.texture;if(oe.length!==Se.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let je=0,Ke=Se.length;je<Ke;je++)oe[je]=t.COLOR_ATTACHMENT0+je;oe.length=Se.length,Te=!0}}else oe[0]!==t.COLOR_ATTACHMENT0&&(oe[0]=t.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==t.BACK&&(oe[0]=t.BACK,Te=!0);Te&&(n.isWebGL2?t.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Gt(R){return v!==R?(t.useProgram(R),v=R,!0):!1}let xe={[Rr]:t.FUNC_ADD,[Ux]:t.FUNC_SUBTRACT,[Ox]:t.FUNC_REVERSE_SUBTRACT};if(i)xe[h0]=t.MIN,xe[d0]=t.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(xe[h0]=R.MIN_EXT,xe[d0]=R.MAX_EXT)}let Ce={[Fx]:t.ZERO,[kx]:t.ONE,[Bx]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[Xx]:t.SRC_ALPHA_SATURATE,[Gx]:t.DST_COLOR,[Vx]:t.DST_ALPHA,[zx]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[Wx]:t.ONE_MINUS_DST_COLOR,[Hx]:t.ONE_MINUS_DST_ALPHA,[Yx]:t.CONSTANT_COLOR,[qx]:t.ONE_MINUS_CONSTANT_COLOR,[Zx]:t.CONSTANT_ALPHA,[$x]:t.ONE_MINUS_CONSTANT_ALPHA};function pe(R,se,oe,Te,Se,je,Ke,Tt,Wt,Qe){if(R===Ki){u===!0&&(Ee(t.BLEND),u=!1);return}if(u===!1&&(Ie(t.BLEND),u=!0),R!==Dx){if(R!==m||Qe!==U){if((p!==Rr||b!==Rr)&&(t.blendEquation(t.FUNC_ADD),p=Rr,b=Rr),Qe)switch(R){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case l0:t.blendFunc(t.ONE,t.ONE);break;case c0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case u0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case l0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case c0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case u0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,C=null,A=null,P=null,x.set(0,0,0),w=0,m=R,U=Qe}return}Se=Se||se,je=je||oe,Ke=Ke||Te,(se!==p||Se!==b)&&(t.blendEquationSeparate(xe[se],xe[Se]),p=se,b=Se),(oe!==M||Te!==C||je!==A||Ke!==P)&&(t.blendFuncSeparate(Ce[oe],Ce[Te],Ce[je],Ce[Ke]),M=oe,C=Te,A=je,P=Ke),(Tt.equals(x)===!1||Wt!==w)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Wt),x.copy(Tt),w=Wt),m=R,U=!1}function lt(R,se){R.side===_i?Ee(t.CULL_FACE):Ie(t.CULL_FACE);let oe=R.side===an;se&&(oe=!oe),Ue(oe),R.blending===Ds&&R.transparent===!1?pe(Ki):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let Te=R.stencilWrite;c.setTest(Te),Te&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),B(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){Y!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),Y=R)}function T(R){R!==Lx?(Ie(t.CULL_FACE),R!==re&&(R===a0?t.cullFace(t.BACK):R===Ix?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),re=R}function S(R){R!==L&&(X&&t.lineWidth(R),L=R)}function B(R,se,oe){R?(Ie(t.POLYGON_OFFSET_FILL),(O!==se||G!==oe)&&(t.polygonOffset(se,oe),O=se,G=oe)):Ee(t.POLYGON_OFFSET_FILL)}function Q(R){R?Ie(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function J(R){R===void 0&&(R=t.TEXTURE0+q-1),te!==R&&(t.activeTexture(R),te=R)}function ee(R,se,oe){oe===void 0&&(te===null?oe=t.TEXTURE0+q-1:oe=te);let Te=ue[oe];Te===void 0&&(Te={type:void 0,texture:void 0},ue[oe]=Te),(Te.type!==R||Te.texture!==se)&&(te!==oe&&(t.activeTexture(oe),te=oe),t.bindTexture(R,se||Pe[R]),Te.type=R,Te.texture=se)}function me(){let R=ue[te];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(R){le.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function qe(R){_e.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function ft(R,se){let oe=f.get(se);oe===void 0&&(oe=new WeakMap,f.set(se,oe));let Te=oe.get(R);Te===void 0&&(Te=t.getUniformBlockIndex(se,R.name),oe.set(R,Te))}function ke(R,se){let Te=f.get(se).get(R);h.get(se)!==Te&&(t.uniformBlockBinding(se,Te,R.__bindingPointIndex),h.set(se,Te))}function ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},te=null,ue={},g={},_=new WeakMap,y=[],v=null,u=!1,m=null,p=null,M=null,C=null,b=null,A=null,P=null,x=new Ye(0,0,0),w=0,U=!1,Y=null,re=null,L=null,O=null,G=null,le.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ee,bindFramebuffer:We,drawBuffers:F,useProgram:Gt,setBlending:pe,setMaterial:lt,setFlipSided:Ue,setCullFace:T,setLineWidth:S,setPolygonOffset:B,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:me,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:ye,texImage3D:fe,updateUBOMapping:ft,uniformBlockBinding:ke,texStorage2D:Ve,texStorage3D:be,texSubImage2D:we,texSubImage3D:Oe,compressedTexSubImage2D:$,compressedTexSubImage3D:$e,scissor:Ne,viewport:qe,reset:ne}}function _T(t,e,n,i,r,s,o){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return g?new OffscreenCanvas(T,S):nc("canvas")}function y(T,S,B,Q){let J=1;if((T.width>Q||T.height>Q)&&(J=Q/Math.max(T.width,T.height)),J<1||S===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){let ee=S?Od:Math.floor,me=ee(J*T.width),ae=ee(J*T.height);f===void 0&&(f=_(me,ae));let de=B?_(me,ae):f;return de.width=me,de.height=ae,de.getContext("2d").drawImage(T,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+me+"x"+ae+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return X0(T.width)&&X0(T.height)}function u(T){return a?!1:T.wrapS!==Hn||T.wrapT!==Hn||T.minFilter!==jt&&T.minFilter!==An}function m(T,S){return T.generateMipmaps&&S&&T.minFilter!==jt&&T.minFilter!==An}function p(T){t.generateMipmap(T)}function M(T,S,B,Q,J=!1){if(a===!1)return S;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=S;if(S===t.RED&&(B===t.FLOAT&&(ee=t.R32F),B===t.HALF_FLOAT&&(ee=t.R16F),B===t.UNSIGNED_BYTE&&(ee=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.R8UI),B===t.UNSIGNED_SHORT&&(ee=t.R16UI),B===t.UNSIGNED_INT&&(ee=t.R32UI),B===t.BYTE&&(ee=t.R8I),B===t.SHORT&&(ee=t.R16I),B===t.INT&&(ee=t.R32I)),S===t.RG&&(B===t.FLOAT&&(ee=t.RG32F),B===t.HALF_FLOAT&&(ee=t.RG16F),B===t.UNSIGNED_BYTE&&(ee=t.RG8)),S===t.RGBA){let me=J?Kl:Je.getTransfer(Q);B===t.FLOAT&&(ee=t.RGBA32F),B===t.HALF_FLOAT&&(ee=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ee=me===rt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function C(T,S,B){return m(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==An?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function b(T){return T===jt||T===f0||T===$h?t.NEAREST:t.LINEAR}function A(T){let S=T.target;S.removeEventListener("dispose",A),x(S),S.isVideoTexture&&h.delete(S)}function P(T){let S=T.target;S.removeEventListener("dispose",P),U(S)}function x(T){let S=i.get(T);if(S.__webglInit===void 0)return;let B=T.source,Q=d.get(B);if(Q){let J=Q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(T),Object.keys(Q).length===0&&d.delete(B)}i.remove(T)}function w(T){let S=i.get(T);t.deleteTexture(S.__webglTexture);let B=T.source,Q=d.get(B);delete Q[S.__cacheKey],o.memory.textures--}function U(T){let S=T.texture,B=i.get(T),Q=i.get(S);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let ee=0;ee<B.__webglFramebuffer[J].length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[J][ee]);else t.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)t.deleteFramebuffer(B.__webglFramebuffer[J]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,ee=S.length;J<ee;J++){let me=i.get(S[J]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(S[J])}i.remove(S),i.remove(T)}let Y=0;function re(){Y=0}function L(){let T=Y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),Y+=1,T}function O(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function G(T,S){let B=i.get(T);if(T.isVideoTexture&&lt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,T,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function q(T,S){let B=i.get(T);if(T.version>0&&B.__version!==T.version){le(B,T,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function X(T,S){let B=i.get(T);if(T.version>0&&B.__version!==T.version){le(B,T,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function W(T,S){let B=i.get(T);if(T.version>0&&B.__version!==T.version){_e(B,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}let K={[Id]:t.REPEAT,[Hn]:t.CLAMP_TO_EDGE,[Nd]:t.MIRRORED_REPEAT},te={[jt]:t.NEAREST,[f0]:t.NEAREST_MIPMAP_NEAREST,[$h]:t.NEAREST_MIPMAP_LINEAR,[An]:t.LINEAR,[hS]:t.LINEAR_MIPMAP_NEAREST,[Xo]:t.LINEAR_MIPMAP_LINEAR},ue={[wS]:t.NEVER,[RS]:t.ALWAYS,[ES]:t.LESS,[Xv]:t.LEQUAL,[TS]:t.EQUAL,[CS]:t.GEQUAL,[AS]:t.GREATER,[bS]:t.NOTEQUAL};function H(T,S,B){if(B?(t.texParameteri(T,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,K[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,te[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,te[S.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Hn||S.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,b(S.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==jt&&S.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===jt||S.minFilter!==$h&&S.minFilter!==Xo||S.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Yo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Z(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));let Q=S.source,J=d.get(Q);J===void 0&&(J={},d.set(Q,J));let ee=O(S);if(ee!==T.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[ee].usedTimes++;let me=J[T.__cacheKey];me!==void 0&&(J[T.__cacheKey].usedTimes--,me.usedTimes===0&&w(S)),T.__cacheKey=ee,T.__webglTexture=J[ee].texture}return B}function le(T,S,B){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);let J=Z(T,S),ee=S.source;n.bindTexture(Q,T.__webglTexture,t.TEXTURE0+B);let me=i.get(ee);if(ee.version!==me.__version||J===!0){n.activeTexture(t.TEXTURE0+B);let ae=Je.getPrimaries(Je.workingColorSpace),de=S.colorSpace===bn?null:Je.getPrimaries(S.colorSpace),we=S.colorSpace===bn||ae===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Oe=u(S)&&v(S.image)===!1,$=y(S.image,Oe,!1,r.maxTextureSize);$=Ue(S,$);let $e=v($)||a,Ve=s.convert(S.format,S.colorSpace),be=s.convert(S.type),ye=M(S.internalFormat,Ve,be,S.colorSpace,S.isVideoTexture);H(Q,S,$e);let fe,Ne=S.mipmaps,qe=a&&S.isVideoTexture!==!0&&ye!==Hv,ft=me.__version===void 0||J===!0,ke=C(S,$,$e);if(S.isDepthTexture)ye=t.DEPTH_COMPONENT,a?S.type===Ji?ye=t.DEPTH_COMPONENT32F:S.type===$i?ye=t.DEPTH_COMPONENT24:S.type===Lr?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:S.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ir&&ye===t.DEPTH_COMPONENT&&S.type!==pf&&S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=$i,be=s.convert(S.type)),S.format===Bs&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,S.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Lr,be=s.convert(S.type))),ft&&(qe?n.texStorage2D(t.TEXTURE_2D,1,ye,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,ye,$.width,$.height,0,Ve,be,null));else if(S.isDataTexture)if(Ne.length>0&&$e){qe&&ft&&n.texStorage2D(t.TEXTURE_2D,ke,ye,Ne[0].width,Ne[0].height);for(let ne=0,R=Ne.length;ne<R;ne++)fe=Ne[ne],qe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,be,fe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,fe.width,fe.height,0,Ve,be,fe.data);S.generateMipmaps=!1}else qe?(ft&&n.texStorage2D(t.TEXTURE_2D,ke,ye,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,Ve,be,$.data)):n.texImage2D(t.TEXTURE_2D,0,ye,$.width,$.height,0,Ve,be,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ye,Ne[0].width,Ne[0].height,$.depth);for(let ne=0,R=Ne.length;ne<R;ne++)fe=Ne[ne],S.format!==Gn?Ve!==null?qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,$.depth,Ve,fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ye,fe.width,fe.height,$.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,$.depth,Ve,be,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ye,fe.width,fe.height,$.depth,0,Ve,be,fe.data)}else{qe&&ft&&n.texStorage2D(t.TEXTURE_2D,ke,ye,Ne[0].width,Ne[0].height);for(let ne=0,R=Ne.length;ne<R;ne++)fe=Ne[ne],S.format!==Gn?Ve!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,be,fe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,fe.width,fe.height,0,Ve,be,fe.data)}else if(S.isDataArrayTexture)qe?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ye,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ve,be,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,$.width,$.height,$.depth,0,Ve,be,$.data);else if(S.isData3DTexture)qe?(ft&&n.texStorage3D(t.TEXTURE_3D,ke,ye,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ve,be,$.data)):n.texImage3D(t.TEXTURE_3D,0,ye,$.width,$.height,$.depth,0,Ve,be,$.data);else if(S.isFramebufferTexture){if(ft)if(qe)n.texStorage2D(t.TEXTURE_2D,ke,ye,$.width,$.height);else{let ne=$.width,R=$.height;for(let se=0;se<ke;se++)n.texImage2D(t.TEXTURE_2D,se,ye,ne,R,0,Ve,be,null),ne>>=1,R>>=1}}else if(Ne.length>0&&$e){qe&&ft&&n.texStorage2D(t.TEXTURE_2D,ke,ye,Ne[0].width,Ne[0].height);for(let ne=0,R=Ne.length;ne<R;ne++)fe=Ne[ne],qe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ve,be,fe):n.texImage2D(t.TEXTURE_2D,ne,ye,Ve,be,fe);S.generateMipmaps=!1}else qe?(ft&&n.texStorage2D(t.TEXTURE_2D,ke,ye,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,be,$)):n.texImage2D(t.TEXTURE_2D,0,ye,Ve,be,$);m(S,$e)&&p(Q),me.__version=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function _e(T,S,B){if(S.image.length!==6)return;let Q=Z(T,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);let ee=i.get(J);if(J.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);let me=Je.getPrimaries(Je.workingColorSpace),ae=S.colorSpace===bn?null:Je.getPrimaries(S.colorSpace),de=S.colorSpace===bn||me===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let we=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!we&&!Oe?$[ne]=y(S.image[ne],!1,!0,r.maxCubemapSize):$[ne]=Oe?S.image[ne].image:S.image[ne],$[ne]=Ue(S,$[ne]);let $e=$[0],Ve=v($e)||a,be=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),fe=M(S.internalFormat,be,ye,S.colorSpace),Ne=a&&S.isVideoTexture!==!0,qe=ee.__version===void 0||Q===!0,ft=C(S,$e,Ve);H(t.TEXTURE_CUBE_MAP,S,Ve);let ke;if(we){Ne&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,fe,$e.width,$e.height);for(let ne=0;ne<6;ne++){ke=$[ne].mipmaps;for(let R=0;R<ke.length;R++){let se=ke[R];S.format!==Gn?be!==null?Ne?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,se.width,se.height,be,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,se.width,se.height,be,ye,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,fe,se.width,se.height,0,be,ye,se.data)}}}else{ke=S.mipmaps,Ne&&qe&&(ke.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,fe,$[0].width,$[0].height));for(let ne=0;ne<6;ne++)if(Oe){Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,be,ye,$[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,$[ne].width,$[ne].height,0,be,ye,$[ne].data);for(let R=0;R<ke.length;R++){let oe=ke[R].image[ne].image;Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,oe.width,oe.height,be,ye,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,fe,oe.width,oe.height,0,be,ye,oe.data)}}else{Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be,ye,$[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,be,ye,$[ne]);for(let R=0;R<ke.length;R++){let se=ke[R];Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,be,ye,se.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,fe,be,ye,se.image[ne])}}}m(S,Ve)&&p(t.TEXTURE_CUBE_MAP),ee.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ve(T,S,B,Q,J,ee){let me=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),de=M(B.internalFormat,me,ae,B.colorSpace);if(!i.get(S).__hasExternalTextures){let Oe=Math.max(1,S.width>>ee),$=Math.max(1,S.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,de,Oe,$,S.depth,0,me,ae,null):n.texImage2D(J,ee,de,Oe,$,0,me,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),pe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,i.get(B).__webglTexture,0,Ce(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,i.get(B).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(T,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let Q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||pe(S)){let J=S.depthTexture;J&&J.isDepthTexture&&(J.type===Ji?Q=t.DEPTH_COMPONENT32F:J.type===$i&&(Q=t.DEPTH_COMPONENT24));let ee=Ce(S);pe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,Q,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,Q,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){let Q=Ce(S);B&&pe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{let Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<Q.length;J++){let ee=Q[J],me=s.convert(ee.format,ee.colorSpace),ae=s.convert(ee.type),de=M(ee.internalFormat,me,ae,ee.colorSpace),we=Ce(S);B&&pe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,de,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,de,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,de,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let Q=i.get(S.depthTexture).__webglTexture,J=Ce(S);if(S.depthTexture.format===Ir)pe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Bs)pe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ee(T){let S=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=t.createRenderbuffer(),Pe(S.__webglDepthbuffer[Q],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Pe(S.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(T,S,B){let Q=i.get(T);S!==void 0&&ve(Q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ee(T)}function F(T){let S=T.texture,B=i.get(T),Q=i.get(S);T.addEventListener("dispose",P),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++);let J=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,me=v(T)||a;if(J){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let de=0;de<S.mipmaps.length;de++)B.__webglFramebuffer[ae][de]=t.createFramebuffer()}else B.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ee)if(r.drawBuffers){let ae=T.texture;for(let de=0,we=ae.length;de<we;de++){let Oe=i.get(ae[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&pe(T)===!1){let ae=ee?S:[S];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){let we=ae[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);let Oe=s.convert(we.format,we.colorSpace),$=s.convert(we.type),$e=M(we.internalFormat,Oe,$,we.colorSpace,T.isXRRenderTarget===!0),Ve=Ce(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,$e,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),H(t.TEXTURE_CUBE_MAP,S,me);for(let ae=0;ae<6;ae++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ve(B.__webglFramebuffer[ae][de],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else ve(B.__webglFramebuffer[ae],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S,me)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){let ae=T.texture;for(let de=0,we=ae.length;de<we;de++){let Oe=ae[de],$=i.get(Oe);n.bindTexture(t.TEXTURE_2D,$.__webglTexture),H(t.TEXTURE_2D,Oe,me),ve(B.__webglFramebuffer,T,Oe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Oe,me)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,Q.__webglTexture),H(ae,S,me),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ve(B.__webglFramebuffer[de],T,S,t.COLOR_ATTACHMENT0,ae,de);else ve(B.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,ae,0);m(S,me)&&p(ae),n.unbindTexture()}T.depthBuffer&&Ee(T)}function Gt(T){let S=v(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,J=B.length;Q<J;Q++){let ee=B[Q];if(m(ee,S)){let me=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(ee).__webglTexture;n.bindTexture(me,ae),p(me),n.unbindTexture()}}}function xe(T){if(a&&T.samples>0&&pe(T)===!1){let S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,Q=T.height,J=t.COLOR_BUFFER_BIT,ee=[],me=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(T),de=T.isWebGLMultipleRenderTargets===!0;if(de)for(let we=0;we<S.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let we=0;we<S.length;we++){ee.push(t.COLOR_ATTACHMENT0+we),T.depthBuffer&&ee.push(me);let Oe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Oe===!1&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[we]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[me])),de){let $=i.get(S[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,J,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<S.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ae.__webglColorRenderbuffer[we]);let Oe=i.get(S[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ce(T){return Math.min(r.maxSamples,T.samples)}function pe(T){let S=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(T){let S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function Ue(T,S){let B=T.colorSpace,Q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Dd||B!==xi&&B!==bn&&(Je.getTransfer(B)===rt?a===!1?e.has("EXT_sRGB")===!0&&Q===Gn?(T.format=Dd,T.minFilter=An,T.generateMipmaps=!1):S=ic.sRGBToLinear(S):(Q!==Gn||J!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=L,this.resetTextureUnits=re,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe}function yT(t,e,n){let i=n.isWebGL2;function r(s,o=bn){let a,l=Je.getTransfer(o);if(s===er)return t.UNSIGNED_BYTE;if(s===Fv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===kv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===dS)return t.BYTE;if(s===fS)return t.SHORT;if(s===pf)return t.UNSIGNED_SHORT;if(s===Ov)return t.INT;if(s===$i)return t.UNSIGNED_INT;if(s===Ji)return t.FLOAT;if(s===Yo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===pS)return t.ALPHA;if(s===Gn)return t.RGBA;if(s===mS)return t.LUMINANCE;if(s===gS)return t.LUMINANCE_ALPHA;if(s===Ir)return t.DEPTH_COMPONENT;if(s===Bs)return t.DEPTH_STENCIL;if(s===Dd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vS)return t.RED;if(s===Bv)return t.RED_INTEGER;if(s===_S)return t.RG;if(s===zv)return t.RG_INTEGER;if(s===Vv)return t.RGBA_INTEGER;if(s===Jh||s===jh||s===Kh||s===Qh)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===p0||s===m0||s===g0||s===v0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===p0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===m0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===g0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===v0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_0||s===y0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_0)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===y0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===x0||s===S0||s===M0||s===w0||s===E0||s===T0||s===A0||s===b0||s===C0||s===R0||s===P0||s===L0||s===I0||s===N0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===x0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===S0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===M0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===w0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===E0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===T0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===A0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===b0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===C0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===R0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===P0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===L0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===I0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===N0)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ed||s===D0||s===U0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ed)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===D0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===U0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yS||s===O0||s===F0||s===k0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ed)return a.COMPRESSED_RED_RGTC1_EXT;if(s===O0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===F0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===k0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}var Kd=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ji=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xT={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let v=n.getJointPose(y,i),u=this._getHandJoint(c,y);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&d>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Qd=class extends nr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,g=null,_=null,y=n.getContextAttributes(),v=null,u=null,m=[],p=[],M=new Ge,C=null,b=new Ht;b.layers.enable(1),b.viewport=new at;let A=new Ht;A.layers.enable(2),A.viewport=new at;let P=[b,A],x=new Kd;x.layers.enable(1),x.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=m[H];return Z===void 0&&(Z=new Wo,m[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=m[H];return Z===void 0&&(Z=new Wo,m[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=m[H];return Z===void 0&&(Z=new Wo,m[H]=Z),Z.getHandSpace()};function Y(H){let Z=p.indexOf(H.inputSource);if(Z===-1)return;let le=m[Z];le!==void 0&&(le.update(H.inputSource,H.frame,c||o),le.dispatchEvent({type:H.type,data:H.inputSource}))}function re(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",L);for(let H=0;H<m.length;H++){let Z=p[H];Z!==null&&(p[H]=null,m[H].disconnect(Z))}w=null,U=null,e.setRenderTarget(v),g=null,d=null,f=null,r=null,u=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",re),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Si(g.framebufferWidth,g.framebufferHeight,{format:Gn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Z=null,le=null,_e=null;y.depth&&(_e=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=y.stencil?Bs:Ir,le=y.stencil?Lr:$i);let ve={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Si(d.textureWidth,d.textureHeight,{format:Gn,type:er,depthTexture:new fc(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Pe=e.properties.get(u);Pe.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(H){for(let Z=0;Z<H.removed.length;Z++){let le=H.removed[Z],_e=p.indexOf(le);_e>=0&&(p[_e]=null,m[_e].disconnect(le))}for(let Z=0;Z<H.added.length;Z++){let le=H.added[Z],_e=p.indexOf(le);if(_e===-1){for(let Pe=0;Pe<m.length;Pe++)if(Pe>=p.length){p.push(le),_e=Pe;break}else if(p[Pe]===null){p[Pe]=le,_e=Pe;break}if(_e===-1)break}let ve=m[_e];ve&&ve.connect(le)}}let O=new N,G=new N;function q(H,Z,le){O.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(le.matrixWorld);let _e=O.distanceTo(G),ve=Z.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),Ee=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],F=(ve[9]-1)/ve[5],Gt=(ve[8]-1)/ve[0],xe=(Pe[8]+1)/Pe[0],Ce=Ie*Gt,pe=Ie*xe,lt=_e/(-Gt+xe),Ue=lt*-Gt;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ue),H.translateZ(lt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let T=Ie+lt,S=Ee+lt,B=Ce-Ue,Q=pe+(_e-Ue),J=We*Ee/S*T,ee=F*Ee/S*T;H.projectionMatrix.makePerspective(B,Q,J,ee,T,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.near=A.near=b.near=H.near,x.far=A.far=b.far=H.far,(w!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,U=x.far);let Z=H.parent,le=x.cameras;X(x,Z);for(let _e=0;_e<le.length;_e++)X(le[_e],Z);le.length===2?q(x,b,A):x.projectionMatrix.copy(b.projectionMatrix),W(H,x,Z)};function W(H,Z,le){le===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ud*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)};let K=null;function te(H,Z){if(h=Z.getViewerPose(c||o),_=Z,h!==null){let le=h.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let _e=!1;le.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let ve=0;ve<le.length;ve++){let Pe=le[ve],Ie=null;if(g!==null)Ie=g.getViewport(Pe);else{let We=f.getViewSubImage(d,Pe);Ie=We.viewport,ve===0&&(e.setRenderTargetTextures(u,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(u))}let Ee=P[ve];Ee===void 0&&(Ee=new Ht,Ee.layers.enable(ve),Ee.viewport=new at,P[ve]=Ee),Ee.matrix.fromArray(Pe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Pe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(x.matrix.copy(Ee.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(Ee)}}for(let le=0;le<m.length;le++){let _e=p[le],ve=m[le];_e!==null&&ve!==void 0&&ve.update(_e,Z,c||o)}K&&K(H,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}let ue=new $v;ue.setAnimationLoop(te),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}};function ST(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,Zv(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,m,p,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),f(v,u)):u.isMeshPhongMaterial?(s(v,u),h(v,u)):u.isMeshStandardMaterial?(s(v,u),d(v,u),u.isMeshPhysicalMaterial&&g(v,u,M)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),y(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,m,p):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===an&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===an&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);let m=e.get(u).envMap;if(m&&(v.envMap.value=m,v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap){v.lightMap.value=u.lightMap;let p=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=u.lightMapIntensity*p,n(u.lightMap,v.lightMapTransform)}u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,m,p){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*m,v.scale.value=p*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function h(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function f(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function d(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),e.get(u).envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function g(v,u,m){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&v.clearcoatNormalScale.value.negate())),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function y(v,u){let m=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MT(t,e,n,i){let r={},s={},o=[],a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,p){let M=p.program;i.uniformBlockBinding(m,M)}function c(m,p){let M=r[m.id];M===void 0&&(_(m),M=h(m),r[m.id]=M,m.addEventListener("dispose",v));let C=p.program;i.updateUBOMapping(m,C);let b=e.render.frame;s[m.id]!==b&&(d(m),s[m.id]=b)}function h(m){let p=f();m.__bindingPointIndex=p;let M=t.createBuffer(),C=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){let p=r[m.id],M=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let b=0,A=M.length;b<A;b++){let P=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,w=P.length;x<w;x++){let U=P[x];if(g(U,b,x,C)===!0){let Y=U.__offset,re=Array.isArray(U.value)?U.value:[U.value],L=0;for(let O=0;O<re.length;O++){let G=re[O],q=y(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,Y+L,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,p,M,C){let b=m.value,A=p+"_"+M;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{let P=C[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function _(m){let p=m.uniforms,M=0,C=16;for(let A=0,P=p.length;A<P;A++){let x=Array.isArray(p[A])?p[A]:[p[A]];for(let w=0,U=x.length;w<U;w++){let Y=x[w],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,O=re.length;L<O;L++){let G=re[L],q=y(G),X=M%C;X!==0&&C-X<q.boundary&&(M+=C-X),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=q.storage}}}let b=M%C;return b>0&&(M+=C-b),m.__size=M,m.__cache={},this}function y(m){let p={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(p.boundary=4,p.storage=4):m.isVector2?(p.boundary=8,p.storage=8):m.isVector3||m.isColor?(p.boundary=16,p.storage=12):m.isVector4?(p.boundary=16,p.storage=16):m.isMatrix3?(p.boundary=48,p.storage=48):m.isMatrix4?(p.boundary=64,p.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),p}function v(m){let p=m.target;p.removeEventListener("dispose",v);let M=o.indexOf(p.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(let m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}var Jo=class{constructor(e={}){let{canvas:n=LS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let g=new Uint32Array(4),_=new Int32Array(4),y=null,v=null,u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;let p=this,M=!1,C=0,b=0,A=null,P=-1,x=null,w=new at,U=new at,Y=null,re=new Ye(0),L=0,O=n.width,G=n.height,q=1,X=null,W=null,K=new at(0,0,O,G),te=new at(0,0,O,G),ue=!1,H=new $o,Z=!1,le=!1,_e=null,ve=new Mt,Pe=new Ge,Ie=new N,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?q:1}let F=i;function Gt(E,D){for(let z=0;z<E.length;z++){let V=E[z],k=n.getContext(V,D);if(k!==null)return k}return null}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r160"),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",R,!1),n.addEventListener("webglcontextcreationerror",se,!1),F===null){let D=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&D.shift(),F=Gt(D,E),F===null)throw Gt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Ce,pe,lt,Ue,T,S,B,Q,J,ee,me,ae,de,we,Oe,$,$e,Ve,be,ye,fe,Ne,qe;function ft(){xe=new Vw(F),Ce=new Uw(F,xe,e),xe.init(Ce),fe=new yT(F,xe,Ce),pe=new vT(F,xe,Ce),lt=new Ww(F),Ue=new sT,T=new _T(F,xe,pe,Ue,Ce,fe,lt),S=new Fw(p),B=new zw(p),Q=new KS(F,Ce),Ne=new Nw(F,xe,Q,Ce),J=new Hw(F,Q,lt,Ne),ee=new Zw(F,J,Q,lt),Ve=new qw(F,Ce,T),Oe=new Ow(Ue),me=new rT(p,S,B,xe,Ce,Ne,Oe),ae=new ST(p,Ue),de=new aT,we=new fT(xe,Ce),$e=new Iw(p,S,B,pe,ee,d,l),$=new gT(p,ee,Ce),qe=new MT(F,lt,Ce,pe),be=new Dw(F,xe,lt,Ce),ye=new Gw(F,xe,lt,Ce),lt.programs=me.programs,p.capabilities=Ce,p.extensions=xe,p.properties=Ue,p.renderLists=de,p.shadowMap=$,p.state=pe,p.info=lt}ft();let ke=new Qd(p,F);this.xr=ke,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(O,G,!1))},this.getSize=function(E){return E.set(O,G)},this.setSize=function(E,D,z=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,G=D,n.width=Math.floor(E*q),n.height=Math.floor(D*q),z===!0&&(n.style.width=E+"px",n.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(O*q,G*q).floor()},this.setDrawingBufferSize=function(E,D,z){O=E,G=D,q=z,n.width=Math.floor(E*z),n.height=Math.floor(D*z),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,D,z,V){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,D,z,V),pe.viewport(w.copy(K).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(te)},this.setScissor=function(E,D,z,V){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,D,z,V),pe.scissor(U.copy(te).multiplyScalar(q).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(E){pe.setScissorTest(ue=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(E=!0,D=!0,z=!0){let V=0;if(E){let k=!1;if(A!==null){let ce=A.texture.format;k=ce===Vv||ce===zv||ce===Bv}if(k){let ce=A.texture.type,ge=ce===er||ce===$i||ce===pf||ce===Lr||ce===Fv||ce===kv,Me=$e.getClearColor(),Ae=$e.getClearAlpha(),Fe=Me.r,Re=Me.g,Le=Me.b;ge?(g[0]=Fe,g[1]=Re,g[2]=Le,g[3]=Ae,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Fe,_[1]=Re,_[2]=Le,_[3]=Ae,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}D&&(V|=F.DEPTH_BUFFER_BIT),z&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",R,!1),n.removeEventListener("webglcontextcreationerror",se,!1),de.dispose(),we.dispose(),Ue.dispose(),S.dispose(),B.dispose(),ee.dispose(),Ne.dispose(),qe.dispose(),me.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Wt),ke.removeEventListener("sessionend",Qe),_e&&(_e.dispose(),_e=null),Xt.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=lt.autoReset,D=$.enabled,z=$.autoUpdate,V=$.needsUpdate,k=$.type;ft(),lt.autoReset=E,$.enabled=D,$.autoUpdate=z,$.needsUpdate=V,$.type=k}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){let D=E.target;D.removeEventListener("dispose",oe),Te(D)}function Te(E){Se(E),Ue.remove(E)}function Se(E){let D=Ue.get(E).programs;D!==void 0&&(D.forEach(function(z){me.releaseProgram(z)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,z,V,k,ce){D===null&&(D=Ee);let ge=k.isMesh&&k.matrixWorld.determinant()<0,Me=r_(E,D,z,V,k);pe.setMaterial(V,ge);let Ae=z.index,Fe=1;if(V.wireframe===!0){if(Ae=J.getWireframeAttribute(z),Ae===void 0)return;Fe=2}let Re=z.drawRange,Le=z.attributes.position,gt=Re.start*Fe,ln=(Re.start+Re.count)*Fe;ce!==null&&(gt=Math.max(gt,ce.start*Fe),ln=Math.min(ln,(ce.start+ce.count)*Fe)),Ae!==null?(gt=Math.max(gt,0),ln=Math.min(ln,Ae.count)):Le!=null&&(gt=Math.max(gt,0),ln=Math.min(ln,Le.count));let At=ln-gt;if(At<0||At===1/0)return;Ne.setup(k,V,Me,z,Ae);let ei,ct=be;if(Ae!==null&&(ei=Q.get(Ae),ct=ye,ct.setIndex(ei)),k.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*We()),ct.setMode(F.LINES)):ct.setMode(F.TRIANGLES);else if(k.isLine){let Be=V.linewidth;Be===void 0&&(Be=1),pe.setLineWidth(Be*We()),k.isLineSegments?ct.setMode(F.LINES):k.isLineLoop?ct.setMode(F.LINE_LOOP):ct.setMode(F.LINE_STRIP)}else k.isPoints?ct.setMode(F.POINTS):k.isSprite&&ct.setMode(F.TRIANGLES);if(k.isBatchedMesh)ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ct.renderInstances(gt,At,k.count);else if(z.isInstancedBufferGeometry){let Be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Tc=Math.min(z.instanceCount,Be);ct.renderInstances(gt,At,Tc)}else ct.render(gt,At)};function je(E,D,z){E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,ia(E,D,z),E.side=tr,E.needsUpdate=!0,ia(E,D,z),E.side=_i):ia(E,D,z)}this.compile=function(E,D,z=null){z===null&&(z=E),v=we.get(z),v.init(),m.push(v),z.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),E!==z&&E.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights(p._useLegacyLights);let V=new Set;return E.traverse(function(k){let ce=k.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let Me=ce[ge];je(Me,z,k),V.add(Me)}else je(ce,z,k),V.add(ce)}),m.pop(),v=null,V},this.compileAsync=function(E,D,z=null){let V=this.compile(E,D,z);return new Promise(k=>{function ce(){if(V.forEach(function(ge){Ue.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){k(E);return}setTimeout(ce,10)}xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ke=null;function Tt(E){Ke&&Ke(E)}function Wt(){Xt.stop()}function Qe(){Xt.start()}let Xt=new $v;Xt.setAnimationLoop(Tt),typeof self!="undefined"&&Xt.setContext(self),this.setAnimationLoop=function(E){Ke=E,ke.setAnimationLoop(E),E===null?Xt.stop():Xt.start()},ke.addEventListener("sessionstart",Wt),ke.addEventListener("sessionend",Qe),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(D),D=ke.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,D,A),v=we.get(E,m.length),v.init(),m.push(v),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(ve),le=this.localClippingEnabled,Z=Oe.init(this.clippingPlanes,le),y=de.get(E,u.length),y.init(),u.push(y),Yn(E,D,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(X,W),this.info.render.frame++,Z===!0&&Oe.beginShadows();let z=v.state.shadowsArray;if($.render(z,E,D),Z===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(y,E),v.setupLights(p._useLegacyLights),D.isArrayCamera){let V=D.cameras;for(let k=0,ce=V.length;k<ce;k++){let ge=V[k];yf(y,E,ge,ge.viewport)}}else yf(y,E,D);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(p,E,D),Ne.resetDefaultState(),P=-1,x=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Yn(E,D,z,V){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){V&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let ge=ee.update(E),Me=E.material;Me.visible&&y.push(E,ge,Me,z,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){let ge=ee.update(E),Me=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ie.copy(ge.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Me)){let Ae=ge.groups;for(let Fe=0,Re=Ae.length;Fe<Re;Fe++){let Le=Ae[Fe],gt=Me[Le.materialIndex];gt&&gt.visible&&y.push(E,ge,gt,z,Ie.z,Le)}}else Me.visible&&y.push(E,ge,Me,z,Ie.z,null)}}let ce=E.children;for(let ge=0,Me=ce.length;ge<Me;ge++)Yn(ce[ge],D,z,V)}function yf(E,D,z,V){let k=E.opaque,ce=E.transmissive,ge=E.transparent;v.setupLightsView(z),Z===!0&&Oe.setGlobalState(p.clippingPlanes,z),ce.length>0&&i_(k,ce,D,z),V&&pe.viewport(w.copy(V)),k.length>0&&na(k,D,z),ce.length>0&&na(ce,D,z),ge.length>0&&na(ge,D,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function i_(E,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let ce=Ce.isWebGL2;_e===null&&(_e=new Si(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Yo:er,minFilter:Xo,samples:ce?4:0})),p.getDrawingBufferSize(Pe),ce?_e.setSize(Pe.x,Pe.y):_e.setSize(Od(Pe.x),Od(Pe.y));let ge=p.getRenderTarget();p.setRenderTarget(_e),p.getClearColor(re),L=p.getClearAlpha(),L<1&&p.setClearColor(16777215,.5),p.clear();let Me=p.toneMapping;p.toneMapping=Qi,na(E,z,V),T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e);let Ae=!1;for(let Fe=0,Re=D.length;Fe<Re;Fe++){let Le=D[Fe],gt=Le.object,ln=Le.geometry,At=Le.material,ei=Le.group;if(At.side===_i&&gt.layers.test(V.layers)){let ct=At.side;At.side=an,At.needsUpdate=!0,xf(gt,z,V,ln,At,ei),At.side=ct,At.needsUpdate=!0,Ae=!0}}Ae===!0&&(T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e)),p.setRenderTarget(ge),p.setClearColor(re,L),p.toneMapping=Me}function na(E,D,z){let V=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ce=E.length;k<ce;k++){let ge=E[k],Me=ge.object,Ae=ge.geometry,Fe=V===null?ge.material:V,Re=ge.group;Me.layers.test(z.layers)&&xf(Me,D,z,Ae,Fe,Re)}}function xf(E,D,z,V,k,ce){E.onBeforeRender(p,D,z,V,k,ce),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(p,D,z,V,E,ce),k.transparent===!0&&k.side===_i&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,p.renderBufferDirect(z,D,V,k,E,ce),k.side=tr,k.needsUpdate=!0,p.renderBufferDirect(z,D,V,k,E,ce),k.side=_i):p.renderBufferDirect(z,D,V,k,E,ce),E.onAfterRender(p,D,z,V,k,ce)}function ia(E,D,z){D.isScene!==!0&&(D=Ee);let V=Ue.get(E),k=v.state.lights,ce=v.state.shadowsArray,ge=k.state.version,Me=me.getParameters(E,k.state,ce,D,z),Ae=me.getProgramCacheKey(Me),Fe=V.programs;V.environment=E.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||V.environment),Fe===void 0&&(E.addEventListener("dispose",oe),Fe=new Map,V.programs=Fe);let Re=Fe.get(Ae);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===ge)return Mf(E,Me),Re}else Me.uniforms=me.getUniforms(E),E.onBuild(z,Me,p),E.onBeforeCompile(Me,p),Re=me.acquireProgram(Me,Ae),Fe.set(Ae,Re),V.uniforms=Me.uniforms;let Le=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),Mf(E,Me),V.needsLights=o_(E),V.lightsStateVersion=ge,V.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function Sf(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=Os.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Mf(E,D){let z=Ue.get(E);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function r_(E,D,z,V,k){D.isScene!==!0&&(D=Ee),T.resetTextureUnits();let ce=D.fog,ge=V.isMeshStandardMaterial?D.environment:null,Me=A===null?p.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xi,Ae=(V.isMeshStandardMaterial?B:S).get(V.envMap||ge),Fe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!z.morphAttributes.position,gt=!!z.morphAttributes.normal,ln=!!z.morphAttributes.color,At=Qi;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=p.toneMapping);let ei=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=ei!==void 0?ei.length:0,Be=Ue.get(V),Tc=v.state.lights;if(Z===!0&&(le===!0||E!==x)){let vn=E===x&&V.id===P;Oe.setState(V,E,vn)}let pt=!1;V.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Tc.state.version||Be.outputColorSpace!==Me||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||Be.envMap!==Ae||V.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Oe.numPlanes||Be.numIntersection!==Oe.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==Re||Be.morphTargets!==Le||Be.morphNormals!==gt||Be.morphColors!==ln||Be.toneMapping!==At||Ce.isWebGL2===!0&&Be.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,Be.__version=V.version);let or=Be.currentProgram;pt===!0&&(or=ia(V,D,k));let wf=!1,Gs=!1,Ac=!1,Dt=or.getUniforms(),ar=Be.uniforms;if(pe.useProgram(or.program)&&(wf=!0,Gs=!0,Ac=!0),V.id!==P&&(P=V.id,Gs=!0),wf||x!==E){Dt.setValue(F,"projectionMatrix",E.projectionMatrix),Dt.setValue(F,"viewMatrix",E.matrixWorldInverse);let vn=Dt.map.cameraPosition;vn!==void 0&&vn.setValue(F,Ie.setFromMatrixPosition(E.matrixWorld)),Ce.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Gs=!0,Ac=!0)}if(k.isSkinnedMesh){Dt.setOptional(F,k,"bindMatrix"),Dt.setOptional(F,k,"bindMatrixInverse");let vn=k.skeleton;vn&&(Ce.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Dt.setValue(F,"boneTexture",vn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Dt.setOptional(F,k,"batchingTexture"),Dt.setValue(F,"batchingTexture",k._matricesTexture,T));let bc=z.morphAttributes;if((bc.position!==void 0||bc.normal!==void 0||bc.color!==void 0&&Ce.isWebGL2===!0)&&Ve.update(k,z,or),(Gs||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,Dt.setValue(F,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ar.envMap.value=Ae,ar.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Gs&&(Dt.setValue(F,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&s_(ar,Ac),ce&&V.fog===!0&&ae.refreshFogUniforms(ar,ce),ae.refreshMaterialUniforms(ar,V,q,G,_e),Os.upload(F,Sf(Be),ar,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Os.upload(F,Sf(Be),ar,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Dt.setValue(F,"center",k.center),Dt.setValue(F,"modelViewMatrix",k.modelViewMatrix),Dt.setValue(F,"normalMatrix",k.normalMatrix),Dt.setValue(F,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let vn=V.uniformsGroups;for(let Cc=0,a_=vn.length;Cc<a_;Cc++)if(Ce.isWebGL2){let Ef=vn[Cc];qe.update(Ef,or),qe.bind(Ef,or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return or}function s_(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function o_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,z){Ue.get(E.texture).__webglTexture=D,Ue.get(E.depthTexture).__webglTexture=z;let V=Ue.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){let z=Ue.get(E);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,z=0){A=E,C=D,b=z;let V=!0,k=null,ce=!1,ge=!1;if(E){let Ae=Ue.get(E);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):Ae.__webglFramebuffer===void 0?T.setupRenderTarget(E):Ae.__hasExternalTextures&&T.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);let Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);let Re=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?k=Re[D][z]:k=Re[D],ce=!0):Ce.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?k=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[z]:k=Re,w.copy(E.viewport),U.copy(E.scissor),Y=E.scissorTest}else w.copy(K).multiplyScalar(q).floor(),U.copy(te).multiplyScalar(q).floor(),Y=ue;if(pe.bindFramebuffer(F.FRAMEBUFFER,k)&&Ce.drawBuffers&&V&&pe.drawBuffers(E,k),pe.viewport(w),pe.scissor(U),pe.setScissorTest(Y),ce){let Ae=Ue.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,z)}else if(ge){let Ae=Ue.get(E.texture),Fe=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Fe)}P=-1},this.readRenderTargetPixels=function(E,D,z,V,k,ce,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){pe.bindFramebuffer(F.FRAMEBUFFER,Me);try{let Ae=E.texture,Fe=Ae.format,Re=Ae.type;if(Fe!==Gn&&fe.convert(Fe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=Re===Yo&&(xe.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Re!==er&&fe.convert(Re)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Ji&&(Ce.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-V&&z>=0&&z<=E.height-k&&F.readPixels(D,z,V,k,fe.convert(Fe),fe.convert(Re),ce)}finally{let Ae=A!==null?Ue.get(A).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(E,D,z=0){let V=Math.pow(2,-z),k=Math.floor(D.image.width*V),ce=Math.floor(D.image.height*V);T.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,E.x,E.y,k,ce),pe.unbindTexture()},this.copyTextureToTexture=function(E,D,z,V=0){let k=D.image.width,ce=D.image.height,ge=fe.convert(z.format),Me=fe.convert(z.type);T.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,k,ce,ge,Me,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,ge,Me,D.image),V===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,D,z,V,k=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=E.max.x-E.min.x+1,ge=E.max.y-E.min.y+1,Me=E.max.z-E.min.z+1,Ae=fe.convert(V.format),Fe=fe.convert(V.type),Re;if(V.isData3DTexture)T.setTexture3D(V,0),Re=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),Re=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);let Le=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ln=F.getParameter(F.UNPACK_SKIP_PIXELS),At=F.getParameter(F.UNPACK_SKIP_ROWS),ei=F.getParameter(F.UNPACK_SKIP_IMAGES),ct=z.isCompressedTexture?z.mipmaps[k]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Re,k,D.x,D.y,D.z,ce,ge,Me,Ae,Fe,ct.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Re,k,D.x,D.y,D.z,ce,ge,Me,Ae,ct.data)):F.texSubImage3D(Re,k,D.x,D.y,D.z,ce,ge,Me,Ae,Fe,ct),F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ln),F.pixelStorei(F.UNPACK_SKIP_ROWS,At),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ei),k===0&&V.generateMipmaps&&F.generateMipmap(Re),pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,pe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===mf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===wc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Nr:Gv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?Nt:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ef=class extends Jo{};ef.prototype.isWebGL1Renderer=!0;var pc=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};var jo=class t extends rr{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Rn(s,3)),this.setAttribute("normal",new Rn(s.slice(),3)),this.setAttribute("uv",new Rn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){let p=new N,M=new N,C=new N;for(let b=0;b<n.length;b+=3)g(n[b+0],p),g(n[b+1],M),g(n[b+2],C),l(p,M,C,m)}function l(m,p,M,C){let b=C+1,A=[];for(let P=0;P<=b;P++){A[P]=[];let x=m.clone().lerp(M,P/b),w=p.clone().lerp(M,P/b),U=b-P;for(let Y=0;Y<=U;Y++)Y===0&&P===b?A[P][Y]=x:A[P][Y]=x.clone().lerp(w,Y/U)}for(let P=0;P<b;P++)for(let x=0;x<2*(b-P)-1;x++){let w=Math.floor(x/2);x%2===0?(d(A[P][w+1]),d(A[P+1][w]),d(A[P][w])):(d(A[P][w+1]),d(A[P+1][w+1]),d(A[P+1][w]))}}function c(m){let p=new N;for(let M=0;M<s.length;M+=3)p.x=s[M+0],p.y=s[M+1],p.z=s[M+2],p.normalize().multiplyScalar(m),s[M+0]=p.x,s[M+1]=p.y,s[M+2]=p.z}function h(){let m=new N;for(let p=0;p<s.length;p+=3){m.x=s[p+0],m.y=s[p+1],m.z=s[p+2];let M=v(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;o.push(M,1-C)}_(),f()}function f(){for(let m=0;m<o.length;m+=6){let p=o[m+0],M=o[m+2],C=o[m+4],b=Math.max(p,M,C),A=Math.min(p,M,C);b>.9&&A<.1&&(p<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),C<.2&&(o[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function g(m,p){let M=m*3;p.x=e[M+0],p.y=e[M+1],p.z=e[M+2]}function _(){let m=new N,p=new N,M=new N,C=new N,b=new Ge,A=new Ge,P=new Ge;for(let x=0,w=0;x<s.length;x+=9,w+=6){m.set(s[x+0],s[x+1],s[x+2]),p.set(s[x+3],s[x+4],s[x+5]),M.set(s[x+6],s[x+7],s[x+8]),b.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),P.set(o[w+4],o[w+5]),C.copy(m).add(p).add(M).divideScalar(3);let U=v(C);y(b,w+0,m,U),y(A,w+2,p,U),y(P,w+4,M,U)}}function y(m,p,M,C){C<0&&m.x===1&&(o[p]=m.x-1),M.x===0&&M.z===0&&(o[p]=C/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.details)}};var mc=class t extends jo{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},gc=class t extends jo{constructor(e=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var vc=class t extends jo{constructor(e=1,n=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var _c=class extends Ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wv,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Zl(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function wT(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Vs=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tf=class extends Vs{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:B0,endingEnd:B0}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case z0:s=e,a=2*n-i;break;case V0:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case z0:o=e,l=2*i-n;break;case V0:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,g=this._weightNext,_=(i-n)/(r-n),y=_*_,v=y*_,u=-d*v+2*d*y-d*_,m=(1+d)*v+(-1.5-2*d)*y+(-.5+d)*_+1,p=(-1-g)*v+(1.5+g)*y+.5*_,M=g*v-g*y;for(let C=0;C!==a;++C)s[C]=u*o[h+C]+m*o[c+C]+p*o[l+C]+M*o[f+C];return s}},nf=class extends Vs{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}},rf=class extends Vs{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zl(n,this.TimeBufferType),this.values=Zl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Zl(e.times,Array),values:Zl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Jl:n=this.InterpolantFactoryMethodDiscrete;break;case jl:n=this.InterpolantFactoryMethodLinear;break;case td:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jl;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return td}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&wT(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===td,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,g=f+i;for(let _=0;_!==i;++_){let y=n[f+_];if(y!==n[d+_]||y!==n[g+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let g=0;g!==i;++g)n[d+g]=n[f+g]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=jl;var Fr=class extends Xn{};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Jl;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var sf=class extends Xn{};sf.prototype.ValueTypeName="color";var of=class extends Xn{};of.prototype.ValueTypeName="number";var af=class extends Vs{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let h=c+a;c!==h;c+=4)ir.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ko=class extends Xn{InterpolantFactoryMethodLinear(e){return new af(this.times,this.values,this.getValueSize(),e)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.DefaultInterpolation=jl;Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends Xn{};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Jl;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var lf=class extends Xn{};lf.prototype.ValueTypeName="vector";var cf=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let g=c[f],_=c[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}},ET=new cf,uf=class{constructor(e){this.manager=e!==void 0?e:ET,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};uf.DEFAULT_MATERIAL_NAME="__DEFAULT";var yc=class extends Pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}};var Ad=new Mt,Rv=new N,Pv=new N,hf=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;Rv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rv),Pv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pv),n.updateMatrixWorld(),Ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Lv=new Mt,Ho=new N,bd=new N,df=class extends hf{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ho),bd.copy(i.position),bd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(bd),i.updateMatrixWorld(),r.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Lv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lv)}},Qo=class extends yc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new df}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var xc=class extends yc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=Iv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function Iv(){return(typeof performance=="undefined"?Date:performance).now()}var vf="\\[\\]\\.:\\/",TT=new RegExp("["+vf+"]","g"),_f="[^"+vf+"]",AT="[^"+vf.replace("\\.","")+"]",bT=/((?:WC+[\/:])*)/.source.replace("WC",_f),CT=/(WCOD+)?/.source.replace("WCOD",AT),RT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),PT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),LT=new RegExp("^"+bT+CT+RT+PT+"$"),IT=["material","materials","bones","map"],ff=class{constructor(e,n,i){let r=i||ot.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},ot=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(TT,"")}static parseTrackName(e){let n=LT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);IT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=ff;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var KT=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");
/* ============================================================================
   PORTFOLIO APP  (the only hand-maintained part of this bundle)
   Everything above this comment is minified library code: React 18.3.1 and
   Three.js r160. The app code below refers to those libraries through the
   bundler's short aliases - do not rename them:

     I  = React                 n_ = ReactDOM (client)
     Jo = WebGLRenderer         pc = Scene            Ht = PerspectiveCamera
     Sc = Clock                 ji = Group            on = Mesh
     xc = AmbientLight          Qo = PointLight
     mc = IcosahedronGeometry   gc = OctahedronGeometry   vc = TetrahedronGeometry
     _c = MeshStandardMaterial  Or = MeshBasicMaterial
   ========================================================================== */
(function () {
  "use strict";

  const React = I.default;
  const h = React.createElement;
  const useState = I.useState;
  const useEffect = I.useEffect;
  const useRef = I.useRef;

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------- data -- */

  const EMAIL = "eng.sharvilmishra@gmail.com";
  const GITHUB_USER = "SharvilMishra";

  const SECTION_IDS = ["home", "about", "skills", "work", "journey", "contact"];
  const SECTION_LABELS = {
    home: "Start",
    about: "About",
    skills: "Stack",
    work: "Work",
    journey: "Log",
    contact: "Contact"
  };

  const MARQUEE_ITEMS = [
    "HTML", "CSS", "JavaScript", "C++", "Python",
    "Firebase", "Git", "Blender", "Unreal Engine", "Vercel"
  ];

  const SKILL_GROUPS = [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "Responsive Design", "Modern UI/UX"] },
    { title: "Languages", items: ["C++", "Python", "JavaScript"] },
    { title: "Tools", items: ["Git", "GitHub", "VS Code", "Blender", "Unreal Engine"] },
    { title: "Approach", items: ["Problem Solving", "Communication", "Teamwork", "Continuous Learning"] }
  ];

  const PROJECTS = [
    {
      facet: "Facet I",
      name: "AnimaLearn",
      desc: "An interactive learning platform that turns dense STEM concepts into animated, visual explanations \u2014 built to make ideas click instead of scroll past.",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "https://sharvilmishra.github.io/AnimaLearn/",
      github: "https://github.com/SharvilMishra/AnimaLearn",
      offset: false
    },
    {
      facet: "Facet II",
      name: "SIH26107",
      desc: "ManakAI \u2014 a RAG-based regulatory assistant built for BIS (Bureau of Indian Standards): standards, certification and lab lookup, consumer verification, and a bilingual English/Hindi chat interface via the Bhashini API. Built for Smart India Hackathon.",
      stack: ["Python", "FastAPI", "RAG", "Bhashini API"],
      live: "https://manakai-delta.vercel.app/",
      github: null,
      offset: true
    },
    {
      facet: "Facet III",
      name: "WeatherGPT",
      desc: "An AI weather decision-intelligence PWA delivering personalized recommendations in English, Hindi, and Hinglish, with voice support. Built for Smart India Hackathon.",
      stack: ["React", "TypeScript", "Tailwind", "Supabase"],
      live: "https://sharvilmishra.github.io/WeatherGPT/",
      github: "https://github.com/SharvilMishra/WeatherGPT",
      offset: false
    },
    {
      facet: "Facet IV",
      name: "IUDEX",
      desc: "A username-based real-time messaging app \u2014 find anyone by their @username and start a private conversation.",
      stack: [],
      live: "https://iudex-plum.vercel.app/",
      github: null,
      offset: true
    },
    {
      facet: "Facet V",
      name: "Aircraft",
      desc: "An aviation-inspired site built as a pure craft exercise \u2014 layered motion and a distinct visual identity, no template in sight.",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "https://sharvilmishra.github.io/Aircraft/",
      github: "https://github.com/SharvilMishra/Aircraft",
      offset: false
    }
  ];

  const TIMELINE = [
    { t: "Started programming", d: "First lines of code, first real problems to solve." },
    { t: "Learned web development", d: "HTML, CSS, and JavaScript fundamentals, properly." },
    { t: "Shipped the first website", d: "First live project on the open web." },
    { t: "Built AnimaLearn", d: "An interactive platform for STEM concepts that stick." },
    { t: "Built a Gym Management System", d: "A complete operations tool, start to finish." },
    { t: "Started game development", d: "Moved into real-time, interactive systems." },
    { t: "Learning Unreal Engine", d: "Going deeper into professional game tooling." },
    { t: "Next up: an internship", d: "Looking to put all of this to work on a real team." }
  ];

  // Section heading follows the real project count, so it can't drift out of date.
  const NUMBER_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  const WORK_TITLE =
    (NUMBER_WORDS[PROJECTS.length] || String(PROJECTS.length)) + " things worth showing.";

  const ICONS = {github:t=>I.default.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",...t},I.default.createElement("path",{d:"M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"})),linkedin:t=>I.default.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",...t},I.default.createElement("path",{d:"M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"})),instagram:t=>I.default.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",...t},I.default.createElement("path",{d:"M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"})),mail:t=>I.default.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",...t},I.default.createElement("path",{d:"M3 6h18v12H3z"}),I.default.createElement("path",{d:"m3 7 9 6 9-6"})),arrow:t=>I.default.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...t},I.default.createElement("path",{d:"M7 17 17 7M8 7h9v9"}))};

  const PFP_SRC = "data:image/jpeg;base64,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";

  /* ------------------------------------------------------------- hooks ---- */

  // Fades elements in (adds .visible) the first time they scroll into view.
  function useReveal() {
    useEffect(() => {
      const els = document.querySelectorAll(".reveal");
      if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
        els.forEach((el) => el.classList.add("visible"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.13 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, []);
  }

  // Returns the id of the section currently under the "reading line"
  // (40% down the viewport). Position-based on purpose: an IntersectionObserver
  // with a high threshold can never fire for sections taller than the observed band.
  function useScrollSpy(ids) {
    const [active, setActive] = useState(ids[0]);
    useEffect(() => {
      let queued = false;

      const update = () => {
        queued = false;
        const line = window.innerHeight * 0.4;
        let current = ids[0];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) current = id;
        }
        const atBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        setActive(atBottom ? ids[ids.length - 1] : current);
      };

      const schedule = () => {
        if (!queued) {
          queued = true;
          requestAnimationFrame(update);
        }
      };

      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      update();
      return () => {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      };
    }, [ids]);
    return active;
  }

  /* --------------------------------------------------------- components --- */

  // Wrapper that tilts toward the pointer. The 3D perspective comes from the
  // parent container in CSS (.skills-grid, .project-list, .pfp-orb).
  function Tilt(props) {
    const ref = useRef(null);
    return h(
      "div",
      {
        className: props.className,
        ref,
        onMouseMove: (e) => {
          const el = ref.current;
          if (!el || prefersReducedMotion()) return;
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          el.style.transform =
            "rotateX(" + (0.5 - py) * 10 + "deg) rotateY(" + (px - 0.5) * 10 + "deg)";
          el.style.setProperty("--mx", px * 100 + "%");
          el.style.setProperty("--my", py * 100 + "%");
        },
        onMouseLeave: () => {
          if (ref.current) ref.current.style.transform = "rotateX(0) rotateY(0)";
        }
      },
      React.Children.toArray(props.children)
    );
  }

  function PfpOrb() {
    return h(
      "div",
      { className: "pfp-orb reveal" },
      h("div", { className: "pfp-glow" }),
      h(
        Tilt,
        { className: "pfp-plate glass" },
        h("div", { className: "pfp-sheen" }),
        h(
          "div",
          { className: "pfp-img-frame" },
          h("img", { src: PFP_SRC, alt: "Sharvil Mishra" })
        )
      )
    );
  }

  function DotNav() {
    const active = useScrollSpy(SECTION_IDS);
    return h(
      "nav",
      { className: "dotnav", "aria-label": "Sections" },
      SECTION_IDS.map((id) =>
        h(
          "a",
          {
            key: id,
            href: "#" + id,
            className: active === id ? "dot active" : "dot",
            "aria-current": active === id ? "location" : undefined
          },
          h("span", { className: "dot-mark" }),
          h("span", { className: "dot-label mono" }, SECTION_LABELS[id])
        )
      )
    );
  }

  function TopBar() {
    return h(
      "div",
      { className: "topbar" },
      h("a", { href: "#home", className: "mark" }, "SM"),
      h(
        "a",
        { href: "#contact", className: "topcta mono" },
        "Get in touch ",
        h(ICONS.arrow, { "aria-hidden": "true" })
      )
    );
  }

  // Fixed full-screen Three.js backdrop of drifting wireframe shards.
  function ShardField() {
    const hostRef = useRef(null);

    useEffect(() => {
      const host = hostRef.current;
      if (!host) return;
      const reduced = prefersReducedMotion();
      let width = window.innerWidth;
      let height = window.innerHeight;

      // WebGL can be unavailable (disabled GPU, blocked, very old device).
      // The background is decoration, so fail quietly and keep the page.
      let renderer;
      try {
        renderer = new Jo({ antialias: true, alpha: true });
      } catch (err) {
        console.warn("Background scene disabled: WebGL is not available.", err);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      host.appendChild(renderer.domElement);

      const AMBER = 0xff8a4c;
      const TEAL = 0x5eead4;

      const scene = new pc();
      const camera = new Ht(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 13);

      scene.add(new xc(0xffffff, 0.55));
      const amberLight = new Qo(AMBER, 3.2, 40);
      amberLight.position.set(-8, 4, 6);
      scene.add(amberLight);
      const tealLight = new Qo(TEAL, 2.6, 40);
      tealLight.position.set(9, -3, 4);
      scene.add(tealLight);

      const makeGeometry = [
        () => new mc(1, 0), // icosahedron
        () => new gc(1, 0), // octahedron
        () => new vc(1, 0)  // tetrahedron
      ];
      const shards = [];
      const SHARD_COUNT = 16;
      for (let i = 0; i < SHARD_COUNT; i++) {
        const geometry = makeGeometry[i % makeGeometry.length]();
        const accent = i % 2 === 0 ? AMBER : TEAL;

        const glass = new on(
          geometry,
          new _c({ color: 0xf5f3f0, transparent: true, opacity: 0.06, roughness: 0.15, metalness: 0.1, flatShading: true })
        );
        const edges = new on(
          geometry,
          new Or({ color: accent, wireframe: true, transparent: true, opacity: 0.55 })
        );
        edges.scale.setScalar(1.015);
        const mesh = new on(
          geometry,
          new Or({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.12 })
        );

        const group = new ji();
        group.add(glass, edges, mesh);
        group.scale.setScalar(0.35 + Math.random() * 0.9);
        group.position.set(
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 26,
          (Math.random() - 0.5) * 14 - 4
        );
        group.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        scene.add(group);

        shards.push({
          group,
          spinX: (Math.random() - 0.5) * 0.25,
          spinY: (Math.random() - 0.5) * 0.18,
          bobSpeed: 0.15 + Math.random() * 0.25,
          bobAmp: 0.3 + Math.random() * 0.6,
          baseY: group.position.y,
          phase: Math.random() * Math.PI * 2
        });
      }

      let scrollY = window.scrollY;
      let mouseX = 0;
      let mouseY = 0;
      let camX = 0;
      let camY = 0;
      const onScroll = () => { scrollY = window.scrollY; };
      const onMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("mousemove", onMouseMove);

      const clock = new Sc();
      let lastTime = 0;
      let raf = 0;

      // Motion is driven by elapsed time (not "per frame"), so it looks the
      // same on 60 Hz and 120 Hz displays.
      const frame = () => {
        const time = clock.getElapsedTime();
        const dt = Math.min(time - lastTime, 0.1); // cap after tab switches
        lastTime = time;

        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = scrollY / maxScroll; // 0 at top -> 1 at bottom
        const follow = 1 - Math.pow(1 - 0.03, dt * 60); // 3% easing per frame at 60 fps

        shards.forEach((s) => {
          s.group.rotation.x += s.spinX * 0.6 * dt;
          s.group.rotation.y += s.spinY * 0.6 * dt;
          s.group.position.y = s.baseY + Math.sin(time * s.bobSpeed + s.phase) * s.bobAmp + progress * 10;
        });

        camY += (mouseY * 0.6 - camY) * follow;
        camX += (mouseX * 0.6 - camX) * follow;
        camera.position.x = camX;
        camera.position.y = -camY - progress * 2.4;
        camera.lookAt(0, -progress * 2.4, 0);

        amberLight.position.x = Math.sin(time * 0.2) * 8 - 4;
        tealLight.position.x = Math.cos(time * 0.18) * 8 + 4;

        renderer.render(scene, camera);
        raf = requestAnimationFrame(frame);
      };

      // Reduced motion: draw a single still frame (and redraw on resize) instead of looping.
      if (reduced) renderer.render(scene, camera);
      else frame();

      const onResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        if (reduced) renderer.render(scene, camera);
      };
      window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        shards.forEach((s) =>
          s.group.traverse((obj) => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) obj.material.dispose();
          })
        );
        if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
      };
    }, []);

    return h("div", { id: "shard-field", ref: hostRef, "aria-hidden": "true" });
  }

  // If anything in the background scene throws, drop the scene - never the page.
  class SceneBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { failed: false };
    }
    static getDerivedStateFromError() {
      return { failed: true };
    }
    componentDidCatch(err) {
      console.warn("Background scene disabled after an error.", err);
    }
    render() {
      return this.state.failed ? null : this.props.children;
    }
  }

  // Soft bubbles inside a project card that drift and get pushed away by the cursor.
  // Rendered imperatively for speed; only animates while the card is on screen.
  function BubbleField(props) {
    const count = props && props.count ? props.count : 10;
    const ref = useRef(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const host = el.parentElement;
      if (!host) return;
      const reduced = prefersReducedMotion();

      let hostW = 0;
      let hostH = 0;
      const bubbles = [];
      const nodes = [];

      const paint = () => {
        for (let i = 0; i < bubbles.length; i++) {
          const b = bubbles[i];
          nodes[i].style.transform =
            "translate(" + (b.x - b.r).toFixed(1) + "px," + (b.y - b.r).toFixed(1) + "px)";
        }
      };

      // Home positions are kept as fractions of the card, so they follow it
      // when the card resizes (rotation, font load, window resize).
      const measure = () => {
        hostW = host.clientWidth;
        hostH = host.clientHeight;
        bubbles.forEach((b) => {
          b.hx = b.nx * hostW;
          b.hy = b.ny * hostH;
          if (reduced) {
            b.x = b.hx;
            b.y = b.hy;
          }
        });
        if (reduced) paint();
      };

      hostW = host.clientWidth;
      hostH = host.clientHeight;
      for (let i = 0; i < count; i++) {
        const r = 6 + Math.random() * 15;
        const nx = Math.random();
        const ny = Math.random();
        const b = {
          nx, ny,
          hx: nx * hostW, hy: ny * hostH,
          x: nx * hostW, y: ny * hostH,
          vx: 0, vy: 0,
          r,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.5
        };
        bubbles.push(b);
        const node = document.createElement("div");
        node.className = "bubble";
        node.style.width = node.style.height = r * 2 + "px";
        el.appendChild(node);
        nodes.push(node);
      }
      paint();

      let ro = null;
      if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(measure);
        ro.observe(host);
      }

      const removeNodes = () => nodes.forEach((n) => n.remove());

      if (reduced) {
        return () => {
          if (ro) ro.disconnect();
          removeNodes();
        };
      }

      let mx = -9999;
      let my = -9999;
      const onMove = (e) => {
        const rect = host.getBoundingClientRect();
        mx = e.clientX - rect.left;
        my = e.clientY - rect.top;
      };
      const onLeave = () => {
        mx = -9999;
        my = -9999;
      };
      host.addEventListener("mousemove", onMove);
      host.addEventListener("mouseleave", onLeave);

      // Physics runs in fixed 1/60 s steps so it behaves the same at any refresh rate.
      let t = 0;
      const step = () => {
        t += 0.016;
        for (let i = 0; i < bubbles.length; i++) {
          const b = bubbles[i];
          const dx = b.x - mx;
          const dy = b.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1e-4;
          const pushRadius = b.r + 70;
          if (dist < pushRadius) {
            const force = (pushRadius - dist) / pushRadius;
            b.vx += (dx / dist) * force * 2.6;
            b.vy += (dy / dist) * force * 2.6;
          }
          b.vx += (b.hx - b.x) * 0.012;
          b.vy += (b.hy - b.y) * 0.012;
          b.vx += Math.sin(t * b.speed + b.phase) * 0.05;
          b.vy += Math.cos(t * b.speed * 0.9 + b.phase) * 0.05;
          b.vx *= 0.9;
          b.vy *= 0.9;
          b.x += b.vx;
          b.y += b.vy;
        }
      };

      const STEP = 1 / 60;
      let raf = 0;
      let running = false;
      let lastTs = 0;
      let acc = 0;
      const tick = (ts) => {
        if (!running) return;
        acc = Math.min(acc + Math.max(0, ts - lastTs) / 1000, 0.1);
        lastTs = ts;
        while (acc >= STEP) {
          step();
          acc -= STEP;
        }
        paint();
        raf = requestAnimationFrame(tick);
      };
      const start = () => {
        if (running) return;
        running = true;
        lastTs = performance.now();
        acc = 0;
        raf = requestAnimationFrame(tick);
      };
      const stop = () => {
        running = false;
        cancelAnimationFrame(raf);
      };

      // Only animate while the card is actually on screen.
      let io = null;
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver((entries) => {
          if (entries[entries.length - 1].isIntersecting) start();
          else stop();
        });
        io.observe(host);
      } else {
        start();
      }

      return () => {
        stop();
        if (io) io.disconnect();
        if (ro) ro.disconnect();
        host.removeEventListener("mousemove", onMove);
        host.removeEventListener("mouseleave", onLeave);
        removeNodes();
      };
    }, []);

    return h("div", { className: "bubble-field", ref, "aria-hidden": "true" });
  }

  // Public GitHub stats. The unauthenticated API is rate-limited (60/hour per IP),
  // so a successful response is cached for the browser session.
  function GithubStrip() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
      const cacheKey = "gh-profile:" + GITHUB_USER;
      try {
        const cached = JSON.parse(sessionStorage.getItem(cacheKey));
        if (cached) {
          setProfile(cached);
          return;
        }
      } catch (e) { /* storage unavailable or corrupt - just fetch */ }

      const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      fetch(
        "https://api.github.com/users/" + GITHUB_USER,
        controller ? { signal: controller.signal } : undefined
      )
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!data) return;
          const slim = {
            avatar_url: data.avatar_url,
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following
          };
          setProfile(slim);
          try { sessionStorage.setItem(cacheKey, JSON.stringify(slim)); } catch (e) { /* ignore */ }
        })
        .catch(() => { /* offline or rate-limited: keep the placeholders */ });

      return () => { if (controller) controller.abort(); };
    }, []);

    const stat = (value, label) =>
      h(
        "div",
        null,
        h("b", null, value == null ? "\u2014" : value),
        h("span", { className: "mono" }, label)
      );

    return h(
      "div",
      { className: "gh-strip glass reveal" },
      h("img", {
        className: "gh-avatar",
        src: (profile && profile.avatar_url) || "https://github.com/" + GITHUB_USER + ".png",
        alt: "",
        width: 48,
        height: 48,
        loading: "lazy"
      }),
      h(
        "div",
        { className: "gh-who" },
        h("div", { className: "gh-name" }, "github.com/" + GITHUB_USER),
        h("div", { className: "gh-sub mono" }, "live repository data")
      ),
      h(
        "div",
        { className: "gh-nums" },
        stat(profile && profile.public_repos, "repos"),
        stat(profile && profile.followers, "followers"),
        stat(profile && profile.following, "following")
      ),
      h(
        "a",
        { className: "btn btn-line", href: "https://github.com/" + GITHUB_USER, target: "_blank", rel: "noopener noreferrer" },
        "Visit ",
        h(ICONS.arrow, { width: "14", height: "14", "aria-hidden": "true" })
      )
    );
  }

  // There is no backend: submitting opens the visitor's mail client with the message filled in.
  function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const update = (key) => (e) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

    const onSubmit = (e) => {
      e.preventDefault();
      const name = form.name.trim();
      const email = form.email.trim();
      const subject = "Portfolio message from " + (name || "a visitor");
      const body = "From: " + name + " (" + email + ")\r\n\r\n" + form.message;
      // Encode the WHOLE body: a name like "A & B" or "#1" must not break the mailto URL.
      window.location.href =
        "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    };

    return h(
      "form",
      { className: "form-card glass reveal", onSubmit },
      h(
        "div",
        { className: "field" },
        h("label", { className: "mono", htmlFor: "contact-name" }, "NAME"),
        h("input", { id: "contact-name", name: "name", autoComplete: "name", required: true, value: form.name, onChange: update("name"), placeholder: "Your name" })
      ),
      h(
        "div",
        { className: "field" },
        h("label", { className: "mono", htmlFor: "contact-email" }, "EMAIL"),
        h("input", { id: "contact-email", name: "email", type: "email", autoComplete: "email", required: true, value: form.email, onChange: update("email"), placeholder: "you@example.com" })
      ),
      h(
        "div",
        { className: "field" },
        h("label", { className: "mono", htmlFor: "contact-message" }, "MESSAGE"),
        h("textarea", { id: "contact-message", name: "message", required: true, value: form.message, onChange: update("message"), placeholder: "Say hello..." })
      ),
      h(
        "button",
        { type: "submit", className: "btn btn-solid", style: { width: "100%", justifyContent: "center" } },
        "Send message"
      ),
      h("p", { className: "submit-note mono" }, "opens your email client \u2014 no backend attached")
    );
  }

  function ProjectCard(props) {
    const p = props.project;
    return h(
      Tilt,
      { className: "project-card glass reveal" + (p.offset ? " offset" : "") },
      h(BubbleField, { count: 10 }),
      h(
        "div",
        { className: "project-content" },
        h("span", { className: "project-facet mono" }, p.facet),
        h("h3", null, p.name),
        h("p", null, p.desc),
        p.stack.length > 0 &&
          h(
            "div",
            { className: "project-stack" },
            p.stack.map((s) => h("span", { className: "chip", key: s }, s))
          ),
        h(
          "div",
          { className: "project-links" },
          p.live &&
            h("a", { href: p.live, target: "_blank", rel: "noopener noreferrer" }, "Live ", h(ICONS.arrow, { width: "14", height: "14", "aria-hidden": "true" })),
          p.github &&
            h("a", { href: p.github, target: "_blank", rel: "noopener noreferrer" }, "Code ", h(ICONS.github, { width: "14", height: "14", "aria-hidden": "true" })),
          !p.live && !p.github && h("span", { className: "project-links-note mono" }, "private build")
        )
      )
    );
  }

  function PortfolioApp() {
    useReveal();

    const contactLink = (href, icon, text, external) =>
      h(
        "a",
        Object.assign({ href, className: "contact-link" }, external ? { target: "_blank", rel: "noopener noreferrer" } : null),
        h(icon, { width: "16", height: "16", "aria-hidden": "true" }),
        " " + text
      );

    return h(
      React.Fragment,
      null,
      h(SceneBoundary, null, h(ShardField, null)),
      h("div", { className: "grain", "aria-hidden": "true" }),
      h(TopBar, null),
      h(DotNav, null),
      h(
        "main",
        null,

        /* ---- hero ---- */
        h(
          "section",
          { id: "home", className: "hero" },
          h(
            "div",
            { className: "wrap" },
            h(PfpOrb, null),
            h("p", { className: "kicker mono" }, "Software Developer \u2014 Web & Game Dev"),
            h("h1", { className: "hero-title" }, "Sharvil", h("br", null), h("em", null, "Mishra")),
            h(
              "p",
              { className: "hero-sub" },
              "B.Tech student who builds things end to end \u2014 interface, backend, deploy \u2014 with a soft spot for interfaces that feel like glass: layered, refractive, a little alive."
            ),
            h(
              "div",
              { className: "btn-row" },
              h("a", { href: "#work", className: "btn btn-solid" }, "See the work"),
              h("a", { href: "#contact", className: "btn btn-line" }, "Get in touch")
            )
          ),
          h("div", { className: "scroll-cue mono" }, "scroll")
        ),

        /* ---- marquee (decorative repeat of the stack) ---- */
        h(
          "section",
          { className: "marquee-wrap", "aria-hidden": "true" },
          h(
            "div",
            { className: "marquee" },
            h(
              "div",
              { className: "marquee-track" },
              MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((name, i) =>
                h("span", { key: i, className: "marquee-item" }, name)
              )
            )
          )
        ),

        /* ---- about ---- */
        h(
          "section",
          { id: "about" },
          h(
            "div",
            { className: "wrap about-grid" },
            h(
              "div",
              { className: "reveal" },
              h("p", { className: "section-kicker mono" }, "Facet \u2014 About"),
              h("h2", { className: "section-title" }, "Owns the whole stack,", h("br", null), "on purpose.")
            ),
            h(
              "div",
              { className: "about-copy reveal" },
              h(
                "p",
                null,
                "B.Tech student focused on software development, web development, and game development \u2014 more interested in shipping real, working projects than polishing prototypes that never leave the sandbox."
              ),
              h(
                "p",
                null,
                "Every project here was designed, built, and deployed independently. That habit \u2014 owning the interface, the backend, and the infrastructure \u2014 is also exactly how this site was put together."
              ),
              h(
                "div",
                { className: "fact-row" },
                h("div", { className: "fact glass" }, h("span", { className: "mono" }, "Stack"), "No-build, CDN-first workflow"),
                h("div", { className: "fact glass" }, h("span", { className: "mono" }, "Backend"), "Firebase \u2014 Auth, Firestore, Storage"),
                h("div", { className: "fact glass" }, h("span", { className: "mono" }, "Deploy"), "Vercel"),
                h("div", { className: "fact glass" }, h("span", { className: "mono" }, "Also into"), "Blender + Unreal Engine")
              )
            )
          )
        ),

        /* ---- skills ---- */
        h(
          "section",
          { id: "skills" },
          h(
            "div",
            { className: "wrap" },
            h("p", { className: "section-kicker mono reveal" }, "Facet \u2014 Stack"),
            h("h2", { className: "section-title reveal" }, "What it's built with."),
            h(
              "div",
              { className: "skills-grid" },
              SKILL_GROUPS.map((group) =>
                h(
                  Tilt,
                  { key: group.title, className: "skill-card glass reveal" },
                  h("h3", null, group.title),
                  h(
                    "div",
                    { className: "chip-row" },
                    group.items.map((item) => h("span", { className: "chip", key: item }, item))
                  )
                )
              )
            )
          )
        ),

        /* ---- work ---- */
        h(
          "section",
          { id: "work" },
          h(
            "div",
            { className: "wrap" },
            h("p", { className: "section-kicker mono reveal" }, "Facet \u2014 Work"),
            h("h2", { className: "section-title reveal" }, WORK_TITLE),
            h(
              "div",
              { className: "project-list" },
              PROJECTS.map((project) => h(ProjectCard, { key: project.name, project }))
            )
          )
        ),

        /* ---- journey ---- */
        h(
          "section",
          { id: "journey" },
          h(
            "div",
            { className: "wrap" },
            h("p", { className: "section-kicker mono reveal" }, "Facet \u2014 Log"),
            h("h2", { className: "section-title reveal" }, "How it's gone so far."),
            h(
              "div",
              { className: "timeline" },
              TIMELINE.map((item, i) =>
                h(
                  "div",
                  { className: "t-item reveal", key: i },
                  h("span", { className: "t-index mono" }, String(i + 1).padStart(2, "0")),
                  h("div", null, h("h3", null, item.t), h("p", null, item.d))
                )
              )
            ),
            h(GithubStrip, null)
          )
        ),

        /* ---- contact ---- */
        h(
          "section",
          { id: "contact" },
          h(
            "div",
            { className: "wrap contact-grid" },
            h(
              "div",
              { className: "reveal" },
              h("p", { className: "section-kicker mono" }, "Facet \u2014 Contact"),
              h("h2", { className: "section-title" }, "Let's build", h("br", null), "something."),
              h(
                "p",
                { className: "contact-lede" },
                "Open to internships, collaborations, or just talking shop about interfaces and interactive builds."
              ),
              h(
                "div",
                { className: "contact-links" },
                contactLink("mailto:" + EMAIL, ICONS.mail, EMAIL, false),
                contactLink("https://www.linkedin.com/in/sharvil-mishra-07888238a/", ICONS.linkedin, "sharvil-mishra", true),
                contactLink("https://www.instagram.com/sharvil.tech/", ICONS.instagram, "@sharvil.tech", true),
                contactLink("https://github.com/" + GITHUB_USER, ICONS.github, GITHUB_USER, true)
              )
            ),
            h(ContactForm, null)
          )
        )
      ),
      h(
        "footer",
        null,
        h(
          "div",
          { className: "wrap foot-row mono" },
          h("span", null, "\xA9 2026 Sharvil Mishra"),
          h("span", null, "Built with React & Three.js")
        )
      )
    );
  }

  n_.default.createRoot(document.getElementById("root")).render(h(PortfolioApp, null));
})();
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/