import{b as c}from"./chunk-T37NLQBV.js";import{h as u}from"./chunk-QHZHYX4V.js";import{o as k}from"./chunk-KCWFMCND.js";import{Pc as m,Uc as W,Vc as a,Wc as _,mb as n,wb as C}from"./chunk-O3CM75EN.js";import{j as i,pa as L}from"./chunk-VFHYER2K.js";import{L as b,n as f}from"./chunk-KJIO572I.js";import{a as E}from"./chunk-EAZTJZU7.js";import{f as r,m as o,o as s}from"./chunk-ZCHLW7CF.js";o();s();var l=r(E()),p=r(k());L();b();C();_();W();var T="update_defi_list",M=()=>{let d=u(),I=n(),t=(0,p.useRequest)(async()=>{let D=await m(a.getDefiList,{accountId:d});return i(D,["data","platformListByAccountId","0","platformListVoList"],[]).filter(g=>I.find(h=>Number(h.netWorkId)===g.chainId))},{manual:!0}),e=c("invest-DeFi",{onError:t.refresh,pollingInterval:30*1e3});return(0,l.useEffect)(()=>{e&&t.refresh()},[e]),f.listen(T,t.refresh,!1),t};export{T as a,M as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-D3SXH5AP.js.map
