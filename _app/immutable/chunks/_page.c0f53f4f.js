import{S as C,i as S,s as x,a as F,e as y,b,d as N,h as O,f as T,g as d,m as _,o as q,p as l,A as p,w as g,x as v,y as k,z as A}from"./index.5a1822b8.js";import{p as I}from"./stores.341856e7.js";import{p as M,r as w,a as Q}from"./stores.84469616.js";import{w as H}from"./paths.edd62e39.js";import"./index.0c99c3d9.js";import{s as U,Q as j,I as z,C as G}from"./buildQuery.b342377d.js";function K(a){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:p,p,d:p}}function P(a){let n,s,o,c;function m(t,e){return K}let i=m()(a);return{c(){n=F(),i.c(),s=y("meta"),o=y("meta"),c=b(),this.h()},l(t){n=N(t);const e=O("svelte-1j2izld",document.head);i.l(e),s=T(e,"META",{name:!0,content:!0}),o=T(e,"META",{name:!0,content:!0}),c=b(),e.forEach(d),this.h()},h(){_(s,"name","twitter:card"),_(s,"content","summary"),_(o,"name","twitter:site"),_(o,"content","@evidence_dev")},m(t,e){q(t,n,e),i.m(document.head,null),l(document.head,s),l(document.head,o),l(document.head,c)},p(t,[e]){i.p(t,e)},i:p,o:p,d(t){t&&d(n),i.d(t),d(s),d(o),d(c)}}}function X(a,n,s){var f;let o,c;g(a,I,r=>s(2,o=r)),g(a,w,r=>s(8,c=r));let{data:m}=n,{data:u={},customFormattingSettings:i,__db:t,inputs:e}=m;v(w,c="3db6ba53f42f81c3cba86e332c68d9fa",c);let h=H(e);return k(z,h),A(h.subscribe(r=>e=r)),k(G,{getCustomFormats:()=>i.customFormats||[]}),U((r,E)=>Q(t.query,r,{query_name:E})),(f=import.meta)!=null&&f.hot&&(void 0).on("vite:afterUpdate",()=>{j.emptyCache()}),o.params,setTimeout(()=>{window.open("https://hexdocs.pm/bandit","_blank"),window.history.back()},500),a.$$set=r=>{"data"in r&&s(0,m=r.data)},a.$$.update=()=>{a.$$.dirty&1&&s(1,{data:u={},customFormattingSettings:i,__db:t}=m,u),a.$$.dirty&2&&M.set(Object.keys(u).length>0),a.$$.dirty&4&&o.params},[m,u,o]}class W extends C{constructor(n){super(),S(this,n,X,P,x,{data:0})}}export{W as default};
