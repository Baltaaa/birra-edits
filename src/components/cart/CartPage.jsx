import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


const CartPage = () => {

  const { cartList, totalCart, totalItem, clearItem, clearCart } = useCartContext()


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

        <section style={{ direction: 'rtl', height: '80vh' }} className='text-white gap-6 flex flex-col-reverse flex-wrap justify-center items-center overflow-x-auto w-3/5 ' >

          {cartList.map(item =>
            <li className='list-none overflow-y-hidden w-max h-max flex flex-row mb-1' >
              <div className='overflow-y-hidden px-3'>
                <div className='text-orange-300 '>{item.name}</div>
                {/* <div className='max-w-xl'> */}
                <img alt={item.name} src={item.img} className='w-[7.5rem] pointer-events-none' />
                {/* </div> */}
              </div>
              <div className='text-white justify-between flex flex-col'>
                <div className='self-end'>
                  {item.pack}
                </div>


                <div className='text-zinc-200 '>
                  € {item.price}
                </div>
              </div>
            </li>
          )}
        </section>
        <div className='flex justify-between absolute right-32 top-64 items-center h-max w-max'>
          <p className='text-white text-xl' >Total price: €  {totalCart()}</p>
        </div>
        <NavLink to='/' className='h-max w-max absolute right-44 bottom-40' >
          <motion.button
            whileHover={{ backgroundColor: 'orange' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            className=' bg-slate-300 rounded-xl p-2'>
            <p className='text-black'>Payment</p>
          </motion.button>
        </NavLink>

        <motion.aside
          whileDrag={{ transformX: -100 }}
          className='w-max flex w-full bg-opacity-60  justify-center' style={{ zIndex: 1 }} >
          <button onClick={clearCart} className=' self-center items-center w-full h-max grid place-content-center'><div  >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div></button>
        </motion.aside>
      </>

    )
  }
}

export default CartPage;