import React from 'react';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

import css from './imageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
