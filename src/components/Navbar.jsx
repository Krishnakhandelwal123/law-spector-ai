import React, { useEffect, useState } from 'react';
const Navbar = () => {
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY; 
    if (currentScrollY > lastScrollY) { 
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50); // Change this value to adjust when to apply glassy effect
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


// "About Us","AI Costumization", "Sales", "Analytics", "Marketing", "Contact Us" "ml-32"text-lg font-light text-white 

  
  return (
    <div 
      className={`fixed z-[999] w-full px-20 py-8 flex justify-between items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'backdrop-blur-lg bg-black/60' : 'bg-transparent'}`}
    >
      <div className="text-4xl text-white logo">StoreCraft</div>
      <div className="flex gap-8 cursor-pointer links">
        <a className='text-lg font-light' href="">Home</a>
        <a className='text-lg font-light' href="">About Us</a>
        <a className='text-lg font-light' href="">AI Costumization</a>
        <a className='text-lg font-light' href="">Sales</a>
        <a className='text-lg font-light' href="">Analytics</a>
        <a className='text-lg font-light' href="">Marketing</a>
        <a className='ml-32 text-lg font-light' href="">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
