"use client";

import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const formatContent = (content) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("*") && line.endsWith("*")) {
        return (
          <p key={index} className="text-[#4dd0e1] font-medium my-2">
            {line.replace(/\*/g, "")}
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 last:mb-0">
          {line}
        </p>
      );
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={overlayVariants}
      onClick={onClose}
    >
      <motion.div
        className="bg-[#0f172a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#4dd0e1]/30 shadow-xl relative"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#0f172a]/90 backdrop-blur-sm z-10 p-6 border-b border-[#4dd0e1]/10 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#4dd0e1]">{content.title}</h3>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="p-6">
          <div className="prose prose-invert text-white/80">
            {formatContent(content.content)}
          </div>
        </div>

        <div className="sticky bottom-0 bg-gradient-to-t from-[#0f172a] to-transparent h-12"></div>
      </motion.div>
    </motion.div>
  );
}