import React, { useState } from 'react'
import shoppingCart from '../icons/shoppingCart';
import { motion } from 'framer-motion';
import { useCartContext } from '../context/cartContext';


const CartWidget = ({ onClick }) => {

  const { totalItem, cartList } = useCartContext()

  return (
    <div className='flex overflow-y-hidden' >
      {
      cartList.length===0 ?
       <></>
       :
      <p className='grid place-content-center w-5 text-xl font-extrabold h-13'>{totalItem()}</p>
      }
      <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} onClick={onClick} className='w-max h-full md:px-4 p-1 flex self-center rounded-full'>
        <span>{shoppingCart('black', '3em')}</span>
      </motion.button>
    </div>
  )
}

export default CartWidget;