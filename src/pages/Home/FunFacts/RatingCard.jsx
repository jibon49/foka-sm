import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedIconButton from '../../../components/AnimatedIconButton';

gsap.registerPlugin(ScrollTrigger);

export default function RatingCard() {
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
        delay: 0.1,
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
    <div ref={cardRef} className="flex flex-col p-4 gap-3 rounded-xl bg-white shadow-md">
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#FF8000] w-6 h-6"
            aria-label={`${index + 1} star`}
            defaultChecked={index === 4}
          />
        ))}
      </div>

      <div className="text-6xl sm:text-7xl font-semibold text-gray-900">4.9/5</div>
      <hr className='text-gray-300' />
      <p className="text-gray-600 text-lg leading-relaxed max-w-xs mb-8">
        We offer end-to-end creative solutions that make brands unforgettable.
      </p>
      <AnimatedIconButton
        text="Hire us now"
        bgColor='bg-white'
        hoverBgColor='bg-white'
      ></AnimatedIconButton>
    </div>
  );
}
