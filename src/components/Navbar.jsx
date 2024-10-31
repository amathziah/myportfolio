import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 p-2 lg:p-4 z-50 shadow-lg fixed top-0 left-0 w-screen">
      <div className="flex justify-between items-center flex-nowrap">
        {/* Left Section: Logo or Brand Name */}
        <div className="text-white font-semibold text-[1.1rem] lg:text-[1.25rem] whitespace-nowrap">MyPortfolio</div>

        {/* Center Section: Navigation Links */}
        <ul className="flex space-x-2 flex-grow justify-center overflow-x-auto">
          {["home", "projects", "about", "contact"].map((section) => (
            <li key={section} className="relative group">
              <a 
                href={`#${section}`} 
                className="text-white hover:text-gray-300 relative z-10 transition-transform duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:font-bold px-2 py-1 rounded-b-lg text-[0.85rem] lg:text-[0.9rem] font-semibold">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-b-lg animate-pulse transition-all duration-300"></div>
            </li>
          ))}
        </ul>

        {/* Right Section: Social Links */}
        <ul className="flex space-x-2 overflow-x-auto">
          <li>
            <a 
              href="https://www.linkedin.com/in/amathziah-j-832646214/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 font-semibold text-[0.85rem] lg:text-[0.9rem] whitespace-nowrap">
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/amathziah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 font-semibold text-[0.85rem] lg:text-[0.9rem] whitespace-nowrap">
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/u/amathziah121/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 font-semibold text-[0.85rem] lg:text-[0.9rem] whitespace-nowrap">
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



































