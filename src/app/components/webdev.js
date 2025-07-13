"use client";

import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFolderOpen,
  FaArrowRight,
  FaRegCopy,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LeftContent() {
  const [copied, setCopied] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("zhafran131922@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied after 1.5s
  };

  // Komponen GradientText yang terintegrasi
  const GradientText = ({
    children,
    className = "",
    colors,
    animationSpeed = 4,
  }) => {
    const textRef = useRef(null);

    useEffect(() => {
      if (textRef.current) {
        const style = document.createElement("style");
        style.textContent = `
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `;
        document.head.appendChild(style);

        return () => {
          document.head.removeChild(style);
        };
      }
    }, []);

    return (
      <span
        ref={textRef}
        className={`inline-block ${className}`}
        style={{
          background: `linear-gradient(90deg, ${colors.join(", ")})`,
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          animation: `gradientAnimation ${animationSpeed}s ease infinite`,
        }}
      >
        {children}
      </span>
    );
  };

 const GradientUnderline = () => (
  <svg
    viewBox="0 0 300 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 w-full h-3"
    preserveAspectRatio="none"
  >
    <path
      d="M0 15 Q150 0 300 15"
      stroke="url(#gradient)"
      strokeWidth="8"
      fill="transparent"
    />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fce38a" />
        <stop stopColor="#95fbc1" offset="0.5" />
        <stop stopColor="#6654f1" offset="1" />
      </linearGradient>
    </defs>
  </svg>
);

  return (
    <motion.div
      className="flex flex-col gap-6 justify-center max-w-xl text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Badge dengan animasi floating */}
      <motion.div
        className="px-4 py-2 rounded-full bg-[#00b7c2]/20 w-fit text-[#4dd0e1] border border-[#4dd0e1]/50 shadow-lg backdrop-blur-sm"
        variants={itemVariants}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="inline-block mr-2 animate-pulse">✨</span>
        Designing Smarter Futures
      </motion.div>
      {/* Title dengan animasi gradient text */}
     <motion.h1
      className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
    >
      Web & Mobile{" "}
      <span className="relative inline-block">
        <span className="relative z-10 text-[#00b7c2]">Developer</span>
        <GradientUnderline />
      </span>
    </motion.h1>
      {/* Subtitle dengan animasi kursor */}
      <motion.div className="flex items-center" variants={itemVariants}>
        <motion.p
          className="text-xl text-[#c1f5ff] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Computer and Informatics Education Student
        </motion.p>
        <motion.span
          className="ml-1 text-[#c1f5ff]"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          |
        </motion.span>
      </motion.div>
      {/* Description dengan animasi teks muncul */}
      <motion.p
        className="text-base md:text-lg text-[#c1f5ff] leading-relaxed max-w-lg"
        variants={itemVariants}
      >
        I craft{" "}
        <GradientText colors={["#4dd0e1", "#00b7c2"]} className="font-semibold">
          innovative
        </GradientText>
        ,{" "}
        <GradientText colors={["#00b7c2", "#4dd0e1"]} className="font-semibold">
          reliable
        </GradientText>
        , and{" "}
        <GradientText colors={["#4dd0e1", "#00b7c2"]} className="font-semibold">
          user-friendly
        </GradientText>{" "}
        websites that deliver real impact in the digital world.
      </motion.p>

      {/* Tech Stack dengan animasi stagger */}
      <motion.div
        className="flex flex-wrap gap-3 mt-2"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {[
          "React",
          "Next.js",
          "Javascript",
          "Node.js",
          "Tailwind",
          "CSS",
          "Figma",
          "MongoDB",
          "MySQL",
          "Python",
        ].map((tech, index) => (
          <motion.span
            key={index}
            className="px-4 py-2 rounded-full bg-white/10 text-sm text-[#c1f5ff] border border-white/10 backdrop-blur-sm shadow-md hover:bg-[#00b7c2]/20 hover:border-[#4dd0e1]/30 transition-all"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(77, 208, 225, 0.5)",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
      {/* Buttons dengan animasi hover */}
      <motion.div className="flex flex-wrap gap-4 mt-6" variants={itemVariants}>
        <Link href="https://github.com/Zhafran131922">
          <motion.button
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#00b7c2] to-[#4dd0e1] text-white group relative overflow-hidden"
            whileHover={{
              y: -3,
              boxShadow: "0 10px 20px rgba(0, 183, 194, 0.3)",
            }}
            initial={{ boxShadow: "0 4px 10px rgba(0, 183, 194, 0.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              <FaGithub className="group-hover:animate-bounce" />
              <span>Github</span>
            </span>
            <FaArrowRight className="relative z-10 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </motion.button>
        </Link>

        <Link href="https://linkedin.com/in/irzhafranrp">
          <motion.button
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 text-white border border-white/20  backdrop-blur-sm group relative overflow-hidden"
            whileHover={{
              y: -3,
              boxShadow: "0 10px 20px rgba(77, 208, 225, 0.2)",
            }}
            initial={{ boxShadow: "0 4px 10px rgba(0, 183, 194, 0.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1]/20 to-[#00b7c2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              <FaLinkedin className="group-hover:animate-bounce" />
              <span>Linkedin</span>
            </span>
            <FaArrowRight className="relative z-10 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </motion.button>
        </Link>
      </motion.div>
      {/* Socials dengan animasi hover */}
      <motion.div
        className="flex items-center gap-3 mt-8 text-sm sm:text-base font-medium text-white relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <FaEnvelope className="text-[#4dd0e1]" />

        <motion.button
          onClick={handleCopy}
          className="relative group text-[#c1f5ff] hover:text-[#4dd0e1] transition-colors"
        >
          zhafran131922@gmail.com
          {/* Animated underline */}
          <span className="block h-[1px] bg-[#4dd0e1] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300" />
          {/* Copied text floating */}
          {copied && (
            <motion.span
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#4dd0e1] bg-black/70 px-2 py-1 rounded-md"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
            >
              Copied!
            </motion.span>
          )}
        </motion.button>

        <FaRegCopy
          className="cursor-pointer text-white/60 hover:text-[#4dd0e1] transition-colors"
          onClick={handleCopy}
          title="Copy email"
        />
      </motion.div>
    </motion.div>
  );
}
