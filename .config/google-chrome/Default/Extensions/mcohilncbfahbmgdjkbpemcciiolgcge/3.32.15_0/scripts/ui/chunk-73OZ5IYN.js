import{b as m,d as u}from"./chunk-GPJC633M.js";import{X as x}from"./chunk-VPDRXROE.js";import{V as p,X as d,x as l}from"./chunk-YT2MPR4E.js";import{f as b,m as a,o as c}from"./chunk-GLD6H5Q5.js";a();c();var i=b(x());d();a();c();var f=(...n)=>{let e=n.shift();return(...t)=>e?n.reduce((r,o)=>o(r),e(...t)):null},F=(...n)=>async(...e)=>n.slice(1).reduce((r,o)=>r.then(s=>o(s)),Promise.resolve(n[0](...e))),w=()=>{throw new Error};function I(n,e,t){let r={coinId:e,coinAmount:0,coinAmountInt:0,currencyAmount:0};return!Array.isArray(n)||!n?.length||(t?r=n.find(o=>+o.coinId==+e&&+o.addressType==+t)||{}:r=n.find(o=>+o.coinId==+e)||{}),r}function A(n,e){let t=u();return(0,i.useCreation)(()=>I(t,n,e),[t,n,e])}var B=(n={})=>{let e=n.coinAmountInt||0;return String(e)},D=n=>{let e=A(n);return B(e)},k=(n,e)=>f(l,p)(n,10**e),h=(n,e)=>(m(n)?.coins||[]).find(s=>s.coinId===+e)||{},z=(n,e)=>{let t=h(n,e);return B(t)},E=()=>{let n=u();return(0,i.useMemoizedFn)(e=>n.find(r=>r.coinId===+e)||{})},S=n=>{let e=u();return n.map(r=>e.find(o=>o.coinId===+r)||{})};export{f as a,F as b,w as c,I as d,A as e,D as f,k as g,z as h,E as i,S as j};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-73OZ5IYN.js.map
