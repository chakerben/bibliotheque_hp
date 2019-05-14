import React from 'react'
import PropTypes from 'prop-types'
import ShowMoreText from 'react-show-more-text'
import AddToCartForm from '../containers/AddTo'

const  executeOnClick = (isExpanded) => {
}

const Book = ({ book }) => (
    <div className="col-md-6" key={book.title} style={{marginBottom: 20}}>
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
                                onClick={executeOnClick}
                        >
                            {book.synopsis}
                        </ShowMoreText>
                    </div>
                    <span>{book.price} €</span>
                    <AddToCartForm book={book}/>
                </div>
            </div>
        </div>
    </div>
</div>
    )

Book.propTypes = {
  price: PropTypes.number,
  synopsis: PropTypes.array,
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default Book