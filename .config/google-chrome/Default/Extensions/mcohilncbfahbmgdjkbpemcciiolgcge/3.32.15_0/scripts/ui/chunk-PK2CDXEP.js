import{a as Z}from"./chunk-RCR6NTPG.js";import{c as b}from"./chunk-RXNDJ7P3.js";import{Kc as k,Lc as E,Rc as U,jc as i,kc as u}from"./chunk-YT2MPR4E.js";import{c as C}from"./chunk-OSCGYMLH.js";import{a as O}from"./chunk-O337TVCZ.js";import{f as w,m as r,o as l}from"./chunk-GLD6H5Q5.js";r();l();var a=w(O()),f=w(C()),T=w(Z());k();U();r();l();var d={xl:"xl",lg:"lg",md:"md",sm:"sm"};r();l();var m={"wallet-avatar":"_wallet-avatar_1g29v_1",walletAvatar:"_wallet-avatar_1g29v_1","wallet-avatar-core":"_wallet-avatar-core_1g29v_4",walletAvatarCore:"_wallet-avatar-core_1g29v_4","wallet-avatar-xl":"_wallet-avatar-xl_1g29v_11",walletAvatarXl:"_wallet-avatar-xl_1g29v_11","wallet-avatar-lg":"_wallet-avatar-lg_1g29v_15",walletAvatarLg:"_wallet-avatar-lg_1g29v_15","wallet-avatar-md":"_wallet-avatar-md_1g29v_19",walletAvatarMd:"_wallet-avatar-md_1g29v_19","wallet-avatar-sm":"_wallet-avatar-sm_1g29v_23",walletAvatarSm:"_wallet-avatar-sm_1g29v_23"};var h=a.default.memo(({size:g=d.md,className:M,walletIdentity:N={}})=>{let{account:t,addressType:s,walletId:e,accountsMap:p}=N,[x,S]=(0,a.useState)(null),v=(0,a.useRef)(null),I=(0,a.useMemo)(()=>{if(!t)return e||"0x";if(t?.[i])return t?.[i];try{let o=Object.values(t);if(o.length===1&&t?.[u]){let n=p?.bitcoin?.segwit_native?.address;if(n)return n;if(s&&Object.values(s).length>=1){let{address:c}=s?.[u]?.find(_=>_?.addressType===E.SEGWIT_NATIVE)||{};return c||e}}return o[0]||e}catch{return e}},[t,e,s,p]);return(0,a.useEffect)(()=>{let o={root:null,rootMargin:"0px",threshold:0},n=L=>{L.forEach(B=>{if(B.isIntersecting){let A=(0,T.default)(I.toLowerCase());A&&S(A)}})},c=new IntersectionObserver(n,o);v.current&&c.observe(v.current);let _=v.current;return()=>{_&&c.unobserve(_)}},[x,I,e]),a.default.createElement(b.Box,{ref:v,className:(0,f.default)(m["wallet-avatar"],{[m[`wallet-avatar-${g}`]]:!!g},M)},a.default.createElement("img",{src:x,className:(0,f.default)(m["wallet-avatar-core"]),alt:"wallet-avatar"}))});h.SIZE=d;var Q=h;export{Q as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-PK2CDXEP.js.map