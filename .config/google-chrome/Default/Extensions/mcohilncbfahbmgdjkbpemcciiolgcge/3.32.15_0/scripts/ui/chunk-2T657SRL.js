import{c as y,m as f,n as o,o as a}from"./chunk-GLD6H5Q5.js";var g=y((q,p)=>{f();a();p.exports=function(r){if(typeof r!="string")throw new Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof r+", while checking isHexPrefixed.");return r.slice(0,2)==="0x"}});var x=y((K,h)=>{f();a();var v=g();h.exports=function(r){return typeof r!="string"?r:v(r)?r.slice(2):r}});var j=y((F,w)=>{"use strict";f();a();var d=g(),c=x();function s(e){var r=e;if(typeof r!="string")throw new Error("[ethjs-util] while padding to even, value must be string, is currently "+typeof r+", while padToEven.");return r.length%2&&(r="0"+r),r}function l(e){var r=e.toString(16);return"0x"+r}function A(e){var r=l(e);return new o.Buffer(s(r.slice(2)),"hex")}function m(e){if(typeof e!="string")throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '"+typeof e+"'.");return o.Buffer.byteLength(e,"utf8")}function H(e,r,t){if(Array.isArray(e)!==!0)throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '"+typeof e+"'");if(Array.isArray(r)!==!0)throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '"+typeof r+"'");return r[Boolean(t)&&"some"||"every"](function(n){return e.indexOf(n)>=0})}function S(e){var r=new o.Buffer(s(c(e).replace(/^0+|0+$/g,"")),"hex");return r.toString("utf8")}function E(e){var r="",t=0,n=e.length;for(e.substring(0,2)==="0x"&&(t=2);t<n;t+=2){var i=parseInt(e.substr(t,2),16);r+=String.fromCharCode(i)}return r}function b(e){var r=new o.Buffer(e,"utf8");return"0x"+s(r.toString("hex")).replace(/^0+|0+$/g,"")}function P(e){for(var r="",t=0;t<e.length;t++){var n=e.charCodeAt(t),i=n.toString(16);r+=i.length<2?"0"+i:i}return"0x"+r}function C(e,r,t){if(!Array.isArray(e))throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '"+typeof e+"'");if(typeof r!="string")throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '"+typeof r+"'.");for(var n=[],i=0;i<e.length;i++){var u=e[i][r];if(t&&!u)u="";else if(typeof u!="string")throw new Error("invalid abi");n.push(u)}return n}function T(e,r){return!(typeof e!="string"||!e.match(/^0x[0-9A-Fa-f]*$/)||r&&e.length!==2+2*r)}w.exports={arrayContainsArray:H,intToBuffer:A,getBinarySize:m,isHexPrefixed:d,stripHexPrefix:c,padToEven:s,intToHex:l,fromAscii:P,fromUtf8:b,toAscii:E,toUtf8:S,getKeys:C,isHexString:T}});export{x as a,j as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-2T657SRL.js.map