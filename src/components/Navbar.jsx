import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 p-6 fixed w-full z-50 shadow-lg"> {/* New Gradient Background */}
      <div className="flex justify-between items-center">
        <ul className="flex space-x-4">
          {["home", "projects", "about", "contact"].map((section) => (
            <li key={section} className="relative group">
              <a 
                href={`#${section}`} 
                className="text-white hover:text-gray-300 relative z-10 transition-transform duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:font-bold px-4 py-2 rounded-b-lg font-semibold">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-b-lg animate-pulse transition-all duration-300"></div>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4">
          <li>
            <a 
              href="https://www.linkedin.com/in/amathziah-j-832646214/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 font-semibold">
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/amathziah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 font-semibold">
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://leetcode.com/u/amathziah121/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 font-semibold">
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;















