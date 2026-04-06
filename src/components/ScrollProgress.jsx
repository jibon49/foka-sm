import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - scrollProgress);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;

      setScrollProgress(scrolled);

      // Show/hide button after 100px scroll
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#01062E] hover:bg-gray-900 flex items-center justify-center z-50 shadow-lg transition-all duration-300"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* SVG Circular Progress */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 64 64"
      >
        {/* Background circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="3"
        />

        {/* Progress circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.2s linear',
            transform: 'rotate(-90deg)',
            transformOrigin: '32px 32px',
          }}
        />
      </svg>

      {/* Arrow Icon */}
      <motion.div
        className="relative z-10 flex items-center justify-center text-white"
        animate={{
          y: isVisible ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp className="text-xl sm:text-2xl" />
      </motion.div>
    </motion.button>
  );
};

export default ScrollProgress;
