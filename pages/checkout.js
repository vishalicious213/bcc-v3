import useCart from '../hooks/useCart'
import Link from 'next/link'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

const Checkout = () => {
    const { cart, total } = useCart()

    const processPayment = async () => {
        const url = "/.netlify/functions/charge-card"
        const newCart = cart.map(({ id, qty, name }) => ({
            id,
            qty,
            name,
        }))
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
        const { data } = await axios.post(url, { cart: newCart })
        // console.log('process payment', data)
        await stripe.redirectToCheckout({ sessionId: data.id})
    }

    const processShipping = async () => {
        const url = "/.netlify/functions/shipping"
        const { data } = await axios.post(url)
        console.log('shipping', data)
    }

    return (
        <div>
            {cart.length > 0 ? (
                <div className='checkout-container'>
                    <h2 className='title'>Checkout</h2>
                    <div className='cart-content'>
                        {cart.map((item) => {
                            return (
                                <div key={item.id}>
                                    <p className='item-name'>{item.name}</p>
                                    <div className='item-details'>
                                        <p>Quantity: {item.qty}</p>
                                        <p>Price: ${item.price/100}.00</p>
                                    </div>
                                    <p className='subtotal'>Subtotal: ${item.qty * item.price/100}.00</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className='total'>
                        Total: ${total/100}.00
                    </div>

                    <Link href='/checkout'>
                        {/* <button onClick={processPayment}>Process Payment</button> */}
                        <button onClick={processShipping}>Process Shipping</button>
                    </Link>
                </div>
            ) : (
                <p>The cart is empty</p>
            )}

            <style jsx>
                {`
                .checkout-container {
                    padding: 0 .5rem 0;
                }

                .item-name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                }

                .item-details {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid lightgrey;
                }

                .item-details p {
                    margin: 0;
                }

                .subtotal {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 0;
                }

                .total {
                    display: flex;
                    justify-content: flex-end;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-top: 2rem;
                }

                button {
                    width: 100%;
                    padding: .5rem;
                    margin-top: 2rem;
                    cursor: pointer;
                    border: 1px solid gainsboro;
                    color: dimgray;
                    font-weight: 600;
                }

                button:hover {
                    border: 1px solid gray;
                    color: black;
                }
                `}
            </style>            
        </div>
    )
}

export default Checkout