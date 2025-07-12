"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaHome, 
  FaUserAlt, 
  FaBriefcase, 
  FaComments,
  FaBars
} from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Detect active section
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

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - (isMobile ? 40 : 80),
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUserAlt },
    { id: "portfolio", label: "Portfolio", icon: FaBriefcase },
    { id: "contact", label: "Contact", icon: FaComments },
  ];

  return (
    <>
      {/* Top Navbar - Visible only on desktop */}
      {!isMobile && (
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
          <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
            <motion.div 
              className="font-bold tracking-wide cursor-pointer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-[#4dd0e1] text-xl">Zhfrn</span>
            </motion.div>

            <ul className="flex space-x-6 sm:space-x-8 font-light text-sm">
              {navItems.map((item) => (
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
      )}

      {/* Android-style Bottom Navigation - Visible only on mobile */}
      {isMobile && (
        <motion.div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center bg-[#0c1123] backdrop-blur-xl rounded-full p-2 border border-[#4dd0e1]/30 shadow-2xl shadow-[#00b7c2]/30">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative mx-2 p-3 rounded-full ${
                    isActive ? "text-[#00b7c2]" : "text-gray-300"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-xl" />
                  
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#4dd0e1]/10 border border-[#4dd0e1]/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}