import{B as m,C as o,D as e,F as c,W as i,X as q,w as s}from"./chunk-YT2MPR4E.js";import{M as T,x as C}from"./chunk-RIOWPXBZ.js";import{m as l,o as w}from"./chunk-GLD6H5Q5.js";l();w();T();q();var L=()=>{let n=C("extension_wallet_transaction_text_minute"),x=C("extension_wallet_transaction_text_second");return(t,r,d)=>{if(d)return`-- ${n}`;let a=i(t.minCost,n,x),_=i(t.normalCost,n,x),$=i(t.maxCost,n,x),u=`> 3 ${n}`,p=`> 10 ${n}`,S=`> 60 ${n}`;return c(r,t.min)?$:e(r,t.min)&&m(r,t.normal)?`< ${$}`:c(r,t.normal)?_:e(r,t.normal)&&m(r,t.max)?`< ${_}`:c(r,t.max)?a:e(r,t.max)?`< ${a}`:m(r,t.min)?o(r,s(t.min,.85))?S:o(r,s(t.min,.9))?p:(o(r,s(t.min,.95)),u):`-- ${n}`}};export{L as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-C6JR2GZU.js.map
