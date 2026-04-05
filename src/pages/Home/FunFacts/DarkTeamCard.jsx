import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DarkTeamCard() {
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
        delay: 0.2,
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

  const projectImages = [
    new URL('/src/assets/image1.webp', import.meta.url).href,
    new URL('/src/assets/person1.jpg', import.meta.url).href,
    new URL('/src/assets/person2.png', import.meta.url).href,
  ];

  return (
    <div
      ref={cardRef}
      className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between h-full"
    >
      {/* Top section with stacked images */}
      <div className="mb-12">
        <div className="flex gap-3 mb-4">
          {projectImages.map((img, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-gray-700"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text section */}
      <div className='mt-10'>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Project Portfolio</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
        </p>
      </div>
    </div>
  );
}
