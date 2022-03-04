import React from 'react';
import ItemCount from './ItemCount'


const Item = ({ Nombre, Descripción, Graduación, Envase, Precio, img, stock, categorias }) => {

    return (
        <>
            <card className="h-max sm:w-3/6 md:w-4/5 flex align-middle self-center">
                <div className="bg-gray-600 rounded-t-xl rounded-b-sm text-center  align-center flex flex-col justify-between">
                    <div className='grid grid-cols-2 '>
                        <img src={img} alt={Nombre} className="rounded-t-lg w-full self-center" />
                        <p className="font-bold opacity-50 p-2 text-xs text-grey-700  self-center">Graduación alcoholica: {Graduación} </p>
                    </div>
                    <p className="font-semibold py-5 pb-2 overline text-gray-300 text-clip"> {Nombre}</p>
                    <button className='flex font-xs opacity-20 text-white py-2 hover:opacity-80 transition duration-300 w-max self-center'>Detalles <span className='flex self-center px-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    </span>
                    </button>
                    {/* <p className="px-6 py-2 mb-5 text-gray-500 "> {Descripción} </p> */}
                    <p className="font-semibold p-2 text-md text-gray-300"> {Precio} </p>
                    <ItemCount />
                </div>
            </card>
        </>
    )
}

export default Item