const initialState = {
    books: [],
  }

  export const addToCart = (state = initialState.books, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [ ...state, action.book ]
      default:
        return state
    }
  }
   
  export const getPriceById = (isbn) => {
    initialState.books.map((book) => {
        if(book.isbn === isbn) {
            return book.price
        }
        return null
    })
      
  }
  export const getQuantityById = (isbn) => {
    initialState.books.map((book) => {
        if(book.isbn === isbn) {
            return book.quantity
        }
        return 1
    })
      
  }
   
  export const getCartBooks = () => initialState.books
  