import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeading() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={headingRef}>
      <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
        FUN FACTS
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Funnel_Display'] text-gray-900 leading-tight">
        Consistently delivering impactful results through a perfect blend of design and functionality.
      </h2>
    </div>
  );
}
