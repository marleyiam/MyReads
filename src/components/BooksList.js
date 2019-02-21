import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import hash from 'object-hash';

export default class BooksList extends Component {

    render () {
        return (
            <ol className="books-grid">
                {
                    this.props.books.map(book => {
                        return (
                            <li key={hash(book)}>
                                <Book 
                                    book={book} 
                                    moveShelfsBook={this.props.moveShelfsBook}
                                />
                            </li>
                        )
                    })   
                }
            </ol>
        )
    }
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    moveShelfsBook: PropTypes.func.isRequired
};