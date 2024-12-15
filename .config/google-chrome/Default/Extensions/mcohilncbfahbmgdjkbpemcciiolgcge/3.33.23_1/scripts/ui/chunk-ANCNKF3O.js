import{f as k,l as B,p as G}from"./chunk-QHZHYX4V.js";import{b as O}from"./chunk-DQ2UEFEE.js";import{$ as S,D as P}from"./chunk-DUKP4BLI.js";import{q as u}from"./chunk-FZCNSMLW.js";import{a as F}from"./chunk-VPGNJAK6.js";import{c as x}from"./chunk-FDCWN4NG.js";import{Mc as H,xc as A}from"./chunk-O3CM75EN.js";import{o as L,q as y}from"./chunk-J3CEQI22.js";import{L as C,w as a}from"./chunk-KJIO572I.js";import{ca as d}from"./chunk-KALFZBR5.js";import{a as N}from"./chunk-EAZTJZU7.js";import{f as W,m as s,o as m}from"./chunk-ZCHLW7CF.js";s();m();C();var Y=W(F());var b=W(N());H();var D={DELETE_WALLET:"deleteWallet",DELETE_LAST_WALLET:"deleteLastWallet",DELETE_KEYRING_WALLETS:"deleteKeyringWallets"},U={[A.MNEMONIC]:"wallet_editwallet_alert_subtitle_delete_wallet_risk",[A.PRIVATE_KEY]:"wallet_extension_editwallet_text_delete_wallet_risk2",[A.MPC]:"wallet_extension_editwallet_text_delete_wallet_risk3",[A.HARDWARE]:"wallet_extension_editwallet_text_delete_wallet_risk4"},J=()=>{let e=(0,b.useRef)(),i=(0,Y.useHistory)(),n=k(),r=G(),E=B();return(0,b.useCallback)(({walletId:o,keyringId:_,keyringType:l})=>{e.current=L.warn({alignBottom:!1,title:a("wallet_editwallet_alert_maintitle_delete_wallet_risk"),text:a(U[l]),confirmText:a("wallet_edit_wallet_btn_delete_wallet_risk"),cancelText:a("wallet_transfer_btn_cancel_transaction"),onCancel:()=>{e.current.destroy()},onConfirm:()=>{e.current.destroy();let c={nextPath:S};if(_&&!o){let g=r(_);c={keyringId:_,walletId:g?.walletIdentities?.[0]?.walletId,actionType:D.DELETE_KEYRING_WALLETS,...c}}else if(o){let g=E(o),p=n?.length===1&&n[0]?.walletIdentities?.length===1?D.DELETE_LAST_WALLET:D.DELETE_WALLET;c={walletId:o,actionType:p,keyringId:g?.keyringId,...c}}i.replace(P+O(c))}})},[n])};s();m();var T={WALLET:"WALLET",WALLETACCOUNT:"WALLETACCOUNT"},j={[T.WALLET]:"wallet_editwallet_subtitle_wallet_name",[T.WALLETACCOUNT]:"wallet_edit_wallet_maintitle_change_acoount_name"},f=25;s();m();var t=W(N());C();s();m();var w={"wallet-name-edit-dialog":"_wallet-name-edit-dialog_4hjbn_1",walletNameEditDialog:"_wallet-name-edit-dialog_4hjbn_1","wallet-name-edit-dialog-title":"_wallet-name-edit-dialog-title_4hjbn_4",walletNameEditDialogTitle:"_wallet-name-edit-dialog-title_4hjbn_4","wallet-name-edit-dialog-input-box":"_wallet-name-edit-dialog-input-box_4hjbn_8",walletNameEditDialogInputBox:"_wallet-name-edit-dialog-input-box_4hjbn_8","wallet-name-edit-dialog-input-box__extra":"_wallet-name-edit-dialog-input-box__extra_4hjbn_13",walletNameEditDialogInputBoxExtra:"_wallet-name-edit-dialog-input-box__extra_4hjbn_13","wallet-name-edit-dialog-actions":"_wallet-name-edit-dialog-actions_4hjbn_18",walletNameEditDialogActions:"_wallet-name-edit-dialog-actions_4hjbn_18"};var M=({initialName:e,otherNames:i=[],type:n=T.WALLET,onClose:r,onConfirm:E})=>{let[o,_]=(0,t.useState)(!1),[l,c]=(0,t.useState)(e||""),g=(0,t.useMemo)(()=>`${l?.length}/${f}`,[l]),p=(0,t.useMemo)(()=>l?.length>f?a("wallet_extension_hardware_wallet_notif_max_characters",{num:f}):i.includes(l)&&l!==e?a("wallet_edit_wallet_errortip_wallet_name_repeat"):null,[l,i,e]),K=(0,t.useMemo)(()=>!(l&&!p&&l!==e),[l,p,e]);return t.default.createElement(x.Box,{className:w["wallet-name-edit-dialog"]},t.default.createElement(u.Text,{strong:700,align:u.ALIGN.center,className:w["wallet-name-edit-dialog-title"]},a(j[n])),t.default.createElement(x.Box,{className:w["wallet-name-edit-dialog-input-box"]},t.default.createElement(y,{autoFocus:!0,cleanable:!0,size:y.SIZE.xl,value:l,error:p,errorType:y.TIP_TYPE.always,onChange:({target:{value:h}})=>{c(h?.trimStart()?.slice(0,f))}}),t.default.createElement(u.Text,{size:u.SIZE.sm,type:u.TYPE.secondary,className:w["wallet-name-edit-dialog-input-box__extra"]},g)),t.default.createElement(x.Space,{className:w["wallet-name-edit-dialog-actions"],direction:x.DIRECTION.horizontal,space:10},t.default.createElement(d,{block:!0,size:d.SIZE.lg,category:d.CATEGORY.outline,type:d.TYPE.primary,onClick:r},a("wallet_transfer_btn_cancel_transaction")),t.default.createElement(d,{block:!0,onClick:async()=>{try{_(!0),await E?.(l),r?.()}catch(h){console.log(h)}finally{_(!1)}},loading:o,size:d.SIZE.lg,type:d.btnType.highlight,disabled:K},a("wallet_set_password_btn_confirm"))))},z={hideCloseBtn:!0,noContentPadding:!0,alignBottom:!1},Z=t.default.memo(({visible:e,initialName:i,otherNames:n=[],type:r=T.WALLET,onClose:E,onConfirm:o})=>t.default.createElement(L,{...z,visible:e},t.default.createElement(M,{initialName:i,otherNames:n,type:r,onClose:E,onConfirm:o}))),gt=()=>(0,t.useCallback)(({initialName:e,otherNames:i=[],type:n=T.WALLET})=>new Promise((r,E)=>{let o=L.show({...z,children:t.default.createElement(M,{initialName:e,otherNames:i,type:n,onClose:()=>{o.destroy(),E()},onConfirm:async _=>{r(_)}})})}),[]);var pt=Z;export{T as a,gt as b,pt as c,J as d};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-ANCNKF3O.js.map