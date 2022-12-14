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
                        <Link href={`/items/${item.slug}`}>View details</Link>
                    </div>

                    <div className='buttons'>
                        <button onClick={() => addItemToCart(item)}>+</button>
                        <span className='quantity'>{quantity(item.id)}</span>
                        <button onClick={() => removeItemFromCart(item.id)}>-</button>
                    </div>
                </div>

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

                h3 {
                    font-size: 1.75rem;
                    margin-bottom: 0;
                    color: deeppink;
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

                .buttons {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.1rem;
                    height: 2rem;
                    width: 40%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                .quantity {
                    color: gainsboro;
                    background-color: rgba(0, 0, 0, 0.2);
                    outline: 1px solid #b01e65;
                    border-radius: 1rem;
                    font-size: 1.1rem;
                    width: 10%;
                    padding: .5rem 0;
                    text-align: center;
                }

                @media only screen and (min-width: 800px) {
                    .gift:hover {
                        outline: 2px solid #b01e65;
                        background-size: auto;
                    }
                }
                `}
                </style>
            </section>
        )
    })
}

export default Catalog