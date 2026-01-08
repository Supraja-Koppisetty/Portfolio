import SkillsGrid from "./SkillsGrid";
const frontendSkills = [
  {
    name: "HTML5",
    icon: "fab fa-html5",
    level: "Advanced",
    image: "/skills/html5_logo.png",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    level: "Advanced",
    image: "/skills/css3_logo.png",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    level: "Advanced",
    image: "/skills/javascript-logo.png",
  },
  {
    name: "React",
    icon: "fab fa-react",
    level: "Intermediate",
    image: "/skills/react-logo.png",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    level: "Intermediate",
    image: "/skills/nodejs-logo.png",
  },
  {
    name: "Express.js",
    icon: "fas fa-server",
    level: "Intermediate",
    image: "/skills/expressjs-logo.png",
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    level: "Intermediate",
    image: "/skills/mongoDB-logo.png",
  },
  {
    name: "Python",
    icon: "fab fa-python",
    level: "Advanced",
    image: "/skills/python_logo.png",
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
    image: "/skills/kubernetes_logo.png",
  },
  {
    name: "AWS",
    icon: "fab fa-aws",
    level: "Intermediate",
    image: "/skills/aws-brand-color.png",
  },
  {
    name: "Jenkins",
    icon: "fas fa-cogs",
    level: "Beginner",
    image: "/skills/jenkins-logo.png",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    level: "Advanced",
    image: "/skills/git-logo.png",
  },
];
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div
        id="skills-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <h2 className="text-4xl text-white text-center font-extrabold mb-16">
          Skills
        </h2>
        <div className="skills-container-grid space-y-16">
          <div id="frontend-skills-container" className="skills-category">
            <h3 className="text-2xl text-teal-400 font-semibold mb-6 border-b border-gray-700">
              Frontend
            </h3>

            <div id="frontend-skills-grid">
              <SkillsGrid skills={frontendSkills} />
            </div>
          </div>
          <div id="backend-skills-container" className="skills-category">
            <h3 className="text-2xl text-teal-400 font-semibold mb-6 border-b border-gray-700">
              Backend
            </h3>

            <div id="backend-skills-grid">
              <SkillsGrid skills={backendSkills} />
            </div>
          </div>
          <div id="tools-skills-container" className="skills-category">
            <h3 className="text-2xl text-teal-400 font-semibold mb-6 border-b border-gray-700">
              Tools
            </h3>

            <div id="tools-skills-grid">
              <SkillsGrid skills={devOpsSkills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
