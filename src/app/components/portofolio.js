"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "@/app/Portofolio/projects";
import Certificates from "@/app/Portofolio/certificates";
import TechStack from "@/app/Portofolio/techstack";
import { FaCode, FaCertificate } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";

const tabs = [
  { label: "Projects", icon: <FaCode size={20} /> },
  { label: "Certificates", icon: <FaCertificate size={20} /> },
  { label: "Tech Stack", icon: <RiStackLine size={20} /> },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("Projects");
  
  // Individual inView tracking for each section
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [tabsRef, tabsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const renderContent = () => {
    switch (activeTab) {
      case "Projects":
        return <Projects />;
      case "Certificates":
        return <Certificates />;
      case "Tech Stack":
        return <TechStack />;
      default:
        return null;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="w-full px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 md:mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2]">
            Portfolio
          </span>{" "}
          Showcase
        </motion.h2>
        <motion.p 
          className="text-[#c1f5ff]/80 max-w-2xl mx-auto text-base md:text-lg"
          variants={itemVariants}
        >
          Explore my journey through projects, certifications, and technical
          expertise.
        </motion.p>
      </motion.div>

      {/* Tabs Section */}
      <motion.div 
        ref={tabsRef}
        className="flex justify-center items-center bg-[#0c1123]/70 backdrop-blur-sm p-1.5 rounded-2xl shadow-lg max-w-4xl mx-auto gap-1 md:gap-2 border border-[#4dd0e1]/20"
        variants={containerVariants}
        initial="hidden"
        animate={tabsInView ? "visible" : "hidden"}
      >
        {tabs.map(({ label, icon }, index) => (
          <motion.button
            key={label}
            custom={index}
            variants={tabVariants}
            onClick={() => setActiveTab(label)}
            className={`flex flex-col items-center justify-center flex-1 py-3 md:py-4 px-2 rounded-xl transition-all duration-300 
              ${
                activeTab === label
                  ? "bg-gradient-to-br from-[#4dd0e1]/30 to-[#00b7c2]/30 text-white shadow-[0_0_15px_-3px_rgba(0,183,194,0.5)]"
                  : "bg-transparent text-[#c1f5ff]/60 hover:text-white hover:bg-[#4dd0e1]/10 hover:shadow-[0_0_15px_-3px_rgba(0,183,194,0.3)]"
              }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className={`mb-1 transition-colors ${
                activeTab === label ? "text-[#4dd0e1]" : "text-[#c1f5ff]/60"
              }`}
            >
              {icon}
            </div>
            <span className="text-xs md:text-sm font-medium">{label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Content Section */}
      <motion.div 
        ref={contentRef}
        className="mt-12 md:mt-16 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div>{renderContent()}</div>
      </motion.div>
    </section>
  );
}