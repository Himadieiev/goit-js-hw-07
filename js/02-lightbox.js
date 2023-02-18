import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const listOfImages = createGallery(galleryItems);

function createGallery (galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`;
  })
    
    .join('');
}

gallery.insertAdjacentHTML("afterbegin", listOfImages);

const lightbox = new SimpleLightbox(".gallery a",
{ captions: true, captionsData: "alt", captionDelay: 250, });