"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CNN from "../../../public/assets/cnn.jpg";
import CRM from "../../../public/assets/crm.jpeg";
import Diskominfo from "../../../public/assets/diskominfo.jpg";
import ESC from "../../../public/assets/esc.jpg";
import HRIS from "../../../public/assets/hris.jpeg";
import Mitsubishi from "../../../public/assets/mitsubishi.jpg";
import Proposal from "../../../public/assets/proposal.jpg";
import Ratingpage from "../../../public/assets/ratingpage.jpg";
import Smartbiz from "../../../public/assets/smartbiz.jpg";
import Smartfarm from "../../../public/assets/smartfarm.jpg";
import Virtual from "../../../public/assets/virtual.jpg";

export default function Projects() {
  const projects = [
    {
      title: "CRM System",
      description:
        "A CRM platform with three roles — Admin, Sales, and Customer. Customers can order products or request product services under an MOU agreement.",
      image: CRM,
      technologies: ["Vue.js", "Python", "PostgreSQL"],
    },
    {
      title: "HRIS",
      description:
        "A Human Resource Information System for HR to manage employees, including payroll, attendance, employee data, and other HR operations.",
      image: HRIS,
      technologies: ["Vue.js", "Python", "PostgreSQL"],
    },
    {
      title: "Mitsubishi Training",
      description:
        "Program ini dirancang untuk mempermudah karyawan Mitsubishi Motors dalam mempelajari materi pelatihan.",
      image: Mitsubishi,
      technologies: ["Next.js", "Express.js", "MySQL"],
    },
    {
      title: "Leaf Disease Detection",
      description:
        "Longan Leaf Disease Detection menggunakan CNN (Convolutional Neural Network) untuk deteksi penyakit pada daun kelengkeng",
      image: CNN,
      technologies: ["React Native", "CNN", "MobileNetV2"],
    },
    {
      title: "Smart Farming IoT",
      description:
        "Smart Farming dengan sistem monitoring dan kontrol tanaman secara real-time di kebun Agro Purwosari Semarang.",
      image: Smartfarm,
      technologies: ["React Native", "Firebase", "Express.js"],
    },
    {
      title: "FT Rating Page",
      description:
        "Website penilaian kepuasan layanan Fakultas Teknik Universitas Negeri Semarang.",
      image: Ratingpage,
      technologies: ["PHP", "MySQL", "JavaScript"],
    },
    {
      title: "Proposalify",
      description: "Website untuk membuat proposal dengan mudah dan cepat.",
      image: Proposal,
      technologies: ["React", "Express.js", "MongoDB"],
    },
    {
      title: "Diskominfo Internship",
      description: "Website penerimaan magang Diskominfo Kota Semarang",
      image: Diskominfo,
      technologies: ["React", "Express.js", "MySQL"],
    },
    {
      title: "Smart Biz",
      description:
        "Smart Biz (Smart Business) merupakan aplikasi untuk mencatat pengeluaran dan pendapatan bisnis.",
      image: Smartbiz,
      technologies: ["Kotlin", "Express.js", "MySQL"],
    },
    {
      title: "Virtual Tour",
      description:
        "Virtual Tour merupakan website untuk menampilkan tempat di SMKN 1 Semarang.",
      image: Virtual,
      technologies: ["PHP", "3Sixty"],
    },
    {
      title: "Electrical Science Club",
      description:
        "Website Organisasi Electrical Science Club Universitas Negeri Semarang.",
      image: ESC,
      technologies: ["React"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="w-full px-4 py-16 sm:py-24">
      <div
        className="max-w-6xl mx-auto rounded-2xl border border-[#4dd0e1]/10 shadow-[0_4px_30px_rgba(0,183,194,0.1)] backdrop-blur-md p-4 sm:p-8 md:p-10"
        style={{
          background: "linear-gradient(145deg, #0f172a, #051d1f)",
        }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#4dd0e1] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group w-full"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(77, 208, 225, 0.2)",
              }}
            >
              <div className="bg-gradient-to-br from-[#0f172a] to-[#0a1a1f] border border-[#4dd0e1]/10 rounded-xl overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                  {typeof project.image === "string" ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#4dd0e1] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] sm:text-xs bg-[#4dd0e1]/10 text-[#4dd0e1] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
