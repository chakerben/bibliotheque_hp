import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions/cart'
import { getTotal, getBooksCart } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ books, total, checkout }) => (
  <Cart
    books={books}
    total={total}
    onCheckoutClicked={() => checkout(books)} />
)

CartContainer.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  books: getBooksCart(),
  total: getTotal(state.books),
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
