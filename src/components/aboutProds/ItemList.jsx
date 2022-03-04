import React from 'react';
import  Item  from './Item';


const ItemList = ({items}) => {


  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 h-max w-4/5 my-20 gap-10 place-content-center mx-auto'>
    {
      items.map( item => <Item {...item} key={item.id} />)
    }
    </section>
  )
}

export default ItemList