import{a as u}from"./chunk-KU3DITYD.js";import{o as x}from"./chunk-KCWFMCND.js";import{_ as r}from"./chunk-EBR3PGFZ.js";import{Nb as m,dc as w}from"./chunk-O3CM75EN.js";import{L as E,w as o}from"./chunk-KJIO572I.js";import{f as h,m as s,o as n}from"./chunk-ZCHLW7CF.js";s();n();var c=h(x());E();w();function y(){let l=u();return(0,c.useMemoizedFn)(async({from:L,chainId:f,simulateTransactionParam:p={},...T})=>{let e=(await l({checkTypes:[r.TX_ANALYZE],from:L,chainId:f,bizLine:6,simulateTransactionParamList:[{sigVerify:!1,replaceRecentBlockhash:!0,...p}],...T}))?.[r.TX_ANALYZE]||{},[a]=e.simulateTransactionResultList||[],i=(e.simulateTransactionResultList||[]).find(t=>t?.msg||m(t?.unitGasLimit,"0"));if(i?.msg)throw new Error(i?.msg);if(!a||!!i)throw new Error(o("wallet_extension_alert_estimate_unavailable"));return{firstUnitLimit:a?.unitGasLimit,unitLimits:(e.simulateTransactionResultList||[]).map(t=>t?.unitGasLimit)}})}var G=y;export{G as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-45NOBBNS.js.map
