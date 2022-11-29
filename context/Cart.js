import { createContext, useState, useEffect } from "react"

export const Context = createContext()

const Cart = ({children}) => {
    const getInitialCart = () => JSON.parse(localStorage.getItem('cart'))
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    // if a cart exists, load it as initial cart state
    useEffect(() => {
        const initialCart = getInitialCart()
        if (initialCart != 0) {
            setCart(initialCart)
        }
    }, [])

    // whenever the cart state changes, save it to localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addItemToCart = (product, qty = 1) => {
        const item = cart.find((i) => i.id === product.id)

        // if item is in cart, increase its quantity
        if (item) {
            item.qty += qty
            setCart([...cart])
        // if item is not in cart, add item to cart
        } else {
            setCart([...cart, { ...product, qty }])
        }
    }

    // total price for cart component and checkout page
    useEffect(() => {
        let newTotal = 0

        cart.forEach((item) => {
            newTotal += item.price * item.qty
        })
        setTotal(newTotal)
    }, [cart])

    const openCart = () => {
        setIsOpen(true)
    }

    const closeCart = () => {
        setIsOpen(false)
    }

    const removeItemFromCart = (id) => {
        const item = cart.find((i) => i.id === id)

        // if item not in cart, return
        if (!item) {
            return
        }

        // if item is in cart, remove 1 from quantity
        if (item.qty > 0) {
            item.qty -= 1
            setCart([...cart])
        }

        // if item quantity is 0 remove item from cart
        if (item.qty <= 0) {
            // filter through cart and subtract the item with the passed in id.
            // make new array and add items only if they are not item.id
            const newCart = cart.filter(i => {
                return i.id !== id
            })
            setCart(newCart)
        }
    }

    const clearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    const exposed = {
        cart,
        addItemToCart,
        removeItemFromCart,
        total,
        isOpen,
        openCart,
        closeCart,
        clearCart,
    }

    return (
        <Context.Provider value={exposed}>{children}</Context.Provider>
    )
}

export default Cart