import React from 'react';

const BookingWidget = () => {
  return (
    <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl w-80">
      <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Check-In</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Check-Out</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Guests</label>
          <select className="w-full p-2 border rounded">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>Family (2+2)</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default BookingWidget;