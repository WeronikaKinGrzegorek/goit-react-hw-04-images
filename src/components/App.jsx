import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Modal from './modal/Modal';
import Loader from './loader/Loader';

import css from './app.module.css';

const baseURL = 'https://pixabay.com/api/';
export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    query: '',
    hasMore: true,
    largeImageUrl: null,
  };

  getImages = async (query, page) => {
    this.setState({ isLoading: true });

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
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        isLoading: false,
        hasMore: response.data.hits.length > 0,
      }));
    } catch (error) {
      this.setState({ isLoading: false });
      console.error('Error fetching images:', error);
    }
  };

  handleSubmit = inputValue => {
    this.setState({ query: inputValue, page: 1, images: [] }, () => {
      this.getImages(inputValue, this.state.page);
    });
  };

  loadMoreImages = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage }, () => {
      this.getImages(this.state.query, nextPage);
    });
  };

  openModal = largeImageUrl => {
    this.setState({ largeImageUrl });
  };

  closeModal = () => {
    this.setState({ largeImageUrl: null });
  };

  componentDidMount() {
    this.getImages('cat', 1);
  }

  render() {
    const { images, isLoading, hasMore, largeImageUrl } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        <Button onClick={this.loadMoreImages} hasMore={hasMore} />
        {largeImageUrl && (
          <Modal largeImageUrl={largeImageUrl} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
