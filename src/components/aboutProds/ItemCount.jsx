import React, { useState, useEffect } from 'react'
import $ from 'jquery';

const ItemCount = () => {
  let [updateCount, setCount] = useState(1);

  let stockProd = 9;
const clickMas = () =>{
  if (updateCount >= 1 && updateCount < stockProd) {
    setCount(updateCount + 1)
  }
}

const clickMenos = () =>{
  if (updateCount > 1 && updateCount <= stockProd) {
    setCount(updateCount - 1)
  }
}



  return (
    <div className='flex flex-col justify-center align-center h-max'>
      <div className='flex flex-row justify-center'>
      <button onClick={clickMenos} className='border border-black hover:border-white hover:bg-black hover:text-white transition duration-300 ease-linear bg-white w-6 text-xl flex justify-center items-center'>-</button>
      <input disabled className='relative w-12 bg-orange-300' />
      <p className='absolute text-white'>{updateCount}</p>
      <button onClick={clickMas} className='border border-black hover:border-white hover:bg-black hover:text-white transition duration-300 ease-linear bg-white w-6 text-xl flex justify-center items-center'>+</button>
      </div>
    <button className='bg-orange-400 w-max p-2 self-center my-3 flex hover:border hover:border-black hover:bg-orange-600'>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount