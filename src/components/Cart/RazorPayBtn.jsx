import { useRouter } from 'next/router'
import { toast, Toaster } from 'react-hot-toast'

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const RazorPayBtn = ({ total }) => {
  const router = useRouter()

  const toastify = (message, type) => {
    console.log('toastify called')
    toast[type](message, {
      duration: 4000,
      style: {
        // color: '#fff',
        marginTop: 50,
        width: '700px',
      },
    })
  }

  const handleOrder = async () => {
    /*
     * 1st Step - Create Order
     */
    const orderResponse = await fetch('/api/razorpay/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: total * 100,
      }),
    })
    const order = await orderResponse.json()

    // load razorpay checkout script
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razropay failed to load!!')
      return
    }

    /*
     * 2nd Step - Create / Capture Payment
     */
    const options = {
      key: 'rzp_test_ZRkHMq0GKNh11L', // Enter the Key ID generated from the Dashboard
      amount: 340000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Myntra Jabong Ltd',
      description: 'Test Transaction',
      image: '/images/myntra.webp',
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#FF3F6C',
      },
      handler: async (res) => {
        console.log('res', res)

        /*
         * 3rd Step - Verify Payment
         */
        const verifyResponse = await fetch('/api/razorpay/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: res.razorpay_order_id,
            paymentId: res.razorpay_payment_id,
            signature: res.razorpay_signature,
          }),
        })

        const verify = await verifyResponse.json()
        console.log('verify', verify)
        /*
         * if verify == true -> then save payment details to db
         */
        if (verify) {
          toastify('Order Successfully Placed', 'success')
          router.push('/checkout/confirmation')
        }
      },
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Toaster />
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <button
          className='bg-myntraPink w-full text-[13px] h-[40px] tracking-widest text-gray-50 p-2 uppercase font-semibold'
          onClick={handleOrder}
        >
          Place Order
        </button>
      </header>
    </div>
  )
}

export default RazorPayBtn
