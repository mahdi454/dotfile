import{a as Te}from"./chunk-3WBTVAEI.js";import{a as ke}from"./chunk-L7LFNDLE.js";import{a as Ce,c as W,d as U}from"./chunk-UBFVE3Q4.js";import{b as Se,c as O,d as z,e as Ue,f as De,g as Pe,h as Le,i as $e,j as Ae,k as Be,l as A,m as j,n as G,o as ze,p as K,q as ne,r as Re,s as We,t as Me,u as Ze}from"./chunk-M4YCAMAJ.js";import{A as Ee}from"./chunk-UXLFUD7T.js";import"./chunk-2HEOW3XO.js";import{a as be}from"./chunk-DLRFA5AU.js";import"./chunk-OC3IFNJW.js";import{b as ie}from"./chunk-UI7PAU35.js";import"./chunk-Y6SGFHFT.js";import"./chunk-V4NJDTLC.js";import"./chunk-OFKAKQXT.js";import"./chunk-IQUFOLSA.js";import"./chunk-KA5XDNKC.js";import"./chunk-HXUMX2S7.js";import{a as Ne}from"./chunk-PAER4Z2U.js";import{a as Ie}from"./chunk-M2F2X65U.js";import"./chunk-ZYEEMVIP.js";import"./chunk-BOOOUD52.js";import"./chunk-TBLUUKKO.js";import{R as ye,a as ve,va as xe}from"./chunk-S5DGV5WL.js";import{b as oe}from"./chunk-AOXUSYRH.js";import"./chunk-WKBC6JL3.js";import"./chunk-3EO5SKIF.js";import"./chunk-LMIOM5QK.js";import{X as we}from"./chunk-VPDRXROE.js";import{w as $}from"./chunk-JLIPSIRU.js";import"./chunk-CIDV5VJQ.js";import{a as fe}from"./chunk-VX55KNI4.js";import"./chunk-4TYAYDA2.js";import"./chunk-LDX3S2CG.js";import"./chunk-TS5DNQFS.js";import"./chunk-656GFN7J.js";import"./chunk-VGT27A4M.js";import"./chunk-R4G6BEPF.js";import"./chunk-S3MY46XE.js";import"./chunk-2333N6PK.js";import"./chunk-AYCAVTPT.js";import"./chunk-OG46YTNN.js";import"./chunk-RXNDJ7P3.js";import"./chunk-YM7II27E.js";import{a as _e,b as pr}from"./chunk-CYOQISC6.js";import{c as ue,e as he,h as ge}from"./chunk-TKYTZF2K.js";import"./chunk-RY27BWZR.js";import"./chunk-WIWWLEBZ.js";import{Bc as ce,Kc as lr,Qb as me,Ub as ar,Yb as H,Zb as pe}from"./chunk-YT2MPR4E.js";import"./chunk-R4ZXRZL6.js";import{A as te,b as re,q as y}from"./chunk-LDKM7IQF.js";import"./chunk-6O63U2D6.js";import{M as L,x as t}from"./chunk-RIOWPXBZ.js";import"./chunk-BAWLRI3I.js";import"./chunk-USKTQDCY.js";import"./chunk-B2L2MSSC.js";import"./chunk-OIIWKMG6.js";import{T as de,Z as C,c as mr,ca as T}from"./chunk-OSCGYMLH.js";import"./chunk-ADWO6K2C.js";import{a as P}from"./chunk-O337TVCZ.js";import"./chunk-2T657SRL.js";import"./chunk-QJAZEJHH.js";import"./chunk-LCKQ7YKT.js";import"./chunk-ZVYHIM2Y.js";import"./chunk-VBARKITZ.js";import"./chunk-NCANHNXF.js";import{c as sr,f as v,m as u,n as E,o as h}from"./chunk-GLD6H5Q5.js";var se=sr((wr,Fe)=>{u();h();(function(o){"use strict";o.exports.is_uri=c,o.exports.is_http_uri=r,o.exports.is_https_uri=i,o.exports.is_web_uri=w,o.exports.isUri=c,o.exports.isHttpUri=r,o.exports.isHttpsUri=i,o.exports.isWebUri=w;var s=function(a){var e=a.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);return e};function c(a){if(!!a&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(a)&&!/%[^0-9a-f]/i.test(a)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(a)){var e=[],n="",f="",l="",_="",d="",p="";if(e=s(a),n=e[1],f=e[2],l=e[3],_=e[4],d=e[5],!!(n&&n.length&&l.length>=0)){if(f&&f.length){if(!(l.length===0||/^\//.test(l)))return}else if(/^\/\//.test(l))return;if(!!/^[a-z][a-z0-9\+\-\.]*$/.test(n.toLowerCase()))return p+=n+":",f&&f.length&&(p+="//"+f),p+=l,_&&_.length&&(p+="?"+_),d&&d.length&&(p+="#"+d),p}}}function r(a,e){if(!!c(a)){var n=[],f="",l="",_="",d="",p="",b="",m="";if(n=s(a),f=n[1],l=n[2],_=n[3],p=n[4],b=n[5],!!f){if(e){if(f.toLowerCase()!="https")return}else if(f.toLowerCase()!="http")return;if(!!l)return/:(\d+)$/.test(l)&&(d=l.match(/:(\d+)$/)[0],l=l.replace(/:\d+$/,"")),m+=f+":",m+="//"+l,d&&(m+=d),m+=_,p&&p.length&&(m+="?"+p),b&&b.length&&(m+="#"+b),m}}}function i(a){return r(a,!0)}function w(a){return r(a)||i(a)}})(Fe)});u();h();var g=v(P()),rr=v($()),tr=v(fe()),or=v(we()),ir=v(mr());L();u();h();var M=v(P()),V=v($());L();var qe=(0,M.memo)(o=>{let{disabled:s}=o,c=(0,V.useDispatch)(),r=({target:{value:n}})=>{c($e(n))},{name:i,nameErr:w}=(0,V.useSelector)(Se),a=()=>{c(Ae(t(i?"":"developer_mode_network_errortip_cannotspace")))},e=t("extension_wallet_addnetwork_placeholder_network");return M.default.createElement("div",{className:"net-form__wrap-input"},M.default.createElement(y,{value:i,onBlur:a,disabled:s,size:y.SIZE.xl,errorType:y.TIP_TYPE.always,error:w,onChange:r,placeholder:e,label:t("wallet_transaction_history_subtitle_network_name")}))});u();h();var B=v(P()),Z=v($()),He=v(se());L();u();h();u();h();ge();async function Ye(o,s,c=[]){let r=o,i={"Content-Type":"application/json"},{origin:w,pathname:a,username:e,password:n,search:f}=new URL(o);if(e&&n){let p=E.Buffer.from(`${e}:${n}`).toString("base64");i.Authorization=`Basic ${p}`,r=`${w}${a}${f}`}let{data:l}=await he(r,{id:Date.now().toString(),jsonrpc:"2.0",method:s,params:c},{timeout:3e4,cache:"default",headers:i});if(!l||Array.isArray(l)||typeof l!="object")throw new Error(`RPC endpoint ${o} returned non-object response.`);let{error:_,result:d}=l;if(_)throw new Error(_?.message||_);return d}var Q=o=>{try{let s=new URL(o);return s.protocol==="http:"||s.protocol==="https:"}catch{return!1}},X=((o={})=>s=>new Promise((c,r)=>o[s]?c(o[s]):Ye(s,"eth_chainId").then(i=>{o[s]=i,c(i)}).catch(i=>{r(i)})))();var Oe=B.default.memo(o=>{let{disabled:s,modify:c}=o,r=(0,Z.useDispatch)(),[i,w]=(0,B.useState)(!1),a=({target:{value:p}})=>{r(Be(p.trim()))},{rpcUrl:e,rpcUrlErr:n}=(0,Z.useSelector)(O),{rpcNetworks:f}=U(),{chainId:l}=(0,Z.useSelector)(z),_=()=>{if(!e)return r(A(t("developer_mode_network_errortip_cannotspace")));if(!Q(e))return r(A(t("developer_mode_infor_errortip_https")));if(!He.default.isWebUri(e))return r(A(t("developer_mode_infor_errortip_rpcurl")));let b=f.find(m=>m.rpcUrl===e);return b&&!c?r(A(t("developer_mode_infor_errortip_used_network",{network:b.name}))):(w(!0),X(e).then(m=>{try{m=parseInt(m,16).toString(10),c?m!==l&&r(G({err:t("developer_mode_infor_errortip_chainid",{chainID:m}),validChainId:l})):r(j(m))}catch{}w(!1),r(A(""))}).catch(()=>{r(A(t("developer_mode_infor_errortip_rpcurl"))),w(!1)}))},d=t("extension_wallet_addnetwork_placeholder_prcurl");return B.default.createElement("div",{className:"net-form__wrap-input"},B.default.createElement(y,{value:e,onBlur:_,disabled:s,size:y.SIZE.xl,errorType:y.TIP_TYPE.always,error:n,onChange:a,placeholder:d,label:t("developer_mode_network_title_rpcurl"),suffix:i&&B.default.createElement(C.Circle,{size:C.SIZE.sm})}))});u();h();var D=v(P()),q=v($()),je=v(we());L();pr();ge();var cr=async o=>{let{data:s}=await ue(_e.getRpcNetworkByChainId,{chainIds:[o]});return s?.[0]?.nativeCurrency?.symbol},Ge=D.default.memo(o=>{let{disabled:s,modify:c}=o,r=(0,q.useDispatch)(),i=({target:{value:m}})=>{r(K(m.trim()))},{symbol:w,symbolErr:a,symbolTip:e}=(0,q.useSelector)(Ue),[n,f]=(0,D.useState)(!1),{chainId:l}=(0,q.useSelector)(z),[_,d]=(0,D.useState)(!0),p=()=>{let m="";if(!l){r(ne(m));return}w||(m=t("developer_mode_network_errortip_cannotspace"),r(ne(m)))};(0,je.useDebounceEffect)(()=>{(async()=>{if(!l||c)return;let m;f(!0);try{r(K("")),m=await cr(l),r(K(m))}catch{}finally{d(m),f(!1)}})()},[l],{wait:500});let b=t("extension_wallet_addnetwork_placeholder_symbol");return D.default.createElement("div",{className:"net-form__wrap-input"},D.default.createElement(y,{value:w,disabled:s||c||_,onBlur:p,size:y.SIZE.xl,errorType:y.TIP_TYPE.always,error:a,tips:e,onChange:i,suffix:n&&D.default.createElement(C.Circle,{size:C.SIZE.sm}),placeholder:b,label:t("developer_mode_network_title_tokenname")}))});u();h();var N=v(P()),F=v($());L();pe();u();h();lr();function Ke(o){return Number.isSafeInteger(o)&&o>0&&o<=ce}var Ve=N.default.memo(o=>{let{disabled:s,modify:c}=o,r=(0,F.useDispatch)(),i=({target:{value:x}})=>{r(j(x.trim()))},[w,a]=(0,N.useState)(!1),{chainId:e,chainIdErr:n,chainIdTip:f,fieldUpdated:l}=(0,F.useSelector)(z),{rpcUrl:_}=(0,F.useSelector)(O),{rpcNetworks:d}=U(),p=(x,I,k=e)=>{r(G({err:x,validChainId:k})),r(ze({tip:I,validChainId:k}))},b=()=>{let x="",I="";if(!e)return x=t("developer_mode_network_errortip_cannotspace"),p(x,I);let k=e,ae=10;if(!k.startsWith("0x"))try{k=`0x${H(k)}`}catch{x=t("developer_mode_infor_errortip_errorchainid")}let[le]=d.filter(S=>S.chainId===k&&S.rpcUrl!==_);if(le?I=t("developer_mode_infor_errortip_network",{network:le.name}):e.startsWith("0x")?(ae=16,/^0x[0-9a-f]+$/iu.test(e)||(x=t("developer_mode_infor_errortip_errornum"))):/^[0-9]+$/u.test(e)?e.startsWith("0")?x=t("developer_mode_infor_errortip_errornum"):Ke(parseInt(e,ae))||(x=t("developer_mode_infor_errortip_errorchainid")):x=t("developer_mode_infor_errortip_errornum"),!_||w||x)return p(x,I);a(!0),X(_).then(S=>{if(k!==S){if(!e.startsWith("0x"))try{S=parseInt(S,16).toString(10)}catch(nr){console.log(nr)}x=t("developer_mode_infor_errortip_chainid",{chainID:S})}p(x,I,e),a(!1)}).catch(()=>{I=t("developer_mode_infor_errortip_rpcurl_confirm"),a(!1),p(x,I,e)})},m=t("extension_wallet_addnetwork_placeholder_chainid");return N.default.createElement("div",{className:"net-form__wrap-input"},N.default.createElement(y,{value:e,disabled:s||!!c,size:y.SIZE.xl,errorType:y.TIP_TYPE.always,error:n,onBlur:b,tips:f,onChange:i,suffix:w&&l&&N.default.createElement(C.Circle,{size:C.SIZE.sm}),placeholder:m,label:N.default.createElement(N.default.Fragment,null,t("developer_mode_network_title_chainid"),N.default.createElement(te,{title:t("developer_mode_network_tooltip_display_decimal"),placement:te.DIRECTION.topRight},N.default.createElement(de,{className:"okx-wallet-plugin-information-circle"})))}))});u();h();var R=v(P()),Y=v($()),Qe=v(fe());L();pe();u();h();var Xe=o=>{let{modify:s,uniqueId:c,onDeleteNet:r}=o,i=(0,Qe.useHistory)(),w=(0,Y.useSelector)(Le),a=Ee(),{rpcNetworks:e,updateRpcNetwork:n,addRpcNetwork:f}=U(),{extensionConfig:l,setExtensionConfig:_}=be("rpc_info"),d=(0,Y.useDispatch)(),p=(0,Y.useSelector)(Pe),b=e.find(I=>W(I,{uniqueId:c}))||{},m=(0,R.useRef)(!1),x=async()=>{if(!m.current){if(m.current=!0,s){let I=await n({...b,...p});W(I,l)&&await _(I);let k={...p,chainId:`0x${H(p.chainId)}`};a(k),i.replace(`${ye}?tab=2`)}else{let I=await f(p);await d(ie("isRpcMode",!0)),await d(ie("currentNetworkUniqueId",I?.uniqueId)),await _(I),i.replace(xe)}m.current=!1}};return R.default.createElement(Ie.FooterActions,{usePortal:!0},s&&R.default.createElement(T,{category:T.CATEGORY.outline,type:T.TYPE.primary,size:T.SIZE.lg,onClick:r,className:"net-form__footer-delete-btn",contentClassName:"net-form__footer-delete-btn__text"},t("commonall_resultpage_btn_delete")),R.default.createElement(T,{disabled:w,category:T.CATEGORY.fill,type:T.TYPE.highlight,size:T.SIZE.lg,onClick:x},t("developer_mode_bot_btn_save")))};u();h();var J=v(P()),ee=v($()),Je=v(se());L();var er=J.default.memo(o=>{let{disabled:s}=o,c=(0,ee.useDispatch)(),r=({target:{value:n}})=>{c(Re(n.trim()))},{explorerUrl:i,explorerUrlErr:w}=(0,ee.useSelector)(De),a=()=>{let n="";i&&(Je.default.isWebUri(i)||(Q(i)?n=t("developer_mode_infor_errortip_invalidurl"):n=t("developer_mode_infor_errortip_https1"))),c(We(n))},e=t("extension_wallet_addnetwork_placeholder_blockchain");return J.default.createElement("div",{className:"net-form__wrap-input"},J.default.createElement(y,{value:i,onBlur:a,disabled:s,size:y.SIZE.xl,errorType:y.TIP_TYPE.always,error:w,onChange:r,placeholder:e,label:t("developer_mode_network_title_blockchain_explorer")}))});ar();var Xt=()=>{let o=(0,rr.useDispatch)(),s=(0,tr.useHistory)(),c=ke(),r=c.get("modify"),i=r===Ce.CANT,w=decodeURIComponent(c.get("id")),{rpcNetworks:a}=U(),e=a.find(d=>W(d,{uniqueId:w}))||{};(0,g.useEffect)(()=>{let d={...e};d.chainId&&(d.chainId=`${Number.parseInt(d.chainId,16)}`),o(Me(d))},[e]),(0,or.useUnmount)(()=>{o(Ze())});let n=(0,g.useCallback)(()=>{s.action==="POP"?s.replace(ve):s.goBack()},[s]),f=Te(),l=(0,g.useCallback)(()=>{f({editRpcInfo:e,onDeleted:n})},[f,n,e]),_=(0,g.useMemo)(()=>g.default.createElement("div",{className:"net-form__title"},e.name?g.default.createElement(g.default.Fragment,null,g.default.createElement(oe,{size:oe.SIZE.md,src:e.icon,text:e.name,className:"net-form__title-icon",defaultIcon:me}),g.default.createElement("div",{className:"net-form__title-text net-form__title-text-top"},e.name)):g.default.createElement("div",{className:"net-form__title-text"},t("wallet_extension_settings_header_custom_network"))),[e]);return g.default.createElement("div",{className:(0,ir.default)("net-form",{disabled:i})},g.default.createElement(Ne,{onBack:n,closeable:!1}),i||r?null:g.default.createElement(re,{className:"net-form__warn",desc:t("developer_mode_network_errortip_trust_network"),type:re.TYPE.warn,closable:!1}),_,g.default.createElement("div",{className:"net-form__wrap"},g.default.createElement(qe,{disabled:i}),g.default.createElement(Oe,{disabled:i,modify:r}),g.default.createElement(Ve,{disabled:i,modify:r}),g.default.createElement(Ge,{disabled:i,modify:r}),g.default.createElement(er,{disabled:i}),!i&&g.default.createElement(Xe,{modify:r,uniqueId:w,onDeleteNet:l})))};export{Xt as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=Form-MMLFO3LW.js.map