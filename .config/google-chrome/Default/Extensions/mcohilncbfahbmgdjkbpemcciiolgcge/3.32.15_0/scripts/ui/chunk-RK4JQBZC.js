import{f as g}from"./chunk-PMGQLREC.js";import{d as w}from"./chunk-YC6W5MPL.js";import{la as m,ma as f,ta as b}from"./chunk-VGT27A4M.js";import{d as l,f as _}from"./chunk-R4G6BEPF.js";import{m as e,o as i}from"./chunk-GLD6H5Q5.js";e();i();_();b();var x=async({nonce:t=0,localType:a="",fromAddr:n="",walletId:r="",messages:o="",network:p,validUntil:d})=>{if(a){let{TonWallet:y}=await g(),P=new y,W=await l().getPublicKeyByWalletId(r,a),T={workChain:f,publicKey:W,walletVersion:m},c=await P.getWalletInformation(T),u={messages:o,seqno:t||0,network:p,valid_until:d},{transaction:k}=await l().simulateMultiTransaction(n,r,u),s={address:n,body:k,ignore_chksig:!0};return t===0&&(s.init_code=c.initCode,s.init_data=c.initData),{transactionParams:u,stringInputParams:s}}return{}},F=x;e();i();var C=async({fromAddr:t,chainId:a,coinId:n,inputData:r=""})=>{if(r&&t&&a&&n)try{return await w({address:t,chainId:a,coinId:n,value:"0",inputData:r})}catch(o){return{error:!0,...o}}return{}},G=C;export{F as a,G as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-RK4JQBZC.js.map