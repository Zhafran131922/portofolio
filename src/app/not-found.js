// app/not-found.js
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NotFound() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(77, 208, 225, ${1 - distance/100})`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden">
      {/* Particle background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a]/90 to-[#0f172a] z-10" />
      
      {/* Glassmorphism card */}
      <motion.div 
        className="relative z-20 bg-[#0f172a]/70 backdrop-blur-xl border border-[#4dd0e1]/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated 404 text */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1 
            className="text-9xl font-bold mb-2 text-[#4dd0e1]"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 10px rgba(77, 208, 225, 0.3)",
                "0 0 20px rgba(77, 208, 225, 0.5)",
                "0 0 10px rgba(77, 208, 225, 0.3)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            404
          </motion.h1>
          
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#4dd0e1] to-[#00b7c2] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>
        
        {/* Content */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4 text-white"
            animate={{ 
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity 
            }}
          >
            Page Not Found
          </motion.h2>
          
          <p className="text-[#c1f5ff]/80 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            <br />
            Let&apos;s get you back to safety.
          </p>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <motion.button
                className="w-full max-w-xs mx-auto bg-gradient-to-r from-[#00b7c2] to-[#4dd0e1] text-white font-medium px-6 py-3 rounded-full shadow-lg"
                animate={{
                  background: [
                    "linear-gradient(to right, #00b7c2, #4dd0e1)",
                    "linear-gradient(to right, #4dd0e1, #00b7c2)",
                    "linear-gradient(to right, #00b7c2, #4dd0e1)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity 
                }}
              >
                Return to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Floating objects */}
        <motion.div 
          className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#4dd0e1]/20 backdrop-blur-sm border border-[#4dd0e1]/30 z-0"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-6 -right-6 w-10 h-10 rounded-full bg-[#00b7c2]/20 backdrop-blur-sm border border-[#00b7c2]/30 z-0"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
      
      {/* Floating text */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 text-center text-[#c1f5ff]/40 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Lost in the digital cosmos
      </motion.div>
    </div>
  );
}