require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { prices } = require('../content/pricing')

exports.handler = async (event, context) => {
    const { cart } = JSON.parse(event.body)
    
    // match cart item with price from backend
    const selectedItems = cart.map(({ id, name, qty }) => {
        const product = prices.find(p => p.id === id)
        return {
            ...product,
            name,
            qty,
        }
    })

    // talk to Stripe
    const lineItems = selectedItems.map(product => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: product.name,
            },
            unit_amount: product.price,
        },
        quantity: product.qty,
    }))

    // create Stripe session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.URL}/success`,
        cancel_url: `${process.env.URL}/cancelled`,
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            id: session.id,
        })
    }
}