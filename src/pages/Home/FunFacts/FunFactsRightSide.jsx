import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from './SectionHeading';
import RatingCard from './RatingCard';
import WorldwideBaseCard from './WorldwideBaseCard';
import image1 from '../../../assets/image1.webp';
import person1 from '../../../assets/person1.jpg';
import person2 from '../../../assets/person2.png';

gsap.registerPlugin(ScrollTrigger);

export default function FunFactsRightSide() {
  const statsCardRef = useRef(null);
  const collageCardRef = useRef(null);

  useEffect(() => {
    // Stats Card animation
    if (statsCardRef.current) {
      gsap.fromTo(
        statsCardRef.current,
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
            trigger: statsCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Collage Card animation
    if (collageCardRef.current) {
      gsap.fromTo(
        collageCardRef.current,
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
            trigger: collageCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Section Heading - Full Width */}
      <SectionHeading />

      {/* Cards Container - 2x2 Grid */}
      <div className='grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2'>
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* CARD 1 — Stats Card (Top Left) */}
          <div
            ref={statsCardRef}
            className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-4 sm:items-center min-h-[120px]"
          >
            {/* Left Content */}
            <div>
              <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed max-w-xs">
                Successful projects completed
              </p>
            </div>

            {/* Right Content */}
            <div className="text-left sm:text-right">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                2k
              </span>
              <span className="text-2xl lg:text-3xl text-gray-400 font-light ml-1 align-top">+</span>
            </div>
          </div>

          {/* CARD 2 — Dark Collage Card (Bottom Left) */}
          <div
            ref={collageCardRef}
            className="bg-black rounded-2xl p-5 sm:p-6 lg:p-8 relative overflow-hidden min-h-[320px] sm:min-h-[360px] lg:flex-1"
          >
            <div className="flex h-full flex-col gap-4">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:absolute lg:inset-x-6 lg:top-6 lg:grid-cols-none lg:block lg:h-[220px]">
                <div className="lg:absolute lg:top-10 lg:left-2 lg:rotate-[-10deg] hover:scale-105 transition-transform duration-300">
                  <img
                    src={image1}
                    alt="Project 1"
                    className="w-full aspect-[4/5] rounded-xl object-cover shadow-lg lg:w-32 lg:h-40"
                    style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
                  />
                </div>

                <div className="lg:absolute lg:top-4 lg:left-28 lg:rotate-[5deg] hover:scale-105 transition-transform duration-300">
                  <img
                    src={person1}
                    alt="Project 2"
                    className="w-full aspect-[4/5] rounded-xl object-cover shadow-lg lg:w-32 lg:h-40"
                    style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
                  />
                </div>

                <div className="lg:absolute lg:top-16 lg:left-52 lg:rotate-[12deg] hover:scale-105 transition-transform duration-300">
                  <img
                    src={person2}
                    alt="Project 3"
                    className="w-full aspect-[4/5] rounded-xl object-cover shadow-lg lg:w-32 lg:h-40"
                    style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-auto text-white text-sm sm:text-base leading-relaxed max-w-md lg:absolute lg:bottom-6 lg:left-6 lg:right-6">
                <p>
                  More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* CARD 3 — Rating Card (Top Right) */}
          <RatingCard />

          {/* CARD 4 — Worldwide Base Card (Bottom Right) */}
          <WorldwideBaseCard />
        </div>
      </div>

      {/* Extra bottom padding for scroll space */}
      <div className="h-8 sm:h-12 lg:h-16" />
    </div>
  );
}
