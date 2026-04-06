import React, { useEffect, useRef, useState } from 'react';
import { RiArrowRightLongLine } from "react-icons/ri";
import { motion } from 'framer-motion';

const CircularText = ({ circleRef }) => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const textRef = useRef(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      setRotation(prev => prev + delta * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="flex justify-center mb-20"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex items-center justify-center">
        {/* SVG with circling text */}
        <svg
          viewBox="0 0 300 300"
          className="absolute w-full h-full"
          ref={circleRef}
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              fill="none"
            />
          </defs>

          {/* Text following circular path - rotates on scroll */}
          <text
            ref={textRef}
            letterSpacing="3"
            fontSize="14"
            fill="rgba(255,255,255,0.6)"
            fontWeight="bold"
            fontFamily="system-ui, -apple-system, sans-serif"
            style={{
              transformOrigin: '150px 150px',
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <textPath href="#circlePath" startOffset="0%">
              GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH •
            </textPath>
          </text>
        </svg>

        {/* Center Arrow */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full text-white cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <RiArrowRightLongLine className="text-lg sm:text-6xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CircularText;