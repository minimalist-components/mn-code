!function(e,t){"use strict";function n(){var e=H.splice(0,H.length);for(Qe=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)h(e[n],t)}function a(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],O(t,ae[l(t)])}function o(e){return function(t){De(t)&&(h(t,e),r(t.querySelectorAll(oe),e))}}function l(e){var t=je.call(e,"is"),n=e.nodeName.toUpperCase(),r=ce.call(re,t?ee+t.toUpperCase():J+n);return t&&-1<r&&!c(n,t)?-1:r}function c(e,t){return-1<oe.indexOf(e+'[is="'+t+'"]')}function i(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,a=e.target,o=e[W]||2,l=e[Q]||3;!Je||a&&a!==t||!t[j]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==o&&n!==l)||t[j](r,n===o?null:e.prevValue,n===l?null:e.newValue)}function u(e){var t=o(e);return function(e){H.push(t,e.target),Qe&&clearTimeout(Qe),Qe=setTimeout(n,1)}}function s(e){Ye&&(Ye=!1,e.currentTarget.removeEventListener(G,s)),r((e.target||w).querySelectorAll(oe),e.detail===z?z:_),Ie&&p()}function f(e,t){var n=this;$e.call(n,e,t),C.call(n,{target:n})}function m(e,t){Se(e,t),x?x.observe(e,We):(Ge&&(e.setAttribute=f,e[B]=R(e),e[D](Y,C)),e[D](X,i)),e[Z]&&Je&&(e.created=!0,e[Z](),e.created=!1)}function p(){for(var e,t=0,n=_e.length;t<n;t++)e=_e[t],le.contains(e)||(n--,_e.splice(t--,1),h(e,z))}function d(e){throw new Error("A "+e+" type is already registered")}function h(e,t){var n,r=l(e);-1<r&&(k(e,ae[r]),r=0,t!==_||e[_]?t!==z||e[z]||(e[_]=!1,e[z]=!0,r=1):(e[z]=!1,e[_]=!0,r=1,Ie&&ce.call(_e,e)<0&&_e.push(e)),r&&(n=e[t+U])&&n.call(e))}function b(){}function g(e,t,n){var r=n&&n[F]||"",a=t.prototype,o=xe(a),l=t.observedAttributes||me,c={prototype:o};Be(o,Z,{value:function(){if(ye)ye=!1;else if(!this[Ee]){this[Ee]=!0,new t(this),a[Z]&&a[Z].call(this);var e=He[Ae.get(t)];(!Le||e.create.length>1)&&M(this)}}}),Be(o,j,{value:function(e){-1<ce.call(l,e)&&a[j].apply(this,arguments)}}),a[V]&&Be(o,P,{value:a[V]}),a[$]&&Be(o,q,{value:a[$]}),r&&(c[F]=r),e=e.toUpperCase(),He[e]={constructor:t,create:r?[r,Re(e)]:[e]},Ae.set(t,e),w[I](e.toLowerCase(),c),L(e),Ce[e].r()}function v(e){var t=He[e.toUpperCase()];return t&&t.constructor}function E(e){return"string"==typeof e?e:e&&e.is||""}function M(e){for(var t,n=e[j],r=n?e.attributes:me,a=r.length;a--;)t=r[a],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function L(e){return e=e.toUpperCase(),e in Ce||(Ce[e]={},Ce[e].p=new Ne(function(t){Ce[e].r=t})),Ce[e].p}function T(){Me&&delete e.customElements,fe(e,"customElements",{configurable:!0,value:new b}),fe(e,"CustomElementRegistry",{configurable:!0,value:b});for(var t=function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[Ee]||(ye=!0,t=He[Ae.get(e.constructor)],r=Le&&1===t.create.length,e=r?Reflect.construct(n,me,t.constructor):w.createElement.apply(w,t.create),e[Ee]=!0,ye=!1,r||M(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){ve=!0,fe(n,Ee,{value:e[t]})}}},n=y.get(/^HTML[A-Z]*[a-z]/),r=n.length;r--;t(n[r]));w.createElement=function(e,t){var n=E(t);return n?qe.call(this,e,Re(n)):qe.call(this,e)}}var w=e.document,N=e.Object,y=function(e){var t,n,r,a,o=/^[A-Z]+[a-z]/,l=function(e){var t,n=[];for(t in i)e.test(t)&&n.push(t);return n},c=function(e,t){t=t.toLowerCase(),t in i||(i[e]=(i[e]||[]).concat(t),i[t]=i[t.toUpperCase()]=e)},i=(N.create||N)(null),u={};for(n in e)for(a in e[n])for(r=e[n][a],i[a]=r,t=0;t<r.length;t++)i[r[t].toLowerCase()]=i[r[t].toUpperCase()]=a;return u.get=function(e){return"string"==typeof e?i[e]||(o.test(e)?[]:""):l(e)},u.set=function(e,t){return o.test(e)?c(e,t):c(t,e),u},u}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});t||(t="auto");var H,C,A,R,x,S,k,O,I="registerElement",B="__"+I+(1e5*e.Math.random()>>0),D="addEventListener",_="attached",U="Callback",z="detached",F="extends",j="attributeChanged"+U,P=_+U,V="connected"+U,$="disconnected"+U,Z="created"+U,q=z+U,W="ADDITION",K="MODIFICATION",Q="REMOVAL",X="DOMAttrModified",G="DOMContentLoaded",Y="DOMSubtreeModified",J="<",ee="=",te=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,ne=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],re=[],ae=[],oe="",le=w.documentElement,ce=re.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ie=N.prototype,ue=ie.hasOwnProperty,se=ie.isPrototypeOf,fe=N.defineProperty,me=[],pe=N.getOwnPropertyDescriptor,de=N.getOwnPropertyNames,he=N.getPrototypeOf,be=N.setPrototypeOf,ge=!!N.__proto__,ve=!1,Ee="__dreCEv1",Me=e.customElements,Le="force"!==t&&!!(Me&&Me.define&&Me.get&&Me.whenDefined),Te=N.create||N,we=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ce.call(t,e)]},set:function(r,a){e=ce.call(t,r),e<0?n[t.push(r)-1]=a:n[e]=a}}},Ne=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,a={catch:function(){return a},then:function(e){return n.push(e),r&&setTimeout(t,1),a}};return e(t),a},ye=!1,He=Te(null),Ce=Te(null),Ae=new we,Re=String,xe=N.create||function e(t){return t?(e.prototype=t,new e):this},Se=be||(ge?function(e,t){return e.__proto__=t,e}:de&&pe?function(){function e(e,t){for(var n,r=de(t),a=0,o=r.length;a<o;a++)n=r[a],ue.call(e,n)||fe(e,n,pe(t,n))}return function(t,n){do e(t,n);while((n=he(n))&&!se.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),ke=e.MutationObserver||e.WebKitMutationObserver,Oe=(e.HTMLElement||e.Element||e.Node).prototype,Ie=!se.call(Oe,le),Be=Ie?function(e,t,n){return e[t]=n.value,e}:fe,De=Ie?function(e){return 1===e.nodeType}:function(e){return se.call(Oe,e)},_e=Ie&&[],Ue=Oe.attachShadow,ze=Oe.cloneNode,Fe=Oe.dispatchEvent,je=Oe.getAttribute,Pe=Oe.hasAttribute,Ve=Oe.removeAttribute,$e=Oe.setAttribute,Ze=w.createElement,qe=Ze,We=ke&&{attributes:!0,characterData:!0,attributeOldValue:!0},Ke=ke||function(e){Ge=!1,le.removeEventListener(X,Ke)},Qe=0,Xe=!1,Ge=!0,Ye=!0,Je=!0;if(I in w||(be||ge?(k=function(e,t){se.call(t,e)||m(e,t)},O=m):(k=function(e,t){e[B]||(e[B]=N(!0),m(e,t))},O=k),Ie?(Ge=!1,function(){var e=pe(Oe,D),t=e.value,n=function(e){var t=new CustomEvent(X,{bubbles:!0});t.attrName=e,t.prevValue=je.call(this,e),t.newValue=null,t[Q]=t.attrChange=2,Ve.call(this,e),Fe.call(this,t)},r=function(e,t){var n=Pe.call(this,e),r=n&&je.call(this,e),a=new CustomEvent(X,{bubbles:!0});$e.call(this,e,t),a.attrName=e,a.prevValue=n?r:null,a.newValue=t,n?a[K]=a.attrChange=1:a[W]=a.attrChange=0,Fe.call(this,a)},a=function(e){var t,n=e.currentTarget,r=n[B],a=e.propertyName;r.hasOwnProperty(a)&&(r=r[a],t=new CustomEvent(X,{bubbles:!0}),t.attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[a]||null,null==t.prevValue?t[W]=t.attrChange=0:t[K]=t.attrChange=1,Fe.call(n,t))};e.value=function(e,o,l){e===X&&this[j]&&this.setAttribute!==r&&(this[B]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",a)),t.call(this,e,o,l)},fe(Oe,D,e)}()):ke||(le[D](X,Ke),le.setAttribute(B,1),le.removeAttribute(B),Ge&&(C=function(e){var t,n,r,a=this;if(a===e.target){t=a[B],a[B]=n=R(a);for(r in n){if(!(r in t))return A(0,a,r,t[r],n[r],W);if(n[r]!==t[r])return A(1,a,r,t[r],n[r],K)}for(r in t)if(!(r in n))return A(2,a,r,t[r],n[r],Q)}},A=function(e,t,n,r,a,o){var l={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:a};l[o]=e,i(l)},R=function(e){for(var t,n,r={},a=e.attributes,o=0,l=a.length;o<l;o++)t=a[o],n=t.name,"setAttribute"!==n&&(r[n]=t.value);return r})),w[I]=function(e,t){if(n=e.toUpperCase(),Xe||(Xe=!0,ke?(x=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new ke(function(r){for(var a,o,l,c=0,i=r.length;c<i;c++)a=r[c],"childList"===a.type?(n(a.addedNodes,e),n(a.removedNodes,t)):(o=a.target,Je&&o[j]&&"style"!==a.attributeName&&(l=je.call(o,a.attributeName),l!==a.oldValue&&o[j](a.attributeName,a.oldValue,l)))})}(o(_),o(z)),S=function(e){return x.observe(e,{childList:!0,subtree:!0}),e},S(w),Ue&&(Oe.attachShadow=function(){return S(Ue.apply(this,arguments))})):(H=[],w[D]("DOMNodeInserted",u(_)),w[D]("DOMNodeRemoved",u(z))),w[D](G,s),w[D]("readystatechange",s),Oe.cloneNode=function(e){var t=ze.call(this,!!e),n=l(t);return-1<n&&O(t,ae[n]),e&&a(t.querySelectorAll(oe)),t}),-2<ce.call(re,ee+n)+ce.call(re,J+n)&&d(e),!te.test(n)||-1<ce.call(ne,n))throw new Error("The type "+e+" is invalid");var n,c,i=function(){return m?w.createElement(p,n):w.createElement(p)},f=t||ie,m=ue.call(f,F),p=m?t[F].toUpperCase():n;return m&&-1<ce.call(re,J+p)&&d(p),c=re.push((m?ee:J)+n)-1,oe=oe.concat(oe.length?",":"",m?p+'[is="'+e.toLowerCase()+'"]':p),i.prototype=ae[c]=ue.call(f,"prototype")?f.prototype:xe(Oe),r(w.querySelectorAll(oe),_),i},w.createElement=qe=function(e,t){var n=E(t),r=n?Ze.call(w,e,Re(n)):Ze.call(w,e),a=""+e,o=ce.call(re,(n?ee:J)+(n||a).toUpperCase()),l=-1<o;return n&&(r.setAttribute("is",n=n.toLowerCase()),l&&(l=c(a.toUpperCase(),n))),Je=!w.createElement.innerHTMLHelper,l&&O(r,ae[o]),r}),b.prototype={constructor:b,define:Le?function(e,t,n){if(n)g(e,t,n);else{var r=e.toUpperCase();He[r]={constructor:t,create:[r]},Ae.set(t,r),Me.define(e,t)}}:g,get:Le?function(e){return Me.get(e)||v(e)}:v,whenDefined:Le?function(e){return Ne.race([Me.whenDefined(e),L(e)])}:L},Me&&"force"!==t)try{!function(t,n,r){if(n[F]="a",t.prototype=xe(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(r,t,n),je.call(w.createElement("a",{is:r}),"is")!==r||Le&&je.call(new t,"is")!==r)throw n}(function e(){return Reflect.construct(HTMLAnchorElement,[],e)},{},"document-register-element-a")}catch(e){T()}else T();try{Ze.call(w,"a","a")}catch(e){Re=function(e){return{is:e}}}}(window),!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/[&<>]/gm,function(e){return x[e]})}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0===n.index}function a(e){return y.test(e)}function o(e){var t,n,r,o,l=e.className+" ";if(l+=e.parentNode?e.parentNode.className:"",n=H.exec(l))return M(n[1])?n[1]:"no-highlight";for(l=l.split(/\s+/),t=0,r=l.length;r>t;t++)if(o=l[t],a(o)||M(o))return o}function l(e,t){var n,r={};for(n in e)r[n]=e[n];if(t)for(n in t)r[n]=t[n];return r}function c(e){var t=[];return function e(r,a){for(var o=r.firstChild;o;o=o.nextSibling)3===o.nodeType?a+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:a,node:o}),a=e(o,a),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:o}));return a}(e,0),t}function i(e,r,a){function o(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function l(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}s+="<"+n(e)+L.map.call(e.attributes,r).join("")+">"}function c(e){s+="</"+n(e)+">"}function i(e){("start"===e.event?l:c)(e.node)}for(var u=0,s="",f=[];e.length||r.length;){var m=o();if(s+=t(a.substring(u,m[0].offset)),u=m[0].offset,m===e){f.reverse().forEach(c);do i(m.splice(0,1)[0]),m=o();while(m===e&&m.length&&m[0].offset===u);f.reverse().forEach(l)}else"start"===m[0].event?f.push(m[0].node):f.pop(),i(m.splice(0,1)[0])}return s+t(a.substr(u))}function u(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,o){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},i=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");c[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof a.k?i("keyword",a.k):T(a.k).forEach(function(e){i(e,a.k[e])}),a.k=c}a.lR=n(a.l||/\w+/,!0),o&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=n(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=n(a.e)),a.tE=t(a.e)||"",a.eW&&o.tE&&(a.tE+=(a.e?"|":"")+o.tE)),a.i&&(a.iR=n(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(l(e,t))}):u.push("self"===e?a:e)}),a.c=u,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,o);var s=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=s.length?n(s.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,n,a,o){function l(e,t){var n,a;for(n=0,a=t.c.length;a>n;n++)if(r(t.c[n].bR,e))return t.c[n]}function c(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?c(e.parent,t):void 0}function i(e,t){return!a&&r(t.iR,e)}function m(e,t){var n=E.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var a=r?"":R.classPrefix,o='<span class="'+a,l=n?"":A;return o+=e+'">',o+t+l}function d(){var e,n,r,a;if(!T.k)return t(H);for(a="",n=0,T.lR.lastIndex=0,r=T.lR.exec(H);r;)a+=t(H.substring(n,r.index)),e=m(T,r),e?(C+=e[1],a+=p(e[0],t(r[0]))):a+=t(r[0]),n=T.lR.lastIndex,r=T.lR.exec(H);return a+t(H.substr(n))}function h(){var e="string"==typeof T.sL;if(e&&!w[T.sL])return t(H);var n=e?s(T.sL,H,!0,N[T.sL]):f(H,T.sL.length?T.sL:void 0);return T.r>0&&(C+=n.r),e&&(N[T.sL]=n.top),p(n.language,n.value,!1,!0)}function b(){y+=null!=T.sL?h():d(),H=""}function g(e){y+=e.cN?p(e.cN,"",!0):"",T=Object.create(e,{parent:{value:T}})}function v(e,t){if(H+=e,null==t)return b(),0;var n=l(t,T);if(n)return n.skip?H+=t:(n.eB&&(H+=t),b(),n.rB||n.eB||(H=t)),g(n,t),n.rB?0:t.length;var r=c(T,t);if(r){var a=T;a.skip?H+=t:(a.rE||a.eE||(H+=t),b(),a.eE&&(H=t));do T.cN&&(y+=A),T.skip||(C+=T.r),T=T.parent;while(T!==r.parent);return r.starts&&g(r.starts,""),a.rE?0:t.length}if(i(t,T))throw new Error('Illegal lexeme "'+t+'" for mode "'+(T.cN||"<unnamed>")+'"');return H+=t,t.length||1}var E=M(e);if(!E)throw new Error('Unknown language: "'+e+'"');u(E);var L,T=o||E,N={},y="";for(L=T;L!==E;L=L.parent)L.cN&&(y=p(L.cN,"",!0)+y);var H="",C=0;try{for(var x,S,k=0;T.t.lastIndex=k,x=T.t.exec(n),x;)S=v(n.substring(k,x.index),x[0]),k=x.index+S;for(v(n.substr(k)),L=T;L.parent;L=L.parent)L.cN&&(y+=A);return{r:C,value:y,language:e,top:T}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:t(n)};throw e}}function f(e,n){n=n||R.languages||T(w);var r={r:0,value:t(e)},a=r;return n.filter(M).forEach(function(t){var n=s(t,e,!1);n.language=t,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function m(e){return R.tabReplace||R.useBR?e.replace(C,function(e,t){return R.useBR&&"\n"===e?"<br>":R.tabReplace?t.replace(/\t/g,R.tabReplace):void 0}):e}function p(e,t,n){var r=t?N[t]:n,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function d(e){var t,n,r,l,u,d=o(e);a(d)||(R.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,u=t.textContent,r=d?s(d,u,!0):f(u),n=c(t),n.length&&(l=document.createElementNS("http://www.w3.org/1999/xhtml","div"),l.innerHTML=r.value,r.value=i(n,c(l),u)),r.value=m(r.value),e.innerHTML=r.value,e.className=p(e.className,d,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function h(e){R=l(R,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");L.forEach.call(e,d)}}function g(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function v(t,n){var r=w[t]=n(e);r.aliases&&r.aliases.forEach(function(e){N[e]=t})}function E(){return T(w)}function M(e){return e=(e||"").toLowerCase(),w[e]||w[N[e]]}var L=[],T=Object.keys,w={},N={},y=/^(no-?highlight|plain|text)$/i,H=/\blang(?:uage)?-([\w-]+)\b/i,C=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,A="</span>",R={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},x={"&":"&amp;","<":"&lt;",">":"&gt;"};return e.highlight=s,e.highlightAuto=f,e.fixMarkup=m,e.highlightBlock=d,e.configure=h,e.initHighlighting=b,e.initHighlightingOnLoad=g,e.registerLanguage=v,e.listLanguages=E,e.getLanguage=M,e.inherit=l,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(t,n,r){var a=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",n={eW:!0,i:/</,r:0,c:[{cN:"attr",b:t,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[n],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[n],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},n]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:t,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,n]}]}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},n={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},r={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\._]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,n,r,t]}}),hljs.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:n,c:[]},o={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,o,r,e.RM];var l=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:n,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,o,e.CLCM,e.CBCM,r,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:n,c:l}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:l}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});