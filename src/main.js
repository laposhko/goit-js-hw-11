import { requestImages } from './js/pixabay-api';

const form = document.querySelector('.search-form');
const input = form.querySelector('input');
const content = document.querySelector('.content');
let query;

form.addEventListener('submit', event => {
  event.preventDefault();
  query = input.value;
  content.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');

  requestImages(query);

  input.value = '';
});
