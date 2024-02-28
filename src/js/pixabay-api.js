import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderImages } from './render-functions';

const BASE_URL = 'https://pixabay.com/api/';
const AUTH_KEY = '42495238-f221500a84206b905dda8310d';
let link;
let images;

export function requestImages(query) {
  link = `${BASE_URL}?key=${AUTH_KEY}&q=${query}`;
  getImages().then(data => {
    if (data.total == 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        theme: 'dark',
        position: 'topRight',
        maxWidth: '400px',
      });
    }
    images = data.hits.slice(0, 9);

    renderImages(images);
    const loader = document.querySelector('.loader');
    loader.remove();
  });
}

function getImages() {
  return fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .catch(error => {
      alert('Error');
    });
}
