"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Notification({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-xl p-4 shadow-2xl ${
          type === "success"
            ? "bg-gradient-to-r from-emerald-500 to-teal-600"
            : "bg-gradient-to-r from-rose-600 to-pink-600"
        }`}
      >
        <div className="text-2xl">
          {type === "success" ? (
            <FaCheckCircle className="text-white" />
          ) : (
            <FaTimesCircle className="text-white" />
          )}
        </div>
        <div className="text-white font-medium max-w-xs">
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-white/80 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}