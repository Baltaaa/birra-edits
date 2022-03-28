import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import ItemCount from '../aboutProds/ItemCount'


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

        <section className='overflow-y-hidden flex' >
          <div style={{ direction: 'rtl', height: '75vh' }} className='border-r mt-3 border-opacity-40 border-r-white text-white gap-6 flex-col flex justify-around items-center w-4/6'>
            <table  className='table-fixed w-full overflow-y-auto my-10 '>
              <thead className='-mt-10'>
                <tr className='text-orange-300'>
                  <th style={{width:'15rem'}}></th>
                  <th style={{ width: '13rem' , height: '-1' }} >Quantity</th>
                  <th style={{ width: '14rem' , height: '-1' }} >Price</th>
                  <th style={{ width: '15rem'  }} >Beer</th>
                </tr>
              </thead>

              {cartList.map(item =>

                <tbody className=''>
                  <tr className=''>
                    <td>
                      <motion.button onClick={() => clearItem(item.id)} type="button" className="font-xs text-slate-700 transition duration-200 ease-linear hover:-inset-y-2 hover:text-red-600">
                        Remove
                      </motion.button>
                    </td>
                    <td>{totalItem()}</td>
                    <td>€ {item.price}</td>
                    <td className='flex flex-row-reverse text-zinc-100 gap-10'><img alt={item.name} src={item.img} className='w-[6rem] pointer-events-none min-w-[50%]' /><b className='text-sm flex items-center'>{item.name}</b></td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>

          <section style={{ height: '70vh' }} className='w-2/6 mx-5 flex items-center' >
            <form
              className="grid place-content-center h-max w-max self-end gap-20">
              <div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-1xl text-center font-bold mb-2"
                      for="inputNombre">
                      NAME
                    </label>
                    <input
                      className="h-10  name:text-center w-full focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                      id="inputNombre" name="name" type="text" placeholder="Write your name" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-center uppercase tracking-wide text-gray-700 text-1xl font-bold mb-2"
                      for="inputApellido">
                      PHONE
                    </label>
                    <input className="h-10  name:text-center w-full focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                      id="inputApellido" name="apellido" type="text" placeholder="Write your phone" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-center text-gray-700 text-1xl font-bold mb-2"
                      for="inputEmail">
                      EMAIL
                    </label>
                    <input
                      className="h-10  name:text-center w-full focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                      id="inputEmail" type="email" name="_replyto" placeholder="examplemail@yahoo.com.ar" />
                  </div>
                </div>
              </div>
              <aside className='flex justify-end'>
                <div className='flex gap-14 justify-around items-center h-max w-max'>

                  <NavLink to='/' className='h-max w-max ' >
                    <motion.button
                      whileHover={{ backgroundColor: 'orange' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      className=' bg-slate-300 rounded-xl p-2'>
                      <p className='text-black'>Checkout</p>
                    </motion.button>
                  </NavLink>
                  <div>
                    <p className='text-white text-lg' >Total price: €  <b>{totalCart()}</b></p>
                  </div>
                </div>

              </aside>
            </form>


            <motion.div
              className='absolute bottom-0 left-52 w-full bg-opacity-60 justify-center h-max' style={{ zIndex: 1 }} >
              <button onClick={clearCart} className='w-max self-center items-center h-max grid place-content-center'><div  >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="white" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div></button>
            </motion.div>

          </section>
        </section>
      </>

    )
  }
}

export default CartPage;