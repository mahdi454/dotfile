import{a as m}from"./chunk-M2ZE7N7H.js";import{a as p}from"./chunk-VGEPKX55.js";import{f as o,m as i,o as u}from"./chunk-ZCHLW7CF.js";i();u();var f=o(m()),c=o(p());function g(e){return(typeof e=="string"||typeof e=="number")&&/^(-)?0x[0-9a-f]*$/i.test(e)}function l(e){try{return f.default.apply(null,arguments)}catch(n){throw new Error(`${n} Given value: "${e}"`)}}var N=function(e,n=!1){if(!e)return e;if(typeof e=="string"&&!g(e))throw new Error(`Given value "${e}" is not a valid hex string.`);let t=l(e);return n&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)?BigInt(t):t.toNumber()},a=e=>{e=c.default.encode(e);let n="";e=e.replace(/^(?:\u0000)*/,""),e=e.split("").reverse().join(""),e=e.replace(/^(?:\u0000)*/,""),e=e.split("").reverse().join("");for(let t=0;t<e.length;t++){let r=e.charCodeAt(t).toString(16);n+=r.length<2?`0${r}`:r}return`0x${n}`};function E(e){return(typeof e=="string"||typeof e=="number")&&/^(-0x|0x)?[0-9a-f]*$/i.test(e)}export{g as a,N as b,a as c,E as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-FAJ2Q5PZ.js.map
