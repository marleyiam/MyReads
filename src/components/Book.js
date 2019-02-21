import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Book extends PureComponent {

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
              style={{
              width: 128,
              height: 193,
              backgroundImage: this.props.book.imageLinks && `url("${this.props.book.imageLinks.thumbnail}")`
            }}>
          </div>
          <div className="book-shelf-changer">
            <select
              defaultValue={this.props.book.shelf || 'none'}
              onChange={(event) => {
                this
                .props
                .moveShelfsBook(this.props.book, event.target.value)
              }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors !== undefined && this
            .props
            .book
            .authors
            .map(author => {
              return <span key={author}>{author}</span>
            })
          }
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveShelfsBook: PropTypes.func.isRequired
};