import { useRouter } from "next/router"
import { gifts } from "../../content/gifts"

const Item = () => {
    const router = useRouter()
    const { item } = router.query
    // console.log(item)

    const product = gifts.find(i => i.slug === item)
    // console.log('product', product)

    return (
        <>
            <h1>{product.name}</h1>
            <h2>${product.price/100}.00</h2>
            <img src={product.img} alt={product.alt} />
            <div>{product.desc}</div>

            <style jsx>
                {`
                h1 {
                    font-size: 2rem;
                    margin-bottom: 0;
                    color: #b01e65;
                }

                h2 {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                div {
                    color: gainsboro;
                }
                `}
            </style>
        </>
    )
}

export default Item

    // to gain access to 'query' and see dynamic part of path
    // const router = useRouter()
    // 'item' is the key in the key/value pair returned from query, so we can descructure it and use it directly
    // const { item } = router.query
