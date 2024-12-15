import{b as p}from"./chunk-JOXGYPV7.js";import{d as l}from"./chunk-U5WRMXFD.js";import{ga as m}from"./chunk-3TDWET6C.js";import{y}from"./chunk-EBR3PGFZ.js";import{d as o,f as S}from"./chunk-3HS6AHPS.js";import{u as T}from"./chunk-GCXT25LW.js";import{$a as d,Za as u,wb as W}from"./chunk-O3CM75EN.js";import{m as w,o as f}from"./chunk-ZCHLW7CF.js";w();f();W();S();var _=({txData:n,txParams:e,walletId:t,isRpcMode:r=!1,baseChain:a=u})=>async(s,i)=>{let c=i();t??=m(c);let g=await o().getWallet(t);p(g?.initialType)&&await l({walletInfo:g,txData:n,txParams:e,isRpcMode:r,baseChain:a})};async function I(n,e,t,r,{...a}={}){let s="";r??=await o().getWalletIdByAddress(e,t);let i=await o().getWallet(r);try{if(p(i?.initialType))return s=await l({walletInfo:i,txParams:n,baseChain:t}),s;s=await o().signTransaction(n,e,t,r,a)}catch(c){throw c?.message===T?c:new Error(y)}return s}function k(n,e,t){return async()=>I(n,e,d,t)}function v(n,e,t,r,a){return o().signPsbt(n,e,t,r,a)}export{_ as a,I as b,k as c,v as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-EBBN5EW3.js.map
