import React, { useState } from 'react';

const Navi = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>

        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button id="mobile-menu-button" className="text-white" onClick={toggleMobileMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <a href="#" className="block text-white py-2">
          Home
        </a>
        <a href="#" className="block text-white py-2">
          About
        </a>
        <a href="#" className="block text-white py-2">
          Services
        </a>
        <a href="#" className="block text-white py-2">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navi;
