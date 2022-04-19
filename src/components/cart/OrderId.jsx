import React from 'react'
import { useCartContext } from '../../context/cartContext'

const OrderId = () => {

  const { orderId } = useCartContext();
  return (
    <div className='h-[70vh] w-screen grid place-content-center'>
      <div className='flex flex-col h-full w-screen justify-center gap-14'>
        <h3 className='text-orange-300 text-xl' >Thanks for your purchase!</h3>
        <b className='text-orange-300'>Order ID: <b className='text-red-400' >{orderId}</b> </b>
      </div>
    </div>
  )
}

export default OrderId