import{a as U}from"./chunk-TQNG3Z6X.js";import{$ as _,La as Ie,Ma as Ne,N as L,oa as fe}from"./chunk-FADT747G.js";import"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import{c as G,d as Ee}from"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import{h as Le}from"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import{a as ge}from"./chunk-IVMV7P4T.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j}from"./chunk-OKP6DFCI.js";import{o as B,rb as we}from"./chunk-WIQ4WVKX.js";import{p as w,u as Y,v as X,x as N}from"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import{b as Ae}from"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import{d as he}from"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import{s as ve,z as be}from"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import{a as ke,g as ye,o as Ce}from"./chunk-S37W3WO2.js";import{Lb as M,Na as S,Nb as ue,Ob as R,Td as De,Va as f}from"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as Te}from"./chunk-56SJOU6P.js";import{E as me,ga as h}from"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as pe}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as re,h as ce,n as de}from"./chunk-3KENBVE7.js";ce();de();var o=re(pe()),W=re(pe());var Ve=B.a`
  cursor: pointer;
`,ze=B.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`,g=B.span`
  cursor: pointer;
  color: ${p=>p.color||"white"};
  &:hover {
    color: #8a7ad8;
  }
`,Ke=B.div`
  margin: -16px -16px 0 -16px;
  width: calc(100% + 32px);
  height: calc(100% + 16px);
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
`,xe=({label:p,url:m})=>o.createElement(Ve,{onClick:()=>self.open(m)},o.createElement(we,{color:"#AB9FF2",noWrap:!0,lineHeight:14,maxWidth:`${Ae/2}`,weight:600,size:14},p)),He=({activityItem:p})=>{let{interactionData:m,chainMeta:V}=p,{t:e}=Te(),{transactionType:P}=m,{status:Se,networkFee:q,networkFeePayer:J}=V,D=V.chainId,b=Se==="failed",{pushDetailView:Q}=Le(),{getKnownAddressLabel:Re}=be(),{data:Z}=ve(),{handleHideModalVisibility:ee}=Ne(),z=(0,W.useCallback)(()=>ee("activityItem"),[ee]),{data:F}=De(),te=F?.isReadOnly,r=(0,W.useCallback)((a,t)=>{Q(o.createElement(Ke,null,o.createElement(Ie,{caip19:a,title:t,entryPoint:"activityItemDetail"})))},[Q]),Be=J?F?.addresses.some(a=>a.address.toLowerCase()===J.toLowerCase()):!1,_e=me(p.timestamp*1e3,e("richTransactionDetailAt")),O=S.getTokenDecimals(D),A=S.getTokenSymbol(D),Ue=q?`-${h(q,O)} ${A}`:e("historyUnknownDappName"),I=o.createElement(L,{activityItem:p,size:"medium"}),u={label:e("richTransactionDetailDate"),value:_e},ae=w(p.id),k=[];if(Z){let a=V.chainId,t=Z.explorers[a]??ke.get(a).defaultExplorer,n=Ce({networkID:a,endpoint:"transaction",explorerType:t,param:ae});n!==""&&k.push({label:e("richTransactionDetailViewOnExplorer",{explorer:ye[t]}),value:n,type:"link"})}let x=f({chainId:D,slip44:S.getSlip44(D),resourceType:"nativeToken"}),y=b?{label:e("richTransactionDetailStatus"),value:e("richTransactionDetailFailed"),color:"#EB3742"}:{label:e("richTransactionDetailStatus"),value:e("historyStatusSucceeded"),color:"#21E56F"},C={label:e("richTransactionDetailNetworkFee"),value:Be?Ue:void 0},v={label:e("historyNetwork"),value:S.getNetworkName(D)},oe=fe(),ne=(0,W.useCallback)((a,t)=>{he.capture("activityItemSwapAgainClicked",{data:{from_asset_caip19:t,to_asset_caip19:a}}),oe({buyFungibleCaip19:a,sellFungibleCaip19:t}),z()},[oe,z]),d;switch(P){case"TOKEN_SEND":{let t=m.balanceChanges[0],n=X(t,F?.addresses??[]),{token:{symbol:i,decimals:l,displayName:s,tokenType:c,isSpam:T},amount:E}=t,$=Y(c),ie=f(N(t.token,D)),Pe=n?"+":"-",K=l!==void 0?`${h(E,l)} ${i||""}`:e("transactionsUnknownAmount"),Fe=`${Pe}${K}`,H=w(n?t.from:t.to),se=ue(H,void 0,Re(H,D)),Oe={label:e(n?"richTransactionDetailFrom":"richTransactionDetailTo"),value:o.createElement(U,{delayedChildren:o.createElement(_,{alignment:"topCenter",copyString:H},se)},se)},le=We=>o.createElement(g,{onClick:()=>r(ie,t.token.symbol),color:n&&!b?"#21E56F":void 0},We),$e=b?[{label:e("historyAttemptedAmount"),value:K}]:[],Me=b?e("transactionsSendFailed"):`${e("transactionsSent")}`;d={sections:[{rows:[u,y,Oe,v,C,...$e,...k]}],title:n?e("transactionsReceived"):Me,primaryText:$?{value:s||e("richTransactionDetailUnknownNFT")}:b||l===void 0?{value:le(K)}:{value:le(Fe)},secondaryText:{value:""},image:$?I:o.createElement(L,{activityItem:p,size:"medium",onClick:()=>r(ie,t.token.symbol)}),warning:n&&T?e("spamActivityWarning"):""};break}case"TOKEN_BURN":{let{amount:a,token:t}=m,n="";b||(t.displayName?a==="1"?n=t.displayName:n=`${t.displayName} (${a})`:n=e("richTransactionDetailUnknownNFT")),d={sections:[{rows:[u,y,v,C,...k]}],title:e("richTransactionDetailBurned"),primaryText:{value:n},secondaryText:{value:""},image:I};break}case"TOKEN_SWAP":{let{receiveAmount:a,receiveToken:t,sendAmount:n,sendToken:i,dapp:l}=m,s=R(w(i.id)||""),c=R(w(t.id)||""),T=f(N(i,D)),E=f(N(t,D));d={sections:[{rows:[u,y,v,C]},{title:e("richTransactionDetailSwapDetails"),rows:[{label:e("richTransactionDetailProvider"),value:l?.displayName&&l.logoURI?o.createElement(G,{name:l.displayName,imageURL:l.logoURI}):l?.displayName||e("historyUnknownDappName")},{label:e("richTransactionDetailYouPaid"),value:i.decimals!==void 0?`-${h(n,i.decimals)} ${i.symbol||""}`:e("transactionsUnknownAmount"),onClick:()=>r(T,i.symbol||s)},{label:e("richTransactionDetailYouReceived"),value:t.decimals!==void 0?`+${h(a,t.decimals)} ${t.symbol||""}`:e("transactionsUnknownAmount"),color:t.decimals!==void 0&&!b?"#21E56F":"",onClick:()=>r(E,t.symbol||c)},...k]}],title:e("richTransactionDetailTokenSwap"),primaryText:{value:o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>r(T,i.symbol||s)},i.symbol||s)," \u2192 ",o.createElement(g,{onClick:()=>r(E,t.symbol||c)},t.symbol||c))},secondaryText:{value:""},image:o.createElement(L,{activityItem:p,size:"medium",onClick:te?void 0:()=>ne(E,T)}),swapAgain:te?void 0:{sendToken:T,receiveToken:E}};break}case"BRIDGE_INIT":{let t=m.balanceChanges[0],n=X(t,F?.addresses??[]),{token:{symbol:i,decimals:l},amount:s}=t,c=f(N(t.token,D)),T=l!==void 0?`${h(s,l)} ${i||""}`:e("transactionsUnknownAmount"),E=p.interactionData.explorerUrl??`https://explorer.li.fi/tx/${ae}`,$={label:e("transactionBridgeStatusLink"),value:E,type:"link"};d={sections:[{rows:[u,y,v,C,$]}],title:b?e("transactionBridgeInitiatedFailed"):`${e("transactionBridgeInitiated")}`,primaryText:{value:o.createElement(g,{onClick:()=>r(c,i),color:n&&!b?"#21E56F":void 0},T)},secondaryText:{value:""},image:o.createElement(L,{activityItem:p,size:"medium",onClick:()=>r(c,i)})};break}case"TOKEN_UNWRAP":{let{token:a,amount:t}=m,n=R(w(a.id)||""),i=f(N(a,D)),l=a.decimals!==void 0?`+${h(t,a.decimals)} ${a.symbol||""}`:e("transactionsUnknownAmount");d={sections:[{rows:[u,y,v,C]},{title:e("richTransactionDetailUnwrapDetails"),rows:[{label:e("richTransactionDetailYouReceived"),value:o.createElement(g,{onClick:()=>r(i,a.symbol),color:b?void 0:"#21E56F"},l)},...k]}],title:e("richTransactionDetailTokenUnwrap"),primaryText:{value:o.createElement(g,{onClick:()=>r(i,a.symbol)},a.symbol||n)},secondaryText:{value:""},image:o.createElement(L,{activityItem:p,size:"medium",onClick:()=>r(i,a.symbol)})};break}case"WITHDRAW_STAKE":{let{amount:a,stakeAccount:t}=m,n=w(t),i=M(n,4);d={sections:[{rows:[u,y,{label:e("richTransactionDetailAccount"),value:o.createElement(U,{delayedChildren:o.createElement(_,{alignment:"topCenter",copyString:n},i)},i)},v,C,...k]}],title:e("richTransactionDetailWithdrawStake"),primaryText:{value:o.createElement(g,{onClick:()=>r(x,A),color:b?void 0:"#21E56F"},"+",h(a,O)," ",A)},secondaryText:{value:""},image:o.createElement(L,{activityItem:p,size:"medium",onClick:()=>r(x,A)})};break}case"DEACTIVATE_STAKE":{let{amount:a,stakeAccount:t}=m,n=w(t),i=M(n,4);d={sections:[{rows:[u,y,{label:e("richTransactionDetailAccount"),value:o.createElement(U,{delayedChildren:o.createElement(_,{alignment:"topCenter",copyString:n},i)},i)},v,C,...k]}],title:e("richTransactionDetailUnstaked"),primaryText:{value:o.createElement(g,{onClick:()=>r(x,A)},h(a,O)," ",A)},secondaryText:{value:""},image:o.createElement(L,{activityItem:p,size:"medium",onClick:()=>r(x,A)})};break}case"STAKE":{let{amount:a,stakeAccount:t,validatorName:n,validatorWebsite:i}=m,l=w(t),s=M(l,4);d={sections:[{rows:[u,y,{label:e("richTransactionDetailAccount"),value:o.createElement(U,{delayedChildren:o.createElement(_,{alignment:"topCenter",copyString:l},s)},s)},{label:"Validator",value:n&&i?o.createElement(xe,{label:n,url:i}):n},v,C,...k]}],title:e("richTransactionDetailStaked"),primaryText:{value:o.createElement(g,{onClick:()=>r(x,A)},"-",h(a,O)," ",A)},secondaryText:{value:""},image:o.createElement(L,{activityItem:p,size:"medium",onClick:()=>r(x,A)})};break}case"COLLECTIBLE_LIST":case"COLLECTIBLE_BUY_ITEM":case"COLLECTIBLE_CANCEL_BID":case"COLLECTIBLE_BID_ITEM":case"COLLECTIBLE_UNLIST":case"COLLECTIBLE_SELL_ITEM":{let{dapp:a,item:t,forAmount:n,forAsset:i,listingUrl:l}=m,s=i.decimals!==void 0?`${h(n,i.decimals)} ${i.symbol||""}`:e("transactionsUnknownAmount"),c=t.displayName||e("richTransactionDetailUnknownNFT"),T={COLLECTIBLE_LIST:{priceRow:{label:e("richTransactionDetailListingPrice"),value:s},sectionTitle:e("richTransactionDetailListingDetails"),detailTitle:e("richTransactionDetailListed")},COLLECTIBLE_UNLIST:{priceRow:{label:e("richTransactionDetailOriginalListingPrice"),value:s},sectionTitle:e("richTransactionDetailListingDetails"),detailTitle:e("richTransactionDetailUnlisted")},COLLECTIBLE_BID_ITEM:{priceRow:{label:e("richTransactionDetailPrice"),value:s},sectionTitle:e("richTransactionDetailBidDetails"),detailTitle:e("richTransactionDetailBid")},COLLECTIBLE_CANCEL_BID:{priceRow:{label:e("richTransactionDetailPrice"),value:s},sectionTitle:e("richTransactionDetailBidDetails"),detailTitle:e("richTransactionDetailCancelBid")},COLLECTIBLE_BUY_ITEM:{priceRow:{label:e("richTransactionDetailPrice"),value:s},sectionTitle:e("richTransactionDetailPurchaseDetails"),detailTitle:e("richTransactionDetailBought")},COLLECTIBLE_SELL_ITEM:{priceRow:{label:e("richTransactionDetailPrice"),value:s},sectionTitle:e("richTransactionDetailSaleDetails"),detailTitle:e("richTransactionDetailSold")}};d={sections:[{rows:[u,y,v,C]},{title:T[P].sectionTitle,rows:[T[P].priceRow,{label:e("richTransactionDetailItem"),value:c&&l?o.createElement(xe,{label:c,url:l}):c},{label:e("richTransactionDetailMarketplace"),value:a?.displayName&&a?.logoURI?o.createElement(G,{name:a.displayName,imageURL:a.logoURI}):a?.displayName||""},...k]}],title:T[P].detailTitle,primaryText:{value:c},secondaryText:{value:""},image:I};break}case"CANCEL_TX":{d={sections:[{rows:[u,y,v,C,...k]}],title:e("transactionCancelled"),primaryText:{value:""},secondaryText:{value:""},image:I};break}case"TOKEN_APPROVAL":{let{dapp:a,token:t,isApproved:n}=m,i=a?.displayName||e("historyUnknownDappName"),l=a?.displayName?[{label:e("transactionApproveAppLabel"),value:a?.displayName}]:[],s=R(w(t.id)||""),c=Y(t.tokenType)?t.displayName:t.symbol,T=f(N(t,D));d={sections:[{rows:[u,y,v,C]},{title:e("transactionApproveDetailsTitle"),rows:[...l,{label:e("transactionApproveTokenLabel"),value:c||s,onClick:()=>r(T,c||s)},...k]}],title:o.createElement(g,{onClick:()=>r(T,c||s)},e(n?"transactionApproveToken":"transactionRevokeApproveToken",{tokenSymbol:c||""})),primaryText:{value:""},secondaryText:{value:i},image:o.createElement(L,{activityItem:p,size:"medium",onClick:()=>r(T,c||s)})};break}case"COLLECTION_APPROVAL":{let{dapp:a,collection:t,isApproved:n}=m,i=a?.displayName||e("historyUnknownDappName"),l=a?.displayName?[{label:e("transactionApproveAppLabel"),value:a?.displayName}]:[],s=t.displayName;d={sections:[{rows:[u,y,v,C]},{title:e("transactionApproveDetailsTitle"),rows:[...l,{label:e("transactionApproveCollectionLabel"),value:s},...k]}],title:e(n?"transactionApproveToken":"transactionRevokeApproveToken",{tokenSymbol:s}),primaryText:{value:""},secondaryText:{value:i},image:I};break}case"CANCEL_ORDER":{let{dapp:a}=m;d={sections:[{rows:[u,y,v,C,...k]}],title:e("transactionCancelOrder"),primaryText:{value:""},secondaryText:{value:a?.displayName||e("historyUnknownDappName")},image:I};break}case"UNCLASSIFIED_APP_INTERACTION":default:{let{dapp:a}=m,t=a?.displayName||e("historyUnknownDappName");d={sections:[{rows:[u,y,v,C,...k]}],title:e("richTransactionDetailAppInteraction"),primaryText:{value:""},secondaryText:{value:t},image:I};break}}return o.createElement(o.Fragment,null,o.createElement(Ee,{...d}),o.createElement(ge,{removeFooterExpansion:!1},o.createElement(ze,null,o.createElement(j,{onClick:z},e("commandClose")),d.swapAgain&&o.createElement(j,{onClick:()=>ne(d.swapAgain.receiveToken,d.swapAgain.sendToken),theme:"primary"},e("commandSwapAgain")))))},yt=He;export{He as ActivityItemDetail,xe as Link,yt as default};
//# sourceMappingURL=ActivityItemDetail-FDWP2PPQ.js.map