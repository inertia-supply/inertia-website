/*! For license information please see 1.9fde4be8.chunk.js.LICENSE.txt */
(this["webpackJsonpinertia-website"]=this["webpackJsonpinertia-website"]||[]).push([[1],{220:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(222);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},221:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(299);var o=n(287),c=n(301);function i(t,e){return Object(r.a)(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(a){o=!0,c=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}}(t,e)||Object(o.a)(t,e)||Object(c.a)()}},222:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},224:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(54);function o(t,e){if(null==t)return{};var n,o,c=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}},225:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},226:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},227:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},228:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(336);var o=n(337);function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(r.a)(t);if(e){var i=Object(r.a)(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}},229:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},235:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=function(t){return+setTimeout(t,16)},o=function(t){return clearTimeout(t)};function c(t){return r(t)}"undefined"!==typeof window&&"requestAnimationFrame"in window&&(r=function(t){return window.requestAnimationFrame(t)},o=function(t){return window.cancelAnimationFrame(t)}),c.cancel=o},236:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(300);var o=n(307),c=n(287);function i(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},243:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return u}));var r=n(285);function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){"function"===typeof t?t(e):"object"===o(t)&&t&&"current"in t&&(t.current=e)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){e.forEach((function(e){c(e,t)}))}}function u(t){var e,n,o=Object(r.isMemo)(t)?t.type.type:t.type;return!("function"===typeof o&&!(null===(e=o.prototype)||void 0===e?void 0:e.render))&&!("function"===typeof t&&!(null===(n=t.prototype)||void 0===n?void 0:n.render))}},245:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},248:function(t,e,n){"use strict";n.d(e,"a",(function(){return nt}));var r=n(222),o=n(220),c=n(221),i=n(229),u=n(1),a=n(269),f=n(243),s=n(45),l=n.n(s),b=n(270);function y(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit".concat(t)]="webkit".concat(e),n["Moz".concat(t)]="moz".concat(e),n["ms".concat(t)]="MS".concat(e),n["O".concat(t)]="o".concat(e.toLowerCase()),n}var p=function(t,e){var n={animationend:y("Animation","AnimationEnd"),transitionend:y("Transition","TransitionEnd")};return t&&("AnimationEvent"in e||delete n.animationend.animation,"TransitionEvent"in e||delete n.transitionend.transition),n}(Object(b.a)(),"undefined"!==typeof window?window:{}),v={};if(Object(b.a)()){var d=document.createElement("div");v=d.style}var m={};function O(t){if(m[t])return m[t];var e=p[t];if(e)for(var n=Object.keys(e),r=n.length,o=0;o<r;o+=1){var c=n[o];if(Object.prototype.hasOwnProperty.call(e,c)&&c in v)return m[t]=e[c],m[t]}return""}var j=O("animationend"),h=O("transitionend"),S=!(!j||!h),E=j||"animationend",w=h||"transitionend";function g(t,e){return t?"object"===Object(i.a)(t)?t[e.replace(/-\w/g,(function(t){return t[1].toUpperCase()}))]:"".concat(t,"-").concat(e):null}var k="none",A="appear",P="enter",C="leave",$="none",L="prepare",R="start",M="active",T="end";function _(t){var e=Object(u.useRef)(!1),n=Object(u.useState)(t),r=Object(c.a)(n,2),o=r[0],i=r[1];return Object(u.useEffect)((function(){return function(){e.current=!0}}),[]),[o,function(t){e.current||i(t)}]}var x=Object(b.a)()?u.useLayoutEffect:u.useEffect,D=n(235),F=[L,R,M,T];function N(t){return t===M||t===T}var I=function(t,e){var n=u.useState($),r=Object(c.a)(n,2),o=r[0],i=r[1],a=function(){var t=u.useRef(null);function e(){D.a.cancel(t.current)}return u.useEffect((function(){return function(){e()}}),[]),[function n(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;e();var c=Object(D.a)((function(){o<=1?r({isCanceled:function(){return c!==t.current}}):n(r,o-1)}));t.current=c},e]}(),f=Object(c.a)(a,2),s=f[0],l=f[1];return x((function(){if(o!==$&&o!==T){var t=F.indexOf(o),n=F[t+1],r=e(o);false===r?i(n):s((function(t){function e(){t.isCanceled()||i(n)}!0===r?e():Promise.resolve(r).then(e)}))}}),[t,o]),u.useEffect((function(){return function(){l()}}),[]),[function(){i(L)},o]};function z(t,e,n,i){var a=i.motionEnter,f=void 0===a||a,s=i.motionAppear,l=void 0===s||s,b=i.motionLeave,y=void 0===b||b,p=i.motionDeadline,v=i.motionLeaveImmediately,d=i.onAppearPrepare,m=i.onEnterPrepare,O=i.onLeavePrepare,j=i.onAppearStart,h=i.onEnterStart,S=i.onLeaveStart,g=i.onAppearActive,$=i.onEnterActive,T=i.onLeaveActive,D=i.onAppearEnd,F=i.onEnterEnd,z=i.onLeaveEnd,V=i.onVisibleChanged,q=_(),J=Object(c.a)(q,2),K=J[0],U=J[1],H=_(k),W=Object(c.a)(H,2),B=W[0],G=W[1],Q=_(null),X=Object(c.a)(Q,2),Y=X[0],Z=X[1],tt=Object(u.useRef)(!1),et=Object(u.useRef)(null),nt=Object(u.useRef)(!1),rt=Object(u.useRef)(null);function ot(){return n()||rt.current}var ct=Object(u.useRef)(!1);function it(t){var e,n=ot();t&&!t.deadline&&t.target!==n||(B===A&&ct.current?e=null===D||void 0===D?void 0:D(n,t):B===P&&ct.current?e=null===F||void 0===F?void 0:F(n,t):B===C&&ct.current&&(e=null===z||void 0===z?void 0:z(n,t)),!1===e||nt.current||(G(k),Z(null)))}var ut=function(t){var e=Object(u.useRef)(),n=Object(u.useRef)(t);n.current=t;var r=u.useCallback((function(t){n.current(t)}),[]);function o(t){t&&(t.removeEventListener(w,r),t.removeEventListener(E,r))}return u.useEffect((function(){return function(){o(e.current)}}),[]),[function(t){e.current&&e.current!==t&&o(e.current),t&&t!==e.current&&(t.addEventListener(w,r),t.addEventListener(E,r),e.current=t)},o]}(it),at=Object(c.a)(ut,1)[0],ft=u.useMemo((function(){var t,e,n;switch(B){case"appear":return t={},Object(r.a)(t,L,d),Object(r.a)(t,R,j),Object(r.a)(t,M,g),t;case"enter":return e={},Object(r.a)(e,L,m),Object(r.a)(e,R,h),Object(r.a)(e,M,$),e;case"leave":return n={},Object(r.a)(n,L,O),Object(r.a)(n,R,S),Object(r.a)(n,M,T),n;default:return{}}}),[B]),st=I(B,(function(t){if(t===L){var e=ft.prepare;return!!e&&e(ot())}var n;yt in ft&&Z((null===(n=ft[yt])||void 0===n?void 0:n.call(ft,ot(),null))||null);return yt===M&&(at(ot()),p>0&&(clearTimeout(et.current),et.current=setTimeout((function(){it({deadline:!0})}),p))),true})),lt=Object(c.a)(st,2),bt=lt[0],yt=lt[1],pt=N(yt);ct.current=pt,x((function(){if(U(e),t){var n,r=tt.current;tt.current=!0,!r&&e&&l&&(n=A),r&&e&&f&&(n=P),(r&&!e&&y||!r&&v&&!e&&y)&&(n=C),n&&(G(n),bt())}}),[e]),Object(u.useEffect)((function(){(B===A&&!l||B===P&&!f||B===C&&!y)&&G(k)}),[l,f,y]),Object(u.useEffect)((function(){return function(){clearTimeout(et.current),nt.current=!0}}),[]),Object(u.useEffect)((function(){void 0!==K&&B===k&&(null===V||void 0===V||V(K))}),[K,B]);var vt=Y;return ft.prepare&&yt===R&&(vt=Object(o.a)({transition:"none"},vt)),[B,yt,vt,null!==K&&void 0!==K?K:e]}var V=n(225),q=n(226),J=n(227),K=n(228),U=function(t){Object(J.a)(n,t);var e=Object(K.a)(n);function n(){return Object(V.a)(this,n),e.apply(this,arguments)}return Object(q.a)(n,[{key:"render",value:function(){return this.props.children}}]),n}(u.Component);var H=function(t){var e=t;function n(t){return!(!t.motionName||!e)}"object"===Object(i.a)(t)&&(e=t.transitionSupport);var s=u.forwardRef((function(t,e){var i=t.visible,s=void 0===i||i,b=t.removeOnLeave,y=void 0===b||b,p=t.forceRender,v=t.children,d=t.motionName,m=t.leavedClassName,O=t.eventProps,j=n(t),h=Object(u.useRef)(),S=Object(u.useRef)();var E=z(j,s,(function(){try{return Object(a.a)(h.current||S.current)}catch(t){return null}}),t),w=Object(c.a)(E,4),A=w[0],P=w[1],C=w[2],$=w[3],M=Object(u.useRef)(e);M.current=e;var T,_=u.useCallback((function(t){h.current=t,Object(f.b)(M.current,t)}),[]),x=Object(o.a)(Object(o.a)({},O),{},{visible:s});if(v)if(A!==k&&n(t)){var D,F;P===L?F="prepare":N(P)?F="active":P===R&&(F="start"),T=v(Object(o.a)(Object(o.a)({},x),{},{className:l()(g(d,A),(D={},Object(r.a)(D,g(d,"".concat(A,"-").concat(F)),F),Object(r.a)(D,d,"string"===typeof d),D)),style:C}),_)}else T=$?v(Object(o.a)({},x),_):y?p?v(Object(o.a)(Object(o.a)({},x),{},{style:{display:"none"}}),_):null:v(Object(o.a)(Object(o.a)({},x),{},{className:m}),_);else T=null;return u.createElement(U,{ref:S},T)}));return s.displayName="CSSMotion",s}(S),W=n(224),B="add",G="keep",Q="remove",X="removed";function Y(t){var e;return e=t&&"object"===Object(i.a)(t)&&"key"in t?t:{key:t},Object(o.a)(Object(o.a)({},e),{},{key:String(e.key)})}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map(Y)}function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],r=0,c=e.length,i=Z(t),u=Z(e);i.forEach((function(t){for(var e=!1,i=r;i<c;i+=1){var a=u[i];if(a.key===t.key){r<i&&(n=n.concat(u.slice(r,i).map((function(t){return Object(o.a)(Object(o.a)({},t),{},{status:B})}))),r=i),n.push(Object(o.a)(Object(o.a)({},a),{},{status:G})),r+=1,e=!0;break}}e||n.push(Object(o.a)(Object(o.a)({},t),{},{status:Q}))})),r<c&&(n=n.concat(u.slice(r).map((function(t){return Object(o.a)(Object(o.a)({},t),{},{status:B})}))));var a={};n.forEach((function(t){var e=t.key;a[e]=(a[e]||0)+1}));var f=Object.keys(a).filter((function(t){return a[t]>1}));return f.forEach((function(t){(n=n.filter((function(e){var n=e.key,r=e.status;return n!==t||r!==Q}))).forEach((function(e){e.key===t&&(e.status=G)}))})),n}var et=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];var nt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H,n=function(t){Object(J.a)(r,t);var n=Object(K.a)(r);function r(){var t;return Object(V.a)(this,r),(t=n.apply(this,arguments)).state={keyEntities:[]},t.removeKey=function(e){t.setState((function(t){return{keyEntities:t.keyEntities.map((function(t){return t.key!==e?t:Object(o.a)(Object(o.a)({},t),{},{status:X})}))}}))},t}return Object(q.a)(r,[{key:"render",value:function(){var t=this,n=this.state.keyEntities,r=this.props,o=r.component,c=r.children,i=r.onVisibleChanged,a=Object(W.a)(r,["component","children","onVisibleChanged"]),f=o||u.Fragment,s={};return et.forEach((function(t){s[t]=a[t],delete a[t]})),delete a.keys,u.createElement(f,Object.assign({},a),n.map((function(n){var r=n.status,o=Object(W.a)(n,["status"]),a=r===B||r===G;return u.createElement(e,Object.assign({},s,{key:o.key,visible:a,eventProps:o,onVisibleChanged:function(e){null===i||void 0===i||i(e,{key:o.key}),e||t.removeKey(o.key)}}),c)})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.keys,r=e.keyEntities,o=Z(n);return{keyEntities:tt(r,o).filter((function(t){var e=r.find((function(e){var n=e.key;return t.key===n}));return!e||e.status!==X||t.status!==Q}))}}}]),r}(u.Component);return n.defaultProps={component:"div"},n}(S);e.b=H},269:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(106),o=n.n(r);function c(t){return t instanceof HTMLElement?t:o.a.findDOMNode(t)}},270:function(t,e,n){"use strict";function r(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}n.d(e,"a",(function(){return r}))},285:function(t,e,n){"use strict";t.exports=n(338)},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(300);function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},299:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return r}))},300:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},301:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return r}))},307:function(t,e,n){"use strict";function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n.d(e,"a",(function(){return r}))},336:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},337:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(229),o=n(245);function c(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},338:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,b=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,O=r?Symbol.for("react.block"):60121,j=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function E(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case b:case i:case a:case u:case p:return t;default:switch(t=t&&t.$$typeof){case s:case y:case m:case d:case f:return t;default:return e}}case c:return e}}}function w(t){return E(t)===b}e.AsyncMode=l,e.ConcurrentMode=b,e.ContextConsumer=s,e.ContextProvider=f,e.Element=o,e.ForwardRef=y,e.Fragment=i,e.Lazy=m,e.Memo=d,e.Portal=c,e.Profiler=a,e.StrictMode=u,e.Suspense=p,e.isAsyncMode=function(t){return w(t)||E(t)===l},e.isConcurrentMode=w,e.isContextConsumer=function(t){return E(t)===s},e.isContextProvider=function(t){return E(t)===f},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return E(t)===y},e.isFragment=function(t){return E(t)===i},e.isLazy=function(t){return E(t)===m},e.isMemo=function(t){return E(t)===d},e.isPortal=function(t){return E(t)===c},e.isProfiler=function(t){return E(t)===a},e.isStrictMode=function(t){return E(t)===u},e.isSuspense=function(t){return E(t)===p},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===i||t===b||t===a||t===u||t===p||t===v||"object"===typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===d||t.$$typeof===f||t.$$typeof===s||t.$$typeof===y||t.$$typeof===j||t.$$typeof===h||t.$$typeof===S||t.$$typeof===O)},e.typeOf=E}}]);
//# sourceMappingURL=1.9fde4be8.chunk.js.map