import Link from "next/link"
import useCart from "../hooks/useCart"
import { FaShoppingCart } from "react-icons/fa"

const Nav = () => {
    const { openCart } = useCart()

    const handleClick = () => {
        openCart()
    }

    return (
        <nav>
            <Link href='/'>Home</Link>
            <div onClick={handleClick} className='cart-icon'>
            <FaShoppingCart />
            </div>

            <style jsx>
                {`
                nav {
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem;
                }

                Link {
                    cursor: pointer;
                }

                .cart-icon {
                    cursor: pointer;
                }
                `}
            </style>
        </nav>
    )
}

export default Nav