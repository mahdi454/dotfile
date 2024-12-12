import{d as n,f as x}from"./chunk-R4G6BEPF.js";import{a as c,b as y}from"./chunk-CYOQISC6.js";import{c as a,f as o,h as A}from"./chunk-TKYTZF2K.js";import{m as s,o as u}from"./chunk-GLD6H5Q5.js";s();u();A();y();x();var l=async(t={})=>{let{data:e}=await a(c.queryAccountExist,t);return e},q=async t=>{let{data:e}=await a(c.queryAccountInfo,t);return e},w=async(t,e)=>{let r=await n().getSignRequestHeaders({walletId:e});return await o(c.createWaxAccount,t,{headers:r})||{}},g=async(t,e)=>{let r=await n().getSignRequestHeaders({walletId:e});return await o(c.createFreeWaxAccount,t,{headers:r})||{}},W=async t=>{let{data:e}=await a(c.queryAccountStatus,t);return e||{}},h=async t=>{let{data:e}=await a(c.checkAccountPattern,t);return e??!1};export{l as a,q as b,w as c,g as d,W as e,h as f};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-7OLZATXG.js.map
