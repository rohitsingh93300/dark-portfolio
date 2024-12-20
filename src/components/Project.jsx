import React from "react";
import Nike from '../assets/Nike.png'
import SpicyBites from '../assets/SpicyBites.png'
import Digital from '../assets/Digital.png'
import Clothify from '../assets/Clothify.png'
import Gym from '../assets/Gym.png'

const Projects = () => {
  const projects = [
    {
      title: "SpicyBites",
      description:
        "A food ordering platform with Stripe payments and an admin panel. Built using Next.js, MongoDB, and Tailwind.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      link: "https://spicybites.example.com",
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "JobPortal",
      description:
        "A responsive job portal featuring student registration and recruiter tools. Built with React and Node.js.",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://jobportal.example.com",
      image: Nike, // Replace with your project screenshot
    },
    {
      title: "LinkedIn Clone",
      description:
        "A LinkedIn clone with social features like posts, likes, and comments. Built using Next.js and Clerk Authentication.",
      techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
      link: "https://linkedinclone.example.com",
      image: Clothify, // Replace with your project screenshot
    },
  ];

  return (
    <section className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
