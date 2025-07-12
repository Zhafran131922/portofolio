// components/modal.js
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#0c1123] rounded-2xl border border-[#4dd0e1]/30 backdrop-blur-lg w-full max-w-3xl lg:max-w-4xl overflow-hidden"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#4dd0e1]/10 to-[#00b7c2]/10 p-6 border-b border-[#4dd0e1]/20 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="text-[#c1f5ff]/70 hover:text-white transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}