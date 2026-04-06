import React, { useRef, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import gsap from 'gsap';
import AnimatedIconButton from '../../../components/AnimatedIconButton';

// Accordion Item Component
const AccordionItem = ({ item, isActive, onToggle }) => {
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isActive) {
      // Expand animation
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    } else {
      // Collapse animation
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      });
    }
  }, [isActive]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-gray-50 rounded-xl transition-colors duration-300 text-left group border border-gray-200 font-funnel"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4 group-hover:text-gray-700 transition-colors">
          {item.question}
        </h3>
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full">
          {isActive ? (
            <FaMinus className="text-xs" />
          ) : (
            <FaPlus className="text-xs" />
          )}
        </div>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="bg-white px-5 py-5 border-l border-r border-b border-gray-200 font-funnel">
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.question}
                className="w-32 h-32 object-cover rounded-xl"
              />
            </div>

            {/* Text & Button */}
            <div className="flex-1">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {item.answer}
              </p>
              <AnimatedIconButton
                text="GET IN TOUCH"
                hoverBgColor="bg-white"
                bgColor="bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
