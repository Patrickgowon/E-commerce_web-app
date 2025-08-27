// pages/SearchResults.jsx
import { useState, useEffect } from 'react'
import { useSearch } from '../context/SearchContext'
import ProductCard from '../components/ProductCard'

const SearchResults = () => {
  const { searchQuery, filters, updateFilters } = useSearch()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: "Wireless Headphones", price: 99.99, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80", rating: 4.5 },
      { id: 2, name: "Smart Watch", price: 199.99, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80", rating: 4.2 },
      { id: 3, name: "Running Shoes", price: 89.99, category: "fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80", rating: 4.7 },
      { id: 4, name: "Coffee Maker", price: 49.99, category: "home", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80", rating: 4.0 },
      { id: 5, name: "Bluetooth Speaker", price: 79.99, category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=80", rating: 4.3 },
      { id: 6, name: "Desk Lamp", price: 29.99, category: "home", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80", rating: 4.1 }
    ]

    const filtered = searchQuery 
      ? mockProducts.filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : mockProducts

    setProducts(filtered)
    setFilteredProducts(filtered)
    setLoading(false)
  }, [searchQuery])

  useEffect(() => {
    let result = [...products]
    
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category)
    }
    
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under25': result = result.filter(product => product.price < 25); break
        case '25-50': result = result.filter(product => product.price >= 25 && product.price <= 50); break
        case '50-100': result = result.filter(product => product.price > 50 && product.price <= 100); break
        case 'over100': result = result.filter(product => product.price > 100); break
        default: break
      }
    }
    
    switch (filters.sortBy) {
      case 'priceLowHigh': result.sort((a, b) => a.price - b.price); break
      case 'priceHighLow': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      default: break
    }
    
    setFilteredProducts(result)
  }, [filters, products])

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Kitchen' }
  ]

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under25', name: 'Under $25' },
    { id: '25-50', name: '$25 - $50' },
    { id: '50-100', name: '$50 - $100' },
    { id: 'over100', name: 'Over $100' }
  ]

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'priceLowHigh', name: 'Price: Low to High' },
    { id: 'priceHighLow', name: 'Price: High to Low' },
    { id: 'rating', name: 'Top Rated' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* ✅ Mobile Filter Button */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            Filters
          </button>
        </div>

        {/* ✅ Desktop Filters Sidebar */}
        <div className="hidden md:block md:w-64">
          <FilterContent
            categories={categories}
            priceRanges={priceRanges}
            sortOptions={sortOptions}
            filters={filters}
            updateFilters={updateFilters}
          />
        </div>

        {/* ✅ Mobile Drawer */}
        <div
          className={`absolute left-0 w-3/4 max-w-xs bg-white h-[calc(100vh-64px)] p-4 overflow-y-auto shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ top: "64px" }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="text-gray-600"
            >
              ✕
            </button>
          </div>

          <FilterContent
            categories={categories}
            priceRanges={priceRanges}
            sortOptions={sortOptions}
            filters={filters}
            updateFilters={(newFilter) => {
              updateFilters(newFilter);
              setMobileFiltersOpen(false);
            }}
          />
        </div>

        {/* ✅ Products Grid */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
            <span className="text-gray-500 text-lg font-normal ml-2">
              ({filteredProducts.length} products)
            </span>
          </h1>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                  <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-6 rounded w-2/3 mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const FilterContent = ({ categories, priceRanges, sortOptions, filters, updateFilters }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sticky top-24 md:static">
    <h2 className="font-semibold text-lg mb-4">Filters</h2>

    <div className="mb-6">
      <h3 className="font-medium mb-2">Category</h3>
      <div className="space-y-2">
        {categories.map(category => (
          <label key={category.id} className="flex items-center">
            <input
              type="radio"
              name="category"
              value={category.id}
              checked={filters.category === category.id}
              onChange={() => updateFilters({ category: category.id })}
              className="mr-2 text-orange-600 focus:ring-orange-500"
            />
            <span>{category.name}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h3 className="font-medium mb-2">Price Range</h3>
      <div className="space-y-2">
        {priceRanges.map(range => (
          <label key={range.id} className="flex items-center">
            <input
              type="radio"
              name="priceRange"
              value={range.id}
              checked={filters.priceRange === range.id}
              onChange={() => updateFilters({ priceRange: range.id })}
              className="mr-2 text-orange-600 focus:ring-orange-500"
            />
            <span>{range.name}</span>
          </label>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-medium mb-2">Sort By</h3>
      <div className="space-y-2">
        {sortOptions.map(option => (
          <label key={option.id} className="flex items-center">
            <input
              type="radio"
              name="sortBy"
              value={option.id}
              checked={filters.sortBy === option.id}
              onChange={() => updateFilters({ sortBy: option.id })}
              className="mr-2 text-orange-600 focus:ring-orange-500"
            />
            <span>{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
)

export default SearchResults
