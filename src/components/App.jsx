import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Modal from './modal/Modal';
import Loader from './loader/Loader';

import css from './app.module.css';

const baseURL = 'https://pixabay.com/api/';
export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [largeImageUrl, setLargeImageUrl] = useState(null);

  const getImages = async (query, page) => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${baseURL}`, {
        params: {
          q: query,
          page: page,
          key: '39280445-58c32c87f381aecf2e93abbca',
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      setImages(prevImages => [...prevImages, ...response.data.hits]);
      setIsLoading(false);
      setHasMore(response.data.hits.length > 0);
    } catch (error) {
      setIsLoading(false);
      setError('Error fetching images');
    }
  };

  const handleSubmit = inputValue => {
    setQuery(inputValue);
    setCurrentPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const openModal = largeImageUrl => {
    setLargeImageUrl(largeImageUrl);
  };

  const closeModal = () => {
    setLargeImageUrl(null);
  };

  useEffect(() => {
    getImages('cat', 1);
  }, []);

  useEffect(() => {
    if (query) {
      getImages(query, currentPage);
    }
  }, [query, currentPage]);

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      <Button onClick={loadMoreImages} hasMore={hasMore} />
      {largeImageUrl && (
        <Modal largeImageUrl={largeImageUrl} onClose={closeModal} />
      )}
    </div>
  );
};
