import React, { useEffect, useState } from 'react';
import { auth } from './Firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const [user, setUser] = useState(null); // State to store logged-in user data

  // Get the logged-in user from Firebase on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user data if logged in
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // If the user is not logged in, display a loading or error message
  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-xl text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6 lg:flex-row">
      {/* Left Sidebar: User Profile and Navigation */}
      <div className="w-full p-6 bg-gray-100 shadow-lg lg:w-1/4 rounded-xl">
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || '/default-user-avatar.jpg'} // Display the user's photo or a default avatar
            alt="User Avatar"
            className="object-cover w-32 h-32 mb-4 rounded-full"
          />
          <h2 className="text-2xl font-semibold">{user.displayName || 'John Doe'}</h2>
          <p className="text-gray-600">{user.email}</p> {/* Display user email */}
          <button className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Dashboard Navigation</h3>
          <ul>
            <li className="mb-2 text-lg text-gray-700 cursor-pointer hover:text-blue-600">Overview</li>
            <li className="mb-2 text-lg text-gray-700 cursor-pointer hover:text-blue-600">Legal Documents</li>
            <li className="mb-2 text-lg text-gray-700 cursor-pointer hover:text-blue-600">Case Research</li>
            <li className="mb-2 text-lg text-gray-700 cursor-pointer hover:text-blue-600">Predictions</li>
            <li className="mb-2 text-lg text-gray-700 cursor-pointer hover:text-blue-600">Account Settings</li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col w-full gap-6 lg:w-3/4">
        <h1 className="mb-6 text-3xl font-semibold">Welcome back, {user.displayName || 'John'}!</h1>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-medium">Analyze New Document</h2>
            <p className="mt-2 text-gray-600">Upload and analyze a new legal document for critical information.</p>
          </div>
          <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-medium">Create Legal Draft</h2>
            <p className="mt-2 text-gray-600">Generate and edit a legal draft based on your requirements.</p>
          </div>
          <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-medium">Check Compliance</h2>
            <p className="mt-2 text-gray-600">Run compliance checks to ensure your documents are aligned with regulations.</p>
          </div>
        </div>

        {/* Notifications or Recent Activity */}
        <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <h2 className="text-xl font-medium">Recent Activity</h2>
          <ul className="mt-4">
            <li className="flex justify-between text-gray-700">
              <span>Document Analysis Completed</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Case Research - Johnson v. Davis</span>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>New Compliance Check Result</span>
              <span className="text-sm text-gray-500">1 day ago</span>
            </li>
          </ul>
        </div>

        {/* Case Law Research */}
        <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <h2 className="text-xl font-medium">Case Law Research</h2>
          <p className="mt-2 text-gray-600">Search for relevant case law or access recent cases to inform your strategy.</p>
        </div>

        {/* Predictions */}
        <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <h2 className="text-xl font-medium">Court Case Predictions</h2>
          <p className="mt-2 text-gray-600">Leverage AI predictions for ongoing court cases and analyze potential outcomes.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
