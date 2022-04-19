import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import loader from '../../img/loader.svg'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './container.css'


import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    <>
                        <div className='categoryList' >
                            <ul className='md:flex top-20 absolute md:top-0 h-max w-screen lg:sticky lg:w-screen justify-center items-center mx-auto gap-10'>
                                <NavLink to='/categorys/black' className='tracking-wide  lg:relative absolute block p-2 font-serif text-md md:text-xl hover:rounded-lg text-zinc-500 hover:text-orange-200 transition ease-in-out duration-400'><li className='w-max'>Black Beer</li></NavLink>
                                <NavLink to='/categorys/golden' className='tracking-wide lg:relative absolute block p-2 font-serif text-md md:text-xl hover:rounded-lg text-zinc-500 hover:text-orange-200 transition ease-in-out duration-400'><li className='w-max'>Golden Beer</li></NavLink>
                                <NavLink to='/categorys/red' className='tracking-wide   lg:relative absolute block p-2 font-serif text-md md:text-xl hover:rounded-lg text-zinc-500 hover:text-orange-200 transition ease-in-out duration-400'><li className='w-max'>Red Beer</li></NavLink>
                            </ul>
                        </div>
                        <ItemList items={items} />
                    </>


            }

        </>
    )
}

export default ItemListContainer;