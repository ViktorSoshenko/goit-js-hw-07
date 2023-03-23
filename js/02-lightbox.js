import { galleryItems } from "./gallery-items.js";
// Change code below this line
const boxGalery_2 = document.querySelector(".gallery");
const marcupGalery_2 = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");
boxGalery_2.insertAdjacentHTML("beforeend", marcupGalery_2);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  overlayOpacity: 0.9,
  closeText: "+",
  animationSlide: true,
  animationSpeed: 250,
});
