import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
// import $ from 'jquery';
import Cart from './cart/Cart.jsx'



const NavBar = () => {


    return (
        <>
            <nav className='bg-neutral-500 relative md:sticky flex flex-row font-serif justify-between lg:justify-evenly opacity-90 mx-auto flex-grow w-screen md:h-max h-1/5 items-center shadow-b shadow-md'>
                <div className='w-max'>
                    <img alt='Logo' className='w-24 h-20' src={logo} />
                </div>
                <div>
                    <a href='/' className='relative inline-block text-gray w-max h-full text-sm md:text-lg lg:text-xl font-mono tracking-widest font-semibold hover:rounded-lg p-2 hover:text-orange-900 transition ease-linear hover:-translate-y-1 duration-800'>Home</a>
                </div>
                <ul className='flex inset-x-0 top-20 absolute md:top-0  h-max w-screen mx-auto lg:sticky lg:w-9/12 justify-center items-center ml-0 gap-10'>
                    <li className='w-max'><NavLink to='/categorys/black' className='tracking-wide hover:-translate-y-1  text-end lg:relative absolute block p-2 font-serif text-md md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-400'>Black Beer</NavLink></li>
                    <li className='w-max'><NavLink to='/categorys/golden' className='tracking-wide hover:-translate-y-1  text-end lg:relative absolute block p-2 font-serif text-md md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-400'>Golden Beer</NavLink></li>
                    <li className='w-max'><NavLink to='/categorys/red' className='tracking-wide hover:-translate-y-1  text-end lg:relative absolute block p-2 font-serif text-md md:text-md hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-400'>Red Beer</NavLink></li>
                </ul>

            {/* <NavLink to='cart'>
            </NavLink> */}
                <Cart />
            
            
            </nav>
        </>
    )
}

export default NavBar;