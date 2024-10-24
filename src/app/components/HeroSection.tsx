"use client";
import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "I’m a frontend developer"; // Ensured space in "I'm"

  useEffect(() => {
    setIsVisible(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>

              <h1 className="text-xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Hi, I'm Bimohit Shrestha
              </h1>

              <div className="h-8">
                <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300">
                  {typedText}
                </p>
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Passionate about creating engaging and user-friendly web
                applications with modern technologies and a focus on
                performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <BsArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 rounded-lg transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl group-hover:bg-blue-600/30 transition-colors duration-300" />
            <div className="relative">
              <img
                src="/Assets/portfolio.png"
                alt="Bimohit Shrestha"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
