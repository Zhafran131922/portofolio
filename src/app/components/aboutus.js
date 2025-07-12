"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDownload, FaFolderOpen, FaWhatsapp } from "react-icons/fa";
import Photo from "../../../public/assets/photo.png";
import Image from "next/image";
import Modal from "./modal";
import {
  MdWork,
  MdSchool,
  MdScience,
  MdCode,
  MdImportantDevices,
  MdDataUsage,
} from "react-icons/md";

export default function AboutUs() {
  const fullText = "Irzhafran Ridho Pradana";
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(interval);
          setIsTypingComplete(true);
        }
      }, 100); // typing speed: 100ms per character

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 flex flex-col items-center px-6 sm:px-24 py-20 text-white overflow-hidden"
    >
      <div className="w-full max-w-6xl">
        {/* Main Content */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between gap-12 mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Text Content */}
          <div className="flex-1">
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4dd0e1] mb-2">
                ✨ About Me
              </h2>
              <p className="text-sm text-[#c1f5ff]/70">
                Transforming ideas into digital experiences
              </p>
            </motion.div>

            <motion.h3
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#4dd0e1] via-[#00b7c2] to-[#4dd0e1] text-transparent bg-clip-text whitespace-nowrap">
                {typedText}
                <motion.span
                  className="inline-block w-1 bg-[#00b7c2] ml-1 rounded-sm h-6 align-middle"
                  animate={{
                    opacity: isTypingComplete ? [1, 0, 1] : 1,
                  }}
                  transition={{
                    repeat: isTypingComplete ? Infinity : 1,
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: isTypingComplete ? 0 : 0.5,
                  }}
                />
              </span>
            </motion.h3>

            <motion.p
              className="text-[#c1f5ff]/80 text-base sm:text-lg leading-relaxed mb-10"
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              Saya merupakan lulusan Universitas Negeri Semarang Program Studi
              Pendidikan Teknik Informatika dan Komputer S1. Saat ini saya telah
              menyelesaikan skripsi yang berjudul &quot;Pengembangan Aplikasi
              Klasifikasi Penyakit pada Daun Kelengkeng Menggunakan Metode
              CNN&quot; untuk membantu kebun Agro Purwosari Semarang dalam
              perawatan tanaman.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-6 mb-16"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#00b7c2] to-[#4dd0e1] text-white group relative overflow-hidden"
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 20px rgba(0, 183, 194, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Download CV</span>
                </span>
              </motion.button>

              <motion.button
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm group relative overflow-hidden"
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 20px rgba(77, 208, 225, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4dd0e1]/20 to-[#00b7c2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <FaWhatsapp className="group-hover:animate-pulse w-5 h-5" />
                  <span>Contact Me</span>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4dd0e1]/30 via-transparent to-[#00b7c2]/20 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={inView ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.6,
                }}
              >
                <div className="w-[90%] h-[90%] rounded-full bg-gray-800/70 backdrop-blur-sm border border-[#4dd0e1]/30 flex items-center justify-center overflow-hidden">
                  {/* Perbaikan untuk menampilkan foto */}
                  <Image
                    src={Photo}
                    alt="Profile Photo"
                    className="w-full h-full object-cover object-center opacity-80"
                  />
                </div>
              </motion.div>

              {inView && (
                <>
                  <motion.div
                    className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-[#4dd0e1]/20 border border-[#4dd0e1]/30 backdrop-blur-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-5 -right-5 w-12 h-12 rounded-full bg-[#00b7c2]/20 border border-[#00b7c2]/30 backdrop-blur-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Full Width Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FeatureCard
            icon={<MdWork className="text-4xl" />}
            title="Experience"
            description="Internships, organizational involvement, and independent studies in tech and development fields."
            stats="2022 – 2025"
          />

          <FeatureCard
            icon={<MdImportantDevices className="text-4xl" />}
            title="Education"
            description="Bachelor's degree in Computer and Information Education from UNNES"
            stats="GPA: 3.8"
          />
          <FeatureCard
            icon={<MdDataUsage className="text-4xl" />}
            title="AI Research"
            description="Developed CNN model for longan leaf disease classification with 96% accuracy"
            stats="Research Paper"
          />
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon, title, description, stats }) => {
  return (
    <motion.div
      className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#4dd0e1]/30 transition-all h-full"
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(77, 208, 225, 0.15)",
      }}
    >
      <div className="flex flex-col h-full">
        <div className="text-[#4dd0e1] mb-4 p-3 bg-white/10 rounded-full w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[#c1f5ff]/70 text-sm mb-4 flex-grow">
          {description}
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
          <span className="text-[#4dd0e1] text-sm font-medium">{stats}</span>
          <button className="text-[#4dd0e1] text-sm flex items-center gap-2 hover:gap-3 transition-all">
            Details
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
