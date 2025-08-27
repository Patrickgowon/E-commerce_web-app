// src/pages/PaymentOptions.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PaymentOptions() {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');
  const [saveCard, setSaveCard] = useState(false);

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Pay securely with your credit or debit card'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '📱',
      description: 'Fast and secure payment with PayPal'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      icon: '🍎',
      description: 'Pay with Apple Pay for quick checkout'
    },
    {
      id: 'google-pay',
      name: 'Google Pay',
      icon: '📲',
      description: 'Fast payment with your Google account'
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct bank transfer payment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/cart" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Payment Options</h1>
          <p className="text-lg text-gray-600 mt-2">Choose your preferred payment method</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Payment Methods */}
            <div className="md:w-2/5 border-r border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map(method => (
                    <div
                      key={method.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedMethod === method.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{method.icon}</div>
                        <div>
                          <h3 className="font-medium text-gray-900">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedMethod === method.id
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedMethod === method.id && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Payment Form */}
            <div className="md:w-3/5">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  {selectedMethod === 'credit-card' && 'Credit/Debit Card Details'}
                  {selectedMethod === 'paypal' && 'PayPal Payment'}
                  {selectedMethod === 'apple-pay' && 'Apple Pay'}
                  {selectedMethod === 'google-pay' && 'Google Pay'}
                  {selectedMethod === 'bank-transfer' && 'Bank Transfer Details'}
                </h2>

                {/* Credit Card Form */}
                {selectedMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="save-card"
                        checked={saveCard}
                        onChange={() => setSaveCard(!saveCard)}
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">
                        Save card for future payments
                      </label>
                    </div>
                  </div>
                )}

                {/* PayPal Option */}
                {selectedMethod === 'paypal' && (
                  <div className="text-center py-8">
                    <div className="bg-blue-50 p-6 rounded-lg inline-block mb-6">
                      <span className="text-4xl">📱</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      You will be redirected to PayPal to complete your payment securely.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md w-full">
                      Continue to PayPal
                    </button>
                  </div>
                )}

                {/* Apple Pay Option */}
                {selectedMethod === 'apple-pay' && (
                  <div className="text-center py-8">
                    <div className="bg-black p-6 rounded-full inline-block mb-6">
                      <span className="text-4xl text-white">🍎</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Pay quickly and securely with Apple Pay.
                    </p>
                    <button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md w-full">
                      Pay with Apple Pay
                    </button>
                  </div>
                )}

                {/* Google Pay Option */}
                {selectedMethod === 'google-pay' && (
                  <div className="text-center py-8">
                    <div className="bg-blue-50 p-6 rounded-lg inline-block mb-6">
                      <span className="text-4xl">📲</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Pay quickly and securely with Google Pay.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md w-full">
                      Pay with Google Pay
                    </button>
                  </div>
                )}

                {/* Bank Transfer Option */}
                {selectedMethod === 'bank-transfer' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">IBAN</label>
                      <input
                        type="text"
                        placeholder="XX00 XXXX 0000 0000 0000 0000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">BIC/SWIFT</label>
                      <input
                        type="text"
                        placeholder="XXXXXXYYXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                      <input
                        type="text"
                        placeholder="Your Bank Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                )}

                {/* Order Summary */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">$129.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">$9.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">$12.60</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span>$152.58</span>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="mt-8">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md w-full">
                    Complete Payment
                  </button>
                </div>

                {/* Security Notice */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;