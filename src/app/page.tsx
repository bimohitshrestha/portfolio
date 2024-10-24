"use client";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./service";
import Skills from "./skills";
import { IoIosFootball } from "react-icons/io";
import WorkPage from "./work";
import ContactForm from "./contact";
import Footer from "./footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleIconClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading && !isSmallScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[80%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <img
                src="https://png.pngtree.com/png-clipart/20221130/ourmid/pngtree-soccer-player-in-red-costume-preparing-to-kick-the-ball-png-image_6485649.png"
                alt="Soccer player about to kick"
                className="w-32 h-32"
              />
              <IoIosFootball
                className={`w-12 h-12 cursor-pointer transition-transform duration-1000 mt-9  ${
                  animate
                    ? "transform translate-x-[900px] translate-y-[35px]"
                    : ""
                }`}
                onClick={handleIconClick}
                aria-label="Kick football"
              />
            </div>
            <div>
              <img
                src="https://static-01.daraz.com.np/p/cdd3f1dcfbc3ab4c32dddfa829077325.jpg"
                alt="Football"
                className="w-96 h-96"
              />
            </div>
          </div>
          <div>
            <p className="text-red-700 text-center font-serif text-2xl font-bold mt-10">
              ⚠️ Score to see the PORTFOLIO ⚠️
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col w-full md:w-[80%] mx-auto">
      <Navbar />
      <HeroSection />
      <Skills />
      <WorkPage />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
