import React from 'react'
import shoppingCart from './icons/ShoppingCart';
import { motion } from 'framer-motion';
import { useCartContext } from '../context/cartContext';


const CartWidget = ({onClick}) => {

  const { totalItem } = useCartContext()

  return (
    <div className='flex overflow-y-hidden' >
    <p className='grid place-content-center w-5 text-xl font-extrabold h-13'>{ totalItem() }</p>
    <motion.button  whileHover={{ scale: 1.1 }} transition={{duration: 0.3}} onClick={onClick} className='w-max h-full  p-1 flex self-center rounded-full'>{shoppingCart('black', '3em')}</motion.button>
    </div>
  )
}

export default CartWidget;