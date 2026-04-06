import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LineMarquee = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    // Create GSAP animation
    const tl = gsap.to(lineRef.current, {
      x: -2500,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Generate ~150 lines with random properties
  const lines = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    height: Math.random() * 4 + 8, // 8-12px
    opacity: Math.random() * 0.3 + 0.5, // 0.5-0.8
  }));

  return (
    <div
      ref={containerRef}
      className="mt-20 w-full h-10 overflow-hidden relative"
    >
      <div
        ref={lineRef}
        className="flex gap-5"
        style={{
          width: 'max-content',
        }}
      >
        {lines.map((line) => (
          <div
            key={line.id}
            className="flex-shrink-0 bg-gray-900 rounded-full"
            style={{
              width: '2px',
              height: `${line.height}px`,
              opacity: line.opacity,
              transition: 'opacity 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LineMarquee;
