import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import shoppingCart from '../icons/ShoppingCart'
import ItemCount from './ItemCount'



const ItemDetail = ({ prod }) => {

  const [count, setcount] = useState(null)


  // cartContext
  const { addToCart, cartList } = useCartContext()

  const onAdd = (cantidad) => {
    console.log(`Seleccionaste` + cantidad + `productos`)
    setcount(cantidad)
    addToCart({ ...prod, quantity: count })
  }

  const maxHeight = { maxHeight: '30rem' }

  console.log('------------------------------------');
  console.log(cartList);
  console.log('------------------------------------');

  return (


    <section className='flex flex-col h-max'>
      <div className='h-max '>
        <p className='text-xl text-orange-300 text-center w-screen'>{prod.name}</p>
      </div>
      <div className='flex flex-row h-max'>
        <div className='basis-2/3	flex flex-col items-center'>
          <img className='w-auto flex ' style={maxHeight} src={prod.img} alt={prod.name}></img>
          {/* <b className='text-white text-left px-28'>{prod.package}</b> */}
        </div>
        <div className='flex flex-col justify-evenly basis-1/4'>
          <p className='text-white'>{prod.description}</p>
          <b className='text-white'>{prod.price}</b>

          {count ?
            <div className='flex flex-col justify-evenly'>
              <span className='self-center mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <div className='border-y border-opacity-50 border-zinc-200 bg-black w-36 flex flex-col justify-center self-center h-max content-evenly'>
                <b className='self-center flex flex-col text-orange-300'>You have added {count}</b>
              <div className='self-center py-1'>
                {shoppingCart('white', '1.7em')}
              </div>
                <NavLink to='/cart' className='mx-auto w-max h-max' >
                  <button onClick={addToCart} className='bg-black font-sans text-xs tracking-wider text-white w-max h-max  self-center m-1 flex flex-col gap-2 mx-auto'><p className='text-gray-50 font-serif text-xl mx-auto hover:text-orange-300 transition ease-in-out duration-300'>¡View cart!</p></button>
                </NavLink>
              </div>
            </div>
            :
            <ItemCount key={prod.id} initial={1} stock={prod.stock} onAdd={onAdd} />
          }

        </div>
      </div>
    </section>

  )
}

export default ItemDetail