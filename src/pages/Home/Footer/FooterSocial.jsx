import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterSocial = () => {
  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaDribbble, href: '#' },
  ];

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
    >
      <div className="flex gap-6">
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={idx}
              href={social.href}
              className="flex items-center justify-center w-14 h-14 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-xl" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FooterSocial;
