import useCart from "../hooks/useCart"
import Link from "next/link"
import { FaRegWindowClose } from "react-icons/fa"

const ShoppingCart = () => {
    const { cart, total, isOpen, openCart, closeCart } = useCart()

    const handleClick = () => {
        closeCart()
    }

    return (
        <div isopen={isOpen.toString()} className='cart-container'>
            <div className='top'>
                <h2>Shopping Cart</h2>
                <div onClick={handleClick} className='close-button'>
                    <FaRegWindowClose />
                </div>
            </div>

            <div className='cart-content'>
                {cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <p className='item-name'>{item.name}</p>
                            <div className='item-details'>
                                <p>Quantity: {item.qty}</p>
                                <p>Price: ${item.price/100}.00</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='total'>
                Total: ${total/100}.00
            </div>

            <Link href='/checkout'>
                <button onClick={handleClick}>Checkout</button>
            </Link>

            <style jsx>
                {`
                .cart-container {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    height: 100vh;
                    width: 250px;
                    background-color: white;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    padding: 0 .5rem;
                    transform: translateX(${isOpen ? '0%' : '100%'});
                    transition: transform 0.2s ease-in;
                }

                .top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: black;
                    padding: 0;
                }

                h2 {
                    margin: .5rem;

                }
                
                .close-button {
                    cursor: pointer;
                    display: flex;
                    margin-right: .5rem;
                }

                .item-name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                }

                .item-details {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                    border-bottom: 1px solid lightgrey;
                }

                .item-details p {
                    margin: 0;
                }

                .total {
                    display: flex;
                    justify-content: flex-end;
                    font-size: 1.1rem;
                    font-weight: 600;
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

export default ShoppingCart