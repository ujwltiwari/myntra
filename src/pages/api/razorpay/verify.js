var {
  validatePaymentVerification,
} = require('razorpay/dist/utils/razorpay-utils')
const Razorpay = require('razorpay')

var instance = new Razorpay({
  key_id: 'rzp_test_ZRkHMq0GKNh11L',
  key_secret: 'mDCPnEz6tpX3HUwT6fECOB6Z',
})

export default async function handler(req, res) {
  const { orderId, paymentId, signature } = req.body

  const secret = 'mDCPnEz6tpX3HUwT6fECOB6Z'

  const data = validatePaymentVerification(
    { order_id: orderId, payment_id: paymentId },
    signature,
    secret
  )

  console.log('verify', data)

  res.status(200).send(data)
}
