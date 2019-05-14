// Reducers for error, loading and data fetch

export const booksHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'BOOKS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export const booksIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'BOOKS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
    
export const books = (state = [], action) => {
    switch (action.type) {
        case 'BOOKS_FETCH_DATA_SUCCESS':
            return action.books;

        default:
            return state;
    }
}