import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 group h-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50 transition-opacity duration-500 group-hover:opacity-75"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 bg-gray-800 rounded-lg border-4 border-transparent group-hover:border-blue-500 transition-all duration-500">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="mt-2 text-gray-300">{project.description}</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-400 hover:underline"
        >
          View Project
        </a>
      </div>

      {/* Blinking Border Effect */}
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 animate-pulse transition-all duration-500"></div>
    </div>
  );
}

export default ProjectCard;




