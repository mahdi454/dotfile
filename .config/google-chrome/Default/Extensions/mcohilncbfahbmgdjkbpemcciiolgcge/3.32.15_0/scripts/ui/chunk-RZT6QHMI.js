import{a as p,b as C}from"./chunk-CYOQISC6.js";import{c as f,h as d}from"./chunk-TKYTZF2K.js";import{M as l,pa as G}from"./chunk-6O63U2D6.js";import{a as g}from"./chunk-O337TVCZ.js";import{f as h,m as r,o as i}from"./chunk-GLD6H5Q5.js";r();i();C();d();G();var e=h(g()),D=(t,n=!1)=>{let[a,s]=(0,e.useState)(!1),[o,I]=(0,e.useState)({baseFee:"",feeUnit:"",priorityFee:""}),u=(0,e.useCallback)(async()=>{let{data:S={}}=await f(p.getGasInfo,{chainId:t});I(S)},[t]),m=(0,e.useCallback)(async()=>{s(!0),await u(),s(!1)},[u]);return(0,e.useEffect)(()=>{n&&!l(t)&&m()},[m,n,t]),{gasData:o,loading:a,gasDataFn:u}};r();i();C();d();var c=h(g()),L=()=>{let[t,n]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{let{data:a=[]}=await f(p.getGasTrackerChains);n(a)})()},[]),{supportChain:t}};r();i();var b={chainId:1,chainName:"",chainIcon:""},z=(t,n)=>{if(!n.length)return{chainId:void 0};let a=b,s;return n.forEach(o=>{o.chainId===1&&(a=o),o.chainId===t&&(s=o)}),s||a};export{D as a,L as b,z as c};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-RZT6QHMI.js.map
