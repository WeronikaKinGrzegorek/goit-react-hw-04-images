import React from 'react';

import css from './modal.module.css';

const Modal = ({ largeImageUrl, onClose }) => {
  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>
        <img src={largeImageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
