import{a as R}from"./chunk-45IMRLZC.js";import{b as h,c as k}from"./chunk-OMPMSPR2.js";import{d as C}from"./chunk-J2H2J7IS.js";import{a as N}from"./chunk-L7LFNDLE.js";import{a as _}from"./chunk-2HEOW3XO.js";import{X as G}from"./chunk-VPDRXROE.js";import{a as q}from"./chunk-VX55KNI4.js";import{q as S,s as z}from"./chunk-VGT27A4M.js";import{Jb as O,Xa as a,ub as c}from"./chunk-YT2MPR4E.js";import{H as t}from"./chunk-LDKM7IQF.js";import{M,x as i}from"./chunk-RIOWPXBZ.js";import{a as b}from"./chunk-O337TVCZ.js";import{f as s,m as y,o as d}from"./chunk-GLD6H5Q5.js";y();d();var E=s(b()),w=s(q());M();var A=s(G());O();z();var H=m=>{let x=N(),f=m.registerStatus||Number(x.get("registerStatus")),{isOnlyConfirmButton:L=!1,deployErrorCallback:o,onBack:e}=m,r=(0,w.useHistory)(),u=_(a),T=h(u),{isLoading:B,isError:D,maxFee:l,nonce:F}=T||{},p=k({nonce:F,maxFee:l,address:u}),n=C(c),I=(0,A.useMemoizedFn)(async()=>{try{if(f===S.PROCESSING){t.warn(i("wallet_extension_notif_registration_inprogress",{chainName:n?.chainName})),e&&typeof e=="function"?e():r.go(-1);return}await p(),t.success(i("wallet_extension_notif_registration_inprogress",{chainName:n?.chainName})),e&&typeof e=="function"?e():r.go(-1)}catch(g){o&&typeof o=="function"&&o(),t.error(g?.error_message||g)}},[n?.chainName,p,o,r,e,f]);return E.default.createElement(R,{networkFee:l,coinId:c,localType:a,feeLoading:B,feeError:D,onConfirm:I,useCancelButton:!L})},Y=H;export{Y as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-K5QLLGFQ.js.map