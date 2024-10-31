import React from 'react';

function About() {
  return (
    <div className="flex justify-center p-4 md:p-8"> {/* Center the outer container and add padding */}
      <div className="group relative w-full max-w-2xl"> {/* Inner container with max width */}
        <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-gray-400 animate-pulse transition-all duration-500"></div> {/* Outer border effect */}

        {/* Section with gradient background */}
        <section className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white p-6 rounded-lg shadow-lg relative z-10">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Hello! I'm Amathziah, a passionate web developer with a focus on creating dynamic and responsive web applications.
            With a background in Computer Science and AI, I aim to blend technology with creativity to deliver impactful user experiences.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2 text-white">Skills</h3>
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
                <span className="mr-2 text-lg">{item.emoji}</span>
                <span className="text-sm sm:text-base">{item.skill}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2 text-white">Experience</h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            I have worked on several projects, including a responsive e-commerce web application and a chat platform 
            that connects users based on their interests. These experiences have honed my skills in both frontend and backend development.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2 text-white">Personal Interests</h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Outside of coding, I enjoy playing basketball and staying active. I also love exploring new technologies and 
            keeping up with the latest trends in web development.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2 text-white">Contact Me</h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Feel free to reach out to me via email at <a href="mailto:akoshipa@gmail.com" className="text-white hover:underline">akoshipa@gmail.com</a> 
            or connect with me on LinkedIn.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;









