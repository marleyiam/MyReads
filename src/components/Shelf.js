import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksList from './BooksList';

export default class Shelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <BooksList
                        books={this.props.books}
                        moveShelfsBook={this.props.moveShelfsBook}
                    />
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    moveShelfsBook: PropTypes.func.isRequired
};