import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfsList from './components/ShelfsList';
import Search from './components/Search';
import {Route} from 'react-router-dom'
class BooksApp extends Component {

    state = {
        shelfs: [],
        books: []
    }

    setOfBookTitles;

    updateBooks = () => {
        BooksAPI
            .getAll()
            .then(books => {
                const shelfs = [...new Set(books.map(book => book.shelf))];
                this.setOfBookTitles = new Set(books.map(book => book.title));
                this.setState({shelfs: shelfs, books: books});
            });
    }

    componentDidMount() {
        this.updateBooks();
    }

    moveShelfsBook = (bookToMove, newShelf) => {
        BooksAPI
            .update(bookToMove, newShelf)
            .then(shelvesAndRespectiveBookIds => {
                this.updateBooks();
            });
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