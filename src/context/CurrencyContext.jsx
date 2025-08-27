// context/CurrencyContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {
  const [exchangeRate, setExchangeRate] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchExchangeRate = async () => {
    try {
      setLoading(true)
      // Using a free currency API - replace with a more reliable one in production
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/USD`
      )
      setExchangeRate(response.data.rates.NGN || 0)
      setError(null)
    } catch (err) {
      setError('Failed to fetch exchange rate')
      console.error('Exchange rate error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchExchangeRate()
    // Refresh exchange rate every hour
    const interval = setInterval(fetchExchangeRate, 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const convertToNaira = (usdAmount) => {
    return (usdAmount * exchangeRate).toFixed(2)
  }

  return (
    <CurrencyContext.Provider value={{
      exchangeRate,
      loading,
      error,
      convertToNaira
    }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}

export default CurrencyContext