import{j as a,r as d,R as p,a as u}from"./vendor.a3ade203.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};f();var m="/assets/favicon.e3b0c442.svg";const t=a.exports.jsx,i=a.exports.jsxs;function h(){const[c,o]=d.exports.useState(0);return t("div",{className:"App",children:i("header",{className:"App-header",children:[t("img",{src:m,className:"App-logo",alt:"logo"}),t("p",{children:"Fun facts about bitcoins"}),t("p",{children:i("button",{type:"button",onClick:()=>o(n=>n+10),children:["det her er s\xE5 meget din mor vejer i tons: ",c]})}),t("p",{children:"Bitcoins blev opfundet i 2008."}),i("p",{children:[t("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",t("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})]})]})})}p.render(t(u.StrictMode,{children:t(h,{})}),document.getElementById("root"));
