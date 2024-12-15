import{va as i,ya as c}from"./chunk-W6Q44ZHW.js";import{d as s,f as n}from"./chunk-3HS6AHPS.js";import{G as o}from"./chunk-J3CEQI22.js";import{m as a,o as d}from"./chunk-ZCHLW7CF.js";a();d();n();c();async function p(e){try{return await s().addAddressBook(e)}catch(r){throw r?.message!==i&&o.error({title:r?.message}),r}}async function A(e,r){try{return await s().updateAddressBook(e,r)}catch(t){return o.error({title:t?.message}),t}}async function g(e){try{return await s().removeAddressBook(e)}catch(r){throw o.error({title:r?.message}),r}}async function k(e,r){try{return await s().addRecentlyAddress(e,r)}catch(t){return o.error({title:t?.message}),t}}export{p as a,A as b,g as c,k as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-6ZHQ2QLX.js.map
