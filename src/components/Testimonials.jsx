import React from 'react';

const testimonials = [
  {
    quote: "Best hotel experience ever! The staff was incredibly helpful.",
    author: "Sarah J.",
    rating: "★★★★★"
  },
  {
    quote: "The ocean-view suite was breathtaking. Will definitely return!",
    author: "Michael T.",
    rating: "★★★★★"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Reviews</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.author}</p>
                <p className="text-yellow-500">{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;