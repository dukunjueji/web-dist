import{d as i,a,b5 as o,e as t,bf as $,c4 as M,ah as S,B as c,bd as g,n as v,I as O,$ as R,Y as U}from"./index.3a80bc76.js";import{u as x}from"./useT.f153f830.js";import{b as D}from"./useTitle.27a08ba5.js";import{c as E}from"./useUtil.a5be35bc.js";import{G as b}from"./index.ffcaae84.js";import{I as C}from"./SettingItem.43a6b27b.js";import"./api.7f233fde.js";import"./index.68d10b5a.js";import"./item_type.be442da4.js";const V=()=>{const s=x();D("manage.sidemenu.other");const[u,l]=i(""),[m,d]=i(""),[p,h]=i(""),[k,I]=i([]),[L,T]=a(()=>o.get(`/admin/setting/list?groups=${b.ARIA2},${b.SINGLE}`)),[A,G]=a(()=>o.post("/admin/setting/set_aria2",{uri:u(),secret:m()}));(async()=>{const e=await T();g(e,n=>{var _,f,y;l(((_=n.find(r=>r.key==="aria2_uri"))==null?void 0:_.value)||""),d(((f=n.find(r=>r.key==="aria2_secret"))==null?void 0:f.value)||""),h(((y=n.find(r=>r.key==="token"))==null?void 0:y.value)||""),I(n)})})();const[w,B]=a(()=>o.post("/admin/setting/reset_token")),{copy:H}=E();return t(U,{get loading(){return L()},get children(){return[t($,{mb:"$2",get children(){return s("settings_other.aria2")}}),t(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(C,S(()=>k().find(e=>e.key==="aria2_uri"),{get value(){return u()},onChange:e=>l(e)})),t(C,S(()=>k().find(e=>e.key==="aria2_secret"),{get value(){return m()},onChange:e=>d(e)}))]}}),t(c,{my:"$2",get loading(){return A()},onClick:async()=>{const e=await G();g(e,n=>{v.success(`${s("settings_other.aria2_version")} ${n}`)})},get children(){return s("settings_other.set_aria2")}}),t($,{my:"$2",get children(){return s("settings.token")}}),t(O,{get value(){return p()},readOnly:!0}),t(R,{my:"$2",spacing:"$2",get children(){return[t(c,{onClick:()=>{H(p())},get children(){return s("settings_other.copy_token")}}),t(c,{colorScheme:"danger",get loading(){return w()},onClick:async()=>{const e=await B();g(e,n=>{v.success(s("settings_other.reset_token_success")),h(n)})},get children(){return s("settings_other.reset_token")}})]}})]}})};export{V as default};