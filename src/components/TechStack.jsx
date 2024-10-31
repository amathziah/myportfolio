import React from 'react';
import './Marquee.css'; // Ensure this file contains the necessary CSS for marquee

const techStackData = [
  { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png' },
  { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Express.js', image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
  { name: 'MongoDB', image: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
  { name: 'MySQL', image: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' },
  { name: 'Tailwind CSS', image: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg' },
  { name: 'Java', image: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg' },
  { name: 'Python', image: 'https://banner2.cleanpng.com/20181128/cbr/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-1713916787253.webp' },
  { name: 'DSA', image: 'https://codersdaily.in/media/courses/download.png' },
  { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
];

const TechStack = () => {
  const itemTemplate = (tech) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 group h-24 w-24 mx-2 border border-gray-300 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50 transition-opacity duration-500 group-hover:opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full bg-gray-800 rounded-lg border-4 border-transparent group-hover:border-blue-500 transition-all duration-500">
          <img src={tech.image} alt={tech.name} className="mb-2" style={{ width: '40px', height: '40px' }} />
          <h3 className="text-white text-center text-xs">{tech.name}</h3>
        </div>
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 animate-pulse transition-all duration-500"></div>
      </div>
    );
  };

  return (
    <section className="p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg mx-auto my-6 w-full max-w-screen-xl">
      <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">Tech Stack</h2>

      <div className="marquee-container"> {/* New container for padding */}
        <div className="marquee">
          <div className="marquee__inner mt-4">
            {techStackData.map((tech, index) => (
              <div className="marquee__item" key={index}>
                {itemTemplate(tech)}
              </div>
            ))}
            {techStackData.map((tech, index) => (
              <div className="marquee__item" key={index + techStackData.length}>
                {itemTemplate(tech)}
              </div>
            ))} {/* Duplicate for continuous scrolling */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;











