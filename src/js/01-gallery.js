import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li>
        <a href="${original}">
          <img src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
  })
  .join('');

galleryList.innerHTML = galleryMarkup;
const lightbox = new SimpleLightbox('.gallery a');

console.log(galleryItems);
