import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import AccordionItem from './AccordionItem';

gsap.registerPlugin(ScrollTrigger);

// FAQ Data
const faqData = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We provide comprehensive digital solutions including web design, development, branding, and digital marketing strategies tailored to help your business grow and succeed in the digital landscape.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=250&fit=crop',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity and scope. Most projects take between 4-12 weeks from conception to launch. We provide detailed timelines during the initial consultation to ensure transparency.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=250&fit=crop',
  },
  {
    id: 3,
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we offer comprehensive post-launch support including maintenance, updates, and optimization. Our dedicated support team is available to assist with any issues or improvements needed.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=250&fit=crop',
  },
  {
    id: 4,
    question: 'What is your pricing model?',
    answer:
      'We offer flexible pricing models based on project requirements. Options include fixed-price projects, time-and-materials, and retainer agreements. Contact us for a customized quote.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=250&fit=crop',
  },
  {
    id: 5,
    question: 'Can you work with existing codebases?',
    answer:
      'Absolutely. We specialize in working with existing systems, whether for refinement, optimization, or major overhauls. We ensure smooth integration and maintain code quality throughout the process.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=250&fit=crop',
  },
  {
    id: 6,
    question: 'How do you ensure project quality?',
    answer:
      'Quality is our top priority. We implement rigorous testing protocols, code reviews, and follow industry best practices. Our team uses modern development frameworks and stays updated with the latest technologies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=250&fit=crop',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

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

  // Left side animation
  useEffect(() => {
    if (!leftSideRef.current) return;

    gsap.fromTo(
      leftSideRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: leftSideRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  // Right side accordion animation
  useEffect(() => {
    if (!rightSideRef.current) return;

    gsap.fromTo(
      rightSideRef.current.children,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: rightSideRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="mb-16 text-center sm:text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.p 
            className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4"
            initial={{ opacity: 0, letterSpacing: '-0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.1em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            FAQ & GET ANSWER
          </motion.p>
          <motion.div 
            className="h-px w-full bg-gray-300"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* LEFT SIDE */}
          <div ref={leftSideRef} className="w-full lg:w-2/5 flex flex-col justify-end gap-6">
            {/* Text */}
            <motion.p 
              className="text-gray-600 w-75 text-base leading-relaxed"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              Don't found anything yet. Feel free to ask anything. Let's Talk
            </motion.p>

            {/* Image */}
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.img
                src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img15-800x800.jpg"
                alt="FAQ"
                className="w-75 rounded-2xl object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE - ACCORDION */}
          <div ref={rightSideRef} className="w-full lg:w-3/5 flex flex-col gap-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
