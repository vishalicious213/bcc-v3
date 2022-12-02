import { useRouter } from "next/router"
import { gifts } from "../../content/gifts"

const Item = () => {
    const router = useRouter()
    const { item } = router.query
    // console.log(item)

    const product = gifts.find(i => i.slug === item)
    // console.log('product', product)

    return (
        <div className='main'>
            <div>
                <h1>{product.name}</h1>
                <h2>${product.price/100}.00</h2>
            </div>
            <div className='details'>
                <img src={product.img} alt={product.alt} />
                <div className='desc'>
                    {product.short}
                    {product.desc}
                </div>
            </div>

            <style jsx>
                {`
                .main {
                    width: 90%;
                    margin: auto;
                    color: gainsboro;
                    margin-bottom: 2rem;
                }

                h1 {
                    font-size: 2rem;
                    margin-bottom: 0;
                    color: #b01e65;
                }

                h2 {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                img {
                    width: 90%;
                    max-width: 800px;
                }

                .desc {
                    width: 90%;
                    margin-top: 1rem;
                    max-width: 800px;
                }

                @media only screen and (min-width: 1200px) {
                    .details {
                        display: flex;
                        margin-bottom: 2rem;
                    }

                    img {
                        width: 50%;
                        margin-right: 2rem;
                    }

                    .desc {
                        margin-top: 0;
                    }
                }
                `}
            </style>
        </div>
    )
}

export default Item

    // to gain access to 'query' and see dynamic part of path
    // const router = useRouter()
    // 'item' is the key in the key/value pair returned from query, so we can descructure it and use it directly
    // const { item } = router.query
