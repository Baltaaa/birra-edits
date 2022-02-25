import React from 'react'
import ShoppingCart from './icons/ShoppingCart';


const CartWidget = () => {

  return (
    <div className='w-auto grid place-content-center'>
    <button><ShoppingCart /></button>
    </div>
  )
}

export default CartWidget;