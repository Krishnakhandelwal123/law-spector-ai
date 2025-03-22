import React, { useEffect, useState } from "react";
import { auth } from "../Firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleclick = () => {
   navigate('/dashboard')
  };

  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Firebase Auth Listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div
      className={`fixed z-[999] w-full px-20 py-8 flex justify-between items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "backdrop-blur-lg bg-black/60" : "bg-transparent"}`}
    >
      <div className="ml-[-50px] text-5xl font-bold logo">LawSpector.AI</div>
      <div className="flex gap-8 cursor-pointer links">
        <a className="text-lg font-light" href="/">
          Home
        </a>
        <a className="text-lg font-light" href="/ai">
          Features
        </a>
        <a className="text-lg font-light" href="/bot">
          Legal Assistant
        </a>
        <a
          className="text-lg font-light"
          target="_blank"
          href="https://ailegalassistant.streamlit.app/judgmentPred"
        >
          Judgment Predictor
        </a>
        <a
          className="text-lg font-light"
          target="_blank"
          href="https://ailegalassistant.streamlit.app/docGen"
        >
          Document Generator
        </a>
        <a className="text-lg font-light" href="/contact">
          Contact Us
        </a>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
          
            <button
              onClick={handleLogout}
              className="px-4 py-1 text-lg font-light text-white bg-red-500 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <a
            className="px-4 py-1 text-lg font-light text-white bg-black rounded-md"
            href="/Login"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
