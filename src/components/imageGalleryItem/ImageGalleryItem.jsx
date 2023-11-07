import React from 'react';

import css from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={css.imageGalleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
