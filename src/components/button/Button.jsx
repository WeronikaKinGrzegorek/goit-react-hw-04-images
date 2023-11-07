import React from 'react';

import css from './button.module.css';

const Button = ({ onClick, hasMore }) => {
  return (
    hasMore && (
      <button className={css.loadMoreButton} onClick={onClick}>
        Load more
      </button>
    )
  );
};

export default Button;
