import{a as J}from"./chunk-347XZQLI.js";import"./chunk-GK4TGBIT.js";import"./chunk-PUJH7423.js";import{b as B,g as M,k as _,m as Y,n as q}from"./chunk-LTPMKRAS.js";import{a as G}from"./chunk-3JF2QXJE.js";import{d as K,e as N,j}from"./chunk-OLW3L37F.js";import{a as O}from"./chunk-QHN65AEO.js";import"./chunk-QEXGR5WT.js";import{a as y,b as g,e as Q}from"./chunk-L4RFQ6RY.js";import"./chunk-S24UABH5.js";import"./chunk-X3ESGVCB.js";import{g as z}from"./chunk-DERIAD33.js";import{h as U}from"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import"./chunk-ERPPDNZG.js";import{a as D}from"./chunk-IVMV7P4T.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import{D as H}from"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import{j as W}from"./chunk-OKP6DFCI.js";import{o as a,rb as u}from"./chunk-WIQ4WVKX.js";import{m as F,p as L,v as P,y as E}from"./chunk-GBDVRVXI.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import{Ib as I}from"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import{Lb as x}from"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as c}from"./chunk-56SJOU6P.js";import{$ as b,W as T,w as S}from"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import{ba as k}from"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as et}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as tt,h as C,n as V}from"./chunk-3KENBVE7.js";C();V();var t=tt(et());var ot=o=>{let{t:n}=c(),{connection:r}=I(),e=P(r),{results:l=[],dataUpdatedAt:m}=e,i=N(),{data:d=null,isFetched:p}=j(),s=k.isFeatureEnabled("kill-phantom-validator"),f=(0,t.useMemo)(()=>{let A=l.map(h=>({...h,totalApy:d?F(d,h?.commission):null})),w=i.data??[];if(w.length===0)return A;let v=A.sort(L(w));return s?v.filter(h=>h.identityPubkey!==E.identityPublicKey):v},[l,i.data,d,s]),Z=(0,t.useCallback)(()=>{e.isError&&!e.isFetching&&e.refetch(),i.isError&&!i.isFetching&&i.refetch()},[i,e]),$=!e.isFetched||!p||!i.isFetched,R=e.isError||i.isError;return t.default.createElement(q,{isLoading:$},R?t.default.createElement(B,{title:n("errorAndOfflineSomethingWentWrong"),description:n("validatorListErrorFetching"),refetch:Z}):e.isSuccess&&f.length?t.default.createElement(rt,{data:f,updatedAt:m,showApy:d!==null}):t.default.createElement(nt,null),t.default.createElement(D,null,t.default.createElement(W,{onClick:o.onClose},n("commandCancel"))))},Kt=ot,nt=()=>{let{t:o}=c();return t.default.createElement(u,{size:16,color:"#777777"},o("validatorListNoResults"))},it=84,rt=o=>{let{t:n}=c(),{data:r,showApy:e}=o,[l,m]=(0,t.useState)(""),i=(0,t.useMemo)(()=>st(r),[r]),d=l?i.search(l).map(s=>s.item):r,p=(0,t.useRef)();return(0,t.useEffect)(()=>{setTimeout(()=>p.current?.focus(),200)},[]),t.default.createElement(lt,null,t.default.createElement(dt,null,t.default.createElement(z,{ref:p,tabIndex:0,placeholder:n("commandSearch"),onChange:s=>m(s.currentTarget.value),maxLength:50})),t.default.createElement(ct,{showApy:e}),t.default.createElement(_,null,t.default.createElement(H,null,({height:s,width:f})=>t.default.createElement(M,{height:s,itemCount:d.length,itemData:d,itemSize:it,width:f},at))))},at=({index:o,style:n,data:r})=>{let e=r[o];return t.default.createElement("div",{key:e.identityPubkey,style:n},t.default.createElement(ut,{voteAccountPubkey:e.voteAccountPubkey,formattedPercentValue:e.totalApy?b(e.totalApy/100,"0.00%"):"",activatedStake:e.activatedStake,name:e.info?.name,keybaseUsername:e.info?.keybaseUsername,iconUrl:e.info?.iconUrl}))},st=o=>new T(o,{location:0,distance:50,threshold:.2,shouldSort:!0,keys:[{name:"info.name",weight:.5},{name:"info.keybaseUsername",weight:.3},{name:"info.website",weight:.1},{name:"voteAccountPubkey",weight:.1},{name:"identityPubkey",weight:.1}]}),lt=a.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,dt=a.div`
  position: relative;
`,mt=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,X=a(Q).attrs(()=>({iconSize:12,lineHeight:19,fontWeight:500,fontSize:16}))``,ct=({showApy:o})=>{let{t:n}=c();return t.default.createElement(mt,null,t.default.createElement(X,{tooltipAlignment:"bottomLeft",info:t.default.createElement(g,null,t.default.createElement(y,null,n("validatorInfoDescription")))},n("validatorInfoTooltip")),o?t.default.createElement(X,{tooltipAlignment:"bottomRight",info:t.default.createElement(g,null,t.default.createElement(y,null,n("validatorApyInfoDescription")))},n("validatorApyInfoTooltip")):null)},ut=o=>{let{pushDetailView:n,popDetailView:r}=U(),e=(0,t.useRef)(null),{data:l}=K(o.keybaseUsername),m=o.name??o.keybaseUsername??x(o.voteAccountPubkey);return t.default.createElement(pt,{ref:e,onClick:()=>{n(t.default.createElement(J,{voteAccountPubkey:o.voteAccountPubkey,onClose:r}))}},t.default.createElement(ft,{iconUrl:o.iconUrl??l}),t.default.createElement(ht,null,t.default.createElement(yt,null,t.default.createElement(u,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},S(m,20)),t.default.createElement(u,{size:14,color:"#777777",lineHeight:19,textAlign:"left",noWrap:!0},t.default.createElement(G,{format:"0,0"},o.activatedStake))),t.default.createElement(u,{size:14,weight:400,lineHeight:19,textAlign:"left",noWrap:!0},o.formattedPercentValue)))},pt=a(Y)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,ft=a(O).attrs({width:44})``,ht=a.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
`,yt=a.div`
  display: flex;
  flex-direction: column;
`;export{ot as ValidatorListPage,Kt as default};
//# sourceMappingURL=ValidatorListPage-GZANXEZR.js.map