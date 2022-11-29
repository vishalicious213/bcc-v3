import Link from "next/link"
import useCart from "../hooks/useCart"

const Catalog = ({items}) => {
    const { cart, addItemToCart, removeItemFromCart } = useCart()
    // console.log('Catalog props', items)
    // console.log('Catalog cart', cart)
    // console.log('localStorage cart', localStorage.getItem('cart'))

    const quantity = (i) => {
        let thing = cart.find((it) => it.id === i)

        if (thing) {
            return thing.qty
        } else {
            return 0
        }
    }

    return items.map(item => {
        return (
            <section key={item.id} className='item'>
                <div className='item-detail'>
                    <Link href={`/items/${item.slug}`}>
                        <div className='link'>
                            <h2>{item.name}</h2>
                            <p>${item.price/100}.00</p>
                            <div className='item-pic'>
                                <img src={item.img} />
                            </div>
                        </div>
                    </Link>
                    <div className='buttons'>
                        <button onClick={() => addItemToCart(item)}>+</button>
                        <span className='quantity'>{quantity(item.id)}</span>
                        <button onClick={() => removeItemFromCart(item.id)}>-</button>
                    </div>
                </div>

                <style jsx>
                {`
                .item {
                    // outline: 1px solid red;
                    width: 100%;
                }

                .item-detail {
                    outline: 1px solid orange;
                    margin-bottom: 1rem;
                }

                .item-pic {
                    // max-width: 50%;
                }

                img {
                    width: 100%;
                }

                .link {
                    cursor: pointer;
                }

                .buttons {
                    display: flex;
                    justify-content: center;
                    margin: .5rem 0;
                }

                button {
                    font-size: 1.1rem;
                }

                .quantity {
                    margin: 0 1rem;
                    font-size: 1.5rem;
                }

                @media only screen and (min-width: 800px) {
                    .item {
                        max-width: 48%;
                    }
                }

                @media only screen and (min-width: 1200px) {
                    .item {
                        max-width: 32%;
                    }
                }
                `}
                </style>
            </section>
        )
    })
}

export default Catalog