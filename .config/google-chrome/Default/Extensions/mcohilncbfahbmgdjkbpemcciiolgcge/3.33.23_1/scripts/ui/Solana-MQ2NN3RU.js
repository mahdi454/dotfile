import{l as u,o as w}from"./chunk-HB7QCGGE.js";import{f as n}from"./chunk-4OKCKO5L.js";import"./chunk-KJIO572I.js";import{a as i}from"./chunk-EAZTJZU7.js";import"./chunk-224G4QSH.js";import{f as p,m as o,o as r}from"./chunk-ZCHLW7CF.js";o();r();var d=p(i());o();r();var S=p(i());var f=()=>{let{accountStore:{computedAccountId:a},walletContractStore:{transactionPayload:t},swapStore:{setSolanaSwapParams:s,sendSolanaTransaction:c,solanaSwapParams:m}}=w();return(0,S.useMemo)(()=>{try{let e=t?.map(l=>l.payload.transaction),h=e.length>1;return{showDappInfo:!1,showSwitchNetwork:!1,walletId:a,method:"signAllTransactions",params:{message:e},source:"dex",onConfirm:l=>{c({signedTransactions:l,txArray:t,enableJito:h,swapParams:m,walletId:a}).then(()=>{s(null)}).catch(()=>{})},onCancel:()=>{s(null),n.history?.goBack()}}}catch{return null}},[a,c,s,m,t])};var C=()=>{let{SolanaEntry:a}=n.components,t=f();return d.default.createElement(a,{...t})},k=u(C);export{k as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=Solana-MQ2NN3RU.js.map
