import React from 'react';

function About() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 max-w-full">
      <div className="group relative w-full max-w-lg sm:max-w-xl md:max-w-2xl blinking-border">
        <div className="absolute inset-0 border-2 sm:border-4 border-transparent rounded-lg group-hover:border-gray-400 animate-pulse transition-all duration-500"></div>

        <section className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg relative z-10 h-full overflow-hidden">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-2">
            Hello! I'm Amathziah, a passionate web developer with a focus on creating dynamic and responsive web applications.
            With a background in Computer Science and AI, I aim to blend technology with creativity to deliver impactful user experiences.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 mb-1 text-white">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white mb-4">
            {[
              { emoji: '🌐', skill: 'React.js and its ecosystem' },
              { emoji: '💻', skill: 'Node.js and Express.js' },
              { emoji: '📊', skill: 'MongoDB and MySQL for database management' },
              { emoji: '🎨', skill: 'Tailwind CSS for styling' },
              { emoji: '🔒', skill: 'JWT Authentication for secure user management' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center p-2 sm:p-3 bg-gray-800 rounded-lg shadow transition-transform transform hover:scale-105 justify-center blinking-border">
                <span className="mr-2 text-lg">{item.emoji}</span>
                <span className="text-base sm:text-lg md:text-xl">{item.skill}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 mb-1 text-white">Experience</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-2">
            I have worked on several projects, including a responsive e-commerce web application and a chat platform 
            that connects users based on their interests. These experiences have honed my skills in both frontend and backend development.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 mb-1 text-white">Personal Interests</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-2">
            Outside of coding, I enjoy playing basketball and staying active. I also love exploring new technologies and 
            keeping up with the latest trends in web development.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 mb-1 text-white">Contact Me</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-2">
            Feel free to reach out to me via email at <a href="mailto:akoshipa@gmail.com" className="text-white hover:underline">akoshipa@gmail.com</a> 
            or connect with me on LinkedIn.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;











