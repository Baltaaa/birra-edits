import React, { useState, useEffect } from 'react'
import logo from '../img/logo.png'
import $ from 'jquery';



const NavBar = () => {
    // hook para hover submenu
    let [show, setShow] = useState(false);
    // estilo para submenu agregado
    return (
        <>
            <nav className=' relative md:sticky flex flex-row font-serif justify-between lg:justify-evenly mx-auto flex-grow w-screen md:h-max h-1/5 items-center shadow-b shadow-md'>
                <div className='w-max'>
                    <img alt='Logo' className='w-24 h-20' src={logo} />
                </div>
                <ul id='menuBurger' className='lg:flex inset-x-0 top-20 absolute md:top-0  h-max w-screen mx-auto lg:sticky lg:bg-transparent grid grid-flow-col lg:w-9/12 justify-center items-center gap-4'>
                    <li className='items-center  relative  inline-block text-white w-max h-full  text-sm md:text-lg lg:text-xl font-sans tracking-widest font-extrabold'><a href='##' className='block hover:rounded-lg p-2 hover:text-orange-300 transition ease-in-out duration-300'>BirraEdits</a></li>
                    <li className='items-center  relative  inline-block text-white w-max h-full  text-sm md:text-lg lg:text-xl font-sans tracking-widest font-extrabold' onMouseEnter={() => { setShow($('#sublist').slideDown(600)) }} onMouseLeave={() => { setShow($('#sublist').slideUp(600)) }} ><a href='##' id="hoverCategories" className=' block hover:text-orange-300 hover:rounded-lg p-2 transition ease-in-out duration-300'>Categorias</a>
                        {show && <ul id='sublist' className='sticky text-black md:fixed h-max w-full max-w-max justify-center mx-4 rounded-lg top-14 text-center gap-2 transition-300'>
                            <li className='w-max'><a href='##' className='categories tracking-wide hover:-translate-y-1  text-end lg:relative absolute block p-2 font-serif text-xs md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-300'>Birras negras</a></li>
                            <li className='w-max'><a href='##' className='categories tracking-wide hover:-translate-y-1  text-end lg:relative absolute block p-2 font-serif text-xs md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-300'>Birras rubias</a></li>
                            <li className='w-max'><a href='##' className='categories tracking-wide hover:-translate-y-1  text-end lg:relative absolute block p-2 font-serif text-xs md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-300'>Birras rojas</a></li>
                        </ul>}
                    </li>
                    <li className='items-center relative inline-block text-white w-max h-full  text-sm md:text-lg lg:text-xl font-sans tracking-widest font-extrabold'><a href='##' className='block hover:rounded-lg p-2 hover:text-orange-300 transition ease-in-out duration-300' >Consulta</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;