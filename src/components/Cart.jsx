import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../App.css"

const Cart = ({state, dispatch}) => {
  const {cart} = state
  const [total, setTotal] = useState(0)

  const changeQty = (id, quantity) => {
    dispatch({
      type: 'CHANGE_QTY',
      payload: { id, quantity}
    })
  }

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.qty, 0))
  }, [cart])

  return (
    <div className='cart-container'>
      <h3>Total $ {total} </h3>
      {
        cart.length === 0 ? 'Cart is Empty' : <>
          {
            cart.map(singleCart => {
              const { id, price, thumbnail, title, qty} = singleCart

              return <div key={id} className="cart-single-container">
                <img src={thumbnail} alt="" />
                <div>
                  <p> {title} </p>
                  <p> {price} </p>
                </div>
                <div className="qty">
                  <button onClick={() => changeQty(id, qty + 1)}>+</button>
                  {qty}
                  <button onClick={() => changeQty(id, qty - 1)}>-</button>
                </div>
              </div> 
            })
          }
        </>
      }
    </div>
  )
}

export default Cart
