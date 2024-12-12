import{b as m}from"./chunk-PGKED42N.js";import{j as p,k as a}from"./chunk-PMGQLREC.js";import{Cc as g,Kc as D,Vb as E,Xb as f,Zb as S,zc as s}from"./chunk-YT2MPR4E.js";import{c as T,i as u,pa as l}from"./chunk-6O63U2D6.js";import{f as k,m as d,o as h}from"./chunk-GLD6H5Q5.js";d();h();var e=k(E());l();S();D();var N=async o=>{let{Common:r,Hardfork:t}=await p();(0,e.isHexString)(u(o.chainId))&&(o.chainId=T(f(o.chainId)));let n=s({netWorkId:o.chainId})?.baseChain,i=()=>{let C=m(o.from,n),b=m(o.to,n);return{...o,from:C,to:b,gasLimit:o.gas||o.gasLimit}},c=s({netWorkId:o.chainId})?.localType||"custom-net",I=g(c)?.networkId||"custom-net",y={chainId:o.chainId,networkId:I,name:c},w={common:r.custom(y,{baseChain:n,hardfork:t.London})},{TransactionFactory:x}=await a();return x.fromTxData(i(),w)},W=async(o,r)=>{let t=o.toJSON();t.type=o.type;let{TransactionFactory:n}=await a(),i=n.fromTxData({...t,...r},{common:o.common,freeze:Object.isFrozen(o)});return(0,e.bufferToHex)(i.serialize())};export{N as a,W as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-L2NVTMS2.js.map
