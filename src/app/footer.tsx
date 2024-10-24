import React from "react";

const Footer = () => {
  return (
    <div className="m-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        © {new Date().getFullYear()} Bimohit Shrestha. Built with Next.js &
        Tailwind CSS
      </p>
    </div>
  );
};

export default Footer;
