import{Aa as p,za as a}from"./chunk-YT2MPR4E.js";import{m as n,o as e}from"./chunk-GLD6H5Q5.js";n();e();n();e();p();async function o({action:t,params:i,maxSize:g=500}){try{let s=await a.log,r=await s.get(t)||{a:t,d:[]};Array.isArray(r?.d)||(r.d=[]);let c=r.d,l={t:new Date().toLocaleString(),p:i};c.unshift(l),g&&c.splice(g),await s.set(r)}catch{console.log("set data failed")}}async function u(t){return(await a.log).query(t)}var h=t=>o({action:"pv",params:t}),A=t=>o({action:"pms",params:t}),S=t=>o({action:"pc",params:t});var b=t=>o({action:"pr",params:t,maxSize:50});export{u as a,h as b,A as c,S as d,b as e};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-X6SX7DLM.js.map
