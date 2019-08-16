!function(e){function n(n){for(var t,o,c=n[0],i=n[1],d=n[2],a=0,s=[];a<c.length;a++)o=c[a],k[o]&&s.push(k[o][0]),k[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(U&&U(n);s.length;)s.shift()();return I.push.apply(I,d||[]),r()}function r(){for(var e,n=0;n<I.length;n++){for(var r=I[n],t=!0,o=1;o<r.length;o++){var c=r[o];0!==k[c]&&(t=!1)}t&&(I.splice(n--,1),e=S(S.s=r[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!_[e]||!O[e])return;for(var r in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(y[r]=n[r]);0===--b&&0===w&&E()}(e,n),t&&t(e,n)};var o,c=!0,i="314ab914dbe0f3871d5f",d=1e4,a={},s=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:x,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var v,y,m,b=0,w=0,g={},O={},_={};function j(e){return+e+""===e?+e:e}function x(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,h("check"),(n=d,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(c){return r(c)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(c){return void r(c)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;O={},g={},_=e.c,m=e.h,h("prepare");var n=new Promise(function(e,n){v={resolve:e,reject:n}});for(var r in y={},k)D(r);return"prepare"===f&&0===w&&0===b&&E(),n});var n}function D(e){_[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+i+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):g[e]=!0}function E(){h("ready");var e=v;if(v=null,e)if(c)Promise.resolve().then(function(){return P(c)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&n.push(j(r));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,c,d;function u(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,d=o.chain;if((c=H[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<c.parents.length;a++){var s=c.parents[a],u=H[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),l(r[s],[i])):(delete r[s],n.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},v=[],b={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var O;d=j(g);var x=!1,D=!1,E=!1,P="";switch((O=y[g]?u(d):{type:"disposed",moduleId:g}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(x=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(O),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),E=!0;break;default:throw new Error("Unexception type "+O.type)}if(x)return h("abort"),Promise.reject(x);if(D)for(d in b[d]=y[d],l(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(p[d]||(p[d]=[]),l(p[d],O.outdatedDependencies[d]));E&&(l(v,[O.moduleId]),b[d]=w)}var I,M=[];for(t=0;t<v.length;t++)d=v[t],H[d]&&H[d].hot._selfAccepted&&b[d]!==w&&M.push({module:d,errorHandler:H[d].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete k[e]}(e)});for(var A,q,U=v.slice();U.length>0;)if(d=U.pop(),c=H[d]){var z={},R=c.hot._disposeHandlers;for(o=0;o<R.length;o++)(r=R[o])(z);for(a[d]=z,c.hot.active=!1,delete H[d],delete p[d],o=0;o<c.children.length;o++){var C=H[c.children[o]];C&&((I=C.parents.indexOf(d))>=0&&C.parents.splice(I,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(c=H[d]))for(q=p[d],o=0;o<q.length;o++)A=q[o],(I=c.children.indexOf(A))>=0&&c.children.splice(I,1);for(d in h("apply"),i=m,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var N=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(c=H[d])){q=p[d];var J=[];for(t=0;t<q.length;t++)if(A=q[t],r=c.hot._acceptedDependencies[A]){if(-1!==J.indexOf(r))continue;J.push(r)}for(t=0;t<J.length;t++){r=J[t];try{r(q)}catch(L){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:q[t],error:L}),n.ignoreErrored||N||(N=L)}}}for(t=0;t<M.length;t++){var T=M[t];d=T.module,s=[d];try{S(d)}catch(L){if("function"===typeof T.errorHandler)try{T.errorHandler(L)}catch(X){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:X,originalError:L}),n.ignoreErrored||N||(N=X),N||(N=L)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:L}),n.ignoreErrored||N||(N=L)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(v)}))}var H={},k={1:0},I=[];function S(n){if(H[n])return H[n].exports;var r=H[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=s,s=[],u),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=H[e];if(!n)return S;var r=function(r){return n.hot.active?(H[r]?-1===H[r].parents.indexOf(e)&&H[r].parents.push(e):(s=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),S(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var c in S)Object.prototype.hasOwnProperty.call(S,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,t(c));return r.e=function(e){return"ready"===f&&h("prepare"),w++,S.e(e).then(n,function(e){throw n(),e});function n(){w--,"prepare"===f&&(g[e]||D(e),0===w&&0===b&&E())}},r.t=function(e,n){return 1&n&&(e=r(e)),S.t(e,-2&n)},r}(n)),r.l=!0,r.exports}S.m=e,S.c=H,S.d=function(e,n,r){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},S.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)S.d(r,t,function(n){return e[n]}.bind(null,t));return r},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="/calculate-asmd/",S.oe=function(e){throw console.error(e),e},S.h=function(){return i};var M=window.webpackJsonp=window.webpackJsonp||[],A=M.push.bind(M);M.push=n,M=M.slice();for(var q=0;q<M.length;q++)n(M[q]);var U=A;I.push([0,0]),r()}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"calculate-asmd","description":"calculate/arithmetic","menu":[],"version":"2.3.0","repository":false,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","typescript":true,"theme":"/Users/wangyang/Desktop/study/calculate-asmd/node_modules/docz-theme-umi/es/index.js","src":"./docs","public":"./public","base":"/calculate-asmd/","plugins":[{},{},{},{},{},{}]},"props":[],"entries":[]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("react"),o=r.n(t),c=r("react-dom"),i=r.n(c),d=r("./node_modules/docz/dist/index.esm.js"),a=r("./node_modules/docz-theme-umi/es/index.js"),s={},u=r("./.docz/app/db.json"),l=function(){return o.a.createElement(a.a,{linkComponent:d.b,db:u},o.a.createElement(d.c,{imports:s}))},p=[],f=[function(){var e=document.querySelector("#splash-spinner"),n=document.querySelector(".spinner");e&&document.head.removeChild(e),n&&n.parentNode&&n.parentNode.removeChild(n)}],h=function(){return p.forEach(function(e){return e&&e()})},v=function(){return f.forEach(function(e){return e&&e()})},y=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),i.a.render(o.a.createElement(e,null),y,v)}(l)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")},react:function(e,n){e.exports=window.React},"react-dom":function(e,n){e.exports=window.ReactDOM}});