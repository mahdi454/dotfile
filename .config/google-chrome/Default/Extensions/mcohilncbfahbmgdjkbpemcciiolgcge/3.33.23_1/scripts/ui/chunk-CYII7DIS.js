import{c as u,m as h,o as f}from"./chunk-ZCHLW7CF.js";var s=u((w,l)=>{h();f();var t=function(r){if(!Array.isArray(r))throw new Error("Input must be an Array");if(r.length===0)throw new Error("Path must contain at least one level");for(var e=0;e<r.length;e++)if(typeof r[e]!="number")throw new Error("Path element is not a number");this.path=r};t.validatePathArray=function(r){try{return t.fromPathArray(r),!0}catch{return!1}};t.validateString=function(r,e){try{return t.fromString(r,e),!0}catch{return!1}};t.fromPathArray=function(r){return new t(r)};t.fromString=function(r,e){if(/^m\//i.test(r))r=r.slice(2);else if(e)throw new Error("Root element is required");for(var a=r.split("/"),n=new Array(a.length),o=0;o<a.length;o++){var i=/(\d+)([hH\']?)/.exec(a[o]);if(i===null)throw new Error("Invalid input");if(n[o]=parseInt(i[1],10),n[o]>=2147483648)throw new Error("Invalid child index");if(i[2]==="h"||i[2]==="H"||i[2]==="'")n[o]+=2147483648;else if(i[2].length!=0)throw new Error("Invalid modifier")}return new t(n)};t.prototype.toPathArray=function(){return this.path};t.prototype.toString=function(r,e){for(var a=new Array(this.path.length),n=0;n<this.path.length;n++){var o=this.path[n];o&2147483648?a[n]=(o&2147483647)+(e?"h":"'"):a[n]=o}return(r?"":"m/")+a.join("/")};t.prototype.inspect=function(){return"BIPPath <"+this.toString()+">"};l.exports=t});export{s as a};

window.inOKXExtension = true;
window.inMiniApp = false;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-CYII7DIS.js.map