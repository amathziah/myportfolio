import React, { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-4 z-50 shadow-lg fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center max-w-full">
        {/* Left Section: Logo or Brand Name */}
        <div className="text-white font-semibold text-md lg:text-lg xl:text-xl whitespace-nowrap">
          <a 
            href="#home" 
            className="transition duration-300 text-white hover:text-green-400"
          >
            MyPortfolio
          </a>
        </div>

        {/* Center Navigation Links */}
        <ul className="flex justify-center items-center space-x-1 md:space-x-3 lg:space-x-2">
          {["home", "projects", "about", "contact"].map((section) => (
            <li key={section} className="flex-grow text-center">
              <a 
                href={`#${section}`} 
                className="text-white hover:text-green-400 transition duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:font-bold px-2 py-1 rounded-lg text-[2.5vw] md:text-[2vw] lg:text-lg xl:text-xl font-semibold whitespace-nowrap relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:rounded-lg">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Social Links */}
        <div className="relative">
          {/* Button to toggle the dropdown on smaller screens */}
          <button 
            onClick={toggleDropdown} 
            className="md:hidden flex justify-center items-center text-white text-[3vw] md:text-base font-bold"
          >
            <img 
              src="https://png.pngtree.com/element_our/png/20180912/link-icon-deisgn-vector-png_90400.jpg" 
              alt="Links" 
              className="w-6 h-6" // Adjust width and height here
            />
          </button>

          {/* Dropdown Menu for Social Links */}
          {isDropdownOpen && (
            <ul className="absolute right-0 bg-gray-800 text-white mt-2 rounded-lg shadow-lg z-50">
              {[
                { href: "https://www.linkedin.com/in/amathziah-j-832646214/", label: "LinkedIn" },
                { href: "https://github.com/amathziah", label: "GitHub" },
                { href: "https://leetcode.com/u/amathziah121/", label: "LeetCode" }
              ].map(({ href, label }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-purple-400 transition duration-300 text-[3vw] md:text-base font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:text-green-400" // Change hover color here
                    onClick={closeDropdown} // Close dropdown on link click
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Social Links for larger screens */}
          <ul className="hidden md:flex space-x-6">
            {[
              { href: "https://www.linkedin.com/in/amathziah-j-832646214/", label: "LinkedIn" },
              { href: "https://github.com/amathziah", label: "GitHub" },
              { href: "https://leetcode.com/u/amathziah121/", label: "LeetCode" }
            ].map(({ href, label }) => (
              <li key={label}>
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition duration-300 font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Responsive styles for mobile devices */}
      <style jsx>{`
        @media (max-width: 375px) {
          .text-[2.5vw] {
            font-size: 4vw; /* Adjust font size for very small screens */
          }

          nav {
            padding: 8px; /* Reduce padding on very small screens */
          }

          ul {
            justify-content: center; /* Center the links */
          }

          .space-x-2 {
            margin-left: 4px; /* Adjust spacing for smaller screens */
            margin-right: 4px; /* Adjust spacing for smaller screens */
          }

          .flex-grow {
            flex-basis: auto; /* Allow links to shrink but not wrap */
            flex-grow: 0; /* Prevent growing */
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;















































