import React, { Component } from 'react';
import Searchbar from './components/Searchbar';

import ImageGallery from './components/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </>
    );
  }
}
