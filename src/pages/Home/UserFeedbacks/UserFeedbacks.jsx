import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserFeedbackCard from './UserFeedbackCard';
import person1 from '../../../assets/person1.jpg';
import person2 from '../../../assets/person2.png';

gsap.registerPlugin(ScrollTrigger);

export default function UserFeedbacks() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const testimonials = [
    {
      avatar: person1,
      name: 'Nicolas K. Ellington',
      role: 'IT Specialist',
      testimonial:
        'They helped us shape a digital experience that feels modern, polished, and genuinely easy to trust. The process stayed clear from start to.',
      footer: 'GREAT DESIGN SOLUTIONS',
      namePosition: 'top',
    },
    {
      avatar: person2,
      name: 'Felipe D. Hawthorne',
      role: 'IT Specialist',
      testimonial:
        'The team moved fast, communicated well, and delivered a result that improved both our brand presence and user engagement immediately.',
      footer: 'GREAT DESIGN SOLUTIONS',
      namePosition: 'bottom',
    },
    {
      avatar: person1,
      name: 'Julian T. Beaumont',
      role: 'IT Specialist',
      testimonial:
        'From strategy to visuals, everything felt intentional. The final interface is clean, confident, and built to support growth.',
      footer: 'GREAT DESIGN SOLUTIONS',
      namePosition: 'top',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || cardRefs.current.length === 0) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:mb-12">
          <div className="w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 sm:text-sm">
              USER FEEDBACKS
            </p>
            <div className="mt-4 h-px w-full bg-gray-300/80" />
          </div>

          <h2 className="max-w-5xl self-end text-3xl font-semibold leading-tight text-right text-gray-900 font-funnel sm:text-4xl lg:max-w-[760px] lg:text-5xl">
            Accelerating growth, and unlocking new potential{' '}
            <span className="inline-flex align-middle -mx-1.5 sm:-mx-2">
              <img
                src={person1}
                alt="Happy user avatar 1"
                className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
              />
              <img
                src={person2}
                alt="Happy user avatar 2"
                className="h-8 w-8 -ml-2 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
              />
              <img
                src={person1}
                alt="Happy user avatar 3"
                className="h-8 w-8 -ml-2 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
              />
            </span>
            {' '}
            ...
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="h-full"
            >
              <UserFeedbackCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}