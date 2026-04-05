import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorldwideBaseCard() {
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
        delay: 0.3,
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
    <div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden h-[120px] flex items-end justify-between p-6 sm:p-8 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop)',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full flex justify-between items-end">
        <div className="text-white flex-1">
          <p className="text-sm sm:text-base font-medium leading-tight">Worldwide base<br />around the world</p>
        </div>
        <div className="text-white text-right">
          <div className="text-4xl sm:text-5xl font-bold leading-none">5+</div>
        </div>
      </div>
    </div>
  );
}
