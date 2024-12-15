import{b as m}from"./chunk-L4BR2EHM.js";import{j as g,k as a}from"./chunk-75OW6LUI.js";import{a as p}from"./chunk-JUXPONKW.js";import{a as S}from"./chunk-O2FUKKO3.js";import{nb as s,pb as f,wb as E}from"./chunk-O3CM75EN.js";import{c as T,i as u,pa as l}from"./chunk-VFHYER2K.js";import{f as k,m as d,o as h}from"./chunk-ZCHLW7CF.js";d();h();var e=k(S());l();E();var L=async o=>{let{Common:r,Hardfork:t}=await g();(0,e.isHexString)(u(o.chainId))&&(o.chainId=T(p(o.chainId)));let n=s({netWorkId:o.chainId})?.baseChain,i=()=>{let C=m(o.from,n),b=m(o.to,n);return{...o,from:C,to:b,gasLimit:o.gas||o.gasLimit}},c=s({netWorkId:o.chainId})?.localType||"custom-net",I=f(c)?.networkId||"custom-net",y={chainId:o.chainId,networkId:I,name:c},w={common:r.custom(y,{baseChain:n,hardfork:t.London})},{TransactionFactory:x}=await a();return x.fromTxData(i(),w)},N=async(o,r)=>{let t=o.toJSON();t.type=o.type;let{TransactionFactory:n}=await a(),i=n.fromTxData({...t,...r},{common:o.common,freeze:Object.isFrozen(o)});return(0,e.bufferToHex)(i.serialize())};export{L as a,N as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-NOGKPIVH.js.map
