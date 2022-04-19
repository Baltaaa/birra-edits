import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCartContext } from '../../context/cartContext'
import {
    addDoc,
    collection,
    documentId,
    getDocs,
    getFirestore,
    query,
    Timestamp,
    where,
    writeBatch
} from "firebase/firestore"
import { useForm } from "react-hook-form";
// import OrderId from './OrderId'
import { useNavigate } from 'react-router-dom';


const CartCheckout = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        getOrder(data);
        console.log(data)
        navigate(`/order`);
    }

    const [dataForm, setDataForm] = useState({
        email: '', name: '', phone: ''
    })


    const { cartList, totalCart, setorderId } = useCartContext()


    // oder
    const getOrder = async () => {
        // e.preventDefault()
        let order = {};
        order.date = Timestamp.fromDate(new Date());
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
            .finally(() => console.log('Process finished.'))


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
    }



    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    return (
        <section style={{ height: '80vh', width: '60vw' }} className='sm:h-[50vh] md:w-full self-start my-5 lg:w-2/6 mx-5 flex flex-col overflow-y-hidden border-l border-opacity-40 border-l-black' >
            <h1 className='my-4 text-lg text-center text-orange-200 font-extralight'>
                Complete to take the order:</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid place-content-center h-max w-full gap-20 mx-5">
                <div className='overflow-y-hidden'>
                    <div className="flex flex-wrap lg:-mx-3 self-center ">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-col">
                            <label className="block uppercase tracking-wide text-orange-300 text-1xl text-center font-bold mb-2"
                            >
                                NAME
                            </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 4,
                                        message: 'Enter a valid name'
                                    },
                                    maxLength: {
                                        value: 14,
                                        message: 'Enter a valid name'
                                    },
                                })}
                                value={dataForm.name}
                                onChange={handleChange}
                                className="h-10 mx-1 name:text-center w-11/12 focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                                name='name' placeholder="Write your name" />
                                {errors.name && <span className='text-red-800'>{errors.name.message}</span>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 flex flex-col">
                            <label className="block text-center uppercase tracking-wide text-orange-300 text-1xl font-bold mb-2"
                            >
                                PHONE
                            </label>
                            <input
                                {...register("phone", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 9,
                                        message: 'Enter a valid number'
                                    },
                                    maxLength: {
                                        value: 11,
                                        message: 'Enter a valid number'
                                    },
                                })}
                                value={dataForm.phone}
                                onChange={handleChange}
                                className="h-10 pr-2 name:text-center w-11/12 focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800 block bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                                name='phone' type="text" placeholder="Write your phone" />
                            {errors.phone && <span className='text-red-800'>{errors.phone.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                        <div className="w-full px-3 flex flex-col">
                            <label className="block uppercase tracking-wide text-center text-orange-300 text-1xl font-bold mb-2"
                            >
                                EMAIL
                            </label>
                            <input
                                value={dataForm.email}
                                onChange={handleChange}
                                type='email'
                                {...register("email", {
                                    required: 'Complete',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Enter a valid email"
                                    }
                                })}
                                className="h-10 mx-1 name:text-center w-[15rem] focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800  bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                                name='email' placeholder="examplemail@yahoo.com.ar" />
                            {errors.email && <span className='text-red-800'>{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6 mb-6">
                        <div className="w-full px-3 flex flex-col">
                            <label className="block uppercase tracking-wide text-center text-orange-300 text-1xl font-bold mb-2"
                            >
                                CONFIRM EMAIL
                            </label>
                            <input
                                value={dataForm.email}
                                onChange={handleChange}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Complete"
                                    },
                                    pattern: {
                                        value:
                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Enter a valid email"
                                    }
                                })}
                                className="h-10 mx-1 name:text-center w-[15rem] focus:placeholder:text-transparent self-center ease-in duration-200  rounded-full focus:bg-gray-800  bg-neutral-400/50 text-white shadow-xl px-4 placeholder:text-slate-600 placeholder:text-center"
                                name='email' type="email" placeholder="examplemail@yahoo.com.ar" />
                                {errors.email && <span className='text-red-800'>{errors.email.message}</span>}
                        </div>
                    </div>
                </div>
                <aside className='flex justify-center mb-10 md:justify-end w-screen md:w-auto'>
                    <div className='flex gap-5 md:gap-14 justify-around items-center h-max w-max' >
                        <motion.button
                            type='submit'
                            whileHover={{ backgroundColor: '#FDBA74' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className='bg-neutral-400/50 rounded-xl p-2'>
                            <p className='text-black' >Checkout</p>
                        </motion.button>
                        <div>
                            <p className='text-white text-lg' >Total price: €  <b>{totalCart()}</b></p>
                        </div>
                    </div>

                </aside>
            </form>
        </section>
    )
}

export default CartCheckout