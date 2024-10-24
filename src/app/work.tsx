import React from "react";

const WorkPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      image:
        "https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg",
      description:
        "A full-stack e-commerce solution built with React.js and Node.js",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Bootstrap",
      ],
      link: "https://github.com/bimohitshrestha/Summer-project",
    },

    {
      id: 2,
      title: "Twitter Clone",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*a-PfepJxHGMWl6YFyIaq8A.jpeg",
      description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      technologies: ["React", "Material Ui", "TailwindCss"],
      link: "https://github.com/bimohitshrestha/Twitter-clone",
    },
  ];

  return (
    <div className="min-h-screen bg-white" id="work">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-center font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          My Work
        </h1>
        <p className=" text-gray-600 text-center mb-12">
          Explore my latest projects and creative endeavors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
