import{Ac as m,Dc as p,Ib as U,Jb as w,Kc as A,d as e,e as D,ec as n,fc as y,gc as c,hc as x}from"./chunk-YT2MPR4E.js";import{b as i,g as f,m as o,o as a}from"./chunk-GLD6H5Q5.js";function C(s=null){if(!s)return l.getUrl();s?.length||(s=m());let{rpcUrl:t}=p(d,s),{hostname:h}=new URL(t||"https://exchainrpc.okex.org"),r=h.split(".");return`wallet.${r[1]}.${r[2]}`}function I(){return g.getUrl()}function N(){return u.getUrl()}var d,l,g,u,H=i(()=>{o();a();D();A();y();x();({OKEXCHAIN_CHAIN_ID:d}=(w(),f(U))),l=c;g=(()=>{let s="";return(async()=>{try{let{wssDomain:t}=await e.get("wssDomain");s=t}catch{}})(),{setUrlFromLocalAsync:async()=>{try{let{wssDomain:t}=await e.get("wssDomain");s=t}catch{}},setUrl:t=>{s=t},getUrl:()=>new URL(s||n.app.defaultAppDomains.wssDomains[0]).host}})(),u=(()=>{let s="";return(async()=>{try{let{staticDomain:t}=await e.get("staticDomain");s=t}catch{}})(),{setUrlFromLocalAsync:async()=>{try{let{staticDomain:t}=await e.get("staticDomain");s=t}catch{}},setUrl:t=>{s=t},getUrl:()=>new URL(s||n.app.defaultAppDomains.staticDomains[0]).host}})()});var R=i(()=>{"use strict";o();a();H()});export{l as a,C as b,g as c,u as d,I as e,N as f,R as g};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-WIWWLEBZ.js.map
