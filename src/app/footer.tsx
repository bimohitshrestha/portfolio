import React from "react";

const Footer = () => {
  return (
    <div className="m-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p className="mb-2">
        © {new Date().getFullYear()} Bimohit Shrestha. Built with Next.js &
        Tailwind CSS
      </p>
      <p className="text-xs sm:text-sm">All rights reserved.</p>
    </div>
  );
};

export default Footer;
