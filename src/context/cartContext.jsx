import { React, useState, createContext, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setcartList] = useState([])

    const addToCart = (item) => {
        setcartList( [ ...cartList, item ] )
    }

    const clearCart = () => {
        setcartList( [ ] )
    }

  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        clearCart
    }} >
    {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider