// src/pages/Login.jsx
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/button";



const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in user:", form);
    // ✅ Replace with backend API
    // Example: const res = await axios.post("/api/login", form);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com"/>
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="********"/>
        <Button type="submit">Login</Button>
        <p className="text-sm mt-4 text-center">
          Don't have an account? 
          <span onClick={() => navigate("/register")} className="text-blue-600 cursor-pointer ml-1">
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
