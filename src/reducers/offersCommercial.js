// Reducers for error, loading and data fetch

export const offersHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'OFFERS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export const offersIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'OFFERS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export const offers = (state = [], action) => {
    switch (action.type) {
        case 'OFFERS_FETCH_DATA_SUCCESS':
            return action.offers;

        default:
            return state;
    }
}