!function(n,e){const o="done",t=n.uniqueId+n.name+"_"+(Array.isArray(e)?e.join("_"):"");if(n.uniqueId&&Window.prototype.toString[t]===o)return;function a(){}const c=e?[].concat(n).concat(e):[n];try{(function(n){var e=function(){};e.prototype={setVideoObject:a,newProgram:a,programEvent:a,newAd:a,adEvent:a},window.GemiusPlayer=e,function(n){var e="[AdGuard]";if(n.verbose){try{var o=console.trace.bind(console),t="".concat(e," ");"corelibs"===n.engine?t+=n.ruleText:(n.domainName&&(t+="".concat(n.domainName)),n.args?t+="#%#//scriptlet('".concat(n.name,"', '").concat(n.args.join("', '"),"')"):t+="#%#//scriptlet('".concat(n.name,"')")),o&&o(t)}catch(n){}"function"==typeof window.__debug&&window.__debug(n)}}(n)}).apply(this,c),n.uniqueId&&Object.defineProperty(Window.prototype.toString,t,{value:o,enumerable:!1,writable:!1,configurable:!1})}catch(n){console.log(n)}}({name:"gemius",args:[]},[]);