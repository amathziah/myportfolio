import React from 'react';
import About from '../components/About';
import Projects from './Projects';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 text-white min-h-screen max-w-screen flex flex-col shadow-lg">
      <header 
        id="home" 
        className="flex-grow flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12 mt-20 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 rounded-lg shadow-lg w-full">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white transition-transform transform hover:scale-105">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-md sm:max-w-lg lg:max-w-2xl">
          Discover my projects and skills. Let's create something amazing together!
        </p>
        <a 
          href="#projects" 
          className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-400 text-gray-900 font-semibold rounded-lg transition-colors duration-300 hover:bg-green-500">
          View My Projects
        </a>
      </header>

      <section 
        id="projects" 
        className="p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg my-6 w-full max-w-screen-md lg:max-w-screen-lg mx-auto blinking-border"
        style={{ paddingTop: '80px' }}>
        <Projects />
      </section>

      <TechStack />

      <section 
        id="about" 
        className="flex justify-center items-center p-4 sm:p-6 md:p-8 rounded-lg shadow-lg my-6 w-full max-w-screen-md lg:max-w-screen-lg mx-auto">
          <About />
      </section>

      <section 
        id="contact" 
        className="flex justify-center items-center p-4 sm:p-6 md:p-8 rounded-lg shadow-lg my-6 w-full max-w-screen-md lg:max-w-screen-lg mx-auto"
        style={{ paddingTop: '80px' }}>
        <div className="p-4 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg w-full blinking-border">
          <Contact />
        </div>
      </section>

      <footer className="text-center p-4 bg-gray-900 text-gray-400 w-full">
        &copy; 2024 Amathziah. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;





