import { Filters } from "./Filters"

export function Header() {
  return (
    <header className="p-10">
      <h1 className="text-center text-4xl">Tienda JP 🏪🛒</h1>
      <Filters />
    </header>
  )
}

