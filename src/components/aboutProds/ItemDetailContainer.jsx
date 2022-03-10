import React, { useState, useEffect } from 'react'
import  getData  from '../../helpers/getData';
import ItemDetail from './ItemDetail';
import loader from './../../img/loader.svg';
import { useParams } from 'react-router-dom'

// LOADING ACA TAMBIEN

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [prod, setProd] = useState({});

  const { detailId } = useParams()

  
  useEffect(() => {
    // let detailIdUpdate = `${detailId}`;
    setLoading(true)
    getData()
      .then(res => setProd(res.find(product => product.id=== detailId)))
      .finally(
        setLoading(false)
      )
    }, [])

  return (
    <>
      {
        loading
          ?
          <div className='grid place-content-center fixed w-screen h-screen'>
            <img src={loader} alt='Cargando...' />
          </div>
          :
          <ItemDetail item={prod} />
      }
          {/* <h1>{prod.Nombre}</h1> */}
    </>
  )
}

export default ItemDetailContainer