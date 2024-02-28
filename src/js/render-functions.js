const imagesList = document.querySelector('.images-list');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

export function renderImages(images) {
  imagesList.innerHTML = '';
  const galleryContent = images
    .map(
      img => `<li class="gallery-item">
    <a class="gallery-link" href="${img.webformatURL}">
    <img
      class="gallery-image"
      src="${img.previewURL}"
      // data-source="${img.largeImageURL}"
      alt="${img.tags}"
    />
      <ul class='statistic'>
      <li>Likes:<br>${img.likes}</li>
      <li>Views:<br>${img.views}</li>
      <li>Comments:<br>${img.comments}</li>
      <li>Downloads:<br>${img.downloads}</li>
    </ul>
  </a>

</li>`
    )
    .join('');
  imagesList.insertAdjacentHTML('beforeend', galleryContent);

  let lightbox = new SimpleLightbox('.images-list a', {
    overlayOpacity: 0.8,
  });
}
