import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import getData from '../../helpers/getData';
import loader from '../../img/loader.svg'
import { useParams } from 'react-router-dom';


import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categorysId } = useParams();


    useEffect(() => {
        const db = getFirestore()
        if (categorysId) {
            const queryColection = collection(db, 'items')
            const queryFilter = query(queryColection, where('category', '==', categorysId))
            getDocs(queryFilter)
                .then(resp => setItems(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            const queryColection = collection(db, 'items')
            getDocs(queryColection)
                .then(resp => setItems(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    }, [categorysId])






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