import{a as oe,b as ie,c as le,d as ue,e as de}from"./chunk-HXUMX2S7.js";import{a as fe}from"./chunk-TBLUUKKO.js";import{p as te,q as ne,r as b}from"./chunk-S5DGV5WL.js";import{X as Je}from"./chunk-VPDRXROE.js";import{O as J,ga as Z,ha as v,w as qe}from"./chunk-JLIPSIRU.js";import{a as Ve}from"./chunk-VX55KNI4.js";import{i as W,m as Ze}from"./chunk-4TYAYDA2.js";import{o as z,p as X,t as Qe}from"./chunk-656GFN7J.js";import{c as M,d as I,f as Ge}from"./chunk-R4G6BEPF.js";import{c as ae,d as se,g as ce}from"./chunk-S3MY46XE.js";import{c as O,e as h}from"./chunk-AYCAVTPT.js";import{a as ee,b as Xe}from"./chunk-CYOQISC6.js";import{f as re,h as Ye}from"./chunk-TKYTZF2K.js";import{Fa as S,Gb as G,Ha as P,Ia as H,Ja as K,Jb as Q,Ka as q,Lc as j,Na as V,Rc as ze,Tc as A,gd as Y}from"./chunk-YT2MPR4E.js";import{H as C}from"./chunk-LDKM7IQF.js";import{pa as Ke,x as U}from"./chunk-6O63U2D6.js";import{M as He,x as T}from"./chunk-RIOWPXBZ.js";import{a as Pe}from"./chunk-O337TVCZ.js";import{c as E,f as F,m as u,o as d}from"./chunk-GLD6H5Q5.js";var me=E((Ir,pe)=>{"use strict";u();d();pe.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`)});var Ae=E((hr,Ie)=>{"use strict";u();d();var we="%[a-f0-9]{2}",ye=new RegExp(we,"gi"),ge=new RegExp("("+we+")+","gi");function k(e,r){try{return decodeURIComponent(e.join(""))}catch{}if(e.length===1)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],k(t),k(n))}function ve(e){try{return decodeURIComponent(e)}catch{for(var r=e.match(ye),t=1;t<r.length;t++)e=k(r,t).join(""),r=e.match(ye);return e}}function er(e){for(var r={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=ge.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{var n=ve(t[0]);n!==t[0]&&(r[t[0]]=n)}t=ge.exec(e)}r["%C2"]="\uFFFD";for(var a=Object.keys(r),c=0;c<a.length;c++){var s=a[c];e=e.replace(new RegExp(s,"g"),r[s])}return e}Ie.exports=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return er(e)}}});var he=E((Fr,We)=>{"use strict";u();d();We.exports=(e,r)=>{if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r==="")return[e];let t=e.indexOf(r);return t===-1?[e]:[e.slice(0,t),e.slice(t+r.length)]}});var Ee=E((br,xe)=>{"use strict";u();d();xe.exports=function(e,r){for(var t={},n=Object.keys(e),a=Array.isArray(r),c=0;c<n.length;c++){var s=n[c],o=e[s];(a?r.indexOf(s)!==-1:r(s,o,e))&&(t[s]=o)}return t}});var Ne=E(f=>{"use strict";u();d();var rr=me(),tr=Ae(),Te=he(),nr=Ee(),ar=e=>e==null,$=Symbol("encodeFragmentIdentifier");function sr(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{let a=t.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[l(r,e),"[",a,"]"].join("")]:[...t,[l(r,e),"[",l(a,e),"]=",l(n,e)].join("")]};case"bracket":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[l(r,e),"[]"].join("")]:[...t,[l(r,e),"[]=",l(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[l(r,e),":list="].join("")]:[...t,[l(r,e),":list=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let r=e.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[l(t,e),r,l(a,e)].join("")]:[[n,l(a,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,l(r,e)]:[...t,[l(r,e),"=",l(n,e)].join("")]}}function cr(e){let r;switch(e.arrayFormat){case"index":return(t,n,a)=>{if(r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!r){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][r[1]]=n};case"bracket":return(t,n,a)=>{if(r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"colon-list-separator":return(t,n,a)=>{if(r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"comma":case"separator":return(t,n,a)=>{let c=typeof n=="string"&&n.includes(e.arrayFormatSeparator),s=typeof n=="string"&&!c&&y(n,e).includes(e.arrayFormatSeparator);n=s?y(n,e):n;let o=c||s?n.split(e.arrayFormatSeparator).map(m=>y(m,e)):n===null?n:y(n,e);a[t]=o};case"bracket-separator":return(t,n,a)=>{let c=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!c){a[t]=n&&y(n,e);return}let s=n===null?[]:n.split(e.arrayFormatSeparator).map(o=>y(o,e));if(a[t]===void 0){a[t]=s;return}a[t]=[].concat(a[t],s)};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[].concat(a[t],n)}}}function Ce(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,r){return r.encode?r.strict?rr(e):encodeURIComponent(e):e}function y(e,r){return r.decode?tr(e):e}function be(e){return Array.isArray(e)?e.sort():typeof e=="object"?be(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function Oe(e){let r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function or(e){let r="",t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function Se(e){e=Oe(e);let r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function Fe(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function Me(e,r){r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r),Ce(r.arrayFormatSeparator);let t=cr(r),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(let a of e.split("&")){if(a==="")continue;let[c,s]=Te(r.decode?a.replace(/\+/g," "):a,"=");s=s===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?s:y(s,r),t(y(c,r),s,n)}for(let a of Object.keys(n)){let c=n[a];if(typeof c=="object"&&c!==null)for(let s of Object.keys(c))c[s]=Fe(c[s],r);else n[a]=Fe(c,r)}return r.sort===!1?n:(r.sort===!0?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((a,c)=>{let s=n[c];return Boolean(s)&&typeof s=="object"&&!Array.isArray(s)?a[c]=be(s):a[c]=s,a},Object.create(null))}f.extract=Se;f.parse=Me;f.stringify=(e,r)=>{if(!e)return"";r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r),Ce(r.arrayFormatSeparator);let t=s=>r.skipNull&&ar(e[s])||r.skipEmptyString&&e[s]==="",n=sr(r),a={};for(let s of Object.keys(e))t(s)||(a[s]=e[s]);let c=Object.keys(a);return r.sort!==!1&&c.sort(r.sort),c.map(s=>{let o=e[s];return o===void 0?"":o===null?l(s,r):Array.isArray(o)?o.length===0&&r.arrayFormat==="bracket-separator"?l(s,r)+"[]":o.reduce(n(s),[]).join("&"):l(s,r)+"="+l(o,r)}).filter(s=>s.length>0).join("&")};f.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);let[t,n]=Te(e,"#");return Object.assign({url:t.split("?")[0]||"",query:Me(Se(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:y(n,r)}:{})};f.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[$]:!0},r);let t=Oe(e.url).split("?")[0]||"",n=f.extract(e.url),a=f.parse(n,{sort:!1}),c=Object.assign(a,e.query),s=f.stringify(c,r);s&&(s=`?${s}`);let o=or(e.url);return e.fragmentIdentifier&&(o=`#${r[$]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${t}${s}${o}`};f.pick=(e,r,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[$]:!1},t);let{url:n,query:a,fragmentIdentifier:c}=f.parseUrl(e,t);return f.stringifyUrl({url:n,query:nr(a,r),fragmentIdentifier:c},t)};f.exclude=(e,r,t)=>{let n=Array.isArray(r)?a=>!r.includes(a):(a,c)=>!r(a,c);return f.pick(e,n,t)}});u();d();var i=F(Pe()),p=F(qe()),L=F(Ve()),De=F(Je()),x=F(Ne());He();Ze();Y();Qe();Q();u();d();var _e=()=>!!(window.navigator&&window.navigator.hid);Ge();u();d();Xe();Ye();var Be=()=>({syncMpcWallet:async r=>{let t=r?.walletIdentities?.length||0,n=r?.mpcId||"",{data:a}=await re(ee.syncMpcwallet,{mpcId:n,deriveIndex:t});return a}});u();d();Ke();Y();Q();ze();var je=(e,r)=>{if(!e||!Array.isArray(e))return[];let{hasBackup:t,keyringType:n}=r||{};return e.filter(({hasBackup:a,keyringIdentityType:c})=>{let s=!0;return typeof t=="boolean"&&(s=t===a),n&&(s=(typeof n=="string"?[n]:n)?.includes(c)),s})},ke=e=>e?.reduce((r,{walletIdentities:t,...n})=>[...r,...t.map((a={})=>({...n,...a}))],[]),$e=e=>e.map(r=>{let{walletIdentities:t}=r;return{...r,hasBackup:!t?.[0]?.needBackup}}),ir=(e={},r)=>{let t=[j.SEGWIT_NESTED,j.SEGWIT_NESTED_49],n={};return Object.keys(e).forEach(c=>{let s=r[c],o=t.find(w=>w!==s),m=Object.entries(e[c]).map(([w,Ue])=>({addressType:w,...Ue}));n[c]=m.filter(({addressType:w})=>w!==o)}),n},Re=(e=[])=>e.map(r=>{let{walletIdentities:t}=r;return{...r,walletIdentities:t.map(n=>{let{walletId:a,accountsMap:c,addressType:s,segwitAddressType:o,...m}=n;return{walletId:a,selectedAddressType:s,addressType:ir(n?.accountsMap,o),segwitAddressType:o,...m}})}});var lr=[P,V,H,K,q],zr=(e,r=S,t)=>{if(lr.includes(r)&&t){let a=G(r),c=e?.addressType?.[a]||[];return U(c,s=>s.addressType===t)?.address}return e?.account?.[r]};var ur="syncMpcWalletErrorCode",wt=()=>(0,p.useSelector)(v),dr=J(({keyring:e})=>{let{keyringIdentities:r}=e;return{keyringIdentities:r}},({keyringIdentities:e})=>Re(e)),D=e=>{let r=(0,p.useSelector)(dr);return(0,i.useMemo)(()=>{let n=$e(r);return e?je(n,e):n},[e,r])},N=e=>{let r=D(e);return(0,i.useMemo)(()=>ke(r||[]),[r])},fr=()=>(0,p.useSelector)(Z),_=(e,r=!0)=>{let t=fr(),n=e||t,a=N();return(0,i.useMemo)(()=>r===!1&&!e?null:a.find(c=>c?.walletId===n),[a,n,r,e])},It=(e,r)=>_(e,!1)?.account?.[r],At=(e,r)=>{let t=N(r);return(0,i.useMemo)(()=>Array.isArray(e)?t.filter(({walletId:n})=>e.includes(n)):t,[e,t])},Wt=()=>{let e=N();return(0,i.useCallback)(r=>e?.find(t=>t.walletId===r),[e])},ht=e=>_(e)?.keyringIdentityType===A.MPC,xt=e=>{let r=_(e);return de(r?.initialType)},Et=e=>{let r=D(),{keyringId:t}=_()||{},n=e||t;return(0,i.useMemo)(()=>r?.find(a=>a.keyringId===n),[r,n])},B=()=>{let e=D();return(0,i.useCallback)(r=>e?.find(t=>t.keyringId===r),[e])};var Le=()=>{let e=(0,p.useDispatch)(),{successHaptic:r,impactHaptic:t}=fe();return(0,i.useCallback)(async n=>{try{t();let{walletId:a}=await I().addNewWallet(n);return await W(e),r(),C.success({title:T("wallet_addacount_toast_account_created")}),a}catch(a){return a.message===z&&C.error(T("wallet_home_toast_network_error")),a.message===X&&C.error(T("extension_wallet_addwallet_toast_wallets_added",{amount:1e3})),""}},[])},pr=()=>{let e=(0,L.useHistory)();return(0,i.useCallback)(async r=>{let t=r?.walletIdentities?.[0]?.walletId;if(!_e()){e.push(`${b}/${O.ledger}?${x.default.stringify({baseChain:S,type:h.addAccount,walletId:t})}`);return}let n=`${ne}?${x.default.stringify({type:h.addAccount,walletId:t})}`;await ce.hasConnectedLedger()?e.push(n):se.openModal(ae.hardWareNotConnected,{walletName:r.keyringName,onButtonClick:()=>{globalThis.platform.openExtensionInBrowser(te)},onExtButtonClick:()=>{globalThis.platform.openExtensionInBrowser(`${n}&hideBack=1`)}})},[])},mr=()=>{let e=(0,L.useHistory)(),r=pr(),t=N()?.length;return(0,i.useCallback)(async n=>{if(t===1e3){C.error(T("extension_wallet_addwallet_toast_wallets_added",{amount:1e3}));return}let{initialType:a}=n,c=n?.walletIdentities?.[0]?.walletId;switch(!0){case oe(a):{r(n);break}case ie(a):{globalThis.platform.openExtensionInBrowser(`${b}/${O.trezor}?${x.default.stringify({type:h.addAccount,walletId:c,hideBack:1})}`);break}case le(a):{e.push(`${b}/${O.keystone}?${x.default.stringify({walletId:c,type:h.addAccount})}`);break}case ue(a):{let{onekeyInfo:s}=n,{firstEvmAddress:o,connectId:m}=s;e.push(`${b}/${O.onekey}?${x.default.stringify({firstEvmAddress:o,connectId:m,type:h.addAccount})}`);break}default:break}},[])},Ft=()=>{let e=B(),r=Le(),t=mr(),n=Le(),{syncMpcWallet:a}=Be();return(0,i.useCallback)(async c=>{if(c&&typeof c=="string"){let s=e(c),o=s?.walletIdentities?.[0]?.walletId;if(s?.keyringIdentityType===A.MNEMONIC)return await r(o);if(s?.keyringIdentityType===A.HARDWARE)return t(s);if(s?.keyringIdentityType===A.MPC){try{await a(s)}catch{return Promise.reject(new Error(ur))}return await n(o)}return Promise.reject()}return Promise.reject()},[e,r,t,n,a])},yr=()=>{let e=B();return(0,i.useCallback)(r=>new Promise((t,n)=>{let a=e(r);M().getMnemonicByWalletId(a?.walletIdentities?.[0]?.walletId,(c,s)=>{if(c){n(c);return}t(s)})}),[])},Tt=(e,r=!0)=>{let t=yr(),[n,a]=(0,i.useState)(null);return(0,i.useEffect)(()=>{(async()=>{if(e){let c=await t(e);a(c)}})()},[e]),r?n?.split(" "):n},gr=()=>(0,i.useCallback)((e,r={})=>new Promise((t,n)=>{M().getBackupPrivateKeys(e,(a,c)=>{if(a){n(a);return}let s=c;Array.isArray(r?.exclude)&&(s=s?.filter(({coinId:o})=>!r?.exclude?.includes(o))),t(s)})}),[]),Ct=(e,r={})=>{let[t,n]=(0,i.useState)([]),a=gr();return(0,De.useDeepCompareEffect)(()=>{(async()=>{if(e){let c=await a(e,r);n(c)}})()},[e,r]),t},wr=()=>{let e=B();return(0,i.useCallback)(r=>new Promise((t,n)=>{let a=e(r);M().getBackupData(a?.walletIdentities?.[0]?.walletId,(c,s)=>{if(c){n(c);return}t(s)})}),[])},bt=e=>{let[r,t]=(0,i.useState)([]),n=wr();return(0,i.useEffect)(()=>{(async()=>{if(e){let a=await n(e);t(a)}})()},[e]),r},Ot=()=>{let e=(0,p.useDispatch)(),r=B();return(0,i.useCallback)(async t=>{let n=r(t);await I().backupMnemonic(n?.walletIdentities?.[0]?.walletId),await W(e)},[])},St=()=>{let e=(0,p.useDispatch)();return(0,i.useCallback)(async(r,t)=>{await I().updateKeyringIdentityName(r,t),await W(e)},[])},Mt=()=>{let e=(0,p.useDispatch)();return(0,i.useCallback)(async(r,t)=>{await I().updateWalletIdentityName(r,t),await W(e)},[])},Nt=()=>{let e=(0,p.useDispatch)();return(0,i.useCallback)(async(r,t)=>{await I().updateKeyringIdentitiesOrder(r,t),await W(e)},[e])};export{Ne as a,_e as b,zr as c,ur as d,wt as e,D as f,N as g,fr as h,_ as i,It as j,At as k,Wt as l,ht as m,xt as n,Et as o,B as p,Ft as q,Tt as r,gr as s,Ct as t,bt as u,Ot as v,St as w,Mt as x,Nt as y};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-IQUFOLSA.js.map