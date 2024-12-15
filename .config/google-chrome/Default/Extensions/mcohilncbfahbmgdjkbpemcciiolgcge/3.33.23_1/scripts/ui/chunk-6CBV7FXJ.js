import{a as T,l as E}from"./chunk-QHZHYX4V.js";import{p as l,q as m}from"./chunk-DUKP4BLI.js";import{a as L}from"./chunk-VPGNJAK6.js";import{c as p,d,g as c}from"./chunk-GQJVAWGG.js";import{e as i}from"./chunk-GCXT25LW.js";import{a as y}from"./chunk-EAZTJZU7.js";import{f as o,m as a,o as s}from"./chunk-ZCHLW7CF.js";a();s();var f=o(T()),u=o(L());var C=o(y());var _=()=>{let e=(0,u.useHistory)(),t=E();return(0,C.useCallback)(async r=>{let g=await c.hasConnectedLedger(),{walletName:h}=t(r),n=`${m}?${f.default.stringify({type:i.addChain,walletId:r})}`;g?e.push(n):d.openModal(p.hardWareNotConnected,{walletName:h,onButtonClick:()=>{globalThis.platform.openExtensionInBrowser(l)},onExtButtonClick:()=>{globalThis.platform.openExtensionInBrowser(`${n}&hideBack=1`)}})},[e,t])};export{_ as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-6CBV7FXJ.js.map
