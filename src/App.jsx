import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./Firebase"; // Firebase auth instance
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./components/About";
import AI from "./components/AI";
import Analysis from "./components/Analysis";
import Market from "./components/Market";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Community from "./Community";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/market" element={<Market />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/bot" element={<Chatbot />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
