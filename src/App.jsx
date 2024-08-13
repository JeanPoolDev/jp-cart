import { useContext, useState } from 'react'
import { products as allProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { FiltersContext } from './context/filters'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { CartProvider } from './context/cart'

function App() {

  const [products] = useState(allProducts)

  const {filters} = useContext(FiltersContext)

  const filtersProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const newProducts = filtersProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={newProducts}/>
      <Footer /> 
    </CartProvider>
  )
}

export default App
