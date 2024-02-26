import { requestImages } from './js/pixabay-api';

const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('.search-form');
const input = form.querySelector('input');
const content = document.querySelector('.content');
let query;

form.addEventListener('submit', event => {
  event.preventDefault();
  query = input.value;
  requestImages(query);
});
