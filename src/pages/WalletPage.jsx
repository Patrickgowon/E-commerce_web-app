import React, { useState } from "react";

const WalletPage = () => {
  const [balance, setBalance] = useState(45000); // initial demo balance
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Later: send this to backend API instead
    setBalance(balance + Number(amount));
    setAmount("");
    alert(`₦${amount} deposited successfully!`);

  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">My Wallet</h1>

        {/* Balance */}
        <div className="bg-blue-50 text-blue-700 p-4 rounded-lg mb-6">
          <p className="text-sm">Current Balance</p>
          <p className="text-3xl font-bold">₦{balance.toLocaleString()}</p>
        </div>

        {/* Deposit Form */}
        <form onSubmit={handleDeposit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Deposit Amount (₦)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Deposit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WalletPage;