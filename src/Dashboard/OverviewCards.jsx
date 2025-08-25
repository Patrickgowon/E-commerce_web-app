import React from 'react';

const OverviewCards = () => {
  const stats = [
    { label: 'Upcoming Stays', value: 2, icon: '🏨', color: 'blue' },
    { label: 'Loyalty Points', value: 4500, icon: '⭐', color: 'yellow' },
    { label: 'Total Bookings', value: 8, icon: '📅', color: 'green' },
    { label: 'Reviews', value: 5, icon: '✍', color: 'purple' },
  ];

  const colorMap = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${colorMap[stat.color]} bg-opacity-10`}>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;