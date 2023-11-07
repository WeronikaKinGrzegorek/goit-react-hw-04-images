import React, { Component } from 'react';

import css from './button.module.css';

class Button extends Component {
  render() {
    const { onClick, hasMore } = this.props;
    return (
      hasMore && (
        <button className={css.loadMoreButton} onClick={onClick}>
          Load more
        </button>
      )
    );
  }
}

export default Button;
