import{f as s}from"./chunk-GQYTOJVD.js";import{o as d}from"./chunk-KCWFMCND.js";import{w as B}from"./chunk-3TDWET6C.js";import{d as a,f as M}from"./chunk-3HS6AHPS.js";import{f as c,m as n,o as i}from"./chunk-ZCHLW7CF.js";n();i();var p=c(B()),m=c(d());M();var S=({metamask:t})=>t?.createdMap||{},g=(t,e,u={})=>{let r=s(t,e,{...u,withBalanceStatus:!0})||{},{requestBalance:f}=r,l=!(0,p.useSelector)(S)[e];return(0,m.useMount)(async()=>{if(l)try{let o=await a().getWalletTypeCreated(e);await a().createWalletToServer({walletId:e,walletType:o,noticeBackend:!0}),f()}catch{}}),r},C=g;export{C as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-KTRYKYE5.js.map
