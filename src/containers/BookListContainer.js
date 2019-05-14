import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { booksFetchData } from '../actions/books';
import Api from '../Api';

class BookList extends Component {
    componentDidMount() {
        this.props.fetchData(Api)
    }
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Il y a eu une erreur</p>;
        }

        if (this.props.isLoading) {
            return <p>Chargement...</p>;
        }

        return (
            <div className="row">
                    {this.props.books.map((book) => (
                        <Book
                        book = {book}
                        />
                    ))}
            </div>
        );
    }
}

// Get state data from store to props
const mapStateToProps = (state) => {
    return {
        books: state.books,
        hasErrored: state.booksHasErrored,
        isLoading: state.booksIsLoading,
        id: state.id,
        quantity : state.quantity
    };
}

//  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(booksFetchData(url)),
    };
}

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
