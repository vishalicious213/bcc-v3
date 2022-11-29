import axios from 'axios'

const shippingInfo = () => {
    const processShipping = async () => {
        const url = "/.netlify/functions/shipping"
        const { data } = await axios.post(url)
        console.log('shipping', data)
    }

    return (
        <div id='form-container'>
            <h1>Shipping</h1>
            <form id='order-form' name='order-form' method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='order-form' />

                <div id='sender-info'>Your Contact Information:
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='your name'
                        className='field'
                    />
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='your email address'
                        className='field'
                    />
                    <input
                        id='phone'
                        name='phone'
                        type='text'
                        placeholder='your phone number'
                        className='field'
                    />
                </div>

                <div id='recipient-info'>Recipient's Contact Information:
                        <input
                            id='recipient'
                            name='recipient'
                            type='text'
                            placeholder="recipient's name"
                            className='field'
                        />
                        <input
                            id='street1'
                            name='street1'
                            type='text'
                            placeholder="street address line 1"
                            className='field'
                        />
                        <input
                            id='street2'
                            name='street2'
                            type='text'
                            placeholder="street address line 2"
                            className='field'
                        />
                        <input
                            id='city'
                            name='city'
                            type='text'
                            placeholder="city"
                            className='field'
                        />
                        <input
                            id='state'
                            name='state'
                            type='text'
                            placeholder="state"
                            className='field'
                        />
                        <input
                            id='zip'
                            name='zip'
                            type='text'
                            placeholder="zip code"
                            className='field'
                        />
                        <input
                            id='phone-2'
                            name='phone-2'
                            type='text'
                            placeholder="phone number"
                            className='field'
                        />
                    </div>

                    <button 
                        id='order-button'
                        type='submit'
                        onClick={processShipping}
                    >
                        Place Order
                    </button>
            </form>

            <style jsx>
                {`
                #form-container {
                    width: 100%;
                    // border-top: 5px solid gainsboro;
                    margin-bottom: 2rem;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    width: 90%;
                    margin: 1rem auto 0;
                }

                #sender-info, #recipient-info {
                    display: flex;
                    flex-direction: column;
                    margin-top: 1rem;
                    font-weight: 600;
                }

                .field {
                    border: 2px solid gainsboro;
                    border-radius: .35rem;
                    margin-bottom: .5rem;
                    padding: 1rem;
                }

                .field:hover {
                    border: 2px solid black;
                }

                #order-button {
                    color: gainsboro;
                    font-size: 1.1rem;
                    background-color: grey;
                    border: none;
                    border-radius: .35rem;
                    padding: .5rem;
                    margin-top: 1rem;
                }

                #order-button:hover {
                    color: white;
                    background-color: black;
                    transition: .25s
                }
                `}
            </style>
        </div>


    )
}

export default shippingInfo