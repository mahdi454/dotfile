import{a as c}from"./chunk-75OW6LUI.js";import{P as o}from"./chunk-3TDWET6C.js";import{a as P}from"./chunk-O2FUKKO3.js";import{mc as m}from"./chunk-O3CM75EN.js";import{f as d,m as s,o as n}from"./chunk-ZCHLW7CF.js";s();n();var i=d(P());m();var h=async(t,e,r,a)=>{try{return await a(t,{privateKey:e,hrp:r}),!0}catch{return!1}},x=async(t,e)=>{let r=[],a=o(e),{getNewAddress:f}=await c();return await Promise.all(a.map(({coinType:p,cosmosPrefix:l,baseChain:u})=>h(p,t,l,f).then(y=>{y&&r.push(u)}))),r};var v=async(t,e)=>await x(t,e),C=async(t,e)=>{let r=await v(t,e);return Boolean(r[0])};export{v as a,C as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-DLZS443R.js.map
