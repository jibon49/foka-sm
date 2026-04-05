import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsCard() {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
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
          trigger: cardRef.current,
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
    <div ref={cardRef} className="flex flex-col gap-3 bg-white">
      <p className="text-gray-600 text-sm font-medium">Successful projects completed</p>
      <div className="flex items-baseline gap-2">
        <span className="text-6xl sm:text-7xl font-bold text-gray-900">2k</span>
        <span className="text-3xl text-gray-400 font-light">+</span>
      </div>
    </div>
  );
}
