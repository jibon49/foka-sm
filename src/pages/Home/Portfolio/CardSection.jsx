import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioCard from './PortfolioCard';

gsap.registerPlugin(ScrollTrigger);

export default function CardSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const portfolioData = [
    {
      id: 1,
      title: 'ALDAN BRANDING',
      year: '2025',
      image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp',
      gridCol: 'col-span-1',
    },
    {
      id: 2,
      title: 'MODERN DESIGN',
      year: '2024',
      image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg',
      gridCol: 'col-span-1',
    },
    {
      id: 3,
      title: 'DIGITAL SOLUTIONS',
      year: '2025',
      image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp',
      gridCol: 'col-span-1 lg:col-span-2',
      height: 'h-80 lg:h-96',
    },
    {
      id: 4,
      title: 'CREATIVE VISION',
      year: '2024',
      image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp',
      gridCol: 'col-span-1',
    },
    {
      id: 5,
      title: 'INNOVATION HUB',
      year: '2025',
      image: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp',
      gridCol: 'col-span-1',
    },
  ];

  useEffect(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6">
          {portfolioData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${project.gridCol}`}
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
