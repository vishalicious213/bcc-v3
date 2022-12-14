import useCart from '../hooks/useCart'
import Link from 'next/link'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

const Checkout = () => {
    const { cart, total } = useCart()

    // const processPayment = async () => {
    //     const url = "/.netlify/functions/charge-card"
    //     const newCart = cart.map(({ id, qty, name }) => ({
    //         id,
    //         qty,
    //         name,
    //     }))
    //     const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    //     const { data } = await axios.post(url, { cart: newCart })
    //     // console.log('process payment', data)
    //     await stripe.redirectToCheckout({ sessionId: data.id})
    // }

    // const processShipping = async () => {
    //     const url = "/.netlify/functions/shipping"
    //     const { data } = await axios.post(url)
    //     console.log('shipping', data)
    // }

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

                    <div className='button-container'>
                        <Link href='/shipping-info'>
                            {/* <button onClick={processPayment}>Process Payment</button> */}
                            {/* <button onClick={processShipping}>Enter Shipping Info</button> */}
                            <button>Enter Shipping Info</button>
                        </Link>

                        <Link href='/shop'>
                        <button>Return to Shop</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <p>The cart is empty</p>
            )}

            <style jsx>
                {`
                .checkout-container {
                    padding: 0 .5rem 0;
                    max-width: 800px;
                    margin: 2rem auto;
                    color: white;
                }

                .item-name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                }

                .item-details {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #b01e65;
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
                    margin-bottom: 2rem;
                }

                .button-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    margin-bottom: 2rem;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    font-family: "Lato", "Helvetica Neue", Helvetica, sans-serif;
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: .1rem;
                    text-transform: uppercase;
                    border: 2px solid gainsboro;
                    border-radius: 1rem;
                    text-align: center;
                    padding: .75rem;
                    max-width: 300px;
                    width: 90%;
                    height: 3rem;
                    margin-bottom: 1rem;
                }
        
                button:hover {
                    color: white;
                    background-color: deeppink;
                    border: 2px solid white;
                    cursor: pointer;
                }
        
                button:focus {
                    outline: none;
                }

                @media only screen and (min-width: 640px) {
                    .button-container {
                        margin-bottom: 3rem;
                    }

                    button {
                        margin-bottom: 0;
                    }
                }
                `}
            </style>            
        </div>
    )
}

export default Checkout