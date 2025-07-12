"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import ImageC from "../../../public/assets/image.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Aritmatika Solver",
      description:
        "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis.",
      image: ImageC,
      demoLink: "#",
      detailLink: "#",
      technologies: ["Python", "NumPy", "Matplotlib"],
    },
    {
      title: "AutoChat-Discord",
      description:
        "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.",
      image: "https://placehold.co/600x400/0f0f1c/white?text=AutoChat-Discord",
      demoLink: "#",
      detailLink: "#",
      technologies: ["JavaScript", "Discord API", "Node.js"],
    },
    {
      title: "Buku Catatan",
      description:
        "Website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan harian.",
      image: "https://placehold.co/600x400/0f0f1c/white?text=Buku+Catatan",
      demoLink: "#",
      detailLink: "#",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description:
        "Website portfolio modern dengan animasi interaktif dan desain responsif.",
      image: "https://placehold.co/600x400/0f0f1c/white?text=Portfolio",
      demoLink: "#",
      detailLink: "#",
      technologies: ["Next.js", "Framer Motion", "Three.js"],
    },
    {
      title: "E-Commerce App",
      description:
        "Aplikasi e-commerce lengkap dengan sistem pembayaran dan manajemen produk.",
      image: "https://placehold.co/600x400/0f0f1c/white?text=E-Commerce",
      demoLink: "#",
      detailLink: "#",
      technologies: ["React", "Redux", "Stripe API"],
    },
    {
      title: "Fitness Tracker",
      description:
        "Aplikasi pelacak kebugaran dengan fitur statistik dan rencana latihan.",
      image: "https://placehold.co/600x400/0f0f1c/white?text=Fitness",
      demoLink: "#",
      detailLink: "#",
      technologies: ["React Native", "GraphQL", "MongoDB"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="w-full px-4 py-16 sm:py-24">
      <div
        className="max-w-6xl mx-auto rounded-2xl border border-[#4dd0e1]/10 shadow-[0_4px_30px_rgba(0,183,194,0.1)] backdrop-blur-md p-6 sm:p-8 md:p-10"
        style={{
          background: "linear-gradient(145deg, #0f172a, #051d1f)",
        }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#4dd0e1] mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px rgba(77, 208, 225, 0.2)",
              }}
            >
              <div className="bg-gradient-to-br from-[#0f172a] to-[#0a1a1f] border border-[#4dd0e1]/10 rounded-xl overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
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
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-[#4dd0e1] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs bg-[#4dd0e1]/10 text-[#4dd0e1] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white font-medium flex items-center gap-2 px-4 py-2 bg-[#4dd0e1]/20 hover:bg-[#4dd0e1]/30 transition-colors rounded-full"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.detailLink}
                      className="text-sm text-white font-medium flex items-center gap-2 px-4 py-2 bg-[#4dd0e1]/20 hover:bg-[#4dd0e1]/30 transition-colors rounded-full"
                    >
                      Details <FaExternalLinkAlt className="text-xs" />
                    </a>
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