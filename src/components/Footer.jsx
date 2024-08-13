import { useCart } from '../hooks/useCart'

export function Footer () {
  
  const {cart} = useCart()

  return (
    <footer className='fixed bottom-2 left-2 bg-[#111]'>
      Jp-tienda
    </footer>
  )
}