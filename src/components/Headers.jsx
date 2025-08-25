import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          LUXE<span className="text-gray-800">HOTEL</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#rooms" className="text-gray-700 hover:text-blue-600">Rooms</a>
          <a href="#amenities" className="text-gray-700 hover:text-blue-600">Amenities</a>
          <a href="#location" className="text-gray-700 hover:text-blue-600">Location</a>
          <a href="#offers" className="text-gray-700 hover:text-blue-600">Offers</a>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </nav>

        {/* Book Now (desktop only) */}
        <div className="hidden md:block">
          <Link
            to="/book"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Drawer Menu (Left Side) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <nav className="mt-16 flex flex-col space-y-6 text-lg font-medium px-6">
          <a href="#rooms" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Rooms</a>
          <a href="#amenities" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Amenities</a>
          <a href="#location" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Location</a>
          <a href="#offers" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Offers</a>
          <Link to="/login" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link
            to="/book"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
