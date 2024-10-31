import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

function Projects() {
  return (
    <section className="bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">My Projects</h2>
      <p className="text-lg mb-8 text-center">
        Here are some of the projects I've worked on. Each project showcases my skills in web development and design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex flex-col items-center mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">More About My Work</h3>
        <p className="text-lg max-w-3xl mx-auto mb-4 text-center">
          I am always exploring new technologies and methodologies to enhance my development process. My projects often
          reflect my commitment to quality, performance, and user experience.
        </p>
      </div>

      <div className="flex flex-col items-center mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Get In Touch</h3>
        <p className="text-lg max-w-md mx-auto mb-4 text-center">
          If you are interested in collaborating or want to know more about my work, feel free to reach out to me!
        </p>
        <a
          href="#contact" // Updated to scroll to the Contact section
          className="mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Projects;

