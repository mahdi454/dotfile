import{a as ft}from"./chunk-HOITYUNE.js";import{a as dt}from"./chunk-6IVHTBSR.js";import{b as lt}from"./chunk-C77TCOTM.js";import{a as I,b as ct}from"./chunk-KA5VAELR.js";import{b as _t}from"./chunk-A3B5II6P.js";import"./chunk-XZ6AHFH2.js";import"./chunk-DUWPYFAS.js";import{a as k}from"./chunk-DUKP4BLI.js";import{q as b}from"./chunk-FZCNSMLW.js";import"./chunk-WANYNTD6.js";import"./chunk-QMGTBJAL.js";import{o as Bt}from"./chunk-KCWFMCND.js";import{fa as mt,w as Et}from"./chunk-3TDWET6C.js";import"./chunk-EBR3PGFZ.js";import"./chunk-UDGUBKMO.js";import{a as wt}from"./chunk-VPGNJAK6.js";import"./chunk-W6Q44ZHW.js";import"./chunk-3HS6AHPS.js";import"./chunk-WSUAESF2.js";import"./chunk-O2FUKKO3.js";import{g as ut}from"./chunk-TW63K7CB.js";import{c as v}from"./chunk-FDCWN4NG.js";import"./chunk-5YGMD6KK.js";import{$ as W,V as K,X as R,Y,Ya as st,Z as H,_ as z,aa as G,ea as X,fa as Z,gc as at,ia as j,ja as J,ka as Q,la as V,ma as $,mb as it,mc as It,n as U,na as tt,oa as rt,pa as et,qa as ot,va as nt,wb as vt,y as St}from"./chunk-O3CM75EN.js";import"./chunk-ZGRAPBBU.js";import{c as pt}from"./chunk-J3CEQI22.js";import"./chunk-VFHYER2K.js";import{L as F,w as f}from"./chunk-KJIO572I.js";import"./chunk-HJXNXGYU.js";import"./chunk-77ECUYXV.js";import"./chunk-4BZBCAHV.js";import{T as B,c as Ot,ca as C}from"./chunk-KALFZBR5.js";import{a as At}from"./chunk-V55FEIYE.js";import{a as S}from"./chunk-EAZTJZU7.js";import"./chunk-VOT7VHG3.js";import"./chunk-SYQUJKIR.js";import"./chunk-WPMHLM7C.js";import"./chunk-P7DU4NJA.js";import"./chunk-KW7JYBDS.js";import"./chunk-224G4QSH.js";import{f as m,m as e,o}from"./chunk-ZCHLW7CF.js";e();o();var r=m(S()),T=m(Et()),Nt=m(wt());It();St();e();o();var d=m(S()),q=m(Ot()),A=m(At());F();e();o();var c={"retina-border-basic":"_retina-border-basic_s26y9_1",retinaBorderBasic:"_retina-border-basic_s26y9_1",root:"_root_s26y9_29",title:"_title_s26y9_70",arrow:"_arrow_s26y9_76",prev:"_prev_s26y9_79",notShow:"_notShow_s26y9_82",icon:"_icon_s26y9_85"};var Tt=t=>{let{handleChangeTx:i,editIdx:s,unapprovedRequestsCount:u}=t;return u<=1?null:d.default.createElement("div",{className:c.root},d.default.createElement("div",{className:(0,q.default)(c.arrow,c.prev,{[c.notShow]:s===0}),onClick:()=>{i(-1)}},d.default.createElement(B,{className:"okx-wallet-plugin-arrow-small-right"})),d.default.createElement("div",{className:c.title},f("wallet_transaction_confirm_subtitle_pending_orders_number",{index:s+1,total:u})),d.default.createElement("div",{className:(0,q.default)(c.arrow,{[c.notShow]:s===u-1}),onClick:()=>{i(1)}},d.default.createElement(B,{className:"okx-wallet-plugin-arrow-small-right"})))};Tt.propTypes={editIdx:A.default.number.isRequired,unapprovedRequestsCount:A.default.number.isRequired,handleChangeTx:A.default.func.isRequired};var ht=Tt;e();o();var a=m(S()),gt=m(Bt());F();e();o();var n=m(S());e();o();vt();st();var bt=(t={})=>it({...t,factionType:nt}),Ct=()=>bt().map(t=>t.chain);st();var kt=(0,n.lazy)(()=>import("./Solana-2XL2L6JM.js")),qt=(0,n.lazy)(()=>import("./Ethereum-SSBEEDHT.js")),Lt=(0,n.lazy)(()=>import("./Aptos-UE64PWYR.js")),Mt=(0,n.lazy)(()=>import("./Tron-TH23D7T6.js")),L=(0,n.lazy)(()=>import("./Cosmos-A4OTH6GP.js")),E=(0,n.lazy)(()=>import("./Bitcoin-J4RHATXD.js")),Dt=(0,n.lazy)(()=>import("./Sui-KONP4J4J.js")),Pt=(0,n.lazy)(()=>import("./Stacks-EMWRP7MU.js")),Ft=(0,n.lazy)(()=>import("./Starknet-MRFGN3H6.js")),Ut=(0,n.lazy)(()=>import("./Cardano-OJMYDTY7.js")),Kt=(0,n.lazy)(()=>import("./NostrAssets-EX6GFAFS.js")),Rt=(0,n.lazy)(()=>import("./Kaspa-UNFYWCSP.js")),Yt=(0,n.lazy)(()=>import("./Near-F3TLXPYE.js")),Ht=(0,n.lazy)(()=>import("./Wax-HD3BH32K.js")),zt=(0,n.lazy)(()=>import("./Ton-6OOY75AK.js")),w=t=>{switch(t){case W:return kt;case K:return qt;case G:return Mt;case X:return L;case Z:return L;case R:return E;case Y:return E;case H:return E;case z:return E;case j:return Dt;case J:return Pt;case V:return Ft;case $:return Ut;case tt:return Kt;case rt:return Rt;case et:return Yt;case Q:return Ht;case ot:return zt;default:break}return Ct()?.includes(t)?Lt:dt({baseChain:t}).length>0?L:null};e();o();var _={root:"_root_1ma06_1",main:"_main_1ma06_7",image:"_image_1ma06_14",title:"_title_1ma06_18",desc:"_desc_1ma06_27",footer:"_footer_1ma06_33"};var Wt=({unapprovedRequests:t})=>{let[i,s]=(0,a.useState)(!1),u=ft(),g=ut({light:"/cdn/assets/imgs/2411/6DA80C3D6619D5EE.png",dark:"/cdn/assets/imgs/2411/5F3386C93FF597CD.png"}),x=(0,gt.useMemoizedFn)(async()=>{try{s(!0);for(let p=0;p<t.length;p++){let{localType:N,id:h}=t[p];w(N)||await u({id:h})}}catch{}finally{s(!1)}});return a.default.createElement(v.Container,{className:_.root},a.default.createElement(v.Box,{className:_.main},a.default.createElement(pt,{src:g,className:_.image}),a.default.createElement(b.Text,{className:_.title},f("wallet_extension_function_dialog_title_network_deactive")),a.default.createElement(b.Text,{className:_.desc},f("wallet_extension_function_dialog_desc_network_remove"))),a.default.createElement(v.Box,{className:_.footer},a.default.createElement(C,{block:!0,loading:i,size:C.SIZE.lg,onClick:x,type:C.TYPE.highlight,category:C.CATEGORY.fill},f("wallet_extension_function_dialog_btn_cancel_transaction"))))},xt=Wt;e();o();var M={root:"_root_1wel2_1",content:"_content_1wel2_7"};var Gt=()=>(0,T.useSelector)(mt,(t,i)=>t?.length&&t?.length===i?.length),Xt=()=>{let t=(0,Nt.useHistory)(),i=Gt(),s=i.length,u=(0,T.useSelector)(_t),g=(0,T.useSelector)(ct),x=(0,T.useDispatch)();(0,r.useEffect)(()=>{if(s===0&&!u){if(at()===U){x(lt());return}t.push(k)}},[s,t,u,x]),(0,r.useEffect)(()=>{[I.transaction,I.addToken,I.addChain].includes(g)||t.push(k)},[g]);let[p,N]=(0,r.useState)(0),h=i[p];(0,r.useEffect)(()=>{N(0)},[s]);let D=(0,r.useCallback)(O=>{let y=p+O;i[y]&&N(y)},[p,i]),yt=()=>{if(!h)return null;let{localType:O,id:y}=h,P=w(O);return P?r.default.createElement(r.default.Fragment,null,r.default.createElement(P,{unapproved:h,key:y,unapprovedRequestsCount:s})):r.default.createElement(xt,{unapprovedRequests:i})};return s===0?null:r.default.createElement("div",{className:M.root},r.default.createElement(ht,{unapprovedRequestsCount:s,editIdx:p,handleChangeTx:D}),r.default.createElement("div",{className:M.content},yt()))},Vr=(0,r.memo)(Xt);export{Vr as default,Gt as useUnapprovedRequests};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=DappEntry-75FSTKAA.js.map