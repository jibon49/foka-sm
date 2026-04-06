import React from 'react';
import { motion } from 'framer-motion';

const FooterBottom = () => {
  const policies = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-20 pt-8 border-t border-gray-700 text-center sm:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
    >
      <p className="text-sm text-gray-500">
        © 2024 Floka. All rights reserved.
      </p>
      <div className="flex gap-6">
        {policies.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default FooterBottom;
