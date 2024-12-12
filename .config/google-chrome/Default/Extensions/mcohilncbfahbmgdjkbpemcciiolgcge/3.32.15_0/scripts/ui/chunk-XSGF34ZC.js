import{e as T}from"./chunk-GPJC633M.js";import{c as g,i as C}from"./chunk-GSYNHSX4.js";import{h as y}from"./chunk-IQUFOLSA.js";import{X as b}from"./chunk-VPDRXROE.js";import{t as A}from"./chunk-JLIPSIRU.js";import{$a as s,Jb as R,Oc as I,Rc as S}from"./chunk-YT2MPR4E.js";import{o as u,pa as N}from"./chunk-6O63U2D6.js";import{f as w,m as p,o as f}from"./chunk-GLD6H5Q5.js";p();f();N();R();S();var d=w(b());var z=(n,h)=>{let B=y(),a=h??B,l=T(a),i=(0,d.useCreation)(()=>l.find(t=>t.coinId===n?.coinId),[l,n?.coinId])?.childrenCoin??[],o=g(s,a),c=C(s,a);return(0,d.useCreation)(()=>{if(!n||!A(n)||!Array.isArray(i)||!Array.isArray(o)||!o.length)return[];let t=i.filter(r=>r.coinId===+n.coinId).map(r=>({...r})),m=[],e=u(t[0]||n),E=t.map(r=>c[r.addressType]);return o.forEach(({address:r,addressType:W})=>{E.includes(r)||(e.address=r,e.addressType=I[s][W],e.coinAmount=0,e.coinAmountInt=0,e.currencyAmount=0,e.currencyAmountUSD=0,m.push(u(e)))}),t.concat(m).filter(r=>Boolean(c[r.addressType]))},[n,i,o,c])};export{z as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-XSGF34ZC.js.map
