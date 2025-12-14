const frontendSkills = [
  {
    name: "HTML5",
    icon: "fab fa-html5",
    level: "Advanced",
    image: "img/skills/html5_logo.png",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    level: "Advanced",
    image: "img/skills/css3_logo.png",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    level: "Advanced",
    image: "img/skills/javascript-logo.png",
  },
  {
    name: "React",
    icon: "fab fa-react",
    level: "Intermediate",
    image: "img/skills/react-logo.png",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    level: "Intermediate",
    image: "img/skills/nodejs-logo.png",
  },
  {
    name: "Express.js",
    icon: "fas fa-server",
    level: "Intermediate",
    image: "img/skills/expressjs-logo.png",
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    level: "Intermediate",
    image: "img/skills/mongoDB-logo.png",
  },
  {
    name: "Python",
    icon: "fab fa-python",
    level: "Advanced",
    image: "img/skills/python_logo.png",
  },
];

const devOpsSkills = [
  {
    name: "Docker",
    icon: "fab fa-docker",
    level: "Intermediate",
    image: "img/skills/docker-logo.png",
  },
  {
    name: "Kubernetes",
    icon: "fas fa-cubes",
    level: "Beginner",
    image: "img/skills/kubernetes_logo.png",
  },
  {
    name: "AWS",
    icon: "fab fa-aws",
    level: "Intermediate",
    image: "img/skills/aws-brand-color.png",
  },
  {
    name: "Jenkins",
    icon: "fas fa-cogs",
    level: "Beginner",
    image: "img/skills/jenkins-logo.png",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    level: "Advanced",
    image: "img/skills/git-logo.png",
  },
];

function generateSkillsCard(skills, gridId) {
  const skillsGrid = document.getElementById(gridId);
  const innerHTMLContent = skills
    .map(
      (
        skill
      ) => ` <div class="skill-card bg-gray-800 p-4 rounded-xl text-center text-lg font-medium shadow-xl transition-all duration-300 cursor-pointer hover:bg-gray-700 hover:scale-[1.03] hover:shadow-teal-500/50">
                <img
                  src="${skill.image}"
                  alt="${skill.name} Logo"
                  class="mx-auto h-16 w-16 object-contain hover:scale-105 transform transition duration-300"
                  />
                  <p class="text-center mt-2 text-gray-300">${skill.name}</p>
                  </div>`
    )
    .join("");
  // skillsGrid.innerHTML += innerHTMLContent; // Append to existing content [Can potentially duplicate skills]
  skillsGrid.innerHTML = innerHTMLContent; // Replace existing content [doesn't duplicate skills on reload]
}

document.addEventListener("DOMContentLoaded", () => {
  generateSkillsCard(frontendSkills, "frontend-skills-grid");
  generateSkillsCard(backendSkills, "backend-skills-grid");
  generateSkillsCard(devOpsSkills, "tools-skills-grid");
});
