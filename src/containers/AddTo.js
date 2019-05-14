import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart';

const AddToCartForm = (book) => {
  let input
  let bookCart
  return (
    <div>
        <form
            onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            bookCart =  Object.assign({}, book, {quantity:input.value})
            addToCart(bookCart)
            input.value = ''
            }}
        >
            Quantité <input ref={node => (input = node)} type="number"/>
        <button className="btn btn-primary" type="submit">Ajouter au panier</button>
        </form>
    </div>
  )
}

export default connect()(AddToCartForm)

