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
            <section key={item.id} className='gift' style={{backgroundImage: `url(${item.img})`}}>
                <div className='gift-txt'>
                    <div className='gift-details'>
                        <h3>{item.name}</h3>
                        <p className='pricing-detail'><b>Donation:</b> <span className='price'>${item.price/100}.00</span></p>
                        <p>{item.short}</p>
                    </div>
                </div>
                {/* <div className='item-detail'>
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
                </div> */}



                <style jsx>
                {`
                .gift {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    border-bottom: 1px solid #b01e65;
                    min-height: 75vh;
                    margin-bottom: 2rem;
                }

                .gift-txt {
                    width: 100%;
                    min-height: 50%;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 2rem;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .gift-details {
                    
                }

                .pricing-detail {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                .price {
                    color: white;
                }

                @media only screen and (min-width: 800px) {
                    .gift:hover {
                        outline: 2px solid #b01e65;
                        background-size: auto;
                    }
                }



                // .item {
                //     // outline: 1px solid red;
                //     width: 100%;
                // }

                // .item-detail {
                //     outline: 1px solid orange;
                //     margin-bottom: 1rem;
                // }

                // .item-pic {
                //     // max-width: 50%;
                // }

                // img {
                //     width: 100%;
                // }

                // .link {
                //     cursor: pointer;
                // }

                // .buttons {
                //     display: flex;
                //     justify-content: center;
                //     margin: .5rem 0;
                // }

                // button {
                //     font-size: 1.1rem;
                // }

                // .quantity {
                //     margin: 0 1rem;
                //     font-size: 1.5rem;
                // }

                // @media only screen and (min-width: 800px) {
                //     .item {
                //         max-width: 48%;
                //     }
                // }

                // @media only screen and (min-width: 1200px) {
                //     .item {
                //         max-width: 32%;
                //     }
                // }
                `}
                </style>
            </section>
        )
    })
}

export default Catalog