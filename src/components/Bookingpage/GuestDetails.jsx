import React from 'react';

const GuestDetails = ({ data, setData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      guestInfo: {
        ...data.guestInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Guest Information</h2>
      
      <form>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Special Requests</label>
          <textarea
            name="requests"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            rows="3"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next: Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestDetails;