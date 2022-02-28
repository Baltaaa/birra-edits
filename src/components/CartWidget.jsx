import React from 'react'
import ShoppingCart from './icons/ShoppingCart';


const CartWidget = () => {

  return (
    <div className='w-auto h-full bg-white p-1 flex self-center rounded-full hover:bg-orange-300 hover:opacity-10 transition duration-250'>
    <button><ShoppingCart /></button>
    </div>
  )
}

export default CartWidget;