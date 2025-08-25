import React from "react";
import { Wallet, Calendar, User, LogOut, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Topbar */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">My Dashboard</h1>
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=User+Name"
            alt="profile"
            className="w-10 h-10 rounded-full border"
          />
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Welcome */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold">Welcome back, Patrick 👋</h2>
          <p className="text-gray-600">Here’s what’s happening with your account today.</p>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow flex flex-col">
            <div className="flex items-center gap-2 text-blue-500">
              <Wallet size={20} />
              <h3 className="font-medium">Wallet Balance</h3>
            </div>
            <p className="text-2xl font-bold mt-2">₦45,000</p>
            <button
              onClick={() => navigate("/wallet")}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Deposit
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col">
            <div className="flex items-center gap-2 text-green-500">
              <Calendar size={20} />
              <h3 className="font-medium">Upcoming Bookings</h3>
            </div>
            <p className="text-2xl font-bold mt-2">2</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
              View Bookings
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col">
            <div className="flex items-center gap-2 text-purple-500">
              <User size={20} />
              <h3 className="font-medium">Profile</h3>
            </div>
            <p className="text-2xl font-bold mt-2">Complete</p>
            <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
              Edit Profile
            </button>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span>Booked Deluxe Room</span>
                <span className="text-gray-500">Aug 20, 2025</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Wallet Deposit ₦10,000</span>
                <span className="text-gray-500">Aug 18, 2025</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Profile Updated</span>
                <span className="text-gray-500">Aug 15, 2025</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;