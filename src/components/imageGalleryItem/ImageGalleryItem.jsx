import React, { Component } from 'react';

import css from './imageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;
    return (
      <li
        className={css.imageGalleryItem}
        onClick={() => onClick(image.largeImageURL)}
      >
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
