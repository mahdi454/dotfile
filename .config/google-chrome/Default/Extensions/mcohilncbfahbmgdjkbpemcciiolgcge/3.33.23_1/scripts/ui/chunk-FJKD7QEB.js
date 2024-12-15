import{f as g}from"./chunk-75OW6LUI.js";import{d as w}from"./chunk-FPV6XIHQ.js";import{ga as m,ha as f}from"./chunk-EBR3PGFZ.js";import{d as l,f as _}from"./chunk-3HS6AHPS.js";import{m as e,o as i}from"./chunk-ZCHLW7CF.js";e();i();_();var h=async({nonce:t=0,localType:a="",fromAddr:n="",walletId:r="",messages:o="",network:p,validUntil:d})=>{if(a){let{TonWallet:y}=await g(),P=new y,W=await l().getPublicKeyByWalletId(r,a),T={workChain:f,publicKey:W,walletVersion:m},c=await P.getWalletInformation(T),u={messages:o,seqno:t||0,network:p,valid_until:d},{transaction:k}=await l().simulateMultiTransaction(n,r,u),s={address:n,body:k,ignore_chksig:!0};return t===0&&(s.init_code=c.initCode,s.init_data=c.initData),{transactionParams:u,stringInputParams:s}}return{}},B=h;e();i();var x=async({fromAddr:t,chainId:a,coinId:n,inputData:r=""})=>{if(r&&t&&a&&n)try{return await w({address:t,chainId:a,coinId:n,value:"0",inputData:r})}catch(o){return{error:!0,...o}}return{}},q=x;export{B as a,q as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-FJKD7QEB.js.map
