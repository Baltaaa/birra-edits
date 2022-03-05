import React from 'react'
import shoppingCart from './icons/ShoppingCart';


const CartWidget = ({onClick}) => {

  return (
    <button onClick={onClick} className='w-max h-full  p-1 flex self-center rounded-full hover:opacity-40 transition duration-300 ease-linear'>{shoppingCart()}</button>
  )
}

export default CartWidget;