/* empty css                      */import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();function m(r){const s=`https://pixabay.com/api/?key=46054500-d9995bae73a62b965b4fbf26c&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>e.json()).then(e=>e.hits).catch(e=>(console.error("Error:",e),[]))}let f;function p(){f=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){f&&f.refresh()}function y(r,n){const s=r.map(e=>`
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
  `).join("");n.insertAdjacentHTML("beforeend",s),h()}function g(r){r.innerHTML=""}function b(r){r.classList.remove("hidden"),r.style.display="block"}function l(r){r.classList.add("hidden"),r.style.display="none"}const L=document.querySelector("#search-form"),u=document.querySelector(".gallery"),i=document.querySelector("#loading-indicator");p();L.addEventListener("submit",v);function v(r){r.preventDefault();const n=r.currentTarget.elements.searchQuery.value.trim();if(n===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"#fafafb",iconUrl:"/src/public/favicon.svg",icon:"icon-Not",color:"#fafafb",backgroundColor:"#ef4040",messageColor:"#fafafb",progressBar:!0,progressBarColor:"#B51B1B",iconColor:"#fafafb"});return}g(u),b(i),setTimeout(()=>l(i),3e3),m(n).then(s=>{if(l(i),s.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(s,u)}).catch(s=>{l(i),c.error({title:"Error",message:"Something went wrong! Please try again later."}),console.error("Error fetching images:",s)})}
//# sourceMappingURL=index.js.map
