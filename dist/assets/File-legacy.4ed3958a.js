!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.ad9716dc.js","./useUtil-legacy.2b2c042b.js","./icon-legacy.e13f943a.js","./index-legacy.a95c509b.js"],(function(n,r){"use strict";var o,i,u,c,a,l,f,p,d,s,m,g,h,y,b,v,w,j,O,_,k,x,P,S,$,A,E,I,T,D,M,z,L,C,V,B,U,W;return{setters:[function(e){o=e.f,i=e.ah,u=e.a7,c=e.o,a=e.W,l=e.bf,f=e.bc,p=e.ai,d=e.by,s=e.bK,m=e.d,g=e.t,h=e.bL,y=e.ad,b=e.a5,v=e.B,w=e.a9,j=e.v,O=e.aa,_=e.bM,k=e.m,x=e.a0,P=e.bN,S=e.bO,$=e.G,A=e.H,E=e.bI,I=e.bP,T=e.e,D=e.aP,M=e.P,z=e.Q,L=e.ab},function(e){C=e.a,V=e.b},function(e){B=e.g,U=e.O},function(e){W=e.l}],execute:function(){var X=n("F",(function(e){return o(a,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(i,{get color(){return u()},boxSize:"$20",get as(){return B(c.obj)}}),o(a,{spacing:"$2",get children(){return[o(l,{size:"lg",css:{wordBreak:"break-all"},get children(){return c.obj.name}}),o(f,{color:"$neutral10",size:"sm",get children(){return[p((function(){return d(c.obj.size)}))," · ",p((function(){return s(c.obj.modified)}))]}})]}}),o(a,{spacing:"$2",get children(){return e.children}})]}})})),G=function(){var e=m(),n=g((function(){return h(c.obj.name)})),r=C().currentObjLink;return o(k,{get when(){return n().length},get children(){return o(y,{get children(){return[o(b,{as:v,colorScheme:"success",get rightIcon(){return o(i,{as:W})},get children(){return e("home.preview.open_with")}}),o(w,{get children(){return o(j,{get each(){return n()},children:function(e){return o(O,{as:"a",target:"_blank",get href(){return _(e.value,{raw_url:c.raw_url,name:c.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},H=function(e){var n=m(),r=V().copyCurrentRawLink;return o(X,{get children(){return[o(x,{spacing:"$2",get children(){return[o(v,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(v,{as:"a",get href(){return c.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(k,{get when(){return e.openWith},get children(){return o(G,{})}})]}})},F=Object.freeze(Object.defineProperty({__proto__:null,Download:H,default:H},Symbol.toStringTag,{value:"Module"})),K=function(e){var n=C().currentObjLink;return o(S,{w:"$full",h:"70vh",get children(){return o(P.iframe,{w:"$full",h:"$full",get src(){return _(e.scheme,{raw_url:c.raw_url,name:c.obj.name,d_url:n(!0)})}})}})},N=[{name:"Aliyun Video Previewer",type:U.VIDEO,provider:/^Aliyundrive(Open)?$/,component:$((function(){return A((function(){return r.import("./aliyun_video-legacy.2820095b.js")}),void 0)}))},{name:"Markdown",type:U.TEXT,component:$((function(){return A((function(){return r.import("./markdown-legacy.390d7b89.js")}),void 0)}))},{name:"Markdown with word wrap",type:U.TEXT,component:$((function(){return A((function(){return r.import("./markdown_with_word_wrap-legacy.d1842ec6.js")}),void 0)}))},{name:"Text Editor",type:U.TEXT,component:$((function(){return A((function(){return r.import("./text-editor-legacy.8a280c9c.js")}),void 0)}))},{name:"HTML render",exts:["html"],component:$((function(){return A((function(){return r.import("./html-legacy.2e6131a1.js")}),void 0)}))},{name:"Image",type:U.IMAGE,component:$((function(){return A((function(){return r.import("./image-legacy.426ca14d.js")}),void 0)}))},{name:"Video",type:U.VIDEO,component:$((function(){return A((function(){return r.import("./video-legacy.efca29e0.js")}),void 0)}))},{name:"Audio",type:U.AUDIO,component:$((function(){return A((function(){return r.import("./audio-legacy.7e175933.js")}),void 0)}))},{name:"Ipa",exts:["ipa","tipa"],component:$((function(){return A((function(){return r.import("./ipa-legacy.e0b5a7f6.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:$((function(){return A((function(){return r.import("./plist-legacy.07f29055.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:$((function(){return A((function(){return r.import("./aliyun_office-legacy.d5e33c05.js")}),void 0)}))}],Q=function(e){var n=[];return N.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(E(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),I(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(K,{scheme:r})})})})),n.push({name:"Download",component:$((function(){return A((function(){return Promise.resolve().then((function(){return F}))}),void 0)}))}),n},R=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=g((function(){return Q(t(t({},c.obj),{},{provider:c.provider}))})),r=e(T(n()[0]),2),i=r[0],u=r[1];return o(k,{get when(){return n().length>1},get fallback(){return o(H,{openWith:!0})},get children(){return o(a,{w:"$full",spacing:"$2",get children(){return[o(x,{w:"$full",spacing:"$2",get children(){return[o(D,{alwaysShowBorder:!0,get value(){return i().name},onChange:function(e){u(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(G,{})]}}),o(M,{get fallback(){return o(z,{})},get children(){return o(L,{get component(){return i().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",R)}}}))}();