import{a as D,b as V}from"./chunk-FQ4FGGZV.js";import"./chunk-O2YW3UOK.js";import{a as W}from"./chunk-BUZ3YKBY.js";import"./chunk-UXLFUD7T.js";import"./chunk-2HEOW3XO.js";import"./chunk-DLRFA5AU.js";import"./chunk-OC3IFNJW.js";import"./chunk-UI7PAU35.js";import"./chunk-Y6SGFHFT.js";import"./chunk-V4NJDTLC.js";import"./chunk-OFKAKQXT.js";import{i as Z}from"./chunk-IQUFOLSA.js";import"./chunk-KA5XDNKC.js";import"./chunk-HXUMX2S7.js";import"./chunk-ZYEEMVIP.js";import"./chunk-BOOOUD52.js";import"./chunk-TBLUUKKO.js";import{Na as B,Oa as y}from"./chunk-S5DGV5WL.js";import{q as v}from"./chunk-WKBC6JL3.js";import"./chunk-3EO5SKIF.js";import"./chunk-LMIOM5QK.js";import"./chunk-VPDRXROE.js";import"./chunk-JLIPSIRU.js";import"./chunk-CIDV5VJQ.js";import{a as w}from"./chunk-VX55KNI4.js";import"./chunk-4TYAYDA2.js";import"./chunk-LDX3S2CG.js";import"./chunk-TS5DNQFS.js";import"./chunk-656GFN7J.js";import"./chunk-VGT27A4M.js";import"./chunk-R4G6BEPF.js";import"./chunk-S3MY46XE.js";import"./chunk-2333N6PK.js";import"./chunk-AYCAVTPT.js";import"./chunk-OG46YTNN.js";import{c as a}from"./chunk-RXNDJ7P3.js";import{a as z}from"./chunk-YM7II27E.js";import"./chunk-CYOQISC6.js";import"./chunk-TKYTZF2K.js";import"./chunk-RY27BWZR.js";import"./chunk-WIWWLEBZ.js";import{Jb as et,Ka as M,Lc as P,Rc as rt}from"./chunk-YT2MPR4E.js";import"./chunk-R4ZXRZL6.js";import{D as m,E as Y,G as q,U as G,q as x,w as U}from"./chunk-LDKM7IQF.js";import"./chunk-6O63U2D6.js";import{M as k,x as r}from"./chunk-RIOWPXBZ.js";import"./chunk-BAWLRI3I.js";import"./chunk-USKTQDCY.js";import"./chunk-B2L2MSSC.js";import"./chunk-OIIWKMG6.js";import{ca as i}from"./chunk-OSCGYMLH.js";import"./chunk-ADWO6K2C.js";import{a as c}from"./chunk-O337TVCZ.js";import"./chunk-2T657SRL.js";import"./chunk-QJAZEJHH.js";import"./chunk-LCKQ7YKT.js";import"./chunk-ZVYHIM2Y.js";import"./chunk-VBARKITZ.js";import"./chunk-NCANHNXF.js";import{f as n,m as t,o}from"./chunk-GLD6H5Q5.js";t();o();var N=n(c()),T=n(w());t();o();var g=n(c());t();o();var S=n(c());t();o();var C={root:"_root_dowdc_1",header:"_header_dowdc_30"};function it({children:s,hidden:u=!1}){return S.default.createElement(a.Box,{className:C.root},S.default.createElement(W,{className:C.header}),u?null:s)}var h=it;t();o();var b=n(c());k();t();o();var d={root:"_root_1rren_1",titleBox:"_titleBox_1rren_17",logo:"_logo_1rren_96",title:"_title_1rren_17",add:"_add_1rren_120"};function at(){let s=z();return b.default.createElement(a.FlexBox,{direction:a.DIRECTION.vertical,align:a.ALIGN.center,className:d.titleBox},b.default.createElement(Y,{src:`${s}/cdn/assets/imgs/249/A13F3F8A67C734E0.png`,className:d.logo}),b.default.createElement(a.Box,{className:d.title},r("wallet_extension_cat_title_bitcoin_inscription")))}var j=at;t();o();var e=n(c()),K=n(w());k();et();rt();t();o();var E={root:"_root_go9nk_2",confirm:"_confirm_go9nk_40",label:"_label_go9nk_58",name:"_name_go9nk_64",nums:"_nums_go9nk_71",mt5:"_mt5_go9nk_77"};var nt="Cat20";function lt(){let s=(0,K.useHistory)(),u=Z(),f=m.useForm(),[O,L]=(0,e.useState)(!1),R=async F=>{try{if(O||Object.keys(f.getErrors()).length>0)return;L(!0);let{address:_t,amount:ut,times:ot,tokenId:pt}=F;for(let H=0;H<ot;H++);L(!1),s.push(y)}catch{q.error({title:r("wallet_extension_cat_header_toast_inscription_failed")}),L(!1)}},A=(0,e.useMemo)(()=>(u?.addressType[M]||[]).filter(p=>p.addressType===P.SEGWIT_TAPROOT).map(p=>({label:p.address,value:p.address})),[u]),tt=()=>{f.setValues({tokenId:"45ee725c2c5993b3e4d308842d87e973bf1951f5f7a804b21e4dd964ecd12d6b_0"})};return e.default.createElement(a.Box,{className:E.root},e.default.createElement(m,{requiredMark:!0,onSubmit:R,form:f,initialValues:{tokenId:"",address:A[0]?.value,amount:5,times:1}},e.default.createElement(m.Item,{label:r("wallet_extension_cat_header_cat_token_id"),name:"tokenId",rules:[{required:!0}]},e.default.createElement(x,{size:x.SIZE.md}),e.default.createElement(G,{className:E.mt5,iconName:"okx-wallet-plugin-plus",onClick:tt},nt)),e.default.createElement(m.Item,{label:r("extension_wallet_address_title_wallet_address"),name:"address",rules:[{required:!0}]},e.default.createElement(U,{title:r("wallet_extension_addaccount_title_select_wallet"),options:A,searchable:!1,showSelectedIcon:!0})),e.default.createElement(m.Item,{label:r("wallet_extension_cat_header_amount"),name:"amount",rules:[{required:!0}]},e.default.createElement(x.Number,{precision:0})),e.default.createElement(m.Item,{label:r("wallet_extension_cat_input_label_repeat_transaction"),name:"times",rules:[{required:!0}],help:r("wallet_extension_cat_input_desc_one_signature")},e.default.createElement(x.Number,{prefixIcon:"okx-wallet-plugin-x",precision:0,withOperation:!0,min:1,max:25})),e.default.createElement(m.Item,{noStyle:!0,className:E.confirm},e.default.createElement(i,{category:i.CATEGORY.fill,type:i.TYPE.highlight,size:i.SIZE.xl,loading:O,htmlType:"submit",block:!0},r("commonall_text_btn_confirm")))))}var $=lt;function mt(){return g.default.createElement(h,null,g.default.createElement(a.Box,{className:d.root},g.default.createElement(j,null),g.default.createElement($,null)))}var J=mt;t();o();var _=n(c()),Q=n(w());k();t();o();var I={root:"_root_3ud4b_1",title:"_title_3ud4b_16",againButton:"_againButton_3ud4b_21",gotoButton:"_gotoButton_3ud4b_25"};function st(){let s=(0,Q.useHistory)(),u=()=>{s.push(B)},f=()=>{globalThis.open("https://cat.bitatom.io/")};return _.default.createElement(h,null,_.default.createElement(a.Box,{className:I.root},_.default.createElement(V,{status:D.FINISHED}),_.default.createElement(v.Text,{strong:700,className:I.title},r("wallet_extension_cat_header_completed")),_.default.createElement(i,{className:I.againButton,category:i.CATEGORY.fill,type:i.TYPE.highlight,size:i.SIZE.xl,onClick:u,block:!0},r("wallet_extension_cat_btn_inscribe_more")),_.default.createElement(i,{className:I.gotoButton,category:i.CATEGORY.outline,type:i.TYPE.highlight,size:i.SIZE.xl,onClick:f,block:!0,iconType:i.ICON_POSITION.leading,icon:"okx-wallet-plugin-open-link"},r("wallet_extension_cat_btn_view_in_browser"))))}var X=st;var So=()=>N.default.createElement(T.Switch,null,N.default.createElement(T.Route,{path:B,component:J,exact:!0}),N.default.createElement(T.Route,{path:y,component:X,exact:!0}));export{So as default};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=FractalBTCInscribe-LCRYJLEN.js.map