"use client";

import LeftContent from "@/app/components/webdev";
import RightContent from "@/app/components/3d";
import AboutUs from "@/app/components/aboutus";
import Navbar from "@/app/components/navbar";
import Education from "@/app/components/education";
import Portofolio from "@/app/components/portofolio";
import Contact from "@/app/components/contact";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Generate particles only on client
  useEffect(() => {
    setIsClient(true);

    const particlesData = Array.from({ length: 150 }).map(() => ({
      id: Math.random().toString(36).substring(2, 9),
      size: Math.random() * 8 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));

    setParticles(particlesData);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020F12] text-white">
      <Navbar />
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-70 z-0"
        style={{
          background: "linear-gradient(to bottom, #020F12, #034D49, #020F12)",
        }}
      ></div>

      {/* Floating particles background */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-[#00b7c2]/30"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animation: `float ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-8 gap-16">
        <div id="home" className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-16 mt-15 md:mt-0">
            <LeftContent />
            <RightContent />
          </div>
        </div>

        <div id="about" className="w-full">
          <AboutUs />
        </div>

        <Education />

        <div id="portfolio" className="w-full">
          <Portofolio />
        </div>

        <div id="contact" className="w-full">
          <Contact />
        </div>
        <span className="mb-5">
          <p>@2025 All Rights Reserved</p>
        </span>
      </div>

      {/* Keyframes untuk floating particles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20vw) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
