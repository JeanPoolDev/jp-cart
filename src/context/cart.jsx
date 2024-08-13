import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext()

export function CartProvider ({ children }) {

  const [cart, setCart] = useState([])


  const addToCart = product => {
    const findIndexCart = cart.findIndex(item => item.id === product.id)


    //* si encontramos un producto en el carrito 

    if ( findIndexCart >= 0 ) {
      const newCart = structuredClone(cart)
      newCart[findIndexCart].quantity += 1
      return setCart(newCart)
    }

    // ! si no encontramos el producto en el carrito 

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))

  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id != product.id))
  }

  const findProducts = product => {
    return cart.some(item => item.id === product.id)
  }

  const clearCart = () => {
    setCart([])
  }



  return (
    <CartContext.Provider value={{
      cart,
      clearCart,
      removeFromCart,
      findProducts,
      addToCart
    }}>
      { children }
    </CartContext.Provider>
  )
}