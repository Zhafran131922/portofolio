"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create a separate component for timeline items
const TimelineItem = ({ item, variants, dotVariants, yearVariants, index }) => {
  const [itemRef, itemInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.div
      ref={itemRef}
      className={`mb-12 md:mb-16 flex items-center w-full ${
        item.align === "left" ? "justify-start" : "justify-end"
      }`}
      variants={variants}
      initial="hidden"
      animate={itemInView ? "visible" : "hidden"}
      custom={index}
    >
      <div
        className={`relative w-full md:w-[calc(50%-40px)] p-5 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm bg-white/5 border border-[#4dd0e1]/10 ${
          item.align === "left"
            ? "md:text-right md:pr-12"
            : "md:text-left md:pl-12"
        } transition-all duration-500`}
      >
        {/* Year badge */}
        <motion.div
          className={`absolute top-0 md:top-6 w-24 h-8 md:h-10 flex items-center justify-center rounded-full text-white font-bold text-xs md:text-sm z-10 ${
            item.align === "left"
              ? "left-0 md:right-0 md:left-auto md:translate-x-1/2 bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2]"
              : "right-0 md:left-0 md:right-auto md:-translate-x-1/2 bg-gradient-to-l from-[#4dd0e1] to-[#00b7c2]"
          }`}
          variants={yearVariants}
          whileHover={{ scale: 1.05 }}
        >
          {item.year}
        </motion.div>

        <div
          className={`mt-10 md:mt-0 ${
            item.align === "left" ? "md:pr-4" : "md:pl-4"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
            {item.title}
          </h3>
          <p className="text-[#c1f5ff]/80 text-sm md:text-base">
            {item.description}
          </p>

          {/* Progress dots */}
          <motion.div
            className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#00b7c2] border-4 border-[#0c1123] z-10 ${
              item.align === "left"
                ? "right-0 translate-x-1/2"
                : "left-0 -translate-x-1/2"
            }`}
            variants={dotVariants}
            whileHover={{ scale: 1.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Education() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: "2008 - 2014",
      title: "SDN 1 Patikraja",
      description: "Sekolah Dasar Negeri 1 Patikraja",
      align: "left",
    },
    {
      year: "2014 - 2017",
      title: "SMPN 1 Patikraja",
      description: "Sekolah Menengah Pertama Negeri 1 Patikraja",
      align: "right",
    },
    {
      year: "2017 - 2020",
      title: "SMKN 2 Purwokerto",
      description:
        "Jurusan Multimedia - Sekolah Menengah Kejuruan Negeri 2 Purwokerto",
      align: "left",
    },
    {
      year: "2021 - 2025",
      title: "Universitas Negeri Semarang",
      description: "Pendidikan Teknik Informatika dan Komputer S1",
      align: "right",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const yearVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.5,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{
        background: "transparent",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2]">
              Education
            </span>{" "}
            Journey
          </h2>
          <p className="text-[#c1f5ff]/80 max-w-2xl mx-auto text-base md:text-lg">
            My academic path from elementary school to university
          </p>
        </motion.div>

        <motion.div
          className="relative w-full mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4dd0e1] via-[#00b7c2] to-[#4dd0e1] -translate-x-1/2 origin-bottom"
            variants={lineVariants}
          />

          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              variants={
                item.align === "left" ? leftItemVariants : rightItemVariants
              }
              dotVariants={dotVariants}
              yearVariants={yearVariants}
              index={index}
            />
          ))}

          {/* Graduation cap icon */}
          <motion.div
            className="absolute -bottom-15 md:-bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#4dd0e1] flex items-center justify-center text-[#0c1123]"
            initial={{ scale: 0, opacity: 0 }}
            animate={sectionInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            whileHover={{ rotate: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a6 6 0 016-6V2H4v4a6 6 0 016 6z" />
              <path d="M10 18a8 8 0 01-8-8h16a8 8 0 01-8 8z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}