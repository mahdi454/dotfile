import{V as i,W as p,da as c,ea as g}from"./chunk-W6Q44ZHW.js";import{c as a,f as m}from"./chunk-3HS6AHPS.js";import{m as r,o}from"./chunk-ZCHLW7CF.js";r();o();g();m();p();var d=c({name:"walletConfig",initialState:{},reducers:{}}),{reducer:w}=d,W=w;function x(e){return{type:i,value:e}}function C(e,l){return s=>new Promise((u,f)=>{a().setWalletConfig(e,l,(t,n)=>{if(t){f(t);return}s(x(n)),u(n)})})}function A(e){return C("hasShowDisconnectUpgrade",e)}function E({metamask:e}){return e.walletConfig}export{W as a,C as b,A as c,E as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-DUWPYFAS.js.map
