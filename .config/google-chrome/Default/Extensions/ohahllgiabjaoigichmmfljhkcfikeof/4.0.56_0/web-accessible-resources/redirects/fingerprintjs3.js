!function(n,o){const e="done",t=n.uniqueId+n.name+"_"+(Array.isArray(o)?o.join("_"):"");if(n.uniqueId&&Window.prototype.toString[t]===e)return;function r(){return""}const i=o?[].concat(n).concat(o):[n];try{(function(n){var o=function(){for(var n="",o=0;o<8;o+=1)n+=(65536*Math.random()+4096).toString(16).slice(-4);return n}(),e=function(){};e.prototype={load:()=>Promise.resolve(new e),get:()=>Promise.resolve({visitorId:o}),hashComponents:r},window.FingerprintJS=new e,function(n){var o="[AdGuard]";if(n.verbose){try{var e=console.trace.bind(console),t="".concat(o," ");"corelibs"===n.engine?t+=n.ruleText:(n.domainName&&(t+="".concat(n.domainName)),n.args?t+="#%#//scriptlet('".concat(n.name,"', '").concat(n.args.join("', '"),"')"):t+="#%#//scriptlet('".concat(n.name,"')")),e&&e(t)}catch(n){}"function"==typeof window.__debug&&window.__debug(n)}}(n)}).apply(this,i),n.uniqueId&&Object.defineProperty(Window.prototype.toString,t,{value:e,enumerable:!1,writable:!1,configurable:!1})}catch(n){console.log(n)}}({name:"fingerprintjs3",args:[]},[]);