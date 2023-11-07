import React, { Component } from 'react';

import css from './modal.module.css';

class Modal extends Component {
  render() {
    const { largeImageUrl, onClose } = this.props;
    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={largeImageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
