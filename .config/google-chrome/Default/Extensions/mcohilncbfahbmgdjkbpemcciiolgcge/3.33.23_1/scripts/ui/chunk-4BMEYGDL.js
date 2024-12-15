import{a as L}from"./chunk-K4MSA5MN.js";import{c as e,d as o}from"./chunk-4HBLPFAF.js";import{i as f,o as l}from"./chunk-QHZHYX4V.js";import{Mc as _,xc as A}from"./chunk-O3CM75EN.js";import{o as S}from"./chunk-J3CEQI22.js";import{a as C}from"./chunk-EAZTJZU7.js";import{f as T,m as n,o as c}from"./chunk-ZCHLW7CF.js";n();c();n();c();var E=T(C());var w=({keyringId:u="",actionMap:r,customConfig:i})=>{let a=l(u),{accountStatus:t,mpcStatus:s}=a?.status||{},M=(0,E.useMemo)(()=>t===e.FROZEN||t===e.DELETE||s===o.ESCAPE||s===o.RECOVER,[t,s]),W=(0,E.useMemo)(()=>{let p,m;switch(!0){case s===o.RECOVER:p=r["RECOVER"],m=r["SWITCH_WALLET"];break;case s===o.ESCAPE:case t===e.FROZEN:case t===e.DELETE:p=r["SWITCH_WALLET"];break;default:break}return L({accountStatus:t,mpcStatus:s},{onConfirm:p,onCancel:m,...i})},[t,r,s]);return E.default.createElement(S.Prompt,{visible:M,...W})};n();c();_();var P=T(C()),K=u=>{let r=f(u),i=(0,P.useMemo)(()=>{let{accountStatus:a,mpcStatus:t}=r?.status||{accountStatus:e.NORMAL,mpcStatus:o.INIT};switch(!0){case t===o.RECOVER:case t===o.ESCAPE:case a===e.FROZEN:case a===e.DELETE:return!1;default:return!0}},[r]);return r?.keyringIdentityType!==A.MPC||i};export{w as a,K as b};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-4BMEYGDL.js.map
