import{u as x,o as n,au as v,cw as f,bX as k,a as _,bp as A,_ as F,ax as j,br as C,n as L,i as O,e as P,j as c,Z as S}from"./index.dc562257.js";import{a as W}from"./useUtil.4699128a.js";import{O as B}from"./icon.0ab233b1.js";import{A as h,H as R,a as z,V as I}from"./video_box.c9dbb279.js";import"./api.db42c3cc.js";import"./index.6791ea53.js";import"./index.01ad4da4.js";import"./Layout.191c58dd.js";import"./EncodingSelect.b4678274.js";import"./index.e541afa0.js";import"./FolderTree.8b35f844.js";h.AUTO_PLAYBACK_MAX=200;const Z=()=>{const{replace:y,pathname:d}=x(),{proxyLink:l}=W();let s=n.objs.filter(e=>e.type===B.VIDEO);s.length===0&&(s=[n.obj]);let o,i={id:d(),container:"#video-player",title:n.obj.name,volume:.5,autoplay:v("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},headers:{"User-Agent":"Custom User Agent",Referer:"https://www.aliyundrive.com/"},type:"m3u8",customType:{m3u8:function(e,t){const r=new R;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(f().toLowerCase())?f().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const u=n.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),m=n.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});u&&(i.subtitle={url:l(u,!0),type:k(u.name)}),m&&(i.plugins=[z({danmuku:l(m,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const[M,g]=_(()=>A.post("/fs/other",{path:d(),password:F(),method:"video_preview"}));j(async()=>{const e=await g();C(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){L.error("No transcoding video found");return}i.url=r[r.length-1].url,i.quality=r.map((a,p)=>({html:a.template_id,url:a.url,default:p===r.length-1})),o=new h(i),o.on("video:ended",()=>{if(!w())return;const a=s.findIndex(p=>p.name===n.obj.name);a<s.length-1&&y(s[a+1].name)}),u&&o.on("video:play",a=>{o.subtitle.url=l(u,!0)})})}),O(()=>{o==null||o.destroy()});const[w,b]=P();return c(I,{onAutoNextChange:b,get children(){return c(S,{w:"$full",h:"60vh",id:"video-player"})}})};export{Z as default};
