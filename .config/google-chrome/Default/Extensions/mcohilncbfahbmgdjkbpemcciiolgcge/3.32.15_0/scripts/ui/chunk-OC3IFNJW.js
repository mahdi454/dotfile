import{b as P,c as Y}from"./chunk-V4NJDTLC.js";import{o as B}from"./chunk-IQUFOLSA.js";import{b,c as K}from"./chunk-ZYEEMVIP.js";import{a as W}from"./chunk-S5DGV5WL.js";import{w as _,za as U}from"./chunk-JLIPSIRU.js";import{a as Z}from"./chunk-VX55KNI4.js";import{h as C,k as D,l as $}from"./chunk-656GFN7J.js";import{Aa as V,Fa as g,Jb as X,Sc as A,X as J,gd as tt,w as I,y as f,z as R,za as x}from"./chunk-YT2MPR4E.js";import{H as N}from"./chunk-LDKM7IQF.js";import{M as z,x as T}from"./chunk-RIOWPXBZ.js";import{a as j}from"./chunk-O337TVCZ.js";import{f as u,m as l,o as n}from"./chunk-GLD6H5Q5.js";l();n();var F=u(j()),O=u(_()),q=u(Z());z();l();n();var G=u(_());l();n();$();V();var et=D({name:"assetsSlice",initialState:{assets:[]},reducers:{setAssets:(t,r)=>{t.assets=r.payload}}}),{actions:st,reducer:rt}=et,ot=[],k=C(t=>t.assetsSlice.assets??ot,t=>t.reduce((r,s)=>r.set(s.walletId,s),new Map)),ct=()=>async t=>{(await x.assets).liveQuery().subscribe((s,m)=>{m||t(st.setAssets(s))})},it=rt;function H(){return(0,G.useSelector)(k)}l();n();tt();X();J();var L=({walletAccounts:t,rpcData:r,assetsMap:s,showNftAmount:m,selectedCurrency:d,hiddenSmallAsset:i})=>{let c=t.map(e=>{if(!e)return{walletAsset:"0",platformAsset:"0"};let{walletId:o}=e;if(!!r){let{chainTokensAccountMap:M}=r,p=e?.account?.[g];if(!p||[A.HD_KEYRING,A.SIMPLE_KEYRING,A.MPC_KEYRING].indexOf(e?.initialType)<0)return{unsupported:!0,walletAsset:"0",platformAsset:"0",...e};let{balance:v="0"}=M[p]?.filter(({address:Q})=>!Q)[0]||{};return{walletAsset:v,platformAsset:"0",...e}}let a=s.get(o),E=(a?[a.tokenTotalAssetsUSD,a.defiTotalAssetsUSD,m?a.nftTotalAssetsUSD:"0"]:[]).reduce((M,p)=>f(M,p),"0");return{walletAsset:a?I(i?R(E,a.smallTotalAssetsUSD):E,d.usdToThisRate):"--",platformAsset:a?a.platformTotalAssetsUSD:"--",...e}}),{walletAsset:S,platformAsset:w}=c.reduce((e,o)=>({walletAsset:f(e.walletAsset,o.walletAsset==="--"?"0":o.walletAsset),platformAsset:f(e.platformAsset,o.platformAsset==="--"?"0":o.platformAsset)}),{walletAsset:"0",platformAsset:"0"});return{walletAccountsWidthBalance:c,walletAsset:S,platformAsset:w}};var at=t=>{let r=(0,q.useHistory)(),s=B(t),[m]=K(b.showNftAmount),d=P(),i=Y(d),c=H(),S=(0,O.useSelector)(U);return s||(N.error(T("wallet_extension_top_error_parameters")),r.push(W)),(0,F.useMemo)(()=>{let{walletIdentities:w}=s,{walletAccountsWidthBalance:e,walletAsset:o,platformAsset:y}=L({walletAccounts:w,showNftAmount:m,rpcData:null,selectedCurrency:i,assetsMap:c,hiddenSmallAsset:S});return{...s,walletAsset:o,platformAsset:y,walletIdentities:e}},[s,m,i,c])},Bt=at;export{ct as a,it as b,H as c,L as d,Bt as e};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-OC3IFNJW.js.map