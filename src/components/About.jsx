import React from 'react';

function About() {
  return (
    <div className="group relative p-6 md:p-8"> {/* Adjusted padding for different devices */}
      <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-gray-400 animate-pulse transition-all duration-500"></div> {/* Outer border effect */}

      {/* Updated section with a different gray gradient background */}
      <section className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-white leading-relaxed mb-4">
          Hello! I'm Amathziah, a passionate web developer with a focus on creating dynamic and responsive web applications.
          With a background in Computer Science and AI, I aim to blend technology with creativity to deliver impactful user experiences.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-white">Skills</h3>
        {/* Skills grid section with hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white mb-4">
          {[
            { emoji: '🌐', skill: 'React.js and its ecosystem' },
            { emoji: '💻', skill: 'Node.js and Express.js' },
            { emoji: '📊', skill: 'MongoDB and MySQL for database management' },
            { emoji: '🎨', skill: 'Tailwind CSS for styling' },
            { emoji: '🔒', skill: 'JWT Authentication for secure user management' },
            // Add more skills here as needed
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-gray-800 rounded-lg shadow transition-transform transform hover:scale-105 justify-center">
              <span className="mr-2">{item.emoji}</span>
              <span>{item.skill}</span>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-white">Experience</h3>
        <p className="text-white leading-relaxed mb-4">
          I have worked on several projects, including a responsive e-commerce web application and a chat platform 
          that connects users based on their interests. These experiences have honed my skills in both frontend and backend development.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-white">Personal Interests</h3>
        <p className="text-white leading-relaxed mb-4">
          Outside of coding, I enjoy playing basketball and staying active. I also love exploring new technologies and 
          keeping up with the latest trends in web development.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-white">Contact Me</h3>
        <p className="text-white leading-relaxed mb-4">
          Feel free to reach out to me via email at <a href="mailto:akoshipa@gmail.com" className="text-white hover:underline">akoshipa@gmail.com</a> 
          or connect with me on LinkedIn.
        </p>
      </section>
    </div>
  );
}

export default About;









