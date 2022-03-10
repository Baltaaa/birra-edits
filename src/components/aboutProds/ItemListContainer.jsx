import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import getData from '../../helpers/getData';
import loader from '../../img/loader.svg'
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoriaId } = useParams();

    useEffect(() => {

        if (categoriaId) {
            getData()
                .then(res =>
                    setItems(res.filter(prod => prod.categorias === categoriaId))
                )

        } else {
            setLoading(true)
            getData()
                .then(res =>
                    setItems(res)
                )
                .finally(() => {
                    setLoading(false)
                })
        }

    }, [categoriaId])


    return (
        <>


            {
                loading
                    ?
                    <div className='grid place-content-center fixed w-screen h-screen'>
                        <img src={loader} alt='Cargando...' />
                    </div>
                    :
                    <ItemList items={items} />


            }

        </>
    )
}

export default ItemListContainer;