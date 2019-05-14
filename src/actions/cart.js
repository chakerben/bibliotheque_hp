  export const checkout = products => (dispatch, getState) => {  
    dispatch({
      type: 'CHECKOUT_REQUEST'
    })

  }
  export const addToCart = (book) => {
    return{
        type: 'ADD_TO_CART',
        book
    };
}