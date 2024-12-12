import{a as V,b as D,d as R}from"./chunk-N3OY7GLG.js";import{b as l}from"./chunk-3DI6NEAD.js";import{a as K,b as j,c as B}from"./chunk-ZLD5XTE5.js";import{d as U}from"./chunk-UI7PAU35.js";import{I as M,ga as x,x as rt}from"./chunk-JLIPSIRU.js";import{k,l as et}from"./chunk-656GFN7J.js";import{Aa as $,Ab as b,Jb as tt,Kc as _,yc as S,za as H,zb as E,zc as v}from"./chunk-YT2MPR4E.js";import{G as O,pa as X}from"./chunk-6O63U2D6.js";import{f as Z,m as s,o as n}from"./chunk-GLD6H5Q5.js";s();n();var P={hideNoValue:"hideNoValue",hideManualHidden:"hideManualHidden",hideUnverifiedCollection:"hideUnverifiedCollection"},u={[P.hideNoValue]:!0,[P.hideManualHidden]:!0,[P.hideUnverifiedCollection]:!1};s();n();X();s();n();var W="nft_list_filters";s();n();var T={SHOW:0,MANUAL:1,AUTO:2};function Y(t){if(!t)return u;try{let e=localStorage.getItem(W);if(!e)return u;let r=JSON.parse(e);return r?r[t]??u:u}catch{return u}}var ot=t=>({projectCertificated:t.hideUnverifiedCollection,hiddenStatus:[t.hideManualHidden?void 0:T.MANUAL,t.hideNoValue?void 0:T.AUTO].filter(Boolean).join(",")}),q=t=>{let e=Y(t);return ot(e)},ht=(t,e)=>{let r=Y(t);return e?r[e]!==u[e]:!O(r,u)};s();n();et();var F=Z(rt());s();n();_();tt();s();n();_();$();async function at(t){try{return await(await H.networks).query(t)}catch{return[]}}async function I(){let t;try{let e=await at();t=e?.length?e:S()}catch{t=S()}return M(t)}var G=(t,e)=>{let r=v({netWorkId:String(t.chain)})?.localType,{coinId:o,key:a}=e.get(r)??{},i="";return t.coverUrl?i=t.coverUrl:t.resourceType===1&&(i=t.resourceUrl),{...t,id:t.id,tokenId:t.tokenId,contractAddress:t.contractAddress,name:t.name,image:i,lastPrice:t.lastPrice,bestOfferPrice:t.bestOffer,salePrice:t.sale,floorPrice:t.floorPriceDetail,chain:t.chain,tokenStandard:R[t.tokenStandard]||V.UNKNOWN,isIdentification:t.certificateFlag===1,isNew:t.newNft===!0,collectionName:t.projectName,totalBalance:t.lookerNftCount,chainName:t.chainName,chainIcon:t.chainIcon,localType:r,accountAddress:t.ownerAddress,baseCoinId:o,baseCoinKey:a}},Q=async({projects:t="",chainIds:e="",saleStatus:r="",pageNo:o=1,pageSize:a=10,projectCertificated:i=!0,hiddenStatus:p="",address:m=""}={})=>{let N;if(!m)N={list:[],total:0,pageNo:o,pageSize:a};else{let g;try{g=await K({address:m,project:t,chain:e,saleStatus:r,pageNo:o,pageSize:a,projectCertificated:i,hiddenStatus:p});let L=await I(),C=new Map(L.map(f=>[f.localType,f]));N={list:g?.data?.list?.map(f=>G(f,C)),total:g.data.total,pageNo:o,pageSize:a}}catch{N={list:[],total:0,pageNo:o,pageSize:a,error:!0}}}return N},z=async({chainId:t,contractAddress:e,tokenId:r,looker:o})=>{if(!o)return{};let a;t=parseInt(t,10),t===E||t===b?a=await B({inscriptionIdProtocol:r,looker:o}):a=await j({chain:t,contractAddress:e,tokenId:r,looker:o});let i=await I(),p=new Map(i.map(m=>[m.localType,m]));return a?.data?G(a?.data,p):null};var w={list:[],total:0,pageNo:1,pageSize:D},it={nftFilterChain:[],nftListCatch:[],computedNftCurrency:!1,testNftCurrency:100,nftFilterInfo:{collectionFilter:[],saleStatusFilter:[]},firstSet:!1,nftFilterStatus:!1,nftCollectionLoadingStatus:!1,activeId:1,nftListData:{},listLoading:!0,listLoadingError:!1,hasHiddenNft:!1},d=k({name:"Nft",initialState:it,reducers:{setHasHiddenNft(t,{payload:e}){t.hasHiddenNft=e},setNftFilterChian(t,{payload:e}){t.nftFilterChain=e.list},setNftListCatch(t,{payload:{list:e}}){t.nftListCatch=e},setComputedNftCurrency(t,{payload:{computedNftCurrency:e}}){t.computedNftCurrency=e},setNftFilterInfo(t,{payload:e}){t.nftFilterInfo=e},setFirstSet(t,{payload:e}){t.firstSet=e},setActiveId(t,{payload:{id:e}}){t.activeId=e},setNftListData(t,{payload:{nftListData:e,walletId:r}}){t.nftListData[r]=e},setNftListLoading(t,{payload:e}){t.listLoading=e},setNftListLoadingError(t,{payload:e}){t.listLoadingError=e},setNftFilterStatus(t,{payload:{nftFilterStatus:e}}){t.nftFilterStatus=e},setNftCollectionLoadingStatus(t,{payload:{nftCollectionLoadingStatus:e}}){t.nftCollectionLoadingStatus=e},updateNftData(t,{payload:{newData:e={},walletId:r,id:o}}){t.nftListData?.[r]||(t.nftListData[r]={list:[],total:0});let a=t.nftListData[r],i=a.list.findIndex(p=>p.id===o);i!==-1?a.list[i]={id:o,...a.list[i]??{},...e}:(a.list.push({id:o,...e}),a.total+=1)},removeNftData:(t,{payload:{walletId:e,id:r}})=>{if(t.nftListData[e]){let o=t.nftListData[e],a=o.list.findIndex(i=>i.id===r);a!==-1&&(o.list.splice(a,1),o.total-=1)}}}}),Wt=t=>t[d.name].hasHiddenNft;var A=(0,F.createSelector)(t=>t[d.name].nftListData,t=>x(t),(t,e)=>t[e]??w),Yt=(0,F.createSelector)(t=>t[d.name].listLoading,A,(t,e)=>e===w?!0:t),qt=(0,F.createSelector)(t=>t[d.name].listLoadingError,A,(t,e)=>e===w?!1:t),Gt=t=>t[d.name].nftFilterInfo;var Qt=t=>t[d.name].activeId;var zt=d.reducer,{actions:c}=d,J=t=>({...t,lastPrice:l(t.lastPrice),bestOfferPrice:l(t.bestOffer),salePrice:l(t.sale),floorPrice:l(t.floorPriceDetail)}),Jt=c.setHasHiddenNft,Zt=c.updateNftData,Xt=c.removeNftData,$t=c.setNftFilterInfo,te=c.setNftListData;function ee(t){return async(e,r)=>{let o=r(),a=x(o),{list:i}=A(o),p=q(a),{currentNetworkUniqueId:m=""}=U(o),N={projects:"",chainIds:m,pageNo:1,pageSize:D,saleStatus:"",...p},g=Object.assign(N,t);e(c.setNftListLoading(!0));let L=await Q(Object.assign(N,t)),C=i.map(f=>J(f)),h=[];g.pageNo>1&&h.push(...C),L.error?e(c.setNftListLoadingError(!0)):(e(c.setNftListLoadingError(!1)),h.push(...L.list.map(f=>J(f)))),e(c.setNftListData({nftListData:{list:h,total:L.total,pageNo:g.pageNo,pageSize:g.pageSize},walletId:a})),e(c.setNftListLoading(!1))}}function re(t){return t.metamask.preferences.showNftAmount}async function oe(t){let e=await z(t);return e?(e.lastPrice&&(e.lastPrice=l(e?.lastPrice)),e.salePrice&&(e.salePrice=l(e?.salePrice)),e.bestOfferPrice&&(e.bestOfferPrice=l(e?.bestOfferPrice)),e.floorPriceDetail&&(e.floorPriceDetail=l(e?.floorPriceDetail)),e):{}}export{W as a,P as b,u as c,T as d,Y as e,ot as f,ht as g,at as h,Wt as i,A as j,Yt as k,qt as l,Gt as m,Qt as n,zt as o,c as p,Jt as q,Zt as r,Xt as s,$t as t,te as u,ee as v,re as w,oe as x};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-VVCHQHKB.js.map