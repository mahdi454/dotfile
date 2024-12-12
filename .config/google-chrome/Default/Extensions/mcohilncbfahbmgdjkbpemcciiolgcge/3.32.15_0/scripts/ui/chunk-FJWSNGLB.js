import{a as u}from"./chunk-X4Z4JMVV.js";import{X as y}from"./chunk-VPDRXROE.js";import{ca as r,ta as x}from"./chunk-VGT27A4M.js";import{F as m,X as w}from"./chunk-YT2MPR4E.js";import{M as E,x as o}from"./chunk-RIOWPXBZ.js";import{f as h,m as s,o as n}from"./chunk-GLD6H5Q5.js";s();n();var c=h(y());x();E();w();function _(){let l=u();return(0,c.useMemoizedFn)(async({from:L,chainId:f,simulateTransactionParam:p={},...T})=>{let e=(await l({checkTypes:[r.TX_ANALYZE],from:L,chainId:f,bizLine:6,simulateTransactionParamList:[{sigVerify:!1,replaceRecentBlockhash:!0,...p}],...T}))?.[r.TX_ANALYZE]||{},[a]=e.simulateTransactionResultList||[],i=(e.simulateTransactionResultList||[]).find(t=>t?.msg||m(t?.unitGasLimit,"0"));if(i?.msg)throw new Error(i?.msg);if(!a||!!i)throw new Error(o("wallet_extension_alert_estimate_unavailable"));return{firstUnitLimit:a?.unitGasLimit,unitLimits:(e.simulateTransactionResultList||[]).map(t=>t?.unitGasLimit)}})}var z=_;export{z as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-FJWSNGLB.js.map
