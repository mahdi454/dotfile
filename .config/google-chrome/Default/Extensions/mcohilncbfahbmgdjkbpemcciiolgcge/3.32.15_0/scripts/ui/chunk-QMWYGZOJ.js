import{a as R}from"./chunk-NEFZK4RT.js";import{a as E}from"./chunk-F52H34ZH.js";import{Ba as f,Ca as x,Fa as g,Ha as N,Jb as F,Rb as I,Ub as M,fa as h,ja as d,pa as p,va as u,wa as b}from"./chunk-YT2MPR4E.js";import{a as B}from"./chunk-O337TVCZ.js";import{f as w,m as s,o as r}from"./chunk-GLD6H5Q5.js";s();r();s();r();s();r();var A={requestWallets:"requestWallets",ethRequestAccounts:"eth_requestAccounts",walletRequestWallets:"wallet_requestWallets"};u();var O=({provider:e,method:t})=>e===h&&t===A.walletRequestWallets;s();r();M();F();u();var T=({provider:e,exts:t,chainsInfo:o})=>{let i=I[e];e===p&&(i=N);let n=o.find(a=>a.baseChain===i);if(e===d&&t?.cosmosChainIds){let a=o.find(c=>{let C;return Array.isArray(t?.cosmosChainIds)?C=t?.cosmosChainIds[0]:typeof t?.cosmosChainIds=="string"&&(C=t?.cosmosChainIds),c.cosmosChainId===C});a&&(n=a)}return{baseChain:n?.baseChain||"",chainName:(n?.baseChain===g?"EVM":n?.chainName)||""}};s();r();var l=w(B());x();b();var P=({dappUrl:e})=>{let[t,o]=(0,l.useState)({provider:"",method:"",dappUrl:"",lastConnectTime:0,status:"PENDING"});return(0,l.useEffect)(()=>{(async()=>{let n=await f({dappUrl:e});n[0]?o({...n[0],status:"RESOLVED"}):o({...t,status:"FAIL"})})()},[e]),t},S=({dappUrl:e,walletId:t})=>{let{baseChain:o,chainName:i,allChain:n,status:a}=_(e),c=R({walletId:t,localType:o});return{walletInfo:c,connectable:!!o&&(n||Boolean(c?.address)),baseChain:o,chainName:i,status:a}},ot=S;var _=e=>{let t=P({dappUrl:e}),{provider:o,method:i,exts:n,status:a}=t,c=E(),{baseChain:C,chainName:D}=T({provider:o,exts:n,chainsInfo:c}),W=O({provider:o,method:i});return{baseChain:C,chainName:D,allChain:W,status:a}};export{O as a,_ as b,P as c,ot as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-QMWYGZOJ.js.map