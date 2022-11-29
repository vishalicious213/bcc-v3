import '../styles/globals.css'
import Nav from '../components/Nav'
import CartProvider from "../context/Cart"
import ShoppingCart from '../components/ShoppingCart'

import Footer from '../components/footer'
import ContactForm from '../components/contact'
// import "@fortawesome/fontawesome-svg-core/styles.css" // import font awesome css
// import { config } from "@fortawesome/fontawesome-svg-core"
// config.autoAddCss = false // don't add css automatically (we imported above)
import DonateBanner from '../components/donateBanner'



function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Nav />
      <div style={{height: '3.5rem'}}></div>
      <DonateBanner />
      <Component {...pageProps} />
      <ShoppingCart />
      <ContactForm />
      <Footer />
    </CartProvider>
  )
}

export default MyApp
