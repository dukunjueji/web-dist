!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,o,c=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return c}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.0367ebcb.js","./useT-legacy.5a66a6bb.js","./File-legacy.1bf423c3.js","./useUtil-legacy.49d3e171.js","./api-legacy.9f6b8b40.js","./icon-legacy.f40fcb6d.js","./index-legacy.c319d182.js"],(function(t){"use strict";var e,r,o,c,i,u,a,l,f;return{setters:[function(n){e=n.d,r=n.e,o=n.B,c=n.b8,i=n.cu,u=n.o,a=n.ct},function(n){l=n.u},function(n){f=n.F},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=l(),s=n(e(!1),2),y=s[0],d=s[1];return r(f,{get children(){return r(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(c,"/i/").concat(i(encodeURIComponent(u.raw_url)+"/"+a(encodeURIComponent(u.obj.name))),".plist")},onClick:function(){d(!0)},get children(){return t("home.preview.".concat(y()?"installing":"install"))}})}})}))}}}))}();