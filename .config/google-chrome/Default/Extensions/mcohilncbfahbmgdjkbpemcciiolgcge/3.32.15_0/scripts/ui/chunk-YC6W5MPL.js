import{G as F,H as M}from"./chunk-JLIPSIRU.js";import{h as q,l as I,m as B,ta as D}from"./chunk-VGT27A4M.js";import{d as L,f as W}from"./chunk-R4G6BEPF.js";import{a as n,b as m}from"./chunk-CYOQISC6.js";import{c as x,d as _,e as E,f as c,h as f}from"./chunk-TKYTZF2K.js";import{X as J,aa as P,ea as b,w as O}from"./chunk-YT2MPR4E.js";import{F as U,Q as S,pa as v}from"./chunk-6O63U2D6.js";import{m as s,o as a}from"./chunk-GLD6H5Q5.js";s();a();f();m();D();W();v();var G=async()=>{let t=await L().getSelectedWallet(),o=await L().getRequestHeaders({walletId:t,needSign:!0,currency:"usd"});return{walletId:t,config:{headers:o}}},Y=async(t={...q},o)=>{let{walletId:e,config:r}=await G(),i=n.postAllTxListUrl,p={lastRowId:"",limit:20,accountIds:[e],...t};try{let{data:l=[]}=await c(i,p,S(r,o));return l}catch(l){throw new Error(l)}},Z=async(t={coinId:3,txId:"",txHash:"",address:"",orderId:"",orderType:""},o)=>{let{walletId:e,config:r}=await G(),{coinId:i}=t,p=n.postTxDetailInfoUrl,l={accountId:e,...t,coinId:i};try{let{data:d={}}=await c(p,l,S(r,o));return d}catch(d){throw new Error(d)}},tt=async(t={coinId:3,address:""},o)=>{let{walletId:e,config:r}=await G(),{coinId:i}=t,p=n.postCoinTxListUrl,l={lastRowId:"",limit:20,accountIds:[e],coinId:i,...t};try{let{data:d={}}=await c(p,l,S(r,o));return d}catch(d){throw new Error(d)}};var ot=async(t={coinId:3,txHash:"",address:""},o)=>{let{config:e}=await G(),{coinId:r}=t,i=n.postBtcAccelerationFeeInfo,p={...t,coinId:r},{data:l={}}=await c(i,p,S(e,o));return l};s();a();s();a();s();a();D();m();f();var it=(t={})=>{let{coinId:o,address:e}=t,r=n.getGasSignInfo.replace("{coinId}",o).replace("{address}",e);return x(r)},g=(t={},o={},e={})=>{let{coinId:r,address:i}=t,p=n.getGasSignInfo.replace("{coinId}",r).replace("{address}",i);return c(p,o,e)},j=async(t,o)=>{let e={scenario:I.SCENARIO_SEND_COIN,...o},{data:r={}}=await g(t,e);return r},H=(t={})=>c(n.postGasLimit,t),pt=(t={})=>{let{coinId:o}=t,e=n.postTxToastCheckUrl.replace("{coinId}",o);return c(e,t)},lt=async(t,o)=>{let e=n.postTx,{data:r}=await c(e,t,o);return r},dt=t=>c(n.getDomainAddress,t),ut=async(t={},o={})=>{try{let{coinId:e}=t,r=n.postExtFee.replace("{coinId}",e),{data:i}=await c(r,o);return i?.extFee}catch{return"0"}},mt=async(t,o)=>{let e=n.postBatchTx,{data:r}=await c(e,t,o);return r};var ft=async(t,o)=>{let e=n.postUTXOInfoFromTxs;return c(e,t,o)};var xt=async t=>{let{data:o}=await c(n.preExecTransaction,t),{txInfo:e,...r}=o;return{...r,...e}};s();a();f();m();b();var At=async(t={})=>{let{data:o={}}=await g(t),{info:e={}}=o;return e};var Tt=async(t={},o={})=>{let{data:e={}}=await g(t,o),{info:r={}}=e,{recentBlockhash:i}=r;return i},kt=(t={})=>{let{coinId:o,address:e}=t,r=n.getSolanaTokenAccountAddress.replace("{coinId}",o).replace("{address}",e);return x(r)},Pt=(t={})=>{let{mint:o,address:e}=t,r=n.getSolanaTokenAccountAddressWithMint.replace("{mint}",o).replace("{address}",e);return x(r)};async function Dt(t,o){let e=await E(n.requestSolanaMethodUrlToFullnode,{jsonrpc:"2.0",id:P(),method:t,params:o});return e.status===200?e.data:Promise.reject(e)}async function Et(t){let{data:o={}}=await c(n.getSolanaJitoSignInfo,t);return o}s();a();D();var vt=async t=>{let{address:o}=t,e={fromAddr:o,scenario:I.SCENARIO_SEND_COIN},{data:r={}}=await g(t,e),{info:i={}}=r,{trc:p}=i;return p===B.TRC20},X=async(t,o)=>{let e={scenario:I.SCENARIO_SEND_COIN,...o},{data:r={}}=await g(t,e);return r},Ot=async(t,o)=>{let e={...o,scenario:I.SCENARIO_SEND_COIN},r=await X(t,e),{info:i={}}=r,{fee:p="0"}=i;return p};s();a();D();m();f();J();var Jt=async t=>{let{data:o}=await c(n.getAptosGasLimit,{inputData:t}),{gasLimit:e}=o;return e},Wt=async(t,o,e)=>{let r={...o,scenario:I.SCENARIO_SEND_COIN},{data:i={}}=await g(t,r),{info:p={}}=i,{maxGasAmount:l="0"}=p,{gasUnitPrice:d="0"}=p;if(e)try{let{data:{gasLimit:A}}=await c(n.getAptosGasLimit,{inputData:e,chainIndex:t?.chainId});l=A}catch{l="8000"}let h=O(d,l);return{gasUnitPrice:d,maxGasAmount:l,fee:h}},Xt=async(t={})=>{let{address:o,chainIndex:e=""}=t,r=n.getAptosABI.replace("{moduleAddress}",o).replace("{chainIndex}",e),{data:i}=await _(r);return i},zt=async t=>{let o=n.postAptosNftClaim,{data:e}=await c(o,{address:t,pageNo:1,pageSize:1e3});return e},Kt=async(t,o,e)=>{let r=n.saveAptosNftSaveOrder,{data:i}=await c(r,{scene:t,chain:637,txHash:o,walletAddress:e,source:4,appVersion:"2.23.9"});return i};s();a();m();f();b();async function oo(t){let o=await E(n.requestSuiMethodUrlToFullnode,{jsonrpc:"2.0",id:P(),...t||{}});return o.status===200?o.data:Promise.reject(new Error)}s();a();var ao=async(t={})=>{let{coinId:o,from:e,to:r}=t,i={address:e,coinId:o},p={value:"0",fromAddr:e,toAddr:r},{info:l={}}=await j(i,p);return l},co=async(t={})=>{let{coinId:o,from:e,inputData:r}=t,i={coinId:o,address:e,value:"0",inputData:r},{data:p={}}=await H(i);return p.gasLimit};s();a();m();f();var fo=async t=>{let o=n.postPendingBalanceDetail;return(await c(o,t)).data||{}},xo=async t=>{let o=n.getBrcJson;return(await x(o,t)).data||{}};s();a();s();a();m();f();s();a();v();m();f();s();a();var w=class{constructor(o=50){this.cache=new Map;this.keysIndex=0;this.keys=Array.from(new Array(o))}delete(o){this.keys=this.keys.map(e=>e===o?void 0:e),this.keysIndex=(this.keysIndex-1)%this.keys.length,this.cache.delete(o)}clear(){this.cache.clear(),this.keys.fill(void 0),this.keysIndex=0}get(o){return this.cache.get(o)}set(o,e){if(!this.keys.includes(o)){let r=this.keys[this.keysIndex];r!==void 0&&this.cache.delete(r),this.keys[this.keysIndex]=o,this.keysIndex=(this.keysIndex+1)%this.keys.length}this.cache.set(o,e)}};s();a();function C(t){return/^\d+$/.test(String(t))}var N=null,zo=async t=>{let{data:o={}}=await c(n.postAddressRegisterStatus,t);return o},Ko=async t=>{let{data:o={}}=await c(n.postCheckTransfer,t);return o},Vo=async t=>{try{let{data:o=[]}=await c(n.getCoinList,t);return o.length?o.map(e=>M(e)):[]}catch{return[]}},$o=(t={})=>Object.keys(t).some(o=>["coinId","chainId","address","aggregation","coinType","symbol"].includes(o)),Qo=async t=>{try{let o={coinIds:[t]},{data:e=[]}=await c(n.postMarketUrl,o,{headers:{currency:"usd"}});return e[0]??null}catch{return null}},Yo=async t=>{if(!t||U(t))return null;N||(N=new w(50));let{address:o,aggregation:e,symbol:r,coinId:i,chainId:p,coinType:l}=t,d={};if(e)d.aggregationSymbol=r;else if(C(i)){d.coinId=+i;let h=N.get(i);if(h)return h}else(r||o)&&(r&&(d.symbol=r),o&&(d.contractAddress=o),C(p)&&(d.chainId=+p),C(l)&&(d.coinType=+l));try{let{data:h={}}=await c(n.getCoinDetail,d);if(h.length){let A=new Map,T=null;return h.forEach(k=>{let y=F(k);if(N.set(y.coinId,y),k.aggregation){let R=A.get(k.symbol);R?R.childrenCoin.push(y):(T={...y,childrenCoin:[y]},A.set(k.symbol,T))}else T=y}),T}return null}catch{return null}},Zo=async(t,o={},e={})=>{let r=n.getCoinAvailable.replace("{coinId}",t);return x(r,o,e)};s();a();m();f();s();a();f();m();s();a();f();m();s();a();f();m();var we=t=>c(n.getGasStationSupportChainListUrl,t),Ce=t=>x(n.getGasStationSupportCoinListUrl,t);var Ee=t=>c(n.checkAndGetCallDataUrl,t),Ge=t=>c(n.orderSaveUrl,t);export{it as a,g as b,j as c,H as d,pt as e,lt as f,dt as g,ut as h,mt as i,ft as j,xt as k,At as l,Tt as m,kt as n,Pt as o,Dt as p,Et as q,vt as r,X as s,Ot as t,Jt as u,Wt as v,Xt as w,zt as x,Kt as y,oo as z,ao as A,co as B,Y as C,Z as D,tt as E,ot as F,fo as G,xo as H,C as I,zo as J,Ko as K,Vo as L,$o as M,Qo as N,Yo as O,Zo as P,we as Q,Ce as R,Ee as S,Ge as T};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-YC6W5MPL.js.map