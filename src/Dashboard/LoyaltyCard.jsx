import React from 'react';

const LoyaltyCard = () => {
  const userTier = 'Gold';
  const points = 4500;
  const nextTier = 'Platinum';
  const pointsNeeded = 1000;
  const progress = (points / (points + pointsNeeded)) * 100;

  const benefits = [
    'Free room upgrades when available',
    'Late checkout until 2 PM',
    'Welcome amenity upon arrival',
    'Complimentary breakfast for two',
    'Exclusive member rates'
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow overflow-hidden">
      <div className="p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-medium">Loyalty Program</h2>
            <p className="text-sm opacity-90">Your current status</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-800 bg-opacity-30">
            {userTier} Member
          </span>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>{points} points</span>
            <span>{points + pointsNeeded} points for {nextTier}</span>
          </div>
          <div className="w-full bg-yellow-700 bg-opacity-50 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full" 
              style={{ width: `${progress}% `}}
            ></div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Your Benefits</h3>
          <ul className="text-sm space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">✓</span> {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full bg-white text-yellow-700 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
          View Rewards Catalog
        </button>
      </div>
    </div>
  );
};

export default LoyaltyCard;