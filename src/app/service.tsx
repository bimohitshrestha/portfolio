import { Card, CardContent } from "@mui/material";
import React from "react";

import { FaCode, FaPalette, FaTachometerAlt } from "react-icons/fa";
const ServicesSection = () => {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Building tailored solutions that perfectly match your business needs. From interactive dashboards to e-commerce platforms.",
      icon: <FaCode className="w-12 h-12 text-purple-500" />,
      backgroundColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-400",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful interfaces that delight users and drive engagement through thoughtful design.",
      icon: <FaPalette className="w-12 h-12 text-emerald-500" />,
      backgroundColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      hoverColor: "hover:border-emerald-400",
    },
    {
      title: "Performance Optimization",
      description:
        "Enhancing your application's speed and efficiency through advanced optimization techniques and best practices.",
      icon: <FaTachometerAlt className="w-12 h-12 text-blue-500" />,
      backgroundColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-400",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16" id="service">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          My Expertise
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transforming ideas into exceptional digital experiences through
          cutting-edge technology and creative solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            className={`group relative overflow-hidden border-2 transition-all duration-300 ${service.backgroundColor} ${service.borderColor} ${service.hoverColor}`}
          >
            <CardContent className="p-6">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-white/10 rounded-full transform rotate-45 transition-all duration-300 group-hover:scale-150" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
