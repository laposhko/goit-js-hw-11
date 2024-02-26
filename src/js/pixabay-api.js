import { renderImages } from './render-functions';

const BASE_URL = 'https://pixabay.com/api/';
const AUTH_KEY = '42495238-f221500a84206b905dda8310d';
let link;
let images;
export function requestImages(query) {
  link = `${BASE_URL}?key=${AUTH_KEY}&q=${query}`;
  console.log(link);
  getImages().then(data => {
    console.log(data);
    if (data.total == 0) {
      document
        .querySelector('.content')
        .insertAdjacentHTML(
          'beforeend',
          '<p>Sorry, there are no images matching your search query. Please try again!</p>'
        );
    }
    images = data.hits.slice(0, 9);
    renderImages(images);
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
