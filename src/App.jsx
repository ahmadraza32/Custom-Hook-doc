import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { cartReducer } from './reducers/cartProduct'
import Product from './components/Product'
import "./App.css"
import Cart from './components/Cart'

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [], products: []
  })

  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products')
    dispatch({
      type: 'ADD_PRODUCTS', payload: data.products
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className='container'>
        <Product state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </>
  )
}

export default App
