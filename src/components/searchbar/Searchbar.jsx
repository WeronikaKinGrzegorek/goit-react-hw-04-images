import React, { useState } from 'react';

import css from './searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchForm_button}>
          <span className={css.searchForm_button_label}>Search</span>
        </button>

        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Searchbar;
