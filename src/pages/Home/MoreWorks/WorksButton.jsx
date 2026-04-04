

import { useRef } from 'react';
import gsap from 'gsap';

const WorksButton = () => {
  const plusIconRef = useRef(null);
  const crossIconRef = useRef(null);

  const handleHover = () => {
    // Hide plus icon with rotation
    gsap.to(plusIconRef.current, {
      rotation: 90,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    });

    // Show cross icon with rotation
    gsap.to(crossIconRef.current, {
      rotation: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleHoverEnd = () => {
    // Show plus icon with rotation
    gsap.to(plusIconRef.current, {
      rotation: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });

    // Hide cross icon with rotation
    gsap.to(crossIconRef.current, {
      rotation: -90,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <button
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      className="inline-flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-100 transition-colors duration-300 group cursor-pointer"
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
      <span className="text-sm sm:text-base font-inter font-bold text-gray-900 uppercase tracking-wider">
        More Works
      </span>
    </button>
  );
};

export default WorksButton;