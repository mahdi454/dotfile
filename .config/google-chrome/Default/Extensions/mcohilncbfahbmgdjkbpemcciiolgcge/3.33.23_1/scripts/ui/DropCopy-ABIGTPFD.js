import{a as R}from"./chunk-SJCGLHGC.js";import{c as A}from"./chunk-6WVNBGIY.js";import{b as L}from"./chunk-S3O4LR55.js";import{a as j,q as m}from"./chunk-FZCNSMLW.js";import"./chunk-WANYNTD6.js";import{a as fe}from"./chunk-QMGTBJAL.js";import{o as ge}from"./chunk-KCWFMCND.js";import{Da as X,w as me}from"./chunk-3TDWET6C.js";import"./chunk-EBR3PGFZ.js";import"./chunk-UDGUBKMO.js";import"./chunk-VPGNJAK6.js";import"./chunk-W6Q44ZHW.js";import"./chunk-3HS6AHPS.js";import{e as Y}from"./chunk-WSUAESF2.js";import"./chunk-O2FUKKO3.js";import"./chunk-FDCWN4NG.js";import{Qa as q,X as Z,Ya as pe,pc as H,qc as V,sc as J,vc as Q}from"./chunk-O3CM75EN.js";import"./chunk-ZGRAPBBU.js";import{G as b,a as $,e as k,x as K,y as W}from"./chunk-J3CEQI22.js";import"./chunk-VFHYER2K.js";import{L as G,w as r}from"./chunk-KJIO572I.js";import"./chunk-HJXNXGYU.js";import"./chunk-77ECUYXV.js";import"./chunk-4BZBCAHV.js";import{c as _e}from"./chunk-KALFZBR5.js";import{a as de}from"./chunk-V55FEIYE.js";import{a as D}from"./chunk-EAZTJZU7.js";import"./chunk-VOT7VHG3.js";import"./chunk-SYQUJKIR.js";import"./chunk-WPMHLM7C.js";import"./chunk-P7DU4NJA.js";import"./chunk-KW7JYBDS.js";import"./chunk-224G4QSH.js";import{f as v,m as f,o as g}from"./chunk-ZCHLW7CF.js";f();g();var n=v(D()),oe=v(me()),te=v(ge()),ae=v(fe());G();pe();Q();f();g();var t=v(D()),P=v(_e()),_=v(de());G();Q();f();g();var e={container:"_container_chlfo_1",contentContainer:"_contentContainer_chlfo_4",firstInMore:"_firstInMore_chlfo_17",expanded:"_expanded_chlfo_20",isGroup:"_isGroup_chlfo_24",left:"_left_chlfo_27",main:"_main_chlfo_35",name:"_name_chlfo_42",addr:"_addr_chlfo_46",right:"_right_chlfo_52",copyIcon:"_copyIcon_chlfo_52",moreOrLessContainer:"_moreOrLessContainer_chlfo_55",text:"_text_chlfo_59",accordion:"_accordion_chlfo_68",accordionContent:"_accordionContent_chlfo_72",accordionHeader:"_accordionHeader_chlfo_75","receive-warning":"_receive-warning_chlfo_80",receiveWarning:"_receive-warning_chlfo_80","warning-icon":"_warning-icon_chlfo_85",warningIcon:"_warning-icon_chlfo_85","warning-text":"_warning-text_chlfo_89",warningText:"_warning-text_chlfo_89"};var F=({image:h,chainName:x,addressType:u,address:y,isGroup:w,expanded:l,lastInMore:c,onToggle:C,receiveWarning:o})=>{let i=()=>l?r("extension_defi_popup_textbtn_show_less"):r("extension_defi_popup_textbtn_show_all_address_types");return t.default.createElement("div",{className:(0,P.default)(e.container,l?e.expanded:"")},t.default.createElement("div",{className:(0,P.default)(e.contentContainer,l?e.expanded:"",w?e.isGroup:"",w&&!l?e.firstInMore:"")},t.default.createElement("div",{className:e.left},t.default.createElement(L,{src:h,size:j.lg,className:"new-home__address-copy-chain-item-left",defaultIcon:Y})),t.default.createElement("div",{className:e.main},t.default.createElement(m.Text,{ellipsis:!0,className:e.name,size:m.SIZE.md},x),u&&t.default.createElement(k,{className:"address-copy-badge",type:k.TYPE.rounded},r(V[u])),t.default.createElement("div",{className:e.addr},y),o&&t.default.createElement("div",{className:e.receiveWarning},t.default.createElement(L,{size:L.SIZE.xs,icon:"okds-warning-circle-fill",className:e.warningIcon}),t.default.createElement(m.Text,{size:m.SIZE.xs,className:e.warningText},o))),t.default.createElement("div",{className:e.right},t.default.createElement(L,{icon:"okx-wallet-plugin-copy-1",className:e.copyIcon}))),w&&!l||c?t.default.createElement("div",{className:e.moreOrLessContainer},t.default.createElement("div",{onClick:T=>{T.stopPropagation()}},t.default.createElement($,{expanded:l,className:e.accordion,contentClassName:e.accordionContent,headerClassName:e.accordionHeader,onToggle:C,title:t.default.createElement("div",{className:e.text},i())}))):null)};F.propTypes={image:_.default.string,chainName:_.default.string,addressType:_.default.string,address:_.default.string,expanded:_.default.bool,isGroup:_.default.bool,lastInMore:_.default.bool,onToggle:_.default.func};F.defaultProps={image:"",chainName:"",addressType:"",address:"",expanded:!1,isGroup:!1,lastInMore:!1,onToggle:()=>{}};var ee=F;f();g();var I={close:"_close_1fg1q_1",underlineWrapper:"_underlineWrapper_1fg1q_4",tag:"_tag_1fg1q_7",empty:"_empty_1fg1q_10"};var he=(h,x,u,y)=>{if(!h)return[];let w=Object.keys(y),l={},c=[...h].sort((o,i)=>{let T=o?.chainName?.charAt(0).toUpperCase(),O=i?.chainName?.charAt(0).toUpperCase();return T?.localeCompare(O)});if(h.length<=4||u)return c;for(let o=0;o<c.length;o++){let i=c[o]?.chainName?.charAt(0).toUpperCase();i&&!l[i]&&(c.splice(o,0,{isTag:!0,tagName:i}),o!==0&&c.splice(o,0,{isTag:!0,tagName:"",isUnderLine:!0}),l[i]=!0,o++)}let C=x.length?[{isTag:!0,tagName:r("extension_wallet_switchnetwork_subtitle_popular_networks")},...x.map(o=>{let i=w.find(T=>T===`${o.address}${o.chainId}`);return i?{...o,showMore:y[i]}:o}),{isTag:!0,tagName:"",isUnderLine:!0},...c]:c;return u?[[],""]:C},ue=({addresses:h,hotAddresses:x,CopyButton:u,visible:y,setVisible:w})=>{let[l,c]=(0,n.useState)({}),C=(0,oe.useSelector)(X),{run:o}=(0,te.useDebounceFn)(()=>{C&&b.warn({title:r("wallet_account_toast_backup_view_address"),duration:1.5,containerClassName:"address-copy-notification",placement:b.DIRECTION.top})},{leading:!0,wait:300}),{isSm:i}=A(),[T,O]=(0,n.useState)(!1),U=(0,n.useRef)(null),se=({value:a},d)=>{if(a==="disable")return!1;let N=d.toLowerCase()||"",p=a?.chainName.toLowerCase()||"",s=a?.symbol.toLowerCase()||"";return p.indexOf(N)>-1||s.indexOf(N)>-1},ne=he(h,x,T,l),z=(a=>{let d=[],N=(p,s,{lastInMore:M=!1}={})=>{let E=s?.chainId===q&&s?.addressType===H.SEGWIT_TAPROOT?r("wallet_extension_cat_taproot_receive_only",{contractType:r("wallet_extension_cat_icu_taproot"),contractName:r("wallet_extension_cat_icu_cat")}):void 0;d.push({value:{address:s.address,chainName:s.chainName,symbol:s.symbol,addressType:s.addressType},label:n.default.createElement(ee,{image:s.image,chainName:s.chainName,address:s.address,addressType:s.addressType,expanded:p.showMore,isGroup:s.moreAddress&&s.moreAddress.length>0,lastInMore:M,onToggle:S=>{c({...l,[`${p.address}${p.chainId}`]:S})},receiveWarning:E})})};return a.forEach(p=>{let{isTag:s,tagName:M,isUnderLine:E,moreAddress:S,showMore:ie}=p;if(E){d.push({value:"disable",label:n.default.createElement("div",{className:I.underlineWrapper},n.default.createElement("div",{className:"new-home__address-copy-underline"}))});return}if(s){d.push({value:"disable",label:n.default.createElement("div",{className:I.underlineWrapper},n.default.createElement(m.Text,{size:m.SIZE.sm,type:m.TYPE.secondary,className:I.tag},M)),className:"title-tag"});return}N(p,p),ie&&S.map((le,ce)=>N(p,le,{lastInMore:ce===S.length-1}))}),d})(ne),re=a=>{if((0,ae.default)(a.value.address),a.value==="disable")return;let d=a.value.addressType,N=d?R(r,J[Z][d],a.value.symbol):r("wallet_extension_transaction_toast_network_address_copied",{network:a.value.chainName});b.success({title:N,desc:a.value.address,duration:1.5,placement:b.DIRECTION.top,containerClassName:"address-copy-notification"})};return(0,n.useEffect)(()=>{U.current?.setVisible(y)},[y]),n.default.createElement("div",{className:"new-home__address-copy",onClick:o,"data-testid":"address"},n.default.createElement(K,{ref:U,disabled:C,onSearch:a=>{O(!!a)},options:z,onChange:re,dialogMode:!0,dropMode:!1,dialogProps:{titleCenter:!0,isFull:!i,noContentPadding:!0,noTopRadius:!1,windowStyle:{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"},closeClassName:I.close},optionTitle:r("extension_wallet_address_title_wallet_address"),searchable:z.length>10,searchFilter:se,scrollStyle:{maxHeight:"398px",height:"auto"},searchEmpty:n.default.createElement(W.State,{className:I.empty,type:W.State.TYPE.noRecord,title:r("wallet_toast_address_input_noresults")}),searchPlaceholder:r("wallet_toast_address_input_search"),displayArea:u,popupProps:{zIndex:10001,offset:[-150,0]},optionContClassName:"new-home__address-copy-drop-container",optionItemClassName:"new-home__address-copy-drop-option",onToggleShow:a=>{w(a)}}))},Ae=ue;export{Ae as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=DropCopy-ABIGTPFD.js.map