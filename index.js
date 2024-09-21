/* empty css                      */import{S as u,i}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const d=document.querySelector("#search-form"),l=document.querySelector(".gallery"),f=document.querySelector("#loading-indicator");let m=new u(".gallery a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",p);function p(s){s.preventDefault();const t=s.currentTarget.elements.searchQuery.value.trim();if(t===""){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"#fafafb",iconUrl:"/src/public/favicon.svg",icon:"icon-Not",color:"#fafafb",backgroundColor:"#ef4040",messageColor:"#fafafb",progressBar:!0,progressBarColor:"#B51B1B",iconColor:"#fafafb"});return}g(),b(),h(t).then(e=>{if(c(),e.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e)}).catch(e=>{c(),i.error({title:"Error",message:"Something went wrong! Please try again later."}),console.error("Error fetching images:",e)})}function h(s){const e=`https://pixabay.com/api/?key=46054500-d9995bae73a62b965b4fbf26c&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(e).then(n=>n.json()).then(n=>n.hits).catch(n=>(console.error("Error:",n),[]))}function g(){l.innerHTML=""}function y(s){const t=s.map(e=>`
    <li class="gallery-item">
      <div class="photo-card">
        <a href="${e.largeImageURL}" class="link">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b class="name-info">Likes</b> ${e.likes}</p>
          <p class="info-item"><b class="name-info">Views</b> ${e.views}</p>
          <p class="info-item"><b class="name-info">Comments</b> ${e.comments}</p>
          <p class="info-item"><b class="name-info">Downloads</b> ${e.downloads}</p>
        </div>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",t),m.refresh()}function b(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}
//# sourceMappingURL=index.js.map
