import{d as a,Y as r,j as t,$ as o}from"./index.1b6f5114.js";import{o as n}from"./index.2a73f424.js";import{M as s}from"./EncodingSelect.d0e942a4.js";import"./useUtil.dd331d0a.js";import"./api.2ea97757.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),l=()=>{a(),n("manage.sidemenu.about");const[e]=r(i);return t(o,{get loading(){return e.loading},get children(){return t(s,{get children(){return e()}})}})};export{l as default};
