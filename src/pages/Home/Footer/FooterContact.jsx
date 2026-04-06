import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContact = () => {
  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaDribbble, href: '#' },
  ];

  const contactItems = [
    {
      type: 'link',
      href: 'mailto:info@floka-design.com',
      text: 'info@floka-design.com',
    },
    {
      type: 'link',
      href: 'tel:+12345678900',
      text: '+123 (456 789 00)',
    },
    {
      type: 'text',
      text: '12/A, Booston Tower, NYC',
    },
  ];

  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
    >
      {/* About Section */}
      <div className="flex flex-col gap-6">
        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          At <span className="text-white font-semibold">Floka</span>, we believe furniture should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-fit group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {item.type === 'link' ? (
              <motion.a
                href={item.href}
                className="text-white text-lg relative block"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                {item.text}

                {/* Underline */}
                <span className="absolute bottom-0 left-0 h-[2px] bg-white w-full origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100" />
              </motion.a>
            ) : (
              <motion.div
                className="text-white text-lg relative"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                {item.text}

                {/* Underline */}
                <span className="absolute bottom-0 left-0 h-[2px] bg-white w-full origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex gap-4 pt-4">
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={idx}
              href={social.href}
              className="flex items-center justify-center w-12 h-12 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-lg" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FooterContact;