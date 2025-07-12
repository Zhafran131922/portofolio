"use client";

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function FloatingSpline() {
  const containerRef = useRef(null);
  const splineRef = useRef();
  
  // Floating animation effect
  useEffect(() => {
    if (!splineRef.current) return;
    
    let animationId;
    let startTime;
    const amplitude = 3; // Vertical movement amount (percentage)
    const speed = 0.001; // Animation speed
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      // Calculate elapsed time
      const elapsed = timestamp - startTime;
      
      // Calculate new Y position using sine function for smooth effect
      const yOffset = Math.sin(elapsed * speed) * amplitude;
      
      // Apply transformation to Spline
      splineRef.current.style.transform = `translateY(${yOffset}%)`;
      
      // Continue animation
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationId = requestAnimationFrame(animate);
    
    // Cleanup on unmount
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hidden md:block" // Hidden on small screens, visible on medium and above
      style={{
        position: 'relative',
        width: '40vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Watermark cover layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }} />
      
      {/* Animated floating spline */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '130%',
          height: '130%',
          zIndex: 0
        }}
        ref={splineRef}
      >
        <Spline
          scene="https://prod.spline.design/DY4L-aJQcs35wOmY/scene.splinecode"
        />
      </motion.div>
    </div>
  );
}