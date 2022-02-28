import React from 'react'
// import DataFetched from './dataFetched/DataFetched';
// import productos from './dataFetched/DataFetched';
import ItemCount from './ItemCount';
import birra from '../../img/birra.jpg'

const ItemListContainer = (props) => {

    return (
        <div classNameName='h-screen grid place-content-center'>

            <div className="flex items-center justify-center ">

                <card className="w-1/3 bg-gray-500 border border-gray-100 rounded-lg text-center hover:shadow-lg align-center">

                    <img src={birra} className="rounded-t-lg" />
                    <p className="font-bold pt-3 pb-2"> Angry Pitbull IPA </p>

                    <p className="px-10 py-2 mb-5 text-gray-500"> </p>

                    <ItemCount />
                </card>

            </div>
        </div>
    )
}

export default ItemListContainer;