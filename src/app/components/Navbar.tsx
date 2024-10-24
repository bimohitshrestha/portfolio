"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-black text-2xl font-bold">
          <Link href="/">Bimohit</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <div
              className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                isOpen
                  ? "opacity-0 rotate-180 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <GiHamburgerMenu className="w-6 h-6" />
            </div>
            <div
              className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                isOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-180 scale-0"
              }`}
            >
              <RxCross2 className="w-6 h-6" />
            </div>
          </div>
        </button>
      </div>

      <div
        className={`absolute right-2 w-48 bg-white rounded-lg shadow-lg mt-1 overflow-hidden transition-all duration-300 ease-in-out transform origin-top z-50 ${
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {["Home", "Skills", "Work", "Service", "Contact"].map((item, index) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
            className={`block px-4 py-2 text-black hover:bg-gray-100 transition-all duration-300
              transform hover:translate-x-2
              ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            style={{
              transitionDelay: `${index * 75}ms`,
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
