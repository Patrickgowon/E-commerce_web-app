// RewardsPage.jsx
import React from 'react';


import DashboardLayout from '../components/Dashboard/DashboardLayout';
import LoyaltyCard from '../components/Dashboard/LoyaltyCard';

const RewardsPage = () => {
  return (
    <DashboardLayout activeTab="rewards">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Loyalty Rewards</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <LoyaltyCard />
        </div>
        
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Rewards Catalog</h2>
          <p className="text-gray-600 mb-6">Redeem your points for exclusive rewards and experiences.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                2,500 points
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Free Night Stay</h3>
              <p className="text-sm text-gray-600">Redeem points for a complimentary night at any Luxe Hotel.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                1,000 points
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Spa Treatment</h3>
              <p className="text-sm text-gray-600">Enjoy a relaxing 60-minute spa treatment of your choice.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                750 points
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Dining Credit</h3>
              <p className="text-sm text-gray-600">$50 credit to use at any of our hotel restaurants.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                500 points
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Room Upgrade</h3>
              <p className="text-sm text-gray-600">Upgrade to the next room category upon availability.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RewardsPage;