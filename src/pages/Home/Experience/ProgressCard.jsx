import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProgressCard() {
  const cardRef = useRef(null);
  const items = useRef([]);
  const bars = useRef([]);

  const progressData = [
    { label: 'Solutions', value: 100, barColor: 'bg-gray-400' },
    { label: 'UI/UX', value: 90, barColor: 'bg-gray-900', highlight: true },
    { label: 'Explore', value: 72, barColor: 'bg-gray-100' },
  ];

  useEffect(() => {
    const animateProgress = () => {
      if (!cardRef.current) return;

      // Wait for next frame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        // Animate items entrance
        items.current.forEach((item, index) => {
          if (item) {
            gsap.fromTo(
              item,
              { opacity: 0, x: -20 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: cardRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none restart none',
                  once: true,
                },
              }
            );
          }
        });

        // Animate progress bars
        bars.current.forEach((bar, index) => {
          if (bar) {
            gsap.fromTo(
              bar,
              { width: '0%' },
              {
                width: `${progressData[index].value}%`,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: cardRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none restart none',
                  once: true,
                },
              }
            );
          }
        });

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
      });
    };

    // Delay to ensure component is fully mounted
    const timer = setTimeout(animateProgress, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-3xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Title */}
      <h3 className="text-sm font-inter text-gray-400 uppercase tracking-widest mb-8">
        Impressions
      </h3>

      {/* Progress Items */}
      <div className="-space-y-1">
        {progressData.map((item, index) => (
          <div key={index} ref={(el) => (items.current[index] = el)}>
            {/* Animated Progress Bar */}
            <div
              ref={(el) => (bars.current[index] = el)}
              className={`h-12 rounded-xl flex items-center px-4 ${item.barColor} transition-all duration-300`}
              style={{ width: '0%' }}
            >
              {/* Label and Value inside bar */}
              <label className={`text-sm font-semibold font-inter whitespace-nowrap ${
                item.highlight ? 'text-white' : 'text-gray-900'
              }`}>
                {item.label}
              </label>
              <span className={`text-sm font-bold font-inter ml-auto whitespace-nowrap ${
                item.highlight ? 'text-white' : 'text-gray-900'
              }`}>
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
