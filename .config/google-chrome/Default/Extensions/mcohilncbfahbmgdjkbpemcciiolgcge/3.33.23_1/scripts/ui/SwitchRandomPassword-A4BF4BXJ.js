import{a as w}from"./chunk-ZUBNNPBM.js";import"./chunk-LXIBKSOK.js";import"./chunk-DUKP4BLI.js";import"./chunk-S3O4LR55.js";import{q as c}from"./chunk-FZCNSMLW.js";import"./chunk-WANYNTD6.js";import"./chunk-QMGTBJAL.js";import{o as C}from"./chunk-KCWFMCND.js";import{Qa as _,w as N}from"./chunk-3TDWET6C.js";import"./chunk-EBR3PGFZ.js";import"./chunk-UDGUBKMO.js";import"./chunk-VPGNJAK6.js";import"./chunk-W6Q44ZHW.js";import{d,f as B}from"./chunk-3HS6AHPS.js";import"./chunk-WSUAESF2.js";import"./chunk-O2FUKKO3.js";import{c as n}from"./chunk-FDCWN4NG.js";import"./chunk-O3CM75EN.js";import"./chunk-ZGRAPBBU.js";import{C as f,H as p}from"./chunk-J3CEQI22.js";import"./chunk-VFHYER2K.js";import{L as F,w as a}from"./chunk-KJIO572I.js";import"./chunk-HJXNXGYU.js";import"./chunk-77ECUYXV.js";import"./chunk-4BZBCAHV.js";import"./chunk-KALFZBR5.js";import"./chunk-V55FEIYE.js";import{a as E}from"./chunk-EAZTJZU7.js";import"./chunk-VOT7VHG3.js";import"./chunk-SYQUJKIR.js";import"./chunk-WPMHLM7C.js";import"./chunk-P7DU4NJA.js";import"./chunk-KW7JYBDS.js";import"./chunk-224G4QSH.js";import{f as l,m as e,o as i}from"./chunk-ZCHLW7CF.js";e();i();var t=l(E()),x=l(N()),s=l(C());F();B();e();i();var r={actionRow:"_actionRow_6expi_1",title:"_title_6expi_4",notificationText:"_notificationText_6expi_8"};var M=()=>{let g=(0,x.useSelector)(_),[h,{setTrue:u,setFalse:y}]=(0,s.useBoolean)(!1),[T,b]=(0,t.useState)(g),S=!T,m=()=>{p.error({title:a("wallet_extension_alertbanner_unlock_fail")})},L=async()=>{try{let o=await d().switchEnableRandom();typeof o=="boolean"?b(o):m()}catch(o){console.log(o),m()}},k=(0,s.useMemoizedFn)(async()=>{u(),await L(),y()});return t.default.createElement(n.Container,null,t.default.createElement(w,{bordered:!1}),t.default.createElement(n.FlexBox,{justify:"space-between",align:n.ALIGN.center,className:r.actionRow},t.default.createElement(c.Text,{strong:700,className:r.title},a("wallet_extension_settings_not_affected")),t.default.createElement(f,{loading:h,checked:S,onClick:k})),t.default.createElement(c.Text,{className:r.notificationText},a("wallet_extension_settings_notification_not_affected")))},U=M;export{U as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=SwitchRandomPassword-A4BF4BXJ.js.map