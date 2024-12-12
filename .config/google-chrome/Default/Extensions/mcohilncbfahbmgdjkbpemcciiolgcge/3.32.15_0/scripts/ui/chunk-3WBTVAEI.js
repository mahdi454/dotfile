import{c as d,d as p}from"./chunk-UBFVE3Q4.js";import{d as a}from"./chunk-UI7PAU35.js";import{w as v}from"./chunk-JLIPSIRU.js";import{H as r,o as m}from"./chunk-LDKM7IQF.js";import{M as g,x as e}from"./chunk-RIOWPXBZ.js";import{ca as o}from"./chunk-OSCGYMLH.js";import{a as x}from"./chunk-O337TVCZ.js";import{f as s,m as _,o as c}from"./chunk-GLD6H5Q5.js";_();c();var f=s(x()),t=s(v());g();function S(){let w=(0,t.useDispatch)(),{currentNetworkUniqueId:n}=(0,t.useSelector)(a),{deleteRpcNetwork:u}=p();return(0,f.useCallback)(({editRpcInfo:l,onDeleted:i})=>{if(d(l,{uniqueId:n})){r.error({title:e("developer_mode_network_toast_cannot_delete"),top:16});return}let k=m.warn({title:e("extension_wallet_network_modaltitle_delete_confirm"),text:e("extension_wallet_network_modaldesc_delete_confirm"),confirmText:e("extension_wallet_network_text_remove_network"),confirmBtnProps:{type:o.TYPE.red,size:o.SIZE.lg},cancelText:e("developer_mode_network_btn_botcancel"),alignBottom:!1,onConfirm:async()=>{await u(l),r.success(e("developer_mode_network_toast_delete_done")),k.destroy(),i&&i()}})},[w,n])}export{S as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-3WBTVAEI.js.map
