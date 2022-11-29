// import styles from '../styles/Home.module.css'
import Link from "next/link"
import { items } from "../content/items"
import Catalog from "../components/Catalog"

const Home = () => {
  // console.log('items', items)
  return (
    <div>
      <h1>Next.JS eCommerce</h1>
      <section>
        <Catalog items={items} />
      </section>

      <Link href='shipping-info'>
        <button className='shipping-button'>Enter Shipping Information</button>
      </Link>

      <style jsx>
      {`
      section {
        // outline: 1px solid black;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .shipping-button {
        width: 100%;
        padding: .5rem;
        margin-top: 2rem;
        cursor: pointer;
        border: 1px solid gainsboro;
        color: dimgray;
        font-weight: 600;
      }

      .shipping-button:hover {
        border: 1px solid gray;
        color: black;
      }      
      `}
      </style>
    </div>
  )
}

export default Home