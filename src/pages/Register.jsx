// src/pages/Register.jsx
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/button";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ✅ Replace with backend API
    console.log("Registering user:", form);

    // Example: await axios.post("/api/register", form)
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <Input label="Name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe"/>
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com"/>
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="********"/>
        <Button type="submit">Register</Button>
        <p className="text-sm mt-4 text-center">
          Already have an account? 
          <span 
            onClick={() => navigate("/login")} 
            className="text-blue-600 cursor-pointer ml-1"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
