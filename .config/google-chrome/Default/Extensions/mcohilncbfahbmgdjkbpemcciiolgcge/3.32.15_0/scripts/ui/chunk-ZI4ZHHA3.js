import{b as p}from"./chunk-KWBWAA7R.js";import{d as l}from"./chunk-TRBDC433.js";import{ga as m}from"./chunk-JLIPSIRU.js";import{A as y,D as I}from"./chunk-VGT27A4M.js";import{d as o,f as S}from"./chunk-R4G6BEPF.js";import{u as T}from"./chunk-AYCAVTPT.js";import{Kc as W,jc as u,lc as d}from"./chunk-YT2MPR4E.js";import{m as w,o as f}from"./chunk-GLD6H5Q5.js";w();f();I();W();S();var k=({txData:n,txParams:e,walletId:t,isRpcMode:r=!1,baseChain:a=u})=>async(s,i)=>{let c=i();t??=m(c);let g=await o().getWallet(t);p(g?.initialType)&&await l({walletInfo:g,txData:n,txParams:e,isRpcMode:r,baseChain:a})};async function x(n,e,t,r,{...a}={}){let s="";r??=await o().getWalletIdByAddress(e,t);let i=await o().getWallet(r);try{if(p(i?.initialType))return s=await l({walletInfo:i,txParams:n,baseChain:t}),s;s=await o().signTransaction(n,e,t,r,a)}catch(c){throw c?.message===T?c:new Error(y)}return s}function v(n,e,t){return async()=>x(n,e,d,t)}function G(n,e,t,r,a){return o().signPsbt(n,e,t,r,a)}export{k as a,x as b,v as c,G as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-ZI4ZHHA3.js.map
