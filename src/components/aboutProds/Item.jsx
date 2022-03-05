import React from 'react';
import ItemCount from './ItemCount'
import ButtonDetail from './ButtonDetail';


const Item = ({ Nombre, Descripción, Graduación, Envase, Precio, img, stock, categorias }, {id}) => {

    return (
        <>
            <div className="card h-max sm:w-4/5 items-center md:w-4/5 flex align-middle self-center bg-zinc-200 opacity-70 rounded-sm rounded-b-md mt-32">
                <div className=" rounded-t-xl rounded-b-sm text-center  align-center flex flex-col justify-between">
                    <div className='grid grid-cols-2 '>
                        <img src={img} alt={Nombre} className="rounded-t-lg w-full self-center opacity-100" />
                        <p className="font-bold opacity-50 p-2 text-xs text-grey-700  self-center">Graduación alcoholica: {Graduación} </p>
                    </div>
                    <p className="font-bold py-5 pb-2 overline text-gray-900 "> {Nombre}</p>
                    <ButtonDetail />
                    {/* <p className="px-6 py-2 mb-5 text-gray-500 "> {Descripción} </p> */}
                    <p className="font-extrabold p-2 text-md text-gray-700"> {Precio} </p>
                    <ItemCount key={id} />
                </div>
            </div>
        </>
    )
}

export default Item