import React from 'react'



const ItemDetail = ({ item }) => {


console.log(item)
  return (
    <section>
    <p>{item.Nombre}</p>
    <img src={item.img} alt={item.Nombre}></img>
    </section>
  )
}

export default ItemDetail