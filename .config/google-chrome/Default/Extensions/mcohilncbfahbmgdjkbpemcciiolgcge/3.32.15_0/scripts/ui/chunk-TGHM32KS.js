import{a as L}from"./chunk-GJCTNUAU.js";import{L as k}from"./chunk-YC6W5MPL.js";import{e as P}from"./chunk-ABBYZM2I.js";import{h as F}from"./chunk-IQUFOLSA.js";import{X as K}from"./chunk-VPDRXROE.js";import{Pa as q,la as w,ma as B,w as R}from"./chunk-JLIPSIRU.js";import{a as b}from"./chunk-O337TVCZ.js";import{f as c,m as p,o as C}from"./chunk-GLD6H5Q5.js";p();C();var v=c(b()),y=c(R());function U(t){let o=(0,y.useSelector)(w),i=(0,y.useSelector)(B),s=F(),f=t??s;return(0,v.useCallback)(r=>r?P({coins:r,walletIdentityMap:o,createdMap:i,walletId:f}):[],[o,i,f])}p();C();var d=c(b()),M=c(R()),I=c(K());var Q=t=>{let o=(0,d.useMemo)(()=>i=>L(i,{enableEmptyAccount:t}),[t]);return(0,M.useSelector)(o)},ne=(t,{beforeRequest:o,onFinally:i,reloadDeps:s,enableEmptyAccountCoins:f=!1,enable:r,filter:x=!0}={})=>{let D=Q(f),z=(0,M.useSelector)(q),g=(0,d.useRef)(null),A=U(),n=(0,d.useRef)({}),G=(0,I.useMemoizedFn)(async(e=0)=>{if(r===!1)return{list:[],pageNo:e,isNoMore:!0};let h=await o?.();if(h)return h;let S=0,l=null,u=null,W=e;t?.chainIds||(t.chainIds=D.map(m=>m.chainId));do{n.current[e]=n.current[e]||0;let m=++n.current[e];if(u=await k({...t,userUniqueId:z,pageNo:e}),m<n.current[e]||typeof n.current[e]>"u")return{list:[],pageNo:e};n.current[e]===m&&delete n.current[e],x?l=A(u):l=u,W++,S++}while(u&&u.length>0&&l?.length===0&&S<5);return{list:l,pageNo:W,isNoMore:l.length===0}}),a;typeof r=="boolean"?s?a=[...s,r]:a=[r]:a=s;let{data:j,loading:E,loadingMore:H,reload:J}=(0,I.useInfiniteScroll)(e=>G(e?.pageNo??0),{target:g,isNoMore:e=>e?.isNoMore,onFinally:i,reloadDeps:a});return{data:j,loading:E,loadingMore:H,listRef:g,reload:J}};export{U as a,ne as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-TGHM32KS.js.map