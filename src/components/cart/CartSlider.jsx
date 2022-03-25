import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import CartWidget from '../CartWidget';
import { useCartContext } from '../../context/cartContext';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
// import { useDragControls } from 'framer-motion';


export default function CartSlider() {
    // slider
    const [open, setOpen] = useState(false)

    // cartContext
    const { cartList, clearCart, clearItem, totalCart} = useCartContext()


    return (
        <>
            {console.log(cartList)}
            <div className='absolute right-5 top-3 overflow-y-hidden'>
                <CartWidget onClick={() => setOpen(true)} />
            </div>
            {/* onclick slide */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-80" 
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-900 bg-opacity-90 ease-linear transition-opacity" />
                        </Transition.Child>

                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300 sm:duration-700"
                                enterFrom="-translate-y-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in duration-100 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div id='cart' className="pointer-events-auto w-screen max-w-md relative">
                                    <div className="flex h-full flex-col overflow-y-hidden shadow-xl" style={{backgroundColor:'#7A7A78'}} > 
                                        <div className="flex-1 overflow-y-auto scroll-m-0 py-6 px-20 sm:px-6">
                                            <div className="flex items-center justify-evenly">
                                        <motion.aside 
                                        whileDrag={{ transformX: -100 }}
                                        
                                         className='w-max grid place-content-center  bg-opacity-60  justify-center' style={{zIndex:1}} >
                                            <button onClick={clearCart} className=' self-center items-center w-full h-max grid place-content-center'><div  >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div></button>
                                        </motion.aside>
                                                {/* <div>
                                                    <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} onClick={clearCart} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </motion.button>
                                                </div> */}

                                                <Dialog.Title className="text-lg tracking-widest font-xs uppercase w-4/5 text-gray-900 flex justify-center items-center">Cart</Dialog.Title>

                                                <div className="flex h-7 items-center overflow-y-hidden">
                                                    <button
                                                        type="button"
                                                        className=" text-gray-600 hover:text-gray-900"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only"></span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root overflow-y-hidden">
                                                    <ul className="-my-6 divide-y overflow-y-hidden divide-gray-200">
                                                        {cartList.map(prods => (
                                                            <motion.li
                                                                // drag='x'
                                                                // dragConstraints={{
                                                                //     left: 20,
                                                                //     right: 0

                                                                // }}
                                                                // whileHover={{ scale: 1,  }}
                                                                // whileTap={{ zIndex: 99,scale: 0.9, cursor: "grabbing", backgroundColor: 'rgb(252 165 165)', backgroundRepeat: 'no-repeat', opacity: 0.4  }}
                                                                // dragElastic={0.4}
                                                                // dragTransition={{  bounceDamping: 20, bounceStiffness: 1000 }}

                                                                // dragDirectionLock={true}
                                                                // dragMomentum={true}
                                                                // dragElastic={0.2}
                                                                key={prods.id}
                                                                className="flex py-6 h-max hover:cursor-pointer rounded-xl">
                                                                <div className="h-max w-24 flex-shrink-0 overflow-hidden">
                                                                    <img
                                                                        style={{pointerEvents: 'none'}}
                                                                        src={prods.img}
                                                                        alt={prods.name}
                                                                        className="h-full w-full object-cover object-center"

                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base">
                                                                            <h3 className='text-md tracking-tight text-orange-400 hover.font-bold transition ease-linear duration-150 '>
                                                                                {prods.name}
                                                                            </h3>
                                                                            <p className="text-black font-light mx-5">€{prods.price}</p>
                                                                        </div>

                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">

                                                                        <NavLink to={`/detail/${prods.id}`}>
                                                                        <button onClick={() => setOpen(false)} className='flex font-xs opacity-50 hover:-translate-y-0.5 text-slate-300 py-2 hover:opacity-80 transition duration-300 w-max self-center'>Detail <span className='flex self-center px-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                                                        </svg>
                                                                        </span>
                                                                        </button>
                                                                        </NavLink>

                                                                        <div className="flex">
                                                                            <motion.button onClick={() => clearItem(prods.id)} type="button" className="font-xs text-black transition duration-200 ease-linear hover:-inset-y-2 hover:text-red-600">
                                                                                Remove
                                                                            </motion.button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="shadow-2xl rounded-t-xl shadow-black pb-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-large my-2 text-gray-900">
                                                <p>Subtotal:</p>
                                                <p>€ {totalCart()}</p>
                                            </div>

                                            <div className="mt-6">
                                                <NavLink
                                                    to="/cart"
                                                    onClick={() => setOpen(false)}
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in hover:opacity-70 hover:text-black  hover:bg-orange-300">
                                                    <p className='opacity-100 flex'>Checkout<span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                    </svg></span> </p>
                                                </NavLink>
                                            </div>
                                            <div className="mt-6 flex justify-center text-xs font-bold">
                                                <button
                                                    type="button"
                                                    className="font-medium text-black transition duration-120 ease-linear hover:-inset-y-2 hover:text-orange-300"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Continue shopping<span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}
