import React, { useState, useEffect } from 'react'
import $ from 'jquery';

const ItemCount = () => {
  let [updateCount, setCount] = useState(1);

  let stockProd = 20;
  const clickMas = () => {
    if (updateCount >= 1 && updateCount < stockProd) {
      setCount(updateCount + 1)
    }
  }

  const clickMenos = () => {
    if (updateCount > 1 && updateCount <= stockProd) {
      setCount(updateCount - 1)
    }
  }



  return (
    <div className='flex flex-col justify-center align-center h-max'>
      <div className='flex flex-row justify-center h-3/5'>
        <button onClick={clickMenos} className='rounded-l-full font-extrabold border-y border-orange-300  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span className='w-full h-max opacity-50 hover:opacity-90'>-</span></button>
        <div className='relative'>
          <div className=' bg-orange-300 w-12 h-full border border-orange-300'>
            <p className=' text-black'>{updateCount}</p>
          </div>
        </div>
        <button onClick={clickMas} className='rounded-r-full font-extrabold border-y border-orange-300  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span className='w-full h-max opacity-50 hover:opacity-90'>+</span></button>
      </div>
      <button className='bg-black font-serif tracking-widest text-white w-max h-3/5 px-3 py-1 self-center m-3 flex  hover:text-orange-300 transition ease-in-out duration-300'>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount