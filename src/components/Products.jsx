import { useContext } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import { CartContext } from "../context/cart";


export function Products ( { products } ) {

  const { addToCart, findProducts, removeFromCart } = useContext(CartContext)

  return (
    <main className="flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
      {
        products.map(product => {

          const hasProduct = findProducts(product)

          return(
            <div key={product.id} 
              className="bg-[#111] rounded-lg p-5 shadow">
              <div >
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="object-cover w-full rounded-lg bg-[#fff]"
                  />
              </div>
              <div
                className="text-center font-semibold py-2"> 
                {product.title} - S/.{product.price}
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => hasProduct ? removeFromCart(product) : addToCart(product)}
                  className={`border hover:border-[#646cff] py-1 px-2 rounded
                    ${hasProduct ? 'bg-red-700' : 'bg-green-700'} `}>
                  {
                    hasProduct 
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </div>
          )
        })
      }
      </div>
    </main>
  )
}