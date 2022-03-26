import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
// import shoppingCart from '../icons/shoppingCart';


const ItemCount = ({ initial, stock, onAdd, count }) => {
  const [updateCount, setCount] = useState(initial);
  // const [countCart, setCountCart] = useState(null)

  const [check, setcheck] = useState(false)

  // const [click, setclick] = useState({})



  const clickMas = () => {
    if (updateCount >= stock) {
      alert('¡No tenemos mas stock!')
    } else {

      setCount(updateCount + 1);
    }

  }
  const clickMenos = () => {
    if (updateCount === 1) {
      console.warn('No puedes llevar menos de 1')
    } else {
      setCount(updateCount - 1)
    }
  }

  const addToCart = () => {
    // setCountCart(updateCount)
    onAdd(updateCount)
    setCount(updateCount)
    setcheck(true)
  }

  return (
    <>
      {check ?
        <div className='flex flex-col justify-center align-center h-max  m-2'>
          <div className='flex flex-col justify-evenly'>
            {check ?
              <span className='self-center mb-2'>
                <motion.svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </motion.svg>
              </span>
              :
              <></>
            }
            <div className='border-y border-opacity-50 border-zinc-200 h-auto  w-36 flex flex-row justify-between self-center content-evenly'>
              <b className='self-center text-orange-300 tracking-widest pr-3'>{updateCount} Added</b>
              <NavLink to='/cart' className='w-max h-max' >
                <motion.div transition={{ duration: 0.2 }} whileHover={{ opacity: 0.5 }} className='self-center py-1 overflow-y-hidden px-2'>
                  {/* {shoppingCart('white', '1.5em')} */}
                </motion.div>
              </NavLink>
            </div>
          </div>
        </div>
        :
        <div className='flex flex-row justify-center h-5/5 '>
          <button disabled={count===0} onClick={() => clickMenos()} className='hover:bg-slate-100 rounded-l-md font-extrabold border border-orange-400  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span className='w-full h-full grid place-content-center opacity-50 hover:opacity-90'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg></span></button>
          <div className='border-y border-opacity-50 border-zinc-200 bg-black w-36 flex flex-col flex-grow justify-center h-max content-evenly'>
            <button disabled={count===0} onClick={() => addToCart()} className='bg-black font-sans tracking-widest text-white w-max h-max py-1 self-center m-1 flex hover:text-orange-300 transition ease-in-out duration-300 flex-col gap-2'>ADD TO CART <p className='text-gray-50 text-xs mx-auto'>(Bottle: <b className='text-orange-300'>{updateCount}</b>)</p></button>
          </div>
          <button disabled={count===0} onClick={() => clickMas()} className='hover:bg-slate-100 rounded-r-md font-extrabold border border-lg border-orange-400  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span className='w-full h-full grid place-content-center opacity-50 hover:opacity-90'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg></span></button>
        </div>
      }
    </>
  )
}

export default ItemCount