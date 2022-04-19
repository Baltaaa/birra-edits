import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.svg'
import CartSlider from '../cart/CartSlider.jsx'
import { motion } from 'framer-motion'




const NavBar = () => {




    return (
        <>
            <nav className='bg-neutral-500 relative md:sticky flex flex-row font-serif justify-between  opacity-90 mx-auto w-screen md:h-max h-1/5 items-center shadow-b shadow-md'>
                <div className='w-full lg:w-max flex mx-auto opacity-70'>
                    <img alt='Logo' className='w-22 md:w-24 md:h-20 h-16' src={logo} />
                </div>
                <div className='flex w-[24rem] md:w-full lg:absolute left-2 lg:w-max top-4'>
                    <NavLink to='/' >
                        <motion.span whileHover={{ scale: 1.2 }} transition={{ duration: 0.4 }} href='/' className='relative inline-block'><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-12 md:w-12" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg></motion.span>
                    </NavLink>
                </div>

                <CartSlider />


            </nav>
        </>
    )
}

export default NavBar;