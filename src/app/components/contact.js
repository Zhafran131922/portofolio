"use client";

import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FallingText from "../ReactBits/FallingText";

// Icon sosmed (gunakan dari react-icons)
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa6";

export default function ContactMeWithConnect() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Data sosial media dengan link
  const socialMedia = [
    {
      icon: <FaFacebookF />,
      label: "Zhafran Gopreto",
      platform: "Facebook",
      link: "https://facebook.com/ZhafranGopreto",
    },
    {
      icon: <FaInstagram />,
      label: "rpradana10",
      platform: "Instagram",
      link: "https://instagram.com/rpradana10",
    },
    {
      icon: <FaXTwitter />,
      label: "ZhafranR_",
      platform: "X",
      link: "https://twitter.com/ZhafranR_",
    },
    {
      icon: <FaTiktok />,
      label: "zhafran10pradana",
      platform: "Tiktok",
      link: "https://tiktok.com/@zhafran10pradana",
    },
    {
      icon: <FaDiscord />,
      label: "zhafran131922",
      platform: "Discord",
      link: "https://discord.com/users/zhafran131922",
    },
    {
      icon: <FaYoutube />,
      label: "zhafran R",
      platform: "YouTube",
      link: "https://youtube.com/@zhafranr6395",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 justify-items-center">
      <FallingText
        sentence="What&apos;s on your mind?"
        manualMode={false}
        blurAmount={5}
        borderColor="#4dd0e1"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row gap-6"
      >
        {/* Left Side - Contact Form */}
        <div className="flex-1 bg-gradient-to-br from-[#0c1123]/90 to-[#020f12]/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-[#4dd0e1]/20 relative">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2]">
              Get in Touch
            </h2>
            <p className="text-[#c1f5ff]/80 mb-6">
              Open to collaborations, challenges, and coffee chats.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-[#4dd0e1]/70" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-[#0c1123]/60 border border-[#4dd0e1]/30 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#c1f5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#4dd0e1]/50 focus:border-transparent"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-[#4dd0e1]/70" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-[#0c1123]/60 border border-[#4dd0e1]/30 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#c1f5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#4dd0e1]/50 focus:border-transparent"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FaComment className="text-[#4dd0e1]/70" />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-[#0c1123]/60 border border-[#4dd0e1]/30 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#c1f5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#4dd0e1]/50 focus:border-transparent"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_-5px_rgba(0,183,194,0.5)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                <FaPaperPlane />
                {isSubmitting ? "Sending..." : "Send Message"}
                {isSubmitting && (
                  <motion.span
                    className="ml-2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ⏳
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </form>
        </div>

        {/* Right Side - Connect With Me */}
        <div className="w-full md:w-[320px] bg-[#0c1123]/80 rounded-2xl p-6 shadow-xl border border-[#4dd0e1]/10 flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold border-b border-[#4dd0e1]/30 pb-2 mb-2">
            Connect With Me
          </h3>

          {socialMedia.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#152032] hover:bg-[#1e2b40] transition group"
            >
              <div className="text-xl text-[#4dd0e1] group-hover:text-[#00b7c2] transition-colors">
                {item.icon}
              </div>
              <div className="text-sm text-white leading-tight">
                <div className="font-medium group-hover:text-[#4dd0e1] transition-colors">
                  {item.label}
                </div>
                <div className="text-[#c1f5ff]/60 text-xs group-hover:text-[#c1f5ff] transition-colors">
                  on {item.platform}
                </div>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#4dd0e1]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          ))}
          
          {/* Floating elements */}
          <motion.div 
            className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#4dd0e1]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#00b7c2]"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}