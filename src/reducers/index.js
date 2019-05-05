import { combineReducers } from 'redux';
import { books, booksHasErrored, booksIsLoading } from './books';

// Combine all reducers into root reducer
export default combineReducers({
    books,
    booksHasErrored,
    booksIsLoading
});