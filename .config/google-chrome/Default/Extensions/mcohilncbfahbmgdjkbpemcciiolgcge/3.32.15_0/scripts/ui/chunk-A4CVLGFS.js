import{a as ve}from"./chunk-ALNQKIUN.js";import{b as D}from"./chunk-AOXUSYRH.js";import{Ca as pe,m as de,w as ke}from"./chunk-JLIPSIRU.js";import{Mb as K,Ub as ce}from"./chunk-YT2MPR4E.js";import{A as he,c as me}from"./chunk-LDKM7IQF.js";import{M as Pe,x as ue}from"./chunk-RIOWPXBZ.js";import{c as $}from"./chunk-OSCGYMLH.js";import{a as fe}from"./chunk-ADWO6K2C.js";import{a as F}from"./chunk-O337TVCZ.js";import{f as O,m as l,o as u}from"./chunk-GLD6H5Q5.js";l();u();var _=O(F());var te=O($());function Ue({className:r,style:e,text:n,maxWidth:o,tooltipProps:a={},...m}){let h=(0,_.useRef)(null),[d,c]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{c(h.current&&ve(h.current))},[n]),_.default.createElement(he,{disabled:!d,title:n,...a,prefixClassName:(0,te.default)("text-ellipsis-tooltip",a?.prefixClassName)},_.default.createElement("div",{className:(0,te.default)("text-ellipsis-tooltip__text",r),style:{...e||{},maxWidth:o},ref:h,...m},n))}var $e=(0,_.memo)(Ue);l();u();l();u();var S=O(F());l();u();l();u();function V(){return V=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])}return r},V.apply(this,arguments)}l();u();function G(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}l();u();l();u();function q(r,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},q(r,e)}function re(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,q(r,e)}l();u();var ge=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Ve(r,e){return!!(r===e||ge(r)&&ge(e))}function qe(r,e){if(r.length!==e.length)return!1;for(var n=0;n<r.length;n++)if(!Ve(r[n],e[n]))return!1;return!0}function je(r,e){e===void 0&&(e=qe);var n,o=[],a,m=!1;function h(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return m&&n===this&&e(d,o)||(a=r.apply(this,d),m=!0,n=this,o=d),a}return h}var Z=je;var H=O(F());l();u();var Be=typeof performance=="object"&&typeof performance.now=="function",Se=Be?function(){return performance.now()}:function(){return Date.now()};function we(r){cancelAnimationFrame(r.id)}function Ke(r,e){var n=Se();function o(){Se()-n>=e?r.call(null):a.id=requestAnimationFrame(o)}var a={id:requestAnimationFrame(o)};return a}var L=null;function Ie(r){if(r===void 0&&(r=!1),L===null||r){var e=document.createElement("div"),n=e.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var o=document.createElement("div"),a=o.style;return a.width="100px",a.height="100px",e.appendChild(o),document.body.appendChild(e),e.scrollLeft>0?L="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?L="negative":L="positive-ascending"),document.body.removeChild(e),L}return L}var Ge=150,Ze=function(e,n){return e};function Je(r){var e,n=r.getItemOffset,o=r.getEstimatedTotalSize,a=r.getItemSize,m=r.getOffsetForIndexAndAlignment,h=r.getStartIndexForOffset,d=r.getStopIndexForStartIndex,c=r.initInstanceProps,g=r.shouldResetStyleCacheOnItemSizeChange,x=r.validateProps;return e=function(M){re(w,M);function w(z){var t;return t=M.call(this,z)||this,t._instanceProps=c(t.props,G(t)),t._outerRef=void 0,t._resetIsScrollingTimeoutId=null,t.state={instance:G(t),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof t.props.initialScrollOffset=="number"?t.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},t._callOnItemsRendered=void 0,t._callOnItemsRendered=Z(function(i,s,f,p){return t.props.onItemsRendered({overscanStartIndex:i,overscanStopIndex:s,visibleStartIndex:f,visibleStopIndex:p})}),t._callOnScroll=void 0,t._callOnScroll=Z(function(i,s,f){return t.props.onScroll({scrollDirection:i,scrollOffset:s,scrollUpdateWasRequested:f})}),t._getItemStyle=void 0,t._getItemStyle=function(i){var s=t.props,f=s.direction,p=s.itemSize,T=s.layout,v=t._getItemStyleCache(g&&p,g&&T,g&&f),C;if(v.hasOwnProperty(i))C=v[i];else{var b=n(t.props,i,t._instanceProps),N=a(t.props,i,t._instanceProps),E=f==="horizontal"||T==="horizontal",j=f==="rtl",B=E?b:0;v[i]=C={position:"absolute",left:j?void 0:B,right:j?B:void 0,top:E?0:b,height:E?"100%":N,width:E?N:"100%"}}return C},t._getItemStyleCache=void 0,t._getItemStyleCache=Z(function(i,s,f){return{}}),t._onScrollHorizontal=function(i){var s=i.currentTarget,f=s.clientWidth,p=s.scrollLeft,T=s.scrollWidth;t.setState(function(v){if(v.scrollOffset===p)return null;var C=t.props.direction,b=p;if(C==="rtl")switch(Ie()){case"negative":b=-p;break;case"positive-descending":b=T-f-p;break}return b=Math.max(0,Math.min(b,T-f)),{isScrolling:!0,scrollDirection:v.scrollOffset<p?"forward":"backward",scrollOffset:b,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._onScrollVertical=function(i){var s=i.currentTarget,f=s.clientHeight,p=s.scrollHeight,T=s.scrollTop;t.setState(function(v){if(v.scrollOffset===T)return null;var C=Math.max(0,Math.min(T,p-f));return{isScrolling:!0,scrollDirection:v.scrollOffset<C?"forward":"backward",scrollOffset:C,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._outerRefSetter=function(i){var s=t.props.outerRef;t._outerRef=i,typeof s=="function"?s(i):s!=null&&typeof s=="object"&&s.hasOwnProperty("current")&&(s.current=i)},t._resetIsScrollingDebounced=function(){t._resetIsScrollingTimeoutId!==null&&we(t._resetIsScrollingTimeoutId),t._resetIsScrollingTimeoutId=Ke(t._resetIsScrolling,Ge)},t._resetIsScrolling=function(){t._resetIsScrollingTimeoutId=null,t.setState({isScrolling:!1},function(){t._getItemStyleCache(-1,null)})},t}w.getDerivedStateFromProps=function(t,i){return Qe(t,i),x(t),null};var I=w.prototype;return I.scrollTo=function(t){t=Math.max(0,t),this.setState(function(i){return i.scrollOffset===t?null:{scrollDirection:i.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},I.scrollToItem=function(t,i){i===void 0&&(i="auto");var s=this.props.itemCount,f=this.state.scrollOffset;t=Math.max(0,Math.min(t,s-1)),this.scrollTo(m(this.props,t,i,f,this._instanceProps))},I.componentDidMount=function(){var t=this.props,i=t.direction,s=t.initialScrollOffset,f=t.layout;if(typeof s=="number"&&this._outerRef!=null){var p=this._outerRef;i==="horizontal"||f==="horizontal"?p.scrollLeft=s:p.scrollTop=s}this._callPropsCallbacks()},I.componentDidUpdate=function(){var t=this.props,i=t.direction,s=t.layout,f=this.state,p=f.scrollOffset,T=f.scrollUpdateWasRequested;if(T&&this._outerRef!=null){var v=this._outerRef;if(i==="horizontal"||s==="horizontal")if(i==="rtl")switch(Ie()){case"negative":v.scrollLeft=-p;break;case"positive-ascending":v.scrollLeft=p;break;default:var C=v.clientWidth,b=v.scrollWidth;v.scrollLeft=b-C-p;break}else v.scrollLeft=p;else v.scrollTop=p}this._callPropsCallbacks()},I.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&we(this._resetIsScrollingTimeoutId)},I.render=function(){var t=this.props,i=t.children,s=t.className,f=t.direction,p=t.height,T=t.innerRef,v=t.innerElementType,C=t.innerTagName,b=t.itemCount,N=t.itemData,E=t.itemKey,j=E===void 0?Ze:E,B=t.layout,We=t.outerElementType,Ne=t.outerTagName,Ee=t.style,Ae=t.useIsScrolling,Fe=t.width,ie=this.state.isScrolling,ee=f==="horizontal"||B==="horizontal",De=ee?this._onScrollHorizontal:this._onScrollVertical,ae=this._getRangeToRender(),Le=ae[0],He=ae[1],se=[];if(b>0)for(var U=Le;U<=He;U++)se.push((0,H.createElement)(i,{data:N,key:j(U,N),index:U,isScrolling:Ae?ie:void 0,style:this._getItemStyle(U)}));var le=o(this.props,this._instanceProps);return(0,H.createElement)(We||Ne||"div",{className:s,onScroll:De,ref:this._outerRefSetter,style:V({position:"relative",height:p,width:Fe,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:f},Ee)},(0,H.createElement)(v||C||"div",{children:se,ref:T,style:{height:ee?"100%":le,pointerEvents:ie?"none":void 0,width:ee?le:"100%"}}))},I._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var t=this.props.itemCount;if(t>0){var i=this._getRangeToRender(),s=i[0],f=i[1],p=i[2],T=i[3];this._callOnItemsRendered(s,f,p,T)}}if(typeof this.props.onScroll=="function"){var v=this.state,C=v.scrollDirection,b=v.scrollOffset,N=v.scrollUpdateWasRequested;this._callOnScroll(C,b,N)}},I._getRangeToRender=function(){var t=this.props,i=t.itemCount,s=t.overscanCount,f=this.state,p=f.isScrolling,T=f.scrollDirection,v=f.scrollOffset;if(i===0)return[0,0,0,0];var C=h(this.props,v,this._instanceProps),b=d(this.props,C,v,this._instanceProps),N=!p||T==="backward"?Math.max(1,s):1,E=!p||T==="forward"?Math.max(1,s):1;return[Math.max(0,C-N),Math.max(0,Math.min(i-1,b+E)),C,b]},w}(H.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var Qe=function(e,n){var o=e.children,a=e.direction,m=e.height,h=e.layout,d=e.innerTagName,c=e.outerTagName,g=e.width,x=n.instance;if(!1){var M;switch(a){case"horizontal":case"vertical":case"ltr":case"rtl":default:}switch(h){case"horizontal":case"vertical":default:}}};var Ce=Je({getItemOffset:function(e,n){var o=e.itemSize;return n*o},getItemSize:function(e,n){var o=e.itemSize;return o},getEstimatedTotalSize:function(e){var n=e.itemCount,o=e.itemSize;return o*n},getOffsetForIndexAndAlignment:function(e,n,o,a){var m=e.direction,h=e.height,d=e.itemCount,c=e.itemSize,g=e.layout,x=e.width,M=m==="horizontal"||g==="horizontal",w=M?x:h,I=Math.max(0,d*c-w),z=Math.min(I,n*c),t=Math.max(0,n*c-w+c);switch(o==="smart"&&(a>=t-w&&a<=z+w?o="auto":o="center"),o){case"start":return z;case"end":return t;case"center":{var i=Math.round(t+(z-t)/2);return i<Math.ceil(w/2)?0:i>I+Math.floor(w/2)?I:i}case"auto":default:return a>=t&&a<=z?a:a<t?t:z}},getStartIndexForOffset:function(e,n){var o=e.itemCount,a=e.itemSize;return Math.max(0,Math.min(o-1,Math.floor(n/a)))},getStopIndexForStartIndex:function(e,n,o){var a=e.direction,m=e.height,h=e.itemCount,d=e.itemSize,c=e.layout,g=e.width,x=a==="horizontal"||c==="horizontal",M=n*d,w=x?g:m,I=Math.ceil((w+o-M)/d);return Math.max(0,Math.min(h-1,n+I-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var n=e.itemSize}});var Re=O($()),R=O(fe());Pe();ce();l();u();l();u();var X=O(F()),ne=O($());ce();l();u();var J={normal:{size:32,offset:20},small:{size:16,offset:10}};function Q(r){let e=r;return typeof e=="string"&&(e=(J[r]??{}).size),typeof e!="number"&&(e=J.normal.size),e}l();u();var oe={ICON:"icon",IMG:"img"};function Xe(r){return r.includes("http")||r.match(/\.(jpeg|jpg|gif|png|svg|webp|bmp)$/)!=null?oe.IMG:oe.ICON}function Ye({style:r,className:e,src:n="",size:o="normal",noBorder:a,isNFT:m,...h}){let d=Q(o);return Xe(n)===oe.ICON?X.default.createElement(D.IconButton,{icon:n,size:D.SIZE.lg,hovhovered:!1,className:"icon-logo"}):X.default.createElement("div",{className:m?(0,ne.default)("nft-logo",e):(0,ne.default)("coin-logo",e),style:{...r||{},width:`${d}px`,height:`${d}px`,...a?{border:"none"}:{}}},X.default.createElement(me,{alt:"coin-logo",errorImg:K,src:n,...h,className:m?"nft-logo__img":"coin-logo__img",width:d,height:d}))}var P=Ye;l();u();var A=O(F()),Me=O(ke()),Te=O($()),W=O(fe());l();u();var Y=O(F());l();u();var ye={overflow:"_overflow_u5b0r_1"};function et({index:r}){return r===3?Y.default.createElement(D,{className:`${ye.overflow}`,size:D.SIZE.xxs,icon:"okds-more"}):Y.default.createElement(Y.default.Fragment,null)}var xe=et;l();u();function be({style:r,className:e,srcset:n,size:o="normal",offset:a,children:m}){let h=(0,Me.useSelector)(pe),d=Q(o),c=(typeof a=="number"?a:J[o]?.offset)??0,g;return g=A.Children.map(m,x=>x.type===P?(0,A.cloneElement)(x,{size:d,style:{...x.props.style??{}}}):null),(!g||g.length===0)&&(g=n.map((x,M)=>{let w=c,I={};return M===0&&(w=0),h==="rtl"?I={marginRight:`${-w}px`}:I={marginLeft:`${-w}px`},M>=3?A.default.createElement(xe,{index:M}):A.default.createElement(P,{src:x,className:"coin-logo-box__logo",size:d,style:I,key:M})})),A.default.createElement("div",{className:(0,Te.default)("coin-logo-box",e),style:{...r||{}}},g)}be.propsType={style:W.default.any,className:W.default.string,srcset:W.default.arrayOf(W.default.string),size:W.default.oneOf([W.default.string,W.default.number]),offset:W.default.number,children:W.default.element};var tt=be;l();u();var k=O(F()),ze=O($());function rt({className:r,text:e,keyword:n,ignoreCase:o=!0,customRender:a}){if(!e||!n)return e;let m=[],h=0,d=e,c=n;o&&(d=e.toLowerCase(),c=n.toLowerCase());let g=d.indexOf(c,h);for(;g!==-1;)m.push({subText:e.slice(h,g),highlight:!1}),h=g+c.length,m.push({subText:e.slice(g,h),highlight:!0}),g=d.indexOf(c,h);return m.push({subText:e.slice(h),highlight:!1}),k.default.createElement(k.default.Fragment,null,m.map(({subText:x,highlight:M},w)=>k.default.createElement("span",{className:(0,ze.default)(r,{"highlight-keyword":M}),key:w},a?a(x,M):x)))}var Oe=(0,k.memo)(rt);function nt({data:r,style:e,right:n,keyword:o,displayAddress:a,normalize:m,onClick:h,coinListBoxClassName:d}){let c=(0,S.useMemo)(()=>m?m(r):r,[r,m]),g=(0,S.useMemo)(()=>typeof n=="function"?n(r):n,[r,n]),x=(0,S.useMemo)(()=>!o||o.length>=10?c.symbol:S.default.createElement(Oe,{text:c.symbol,keyword:o}),[c.symbol,o]);return S.default.createElement("div",{className:(0,Re.default)("coin-list-box__item",d),style:e,onClick:M=>{h&&h(r,M)}},S.default.createElement(P,{className:"coin-list-box__item-icon",src:c.image||K,alt:""}),S.default.createElement("div",{className:"coin-list-box__item-left"},S.default.createElement("span",{className:"coin-list-box__item-symbol"},x),c.type&&S.default.createElement("span",{className:"coin-list-box__item-type"},c.type),S.default.createElement("div",{className:"coin-list-box__item-chain"},c.name),a&&c.displayAddress&&S.default.createElement("div",{className:"coin-list-box__item-address"},`${ue("wallet_manage_crypto_label_contract_address")}: ${de(c.address)}`)),g&&S.default.createElement("div",{className:"coin-list-box__item-right"},g))}function _e({height:r,list:e,...n}){let o=(0,S.useRef)(null),[a,m]=(0,S.useState)(r||0),h=({style:d,index:c})=>{let g=e[c];return S.default.createElement(nt,{data:g,style:{...d},...n})};return(0,S.useLayoutEffect)(()=>{if(typeof r=="number")m(r);else{let{top:d}=o.current.getBoundingClientRect();m(Math.min(window.innerHeight,600)-d)}},[r]),S.default.createElement("div",{className:"coin-list-box"},S.default.createElement("div",{ref:o},S.default.createElement(Ce,{height:a,itemCount:e.length,itemSize:64},h)))}_e.propTypes={height:R.default.number,list:R.default.arrayOf(R.default.shape({symbol:R.default.string,name:R.default.string,type:R.default.string,image:R.default.string,displayAddress:R.default.bool,address:R.default.string})),right:R.default.elementType,keyword:R.default.string,displayAddress:R.default.bool,onClick:R.default.func,normalize:R.default.func};_e.defaultProps={height:null,list:[],right:null,keyword:"",displayAddress:!1,onClick:null,normalize:null};export{$e as a,P as b,tt as c};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-A4CVLGFS.js.map