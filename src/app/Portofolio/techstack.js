"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import css from "../../../public/assets/css.png";
import express from "../../../public/assets/express.png";
import figma from "../../../public/assets/figma.png";
import html from "../../../public/assets/html.png";
import js from "../../../public/assets/js.png";
import mongo from "../../../public/assets/mongo.png";
import mysql from "../../../public/assets/mysql.png";
import next from "../../../public/assets/next.png";
import node from "../../../public/assets/node.png";
import python from "../../../public/assets/python.png";
import react from "../../../public/assets/react.png";
import tailwind from "../../../public/assets/tailwind.png";

const stacks = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "React", image: react },
  { name: "Next.js", image: next },
  { name: "Node.js", image: node },
  { name: "Express", image: express },
  { name: "MongoDB", image: mongo },
  { name: "MySQL", image: mysql },
  { name: "Python", image: python },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Figma", image: figma },
];

export default function TechStack() {
  return (
    <div className="w-full max-w-6xl mx-auto backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 border border-[#4dd0e1]/10 shadow-[0_4px_30px_rgba(0,183,194,0.1)] h-auto space-y-8">
      <h2 className="text-3xl font-bold text-center text-[#4dd0e1] mb-8">My Tech Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {stacks.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(77, 208, 225, 0.5)",
              transition: { duration: 0.3 }
            }}
            className="relative flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 w-full aspect-square max-w-[120px] overflow-hidden group"
          >
            {/* Shiny overlay effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,208,225,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Glow border effect */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#4dd0e1]/30 transition-all duration-300" />
            
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <div className="flex items-center justify-center w-12 h-12 mb-2">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <motion.span 
                className="text-white text-xs sm:text-sm text-center font-medium"
                whileHover={{ color: "#4dd0e1" }}
              >
                {tech.name}
              </motion.span>
            </div>
            
            {/* Light reflection effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 group-hover:bg-[#4dd0e1]/50 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}