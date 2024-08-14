import { useReducer, createContext } from "react";
import { initialState, Reducer as reducer } from '../reducer/cart'


export const CartContext = createContext()


export function CartProvider ({ children }) {

  const [state, dispatch] = useReducer( reducer, initialState )

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })


  // const addToCart = product => {
  //   const findIndexCart = cart.findIndex(item => item.id === product.id)


  //   //* si encontramos un producto en el carrito 

  //   if ( findIndexCart >= 0 ) {
  //     const newCart = structuredClone(cart)
  //     newCart[findIndexCart].quantity += 1
  //     return setCart(newCart)
  //   }

  //   // ! si no encontramos el producto en el carrito 

  //   setCart(prevState => ([
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1
  //     }
  //   ]))

  // }

  // const removeFromCart = product => {
  //   setCart(prevState => prevState.filter(item => item.id != product.id))
  // }

  // const findProducts = product => {
  //   return cart.some(item => item.id === product.id)
  // }

  // const clearCart = () => {
  //   setCart([])
  // }


  return (
    <CartContext.Provider value={{
      cart: state,
      clearCart,
      removeFromCart,
      addToCart
    }}>
      { children }
    </CartContext.Provider>
  )
}