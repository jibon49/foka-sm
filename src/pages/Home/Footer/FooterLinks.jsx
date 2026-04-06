import React from 'react';
import { motion } from 'framer-motion';

const FooterLinks = () => {
  const links = ['About Us', 'Journal', 'Faq', 'Get In Touch', 'Careers'];

  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
    >
      {links.map((link, idx) => (
        <motion.a
          key={idx}
          href="#"
          className="text-3xl sm:text-4xl text-white hover:text-gray-300 transition-colors duration-300 font-bold"
          whileHover={{ x: 8 }}
          transition={{ duration: 0.2 }}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FooterLinks;
