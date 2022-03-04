import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import  getData  from '../../helpers/getData';
import { productos } from '../../data/productos';
import loader from '../../img/loader.svg'



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getData(productos)
            .then(res => {
                setItems(res)
            })
            .catch(err => console.warn(err))
            .finally(() => {
                console.log('complete')
                setLoading(false)
            })
    }, [])


    return (
        <>


            {
                loading
                    ?
                    <div className='grid place-content-center fixed w-screen h-screen'>
                    <img src={loader}  alt='Cargando...' />
                    </div>
                    :
                   <ItemList items={items}/>
            
                   
            }

        </>
    )
}

export default ItemListContainer;