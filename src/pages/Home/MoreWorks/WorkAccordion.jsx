import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

// Hire Us Button Component
const HireUsButton = () => {
  const plusIconRef = useRef(null);
  const crossIconRef = useRef(null);

  const handleHover = () => {
    gsap.to(plusIconRef.current, {
      rotation: 90,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(crossIconRef.current, {
      rotation: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleHoverEnd = () => {
    gsap.to(plusIconRef.current, {
      rotation: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(crossIconRef.current, {
      rotation: -90,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div className="flex justify-center py-8 sm:py-12 lg:py-16">
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        className="inline-flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-300 group cursor-pointer"
      >
        {/* Icon Circle Container */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
          {/* Plus Icon */}
          <div
            ref={plusIconRef}
            className="absolute w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center"
            style={{ opacity: 1, rotation: 0 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              className="w-full h-full"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>

          {/* Cross Icon */}
          <div
            ref={crossIconRef}
            className="absolute w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center"
            style={{ opacity: 0, rotation: -90 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              className="w-full h-full"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <span className="text-sm sm:text-base font-inter font-bold text-white uppercase tracking-wider">
          Hire Us today
        </span>
      </button>
    </div>
  );
};

const WorkAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const imageRefs = useRef([]);

  const accordionData = [
    {
      id: 1,
      title: 'User Interface & Experience Design',
      description:
        'We craft intuitive and beautiful interfaces that engage users and drive conversions. Every pixel is purposeful.',
      tags: ['UI/UX', 'DESIGN', 'RESEARCH'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Web Development',
      description:
        'Building fast, scalable, and modern web applications with cutting-edge technologies and best practices.',
      tags: ['REACT', 'DEVELOPMENT', 'PERFORMANCE'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Search Engine Optimization',
      description:
        'Optimize your digital presence for search engines to reach more customers and increase organic traffic.',
      tags: ['SEO', 'MARKETING', 'ANALYTICS'],
      image: 'https://images.unsplash.com/photo-1551433473-3f2f6da87aaf?w=500&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Low-Code Development',
      description:
        'Rapid prototyping and deployment using low-code platforms for faster time-to-market solutions.',
      tags: ['AUTOMATION', 'SPEED', 'EFFICIENCY'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop',
    },
  ];

  const marqueeText =
    '10/10 well recommended • Super speedy website designer • Best agency in town • 10/10 well recommended • Super speedy website designer • Best agency in town • ';

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      review: 'Very good communicator',
      image: 'https://i.pravatar.cc/48?img=1',
    },
    {
      id: 2,
      name: 'Mike Chen',
      review: 'Excellent work quality',
      image: 'https://i.pravatar.cc/48?img=2',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      review: 'Highly recommended',
      image: 'https://i.pravatar.cc/48?img=3',
    },
    {
      id: 4,
      name: 'David Lee',
      review: 'Professional service',
      image: 'https://i.pravatar.cc/48?img=4',
    },
    {
      id: 5,
      name: 'Lisa Brown',
      review: 'Amazing results',
      image: 'https://i.pravatar.cc/48?img=5',
    },
    {
      id: 6,
      name: 'James Taylor',
      review: 'Best in industry',
      image: 'https://i.pravatar.cc/48?img=6',
    },
  ];

  useEffect(() => {
    // Animate content expand/collapse
    contentRefs.current.forEach((contentRef, index) => {
      if (contentRef) {
        if (index === activeIndex) {
          // Expand
          gsap.timeline().to(contentRef, {
            height: 'auto',
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
          });

          // Slide image in from right
          if (imageRefs.current[index]) {
            gsap.fromTo(
              imageRefs.current[index],
              { opacity: 0, x: 50 },
              {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'power3.out',
                delay: 0.1,
              }
            );
          }
        } else {
          // Collapse
          gsap.to(contentRef, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'power3.out',
          });
        }
      }
    });
  }, [activeIndex]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-black min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-funnel leading-tight">
              <span className="text-white block">Company</span>
              <span className="text-gray-500 opacity-40 block">expertise</span>
            </h1>
          </div>

          {/* Accordion */}
          <div className="space-y-0 w-full">
            {accordionData.map((item, index) => (
              <div
                key={item.id}
                className="border-b border-gray-800 hover:border-gray-700 transition-colors duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between cursor-pointer group hover:bg-gray-900/30 px-2 transition-colors duration-300"
                >
                  {/* Plus/Minus Button */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 group-hover:border-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <span className="text-white text-lg sm:text-xl font-light">
                        {activeIndex === index ? '−' : '+'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-inter font-bold text-white text-left">
                      {item.title}
                    </h3>
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="px-2 sm:px-6 pb-8 sm:pb-12">
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
                      {/* Left Side - Description & Tags */}
                      <div className="flex-1 min-h-0">
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-700 rounded-full text-xs sm:text-sm text-gray-300 font-inter font-semibold hover:border-white hover:text-white transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Image */}
                      <div className="w-full lg:w-64 flex-shrink-0">
                        <img
                          ref={(el) => (imageRefs.current[index] = el)}
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 sm:h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* Hire Us Button */}
    <HireUsButton />

      {/* Marquee Section */}
      <div className="w-full bg-black py-4 sm:py-6 lg:py-8 overflow-hidden">
        <div className="relative flex whitespace-nowrap">
          <div
            className="flex gap-8 sm:gap-12 animate-marquee"
            style={{
              animation: 'marquee 40s linear infinite',
            }}
          >
            {/* First iteration */}
            {reviews.map((review) => (
              <div
                key={`review-1-${review.id}`}
                className="flex items-center gap-3 sm:gap-4 flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 rounded-full"
              >
                {/* Circular Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />

                {/* Review Text */}
                <p className="text-xs sm:text-sm font-inter text-gray-300 font-semibold">
                  {review.review}
                </p>
              </div>
            ))}

            {/* Second iteration for seamless loop */}
            {reviews.map((review) => (
              <div
                key={`review-2-${review.id}`}
                className="flex items-center gap-3 sm:gap-4 flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4"
              >
                {/* Circular Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />

                {/* Review Text */}
                <p className="text-xs sm:text-sm font-inter text-gray-300 font-semibold">
                  {review.review}
                </p>
              </div>
            ))}
          </div>

          {/* CSS Animation */}
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee {
              width: 200%;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default WorkAccordion;