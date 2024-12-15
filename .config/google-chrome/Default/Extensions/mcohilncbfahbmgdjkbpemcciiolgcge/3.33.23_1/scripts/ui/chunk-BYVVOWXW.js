import{c as f}from"./chunk-L6WH2C7V.js";import{d as a}from"./chunk-6UFIPREK.js";import{w as N}from"./chunk-3TDWET6C.js";import{a as R}from"./chunk-3HS6AHPS.js";import{F as m,pa as h}from"./chunk-VFHYER2K.js";import{a as B}from"./chunk-EAZTJZU7.js";import{f as o,m as s,o as u}from"./chunk-ZCHLW7CF.js";s();u();var t=o(B()),i=o(N());h();var p=o(R());var y=20*1e3,E=b=>{let k=(0,i.useDispatch)(),c=a(void 0,b),r=(0,t.useRef)(null);(0,t.useEffect)(()=>{let n=()=>{clearInterval(r.current),r.current=null},l=async()=>{try{let e=await c();if(m(e)){n();return}let d=await(0,p.default)(e.eth.getBlockNumber)();k(f(d))}catch(e){console.log(`fetch block failed 
${e}`)}};return l(),r.current=setInterval(()=>{l()},y),()=>{n()}},[c])},I=E;export{I as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-BYVVOWXW.js.map
