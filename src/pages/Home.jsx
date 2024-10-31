import React from 'react';
import About from '../components/About';
import Projects from './Projects';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 text-white min-h-screen flex flex-col shadow-lg">
       <header 
    id="home" 
    className="flex-grow flex flex-col items-center justify-center text-center p-8 mt-20 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold text-white transition-transform transform hover:scale-105">
        Welcome to My Portfolio
    </h1>
    <p className="mt-4 text-lg text-gray-200 max-w-lg">
        Discover my projects and skills. Let's create something amazing together!
    </p>
    <a 
        href="#projects" 
        className="mt-6 px-6 py-3 bg-green-400 text-gray-900 font-semibold rounded-lg transition-colors duration-300 hover:bg-green-500">
        View My Projects
    </a>
</header>




      <section id="projects" className="p-8 bg-gray-800 rounded-lg shadow-lg mx-auto my-6 max-w-4xl" style={{ paddingTop: '80px' }}>
        <Projects />
      </section>
      <TechStack />

      <section id="about" className="p-8 bg-gray-800 rounded-lg shadow-lg mx-auto my-6 max-w-4xl" style={{ paddingTop: '80px' }}>
        <About />
      </section>

      <section id="contact" className="p-8 bg-gray-800 rounded-lg shadow-lg mx-auto my-6 max-w-2xl" style={{ paddingTop: '80px' }}>
        <Contact />
      </section>

      <footer className="text-center p-4 bg-gray-900 text-gray-400">
        &copy; 2024 Amathziah. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;



