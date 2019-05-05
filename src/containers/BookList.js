import React, { Component } from 'react';
import { connect } from 'react-redux';
import { booksFetchData } from '../actions/books';
import Api from '../Api';
import ShowMoreText from 'react-show-more-text';


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
                        <div className="col-md-6" key={book.isbn} style={{marginBottom: 20}}>
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={book.cover} className="card-img-top" alt={book.title}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{book.title}</h5>
                                            <div className="card-text">
                                                <ShowMoreText
                                                        lines={3}
                                                        more='Lire plus'
                                                        less='Lire moins'
                                                        anchorClass=''
                                                        onClick={this.executeOnClick}
                                                >
                                                {book.synopsis}
                                            </ShowMoreText>
                                            </div>
                                            <span>Quantité</span><input name="quantity" type="number"/>
                                            <button onClick={this.addtocart} className="btn btn-primary">Ajouter au panier</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        isLoading: state.booksIsLoading
    };
}

// Get actions to handle store data
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(booksFetchData(url))
    };
}

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
