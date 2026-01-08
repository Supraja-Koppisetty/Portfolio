interface Skill {
  name: string;
  image: string;
}

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {skills.map((skill) => (
        <div
          className="skill-card bg-gray-800 p-4 rounded-xl text-center text-lg font-medium shadow-xl transition-all duration-300 cursor-pointer hover:bg-gray-700 hover:scale-[1.03] hover:shadow-teal-500/50"
          key={skill.name}
        >
          <img
            src={skill.image}
            alt={`${skill.name} Logo`}
            className="mx-auto h-16 w-16 object-contain hover:scale-105 transform transition duration-300"
          />
          <p className="text-center mt-2 text-gray-300">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
