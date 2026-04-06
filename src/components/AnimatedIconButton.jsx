import { useRef } from 'react';
import gsap from 'gsap';

const AnimatedIconButton = ({ 
  text = 'Button', 
  bgColor = 'bg-gray-100',
  textColor = 'text-gray-900',
  hoverBgColor = 'hover:bg-gray-200',
  iconBgColor = 'bg-black',
  onClick = () => {},
  className = ''
}) => {
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
    <button
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      onClick={onClick}
      className={`inline-flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full ${bgColor} ${hoverBgColor} transition-colors duration-300 group cursor-pointer ${className}`}
    >
      <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full ${iconBgColor} flex items-center justify-center flex-shrink-0`}>
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

      <span className={`text-sm font-inter font-bold ${textColor} uppercase tracking-wider`}>
        {text}
      </span>
    </button>
  );
};

export default AnimatedIconButton;
