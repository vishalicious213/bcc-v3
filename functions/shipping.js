require('dotenv').config()
const EasyPost = require('@easypost/api')
const api = new EasyPost(process.env.EASYPOST_TEST_API_KEY)

exports.handler = async (event, context) => {
    const shipment = new api.Shipment({
        from_address: {
            street1: '36 West Village Green',
            street2: 'Suite C',
            city: 'Hicksville',
            state: 'NY',
            zip: '11801',
            country: 'US',
            company: 'The Breast Cancer Comfort Foundation',
            phone: '516-622-1917',
        },
        to_address: {
            name: 'Dr. Steve Brule',
            street1: '179 N Harbor Dr',
            city: 'Redondo Beach',
            state: 'CA',
            zip: '90277',
            country: 'US',
            phone: '4155559999',
        },
        parcel: {
            length: 8,
            width: 5,
            height: 5,
            weight: 5,
        },
    });

    let package = await shipment.save().then((res) => {
        // console.log('shipment.save', res)
        return res
    })

    return {
        statusCode: 200,
        body: JSON.stringify(package),
    }

    // shipment.save()
    //     .then((s) => s.buy(shipment.lowestRate())
    //     // .then(console.log)
    //     .then((res) => {return res})
    //     .catch(console.log))
}