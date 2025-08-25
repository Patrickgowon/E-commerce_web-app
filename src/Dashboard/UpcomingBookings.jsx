import React from 'react';

const UpcomingBookings = () => {
  const bookings = [
    {
      id: 'BK12345',
      hotel: 'Luxe Hotel Miami',
      room: 'Deluxe Ocean View',
      checkIn: '2023-08-20',
      checkOut: '2023-08-25',
      guests: 2,
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'BK12346',
      hotel: 'Luxe Hotel New York',
      room: 'Executive Suite',
      checkIn: '2023-09-10',
      checkOut: '2023-09-15',
      guests: 3,
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Upcoming Bookings</h2>
        <p className="text-sm text-gray-600">Your upcoming stays</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {bookings.map((booking) => (
          <div key={booking.id} className="p-6 flex flex-col sm:flex-row">
            <div className="flex-shrink-0 sm:mr-6 mb-4 sm:mb-0">
              <img
                src={booking.image}
                alt={booking.hotel}
                className="w-32 h-20 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{booking.hotel}</h3>
                  <p className="text-sm text-gray-600">{booking.room}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {booking.status}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Check-in</p>
                  <p className="text-sm font-medium text-gray-800">{formatDate(booking.checkIn)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Check-out</p>
                  <p className="text-sm font-medium text-gray-800">{formatDate(booking.checkOut)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Guests</p>
                  <p className="text-sm font-medium text-gray-800">{booking.guests} {booking.guests > 1 ? 'Guests' : 'Guest'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Booking ID</p>
                  <p className="text-sm font-medium text-gray-800">{booking.id}</p>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-3">
                <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                  View Details
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                  Modify Booking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
          View all bookings →
        </button>
      </div>
    </div>
  );
};

export default UpcomingBookings;