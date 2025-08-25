import React from 'react';

const BookingForm = ({ data, setData, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Select Your Dates</h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Check-In</label>
          <input
            type="date"
            value={data.checkIn}
            onChange={(e) => setData({ ...data, checkIn: e.target.value })}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Check-Out</label>
          <input
            type="date"
            value={data.checkOut}
            onChange={(e) => setData({ ...data, checkOut: e.target.value })}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Guests</label>
        <select
          value={data.guests}
          onChange={(e) => setData({ ...data, guests: e.target.value })}
          className="w-full p-3 border rounded-lg"
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Next: Select Room
      </button>
    </form>
  );
};

export default BookingForm;