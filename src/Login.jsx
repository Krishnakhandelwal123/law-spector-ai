import React, { useState } from "react";
import { loginUser, loginWithGoogle } from "./AuthService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <p className="mx-4 text-sm text-gray-500">OR</p>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          onClick={loginWithGoogle}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
         
          Continue with Google
        </button>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="font-medium text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
