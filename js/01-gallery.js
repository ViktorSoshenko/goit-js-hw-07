import { galleryItems } from "./gallery-items.js";

// Change code below this line

const boxGalery = document.querySelector(".gallery");
const marcupGalery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class = gallery__item >
    <a class = gallery__link href = '${original}'>
      <img class = gallery__image src = '${preview}' 
      data-source='${original}' alt = '${description}'/>
    </a>
</li>`
  )
  .join("");

boxGalery.insertAdjacentHTML("beforeend", marcupGalery);

boxGalery.addEventListener("click", selectImg);

function selectImg(event) {
  event.preventDefault();
  const imageOriginal = event.target.classList.contains("gallery__image");
  if (!imageOriginal) {
    return;
  }
  event.target.setAttribute("src", `${event.target.dataset.source}`);

  const newImg = event.target.getAttribute("src");
  const instance = basicLightbox.create(`<img src=${newImg}>`);
  instance.show();

  boxGalery.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(e) {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
