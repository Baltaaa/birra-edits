import React, { useState, useEffect } from 'react'
import  getData  from '../../helpers/getData';
import ItemDetail from './ItemDetail';
import loader from '../../img/loader.svg'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

// LOADING ACA TAMBIEN

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [prod, setProd] = useState( { } );

  const { detailId } = useParams()


  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'items', detailId)
    getDoc(queryDb)
    .then(resp => setProd( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
    .finally(() =>setLoading(false))
    // .then(resp => console.log(resp))
},[])


  return (
    <>
      {
        loading
          ?
          <div className='grid place-content-center w-screen h-screen'>
            <img src={loader} alt='Cargando...' />
          </div>
          :
          <ItemDetail prod={prod} />
      }
    </>
  )
}

export default ItemDetailContainer