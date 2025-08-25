import React from 'react';

const offers = [
  {
    title: "Summer Special",
    desc: "20% off all bookings in June",
    code: "SUMMER20"
  },
  {
    title: "Weekend Getaway",
    desc: "Free breakfast for weekend stays",
    code: "WEEKEND"
  }
];

const Offers = () => {
  return (
    <section id="offers" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((item, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-2 text-blue-800">{item.title}</h3>
              <p className="mb-4">{item.desc}</p>
              <p className="font-mono bg-blue-100 px-2 py-1 rounded inline-block">
                {item.code}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;