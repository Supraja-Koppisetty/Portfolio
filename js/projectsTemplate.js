const PROJECTS_DATA = [
  {
    title: "Accessible Weather Dashboard",

    image: "img/projects/Accessible-weather-dashboard-ss.png",

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

    image: "img/projects/Dev-Portfolio-ss.png",

    description:
      "A personal portfolio website showcasing my projects, skills, and experience with a clean and responsive design.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"], // Array of technologies used

    demoLink: "https://veera-supraja-k-portfolio.vercel.app/",

    githubLink: "https://github.com/Supraja-Koppisetty/Portfolio",
  },
];

function generateProjectCard(projects, gridClass) {
  const projectsGrid = document.getElementsByClassName(gridClass)[0];
  const innerHTMLContent = projects
    .map(
      (project) => `<div
          class="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-teal-500/50"
        >
          <!-- Project Image/Screenshot -->
          <img
            src="${project.image}"
            alt="${project.title} Screenshot"
            class="w-full h-48 object-cover border-b border-gray-700"
          />
          <div class="p-6 space-y-4">
            <h3 class="text-2xl font-bold text-white">${project.title}</h3>
            <p class="text-sm font-medium text-teal-400">
              ${project.tech.join(" | ")}
            </p>
            <p class="text-gray-300">
              ${project.description}
            </p>
            <div class="flex space-x-4 pt-2">
              <a
                href="${project.demoLink}"
                target="_blank"
                class="text-teal-400 hover:text-teal-300 flex items-center transition-colors font-medium"
              >
                <svg
                  class="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h7m0 0v7m0-7L10 14"
                  ></path>
                </svg>
                Live Demo
              </a>
              <a
                href="${project.githubLink}"
                target="_blank"
                class="text-gray-400 hover:text-white flex items-center transition-colors font-medium"
              >
                <svg
                  class="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                Code (GitHub)
              </a>
            </div>
          </div>
        </div>`
    )
    .join("");
  projectsGrid.innerHTML = innerHTMLContent; // Replace existing content [doesn't duplicate skills on reload]
}

document.addEventListener("DOMContentLoaded", () => {
  generateProjectCard(PROJECTS_DATA, "projects-grid");
});
