import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ItemCount from './ItemCount'
import { motion } from 'framer-motion'


const ItemDetail = ({ prod }) => {

  const [count, setcount] = useState(null)



  // cartContext
  const { addToCart, isInCart } = useCartContext()

  const onAdd = (count) => {
    setcount(count)
    addToCart({ ...prod, quantity: count })
  }


  const styleImg = { maxHeight: '30rem', pointerEvents: 'none' }

  // opacity: [0, 0, 0.7, 1]

  return (

    <motion.section animate={{ display: ['none', 'flex'] }} transition={{ duration: 3 }} className='flex-col overflow-y-auto md:overflow-y-hidden h-auto md:h-[80vh]' style={{ height: '' }}>
      <div className='md:h-max h-1/6'>
        <p className='text-xl text-orange-300 text-center w-screen'>{prod.name}</p>
      </div>
      <div className='flex flex-col md:flex-row h-max'>
        <div className='basis-2/3	flex flex-col items-start md:items-center'>
          <img className='md:w-auto w-3/5 flex ' style={styleImg} src={prod.img} alt={prod.name}></img>
        </div>
        <div className='flex flex-col justify-evenly m-2 basis-4/5 md:basis-1/4'>
          <p className='text-gray-400'>{prod.description}</p>
          <motion.p className='text-orange-300 text-xl p-5 py-6 md:relative' animate={{ color: ['#252520', '#252520', '#ffff'] }} transition={{ duration: 3 }}  >
          € {prod.price}
          </motion.p>
          {
            isInCart(prod.id) ?
              <div className='w-max h-min flex flex-col self-center justify-evenly'>
                <motion.span
                  className='w-max h-max self-center'
                  transition={{ yoyo: Infinity, duration: 1 }}
                  animate={{
                    y:
                      ['2%', '5%', '10%', '15%', '20%', '25%']
                  }}
                ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg></motion.span>

                <div
                  className='flex flex-col gap-2'
                >
                  <NavLink to='/cart'
                  >
                    <motion.button
                      whileHover={{ color: '#FDBA74' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='text-slate-300 w-max h-max' >Finish buying</motion.button>
                  </NavLink>
                </div>
                <motion.span
                  className='w-max h-max self-center'
                  transition={{ yoyo: Infinity, duration: 1, delay: 1 }}
                  animate={{
                    y:
                      ['2%', '5%', '10%', '15%', '20%', '25%']
                  }}
                ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg></motion.span>
                  
                <div className='mt-10' >
                  <Link to='/' >
                    <motion.h3
                      whileHover={{ color: '#FDBA74' }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      className='text-slate-300 opacity-50' >Or continue shopping</motion.h3>
                  </Link>
                </div>
              </div>
              :
              <motion.div className='m-4 w-4/6 self-center' animate={{ opacity: [0, 0, 0.7, 1] }} transition={{ duration: 3 }} style={{ opacity: 0 }} >
                <ItemCount key={prod.id} initial={1} stock={prod.stock} onAdd={onAdd} count={count} modify={setcount} />
              </motion.div>
          }
        </div>
      </div>
    </motion.section>

  )
}

export default ItemDetail