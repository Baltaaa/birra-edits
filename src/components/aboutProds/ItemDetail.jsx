import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({ prod }) => {
  const onAdd = (cantidad) => {
    console.log(`Seleccionaste` + cantidad + `productos`)
}

  return (


    <section className='flex flex-col h-max'>
      <div className='h-max '>
        <p className='text-xl text-orange-300 text-center w-screen'>{prod.name}</p>
      </div>
      <div className='flex flex-row h-max'>
        <div className='basis-2/3	flex flex-col items-center'>
          <img className='w-2/5 flex ' src={prod.img} alt={prod.name}></img>
          {/* <b className='text-white text-left px-28'>{prod.package}</b> */}
        </div>
        <div className='flex flex-col justify-evenly basis-1/4'>
          <p className='text-white'>{prod.description}</p>
          <b className='text-white'>{prod.price}</b>
      <ItemCount key={prod.id} initial={1} stock={prod.stock} onAdd={onAdd} />
        </div>
      </div>
    </section>

  )
}

export default ItemDetail