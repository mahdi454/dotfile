import{c as p}from"./chunk-75OW6LUI.js";import{a as h}from"./chunk-O2FUKKO3.js";import{nb as d,pc as o,sb as f,ub as l,vc as V,wb as T}from"./chunk-O3CM75EN.js";import{b as y}from"./chunk-HJXNXGYU.js";import{f as m,m as c,o as u}from"./chunk-ZCHLW7CF.js";c();u();var n=m(h());y();T();V();async function x(r,t,e=""){let i=!1,{wallet:s}=await p(t);try{i=(await s?.validAddress({address:r,hrp:e})).isValid}catch{return i}return i}async function A(r,t,e=""){return x(r,d({coinId:t})?.coinType,e)}async function v(r){return A(r,l)}async function R(r){return A(r,f)}async function w(r,t){let e=await x(r,0);return e?t===o.SEGWIT_TAPROOT?{isValid:/^(bc1p)/.test(r),addressType:t}:{isValid:e,addressType:t}:{isValid:e,addressType:t}}async function W(r){return w(r,o.SEGWIT_TAPROOT)}function E(r,{allowNonPrefixed:t=!0,mixedCaseUseChecksum:e=!1}={}){let i=t?(0,n.addHexPrefix)(r):r;if(!(0,n.isHexString)(i))return!1;if(e){let s=i.slice(2),a=s.toLowerCase(),C=s.toUpperCase();if(!(s===a||s===C))return(0,n.isValidChecksumAddress)(i)}return(0,n.isValidAddress)(i)}export{A as a,v as b,R as c,w as d,W as e,E as f};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-S4NIXE4H.js.map
