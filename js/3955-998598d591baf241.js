"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3955],{2501:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="circle-user",n=[62142,"user-circle"],s="f2bd",i="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z";t.definition={prefix:"far",iconName:r,icon:[512,512,n,s,i]},t.faCircleUser=t.definition,t.prefix="far",t.iconName=r,t.width=512,t.height=512,t.ligatures=n,t.unicode=s,t.svgPathData=i,t.aliases=n},68281:function(e,t,r){r.d(t,{w_:function(){return o}});var n=r(2784),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(s),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function o(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,s=e.attr,i=e.size,o=e.title,c=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(s)}},13823:function(e,t,r){r.d(t,{a:function(){return es}});var n,s,i,a=r(72338),l=r(30764);r(48834).lW;var o=Object.create,c=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,g=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&b(e,r,t[r]);if(f)for(var r of f(t))y.call(t,r)&&b(e,r,t[r]);return e},_=(e,t)=>u(e,h(t)),v=(e,t)=>function(){return t||(0,e[Object.keys(e)[0]])((t={exports:{}}).exports,t),t.exports},C=v({"node_modules/css-what/lib/parse.js"(e){var t=e&&e.__spreadArray||function(e,t,r){if(r||2==arguments.length)for(var n,s=0,i=t.length;s<i;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(e,"__esModule",{value:!0}),e.isTraversal=void 0;var r=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,n=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,s=new Map([["~","element"],["^","start"],["$","end"],["*","any"],["!","not"],["|","hyphen"]]),i={">":"child","<":"parent","~":"sibling","+":"adjacent"},a={"#":["id","equals"],".":["class","element"]},l=new Set(["has","not","matches","is","where","host","host-context"]),o=new Set(t(["descendant"],Object.keys(i).map(function(e){return i[e]}),!0)),c=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"]);function u(e){return o.has(e.type)}e.isTraversal=u;var d=new Set(["contains","icontains"]),h=new Set(['"',"'"]);function p(e,t,r){var n=parseInt(t,16)-65536;return n!=n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}function f(e){return e.replace(n,p)}function g(e){return" "===e||"\n"===e||"	"===e||"\f"===e||"\r"===e}function m(e,t){if(e.length>0&&0===t.length)throw Error("Empty sub-selector");e.push(t)}e.default=function(e,t){var n=[],o=function e(t,n,o,p){void 0===o&&(o={});var y,b,N=[],_=!1;function v(e){var t=n.slice(p+e).match(r);if(!t)throw Error("Expected name, found "+n.slice(p));var s=t[0];return p+=e+s.length,f(s)}function C(e){for(;g(n.charAt(p+e));)e++;p+=e}function w(e){for(var t=0;"\\"===n.charAt(--e);)t++;return(1&t)==1}function O(){if(N.length>0&&u(N[N.length-1]))throw Error("Did not expect successive traversals.")}for(C(0);""!==n;){var E=n.charAt(p);if(g(E))_=!0,C(1);else if(E in i)O(),N.push({type:i[E]}),_=!1,C(1);else if(","===E){if(0===N.length)throw Error("Empty sub-selector");t.push(N),N=[],_=!1,C(1)}else if(n.startsWith("/*",p)){var x=n.indexOf("*/",p+2);if(x<0)throw Error("Comment was not terminated");p=x+2}else if(_&&(O(),N.push({type:"descendant"}),_=!1),E in a){var A=a[E],T=A[0],j=A[1];N.push({type:"attribute",name:T,action:j,value:v(1),namespace:null,ignoreCase:!!o.xmlMode&&null})}else if("["===E){C(1);var S=null;"|"===n.charAt(p)&&(S="",p+=1),n.startsWith("*|",p)&&(S="*",p+=2);var M=v(0);null===S&&"|"===n.charAt(p)&&"="!==n.charAt(p+1)&&(S=M,M=v(1)),(null!==(y=o.lowerCaseAttributeNames)&&void 0!==y?y:!o.xmlMode)&&(M=M.toLowerCase()),C(0);var j="exists",P=s.get(n.charAt(p));if(P){if(j=P,"="!==n.charAt(p+1))throw Error("Expected `=`");C(2)}else"="===n.charAt(p)&&(j="equals",C(1));var D="",L=null;if("exists"!==j){if(h.has(n.charAt(p))){for(var k=n.charAt(p),$=p+1;$<n.length&&(n.charAt($)!==k||w($));)$+=1;if(n.charAt($)!==k)throw Error("Attribute value didn't end");D=f(n.slice(p+1,$)),p=$+1}else{for(var q=p;p<n.length&&(!g(n.charAt(p))&&"]"!==n.charAt(p)||w(p));)p+=1;D=f(n.slice(q,p))}C(0);var I=n.charAt(p);"s"===I||"S"===I?(L=!1,C(1)):("i"===I||"I"===I)&&(L=!0,C(1))}if(o.xmlMode||null!=L||(L=c.has(M)),"]"!==n.charAt(p))throw Error("Attribute selector didn't terminate");p+=1;var U={type:"attribute",name:M,action:j,value:D,namespace:S,ignoreCase:L};N.push(U)}else if(":"===E){if(":"===n.charAt(p+1)){N.push({type:"pseudo-element",name:v(2).toLowerCase()});continue}var R=v(1).toLowerCase(),z=null;if("("===n.charAt(p)){if(l.has(R)){if(h.has(n.charAt(p+1)))throw Error("Pseudo-selector "+R+" cannot be quoted");if(p=e(z=[],n,o,p+1),")"!==n.charAt(p))throw Error("Missing closing parenthesis in :"+R+" ("+n+")");p+=1}else{for(var W=p+=1,H=1;H>0&&p<n.length;p++)"("!==n.charAt(p)||w(p)?")"===n.charAt(p)&&!w(p)&&H--:H++;if(H)throw Error("Parenthesis not matched");if(z=n.slice(W,p-1),d.has(R)){var F=z.charAt(0);F===z.slice(-1)&&h.has(F)&&(z=z.slice(1,-1)),z=f(z)}}}N.push({type:"pseudo",name:R,data:z})}else{var S=null,B=void 0;if("*"===E)p+=1,B="*";else{if(!r.test(n.slice(p)))return N.length&&"descendant"===N[N.length-1].type&&N.pop(),m(t,N),p;"|"===n.charAt(p)&&(S="",p+=1),B=v(0)}"|"===n.charAt(p)&&(S=B,"*"===n.charAt(p+1)?(B="*",p+=2):B=v(1)),"*"===B?N.push({type:"universal",namespace:S}):((null!==(b=o.lowerCaseTags)&&void 0!==b?b:!o.xmlMode)&&(B=B.toLowerCase()),N.push({type:"tag",name:B,namespace:S}))}}return m(t,N),p}(n,""+e,t,0);if(o<e.length)throw Error("Unmatched selector: "+e.slice(o));return n}}}),w=v({"node_modules/css-what/lib/stringify.js"(e){var t=e&&e.__spreadArray||function(e,t,r){if(r||2==arguments.length)for(var n,s=0,i=t.length;s<i;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(e,"__esModule",{value:!0});var r={equals:"",element:"~",start:"^",end:"$",any:"*",not:"!",hyphen:"|"},n=new Set(t(t([],Object.keys(r).map(function(e){return r[e]}).filter(Boolean),!0),[":","[","]"," ","\\","(",")","'"],!1));function s(e){return e.map(i).join(", ")}function i(e){return e.map(a).join("")}function a(e){switch(e.type){case"child":return" > ";case"parent":return" < ";case"sibling":return" ~ ";case"adjacent":return" + ";case"descendant":return" ";case"universal":return o(e.namespace)+"*";case"tag":return l(e);case"pseudo-element":return"::"+c(e.name);case"pseudo":if(null===e.data)return":"+c(e.name);if("string"==typeof e.data)return":"+c(e.name)+"("+c(e.data)+")";return":"+c(e.name)+"("+s(e.data)+")";case"attribute":if("id"===e.name&&"equals"===e.action&&!e.ignoreCase&&!e.namespace)return"#"+c(e.value);if("class"===e.name&&"element"===e.action&&!e.ignoreCase&&!e.namespace)return"."+c(e.value);var t=l(e);if("exists"===e.action)return"["+t+"]";return"["+t+r[e.action]+"='"+c(e.value)+"'"+(e.ignoreCase?"i":!1===e.ignoreCase?"s":"")+"]"}}function l(e){return""+o(e.namespace)+c(e.name)}function o(e){return null!==e?("*"===e?"*":c(e))+"|":""}function c(e){return e.split("").map(function(e){return n.has(e)?"\\"+e:e}).join("")}e.default=s}}),O=v({"node_modules/css-what/lib/index.js"(e){var t=e&&e.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=e&&e.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||t(r,e,n)},n=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.stringify=e.parse=void 0,r(C(),e);var s=C();Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return n(s).default}});var i=w();Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return n(i).default}})}}),E=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),x=e=>e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;/gi,"'").replace(/&amp;/gi,"&");function A(e,t,...r){return"object"==typeof e&&(r=(e="fragment").children,t=e.attrs),Array.isArray(t)?(r=[t],t={}):t?t.attrs&&(t=N(N({},t.attrs),t),delete t.attrs):t={},{tag:e,attrs:t,children:"string"==typeof r[0]?r:r.flat(1/0)}}var T=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","command"];function j(e,t,r={},n){let s=!("string"==typeof n&&""===n||Array.isArray(n)&&(0===n.length||1===n.length&&""===n[0])||null==n),i=[];if("noop"!==(t=t.replace(/__/g,":"))&&""!==t){for(let e in"cdata"!==t?i.push(`<${t}`):i.push("<![CDATA["),r)if(e&&r.hasOwnProperty(e)){let t=r[e];if("html"===e)continue;"classname"===e.toLowerCase()&&(e="class"),e=e.replace(/__/g,":"),!0===t?i.push(` ${e}`):"style"===e&&"object"==typeof t?i.push(` ${e}="${Object.keys(t).filter(e=>null!=t[e]).map(e=>{let r=t[e];return`${e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${r="number"==typeof r?r+"px":r}`}).join(";")}"`):!1!==t&&null!=t&&i.push(` ${e}="${E(t.toString())}"`)}if("cdata"!==t){if(e&&!s)return i.push(" />"),i.join("");i.push(">")}if(!e&&T.includes(t))return i.join("")}if(s){if("string"==typeof n)i.push(n);else if(n&&n.length>0){for(let e of n)if(null!=e&&!1!==e)for(let r of(Array.isArray(e)||(e=[e]),e))r.startsWith("<")&&r.endsWith(">")||"script"===t||"style"===t?i.push(r):i.push(E(r.toString()))}}return r.html&&i.push(r.html),"noop"!==t&&""!==t&&("cdata"!==t?i.push(`</${t}>`):i.push("]]>")),i.join("")}function S(e,t,...r){let{tag:n,attrs:s,children:i}=A(e,t,r);return j(!1,n,s,i)}var M=j.bind(null,!1);S.firstLine="<!DOCTYPE html>",S.html=!0;var P=((e,t,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of p(t))m.call(e,n)||"default"===n||c(e,n,{get:()=>t[n],enumerable:!(r=d(t,n))||r.enumerable});return e})((n=c(null!=(s=O())?o(g(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0}),c(n,"__esModule",{value:!0})),s),D={},L=Symbol.for("nodejs.util.inspect.custom"),k={fontWeight:"bold"},$={fontStyle:"italic"},q={backgroundColor:"rgb(255, 250, 165)"},I={textDecorations:"underline"},U={textDecorations:"line-through"},R={b:k,strong:k,em:$,i:$,mark:q,u:I,a:I,s:U,del:U,ins:q,strike:U},z=e=>e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(e,t)=>t.toUpperCase()),W=class{constructor(){this.append=this.appendChild,this._parentNode=null,this._childNodes=[]}get nodeType(){return console.error("Subclasses should define nodeType!"),0}get nodeName(){return console.error("Subclasses should define nodeName!"),""}get nodeValue(){return null}cloneNode(e=!1){let t=new this.constructor;return e&&(t._childNodes=this._childNodes.map(e=>e.cloneNode(!0)),t._fixChildNodesParent()),t}_fixChildNodesParent(){this._childNodes.forEach(e=>e._parentNode=this)}insertBefore(e,t){if(e!==t){let r=t?this._childNodes.indexOf(t):0;r<0&&(r=0),this._childNodes.splice(r,0,e),this._fixChildNodesParent()}}appendChild(e){if(null!=e){if(e===this){console.warn("Cannot appendChild to self");return}if(e instanceof J&&console.warn("No defined how to append a document to a node!",e),e instanceof Y)for(let t of[...e._childNodes])this.appendChild(t);else if(Array.isArray(e))for(let t of[...e])this.appendChild(t);else if(e instanceof W)e.remove(),this._childNodes.push(e);else try{let t="string"==typeof e?e:JSON.stringify(e,null,2);this._childNodes.push(new F(t))}catch(t){console.error(`The data ${e} to be added to ${this.render()} is problematic: ${t}`)}this._fixChildNodesParent()}}removeChild(e){let t=this._childNodes.indexOf(e);t>=0&&(e._parentNode=null,this._childNodes.splice(t,1),this._fixChildNodesParent())}remove(){var e;return null==(e=this==null?void 0:this.parentNode)||e.removeChild(this),this}replaceChildren(...e){this._childNodes=e.map(e=>"string"==typeof e?new F(e):e.remove()),this._fixChildNodesParent()}replaceWith(...e){let t=this._parentNode;if(t){let r=this._indexInParent();r>=0&&(e=e.map(e=>"string"==typeof e?new F(e):e.remove()),t._childNodes.splice(r,1,...e),this._parentNode=null,t._fixChildNodesParent())}}_indexInParent(){return this._parentNode?this._parentNode.childNodes.indexOf(this):-1}get parentNode(){return this._parentNode}get childNodes(){return this._childNodes||[]}get children(){return this._childNodes||[]}get firstChild(){return this._childNodes[0]}get lastChild(){return this._childNodes[this._childNodes.length-1]}get nextSibling(){let e=this._indexInParent();return null!=e&&this.parentNode.childNodes[e+1]||null}get previousSibling(){let e=this._indexInParent();return e>0&&this.parentNode.childNodes[e-1]||null}flatten(){let e=[];for(let t of(this instanceof V&&e.push(this),this._childNodes))e.push(...t.flatten());return e}flattenNodes(){let e=[];for(let t of(e.push(this),this._childNodes))e.push(...t.flattenNodes());return e}render(){return""}get textContent(){return this._childNodes.map(e=>e.textContent).join("")}set textContent(e){this._childNodes=[],e&&this.appendChild(new F(e.toString()))}contains(e){return e===this||this._childNodes.some(t=>t.contains(e))}get ownerDocument(){var e;return this.nodeType===W.DOCUMENT_NODE||this.nodeType===W.DOCUMENT_FRAGMENT_NODE?this:null==(e=this==null?void 0:this._parentNode)?void 0:e.ownerDocument}toString(){return`${this.nodeName}`}[L](){return`${this.constructor.name} "${this.render()}"`}},H=W;H.ELEMENT_NODE=1,H.TEXT_NODE=3,H.CDATA_SECTION_NODE=4,H.PROCESSING_INSTRUCTION_NODE=7,H.COMMENT_NODE=8,H.DOCUMENT_NODE=9,H.DOCUMENT_TYPE_NODE=10,H.DOCUMENT_FRAGMENT_NODE=11;var F=class extends H{get nodeType(){return H.TEXT_NODE}get nodeName(){return"#text"}get nodeValue(){return this._text||""}get textContent(){return this.nodeValue}constructor(e=""){super(),this._text=e}render(){return E(this._text)}cloneNode(e=!1){let t=super.cloneNode(e);return t._text=this._text,t}},B=class extends H{getElementById(e){return this.flatten().find(t=>t._attributes.id===e)}getElementsByClassName(e){return this.flatten().filter(t=>t.classList.contains(e))}matches(e){return function(e,t,{debug:r=!1}={}){let n;for(let s of(null==(n=D[e])&&(n=(0,P.parse)(e),D[e]=n),n)){r&&(console.log("Selector:",e),console.log("Rules:",s),console.log("Element:",t));let n=(t,s)=>{var i,a,l;let o=!1;for(let c of s){let{type:u,name:d,action:h,value:p,ignoreCase:f=!0,data:g}=c;if("attribute"===u)"equals"===h?(o=t.getAttribute(d)===p,r&&console.log("Attribute equals",o)):"start"===h?(o=!!(null==(i=t.getAttribute(d))?void 0:i.startsWith(p)),r&&console.log("Attribute start",o)):"end"===h?(o=!!(null==(a=t.getAttribute(d))?void 0:a.endsWith(p)),r&&console.log("Attribute start",o)):"element"===h?"class"===d?(o=t.classList.contains(p),r&&console.log("Attribute class",o)):(o=!!(null==(l=t.getAttribute(d))?void 0:l.includes(p)),r&&console.log("Attribute element",o)):"exists"===h?(o=t.hasAttribute(d),r&&console.log("Attribute exists",o)):console.warn("Unknown CSS selector action",h);else if("tag"===u)o=t.tagName===d.toUpperCase(),r&&console.log("Is tag",o);else if("universal"===u)o=!0,r&&console.log("Is universal",o);else if("pseudo"===u){if("not"===d){let e=!0;g.forEach(r=>{n(t,r)||(e=!1)}),o=!e}r&&console.log("Is :not",o)}else console.warn("Unknown CSS selector type",u,e,s);if(!o)break}return o};if(n(t,s))return!0}return!1}(e,this)}querySelectorAll(e){return this.flatten().filter(t=>t.matches(e))}querySelector(e){return this.flatten().find(t=>t.matches(e))}parent(e){var t;return this.matches(e)?this:null==this.parentNode?null:null==(t=this.parentNode)?void 0:t.parent(e)}handle(e,t){let r=0;for(let n of this.querySelectorAll(e))t(n,r++)}},V=class extends B{get nodeType(){return H.ELEMENT_NODE}get nodeName(){return this._nodeName}constructor(e="div",t={}){super(),this._originalTagName=e,this._nodeName=(e||"").toUpperCase(),this._attributes=t||{},this._styles=null}cloneNode(e=!1){let t=super.cloneNode(e);return t._originalTagName=this._originalTagName,t._nodeName=this._nodeName,t._attributes=Object.assign({},this._attributes),t}get attributes(){return this._attributes}_findAttributeName(e){let t=e.toLowerCase();return Object.keys(this._attributes).find(e=>t===e.toLowerCase())||null}setAttribute(e,t){this.removeAttribute(e),this._attributes[e]=t,this._styles=null}getAttribute(e){let t=this._findAttributeName(e);return t?this._attributes[t]:null}removeAttribute(e){let t=this._findAttributeName(String(e));t&&delete this._attributes[e]}hasAttribute(e){let t=this._findAttributeName(e);return!!t&&null!=this._attributes[t]}get style(){if(null==this._styles){let e=Object.assign({},R[this.tagName.toLowerCase()]||{}),t=this.getAttribute("style");if(t){let r;let n=/\s*([\w-]+)\s*:\s*([^;]+)/g;for(;r=n.exec(t);){let t=r[1],n=r[2].trim();e[t]=n,e[z(t)]=n}}this._styles=e}return this._styles}get tagName(){return this._nodeName}get id(){return this._attributes.id||null}set id(e){null==e?delete this._attributes.id:this._attributes.id=e}get src(){return this._attributes.src}set src(e){null==e?delete this._attributes.src:this._attributes.src=e}getElementsByTagName(e){e=e.toUpperCase();let t=this.flatten();return"*"!==e?t.filter(t=>t.tagName===e):t}setInnerHTML(e){throw"setInnerHTML is not implemented; see vdomparser for an example"}get innerHTML(){return this._childNodes.map(e=>e.render(S)).join("")}set innerHTML(e){this.setInnerHTML(e)}get outerHTML(){return this.render(M)}get className(){return this._attributes.class||""}set className(e){Array.isArray(e)?e=e.filter(e=>!!e).join(" "):"object"==typeof e&&(e=Object.entries(e).filter(([e,t])=>!!t).map(([e,t])=>e).join(" ")),this._attributes.class=e}get classList(){let e=this,t=(this.className||"").trim().split(/\s+/g)||[];return{contains:e=>t.includes(e),add(r){t.includes(r)||(t.push(r),e.className=t)},remove(r){let n=t.indexOf(r);n>=0&&(t.splice(n,1),e.className=t)}}}render(e=M){return e(this._originalTagName||this.tagName,this.attributes,this._childNodes.map(t=>t.render(e)).join(""))}},G=class extends H{get nodeName(){return super.nodeName}get nodeValue(){return super.nodeValue}get nodeType(){return G.DOCUMENT_TYPE_NODE}render(){return"<!DOCTYPE html>"}},Y=class extends B{get nodeType(){return H.DOCUMENT_FRAGMENT_NODE}get nodeName(){return"#document-fragment"}render(e=M){return this._childNodes.map(t=>t.render(e)||[]).join("")}get innerHTML(){return this._childNodes.map(e=>e.render(S)).join("")}createElement(e,t={}){return new V(e,t)}createDocumentFragment(){return new Y}createTextNode(e){return new F(e)}},J=class extends Y{get nodeType(){return H.DOCUMENT_NODE}get nodeName(){return"#document"}get documentElement(){return this.firstChild}render(e=M){let t=super.render(e);return this.docType&&(t=this.docType.render()+t),t}},X=class extends J{constructor(e=!1){if(super(),this.docType=new G,!e){let e=new V("html"),t=new V("body"),r=new V("head"),n=new V("title");e.appendChild(r),r.appendChild(n),e.appendChild(t),this.appendChild(e)}}get body(){let e=this.querySelector("body");if(!e){let t=this.querySelector("html");t||(t=new V("html"),this.appendChild(t)),e=new V("body"),t.appendChild(t)}return e}get title(){var e;return(null==(e=this.querySelector("title"))?void 0:e.textContent)||""}set title(e){let t=this.querySelector("title");t&&(t.textContent=e)}get head(){let e=this.querySelector("head");if(!e){let t=this.querySelector("html");t||(t=new V("html"),this.appendChild(t)),e=new V("head"),t.insertBefore(t)}return e}},Z=new J;(i={document:Z}).h=function(e,t,...r){let{tag:n,attrs:s,children:a}=A(e,t,r);return function(e,t,r,n){if("function"==typeof t)return t.call(null,{props:_(N({},r),{children:n}),attrs:r,children:n,h:e.h,context:e});{let s;if(s=t?"fragment"===t.toLowerCase()?e.document.createDocumentFragment():e.document.createElement(t):e.document.createElement("div"),r)for(let[e,t]of Object.entries(r)){e=e.toString();let r=e.toLowerCase();"classname"===r?s.className=t:"on"===r?Object.entries(t).forEach(([e,t])=>{s.setAttribute("on"+e,t)}):!1!==t&&null!=t&&(!0===t?s.setAttribute(e,e):s.setAttribute(e,t.toString()))}if(n)for(let t of n)for(let r of Array.isArray(t)?[...t]:[t])r&&!1!==r&&null!=r&&("object"!=typeof r?s.appendChild(e.document.createTextNode(r.toString())):s.appendChild(r));return s}}(i,n,s,a)},i.h;var K=/([^=\s]+)(\s*=\s*(("([^"]*)")|('([^']*)')|[^>\s]+))?/gm,Q=/^<\/([^>\s]+)[^>]*>/m,ee=/^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*(("[^"]*")|('[^']*')|[^>\s]+))?)*)\s*\/?\s*>/m,et=/\s*\/\s*>\s*$/m,er=class{constructor(e){this.attrRe=K,this.endTagRe=Q,this.startTagRe=ee,this.defaults={ignoreWhitespaceText:!1},(e=e||{}).scanner&&(this.scanner=e.scanner,e.scanner=null),this.options=Object.assign({},this.defaults,e)}parse(e){let t,r,n,s=!1;for(;e.length;)"<!--"===e.substring(0,4)?-1!==(t=e.indexOf("-->"))?(this.scanner.comment(e.substring(4,t)),e=e.substring(t+3),s=!1):s=!0:"</"===e.substring(0,2)?(r=this.endTagRe.exec(e))?(e=RegExp.rightContext,s=!1,this.parseEndTag(RegExp.lastMatch,r[1])):s=!0:"<"===e.charAt(0)&&((r=this.startTagRe.exec(e))?(e=RegExp.rightContext,s=!1,this.parseStartTag(RegExp.lastMatch,r[1],r)):s=!0),!s||(0===(t=e.indexOf("<"))&&(t=e.substring(1).indexOf("<")),-1===t?(n=e,e=""):(n=e.substring(0,t),e=e.substring(t)),this.options.ignoreWhitespaceText&&/^\s*$/.test(n)||this.scanner.characters(n)),s=!0,r=null}parseStartTag(e,t,r){let n=et.test(e),s=r[2];n&&(s=s.replace(/\s*\/\s*$/,""));let i=this.parseAttributes(t,s);this.scanner.startElement(t,i,n,r[0])}parseEndTag(e,t){this.scanner.endElement(t)}parseAttributes(e,t){let r={};return t.replace(this.attrRe,(e,t,n,s,i,a,l,o)=>{var c,u;r[t]=null==(u=null!=(c=null!=o?o:a)?c:s)||u}),r}};function en(e,t,...r){let{tag:n,attrs:s,children:i}=A(e,t,r);return j(!0,n,s,i)}function es(e,t){let r=(0,a.J1)(t),n=l.NB.fromJSON(r,e);return function(e,t){let r=l.PW.fromSchema(t).serializeFragment(e.content,{document:new X});return r.render()}(n,r)}V.prototype.setInnerHTML=function(e){let t=function(e){if("string"!=typeof e)throw console.error("parseHTML requires string, found",e),Error("parseHTML requires string");let t=0===e.indexOf("<!")?new X(!0):new Y,r=[t];return new er({scanner:{startElement(e,n,s){let i=e.toLowerCase();if("!doctype"===i){t.docType=new G;return}for(let e in n)if(n.hasOwnProperty(e)){let t=n[e];"string"==typeof t&&(n[e]=x(t))}let a=r[r.length-1];if(a){let t=Z.createElement(e,n);a.appendChild(t),T.includes(e.toLowerCase())||s||r.push(t)}},endElement(e){r.pop()},characters(e){var t;e=x(e);let n=r[r.length-1];(null==(t=null==n?void 0:n.lastChild)?void 0:t.nodeType)===H.TEXT_NODE?n.lastChild._text+=e:n&&n.appendChild(new F(e))},comment(e){}}}).parse(e),t}(e);this._childNodes=t._childNodes,this._fixChildNodesParent()},en.firstLine='<?xml version="1.0" encoding="utf-8"?>',en.xml=!0}}]);
//# sourceMappingURL=3955-998598d591baf241.js.map