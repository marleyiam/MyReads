import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';
import * as BooksAPI from '../BooksAPI';
import BooksList from './BooksList';

export default class Search extends Component {

  state = {
    booksFromSearch : []
  }

  mapBooksByTitle = (books) => {
    let map = {};
    books.forEach((book, index, array) => {
      map[book.title] = book;
    }); 
    return map;
  }

  syncronizeShelfBooks = (mappedBooksFromProps, mappedBooksFromService) => {

    const filteredAndUpdatedBooks = [];

    for (let [title, book] of Object.entries(mappedBooksFromProps)) {
      mappedBooksFromService[title] &&
      (mappedBooksFromService[title].shelf = book.shelf)
    }

    for (let [title, book] of Object.entries(mappedBooksFromService)) {
      filteredAndUpdatedBooks.push(book)
    }

    return [...new Set(filteredAndUpdatedBooks)];
  }

  handleSearch = (query) => {

    BooksAPI.search(query).then(books => {

      if (books === undefined || books.items && books.items.length === 0) return;

      let mappedBooksFromProps = this.mapBooksByTitle(this.props.books);
      let mappedBooksFromService = this.mapBooksByTitle(books);

      let booksInSync = this.syncronizeShelfBooks(
        mappedBooksFromProps,
        mappedBooksFromService
      );

      this.setState({
          booksFromSearch: booksInSync
      });
    })
  }

  navigateToIndex = () => {
    this.props.route.history.push("/");
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" 
            onClick={() => this.navigateToIndex()}
          >Close</button>
          <div className="search-books-input-wrapper">
            <DebounceInput
              placeholder="Search by title or author"
              minLength={this.props.searchTrigger}
              debounceTimeout={this.props.debounceTime}
              onChange={event => this.handleSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList 
            books={this.state.booksFromSearch} 
            moveShelfsBook={this.props.moveShelfsBook}
          />
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  moveShelfsBook: PropTypes.func.isRequired,
  searchTrigger: PropTypes.number.isRequired,
  debounceTime: PropTypes.number.isRequired,
  route: PropTypes.object.isRequired
};