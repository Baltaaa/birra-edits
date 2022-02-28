import React, { useState, useEffect } from 'react'
import logo from '../img/logo.png'
import CartWidget from './CartWidget'
import $ from 'jquery';
import ShoppingCart from './icons/ShoppingCart';


const NavBar = () => {
    // hook para hover submenu
    const [show, setShow] = useState(false);
    
    // estilo para submenu agregado
    return (
        <nav className='bg-gradient-to-l from-neutral-600 flex justify-evenly mx-auto flex-grow flex-row w-full h-max'>
            <div className='w-max'>
                <img alt='Logo' className='w-24 h-20' src={logo} />
            </div>
            <ul className='flex list-none w-9/12 justify-center items-center gap-4'>
                <li className='items-center  relative  inline-block text-white w-max h-full  text-md md:text-lg lg:text-xl font-mono font-extrabold'><a href='##' className='block hover:rounded-lg p-3 hover:text-orange-300 transition ease-in-out duration-300'>BirraEdits</a></li>
                <li className='items-center  relative  inline-block text-white w-max h-full  text-md md:text-lg lg:text-xl font-mono font-extrabold' onMouseEnter={() => {setShow(!show)}} onMouseLeave={() => {setShow(!show)}} ><a href='##' id="hoverCategories" className=' block hover:text-orange-300 hover:rounded-lg p-3 transition ease-in-out duration-300'>Categorias</a>
  {show && <ul className='sticky inline-block text-center gap-4 transition-300'>
                        <li><a href='##' className='categories relative block p-4 font-serif text-xs md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-300'>Birras negras</a></li>
                        <li><a href='##' className='categories relative block p-4 font-serif text-xs md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-300'>Birras rubias</a></li>
                        <li><a href='##' className='categories relative block p-4 font-serif text-xs md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-300'>Birras rojas</a></li>
                    </ul>}
                </li>
                <li className='items-center relative inline-block text-white w-max h-full  text-md md:text-lg lg:text-xl font-mono font-extrabold'><a href='##' className='block hover:rounded-lg p-3 hover:text-orange-300 transition ease-in-out duration-300' >Consulta</a></li>
            </ul>
            <CartWidget boton={ShoppingCart()} />
        </nav>
    )
}

export default NavBar;