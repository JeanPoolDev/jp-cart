import { useContext, useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import './Cart.css'
import { CartContext } from "../context/cart";

function CartItem ({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li className="flex items-center justity-center flex-col">
      <img 
        src={thumbnail} 
        alt={title}
        className="object-cover bg-white rounded-lg" 
      />
      <div className="text-center">
        <strong>{title}</strong> - S/.{price}
      </div>
      <footer>
        <small className="pr-2">
          Qty: {quantity}
        </small>
        <button onClick={addToCart} >+</button>
      </footer>
    </li>
  )
}


export function Cart () {

  const { cart, addToCart, clearCart } = useContext(CartContext)

  const cartId = useId()

  return (
    <>
      <label htmlFor={cartId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartId} hidden/>

      <aside className="cart">
        <ul >
          {
            cart.map( product => (
              <CartItem 
                key={product.id} 
                addToCart={() => addToCart(product)}
                { ...product }
              />
            ))
          }
        </ul>
        
        <div className="flex items-center justify-center mt-2">
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  )
}