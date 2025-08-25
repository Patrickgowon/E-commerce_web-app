import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LUXE HOTEL</h3>
            <p>Luxury redefined in the heart of the city.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#rooms" className="hover:text-blue-400">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-blue-400">Amenities</a></li>
              <li><a href="#offers" className="hover:text-blue-400">Offers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p>reservations@luxehotel.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 rounded w-full mb-2 text-gray-800"
            />
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2023 LuxeHotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;