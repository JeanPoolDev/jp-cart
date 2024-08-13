import { useContext, useState } from "react"
import { FiltersContext } from "../context/filters"

export function Filters() {

  const [minPrice, setMinPrice] = useState(0)
  const { setFilters } = useContext(FiltersContext)

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value)

    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <div className="flex justify-between items-center pt-5">
      <div className="flex gap-5">
        <label htmlFor="price">Precios:</label>
        <input 
          type="range" 
          min='0'
          max='200'
          onChange={handleChangePrice}
        />
        <p>S/.{minPrice}</p>
      </div>

      <div className="flex gap-5">
        <label htmlFor="category">Categoría:</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="beauty">Hermosa</option>
          <option value="fragrances">Fragancias</option>
          <option value="furniture">Muebles</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>

    </div>
  )
}
