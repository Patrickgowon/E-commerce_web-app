import React from 'react';

const BookingSummary = ({ data }) => {
  const calculateTotal = () => {
    if (!data.selectedRoom) return 0;
    
    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    return nights * data.selectedRoom.price;
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
      
      {data.checkIn && (
        <div className="mb-4">
          <p className="font-semibold">Dates</p>
          <p>{data.checkIn} to {data.checkOut}</p>
        </div>
      )}

      {data.selectedRoom && (
        <div className="mb-4">
          <p className="font-semibold">Room</p>
          <p>{data.selectedRoom.name}</p>
          <p>${data.selectedRoom.price}/night</p>
        </div>
      )}

      <div className="border-t pt-4">
        <p className="font-semibold">Total</p>
        <p className="text-xl font-bold">${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default BookingSummary;