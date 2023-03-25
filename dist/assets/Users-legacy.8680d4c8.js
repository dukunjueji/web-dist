!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=L(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}r.wrap=s;var h={};function d(){}function p(){}function g(){}var y={};l(y,c,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==n&&o.call(m,c)&&(y=m);var w=g.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,c,a,u){var l=f(e[i],e,c);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,l(w,"constructor",g),l(g,"constructor",p),p.displayName=l(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,a,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var c=new x(s(t,e,n,o),i);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(l){return void r(l)}a.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.297ade96.js","./index-legacy.991fe234.js","./DeletePopover-legacy.778e91c8.js","./Wether-legacy.a322f994.js"],(function(t){"use strict";var r,i,c,a,u,l,s,f,h,d,p,g,y,v,m,w,b,x,L,E,_,S,j,k,O,$,P;return{setters:[function(t){r=t.d,i=t.u,c=t.a,a=t.b6,u=t.e,l=t.ca,s=t.f,f=t.a0,h=t.B,d=t.Y,p=t.cb,g=t.cc,y=t.cd,v=t.v,m=t.ce,w=t.cf,b=t.cg,x=t.bd,L=t.n,E=t.W,_=t.bx,S=t.ao,j=t.aq,k=t.a2},function(t){O=t.o},function(t){$=t.D},function(t){P=t.W}],execute:function(){var A=function(t){var e=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return s(_,{get colorScheme(){return e[t.role].color},get children(){return e[t.role].name}})},G=function(t){var e=r();return s(f,{spacing:"$0_5",get children(){return s(v,{each:S,children:function(r,n){return s(j,{get label(){return e("users.permissions.".concat(r))},get children(){return s(d,{boxSize:"$2",rounded:"$full",get bg(){return e=k.can(t.user,n()),"$".concat(e?"success":"danger","9");var e}})}})}})}})};t("default",(function(){var t=r();O("manage.sidemenu.users");var _=i().to,S=o(c((function(){return a.get("/admin/user/list")})),2),j=S[0],k=S[1],N=o(u([]),2),I=N[0],C=N[1],T=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:r=t.sent,x(r,(function(t){return C(t.content)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();T();var F=o(l((function(t){return a.post("/admin/user/delete?id=".concat(t))})),2),W=F[0],Y=F[1],D=o(l((function(t){return a.post("/admin/user/cancel_2fa?id=".concat(t))})),2),q=D[0],z=D[1];return s(E,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[s(f,{spacing:"$2",get children(){return[s(h,{colorScheme:"accent",get loading(){return j()},onClick:T,get children(){return t("global.refresh")}}),s(h,{onClick:function(){_("/@manage/users/add")},get children(){return t("global.add")}})]}}),s(d,{w:"$full",overflowX:"auto",get children(){return s(p,{highlightOnHover:!0,dense:!0,get children(){return[s(g,{get children(){return s(y,{get children(){return[s(v,{each:["username","base_path","role","permission","available"],children:function(e){return s(m,{get children(){return t("users.".concat(e))}})}}),s(m,{get children(){return t("global.operations")}})]}})}}),s(w,{get children(){return s(v,{get each(){return I()},children:function(r){return s(y,{get children(){return[s(b,{get children(){return r.username}}),s(b,{get children(){return r.base_path}}),s(b,{get children(){return s(A,{get role(){return r.role}})}}),s(b,{get children(){return s(G,{user:r})}}),s(b,{get children(){return s(P,{get yes(){return!r.disabled}})}}),s(b,{get children(){return s(f,{spacing:"$2",get children(){return[s(h,{onClick:function(){_("/@manage/users/edit/".concat(r.id))},get children(){return t("global.edit")}}),s($,{get name(){return r.username},get loading(){return W()===r.id},onClick:(i=n(e().mark((function n(){var o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(r.id);case 2:o=e.sent,x(o,(function(){L.success(t("global.delete_success")),T()}));case 4:case"end":return e.stop()}}),n)}))),function(){return i.apply(this,arguments)})}),s(h,{colorScheme:"accent",get loading(){return q()===r.id},onClick:(o=n(e().mark((function n(){var o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(r.id);case 2:o=e.sent,x(o,(function(){L.success(t("users.cancel_2fa_success")),T()}));case 4:case"end":return e.stop()}}),n)}))),function(){return o.apply(this,arguments)}),get children(){return t("users.cancel_2fa")}})];var o,i}})}})]}})}})}})]}})}})]}})}))}}}))}();
