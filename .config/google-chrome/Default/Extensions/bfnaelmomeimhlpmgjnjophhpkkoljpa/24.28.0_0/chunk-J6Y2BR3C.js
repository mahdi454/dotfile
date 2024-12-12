import{b as k,eb as re,hb as c}from"./chunk-CZNVQ2ZN.js";import{a as p,b as l,c as h}from"./chunk-UCBZOSRF.js";import{a as te}from"./chunk-BCLUZY4R.js";import{a as T}from"./chunk-BTKBODVJ.js";import{Na as U,Pc as Z,Rb as J,Sb as Q,Tc as X,_ as H,cc as z,dc as G,ec as j,hc as Y,nd as $,td as ee}from"./chunk-6ZVJZYTQ.js";import{m as E}from"./chunk-56SJOU6P.js";import{o as N}from"./chunk-CBSQD5B4.js";import{J as _,Qa as V,q as Pe,ta as g}from"./chunk-VNNHZNYI.js";import{a as P}from"./chunk-7X4NV6OJ.js";import{f as y,h as i,m as Buffer,n as u}from"./chunk-3KENBVE7.js";i();u();i();u();var d=y(P());i();u();var q=t=>t.reduce((e,r)=>{let s=e;for(let o of r.accounts){let n=o.chain.name.toLowerCase();if(e[n]?.balance&&e[n]?.history)continue;let m="amount"in o?parseFloat(o.amount)>0:!1,A=o.hasAccountActivity;if(!e[n]){s={...s,[n]:{balance:m,history:A}};continue}s={...s,[n]:{...s[n],balance:m||s[n]?.balance,history:A||s[n]?.history}}}return s},{});i();u();var I=y(P()),se=t=>{let e=ee(),r=(0,I.useCallback)(s=>e.includes(U.getChainID(s.chain.id)),[e]);return(0,I.useMemo)(()=>t?t.map(s=>s.status==="undiscovered"?{...s,accounts:s.accounts.filter(o=>r(o))}:{...s,accounts:s.accounts.filter(o=>r(o)&&o.hasAccountActivity)}):[],[r,t])};i();u();var C=y(P()),F=t=>{let[e,r]=(0,C.useState)(null);return(0,C.useEffect)(()=>{if(t.length){let s=new H(t);return r(s),()=>{r(null),s.cleanup()}}},[t]),e};var Ee=t=>(0,d.useMemo)(()=>t.reduce((e,r,s)=>(e[s]=s===0||r.isSelectedByDefault,e),{}),[t]),Ie=(t,e)=>(0,d.useMemo)(()=>t?.reduce((r,s,o)=>e[o]?[...r,s]:r,[])??[],[t,e]),Ce=(t,e)=>{(0,d.useEffect)(()=>{e(r=>{let{length:s}=Object.keys(t),o={};for(let n=0;n<s;n++)o[n]=r[n]===void 0?t[n]:r[n];return o})},[t,e])},Be=3e3,De=(t,e)=>{let{t:r}=E();return(0,d.useEffect)(()=>{let s;if(t){let{pages:o}=t,n=o.length>1,m=o[o.length-1].length===0;n&&m&&(e(r("onboardingSelectAccountsFindMoreNoneFound")),s=setTimeout(()=>{e(r("onboardingSelectAccountsFindMoreAccounts"))},Be))}return()=>{s&&clearTimeout(s)}},[t])},Oe=({activeAccountsNumber:t,allAccountsNumber:e,hasDiscoveryFailed:r})=>{let{t:s}=E(),o=t>0&&!r;return(0,d.useMemo)(()=>e===0?s("onboardingImportImportingFindingAccounts"):t===0?s("onboardingImportAccountsEmptyResult"):e===1?o?s("onboardingImportAccountsFoundAccounts_one",{numberOfWallets:t}):s("onboardingImportAccountsFoundAccountsNoActivity_one",{numberOfWallets:e}):e>1?o?s("onboardingImportAccountsFoundAccounts_other",{numberOfWallets:t}):s("onboardingImportAccountsFoundAccountsNoActivity_other",{numberOfWallets:e}):"",[t,e,o,s])},oe={extension:7,ios:7,android:7,web:7},Te=({seed:t,navigationCallback:e,storageCallback:r,enabledAddressTypes:s,enabledChains:o})=>{let{t:n}=E(),m=n("onboardingSelectAccountsFindMoreAccounts"),[A,S]=(0,d.useState)({}),[B,K]=(0,d.useState)(!1),[le,pe]=(0,d.useState)(!1),[ge,me]=(0,d.useState)(m),Ae=F(t),{data:D,status:b,fetchNextPage:fe,isFetchingNextPage:ye}=k({batchSize:oe[_],hdWallet:Ae,enabledAddressTypes:s,enabledChains:o}),R=(0,d.useMemo)(()=>D?.pages.flat()??[],[D]),O=se(R),he=Ee(O),v=Ie(R,A),we=Oe({activeAccountsNumber:O.length,allAccountsNumber:R.length,hasDiscoveryFailed:R[0]?.status==="undiscovered"});De(D,me),Ce(he,S);let Se=(0,d.useCallback)(()=>pe(!0),[]),be=(0,d.useCallback)(x=>{if(b!=="success")return;let f={...A};f[x]=!f[x],S(f)},[b,A,S]),ve=(0,d.useCallback)(()=>{b==="success"&&S(x=>{let f={...x},Re=Object.values(f).every(Boolean);return Object.keys(f).forEach(($e,xe)=>{f[xe]=!Re}),f})},[b,S]),Me=(0,d.useCallback)(async()=>{B||(K(!0),await N(0),await r(v,q(v)),K(!1),e(q(v)))},[B,v,e,r]),W={expanded:le,findMoreAccountsButtonText:ge,isFetchingMoreAccounts:ye,isImporting:B,renderedPages:O,selectedAccounts:A,subtitle:we,findMoreAccounts:fe,onExpand:Se,onImport:Me,onSelect:be,onSelectAll:ve};return b!=="success"?{status:"loading",isImportButtonDisabled:!0,...W}:{status:"success",isImportButtonDisabled:v.length===0,...W}};i();u();i();u();var M=y(Pe()),ne=y(P()),a=y(T());var qe=async(t,e,r)=>{let s=e.fold(m=>Buffer.from(m.buffer).toString("base64")),o=c("importPrivateKeyAccount",[t,s,r]),n=await g.startSpan({name:"importPrivateKeyAccount"},()=>h(a.default.runtime,o));if("error"in n)throw new Error(n.error.message);if(typeof n.result=="string")return JSON.parse(n.result);throw new Error("importPrivateKeyAccount: Invalid response from background script")},lr=async(t,e,r)=>{let s=t.getEntropy(),o=c("importSeedAccount",[M.default.encode(s),e,r]);s.fill(0);let n=await g.startSpan({name:"importSeedAccount"},()=>h(a.default.runtime,o));if("error"in n)throw new Error(n.error.message);if(typeof n.result=="string")return JSON.parse(n.result);throw new Error("importS*edAccount: Invalid response from background script")},pr=async(t,e,r)=>{let s=t.getEntropy(),o=c("importSocialSeedAccount",[M.default.encode(s),e,r]);s.fill(0);let n=await g.startSpan({name:"importSeedlessAccount"},()=>h(a.default.runtime,o));if("error"in n)throw new Error(n.error.message);if(typeof n.result=="string")return JSON.parse(n.result);throw new Error("importS*edlessAccount: Invalid response from background script")},gr=async t=>{let e=t.getEntropy(),r=c("isExistingSeed",M.default.encode(e));e.fill(0);let s=await g.startSpan({name:"isExistingSeed"},()=>h(a.default.runtime,r));if("error"in s)throw new Error(s.error.message);if(typeof s.result=="boolean"||s.result===null)return s.result;throw new Error("isExistingS*ed: Invalid response from background script")},Fe=async t=>{let e=c("addAccountForSeed",[t]),r=await g.startSpan({name:"addAccountForSeed"},async()=>l(await a.default.runtime.sendMessage(p(e))));if("error"in r)throw new Error(r.error.message);if(typeof r.result=="string")return JSON.parse(r.result);throw new Error("addAccountForS*ed: Invalid response from background script")},Le=async t=>{let e=c("addAccountForSeedless",[t]),r=await g.startSpan({name:"addAccountForSeedless"},async()=>l(await a.default.runtime.sendMessage(p(e))));if("error"in r)throw new Error(r.error.message);if(typeof r.result=="string")return JSON.parse(r.result);throw new Error("addAccountForS*ed: Invalid response from background script")},Ke=async(t,e)=>{let r=c("addLedgerAccounts",[t,e]),s=await g.startSpan({name:"connectLedgerAccounts"},async()=>l(await a.default.runtime.sendMessage(p(r))));if("error"in s)throw new Error(s.error.message);if(typeof s.result=="string")return JSON.parse(s.result);throw new Error("connectLedgerAccounts: Invalid response from background script")},We=async t=>{let e=c("importReadOnlyAccount",t),r=await g.startSpan({name:"addReadonlyAccount"},async()=>l(await a.default.runtime.sendMessage(p(e))));if("error"in r)throw new Error(r.error.message);if(typeof r.result=="string")return JSON.parse(r.result);throw new Error("addReadonlyAccount: Invalid response from background script")},mr=async(t,e,r)=>{let s=c("exportPrivateKey",[t,e,r]),o=await g.startSpan({name:"exportPrivateKey"},async()=>l(await a.default.runtime.sendMessage(p(s))));if("error"in o)throw new Error(o.error.message);if(typeof o.result=="string")return V.from(Buffer.from(o.result,"hex"));throw new Error("exportPrivateKey: Invalid response from background script")},Ar=async(t,e)=>{let r=c("exportEntropy",[t,e]),s=await g.startSpan({name:"exportEntropy"},async()=>l(await a.default.runtime.sendMessage(p(r))));if("error"in s)throw new Error(s.error.message);if(typeof s.result=="string")return V.from(Buffer.from(s.result,"hex"));throw new Error("exportEntropy: Invalid response from background script")},_e=async()=>{let t=c("deriveAddresses",void 0),e=await h(a.default.runtime,t);if("error"in e)throw new Error(e.error.message);return e.result},Ne=async t=>{let e=c("removeAccount",t),r=await h(a.default.runtime,e);if("error"in r)throw new Error(r.error.message);return r.result},He=async(t,e)=>{let r=c("reorderAccount",{identifier:t,toIndex:e}),s=await h(a.default.runtime,r);if("error"in s)throw new Error(s.error.message);return s.result},Ue=async t=>{let e=c("syncAccounts",{syncedAccounts:t}),r=l(await a.default.runtime.sendMessage(p(e)));if("error"in r)throw new Error(r.error.message);return r.result},Je=async()=>{let t=c("getAllAccounts",void 0),e=l(await a.default.runtime.sendMessage(p(t)));if("error"in e)throw new Error(e.error.message);if(typeof e.result=="string"){let r=JSON.parse(e.result);return Z({accounts:r}).accounts}throw new Error("fetchAllAccounts: Invalid response from background script")},Qe=async()=>{let t=c("getAllSeeds",void 0),e=l(await a.default.runtime.sendMessage(p(t)));if("error"in e)throw new Error(e.error.message);if(typeof e.result=="string")return JSON.parse(e.result);throw new Error("fetchAllSe*dMetas: Invalid response from background script")},ze=async()=>{let t=c("getAllSeedlessSeeds",void 0),e=l(await a.default.runtime.sendMessage(p(t)));if("error"in e)throw new Error(e.error.message);if(typeof e.result=="string")return JSON.parse(e.result);throw new Error("fetchAllSe*dlessMetas: Invalid response from background script")},Ge=async t=>{let e=c("getAuthenticationPublicKey",{secretIdentifier:t}),r=l(await a.default.runtime.sendMessage(p(e)));if("error"in r)throw new Error(r.error.message);if(typeof r.result=="string")return JSON.parse(r.result);throw new Error("getAuthenticationPublicK*y: Invalid response from background script")},je=async()=>{let t=c("checkVaultIntegrity",void 0),e=l(await a.default.runtime.sendMessage(p(t)));if("error"in e)throw new Error(e.error.message);return e.result},Ye=async(t,e)=>{let r=X.parse(e);"chainType"in r&&r.chainType==="solana"&&r.signingType==="transaction"&&typeof r.message!="string"&&(r.message=M.default.encode(r.message));let s=c("sign",{accountIdentifier:t,params:r}),o=l(await a.default.runtime.sendMessage(p(s)));if("error"in o)throw new Error(o.error.message);if(typeof o.result=="string")return l(o.result);throw new Error("sign: Invalid response from background script")},ce={addAccountForSeed:Fe,addReadonlyAccount:We,importPrivateKeyAccount:qe,connectLedgerAccounts:Ke,fetchAllAccounts:Je,fetchAllSeedMetas:Qe,fetchAllSeedlessMetas:ze,connectSolanaSeedVaultAccounts:()=>{throw new Error("Solana Seed Vault is not supported on browser extension.")},deriveAddresses:_e,removeAccount:async t=>{if(!await Ne(t))throw new Error("Error while removing account")},reorderAccount:async(t,e)=>{if(!await He(t,e))throw new Error("Error while reordering account")},sign:Ye,getAuthenticationPublicKey:Ge,syncAccounts:Ue,addAccountForSeedless:Le,checkVaultIntegrity:je},ae=()=>ce;function fr({children:t}){return ne.default.createElement($,{vault:ce},t)}i();u();var de=y(T());i();u();var ie=y(T()),ue=async(t,e,r)=>{let s=await ie.default.identity.launchWebAuthFlow({interactive:r,url:e});if(!j(t,s))return G(t,s);throw new Error("Error fetching auth code")};var L=ae(),Ze={getClientID:Y,redirectURL:de.default.identity.getRedirectURL(),fetchAuthorizationCode:(t,e,r)=>ue(t,e,r)},Xe={storage:new te,signer:{sign:(t,e)=>J(L,t,e),getAuthenticationPublicKey:t=>L.getAuthenticationPublicKey(t),getAllSecretIdentifiers:()=>Q(L)},authConfig:Ze,queryClient:re},Br=z(Xe);export{oe as a,Te as b,lr as c,pr as d,gr as e,mr as f,Ar as g,ze as h,ae as i,fr as j,Ze as k,Br as l};
//# sourceMappingURL=chunk-J6Y2BR3C.js.map