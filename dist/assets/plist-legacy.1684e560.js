!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(u){a=!0,i=u}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.aa73ea33.js","./File-legacy.ff9830ef.js","./useUtil-legacy.838ab6f7.js","./api-legacy.b3531d1b.js","./icon-legacy.d8d51032.js","./index-legacy.dd07548c.js","./index-legacy.0a4e43e8.js","./Layout-legacy.be3eb014.js","./EncodingSelect-legacy.8620e800.js","./index-legacy.5380329d.js","./FolderTree-legacy.eecd2f8d.js"],(function(e){"use strict";var t,r,i,o,c,a;return{setters:[function(n){t=n.d,r=n.e,i=n.j,o=n.B,c=n.o},function(n){a=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),u=n(r(!1),2),l=u[0],f=u[1];return i(a,{get children(){return i(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
