import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.footer transition={{duration: 5}} animate={{opacity: 1}} className='w-screen h-[3rem] sticky mb-0 mt-3 pb-0'>
            <div className='text-xs mb-2 w-screen justify-center self-center flex flex-row'>
                    <a href='https://www.linkedin.com/in/baltasar-bruschetti-a567a421a/' target='_blank' className='flex items-center font-semibold text-opacity-100 text-gray-500 hover:text-blue-400 transition duration-200 ease-linear tracking-wide'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                        </span>Baltasar Bruschetti
                    </a>
                <p className='text-white  flex items-center'><b className='px-1'>-</b>Front End Developer <span className='px-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg></span></p>
            </div>
        </motion.footer>
    )
}

export default React.memo(Footer)