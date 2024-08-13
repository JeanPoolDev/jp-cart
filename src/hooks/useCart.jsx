import { useContext } from "react"
import { CartContext } from "../context/cart"


export function useCart () {
  
  const context = useContext(CartContext)
  
  if ( context === undefined ) {
    throw new Error('Parece que el cartContext tiene problemas je je')
  }
  
  return context
}