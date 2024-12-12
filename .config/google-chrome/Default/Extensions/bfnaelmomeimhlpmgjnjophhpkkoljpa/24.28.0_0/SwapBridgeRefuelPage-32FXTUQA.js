import{a as h,b as s,d as f,e as R}from"./chunk-7ZFVAV4G.js";import{H as w,Ma as P}from"./chunk-FADT747G.js";import"./chunk-LTPMKRAS.js";import"./chunk-3JF2QXJE.js";import"./chunk-OLW3L37F.js";import"./chunk-CCUXU2GU.js";import"./chunk-PTZJLI7L.js";import"./chunk-QHN65AEO.js";import"./chunk-KS7RCTZG.js";import"./chunk-QEXGR5WT.js";import"./chunk-L4RFQ6RY.js";import"./chunk-SHAEZV7V.js";import"./chunk-S24UABH5.js";import"./chunk-ZE6HXUUA.js";import"./chunk-X3ESGVCB.js";import"./chunk-5UZO3TVF.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-TSP4CJ7O.js";import"./chunk-CCQRCL2K.js";import"./chunk-ERPPDNZG.js";import"./chunk-INIFY56O.js";import"./chunk-IVMV7P4T.js";import"./chunk-T6LDDI5K.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-J6Y2BR3C.js";import"./chunk-B745CFYO.js";import"./chunk-AWKYXRT4.js";import"./chunk-H3FFS4GT.js";import"./chunk-GTBW7SFI.js";import"./chunk-TIFZOZS6.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j as a}from"./chunk-OKP6DFCI.js";import{Aa as C,o as r,rb as u}from"./chunk-WIQ4WVKX.js";import{sa as x}from"./chunk-CZNVQ2ZN.js";import"./chunk-GBDVRVXI.js";import"./chunk-UCBZOSRF.js";import"./chunk-NV3TFZ4C.js";import"./chunk-B226KCTA.js";import"./chunk-GJU3JL4E.js";import"./chunk-QTIYKADD.js";import"./chunk-XFLX2RRO.js";import"./chunk-BCLUZY4R.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-PFT3L2T6.js";import"./chunk-LVTCV2WT.js";import"./chunk-WFPABEAU.js";import"./chunk-775LAOS6.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-HLHJEFRF.js";import"./chunk-S37W3WO2.js";import"./chunk-6ZVJZYTQ.js";import"./chunk-DFKC7QAI.js";import{m as c}from"./chunk-56SJOU6P.js";import"./chunk-CBSQD5B4.js";import"./chunk-N7UFQNLW.js";import"./chunk-VNNHZNYI.js";import"./chunk-4P36KWOF.js";import{a as I}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as v,h as b,n as B}from"./chunk-3KENBVE7.js";b();B();var e=v(I());var V=r.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`,H=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`,T=r(u).attrs({size:28,lineHeight:32,weight:600,color:"#fff"})`
  margin: 12px 0 4px;
`,k=r(u).attrs({size:16,lineHeight:18,weight:400,color:"#999"})`
  padding: 0 20px;
`,L=r.div`
  margin-bottom: 10px;
`,D=()=>{let{handleHideModalVisibility:i}=P(),{setRefuelEnabled:d,...n}=x(),t=(0,e.useCallback)(()=>{i("bridgeRefuel")},[i]),p=(0,e.useCallback)(l=>{d(l),t()},[t,d]);return{...n,enableRefuel:p,hideBridgeRefuel:t}},E=e.default.memo(({symbol:i,balance:d,refuelAmount:n,uiRefuelAmount:t,estimatedCost:p,refuelEnabled:l,enableRefuel:m,hideBridgeRefuel:y,isFetchingQuote:g})=>{let{t:o}=c();return e.default.createElement(V,null,e.default.createElement(L,null,e.default.createElement(H,null,e.default.createElement(w,{leftButton:{type:"close",onClick:y}},o("bridgeRefuelTitle")),e.default.createElement(C,null),e.default.createElement(T,null,o("bridgeRefuelEnable")),e.default.createElement(k,null,o("bridgeRefuelDescription"))),e.default.createElement(h,{roundedTop:!0,roundedBottom:!0},e.default.createElement(s,{label:o("bridgeRefuelLabelBalance",{symbol:i})},e.default.createElement(f,{color:"#EB3742"},d)),e.default.createElement(s,{label:o("bridgeRefuelLabelReceive"),isLoading:g},e.default.createElement(f,{color:l&&n?"#21E56F":void 0},l&&n?t:"-")),e.default.createElement(s,{label:o("bridgeRefuelLabelFee"),isLoading:g},e.default.createElement(f,null,l&&n?p:"")))),e.default.createElement("div",null,e.default.createElement(a,{theme:"default",onClick:()=>m(!1)},o("bridgeRefuelDismiss")),e.default.createElement(R,{gap:10}),e.default.createElement(a,{theme:"primary",onClick:()=>m(!0)},o("bridgeRefuelEnable"))))}),S=()=>{let i=D();return e.default.createElement(E,{...i})},U=S;export{S as SwapBridgeRefuelPage,U as default};
//# sourceMappingURL=SwapBridgeRefuelPage-32FXTUQA.js.map