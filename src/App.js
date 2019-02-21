import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import ShelfsList from './components/ShelfsList';
import Search from './components/Search';
import {Route} from 'react-router-dom';

class BooksApp extends Component {

  state = {
    shelfs: [],
    books: []
  }

  updateBooks = async () => {
    let books = await BooksAPI.getAll()
    const shelfs = [...new Set(books.map(book => book.shelf))];
    this.setState({shelfs: shelfs, books: books});
  }

  componentDidMount() {
    this.updateBooks();
  }

  moveShelfsBook = async (bookToMove, newShelf) => {
    await BooksAPI.update(bookToMove, newShelf);

    this.updateBooks();
      
    /**
      TODO
      Já tinha tentando algo parecido, mas também não funcionou
      bookToMove.shelf = newShelf;
      this.setState(prevState => {
        books: prevState.books.filter(
          book => book.id === bookToMove.id).concat([bookToMove])
      }); 
    */
  }

  render() {

    return (
      <div className='app'>
        <Route
          exact
          path='/search'
          render={(route) => (
            <Search
              books={this.state.books}
              moveShelfsBook={this.moveShelfsBook}
              searchTrigger={3}
              debounceTime={500}
              route={route}
              location={route.location}
            />
            )
          }
        />
        <Route
            exact
            path='/'
            render={(route) => (
              <ShelfsList
                shelfs={this.state.shelfs}
                books={this.state.books}
                moveShelfsBook={this.moveShelfsBook}
                route={route}
                location={route.location}
                themeContext={this.props.themeContext}
              />
            )
          }
        />
        <div className="loading"></div>
      </div>
    )
  }
}

export default BooksApp