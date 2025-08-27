// pages/Cart.jsx (updated with extracted palette only)
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useCurrency } from '../context/CurrencyContext'
import { useAuth } from '../context/AuthContext'

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, getCartItemsCount, clearCart } = useCart()
  const { convertToNaira } = useCurrency()
  const { user } = useAuth()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some items to your cart to continue shopping</p>
          <Link 
            to="/search" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({getCartItemsCount()} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Cart Items</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {items.map(item => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-6"
                  />
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="text-lg font-medium text-orange-600 hover:text-orange-700">
                      {item.name}
                    </Link>
                    <p className="text-gray-600 mt-1">${item.price} each</p>
                    <div className="mt-4 flex items-center">
                      <label htmlFor={`quantity-${item.id}`} className="mr-3 text-sm font-medium text-gray-700">
                        Quantity:
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-center min-w-[2rem]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-orange-600 hover:text-orange-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 text-right">
                    <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-600">₦{convertToNaira(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-between items-center">
              <button 
                onClick={clearCart}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Clear Cart
              </button>
              <Link 
                to="/search" 
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Save for later section */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Frequently Bought Together</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=100&q=80" 
                  alt="Wireless Earbuds"
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <p className="text-sm font-medium">Wireless Earbuds</p>
                  <p className="text-sm text-gray-600">$49.99</p>
                  <button className="mt-1 text-sm text-orange-600 hover:text-orange-700">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=100&q=80" 
                  alt="Phone Case"
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <p className="text-sm font-medium">Protective Phone Case</p>
                  <p className="text-sm text-gray-600">$19.99</p>
                  <button className="mt-1 text-sm text-orange-600 hover:text-orange-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({getCartItemsCount()} items)</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-orange-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(getCartTotal() * 0.05).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(getCartTotal() * 1.05).toFixed(2)}</span>
                </div>
                <div className="text-sm text-gray-600 text-right">
                  ₦{convertToNaira(getCartTotal() * 1.05)}
                </div>
              </div>
            </div>

            {user ? (
              <Link 
                to="/checkout"
                className="block w-full bg-orange-500 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Proceed to Checkout
              </Link>
            ) : (
              <div className="space-y-3">
                <Link 
                  to="/login"
                  className="block w-full bg-orange-500 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Sign in to Checkout
                </Link>
                <Link 
                  to="/register"
                  className="block w-full border border-gray-300 text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Create Account
                </Link>
              </div>
            )}

            {/* Security badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-sm text-gray-600">
                  <p>Secure checkout</p>
                  <p>256-bit encryption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Promotion section */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-3">Apply Promotion Code</h3>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Enter code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <button className="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-black transition-colors">
                Apply
              </button>
            </div>
            <div className="mt-4 text-sm text-orange-600">
              <p>SUMMER25 - 25% off on orders over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
