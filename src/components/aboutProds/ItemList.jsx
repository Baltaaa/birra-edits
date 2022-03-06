import React from 'react';
import  Item  from './Item';


const ItemList = ({items}) => {


  return (
    <section className='mx-5 grid grid-cols-1 md:grid-cols-2  w-4/5 md:w-full align-center  items-center lg:grid-cols-3 h-max lg:w-full mb-28 mt-0 gap-10 '>
    {
      items.map( item => <Item {...item} key={item.id} id={item.id}/>)
    }
    </section>
  )
}

export default ItemList