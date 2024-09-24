export function fetchImages(query) {
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
