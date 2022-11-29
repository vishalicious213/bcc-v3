import { useEffect } from 'react'
import useCart from '../hooks/useCart'
import axios from 'axios'

const Success = () => {
    const { clearCart } = useCart()

    // const processShipping = () => {
    //     const url = "/.netlify/functions/shipping"
    //     const { data } = axios.post(url)
    //     console.log('shipping', data)
    // }

    // useEffect(() => {
    //     processShipping()
    //     // clearCart()
    //     // console.log('clear cart')
    // }, [])

    return (
        <div>
            <h2>Payment successful</h2>
            <p>Thank you for your purchase!</p>

            <button onClick={clearCart}>Clear Cart</button>
            
            <style jsx>
                {`
                
                `}
            </style>
        </div>
    )
}

export default Success