(this["webpackJsonpsolar-system"]=this["webpackJsonpsolar-system"]||[]).push([[1],{37:function(e,n,t){e.exports=t(48)},42:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(17),l=t.n(r),i=(t(42),t(29)),c=t(6),s=t(33),u=t(77),m=t(80),d=t(74),f=t(79),h=t(78);function p(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function g(){var e=o.a.useState(0),n=Object(s.a)(e,2),t=n[0],a=n[1],r=Object(c.f)().push;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{position:"static",style:{background:"#353a46"}},o.a.createElement(u.a,{container:!0,xs:12},o.a.createElement(m.a,{xsDown:!0},o.a.createElement(u.a,{xs:1,sm:3})),o.a.createElement(u.a,{xs:12,sm:6,style:{paddingLeft:"10px",paddingRight:"10px"}},o.a.createElement(f.a,{value:t,onChange:function(e,n){a(n)},"aria-label":"simple tabs example"},o.a.createElement(h.a,Object.assign({label:"Home",onClick:function(){return r("/home")}},p(0))),o.a.createElement(h.a,Object.assign({label:"Planets",onClick:function(){return r("/planets")}},p(1))),o.a.createElement(h.a,Object.assign({label:"Asteroids",onClick:function(){return r("/asteroids")}},p(2))))),o.a.createElement(m.a,{xsDown:!0},o.a.createElement(u.a,{xs:1,sm:3})))))}var E=o.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,88))})),b=o.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,95))})),v=o.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,96))})),w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(g,null),o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",{style:{color:"#fff"}},"Loading...")},o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/planets"},o.a.createElement(b,null)),o.a.createElement(c.a,{path:"/asteroids"},o.a.createElement(v,null)),o.a.createElement(c.a,{path:"/"},o.a.createElement(E,null))))))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/solar-system",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/solar-system","/service-worker.js");y?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(n,e)}))}}()}},[[37,2,3]]]);
//# sourceMappingURL=main.bdbb8a11.chunk.js.map