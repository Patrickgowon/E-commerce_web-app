import React from 'react';

const Location = () => {
  return (
    <section id="location" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-600">Google Maps Embed Here</p>
          </div>
          <p className="text-center text-gray-700">
            123 Ocean Drive, Miami Beach, FL 33139
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;