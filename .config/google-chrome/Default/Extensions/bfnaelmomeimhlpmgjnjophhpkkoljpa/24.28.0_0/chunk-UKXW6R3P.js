import{a as Ft,b as kt}from"./chunk-5ZRJDPG4.js";import{a as At}from"./chunk-PUJH7423.js";import{a as Tt}from"./chunk-TQNG3Z6X.js";import{a as un}from"./chunk-DYIE7UTS.js";import{b as wt}from"./chunk-E5R3LR47.js";import{a as ht}from"./chunk-R37HR6ZK.js";import{$ as St,M as Ze,Ma as Qe,U as pt,X as gt,ra as yt}from"./chunk-FADT747G.js";import{b as bt}from"./chunk-PTZJLI7L.js";import{a as lt}from"./chunk-QEXGR5WT.js";import{b as ct}from"./chunk-S24UABH5.js";import{a as Q}from"./chunk-X3ESGVCB.js";import{e as ut}from"./chunk-DERIAD33.js";import{a as ft}from"./chunk-EGXLQXDH.js";import{c as mt,h as xe,m as qe}from"./chunk-TSP4CJ7O.js";import{a as ae}from"./chunk-CCQRCL2K.js";import{b as Bn}from"./chunk-B745CFYO.js";import{a as tt,c as ot,d as M,e as Ne}from"./chunk-AWKYXRT4.js";import{a as Me}from"./chunk-GTBW7SFI.js";import{a as it,b as je,h as at,j as dt,k as ke}from"./chunk-OKP6DFCI.js";import{c as rt,ga as st,o as F,rb as j}from"./chunk-WIQ4WVKX.js";import{pa as nt}from"./chunk-CZNVQ2ZN.js";import{o as xn}from"./chunk-B226KCTA.js";import{d as k,f as qn,g as Zn,h as Qn,j as Jn,p as Xn,w as Yn,x as et}from"./chunk-GJU3JL4E.js";import{c as Vn,d as _e,f as ge}from"./chunk-BCLUZY4R.js";import{s as In,z as Fe}from"./chunk-PFT3L2T6.js";import{Cc as jn,D as En,Eb as _n,J as Pn,L as Nn,Pa as Ln,Ua as $e,Va as dn,Vb as Ge,Xb as $n,bb as Wn,db as Rn,mc as zn,oa as Mn,oc as Pe,pa as Un,qc as we,rb as Kn,sb as On,vc as Gn,wb as ze,yb as Hn,zc as mn}from"./chunk-LVTCV2WT.js";import{h as He}from"./chunk-HLHJEFRF.js";import{o as Cn}from"./chunk-S37W3WO2.js";import{B as fn,Cd as vn,Na as O,Nb as an,P as Re,Td as Dn,ce as Oe,gb as wn,pb as kn}from"./chunk-6ZVJZYTQ.js";import{a as te,m as Ae}from"./chunk-56SJOU6P.js";import{S as rn,T as An,a as pn,b as gn,ca as sn,da as Ke,ia as Fn,x as hn}from"./chunk-CBSQD5B4.js";import{_a as Tn,ka as bn,oa as yn,t as Sn,ta as pe}from"./chunk-VNNHZNYI.js";import{a as he}from"./chunk-7X4NV6OJ.js";import{f as Te,h,m as Buffer,n as A}from"./chunk-3KENBVE7.js";h();A();h();A();h();A();h();A();var Je=Te(he());h();A();h();A();var qt=[Mn.toString(),Un.toString()],xt=async(r,e)=>{let n=Nn(e);try{let i=await n.getParsedAccountInfo(new Re.PublicKey(r));if(i&&qt.includes(i.value?.owner.toString()??"")&&"mintAuthority"in(i.value?.data).parsed.info)return!0}catch{}return!1};var Zt=1*24*60*1e3,Qt=1*60*1e3,Ct=({address:r,networkID:e})=>bn({queryKey:["is-mint-account",r],queryFn:async()=>{if(!O.isSolanaNetworkID(e))throw new Error("Attempting to get mint account for non-Solana network");return xt(r,e)},enabled:!!r&&O.isSolanaNetworkID(e),gcTime:Zt,staleTime:Qt});h();A();var It=Te(he());h();A();var Ue=()=>{let{fungibleKey:r,splTokenAccount:e,recipient:n}=k(l=>({fungibleKey:l.fungibleKey,splTokenAccount:l.splTokenAccount,recipient:l.sendFormValues.recipient})),{fungible:i}=Pe({key:r,splTokenAccount:e}),{data:a}=Oe({address:i?.data.walletAddress,networkID:i?.data.chain.id}),{data:m}=Jn(a?{networkID:a.networkID,addressType:a.addressType,address:n}:void 0,i?.type==="SolanaNative"),{data:s=0}=On(a);return i?.type==="SolanaNative"&&n&&typeof m<"u"&&m<s?s:0};var vt=(r,e,n)=>{let{fungibleKey:i,splTokenAccount:a}=k(x=>({fungibleKey:x.fungibleKey,splTokenAccount:x.splTokenAccount})),{data:[m]}=Tn(["kill-send-simulation"]),s=Ue(),u=(0,It.useMemo)(()=>{if(!(!r||m))return{sendSessionId:"simulate-send",shouldShowUsdValues:!1,fungibleKey:i,splTokenAccount:a,sendFormValues:{recipient:e,amountAsset:new pn(s),solana:{references:[]}}}},[m,s,r,i,e,a]),{data:l,isLoading:b}=we(u),f={type:"transaction",userAccount:r,params:void 0,url:"https://phantom.app",networkID:n};l&&(O.isEVMNetworkID(l.networkID)&&(f.params={transactions:[l.unsignedTransaction]}),O.isSolanaNetworkID(l.networkID)&&(f.params={transactions:l.transaction.map(x=>fn(x)),method:"signAndSendTransaction"}));let{data:I,isLoading:T}=nt(f,{disabled:!l||m,disableRefetch:!0});return{data:I,isLoading:!m&&(b||T)}};var Xt=(r,e)=>({address:r,addressType:wn(e,r),networkID:e}),Yt=({senderAddress:r,senderAccounts:e,networkID:n})=>(0,Je.useMemo)(()=>r?e.reduce((i,a)=>{let m=a.addresses.filter(s=>s.networkID===n&&s.address!==r);if(n)for(let s of m)i.push({label:a.name,address:s.address,chainID:n});return i},[]):[],[r,e,n]);function eo(r){if(!r)return"";let{warnings:e=[],error:n=""}=r;return n==="UNKNOWN_ERROR"?e[0]?.message:n==="INSUFFICIENT_FUNDS"?te.t(`sendWarning_${n}`):""}var no=({senderAddress:r,recipient:e,networkID:n})=>{let{data:i,isLoading:a}=vt(r??"",e,n);return{simulationWarning:eo(i),isSimulationLoading:a}},to=({recipient:r,networkID:e})=>{let{currentRecipient:n,isStaleRecipient:i,recipientError:a}=Ge(r,e);return!i&&!a&&n.length>0?n:""},oo=({recipient:r,networkID:e})=>{let{data:n=[],isLoading:i}=Kn({chainAddresses:r?[Xt(r,e)]:[]});return{recipientHasZeroBalance:(0,Je.useMemo)(()=>n.length===1&&n[0].data.amount==="0",[n]),recipientTokensIsLoading:i}},ln=({senderAddress:r,senderAccounts:e,networkID:n,recipient:i})=>{let{recentAddresses:a,savedAddresses:m}=Fe(),s=Yt({senderAddress:r,senderAccounts:e,networkID:n}),u=to({recipient:i,networkID:n}),{recipientHasZeroBalance:l,recipientTokensIsLoading:b}=oo({recipient:u,networkID:n}),{data:f,isLoading:I}=Ct({address:u,networkID:n}),{simulationWarning:T,isSimulationLoading:x}=no({senderAddress:r??"",recipient:u,networkID:n}),c=!u||b||I&&O.isSolanaNetworkID(n)||x;return{sendAddressWarning:(0,Je.useMemo)(()=>c||!r?null:f?te.t("sendMintAccountWarning"):s.find(g=>g.address===u)?null:T||(a.addresses.find(g=>g.address===i)||m.addresses.find(g=>g.address===i)?null:r===u?te.t("sendSameAddressWarning"):l?te.t("sendRecipientZeroBalanceWarning"):te.t("sendUnknownAddressWarning")),[a,m,i,u,s,r,l,f,T,c]),sendAddressVariant:f?"danger":"warning"}};var o=Te(he());h();A();var oe=Te(he());var Dt=({networkID:r})=>{let{t:e}=Ae();return O.isBitcoinNetworkID(r)?oe.default.createElement(ao,null,oe.default.createElement(gt,{alignment:"rightCenter",index:0,content:oe.default.createElement(ro,null,oe.default.createElement(io,null,e("sendFungibleSatProtectionExplainer")," ",oe.default.createElement("span",{onClick:()=>void Bn({url:Ln})},e("commandLearnMore")))),closeOnSecondClick:!1},oe.default.createElement(so,null,oe.default.createElement(st,{width:16}),oe.default.createElement(Et,null," ",e("sendFungibleSatProtectionTitle"))))):null},ro=F.div`
  padding: 16px;
  width: 256px;
`,io=F(j).attrs({size:15,lineHeight:20,color:"#fff"})`
  text-align: left;
  span {
    color: #ab9ff2;
    cursor: pointer;
  }
`,so=F.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`,Et=F(j).attrs({size:14,color:"#fff",hoverColor:"#ab9ff2"})`
  display: flex;
  align-items: center;
`,ao=F.div`
  padding: 15px;
  background: #2a2a2a;
  border-radius: 9px;
  width: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    ${Et} {
      color: #ab9ff2;
    }
    svg {
      fill: #ab9ff2;
      path {
        fill: #ab9ff2;
      }
    }
  }
`;h();A();var S=Te(he());h();A();var t=Te(he());var lo=F(ae).attrs({align:"center"})`
  height: 100%;
`,co=F(ae).attrs({align:"center",justify:"center"})`
  flex: 1;
  flex-grow: 1;
`,po=F(ae).attrs({align:"center",justify:"center",margin:"0 0 15px 0"})`
  position: relative;
  border-radius: 50%;
  background-color: ${rn("#AB9FF2",.2)};
  box-shadow: 0 0 0 20px ${rn("#AB9FF2",.2)};
`,go=F(j).attrs({size:28,lineHeight:33.89,weight:500,margin:"20px 0 10px 0"})``,fo=F(j).attrs({size:16,lineHeight:19,weight:400,color:"#777777",margin:"0 0 10px 0"})``,Ce=F(j).attrs({color:"#FFF",weight:400,size:16})``,So=F(j).attrs({size:16,lineHeight:20.8,weight:500,color:"#AB9FF2"})``,bo=r=>{let{t:e}=Ae(),{networkID:n,assetSymbol:i,logoUri:a,txRecipient:m,uiRecipient:s,uiAmount:u,tokenUSDPrice:l,fungibleKey:b,senderAddress:f,exitSendFlow:I}=r,T=k(),{transactionSpeed:x}=T.sendFormValues,{data:c}=we(T),p=Gn(n,x,f,i,a,s,u,l,e),{popDetailView:$}=xe(),{closeAllModals:g}=ct(),v=rt(),[q,W]=(0,t.useState)(!1),[E,R]=(0,t.useState)(null),{data:X,status:w}=Dn(),H=(0,t.useMemo)(()=>X?.addresses??[],[X]),U=X?.type==="ledger",[V,z]=(0,t.useState)(!0),[de,fe]=(0,t.useState)(),[C,Y]=(0,t.useState)(void 0);Zn(b,new gn(u),C?.id??"");let ee=_n("send:fungible",n,U),re=Xn(H),ie=(0,t.useCallback)(y=>{let D=f.networkID,ce={chainType:f.addressType,chainID:D};_e.capture("sendAssetSuccess",{data:ce}),ee(y.id,"confirmed"),re()},[f.networkID,f.addressType,ee,re]),{isSuccess:N,isError:_,error:G}=$n(ie,C??void 0),{title:B,isSuccess:se,isError:me,sendSuccessCondition:Ve,estimatedTime:Be}=et({networkID:n,isTxConfirmError:_,isTxSubmissionError:q,isTxConfirmed:N,isTxSubmitted:!!C});(0,t.useEffect)(()=>{let y=C?.networkID?He(C.networkID):null;!C?.id||!y||y.chainName==="bitcoin"||(N?(pe.addBreadcrumb("fungibles","transactionStatus","info",y),ge.send.transactionStatus(C.id,{...y,status:{type:"confirmed"}})):me&&(pe.addBreadcrumb("fungibles","transactionStatus","error",y),ge.send.transactionStatus(C.id,{...y,status:{type:"error"}})))},[N,me,C]);let{mutateAsync:Le}=qn(),{data:Ie}=In(),{addRecentAddress:ve}=Fe(),De=w==="pending",ue=(0,t.useMemo)(()=>({titleText:B,retryText:e("commandRetry"),cancelText:e("commandCancel"),closeText:e("commandClose"),viewTransactionText:e("sendStatusViewTransaction")}),[e,B]),le=me?t.default.createElement(t.default.Fragment,null,t.default.createElement(Me,{i18nKey:"sendFungibleErrorMessageInterpolated",values:{uiAmount:u,assetSymbol:i,uiRecipient:s}},t.default.createElement(Q,null,t.default.createElement(Ce,null,u," ",i),"failed to send to ",t.default.createElement(Ce,null,s))),G&&"data"in G?t.default.createElement(Q,{margin:"16px 0",justify:"center"},t.default.createElement(kt,{errorReason:G.data.errorReason,programId:G.data.programId,customErrorReason:G.data.customErrorReason,customErrorCode:G.data.customErrorCode})):null,E?t.default.createElement(Q,{margin:"16px 0 0 0",justify:"center"},e("sendFungibleSolanaErrorCode",{code:E})):null):se&&Ve==="CONFIRMATION"?t.default.createElement(Me,{i18nKey:"sendFungibleConfirmedSuccessMessageInterpolated",values:{uiAmount:u,assetSymbol:i,uiRecipient:s}},t.default.createElement(Q,null,t.default.createElement(Ce,null,u," ",i),"was successfully sent to ",t.default.createElement(Ce,null,s))):se&&Ve==="SUBMISSION"?t.default.createElement(Me,{i18nKey:"sendStatusEstimatedTransactionTime",values:{time:Be}},t.default.createElement(Q,null,"Estimated Transaction Time: ",Be)):t.default.createElement(Me,{i18nKey:"sendFungibleLoadingMessageInterpolated",values:{uiAmount:u,assetSymbol:i,uiRecipient:s}},t.default.createElement(Q,null,t.default.createElement(Ce,null,u," ",i),"to ",t.default.createElement(Ce,null,s))),Se=(0,t.useCallback)(()=>{if(!C)return;let{id:y}=C,D=Ie?.explorers[n],P=Cn({networkID:n,endpoint:"transaction",explorerType:D,param:y});self.open(P)},[n,Ie,C]),Xe=(0,t.useCallback)(()=>{I();let{sendSuccessRedirect:y}=Pn.get(n);switch(y(Vn("kill-base-history"))){case"history":v("/notifications");break;case"home":v("/");break}},[I,v,n]),{data:be}=ze({networkID:n,multichainTransaction:c,transactionSpeed:x,queryOptions:{refetchInterval:!1}}),Ee=(0,t.useCallback)(async()=>{let y=async()=>{try{if(!c)throw new Error("multichainTransaction is undefined on send status");if(!be)throw new Error("gasEstimation is undefined on send status");ve({address:m,chainID:f.networkID,timestamp:Date.now()});let D=Date.now(),P=await Le({multichainTransaction:c,pendingTransactionInput:p,senderAddress:f,gasEstimation:be}),ce=P.id;ee(ce,"initiated",D),ee(ce,"received");let Z=He(n),Ye=Z.chainType==="solana"?"signAndSendTransaction":Z.chainType==="eip155"?"eth_sendRawTransaction":"UNKNOWN";pe.addBreadcrumb("fungibles","submittedTransaction","info",{...Z,txReceipt:P.id,method:Ye}),Z.chainType==="solana"?ge.send.submittedTransaction(P.id,{...Z,method:"signAndSendTransaction"}):Z.chainType==="eip155"&&ge.send.submittedTransaction(P.id,{...Z,method:"eth_sendRawTransaction"}),Y(P)}catch(D){if(D instanceof Error&&He(n).chainType==="solana"){let[P]=D.message.match(/0x\d+/)||[];typeof P=="string"&&P&&R(P)}W(!0),pe.captureError(D,"fungibles")}};U?fe(t.default.createElement(wt,{ledgerAction:async()=>{await y(),z(!1)},cancel:g,ledgerApp:xn(n)})):await y()},[U,c,be,ve,m,f,Le,p,ee,n,g]),L=k(y=>y.retryArgs),ye=(0,t.useCallback)(()=>{L?(Y(void 0),W(!1),Ee()):$()},[Ee,$,L]);(0,t.useEffect)(()=>{De||(!U||V)&&Ee()},[De]);let ne=(0,t.useCallback)(()=>{!se&&!me&&T.resetSendSlice()},[se,me,T]);return mt(ne),{i18nStrings:ue,message:le,txReceipt:C,isError:me,isSuccess:se,isLedger:U,needsLedgerApproval:V,ledgerContent:de,onTransactionLinkClick:Se,onRetry:ye,onCancel:I,onClose:Xe}},Pt=t.default.memo(r=>{let e=bo(r);return t.default.createElement(yo,{...e})}),yo=t.default.memo(r=>{let{i18nStrings:e,message:n,txReceipt:i,isLedger:a,needsLedgerApproval:m,ledgerContent:s,isError:u,isSuccess:l,onTransactionLinkClick:b,onRetry:f,onCancel:I,onClose:T}=r;return a&&m?t.default.createElement(t.default.Fragment,null,s??null):t.default.createElement(lo,null,t.default.createElement(co,null,t.default.createElement(je,{mode:"wait",initial:!0},t.default.createElement(it.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},u?t.default.createElement(un,{type:"failure"}):l?t.default.createElement(un,{type:"success"}):t.default.createElement(po,null,t.default.createElement(at,{diameter:54,color:"#AB9FF2",trackColor:"#181818"})))),t.default.createElement(go,null,e.titleText),n&&t.default.createElement(fo,null,n),i&&t.default.createElement(So,{onClick:b},e.viewTransactionText)),u&&t.default.createElement(ke,{primaryText:e.retryText,onPrimaryClicked:f,secondaryText:e.cancelText,onSecondaryClicked:I}),!u&&!!i&&t.default.createElement(Q,{justify:"center"},t.default.createElement(dt,{onClick:T},e.closeText)))});var To={accentAlert:"#EB3742",white:"#FFFFFF"},ho=F(ae).attrs({align:"center"})`
  height: 100%;
`,Ao=F(ae).attrs({align:"center",justify:"space-between"})`
  height: 100%;
`,Fo=F(ae).attrs({align:"center",paddingTop:"25px"})`
  border-radius: 6px;
`,wo=F(j).attrs({size:38,weight:500,lineHeight:46})`
  margin-top: 18px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ko=F(Q).attrs({justify:"center"})`
  max-width: 275px;
`,Nt=F(j).attrs({color:"#777",size:16})`
  word-break: break-all;
`,xo=S.default.createElement(lt,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"}),Co=r=>{let{networkID:e,exitSendFlow:n}=r,i=k(w=>w.sendFormValues),a=k(w=>w.setSendFormValues),{popDetailView:m,pushDetailView:s}=xe(),{handleHideModalVisibility:u,handleShowModalVisibility:l}=Qe(),b=(0,S.useCallback)((w,H)=>{s(S.default.createElement(ht,{onSelectTransactionSpeed:U=>{a({...i,transactionSpeed:U})},selectedTransactionSpeed:w,networkID:e,transactionUnitAmount:H,closeModal:m}))},[e,m,s,i,a]),f=(0,S.useCallback)(w=>{l("txSubmissionCheckFailure",{...w,onButtonClick:()=>{u("txSubmissionCheckFailure")}})},[u,l]),{sender:I,recipientAddress:T,uiRecipient:x,token:c,displayAmountAndName:p,canSend:$,summaryRows:g,headerText:v,buttons:q,prepareSubmission:W,multichainTransaction:E}=Yn({networkID:e,valueLoader:xo,fontColors:To,onTransactionSpeedChange:b,onSubmissionCheckFail:f}),R=(0,S.useMemo)(()=>{let w=E&&En(E)?E.transaction.map(H=>{let U=Buffer.from(H.serialize({verifySignatures:!1,requireAllSignatures:!1})).toString("base64");return{label:te.t("notificationCopyTransactionText"),value:U.slice(0,8),onClick:()=>{ft(U),pt.success(te.t("notificationTransactionCopied"))}}}):[];return[...g,...w]},[g,E]),X=An((0,S.useCallback)(()=>{if(!W())return;if(!I||!T||!c.key)throw new Error("Sender, recipient or fungible key is undefined");let H={chainID:e,amount:c.amount,symbol:c.symbol,address:c.key};pe.addBreadcrumb("fungibles","approved","info",H),ge.send.approved(jn(H)),s(S.default.createElement(Pt,{networkID:e,senderAddress:I,txRecipient:T,uiRecipient:x,assetSymbol:c.symbol,logoUri:c.logoUri,uiAmount:Number(c.amount),tokenUSDPrice:c.usdPrice,fungibleKey:c.key,exitSendFlow:n}))},[W,e,I,T,c.key,c.symbol,c.logoUri,c.amount,c.usdPrice,s,x,n]),1e3);return{headerText:v,buttons:q,displayAmountAndName:p,uiRecipient:x,txRecipient:T,exitSendFlow:n,primaryDisabled:!$,summaryRows:Sn()?R:g,handleSubmit:X,networkID:e}},Mt=r=>{let e=Co(r);return S.default.createElement(Io,{...e})},Io=S.default.memo(r=>{let{headerText:e,buttons:n,displayAmountAndName:i,uiRecipient:a,txRecipient:m,primaryDisabled:s,summaryRows:u,handleSubmit:l,exitSendFlow:b,networkID:f}=r;return S.default.createElement(ho,null,S.default.createElement(qe,null,e),S.default.createElement(Ao,null,S.default.createElement(Fo,null,S.default.createElement(Ze,{image:{type:"icon",preset:"send"},size:72}),S.default.createElement(wo,null,i),S.default.createElement(ko,null,S.default.createElement(Tt,{delayedChildren:S.default.createElement(St,{alignment:"bottomCenter",copyString:m},S.default.createElement(Nt,null,`to ${a}`))},S.default.createElement(Nt,null,`to ${a}`)))),S.default.createElement(bt,{networkID:f,rows:u,borderRadius:"6px 6px 6px 6px",padding:16,fontSize:16}),S.default.createElement(je,{mode:"wait",initial:!1},S.default.createElement(ke,{primaryText:n.send,secondaryText:n.cancel,primaryDisabled:s,onPrimaryClicked:l,onSecondaryClicked:b}))))});var vo={form:tt({width:"100%"})},Do=hn({seconds:10}),Eo=r=>{let{networkID:e,chainName:n,fungibleKey:i,symbol:a,decimals:m,logoUri:s,tokenAddress:u,type:l}=r,{t:b}=Ae(),f=(0,o.useMemo)(()=>({pageHeaderText:b("commandSend"),buttonPrimaryText:b("commandNext"),buttonSecondaryText:b("commandCancel"),targetInputButtonText:b("maxInputMax"),memoPlaceholderText:b("sendMemoOptional")}),[b]),I=(0,o.useMemo)(()=>({amountAvailable:(d,K)=>b("sendAssetAmountLabelInterpolated",{amount:d,tokenSymbol:K})}),[b]),{popDetailView:T,pushDetailView:x}=xe(),{handleHideModalVisibility:c}=Qe(),p=k(d=>d.shouldShowUsdValues),$=k(d=>d.setShouldShowUsdValues),g=k(d=>d.sendFormValues),v=k(d=>d.setSendFormValues),q=k(d=>d.resetSendSlice),W=p?"USD":a,E=p?a:"USD",{recipient:R,addressBookRecipient:X,amountAsset:w,amountUsd:H,solana:{memo:U}}=g,V=Ke(w,m).toNumber(),z=H??0,{currentRecipient:de,recipientError:fe,disabledDueToRecipient:C,isStaleRecipient:Y,isRecipientLoading:ee}=Ge(R,e),re=O.getNetworkName(e),ie=k(),{fungible:N}=Pe({key:i,splTokenAccount:ie.splTokenAccount}),{data:_}=Oe({address:N?.data.walletAddress,networkID:e}),G=_?.address,B=Ue(),se=Ke(B,m).toNumber(),Ve=(N?.type==="SPL"?N.data.programId:"")===kn,Be=(0,o.useMemo)(()=>{if(!_)return;let d=ie.sendFormValues.recipient;return{...ie,sendFormValues:{...g,recipient:d||_.address}}},[g,ie,_]),{data:Le}=we(Be),{data:Ie,isPending:ve}=ze({networkID:e,multichainTransaction:Le,transactionSpeed:"fastest",queryOptions:{refetchInterval:Do}}),[De,ue]=(0,o.useState)(""),[le,Se]=(0,o.useState)(yn),Xe=(0,o.useCallback)(()=>{q()},[q]);(0,o.useEffect)(()=>{let d=p?z:V;!De&&d!==0&&ue(d)},[]);let be=(0,o.useMemo)(()=>N?zn(N):void 0,[N]),{data:Ee}=Hn({query:be?{data:be}:void 0}),L=Ee?.usd,ye=Qn(_,N,Ie),ne=Ke(ye??0,m).toNumber(),y=$e(ne,L??0),D=(0,o.useMemo)(()=>L?`${Fn($e(V,L))}`:"",[V,L]),P=(0,o.useCallback)(()=>{T(),c("sendFungibleForm"),c("sendFungibleSelect"),q()},[T,c,q]),{getExistingAccount:ce,getKnownAddressLabel:Z}=Fe(),{data:Ye=[]}=vn(),Ut=(0,o.useCallback)(d=>{d&&d.preventDefault();let K=l,nn=ce(R),We=Z(R,e),tn=an(_?.address??"",void 0,void 0,5),on=an(R,nn,We,5);_e.capture("sendAsset",{data:{address:u,chain:n,chainId:O.getChainID(e),networkId:e,symbol:a,type:"fungible"}}),x(o.default.createElement(Mt,{networkID:e,assetSymbol:W,logoUri:s,fungibleType:K,fungibleKey:i,networkName:re,uiSender:tn,uiRecipient:on,txRecipient:de,txAmount:w,uiAmount:p?z:V,tokenUSDPrice:D,exitSendFlow:P}))},[l,ce,R,Z,e,_?.address,n,a,u,x,W,s,i,re,de,w,p,z,V,D,P]),Vt=(0,o.useCallback)(d=>{Se(K=>({...K,recipientError:void 0})),v({...g,recipient:d,addressBookRecipient:d})},[g,v]),Bt=(0,o.useCallback)(()=>{ye&&(ue(p?y:ne),v({...g,amountAsset:ye,amountUsd:y}),Se(d=>({...d,amountError:void 0})))},[p,y,ne,v,g,ye]),Lt=(0,o.useCallback)(()=>{ue(p?V||"":D==="$0.00"?"":D.substring(1)),$(!p)},[p,V,D,$]),Wt=(0,o.useMemo)(()=>{if(!L)return`??? ${E}`;if(p){let d=mn(dn(z??0,L,2));return z?d.length+(E.length??0)<15?`~${d} ${E}`:`~${d.substring(0,8)}... ${E}`:`0 ${E}`}return z?`~${D}`:"$0.00"},[z,p,E,L,D]),Rt=(0,o.useCallback)(d=>{if(ue(d),isNaN(Number(d)))return;let K=parseFloat(d),nn=Wn.get(e),We=p?nn.minimumSendableCurrencyAmount:se,tn=p?y:ne,on=K<We,$t=K>tn,zt=on?b("sendFormErrorMinRequiredInterpolated",{minAmount:We,tokenName:W}):$t?b("sendFormErrorInsufficientBalance"):void 0,Gt=p?sn(dn(K,L??0,m),m):sn(d,m),jt=p?parseFloat(d):$e(K,L??0);Se({...le,amountError:zt}),v({...g,amountAsset:Gt,amountUsd:jt})},[e,p,y,ne,se,b,W,L,m,le,v,g]),Kt=(0,o.useCallback)(d=>{let K=g.solana;K.memo=d,v({...g,solana:K})},[g,v]),Ot=(0,o.useMemo)(()=>ve?"":mn(p?y:ne),[p,y,ne,ve]),{sendAddressWarning:cn,sendAddressVariant:en}=ln({senderAddress:G,senderAccounts:Ye,networkID:e,recipient:R}),Ht=R&&!!cn&&!fe&&!Y,_t=(0,o.useMemo)(()=>!!V&&!le.amountError&&!C&&en!=="danger",[V,le.amountError,C,en]);return{isGasLoading:Ie===void 0&&Rn(l),i18nStrings:f,i18interpolation:I,networkID:e,senderAddress:G,addressBookRecipient:X,primarySymbol:W,fungibleAssetSymbol:a,canSubmit:_t,decimals:m,denominationText:Wt,logoUri:s,usdPrice:L,inputValue:De,memoValue:U,shouldShowUsdValues:p,sendFormValues:g,sendFormErrors:le,handleAddressSelection:Vt,setSendFormValues:v,setSendFormErrors:Se,setMaxAmount:Bt,toggleShouldShowUsdValues:Lt,handleAmountChange:Rt,handleMemoChange:Kt,handleSubmit:Ut,exitSendFlow:P,onLeftButtonClick:Xe,availableBalance:Ot,isMemoEnabled:Ve,isStaleRecipient:Y,recipientError:fe,isRecipientLoading:ee,sendAddressWarning:Ht?cn:null,sendAddressVariant:en}},Po=r=>{let e=Eo(r);return o.default.createElement(Mo,{...e})},No=()=>{let r=k(i=>i.fungibleKey),e=k(i=>i.splTokenAccount),{fungible:n}=Pe({key:r,splTokenAccount:e});return n?o.default.createElement(Po,{networkID:n.data.chain.id,chainName:n.data.chain.name,fungibleKey:n.data.key,symbol:n.data.symbol??"",decimals:n.data.decimals,logoUri:n.data.logoUri??"",tokenAddress:n.data.tokenAddress,amount:n.data.amount,usd:n.data.usd,type:n.type}):null},Ns=No,Mo=o.default.memo(r=>{let{i18nStrings:e,i18interpolation:n,networkID:i,senderAddress:a,addressBookRecipient:m,primarySymbol:s,fungibleAssetSymbol:u,canSubmit:l,decimals:b,denominationText:f,logoUri:I,usdPrice:T,inputValue:x,memoValue:c,sendFormValues:p,sendFormErrors:$,handleAddressSelection:g,setSendFormValues:v,setSendFormErrors:q,setMaxAmount:W,toggleShouldShowUsdValues:E,handleAmountChange:R,handleMemoChange:X,handleSubmit:w,exitSendFlow:H,onBlurRecipientInput:U,onLeftButtonClick:V,isGasLoading:z,availableBalance:de,isMemoEnabled:fe,isStaleRecipient:C,recipientError:Y,isRecipientLoading:ee,sendAddressWarning:re,sendAddressVariant:ie}=r,{amountError:N}=$,_=de?o.default.createElement(Ne,{font:"caption",color:"textTertiary",children:n.amountAvailable(de,s)}):o.default.createElement("div",null),G=T?o.default.createElement(M,{direction:"row",justifyContent:"space-between",width:"100%"},o.default.createElement(M,{direction:"row",alignItems:"center",cursor:"pointer",color:{base:"textTertiary",hover:"accentPrimary"}},o.default.createElement(Ne,{font:"caption",onPress:E,children:f}),o.default.createElement(M,{marginLeft:4},o.default.createElement(ot.Swap2Vertical,{size:12}))),_):o.default.createElement(M,{justifyContent:"flex-end",width:"100%"},_);return o.default.createElement(M,{justifyContent:"space-between",height:"100%"},o.default.createElement(M,null,o.default.createElement(qe,{onLeftButtonClick:V},e.pageHeaderText," ",u),o.default.createElement(M,{marginBottom:20,marginTop:10,marginLeft:"auto",marginRight:"auto"},o.default.createElement(Ze,{image:{type:"fungible",src:I,fallback:s},size:72})),o.default.createElement("form",{onSubmit:w,className:vo.form},o.default.createElement(M,{marginBottom:10},o.default.createElement(Ft,{addressBookRecipient:m,networkID:i,senderAddress:a,symbol:s,sendFormValues:p,sendFormErrors:$,recipientError:Y,handleAddressSelection:g,setSendFormValues:v,setSendFormErrors:q,onBlurRecipientInput:U,isLoading:ee})),!m&&!C&&Y&&o.default.createElement(M,{marginBottom:10},o.default.createElement(Ne,{children:Y,color:"accentAlert",font:"body"})),o.default.createElement(M,{marginBottom:10},o.default.createElement(M,{position:"relative"},o.default.createElement(At,{name:"amount",value:x,symbol:s,alignSymbol:"right",buttonText:e.targetInputButtonText,width:47,maxLength:20,decimalLimit:b,warning:!!N,onSetTarget:W,onKeyPress:B=>l&&B.key==="Enter"&&B.preventDefault(),onUserInput:R,targetButtonDisabled:z}))),fe&&o.default.createElement(M,{marginBottom:10},o.default.createElement(ut,{name:"memo",placeholder:e.memoPlaceholderText,value:c,maxLength:240,onKeyDown:B=>l&&B.key==="Enter"&&B.preventDefault(),onChange:B=>{B.target.validity.valid?X(B.target.value):B.preventDefault()}}))),N?o.default.createElement(M,null,o.default.createElement(Ne,{children:N,color:"accentAlert",font:"body"})):G,o.default.createElement(M,{marginTop:16},o.default.createElement(Dt,{networkID:i})),re&&o.default.createElement(yt,{message:re,variant:ie,actions:[]})),o.default.createElement(ke,{primaryText:e.buttonPrimaryText,secondaryText:e.buttonSecondaryText,onPrimaryClicked:w,onSecondaryClicked:H,primaryTheme:l?"primary":"default",primaryDisabled:!l}))});export{No as a,Ns as b};
//# sourceMappingURL=chunk-UKXW6R3P.js.map