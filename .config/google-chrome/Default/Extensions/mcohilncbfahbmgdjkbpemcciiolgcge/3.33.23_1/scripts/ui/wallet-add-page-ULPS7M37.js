import{a as k}from"./chunk-6JT3NAM4.js";import{a as O}from"./chunk-BD57O5SC.js";import"./chunk-XVPROSYE.js";import"./chunk-CA4PB6NG.js";import"./chunk-SCXRHDUG.js";import{ea as I}from"./chunk-5STCPPZU.js";import"./chunk-FLFVNMKM.js";import"./chunk-ZUBNNPBM.js";import{d as x}from"./chunk-2SHHGXPQ.js";import"./chunk-UK4SAM7E.js";import"./chunk-LXIBKSOK.js";import{X as W,Z as M,ga as h,p as C}from"./chunk-DUKP4BLI.js";import"./chunk-S3O4LR55.js";import"./chunk-FZCNSMLW.js";import{g as R}from"./chunk-WANYNTD6.js";import"./chunk-QMGTBJAL.js";import"./chunk-KCWFMCND.js";import{w as X}from"./chunk-3TDWET6C.js";import{fa as i}from"./chunk-EBR3PGFZ.js";import"./chunk-UDGUBKMO.js";import{a as Y}from"./chunk-VPGNJAK6.js";import{ta as L,ua as g,ya as j}from"./chunk-W6Q44ZHW.js";import"./chunk-3HS6AHPS.js";import"./chunk-WSUAESF2.js";import"./chunk-O2FUKKO3.js";import"./chunk-FDCWN4NG.js";import{ec as T,fc as G,s as A,y as V}from"./chunk-O3CM75EN.js";import"./chunk-ZGRAPBBU.js";import{H as f}from"./chunk-J3CEQI22.js";import"./chunk-VFHYER2K.js";import{L as K,w as p}from"./chunk-KJIO572I.js";import"./chunk-HJXNXGYU.js";import"./chunk-77ECUYXV.js";import"./chunk-4BZBCAHV.js";import"./chunk-KALFZBR5.js";import"./chunk-V55FEIYE.js";import{a as F}from"./chunk-EAZTJZU7.js";import"./chunk-YTRW5WTJ.js";import"./chunk-VOT7VHG3.js";import"./chunk-SYQUJKIR.js";import"./chunk-WPMHLM7C.js";import"./chunk-P7DU4NJA.js";import"./chunk-KW7JYBDS.js";import"./chunk-224G4QSH.js";import{f as d,l as process,m as e,o as r}from"./chunk-ZCHLW7CF.js";e();r();var s=d(F()),_=d(X()),D=d(Y());K();j();e();r();e();r();G();V();var N=({addDisabled:t,openChromeToConnectHardware:o})=>T()!==A?[{isLink:!0,icon:"okx-wallet-plugin-hardware",title:"wallet_add_wallet_btn_conncet_hardware_wallet",onClick:()=>{if(!t)return o()}}]:[];var q=({addDisabled:t,creating:o,handleCreateNewAccount:c,handleImport:n,openChromeToConnectHardware:u})=>{let l=[{isLink:!0,loading:o,icon:"okx-wallet-plugin-perpetual",title:"wallet_addwallet_btn_create_wallet",onClick:async()=>t?void 0:await c()},{isLink:!0,icon:"okx-wallet-plugin-import",title:"wallet_addwallet_btn_import_wallet",onClick:()=>{if(!t)return n()}}],a=N({addDisabled:t,openChromeToConnectHardware:u});return[...l,...a]},P=q;var E=t=>{I({tx_trminal:"web",wallet_type:t})},At=()=>{let t=(0,D.useHistory)(),o=(0,_.useDispatch)(),[c,n]=(0,s.useState)(!1),u=()=>o(x()),l=(0,_.useSelector)(R),{canAddAccount:a}=O(),m=!a||l,b=()=>l?"wallet_extension_addaccount_text_feature_unavailable":a?"":"wallet_extension_addaccount_text_max_accounts",S=async()=>{E(i.NEW),await(async()=>{try{n(!0),await u(),t.push(h)}catch(w){w.message===L&&f.error(p("wallet_home_toast_network_error")),w.message===g&&f.error(p("extension_wallet_addwallet_toast_wallets_added",{amount:1e3}))}finally{n(!1)}})()},H=()=>{E(i.IMPORT),process.env.PLATFORM_WEB?t.push(W):t.push(M)},U=()=>{E(i.HARD_WALLET),globalThis.platform.openExtensionInBrowser(C)},v="wallet_add_wallet_maintitle_add_wallet",B=P({addDisabled:m,creating:c,handleCreateNewAccount:S,handleImport:H,openChromeToConnectHardware:U});return s.default.createElement(k,{title:v,tooltip:b(),disabled:m,list:B,closeable:!0})};export{At as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=wallet-add-page-ULPS7M37.js.map