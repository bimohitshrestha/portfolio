import Head from "next/head";
import { FaJs, FaReact, FaGitAlt, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Next.js",
      level: "Intermediate",
      icon: <SiNextdotjs className="text-gray-800" />,
    },
    {
      name: "React",
      level: "Advanced",
      icon: <FaReact className="text-blue-600" />,
    },
    {
      name: "Typescript",
      level: "Advanced",
      icon: <SiTypescript className="text-blue-600" />,
    },
    {
      name: "JavaScript",
      level: "Advanced",
      icon: <FaJs className="text-yellow-600" />,
    },

    {
      name: "Tailwind CSS",
      level: "Advanced",
      icon: <SiTailwindcss className="text-sky-400" />,
    },
    {
      name: "Git",
      level: "Intermediate",
      icon: <FaGitAlt className="text-orange-600" />,
    },
    {
      name: "Responsive Design",
      level: "Advanced",
      icon: <FaMobileAlt className="text-green-600" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Skills - My Portfolio</title>
        <meta name="description" content="Skills of a frontend developer" />
      </Head>
      <div className="container mx-auto px-4 py-10" id="skills">
        <h1 className="text-4xl text-center font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          My Skills
        </h1>
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mr-4">{skill.icon}</div>
              <div>
                <h2 className="text-xl font-medium">{skill.name}</h2>
                {/* <p className="text-gray-500">{skill.level}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
