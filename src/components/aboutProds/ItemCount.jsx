import React, { useState } from 'react'
// import $ from 'jquery';
// import getData from '../../helpers/getData';
// import { productos } from '../../data/productos';



const ItemCount = ({ initial, stock, onAdd }) => {
  const [updateCount, setCount] = useState(initial);
  // const [countCart, setCountCart] = useState(null)


  const clickMas = () => {
    if (updateCount >= stock) {
      alert('¡No tenemos mas stock!')
    } else {

      setCount(updateCount + 1);
    }

  }
  const clickMenos = () => {
    if (updateCount === 1) {
      console.warn('No puedes llevar menos de 1')
    } else {
      setCount(updateCount - 1)
    }
  }

  const addToCart = () => {
    // setCountCart(updateCount)
    onAdd(updateCount);
    // alert(`Added ${updateCount} bottle's to cart. `)
    setCount(initial)
  }

  return (
    <div className='flex flex-col justify-center align-center h-max  m-2'>
      <div className='flex flex-row justify-center h-5/5 '>
        <button onClick={clickMenos} className='hover:bg-slate-100 rounded-l-md font-extrabold border border-orange-400  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span className='w-full h-full grid place-content-center opacity-50 hover:opacity-90'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg></span></button>

        <div className='border-y border-opacity-50 border-zinc-200 bg-black w-36 flex flex-col flex-grow justify-center h-max content-evenly'>
          <button onClick={addToCart} className='bg-black font-serif tracking-widest text-white w-max h-max py-1 self-center m-1 flex hover:text-orange-300 transition ease-in-out duration-300 flex-col gap-2'>ADD TO CART <p className='text-gray-50 text-xs mx-auto'>(Bottle: <b className='text-orange-300'>{updateCount}</b>)</p></button>
        </div>

        <button onClick={clickMas} className='hover:bg-slate-100 rounded-r-md font-extrabold border border-lg border-orange-400  hover:opacity-60  transition duration-300 ease-linear bg-orange-300 w-10 text-xl flex justify-center items-end py-1'><span className='w-full h-full grid place-content-center opacity-50 hover:opacity-90'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg></span></button>
      </div>

    </div>
  )
}

export default ItemCount