import{Pc as p,Uc as C,Vc as f,Wc as d}from"./chunk-O3CM75EN.js";import{M as g,pa as G}from"./chunk-VFHYER2K.js";import{a as l}from"./chunk-EAZTJZU7.js";import{f as h,m as r,o as i}from"./chunk-ZCHLW7CF.js";r();i();d();C();G();var e=h(l()),D=(t,n=!1)=>{let[a,s]=(0,e.useState)(!1),[o,I]=(0,e.useState)({baseFee:"",feeUnit:"",priorityFee:""}),u=(0,e.useCallback)(async()=>{let{data:S={}}=await p(f.getGasInfo,{chainId:t});I(S)},[t]),m=(0,e.useCallback)(async()=>{s(!0),await u(),s(!1)},[u]);return(0,e.useEffect)(()=>{n&&!g(t)&&m()},[m,n,t]),{gasData:o,loading:a,gasDataFn:u}};r();i();d();C();var c=h(l()),L=()=>{let[t,n]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{let{data:a=[]}=await p(f.getGasTrackerChains);n(a)})()},[]),{supportChain:t}};r();i();var b={chainId:1,chainName:"",chainIcon:""},z=(t,n)=>{if(!n.length)return{chainId:void 0};let a=b,s;return n.forEach(o=>{o.chainId===1&&(a=o),o.chainId===t&&(s=o)}),s||a};export{D as a,L as b,z as c};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-S5FXJOCI.js.map
