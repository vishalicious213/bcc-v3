import { useState, useEffect } from "react"

const useCart = () => {
    const getInitialCart = () => JSON.parse(localStorage.getItem('cart'))
    const [cart, setCart] = useState([])
    // console.log('getInitialCart', getInitialCart)
    // console.log('starting cart', cart)

    const updateCart = (newState) => {
        console.log('newState -> cart', newState)
        setCart(newState)
    }

    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('saved cart to localStorage', localStorage.getItem('cart'))
    }

    // if a cart exists, load it as initial cart state
    useEffect(() => {
        const initialCart = getInitialCart()
        if (initialCart) {
            console.log('initialCart', initialCart)
            setCart(initialCart)
            // setCart([{id: 15, qty: 13}])
            console.log('cart', cart)
            console.log('initialcart & cart', initialCart, cart)
        } else {
            // setCart([])
            console.log('empty initialCart', cart)
        }
    }, [])

    // whenever the cart state changes, save it to localStorage
    useEffect(() => {
        console.log('cart state to save to localStorage:', cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('saved cart to localStorage', localStorage.getItem('cart'))
    }, [cart])

    const addItemToCart = (id, qty = 1) => {
        console.log('item.id', id)
        const item = cart.find((i) => i.id === id)
        console.log('item:', item || 'item not yet in cart')

        // if item is in cart, increase its quantity
        if (item) {
            item.qty += qty
            setCart([...cart])
            console.log('add 1')
        // if item is not in cart, add item to cart
        } else {
            setCart([...cart, { id, qty }])
            console.log('add new')
        }

        // saveCart()
        console.log('add:', item || 'adding new item to cart')
    }

    const removeItemFromCart = (id) => {
        const item = cart.find((i) => i.id === id)

        // if item not in cart, return
        if (!item) {
            console.log('not in cart')
            return
        }

        // if item is in cart, remove 1 from quantity
        if (item) {
            item.qty -= 1
            setCart([...cart])
            console.log('remove 1')
            // saveCart()
        }

        // if item quantity is negative, set it to 0
        if (item.qty < 0) {
            item.qty = 0
            console.log('set to 0')
        }

        // if item quantity is 0 remove item from cart
        if (item.qty === 0) {
            // filter through cart and subtract the item with the passed in id.
            // make new array and add items only if they are not item.id
            const newCart = cart.filter(i => {
                return i.id !== id
            })
            console.log('newCart', newCart)
            // setCart(newCart)
            updateCart(newCart)
            console.log('newCart -> cart', cart)
            // saveCart()
        }

        console.log('remove', cart)
    }

    return {
        cart,
        addItemToCart,
        removeItemFromCart,
    }
}

export default useCart