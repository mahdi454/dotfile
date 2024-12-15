import{a as b}from"./chunk-75OW6LUI.js";import{g}from"./chunk-YJ2NGJXA.js";import{p as u,q as h}from"./chunk-GCXT25LW.js";import{V as f,X as m,Ya as T}from"./chunk-O3CM75EN.js";import{pa as A,x as d}from"./chunk-VFHYER2K.js";import{b as K}from"./chunk-HJXNXGYU.js";import{m as w,o as l}from"./chunk-ZCHLW7CF.js";w();l();K();T();A();var P=(o,t)=>async(a,e,c)=>{let r=`0/${a}`,{extendedPublicKey:s}=d(c,{path:t})||{},{hardwareDerivePubKey:i,getAddressByPublicKey:p}=await b(),n=await i(s,r),y=await p(0,{publicKey:n,addressType:g[o]});e[m][o]={path:`${t}/${r}`,publicKey:n,address:y}},D=async(o,t,a)=>{t[m]={};for(let e=0;e<h.length;e++){let{type:c,basePath:r}=h[e];await P(c,r)(o,t,a)}},M=(o,t)=>async(a,e,c)=>{let r=t+a,{extendedPublicKey:s}=d(c,{path:u})||{},{hardwareDerivePubKey:i,getAddressByPublicKey:p}=await b(),n=await i(s,r),y=await p(60,{publicKey:n});e[f][o]={path:`${u}/${r}`,address:y}};export{D as a,M as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-CV2I3OFZ.js.map
