!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(j){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return $()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var h={};function d(){}function g(){}function p(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=p.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,c,u){var l=f(r[i],r,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:$}}function $(){return{value:void 0,done:!0}}return g.prototype=p,l(w,"constructor",p),l(p,"constructor",g),g.displayName=l(p,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void e(l)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.297ade96.js","./index-legacy.991fe234.js","./DeletePopover-legacy.778e91c8.js"],(function(t){"use strict";var e,i,a,c,u,l,s,f,h,d,g,p,v,y,m,w,b,x,L,k,_,E,S,$,j,O,C,N,P,A,G,I,T,F;return{setters:[function(t){e=t.d,i=t.u,a=t.a,c=t.b6,u=t.f,l=t.J,s=t.a7,f=t.a0,h=t.bc,d=t.bx,g=t.ai,p=t.Y,v=t.B,y=t.aN,m=t.bd,w=t.n,b=t.W,x=t.e,L=t.t,k=t.m,_=t.bU,E=t.bV,S=t.bW,$=t.bX,j=t.bY,O=t.bZ,C=t.b_,N=t.v,P=t.b$,A=t.c0,G=t.c1,I=t.c2},function(t){T=t.o},function(t){F=t.D}],execute:function(){var B=function(t){var x=e(),L=i().to,k=o(a((function(){return c.post("/admin/storage/delete?id=".concat(t.storage.id))})),2),_=k[0],E=k[1],S=o(a((function(){return c.post("/admin/storage/".concat(t.storage.disabled?"enable":"disable","?id=").concat(t.storage.id))})),2),$=S[0],j=S[1];return u(b,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return l("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:"1px solid ".concat(s())}},get children(){return[u(f,{spacing:"$2",get children(){return[u(h,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return t.storage.mount_path}}),u(d,{colorScheme:"info",get children(){return x("drivers.drivers.".concat(t.storage.driver))}})]}}),u(f,{get children(){return[u(h,{get children(){return[g((function(){return x("storages.common.status")})),": "]}}),u(p,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return t.storage.status}})]}}),u(h,{css:{wordBreak:"break-all"},get children(){return t.storage.remark}}),u(f,{spacing:"$2",get children(){return[u(v,{onClick:function(){L("/@manage/storages/edit/".concat(t.storage.id))},get children(){return x("global.edit")}}),u(v,{get loading(){return $()},colorScheme:"warning",onClick:(o=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j();case 2:n=r.sent,y(n,(function(){t.refresh()}));case 4:case"end":return r.stop()}}),e)}))),function(){return o.apply(this,arguments)}),get children(){return x("global.".concat(t.storage.disabled?"enable":"disable"))}}),u(F,{get name(){return t.storage.mount_path},get loading(){return _()},onClick:(e=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E();case 2:n=r.sent,m(n,(function(){w.success(x("global.delete_success")),t.refresh()}));case 4:case"end":return r.stop()}}),e)}))),function(){return e.apply(this,arguments)})})];var e,o}})]}})};t("default",(function(){var t=e();T("manage.sidemenu.storages");var l=i().to,s=o(a((function(){return c.get("/admin/storage/list")})),2),h=s[0],d=s[1],g=o(x([]),2),p=g[0],y=g[1],F=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:e=t.sent,m(e,(function(t){return y(t.content)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y=o(x([]),2),W=Y[0],D=Y[1],M=o(x([]),2),U=M[0],X=M[1],H=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/admin/driver/names");case 2:e=t.sent,m(e,(function(t){return D(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();H(),F();var J=function(){var e=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.post("/admin/storage/load_all");case 2:n=r.sent,m(n,(function(){w.success(t("storages.other.start_load_success"))}));case 4:case"end":return r.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=L((function(){return p().filter((function(t){return 0===U().length||U().includes(t.driver)}))}));return u(b,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[u(f,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[u(v,{colorScheme:"accent",get loading(){return h()},onClick:F,get children(){return t("global.refresh")}}),u(v,{onClick:function(){l("/@manage/storages/add")},get children(){return t("global.add")}}),u(v,{colorScheme:"warning",get loading(){return h()},onClick:J,get children(){return t("storages.other.load_all")}}),u(k,{get when(){return W().length>0},get children(){return u(_,{multiple:!0,get value(){return U()},onChange:X,get children(){return[u(E,{get children(){return[u(S,{get children(){return t("storages.other.filter_by_driver")}}),u($,{}),u(j,{})]}}),u(O,{get children(){return u(C,{get children(){return u(N,{get each(){return W()},children:function(r){return u(P,{value:r,get children(){return[u(A,{get children(){return t("drivers.drivers.".concat(r))}}),u(G,{})]}})}})}})}})]}})}})]}}),u(I,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return u(N,{get each(){return V()},children:function(t){return u(B,{storage:t,refresh:F})}})}})]}})}))}}}))}();
