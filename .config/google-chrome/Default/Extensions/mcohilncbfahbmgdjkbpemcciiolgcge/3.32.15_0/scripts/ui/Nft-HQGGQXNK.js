import{a as it}from"./chunk-BYF5Y27T.js";import{a as Te,c as he,d as _e}from"./chunk-QP2O77AN.js";import{a as ge}from"./chunk-UGA3IFLT.js";import{a as Ne}from"./chunk-AB3XUJUH.js";import{a as fe}from"./chunk-ISFMRJLT.js";import{a as me}from"./chunk-TPHTKHCZ.js";import{a as pe}from"./chunk-PTWLRD3D.js";import{b as ue}from"./chunk-XHHRGPLK.js";import"./chunk-5J7CBDXX.js";import{a as de}from"./chunk-Z4A553U5.js";import{a as st}from"./chunk-KSAOBFIR.js";import"./chunk-OJURW5TU.js";import"./chunk-OEIE6KE4.js";import{b as Qt,d as w,e as Xt,g as te,i as ee,j as oe,k as ne,l as re,m as se,n as ie,q as ae,r as le,s as ce}from"./chunk-VVCHQHKB.js";import"./chunk-N3OY7GLG.js";import{b as F}from"./chunk-3DI6NEAD.js";import"./chunk-RIWLOEHK.js";import"./chunk-ZLD5XTE5.js";import"./chunk-2VRILCVI.js";import"./chunk-IRMGOW5H.js";import"./chunk-CQ64XZTP.js";import"./chunk-UI7PAU35.js";import{a as Yt}from"./chunk-SMZ64QW3.js";import"./chunk-DQTTI4XL.js";import{a as Jt}from"./chunk-GSYNHSX4.js";import{a as Zt}from"./chunk-OFKAKQXT.js";import{h as W,i as Kt,l as zt}from"./chunk-IQUFOLSA.js";import"./chunk-KA5XDNKC.js";import{e as jt}from"./chunk-HXUMX2S7.js";import"./chunk-QKXA7YNE.js";import{a as Gt}from"./chunk-M2F2X65U.js";import"./chunk-TBLUUKKO.js";import{u as Z,v as Ut}from"./chunk-S5DGV5WL.js";import{q as xt}from"./chunk-WKBC6JL3.js";import"./chunk-3EO5SKIF.js";import"./chunk-LMIOM5QK.js";import{X as bt}from"./chunk-VPDRXROE.js";import{r as Wt,w as ht}from"./chunk-JLIPSIRU.js";import"./chunk-CIDV5VJQ.js";import{a as _t}from"./chunk-VX55KNI4.js";import"./chunk-4TYAYDA2.js";import"./chunk-LDX3S2CG.js";import"./chunk-TS5DNQFS.js";import"./chunk-656GFN7J.js";import"./chunk-VGT27A4M.js";import{d as kt,f as so}from"./chunk-R4G6BEPF.js";import"./chunk-S3MY46XE.js";import"./chunk-2333N6PK.js";import"./chunk-AYCAVTPT.js";import{g as qt}from"./chunk-OG46YTNN.js";import{c as v}from"./chunk-RXNDJ7P3.js";import"./chunk-YM7II27E.js";import{a as O,b as nt}from"./chunk-CYOQISC6.js";import{c as $t,f as M,h as rt}from"./chunk-TKYTZF2K.js";import"./chunk-RY27BWZR.js";import"./chunk-WIWWLEBZ.js";import{Ha as X,Jb as Vt,Kc as Mt,Pa as Dt,jc as U,kc as q,lc as j,tc as G,vc as Y}from"./chunk-YT2MPR4E.js";import"./chunk-R4ZXRZL6.js";import{A as z,E as V,H as yt,b as It,o as et,p as ot,y as H}from"./chunk-LDKM7IQF.js";import{ka as Rt,pa as no}from"./chunk-6O63U2D6.js";import{M as R,l as Bt,x as d}from"./chunk-RIOWPXBZ.js";import"./chunk-BAWLRI3I.js";import"./chunk-USKTQDCY.js";import"./chunk-B2L2MSSC.js";import"./chunk-OIIWKMG6.js";import{T as K,Z as S,c as tt,ca as D}from"./chunk-OSCGYMLH.js";import{a as ro}from"./chunk-ADWO6K2C.js";import{a as C}from"./chunk-O337TVCZ.js";import"./chunk-2T657SRL.js";import"./chunk-QJAZEJHH.js";import"./chunk-LCKQ7YKT.js";import"./chunk-ZVYHIM2Y.js";import"./chunk-VBARKITZ.js";import"./chunk-NCANHNXF.js";import{f as T,m as e,o}from"./chunk-GLD6H5Q5.js";e();o();var g=T(C()),Q=T(ht()),Qe=T(_t()),gt=T(tt());R();e();o();var ke=T(bt());e();o();nt();rt();var Ie=(t,n="")=>M(O.checkHasHiddenNFT,{address:t,chain:n});e();o();var io=Zt(ee,ae),ye=io;function ao(t){let{currentNetworkUniqueId:n}=de(),r=me(),[s,a]=ye(),{loading:l,runAsync:i,run:f}=(0,ke.useRequest)(()=>{let u=r(n).join(",");return u?Ie(u,`${n}`).then(p=>{let c=!!p?.data?.ownedHiddenNft;return a(c),c}).catch(()=>(a(!1),!1)):(a(!1),Promise.resolve(!1))},{manual:t?.manual??!0,refreshDeps:[n],onSuccess:u=>{t?.onChecked?.(u)},onError:()=>{}});return{hasHiddenNFT:s,loading:l,checkAsync:i,check:f,setHasHiddenNft:a}}var at=ao;e();o();var _=T(C()),Ue=T(_t());R();e();o();var h=T(C()),mt=T(tt());R();e();o();var x=T(C());var Ve=T(tt());e();o();var Re=T(C()),dt=T(bt());R();e();o();var xe=T(ht());function lo(){let t=W(),n=(0,xe.useDispatch)();return(r,s)=>{let{hideManualHidden:a}=Xt(t),l={id:r,walletId:t,newData:{hiddenStatus:s?w.SHOW:w.MANUAL}};n(a&&!s?ce(l):le(l))}}var be=lo;Vt();e();o();function co(t,n){return t.includes(n)}var Ce=co;e();o();var lt={SHOW:0,HIDE:1};e();o();var ct={hide:{button:"extension_wallet_filter_btn_hide",error:"extension_wallet_notif_text_hide_unsuccess",success:"extension_wallet_notif_text_hide_success"},show:{button:"extension_wallet_filter_btn_unhide",error:"extension_wallet_notif_text_unhide_unsuccess",success:"extension_wallet_notif_text_unhide_success"},transfer:"extension_wallet_filter_btn_transfer"};e();o();e();o();nt();rt();e();o();var Fe={expired:4001,illegal:4002,parsingFailed:4003};var we=t=>M(O.changeNFTVisibility,t),Ee=t=>{let n=t?.data?.addressTokenErrorMap??{};return Object.values(n).some(r=>Object.values(Fe).includes(r))};e();o();var Ct="nftToken",Ae=(t,n)=>{try{let r=localStorage.getItem(Ct)??"{}",s=JSON.parse(r);return localStorage.setItem(Ct,JSON.stringify({...s,[t]:n})),!0}catch{return!1}},Se=t=>{try{let n=localStorage.getItem(Ct);return n?(JSON.parse(n)??{})?.[t]:void 0}catch{return}};e();o();so();Vt();e();o();nt();rt();var Oe=t=>$t(O.getNFTSignData,{address:t});e();o();nt();rt();Mt();var Pe={[U]:1,[j]:2,[G]:2,[Y]:4,[q]:5},He=t=>M(O.loginNFT,t);e();o();Mt();var ve={[U]:U,[q]:q,[Y]:Y,[j]:j,[G]:G};var mo=t=>Object.values(ve).includes(t),Le=async(t,n,r)=>{let s=st(n);if(!mo(s))return;let a=await Oe(t),l=a?.data?.signData,i=a?.data?.nonce;if(!l||!i)return;let f=await kt().signMessageSilent({from:t,data:l,nonce:i},s,r);if(!f)return;let u={address:t,signature:f,algorithmCode:Pe[s]};if([X,Dt].includes(s)){let c=await kt().getPublicKey(t,s,r);u.publicKey=c}return(await He(u))?.data?.token};var Be={LOGIN_ERROR:"LOGIN_ERROR",TOKEN_ERROR:"TOKEN_ERROR"},po=async({address:t,baseCoinId:n,useNewToken:r,walletId:s})=>{let a=Se(t);if(!r&&a)return a;try{let l=await Le(t,n,s);if(!l)throw new Error(Be.LOGIN_ERROR);return Ae(t,l),l}catch{throw new Error(Be.LOGIN_ERROR)}},Ft=0,fo=3,wt=async(t,n,r=!1)=>{let{addresses:s,nftId:a,type:l,walletId:i}=n,f=[];for(let p of s){let c=await po({address:p,baseCoinId:t,useNewToken:r,walletId:i});f.push(c)}let u=s.reduce((p,c,N)=>(p[c]=f[N],p),{});try{await we({nftId:a,type:l,addressTokenMap:u}),Ft=0}catch(p){if(Ee(p)){if(Ft++,Ft>fo)throw p;await wt(t,n,!0)}else throw p}};function uo(t){let{id:n,baseCoinId:r,onSuccess:s,hiddenStatus:a}=t,l=!Ce([w.AUTO,w.MANUAL],a),i=W(),f=zt(),u=be(),{check:p}=at(),c=l?ct.hide:ct.show,N=(0,dt.useRequest)(wt,{onError:()=>{yt.error(d(c.error))},onSuccess:(I,[,{nftId:A,type:B}])=>{yt.success(d(c.success)),u(A,B===lt.SHOW),p(),s?.()},manual:!0}),k=()=>{if(N.loading)return;let I=f(i),A=st(r),B=I?.account?.[A],b=Object.values(I?.addressType?.bitcoin??{}).map(Nt=>Nt?.address).filter(Boolean);N.run(r,{addresses:A===X?b:[B],type:l?lt.HIDE:lt.SHOW,nftId:n,walletId:i})},P=d(c.button);return{key:"visibility",loading:N.loading,text:P,onClick:k,icon:l?"okx-wallet-plugin-hide":"okx-wallet-plugin-show"}}function go(t){let{ownerAddress:n,chainId:r,tokenId:s,contractAddress:a}=t,{loading:l,getNFTInfo:i}=Te({looker:n,chainId:`${r}`,tokenId:`${s}`,contractAddress:a}),f=he(),u=async()=>{let c=await i();if(!!c){if(c?.chainName==="Solana"&&c?.sale){let N=et.tip({alignBottom:!1,title:d("extension_wallet_detail_title_transfer_faild"),children:d("extension_wallet_detail_text_transfer_faild"),confirmText:d("wallet_extension_btn_general_ok"),onConfirm:()=>{N.destroy()}});return}f(c)}},p=d(ct.transfer);return{key:"transfer",loading:l,text:p,onClick:u,icon:"okx-wallet-plugin-transfer"}}function No(){let t=(0,Re.useRef)(null),n=()=>{t.current?.setVisible(!1)};return(0,dt.useEventListener)("scroll",n,{target:document.getElementById(Ne)}),{popupRef:t,closePopup:n}}function To(t){let{popupRef:n,closePopup:r}=No(),{baseCoinId:s,id:a,hiddenStatus:l,ownerAddress:i,chainId:f,contractAddress:u,tokenId:p,transfer:c=!0,visible:N=!0}=t,k=uo({onSuccess:r,baseCoinId:s,id:a,hiddenStatus:l}),P=go({ownerAddress:i,chainId:f,tokenId:p,contractAddress:u}),I=[];return c&&I.push(P),N&&I.push(k),{popupRef:n,actions:I}}var De=To;e();o();var L={root:"_root_1orqe_1",popup:"_popup_1orqe_6",item:"_item_1orqe_13",iconBox:"_iconBox_1orqe_24",loader:"_loader_1orqe_32",icon:"_icon_1orqe_24"};function ho(t){let{popupRef:n,actions:r}=De(t);return x.default.createElement(v.Box,{className:L.root},x.default.createElement(ot,{content:x.default.createElement(v.Box,{className:L.popup},r.map(s=>x.default.createElement(v.Box,{className:L.item,onClick:s.onClick,key:s.key},x.default.createElement(v.Box,{className:L.iconBox},s.loading?x.default.createElement(S,{size:S.SIZE.sm,className:L.loader}):x.default.createElement(K,{className:(0,Ve.default)(s.icon,L.icon)})),x.default.createElement(xt.Text,{size:xt.SIZE.sm},s.text)))),trigger:ot.TRIGGER.click,placement:ot.DIRECTION.topRight,ref:n},x.default.createElement(K,{className:"okds-more"})))}var Me=ho;e();o();var J=T(C());var We=T(tt()),_o=({item:t,index:n})=>{let[r,s]=(0,J.useState)(!1),a=n%2>1?z.DIRECTION.top:z.DIRECTION.topRight;return J.default.createElement(z,{show:r,title:t.collectionName,trigger:z.TRIGGER_TYPES.hover,placement:a},J.default.createElement("span",{onMouseOver:()=>{let l=t.isIdentification?127:144;document.querySelector(`.ok-nft--collection-name-hidden-${t.id}`).clientWidth>l&&s(!0)},onMouseLeave:()=>{s(!1)},className:(0,We.default)("ok-nft--collection-name",{"ok-nft--collection-identification-name":t.isIdentification})},t.collectionName||t.projectName))},$e=_o;e();o();var E={clickable:"_clickable_1hwto_1",priceTitle:"_priceTitle_1hwto_4",priceContent:"_priceContent_1hwto_12",priceValue:"_priceValue_1hwto_22",chainImage:"_chainImage_1hwto_27",priceAmount:"_priceAmount_1hwto_32",price:"_price_1hwto_4",noResultImageBox:"_noResultImageBox_1hwto_39",collectionName:"_collectionName_1hwto_43"};var Io=()=>{let t=Kt();return jt(t?.initialType)},pt=t=>{let n=Io(),{inImage:r}=t.slot||{},s=F(t.salePrice)||F(t.lastPrice)||F(t.bestOfferPrice),a=d("wallet_extension_nft_detail_text_price"),l="New";t.salePrice?a=d("wallet_extension_nft_detail_text_price"):t.lastPrice?a=d("wallet_extension_nft_detail_text_last"):t.bestOfferPrice&&(a=d("wallet_extension_nft_detail_text_best_offer"));let i=!n&&!t?.needClaim,f=[w.AUTO,w.MANUAL].includes(t?.hiddenStatus),u=f&&h.default.createElement("div",{className:"ok-nft--is-hide"},h.default.createElement(K,{className:(0,mt.default)("okx-wallet-plugin-hide","ok-nft--is-hide-icon")})),p=qt({dark:"/cdn/assets/imgs/246/690CB9B3F2F4142F.png",light:"/cdn/assets/imgs/246/15101867D98B5C34.png"});return h.default.createElement("div",{className:"ok-nft--main-item"},h.default.createElement("div",{className:E.clickable,onClick:t.onClick},h.default.createElement("div",{className:"ok-nft--image-box"},h.default.createElement(ge,{startStatus:t.activeId===2,src:t.image||t.resourceUrl,alt:"",classnames:(0,mt.default)("ok-nft--image",f&&"ok-nft--image-box-hide"),backupImage:p}),t.isNew&&h.default.createElement("div",{className:"ok-nft--is-new"},l),r?r(u):u),h.default.createElement("div",null,h.default.createElement("div",{className:"ok-nft--collections"},h.default.createElement($e,{item:t}),h.default.createElement("div",{className:(0,mt.default)(`ok-nft--collection-name-hidden-${t.id}`,E.collectionName)},t.collectionName),t.isIdentification&&h.default.createElement(V,{alt:"",src:"/static/images/nft/nft-isidentification.svg",className:"ok-nft--flag-image"}),h.default.createElement(V,{alt:"",src:t.chainIcon,className:"ok-nft--chain-image"})),h.default.createElement("div",{className:"ok-nft--name"},t.name))),h.default.createElement("div",{className:E.price},h.default.createElement("div",{className:E.priceTitle},a),h.default.createElement("div",{className:E.priceContent},h.default.createElement("div",{className:E.priceValue},s?.currencyUrl&&h.default.createElement(V,{alt:"",src:`${s?.currencyUrl}`,className:E.chainImage}),h.default.createElement("div",{className:E.priceAmount},s?.priceDisplay||"--")),i&&h.default.createElement(Me,{id:t.id,hiddenStatus:t.hiddenStatus,baseCoinId:t.baseCoinId,ownerAddress:t.ownerAddress,chainId:t.chain,contractAddress:t.contractAddress,tokenId:t.tokenId,...t.actionsProps||{}}))))};var qe=({data:t=[],accountAddress:n})=>{let[r,s]=(0,_.useState)(!1),a=(0,Ue.useHistory)(),l=d("extension_home_aptos_nft_card_receivenum",{num:_.default.createElement("span",{key:"language",className:"new-home-page-aptos-notify"},t.length)});return _.default.createElement(_.default.Fragment,null,_.default.createElement(et.Action,{windowStyle:{borderTopLeftRadius:"8px",borderTopRightRadius:"8px"},onClose:()=>{s(!1)},visible:r,title:_.default.createElement("span",{className:"new-home-page-aptos-title"},d("extension_aptos_nft_title_receiveallowed")),windowClass:"new-home-page-aptos-claim"},_.default.createElement("div",{className:"ok-nft--main-list"},t.map(i=>(i.coverUrl?i.image=i.coverUrl:i.resourceType===1&&(i.image=i.resourceUrl),i.lastPrice=F(i.lastPrice),i.bestOffer=F(i.bestOffer),i.sale=F(i.sale),i.floorPriceDetail=F(i.floorPriceDetail),_.default.createElement(pt,{...i,key:i.tokenId,activeId:2,needClaim:!0,onClick:()=>{a.push({search:`chainId=${i.chain}&contractAddress=${i.contractAddress}&tokenId=${encodeURIComponent(i.tokenId)}&claim=true&offerAddress=${i.offerAddress}&looker=${n}&accountAddress=${n}`,pathname:`${Z}`})}}))))),_.default.createElement("div",{className:"new-home-page-aptos-box"},_.default.createElement(V,{alt:"",width:32,height:32,className:"new-home-page-aptos-image",src:t[0].coverUrl||t[0].resourceUrl}),_.default.createElement("div",{className:"new-home-page-aptos-text"},l),_.default.createElement("span",{className:"new-home-page-aptos-get",onClick:()=>{t.length>1?s(!0):a.push({search:`chainId=${t[0].chain}&contractAddress=${t[0].contractAddress}&tokenId=${encodeURIComponent(t[0].tokenId)}&claim=true&offerAddress=${t[0].offerAddress}&looker=${n}&accountAddress=${n}`,pathname:`${Z}`})}},d("extension_home_aptos_nft_card_receivenow"))))};e();o();var $=T(C()),Ge=T(ht()),Ye=T(_t()),Et=T(ro());e();o();var ft=T(C());R();e();o();var y={INIT:"init",FILTER:"filter"};var yo=({type:t=y.INIT,hideButton:n=!1})=>{let r=Yt(),{resetHideUnverifiedCollection:s}=it(),{resetFilterInfo:a}=pe(),l=(0,ft.useCallback)(()=>{s(),a()},[a,s]),i={[y.INIT]:d("wallet_extension_nft_tab_nfts_desc"),[y.FILTER]:d("wallet_extension_nft_text_no_items_found")},f={[y.INIT]:d("wallet_extension_nft_tab_nfts_btn_explorenfts"),[y.FILTER]:d("wallet_extension_nft_btn_back_to_items")},u={[y.INIT]:H.State.TYPE.noResult,[y.FILTER]:H.State.TYPE.noRecord};return ft.default.createElement(H.State,{title:i[t],type:u[t],buttonText:n?null:f[t],onButtonClick:n?void 0:()=>{if(t===y.INIT){globalThis.platform.openTab({url:r?.nftMarketPlace});return}l()}})},je=yo;var At=({list:t,filterStatus:n,hasNFTFilter:r=!1})=>{let s=(0,Ge.useSelector)(ie),a=(0,Ye.useHistory)(),{currentWalletSetting:l}=it(),{hideNoValue:i,hideManualHidden:f}=l,u=i||f;if(t.length>0)return $.default.createElement("div",{className:"ok-nft--main-list"},t.map(c=>{let{nftStatusInfo:N}=c,k=N?.data?.nftStatus==="1",I=Wt({coinId:c?.baseCoinId})&&!!c.inscriptionIdProtocol?c.inscriptionIdProtocol:c?.tokenId;return $.default.createElement(pt,{key:c.id,...c,tokenId:I,activeId:s,onClick:()=>{a.push({search:`looker=${c.ownerAddress}&chainId=${c.chain}&contractAddress=${c.contractAddress}&tokenId=${encodeURIComponent(I)}`,pathname:`${Z}`})},actionsProps:{transfer:!k},slot:{inImage:A=>k?$.default.createElement(_e,{className:"ok-nft-loading-status",tooltip:!0,count:N.data?.txCount}):A}})}));let p=n&&!u?y.FILTER:y.INIT;return $.default.createElement("div",{className:"ok-nft--main-no-nft"},$.default.createElement(je,{hideButton:p===y.INIT&&r,type:p}))};At.propTypes={list:Et.default.array,filterStatus:Et.default.bool};At.defaultProps={list:[],filterStatus:!1};var Ke=At;e();o();var Ot=T(C());R();e();o();var ze=T(bt());no();var ko="read_hidden_nft_tips_walletIds";function xo(t){let{hasHiddenNFT:n=!1}=t,r=W(),[s,a]=(0,ze.useLocalStorageState)(ko,{defaultValue:[]});return{showTips:!(r&&s?.includes(r))&&n,onRead:()=>{!r||a(Rt(s?.concat(r)))}}}var Ze=xo;e();o();var St={root:"_root_1f2hq_1",alert:"_alert_1f2hq_4"};function bo(t){let{showTips:n,onRead:r}=Ze(t);return n?Ot.default.createElement(v.Box,{className:St.root},Ot.default.createElement(It,{desc:d("extension_wallet_filter_notif_filterhide"),type:It.TYPE.warn,onClose:r,className:St.alert})):null}var Je=bo;e();o();var ut={showButton:"_showButton_1xijq_1",loadingButton:"_loadingButton_1xijq_12",loader:"_loader_1xijq_17"};var Co=256,Fo=({aptosNftOffers:t,aptosAddress:n,scrollTop:r,backupHeight:s})=>{let a=Jt(),l=(0,Q.useSelector)(re),i=(0,Q.useSelector)(ne),f=(0,Q.useSelector)(se),u=(0,g.useRef)(null),p=fe(),c=(0,Qe.useHistory)(),{list:N,total:k,pageNo:P}=(0,Q.useSelector)(oe),{hasHiddenNFT:I}=at({manual:!1}),A=!!a&&te(a,Qt.hideUnverifiedCollection),B=Object.keys(f).some(oo=>f[oo].length!==0)||A,b=B||I&&N.length<=2;(0,g.useEffect)(()=>{!i&&r>268*Math.ceil(N.length/2)+240-600&&k>N.length&&p({pageNo:P+1})},[r,i,N.length,k,P,p]);let Nt=(0,g.useMemo)(()=>i&&N.length>0&&r>480,[i,N.length,r]),Xe=d("wallet_extension_nft_popup_title_filter"),to=d("extension_wallet_filter_textbtn_filter",{number:Bt.thousandFormat(k)}),eo=b?to:Xe,Pt=(0,g.useMemo)(()=>b||r>Co,[b,r]),{paddingBottom:Ht,buttonPaddingBottom:Tt,absoluteBottom:vt}=ue({isButtonAbsolute:Pt,backupHeight:s}),Lt=(0,g.useMemo)(()=>N.length===0&&!b?Tt:Ht,[Tt,b,N.length,Ht]);return l?g.default.createElement("div",{className:(0,gt.default)("ok-home--error-parent"),style:{paddingBottom:Lt}},g.default.createElement(H.State,{type:H.State.TYPE.noNetwork,title:d("wallet_extension_nft_text_loading_failed"),buttonText:d("wallet_extension_nft_btn_refresh"),onButtonClick:()=>{i||p({pageNo:1})}})):i&&N.length===0?g.default.createElement("div",{className:(0,gt.default)("ok-home--loading-parent")},g.default.createElement(S,{size:S.SIZE.xl})):g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{ref:u,style:{paddingBottom:Lt}},t.length>0&&g.default.createElement(qe,{data:t,accountAddress:n}),g.default.createElement(Je,{hasHiddenNFT:I}),g.default.createElement(Ke,{filterStatus:B,list:N,hasNFTFilter:b})),Nt?g.default.createElement(Gt,{className:ut.loadingButton,offsetBottom:vt},g.default.createElement("div",{className:"ok-home-page--nft-loading"},g.default.createElement(S,{size:S.SIZE.lg,className:ut.loader}))):g.default.createElement("div",{className:(0,gt.default)(`${Pt?ut.showButton:""}`,"ok-home-bottom-panel--nft","ok-home-bottom-panel__disabled"),style:{bottom:vt,paddingBottom:Tt}},g.default.createElement(D,{icon:"okx-wallet-plugin-filter",type:D.TYPE.secondary,category:b?D.CATEGORY.fill:D.CATEGORY.outline,iconType:D.ICON_POSITION.leading,className:"home-button-nft sticky",onClick:()=>{c.push(Ut)}},eo)))},hi=Fo;export{hi as default,Co as nftItemHeight};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=Nft-HQGGQXNK.js.map