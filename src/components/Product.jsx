import React from 'react'
import "../App.css"

const Product = ({state, dispatch}) => {
    const {cart, products} = state

  return (
    <div className='product-container'>
      {
        products.map(pro => {
            const { id, price, thumbnail, title} = pro

            return <div className="pro-inner-container" key={id}>
                <img src={thumbnail} alt="" />
                <div className="flex">
                    <h4> {title} </h4>
                    <h4> {price} </h4>
                </div>
                <div className="btns">
                    {
                        cart.some(c => c.id === id) ? <button onClick={() => dispatch({ type: 'REMOVE_PRODUCT', payload: { id } })} className="red">Remove from Cart</button> : <button onClick={() => dispatch({ type: 'ADD_PRODUCT', payload: { id, price, title, thumbnail, qty: 1 } })} className="green">Add to Cart</button>
                    }
                </div>
            </div>
        })
      }
    </div>
  )
}

export default Product
