import React from 'react';
import { motion } from 'framer-motion';

const HeroText = ({ heroTextRef }) => {
  return (
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1
        ref={heroTextRef}
        className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight"
        style={{
          background: 'linear-gradient(to bottom, white, rgba(255,255,255,0))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Let's talk now
      </h1>
    </motion.div>
  );
};

export default HeroText;
