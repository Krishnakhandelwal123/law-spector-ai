import React, { useState } from "react";
import { registerUser, loginWithGoogle } from "./AuthService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Create an account to get started!
        </p>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">or sign up with</p>
          <button
            onClick={loginWithGoogle}
            className="flex items-center justify-center w-full px-4 py-2 mt-3 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            
            Sign Up with Google
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-green-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
