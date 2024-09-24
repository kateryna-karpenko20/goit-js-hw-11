/* empty css                      */import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();function m(o){const n=`https://pixabay.com/api/?key=46054500-d9995bae73a62b965b4fbf26c&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>e.json()).then(e=>e.hits).catch(e=>(console.error("Error:",e),[]))}let l;function h(){l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function p(){l&&l.refresh()}function g(o,i){const n=o.map(e=>`
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
  `).join("");i.insertAdjacentHTML("beforeend",n),p()}function y(o){o.innerHTML=""}function b(o){o.classList.remove("hidden")}function f(o){o.classList.add("hidden")}const L=document.querySelector("#search-form"),u=document.querySelector(".gallery"),c=document.querySelector("#loading-indicator");h();L.addEventListener("submit",v);function v(o){o.preventDefault();const i=o.currentTarget.elements.searchQuery.value.trim();if(i===""){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"#fafafb",iconUrl:"/src/public/favicon.svg",icon:"icon-Not",color:"#fafafb",backgroundColor:"#ef4040",messageColor:"#fafafb",progressBar:!0,progressBarColor:"#B51B1B",iconColor:"#fafafb"});return}y(u),b(c),m(i).then(n=>{if(f(c),n.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(n,u)}).catch(n=>{f(c),a.error({title:"Error",message:"Something went wrong! Please try again later."}),console.error("Error fetching images:",n)})}
//# sourceMappingURL=index.js.map
