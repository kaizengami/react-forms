!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";n(7)("createHashHistory"),t.exports=n(8).createHashHistory},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";t.exports=function(t){}},function(t,e,n){"use strict";t.exports=n(9)},function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(10)),i=r(n(11));n(12);var a=r(n(13));function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){return"/"===t.charAt(0)?t:"/"+t}function c(t){return"/"===t.charAt(0)?t.substr(1):t}function l(t,e){return function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}(t,e)?t.substr(e.length):t}function p(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function f(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}function d(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function h(t,e,n,r){var i;"string"==typeof t?(i=f(t)).state=e:(void 0===(i=s({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=o(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function v(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&i(t.state,e.state)}function m(){var t=null,e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach(function(t){return t.apply(void 0,n)})}}}var g=!("undefined"==typeof window||!window.document||!window.document.createElement);function y(t,e){e(window.confirm(t))}var b="popstate",w="hashchange";function _(){try{return window.history.state||{}}catch(t){return{}}}var x="hashchange",N={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+c(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:c,decodePath:u},slash:{encodePath:u,decodePath:u}};function P(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function S(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,0<=e?e:0)+"#"+t)}function C(t,e,n){return Math.min(Math.max(t,e),n)}e.createBrowserHistory=function(t){void 0===t&&(t={}),g||a(!1);var e=window.history,n=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),r=!(-1===window.navigator.userAgent.indexOf("Trident")),o=t,i=o.forceRefresh,c=void 0!==i&&i,f=o.getUserConfirmation,v=void 0===f?y:f,x=o.keyLength,N=void 0===x?6:x,P=t.basename?p(u(t.basename)):"";function S(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return P&&(i=l(i,P)),h(i,r,n)}function C(){return Math.random().toString(36).substr(2,N)}var k=m();function O(t){s(W,t),W.length=e.length,k.notifyListeners(W.location,W.action)}function T(t){(function(t){void 0===t.state&&navigator.userAgent.indexOf("CriOS")})(t)||U(S(t.state))}function L(){U(S(_()))}var A=!1;function U(t){A?(A=!1,O()):k.confirmTransitionTo(t,"POP",v,function(e){e?O({action:"POP",location:t}):function(t){var e=W.location,n=M.indexOf(e.key);-1===n&&(n=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(A=!0,H(o))}(t)})}var E=S(_()),M=[E.key];function j(t){return P+d(t)}function H(t){e.go(t)}var R=0;function I(t){1===(R+=t)&&1===t?(window.addEventListener(b,T),r&&window.addEventListener(w,L)):0===R&&(window.removeEventListener(b,T),r&&window.removeEventListener(w,L))}var B=!1,W={length:e.length,action:"POP",location:E,createHref:j,push:function(t,r){var o=h(t,r,C(),W.location);k.confirmTransitionTo(o,"PUSH",v,function(t){if(t){var r=j(o),i=o.key,a=o.state;if(n)if(e.pushState({key:i,state:a},null,r),c)window.location.href=r;else{var s=M.indexOf(W.location.key),u=M.slice(0,-1===s?0:s+1);u.push(o.key),M=u,O({action:"PUSH",location:o})}else window.location.href=r}})},replace:function(t,r){var o="REPLACE",i=h(t,r,C(),W.location);k.confirmTransitionTo(i,o,v,function(t){if(t){var r=j(i),a=i.key,s=i.state;if(n)if(e.replaceState({key:a,state:s},null,r),c)window.location.replace(r);else{var u=M.indexOf(W.location.key);-1!==u&&(M[u]=i.key),O({action:o,location:i})}else window.location.replace(r)}})},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(t){void 0===t&&(t=!1);var e=k.setPrompt(t);return B||(I(1),B=!0),function(){return B&&(B=!1,I(-1)),e()}},listen:function(t){var e=k.appendListener(t);return I(1),function(){I(-1),e()}}};return W},e.createHashHistory=function(t){void 0===t&&(t={}),g||a(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),r=n.getUserConfirmation,o=void 0===r?y:r,i=n.hashType,c=void 0===i?"slash":i,f=t.basename?p(u(t.basename)):"",b=N[c],w=b.encodePath,_=b.decodePath;function C(){var t=_(P());return f&&(t=l(t,f)),h(t)}var k=m();function O(t){s(W,t),W.length=e.length,k.notifyListeners(W.location,W.action)}var T=!1,L=null;function A(){var t=P(),e=w(t);if(t!==e)S(e);else{var n=C(),r=W.location;if(!T&&v(r,n))return;if(L===d(n))return;L=null,function(t){T?(T=!1,O()):k.confirmTransitionTo(t,"POP",o,function(e){e?O({action:"POP",location:t}):function(t){var e=W.location,n=j.lastIndexOf(d(e));-1===n&&(n=0);var r=j.lastIndexOf(d(t));-1===r&&(r=0);var o=n-r;o&&(T=!0,H(o))}(t)})}(n)}}var U=P(),E=w(U);U!==E&&S(E);var M=C(),j=[d(M)];function H(t){e.go(t)}var R=0;function I(t){1===(R+=t)&&1===t?window.addEventListener(x,A):0===R&&window.removeEventListener(x,A)}var B=!1,W={length:e.length,action:"POP",location:M,createHref:function(t){return"#"+w(f+d(t))},push:function(t,e){var n=h(t,void 0,void 0,W.location);k.confirmTransitionTo(n,"PUSH",o,function(t){if(t){var e=d(n),r=w(f+e);if(P()!==r){L=e,function(t){window.location.hash=t}(r);var o=j.lastIndexOf(d(W.location)),i=j.slice(0,-1===o?0:o+1);i.push(e),j=i,O({action:"PUSH",location:n})}else O()}})},replace:function(t,e){var n="REPLACE",r=h(t,void 0,void 0,W.location);k.confirmTransitionTo(r,n,o,function(t){if(t){var e=d(r),o=w(f+e);P()!==o&&(L=e,S(o));var i=j.indexOf(d(W.location));-1!==i&&(j[i]=e),O({action:n,location:r})}})},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(t){void 0===t&&(t=!1);var e=k.setPrompt(t);return B||(I(1),B=!0),function(){return B&&(B=!1,I(-1)),e()}},listen:function(t){var e=k.appendListener(t);return I(1),function(){I(-1),e()}}};return W},e.createMemoryHistory=function(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,o=void 0===r?["/"]:r,i=e.initialIndex,a=void 0===i?0:i,u=e.keyLength,c=void 0===u?6:u,l=m();function p(t){s(w,t),w.length=w.entries.length,l.notifyListeners(w.location,w.action)}function f(){return Math.random().toString(36).substr(2,c)}var v=C(a,0,o.length-1),g=o.map(function(t){return h(t,void 0,"string"==typeof t?f():t.key||f())}),y=d;function b(t){var e=C(w.index+t,0,w.entries.length-1),r=w.entries[e];l.confirmTransitionTo(r,"POP",n,function(t){t?p({action:"POP",location:r,index:e}):p()})}var w={length:g.length,action:"POP",location:g[v],index:v,entries:g,createHref:y,push:function(t,e){var r=h(t,e,f(),w.location);l.confirmTransitionTo(r,"PUSH",n,function(t){if(t){var e=w.index+1,n=w.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),p({action:"PUSH",location:r,index:e,entries:n})}})},replace:function(t,e){var r="REPLACE",o=h(t,e,f(),w.location);l.confirmTransitionTo(o,r,n,function(t){t&&(w.entries[w.index]=o,p({action:r,location:o}))})},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(t){var e=w.index+t;return 0<=e&&e<w.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return w},e.createLocation=h,e.locationsAreEqual=v,e.parsePath=f,e.createPath=d},function(t,e,n){"use strict";function r(t){return"/"===t.charAt(0)}function o(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}n.r(e),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t&&t.split("/")||[],i=e&&e.split("/")||[],a=t&&r(t),s=e&&r(e),u=a||s;if(t&&r(t)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";var c=void 0;if(i.length){var l=i[i.length-1];c="."===l||".."===l||""===l}else c=!1;for(var p=0,f=i.length;f>=0;f--){var d=i[f];"."===d?o(i,f):".."===d?(o(i,f),p++):p&&(o(i,f),p--)}if(!u)for(;p--;p)i.unshift("..");!u||""===i[0]||i[0]&&r(i[0])||i.unshift("");var h=i.join("/");return c&&"/"!==h.substr(-1)&&(h+="/"),h}},function(t,e,n){"use strict";n.r(e);var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(e,r){return t(e,n[r])});var o=void 0===e?"undefined":r(e);if(o!==(void 0===n?"undefined":r(n)))return!1;if("object"===o){var i=e.valueOf(),a=n.valueOf();if(i!==e||a!==n)return t(i,a);var s=Object.keys(e),u=Object.keys(n);return s.length===u.length&&s.every(function(r){return t(e[r],n[r])})}return!1}},function(t,e,n){"use strict";n.r(e);var r=!0;e.default=function(t,e){if(!r){if(t)return;var n="Warning: "+e;"undefined"!=typeof console&&console.warn(n);try{throw Error(n)}catch(t){}}}},function(t,e,n){"use strict";n.r(e);var r=!0,o="Invariant failed";e.default=function(t,e){if(!t)throw r?new Error(o):new Error(o+": "+(e||""))}},function(t,e,n){"use strict";n.r(e);var r=function(){},o={},i=[],a=[];function s(t,e){var n,s,u,c,l=a;for(c=arguments.length;c-- >2;)i.push(arguments[c]);for(e&&null!=e.children&&(i.length||i.push(e.children),delete e.children);i.length;)if((s=i.pop())&&void 0!==s.pop)for(c=s.length;c--;)i.push(s[c]);else"boolean"==typeof s&&(s=null),(u="function"!=typeof t)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(u=!1)),u&&n?l[l.length-1]+=s:l===a?l=[s]:l.push(s),n=u;var p=new r;return p.nodeName=t,p.children=l,p.attributes=null==e?void 0:e,p.key=null==e?void 0:e.key,void 0!==o.vnode&&o.vnode(p),p}function u(t,e){for(var n in e)t[n]=e[n];return t}function c(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function p(t,e){return s(t.nodeName,u(u({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}var f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,d=[];function h(t){!t._dirty&&(t._dirty=!0)&&1==d.push(t)&&(o.debounceRendering||l)(v)}function v(){for(var t;t=d.pop();)t._dirty&&j(t)}function m(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&g(t,e.nodeName):n||t._componentConstructor===e.nodeName}function g(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function y(t){var e=u({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function b(t){var e=t.parentNode;e&&e.removeChild(t)}function w(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)c(n,null),c(r,t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===f.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,_,a):t.removeEventListener(e,_,a),(t._listeners||(t._listeners={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t){try{t[e]=null==r?"":r}catch(t){}null!=r&&!1!==r||"spellcheck"==e||t.removeAttribute(e)}else{var s=o&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(s?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function _(t){return this._listeners[t.type](o.event&&o.event(t)||t)}var x=[],N=0,P=!1,S=!1;function C(){for(var t;t=x.shift();)o.afterMount&&o.afterMount(t),t.componentDidMount&&t.componentDidMount()}function k(t,e,n,r,o,i){N++||(P=null!=o&&void 0!==o.ownerSVGElement,S=null!=t&&!("__preactattr_"in t));var a=O(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--N||(S=!1,i||C()),a}function O(t,e,n,r,o){var i=t,a=P;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),T(t,!0))),i.__preactattr_=!0,i;var s,u,c=e.nodeName;if("function"==typeof c)return function(t,e,n,r){var o=t&&t._component,i=o,a=t,s=o&&t._componentConstructor===e.nodeName,u=s,c=y(e);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===e.nodeName;o&&u&&(!r||o._component)?(M(o,c,3,n,r),t=o.base):(i&&!s&&(H(i),t=a=null),o=U(e.nodeName,c,n),t&&!o.nextBase&&(o.nextBase=t,a=null),M(o,c,1,n,r),t=o.base,a&&t!==a&&(a._component=null,T(a,!1)));return t}(t,e,n,r);if(P="svg"===c||"foreignObject"!==c&&P,c=String(c),(!t||!g(t,c))&&(s=c,(u=P?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=u,t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),T(t,!0)}var l=i.firstChild,p=i.__preactattr_,f=e.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)p[d[h].name]=d[h].value}return!S&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&function(t,e,n,r,o){var i,a,s,u,c,l=t.childNodes,p=[],f={},d=0,h=0,v=l.length,g=0,y=e?e.length:0;if(0!==v)for(var w=0;w<v;w++){var _=l[w],x=_.__preactattr_,N=y&&x?_._component?_._component.__key:x.key:null;null!=N?(d++,f[N]=_):(x||(void 0!==_.splitText?!o||_.nodeValue.trim():o))&&(p[g++]=_)}if(0!==y)for(var w=0;w<y;w++){u=e[w],c=null;var N=u.key;if(null!=N)d&&void 0!==f[N]&&(c=f[N],f[N]=void 0,d--);else if(h<g)for(i=h;i<g;i++)if(void 0!==p[i]&&m(a=p[i],u,o)){c=a,p[i]=void 0,i===g-1&&g--,i===h&&h++;break}c=O(c,u,n,r),s=l[w],c&&c!==t&&c!==s&&(null==s?t.appendChild(c):c===s.nextSibling?b(s):t.insertBefore(c,s))}if(d)for(var w in f)void 0!==f[w]&&T(f[w],!1);for(;h<=g;)void 0!==(c=p[g--])&&T(c,!1)}(i,f,n,r,S||null!=p.dangerouslySetInnerHTML),function(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||w(t,r,n[r],n[r]=void 0,P);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||w(t,r,n[r],n[r]=e[r],P)}(i,e.attributes,p),P=a,i}function T(t,e){var n=t._component;n?H(n):(null!=t.__preactattr_&&c(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||b(t),L(t))}function L(t){for(t=t.lastChild;t;){var e=t.previousSibling;T(t,!0),t=e}}var A=[];function U(t,e,n){var r,o=A.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),R.call(r,e,n)):((r=new R(e,n)).constructor=t,r.render=E);o--;)if(A[o].constructor===t)return r.nextBase=A[o].nextBase,A.splice(o,1),r;return r}function E(t,e,n){return this.constructor(t,n)}function M(t,e,n,r,i){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r)),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&t.base?h(t):j(t,1,i)),c(t.__ref,t))}function j(t,e,n,r){if(!t._disable){var i,a,s,c=t.props,l=t.state,p=t.context,f=t.prevProps||c,d=t.prevState||l,h=t.prevContext||p,v=t.base,m=t.nextBase,g=v||m,b=t._component,w=!1,_=h;if(t.constructor.getDerivedStateFromProps&&(l=u(u({},l),t.constructor.getDerivedStateFromProps(c,l)),t.state=l),v&&(t.props=f,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,l,p)?w=!0:t.componentWillUpdate&&t.componentWillUpdate(c,l,p),t.props=c,t.state=l,t.context=p),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!w){i=t.render(c,l,p),t.getChildContext&&(p=u(u({},p),t.getChildContext())),v&&t.getSnapshotBeforeUpdate&&(_=t.getSnapshotBeforeUpdate(f,d));var P,S,O=i&&i.nodeName;if("function"==typeof O){var L=y(i);(a=b)&&a.constructor===O&&L.key==a.__key?M(a,L,1,p,!1):(P=a,t._component=a=U(O,L,p),a.nextBase=a.nextBase||m,a._parentComponent=t,M(a,L,0,p,!1),j(a,1,n,!0)),S=a.base}else s=g,(P=b)&&(s=t._component=null),(g||1===e)&&(s&&(s._component=null),S=k(s,i,p,n||!v,g&&g.parentNode,!0));if(g&&S!==g&&a!==b){var A=g.parentNode;A&&S!==A&&(A.replaceChild(S,g),P||(g._component=null,T(g,!1)))}if(P&&H(P),t.base=S,S&&!r){for(var E=t,R=t;R=R._parentComponent;)(E=R).base=S;S._component=E,S._componentConstructor=E.constructor}}for(!v||n?x.push(t):w||(t.componentDidUpdate&&t.componentDidUpdate(f,d,_),o.afterUpdate&&o.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);N||r||C()}}function H(t){o.beforeUnmount&&o.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?H(n):e&&(null!=e.__preactattr_&&c(e.__preactattr_.ref,null),t.nextBase=e,b(e),A.push(t),L(e)),c(t.__ref,null)}function R(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function I(t,e,n){return k(n,t,{},!1,e,!1)}u(R.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=u(u({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),h(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),j(this,2)},render:function(){}});n(1);var B={};function W(t,e){for(var n in e)t[n]=e[n];return t}function D(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function F(t,e){return t.index=e,t.rank=function(t){return t.attributes.default?0:(e=t.attributes.path,K(e).map($).join(""));var e}(t),t.attributes}function K(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function $(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var V=null,z=[],G=[],q={};function J(){var t;return""+((t=V&&V.location?V.location:V&&V.getCurrentLocation?V.getCurrentLocation():"undefined"!=typeof location?location:q).pathname||"")+(t.search||"")}function Q(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=z.length;e--;)if(z[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),V&&V[e]?V[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),X(t)}function X(t){for(var e=!1,n=0;n<z.length;n++)!0===z[n].routeTo(t)&&(e=!0);for(var r=G.length;r--;)G[r](t);return e}function Y(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Q(e)}}function Z(t){if(0==t.button)return Y(t.currentTarget||t.target||this),tt(t)}function tt(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function et(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e,n=t.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")&&(null!=(e=n).__preactattr_||"undefined"!=typeof Symbol&&null!=e[Symbol.for("preactattr")])){if(n.hasAttribute("native"))return;if(Y(n))return tt(t)}}while(n=n.parentNode)}}var nt=!1;var rt=function(t){function e(e){t.call(this,e),e.history&&(V=e.history),this.state={url:e.url||J()},nt||("function"==typeof addEventListener&&(V||addEventListener("popstate",function(){X(J())}),addEventListener("click",et)),nt=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){z.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;V&&(this.unlisten=V.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),z.splice(z.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(F).sort(D).map(function(t){var r=function(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),a={};if(i&&i[1])for(var s=i[1].split("&"),u=0;u<s.length;u++){var c=s[u].split("=");a[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}t=K(t.replace(o,"")),e=K(e||"");for(var l=Math.max(t.length,e.length),p=0;p<l;p++)if(e[p]&&":"===e[p].charAt(0)){var f=e[p].replace(/(^\:|[+*?]+$)/g,""),d=(e[p].match(/[+*?]+$/)||B)[0]||"",h=~d.indexOf("+"),v=~d.indexOf("*"),m=t[p]||"";if(!m&&!v&&(d.indexOf("?")<0||h)){r=!1;break}if(a[f]=decodeURIComponent(m),h||v){a[f]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&a}(e,t.attributes.path,t.attributes);if(r){if(!1!==n){var o={url:e,matches:r};return W(o,r),delete o.ref,delete o.key,p(t,o)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),a=i[0]||null;this._didRoute=!!a;var s=this.previousUrl;return o!==s&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:s,active:i,current:a})),a},e}(R);rt.subscribers=G,rt.getCurrentUrl=J,rt.route=Q,rt.Router=rt,rt.Route=function(t){return s(t.component,t)},rt.Link=function(t){return s("a",W({onClick:Z},t))};var ot=rt,it=n(0),at=n.n(it);n(2),n(3);var st=class extends R{constructor(t){super(t),this.state={isVisible:!1}}getErrorText(t){switch(t){case"phone number":return"Not valid phone number";case"login error":return"Username or password is incorrect";default:return"Wrong input value"}}render(){return s("div",null,this.getErrorText(this.props.error))}};var ut=class extends R{constructor(t){super(t),this.state={error:!1},this.submit=this.submit.bind(this)}submit(t){t.preventDefault();let e=this.inputName.value,n=this.inputPassword.value;e.length<1||n.length<1?this.setState({error:!0}):(this.setState({error:!1}),this.props.setLogin(!0),Q("/phone"))}render(){return s("div",{className:"login-wrapper"},s("form",{className:"login-form",onSubmit:this.submit},s("div",{className:"login-title"},"Log in:"),s("div",{className:"login-input-title"},"Name"),s("input",{className:"login-input",type:"text",name:"number",autoComplete:"off",ref:t=>this.inputName=t,"data-testid":"input-name"}),s("div",{className:"login-input-title"},"Password"),s("input",{className:"login-input",type:"text",name:"number",autoComplete:"off",ref:t=>this.inputPassword=t,"data-testid":"input-password"}),s("input",{className:"login-input-hidden",type:"submit",id:"submit-number"})),this.state.error&&s("div",{className:this.state.error?"login-error-box":"login-error-box-hide"},s(st,{error:"login error"})),s("label",{className:"login-input-label",htmlFor:"submit-number",tabIndex:0},"Submit"))}};n(4);var ct=class extends R{constructor(t){super(t)}render(){return s("div",{className:"steps-wrapper"},s("div",{className:"steps-step"},s("div",{className:this.props.step>0?"step-icon step-icon-active":"step-icon"},s("div",{className:"step-icon-img"},"I")),s("div",{className:"icon-title"},"Phone")),s("div",{className:"steps-step"},s("div",{className:this.props.step>1?"step-icon step-icon-active":"step-icon"},s("div",{className:"step-icon-img"},"N")),s("div",{className:"icon-title"},"Name")),s("div",{className:"steps-step"},s("div",{className:"step-icon"},s("div",{className:"step-icon-img"},"A")),s("div",{className:"icon-title"},"Address")),s("div",{className:"steps-step"},s("div",{className:"step-icon"},s("div",{className:"step-icon-img"},"C")),s("div",{className:"icon-title"},"Confirmation")),s("div",{className:"steps-step"},s("div",{className:"step-icon"},s("div",{className:"step-icon-img"},"S")),s("div",{className:"icon-title"},"Success")))}};n(5);var lt=class extends R{constructor(t){super(t),this.state={active:!1,error:!1},this.submit=this.submit.bind(this),this.onTyping=this.onTyping.bind(this),this.outOfFocus=this.outOfFocus.bind(this)}submit(t){t.preventDefault();let e=this.input.value;e.length<6?this.setState({error:!0}):this.setState({error:!1}),this.setState({error:e.length<6})}isKeyNumber(t){return!!/^[0-9]*$/.test(t)}onTyping(){const t=this.input.value,e=this.input.getAttribute("mask"),n=t.slice(-1);this.isKeyNumber(n)?this.applyMask(t,e):this.input.value=t.slice(0,-1)}applyMask(t,e){let n=e.match(/{([^}]+)}/)[1],r=this.getHyphenPosition(e);if(t.includes(n)){let e=(t=t.replace(/-/g,"")).split("");r.forEach((n,r)=>{t.length<n||e.splice(n,0,"-")}),this.input.value=e.join("")}else this.input.value=n}getHyphenPosition(t){let e=[],n=t.replace(/{/,"").replace(/}/,"");for(let t=0;t<n.length;t++)"-"===n.charAt(t)&&e.push(t);return e}outOfFocus(){4===this.input.value.length&&(this.input.value="")}componentDidMount(){this.props.setStep(1)}render(){return s("div",{className:"phone-wrapper"},s("form",{className:"phone-form",onSubmit:this.submit},s("div",{className:"phone-title"},"Phone number:"),s("input",{className:"phone-input",type:"tel",name:"number",autoComplete:"off",ref:t=>this.input=t,"data-testid":"input",pattern:"[0-9]*",onKeyDown:this.isKeyNumber,onKeyUp:this.onTyping,onFocus:this.onTyping,onBlur:this.outOfFocus,mask:"{+234}-000-000-000"}),s("input",{className:"phone-input-hidden",type:"submit",id:"submit-number"})),s("div",{className:this.state.error?"phone-error-box":"phone-error-box-hide"},s(st,{error:"phone number"})),s("label",{className:"phone-submit-label",htmlFor:"submit-number",tabIndex:0},"Submit"))}};n(6);var pt=class extends R{render(){return s("div",{className:"footer"},"Support: +234 (1) 4621100")}};var ft=class extends R{constructor(t){super(t),this.state={isLogged:!1,step:0}}setLogin(t){this.setState({isLogged:t})}setStep(t){this.setState({step:t})}render(){return s("div",{id:"root"},s("div",{class:"page"},this.state.isLogged&&s(ct,{step:this.state.step}),s(ot,{history:at()()},s(ut,{path:"/",setLogin:this.setLogin.bind(this)}),s(lt,{path:"/phone",setStep:this.setStep.bind(this)}))),s(pt,null))}};I(s(ft,null),document.body),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>{console.log("SW registered: ",t),t.pushManager.subscribe({userVisibleOnly:!0})}).catch(t=>{console.log("SW registration failed: ",t)})})}]);