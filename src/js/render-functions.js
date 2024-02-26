import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

const imagesList = document.querySelector('.images-list');

export function renderImages(images) {
  const galleryContent = images
    .map(
      img => `<li class="gallery-item">
    <a class="gallery-link" href="${img.pageURL}">
    <img
      class="gallery-image"
      src="${img.previewURL}"
      // data-source="${img.largeURL}"
      alt="${img.tags}"
    />
  </a>
</li>`
    )
    .join('');
  imagesList.insertAdjacentHTML('beforeend', galleryContent);
  let lightbox = new SimpleLightbox('.images-list li', {
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
  });
}
