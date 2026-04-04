import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function StatsCard() {
  const counterRef = useRef(null);
  const usersRef = useRef(null);

  useEffect(() => {
    // Counter animation for 25+
    const counter = { value: 0 };
    gsap.to(counter, {
      value: 25,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counter.value) + '+';
        }
      },
    });

    // Counter animation for 1200+
    const users = { value: 0 };
    gsap.to(users, {
      value: 1200,
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: () => {
        if (usersRef.current) {
          usersRef.current.textContent = Math.floor(users.value) + '+';
        }
      },
    });
  }, []);

  return (
    <div className="bg-white rounded-3xl w-84  p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Big Number */}
      <div className="mb-4">
        <h3
          ref={counterRef}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900"
        >
            0+ <span className="text-4xl text-gray-500">+</span>
        </h3>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 font-inter mb-6">Years of experience</p>

      {/* Divider */}
      <div className="h-px bg-gray-300 mb-6"></div>

      {/* Description */}
      <p className=" text-gray-600 font-inter mb-16 leading-relaxed">
        Explore how we transform ideas into extraordinary digital experiences.
      </p>

      {/* Avatar Row */}
      <div className="flex items-center mb-6">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-pink-400 border-2 border-white overflow-hidden"
            >
              <img
                src={`https://i.pravatar.cc/32?img=${i}`}
                alt={`User ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-lg text-gray-500 font-inter">
        <span ref={usersRef} className="font-semibold text-gray-700">
          0+
        </span>{' '}
        happy users review
      </div>
    </div>
  );
}
