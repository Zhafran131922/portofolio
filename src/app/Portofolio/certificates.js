"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import sertif1 from "../../../public/assets/sertif1.jpg";
import sertif2 from "../../../public/assets/sertif2.jpg";
import sertif3 from "../../../public/assets/sertif3.jpg";
import sertif4 from "../../../public/assets/sertif4.jpg";
import sertif5 from "../../../public/assets/sertif5.jpg";
import sertif6 from "../../../public/assets/sertif6.jpg";
import sertif7 from "../../../public/assets/sertif7.jpg";
import sertif8 from "../../../public/assets/sertif8.jpg";


export default function Certificates() {
  const certificates = [
    {
      id: 1,
      imageSrc: sertif2,
      altText: "Bangkit Certificate of Completion",
      captionText: "Cloud Computing",
      issuer: "Google",
      date: "January 19, 2024"
    },
    {
      id: 2,
      imageSrc: sertif1,
      altText: "Certificate of Course Completion",
      captionText: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "January 31, 2024"
    },
    {
      id: 3,
      imageSrc: sertif3,
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText: "Belajar Membuat Aplikasi Backend untuk Pemula dengan Google Cloud",
      issuer: "Dicoding",
      date: "5 Oktober 2025"
    },
    {
      id: 4,
      imageSrc: sertif4,
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      date: "21 September 2023"
    },
    {
      id: 5,
      imageSrc: sertif5,
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "13 September 2023"
    },
    {
      id: 6,
      imageSrc: sertif6,
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText: "Menjadi Google Cloud Engineer",
      issuer: "Dicoding",
      date: "7 November 2023"
    },
    {
      id: 7,
      imageSrc: sertif7,
      altText: "Course Certificate",
      captionText: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "August 27, 2023"
    },
    {
      id: 8,
      imageSrc: sertif8,
      altText: "Course Certificate",
      captionText: "System Administration and IT Infrastructure Services",
      issuer: "Coursera",
      date: "October 15, 2023"
    }
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
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-[#4dd0e1]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{cert.captionText}</h3>
                    <p className="text-gray-200 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                    <div className="flex justify-center gap-3 mt-4">
                      <button className="px-4 py-2 bg-white text-[#0a1a1f] rounded-full text-sm font-medium hover:bg-[#4dd0e1] transition-colors">
                        View Details
                      </button>
                    </div>
                  </motion.div>
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
      </div>
    </section>
  );
}