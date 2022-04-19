import React from 'react';
import  Item  from './Item';
import { motion } from 'framer-motion';

const ItemList = ({items}) => {
  
  return (
    <motion.section  className='mx-5 mb-20 grid place-content-center grid-cols-1 sm:grid-cols-2 w-5/6	md:w-full align-center items-center lg:grid-cols-3 h-max lg:w-full gap-10 '>
    {
      items.map( item => <Item {...item} key={item.id} id={item.id}/>)
    }
    </motion.section>
  )
}

export default ItemList