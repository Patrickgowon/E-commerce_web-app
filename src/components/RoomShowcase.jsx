import React from 'react';
import { Link } from "react-router-dom";

const RoomShowcase = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "$199/night",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      amenities: ["King Bed", "Ocean View", "Free Wi-Fi"]
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "$349/night",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      amenities: ["Separate Living Area", "Private Balcony", "Jacuzzi"]
    }
  ];

  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Rooms & Suites</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map(room => (
            <div key={room.id} className="rounded-xl overflow-hidden shadow-lg">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{room.price}</p>
                <ul className="mb-4">
                  {room.amenities.map((item, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <span className="mr-2">✓</span> {item}
                    </li>
                  ))}
                </ul>
              <Link to={'/book'} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;