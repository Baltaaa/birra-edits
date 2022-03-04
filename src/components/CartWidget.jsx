import React from 'react'


const CartWidget = ({boton}) => {

  return (
    <>
    <button className='w-auto h-full  p-1 flex self-center rounded-full hover:opacity-40 transition duration-300 ease-linear'>{boton}</button>
    </>
  )
}

export default CartWidget;