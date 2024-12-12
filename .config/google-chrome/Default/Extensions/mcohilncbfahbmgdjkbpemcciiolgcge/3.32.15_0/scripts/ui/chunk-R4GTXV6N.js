import{c as f}from"./chunk-5EAA4KU7.js";import{d as a}from"./chunk-UXLFUD7T.js";import{w as N}from"./chunk-JLIPSIRU.js";import{a as R}from"./chunk-R4G6BEPF.js";import{F as m,pa as B}from"./chunk-6O63U2D6.js";import{a as h}from"./chunk-O337TVCZ.js";import{f as o,m as s,o as u}from"./chunk-GLD6H5Q5.js";s();u();var t=o(h()),i=o(N());B();var p=o(R());var y=20*1e3,E=b=>{let k=(0,i.useDispatch)(),c=a(void 0,b),r=(0,t.useRef)(null);(0,t.useEffect)(()=>{let n=()=>{clearInterval(r.current),r.current=null},l=async()=>{try{let e=await c();if(m(e)){n();return}let d=await(0,p.default)(e.eth.getBlockNumber)();k(f(d))}catch(e){console.log(`fetch block failed 
${e}`)}};return l(),r.current=setInterval(()=>{l()},y),()=>{n()}},[c])},I=E;export{I as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-R4GTXV6N.js.map
