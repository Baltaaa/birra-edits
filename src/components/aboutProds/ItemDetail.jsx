import React from 'react'



const ItemDetail = ({ prod }) => {


  return (

      
    <section className='grid place-content-center'>
    <p className='text-xl text-white'>{prod.name}</p>
    <img src={prod.img} alt={prod.name}></img>
    <p className='text-white'>{prod.description}</p>
    <b className='text-white'>{prod.package}</b>
    </section>
      
  )
}

export default ItemDetail