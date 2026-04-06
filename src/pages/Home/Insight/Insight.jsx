import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Blog Data
const blogData = [
  {
    id: 1,
    category: 'WEB3',
    date: 'March 15, 2024',
    title: 'The Future of Decentralized Applications',
    description:
      'Exploring innovative approaches to building scalable blockchain solutions.',
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img3-800x800.webp',
  },
  {
    id: 2,
    category: 'DESIGN',
    date: 'March 10, 2024',
    title: 'Creating Memorable User Experiences',
    description: 'Design principles that transform ordinary interfaces into extraordinary ones.',
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img2-800x800.webp',
  },
  {
    id: 3,
    category: 'DEV',
    date: 'March 5, 2024',
    title: 'Modern React Patterns & Best Practices',
    description: 'Latest techniques for building performant and maintainable React applications.',
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img1-800x800.webp',
  },
];

// Blog Card with Image Parallax
const BlogCard = ({ card, index }) => {
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Reverse layout for middle card
  const isReversed = index === 1;

  const handleImageMouseMove = (e) => {
    if (!imageContainerRef.current || !imageRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.1;
    const moveY = (y - rect.height / 2) * 0.1;

    setMousePos({ x: moveX, y: moveY });

    imageRef.current.style.transform = `scale(1.08) translate(${moveX}px, ${moveY}px)`;
  };

  const handleImageMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1) translate(0, 0)';
    }
  };

  const textContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-black text-white p-6 rounded-2xl flex flex-col justify-center h-40 min-h-40"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold tracking-widest text-gray-400">
          {card.category}
        </span>
        <span className="text-xs text-gray-500">•</span>
        <span className="text-xs text-gray-400">{card.date}</span>
      </div>
      <h3 className="text-base sm:text-xl font-bold leading-tight">
        {card.title}
      </h3>
    </motion.div>
  );

  const imageContent = (
    <motion.div
      ref={imageContainerRef}
      className="relative overflow-hidden rounded-2xl h-96 cursor-pointer group"
      onMouseMove={handleImageMouseMove}
      onMouseLeave={handleImageMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
    >
      <img
        ref={imageRef}
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover transition-transform duration-300"
        style={{
          transform: 'scale(1) translate(0, 0)',
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
    </motion.div>
  );

  return (
    <motion.div
      className="flex flex-col gap-4 h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {isReversed ? (
        <>
          {imageContent}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="bg-white text-gray-900 p-6 rounded-2xl flex flex-col justify-center h-40 min-h-40"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-gray-700">
                {card.category}
              </span>
              <span className="text-xs text-gray-600">•</span>
              <span className="text-xs text-gray-600">{card.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              {card.title}
            </h3>
          </motion.div>
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </motion.div>
  );
};

const Insight = () => {
  const sectionRef = useRef(null);

  // Section scroll animation
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-600 mb-4"
            initial={{ opacity: 0, letterSpacing: '-0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.1em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            INSIGHTS
          </motion.p>

          <motion.h2
            className="text-xl sm:text-4xl lg:text-5xl font-funnel text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            Company blog & updates
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogData.map((card, index) => (
            <BlogCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insight;
