import{a as R}from"./chunk-K4WB5MMU.js";import{a as E}from"./chunk-SJRV5U24.js";import{a as N,j as I}from"./chunk-WSUAESF2.js";import{D as d,N as p,U as u,V as f,X as g,Ya as b,z as h}from"./chunk-O3CM75EN.js";import{a as B}from"./chunk-EAZTJZU7.js";import{f as w,m as s,o as r}from"./chunk-ZCHLW7CF.js";s();r();s();r();s();r();var A={requestWallets:"requestWallets",ethRequestAccounts:"eth_requestAccounts",walletRequestWallets:"wallet_requestWallets"};u();var O=({provider:e,method:t})=>e===h&&t===A.walletRequestWallets;s();r();b();u();var T=({provider:e,exts:t,chainsInfo:o})=>{let i=I[e];e===p&&(i=g);let n=o.find(a=>a.baseChain===i);if(e===d&&t?.cosmosChainIds){let a=o.find(c=>{let C;return Array.isArray(t?.cosmosChainIds)?C=t?.cosmosChainIds[0]:typeof t?.cosmosChainIds=="string"&&(C=t?.cosmosChainIds),c.cosmosChainId===C});a&&(n=a)}return{baseChain:n?.baseChain||"",chainName:(n?.baseChain===f?"EVM":n?.chainName)||""}};s();r();var l=w(B());var P=({dappUrl:e})=>{let[t,o]=(0,l.useState)({provider:"",method:"",dappUrl:"",lastConnectTime:0,status:"PENDING"});return(0,l.useEffect)(()=>{(async()=>{let n=await N({dappUrl:e});n[0]?o({...n[0],status:"RESOLVED"}):o({...t,status:"FAIL"})})()},[e]),t},x=({dappUrl:e,walletId:t})=>{let{baseChain:o,chainName:i,allChain:n,status:a}=_(e),c=R({walletId:t,localType:o});return{walletInfo:c,connectable:!!o&&(n||Boolean(c?.address)),baseChain:o,chainName:i,status:a}},$=x;var _=e=>{let t=P({dappUrl:e}),{provider:o,method:i,exts:n,status:a}=t,c=E(),{baseChain:C,chainName:D}=T({provider:o,exts:n,chainsInfo:c}),W=O({provider:o,method:i});return{baseChain:C,chainName:D,allChain:W,status:a}};export{O as a,_ as b,P as c,$ as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-BBVLJ4T3.js.map