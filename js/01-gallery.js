import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const listOfImages = createGallery(galleryItems);

function createGallery (galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}" /></div>`;
  })
  
    .join('');
}

gallery.insertAdjacentHTML("afterbegin", listOfImages);

function onGalleryClick(event) {
  if (event.target.nodeName !== "IMG" ) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.src}" width="800" height="600">
`)

instance.show()
}

gallery.addEventListener('click', onGalleryClick);
