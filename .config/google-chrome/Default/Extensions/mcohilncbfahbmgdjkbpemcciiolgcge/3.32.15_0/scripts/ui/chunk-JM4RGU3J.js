import{b as c}from"./chunk-RIWLOEHK.js";import{h as u}from"./chunk-IQUFOLSA.js";import{X as k}from"./chunk-VPDRXROE.js";import{a as m,b as W}from"./chunk-CYOQISC6.js";import{c as a,h as _}from"./chunk-TKYTZF2K.js";import{Kc as C,yc as n}from"./chunk-YT2MPR4E.js";import{j as f,pa as b}from"./chunk-6O63U2D6.js";import{M as E,n as i}from"./chunk-RIOWPXBZ.js";import{a as L}from"./chunk-O337TVCZ.js";import{f as r,m as o,o as s}from"./chunk-GLD6H5Q5.js";o();s();var l=r(L()),p=r(k());b();E();C();W();_();var T="update_defi_list",M=()=>{let d=u(),I=n(),t=(0,p.useRequest)(async()=>{let D=await a(m.getDefiList,{accountId:d});return f(D,["data","platformListByAccountId","0","platformListVoList"],[]).filter(g=>I.find(h=>Number(h.netWorkId)===g.chainId))},{manual:!0}),e=c("invest-DeFi",{onError:t.refresh,pollingInterval:30*1e3});return(0,l.useEffect)(()=>{e&&t.refresh()},[e]),i.listen(T,t.refresh,!1),t};export{T as a,M as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-JM4RGU3J.js.map
