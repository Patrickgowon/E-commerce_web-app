import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import RoomShowcase from './components/RoomShowcase';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Offers from './components/Offers';
import Footer from './components/Footer';
import Headers from './components/Headers';
import BookingPage from './pages/Bookingpage';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WalletPage from './pages/WalletPage';

// ✅ Scroll handler for #hash links (rooms, amenities, offers, etc.)
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0); // Default scroll to top
    }
  }, [hash]);

  return null;
};

// ✅ Wrapper for HomePage
const HomePage = () => (
  <>
    <Headers />
    <div className="font-sans bg-gray-50">
      <Hero />
      <RoomShowcase />
      <Amenities />
      <Testimonials />
      <Location />
      <Offers />
      <Footer />
    </div>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Booking Page */}
        <Route
          path="/book"
          element={
            <>
              <Headers />
              <BookingPage />
              <Footer />
            </>
          }
        />

        {/* Auth Pages */}
        <Route
          path="/register"
          element={
            <>
              <Headers />
              <Register />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Headers />
              <Login />
              <Footer />
            </>
          }
        />
        <Route 
        path="/room"  
        element={
          <>
            <Headers />
            <RoomShowcase />
          </>
        }/>

        {/* Dashboard (no site header/footer here) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<WalletPage />} />

        {/* Catch-all: if user refreshes wrong path → redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
