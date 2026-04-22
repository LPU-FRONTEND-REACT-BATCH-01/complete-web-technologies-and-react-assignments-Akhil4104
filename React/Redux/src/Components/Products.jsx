import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../RTK/cartSlice'

const Products = () => {
    const cartItem = useSelector((state) => state.cart.products)
    let product1 = {
        id: 1,
        name: "Laptop",
        price:30000
    }
    const dispatch = useDispatch()
  return (
      <div>
          <p>Cart Items: {cartItem.length}</p>
          <button onClick={() => dispatch(addToCart(product1))}>Add to Cart</button>
      </div>
  )
}

export default Products
