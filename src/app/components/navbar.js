"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientText from "../ReactBits/GradientText";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Efek scroll untuk mengubah tampilan navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Deteksi section yang aktif
      const sections = ["home", "about", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk scroll ke section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 text-white transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-[#020f12]/80 shadow-lg"
          : "backdrop-blur-sm bg-[#020f12]/30"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Container untuk membatasi lebar konten */}
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <h1 className="text-xl font-bold tracking-wide cursor-pointer">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Zhfrn
            </GradientText>
          </h1>
        </motion.div>

        <ul className="flex space-x-6 sm:space-x-8 font-light text-sm">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "portfolio", label: "Portfolio" },
            { id: "contact", label: "Get in Touch" },
          ].map((item) => (
            <motion.li
              key={item.id}
              className={`cursor-pointer relative group ${
                activeSection === item.id
                  ? "text-[#00b7c2]"
                  : "hover:text-[#4dd0e1]"
              }`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}

              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00b7c2]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div className="absolute -bottom-1 left-0 h-0.5 bg-[#4dd0e1] w-0 group-hover:w-full transition-all duration-300" />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
