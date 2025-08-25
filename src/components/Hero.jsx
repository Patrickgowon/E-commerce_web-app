import React from 'react';
import { Link } from "react-router-dom";
import BookingWidget from './BookingWidget';

const Hero = () => {
  return (
    <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Experience Luxury Redefined</h1>
            <p className="text-xl mb-8">Your perfect getaway in the heart of the city</p>
            <Link to={'/room'} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg">
              Explore Rooms
            </Link>
          </div>
        </div>
        <BookingWidget />
      </div>
    </section>
  );
};

export default Hero;