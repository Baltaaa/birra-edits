import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.svg'
import CartSlider from './cart/CartSlider.jsx'
import { motion } from 'framer-motion'



const NavBar = () => {




    return (
        <>
            <nav className='bg-neutral-500 relative md:sticky flex flex-row font-serif justify-evenly lg:justify-evenly opacity-90 mx-auto flex-grow w-screen md:h-max h-1/5 items-center shadow-b shadow-md'>
                <div className='w-max ml-1'>
                    <img alt='Logo' className='w-24 h-20' src={logo} />
                </div>
                <div className='ml-4'>
                    <NavLink to='/' >
                        <motion.span whileHover={{ scale: 1.2 }} transition={{ duration: 0.4 }} href='/' className='relative inline-block'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg></motion.span>
                    </NavLink>
                </div>
                <ul className='flex top-20 absolute md:top-0  h-max w-screen lg:sticky lg:w-9/12 justify-center items-center mx-auto ml-4 gap-10'>
                    <NavLink to='/categorys/black' className='tracking-wide  lg:relative absolute block p-2 font-serif text-md md:text-lg hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-400'><li className='w-max'>Black Beer</li></NavLink>
                    <NavLink to='/categorys/golden' className='tracking-wide lg:relative absolute block p-2 font-serif text-md md:text-lg hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-400'><li className='w-max'>Golden Beer</li></NavLink>
                    <NavLink to='/categorys/red' className='tracking-wide   lg:relative absolute block p-2 font-serif text-md md:text-lg hover:rounded-lg hover:text-orange-200 transition ease-in-out duration-400'><li className='w-max'>Red Beer</li></NavLink>
                </ul>

                {/* <NavLink to='cart'>
            </NavLink> */}
                <CartSlider />


            </nav>
        </>
    )
}

export default NavBar;