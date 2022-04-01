import React from 'react'

const OrderId = ({ props }) => {

    const { orderId } = props
  return (
    <div className='grid place-content-center'>
    <h3 className='text-white text-xl' >thanks for your purchase! Order ID: {orderId}</h3>
    </div>
  )
}

export default OrderId