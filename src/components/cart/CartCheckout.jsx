import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import {
    addDoc,
    collection,
    doc,
    documentId,
    getDocs,
    getFirestore,
    query,
    updateDoc,
    where,
    writeBatch
} from "firebase/firestore"
// import OrderId from './OrderId'


const CartCheckout = () => {

    const [orderId, setorderId] = useState(null)
    const [dataForm, setDataForm] = useState({
        email: '', name: '', phone: ''
    })


    const { cartList, clearCart, totalCart } = useCartContext()


    // oder
    const getOrder = async (e) => {
        e.preventDefault()
        let order = {};

        order.buyer = dataForm
        order.total = totalCart();
        order.items = cartList.map(i => {
            const id = i.id
            const name = i.name
            const price = i.price * i.quantity
            const quantity = i.quantity

            return { id, name, price, quantity }
        })

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
            .then(res => setorderId(res.id))
            .catch(err => console.log(err))
            .finally(() => console.log('Operation Finish'))


        const queryUpdateStock = await query(
            queryCollection,
            where(documentId(), 'in', cartList.map(item => item.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
            })))
        batch.commit()

        console.log('------------------------------------');
        console.log(order);
        console.log('------------------------------------');

        // ESTO NO FUNCA IVAN, NOSE PQ NO ME GENERA LA ID SI ESTA BIEN TRAIDA EN EL THEN FIJATE CON UN CONSOLE LOG! SE VE Q NO ME LA SETEA BIEN EN EL ESTADO.
        console.log(orderId)


    }



    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    return (
        <section style={{ height: '70vh' }} className='w-2/6 mx-5 flex items-center' >
            <form
                onSubmit={getOrder}
                className="grid place-content-center h-max w-max self-end gap-20">
                <div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-1xl text-center font-bold mb-2"
                            >
                                NAME
                            </label>
                            <input
                                value={dataForm.name}
                                onChange={handleChange}
                                className="h-10  name:text-center w-full focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                                name='name' type="text" placeholder="Write your name" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block text-center uppercase tracking-wide text-gray-700 text-1xl font-bold mb-2"
                            >
                                PHONE
                            </label>
                            <input
                                value={dataForm.phone}
                                onChange={handleChange}
                                className="h-10  name:text-center w-full focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                                name='phone' type="number" placeholder="Write your phone" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-center text-gray-700 text-1xl font-bold mb-2"
                            >
                                EMAIL
                            </label>
                            <input
                                value={dataForm.email}
                                onChange={handleChange}
                                className="h-10  name:text-center w-full focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                                name='email' type="email" placeholder="examplemail@yahoo.com.ar" />
                        </div>
                    </div>
                </div>
                <aside className='flex justify-end'>
                    <div className='flex gap-14 justify-around items-center h-max w-max'>
                        <motion.button
                            whileHover={{ backgroundColor: 'orange' }}
                            transition={{ duration: 3, ease: 'easeInOut' }}
                            className=' bg-slate-300 rounded-xl p-2'>
                            <p className='text-black'>Checkout</p>
                        </motion.button>
                        <div>
                            <p className='text-white text-lg' >Total price: €  <b>{totalCart()}</b></p>
                        </div>
                    </div>

                </aside>
            </form>


            <motion.div
                className='absolute bottom-0 left-52 w-full bg-opacity-60 justify-center h-max' style={{ zIndex: 1 }} >
                <button onClick={clearCart} className='w-max self-center items-center h-max grid place-content-center'><div  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="white" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div></button>
            </motion.div>

        </section>
    )
}

export default CartCheckout