import{a as T}from"./chunk-EGFT6YV7.js";import{a as N}from"./chunk-SCXRHDUG.js";import{Qc as P,Uc as G,d as u,e as $,j as C,k as E}from"./chunk-O3CM75EN.js";import{Q as b,R as I,o as g,r as A}from"./chunk-J3CEQI22.js";import{B as n,L as B}from"./chunk-KJIO572I.js";import{a as R}from"./chunk-HJXNXGYU.js";import{a as y}from"./chunk-EAZTJZU7.js";import{f as d,m as i,o as l}from"./chunk-ZCHLW7CF.js";i();l();var o=d(y());B();i();l();var c=d(y());$();E();G();var S=()=>{let t=N("apiDomain",{...T,location:window.location.href}),[e,a]=(0,c.useState)([]),[r,k]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{if(t?.data){await u.set({networkChangeAPIDomain:t.data?.apiDomain}),a(t.data?.apiDomain);return}let{networkChangeAPIDomain:p=[]}=await u.get("networkChangeAPIDomain");a(p)})()},[t]),(0,c.useEffect)(()=>{(async()=>{let p=[],h=[],{apiDomain:M}=await u.get("apiDomain");for(let s=0,w=e.length;s<w;s++)h.push({url:e[s],status:0}),p.push((m=>new Promise(x=>{let D={url:m,checked:M===m};P(`${m}${C.app.tryPaths.apiDomain.url}`,{},{timeout:2e3}).then(()=>{x({...D,status:1})}).catch(()=>{x({...D,status:0})})}))(e[s]));k(h),Promise.allSettled(p).then(s=>{let w=[];s.forEach(m=>{w.push(m?.value)}),k(w)}).catch(()=>{})})()},[e[0]]),r};var f=d(R());i();l();var _={networkHeight:"_networkHeight_1c1nu_1",networkName:"_networkName_1c1nu_9",networkIcon:"_networkIcon_1c1nu_14",networkDisable:"_networkDisable_1c1nu_17",networkPadding:"_networkPadding_1c1nu_21"};var H=({networkDomain:t})=>o.default.createElement("div",{className:_.networkPadding},t.map((e,a)=>{let r=e.status===1;return o.default.createElement("div",{onClick:()=>{r&&g.warn({alignBottom:!1,title:n("wallet_extension_settings_popup_title_restart_extension"),text:n("wallet_extension_settings_popup_text_restart_extension"),cancelText:n("wallet_extension_settings_popup_btn_not_now"),confirmText:n("wallet_extension_settings_popup_btn_restart"),onConfirm:async()=>{await f.default.storage.local.set({userChooseNetwork:1}),await f.default.storage.local.set({apiDomain:e.url}),f.default.runtime.reload()}})},className:`${_.networkHeight} ${r?"":_.networkDisable}`},o.default.createElement("span",{className:_.networkName},n("wallet_extension_settings_text_server1",{num:a+1})),r?o.default.createElement(b,null,n("wallet_extension_settings_tag_available")):o.default.createElement(I,null,n("wallet_extension_settings_tag_failed")),r&&e.checked&&o.default.createElement(A.Circle,{checked:!0,className:_.networkIcon}))})),at=t=>{g.action({noTopRadius:!1,title:n("wallet_extension_settings_select_text_switch_servers"),children:o.default.createElement(H,{networkDomain:t})})},rt=({visible:t=!1,onClose:e=()=>{}})=>{let a=S();return o.default.createElement(g.Action,{noTopRadius:!1,visible:t,onClose:e,title:n("wallet_extension_settings_select_text_switch_servers")},o.default.createElement(H,{networkDomain:a}))};export{S as a,at as b,rt as c};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-L735PIVH.js.map