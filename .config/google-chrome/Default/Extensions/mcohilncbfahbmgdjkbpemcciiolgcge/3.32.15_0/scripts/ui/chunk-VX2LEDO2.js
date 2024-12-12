import{a as u}from"./chunk-ISFMRJLT.js";import{a as h}from"./chunk-JM4RGU3J.js";import{b as m}from"./chunk-7ZRI3S6Z.js";import{a as l}from"./chunk-TBLUUKKO.js";import{b as i}from"./chunk-AOXUSYRH.js";import{c as t}from"./chunk-RXNDJ7P3.js";import{pa as N,r as p}from"./chunk-6O63U2D6.js";import{M as I,n as f}from"./chunk-RIOWPXBZ.js";import{a as F}from"./chunk-O337TVCZ.js";import{f as w,m as e,o as r}from"./chunk-GLD6H5Q5.js";e();r();var n=w(F());N();I();e();r();var o={refreshWrapper:"_refreshWrapper_ec3nw_1",refresh:"_refresh_ec3nw_1",loading:"_loading_ec3nw_27",rotate:"_rotate_ec3nw_1"};var z=({className:g="",handleRefresh:s,status:a})=>{let d=u(),_=()=>{f.trigger(h)},{successHaptic:y,impactHaptic:x}=l(),L=p(async()=>{s("loading"),x();try{await Promise.all([m(),d(),_()]),s("success"),y()}catch{s("error")}},800,{leading:!0});return a==="hidden"?null:n.default.createElement(t.FlexBox,{align:t.ALIGN.center,justify:t.ALIGN.center,className:`${o.refreshWrapper} ${g}`,onClick:c=>{c.stopPropagation(),a!=="loading"&&L()}},n.default.createElement(i,{size:i.SIZE.xs,icon:"okx-wallet-plugin-refresh",className:`${o.refresh} ${a==="loading"&&o.loading}`}))};export{z as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-VX2LEDO2.js.map
