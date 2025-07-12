"use client";

import {
  FaCode,
  FaUser,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Hello from "@/app/components/hello";
import ShinyText from "./ReactBits/ShinyText";
import { motion, AnimatePresence } from "framer-motion";

const GradientText = ({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default function Portfolio() {
  const containerRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    // Buat lingkaran animasi
    const createCircles = () => {
      const container = containerRef.current;
      if (!container) return;

      // Warna yang digunakan (dari gradient asli)
      const colors = ["#020F12", "#034D49", "#00b7c2", "#4dd0e1"];

      // Fungsi untuk membuat lingkaran baru dengan animasi CSS
      const createCircle = (index) => {
        const circle = document.createElement("div");

        // Ukuran acak antara 250-500px
        const size = 250 + Math.random() * 250;

        // Warna acak dari palet
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Opacity lebih tinggi (30-50%)
        const opacity = 0.3 + Math.random() * 0.2;

        // Durasi animasi yang berbeda untuk setiap lingkaran
        const duration = 15 + Math.random() * 10;

        // Atur properti lingkaran
        circle.className = `circle-animation-${index} absolute rounded-full blur-[100px]`;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.background = color;
        circle.style.opacity = `${opacity}`;
        circle.style.zIndex = "0";
        circle.style.willChange = "transform";

        container.appendChild(circle);

        // Tambahkan keyframes secara dinamis
        const style = document.createElement("style");
        style.textContent = `
          @keyframes moveCircle-${index} {
            0% {
              transform: translate(${Math.random() * 100}vw, ${
          Math.random() * 100
        }vh);
            }
            25% {
              transform: translate(${Math.random() * 100}vw, ${
          Math.random() * 100
        }vh);
            }
            50% {
              transform: translate(${Math.random() * 100}vw, ${
          Math.random() * 100
        }vh);
            }
            75% {
              transform: translate(${Math.random() * 100}vw, ${
          Math.random() * 100
        }vh);
            }
            100% {
              transform: translate(${Math.random() * 100}vw, ${
          Math.random() * 100
        }vh);
            }
          }
          
          .circle-animation-${index} {
            animation: moveCircle-${index} ${duration}s linear infinite;
          }
        `;

        document.head.appendChild(style);
        return { circle, style };
      };

      // Buat 8 lingkaran
      const circles = [];
      const styles = [];
      for (let i = 0; i < 8; i++) {
        const { circle, style } = createCircle(i);
        circles.push(circle);
        styles.push(style);
      }

      // Bersihkan saat komponen di-unmount
      return () => {
        circles.forEach((circle) => {
          if (circle.parentNode === container) {
            container.removeChild(circle);
          }
        });
        styles.forEach((style) => {
          if (style.parentNode === document.head) {
            document.head.removeChild(style);
          }
        });
      };
    };

    // Tampilkan Hello selama 5 detik
    const helloTimeout = setTimeout(() => {
      setShowHello(false);
    }, 5000);

    // Tampilkan konten utama setelah 8 detik
    const contentTimeout = setTimeout(() => {
      createCircles();
      setShowContent(true);
    }, 5000);

    return () => {
      clearTimeout(helloTimeout);
      clearTimeout(contentTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#020F12] text-white text-center px-4 overflow-hidden"
    >
      {/* Base gradient background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: "linear-gradient(to bottom, #020F12, #034D49)",
        }}
      />

      {/* Splash Screen dengan animasi Hello */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hello />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten Utama */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="relative z-10 flex flex-col items-center w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex gap-6 mb-8 text-2xl text-[#00b7c2]">
              <FaCode className="hover:text-[#4dd0e1] transition-colors" />
              <FaUser className="hover:text-[#4dd0e1] transition-colors" />
              <FaGithub className="hover:text-[#4dd0e1] transition-colors" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              Welcome To My
            </h1>

            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-4xl md:text-5xl font-bold mb-10"
            >
              Portfolio Website
            </GradientText>

            <p className="text-lg md:text-xl text-[#c1f5ff] max-w-2xl mb-10">
              Frontend Developer specializing in React and Next.js with a
              passion for creating beautiful, performant user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-50 max-w-md">
              <Link href="/main" className="flex-1">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  <ShinyText
                    text="Click Me!"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
