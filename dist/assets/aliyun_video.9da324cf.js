import{u as m,o,as as b,cs as f,bI as w,a as k,b7 as v,_ as x,aw as _,bd as F,n as j,at as L,f as c,$ as O}from"./index.4784f860.js";import{a as W}from"./useUtil.94056f52.js";import{O as I}from"./icon.6cb472c0.js";import{H as P,a as S,A as z,V as B}from"./video_box.75829046.js";import"./api.851bb415.js";import"./index.68824d6d.js";import"./index.513faecd.js";import"./Layout.76a960d0.js";import"./Markdown.cebc6160.js";import"./index.a41b280c.js";import"./FolderTree.c0422a3a.js";const G=()=>{const{replace:h}=m(),{proxyLink:p}=W();let n=o.objs.filter(e=>e.type===I.VIDEO);n.length===0&&(n=[o.obj]);let s,i={id:"player",container:"#video-player",title:o.obj.name,volume:.5,autoplay:b("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const r=new P;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(f().toLowerCase())?f().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const l=o.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),d=o.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});l&&(i.subtitle={url:p(l,!0),type:w(l.name)}),d&&(i.plugins=[S({danmuku:p(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const{pathname:y}=m(),[C,g]=k(()=>v.post("/fs/other",{path:y(),password:x(),method:"video_preview"}));return _(async()=>{const e=await g();F(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){j.error("No transcoding video found");return}i.url=r[r.length-1].url,i.quality=r.map((a,u)=>({html:a.template_id,url:a.url,default:u===r.length-1})),s=new z(i),s.on("video:ended",()=>{const a=n.findIndex(u=>u.name===o.obj.name);a<n.length-1&&h(n[a+1].name)})})}),L(()=>{s==null||s.destroy()}),c(B,{get children(){return c(O,{w:"$full",h:"60vh",id:"video-player"})}})};export{G as default};