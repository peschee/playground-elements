!function(){"use strict";const e=Symbol("Comlink.proxy"),t=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),n=Symbol("Comlink.thrown"),i=e=>"object"==typeof e&&null!==e||"function"==typeof e,a=new Map([["proxy",{canHandle:t=>i(t)&&t[e],serialize(e){const{port1:t,port2:r}=new MessageChannel;return o(e,t),[r,[r]]},deserialize:e=>(e.start(),u(e,[],undefined))}],["throw",{canHandle:e=>i(e)&&n in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(Error(e.value.message),e.value);throw e.value}}]]);function o(t,r=self){r.addEventListener("message",(function i(a){if(!a||!a.data)return;const{id:c,type:u,path:l}=Object.assign({path:[]},a.data),f=(a.data.argumentList||[]).map(p);let g;try{const r=l.slice(0,-1).reduce(((e,t)=>e[t]),t),n=l.reduce(((e,t)=>e[t]),t);switch(u){case"GET":g=n;break;case"SET":r[l.slice(-1)[0]]=p(a.data.value),g=!0;break;case"APPLY":g=n.apply(r,f);break;case"CONSTRUCT":g=function(t){return Object.assign(t,{[e]:!0})}(new n(...f));break;case"ENDPOINT":{const{port1:e,port2:r}=new MessageChannel;o(t,r),g=function(e,t){return _.set(e,t),e}(e,[e])}break;case"RELEASE":g=void 0;break;default:return}}catch(e){g={value:e,[n]:0}}Promise.resolve(g).catch((e=>({value:e,[n]:0}))).then((e=>{const[t,n]=d(e);r.postMessage(Object.assign(Object.assign({},t),{id:c}),n),"RELEASE"===u&&(r.removeEventListener("message",i),s(r))}))})),r.start&&r.start()}function s(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function c(e){if(e)throw Error("Proxy has been released and is not useable")}function u(e,n=[],i=function(){}){let a=!1;const o=new Proxy(i,{get(t,i){if(c(a),i===r)return()=>f(e,{type:"RELEASE",path:n.map((e=>e.toString()))}).then((()=>{s(e),a=!0}));if("then"===i){if(0===n.length)return{then:()=>o};const t=f(e,{type:"GET",path:n.map((e=>e.toString()))}).then(p);return t.then.bind(t)}return u(e,[...n,i])},set(t,r,i){c(a);const[o,s]=d(i);return f(e,{type:"SET",path:[...n,r].map((e=>e.toString())),value:o},s).then(p)},apply(r,i,o){c(a);const s=n[n.length-1];if(s===t)return f(e,{type:"ENDPOINT"}).then(p);if("bind"===s)return u(e,n.slice(0,-1));const[_,d]=l(o);return f(e,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:_},d).then(p)},construct(t,r){c(a);const[i,o]=l(r);return f(e,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:i},o).then(p)}});return o}function l(e){const t=e.map(d);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const _=new WeakMap;function d(e){for(const[t,r]of a)if(r.canHandle(e)){const[n,i]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},i]}return[{type:"RAW",value:e},_.get(e)||[]]}function p(e){switch(e.type){case"HANDLER":return a.get(e.name).deserialize(e.value);case"RAW":return e.value}}function f(e,t,r){return new Promise((n=>{const i=[,,,,].fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===i&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:i},t),r)}))}var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function y(e){throw Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var v={exports:{}};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class b{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class x{constructor(){this._iterators=new Map}add(e){const t=e[Symbol.asyncIterator](),r=async()=>({value:await t.next(),next:r});this._iterators.set(r,r())}async*[Symbol.asyncIterator](){for(;this._iterators.size>0;){const{value:e,next:t}=await Promise.race(this._iterators.values());e.done?this._iterators.delete(t):(yield e.value,this._iterators.set(t,t()))}}}const D=(e,t)=>new URL(t,new URL(e,"ws://_")).pathname,S=e=>{try{return new URL(e).href,"url"}catch{}return null!==e.match(/^(\.){0,2}\//)?"relative":"bare"},C=e=>{const t=e.match(/^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?\/?(.*)$/);if(null===t)return;const[,r,n,i]=t;return{pkg:r,version:null!=n?n:"",path:i}},T=e=>{const t=e.lastIndexOf("/"),r=e.lastIndexOf(".");return-1===r||r<t?"":e.slice(r+1)},E=(e,t)=>{const r=T(e);return""===r?e+"."+t:e.slice(0,-r.length)+t},k=(e,t)=>{let r=0,n=0;for(let i=0;i<t&&i<e.length;i++)"\n"===e[i]?(r++,n=0):n++;return{line:r,character:n}},A=e=>null!==e.match(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/),N=({pkg:e,version:t})=>`${e}@${t||"latest"}`,F=({pkg:e,version:t,path:r})=>w(`${N({pkg:e,version:t})}/${P(r)}`),P=e=>e.startsWith("/")?e.slice(1):e,w=e=>e.endsWith("/")?e.slice(0,-1):e
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;class I{layout(e,t){var r,n;const i={},a=[{dependencies:e,nodeModules:i,parent:null}];for(;a.length>0;){const e=a.shift();for(const[i,o]of Object.entries(e.dependencies)){let s=e,c=!1;for(;null!==s.parent;){const e=null===(r=s.parent.nodeModules[i])||void 0===r?void 0:r.version;if(void 0!==e){c=e===o;break}s=s.parent}if(c)continue;const u={};s.nodeModules[i]={version:o,nodeModules:u};const l=null===(n=t[i])||void 0===n?void 0:n[o];void 0!==l&&a.push({dependencies:l,nodeModules:u,parent:s})}}return i}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const O=Symbol();class M{constructor(e,t,r){this._rootDependencies={},this._dependencyGraph={},this._filesByPackageVersion=new Map,this._cdn=e,this._importMapResolver=t,this._rootPackageJson=r}static async fetchTypes(e,t,r,n,i){const a=new M(e,t,r);await Promise.allSettled([...n.map((e=>a._handleBareAndRelativeSpecifiers(e,O))),...i.map((e=>a._addTypeScriptStandardLib(e)))]);const o=(new I).layout(a._rootDependencies,a._dependencyGraph),s=new Map;return await a._materializeNodeModulesTree(o,s,""),{files:s,layout:o,dependencyGraph:{root:a._rootDependencies,deps:a._dependencyGraph}}}async _addTypeScriptStandardLib(e){return this._handleBareSpecifier(`typescript/lib/lib.${e.toLowerCase()}.js`,O)}async _handleBareAndRelativeSpecifiers(e,t){const r=h.preProcessFile(e,void 0,!0),n=[];for(const{fileName:e}of r.importedFiles){const r=S(e);"bare"===r?n.push(this._handleBareSpecifier(e,t)):"relative"===r&&t!==O&&n.push(this._handleRelativeSpecifier(e,t))}for(const{fileName:e}of r.libReferenceDirectives)n.push(this._addTypeScriptStandardLib(e));await Promise.allSettled(n)}async _handleBareSpecifier(e,t){var r,n;let i=C(e);if(void 0===i)return;const a=null!==this._importMapResolver.resolve(e);if(a||(i.version=await this._getDependencyVersion(t,i.pkg)),i.path=await this._getDtsPath(i),a||(i=await this._cdn.canonicalize(i)),t!==O&&i.pkg===t.pkg||this._addEdgeToDependencyGraph(t,i),void 0!==(null===(n=null===(r=this._filesByPackageVersion.get(i.pkg))||void 0===r?void 0:r.get(i.version))||void 0===n?void 0:n.get(i.path)))return;const o=await this._fetchAndAddToOutputFiles(i);void 0===o.error&&await this._handleBareAndRelativeSpecifiers(o.result,i)}async _handleRelativeSpecifier(e,t){var r,n;const i={pkg:t.pkg,version:t.version,path:P(D(t.path,e).slice(1))};if(i.path=E(i.path,"d.ts"),void 0!==(null===(n=null===(r=this._filesByPackageVersion.get(i.pkg))||void 0===r?void 0:r.get(i.version))||void 0===n?void 0:n.get(i.path)))return;const a=await this._fetchAndAddToOutputFiles(i);void 0===a.error&&await this._handleBareAndRelativeSpecifiers(a.result,i)}async _getDependencyVersion(e,t){var r,n;const i=e===O?this._rootPackageJson:await this._fetchPackageJsonAndAddToOutputFiles(e);return null!==(n=null===(r=null==i?void 0:i.dependencies)||void 0===r?void 0:r[t])&&void 0!==n?n:"latest"}async _getDtsPath(e){var t,r,n;if(""!==e.path)return E(e.path,"d.ts");const i=await this._fetchPackageJsonAndAddToOutputFiles(e);return null!==(n=null!==(r=null!==(t=null==i?void 0:i.typings)&&void 0!==t?t:null==i?void 0:i.types)&&void 0!==r?r:void 0!==(null==i?void 0:i.main)?E(i.main,"d.ts"):void 0)&&void 0!==n?n:"index.d.ts"}async _fetchPackageJsonAndAddToOutputFiles(e){const t=await this._fetchAndAddToOutputFiles({...e,path:"package.json"});if(void 0!==t.error)throw Error(`Could not fetch package.json for ${e.pkg}@${e.version}: ${t.error}`);return JSON.parse(t.result)}async _fetchAndAddToOutputFiles(e){const t=this._importMapResolver.resolve(w(`${e.pkg}/${e.path}`));null===t&&(e=await this._cdn.canonicalize(e));let r=this._filesByPackageVersion.get(e.pkg);void 0===r&&(r=new Map,this._filesByPackageVersion.set(e.pkg,r));let n=r.get(e.version);void 0===n&&(n=new Map,r.set(e.version,n));let i=n.get(e.path);if(void 0!==i)return i;const a=new b;let o;if(i=a.promise,n.set(e.path,i),null!==t){const e=await fetch(t);if(200!==e.status){const t={error:e.status};return a.resolve(t),t}o=await e.text()}else try{o=(await this._cdn.fetch(e)).content}catch{const e={error:404};return a.resolve(e),e}const s={result:o};return a.resolve(s),s}_addEdgeToDependencyGraph(e,t){if(e===O)this._rootDependencies[t.pkg]=t.version;else{let r=this._dependencyGraph[e.pkg];void 0===r&&(r={},this._dependencyGraph[e.pkg]=r);let n=r[e.version];void 0===n&&(n={},r[e.version]=n),n[t.pkg]=t.version}}async _materializeNodeModulesTree(e,t,r){var n;for(const[i,a]of Object.entries(e)){const e=null===(n=this._filesByPackageVersion.get(i))||void 0===n?void 0:n.get(a.version);if(void 0!==e){for(const[n,a]of e){const e=await a;if(void 0===e.error){const a=`${r}${i}/${n}`;t.set(a,e.result)}}await this._materializeNodeModulesTree(a.nodeModules,t,`${r}${i}/node_modules/`)}}}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const L={target:h.ScriptTarget.ES2017,module:h.ModuleKind.ESNext,experimentalDecorators:!0,skipDefaultLibCheck:!0,skipLibCheck:!0,moduleResolution:h.ModuleResolutionKind.NodeJs,lib:["dom","esnext"]};class R{constructor(e,t){this._cdn=e,this._importMapResolver=t}async*process(e){let t;const r=[];for await(const n of e)if("file"===n.kind&&n.file.name.endsWith(".ts"))r.push(n.file);else if(yield n,"file"===n.kind&&"package.json"===n.file.name)try{t=JSON.parse(n.file.content)}catch(e){}if(0===r.length)return;const n=new Map,i=r.map((e=>({file:e,url:new URL(e.name,self.origin).href})));for(const{file:e,url:t}of i)n.set(t,e.content);const a=new B(n,self.origin,L),o=h.createLanguageService(a,h.createDocumentRegistry()),s=o.getProgram();if(void 0===s)throw Error("Unexpected error: program was undefined");for(const{file:e,url:t}of i){for(const r of o.getSyntacticDiagnostics(t))yield{kind:"diagnostic",filename:e.name,diagnostic:j(r)};const r=s.getSourceFile(t);let n;s.emit(r,((e,t)=>{n={name:new URL(e).pathname.slice(1),content:t,contentType:"text/javascript"}})),void 0!==n&&(yield{kind:"file",file:n})}const c=await M.fetchTypes(this._cdn,this._importMapResolver,t,i.map((e=>e.file.content)),L.lib);for(const[e,t]of c.files){const r=new URL("node_modules/"+e,self.origin).href;n.has(r)||n.set(r,t)}for(const{file:e,url:t}of i)for(const r of o.getSemanticDiagnostics(t))yield{kind:"diagnostic",filename:e.name,diagnostic:j(r)}}}class B{constructor(e,t,r){this.packageRoot=t,this.compilerOptions=r,this.files=e}getCompilationSettings(){return this.compilerOptions}getScriptFileNames(){return[...this.files.keys()]}getScriptVersion(){return"-1"}fileExists(e){return this.files.has(e)}readFile(e){return this.files.get(e)}getScriptSnapshot(e){if(this.fileExists(e))return h.ScriptSnapshot.fromString(this.readFile(e))}getCurrentDirectory(){return this.packageRoot}getDefaultLibFileName(){return"__lib.d.ts"}}function j(e){var t;return{code:e.code,source:null!==(t=e.source)&&void 0!==t?t:"typescript",message:h.flattenDiagnosticMessageText(e.messageText,"\n"),severity:J[e.category],range:{start:void 0!==e.file&&void 0!==e.start?e.file.getLineAndCharacterOfPosition(e.start):{character:0,line:0},end:void 0!==e.file&&void 0!==e.start&&void 0!==e.length?e.file.getLineAndCharacterOfPosition(e.start+e.length):{character:0,line:0}}}}const J={[h.DiagnosticCategory.Error]:1,[h.DiagnosticCategory.Warning]:2,[h.DiagnosticCategory.Message]:3,[h.DiagnosticCategory.Suggestion]:4},z=1===new Uint8Array(new Uint16Array([1]).buffer)[0];function U(e,t="@"){if(!q)return W.then((()=>U(e)));const r=e.length+1,n=(q.__heap_base.value||q.__heap_base)+4*r-q.memory.buffer.byteLength;n>0&&q.memory.grow(Math.ceil(n/65536));const i=q.sa(r-1);if((z?V:K)(e,new Uint16Array(q.memory.buffer,i,r)),!q.parse())throw Object.assign(Error(`Parse error ${t}:${e.slice(0,q.e()).split("\n").length}:${q.e()-e.lastIndexOf("\n",q.e()-1)}`),{idx:q.e()});const a=[],o=[];for(;q.ri();){const t=q.is(),r=q.ie(),n=q.ai(),i=q.id(),o=q.ss(),c=q.se();let u;q.ip()&&(u=s(e.slice(-1===i?t-1:t,-1===i?r+1:r))),a.push({n:u,s:t,e:r,ss:o,se:c,d:i,a:n})}for(;q.re();)o.push(e.slice(q.es(),q.ee()));function s(e){try{return(0,eval)(e)}catch{}}return[a,o,!!q.f()]}function K(e,t){const r=e.length;let n=0;for(;n<r;){const r=e.charCodeAt(n);t[n++]=(255&r)<<8|r>>>8}}function V(e,t){const r=e.length;let n=0;for(;n<r;)t[n]=e.charCodeAt(n++)}let q;const W=WebAssembly.compile((Q="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","undefined"!=typeof Buffer?Buffer.from(Q,"base64"):Uint8Array.from(atob(Q),(e=>e.charCodeAt(0))))).then(WebAssembly.instantiate).then((({exports:e})=>{q=e}));var Q;
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class H{constructor(e,t){this._emittedExternalDependencies=new Set,this._cdn=e,this._importMapResolver=t}async*process(e){const t=new x;t.add(this._handleProjectFiles(e,t)),yield*t}async*_handleProjectFiles(e,t){const r=new b,n=()=>r.promise;for await(const i of e)if("file"===i.kind&&i.file.name.endsWith(".js"))t.add(this._handleModule(i,n,t));else if(yield i,"file"===i.kind&&"package.json"===i.file.name){let e;try{e=JSON.parse(i.file.content)}catch(e){yield X(e,i.file)}void 0!==e&&r.resolve(e)}r.settled||r.resolve(void 0)}async*_handleModule(e,t,r){let n,i=e.file.content;await W;try{[n]=U(i)}catch(t){yield e;const r=G(t,e.file.name);return void(void 0!==r&&(yield r))}const a=[];for(let i=n.length-1;i>=0;i--){const{n:o}=n[i];void 0!==o&&a.push({info:n[i],newSpecifierPromise:this._handleSpecifier(o,e.file.name,t,r)})}for(const{info:{s:t,e:r,n,d:o},newSpecifierPromise:s}of a){let a;try{a=await s}catch(a){yield{kind:"diagnostic",filename:e.file.name,diagnostic:{message:`Could not resolve module "${n}": ${a.message}`,range:{start:k(i,t),end:k(i,r)}}};continue}if(a===n)continue;const c=-1!==o?`'${a}'`:a;i=i.substring(0,t)+c+i.substring(r)}e.file.content=i,yield e}async _handleSpecifier(e,t,r,n){const i=this._importMapResolver.resolve(e);if(null!==i)return i;const a=S(e);if("url"===a)return e;if("bare"===a)return this._handleBareSpecifier(e,t,r,n);if(!t.startsWith("node_modules/"))return e;const o=D(t,e).slice(14);if(!T(e))return this._handleBareSpecifier(o,t,(async()=>{}),n);const s=C(o);if(void 0===s)throw Error(`Invalid specifier "${o}"`);return n.add(this._fetchExternalDependency(s,n)),e}async _handleBareSpecifier(e,t,r,n){var i,a,o,s,c;let u=C(e);if(void 0===u)throw Error(`Invalid specifier "${e}"`);if(u.version||(u.version=null!==(o=null===(a=null===(i=await r())||void 0===i?void 0:i.dependencies)||void 0===a?void 0:a[u.pkg])&&void 0!==o?o:"latest"),""===u.path){const e=await this._cdn.fetchPackageJson(u);u.path=null!==(c=null!==(s=e.module)&&void 0!==s?s:e.main)&&void 0!==c?c:"index.js"}return T(u.path)&&A(u.version)||(u=await this._cdn.canonicalize(u)),n.add(this._fetchExternalDependency(u,n)),((e,t)=>{const r=e.split("/"),n=t.split("/");let i=0;for(;i<r.length&&i<n.length&&r[i]===n[i];)i++;const a=r.length-i-1;return(0===a?"./":Array(a+1).join("../"))+n.slice(i).join("/")})(t,`node_modules/${u.pkg}@${u.version}/${u.path}`)}async*_fetchExternalDependency(e,t){const r=`${e.pkg}@${e.version}/${e.path}`;if(this._emittedExternalDependencies.has(r))return;let n;this._emittedExternalDependencies.add(r);try{n=await this._cdn.fetch(e)}catch(e){return void console.error(`Error fetching ${r} from CDN: ${e.message}`)}let i=null;yield*this._handleModule({kind:"file",file:{name:"node_modules/"+r,content:n.content,contentType:n.contentType}},(async()=>{if(null===i)try{i=await this._cdn.fetchPackageJson(e)}catch{i=void 0}return i}),t)}}const G=(e,t)=>{const r=e.message.match(/@:(\d+):(\d+)$/);if(null===r)return;const n=Number(r[1])-1,i=Number(r[2])-1;return{kind:"diagnostic",filename:t,diagnostic:{message:"es-module-lexer error: "+e.message,range:{start:{line:n,character:i},end:{line:n,character:i+1}}}}},X=(e,t)=>{var r;const n=null!==(r=Y(e.message,t.content))&&void 0!==r?r:{line:0,character:0};return{kind:"diagnostic",filename:t.name,diagnostic:{message:"Invalid package.json: "+e,range:{start:n,end:k(t.content,t.content.length)}}}},Y=(e,t)=>{const r=e.match(/at position (\d+)/);if(null!==r)return k(t,Number(r[1]));const n=e.match(/at line (\d+) column (\d+)/);return null!==n?{line:Number(n[1])-1,character:Number(n[2])-1}:void 0};
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class ${constructor(e){this.importMap=e}resolve(e){var t;for(const[r,n]of Object.entries(null!==(t=this.importMap.imports)&&void 0!==t?t:{})){if(r===e)return n;if(r.endsWith("/")&&e.startsWith(r)){if(!n.endsWith("/"))return console.warn(`Could not resolve module specifier "${e}" using import map key "${r}" because address "${n}" must end in a forward-slash.`),null;const t=e.substring(r.length);let i;try{i=new URL(t,n)}catch{return console.warn(`Could not resolve module specifier "${e}" using import map key "${r}" because "${t}" could not be parsed relative to "${n}".`),null}const a=i.href;return a.startsWith(n)?a:(console.warn(`Could not resolve module specifier "${e}" using import map key "${r}" because "${t}" backtracked above "${n}".`),null)}}return null}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Z{constructor(e){this._fetchCache=new Map,this._versionCache=new Map,this._urlPrefix=e}async fetch(e){const{file:t}=await this._fetch(e);return t}async canonicalize(e){let t=A(e.version);if(!t){const r=N(e),n=this._versionCache.get(r);void 0!==n&&(e={...e,version:n},t=!0)}if(!t||""===T(e.path)){const{url:t}=await this._fetch(e);e=this._parseUnpkgUrl(t)}return e}async fetchPackageJson({pkg:e,version:t}){const{url:r,file:{content:n}}=await this._fetch({pkg:e,version:t,path:"package.json"});try{return JSON.parse(n)}catch(e){throw Error(`Error parsing CDN package.json from ${r}: ${e}`)}}async _fetch(e){var t;let r=A(e.version);if(!r){const t=N(e),n=this._versionCache.get(t);void 0!==n&&(e={...e,version:n},r=!0)}const n=F(e),i=this._fetchCache.get(n);if(void 0!==i)return i.promise;const a=new b;this._fetchCache.set(n,a);const o=this._urlPrefix+n,s=await fetch(o),c=await s.text();if(200!==s.status){const e=Error(`CDN HTTP ${s.status} error (${o}): ${c}`);return a.reject(e),a.promise}if(!r){const t=this._parseUnpkgUrl(s.url);this._versionCache.set(N(e),t.version),this._fetchCache.set(F(t),a)}const u={url:s.url,file:{content:c,contentType:null!==(t=s.headers.get("content-type"))&&void 0!==t?t:"text/plain"}};return a.resolve(u),a.promise}_parseUnpkgUrl(e){if(e.startsWith(this._urlPrefix)){const t=C(e.slice(this._urlPrefix.length));if(void 0!==t)return t}throw Error("Unexpected CDN URL format: "+e)}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */o({compileProject:async(e,t,r)=>{var n;const i=new $(t.importMap),a=new Z(null!==(n=t.cdnBaseUrl)&&void 0!==n?n:"https://unpkg.com/"),o=new R(a,i),s=new H(a,i).process(o.process(e.map((e=>({kind:"file",file:e})))));for await(const e of s)r(e);r({kind:"done"})}})}();