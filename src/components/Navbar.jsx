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
    <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 p-4 z-50 shadow-lg fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center max-w-full">
        {/* Left Section: Logo or Brand Name */}
        <div className="text-white font-semibold text-md lg:text-lg xl:text-xl whitespace-nowrap">
          MyPortfolio
        </div>

        {/* Center Navigation Links */}
        <ul className="flex justify-center space-x-1 md:space-x-3 lg:space-x-2">
          {["home", "projects", "about", "contact"].map((section) => (
            <li key={section} className="flex-grow text-center">
              <a 
                href={`#${section}`} 
                className="text-white hover:text-gray-300 transition-transform duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:font-bold px-2 py-1 rounded-b-lg text-[2.5vw] md:text-[2vw] lg:text-lg xl:text-xl font-semibold whitespace-nowrap">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Social Links */}
        <div className="relative">
          {/* Button to toggle the dropdown on smaller screens */}
          <button onClick={toggleDropdown} className="md:hidden text-white text-[3vw] md:text-base font-bold">
            Links
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
                    className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-purple-400 transition duration-300 text-[3vw] md:text-base font-semibold"
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
                  className="text-white hover:text-gray-300 transition duration-300 font-semibold text-base lg:text-lg xl:text-xl whitespace-nowrap">
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













































