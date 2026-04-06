import React from 'react';
import { motion } from 'framer-motion';

const FooterContent = () => {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full lg:w-1/3 lg:pl-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-3xl w-full aspect-square"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-645x500.jpg"
          alt="Floka"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src="https://floka.casethemes.net/wp-content/uploads/2025/06/footer-logo.svg"
            alt="Floka Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Outlined Text */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 647 190"
          className="w-full h-auto max-w-md opacity-50 hover:opacity-70 transition-opacity"
          whileHover={{ scale: 1.02 }}
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)',
          }}
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path
              stroke="rgba(255,255,255,0.3)"
              d="M567.184 50.814c20.401 0 36.017 4.425 46.773 13.351 10.774 8.795 16.132 21.678 16.132 38.561v50.249H646.5v33.878h-36.363V165.67h-8.936c-4.812 7.468-11.301 13.262-19.461 17.378-8.1 4.163-18.043 6.232-29.808 6.232-16.253 0-29.091-3.768-38.453-11.365-9.215-7.602-13.821-17.676-13.821-30.174 0-13.08 4.68-23.239 14.065-30.406 9.522-7.151 23.127-10.691 40.751-10.691h41.796v-4.796c0-7.985-2.428-13.892-7.213-17.818-4.804-3.941-12.066-5.954-21.872-5.954-8.347 0-14.974 1.427-19.918 4.237-4.93 2.802-8.22 6.998-9.879 12.615h-35.526c2.952-14.239 10.033-25.096 21.246-32.531 11.201-7.573 25.868-11.337 43.96-11.337Zm-10.863 79.332c-7.737 0-13.451 1.373-17.219 4.044-3.736 2.649-5.625 6.621-5.625 12.004 0 5.291 2.011 9.402 6.032 12.391 4.201 2.861 10.019 4.32 17.507 4.32 7.256 0 13.78-1.232 19.578-3.687 5.942-2.766 10.568-6.393 13.899-10.873 3.48-4.623 5.215-9.741 5.215-15.367v-2.588h-39.948Z"
              strokeWidth="2"
            />
            <path
              stroke="rgba(255,255,255,0.3)"
              d="M397.158.5v104.147h.236l58.335-51.067h42.674l-1.018.879-59.959 51.756 64.874 79.941h-41.967l-48.229-59.856-15.598 12.126v47.916h-35.439V.5h35.439Z"
              strokeWidth="2"
            />
            <path
              stroke="rgba(255,255,255,0.3)"
              d="M272.505 50.814c15.16 0 28.186 2.806 39.058 8.44 11.553 5.6 19.758 13.431 25.627 23.488 6.062 10.387 9.082 22.687 9.083 36.88 0 14.048-3.021 26.347-9.081 36.878-6.059 10.385-14.605 18.395-25.627 24.027-11.025 5.632-24.05 8.439-39.058 8.439-15.009 0-28.109-2.807-39.286-8.438-11.026-5.779-19.647-13.858-25.86-24.237-6.062-10.39-9.083-22.617-9.083-36.665 0-14.193 3.02-26.493 9.082-36.879 6.216-10.382 14.918-18.389 26.093-24.02 11.176-5.631 24.199-8.438 39.055-8.438Zm0 29.684c-12.384 0-21.949 3.5-28.766 10.442-6.665 6.944-10.026 16.588-10.026 28.998 0 12.557 3.362 22.35 10.03 29.441 6.817 6.939 16.381 10.437 28.762 10.437 12.228 0 21.637-3.499 28.3-10.437 6.669-7.092 10.03-16.813 10.03-29.222 0-12.56-3.364-22.278-10.03-29.221-6.663-6.939-16.072-10.438-28.3-10.438Z"
              strokeWidth="2"
            />
            <path
              stroke="rgba(255,255,255,0.3)"
              d="M182.019.5v186.347h-35.438V.5h35.438Z"
              strokeWidth="2"
            />
            <path
              stroke="rgba(255,255,255,0.3)"
              d="M133.938 7.12v30.126H36.863v44.013h89.909v30.126H36.863v75.463H.5V7.12h133.438Z"
              strokeWidth="2"
            />
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default FooterContent;
