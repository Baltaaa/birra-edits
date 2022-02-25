import React from 'react'
// import { useState } from 'react';

const ItemListContainer = (props) => {
    // const [count, setCount] = useState(0)

    // const clickAki = () => {
    //   setCount(count + 1)
    // }
    return (
        <div className='bg-slate-900 hover:bg-slate-400 transition duration-300  rounded-b-lg rounded-r-lg rounded-l-lg h-max mx-auto w-max m-10 p-2 border border-y-white'>
            <a href='##' className=''><h1 className='text-white'>{props.greeting}</h1></a>
        </div>
    )
}

export default ItemListContainer;