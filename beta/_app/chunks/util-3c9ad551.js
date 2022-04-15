var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(e,a,o)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,n=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&i(t,a,e[a]);if(o)for(var a of o(e))r.call(e,a)&&i(t,a,e[a]);return t},c=(t,o)=>e(t,a(o));import{C as l,S as d,i as p,s as u,e as f,c as m,a as h,d as g,b as y,Y as w,f as v,E as b,P as j,I as O,A as E,aa as S,ab as x,R as D,J as $,K as P,L as I,ac as L,N as H}from"./vendor-d6823437.js";import{c as R,e as T,f as J,i as N,h as U,j as V,a as _,k}from"./state-b315426a.js";const M=l(void 0);function z(t){let e,a;return{c(){e=f("div"),a=f("div"),this.h()},l(t){e=m(t,"DIV",{id:!0,class:!0});var o=h(e);a=m(o,"DIV",{id:!0,class:!0}),h(a).forEach(g),o.forEach(g),this.h()},h(){y(a,"id","container"),y(a,"class","flex-1 overflow-auto"),y(e,"id","view"),y(e,"class","p-2 svelte-5ndy2s"),w(e,"error",t[1]),w(e,"outOfSync",t[2])},m(o,s){v(o,e,s),b(e,a),t[3](a)},p(t,[a]){2&a&&w(e,"error",t[1]),4&a&&w(e,"outOfSync",t[2])},i:j,o:j,d(a){a&&g(e),t[3](null)}}}function A(t,e,a){let o;O(t,R,(t=>a(7,o=t)));let s,r="",i="",n=!1,c=!1,l=!0;return E((()=>{R.subscribe((t=>{try{if(s&&t&&(t.updateDiagram||t.autoSync)){if(t.autoSync||S(R,o.updateDiagram=!1,o),a(2,c=!1),l=!0,r===t.code&&i===t.mermaid)return;r=t.code,i=t.mermaid;const e=s.parentElement.parentElement.parentElement.scrollTop;delete s.dataset.processed,x.exports.initialize(Object.assign({},JSON.parse(t.mermaid))),x.exports.render("graph-div",r,(t=>{a(0,s.innerHTML=t,s)})),a(0,s.parentElement.parentElement.parentElement.scrollTop=e,s),a(1,n=!1)}else l?l=!1:a(2,c=!0)}catch(e){console.log("view fail",e),a(1,n=!0)}})),M.subscribe((t=>{void 0===t?a(1,n=!1):(a(1,n=!0),console.log("Error: ",t))}))})),[s,n,c,function(t){D[t?"unshift":"push"]((()=>{s=t,a(0,s)}))}]}class C extends d{constructor(t){super(),p(this,t,A,z,u,{})}}const G=$(l("manual"),P(),"autoHistoryMode"),K=$(l([]),P(),"autoHistoryStore"),Y=$(l([]),P(),"manualHistoryStore"),q=l([]),B=I([G,K,Y,q],(([t,e,a,o],s)=>{s("auto"===t?e:"manual"===t?a:"loader"===t?o:e)})),F=t=>{"loader"!==t.type?(t.name=L(2),"auto"===t.type?K.update((e=>(30===e.length&&e.pop(),[t,...e]))):Y.update((e=>[t,...e]))):q.update((e=>[t,...e]))},Q=t=>{("auto"===H(G)?K:Y).update((e=>("loader"!==H(G)&&(e=e.filter((e=>t&&e.time!=t))),e)))},W=t=>{const e=H(t?K:Y);return e.length>0?JSON.stringify(e[0].state):""},X=async t=>t.truncated?await(await fetch(t.raw_url)).text():t.content,Z=async t=>{const[e,a,o,s]=t.split("github.com").pop().split("/"),{html_url:r,files:i,history:n}=await(await fetch(`https://api.github.com/gists/${o}${s?"/"+s:""}`)).json();if((t=>"code.mmd"in t)(i)){const t=await X(i["code.mmd"]);let e;"config.json"in i&&(e=await X(i["config.json"]));const a=n[0];return{url:`${r}/${a.version}`,code:t,config:e,author:a.user.login,time:new Date(a.committed_at).getTime(),version:a.version.slice(-7)}}throw"Invalid gist provided"},tt=(t,e=t.url)=>{const a=c(n({},T),{code:t.code,loader:{type:"gist",config:{url:e}}});return t.config&&(a.mermaid=t.config),a},et={gist:async t=>{try{const[e,a,o,s]=t.split("github.com").pop().split("/"),{history:r}=await(await fetch(`https://api.github.com/gists/${o}${s?"/"+s:""}`)).json(),i=[];for(const t of r){const e=await Z(t.url).catch((()=>{}));e&&i.push(e)}if(0===i.length)throw"Invalid gist provided";i.reverse();const n=tt(i.slice(-1).pop(),t);for(const t of i)F({state:tt(t),time:t.time,type:"loader",url:t.url,name:`${t.author} v${t.version}`});return n}catch(e){console.error(e)}}},at=()=>{J({updateDiagram:!0})},ot=async()=>{var t;k(window.location.hash.slice(1)),await N("Loading Gist...",(async()=>{const t=new URLSearchParams(window.location.search);let e,a,o=T,s=!1;const r=t.get("code"),i=t.get("config");if(r&&(e=await(await fetch(r)).text(),s=!0),a=i?await(await fetch(i)).text():T.mermaid,e)o={code:e,mermaid:a,loader:{type:"files",config:{codeURL:r,configURL:i}}};else for(const[n,c]of t.entries())if(n in et)try{o=await et[n](c),s=!0;break}catch(l){console.error(l)}s&&J(c(n({},o),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))})().catch(console.error)),at(),U(),await V(),null==(t=_)||t.page()};export{C as V,B as a,F as b,Q as c,M as e,W as g,G as h,ot as i,q as l,at as s};