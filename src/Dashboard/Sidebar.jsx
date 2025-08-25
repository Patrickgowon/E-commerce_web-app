import React from 'react';

const Sidebar = ({ activeTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'bookings', label: 'My Bookings', icon: '📅' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'preferences', label: 'Preferences', icon: '⚙' },
    { id: 'rewards', label: 'Rewards', icon: '🎁' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-blue-800 transform transition duration-300 ease-in-out
        lg:static lg:inset-0 lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-center h-16 bg-blue-900">
          <span className="text-white text-xl font-bold">LUXE HOTEL</span>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center px-6 py-3 text-white text-sm font-medium
                ${activeTab === item.id ? 'bg-blue-700 bg-opacity-25' : 'hover:bg-blue-700 hover:bg-opacity-25'}`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
          
          <div className="px-6 py-3 mt-8">
            <button className="flex items-center text-red-300 text-sm font-medium hover:text-red-100">
              <span className="mr-3 text-lg">🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;