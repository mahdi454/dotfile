import{d as L}from"./chunk-FXQ35K27.js";import{c as h,k as g}from"./chunk-AQH6QKNE.js";import{a as E}from"./chunk-RUFGCIXT.js";import{w as U,x as T,y as N}from"./chunk-3TDWET6C.js";import{L as D,w as f}from"./chunk-KJIO572I.js";import{a as l}from"./chunk-EAZTJZU7.js";import{f as c,m,o as p}from"./chunk-ZCHLW7CF.js";m();p();m();p();var x=c(l());D();m();p();var M=c(l()),w=c(U()),V=c(T());var S=(0,V.createSelector)(n=>E(n).map(e=>({...e,icon:e.image})),n=>{let[e]=N(n);return{isEVMChainExisted:n.some(i=>h(i.coinId)),mainNetworkList:e}}),_=n=>{let{defaultNets:e,customNets:r}=L(),{isEVMChainExisted:i,mainNetworkList:u}=(0,w.useSelector)(S),{rpcModeTestNetworkList:C,rpcModeCustomNetworkList:s}=(0,M.useMemo)(()=>({rpcModeTestNetworkList:i?e.map(g):[],rpcModeCustomNetworkList:i?r.map(g):[]}),[i,e,r]),a=(0,M.useMemo)(()=>{let o=d=>d.filter(t=>t.chainName?.toLowerCase().includes(n.toLowerCase()));return{originMainnetListLength:u.length,mainnetList:o(u),testnetList:o(C),customList:o(s)}},[n,u,C,s]);return(0,M.useMemo)(()=>({...a,isEVMChainExisted:i}),[a,i])},k=_;function b(n){let{mainnetList:e,testnetList:r,customList:i,originMainnetListLength:u,isEVMChainExisted:C}=k(n);return(0,x.useMemo)(()=>{let s=(o,d)=>t=>{let y=t[o];return{chainName:t.chainName,icon:"image"in t?t.image:t.icon,id:String(y??""),rpcUrl:"rpcUrl"in t?t.rpcUrl:void 0,networkType:d,symbol:t.symbol}},a=[];return u>1&&a.push({chainName:f("wallet_extension_history_dropdown_all_network"),id:"",icon:"/static/images/tx-history/all-chain-icon.svg",networkType:0}),a.push(...e.map(s("chainId",0))),{isEVMChainExisted:C,mainnetListForUI:a,testnetListForUI:r.map(s("uniqueId",1)),customListForUI:i.map(s("uniqueId",2))}},[e,r,i,C])}export{b as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-OBYGSQTG.js.map