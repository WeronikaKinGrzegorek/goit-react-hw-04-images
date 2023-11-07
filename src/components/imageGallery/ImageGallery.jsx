import React, { Component } from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

import css from './imageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className={css.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onImageClick}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
