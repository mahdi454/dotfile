!function(n,t){const o="done",e=n.uniqueId+n.name+"_"+(Array.isArray(t)?t.join("_"):"");if(n.uniqueId&&Window.prototype.toString[e]===o)return;function a(){}const i=t?[].concat(n).concat(t):[n];try{(function(n){var t=function(n,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=o.callback,a=o.ctx;"function"==typeof e&&(e=void 0!==a?e.bind(a):e,setTimeout((function(){return e()})))},o={addFileExtension:a,extLink:t,file:t,getClientID:function(n,t){t&&setTimeout(t(null))},hit:t,notBounce:t,params:a,reachGoal:function(n,o,e,a,i){t(null,null,{callback:a,ctx:i})},setUserID:a,userParams:a,destruct:a};function e(n,t){for(var e=arguments.length,a=new Array(e>2?e-2:0),i=2;i<e;i++)a[i-2]=arguments[i];return o[t]&&o[t](n,...a)}void 0===window.ym?(window.ym=e,e.a=[]):window.ym&&window.ym.a&&(e.a=window.ym.a,window.ym=e,window.ym.a.forEach((function(n){var t;t=n[0],window["yaCounter".concat(t)]=o,document.dispatchEvent(new Event("yacounter".concat(t,"inited")))}))),function(n){var t="[AdGuard]";if(n.verbose){try{var o=console.trace.bind(console),e="".concat(t," ");"corelibs"===n.engine?e+=n.ruleText:(n.domainName&&(e+="".concat(n.domainName)),n.args?e+="#%#//scriptlet('".concat(n.name,"', '").concat(n.args.join("', '"),"')"):e+="#%#//scriptlet('".concat(n.name,"')")),o&&o(e)}catch(n){}"function"==typeof window.__debug&&window.__debug(n)}}(n)}).apply(this,i),n.uniqueId&&Object.defineProperty(Window.prototype.toString,e,{value:o,enumerable:!1,writable:!1,configurable:!1})}catch(n){console.log(n)}}({name:"metrika-yandex-tag",args:[]},[]);