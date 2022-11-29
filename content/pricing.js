// pricing will hold item ID and price. Node can use this to send correct prices to Stripe. If Node tried to read from /content/items, it crashes when it reaches 'desc' fields because it can't parse html.

const prices = [
    {id: 10, price: 700},
    {id: 20, price: 1700},
    {id: 30, price: 2700},
]

module.exports = { prices }