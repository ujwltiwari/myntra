const Razorpay = require('razorpay')
var instance = new Razorpay({
  key_id: 'rzp_test_ZRkHMq0GKNh11L',
  key_secret: 'mDCPnEz6tpX3HUwT6fECOB6Z',
})

export default async function handler(req, res) {
  const { amount } = req.body
  try {
    var options = {
      amount, // amount in the smallest currency unit
      currency: 'INR',
      receipt: 'order_rcptid_11',
    }

    // Promisifying the promise from instance.order.create
    const createOrder = (options) => {
      return new Promise((resolve, reject) => {
        instance.orders.create(options, function (err, order) {
          if (err) {
            reject(err)
          } else {
            resolve(order)
          }
        })
      })
    }

    const order = await createOrder(options)
    console.log(order)
    res.status(200).send(order)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
