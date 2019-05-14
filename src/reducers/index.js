import { combineReducers } from 'redux';
import { books, booksHasErrored, booksIsLoading } from './books';
import {getQuantityById, getCartBooks, getPriceById} from './cart';

// Combine all reducers into root reducer
export default combineReducers({
    books,
    booksHasErrored,
    booksIsLoading,
    getCartBooks
});
export const getBooksCart = () => getCartBooks()
export const getQuantity = (isbn) => getQuantityById(isbn)
const getPrice = (isbn) => getPriceById(isbn)

export const getTotal = state =>
getBooksCart()
    .reduce((total, isbn) =>
      total + getPrice(isbn) * getQuantity(isbn),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
getBooksCart(state.books).map(book => ({
    ...getPrice(book.id),
    quantity: getQuantity(book.id)
  }))
