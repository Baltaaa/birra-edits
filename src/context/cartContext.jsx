import { React, useState, createContext, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {
  const [cartList, setcartList] = useState([])

  // const [totalItemView, setTotalItemView] = useState(0)

  const isInCart = (id) => {
    return cartList.some(i => i.id === id)
  }


  const addToCart = (item) => {
    if (isInCart(item.id)) {
      let itemIndex = cartList.findIndex(prod => prod.id === item.id)
      cartList[itemIndex].quantity += item.quantity
    } else {
      setcartList([...cartList, item])
    }
  }

  const clearItem = (id) => {
    setcartList(cartList.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setcartList([])
  }

  const totalCart = () => {
    let value = cartList.reduce((subTotal, item) => subTotal = subTotal + item.price * item.quantity, 0)
    return value;
  }
  const totalItem = () => {
    let value = cartList.reduce((subTotalItem, item) => subTotalItem = subTotalItem + item.quantity, 0)
    return value;
  }


  return (
    <CartContext.Provider value={{
      cartList,
      addToCart,
      clearCart,
      clearItem,
      totalItem,
      totalCart,
      isInCart
    }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider