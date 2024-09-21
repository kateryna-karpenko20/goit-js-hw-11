// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadingIndicator = document.querySelector('#loading-indicator');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

if (query === '') {
  iziToast.error({
    title: 'Error',
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: 'topRight',
    titleColor: '#fafafb',
   iconUrl: '/src/public/favicon.svg',
      icon: 'icon-Not',
    color: '#fafafb',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    progressBar: true,
    progressBarColor: '#B51B1B',
    iconColor: '#fafafb',
  });
  return;
}

  clearGallery();
  showLoader();

  fetchImages(query)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createImageCards(images);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong! Please try again later.',
      });
      console.error('Error fetching images:', error);
    });
}

function fetchImages(query) {
  const apiKey = '46054500-d9995bae73a62b965b4fbf26c';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
}

function clearGallery() {
  gallery.innerHTML = ''; 
}

function createImageCards(images) {
  const markup = images.map(image => `
    <li class="gallery-item">
      <div class="photo-card">
        <a href="${image.largeImageURL}" class="link">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b class="name-info">Likes</b> ${image.likes}</p>
          <p class="info-item"><b class="name-info">Views</b> ${image.views}</p>
          <p class="info-item"><b class="name-info">Comments</b> ${image.comments}</p>
          <p class="info-item"><b class="name-info">Downloads</b> ${image.downloads}</p>
        </div>
      </div>
    </li>
  `).join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function showLoader() {
  loadingIndicator.classList.remove('hidden');
}

function hideLoader() {
  loadingIndicator.classList.add('hidden');
}
