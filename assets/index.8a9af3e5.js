var Q=Object.defineProperty,$=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var B=(t,s,r)=>s in t?Q(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,m=(t,s)=>{for(var r in s||(s={}))L.call(s,r)&&B(t,r,s[r]);if(p)for(var r of p(s))S.call(s,r)&&B(t,r,s[r]);return t},w=(t,s)=>$(t,q(s));var y=(t,s)=>{var r={};for(var a in t)L.call(t,a)&&s.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&p)for(var a of p(t))s.indexOf(a)<0&&S.call(t,a)&&(r[a]=t[a]);return r};import{j as E,c as f,u as H,a as j,b as U,r as c,d as z,n as K,e as M,f as G,B as W,R as X,g as Z}from"./vendor.4c76523a.js";const _=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};_();const e=E.exports.jsx,l=E.exports.jsxs,R=E.exports.Fragment;function J(r){var a=r,{voting:t}=a,s=y(a,["voting"]);const n=t?e("span",{className:"animate-pulse",children:"\u8868\u6C7A\u4E2D..."}):l(R,{children:[e("span",{className:"mr-3 inline-block scale-[2] text-yellow-300",children:"\u262D"}),"\u958B\u59CB\u8868\u6C7A"]});return e("button",w(m({type:"submit",className:"inline-block w-full min-w-[16rem] cursor-pointer select-none rounded-lg bg-red-600 py-3 px-5 font-bold text-white transition duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"},s),{children:n}))}function v(a){var n=a,{className:t,red:s}=n,r=y(n,["className","red"]);return e("div",m({className:f("relative rounded-xl p-6 shadow-lg",{"bg-white dark:bg-gray-900":!s,"bg-red-600 dark:bg-red-700":s},t)},r))}function Y(t){return e("textarea",m({rows:3,className:"mb-4 w-full rounded-lg bg-gray-100 p-4 text-lg outline-none dark:bg-dark dark:text-white",placeholder:"\u63D0\u6848\u5167\u5BB9...",maxLength:300},t))}var ee="./assets/github.a6dbf164.svg",te="./assets/sun.5d3057dd.svg",se="./assets/moon.6e9a3eba.svg";function re(){const[t,s]=H({initialValue:!0,element:"html"});return e("button",{type:"button",onClick:()=>s(!t),children:e("img",{className:"h-6 w-6",src:t?te:se})})}function ne(){return e("div",{className:"mt-10 bg-gray-100 dark:bg-gray-900",children:l("div",{className:"container flex flex-col space-y-4 px-4 py-6",children:[l("div",{className:"flex items-center space-x-4 dark:invert",children:[e(re,{}),e("a",{href:"https://github.com/ngseke/great-hall-of-the-people-simulator",target:"_blank",rel:"noreferrer",children:e("img",{className:"h-6 w-6",src:ee,alt:"GitHub"})})]}),e("div",{className:"italic text-gray-700 dark:text-gray-300",title:"\u7FD2\u8FD1\u5E73\u89AA\u81EA\u6388\u6B0A",children:"Approved by president Xi"})]})})}var ae="./assets/emblem.a1ef48ec.svg";function le(){return l("div",{className:"mb-4 flex items-center sm:mb-10 sm:flex-col",children:[e("img",{className:"mr-2 h-16 w-16 sm:mr-0 sm:mb-4 sm:h-24 sm:w-24",src:ae}),l("div",{className:"flex flex-col sm:items-center",children:[l("h1",{className:"text-3xl font-extrabold dark:text-white sm:mb-3 sm:text-5xl",children:[e("span",{children:"\u4EBA\u6C11\u5927\u6703\u5802"}),e("span",{children:"\u6A21\u64EC\u5668"})]}),e("span",{className:"italic text-gray-700 dark:text-gray-300 sm:text-xl",children:"\u6C92\u6709\uFF0C\u901A\u904E \u{1F44F}"})]})]})}function ie(t){return new Promise((s,r)=>{t.addEventListener("end",s,!0),t.addEventListener("error",r,!0),t.lang="zh-TW",speechSynthesis.speak(t)})}function ue(){return new URLSearchParams(j().search)}const T="m";function ce(t){var d;const{pathname:s}=j(),r=ue(),a=U(),[n,i]=c.exports.useState((d=r.get(T)||t)!=null?d:"");return{message:n,setMessage:h=>{i(h),a.replace({pathname:s,search:h?`?${T}=${h}`:void 0})}}}function k(r){var a=r,{className:t}=a,s=y(a,["className"]);return e("div",m({className:f("absolute left-0 top-0 flex h-full w-full items-center justify-center",t)},s))}var oe="./assets/opening.7c12511b.png";function V(){const t="great-hall-of-the-people-simulator-history",[s,r,a]=z(t,[]),n=c.exports.useRef(s);c.exports.useEffect(()=>{n.current=s},[s]);const i=c.exports.useCallback(u=>{const d={message:u,timestamp:+new Date,id:K()};r([...n.current,d])},[r]);return{logs:s,pushLog:i,clearLogs:a}}M.locale(G);function de({log:t}){const s=c.exports.useMemo(()=>{const r=M(t.timestamp),a=2013;return`\u6176\u8C50 ${r.year()-a} \u5E74 ${r.format("M \u6708 D \u65E5")}`},[t]);return e(v,{red:!0,children:l("div",{className:"flex items-center text-white",children:[l("div",{className:"flex-1",children:[e("div",{className:"mb-1 flex",children:s}),e("div",{className:"font-serif text-xl text-yellow-300",children:t.message})]}),l("div",{className:"ml-6 flex flex-none flex-col items-center space-y-1",children:[e("span",{className:"inline-block scale-125 text-3xl",children:"\u{1F44F}"}),e("span",{className:"text-lg font-bold",children:"\u901A\u904E"})]})]})})}function me(){const{logs:t,clearLogs:s}=V();return t.length?e("div",{className:"flex justify-center text-gray-700 dark:text-gray-300",children:e("div",{className:"w-full flex-initial lg:w-2/3 xl:w-1/2 ",children:l(v,{children:[e("h2",{className:"mb-4 text-3xl font-semibold lg:leading-10",children:"\u6B77\u53F2\u8868\u6C7A\u8A18\u9304"}),e("div",{className:"mb-4 space-y-3",children:[...t].reverse().splice(0,5).map(r=>e(de,{log:r},r.id))}),e("a",{href:"#",className:"hidden underline",onClick:r=>{r.preventDefault(),s()},title:"\u6E05\u9664\u6B77\u53F2\u8868\u6C7A\u8A18\u9304",children:"\u8B8A\u6210\u4E0D\u5177\u73FE\u5BE6\u610F\u7FA9\u7684\u300C\u6B77\u53F2\u6587\u4EF6\u300D"})]})})}):e(R,{})}function D({index:t,active:s,name:r,children:a}){return l("div",{className:f("flex flex-col space-y-4 transition-all duration-500",{"opacity-50":!s}),children:[l("div",{className:"flex items-center space-x-3 whitespace-nowrap",children:[e("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-bold text-red-600 dark:text-red-700",children:t}),e("div",{className:f("origin-left text-xl font-bold tracking-wider text-white transition-all duration-500",{"scale-[130%]":s}),children:r})]}),a&&e("div",{className:"pl-8",children:a})]})}function fe({children:t,className:s}){return l("div",{className:f("flex items-start text-yellow-300",s),children:[e("div",{className:"scale-150 select-none text-3xl after:content-['\u275D']"}),e("div",{className:"pl-3 font-serif text-2xl leading-8 tracking-wide lg:text-3xl lg:leading-10",children:t})]})}function he(){const[t,s]=c.exports.useState(!1),[r,a]=c.exports.useState(!1),[n,i]=c.exports.useState(!1),[u,d]=c.exports.useState(!1),[h,F]=c.exports.useState(-1),A=h>=20,{message:x,setMessage:I}=ce("\u5927\u6703\u8981\u6C42\u5168\u9EE8\u4EE5\u300C\u7FD2\u8FD1\u5E73\u65B0\u6642\u4EE3\u4E2D\u570B\u7279\u8272\u793E\u6703\u4E3B\u7FA9\u601D\u60F3\u300D\u7D71\u4E00\u601D\u60F3\u548C\u884C\u52D5"),o=c.exports.useRef(null),b=c.exports.useCallback(async()=>{!o.current||(o.current.muted=!1,await o.current.play(),o.current.pause(),o.current.currentTime=0)},[]);c.exports.useEffect(()=>{b()},[b]);const{pushLog:P}=V(),O=async()=>{!o.current||(i(!0),b(),await ie(new SpeechSynthesisUtterance(x)),d(!0),await o.current.play())};c.exports.useEffect(()=>{u||(i(!1),F(-1))},[u]);const C={width:1920,height:1080},N=(()=>n&&!u?1:u&&!A?2:u&&A?3:-1)();return l("div",{className:"flex min-h-[100vh] flex-col",children:[l("div",{className:"container flex-1 space-y-6 py-6 px-4 sm:py-8",children:[e(le,{}),l("div",{className:"flex flex-wrap items-start justify-center",children:[l("div",{className:"mb-6 flex-1 lg:mb-0",children:[!n&&e(v,{children:l("form",{className:"flex flex-col pr-0 lg:pr-12",onSubmit:g=>{g.preventDefault(),O()},children:[e(Y,{value:x,onChange:g=>I(g.target.value)}),e("div",{className:"flex justify-start lg:justify-end",children:e(J,{disabled:!x||n||t,voting:n})})]})}),n&&e(v,{red:!0,children:l("div",{className:"space-y-6",children:[e(D,{index:1,name:"\u63D0\u6848",active:N===1,children:e(fe,{className:"lg:pr-12",children:x})}),e(D,{index:2,name:"\u8868\u6C7A",active:N===2}),e(D,{index:3,name:"\u901A\u904E",active:N===3})]})})]}),l("div",{className:"relative h-auto w-full overflow-hidden rounded-lg shadow-xl lg:h-[281.25px] lg:w-[500px] lg:-translate-x-10 lg:translate-y-10 2xl:h-[337.5px] 2xl:w-[600px]",children:[e(k,{className:f("transition duration-700",{"opacity-0":u||t,"opacity-100":n&&!u}),children:e("img",m({src:oe,className:"h-full w-full"},C))}),e("video",w(m({playsInline:!0,muted:!0,preload:"auto",ref:o},C),{onLoadStart:()=>s(!0),onLoadedData:()=>s(!1),onEnded:()=>{d(!1),P(x)},onError:()=>a(!0),onTimeUpdate:g=>F(g.currentTarget.currentTime),className:"h-full w-full bg-white",children:e("source",{src:"./voting.mp4",type:"video/mp4"})})),t&&e(k,{className:"bg-red-600",children:e("div",{className:"animate-pulse select-none text-9xl font-bold text-yellow-400",children:"\u262D"})}),r&&l(k,{className:"bg-gray-100 text-gray-500",children:[e("div",{children:"\u8F09\u5165\u5931\u6557 \u{1F972}"}),e("a",{href:"#",onClick:()=>location.reload(),className:"underline",children:"\u91CD\u8A66"})]})]})]}),e("div",{className:"lg:pb-10"}),e(me,{})]}),e(ne,{})]})}function xe(){return e(W,{children:e(he,{})})}X.render(e(Z.StrictMode,{children:e(xe,{})}),document.getElementById("root"));
