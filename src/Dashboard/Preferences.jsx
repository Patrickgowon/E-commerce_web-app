import React, { useState } from 'react';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newsletter: true,
    language: 'english',
    currency: 'USD',
    roomPreferences: {
      smoking: false,
      floor: 'high',
      bedType: 'king',
      accessibility: false
    }
  });

  const handleToggle = (key) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };

  const handleRoomPreferenceToggle = (key) => {
    setPreferences({
      ...preferences,
      roomPreferences: {
        ...preferences.roomPreferences,
        [key]: !preferences.roomPreferences[key]
      }
    });
  };

  const handleSelectChange = (key, value) => {
    setPreferences({
      ...preferences,
      [key]: value
    });
  };

  const handleRoomSelectChange = (key, value) => {
    setPreferences({
      ...preferences,
      roomPreferences: {
        ...preferences.roomPreferences,
        [key]: value
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Preferences</h2>
        <p className="text-sm text-gray-600">Customize your experience</p>
      </div>
      
      <div className="p-6 space-y-8">
        {/* Notification Preferences */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive booking confirmations and updates via email</p>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${preferences.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">SMS Notifications</p>
                <p className="text-sm text-gray-600">Receive text messages for important updates</p>
              </div>
              <button
                onClick={() => handleToggle('smsNotifications')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${preferences.smsNotifications ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${preferences.smsNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Newsletter</p>
                <p className="text-sm text-gray-600">Receive exclusive offers and promotions</p>
              </div>
              <button
                onClick={() => handleToggle('newsletter')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${preferences.newsletter ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${preferences.newsletter ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Language & Currency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2">Language</h3>
            <select
              value={preferences.language}
              onChange={(e) => handleSelectChange('language', e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="japanese">Japanese</option>
            </select>
          </div>
          
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2">Currency</h3>
            <select
              value={preferences.currency}
              onChange={(e) => handleSelectChange('currency', e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>
        </div>
        
        {/* Room Preferences */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4">Room Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Accessibility Features</p>
                <p className="text-sm text-gray-600">Request rooms with accessibility features</p>
              </div>
              <button
                onClick={() => handleRoomPreferenceToggle('accessibility')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${preferences.roomPreferences.accessibility ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${preferences.roomPreferences.accessibility ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Non-Smoking Room</p>
                <p className="text-sm text-gray-600">Prefer non-smoking rooms</p>
              </div>
              <button
                onClick={() => handleRoomPreferenceToggle('smoking')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${!preferences.roomPreferences.smoking ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${!preferences.roomPreferences.smoking ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Preferred Floor</h3>
                <select
                  value={preferences.roomPreferences.floor}
                  onChange={(e) => handleRoomSelectChange('floor', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="low">Lower Floor</option>
                  <option value="high">Higher Floor</option>
                  <option value="any">Any Floor</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Bed Type</h3>
                <select
                  value={preferences.roomPreferences.bedType}
                  onChange={(e) => handleRoomSelectChange('bedType', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="king">King Bed</option>
                  <option value="queen">Queen Bed</option>
                  <option value="twin">Twin Beds</option>
                  <option value="any">Any Type</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;