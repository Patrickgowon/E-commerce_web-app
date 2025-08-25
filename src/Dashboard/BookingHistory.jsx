import React from 'react';

const BookingHistory = () => {
  const pastBookings = [
    {
      id: 'BK09876',
      hotel: 'Luxe Hotel Paris',
      room: 'Premium Suite',
      checkIn: '2023-05-15',
      checkOut: '2023-05-20',
      status: 'completed',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'BK08765',
      hotel: 'Luxe Hotel Tokyo',
      room: 'Executive Room',
      checkIn: '2023-03-10',
      checkOut: '2023-03-15',
      status: 'completed',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'BK07654',
      hotel: 'Luxe Hotel London',
      room: 'Deluxe Room',
      checkIn: '2023-01-05',
      checkOut: '2023-01-10',
      status: 'completed',
      rating: 4,
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

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Booking History</h2>
        <p className="text-sm text-gray-600">Your past stays with us</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {pastBookings.map((booking) => (
          <div key={booking.id} className="p-6">
            <div className="flex flex-col sm:flex-row">
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
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {booking.status}
                  </span>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Stay Dates</p>
                    <p className="text-sm font-medium text-gray-800">
                      {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Your Rating</p>
                    <div className="flex">
                      {renderStars(booking.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-3">
                  <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                    View Details
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                    Book Again
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
          View all history →
        </button>
      </div>
    </div>
  );
};

export default BookingHistory;