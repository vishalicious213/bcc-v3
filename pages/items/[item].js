import { useRouter } from "next/router"
import { items } from "../../content/items"

const Item = () => {
    const router = useRouter()
    const { item } = router.query
    // console.log(item)

    const product = items.find(i => i.slug === item)
    // console.log('product', product)

    return (
        <>
            <h1>{product.name}</h1>
            <h2>${product.price/100}.00</h2>
            <img src={product.img} alt={product.alt} />
            <div dangerouslySetInnerHTML={{ __html: product.desc}}></div>

            <style jsx>
                {`
                
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
