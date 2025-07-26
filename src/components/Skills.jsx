import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJquery,
  SiExpress,
  SiPostman,
  SiPython,
  SiC,
  SiMysql,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', category: 'Frontend', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', category: 'Frontend', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', category: 'Frontend', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React.js', category: 'Frontend', icon: <FaReact className="text-cyan-500" /> },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Bootstrap', category: 'Frontend', icon: <FaBootstrap className="text-purple-500" /> },
  { name: 'jQuery', category: 'Frontend', icon: <SiJquery className="text-blue-400" /> },
  { name: 'Node.js', category: 'Backend', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', category: 'Backend', icon: <SiExpress className="text-gray-600" /> },
  { name: 'SQL', category: 'Backend', icon: <SiMysql className="text-blue-600" /> },
  { name: 'Python', category: 'Programming', icon: <SiPython className="text-yellow-500" /> },
  { name: 'C', category: 'Programming', icon: <SiC className="text-blue-600" /> },
  { name: 'Git', category: 'Tools', icon: <FaGit className="text-red-500" /> },
  { name: 'GitHub', category: 'Tools', icon: <FaGithub className="text-black" /> },
  { name: 'Postman', category: 'Tools', icon: <SiPostman className="text-orange-500" /> },
];

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Programming', 'Tools'];

  return (
    <section className="fade-in-on-scroll">
      <h3>Skills</h3>
      {categories.map(category => (
        <div key={category}>
          <h4>{category}</h4>
          <div className="skills-grid">
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <div key={skill.name} className="skill-tile">
                  <div className="text-2xl">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;