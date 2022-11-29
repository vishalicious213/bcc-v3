# Next.JS ecommerce skeleton

This project will feature an ecommerce site that can be used as a template for small shops. It will be built using Next.JS, Stripe & EZPost on the front end and will rely on Netlify serverless functions on the back end (to send data to Stripe & EZPost).

## Component outline

/components
- Catalog: maps over products & renders them and buttons
- Nav: navbar
- ShoppingCart: open/close to slide into view. shows items selected by visitor and includes checkout button that goes to /pages/checkout

/content
- items: array of products

/context
- Cart: holds global cart state and cart functions (empty, add item, etc.), total price and whether cart is open/closed

/functions
- charge-card: serverless function to send cart data to Stripe for payment

/hooks
- useCart: shares Cart context

/pages
- cancelled: browse to this page if Stripe order is cancelled
- checkout: shows cart items and "Process Payment" button connects to Stripe
- index: starting page
- success: browse to this page if Stripe order is successful

/pages/items
- [item]: dynamically display pages for products in /content/items

---

1. Inventory of items (array)
1. Item display page (shop)
    1. Cart
    1. Sender info form
    1. Recipient info form
1. Payment (Stripe)
1. Shipping (EZPost)
1. Email alert to team with order info

The application will be wrapped with Context to share cart information and other information (Sender & Recipient info) as needed.

## Development process

### Render product catalog, product pages, navigation bar
1. Created /content/items.js to hold product data
1. Created /components/Catalog to render product data
1. Imported Catalog into index and passed it items.js to render products
1. Created /pages/items/[item].js for dynamic product page generation
1. Created /components/Nav for navigation and added it to _app so all pages have it (so product pages can go back to index)

### Build cart (cart state, add/remove buttons, save to localStorage, show item quantity, move state to Context, render cart, open/close buttons, total price, place checkout button)
1. Drafted /hooks/useCart to share cart state
1. /hooks/useCart: drafted add/remove from cart functions
    1. add: add a new item to cart if item wasn't in it already
    1. add: if item is in cart, add 1 to quantity
    1. remove: if item is not in cart, return
    1. remove: if item is in cart, remove 1 from quantity
    1. remove: if item quantity is 0, remove item from cart
1. Catalog: added add/remove buttons and connected them to useCart functions
1. /hooks/useCart: added useEffect to save cart to localStorage when cart changes
1. Catalog: showing individual item quantities
1. Drafted /context/Cart, wrapped _app components with Context and exported Context in Cart
1. Moved state from useCart to /context/Cart
1. Navbar: added shopping cart icon (via react-icons library)
1. Drafted /components/ShoppingCart to display items in cart
    1. Added close button
    1. Drafted click handler for close button
    1. Rendered item ID & item quantity in cart
    1. Passed all item data to cart, to render more details
    1. Replaced item ID with item name, added item price
1. /context/Cart: created state for total (price) and added total to ShoppingCart
1. /context/Cart: created useEffect to update total state when cart updates
1. ShoppingCart: added checkout button (not wired)
1. /context/Cart: added state to open/close cart, added functions to change open/close state
1. ShoppingCart & Nav: added open/close functionality to cart (connected cart & close icons to open/close functions in /context/Cart) & styled with transition to smoothen open/close effect
1. /context/Cart: added useEffect to load initial cart from localStorage and persist data on page refresh or return navigation

### Checkout page & payment successful/cancelled pages
1. Drafted /pages/checkout
1. Linked checkout button in cart to /pages/checkout
    1. Added onClick to close cart when checkout button is clicked
1. /pages/checkout: connected to useCart to display cart items & total
    1. Added ternary to show empty cart message
    1. Rendered cart contents (item name, quantity, price)
    1. Rendered total price
    1. Rendered subtotal price per item
    1. Rendered "Process Payment" button
1. Drafted /pages/success to handle successful Stripe payment
1. /context/Cart: added clearCart function to empty cart contents
1. /pages/success: added useEffect to empty cart when page is loaded
1. Drafted /pages/cancelled to handle cancelled Stripe payment

### Netlify (serverless) functions
1. Confirmed that netlify CLI is installed globally (netlify -v)
1. Created netlify.toml in root directory and added path to functions folder
1. Created functions folder in root directory
1. Drafted /functions/charge-card
1. /pages/checkout: drafted processPayment function and connected it to "Process Payment" button
    1. Added axios as a dependency
    1. processPayment: added URL and axios call to charge-card function
1. /functions/charge-card: returns stringified card in response body
1. Created .env and added Stripe keys, added .env to .gitignore

### Talk to Stripe & charge card
1. Added /content/pricing with item ID and price info. Will combine this with item name and quantity from cart to send data to Stripe
1. /functions/charge-card: added lineItems with product data
1. Added Stripe as a dependency (npm i stripe)
1. /functions/charge-card: added Stripe and created Stripe session
1. Added Stripe JavaScript library for frontend as a dependency
1. processPayment: imported Stripe, loaded Stripe, redirected to checkout when processPayment is invoked
1. .env: prefixed public key with NEXT_PUBLIC_

### Talk to easypost and generate shipping label
1. Added @easypost/api as dependency
1. Added Easypost test API key to .env
1. Drafted /functions/shipping using template from https://github.com/EasyPost/easypost-node


## Libraries

1. stripe (for payment on backend)
1. @stripe/stripe-js (for Stripe connectivity on frontend)
1. @easypost/api (for shipping)
1. axios (to transmit JSON data)
1. dotenv (node/backend files aren't reading .env natively)
1. react-icons (for shopping cart icon)

## Local environment

- netlify-cli (Netlify CLI is used to run serverless functions locally)

## Running locally

- Use "netlify dev" to run locally on port 8888 with Netlify serverless functions