import{e as p}from"./chunk-IRMGOW5H.js";import{d as m}from"./chunk-UI7PAU35.js";import{ca as g,ea as s,fa as l,wa as r,xa as i}from"./chunk-JLIPSIRU.js";import{m as c,o as d}from"./chunk-GLD6H5Q5.js";c();d();var e={connect:"connect",transaction:"transaction",msg:"msg",addToken:"addToken",addChain:"addChain"};function a(n={}){let t=null,o=0;return Object.keys(n).forEach(f=>{let T=n[f];Array.isArray(T)&&T.forEach(u=>{let h=u.time||0;h>=o&&(t=f,o=h)})}),t}c();d();var U=n=>{let t=m(n)?.isRpcMode,o;return t?o=a({[e.connect]:p(n),[e.transaction]:s(n),[e.msg]:g(n),[e.addToken]:i(n),[e.addChain]:r(n)}):o=a({[e.connect]:p(n),[e.transaction]:l(n),[e.addToken]:i(n),[e.addChain]:r(n)}),o},q=n=>m(n)?.isRpcMode?p(n).length+s(n).length+g(n).length+i(n).length+r(n).length:p(n).length+l(n).length+i(n).length+r(n).length;export{e as a,U as b,q as c};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-3545CIHX.js.map
