// context/SearchContext.jsx
import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'featured',
    rating: 'all'
  })
  const [isSearching, setIsSearching] = useState(false)

  // Mock search function - in a real app, this would call your search API
  const performSearch = (query, filterOptions = filters) => {
    setIsSearching(true)
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock product data
      const mockProducts = [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 99.99,
          category: "electronics",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          rating: 4.5
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 199.99,
          category: "electronics",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          rating: 4.2
        },
        {
          id: 3,
          name: "Running Shoes",
          price: 89.99,
          category: "fashion",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          rating: 4.7
        },
        {
          id: 4,
          name: "Coffee Maker",
          price: 49.99,
          category: "home",
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          rating: 4.0
        },
        {
          id: 5,
          name: "Bluetooth Speaker",
          price: 79.99,
          category: "electronics",
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          rating: 4.3
        },
        {
          id: 6,
          name: "Desk Lamp",
          price: 29.99,
          category: "home",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          rating: 4.1
        }
      ]

      // Filter products based on search query and filters
      let filteredProducts = mockProducts
      
      // Apply text search
      if (query) {
        filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        )
      }
      
      // Apply category filter
      if (filterOptions.category !== 'all') {
        filteredProducts = filteredProducts.filter(
          product => product.category === filterOptions.category
        )
      }
      
      // Apply price range filter
      if (filterOptions.priceRange !== 'all') {
        switch (filterOptions.priceRange) {
          case 'under25':
            filteredProducts = filteredProducts.filter(product => product.price < 25)
            break
          case '25-50':
            filteredProducts = filteredProducts.filter(
              product => product.price >= 25 && product.price <= 50
            )
            break
          case '50-100':
            filteredProducts = filteredProducts.filter(
              product => product.price > 50 && product.price <= 100
            )
            break
          case 'over100':
            filteredProducts = filteredProducts.filter(product => product.price > 100)
            break
          default:
            break
        }
      }
      
      // Apply rating filter
      if (filterOptions.rating !== 'all') {
        const minRating = parseInt(filterOptions.rating)
        filteredProducts = filteredProducts.filter(
          product => Math.floor(product.rating) >= minRating
        )
      }
      
      // Apply sorting
      switch (filterOptions.sortBy) {
        case 'priceLowHigh':
          filteredProducts.sort((a, b) => a.price - b.price)
          break
        case 'priceHighLow':
          filteredProducts.sort((a, b) => b.price - a.price)
          break
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating)
          break
        case 'newest':
          // Assuming newer products have higher IDs
          filteredProducts.sort((a, b) => b.id - a.id)
          break
        default:
          // Featured (default) - no sorting needed
          break
      }
      
      setSearchResults(filteredProducts)
      setIsSearching(false)
    }, 500) // Simulate network delay
  }

  const updateSearchQuery = (query) => {
    setSearchQuery(query)
    if (query.trim()) {
      performSearch(query)
    } else {
      setSearchResults([])
    }
  }

  const updateFilters = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    performSearch(searchQuery, updatedFilters)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    setFilters({
      category: 'all',
      priceRange: 'all',
      sortBy: 'featured',
      rating: 'all'
    })
  }

  return (
    <SearchContext.Provider value={{
      searchQuery,
      searchResults,
      filters,
      isSearching,
      updateSearchQuery,
      updateFilters,
      performSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

export default SearchContext