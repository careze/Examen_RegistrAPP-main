"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(q,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var g=h(5861),M=h(8360),m=h(839),R=h(7484);h(4874),h(6225);const P=new WeakMap,b=(e,t,s,r=0,n=!1)=>{P.has(e)!==s&&(s?H(e,t,r,n):k(e,t))},H=(e,t,s,r=!1)=>{const n=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r&&(o.disabled=!0),n.appendChild(o),P.set(e,o);const c="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},k=(e,t)=>{const s=P.get(e);s&&(P.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",T=(e,t,s)=>{const r=e[U];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&T(t,0,s)},{once:!0})};let y=0;const w="data-ionic-skip-scroll-assist",V=(e,t,s,r,n,o,a,c=!1)=>{const i=o&&(void 0===a||a.mode===R.a.None),S=function(){var u=(0,g.Z)(function*(){t.hasAttribute(w)?t.removeAttribute(w):J(e,t,s,r,n,i,c)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},p=e=>{document.activeElement!==e&&(e.setAttribute(w,"true"),e.focus())},J=function(){var e=(0,g.Z)(function*(t,s,r,n,o,a,c=!1){if(!r&&!n)return;const i=((e,t,s)=>{var r;return((e,t,s,r)=>{const n=e.top,o=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,r-s)-50-o,v=i-n,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,n-a),I=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,I)),scrollPadding:s,inputSafeY:4-(n-i)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(t,r||n,o);if(r&&Math.abs(i.scrollAmount)<4)return p(s),void(a&&null!==r&&(T(r,y),N(s,r,()=>y=0)));if(b(t,s,!0,i.inputSafeY,c),p(s),(0,m.r)(()=>t.click()),a&&r&&(y=i.scrollPadding,T(r,y)),typeof window<"u"){let S;const u=function(){var l=(0,g.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,M.c)(r,0,i.scrollAmount,i.scrollDuration)),b(t,s,!1,i.inputSafeY),p(s),a&&N(s,r,()=>y=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(r){const l=yield(0,M.g)(r);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,r,n,o,a,c){return e.apply(this,arguments)}}(),X=function(){var e=(0,g.Z)(function*(t,s){const r=document,n="ios"===s,o="android"===s,a=t.getNumber("keyboardHeight",290),c=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",n),S=t.getBoolean("inputBlurring",n),u=t.getBoolean("scrollPadding",!0),v=Array.from(r.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield R.K.getResizeMode(),I=function(){var f=(0,g.Z)(function*(d){yield new Promise(A=>(0,m.c)(d,A));const B=d.shadowRoot||d,D=B.querySelector("input")||B.querySelector("textarea"),L=(0,M.f)(d),j=L?null:d.closest("ion-footer");if(D){if(L&&i&&!l.has(d)){const A=((e,t,s)=>{if(!s||!t)return()=>{};const r=c=>{(e=>e===e.getRootNode().activeElement)(t)&&b(e,t,c)},n=()=>b(e,t,!1),o=()=>r(!0),a=()=>r(!1);return(0,m.a)(s,"ionScrollStart",o),(0,m.a)(s,"ionScrollEnd",a),t.addEventListener("blur",n),()=>{(0,m.b)(s,"ionScrollStart",o),(0,m.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",n)}})(d,D,L);l.set(d,A)}if("date"!==D.type&&"datetime-local"!==D.type&&(L||j)&&c&&!_.has(d)){const A=V(d,D,L,j,a,u,W,o);_.set(d,A)}}});return function(B){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const c=s.activeElement;if(!c||c.matches(C))return;const i=a.target;i!==c&&(i.matches(C)||i.closest(C)||(e=!1,setTimeout(()=>{e||c.blur()},50)))},!1)})();for(const f of v)I(f);r.addEventListener("ionInputDidLoad",f=>{I(f.detail)}),r.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);