import{c as A,h,n as S}from"./chunk-3KENBVE7.js";var Z=A((ee,W)=>{h();S();var L="Expected a function",E=NaN,B="[object Symbol]",F=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,_=/^0o[0-7]+$/i,D=parseInt,G=typeof self=="object"&&self&&self.Object===Object&&self,H=typeof self=="object"&&self&&self.Object===Object&&self,U=G||H||Function("return this")(),X=Object.prototype,q=X.toString,z=Math.max,J=Math.min,p=function(){return U.Date.now()};function K(e,t,r){var f,a,g,u,i,c,l=0,v=!1,s=!1,y=!0;if(typeof e!="function")throw new TypeError(L);t=k(t)||0,m(r)&&(v=!!r.leading,s="maxWait"in r,g=s?z(k(r.maxWait)||0,t):g,y="trailing"in r?!!r.trailing:y);function T(n){var o=f,d=a;return f=a=void 0,l=n,u=e.apply(d,o),u}function C(n){return l=n,i=setTimeout(b,t),v?T(n):u}function M(n){var o=n-c,d=n-l,O=t-o;return s?J(O,g-d):O}function x(n){var o=n-c,d=n-l;return c===void 0||o>=t||o<0||s&&d>=g}function b(){var n=p();if(x(n))return I(n);i=setTimeout(b,M(n))}function I(n){return i=void 0,y&&f?T(n):(f=a=void 0,u)}function N(){i!==void 0&&clearTimeout(i),l=0,f=c=a=i=void 0}function $(){return i===void 0?u:I(p())}function j(){var n=p(),o=x(n);if(f=arguments,a=this,c=n,o){if(i===void 0)return C(c);if(s)return i=setTimeout(b,t),T(c)}return i===void 0&&(i=setTimeout(b,t)),u}return j.cancel=N,j.flush=$,j}function Q(e,t,r){var f=!0,a=!0;if(typeof e!="function")throw new TypeError(L);return m(r)&&(f="leading"in r?!!r.leading:f,a="trailing"in r?!!r.trailing:a),K(e,t,{leading:f,maxWait:t,trailing:a})}function m(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function V(e){return!!e&&typeof e=="object"}function Y(e){return typeof e=="symbol"||V(e)&&q.call(e)==B}function k(e){if(typeof e=="number")return e;if(Y(e))return E;if(m(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=m(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(F,"");var r=P.test(e);return r||_.test(e)?D(e.slice(2),r?2:8):R.test(e)?E:+e}W.exports=Q});export{Z as a};
//# sourceMappingURL=chunk-WFPABEAU.js.map