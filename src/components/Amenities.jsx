import React from 'react';

const amenities = [
  { icon: "🏊", title: "Infinity Pool", desc: "Stunning ocean-view pool" },
  { icon: "🍽", title: "Fine Dining", desc: "Award-winning restaurants" },
  { icon: "💆", title: "Spa & Wellness", desc: "Relaxing treatments" },
  { icon: "📶", title: "Free Wi-Fi", desc: "High-speed internet" }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Hotel Amenities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;