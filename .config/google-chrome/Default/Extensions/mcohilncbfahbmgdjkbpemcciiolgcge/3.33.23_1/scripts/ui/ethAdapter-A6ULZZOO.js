import{a as I,b as S}from"./chunk-5KHVEAA2.js";import{a as H}from"./chunk-5VQI422C.js";import"./chunk-F64IIDQ5.js";import"./chunk-CV2I3OFZ.js";import{a as _}from"./chunk-PATMVYTE.js";import{a as y,b as P}from"./chunk-NOGKPIVH.js";import"./chunk-SKK4O3IC.js";import"./chunk-L4BR2EHM.js";import"./chunk-AQH6QKNE.js";import"./chunk-6IVHTBSR.js";import"./chunk-ZZ2GLIOF.js";import"./chunk-CJ24R5OH.js";import{a as x}from"./chunk-5IJLIHE4.js";import"./chunk-75OW6LUI.js";import"./chunk-JJIQEHOY.js";import"./chunk-YJ2NGJXA.js";import{d as l,f as E}from"./chunk-3HS6AHPS.js";import"./chunk-JUXPONKW.js";import"./chunk-WSUAESF2.js";import{a as D}from"./chunk-O2FUKKO3.js";import{a as w}from"./chunk-GCXT25LW.js";import{V as c,Ya as O}from"./chunk-O3CM75EN.js";import"./chunk-ZGRAPBBU.js";import{H as g}from"./chunk-J3CEQI22.js";import"./chunk-VFHYER2K.js";import{L as M,w as T}from"./chunk-KJIO572I.js";import"./chunk-HJXNXGYU.js";import"./chunk-KALFZBR5.js";import"./chunk-V55FEIYE.js";import"./chunk-EAZTJZU7.js";import"./chunk-3AN5FAZD.js";import"./chunk-AKCHCVUS.js";import"./chunk-VOT7VHG3.js";import"./chunk-SYQUJKIR.js";import"./chunk-KZFZROAL.js";import"./chunk-WPMHLM7C.js";import"./chunk-P7DU4NJA.js";import"./chunk-KW7JYBDS.js";import"./chunk-224G4QSH.js";import{f,m as u,o as d}from"./chunk-ZCHLW7CF.js";u();d();var v=f(H()),m=f(I()),o=f(D());M();E();O();var h=class extends S{async signTransaction(a,t,e){let p=a.hdPathMap[c];t=x(t);let r=await y(t),{payload:s,success:n}=await m.default.ethereumSignTransaction({path:p,transaction:{...r.toJSON(),to:(0,o.bufferToHex)(r.to).toString(),chainId:t.chainId}});if(n){globalThis.platform.focusCurrentWindow();let i=await P(r,{...s});return _(i,t.from)?e?i:{rawTxResult:i}:this.throwInvalidPassPhraseTip()}return this.throwTxCancelTip()}async signPersonalMessage(a,t={}){let e=a.hdPathMap[c],{data:p=""}=t||{},{success:r,payload:s}=await m.default.ethereumSignMessage({path:e,message:(0,o.stripHexPrefix)(p),hex:!0});if(r){globalThis.platform.focusCurrentWindow();let{signature:n=""}=s||{};return(0,o.addHexPrefix)(n)}return this.throwTxCancelTip()}async signTypedData(a,t={}){let e=a.hdPathMap[c];if(!(t.version==="V4"))throw new Error("Trezor: Only version 4 of typed data signing is supported");let r=JSON.parse(t.data),{domain_separator_hash:s,message_hash:n}=(0,v.default)(r,!0),{success:i,payload:C}=await m.default.ethereumSignTypedData({path:e,data:r,metamask_v4_compat:!0,domain_separator_hash:s,message_hash:n});return i?(l().focusLastOkPopupWithCache(),C?.signature):this.throwTxCancelTip()}throwInvalidPassPhraseTip(){throw g.error(T("wallet_extension_transaction_toast_trezor")),new Error(w)}},j=new h;export{j as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=ethAdapter-A6ULZZOO.js.map