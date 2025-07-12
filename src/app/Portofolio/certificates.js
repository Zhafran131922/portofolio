"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Gambarsertif from "../../../public/assets/image.jpg";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      imageSrc: Gambarsertif,
      altText: "Google Data Analytics Professional Certificate",
      captionText: "Google Data Analytics",
      issuer: "Google",
      date: "June 2023"
    },
    {
      id: 2,
      imageSrc: Gambarsertif,
      altText: "Google Cloud Professional Certificate",
      captionText: "Google Cloud",
      issuer: "Google",
      date: "August 2023"
    },
    {
      id: 3,
      imageSrc: Gambarsertif,
      altText: "Google IT Support Professional Certificate",
      captionText: "Google IT Support",
      issuer: "Google",
      date: "April 2023"
    },
    {
      id: 4,
      imageSrc: Gambarsertif,
      altText: "Microsoft Azure Fundamentals",
      captionText: "Azure Fundamentals",
      issuer: "Microsoft",
      date: "March 2024"
    },
    {
      id: 5,
      imageSrc: Gambarsertif,
      altText: "AWS Certified Solutions Architect",
      captionText: "AWS Solutions Architect",
      issuer: "Amazon",
      date: "January 2024"
    },
    {
      id: 6,
      imageSrc: Gambarsertif,
      altText: "React Advanced Concepts",
      captionText: "Advanced React",
      issuer: "Meta",
      date: "February 2024"
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0, 183, 194, 0.25)",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="certificates" className="w-full px-4 py-16 sm:py-24">
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
          My Certificates
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden rounded-xl h-[220px] border border-[#4dd0e1]/20">
                {/* Certificate Image */}
                <div className="absolute inset-0">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00b7c2]/80 to-[#4dd0e1]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{cert.captionText}</h3>
                    <p className="text-gray-200 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                    <div className="flex justify-center gap-3 mt-4">
                      <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm hover:bg-white/20 transition-colors">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-white text-[#0a1a1f] rounded-full text-sm font-medium hover:bg-[#4dd0e1] transition-colors">
                        Verify
                      </button>
                    </div>
                  </motion.div>
                </div>
                
                {/* Always visible badge */}
                <div className="absolute top-4 right-4 bg-[#4dd0e1]/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[#4dd0e1] font-medium">
                  {cert.issuer}
                </div>
              </div>
              
              {/* Floating ribbon effect */}
              <motion.div 
                className="absolute -top-3 left-4 h-2 w-16 bg-[#4dd0e1] rounded-t-lg"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="px-6 py-3 bg-[#4dd0e1]/10 backdrop-blur-sm border border-[#4dd0e1]/30 text-[#4dd0e1] rounded-full hover:bg-[#4dd0e1]/20 transition-colors flex items-center gap-2">
            View All Certificates
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}