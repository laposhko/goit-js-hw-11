import{S as f}from"./assets/vendor-da53b1cb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelector(".images-list");function m(r){const o=r.map(n=>`<li class="gallery-item">
    <a class="gallery-link" href="${n.pageURL}">
    <img
      class="gallery-image"
      src="${n.previewURL}"
      // data-source="${n.largeURL}"
      alt="${n.tags}"
    />
  </a>
</li>`).join("");d.insertAdjacentHTML("beforeend",o),new f(".images-list li",{overlayOpacity:.8,captionsData:"alt",captionDelay:250})}const y="https://pixabay.com/api/",p="42495238-f221500a84206b905dda8310d";let i,l;function g(r){i=`${y}?key=${p}&q=${r}`,console.log(i),h().then(o=>{console.log(o),o.total==0&&document.querySelector(".content").insertAdjacentHTML("beforeend","<p>Sorry, there are no images matching your search query. Please try again!</p>"),l=o.hits.slice(0,9),m(l)})}function h(){return fetch(i).then(r=>{if(!r.ok)throw new Error("Image error!");return r.json()}).catch(r=>{alert("Error")})}document.querySelector(".submit-button");const u=document.querySelector(".search-form"),L=u.querySelector("input");document.querySelector(".content");let a;u.addEventListener("submit",r=>{r.preventDefault(),a=L.value,g(a)});
//# sourceMappingURL=commonHelpers.js.map
