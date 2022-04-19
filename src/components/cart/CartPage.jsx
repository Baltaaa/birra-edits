import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import CartCheckout from './CartCheckout'




const CartPage = () => {

  const { cartList, totalItem, clearItem, clearCart } = useCartContext()


  if (cartList.length === 0) {
    return (

      <section className='h-[80vh] grid place-content-center justify-around gap-5'>
        <h3 className='text-white'>Cart empty</h3>
        <NavLink to='/'><motion.button
          transition={{ duration: 3, ease: 'easeInOut' }}
          whileHover={{ color: 'orange' }}
          className='text-white font-bold text-lg'>Show products</motion.button></NavLink>
      </section>
    )
  } else {
    return (
      < >

        <section className='overflow-y-hidden flex flex-col lg:flex-row' >
          <ul className='h-max w-3/6 items-center flex flex-col divide-y-2 divide-black'
            style={{ direction: 'rtl' }}
          >
            {cartList.map(item =>

              <li className='h-max flex' key={item.id}>
                <div className='self-center'>
                  <motion.button onClick={() => clearItem(item.id)} type="button" className="lg:font-xs text-orange-200 transition duration-200 ease-linear hover:-inset-y-2 hover:text-red-600">
                    Remove
                  </motion.button>
                </div>
                <div className='w-[5rem] self-center text-orange-200' >{totalItem()}</div>
                <div className='text-xs w-[5rem] self-center text-orange-200'>€ {item.price}</div>
                <div className='flex flex-row-reverse text-zinc-100 gap-2 w-max h-max pointer-events-none'><img alt={item.name} src={item.img} className='w-[6rem] md:min-w-[50%]' /><b className='md:text-sm text-xs flex items-center text-orange-400'>{item.name}</b></div>
              </li>
            )}
          </ul>
          <motion.div
            className='flex w-max bg-opacity-60 justify-end h-[100vh]' >
            <button onClick={clearCart} className='w-max self-center items-center h-max'><div  >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="white" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div></button>
          </motion.div>
          <CartCheckout />
        </section>
      </>

    )
  }
}

export default CartPage;