
import React, { useState } from 'react';


const PaymentSection = ({ data, setData, prevStep }) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
  });

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Booking confirmed! Check your email for details.");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
      
      <form onSubmit={handlePayment}>
        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                checked={data.paymentMethod === 'credit-card'}
                onChange={() => setData({ ...data, paymentMethod: 'credit-card' })}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                checked={data.paymentMethod === 'paypal'}
                onChange={() => setData({ ...data, paymentMethod: 'paypal' })}
                className="mr-2"
              />
              PayPal
            </label>
          </div>

          {data.paymentMethod === 'credit-card' && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  className="p-3 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="p-3 border rounded-lg"
                  required
                />
              </div>
            </div>
          )}

          {data.paymentMethod === 'paypal' && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p>You will be redirected to PayPal to complete your payment.</p>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentSection;