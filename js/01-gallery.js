import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const listOfImages = createGallery(galleryItems);

function createGallery (galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
    </div>`;
  })
  
    .join('');
}

gallery.insertAdjacentHTML("afterbegin", listOfImages);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG" ) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
}

gallery.addEventListener('click', onGalleryClick);
