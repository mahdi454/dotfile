import{e as B}from"./chunk-GPJC633M.js";import{c as T,h as y}from"./chunk-GSYNHSX4.js";import{h as C}from"./chunk-IQUFOLSA.js";import{X as j}from"./chunk-VPDRXROE.js";import{s as I}from"./chunk-JLIPSIRU.js";import{Ha as s,Jb as O,Oc as A,Rc as S}from"./chunk-YT2MPR4E.js";import{o as d,pa as k}from"./chunk-6O63U2D6.js";import{f as b,m as p,o as f}from"./chunk-GLD6H5Q5.js";p();f();var l=b(j());k();O();S();var G=(e,g)=>{let h=C(),a=g??h,u=B(a),i=(0,l.useCreation)(()=>u.find(t=>t.coinId===e?.coinId),[u,e?.coinId])?.childrenCoin??[],o=T(s,a),c=y(s,a);return(0,l.useCreation)(()=>{if(!e||!I(e)||!Array.isArray(i)||!Array.isArray(o)||!o.length)return[];let t=i.filter(r=>r.coinId===+e.coinId).map(r=>({...r})),m=[],n=d(t[0]||e),W=t.map(r=>c[r.addressType]);return o.forEach(({address:r,addressType:w})=>{W.includes(r)||(n.userAddress=r,n.address=r,n.addressType=A[s][w],n.coinAmount=0,n.coinAmountInt=0,n.currencyAmount=0,m.push(d(n)))}),t.concat(m).filter(r=>Boolean(c[r.addressType]))},[e,i,o,c])};export{G as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-GYYXMXJJ.js.map
