import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api.js';
import { 
  createImageCards, 
  clearGallery, 
  showLoader, 
  hideLoader, 
  initializeLightbox 
} from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadingIndicator = document.querySelector('#loading-indicator');

initializeLightbox();

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

  clearGallery(gallery);
showLoader(loadingIndicator);
setTimeout(() => hideLoader(loadingIndicator), 3000);
  
  fetchImages(query)
    .then(images => {
      hideLoader(loadingIndicator);

      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createImageCards(images, gallery);
    })
    .catch(error => {
      hideLoader(loadingIndicator);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong! Please try again later.',
      });
      console.error('Error fetching images:', error);
    });
}
