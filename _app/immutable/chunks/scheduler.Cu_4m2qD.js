function x(){}const M=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function D(){return Object.create(null)}function j(t){t.forEach(w)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(E(n,e))}function A(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)i[u]=n.dirty[u]|r[u];return i}return n.dirty|r}return n.dirty}function C(t,n,e,o,r,i){if(r){const f=y(n,e,o,i);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let l;function d(t){l=t}function p(){if(!l)throw new Error("Function called outside component initialization");return l}function H(t){p().$$.on_mount.push(t)}function I(t){p().$$.after_update.push(t)}function J(t){p().$$.on_destroy.push(t)}const a=[],b=[];let s=[];const g=[],m=Promise.resolve();let h=!1;function v(){h||(h=!0,m.then(q))}function K(){return v(),m}function O(t){s.push(t)}const _=new Set;let c=0;function q(){if(c!==0)return;const t=l;do{try{for(;c<a.length;){const n=a[c];c++,d(n),z(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];_.has(e)||(_.add(e),e())}s.length=0}while(a.length);for(;g.length;)g.pop()();h=!1,_.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function L(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{B as a,U as b,A as c,I as d,b as e,D as f,G as g,q as h,F as i,S as j,O as k,L as l,l as m,x as n,H as o,d as p,w as q,j as r,P as s,K as t,C as u,a as v,v as w,k as x,M as y,J as z};