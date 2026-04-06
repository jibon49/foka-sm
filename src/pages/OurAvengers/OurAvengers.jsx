
import React, { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnimatedIconButton from '../../components/AnimatedIconButton'

gsap.registerPlugin(ScrollTrigger);

// Team Data
const designTeam = [
  {
    id: 1,
    name: 'Sarah Anderson',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    id: 2,
    name: 'Emma Wilson',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    id: 3,
    name: 'Jessica Lee',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    id: 4,
    name: 'Michelle Brown',
    role: 'Brand Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
];

const developmentTeam = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    id: 2,
    name: 'David Martinez',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    social: [
      { icon: FaFacebook, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
];

// Team Card Component
const TeamCard = ({ member }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.1;
    const moveY = (y - rect.height / 2) * 0.1;

    setMousePos({ x: moveX, y: moveY });

    if (imgRef.current) {
      imgRef.current.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    if (imgRef.current) {
      imgRef.current.style.transform = 'scale(1) translate(0, 0)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-gray-100 rounded-2xl p-4 overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image Container */}
      <div className="relative h-80 w-full overflow-hidden rounded-xl mb-4">
        <img
          ref={imgRef}
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {member.social.map((social, idx) => {
            const IconComponent = social.icon;
            return (
              <a
                key={idx}
                href={social.link}
                className="px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors duration-300"
              >
                <IconComponent className="text-gray-900 text-sm" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const OurAvengers = () => {
  const [activeTab, setActiveTab] = useState('design');
  const gridRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [imageParallax, setImageParallax] = useState({ x: 0 });

  const currentTeam = activeTab === 'design' ? designTeam : developmentTeam;

  // Scroll Animation
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Tab switch animation
  useEffect(() => {
    if (!gridRef.current) return;

    gsap.to(gridRef.current, {
      opacity: 1,
      duration: 0.3,
    });
  }, [activeTab]);

  // Parallax effect for bottom image
  const handleImageMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const maxX = rect.width;
    
    // Calculate parallax from -80 to 80
    const parallaxX = ((x / maxX) * 160) - 80;
    
    setImageParallax({ x: parallaxX });
  };

  const handleImageMouseLeave = () => {
    setImageParallax({ x: 0 });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:gap-20 lg:flex-row">
          {/* LEFT SIDE */}
          <motion.div 
            className="flex flex-col gap-8 flex-shrink-0 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {/* Label */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                OUR AVENGERS
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Meet with our team member
              </h2>
            </motion.div>

            {/* Tabs */}
            <motion.div 
              className="flex gap-8 border-b border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <button
                onClick={() => setActiveTab('design')}
                className={`pb-3 font-semibold transition-all duration-300 ${
                  activeTab === 'design'
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                DESIGN TEAM
              </button>
              <button
                onClick={() => setActiveTab('development')}
                className={`pb-3 font-semibold transition-all duration-300 ${
                  activeTab === 'development'
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                DEVELOPMENT TEAM
              </button>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-gray-600 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              {activeTab === 'design'
                ? 'Our creative design team crafts stunning visual experiences that resonate with audiences and elevate your brand to new heights.'
                : 'Our development team builds robust, scalable solutions using cutting-edge technology to bring your vision to life.'}
            </motion.p>

            {/* Button */}
            <AnimatedIconButton
            text='Join with us'
            hoverBgColor='none'
            bgColor='bg-white'
            ></AnimatedIconButton>

            {/* Bottom Image */}
            <motion.div 
              ref={imageRef}
              className="mt-4 overflow-hidden rounded-2xl"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
            >
              <motion.img
                src="	https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14.jpg"
                alt="Team collaboration"
                className="w-full object-cover h-64"
                style={{
                  x: imageParallax.x,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - GRID */}
          <div ref={gridRef} className="flex-1">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentTeam.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAvengers;