import{S as m,i as p}from"./assets/vendor-9e112560.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a=document.querySelector(".images-list");function y(o){a.innerHTML="";const s=o.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.webformatURL}">
    <img
      class="gallery-image"
      src="${t.previewURL}"
      // data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
      <ul class='statistic'>
      <li>Likes:<br>${t.likes}</li>
      <li>Views:<br>${t.views}</li>
      <li>Comments:<br>${t.comments}</li>
      <li>Downloads:<br>${t.downloads}</li>
    </ul>
  </a>

</li>`).join("");a.insertAdjacentHTML("beforeend",s),new m(".images-list a",{overlayOpacity:.8})}const g="https://pixabay.com/api/",h="42495238-f221500a84206b905dda8310d";let d,l;function L(o){d=`${g}?key=${h}&q=${o}`,b().then(s=>{s.total==0&&p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"400px"}),l=s.hits.slice(0,9),y(l),document.querySelector(".loader").remove()})}function b(){return fetch(d).then(o=>{if(!o.ok)throw new Error("Image error!");return o.json()}).catch(o=>{alert("Error")})}const f=document.querySelector(".search-form"),c=f.querySelector("input"),$=document.querySelector(".content");let u;f.addEventListener("submit",o=>{o.preventDefault(),u=c.value,$.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),L(u),c.value=""});
//# sourceMappingURL=commonHelpers.js.map
