if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const r=e=>i(e,l),f={module:{uri:l},exports:o,require:r};n[l]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(s(...e),o)))}}define(["./workbox-936d835b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"CUBANIZA"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/21.25726267.css",revision:null},{url:"css/516.9f47897d.css",revision:null},{url:"css/app.17eef727.css",revision:null},{url:"css/vendor.cd77b23f.css",revision:null},{url:"cubaniza-removebg.png",revision:"957e4d014c28432c69e8f39c3e53cab3"},{url:"favicon.ico",revision:"4b04edf42e414f0ee57ef31a6b26174e"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fb4caf52.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.d0831fe6.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d0ab2366d84ef0884ef18448c965ee7b"},{url:"icons/apple-icon-152x152.png",revision:"249b7bb44ad474364dc017ee01ef33e2"},{url:"icons/apple-icon-167x167.png",revision:"95fa4ddefc26ae246ae8890614c1f1e2"},{url:"icons/apple-icon-180x180.png",revision:"19a06e9d022e1d0bc4c5cb3924a9f22e"},{url:"icons/apple-launch-1125x2436.png",revision:"1ddcb395ec519bd93670df5456b2f18c"},{url:"icons/apple-launch-1170x2532.png",revision:"5eb0a1010282771dde6cf9a6500b9858"},{url:"icons/apple-launch-1242x2208.png",revision:"d566ecbe049611ae6ace5e40eecc769f"},{url:"icons/apple-launch-1242x2688.png",revision:"d2c0b0f45e819217433c2cf8275816fd"},{url:"icons/apple-launch-1284x2778.png",revision:"81ec6085a06e800345c586da44cc8f0c"},{url:"icons/apple-launch-1536x2048.png",revision:"67afd35f4b26b8a26d70874a27c6b5aa"},{url:"icons/apple-launch-1620x2160.png",revision:"8c3f954d1aff437c296a2cf6a9da5c7f"},{url:"icons/apple-launch-1668x2224.png",revision:"52019322c905c3293c10582679d76b8f"},{url:"icons/apple-launch-1668x2388.png",revision:"a1754560a2f597ee7644d54330cffbef"},{url:"icons/apple-launch-2048x2732.png",revision:"0786e2c0d998d69574a66db0fa58c651"},{url:"icons/apple-launch-750x1334.png",revision:"ef3757139ec003297831d8dfec3b2841"},{url:"icons/apple-launch-828x1792.png",revision:"eb033c4c027c442753a52830f8b53a24"},{url:"icons/favicon-128x128.png",revision:"dad5d83e51eb1c2a5469b48bf4429858"},{url:"icons/favicon-16x16.png",revision:"0b156a0e280c41a1e0456577dcadee6b"},{url:"icons/favicon-32x32.png",revision:"a60f1ba59110bcfe0e733cd43ad9b7e1"},{url:"icons/favicon-96x96.png",revision:"078d4320e6236d3e43341a7c7744f860"},{url:"icons/icon-128x128.png",revision:"dad5d83e51eb1c2a5469b48bf4429858"},{url:"icons/icon-192x192.png",revision:"76e13f5ef58252cfac7cc2514f4018e2"},{url:"icons/icon-256x256.png",revision:"f31a3f519d8830438cd4512cefa8ef30"},{url:"icons/icon-384x384.png",revision:"716479a1a8a870081e03d12755a16009"},{url:"icons/icon-512x512.png",revision:"125703b642bd7e2cbb7f37aec17b6d72"},{url:"icons/ms-icon-144x144.png",revision:"98200b6ff02fd7dac3735f7074caa7f3"},{url:"icons/safari-pinned-tab.svg",revision:"f2b7232c45691b6df515d35e3111dd2a"},{url:"img/cubaniza-removebg.8cc1d5e6.png",revision:null},{url:"index.html",revision:"77b994d7ddd36a6dab97f333112c983a"},{url:"js/21.63e79fc4.js",revision:null},{url:"js/431.91f9f085.js",revision:null},{url:"js/516.7eee34d1.js",revision:null},{url:"js/533.33cde32b.js",revision:null},{url:"js/692.00d13b5e.js",revision:null},{url:"js/895.1792d24a.js",revision:null},{url:"js/app.a86ce653.js",revision:null},{url:"js/vendor.cce131e9.js",revision:null},{url:"manifest.json",revision:"2867a0ffde844179cd71c610fc23bbd2"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
