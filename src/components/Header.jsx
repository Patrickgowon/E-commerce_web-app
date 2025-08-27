// components/Header.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useCurrency } from '../context/CurrencyContext'
import { useAuth } from '../context/AuthContext'
import { useSearch } from '../context/SearchContext'
import { useWishlist } from '../context/WishlistContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const { getCartItemsCount } = useCart()
  const { exchangeRate, loading: rateLoading } = useCurrency()
  const { user, logout } = useAuth()
  const { updateSearchQuery } = useSearch()
  const { items: wishlistItems } = useWishlist()
  const navigate = useNavigate()
  const cartItemsCount = getCartItemsCount()
  const wishlistItemsCount = wishlistItems.length

  const handleSearch = (e) => {
    e.preventDefault()
    updateSearchQuery(searchInput)
    navigate('/search')
    setSearchInput('')
    setIsMenuOpen(false) // close menu after search
  }

  const handleLogout = () => {
    logout()
    setIsProfileMenuOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* NairaStore (always visible) */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 font-bold text-xl text-orange-600">
              MyStore-M
            </Link>
          </div>

          {/* Search Bar (desktop only) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 text-gray-400 hover:text-orange-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Desktop nav (hidden on mobile) */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-orange-600 transition-colors">
              Products
            </Link>
          </nav>

          {/* Right side icons/buttons */}
          <div className="flex items-center space-x-4">
            {/* Currency rate (desktop only in header) */}
            <div className="hidden md:flex items-center text-sm text-gray-600">
              {rateLoading ? (
                <span>Loading rates...</span>
              ) : (
                <span>$1 = ₦{exchangeRate}</span>
              )}
            </div>

            {/* Wishlist (desktop only in header) */}
            <Link to="/wishlist" className="hidden md:inline-block relative p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
            </Link>

            {/* Cart (always visible) */}
            <Link to="/cart" className="relative p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Auth (desktop only) */}
            <div className="hidden md:block">
              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </span>
                    </div>
                    <span className="hidden md:block text-sm text-gray-700">{user.name}</span>
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Link 
                    to="/login" 
                    className="px-3 py-1 text-sm text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-3 py-1 text-sm text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Hamburger (mobile only) */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-3">
            {/* Search bar (mobile only inside menu, top) */}
            <form onSubmit={handleSearch} className="relative px-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-4 top-2.5 text-gray-400 hover:text-orange-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/search" className="block px-3 py-2 text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>

            {/* Currency Rate */}
            <div className="px-3 py-2 text-sm text-gray-600">
              {rateLoading ? <span>Loading rates...</span> : <span>$1 = ₦{exchangeRate}</span>}
            </div>

            {/* Wishlist */}
            <Link to="/wishlist" className="flex items-center px-3 py-2 text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Wishlist
              {wishlistItemsCount > 0 && (
                <span className="ml-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
            </Link>

            {/* Auth */}
            {user ? (
              <>
                <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                  Profile
                </Link>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-orange-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
