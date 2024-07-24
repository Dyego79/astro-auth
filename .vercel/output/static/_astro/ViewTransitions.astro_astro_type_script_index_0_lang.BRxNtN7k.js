const B={BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,TIMEOUT:405,CONFLICT:409,PRECONDITION_FAILED:412,PAYLOAD_TOO_LARGE:413,UNSUPPORTED_MEDIA_TYPE:415,UNPROCESSABLE_CONTENT:422,TOO_MANY_REQUESTS:429,CLIENT_CLOSED_REQUEST:499,INTERNAL_SERVER_ERROR:500},tt=Object.entries(B).reduce((t,[e,n])=>({...t,[n]:e}),{});class p extends Error{type="AstroActionError";code="INTERNAL_SERVER_ERROR";status=500;constructor(e){super(e.message),this.code=e.code,this.status=p.codeToStatus(e.code),e.stack&&(this.stack=e.stack)}static codeToStatus(e){return B[e]}static statusToCode(e){return tt[e]??"INTERNAL_SERVER_ERROR"}static async fromResponse(e){const n=await e.clone().json();return typeof n=="object"&&n?.type==="AstroActionInputError"&&Array.isArray(n.issues)?new et(n.issues):typeof n=="object"&&n?.type==="AstroActionError"?new p(n):new p({message:e.statusText,code:p.statusToCode(e.status)})}}class et extends p{type="AstroActionInputError";issues;fields;constructor(e){super({message:`Failed to validate: ${JSON.stringify(e,null,2)}`,code:"BAD_REQUEST"}),this.issues=e,this.fields={};for(const n of e)if(n.path.length>0){const o=n.path[0].toString();this.fields[o]??=[],this.fields[o]?.push(n.message)}}}async function nt(t){try{return{data:await t(),error:void 0}}catch(e){return e instanceof p?{data:void 0,error:e}:{data:void 0,error:new p({message:e instanceof Error?e.message:"Unknown error",code:"INTERNAL_SERVER_ERROR"})}}}new Proxy({},{get(){throw new Error("[astro:action] `z` unexpectedly used on the client.")}});function X(t={},e="/_actions/"){return new Proxy(t,{get(n,o){if(o in n)return n[o];const r=e+o.toString(),s=a=>ot(a,r);return s.toString=()=>r,s.safe=a=>nt(()=>s(a)),s.safe.toString=()=>r,s.$$FORM_ACTION=function(){const a=new FormData;return a.set("_astroAction",s.toString()),{method:"POST",name:s.toString(),data:a}},s.safe.$$FORM_ACTION=function(){const a=new FormData;return a.set("_astroAction",s.toString()),a.set("_astroActionSafe","true"),{method:"POST",name:s.toString(),data:a}},X(s,r+".")}})}async function ot(t,e){const n=new Headers;n.set("Accept","application/json");let o=t;if(!(o instanceof FormData)){try{o=t?JSON.stringify(t):void 0}catch(a){throw new p({code:"BAD_REQUEST",message:`Failed to serialize request body to JSON. Full error: ${a.message}`})}n.set("Content-Type","application/json"),n.set("Content-Length",o?.length.toString()??"0")}const r=await fetch(e,{method:"POST",body:o,headers:n});if(!r.ok)throw await p.fromResponse(r);return r.status===204?void 0:await r.json()}const Ft=X(),T="data-astro-transition-persist";function rt(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function st(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function it(t){for(const e of Array.from(document.head.children)){const n=lt(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function at(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${T}]`)){const o=n.getAttribute(T),r=t.querySelector(`[${T}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ut(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ct=()=>{const t=document.activeElement;if(t?.closest(`[${T}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>O({activeElement:t,start:e,end:n})}return()=>O({activeElement:t})}else return()=>O({activeElement:null})},O=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},lt=(t,e)=>{const n=t.getAttribute(T),o=n&&e.head.querySelector(`[${T}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ut=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},ft=t=>{rt(t),st(t),it(t);const e=ct();at(t.body,document.body),e()},dt="astro:before-preparation",mt="astro:after-preparation",ht="astro:before-swap",pt="astro:after-swap",wt=t=>document.dispatchEvent(new Event(t));class q extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,s,a,c,l,f,u){super(e,n),this.from=o,this.to=r,this.direction=s,this.navigationType=a,this.sourceElement=c,this.info=l,this.newDocument=f,this.signal=u,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class gt extends q{formData;loader;constructor(e,n,o,r,s,a,c,l,f,u){super(dt,{cancelable:!0},e,n,o,r,s,a,c,l),this.formData=f,this.loader=u.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class yt extends q{direction;viewTransition;swap;constructor(e,n){super(ht,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>ft(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function Tt(t,e,n,o,r,s,a,c,l){const f=new gt(t,e,n,o,r,s,window.document,a,c,l);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(wt(mt),f.navigationType!=="traverse"&&N({scrollX,scrollY}))),f}function Et(t,e){const n=new yt(t,e);return document.dispatchEvent(n),n.swap(),n}const bt=history.pushState.bind(history),v=history.replaceState.bind(history),N=t=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...t},""))},P=!!document.startViewTransition,k=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),V=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let d,g,S;const j=t=>document.dispatchEvent(new Event(t)),W=()=>j("astro:page-load"),vt=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},_="data-astro-transition-persist",C="data-astro-transition",D="data-astro-transition-fallback";let F,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):k()&&(v({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function At(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function Q(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function St(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const s=new Promise(a=>{o.onload=o.onerror=a});t=t.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const J=(t,e,n,o,r)=>{const s=V(e,t),a=document.title;document.title=o;let c=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;v({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",t.href)}else bt({...n.state,index:++E,scrollX:0,scrollY:0},"",t.href);if(document.title=a,S=t,s||(scrollTo({left:0,top:0,behavior:"instant"}),c=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const l=history.state;location.href=t.href,history.state||(v(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else c||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Rt(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${_}="${n.getAttribute(_)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return e}async function M(t,e,n,o,r){async function s(l){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const u=document.getAnimations();document.documentElement.setAttribute(D,l);const w=document.getAnimations().filter(h=>!u.includes(h)&&!f(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await s("old")}catch{}const a=document.title,c=Et(t,n.viewTransition);J(c.to,c.from,e,a,o),j(pt),r==="animate"&&(!n.transitionSkipped&&!c.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Lt(){return d?.controller.abort(),d={controller:new AbortController}}async function K(t,e,n,o,r){const s=Lt();if(!k()||location.origin!==n.origin){s===d&&(d=void 0),location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&N({scrollX,scrollY}),V(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){J(n,e,o,document.title,r),s===d&&(d=void 0);return}const c=await Tt(e,n,t,a,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(c.defaultPrevented||c.signal.aborted){s===d&&(d=void 0),c.signal.aborted||(location.href=n.href);return}async function l(i){const w=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const y=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=y?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await At(w,h);if(m===null){i.preventDefault();return}if(m.redirected){const y=new URL(m.redirected);if(y.origin!==i.to.origin){i.preventDefault();return}i.to=y}if(F??=new DOMParser,i.newDocument=F.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const L=Rt(i.newDocument);L.length&&!i.signal.aborted&&await Promise.all(L)}async function f(){if(g&&g.viewTransition){try{g.viewTransition.skipTransition()}catch{}try{await g.viewTransition.updateCallbackDone}catch{}}return g={transitionSkipped:!1}}const u=await f();if(c.signal.aborted){s===d&&(d=void 0);return}if(document.documentElement.setAttribute(C,c.direction),P)u.viewTransition=document.startViewTransition(async()=>await M(c,o,u,r));else{const i=(async()=>{await Promise.resolve(),await M(c,o,u,r,Q())})();u.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(w=>u.viewTransitionFinished=w),skipTransition:()=>{u.transitionSkipped=!0,document.documentElement.removeAttribute(D)}}}u.viewTransition.updateCallbackDone.finally(async()=>{await St(),W(),vt()}),u.viewTransition.finished.finally(()=>{u.viewTransition=void 0,u===g&&(g=void 0),s===d&&(d=void 0),document.documentElement.removeAttribute(C),document.documentElement.removeAttribute(D)});try{await u.viewTransition.updateCallbackDone}catch(i){const w=i;console.log("[astro]",w.name,w.message,w.stack)}}async function U(t,e){await K("forward",S,new URL(t,location.href),e??{})}function Ot(t){if(!k()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>E?"forward":"back";E=n,K(o,S,new URL(location.href),{},e)}const H=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&N({scrollX,scrollY})};{if(P||Q()!=="none")if(S=new URL(location.href),addEventListener("popstate",Ot),addEventListener("load",W),"onscrollend"in window)addEventListener("scrollend",H);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,H();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}const z=new Set,A=new WeakSet;let I,G,$=!1;function Dt(t){$||($=!0,I??=t?.prefetchAll??!1,G??=t?.defaultStrategy??"hover",It(),Nt(),Pt(),xt())}function It(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{b(e.target,"tap")&&R(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Nt(){let t;document.body.addEventListener("focusin",o=>{b(o.target,"hover")&&e(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),x(()=>{for(const o of document.getElementsByTagName("a"))A.has(o)||b(o,"hover")&&(A.add(o),o.addEventListener("mouseenter",e,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function e(o){const r=o.target.href;t&&clearTimeout(t),t=setTimeout(()=>{R(r)},80)}function n(){t&&(clearTimeout(t),t=0)}}function Pt(){let t;x(()=>{for(const e of document.getElementsByTagName("a"))A.has(e)||b(e,"viewport")&&(A.add(e),t??=kt(),t.observe(e))})}function kt(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const o of e){const r=o.target,s=t.get(r);o.isIntersecting?(s&&clearTimeout(s),t.set(r,setTimeout(()=>{n.unobserve(r),t.delete(r),R(r.href)},300))):s&&(clearTimeout(s),t.delete(r))}})}function xt(){x(()=>{for(const t of document.getElementsByTagName("a"))b(t,"load")&&R(t.href)})}function R(t,e){const n=e?.ignoreSlowConnection??!1;if(_t(t,n))if(z.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",t),document.head.append(o)}else fetch(t,{priority:"low"})}function _t(t,e){if(!navigator.onLine||!e&&Z())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!z.has(t)}catch{}return!1}function b(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||I)&&Z()?!0:n==null&&I||n===""?e===G:n===e}function Z(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function x(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function Ct(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Y(t){return t.dataset.astroReload!==void 0}(P||Ct()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;Y(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),U(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||Y(e))return;const n=e,o=t.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),a=typeof n.method=="string"?n.method:n.getAttribute("method");let c=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??a??"get";if(l==="dialog"||location.origin!==new URL(c,location.href).origin)return;const f={sourceElement:o??n};if(l==="get"){const u=new URLSearchParams(r),i=new URL(c);i.search=u.toString(),c=i.toString()}else f.formData=r;t.preventDefault(),U(c,f)}),Dt({prefetchAll:!0}));export{Ft as a};