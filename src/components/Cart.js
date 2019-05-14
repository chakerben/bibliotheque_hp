import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Cart  = ({ books, total, onCheckoutClicked }) => {
  const hasBooks = books.length > 0
  const nodes = hasBooks ? (
    books.map(book =>
      <Book
        title={book.title}
        price={book.price}
        key={book.isbn}
      />
    )
  ) : (
    <em>S'il vous plaît ajouter des produits au panier.</em>
  )

  return (
    <div>
      <h3>Votre Carte</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasBooks ? '' : 'disabled'}>
        Valider
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
