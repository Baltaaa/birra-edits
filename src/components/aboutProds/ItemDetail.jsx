import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ItemCount from './ItemCount'
import { motion } from 'framer-motion'


const ItemDetail = ({ prod }) => {

  const [count, setcount] = useState(null)



  // cartContext
  const { addToCart, isInCart } = useCartContext()

  const onAdd = (count) => {
    console.log(`Seleccionaste` + count + `productos`)
    setcount(count)
    addToCart({ ...prod, quantity: count })
  }


  const styleImg = { maxHeight: '30rem', pointerEvents: 'none' }

  // opacity: [0, 0, 0.7, 1]

  return (

    <motion.section animate={{ display: ['none', 'visible'] }} transition={{ duration: 3 }} className='flex-col' style={{ height: '80vh' }}>
      <div className='h-max '>
        <p className='text-xl text-orange-300 text-center w-screen'>{prod.name}</p>
      </div>
      <div className='flex flex-row h-max'>
        <div className='basis-2/3	flex flex-col items-center'>
          <img className='w-auto flex ' style={styleImg} src={prod.img} alt={prod.name}></img>
          {/* <b className='text-white text-left px-28'>{prod.package}</b> */}
        </div>
        <div className='flex flex-col justify-evenly basis-1/4'>
          <p className='text-white'>{prod.description}</p>
          <motion.p className='text-white' animate={{ color: ['#252520','#252520', '#ffff'] }} transition={{duration: 3}}  >€ {prod.price}</motion.p>
          {
            isInCart(prod.id) ?
              <div className='w-max h-min flex self-center justify-evenly'>
                <motion.span
                  className='w-10 self-center'
                  transition={{ yoyo: Infinity, duration: 1 }}
                  animate={{
                    x:
                      ['2%','5%', '10%', '15%', '20%', '25%']
                  }}
                ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 19" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg></motion.span>

                <NavLink to='/cart'
                >
                  <motion.button
                    whileHover={{ color: 'orange' }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className='text-slate-300 w-max h-max' >Finish buying</motion.button>
                </NavLink>

                <motion.span
                  className='w-10 self-center mr-0'
                  transition={{ yoyo: Infinity, duration: 1 }}
                  animate={{
                    x:
                      ['20%', '25%', '30%', '35%', '40%', '45%']


                  }}
                ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 -2 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg></motion.span>
              </div>
              :
              <motion.div animate={{ opacity: [0, 0, 0.7, 1] }} transition={{ duration: 3 }} style={{ opacity: 0 }} >
                <ItemCount key={prod.id} initial={1} stock={prod.stock} onAdd={onAdd} count={count} modify={setcount} />
              </motion.div>
          }
        </div>
      </div>
    </motion.section>

  )
}

export default ItemDetail