import weatherProjectImage from "../assets/projects/Accessible-weather-dashboard-ss.png";
import portfolioProjectImage from "../assets/projects/Dev-Portfolio-ss.png";
const PROJECTS_DATA = [
  {
    title: "Accessible Weather Dashboard",

    image: weatherProjectImage,

    description:
      "An accessible weather dashboard that provides real-time weather updates with features like keyboard navigation and screen reader support.",

    tech: ["React", "CSS", "OpenWeather API"], // Array of technologies used

    demoLink:
      "https://supraja-koppisetty.github.io/accessible-weather-dashboard/",

    githubLink:
      "https://github.com/Supraja-Koppisetty/accessible-weather-dashboard/tree/main",
  },

  {
    title: "Portfolio Website",

    image: portfolioProjectImage,

    description:
      "A personal portfolio website showcasing my projects, skills, and experience with a clean and responsive design.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"], // Array of technologies used

    demoLink: "https://veera-supraja-k-portfolio.vercel.app/",

    githubLink: "https://github.com/Supraja-Koppisetty/Portfolio",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-white mb-16">
          Featured Projects
        </h2>
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-teal-600 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
