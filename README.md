# Breast Cancer Comfort Foundation

This is v3 of the BCC website. It is built using Next.JS.

BCC is a cancer charity operating out of Long Island, NY. Their focus is providing support to individuals whose lives have been impacted by breast cancer treatment. Their primary mission is to provide __Comfort Baskets__ and __Chemo Comfort Bags__ containing gifts and personal care items, as well as an online forum for support.

- The main website is currently located at http://www.breastcancercomfort.org

---

## Libraries

1. stripe (for payment on backend)
1. @stripe/stripe-js (for Stripe connectivity on frontend)
1. axios (to transmit JSON data)
1. dotenv (node/backend files aren't reading .env natively)
1. react-icons (for shopping cart icon)
1. react-slick (for carousels)

## Local environment

- netlify-cli (Netlify CLI is used to run serverless functions locally)

## Running locally

- Use "netlify dev" to run locally on port 8888 with Netlify serverless functions