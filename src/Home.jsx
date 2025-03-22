import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';

import Featured from './components/Featured';

import Project from './components/Project';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const navigate = useNavigate();

 const handleclick=()=>{
  navigate('/dashboard')
 }
  
  return (
    <div className="w-full min-h-screen overflow-hidden text-white bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <Featured />
      <Project />
      <About />
      <Footer />

   
      <div
      onClick={handleclick}
       className="fixed z-50 bottom-9 right-7">
        <img
          className="w-16 h-16 transition duration-300 border-4 border-gray-300 rounded-full shadow-lg cursor-pointer hover:scale-110 hover:shadow-xl"
          src="./src/assets/download.jpg" 
          alt="User Logo"
          title="Click to go to profile"
        />
      </div>
    </div>
  );
};

export default Home;
