// Helper actions for error, loading and data fetch success

export const booksHasErrored = (bool) => {
    return {
        type: 'BOOKS_HAS_ERRORED',
        hasErrored: bool
    };
}

export const booksIsLoading = (bool) => {
    return {
        type: 'BOOKS_IS_LOADING',
        isLoading: bool
    };
}

export const booksFetchDataSuccess = (books) => {
    return {
        type: 'BOOKS_FETCH_DATA_SUCCESS',
        books
    };
}

// Driver action to fetch data

export const booksFetchData = (url) => {
    return (dispatch) => {
        dispatch(booksIsLoading(true));

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                dispatch(booksIsLoading(false));

                return res;
            })
            .then((res) => res.json())
            .then((books) => dispatch(booksFetchDataSuccess(books)))
            .catch(() => dispatch(booksHasErrored(true)));
    }
}   
