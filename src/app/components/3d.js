"use client";

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function FloatingSpline() {
  const containerRef = useRef(null);
  const splineRef = useRef();
  
  // Fungsi untuk menggerakkan Spline secara smooth
  useEffect(() => {
    if (!splineRef.current) return;
    
    let animationId;
    let startTime;
    const amplitude = 3; // Besar pergerakan naik turun (dalam persentase)
    const speed = 0.001; // Kecepatan animasi
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      // Hitung waktu yang telah berlalu
      const elapsed = timestamp - startTime;
      
      // Hitung posisi Y baru menggunakan fungsi sinus untuk efek smooth
      const yOffset = Math.sin(elapsed * speed) * amplitude;
      
      // Terapkan transformasi ke Spline
      splineRef.current.style.transform = `translateY(${yOffset}%)`;
      
      // Lanjutkan animasi
      animationId = requestAnimationFrame(animate);
    };
    
    // Mulai animasi
    animationId = requestAnimationFrame(animate);
    
    // Bersihkan saat komponen di-unmount
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '40vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Lapisan transparan untuk menutupi watermark */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }} />
      
      {/* Animasi floating untuk Spline */}
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