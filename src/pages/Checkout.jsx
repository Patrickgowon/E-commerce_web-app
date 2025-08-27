// pages/Checkout.jsx
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useCurrency } from '../context/CurrencyContext'
import { Link } from 'react-router-dom'
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'

const Checkout = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { items, getCartTotal, clearCart } = useCart()
  const { convertToNaira } = useCurrency()

  useEffect(() => {
    if (!stripe) return

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )

    if (!clientSecret) return

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          clearCart()
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe, clearCart])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/checkout/success",
      },
    })

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message)
    } else {
      setMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
        {items.map(item => (
          <div key={item.id} className="flex justify-between mb-2 text-gray-700">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t border-gray-200 pt-2 mt-4">
          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="text-sm text-gray-600 text-right">
            ₦{convertToNaira(getCartTotal())}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Details</h2>
        <PaymentElement />
        <button 
          disabled={isLoading || !stripe || !elements} 
          className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 hover:bg-orange-600 disabled:bg-gray-400"
        >
          <Link to={'/payment'}>
            {isLoading ? "Processing..." : `Pay $${getCartTotal().toFixed(2)}`}
          </Link>
        </button>
        {message && <div className="text-orange-600 mt-4">{message}</div>}
      </form>
    </div>
  )
}

export default Checkout
