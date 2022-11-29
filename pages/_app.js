import '../styles/globals.css'
import Nav from '../components/Nav'
import CartProvider from "../context/Cart"
import ShoppingCart from '../components/ShoppingCart'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Nav />
      <Component {...pageProps} />
      <ShoppingCart />
    </CartProvider>
  )
}

export default MyApp
