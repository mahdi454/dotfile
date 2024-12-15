import{a as u}from"./chunk-VUEUNEEZ.js";import{a as h}from"./chunk-D3SXH5AP.js";import{b as m}from"./chunk-2SHHGXPQ.js";import{a as l}from"./chunk-VRXSSD45.js";import{b as i}from"./chunk-S3O4LR55.js";import{c as t}from"./chunk-FDCWN4NG.js";import{pa as F,r as f}from"./chunk-VFHYER2K.js";import{L as N,n as p}from"./chunk-KJIO572I.js";import{a as I}from"./chunk-EAZTJZU7.js";import{f as w,m as e,o as r}from"./chunk-ZCHLW7CF.js";e();r();var n=w(I());F();N();e();r();var o={refreshWrapper:"_refreshWrapper_ec3nw_1",refresh:"_refresh_ec3nw_1",loading:"_loading_ec3nw_27",rotate:"_rotate_ec3nw_1"};var z=({className:g="",handleRefresh:s,status:a})=>{let d=u(),_=()=>{p.trigger(h)},{successHaptic:y,impactHaptic:x}=l(),L=f(async()=>{s("loading"),x();try{await Promise.all([m(),d(),_()]),s("success"),y()}catch{s("error")}},800,{leading:!0});return a==="hidden"?null:n.default.createElement(t.FlexBox,{align:t.ALIGN.center,justify:t.ALIGN.center,className:`${o.refreshWrapper} ${g}`,onClick:c=>{c.stopPropagation(),a!=="loading"&&L()}},n.default.createElement(i,{size:i.SIZE.xs,icon:"okx-wallet-plugin-refresh",className:`${o.refresh} ${a==="loading"&&o.loading}`}))};export{z as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-B3BQMW6E.js.map
