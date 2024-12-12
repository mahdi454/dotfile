import{X as P}from"./chunk-VPDRXROE.js";import{Aa as f,xa as i,za as o}from"./chunk-YT2MPR4E.js";import{M as w,p as c}from"./chunk-RIOWPXBZ.js";import{f as g,m as r,o as s}from"./chunk-GLD6H5Q5.js";r();s();var n=g(P());w();f();r();s();f();var l=async t=>{try{return await(await Promise.resolve(o.default_gas)).set(t),!0}catch{return!1}};async function m(t){try{return await(await Promise.resolve(o.default_gas)).get(t)}catch{return{realChainIdHex:""}}}var D=async t=>{try{return await(await Promise.resolve(o.default_gas)).delete(t),!0}catch{return!1}};var k=t=>(0,n.useMemoizedFn)(async e=>await m(e||t)),p=(t,e)=>(t?.realChainIdHex||e)&&(!!t?.gasPrice||!!t?.maxPriorityFeePerGas&&!!t?.maxFeePerGas),y=t=>{let{data:e}=c(i.default_gas,t),u=(0,n.useMemoizedFn)(async(a={})=>p(a,t)?await l(a?.realChainIdHex?a:{...a,realChainIdHex:t}):!1,[t]),G=(0,n.useMemoizedFn)(async a=>await D(a||t),[t]);return[e,u,G]},z=y;export{k as a,z as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-EZ5WRJOA.js.map
