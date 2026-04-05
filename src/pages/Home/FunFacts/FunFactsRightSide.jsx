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
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* CARD 1 — Stats Card (Top Left) */}
          <div
            ref={statsCardRef}
            className="bg-white rounded-2xl p-4 sm:p-6 flex justify-between items-center h-30"
          >
            {/* Left Content */}
            <div>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Successful projects completed
              </p>
            </div>

            {/* Right Content */}
            <div className="text-right">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                2k
              </span>
              <span className="text-2xl lg:text-3xl text-gray-400 font-light ml-1">+</span>
            </div>
          </div>

          {/* CARD 2 — Dark Collage Card (Bottom Left) */}
          <div
            ref={collageCardRef}
            className="bg-black rounded-2xl p-6 sm:p-8 relative overflow-hidden flex-1"
          >
            {/* Image 1 */}
            <div
              className="absolute hover:scale-105 transition-transform duration-300"
              style={{
                top: '40px',
                left: '20px',
                transform: 'rotate(-10deg)',
              }}
            >
              <img
                src={image1}
                alt="Project 1"
                className="w-32 h-40 rounded-xl object-cover shadow-lg"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                }}
              />
            </div>

            {/* Image 2 */}
            <div
              className="absolute hover:scale-105 transition-transform duration-300"
              style={{
                top: '20px',
                left: '100px',
                transform: 'rotate(5deg)',
              }}
            >
              <img
                src={person1}
                alt="Project 2"
                className="w-32 h-40 rounded-xl object-cover shadow-lg"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                }}
              />
            </div>

            {/* Image 3 */}
            <div
              className="absolute hover:scale-105 transition-transform duration-300"
              style={{
                top: '60px',
                left: '180px',
                transform: 'rotate(12deg)',
              }}
            >
              <img
                src={person2}
                alt="Project 3"
                className="w-32 h-40 rounded-xl object-cover shadow-lg"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                }}
              />
            </div>

            {/* Text Content */}
            <div
              className="absolute bottom-6 left-6 right-6 text-white text-base leading-relaxed"
              style={{
                opacity: 0.9,
              }}
            >
              <p>
                More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
              </p>
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
      <div className="h-16" />
    </div>
  );
}
