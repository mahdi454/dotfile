import{b as $e}from"./chunk-JM4RGU3J.js";import{b as je}from"./chunk-XHHRGPLK.js";import"./chunk-5J7CBDXX.js";import{a as Ve}from"./chunk-Z4A553U5.js";import"./chunk-RIWLOEHK.js";import"./chunk-IRMGOW5H.js";import"./chunk-UXLFUD7T.js";import"./chunk-2HEOW3XO.js";import"./chunk-DLRFA5AU.js";import"./chunk-OC3IFNJW.js";import"./chunk-UI7PAU35.js";import{a as Oe}from"./chunk-SMZ64QW3.js";import"./chunk-DQTTI4XL.js";import"./chunk-Y6SGFHFT.js";import"./chunk-V4NJDTLC.js";import"./chunk-OFKAKQXT.js";import{h as _e}from"./chunk-IQUFOLSA.js";import"./chunk-KA5XDNKC.js";import"./chunk-HXUMX2S7.js";import{a as V}from"./chunk-ZYEEMVIP.js";import"./chunk-BOOOUD52.js";import"./chunk-TBLUUKKO.js";import"./chunk-S5DGV5WL.js";import{l as O,m as Ce,q as t}from"./chunk-WKBC6JL3.js";import"./chunk-3EO5SKIF.js";import"./chunk-LMIOM5QK.js";import"./chunk-VPDRXROE.js";import"./chunk-JLIPSIRU.js";import"./chunk-CIDV5VJQ.js";import"./chunk-VX55KNI4.js";import"./chunk-4TYAYDA2.js";import"./chunk-LDX3S2CG.js";import"./chunk-TS5DNQFS.js";import"./chunk-656GFN7J.js";import"./chunk-VGT27A4M.js";import"./chunk-R4G6BEPF.js";import"./chunk-S3MY46XE.js";import"./chunk-2333N6PK.js";import"./chunk-AYCAVTPT.js";import{g as Ze}from"./chunk-OG46YTNN.js";import{c as e}from"./chunk-RXNDJ7P3.js";import"./chunk-YM7II27E.js";import{a as fe,b as ve}from"./chunk-CYOQISC6.js";import{c as Pe,f as ze,h as Ge}from"./chunk-TKYTZF2K.js";import"./chunk-RY27BWZR.js";import"./chunk-WIWWLEBZ.js";import{X as oe,w as F}from"./chunk-YT2MPR4E.js";import"./chunk-R4ZXRZL6.js";import{A as ee,E as f,K as q,N as I,O as ge,P as ue,S as De,T as Ee,V as Se,W as Fe,a as Be,y as R}from"./chunk-LDKM7IQF.js";import{j as ke,pa as rt}from"./chunk-6O63U2D6.js";import{M as W,l as pe,x as a}from"./chunk-RIOWPXBZ.js";import"./chunk-BAWLRI3I.js";import"./chunk-USKTQDCY.js";import"./chunk-B2L2MSSC.js";import"./chunk-OIIWKMG6.js";import{T as z,Z as Ae,ca as re}from"./chunk-OSCGYMLH.js";import"./chunk-ADWO6K2C.js";import{a as N}from"./chunk-O337TVCZ.js";import"./chunk-2T657SRL.js";import"./chunk-QJAZEJHH.js";import"./chunk-LCKQ7YKT.js";import"./chunk-ZVYHIM2Y.js";import"./chunk-VBARKITZ.js";import"./chunk-NCANHNXF.js";import{f as L,m as o,o as r}from"./chunk-GLD6H5Q5.js";o();r();var _=L(N());W();o();r();var C=L(N());o();r();var ne=L(N());rt();ve();Ge();var Ye=({analysisPlatformId:i,chainId:n})=>{let s=_e(),[l,p]=(0,ne.useState)({}),[g,u]=(0,ne.useState)(!1);return(0,ne.useEffect)(()=>{(async()=>{if(!s)return;u(!0);let T=await Pe(fe.getDefiDetail,{accountId:s,platformList:JSON.stringify([{analysisPlatformId:i,chainId:n}])}),d=ke(T,["data","0","platformDetailListByAccountId","0"],{}),h=ke(T,["data","0","platformName"],"");u(!1),p({...d,platformName:h})})()},[i,n,s]),{defiDetail:l,loading:g}};o();r();var c=L(N());W();oe();o();r();var U=L(N());o();r();var de={main:"_main_1lbho_1",fieldName:"_fieldName_1lbho_6",value:"_value_1lbho_9"};var ce=({fieldName:i,fieldValue:n=[],hiddenAssets:s})=>U.default.createElement(U.default.Fragment,null,n?.map((l,p)=>U.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:p===0?"space-between":"flex-end",className:de.main},p===0&&U.default.createElement(t.Text,{size:t.SIZE.sm,type:t.TYPE.secondary,className:de.fieldName,ellipsis:!0},i),U.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:de.value},U.default.createElement(t.Text,{size:t.SIZE.sm,strong:500,ellipsis:!0},s?A:l)))));o();r();var w=L(N());W();oe();o();r();o();r();var G={main:"_main_ss5g5_1",title:"_title_ss5g5_5",logo:"_logo_ss5g5_9",assetLogo:"_assetLogo_ss5g5_15",asset:"_asset_ss5g5_15",currencyAmount:"_currencyAmount_ss5g5_25",tokenSymbol:"_tokenSymbol_ss5g5_28",amount:"_amount_ss5g5_31",bonus:"_bonus_ss5g5_34"};var ie=({leftTitle:i="",rightTitle:n="",assets:s=[],hiddenAssets:l=!1})=>{let{usdToThisRate:p,symbol:g}=V();return w.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:G.main,direction:e.DIRECTION.vertical},w.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:"space-between",className:G.title},w.default.createElement(t.Text,{size:t.SIZE.sm,type:t.TYPE.secondary},i),w.default.createElement(t.Text,{size:t.SIZE.sm,type:t.TYPE.secondary},n)),s?.map((u,T)=>w.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:"space-between",className:G.asset},w.default.createElement(e.FlexBox,{align:e.ALIGN.center},w.default.createElement(f,{src:u?.tokenLogo,className:G.assetLogo}),w.default.createElement(t.Text,{size:t.SIZE.sm,strong:500,ellipsis:!0,className:G.tokenSymbol},u?.tokenSymbol),u?.rewardType===4&&w.default.createElement(ue,{iconName:"okx-wallet-plugin-bonus",size:I.SIZE.sm,className:G.bonus},a("wallet_extension_defiposition_tag_bonus"))),w.default.createElement(e.FlexBox,{direction:e.DIRECTION.vertical,align:e.ALIGN.end,className:G.amount},w.default.createElement(t.Text,{size:t.SIZE.sm,strong:500,ellipsis:!0},l?A:Ce(u?.coinAmount,{precision:u?.tokenPrecision})),w.default.createElement(t.Text,{size:t.SIZE.xs,type:t.TYPE.secondary,className:G.currencyAmount,ellipsis:!0},l?A:O(F(u?.currencyAmount,p),{useApproximate:!1,symbol:g}))))))};o();r();o();r();var xe={main:"_main_irl8o_1",logo:"_logo_irl8o_5",investmentName:"_investmentName_irl8o_11",feeRate:"_feeRate_irl8o_14"};var Z=L(N());o();r();var $=L(N());o();r();var M={main:"_main_a14dh_1",middle:"_middle_a14dh_5",middleRight:"_middleRight_a14dh_10",more:"_more_a14dh_19",moreThanOne:"_moreThanOne_a14dh_32"};var We=({investLogo:i})=>{let{middleLogoList:n=[],topRightLogoList:s=[]}=i,l=()=>{let g=n?.length;switch(!0){case g===1:return $.default.createElement(f,{src:n[0]?.tokenLogo,className:M.middle});case g>=2:return $.default.createElement($.default.Fragment,null,$.default.createElement(f,{src:n[0]?.tokenLogo,className:M.middle}),$.default.createElement(f,{src:n[1]?.tokenLogo,className:M.middleRight}));default:return null}},p=()=>s.length>0?$.default.createElement(f,{src:s[0]?.tokenLogo,className:M.more}):null;return $.default.createElement(e.Box,{className:`${M.main} ${n?.length>1&&M.moreThanOne}`},l(),p())};var qe=({investName:i="",investmentName:n="",investLogo:s=[],feeRate:l=""})=>Z.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:xe.main},Z.default.createElement(We,{investLogo:s}),Z.default.createElement(e.FlexBox,{direction:e.DIRECTION.vertical},Z.default.createElement(e.FlexBox,{align:e.ALIGN.end,className:xe.investmentName},Z.default.createElement(t.Text,{size:t.SIZE.md,strong:500},n),l&&Z.default.createElement(t.Text,{type:t.TYPE.secondary,size:t.SIZE.xs,className:xe.feeRate},`/${+l*100}%`)),Z.default.createElement(e.FlexBox,{align:e.ALIGN.center},Z.default.createElement(ge,{size:I.SIZE.sm},i))));o();r();var Te=L(N());o();r();var ye={main:"_main_djntb_1",tag:"_tag_djntb_5"};var Ue=({positionInfo:i})=>Te.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:ye.main},i.positionStatus==="ACTIVE"?Te.default.createElement(ue,{size:I.SIZE.lg,className:ye.tag},`#${i.tokenId}\xB7 ${i.positionStatus}`):Te.default.createElement(De,{size:I.SIZE.lg,className:ye.tag},`#${i.tokenId}\xB7 ${i.positionStatus}`));o();r();var se={main:"_main_128d3_1",tips:"_tips_128d3_8",tipText:"_tipText_128d3_12",tipIcon:"_tipIcon_128d3_15"};var A="****",Me=({investToken:i,hiddenAssets:n})=>{let{symbol:s}=V(),{investLogo:l,investName:p,investmentName:g,totalValue:u,supplied:T,borrowed:d,rewards:h,unclaimedFeeRewards:D,positionInfo:x,extraFieldList:Y,fixedApy:te}=i,he=x?.feeRate,le=(0,c.useCallback)((J,be)=>{let Q=[];return J?.forEach(b=>{b?.baseDefiTokenInfos?.forEach(X=>{be==="rewards"?Q.push({...X,rewardType:b.rewardType}):Q.push(X)})}),Q},[h]),me=(0,c.useMemo)(()=>O(u,{useApproximate:!1,symbol:s}),[u,s]);return c.default.createElement(e.FlexBox,{align:e.ALIGN.center,direction:e.DIRECTION.vertical,className:se.main},c.default.createElement(qe,{investLogo:l,investName:p,investmentName:g,feeRate:he}),x?.tokenId&&c.default.createElement(Ue,{positionInfo:x}),x?.tips&&c.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:se.tips},c.default.createElement(z,{className:`okx-wallet-plugin-warning-circle-fill ${se.tipIcon}`}),c.default.createElement(t.Text,{size:t.SIZE.xs,type:t.TYPE.secondary,wrap:!0,className:se.tipText},x?.tips)),c.default.createElement(ce,{fieldName:a("wallet_extension_defiposition_item_total_value"),fieldValue:[me],hiddenAssets:n}),te&&c.default.createElement(ce,{fieldName:a("wallet_extension_defiposition_item_fixed_apy"),fieldValue:[`${pe.truncate(F(+te,100),2)}%`],hiddenAssets:n}),Y?.map(J=>c.default.createElement(ce,{fieldName:J.fieldName,fieldValue:J.fieldValue,hiddenAssets:n})),T?.length>0&&c.default.createElement(ie,{leftTitle:a("commonall_column_colheader_assets"),rightTitle:a("wallet_extension_defiposition_text_amount"),assets:T,hiddenAssets:n}),d?.length>0&&c.default.createElement(ie,{leftTitle:a("commonall_column_colheader_assets"),rightTitle:a("wallet_extension_defiposition_text_amount"),assets:d,hiddenAssets:n}),h?.length>0&&c.default.createElement(ie,{leftTitle:a("wallet_extension_defiposition_item_claimable_rewards"),rightTitle:a("wallet_extension_defiposition_text_amount"),assets:le(h,"rewards"),hiddenAssets:n}),D?.length>0&&c.default.createElement(ie,{leftTitle:a("wallet_extension_defiposition_item_unclaimed_fee_income"),rightTitle:a("wallet_extension_defiposition_text_amount"),assets:le(D),hiddenAssets:n}))};o();r();var j=L(N());W();o();r();var we={main:"_main_qa6mn_1",title:"_title_qa6mn_6"};var He=({healthRate:i={level:"",rate:""},hiddenAssets:n})=>{let{level:s="",rate:l=""}=i,p=()=>{if(n)return A;switch(s){case 1:return j.default.createElement(Fe,{iconName:"okx-wallet-plugin-security-2",className:"doc-tag",size:I.SIZE.sm},l);case 2:return j.default.createElement(Se,{iconName:"okx-wallet-plugin-security-1",className:"doc-tag",size:I.SIZE.sm},l);case 3:return j.default.createElement(Ee,{iconName:"okx-wallet-plugin-security-filled",size:I.SIZE.sm,className:"doc-tag"},l);default:return null}};return j.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:"space-between",className:we.main},j.default.createElement(ee,{title:a("wallet_extension_defiposition_toast_dialog_desc_health_factor")},j.default.createElement(t.Text,{size:t.SIZE.sm,type:t.TYPE.secondary,className:we.title},a("wallet_extension_defiposition_mid_title_health_factor"))),j.default.createElement(e.FlexBox,{align:e.ALIGN.center},p()))};o();r();var E=L(N());W();o();r();var H={main:"_main_1mr9q_1",logo:"_logo_1mr9q_6",number:"_number_1mr9q_12",link:"_link_1mr9q_15",title:"_title_1mr9q_20",content:"_content_1mr9q_26"};var Ke=({points:i,hiddenAssets:n})=>{let{value:s,logo:l,pointListData:p}=i||{},g=()=>{globalThis.open(p?.url)};return E.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:"space-between",className:H.main},E.default.createElement(ee,{title:a("wallet_extension_defiposition_toast_dialog_desc_points")},E.default.createElement(t.Text,{size:t.SIZE.sm,type:t.TYPE.secondary,className:H.title},a("wallet_extension_defiposition_mid_title_points"))),E.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:H.content},n?A:E.default.createElement(E.default.Fragment,null,E.default.createElement(t.Text,{size:t.SIZE.sm,strong:500,ellipsis:!0},s),E.default.createElement(f,{src:l,className:H.logo}),p?.pointList?.length>0&&E.default.createElement(ge,{className:H.number},`+${p?.pointList?.length}`),E.default.createElement(z,{className:`okx-wallet-plugin-right ${H.link}`,onClick:g}))))};o();r();var S=L(N());W();oe();o();r();var K={main:"_main_1yaej_1",logo:"_logo_1yaej_6",more:"_more_1yaej_11",totalReward:"_totalReward_1yaej_21",title:"_title_1yaej_25",content:"_content_1yaej_31"};var Je=({protocolRewards:i,platformName:n,hiddenAssets:s})=>{let{totalReward:l,tokenLogoList:p=[]}=i||{},{symbol:g,usdToThisRate:u}=V();return S.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:"space-between",className:K.main},S.default.createElement(ee,{title:a("wallet_extension_defiposition_toast_dialog_desc_protocol_rewards",{protocol:n})},S.default.createElement(t.Text,{size:t.SIZE.sm,type:t.TYPE.secondary,className:K.title},a("wallet_extension_defiposition_mid_title_protocol_rewards"))),S.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:K.content},s?A:S.default.createElement(S.default.Fragment,null,S.default.createElement(t.Text,{size:t.SIZE.sm,strong:500,className:K.totalReward,ellipsis:!0},O(F(l,u),{useApproximate:!1,symbol:g})),p.slice(0,2).map((T,d)=>S.default.createElement(e.Box,{key:d,style:{marginLeft:d===0?0:"-8px"}},S.default.createElement(f,{src:T,className:K.logo}))),p.length>2&&S.default.createElement(f,{className:`okx-wallet-plugin-more-2 ${K.more}`}))))};o();r();var ae={main:"_main_rv1vm_1",skeleton:"_skeleton_rv1vm_4",skeletonItem:"_skeletonItem_rv1vm_7"};var Qe=({analysisPlatformId:i,chainId:n,hiddenAssets:s})=>{let{defiDetail:l,loading:p}=Ye({analysisPlatformId:i,chainId:n}),{protocolExtraData:g,investTokenBalanceVoList:u,platformName:T}=l||{},{healthRate:d,points:h,protocolRewards:D}=g||{};return p?C.default.createElement(e.Box,{className:ae.skeleton},C.default.createElement(q.Input,{size:q.SIZE.sm}),C.default.createElement(q.Input,{className:ae.skeletonItem,size:q.SIZE.md}),C.default.createElement(q.Input,{className:ae.skeletonItem,size:q.SIZE.md})):C.default.createElement(e.FlexBox,{className:ae.main,align:e.ALIGN.center,direction:e.DIRECTION.vertical},d&&C.default.createElement(He,{healthRate:d,hiddenAssets:s}),h&&C.default.createElement(Ke,{points:h,hiddenAssets:s}),D&&C.default.createElement(Je,{protocolRewards:D,platformName:T,hiddenAssets:s}),u?.length>0&&u.map((x,Y)=>C.default.createElement(Me,{key:Y,investToken:x,hiddenAssets:s})))};o();r();var y=L(N());W();oe();o();r();var Le=L(N());Ge();ve();var Xe=()=>{let i=_e(),[n,s]=(0,Le.useState)([]);return(0,Le.useEffect)(()=>{(async()=>{let{data:l}=await ze(fe.getDefiBanner,{walletId:i});s(l?.defiBoardInvestmentVos||[])})()},[i]),n};o();r();var k={main:"_main_1437z_1",backgroundImage:"_backgroundImage_1437z_9",content:"_content_1437z_17",header:"_header_1437z_27",investmentName:"_investmentName_1437z_30",rate:"_rate_1437z_33",tokenSingle:"_tokenSingle_1437z_38",tokenDoubleLeft:"_tokenDoubleLeft_1437z_48",tokenDoubleRight:"_tokenDoubleRight_1437z_58",linkWrapper:"_linkWrapper_1437z_68",link:"_link_1437z_68",icon:"_icon_1437z_75",empty:"_empty_1437z_78"};var Re=()=>{let i=Oe(),n=Ze({light:"/cdn/assets/imgs/249/82CFBD93C928950F.png",dark:"/cdn/assets/imgs/249/9F574C0EC619D615.png"}),s=Xe();if(s.length===0)return y.default.createElement(R.State,{className:k.empty,type:R.State.TYPE.noResult,title:a("wallet_extension_text_enjoy_massive_defi"),buttonText:a("wallet_extension_btn_explore_dapps"),onButtonClick:()=>{globalThis.platform.openTab({url:a("extension_btn_link_okxweb3yield")})}});let{investmentName:l="",platformName:p="",middleLogoList:g=[],rate:u="",rateTypeDesc:T="",investmentId:d=""}=s[0]||{},h=()=>{globalThis.open(`${i?.defiDetail}/${d}#source=extension`)},D=()=>{let x=g?.length||0;switch(!0){case x===1:return y.default.createElement(f,{src:g[0]?.tokenLogo,className:k.tokenSingle});case x>=2:return y.default.createElement(y.default.Fragment,null,y.default.createElement(f,{src:g[0]?.tokenLogo,className:k.tokenDoubleLeft}),y.default.createElement(f,{src:g[1]?.tokenLogo,className:k.tokenDoubleRight}));default:return null}};return y.default.createElement(e.FlexBox,{className:k.main,align:e.ALIGN.center},y.default.createElement(f,{src:n,className:k.backgroundImage}),y.default.createElement(e.FlexBox,{className:k.content,direction:e.DIRECTION.vertical},y.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:k.header},y.default.createElement(t.Text,{size:t.SIZE.sm,strong:500,className:k.investmentName},l),y.default.createElement(I,{category:I.CATEGORY.fill,color:I.COLOR.grey,size:I.SIZE.sm},p)),y.default.createElement(t.Text,{className:k.rate,strong:700},`${pe.truncate(F(+u,100),2)}% ${T}`),y.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:k.linkWrapper,onClick:h},y.default.createElement(t.Text,{size:t.SIZE.xs,className:k.link,strong:700},a("wallet_extension_card_textbtn_stake_now")),y.default.createElement(z,{className:`okx-wallet-plugin-right ${k.icon}`})),D()))};o();r();var B=L(N());oe();o();r();o();r();var Ne={main:"_main_15eo7_1",rightBottom:"_rightBottom_15eo7_9"};var Ie=L(N()),et=({mainLogoUrl:i,secondaryLogoUrl:n,className:s})=>Ie.default.createElement(e.Box,{className:`${Ne.main} ${s}`},Ie.default.createElement(f,{src:i,className:Ne.main}),Ie.default.createElement(f,{src:n,className:Ne.rightBottom}));o();r();var v={main:"_main_ln2cc_1",logo:"_logo_ln2cc_5",content:"_content_ln2cc_8",leftContent:"_leftContent_ln2cc_11",platformName:"_platformName_ln2cc_14",link:"_link_ln2cc_17",tipIcon:"_tipIcon_ln2cc_24",warnInfo:"_warnInfo_ln2cc_28",amount:"_amount_ln2cc_32"};var tt=({defi:i,hiddenAssets:n})=>{let{platformUrl:s,networkLogo:l,platformName:p,currencyAmount:g,network:u,platformLogo:T,warnInfo:d}=i,h=Y=>{Y.stopPropagation(),globalThis.open(s)},{symbol:D,usdToThisRate:x}=V();return B.default.createElement(e.FlexBox,{className:v.main,align:e.ALIGN.center},B.default.createElement(et,{mainLogoUrl:T,secondaryLogoUrl:l,className:v.logo}),B.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:"space-between",className:v.content},B.default.createElement(e.FlexBox,{direction:e.DIRECTION.vertical,className:v.leftContent},B.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:v.platformName},B.default.createElement(t.Text,{size:t.SIZE.md,ellipsis:!0},p),B.default.createElement(z,{className:`okx-wallet-plugin-open-link ${v.link}`,onClick:h})),B.default.createElement(t.Text,{type:t.TYPE.secondary,size:t.SIZE.xs,ellipsis:!0},u)),B.default.createElement(e.FlexBox,{direction:e.DIRECTION.vertical,align:e.ALIGN.end,className:v.amount},B.default.createElement(t.Text,{strong:500,size:t.SIZE.md,ellipsis:!0},n?A:O(F(g,x),{useApproximate:!1,symbol:D})),d&&B.default.createElement(e.FlexBox,{align:e.ALIGN.center,className:v.warnInfo},B.default.createElement(z,{className:`okx-wallet-plugin-warning-circle-fill ${v.tipIcon}`}),B.default.createElement(t.Text,{size:t.SIZE.xs,type:t.TYPE.secondary,ellipsis:!0},d)))))};o();r();var P={accordion:"_accordion_1myyb_1",header:"_header_1myyb_5",title:"_title_1myyb_9",content:"_content_1myyb_12",button:"_button_1myyb_15",showButton:"_showButton_1myyb_19",error:"_error_1myyb_27",loader:"_loader_1myyb_30",bannerWrapper:"_bannerWrapper_1myyb_34"};var nt=190,it=({hiddenAssets:i,isWalletCreated:n,scrollTop:s,backupHeight:l})=>{let{currentNetworkUniqueId:p}=Ve(),{data:g=[],loading:u,error:T,run:d}=$e(),[h,D]=(0,_.useState)(null);(0,_.useEffect)(()=>{n&&d()},[n]);let x=(0,_.useMemo)(()=>{let b=g||[];return p!==""?b.filter(X=>X.chainId===+p):b},[g,p]),Y=(b,X,ot)=>{D(ot)},te=b=>`${b.analysisPlatformId}-${b.chainId}`,he=()=>_.default.createElement(e.FlexBox,{align:e.ALIGN.center,justify:e.ALIGN.center,className:P.loader},_.default.createElement(Ae,{size:Ae.SIZE.lg})),le=()=>_.default.createElement(R.State,{type:R.State.TYPE.noNetwork,className:P.error,title:a("wallet_extension_nft_text_loading_failed"),buttonText:a("wallet_extension_nft_btn_refresh"),onButtonClick:()=>{d()}}),me=(0,_.useMemo)(()=>x.length>8&&s>nt,[x.length,s]),{paddingBottom:J,buttonPaddingBottom:be,absoluteBottom:Q}=je({isButtonAbsolute:me,backupHeight:l});return T?le():x.length?_.default.createElement("div",{style:{paddingBottom:J}},_.default.createElement(Be.Group,{onChange:Y,expandedIds:h},x.map((b,X)=>_.default.createElement(Be.Item,{className:P.accordion,headerClassName:P.header,contentClassName:P.content,titleClass:P.title,title:_.default.createElement(tt,{defi:b,hiddenAssets:i}),id:te(b)},h?.includes(te(b))&&_.default.createElement(Qe,{analysisPlatformId:b.analysisPlatformId,chainId:b.chainId,hiddenAssets:i})))),_.default.createElement("div",{className:`${me?P.showButton:""} ${P.button}`,style:{bottom:Q,paddingBottom:be}},_.default.createElement(re,{circle:!0,category:re.CATEGORY.outline,type:re.TYPE.secondary,size:re.SIZE.md,onClick:()=>{globalThis.platform.openTab({url:a("extension_btn_link_okxweb3yield")})}},a("wallet_extension_bot_btn_go_to_defi")))):u?he():_.default.createElement(e.FlexBox,{className:P.bannerWrapper,style:{paddingBottom:Q}},_.default.createElement(Re,null))},Pi=it;export{Pi as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=DefiList-ARE22O4M.js.map