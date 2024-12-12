import{A as ct,g as Te,n as xe,w as Oe}from"./chunk-33Y4IZ5Y.js";import{o as W}from"./chunk-G5U7ERLN.js";import{Fc as Se,Ia as w,Ja as P,N as we,Ua as Re,hb as U,sa as V,ta as z,ua as Pe}from"./chunk-3RNOIYOK.js";import{f as O}from"./chunk-OQFQ7WFP.js";import{a as Ee}from"./chunk-VX55KNI4.js";import{a as S,b as st}from"./chunk-R4ZXRZL6.js";import{B as de,L as ge,M as he,S as ye,a as le,b as Y,g as me,pa as k}from"./chunk-6O63U2D6.js";import{F as x,G as ue,I as A,J as fe,K as pe,M as y,a as g,b as K,g as ce,w as T}from"./chunk-RIOWPXBZ.js";import{T as _e,U as be}from"./chunk-OSCGYMLH.js";import{a as R}from"./chunk-O337TVCZ.js";import{c as L,f as _,m as a,o as i}from"./chunk-GLD6H5Q5.js";var He=L((Io,Xe)=>{a();i();Xe.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(n){e.addRange(n)}),t&&t.focus()}}});var Ye=L((Ao,Ke)=>{"use strict";a();i();var _t=He(),qe={"text/plain":"Text","text/html":"Url",default:"Text"},bt="Copy to clipboard: #{key}, Enter";function wt(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Pt(e,t){var r,o,n,s,f,c,u=!1;t||(t={}),r=t.debug||!1;try{n=_t(),s=document.createRange(),f=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(m){if(m.stopPropagation(),t.format)if(m.preventDefault(),typeof m.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=qe[t.format]||qe.default;window.clipboardData.setData(h,e)}else m.clipboardData.clearData(),m.clipboardData.setData(t.format,e);t.onCopy&&(m.preventDefault(),t.onCopy(m.clipboardData))}),document.body.appendChild(c),s.selectNodeContents(c),f.addRange(s);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");u=!0}catch(m){r&&console.error("unable to copy using execCommand: ",m),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(h){r&&console.error("unable to copy using clipboardData: ",h),r&&console.error("falling back to prompt"),o=wt("message"in t?t.message:bt),window.prompt(o,e)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(s):f.removeAllRanges()),c&&document.body.removeChild(c),n()}return u}Ke.exports=Pt});var tt=L(X=>{"use strict";a();i();function ee(e){return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ee(e)}Object.defineProperty(X,"__esModule",{value:!0});X.CopyToClipboard=void 0;var M=Ze(R()),Rt=Ze(Ye()),St=["text","onCopy","options","children"];function Ze(e){return e&&e.__esModule?e:{default:e}}function Ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ve(Object(r),!0).forEach(function(o){re(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Tt(e,t){if(e==null)return{};var r=xt(e,t),o,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function xt(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,s;for(s=0;s<o.length;s++)n=o[s],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function Ot(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qe(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ct(e,t,r){return t&&Qe(e.prototype,t),r&&Qe(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&te(e,t)}function te(e,t){return te=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},te(e,t)}function It(e){var t=Lt();return function(){var o=$(e),n;if(t){var s=$(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return vt(this,n)}}function vt(e,t){if(t&&(ee(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Je(e)}function Je(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Lt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},$(e)}function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var et=function(e){Dt(r,e);var t=It(r);function r(){var o;Ot(this,r);for(var n=arguments.length,s=new Array(n),f=0;f<n;f++)s[f]=arguments[f];return o=t.call.apply(t,[this].concat(s)),re(Je(o),"onClick",function(c){var u=o.props,l=u.text,m=u.onCopy,h=u.children,E=u.options,b=M.default.Children.only(h),v=(0,Rt.default)(l,E);m&&m(l,v),b&&b.props&&typeof b.props.onClick=="function"&&b.props.onClick(c)}),o}return Ct(r,[{key:"render",value:function(){var n=this.props,s=n.text,f=n.onCopy,c=n.options,u=n.children,l=Tt(n,St),m=M.default.Children.only(u);return M.default.cloneElement(m,ze(ze({},l),{},{onClick:this.onClick}))}}]),r}(M.default.PureComponent);X.CopyToClipboard=et;re(et,"defaultProps",{onCopy:void 0,options:void 0})});var kt=L((No,rt)=>{"use strict";a();i();var At=tt(),oe=At.CopyToClipboard;oe.CopyToClipboard=oe;rt.exports=oe});a();i();y();var Mt="/dex-swap",Ce="/dex-swap",De="/dex-swap/bridge",Ie="/dex-swap/limit",B="/dex-widget",C="/dex-widget/bridge";var ve=(e="")=>`${A("/web3")}${e}`;a();i();y();a();i();y();function d(){if(g())return!1;try{return window.self!==window.top}catch{return!1}}function Le(){let{pathname:e}=ue();return e.endsWith(B)||e.endsWith(C)}function D(){return(g()||d())&&Le()}a();i();var ke=_(R()),We=_(ct());a();i();var Ae={icon:"_icon_13h51_1"};function ut({className:e="",onClick:t=()=>{},type:r="",size:o,...n}){let s={fontSize:`${o}px`};return ke.default.createElement(_e,{onClick:t,className:(0,We.default)(r,Ae.icon,e),style:s,...n})}a();i();function Q(){let{isTelegramMiniApp:e}=O?.global;return!!e}a();i();y();var ft=e=>{let{pathname:t}=Oe(e);return Pe.find(o=>new RegExp(o.reg).test(t))?.params||{}},pt="dex_source_env",lt="dex-swap/bridge",Z=()=>g()?{}:d()?T.session.g.get(pt):P()?{source:Q()?z.TGAPP:z.PLUGIN,business_type:window?.location?.hash?.indexOf(lt)>-1?V.BRIDGE:V.SWAP,trade_dialog:"no"}:ft(window.location.href);a();i();k();y();st();a();i();k();function F(e){let t={...e};return Object.keys(t).forEach(r=>{let o=e[r];(ge(o)||o===""||he(o))&&delete t[r]}),t}var dt=[0],jr=()=>new AbortController,gt=()=>Promise.reject(),Mr=e=>e?.status===S.STATUS_CODE?.ERR_CANCELED;async function N(e={}){let t=e;if(P()&&(t=await O.global?.interceptorHeaders(e),t.url=`https://${O.global.getApiHostname()}${t.url}`),!g()&&d()&&!P()){t.headers||(t.headers={});let r=Z();t.headers.Referer_URL=r.iframe_referrer,r.widget_version&&(t.headers.Widget_version=Z().widget_version)}return Y(t.params)&&(t.params=F(t.params)),le(t.data)?t.data=t.data.map(r=>F(r)):Y(t.data)&&(t.data=F(t.data)),t.needSign=!0,t.customToLogin=gt,t}function G(e){return e.then(t=>{let{data:r}=t;return dt.includes(r?.code)?r:Promise.reject(r||{})})}var I={};I.get=(e,t)=>G(N({...t,url:e}).then(r=>{let{url:o,...n}=r;return S.get(o,n)}));I.getWithCache=(e,t)=>G(N({...t,url:e}).then(r=>{let{url:o,...n}=r;return S.getWithCache(o,{cacheSeconds:60*5,...n})}));I.post=(e,t,r)=>G(N({...r,url:e,data:t,method:"post"}).then(o=>{let{url:n,data:s,...f}=o;return S.post(n,s,f)}));I.delete=(e,t,r)=>G(N({...r,url:e,data:t,method:"delete"}).then(o=>{let{url:n,...s}=o;return S.delete(n,s)}));var $r=I;a();i();y();a();i();a();i();var j=_(Ee());y();function ht(){let e=(0,j.useLocation)(),t=(0,j.useHistory)(),r=c=>{t.replace(c)},o=c=>{t.push(c)},n=c=>{let l=`${c.pathname||e.pathname}${c.search||""}${c.hash||""}`;fe(l,"_self")};return{replace:(c,u)=>{([w.WALLET_DASHBOARD,w.MARKET].includes(c)?n:r)(u)},pushFn:(c,u)=>{([w.WALLET_DASHBOARD,w.MARKET].includes(c)?n:o)(u)}}}var Ue=ht;a();i();k();function J({from:e,to:t,inputAmount:r,feeConfig:o,btcAddressType:n}={}){let s=new URLSearchParams,f=(u,l)=>{xe(l?.chainId)&&s.set(`${u}Chain`,l.chainId),l?.tokenContractAddress&&s.set(`${u}Currency`,l.tokenContractAddress)},c=u=>{u?.referrerAddress&&u?.feePercent&&(s.set("referrerAddress",u.referrerAddress),s.set("feePercent",u.feePercent))};return f("input",e),f("output",t),c(o),r&&s.set("inputAmount",r),n&&s.set("addressType",n),s}function Be(e={}){let t=J(e);t.delete("referrerAddress"),t.delete("feePercent");let r=ye(e,["from","to","inputChain","inputCurrency","outputChain","outputCurrency","inputAmount","feeConfig","btcAddressType","tokenPair","bridgeTokenPair"]);return me(r).forEach(o=>{t.set(o,r[o])}),t}function Fe(e,t){let r=n=>{let s=f=>{let c=e.get(`${n}${f}`);return!c&&t&&(c=e.get(`${n}Limit${f}`)),c};return{chainId:s("Chain"),tokenContractAddress:s("Currency")}},o=()=>{let n=e.get("referrerAddress"),s=e.get("feePercent");return d()&&n&&s&&!Se(s)?{referrerAddress:n,feePercent:s}:{}};return{from:r("input"),to:r("output"),inputAmount:e.get("inputAmount"),feeConfig:o(),btcAddressType:e.get("addressType"),autoSwitch:e.get("autoSwitch")}}function Ne(e,t){return!e||!t?"":e===w.OKX_WALLET_EXTENSION?t:ve(t)}a();i();var Ge=_(R()),je=_(Ee());function yt(){let{hash:e,search:t}=(0,je.useLocation)(),r=e&&e.indexOf("#")>-1?e.slice(1):e;return(0,Ge.useMemo)(()=>new URLSearchParams(t||r),[t,r])}var Me=yt;function Et(e){let{commonStore:t}=W(),{portal:r,computedCurrentTabIsLimit:o}=t,n=Me(),s=Ue(),f=({pathname:u,params:l}={})=>{let m=Ne(r,u),h=D()?Be(l).toString():J(l).toString(),E={};m&&(E.pathname=m),h&&(E.search=`?${h}`),e?s.pushFn(r,E):s.replace(r,E)};return{params:Fe(n,o),replace:f}}var $e=Et;var So=()=>{let{fromToStore:e,accountStore:t,commonStore:r}=W(),{updateFrom:o,updateTo:n,setField:s,advanceSetTypedValue:f}=e,{setCurrentTab:c}=r;return(u,l,m,h)=>{let E=t.isConnectedWallet,b=[];if(c(h,!0),u&&(o({...u,amount:1}),b.push(u.chainId),m)){let v=m===we?"":Te(m,u.decimals);s(Re.FROM),f(v,!1,h),o({amount:v})}l&&(n(l),b.push(l.chainId)),E&&e.getSwapTokenBalance()}},To=()=>(e,t)=>{let r={from:{chainId:e?.chainId,tokenContractAddress:e?.tokenContractAddress},to:{chainId:t?.chainId,tokenContractAddress:t?.tokenContractAddress}};return r.from.tokenContractAddress&&r.to.tokenContractAddress?r:null},xo=()=>{let{replace:e}=$e();return r=>{let o=D();switch(r){case U.SWAP:e({pathname:o?B:Ce});break;case U.BRIDGE:e({pathname:o?C:De});break;case U.LIMIT_ORDER:e({pathname:Ie});break;default:K.error("useReplaceLocationByTab: unknown tab type");break}}};a();i();var Mo=(e="")=>{let t=e.substring(0,10);return e.length>10?`${t}...`:e};a();i();y();var ne="ledgerEmbed",Wt=()=>{if(g())return!1;if(T.session.g.get(ne))return!0;try{let t=!!new URLSearchParams(window.self.location.search).get(ne),r=d()&&t;return r&&T.session.g.set(ne,"1"),r}catch{return!1}},ot=Wt();a();i();var Zo={YES:1,NO:0},Jo={NETWORK_FEE:"0",FREE_NETWORK_FEE:"1"},en={INTENT_BRIDGE:3},tn={FREE:"1",NOT_FREE:"0"};a();i();y();function Ut(){let e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=[],r;t[8]="-",t[13]="-",t[18]="-",t[23]="-",t[14]="4";for(let o=0;o<36;o++)t[o]||(r=0|ce.get()*16,t[o]=e[o==19?r&3|8:r]);return t.join("")}function sn(){if(g())return"";let e=localStorage.getItem("onChainUserId"),t=Ut();return e||localStorage.setItem("onChainUserId",t),e||t}a();i();var se=_(R());a();i();k();y();var Bt="www.okx.com",nt="www.oklink.com",Ft="/web3/explorer";function ae(e){if(!de(e))return"";if(P())return e;try{let t=new URL(e);if([Bt,nt].map(n=>`https://${n}`).find(n=>x(e,n))||x(e,pe.href)){let n=e.replace(t.origin,"");return n=t.host===nt?`${Ft}${n}`:n,A(n)}return e}catch{return e}}function at(e){return e==="_blank"?"nofollow":"noreferrer"}a();i();var H=_(R());var Nt=e=>{let[t,r]=(0,H.useState)(e);return(0,H.useEffect)(()=>{let o=ae(e);r(o)},[e]),t},it=Nt;a();i();var q=_(R());y();function ie(e,t){let[r,o]=(0,q.useState)(e);return(0,q.useEffect)(()=>{let n=x(t,window.location.href);o(ot||!n||d()?"_blank":e)},[e,t]),r}var Gt=({children:e,href:t,target:r="_self",withLangPath:o=!0,handleStyle:n=!0,disable:s=!1,...f})=>{let c=it(t),u=ie(r,c),l=at(u);return s?se.default.createElement("span",{...f},e):se.default.createElement(be,{href:c,target:u,withLangPath:o,handleStyle:n,rel:l,...f},e)},Ln=Gt;export{Mt as a,Ce as b,De as c,Ie as d,B as e,C as f,d as g,Q as h,D as i,Z as j,jr as k,Mr as l,$r as m,Ut as n,sn as o,$e as p,So as q,To as r,xo as s,kt as t,ut as u,Mo as v,ne as w,ot as x,Ln as y,Zo as z,Jo as A,en as B,tn as C};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-QKMEJIUR.js.map