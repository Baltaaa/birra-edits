import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import CartCheckout from './CartCheckout'




const CartPage = () => {

  const { cartList, totalItem, clearItem } = useCartContext()


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

        <section className='overflow-y-hidden flex my-3' >
          <div style={{ direction: 'rtl', height: '75vh' }} className='border-r border-opacity-40 border-r-white text-white gap-6 flex-col flex justify-around items-center w-4/6'>
            <table className='table-fixed w-full overflow-y-auto my-10 '>
              <thead className=''>
                <tr className='text-orange-300'>
                  <th style={{ width: '15rem' }}></th>
                  <th style={{ width: '13rem' }} >Quantity</th>
                  <th style={{ width: '13rem' }} >Price</th>
                  <th style={{ width: '15rem' }} >Beer</th>
                </tr>
              </thead>

              {cartList.map(item =>

                <tbody key={item.id}>
                  <tr className='divide-y divide-orange-300 gap-2 divide-opacity-30'>
                    <td>
                      <motion.button onClick={() => clearItem(item.id)} type="button" className="font-xs text-slate-700 transition duration-200 ease-linear hover:-inset-y-2 hover:text-red-600">
                        Remove
                      </motion.button>
                    </td>
                    <td>{totalItem()}</td>
                    <td className='text-xs'>€ {item.price}</td>
                    <td className='flex flex-row-reverse text-zinc-100 gap-2'><img alt={item.name} src={item.img} className='w-[6rem] pointer-events-none min-w-[50%]' /><b className='text-sm flex items-center'>{item.name}</b></td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>

          <CartCheckout />
        </section>
      </>

    )
  }
}

export default CartPage;