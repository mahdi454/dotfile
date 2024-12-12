import{f as u,g as k}from"./chunk-WIWWLEBZ.js";import{Y as p,Z as D}from"./chunk-YT2MPR4E.js";import{G as g,pa as M}from"./chunk-6O63U2D6.js";import{a as v}from"./chunk-O337TVCZ.js";import{f as E,l as process,m as d,o as c}from"./chunk-GLD6H5Q5.js";d();c();var e=E(v());M();D();k();var C=(t,a={})=>{let[s,f]=(0,e.useState)(null),[w,T]=(0,e.useState)(null),[o,y]=(0,e.useState)(a);return(0,e.useEffect)(()=>{g(a,o)||y(a)},[a]),(0,e.useEffect)(()=>{let r=document.getElementById("sandbox"),l,i=n=>{n.data.chanel===t&&T(n.data)},m=n=>{n.data.status===201&&(window.removeEventListener("message",m),clearInterval(l),window.addEventListener("message",i),f(r))},b=p();return l=setInterval(()=>{r.contentWindow?.postMessage({status:200,buildType:process.env.ASSETS_BUILD_TYPE,cdn:u(),browser:b},"*")},1e3),window.addEventListener("message",m),()=>{window.removeEventListener("message",i)}},[]),(0,e.useEffect)(()=>{t&&s&&s.contentWindow?.postMessage({chanel:t,data:o},"*")},[t,s,o]),w};export{C as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-DQTTI4XL.js.map
