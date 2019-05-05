// Helper actions for error, loading and data fetch success

export const offersHasErrored = (bool) => {
    return {
        type: 'OFFERS_HAS_ERRORED',
        hasErrored: bool
    };
}

export const offersIsLoading = (bool) => {
    return {
        type: 'OFFERS_IS_LOADING',
        isLoading: bool
    };
}

export const offersFetchDataSuccess = (offers) => {
    return {
        type: 'OFFERS_FETCH_DATA_SUCCESS',
        offers
    };
}

// Driver action to fetch data

export const offersFetchData = (url) => {
    return (dispatch) => {
        dispatch(offersIsLoading(true));

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                dispatch(offersIsLoading(false));

                return res;
            })
            .then((res) => res.json())
            .then((offers) => dispatch(offersFetchDataSuccess(offers)))
            .catch(() => dispatch(offersHasErrored(true)));
    }
}   
