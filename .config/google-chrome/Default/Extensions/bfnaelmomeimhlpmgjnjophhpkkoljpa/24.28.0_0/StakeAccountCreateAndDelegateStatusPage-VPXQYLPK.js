import{a as S}from"./chunk-77NDTIFT.js";import{a as N,b as z,c as H}from"./chunk-E5R3LR47.js";import"./chunk-5DG6WSA2.js";import"./chunk-XJWRT6N6.js";import{f as v,l as E}from"./chunk-OLW3L37F.js";import"./chunk-SHAEZV7V.js";import"./chunk-TSP4CJ7O.js";import"./chunk-ERPPDNZG.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-B745CFYO.js";import"./chunk-H3FFS4GT.js";import{a as P}from"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import{b as g}from"./chunk-PTZMRZUV.js";import"./chunk-OKP6DFCI.js";import{rb as A}from"./chunk-WIQ4WVKX.js";import{r as x}from"./chunk-GBDVRVXI.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import{M as b,N as L}from"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import{Na as C,P as k,Td as I}from"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as T}from"./chunk-56SJOU6P.js";import"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as G}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as q,h as y,n as p}from"./chunk-3KENBVE7.js";y();p();var e=q(G());var J=n=>{let s={lamports:n.lamports,votePubkey:n.votePubkey,usdPerSol:n.usdPerSol,onClose:n.onClose,validatorName:n.validatorName},{t}=T(),{createStakeAccountAndDelegateStake:c,needsLedgerApproval:d,txHash:a,confirmationStatus:l,isError:u,error:r,onDeny:i}=U(s);if(d)return e.default.createElement(z,{ledgerAction:c,cancel:i});if(u){let o=r?.message;return N(r)?e.default.createElement(H,{ledgerActionError:r,onRetryClick:c,onCancelClick:i}):e.default.createElement(g,{icon:"error",title:t("stakeAccountCreateAndDelegateStakingFailed"),onClose:i,showButton:!!a,iconSize:"large"},e.default.createElement(A,{wordBreak:"break-word",color:"#777777",size:16,lineHeight:20.8},o??t("stakeAccountCreateAndDelegateErrorStaking")),e.default.createElement(S,{txHash:a},t("stakeAccountCreateAndDelegateViewTransaction")))}return l==="finalized"?e.default.createElement(g,{icon:"success",title:t("stakeAccountCreateAndDelegateSolStaked"),onClose:n.onClose,iconSize:"large"},e.default.createElement(A,{wordBreak:"break-word",color:"#777777",size:16,lineHeight:20.8},e.default.createElement(P,{i18nKey:"stakeAccountCreateAndDelegateSolStakedDisclaimerInterpolated"},"Your SOL will begin earning rewards",e.default.createElement("br",null)," in the next couple days once the stake account becomes active.")),e.default.createElement(S,{txHash:a},t("stakeAccountCreateAndDelegateViewTransaction"))):e.default.createElement(g,{icon:"loading",title:t("stakeAccountCreateAndDelegateStakingSol"),onClose:n.onClose,iconSize:"large"},e.default.createElement(A,{wordBreak:"break-word",color:"#777777",size:16,lineHeight:20.8},t("stakeAccountCreateAndDelegateStakingSolDisclaimerInterpolated",{validatorName:n.validatorName})),e.default.createElement(S,{txHash:a},t("stakeAccountCreateAndDelegateViewTransaction")))},Ae=J,U=({onClose:n,...s})=>{let{data:t,isSuccess:c}=I(),{accountIdentifier:d,isLedgerAccount:a,solanaChainAddress:l,solanaPublicKey:u,connection:r,networkID:i}=(0,e.useMemo)(()=>{let F=t?.identifier??"",f=(t?.addresses??[]).find(j=>C.isSolanaNetworkID(j.networkID)),O=new k.PublicKey(f?.address??""),Q=t?.type==="ledger",h=f?.networkID,Y=b(L(h));return{accountIdentifier:F,isLedgerAccount:Q,solanaChainAddress:f,solanaPublicKey:O,connection:Y,networkID:h}},[t]),o=E(r),m=(0,e.useCallback)(()=>{o.mutate({...s,accountIdentifier:d,senderAddress:l,authorizedPubkey:u,votePubkey:new k.PublicKey(s.votePubkey)})},[d,s,o,l,u]),D=x(),B=(0,e.useCallback)(()=>{D.denied({chainType:"solana",chainName:"solana",networkId:C.getSolanaNetworkIDValue(i),type:"delegate"}),n()},[i,n,D]);(0,e.useEffect)(()=>{if(c){if(!t||!l)throw new Error("Selected account undefined when trying to perform stake transaction.");a||m()}},[c]);let w=o.data?.id,K=v(r,2e3,w),M=a&&(o.isIdle||o.isPending),V=K.data?.value?.confirmationStatus;return{createStakeAccountAndDelegateStake:m,onDeny:B,needsLedgerApproval:M,txHash:w,confirmationStatus:V,isError:o.isError,error:o.error}};export{J as StakeAccountCreateAndDelegateStatusPage,Ae as default};
//# sourceMappingURL=StakeAccountCreateAndDelegateStatusPage-VPXQYLPK.js.map