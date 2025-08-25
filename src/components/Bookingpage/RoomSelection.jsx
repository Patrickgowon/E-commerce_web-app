import React from 'react';

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 199,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 2,
    amenities: ["King Bed", "Ocean View", "Free Wi-Fi"],
  },
  {
    id: 2,
    name: "Executive Suite",
    price: 349,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 4,
    amenities: ["Separate Living Area", "Private Balcony", "Jacuzzi"],
  },
];

const RoomSelection = ({ data, setData, nextStep, prevStep }) => {
  const selectRoom = (room) => {
    setData({ ...data, selectedRoom: room });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Choose Your Room</h2>
      
      <div className="space-y-4 mb-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            onClick={() => selectRoom(room)}
            className={`p-4 border rounded-lg cursor-pointer transition-all 
              ${data.selectedRoom?.id === room.id ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'}`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <img src={room.image} alt={room.name} className="w-full md:w-48 h-40 object-cover rounded" />
              <div>
                <h3 className="text-xl font-bold">{room.name}</h3>
                <p className="text-blue-600 font-semibold">${room.price}/night</p>
                <ul className="mt-2">
                  {room.amenities.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="mr-2">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
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
          disabled={!data.selectedRoom}
          className={`px-6 py-2 rounded-lg ${!data.selectedRoom ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
        >
          Next: Guest Details
        </button>
      </div>
    </div>
  );
};

export default RoomSelection;