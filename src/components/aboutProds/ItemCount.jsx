import React, { useState } from 'react'
// import $ from 'jquery';
// import getData from '../../helpers/getData';
// import { productos } from '../../data/productos';



const ItemCount = ({ key, initial, stock, onAdd}) => {
  const [updateCount, setCount] = useState(initial);





  const clickMas = () => {
    if (updateCount >=stock){
      alert('¡No tenemos mas stock!')
    }else {

      setCount(updateCount + 1);
    }

  }
  const clickMenos = () => {
    if (updateCount === 1) {
      console.warn('No puedes llevar menos de 1')
    }else {
      setCount(updateCount - 1)
    }
  }

  const addToCart = () => {
    onAdd(updateCount);
  }

  return (
    <div className='flex flex-col justify-center align-center h-max'>
      <div className='flex flex-row justify-center h-3/5 mx-1'>
        <button onClick={clickMenos} className='hover:bg-slate-100 rounded-l-md font-extrabold border border-orange-400  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span id={key} className='w-full h-max opacity-50 hover:opacity-90'>-</span></button>

        <div className='relative'>
          <div className=' bg-black w-36 flex flex-col flex-grow justify-center h-full content-evenly'>
            <p className=' text-white flex justify-center text-center text-xs'>{updateCount}</p>
          </div>
        </div>

        <button onClick={clickMas} className='hover:bg-slate-100 rounded-r-md font-extrabold border border-lg border-orange-400  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span id={key} className='w-full h-max opacity-50 hover:opacity-90'>+</span></button>
      </div>
      <button onClick={addToCart} className='bg-black font-serif tracking-widest text-white w-max h-3/5 px-3 py-1 self-center m-3 flex  hover:text-orange-300 transition ease-in-out duration-300'>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount