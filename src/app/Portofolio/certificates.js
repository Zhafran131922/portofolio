"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import sertif1 from "../../../public/assets/sertif1.jpg";
import sertif2 from "../../../public/assets/sertif2.jpg";
import sertif3 from "../../../public/assets/sertif3.jpg";
import sertif4 from "../../../public/assets/sertif4.jpg";
import sertif5 from "../../../public/assets/sertif5.jpg";
import sertif6 from "../../../public/assets/sertif6.jpg";
import sertif7 from "../../../public/assets/sertif7.jpg";
import sertif8 from "../../../public/assets/sertif8.jpg";
import sertif22 from "../../../public/assets/sertif22.jpg";
import sertif33 from "../../../public/assets/sertif33.jpg";
import sertif44 from "../../../public/assets/sertif44.jpg";
import sertif55 from "../../../public/assets/sertif55.jpg";
import sertif66 from "../../../public/assets/sertif66.jpg";
import sertif444 from "../../../public/assets/sertif444.jpg";
import sertif555 from "../../../public/assets/sertif555.jpg";
import sertif666 from "../../../public/assets/sertif666.jpg";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      images: [sertif2, sertif22],
      altText: "Bangkit Certificate of Completion",
      captionText: "Cloud Computing",
      issuer: "Google",
      date: "January 19, 2024",
    },
    {
      id: 2,
      images: [sertif1],
      altText: "Certificate of Course Completion",
      captionText: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "January 31, 2024",
    },
    {
      id: 3,
      images: [sertif3, sertif33],
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText:
        "Belajar Membuat Aplikasi Backend untuk Pemula dengan Google Cloud",
      issuer: "Dicoding",
      date: "5 Oktober 2025",
    },
    {
      id: 4,
      images: [sertif4, sertif44, sertif444],
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      date: "21 September 2023",
    },
    {
      id: 5,
      images: [sertif5, sertif55, sertif555],
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "13 September 2023",
    },
    {
      id: 6,
      images: [sertif6, sertif66, sertif666],
      altText: "Sertifikat Kompetensi Kelulusan",
      captionText: "Menjadi Google Cloud Engineer",
      issuer: "Dicoding",
      date: "7 November 2023",
    },
    {
      id: 7,
      images: [sertif7],
      altText: "Course Certificate",
      captionText: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "August 27, 2023",
    },
    {
      id: 8,
      images: [sertif8],
      altText: "Course Certificate",
      captionText: "System Administration and IT Infrastructure Services",
      issuer: "Coursera",
      date: "October 15, 2023",
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedCert.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedCert.images.length) % selectedCert.images.length
    );
  };

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0, 183, 194, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
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
                    src={cert.images[0]}
                    alt={cert.altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

                {/* Hover Overlay (Desktop only) */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-b  from-[#0f172a]/80 to-[#4dd0e1]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-bold text-white mb-1 mt-5">
                      {cert.captionText}
                    </h3>
                    <p className="text-gray-200 text-sm mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <div className="flex justify-center gap-3 mt-4">
                      <button
                        onClick={() => openModal(cert)}
                        className="px-4 py-2 bg-white text-[#0a1a1f] rounded-full text-sm font-medium hover:bg-[#4dd0e1] transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Details (always visible on mobile) */}
              <div className="sm:hidden mt-3">
                <h3 className="text-lg font-bold text-[#4dd0e1] mb-1 text-center">
                  {cert.captionText}
                </h3>
                <p className="text-gray-300 text-sm mb-2 text-center">
                  {cert.issuer} • {cert.date}
                </p>
                <button
                  onClick={() => openModal(cert)}
                  className="px-4 py-2 bg-[#4dd0e1] text-[#0a1a1f] rounded-full text-sm font-medium hover:bg-[#00b7c2] transition-colors w-full"
                >
                  View Details
                </button>
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

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-[#0f172a] rounded-xl overflow-hidden border border-[#4dd0e1]/30"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#0f172a] border border-[#4dd0e1]/30 text-[#4dd0e1] hover:bg-[#4dd0e1]/10 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Main Image */}
              <div className="relative h-[70vh]">
                <Image
                  src={selectedCert.images[currentImageIndex]}
                  alt={selectedCert.altText}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Navigation Arrows */}
              {selectedCert.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0f172a]/80 border border-[#4dd0e1]/30 text-[#4dd0e1] hover:bg-[#4dd0e1]/10 transition-colors"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0f172a]/80 border border-[#4dd0e1]/30 text-[#4dd0e1] hover:bg-[#4dd0e1]/10 transition-colors"
                  >
                    &rarr;
                  </button>
                </>
              )}

              {/* Image Counter */}
              {selectedCert.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0f172a]/80 border border-[#4dd0e1]/30 text-white text-sm">
                  {currentImageIndex + 1} / {selectedCert.images.length}
                </div>
              )}

              {/* Certificate Info */}
              <div className="p-6 bg-[#0f172a] border-t border-[#4dd0e1]/20">
                <h3 className="text-xl font-bold text-[#4dd0e1] mb-1">
                  {selectedCert.captionText}
                </h3>
                <p className="text-gray-300">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
