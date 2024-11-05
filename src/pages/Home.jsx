import React from 'react';
import About from '../components/About';
import Projects from './Projects';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col shadow-lg">
      <header 
  id="home" 
  className="flex-grow flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 lg:p-12 mt-16 md:mt-20 bg-gray-800 rounded-lg shadow-lg w-full max-w-screen-lg mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
  
  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-300 transform hover:scale-110">
  {Array.from("Welcome to My Portfolio").map((letter, index) => (
    <span key={index} className="blink-animation" style={{ animationDelay: `${index * 0.1}s` }}>
      {letter}
    </span>
  ))}
</h1>


  
  <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl transition-opacity duration-300 delay-200 hover:opacity-80">
    Discover my projects and skills. Let's create something amazing together!
  </p>
  
  <a 
    href="#projects" 
    className="mt-6 px-4 py-2 sm:px-5 sm:py-3 bg-green-500 text-gray-900 font-semibold rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-green-600 hover:shadow-lg">
    View My Projects
  </a>
</header>


      <section 
        id="projects" 
        className="p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg my-6 w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg mx-auto blinking-border scroll-offset">
        <Projects />
      </section>

      <TechStack />

      <section 
        id="about" 
        className="flex justify-center items-center p-4 sm:p-6 md:p-8 rounded-lg shadow-lg my-6 w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg mx-auto scroll-offset">
        <About />
      </section>

      <section 
  id="contact" 
  className="flex flex-col sm:flex-row justify-center items-stretch p-4 sm:p-6 md:p-8 rounded-lg shadow-lg my-6 w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg mx-auto scroll-offset space-y-6 sm:space-y-0 sm:space-x-6">
  
  {/* Contact Section Left */}
  <div className="flex-1 p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg w-full min-h-[300px]"> 
    <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
    <Contact />
  </div>

  {/* Contact Section Right */}
  {/* Contact Section Right */}
<div className="flex-1 p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg w-full min-h-[300px]"> 

{/* Top Part: Contact Details */}
<div className="mb-6">
  <h2 className="text-xl font-bold text-white mb-4">Additional Information</h2>
  <p className="text-gray-300 mb-4">
    If you have any questions or want to collaborate, feel free to reach out to me via the contact form on the left or through my social media channels!
  </p>
  
  <h3 className="text-lg font-semibold text-white mb-2">Contact Details</h3>
  <ul className="mb-4 space-y-2">
    <li>
      <strong>Email:</strong> <a href="mailto:amathziah@gmail.com" className="text-green-400 hover:underline">amathziah@gmail.com</a>
    </li>
    <li>
      <strong>Phone:</strong> +91-7356463272
    </li>
    <li>
      <strong>Location:</strong> Munnar, Kerala
    </li>
  </ul>
</div>

{/* Bottom Part: Social Media Links */}
<div>
  <h3 className="text-lg font-semibold text-white mb-2">Connect with Me</h3>
  <ul className="space-y-2">
    <li>
      <a 
        href="https://www.linkedin.com/in/amathziah-j-832646214/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-green-400 hover:underline">
        LinkedIn
      </a>
    </li>
    <li>
      <a 
        href="https://github.com/amathziah" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-green-400 hover:underline">
        GitHub
      </a>
    </li>
    <li>
      <a 
        href="https://leetcode.com/u/amathziah121/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-green-400 hover:underline">
        LeetCode
      </a>
    </li>
  </ul>
</div>
</div>

  
</section>

  


      <footer className="text-center p-4 bg-gray-900 text-gray-400 w-full">
        &copy; 2024 Amathziah. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;






