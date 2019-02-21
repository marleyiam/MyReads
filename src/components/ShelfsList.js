import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import Slider from './theme-switcher/Slider';

export default class ShelfsList extends Component {

    booksByShelf = (shelfName) => {
      return this
        .props
        .books
        .filter(book => book.shelf === shelfName);
    }

    navigateToSearch = () => {
      this
        .props
        .route
        .history
        .push("/search");
    }

    render() {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads<Slider 
                themeContext={this.props.themeContext}
              />
            </h1>
          </div>
          <div className="list-books-content">
            <div>
                {this
                  .props
                  .shelfs
                  .map(shelf => {
                    return <Shelf
                      key={shelf}
                      bookshelfTitle={shelf}
                      books={this.booksByShelf(shelf)}
                      moveShelfsBook={this.props.moveShelfsBook} 
                      />
                  })
                }
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => {this.navigateToSearch()}}
            >Add Book</button>
          </div>
        </div>
      )
    }
}

ShelfsList.propTypes = {
  shelfs: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  moveShelfsBook: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
  themeContext: PropTypes.object.isRequired
};